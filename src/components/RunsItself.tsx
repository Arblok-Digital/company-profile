import { type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";

export default function RunsItself() {
  const { language } = useLanguage();

  const items = language === "id"
    ? [
        {
          key: "Rekap",
          title: "Rekap tersusun sendiri",
          desc: "Tiap transaksi kasir atau pembayaran SPP langsung tercatat — tidak menunggu dihitung ulang.",
        },
        {
          key: "Pengingat",
          title: "Tunggakan dan tugas diingatkan",
          desc: "Tunggakan SPP terdeteksi dan notifikasi WhatsApp jalan otomatis — seperti yang dipakai SekolahRapi dan E-Warga.",
        },
        {
          key: "Laporan",
          title: "Laporan siap saat diminta",
          desc: "Omzet, kas, dan stok menjadi ringkasan yang bisa diperiksa — tanpa proses manual menyusunnya.",
        },
      ]
    : [
        {
          key: "Reports",
          title: "Reports build themselves",
          desc: "Every cashier or school fee transaction is recorded instantly — nothing waits to be re-totalled.",
        },
        {
          key: "Reminders",
          title: "Overdue items and tasks get reminded",
          desc: "Overdue fees are detected and WhatsApp notifications run automatically — as used in SekolahRapi and E-Warga.",
        },
        {
          key: "Readiness",
          title: "Reports ready when asked",
          desc: "Revenue, cash, and stock become summaries that can be checked — without manual preparation.",
        },
      ];

  return (
    <section id="runs-itself" className="border-b border-rule bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
              {language === "id" ? "Berjalan sendiri" : "Runs itself"}
            </p>
            <h2 className="mt-4 text-balance font-body text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
              {language === "id" ? "Data mengalir, pemilik tidak perlu memeriksa ulang." : "Data flows, so owners do not have to re-check."}
            </h2>
            <p className="mt-5 font-body text-sm leading-6 text-ink-2 sm:text-base sm:leading-7">
              {language === "id"
                ? "Sistem bekerja walau pemilik sedang tidak melihat — karena data tidak boleh menunggu orang."
                : "The system keeps working while the owner is away — because data should not wait for someone to catch up."}
            </p>
          </div>

          {/* Flow, bukan kartu: nomor + garis + panah bergerak (arrow-flow) menyambung tiap langkah,
              reuse motif yang sudah ada di CSS (status-glow/.arrow-flow) — cocok literal dengan
              "Data mengalir" di headline. Tetap <ol>/<li> supaya urutan tetap semantik untuk crawler. */}
          <ol className="grid gap-10 sm:grid-cols-3 lg:col-span-8 lg:items-start">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={item.key} className="relative">
                  <div className="flex items-center">
                    <span className="stat-number font-mono text-sm font-semibold text-accent">0{index + 1}</span>
                    {!isLast && (
                      <span className="ml-3 flex flex-1 items-center gap-2" aria-hidden="true">
                        <span className="h-px flex-1 bg-rule" />
                        <span
                          className="status-glow"
                          style={{ "--node-color": "var(--color-accent-2)", "--icon-delay": `${index * 0.5}s` } as CSSProperties}
                        >
                          <span className="arrow-flow font-mono text-sm leading-none">{"\u2192"}</span>
                        </span>
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-body text-base font-semibold leading-6 text-ink">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-6 text-ink-2">{item.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
