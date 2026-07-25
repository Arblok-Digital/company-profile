import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, Sparkles, User, Cpu, AlertTriangle, ArrowRight } from "lucide-react";
import { ChatMessage } from "../types";

export default function AiConsultant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Halo! Saya adalah AI Consultant dari Arblok Digital. Apakah Anda memiliki rencana untuk membangun aplikasi web modern, sistem otomatisasi, atau ingin mengintegrasikan kecerdasan buatan (AI) ke dalam proses operasional bisnis atau dinas Anda? Tanyakan saja kepada saya, mari kita diskusikan solusi teknologi terbaik yang efisien dan hemat biaya!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [provider, setProvider] = useState<"auto" | "gemini" | "nvidia">("auto");
  const [activeModelInfo, setActiveModelInfo] = useState<string>("gemini (Auto)");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim(), timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    setErrorMsg(null);

    // Add empty assistant message that will be streamed into
    const assistantMsg: ChatMessage = { role: "assistant", content: "", timestamp: new Date() };
    setMessages((prev) => [...prev, assistantMsg]);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages.slice(1).filter(m => m.content), { role: "user", content: userMsg.content }],
          provider,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Server error: ${res.status} — ${err.slice(0, 100)}`);
      }

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let pendingContent = "";

      const flush = () => {
        if (pendingContent) {
          const chunk = pendingContent;
          pendingContent = "";
          setMessages((prev) => {
            const updated = [...prev];
            const last = { ...updated[updated.length - 1] };
            last.content += chunk;
            updated[updated.length - 1] = last;
            return updated;
          });
        }
      };

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
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            if (json.token) {
              pendingContent += json.token;
              // Schedule micro-flush after synchronous batch
              setTimeout(flush, 0);
            }
            if (json.error) {
              setErrorMsg(json.error);
              setIsLoading(false);
            }
            if (json.model) {
              setActiveModelInfo(json.model);
            }
          } catch { /* skip malformed */ }
        }
      }

      // Final flush
      flush();
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan");
      }
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const formatTime = (d: Date) => {
    try {
      return new Date(d).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
    } catch { return ""; }
  };

  const suggestionPrompts = [
    "Bisakah kamu menjelaskan tentang Arblok Digital?",
    "Berapa biaya pembuatan website?",
    "Apa itu Monorepo dan kenapa penting?",
  ];

  return (
    <section id="ai-consultant" className="py-20 sm:py-28 bg-paper border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.15em]">
            AI Consultant
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mt-3 tracking-tight flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-accent" />
            {messages.length === 1 ? "Ada yang bisa kami bantu?" : "Konsultasi AI"}
          </h2>
          <p className="font-body text-base text-ink-2 mt-4 leading-relaxed">
            Tanya apapun tentang pengembangan web, AI, otomatisasi, atau arsitektur software. 
            AI Consultant siap membantu Anda 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-paper-2 border border-rule rounded-sm p-5 space-y-4">
              <div className="flex items-center gap-2 text-sm text-ink">
                <Cpu className="w-4 h-4 text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em]">Model Aktif</span>
              </div>
              <p className="font-body text-xs text-ink-2">{activeModelInfo}</p>

              <div className="space-y-2">
                <p className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em]">
                  {messages.length === 1 ? "Coba tanyakan:" : "Pertanyaan baru:"}
                </p>
                <ul className="space-y-1.5">
                  {suggestionPrompts.map((p) => (
                    <li key={p}>
                      <button
                        onClick={() => { setInput(p); }}
                        className="text-left text-xs text-ink-2 hover:text-accent border border-rule hover:border-accent/50 px-3 py-2 rounded-sm transition-colors cursor-pointer w-full flex items-center justify-between group bg-transparent"
                        disabled={isLoading}
                      >
                        <span>{p}</span>
                        <ArrowRight className="w-3 h-3 text-ink-2 group-hover:text-accent shrink-0" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="lg:col-span-9 bg-paper-2 border border-rule rounded-sm flex flex-col h-[400px] sm:h-[600px] overflow-hidden">
            {/* Chat header */}
            <div className="px-5 py-3 border-b border-rule flex items-center justify-between bg-paper">
              <div className="flex items-center gap-2 text-sm text-ink">
                <div className="w-2 h-2 rounded-full bg-accent" />
                AI Consultant
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value as any)}
                  className="font-mono text-[10px] text-ink-2 bg-paper border border-rule rounded-sm px-2 py-1 cursor-pointer"
                >
                  <option value="auto">Auto</option>
                  <option value="gemini">Gemini</option>
                  <option value="nvidia">NVIDIA</option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-rule ${
                    msg.role === "user" ? "bg-accent text-accent-ink" : "bg-paper text-ink-2"
                  }`}>
                    {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <MessageSquare className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`max-w-[80%] ${msg.role === "user" ? "text-right" : ""}`}>
                    <div className={`font-body text-sm p-3 rounded-sm border ${
                      msg.role === "user"
                        ? "bg-accent text-accent-ink border-accent"
                        : "bg-paper text-ink border-rule"
                    }`}>
                      {msg.content || (idx === messages.length - 1 && isLoading ? (
                        <span className="animate-pulse text-ink-2">Mengetik...</span>
                      ) : "")}
                    </div>
                    {msg.content && (
                      <div className="font-mono text-[9px] text-ink-2 mt-1 px-1">
                        {formatTime(msg.timestamp)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Error */}
            {errorMsg && (
              <div className="mx-5 mb-2 p-3 border border-accent/50 rounded-sm bg-accent/5 text-xs text-ink flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                {errorMsg}
              </div>
            )}

            {/* Input */}
            <div className="px-5 py-3 border-t border-rule bg-paper">
              <div className="flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik pesan..."
                  rows={1}
                  className="flex-1 font-body text-sm text-ink bg-paper-2 border border-rule rounded-sm px-3 py-2 resize-none outline-none focus:border-accent transition-colors placeholder:text-ink-2/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-2 rounded-sm bg-accent text-accent-ink hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border-none"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
