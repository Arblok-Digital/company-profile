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
            <aside className="card flex h-full flex-col overflow-hidden" aria-label={language === "id" ? "Contoh alur sistem" : "Example system flow"}>
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