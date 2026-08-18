import React, { useRef, type CSSProperties } from "react";
import { useLanguage } from "../LanguageContext";
import { useInView } from "../hooks/useInView";
import { Store, School, Stamp, Globe, RefreshCw } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20mendiskusikan%20sistem%20untuk%20kebutuhan%20organisasi%20saya.";

const serviceIcons = [
  Store,
  School,
  Stamp,
  Globe,
  RefreshCw,
];

export default function Services() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionVisible = useInView(sectionRef, { threshold: 0.1 });

  const services = language === "id"
    ? [
{ title: "Penjualan dan persediaan", desc: "Toko online dan kasir sendiri untuk usaha — jualan tanpa fee marketplace yang terus naik.", items: ["Cetak struk & catat stok otomatis", "QR Order langsung dari meja", "Laporan keuangan otomatis tanpa Excel"] },
        { title: "Administrasi sekolah", desc: "Untuk pembayaran, data siswa, dan pekerjaan administrasi yang perlu dipantau oleh petugas terkait.", items: ["Pencatatan pembayaran", "Data siswa dan kelas", "Status administrasi"] },
        { title: "Pelayanan dan persetujuan", desc: "Untuk pengajuan surat, pemeriksaan dokumen, dan keputusan yang melewati beberapa petugas.", items: ["Formulir pengajuan", "Tahap pemeriksaan", "Riwayat keputusan"] },
        { title: "Website dan portal informasi", desc: "Untuk memperjelas layanan, menerima permintaan, atau menyediakan area informasi bagi pelanggan dan anggota.", items: ["Company profile", "Formulir dan katalog", "Portal yang dapat dipasang di ponsel"] },
        { title: "Pekerjaan berulang", desc: "Untuk tugas yang bisa dibantu aturan otomatis atau teknologi pintar setelah alurnya jelas.", items: ["Pengingat dan notifikasi", "Pembacaan data dokumen", "Pengelompokan permintaan"] },
      ]
    : [
{ title: "Sales and inventory", desc: "Your own online store and POS — sell without marketplace fees that keep rising.", items: ["Print receipts & auto stock tracking", "QR ordering straight from the table", "Automatic financial reports — no Excel"] },
        { title: "School administration", desc: "For payments, student data, and administrative work that relevant staff need to monitor.", items: ["Payment records", "Student and class data", "Administration status"] },
        { title: "Services and approvals", desc: "For requests, document reviews, and decisions that move through several staff members.", items: ["Request forms", "Review stages", "Decision history"] },
        { title: "Websites and information portals", desc: "For explaining services, receiving requests, or providing an information area for customers and members.", items: ["Company profile", "Forms and catalogues", "Installable mobile portal"] },
        { title: "Repeated work", desc: "For tasks that can use automatic rules or intelligent technology once the workflow is clear.", items: ["Reminders and notifications", "Document data extraction", "Request classification"] },
      ];

  return (
<section id="services" className="border-b border-rule bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{language === "id" ? "Solusi" : "Solutions"}</p>
          <h2 className="mt-4 text-balance font-body text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
            {language === "id" ? "Sistem disusun mengikuti pekerjaan penggunanya." : "Systems shaped around the work people do."}
          </h2>
          <p className="mt-5 max-w-2xl font-body text-sm leading-6 text-ink-2 sm:text-base sm:leading-7">
            {language === "id" ? "Berikut contoh kebutuhan yang dapat dibahas. Fitur akhirnya ditentukan dari alur dan prioritas setiap organisasi." : "These are examples of needs we can discuss. Final features are determined by each organization’s workflow and priorities."}
          </p>
        </div>

        <div ref={sectionRef} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.title} className={`card card-hover animate-fade-up p-6 ${sectionVisible ? "visible" : ""} ${index === services.length - 1 ? "md:col-span-2 lg:col-span-2" : ""}`} style={{ "--stagger-index": index } as React.CSSProperties}>
                <div className="flex items-center justify-between">
                  <span className="stat-number font-mono text-sm font-semibold text-accent">0{index + 1}</span>
                  <span className="status-glow" style={{ "--icon-delay": `${index * 0.3}s` } as CSSProperties}>
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-body text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 font-body text-sm leading-6 text-ink-2">{service.desc}</p>
                <ul className="mt-5 space-y-2 border-t border-rule pt-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm leading-5 text-ink-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="card mt-14 flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-body text-lg font-semibold text-ink">{language === "id" ? "Kebutuhan Anda belum ada di daftar?" : "Your need is not listed here?"}</h3>
            <p className="mt-2 max-w-xl font-body text-sm leading-6 text-ink-2">{language === "id" ? "Ceritakan pekerjaan yang ingin dirapikan. Kami akan membantu menilai apakah perangkat lunak memang menjadi jawaban yang tepat." : "Describe the work you want to improve. We will help assess whether software is the right answer."}</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gradient inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg px-5 py-3 font-body text-sm font-semibold">
            {language === "id" ? "Diskusikan kebutuhan" : "Discuss your needs"}
          </a>
        </div>
      </div>
    </section>
  );
}
