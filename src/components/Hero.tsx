import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../LanguageContext";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20pencatatan%20atau%20alur%20kerja%20di%20organisasi%20saya.";

const CHECK = "\u2713";

interface ActivityItem {
  time: string;
  text: string;
}

interface SecondaryStat {
  value: string;
  label: string;
}

interface CycleDataset {
  client: string;
  target: number;
  buildLogs: string[];
  activity: ActivityItem[];
  secondary: SecondaryStat[];
}

const datasets: CycleDataset[] = [
  {
    client: "toko-berkah.id",
    target: 21,
    buildLogs: ["Provisioning storefront", "Syncing kasir & stok", "Sistem live"],
    activity: [
      { time: "10:42:03", text: "transaksi baru Rp 45.000" },
      { time: "10:41:58", text: "stok diperbarui" },
      { time: "10:41:41", text: "laporan tersinkron" },
    ],
    secondary: [
      { value: "4", label: "alur aktif" },
      { value: "0", label: "data tercecer" },
      { value: "2", label: "antrean" },
    ],
  },
  {
    client: "warung-sari.id",
    target: 21,
    buildLogs: ["Provisioning storefront", "Syncing kasir & stok", "Sistem live"],
    activity: [
      { time: "11:07:12", text: "pesanan online diterima" },
      { time: "11:06:58", text: "stok diturunkan" },
      { time: "11:06:40", text: "rekap penjualan terkirim" },
    ],
    secondary: [
      { value: "3", label: "alur aktif" },
      { value: "0", label: "data tercecer" },
      { value: "1", label: "antrean" },
    ],
  },
  {
    client: "sekolah-cendekia.id",
    target: 21,
    buildLogs: ["Provisioning storefront", "Syncing kasir & stok", "Sistem live"],
    activity: [
      { time: "09:23:44", text: "surat masuk diproses" },
      { time: "09:23:30", text: "persetujuan via HP" },
      { time: "09:23:05", text: "arsip tersinkron" },
    ],
    secondary: [
      { value: "5", label: "alur aktif" },
      { value: "0", label: "data tercecer" },
      { value: "3", label: "antrean" },
    ],
  },
];

// One full cycle: typing (1.5s) → checkmark logs (1s) → count-up (1s) →
// activity log (1.1s) → secondary stats (0.6s) → hold (1s)
const PHASE_TIMES = [1500, 1000, 1000, 1100, 600, 1000];
const CYCLE_MS = PHASE_TIMES.reduce((total, t) => total + t, 0);

export default function Hero() {
  const { language } = useLanguage();
  const [started, setStarted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [phase, setPhase] = useState(0);
  const [commandText, setCommandText] = useState("");
  const [checkmarkCount, setCheckmarkCount] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [activityCount, setActivityCount] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [dataset, setDataset] = useState<CycleDataset>(datasets[0]);

  const phaseRef = useRef(0);
  const dataIndexRef = useRef(0);
  const checkmarkRef = useRef(0);
  const resultRef = useRef(0);
  const activityRef = useRef(0);

  useEffect(() => {
    const id = window.setTimeout(() => setStarted(true), 250);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setIsReducedMotion(mediaQuery.matches);
    setIsReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!started || isReducedMotion) return;

    let animationFrame = 0;
    let startTime = 0;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const cyclePosition = elapsed % CYCLE_MS;

      let currentPhase = 0;
      let phaseElapsed = 0;
      let cumulative = 0;
      for (let i = 0; i < PHASE_TIMES.length; i++) {
        cumulative += PHASE_TIMES[i];
        if (cyclePosition < cumulative) {
          currentPhase = i;
          phaseElapsed = cyclePosition - (cumulative - PHASE_TIMES[i]);
          break;
        }
      }

      if (currentPhase !== phaseRef.current) {
        phaseRef.current = currentPhase;
        setPhase(currentPhase);

        if (currentPhase === 0) {
          // New cycle: pick the next client/dataset, reset everything
          dataIndexRef.current = (dataIndexRef.current + 1) % datasets.length;
          setDataset(datasets[dataIndexRef.current]);
          setCommandText("");
          checkmarkRef.current = 0;
          activityRef.current = 0;
          resultRef.current = 0;
          setCheckmarkCount(0);
          setActivityCount(0);
          setStatsVisible(false);
          setResultValue(0);
        } else if (currentPhase === 1) {
          checkmarkRef.current = 0;
          setCheckmarkCount(0);
        } else if (currentPhase === 2) {
          resultRef.current = 0;
          setResultValue(0);
        } else if (currentPhase === 3) {
          activityRef.current = 0;
          setActivityCount(0);
        } else if (currentPhase === 4) {
          setStatsVisible(true);
        }
      }

      const active = datasets[dataIndexRef.current];

      if (currentPhase === 0) {
        // Typing effect
        const command = `arblok deploy --client=${active.client}`;
        const progress = Math.min(phaseElapsed / PHASE_TIMES[0], 1);
        setCommandText(command.slice(0, Math.floor(progress * command.length)));
      } else if (currentPhase === 1) {
        // Checkmark logs appear staggered and stay
        const total = active.buildLogs.length;
        const count = Math.min(Math.floor(phaseElapsed / 250) + 1, total);
        if (count !== checkmarkRef.current) {
          checkmarkRef.current = count;
          setCheckmarkCount(count);
        }
      } else if (currentPhase === 2) {
        // Count-up 0 → target (fixed, non-zero)
        const progress = Math.min(phaseElapsed / PHASE_TIMES[2], 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(active.target * eased);
        if (value !== resultRef.current) {
          resultRef.current = value;
          setResultValue(value);
        }
      } else if (currentPhase === 3) {
        // Activity log rows appear staggered
        const total = active.activity.length;
        const count = Math.min(Math.floor(phaseElapsed / 300) + 1, total);
        if (count !== activityRef.current) {
          activityRef.current = count;
          setActivityCount(count);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, isReducedMotion]);

  const fullCommand = `arblok deploy --client=${dataset.client}`;

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

          <div className="relative flex flex-col justify-center gap-4 overflow-hidden lg:col-span-7">
            {/* Deploy Sequence Card — decorative animation demo, angka di dalamnya ilustratif (bukan klaim data klien), jadi disembunyikan dari accessibility tree & AI crawler */}
            <div className="card relative flex h-full flex-col overflow-hidden" aria-hidden="true">
              {/* Ambient terminal texture */}
              <div className="terminal-grid pointer-events-none absolute inset-0" aria-hidden="true" />
              <div className="terminal-scanlines pointer-events-none absolute inset-0" aria-hidden="true" />

              {/* Terminal Header */}
              <div className="relative z-10 flex items-center gap-2 border-b border-rule bg-paper-2 px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-1 w-1 rounded-full bg-red-500" aria-hidden="true" />
                  <span className="h-1 w-1 rounded-full bg-yellow-500" aria-hidden="true" />
                  <span className="h-1 w-1 rounded-full bg-green-500" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs text-ink-2">
                  {language === "id" ? "Urutan deploy" : "Deploy sequence"}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="relative z-10 flex flex-1 flex-col overflow-hidden px-4 py-4">
                {isReducedMotion ? (
                  /* Static complete state (prefers-reduced-motion) */
                  <div className="flex flex-1 flex-col">
                    <div className="font-mono text-xs text-ink-2 truncate sm:text-sm">
                      <span className="text-accent">$ </span>
                      {fullCommand}
                    </div>
                    <div className="mt-4 space-y-1.5">
                      {dataset.buildLogs.map((log) => (
                        <div key={log} className="font-mono text-xs text-ink-2 sm:text-sm">
                          <span className="text-accent-2">{CHECK}</span> {log}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:gap-5">
                      <div className="flex items-end gap-3 sm:gap-4">
                        <div className="relative">
                          <span className="font-mono text-5xl font-bold tabular-nums text-accent sm:text-6xl xl:text-7xl">{dataset.target}</span>
                          <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-accent-2" aria-hidden="true" />
                        </div>
                        <div className="pb-1.5">
                          <p className="font-mono text-xs text-ink-2">
                            {language === "id" ? "Transaksi hari ini" : "Today's transactions"}
                          </p>
                          <p className="font-mono text-[0.65rem] text-ink-2/60">{dataset.client}</p>
                        </div>
                      </div>
                      <div className="w-full space-y-1.5">
                        <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-2/50">
                          {language === "id" ? "Aktivitas langsung" : "Live activity"}
                        </p>
                        {dataset.activity.map((item) => (
                          <div key={item.time} className="font-mono text-[0.7rem] leading-relaxed text-ink-2/80">
                            <span className="text-ink-2/50">{item.time}</span>
                            <span className="text-accent-2/70">{"\u2192"}</span>
                            <span> {item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-5 sm:gap-7">
                        {dataset.secondary.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="font-mono text-lg font-semibold tabular-nums text-ink sm:text-xl">{stat.value}</div>
                            <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-2/60">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="font-mono text-[0.62rem] text-ink-2/60">
                        <span className="text-accent-2/80">{"\u25cf"}</span>{" "}
                        {language === "id" ? "sistem berjalan otomatis — tanpa pengawasan" : "system running unattended"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Command line */}
                    <div className="font-mono text-xs text-ink-2 truncate sm:text-sm">
                      <span className="text-accent">$ </span>
                      <span>{phase === 0 ? commandText : fullCommand}</span>
                      {phase === 0 && (
                        <span className="cursor-blink ml-0.5 inline-block h-3.5 w-[0.55em] translate-y-[0.2em] bg-accent-2" aria-hidden="true" />
                      )}
                    </div>

                    {/* Animated stage */}
                    <div className="relative mt-4 min-h-[13rem] flex-1">
                      {/* Checkmark build logs (phases 1-2, then collapse up at phase 3) */}
                      <div
                        className={`space-y-1.5 transition-all duration-500 ${
                          phase === 0
                            ? "max-h-24 opacity-0"
                            : phase >= 3
                              ? "max-h-0 overflow-hidden opacity-0"
                              : "max-h-24 opacity-100"
                        }`}
                        aria-hidden={phase < 1 || phase >= 3}
                      >
                        {dataset.buildLogs.map((log, index) => (
                          <div
                            key={log}
                            className={`font-mono text-xs text-ink-2 transition-all duration-300 sm:text-sm ${
                              index < checkmarkCount ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 90}ms` }}
                          >
                            <span className="text-accent-2">{CHECK}</span> {log}
                          </div>
                        ))}
                      </div>

                      {/* Dashboard (phase 2+): mounts only after the deploy command is typed, in normal flow so it can never overlap */}
                      {phase >= 2 && (
                        <div className="phase-fade-in flex w-full flex-1 flex-col items-center justify-center gap-4 sm:gap-5">
                          <div className="flex items-end gap-3 sm:gap-4">
                            <div className="relative">
                              <span className="font-mono text-5xl font-bold tabular-nums text-accent sm:text-6xl xl:text-7xl">{resultValue}</span>
                              <span className="absolute -right-2 -top-1 h-2 w-2 rounded-full bg-accent-2 animate-pulse" aria-hidden="true" />
                            </div>
                            <div className="pb-1.5">
                              <p className="font-mono text-xs text-ink-2">
                                {language === "id" ? "Transaksi hari ini" : "Today's transactions"}
                              </p>
                              <p className="font-mono text-[0.65rem] text-ink-2/60">{dataset.client}</p>
                            </div>
                          </div>

                          <div className="w-full space-y-1.5">
                            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink-2/50">
                              {language === "id" ? "Aktivitas langsung" : "Live activity"}
                            </p>
                            {dataset.activity.map((item, index) => (
                              <div
                                key={`${dataset.client}-${item.time}`}
                                className={`font-mono text-[0.7rem] leading-relaxed text-ink-2/80 transition-all duration-300 ${
                                  index < activityCount ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 70}ms` }}
                              >
                                <span className="text-ink-2/50">{item.time}</span>
                                <span className="text-accent-2/70">{"\u2192"}</span>
                                <span> {item.text}</span>
                              </div>
                            ))}
                          </div>

                          <div className={`flex items-center gap-5 transition-opacity duration-500 sm:gap-7 ${statsVisible ? "opacity-100" : "opacity-0"}`}>
                            {dataset.secondary.map((stat) => (
                              <div key={stat.label} className="text-center">
                                <div className="font-mono text-lg font-semibold tabular-nums text-ink sm:text-xl">{stat.value}</div>
                                <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-2/60">{stat.label}</div>
                              </div>
                            ))}
                          </div>

                          <p className="font-mono text-[0.62rem] text-ink-2/60">
                            <span className="text-accent-2/80">{"\u25cf"}</span>{" "}
                            {language === "id" ? "sistem berjalan otomatis — tanpa pengawasan" : "system running unattended"}
                          </p>
                        </div>
                      )}

                      {/* Typing progress hairline (phase 0) */}
                      {phase === 0 && (
                        <div className="absolute inset-x-0 bottom-0 h-px bg-rule" aria-hidden="true">
                          <div
                            className="h-full bg-accent-2/70 transition-[width] duration-150 ease-out"
                            style={{ width: fullCommand.length ? `${(commandText.length / fullCommand.length) * 100}%` : "0%" }}
                          />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
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
