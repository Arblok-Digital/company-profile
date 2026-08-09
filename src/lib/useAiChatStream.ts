import { useCallback, useEffect, useRef, useState } from "react";
import type { ChatMessage } from "../types";

export type ChatProvider = "auto" | "gemini" | "nvidia";

export interface UseAiChatStreamOptions {
  initialMessages?: ChatMessage[];
  onModelChange?: (modelInfo: string) => void;
}

export interface SseHandlers {
  onToken: (token: string) => void;
  onError?: (message: string) => void;
  onModel?: (model: string) => void;
}

export const SSE_DONE = "[DONE]";

/**
 * Parses one SSE payload (the part after "data: ") into an Arblok event.
 * Events supported by the /api/chat endpoint (server.ts + api/chat.ts):
 *   data: {"token":"..."}   -> streamed text chunk
 *   data: {"error":"..."}   -> provider error sent inside the stream
 *   data: {"model":"..."}   -> active model info
 *   data: [DONE]            -> end-of-stream marker (handled by caller)
 */
export function handleSsePayload(payload: string, handlers: SseHandlers): void {
  const trimmed = payload.trim();
  if (!trimmed || trimmed === SSE_DONE) return;
  let json: any;
  try {
    json = JSON.parse(trimmed);
  } catch {
    return;
  }
  if (typeof json.token === "string") {
    handlers.onToken(json.token);
  } else if (json.error) {
    handlers.onError?.(String(json.error));
  } else if (json.model) {
    handlers.onModel?.(String(json.model));
  }
}

/** Ambil satu line `data: ...` dari buffer; konsumen harus memisah line dulu. */
export function handleSseLine(line: string, handlers: SseHandlers): void {
  const trimmed = line.trim();
  if (!trimmed || !trimmed.startsWith("data: ")) return;
  handleSsePayload(trimmed.slice(6), handlers);
}

export function shortModelInfo(modelUsed?: string, provider?: string): string {
  if (!modelUsed) return "gemini (Auto)";
  const short = modelUsed
    .replace("nvidia/", "")
    .replace("gemini-", "")
    .replace("meta/", "");
  let providerName = "Gemini";
  if (provider === "nvidia") providerName = "NVIDIA";
  else if (provider === "openrouter") providerName = "OpenRouter";
  return `${providerName} (${short})`;
}

export interface AiChatStream {
  messages: ChatMessage[];
  isLoading: boolean;
  errorMsg: string | null;
  modelInfo: string;
  sendMessage: (text: string, provider?: ChatProvider) => Promise<void>;
  stop: () => void;
  resetChat: (greeting?: ChatMessage[]) => void;
  clearError: () => void;
}

/**
 * Hook streaming chat bersama untuk /api/chat.
 * - Streaming SSE: `data: {"token":...}` + `data: [DONE]` (provider auto gemini -> nvidia -> openrouter).
 * - Fallback JSON { text, modelUsed, provider } untuk endpoint non-streaming (kompatibel mundur).
 * - AbortController untuk tombol stop + cleanup unmount.
 * - Auto-flush token agar React tidak menumpuk re-render per token.
 */
export function useAiChatStream(options: UseAiChatStreamOptions = {}): AiChatStream {
  const { initialMessages = [], onModelChange } = options;

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modelInfo, setModelInfo] = useState<string>("gemini (Auto)");

  const abortRef = useRef<AbortController | null>(null);
  const busyRef = useRef(false);
  const messagesRef = useRef<ChatMessage[]>(messages);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const setModel = useCallback(
    (info: string) => {
      setModelInfo(info);
      onModelChange?.(info);
    },
    [onModelChange],
  );

  /** Streaming body -> panggil handler per line; menyimpang dari reader secara chunk. */
  const readSseStream = useCallback(
    async (body: ReadableStream<Uint8Array>, sseHandlers: SseHandlers): Promise<void> => {
      const reader = body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let pending = "";

      const flush = () => {
        if (!pending) return;
        const chunk = pending;
        pending = "";
        sseHandlers.onToken(chunk);
      };

      // Auto-flush per ~16ms agar streaming terasa bertahap tanpa spam re-render per token.
      let flushTimer: ReturnType<typeof setTimeout> | null = null;
      const scheduleFlush = () => {
        if (flushTimer !== null) return;
        flushTimer = setTimeout(() => {
          flushTimer = null;
          flush();
        }, 16);
      };

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || !trimmed.startsWith("data: ")) continue;
            const payload = trimmed.slice(6);
            if (payload === SSE_DONE) continue;
            const handlers: SseHandlers = {
              onToken: (token) => {
                pending += token;
                scheduleFlush();
              },
              onError: (message) => setErrorMsg(message),
              onModel: (model) => setModel(model),
            };
            handleSsePayload(payload, handlers);
          }
        }
        if (flushTimer !== null) {
          clearTimeout(flushTimer);
          flushTimer = null;
        }
        flush();
      } finally {
        if (flushTimer !== null) clearTimeout(flushTimer);
      }
    },
    [setModel],
  );

  const sendMessage = useCallback(
    async (text: string, provider: ChatProvider = "auto") => {
      const content = text.trim();
      if (!content || busyRef.current) return;

      const userMsg: ChatMessage = { role: "user", content, timestamp: new Date() };
      const history: ChatMessage[] = [...messagesRef.current, userMsg].filter(
        (m) => m.content.trim().length > 0,
      );

      busyRef.current = true;
      setErrorMsg(null);
      setIsLoading(true);
      setMessages((prev) => [...prev, userMsg]);

      // Placeholder kosong yang akan di-streaming ke dalam.
      setMessages((prev) => [...prev, { role: "assistant", content: "", timestamp: new Date() }]);

      const controller = new AbortController();
      abortRef.current = controller;

      const appendTokens = (chunk: string) => {
        setMessages((prev) => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          if (updated[lastIdx]?.role !== "assistant") return prev;
          updated[lastIdx] = { ...updated[lastIdx], content: updated[lastIdx].content + chunk };
          return updated;
        });
      };

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map((m) => ({ role: m.role, content: m.content })),
            provider,
          }),
          signal: controller.signal,
        });

        if (!res.ok) {
          let detail = `Server error: ${res.status}`;
          try {
            const data = await res.json();
            if (data?.error) detail = String(data.error);
          } catch {
            const text = await res.text();
            if (text) detail = text.slice(0, 120);
          }
          throw new Error(detail);
        }

        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("text/event-stream") || contentType.includes("text/plain")) {
          await readSseStream(res.body!, { onToken: appendTokens });
        } else {
          // Endpoint non-streaming (JSON): kompatibilitas mundur.
          const data = await res.json();
          if (data?.error) throw new Error(String(data.error));
          if (data?.text) appendTokens(String(data.text));
          if (data?.modelUsed || data?.provider) {
            setModel(shortModelInfo(data.modelUsed, data.provider));
          }
        }
      } catch (err: any) {
        if (err?.name === "AbortError") {
          // Stop by tombol stop / unmount: placeholder kosong dibuang, teks sebagian dipertahankan.
          setMessages((prev) => {
            const updated = [...prev];
            const lastIdx = updated.length - 1;
            if (updated[lastIdx]?.role === "assistant" && updated[lastIdx].content === "") {
              updated.pop();
            }
            return updated;
          });
        } else {
          console.error("Chat error:", err);
          setErrorMsg(err instanceof Error ? err.message : "Gagal mengirim pesan. Silakan coba sesaat lagi.");
        }
      } finally {
        setIsLoading(false);
        busyRef.current = false;
        abortRef.current = null;
      }
    },
    [readSseStream, setModel],
  );

  const stop = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
  }, []);

  const resetChat = useCallback((greeting?: ChatMessage[]) => {
    abortRef.current?.abort();
    busyRef.current = false;
    setIsLoading(false);
    setErrorMsg(null);
    setMessages(greeting ? [...greeting] : []);
  }, []);

  const clearError = useCallback(() => setErrorMsg(null), []);

  return { messages, isLoading, errorMsg, modelInfo, sendMessage, stop, resetChat, clearError };
}