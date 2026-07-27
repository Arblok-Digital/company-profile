import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const treeLines = [
  { depth: 0, icon: "📦", label: "arblok/" },
  { depth: 1, icon: "├──", label: "packages/" },
  { depth: 2, icon: "│   ├──", label: "auth/" },
  { depth: 2, icon: "│   ├──", label: "database/" },
  { depth: 2, icon: "│   └──", label: "ui/" },
  { depth: 1, icon: "├──", label: "apps/" },
  { depth: 2, icon: "│   ├──", label: "kasirpro/" },
  { depth: 2, icon: "│   ├──", label: "e-warga/" },
  { depth: 2, icon: "│   ├──", label: "sekolahrapi/" },
  { depth: 2, icon: "│   └──", label: "sanajan-qr/" },
  { depth: 1, icon: "└──", label: "tooling/" },
  { depth: 2, icon: "    └──", label: "deploy/" },
];

export default function Hero() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const eyebrow =
    language === "id"
      ? "Kami bikin kasir, portal sekolah, & sistem kelurahan"
      : "We build POS, school portals, & village systems";

  const headline =
    language === "id"
      ? "Dari kasir warung sampai portal sekolah — semua dari satu fondasi kode"
      : "From warung POS to school portals — all on one shared codebase";

  const subtitle =
    language === "id"
      ? "Setiap fitur lahir dari obrolan dengan pemilik usaha, bukan dari meja meeting. Itulah kenapa barangnya dipakai."
      : "Every feature starts with a conversation with business owners — not a meeting-room whiteboard. That's why our stuff actually gets used.";

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 bg-paper overflow-hidden"
    >
      {/* Subtle background ornament */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/2 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text side */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
              {eyebrow}
            </span>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight mt-4">
              {headline}
            </h1>

            {/* Subtitle — immediately after headline, before CTAs (standard flow) */}
            <p className="font-body text-sm sm:text-base text-ink-2 mt-5 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* CTAs — Konsultasi AI gets border-2 + font-medium for visual hierarchy;
                 Lihat Portofolio drops to border-rule text-ink-2, same as secondary buttons elsewhere */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => navigate("/consultant")}
                className="font-body text-sm px-6 py-[11px] rounded border-2 border-accent text-accent font-medium hover:bg-accent hover:text-accent-ink transition-all"
              >
                {language === "id" ? "Konsultasi AI" : "Try AI Consultant"}
              </button>
              <button
                onClick={() => navigate("/#portfolio")}
                className="font-body text-sm px-6 py-3 rounded border border-rule text-ink-2 hover:text-accent hover:border-accent transition-all"
              >
                {language === "id" ? "Lihat Portofolio" : "View Portfolio"}
              </button>
            </div>
          </div>

          {/* Monorepo tree panel — right side on desktop, below text on mobile */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-paper-2 border border-rule rounded p-5 sm:p-6 overflow-x-auto">
              <div className="font-mono text-xs leading-6 text-ink whitespace-nowrap">
                {treeLines.map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-ink-2 w-16 sm:w-20 shrink-0">
                      {line.icon}
                    </span>
                    <span className={line.depth === 0 ? "text-ink font-medium" : "text-ink-2"}>
                      {line.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-rule flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                <span className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em]">
                  {language === "id" ? "Satu fondasi — semua produk" : "One codebase — every product"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}