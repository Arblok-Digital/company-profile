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
      ? "Untuk UMKM, sekolah, dan kelurahan yang ingin serba digital"
      : "For small businesses, schools, and village offices going digital";

  const headline =
    language === "id"
      ? "Dari kasir warung sampai portal sekolah — semua dari satu fondasi kode"
      : "From warung POS to school portals — all on one shared codebase";

  const subtitle =
    language === "id"
      ? [
          "Setiap fitur lahir dari obrolan dengan pengguna, bukan dari ruang meeting.",
          "Kami memahami cara kerja bisnis Anda terlebih dahulu, baru menulis kode.",
          "Karena sistem yang baik harus mengikuti cara kerja manusia — bukan memaksa manusia mengikuti software.",
          "Itulah mengapa produk Arblok benar-benar dipakai dalam operasional sehari-hari, bukan template instan yang akhirnya mangkrak.",
        ]
      : [
          "Every feature starts with a conversation — not a meeting room.",
          "We understand how your business works first, then write the code.",
          "Good systems follow how people work — not force people to follow software.",
          "That's why Arblok products are actually used in daily operations, not templates that end up abandoned.",
        ];

  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-paper overflow-hidden"
    >
      {/* Subtle background ornament */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/3 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/2 blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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

            {/* Subtitle — breathing room after headline */}
            <div className="font-body text-sm sm:text-base text-ink-2 mt-6 leading-relaxed max-w-2xl space-y-2">
              {subtitle.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* CTAs — spaced clearly from subtitle */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={() => navigate("/consultant")}
                className="font-body text-sm px-7 py-3.5 rounded border-2 border-accent text-accent font-medium hover:bg-accent hover:text-accent-ink transition-all"
              >
                {language === "id" ? "Konsultasi Gratis — 30 Menit" : "Free 30-min Consult"}
              </button>
              <button
                onClick={() => navigate("/#portfolio")}
                className="font-body text-sm px-6 py-3.5 rounded border border-rule text-ink-2 hover:text-accent hover:border-accent transition-all"
              >
                {language === "id" ? "Lihat Portofolio" : "View Portfolio"}
              </button>
            </div>

            {/* Checklist — visually separated from CTAs */}
            <div className="mt-10 pt-6 border-t border-rule/40">
              <ul className="space-y-2">
                {[
                  language === "id" ? "Tidak perlu mengubah cara kerja bisnis Anda" : "No need to change how your business runs",
                  language === "id" ? "Bisa mulai dari satu modul sesuai kebutuhan" : "Start with one module, scale as needed",
                  language === "id" ? "Didampingi setelah sistem berjalan" : "Ongoing support after launch",
                ].map((item, i) => (
                  <li key={i} className="font-body text-sm text-ink-2 flex items-start gap-2">
                    <span className="text-accent shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust badge — bigger, not a footnote */}
            <p className="font-mono text-xs sm:text-sm text-ink-2 mt-8 tracking-[0.05em]">
              9+ Produk Live · 4+ Tahun Membangun · Dari Tasikmalaya
            </p>
          </div>

          {/* Monorepo tree panel — right side on desktop, below text on mobile */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-paper-2 border border-rule rounded p-6 sm:p-7 overflow-x-auto">
              <div className="font-mono text-sm leading-7 text-ink whitespace-nowrap">
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
              <div className="mt-4 pt-4 border-t border-rule space-y-1">
                {[
                  language === "id" ? "9 Produk Live" : "9 Live Products",
                  language === "id" ? "Satu Fondasi Kode" : "One Codebase",
                  language === "id" ? "Update Lebih Cepat" : "Faster Updates",
                  language === "id" ? "Biaya Maintenance Lebih Ringan" : "Lower Maintenance Cost",
                ].map((line, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i === 0 && <span className="inline-block w-2 h-2 rounded-full bg-accent shrink-0" />}
                    <span
                      className={`font-mono text-xs sm:text-sm uppercase tracking-[0.1em] ${
                        i === 0 ? "text-accent font-medium" : "text-ink-2"
                      }`}
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
