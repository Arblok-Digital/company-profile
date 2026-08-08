import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20pencatatan%20atau%20alur%20kerja%20di%20organisasi%20saya.";

const workflowRows = [
  { id: "01", labelID: "Pencatatan", labelEN: "Records", outputID: "Data tersusun", outputEN: "Organized data", status: "ok" },
  { id: "02", labelID: "Pelayanan", labelEN: "Services", outputID: "Status terlihat", outputEN: "Visible status", status: "ok" },
  { id: "03", labelID: "Persetujuan", labelEN: "Approvals", outputID: "Riwayat tercatat", outputEN: "Recorded history", status: "pending" },
];

function useCountUp(target: number, start: boolean, delayMs = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let startTime = 0;
    const duration = 1200;

    const tick = (t: number) => {
      if (!startTime) startTime = t;
      const elapsed = t - startTime - delayMs;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, delayMs]);

  return value;
}

export default function Hero() {
  const { language } = useLanguage();
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setStarted(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  const transactions = useCountUp(21, started, 0);
  const activeFlows = useCountUp(4, started, 150);
  const scatteredData = useCountUp(0, started, 300);

  return (
    <section id="hero" className="relative overflow-hidden border-b border-rule bg-paper pb-16 pt-24 sm:pb-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-accent/15 via-accent/5 to-transparent blur-2xl" aria-hidden="true" />
      {/* Abstract data-flow illustration peeking out from behind the dashboard card */}
      <div
        className={`pointer-events-none absolute right-0 top-28 z-0 hidden aspect-[5/4] w-[64%] opacity-65 motion-safe:transition-all motion-safe:duration-500 lg:block ${
          started ? "translate-x-0 translate-y-0" : "translate-x-4 translate-y-4"
        } motion-reduce:opacity-65 motion-reduce:translate-x-0 motion-reduce:translate-y-0`}
        aria-hidden="true"
      >
        <svg className="h-full w-full" viewBox="0 0 600 480" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid plus markers */}
          <g className="text-rule">
            <path d="M 120 30 M 120 20 L 120 40 M 110 30 L 130 30" stroke="currentColor" strokeWidth="1" />
            <path d="M 580 30 M 580 20 L 580 40 M 570 30 L 590 30" stroke="currentColor" strokeWidth="1" />
            <path d="M 120 450 M 120 440 L 120 460 M 110 450 L 130 450" stroke="currentColor" strokeWidth="1" />
            <path d="M 580 450 M 580 440 L 580 460 M 570 450 L 590 450" stroke="currentColor" strokeWidth="1" />
          </g>

          {/* Scattered input nodes */}
          <circle cx="36" cy="64" r="4.5" fill="currentColor" className="text-rule" />
          <circle cx="60" cy="150" r="4.5" fill="currentColor" className="text-accent/50" />
          <circle cx="95" cy="240" r="4.5" fill="currentColor" className="text-accent/50" />
          <circle cx="50" cy="330" r="4.5" fill="currentColor" className="text-rule" />

          {/* Flow lines: scattered -> organized */}
          <path d="M 36 64 C 180 90, 220 160, 320 160" stroke="currentColor" strokeWidth="1.5" className="text-rule" />
          <path d="M 60 150 C 160 160, 200 200, 320 200" stroke="currentColor" strokeWidth="2" className="text-accent/30" />
          <path d="M 95 240 C 180 250, 200 240, 320 240" stroke="currentColor" strokeWidth="2" className="text-accent/30" />
          <path d="M 50 330 C 180 340, 220 280, 320 280" stroke="currentColor" strokeWidth="1.5" className="text-rule" />

          {/* Cross links */}
          <path d="M 120 100 C 200 130, 220 200, 320 200" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-rule" />
          <path d="M 100 190 C 180 210, 200 280, 320 280" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-rule" />

          {/* Pipeline spine */}
          <line x1="320" y1="130" x2="320" y2="310" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-rule" />

          {/* Organized output rows */}
          <g>
            <line x1="320" y1="160" x2="560" y2="160" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <rect x="560" y="155" width="22" height="10" rx="2" fill="currentColor" className="text-accent/20" stroke="currentColor" strokeWidth="1" />
            <circle cx="571" cy="160" r="2.5" fill="currentColor" className="text-accent" />

            <line x1="320" y1="200" x2="545" y2="200" stroke="currentColor" strokeWidth="2" className="text-accent-2" />
            <circle cx="545" cy="200" r="3.5" fill="currentColor" className="text-accent-2" />

            <line x1="320" y1="240" x2="575" y2="240" stroke="currentColor" strokeWidth="2" className="text-accent" />
            <rect x="575" y="235" width="22" height="10" rx="2" fill="currentColor" className="text-accent/20" stroke="currentColor" strokeWidth="1" />
            <circle cx="586" cy="240" r="2.5" fill="currentColor" className="text-accent" />

            <line x1="320" y1="280" x2="530" y2="280" stroke="currentColor" strokeWidth="2" className="text-rule" />
            <circle cx="530" cy="280" r="3.5" fill="currentColor" className="text-rule" />
          </g>

          {/* Server / system rack */}
          <g className="text-rule">
            <rect x="460" y="340" width="125" height="80" rx="8" stroke="currentColor" strokeWidth="1.5" className="fill-[var(--color-paper-2)]/60" />
            <rect x="470" y="352" width="105" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
            <circle cx="480" cy="360" r="2" fill="currentColor" className="text-accent-2 animate-pulse" />
            <line x1="495" y1="360" x2="555" y2="360" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="470" y="372" width="105" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
            <circle cx="480" cy="380" r="2" fill="currentColor" className="text-accent animate-pulse" />
            <line x1="495" y1="380" x2="535" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="470" y="392" width="105" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
            <circle cx="480" cy="400" r="2" fill="currentColor" className="text-accent-2 animate-pulse" />
            <line x1="495" y1="400" x2="550" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="badge-chip">
              <span className="pulse-live block h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
              {language === "id" ? "Studi kasus nyata · Tasikmalaya" : "Real case studies · Tasikmalaya"}
            </span>
            <h1 className="mt-5 text-balance font-body text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[2.6rem] lg:text-[2.75rem] xl:text-[3.2rem]">
              {language === "id"
                ? "Jualan tanpa fee marketplace di setiap transaksi."
                : "Sell without a marketplace fee on every transaction."}
            </h1>
            <p className="mt-5 max-w-lg font-body text-lg leading-7 text-ink-2 sm:leading-8">
              {language === "id"
                ? "Arblok Digital membangun toko online dan kasir sendiri — omzet dan stok terpantau dari HP, dan pekerjaannya tetap berjalan walau Anda sedang tidak melihat."
                : "Arblok Digital builds your own online store and register — sales and stock watched from your phone, and the work keeps running even when you are not looking."}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gradient inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-body text-sm font-semibold">
                {language === "id" ? "Konsultasi via WhatsApp" : "Consult via WhatsApp"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#portfolio" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-rule bg-paper px-5 py-2.5 font-body text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent">
                {language === "id" ? "Lihat sistem yang sudah dibuat" : "See systems we have built"}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {(language === "id"
                ? ["UMKM: jualan tanpa fee", "Sekolah: administrasi online", "Instansi: persetujuan"]
                : ["SMEs: sell without fees", "Schools: online admin", "Public: approvals"]
              ).map((item) => (
                <li key={item} className="badge-chip font-body font-medium normal-case tracking-normal text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7">
            <aside className="card relative z-10 flex h-full flex-col overflow-hidden" aria-label={language === "id" ? "Contoh alur sistem" : "Example system flow"}>
              <div className="flex items-center justify-between gap-4 border-b border-rule bg-paper-2 px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-rule" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rule" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
                  </span>
                  <span className="font-mono text-xs text-ink-2">{language === "id" ? "Contoh peta pekerjaan" : "Example work map"}</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Input → Process → Result</span>
              </div>
              <div className="flex flex-1 flex-col px-5 py-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: transactions, label: language === "id" ? "Transaksi hari ini" : "Today's records" },
                    { value: activeFlows, label: language === "id" ? "Alur aktif" : "Active flows" },
                    { value: scatteredData, label: language === "id" ? "Data tercecer" : "Scattered data" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-rule bg-paper-2 p-3">
                      <p className="stat-number font-body text-2xl font-bold text-accent">{s.value}</p>
                      <p className="mt-0.5 font-body text-[11px] leading-4 text-ink-2">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5">
                  {workflowRows.map((row, index) => (
                    <div
                      key={row.id}
                      className={`flex items-center gap-3 rounded-lg border border-rule bg-paper px-3.5 py-3 animate-fade-up ${started ? "visible" : ""}`}
                      style={{ transitionDelay: `${0.35 + index * 0.12}s` }}
                    >
                      <span className="stat-number font-mono text-xs font-semibold text-accent">0{row.id}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-body text-sm font-semibold text-ink">{language === "id" ? row.labelID : row.labelEN}</p>
                      </div>
                      <span className="h-6 w-px bg-rule" aria-hidden="true" />
                      <div className="flex items-center gap-2">
                        <span className="font-body text-xs font-medium text-ink-2">{language === "id" ? row.outputID : row.outputEN}</span>
                        <span
                          className={`pulse-dot h-1.5 w-1.5 shrink-0 rounded-full ${row.status === "ok" ? "bg-accent-2" : "bg-amber"}`}
                          style={{ animationDelay: `${1.4 + index * 0.45}s` }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto border-t border-rule bg-paper-2 px-5 py-4">
                <p className="flex items-start gap-2.5 font-body text-sm leading-6 text-ink-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {language === "id"
                    ? "Teknologi mengikuti alur kerja. Fitur dipilih setelah pengguna dan prioritasnya dipahami."
                    : "Technology follows the workflow. Features are selected after users and priorities are understood."}
                </p>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-rule pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-2">
            {language === "id" ? "Lanjutkan" : "Continue"}
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Hero links">
            {[
              { href: "#services", label: language === "id" ? "Solusi yang bisa dibahas" : "Solutions we can discuss" },
              { href: "#portfolio", label: language === "id" ? "Hasil yang sudah berjalan" : "Live results" },
              { href: "#faq", label: language === "id" ? "Biaya, timeline, garansi" : "Pricing, timeline, warranty" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm font-medium text-ink-2 transition-colors hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}