import { type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";
import { Store, School } from "lucide-react";
import { SekolahProblemIllustration, UmkmProblemIllustration } from "./ProblemIllustrations";

const caseColor: Record<string, string> = {
  "01": "var(--color-amber)",
  "02": "var(--color-accent-2)",
};

export default function Problems() {
  const { language } = useLanguage();

  const cases = language === "id"
    ? [
        {
          id: "01",
          tag: "Studi kasus · UMKM",
          title: "Jualan ramai di marketplace, tapi keuntungan tergerus potongan 10–15% tiap transaksi.",
          pain: "Kirim barang ke pelanggan, tapi platform motong komisi, biaya iklan, dan ongkos admin duluan — belum lagi kasir manual bikin omzet dan stok susah dipantau dari toko sendiri.",
          steps: [
            { key: "Input", title: "Kasir mencatat jualan di HP atau komputer", desc: "Transaksi dan stok tercatat saat itu juga" },
            { key: "Proses", title: "Sistem menyusun rekap dan mengurangi stok otomatis", desc: "Tidak perlu rekap ulang di buku" },
            { key: "Hasil", title: "Pemilik membuka ponsel: omzet, stok, dan kas terlihat", desc: "Dipantau realtime dari mana saja" },
          ],
          result: "Toko jualan langsung dari platform sendiri — potongan 10–15% yang biasa hilang ke marketplace sekarang jadi margin penuh milik toko, omzet dan stok tetap terpantau realtime.",
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
          title: "Sales are strong on the marketplace, but a 10-15% cut eats the profit on every transaction.",
          pain: "You ship the goods, but the platform takes its commission, ad fees, and admin costs first — on top of a manual register that makes revenue and stock hard to track.",
          steps: [
            { key: "Input", title: "The cashier records sales from a phone or computer", desc: "Transactions and stock are captured instantly" },
            { key: "Process", title: "The system builds the report and reduces stock automatically", desc: "No manual re-totalling" },
            { key: "Result", title: "The owner opens their phone: sales, stock, and cash are visible", desc: "Monitored in real time" },
          ],
          result: "The store sells directly from its own platform — the 10-15% cut that used to go to the marketplace stays as full margin, while revenue and stock remain visible in real time.",
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

        <div className="mt-16">
          {cases.map((item, caseIndex) => {
            const Icon = item.id === "01" ? Store : School;
            const reversed = caseIndex % 2 === 1;

            return (
              <article
                key={item.id}
                className={`relative overflow-hidden ${caseIndex > 0 ? "mt-16 border-t border-rule pt-16 sm:mt-20 sm:pt-20" : ""}`}
              >
                {/* Signature element: oversized ghost numeral anchoring each case */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-6 select-none font-mono text-[8rem] font-bold leading-none text-ink/[0.04] sm:text-[10rem] lg:text-[13rem] ${
                    reversed ? "right-0" : "left-0"
                  }`}
                >
                  {item.id}
                </span>

                <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-16">
                  {/* Meta column: icon, title, pain, result */}
                  <div className={`lg:col-span-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className="status-glow"
                        style={{ "--node-color": caseColor[item.id], "--icon-delay": `${caseIndex * 0.6}s` } as CSSProperties}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
                      </span>
                      <span className="badge-chip font-body font-medium normal-case tracking-normal text-ink">{item.tag}</span>
                    </div>

                    <h3 className="mt-5 text-balance font-body text-xl font-semibold leading-tight text-ink sm:text-2xl">
                      {item.title}
                    </h3>

                    {item.pain && (
                      <p className="mt-4 border-l-2 border-amber pl-4 font-body text-sm leading-6 text-ink-2">
                        {item.pain}
                      </p>
                    )}

                    <div className="mt-6 flex items-start gap-3 border-t border-rule pt-6">
                      <span className="mt-1 h-4 w-1 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
                      <p className="font-body text-sm font-medium leading-5 text-ink">{item.result}</p>
                    </div>
                  </div>

                  {/* Flow column: illustration + steps as a connected timeline */}
                  <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : "lg:order-2"} lg:self-center`}>
                    <div className="mb-8 w-full sm:mb-10">
                      {item.id === "01" ? (
                        <UmkmProblemIllustration />
                      ) : (
                        <SekolahProblemIllustration />
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
                      {item.steps.map((step, i) => {
                        const isLast = i === item.steps.length - 1;
                        return (
                          <div key={`${item.id}-${step.key}`} className="relative pl-6 sm:pl-0">
                            {/* vertical connector — mobile only */}
                            {!isLast && (
                              <span
                                aria-hidden="true"
                                className="absolute left-[4px] top-2 h-[calc(100%+1.5rem)] w-px bg-rule sm:hidden"
                              />
                            )}
                            {/* node + horizontal connector — sm and up */}
                            <div className="flex items-center">
                              <span
                                aria-hidden="true"
                                className={`absolute left-0 top-1 z-10 h-2.5 w-2.5 rounded-full sm:static sm:left-auto sm:top-auto sm:mr-2 ${
                                  isLast ? "pulse-dot bg-accent-2" : "border-2 border-accent bg-paper-2"
                                }`}
                              />
                              {!isLast && (
                                <span aria-hidden="true" className="hidden h-px flex-1 bg-rule sm:block" />
                              )}
                            </div>

                            <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:mt-4">
                              {step.key}
                            </span>
                            <p className="mt-1.5 font-body text-sm font-semibold leading-5 text-ink text-balance">{step.title}</p>
                            <p className="mt-1.5 font-body text-xs leading-5 text-ink-2">{step.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
