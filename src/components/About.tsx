import React from "react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const content = {
    id: {
      badge: "Filosofi",
      heading: "Visi & Misi",
      subtitle:
        "Kami membangun produk digital berdasarkan masalah nyata yang kami temukan dari UMKM, sekolah, dan instansi publik — bukan dari tren teknologi terbaru.",
      vision: {
        title: "Visi",
        desc: "Digitalisasi nasional dimulai dari daerah. Kami bangun sistem sederhana yang bikin UMKM dan instansi naik kelas — tanpa modal besar.",
      },
      missions: [
        { label: "Produk Nyata", desc: "Bukan PowerPoint. Setiap baris kode yang kami tulis sudah dipakai di sekolah, kelurahan, dan warung sungguhan." },
        { label: "Efisiensi Operasional", desc: "Sederhanakan administrasi lewat sistem digital yang memang dirancang untuk pengguna non-teknis." },
        { label: "AI Itu Alat, Bukan Gimik", desc: "Integrasi AI hanya kalau benar-benar ngurangin pekerjaan manual, bukan sekadar tempel fitur biar keren." },
      ],
      banner: {
        label: "Arsitektur",
        title: "Monorepo (NPM Workspaces)",
        desc: "Setiap proyek dibangun di atas fondasi bersama. Semua logika transisi, validasi, dan model database diisolasi dalam modul khusus — siap diimpor oleh aplikasi baru tanpa duplikasi.",
        stat1: "8+",
        stat1Label: "Produk Live",
        stat2: "1",
        stat2Label: "Fondasi Kode",
      },
    },
    en: {
      badge: "Philosophy",
      heading: "Vision & Mission",
      subtitle:
        "We build digital products based on real problems we find from small businesses, schools, and village offices — not from the latest tech trends.",
      vision: {
        title: "Vision",
        desc: "National digital transformation starts from the grassroots. We build simple systems that help small businesses and institutions level up — without big budgets.",
      },
      missions: [
        { label: "Real Products", desc: "Not a slide deck. Every line we write is deployed in actual schools, village offices, and local shops." },
        { label: "Operational Simplicity", desc: "Streamline administration through digital systems designed for non-technical users." },
        { label: "AI Is a Tool, Not a Gimmick", desc: "We integrate AI only when it genuinely reduces manual work — not just to tack on a buzzword." },
      ],
      banner: {
        label: "Architecture",
        title: "Monorepo (NPM Workspaces)",
        desc: "Every project builds on a shared foundation. Pipeline transitions, validation, and database models are isolated in dedicated packages — ready for new apps to import without duplication.",
        stat1: "8+",
        stat1Label: "Live Products",
        stat2: "1",
        stat2Label: "Code Foundation",
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
            {cur.subtitle}
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

          {/* Missions with label */}
          <div>
            <h3 className="font-display text-xl text-ink mb-3">{language === "id" ? "Misi" : "Missions"}</h3>
            <div className="space-y-6">
            {cur.missions.map((m) => (
              <div key={m.label} className="border-l-2 border-rule pl-4">
                <div className="font-body font-medium text-sm text-ink">{m.label}</div>
                <p className="font-body text-sm text-ink-2 mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
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
            <div className="flex flex-col gap-4">
              <div className="border border-rule rounded p-4 text-center">
                <div className="font-display text-2xl text-accent">{cur.banner.stat1}</div>
                <div className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em] mt-1">
                  {cur.banner.stat1Label}
                </div>
              </div>
              <div className="border border-rule rounded p-4 text-center">
                <div className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.1em]">
                  {language === "id" ? "Semua produk dalam satu fondasi kode" : "Every product on one shared codebase"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
