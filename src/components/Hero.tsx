import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

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
      ? "Kami bikin software yang dipakai beneran. Sistem yang sederhana, stabil, dan tumbuh bareng bisnis Anda."
      : "We build software people actually use. Simple, stable systems that grow with your business.";

  const stats = [
    { label: language === "id" ? "Tahun Berdiri" : "Years", value: "Since 2024" },
    { label: language === "id" ? "Produk Rilis" : "Live Products", value: "8+" },
  ];

  const ctaConsultant = language === "id" ? "Konsultasi AI" : "Try AI Consultant";
  const ctaPortfolio = language === "id" ? "Lihat Portofolio" : "View Portfolio";

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
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
            {eyebrow}
          </span>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-tight mt-4">
            {headline}
          </h1>

          {/* Subtitle */}
          <p className="font-body text-base sm:text-lg text-ink-2 mt-5 leading-relaxed max-w-xl">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate("/consultant")}
              className="font-body text-sm px-6 py-3 rounded bg-accent text-accent-ink hover:opacity-85 transition-opacity"
            >
              {ctaConsultant}
            </button>
            <button
              onClick={() => navigate("/#portfolio")}
              className="font-body text-sm px-6 py-3 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-all"
            >
              {ctaPortfolio}
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-12 sm:gap-16 mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-rule">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-xl sm:text-2xl text-ink">{stat.value}</div>
              <div className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}