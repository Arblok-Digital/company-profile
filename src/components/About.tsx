import { useRef, type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";
import { useInView } from "../hooks/useInView";
import { Ear, Crosshair, FlaskConical, LifeBuoy } from "lucide-react";

const stepIcons = [Ear, Crosshair, FlaskConical, LifeBuoy];
const stepIconColor = [
  "var(--color-amber)",
  "var(--color-accent)",
  "var(--color-accent-2)",
  "var(--color-coral)",
];

export default function About() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionVisible = useInView(sectionRef, { threshold: 0.1 });

  const steps = language === "id"
    ? [
        { title: "Pahami pekerjaan sehari-hari", desc: "Kami mendengar pengguna dan memetakan catatan, keputusan, serta perpindahan tugas yang sedang berjalan." },
        { title: "Pilih satu prioritas", desc: "Masalah yang paling menghambat dijadikan ruang lingkup awal agar pengerjaan tetap terukur." },
        { title: "Uji versi pertama", desc: "Pengguna mencoba alur utama lebih awal, lalu temuan mereka dipakai untuk memperbaiki sistem." },
        { title: "Jalankan dan dampingi", desc: "Setelah sistem dipakai, kami membantu penyesuaian dan perbaikan berdasarkan kebutuhan operasional." },
      ]
    : [
        { title: "Understand daily work", desc: "We listen to users and map the records, decisions, and handovers already happening." },
        { title: "Choose one priority", desc: "The biggest source of friction becomes the first scope so delivery stays measurable." },
        { title: "Test the first version", desc: "Users try the main flow early, and their findings guide system improvements." },
        { title: "Launch and support", desc: "Once the system is in use, we help adjust and improve it around operational needs." },
      ];

  return (
<section id="about" className="relative overflow-hidden border-b border-rule bg-paper-2 py-20 sm:py-28">
      <div ref={sectionRef} className={`mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20 animate-fade-up ${sectionVisible ? "visible" : ""}`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{language === "id" ? "Cara kerja" : "How we work"}</p>
            <h2 className="mt-4 text-balance font-body text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              {language === "id" ? "Kami mulai dari pekerjaan yang perlu dibenahi." : "We start with the work that needs improvement."}
            </h2>
            <p className="mt-5 font-body text-sm leading-6 text-ink-2 sm:text-base sm:leading-7">
              {language === "id" ? "Teknologi dipilih setelah masalah, pengguna, dan batas pekerjaan dipahami bersama." : "Technology is selected after the problem, users, and scope are understood together."}
            </p>
          </div>

          {/* Vertical timeline, bukan kartu 2x2: node ikon disambung garis vertikal.
              Orientasi sengaja beda dari RunsItself (horizontal) biar ritme halaman
              tidak monoton — tapi tetap satu bahasa visual (status-glow, stat-number).
              Tetap <ol>/<li> supaya urutan 4 langkah tetap semantik untuk crawler. */}
          <ol className="lg:col-span-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isLast = index === steps.length - 1;
              return (
                <li key={step.title} className={`relative flex gap-5 ${isLast ? "" : "pb-10"}`}>
                  {!isLast && (
                    <span
                      className="absolute left-[19px] top-11 w-px bg-rule"
                      style={{ height: "calc(100% - 2.75rem)" }}
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="status-glow relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rule bg-paper-2"
                    style={{ "--node-color": stepIconColor[index], "--icon-delay": `${index * 0.6}s` } as CSSProperties}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
                  </span>
                  <div className="flex-1 pb-1 pt-1.5">
                    <div className="flex items-baseline gap-3">
                      <span className="stat-number font-mono text-xs font-semibold text-accent">0{index + 1}</span>
                      <h3 className="font-body text-lg font-semibold text-ink">{step.title}</h3>
                    </div>
                    <p className="mt-2 max-w-xl font-body text-sm leading-6 text-ink-2">{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-12 grid gap-4 border-l-2 border-accent pl-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="max-w-3xl font-body text-sm leading-6 text-ink-2">
            {language === "id" ? "Hasil pembicaraan awal adalah gambaran alur, prioritas fitur, dan tahap pengerjaan—bukan daftar istilah teknis yang sulit diperiksa." : "The initial discussion produces a workflow outline, feature priorities, and delivery stages—not a list of technical terms that is hard to review."}
          </p>
<span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{language === "id" ? "Masalah → Ruang lingkup → Uji" : "Problem → Scope → Test"}</span>
        </div>

        <p className="mt-8 border-l-2 border-accent pl-5 font-body text-sm leading-6 text-ink-2 sm:text-base sm:leading-7">
          {language === "id"
            ? "Dikembangkan langsung oleh tim teknis profesional dari Tasikmalaya. Pendampingan setup sampai bisa, tanpa pusing urusan teknis."
            : "Built directly by a professional technical team from Tasikmalaya. Guided through setup until it works — no technical headaches."}
        </p>
      </div>
    </section>
  );
}
