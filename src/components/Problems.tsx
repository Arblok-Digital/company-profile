import { type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";
import { Store, School } from "lucide-react";

const caseColor: Record<string, string> = {
  "01": "oklch(0.85 0.12 85)",
  "02": "oklch(0.75 0.13 165)",
};

export default function Problems() {
  const { language } = useLanguage();

  const cases = language === "id"
    ? [
        {
          id: "01",
          tag: "Studi kasus · UMKM",
          title: "Pemilik toko tidak bisa memantau penjualan kasir secara langsung.",
          pain: "Fee marketplace naik tiap transaksi, dan kasir manual menyebarkan pencatatan — pemilik baru tahu omzet setelah rekap akhir hari.",
          steps: [
            { key: "Input", title: "Kasir mencatat jualan di HP atau komputer", desc: "Transaksi dan stok tercatat saat itu juga" },
            { key: "Proses", title: "Sistem menyusun rekap dan mengurangi stok otomatis", desc: "Tidak perlu rekap ulang di buku" },
            { key: "Hasil", title: "Pemilik membuka ponsel: omzet, stok, dan kas terlihat", desc: "Dipantau realtime dari mana saja" },
          ],
          result: "Toko punya kasir sendiri tanpa fee per transaksi — omzet dan stok terpantau realtime dari ponsel pemilik.",
        },
        {
          id: "02",
          tag: "Studi kasus · Sekolah",
          title: "Tahun ajaran baru selalu berakhir antre pendaftaran dan SPP yang sulit dikendalikan.",
          pain: "Pendaftaran offline tiap tahun ajaran membuat orang tua antre dan data rawan hilang. SPP dicatat manual sehingga cashflow sekolah tidak bisa dipantau online.",
          steps: [
            { key: "Input", title: "Orang tua mendaftar online: mengisi formulir dan mengunggah berkas", desc: "Pendaftaran dari rumah" },
            { key: "Proses", title: "Berkas tersusun otomatis, status setiap tahap terlihat", desc: "Tidak ada data yang hilang" },
            { key: "Hasil", title: "Pembayaran SPP tercatat otomatis, kas sekolah terpantau", desc: "Cashflow terlihat realtime" },
          ],
          result: "Pendaftaran tanpa antre, data aman, dan cashflow sekolah dapat dipantau kapan saja dari mana saja.",
        },
      ]
    : [
        {
          id: "01",
          tag: "Case study · SME",
          title: "A store owner cannot monitor sales at the register in real time.",
          pain: "Marketplace fees rise with each transaction, and a manual register scatters the records — the owner only learns the figure after a re-count.",
          steps: [
            { key: "Input", title: "The cashier records sales from a phone or computer", desc: "Transactions and stock are captured instantly" },
            { key: "Process", title: "The system builds the report and reduces stock automatically", desc: "No manual re-totalling" },
            { key: "Result", title: "The owner opens their phone: sales, stock, and cash are visible", desc: "Monitored in real time" },
          ],
          result: "The store has its own register with no per-sale fee — revenue and stock are monitored in real time from the owner's phone.",
        },
        {
          id: "02",
          tag: "Case study · School",
          title: "Every new school year brings queues and payments that are hard to control.",
          pain: "Offline enrollment each school year makes parents queue and data easy to lose. School fees are recorded by hand, so cash flow cannot be monitored online.",
          steps: [
            { key: "Input", title: "Parents apply online — filling out the form and uploading documents", desc: "Enrollment from home" },
            { key: "Process", title: "Documents are organised automatically, each stage's status is visible", desc: "No data gets lost" },
            { key: "Result", title: "School fee payments are recorded automatically, the school's cash is monitored", desc: "Cash flow visible in real time" },
          ],
          result: "Enrollment without queues, secure records, and school cash flow monitored anytime from anywhere.",
        },
      ];

  return (
    <section id="problems" className="border-t border-rule bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
        <div className="grid items-end gap-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {language === "id" ? "Masalah yang dapat dibenahi" : "Problems we can improve"}
            </p>
            <h2 className="mt-4 text-balance font-body text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              {language === "id" ? "Mulai dari hambatan yang terjadi setiap hari." : "Start with the friction people face every day."}
            </h2>
          </div>
          <p className="font-body text-sm leading-6 text-ink-2 sm:text-base sm:leading-7 lg:col-span-5">
            {language === "id"
              ? "Dua studi kasus nyata, disusun sebagai alur: dari input harian sampai hasil yang terpantau."
              : "Two real case studies, laid out as a pipeline from daily input to a monitored result."}
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {cases.map((item, index) => (
            <article key={item.id} className="card card-hover grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-4 lg:max-w-md">
                <div className="flex items-center justify-between gap-x-3 gap-y-2">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="stat-number font-mono text-xs font-semibold text-accent">{item.id}</span>
                    <span className="badge-chip font-body font-medium normal-case tracking-normal text-ink">{item.tag}</span>
                  </div>
                  <span className="status-glow" style={{ "--node-color": caseColor[item.id], "--icon-delay": `${index * 0.6}s` } as CSSProperties}>
                    {item.id === "01" ? (
                      <Store className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
                    ) : (
                      <School className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
                    )}
                  </span>
                </div>

                <h3 className="mt-4 text-balance font-body text-lg font-semibold leading-6 text-ink sm:text-xl">{item.title}</h3>

                {item.pain && (
                  <p className="mt-4 border-l-2 border-amber pl-4 font-body text-sm leading-6 text-ink-2">
                    {item.pain}
                  </p>
                )}
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-3 sm:grid-cols-3">
                  {item.steps.map((step, index) => (
                    <div key={`${item.id}-${step.key}`} className="relative rounded-lg border border-rule bg-paper p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{step.key}</span>
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                            index === item.steps.length - 1 ? "pulse-dot bg-accent-2" : "bg-rule"
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-2.5 font-body text-sm font-semibold leading-5 text-ink text-balance">{step.title}</p>
                      <p className="mt-1.5 font-body text-xs leading-5 text-ink-2">{step.desc}</p>
                      {index < item.steps.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-1/2 rounded-md border border-rule bg-paper px-1 font-mono text-sm text-accent sm:block"
                        >
                          →
                        </span>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-3 border-t border-rule pt-5">
                  <span className="mt-1 h-4 w-1 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
                  <p className="font-body text-sm font-medium leading-5 text-ink">{item.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}