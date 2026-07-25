import React from "react";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const services = (language === "id" ? [
    {
      title: "Website & PWA",
      desc: "Landing page premium, company profile interaktif, atau PWA modern yang bisa diinstal langsung ke layar utama tanpa App Store.",
      items: ["Konversi tinggi & SEO-friendly", "PWA siap instalasi mobile", "Desain eksklusif, bukan template"],
    },
    {
      title: "Marketplace & Bisnis",
      desc: "E-commerce custom, sistem kasir (POS), atau portal multi-vendor dengan alur transaksi mulus.",
      items: ["Multi-vendor marketplace", "Manajemen transaksi & POS", "Payment gateway terintegrasi"],
    },
    {
      title: "Custom Software & Pipeline",
      desc: "Spesialisasi kami: menerjemahkan alur kerja operasional jadi kode terstruktur dengan pipeline otorisasi otomatis.",
      items: ["Pipeline persetujuan dinamis", "Tracking real-time", "PostgreSQL Row Level Security"],
    },
    {
      title: "AI & Otomatisasi",
      desc: "AI terapan langsung di server-side — klasifikasi dokumen, ekstraksi OCR, dan otomasi logika tanpa sewa server mahal.",
      items: ["Klasifikasi dokumen otonom", "Server-side AI proxy", "Notifikasi hemat biaya"],
    },
  ] : [
    {
      title: "Web & PWA",
      desc: "Premium landing pages, interactive company profiles, or modern PWAs installable on users' home screens.",
      items: ["High-conversion, SEO-optimized", "Mobile-ready PWA", "Bespoke UI/UX, zero templates"],
    },
    {
      title: "Marketplace & E-Commerce",
      desc: "Custom e-commerce, POS systems, or multi-vendor portals with seamless cart-to-checkout flow.",
      items: ["Multi-vendor marketplace", "POS & digital ledger", "Secure payment gateway"],
    },
    {
      title: "Custom Software",
      desc: "Our specialty: translating operational workflows into structured code with automated authorization pipelines.",
      items: ["Dynamic approval pipelines", "Real-time document tracing", "PostgreSQL RLS"],
    },
    {
      title: "AI & Automation",
      desc: "Applied AI on the server side — document classification, OCR extraction, and logic automation without expensive virtual servers.",
      items: ["Autonomous classification", "Server-side AI proxy", "Zero-cost notifications"],
    },
  ]);

  return (
    <section id="services" className="py-20 sm:py-28 bg-paper border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section head */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
            {language === "id" ? "Layanan" : "Services"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mt-3 tracking-tight">
            {language === "id"
              ? "Rekayasa Perangkat Lunak & Sistem Kustom"
              : "Software Engineering & Custom Systems"}
          </h2>
          <p className="font-body text-base text-ink-2 mt-4 leading-relaxed">
            {language === "id"
              ? "Bukan sekadar agensi web. Kami merancang logika bisnis dan pipeline workflow yang sepenuhnya disesuaikan dengan kebutuhan Anda."
              : "Not just a web agency. We engineer business logic and workflow pipelines fully tailored to your needs."}
          </p>
        </div>

        {/* Services — 2x2 grid, no card-in-card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((svc) => (
            <div key={svc.title} className="border-t border-rule pt-6">
              <h3 className="font-display text-xl text-ink">{svc.title}</h3>
              <p className="font-body text-sm text-ink-2 mt-2 leading-relaxed">{svc.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {svc.items.map((item) => (
                  <li key={item} className="font-body text-sm text-ink-2 flex items-start gap-2">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA — simple, no gradient */}
        <div className="mt-14 pt-10 border-t border-rule text-center">
          <p className="font-display text-lg text-ink">
            {language === "id"
              ? "Punya alur kerja spesifik?"
              : "Have a specific workflow in mind?"}
          </p>
          <p className="font-body text-sm text-ink-2 mt-2 max-w-md mx-auto">
            {language === "id"
              ? "Setiap bisnis unik. Kami bantu Anda merancang pipeline yang pas — dari logika transisi, validasi, hingga notifikasi otomatis."
              : "Every business is unique. Let us design the right pipeline — from transition logic to validation to automated notifications."}
          </p>
          <a
            href="https://wa.me/6289508053795"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-body text-sm px-5 py-2.5 rounded border border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors"
          >
            {language === "id" ? "Diskusikan Pipeline Anda" : "Discuss Your Pipeline"}
          </a>
        </div>
      </div>
    </section>
  );
}
