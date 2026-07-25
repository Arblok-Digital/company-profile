import React from "react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const content = {
    id: {
      badge: "Filosofi",
      heading: "Visi & Misi",
      subheading:
        "Menyatukan keandalan arsitektur monorepo dengan kepintaran AI untuk menghadirkan platform digital yang tangguh, efisien, dan siap bersaing.",
      vision: {
        title: "Visi",
        desc: "Menjadi motor penggerak digitalisasi nasional yang memberdayakan bisnis, UMKM, dan institusi melalui AI dan teknologi web modern — berawal dari Tasikmalaya.",
      },
      missions: [
        { label: "Perangkat Lunak Kokoh", desc: "Solusi industrial-grade dengan arsitektur monorepo yang scalable." },
        { label: "Efisiensi Birokrasi", desc: "Sederhanakan operasional dan administrasi lewat sistem digital yang ramah." },
        { label: "Integrasi AI Terapan", desc: "AI bukan gimmick — otomasi nyata yang menghemat waktu & biaya." },
      ],
      banner: {
        label: "Arsitektur",
        title: "Monorepo (NPM Workspaces)",
        desc: "Setiap proyek dibangun di atas fondasi bersama. Semua logika transisi, validasi, dan model database diisolasi dalam modul khusus — siap diimpor oleh aplikasi baru tanpa duplikasi.",
        stat1: "100%",
        stat1Label: "Kode Reusable",
        stat2: "Zero",
        stat2Label: "Duplikasi",
      },
    },
    en: {
      badge: "Philosophy",
      heading: "Vision & Mission",
      subheading:
        "Combining monorepo reliability with applied AI to build robust, efficient, future-ready digital platforms.",
      vision: {
        title: "Vision",
        desc: "To be the engine of digital transformation empowering businesses, SMBs, and local governments through AI and modern web technology — engineered from Tasikmalaya.",
      },
      missions: [
        { label: "Robust Engineering", desc: "Enterprise-grade software using clean monorepo architecture for seamless scaling." },
        { label: "Operational Simplicity", desc: "Streamline complex workflows via intuitive digital systems." },
        { label: "Applied AI", desc: "Not a gimmick — real AI automation that saves time and cuts costs." },
      ],
      banner: {
        label: "Architecture",
        title: "Monorepo (NPM Workspaces)",
        desc: "Every project builds on a shared foundation. Pipeline transitions, validation, and database models are isolated in dedicated packages — ready for new apps to import without duplication.",
        stat1: "100%",
        stat1Label: "Reusable Code",
        stat2: "Zero",
        stat2Label: "Duplication",
      },
    },
  };

  const cur = content[language];

  return (
    <section id="about" className="py-20 sm:py-28 bg-paper-2 border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section head */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
            {cur.badge}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mt-3 tracking-tight">
            {cur.heading}
          </h2>
          <p className="font-body text-base text-ink-2 mt-4 leading-relaxed max-w-xl">
            {cur.subheading}
          </p>
        </div>

        {/* Vision + Missions two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Vision */}
          <div>
            <h3 className="font-display text-xl text-ink mb-3">{cur.vision.title}</h3>
            <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
              {cur.vision.desc}
            </p>
          </div>

          {/* Missions */}
          <div className="space-y-6">
            {cur.missions.map((m) => (
              <div key={m.label} className="border-l-2 border-rule pl-4">
                <div className="font-body font-medium text-sm text-ink">{m.label}</div>
                <p className="font-body text-sm text-ink-2 mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner — full width, understated */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-rule">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <span className="font-mono text-xs text-accent uppercase tracking-[0.15em]">
                {cur.banner.label}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-ink mt-2 leading-tight">
                {cur.banner.title}
              </h3>
              <p className="font-body text-sm text-ink-2 mt-3 leading-relaxed max-w-lg">
                {cur.banner.desc}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-rule rounded p-4 text-center">
                <div className="font-display text-2xl text-accent">{cur.banner.stat1}</div>
                <div className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em] mt-1">
                  {cur.banner.stat1Label}
                </div>
              </div>
              <div className="border border-rule rounded p-4 text-center">
                <div className="font-display text-2xl text-ink">{cur.banner.stat2}</div>
                <div className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em] mt-1">
                  {cur.banner.stat2Label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
