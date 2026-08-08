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

          <div className="relative flex flex-col justify-center lg:col-span-7">
            {/* Abstract visual illustration behind/around the card */}
            <div
              className={`pointer-events-none absolute -inset-10 -z-10 hidden lg:block opacity-0 translate-y-4 motion-safe:transition-all motion-safe:duration-1000 ${
                started ? "opacity-35 translate-y-0" : "opacity-0 translate-y-4"
              } motion-reduce:opacity-35 motion-reduce:translate-y-0`}
              aria-hidden="true"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 600 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid plus markers */}
                <g className="text-rule">
                  <path d="M 120 40 M 120 30 L 120 50 M 110 40 L 130 40" stroke="currentColor" strokeWidth="1" />
                  <path d="M 480 40 M 480 30 L 480 50 M 470 40 L 490 40" stroke="currentColor" strokeWidth="1" />
                  <path d="M 120 440 M 120 430 L 120 450 M 110 440 L 130 440" stroke="currentColor" strokeWidth="1" />
                  <path d="M 480 440 M 480 430 L 480 450 M 470 440 L 490 440" stroke="currentColor" strokeWidth="1" />
                </g>

                {/* Left labels */}
                <text x="40" y="60" fill="currentColor" className="text-ink-2/40 font-mono text-[9px] tracking-widest uppercase">
                  {language === "id" ? "DATA TERCECER" : "UNORGANIZED DATA"}
                </text>

                {/* Right labels */}
                <text x="420" y="60" fill="currentColor" className="text-accent-2/60 font-mono text-[9px] tracking-widest uppercase">
                  {language === "id" ? "TERSTRUKTUR" : "STRUCTURED FLOW"}
                </text>

                {/* Flow lines (scattered to ordered) */}
                {/* Line 1: top scattered to top row */}
                <path
                  d="M 60 120 C 180 120, 220 160, 320 160"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-rule"
                />
                <circle cx="60" cy="120" r="4.5" fill="currentColor" className="text-rule" />

                {/* Line 2: middle scattered to second row */}
                <path
                  d="M 50 220 C 160 220, 200 200, 320 200"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent/30"
                />
                <circle cx="50" cy="220" r="4.5" fill="currentColor" className="text-accent/50" />

                {/* Line 3: lower middle to third row */}
                <path
                  d="M 80 320 C 180 320, 200 240, 320 240"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-accent/30"
                />
                <circle cx="80" cy="320" r="4.5" fill="currentColor" className="text-accent/50" />

                {/* Line 4: bottom scattered to fourth row */}
                <path
                  d="M 60 400 C 180 400, 220 280, 320 280"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-rule"
                />
                <circle cx="60" cy="400" r="4.5" fill="currentColor" className="text-rule" />

                {/* Additional connection links */}
                <path
                  d="M 120 120 C 200 120, 220 200, 320 200"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  className="text-rule"
                />
                <path
                  d="M 100 220 C 180 220, 200 280, 320 280"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  className="text-rule"
                />

                {/* Pipeline transition node boundary */}
                <line x1="320" y1="130" x2="320" y2="310" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-rule" />

                {/* Right side ordered pipeline */}
                <g>
                  {/* Row 1 */}
                  <line x1="320" y1="160" x2="520" y2="160" stroke="currentColor" strokeWidth="2" className="text-accent" />
                  <rect x="520" y="155" width="20" height="10" rx="2" fill="currentColor" className="text-accent/20" stroke="currentColor" strokeWidth="1" />
                  <circle cx="530" cy="160" r="2.5" fill="currentColor" className="text-accent" />

                  {/* Row 2 */}
                  <line x1="320" y1="200" x2="490" y2="200" stroke="currentColor" strokeWidth="2" className="text-accent-2" />
                  <circle cx="490" cy="200" r="3.5" fill="currentColor" className="text-accent-2" />

                  {/* Row 3 */}
                  <line x1="320" y1="240" x2="540" y2="240" stroke="currentColor" strokeWidth="2" className="text-accent" />
                  <rect x="540" y="235" width="20" height="10" rx="2" fill="currentColor" className="text-accent/20" stroke="currentColor" strokeWidth="1" />
                  <circle cx="550" cy="240" r="2.5" fill="currentColor" className="text-accent" />

                  {/* Row 4 */}
                  <line x1="320" y1="280" x2="470" y2="280" stroke="currentColor" strokeWidth="2" className="text-rule" />
                  <circle cx="470" cy="280" r="3.5" fill="currentColor" className="text-rule" />
                </g>

                {/* Database/Server visual symbol at the bottom right */}
                <g className="text-rule">
                  <rect x="420" y="340" width="140" height="80" rx="8" stroke="currentColor" strokeWidth="1.5" className="fill-[var(--color-paper-2)]/50" />
                  
                  {/* Server rack line 1 */}
                  <rect x="430" y="352" width="120" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
                  <circle cx="440" cy="360" r="2" fill="currentColor" className="text-accent-2 animate-pulse" />
                  <line x1="455" y1="360" x2="530" y2="360" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Server rack line 2 */}
                  <rect x="430" y="372" width="120" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
                  <circle cx="440" cy="380" r="2" fill="currentColor" className="text-accent animate-pulse" />
                  <line x1="455" y1="380" x2="510" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Server rack line 3 */}
                  <rect x="430" y="392" width="120" height="16" rx="3" stroke="currentColor" strokeWidth="1" className="fill-[var(--color-paper)]" />
                  <circle cx="440" cy="400" r="2" fill="currentColor" className="text-accent-2 animate-pulse" />
                  <line x1="455" y1="400" x2="525" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </g>
              </svg>
            </div>
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