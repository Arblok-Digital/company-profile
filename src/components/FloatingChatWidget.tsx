import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Square, X, AlertTriangle, RotateCcw } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { useAiChatStream } from "../lib/useAiChatStream";
import type { ChatMessage } from "../types";

export default function FloatingChatWidget() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const greetingRef = useRef<ChatMessage[]>([
    {
      role: "assistant",
      content:
        language === "id"
          ? "Halo! Saya asisten konsultasi Arblok Digital. Bisa bahas santai di sini: mau bikin sistem kasir, website, digitalisasi sekolah/kelurahan, atau merapikan alur kerja yang masih manual — ceritakan saja, nanti saya bantu cari solusi yang pas."
          : "Hello! I'm the Arblok Digital AI consultant. Let's talk: a POS system, a website, digitizing school/village services, or streamlining manual workflows — tell me what you need and I'll help find the right solution.",
      timestamp: new Date(),
    },
  ]);

  const chat = useAiChatStream({ initialMessages: greetingRef.current });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const t = {
    button: language === "id" ? "Tanya Arblok" : "Ask Arblok",
    subtitle:
      language === "id" ? "AI Consultant · jawaban instan" : "AI Consultant · instant answers",
    placeholder: language === "id" ? "Tulis pertanyaan Anda…" : "Type your question…",
    sendLabel: language === "id" ? "Kirim pesan" : "Send message",
    stopLabel: language === "id" ? "Hentikan jawaban" : "Stop reply",
    closeLabel: language === "id" ? "Tutup panel chat" : "Close chat panel",
    resetLabel: language === "id" ? "Mulai ulang percakapan" : "Restart conversation",
    errorPrefix: language === "id" ? "Terjadi kendala" : "Something went wrong",
    retry: language === "id" ? "Coba lagi" : "Retry",
    dismissError: language === "id" ? "Abaikan pesan error" : "Dismiss error",
    emptyHint:
      language === "id"
        ? "Cari tahu solusi digital untuk usaha, sekolah, atau instansi Anda"
        : "Explore digital solutions for your business, school, or institution",
  };

  const suggestions: { label: string; text: string }[] =
    language === "id"
      ? [
          { label: "Digitalisasi RT/RW", text: "Cara digitalisasi pengurusan surat warga di tingkat RT/RW agar gratis dan aman?" },
          { label: "Aplikasi kasir", text: "Saya ingin membuat aplikasi kasir F&B berbasis web modern, arsitektur seperti apa yang cocok?" },
          { label: "Budget terbatas", text: "Budget saya terbatas, apakah bisa dibuatkan website atau aplikasi sederhana? Fiturnya bagaimana?" },
          { label: "Sekolah / instansi", text: "Sekolah kami masih mencatat manual, sistem apa yang paling tepat?" },
        ]
      : [
          { label: "Digitize RT/RW", text: "How do we digitize village-level letter services at the RT/RW level for free and safely?" },
          { label: "POS app", text: "I want to build a modern web-based F&B POS app — what architecture fits best?" },
          { label: "Tight budget", text: "My budget is limited — can I still get a website or a simple app? What do you offer?" },
          { label: "School / agency", text: "Our school still keeps paper records — what is the right system?" },
        ];

  // Auto-scroll ke pesan terbaru.
  useEffect(() => {
    if (!isOpen) return;
    const el = messagesEndRef.current;
    if (el) el.scrollIntoView({ behavior: chat.isLoading ? "auto" : "smooth", block: "end" });
  }, [chat.messages, chat.isLoading, isOpen]);

  // Esc menutup panel; fokus ke input saat dibuka.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  // Kunci scroll body hanya saat bottom-sheet mobile terbuka.
  useEffect(() => {
    if (!isOpen) return;
    const mq = window.matchMedia("(max-width: 640px)");
    const prev = document.body.style.overflow;
    if (mq.matches) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || chat.isLoading) return;
    chat.sendMessage(trimmed);
    setInput("");
  };

  const lastMessage = chat.messages[chat.messages.length - 1];
  const streamingEmpty =
    chat.isLoading && lastMessage?.role === "assistant" && lastMessage.content === "";
  const showSuggestions = chat.messages.length <= 1 && !chat.isLoading;
  const recent = [...chat.messages].reverse().find((m) => m.role === "user");

  return (
    <>
      {/* Floating button — muncul di semua halaman SPA */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={t.button}
          aria-haspopup="dialog"
          aria-expanded={false}
          className="chat-pulse-ring fixed bottom-4 right-4 z-[999] flex h-13 cursor-pointer items-center gap-2.5 rounded-full bg-accent pl-4 pr-5 text-sm font-semibold text-accent-ink shadow-2xl shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:bottom-6 sm:right-6"
        >
          <span className="relative flex h-6 w-6 items-center justify-center">
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent-2 ring-2 ring-accent-ink" />
          </span>
          <span>{t.button}</span>
        </button>
      )}

      {/* Panel chat: mobile = bottom-sheet full-width; desktop = card 380px/70vh */}
      {isOpen && (
        <div
          id="arblok-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label={t.button}
          className="chat-pop fixed inset-0 z-[1000] flex flex-col border-rule bg-paper sm:inset-auto sm:bottom-6 sm:right-6 sm:h-[70vh] sm:max-h-[620px] sm:w-[380px] sm:rounded-2xl sm:border sm:shadow-2xl sm:shadow-black/50"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 border-b border-rule bg-paper px-4 pb-3 pt-[calc(env(safe-area-inset-top,0px)+0.75rem)] sm:pt-3">
            <div className="relative">
              <div className="rounded-lg bg-accent p-2 text-accent-ink">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-accent-2 ring-2 ring-paper" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold leading-tight text-ink">{t.button}</p>
              <p className="truncate font-mono text-[10px] text-ink-2">
                {t.subtitle} · {chat.modelInfo}
              </p>
            </div>
            <button
              type="button"
              onClick={() => chat.resetChat(greetingRef.current)}
              aria-label={t.resetLabel}
              title={t.resetLabel}
              className="shrink-0 cursor-pointer rounded-lg p-2 text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t.closeLabel}
              className="shrink-0 cursor-pointer rounded-lg p-2 text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Riwayat pesan */}
          <div className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-paper px-3 py-4 sm:px-4">
            {chat.messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 max-w-[90%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white ${
                    msg.role === "user" ? "bg-paper-2 text-ink-2" : "bg-accent text-accent-ink"
                  }`}
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <div
                  className={`break-words whitespace-pre-wrap rounded-xl border px-3 py-2 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-tr-none border-accent bg-accent text-accent-ink"
                      : "rounded-tl-none border-rule bg-paper-2 text-ink"
                  }`}
                >
                  {msg.content}
                  {msg.role === "assistant" && idx === chat.messages.length - 1 && streamingEmpty && (
                    <span className="inline-flex items-center gap-1 text-accent" aria-live="polite">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-2 [animation-delay:-0.3s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-2 [animation-delay:-0.15s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-2" />
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions — hanya saat percakapan masih kosong */}
          {showSuggestions && (
            <div className="shrink-0 px-3 pb-1 sm:px-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-ink-2">
                {t.emptyHint}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => send(s.text)}
                    className="cursor-pointer rounded-full border border-rule bg-paper-2 px-3 py-1.5 text-[11px] text-ink-2 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error banner */}
          {chat.errorMsg && (
            <div className="animate-fade-in mx-3 mt-2 flex shrink-0 items-start gap-2 rounded-xl border border-amber/30 bg-amber/10 p-2.5 sm:mx-4">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="break-words text-xs text-amber">
                  <span className="font-semibold">{t.errorPrefix}: </span>
                  {chat.errorMsg}
                </p>
                {recent && (
                  <button
                    type="button"
                    onClick={() => send(recent.content)}
                    className="mt-1 cursor-pointer text-xs font-medium text-amber underline hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                  >
                    {t.retry}
                  </button>
                )}
              </div>
              <button
                type="button"
                onClick={chat.clearError}
                aria-label={t.dismissError}
                className="shrink-0 cursor-pointer rounded-md p-1 text-amber transition-colors hover:bg-amber/10 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="shrink-0 border-t border-rule bg-paper px-3 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] pt-2 sm:px-4 sm:pb-3"
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                rows={1}
                placeholder={t.placeholder}
                aria-label={t.placeholder}
                className="max-h-28 flex-1 resize-none rounded-xl border border-rule bg-paper-2 px-3 py-2.5 text-sm text-ink transition-colors placeholder:text-ink-2/60 focus:border-accent focus:outline-none"
              />
              {chat.isLoading ? (
                <button
                  type="button"
                  onClick={chat.stop}
                  aria-label={t.stopLabel}
                  title={t.stopLabel}
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-amber text-accent-ink transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                >
                  <Square className="h-4 w-4 fill-current" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label={t.sendLabel}
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-accent text-accent-ink shadow-md shadow-black/25 transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}