import { useRef, type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";
import { useInView } from "../hooks/useInView";
import { Ear, Crosshair, FlaskConical, LifeBuoy } from "lucide-react";

const stepIcons = [Ear, Crosshair, FlaskConical, LifeBuoy];
const stepIconColor = [
  "oklch(0.85 0.12 85)",
  "oklch(0.64 0.16 262)",
  "oklch(0.75 0.13 165)",
  "oklch(0.68 0.16 45)",
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

<ol className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {steps.map((step, index) => (
              <li key={step.title} className="card card-hover p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="stat-number font-mono text-sm font-semibold text-accent">0{index + 1}</span>
                  <span className="status-glow" style={{ "--node-color": stepIconColor[index], "--icon-delay": `${index * 0.6}s` } as CSSProperties}>
                    {(() => {
                      const Icon = stepIcons[index];
                      return <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2} />;
                    })()}
                  </span>
                </div>
                <h3 className="mt-6 font-body text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 font-body text-sm leading-6 text-ink-2">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-4 border-l-2 border-accent pl-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="max-w-3xl font-body text-sm leading-6 text-ink-2">
            {language === "id" ? "Hasil pembicaraan awal adalah gambaran alur, prioritas fitur, dan tahap pengerjaan—bukan daftar istilah teknis yang sulit diperiksa." : "The initial discussion produces a workflow outline, feature priorities, and delivery stages—not a list of technical terms that is hard to review."}
          </p>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{language === "id" ? "Masalah → Ruang lingkup → Uji" : "Problem → Scope → Test"}</span>
        </div>
      </div>
    </section>
  );
}
