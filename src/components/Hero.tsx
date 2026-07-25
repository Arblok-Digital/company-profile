import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const subtitle =
    language === "id"
      ? "Studio rekayasa perangkat lunak dari Tasikmalaya. Kami merancang sistem digital yang kokoh, manusiawi, dan tumbuh bersama bisnis Anda."
      : "A software engineering studio from Tasikmalaya. We craft honest digital systems that grow with your business.";

  const stats = [
    { label: language === "id" ? "Tahun Berdiri" : "Years", value: "Since 2024" },
    { label: language === "id" ? "Produk Rilis" : "Products", value: "8+" },
    { label: language === "id" ? "Teknologi" : "Stack", value: "Monorepo" },
    { label: language === "id" ? "Pendekatan" : "Approach", value: "Offline-first" },
  ];

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
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
              {language === "id"
                ? "Studio Inovasi Web & AI"
                : "Web & AI Innovation Studio"}
            </span>
          </div>

          {/* Headline — serif, no gradient, solid ink */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.08] tracking-tight text-balance">
            {language === "id" ? (
              <>
                Akselerasi bisnis Anda
                <br />
                dengan kekuatan AI & sistem digital
              </>
            ) : (
              <>
                Accelerate your business
                <br />
                with the power of AI & digital systems
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 font-body text-base sm:text-lg text-ink-2 max-w-xl leading-relaxed">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => navigate("/consultant")}
              className="font-body font-medium text-sm px-6 py-3 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors cursor-pointer border-none bg-accent text-accent-ink"
            >
              {t("hero.cta_consultant")}
            </button>
            <button
              onClick={() => navigate("/#portfolio")}
              className="font-body text-sm px-6 py-3 rounded border border-rule text-ink-2 hover:border-ink-2 hover:text-ink transition-colors cursor-pointer bg-transparent"
            >
              {t("hero.cta_portfolio")}
            </button>
          </div>
        </div>

        {/* Stats row — simple, no icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-rule">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-xl sm:text-2xl text-ink">{stat.value}</div>
              <div className="font-mono text-[11px] text-ink-2 uppercase tracking-[0.1em] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
