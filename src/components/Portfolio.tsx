import React, { useState, useEffect, useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { PortfolioItem } from "../types";
import { useLanguage } from "../LanguageContext";
import { useInView } from "../hooks/useInView";

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("Semua");
  const gridRef = useRef<HTMLDivElement>(null);
  const gridVisible = useInView(gridRef, { threshold: 0.05 });

  useEffect(() => {
    setActiveFilter(language === "id" ? "Semua" : "All");
  }, [language]);

  const portfolioItems: PortfolioItem[] = language === "id" ? [
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "Dibangun untuk sekolah yang pendaftaran dan SPP-nya masih dicatat manual. Pendaftaran siswa jadi online tanpa antre, tunggakan terdeteksi otomatis, dan laporan keuangan bisa diperiksa dari HP — bahkan saat internet tidak stabil.",
      badge: "Fintech Edukasi",
      status: "Production-ready",
      techStack: ["Next.js", "PWA", "PostgreSQL", "Offline-first"],
      features: [
        "Pendaftaran siswa online + tracking pembayaran otomatis",
        "Manajemen SPP — tunggakan terdeteksi, laporan siap cetak",
        "Dashboard keuangan real-time untuk yayasan",
        "Offline-ready — input tanpa internet, auto-sync pas online",
      ],
      link: "https://sekolah-rapi.vercel.app/",
      image: "/portfolio/sekolah-rapi.jpg",
      imageLabel: "SekolahRapi dashboard preview",
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Dibangun untuk yayasan atau sekolah yang ingin semua data dalam satu tempat: CRM siswa, SPP & infak, payroll guru, dana BOS, jadwal akademik, aset, dan komunikasi orang tua — tetap berjalan tanpa internet untuk daerah dengan koneksi terbatas.",
      badge: "EduTech ERP",
      status: "Production-ready",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "RLS"],
      features: [
        "CRM siswa — biodata, wali, dokumen, histori",
        "SPP & infak otomatis — tagihan, tunggakan, laporan real-time",
        "Payroll guru & manajemen dana BOS terintegrasi",
        "Jadwal kelas, kalender akademik, komunikasi orang tua",
        "Inventaris aset, kelulusan alumni, radar kesehatan siswa",
        "Offline-first — input tanpa internet, auto-sync pas online",
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg",
      imageLabel: "SekolahPro dashboard preview",
    },
    {
      id: "sanajan-qr-order",
      title: "Sanajan QR Order",
      category: "Web Application",
      description: "Dibangun untuk warkop dan café yang ingin memangkas antrean kasir. Pelanggan scan QR meja, memesan dan membayar dari HP, order langsung terlihat di dapur — tanpa biaya server bulanan.",
      badge: "F&B Digitalisasi",
      status: "Production-ready",
      techStack: ["React 19", "Vite 6", "Supabase", "QRIS Payment", "Offline"],
      features: [
        "Scan QR meja → menu digital tanpa install app",
        "Kustomisasi kopi interaktif (size, milk, extra shot)",
        "Pembayaran QRIS instan — order ke dapur otomatis",
        "Loyalty stamp digital — gratis untuk pelanggan baru",
        "Admin dashboard real-time + antrean order",
        "Notifikasi WhatsApp tanpa biaya API gateway",
      ],
      link: "/portfolio/sanajan-qr-order.html",
      image: "/portfolio/sanajan-qr-order.png",
      imageLabel: "Sanajan QR dashboard preview",
    },
    {
      id: "onyx",
      title: "Onyx Terminal",
      category: "AI & Automation",
      description: "Dibangun untuk trader yang ingin memantau sentimen pasar, pergerakan on-chain, dan sinyal trading dalam satu dashboard yang bisa disusun sendiri.",
      badge: "Crypto Intelligence",
      status: "Production-ready",
      techStack: ["React", "Gemini AI", "Tailwind CSS", "Market WebSockets", "D3 Charts"],
      features: [
        "Deteksi pola grafik & tren harga bertenaga AI",
        "Analisis sentimen sosial media real-time",
        "Dashboard modular yang dapat disesuaikan",
        "Sistem alarm anomali volume perdagangan pasar",
      ],
      link: "https://onyx-terminal-v1.vercel.app/",
      image: "/portfolio/onyx.jpg",
      imageLabel: "Onyx Terminal dashboard preview",
    },
    {
      id: "solana-warung",
      title: "Solana Warung",
      category: "Web3 & Blockchain",
      description: "Dibangun untuk warung kelontong yang ingin memberi rewards kepada pelanggan setia: koin digital ditukar menjadi diskon atau merchandise, dengan transaksi mikro near-zero gas fee. Karya ini terpilih Top 100 Global dalam Google Solution Challenge.",
      badge: "Google Top 100 Global",
      status: "Top 100 — Google Solution Challenge",
      techStack: ["Solana", "React", "Anchor", "Web3.js"],
      features: [
        "Transaksi mikro Web3 dengan near-zero gas fee",
        "Kupon diskon digital on-chain via token",
        "Riwayat inventaris merchant terenkripsi & terdesentralisasi",
      ],
      link: "#",
      image: "/portfolio/solana-warung.jpg",
      imageLabel: "Solana Warung product preview",
      certificateUrl: "https://goo.gle/jvc-cert-verifier",
      credentialId: "JVC2605-N74Z-Y7DN",
    },
    {
      id: "e-warga",
      title: "E-Warga",
      category: "Web Application",
      description: "Dibangun untuk kelurahan yang pelayanan suratnya masih mengharuskan warga datang bolak-balik: data penduduk terpusat, pengajuan surat online dengan tahap persetujuan, notifikasi WhatsApp gratis, dan tetap berjalan di area dengan sinyal lemah.",
      badge: "GovTech",
      status: "Production-ready",
      techStack: ["React", "Supabase", "PWA", "Offline-first"],
      features: [
        "Data penduduk terpusat dengan RLS per RW/RT",
        "Pengajuan surat online dengan pipeline persetujuan",
        "Notifikasi WhatsApp gratis tanpa API gateway",
        "Dashboard statistik kependudukan real-time",
      ],
      link: "#",
      image: "/portfolio/e-warga.jpg",
      imageLabel: "E-Warga admin panel preview",
    },
    {
      id: "kasirpro-grosir",
      title: "KasirPro Grosiran",
      category: "Web Application",
      description: "Dibangun untuk toko grosir dan gudang yang melayani banyak transaksi dalam waktu singkat: kasir yang cepat, stok multi-gudang, tingkat harga berdasarkan kuantitas pembelian, dan laporan laba rugi instan.",
      badge: "SaaS Grosir",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Real-time Sync", "Analytics"],
      features: [
        "Transaksi grosir & eceran super cepat teruji beban tinggi",
        "Manajemen multi-gudang dan sinkronisasi stok otomatis",
        "Skema harga grosir bertingkat berdasarkan kuantitas beli",
        "Laporan neraca laba-rugi & performa sales secara instan",
      ],
      link: "https://kasirproid-app-grosiran.vercel.app/",
      image: "/portfolio/kasirpro-grosir.jpg",
      imageLabel: "KasirPro Grosiran dashboard preview",
    },
    {
      id: "kasirpro",
      title: "KasirPro F&B",
      category: "Web Application",
      description: "Dibangun untuk UMKM kuliner yang ingin mengganti catatan manual dengan kasir yang rapi: pencatatan instan, inventori bahan yang terpantau, struk ramah HP, dan analitik penjualan harian atau bulanan.",
      badge: "SaaS F&B",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Recharts Analytics", "Offline-first"],
      features: [
        "Pencatatan kasir instan dengan performa tinggi",
        "Laporan analitik penjualan harian & bulanan",
        "Manajemen inventori bahan baku real-time",
        "Cetak struk digital ramah mobile",
      ],
      link: "https://kasirpro-fnb-app.vercel.app/",
      image: "/portfolio/kasirpro.jpg",
      imageLabel: "KasirPro F&B dashboard preview",
    },
    {
      id: "coordination",
      title: "CoordinationApp",
      category: "Web Application",
      description: "Dibangun untuk organisasi lapangan dan tim yang berstruktur: tugas dibagi sesuai jabatan, progres dilaporkan dengan bukti foto, lalu diverifikasi pengawas — semua aktivitas terekam log.",
      badge: "Manajemen Tim",
      status: "Featured",
      techStack: ["React", "Supabase", "Hierarchical Auth", "Flowchart"],
      features: [
        "Pembagian tugas bertingkat sesuai jabatan organisasi",
        "Pelaporan progres dengan foto koordinasi lapangan",
        "Validasi laporan otomatis oleh pengawas",
        "Log aktivitas terenkripsi untuk keamanan informasi",
      ],
      image: "/portfolio/coordination.jpg",
      imageLabel: "CoordinationApp screenshot",
    },
  ] : [
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "Built for schools whose enrollment and fees are still tracked by hand. Registration moves online with no queue, overdue payments are flagged automatically, and financial reports are checked from a phone — even when the internet is unstable.",
      badge: "EduTech Fintech",
      status: "Production-ready",
      techStack: ["Next.js", "PWA", "PostgreSQL", "Offline-first"],
      features: [
        "Online registration + automated payment tracking",
        "Automated SPP with overdue detection & monthly reports",
        "Real-time financial dashboard for foundations",
        "Offline-ready — input transactions without internet",
      ],
      link: "https://sekolah-rapi.vercel.app/",
      image: "/portfolio/sekolah-rapi.jpg",
      imageLabel: "SekolahRapi dashboard preview",
    },
    {
      id: "sekolah-pro",
      title: "SekolahPro",
      category: "Web Application",
      description: "Built for foundations or schools that want every workflow in one place: student CRM, tuition & donations, teacher payroll, BOS funds, schedules, assets, and parent communication — still functional offline where internet is limited.",
      badge: "EduTech ERP",
      status: "Production-ready",
      techStack: ["Next.js", "Supabase", "PostgreSQL", "RLS"],
      features: [
        "Student CRM — bio, guardians, documents, history",
        "Auto tuition & donation billing — overdue detection, real-time reports",
        "Teacher payroll & BOS fund management integrated",
        "Class schedules, academic calendar, parent communication portal",
        "Asset inventory, alumni graduation, student health radar",
        "Offline-first — input without internet, auto-sync when online",
      ],
      link: "https://sekolah-pro.vercel.app/",
      image: "/portfolio/sekolah-pro.jpg",
      imageLabel: "SekolahPro dashboard preview",
    },
    {
      id: "sanajan-qr-order",
      title: "Sanajan QR Order",
      category: "Web Application",
      description: "Built for cafés and warungs that want to cut the counter queue. Customers scan a table QR, order and pay from their phone, and orders appear instantly in the kitchen — with zero monthly server costs.",
      badge: "F&B Digitalization",
      status: "Production-ready",
      techStack: ["React 19", "Vite 6", "Supabase", "QRIS Payment", "Offline"],
      features: [
        "Scan table QR → digital menu, no app install",
        "Interactive coffee customization (size, milk, extras)",
        "Instant QRIS payment → auto-routes to kitchen",
        "Digital loyalty stamps for new customers",
        "Admin dashboard: real-time menu + order queue",
        "WhatsApp notifications with zero API costs",
      ],
      link: "/portfolio/sanajan-qr-order.html",
      image: "/portfolio/sanajan-qr-order.png",
      imageLabel: "Sanajan QR dashboard",
    },
    {
      id: "onyx",
      title: "Onyx Terminal",
      category: "AI & Automation",
      description: "Built for traders who want market sentiment, on-chain moves, and trading signals in one dashboard they can rearrange themselves — including optional intelligence features.",
      badge: "Crypto Intelligence",
      status: "Production-ready",
      techStack: ["React", "Gemini AI", "Tailwind CSS", "WebSockets", "D3 Charts"],
      features: [
        "AI pattern detection for charts & price trends",
        "Real-time social media sentiment parsing",
        "Fully modular customizable dashboard",
        "Anomalous volume alerts & whale tracker",
      ],
      link: "https://onyx-terminal-v1.vercel.app/",
      image: "/portfolio/onyx.jpg",
      imageLabel: "Onyx Terminal dashboard",
    },
    {
      id: "solana-warung",
      title: "Solana Warung",
      category: "Web3 & Blockchain",
      description: "Built for small convenience shops that want to reward loyal customers: digital coins are exchanged for discounts or merchandise at the counter, with near-zero gas fee micro-transactions. Selected as Top 100 Global in Google Solution Challenge.",
      badge: "Google Top 100 Global",
      status: "Top 100 — Google Solution Challenge",
      techStack: ["Solana", "React", "Anchor", "Web3.js"],
      features: [
        "Web3 micro-transactions with near-zero gas fees",
        "On-chain digital discount coupons via tokens",
        "Encrypted, decentralized merchant inventory",
      ],
      link: "#",
      image: "/portfolio/solana-warung.jpg",
      imageLabel: "Solana Warung product preview",
      certificateUrl: "https://goo.gle/jvc-cert-verifier",
      credentialId: "JVC2605-N74Z-Y7DN",
    },
    {
      id: "e-warga",
      title: "E-Warga",
      category: "Web Application",
      description: "Built for district offices whose services still require citizens to come back and forth: centralized citizen data, online letter requests with approval stages, free WhatsApp notifications, and usable in areas with weak signals.",
      badge: "GovTech",
      status: "Production-ready",
      techStack: ["React", "Supabase", "PWA", "Offline-first"],
      features: [
        "Centralized citizen data with per-RW/RT RLS",
        "Online letter applications with approval pipeline",
        "Free WhatsApp notifications — no API gateway",
        "Real-time demographic statistics dashboard",
      ],
      link: "#",
      image: "/portfolio/e-warga.jpg",
      imageLabel: "E-Warga admin panel preview",
    },
    {
      id: "kasirpro-grosir",
      title: "KasirPro Wholesale",
      category: "Web Application",
      description: "Built for wholesale stores and warehouses that handle bursts of high-volume transactions: a register that stays fast, multi-warehouse stock, tiered pricing by purchase quantity, and instant profit-and-loss reports.",
      badge: "Wholesale SaaS",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Real-time Sync", "Analytics"],
      features: [
        "Ultra-fast wholesale register built for heavy loads",
        "Multi-warehouse management & real-time stock sync",
        "Tiered pricing by wholesale volume",
        "Instant profit/loss statements & sales charts",
      ],
      link: "https://kasirproid-app-grosiran.vercel.app/",
      image: "/portfolio/kasirpro-grosir.jpg",
      imageLabel: "KasirPro Wholesale dashboard",
    },
    {
      id: "kasirpro",
      title: "KasirPro F&B",
      category: "Web Application",
      description: "Built for food & beverage SMEs that want to replace manual ledgers with a clean register: instant checkout, tracked ingredient stock, mobile-friendly receipts, and daily or monthly sales analytics.",
      badge: "F&B SaaS",
      status: "Production-ready",
      techStack: ["React", "Express", "PostgreSQL", "Analytics", "Offline-first"],
      features: [
        "High-performance instant cash registering",
        "Daily/monthly sales metrics & analytics dashboard",
        "Real-time ingredient & stock level controls",
        "Mobile-responsive with offline PWA modes",
      ],
      link: "https://kasirpro-fnb-app.vercel.app/",
      image: "/portfolio/kasirpro.jpg",
      imageLabel: "KasirPro F&B dashboard",
    },
    {
      id: "coordination",
      title: "CoordinationApp",
      category: "Web Application",
      description: "Built for field organisations and ranked teams: tasks are split by role, progress is reported with photo evidence, reviewed by supervisors, with every activity logged.",
      badge: "Team Management",
      status: "Featured",
      techStack: ["React", "Supabase", "Hierarchical Auth", "Flowchart"],
      features: [
        "Bespoke task division by structural rank",
        "Progress validation with location-tracked photos",
        "Hierarchical review dashboard for managers",
        "Encrypted security logs for internal briefs",
      ],
      image: "/portfolio/coordination.jpg",
      imageLabel: "CoordinationApp screenshot",
    },
  ];

  const filters = language === "id"
    ? ["Semua", "Web Application", "AI & Automation", "Web3 & Blockchain"]
    : ["All", "Web Application", "AI & Automation", "Web3 & Blockchain"];

  const filteredItems = (activeFilter === "Semua" || activeFilter === "All")
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-paper border-t border-rule">
      <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-none lg:px-14 xl:px-20">
        {/* Section head */}
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs text-accent uppercase tracking-[0.14em]">
            {language === "id" ? "Bukti kerja" : "Work examples"}
          </span>
          <h2 className="font-body text-3xl sm:text-4xl text-ink leading-tight mt-4 tracking-[-0.025em] font-semibold text-balance">
            {language === "id" ? "Sistem yang dapat dilihat dan dicoba." : "Systems you can review and try."}
          </h2>
          <p className="font-body text-sm sm:text-base text-ink-2 mt-5 leading-6 sm:leading-7 max-w-2xl">
            {language === "id"
              ? "Setiap contoh berangkat dari pekerjaan tertentu—mulai dari pencatatan transaksi sampai persetujuan dokumen. Tautan demo tersedia pada produk yang dapat diakses publik."
              : "Each example starts with a specific task—from recording transactions to reviewing documents. Publicly accessible products include a demo link."}
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-body text-xs px-3 py-1.5 rounded transition-colors cursor-pointer border ${
                  activeFilter === filter
                    ? "bg-accent text-accent-ink border-accent"
                    : "bg-transparent text-ink-2 border-rule hover:border-ink-2"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">          {filteredItems.map((item) => (
            <article key={item.id} className={`card card-hover overflow-hidden rounded-xl ${gridVisible ? "visible" : ""}`}>
              {/* Image */}
              {item.image && (
                <div className="aspect-video w-full overflow-hidden bg-paper-2 border-b border-rule">
                  <img
                    src={item.image}
                    alt={item.imageLabel || `${item.title} preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-5 sm:p-6">
                {/* Badge + Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={`font-mono text-[10px] uppercase tracking-[0.1em] ${
                    item.badge.includes("Top 100") ? "text-amber font-medium" : "text-accent"
                  }`}>
                    {item.badge}
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.05em] ${
                    item.status.includes("Top 100")
                      ? "text-amber font-medium"
                      : item.status === "Production-ready"
                        ? "text-accent-2"
                        : "text-ink-2"
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-body text-xl font-semibold text-ink mb-3">{item.title}</h3>
                <p className="font-body text-sm text-ink-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {item.features.map((feat, i) => (
                    <li key={i} className="font-body text-sm text-ink-2 flex items-start gap-2">
                      <span className="text-accent shrink-0">—</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Certificate block — only for Solana Warung */}
                {item.certificateUrl && item.credentialId && (
                  <div className="mb-5 p-3 border border-rule rounded-sm bg-paper-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-accent shrink-0" />
                      <span className="font-body text-xs text-ink font-medium">
                        {language === "id" ? "Sertifikat" : "Certificate"}
                      </span>
                    </div>
                    <div className="font-mono text-[10px] text-ink-2">
                      ID: {item.credentialId}
                    </div>
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      {language === "id" ? "Verifikasi" : "Verify"}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}

                {/* Tech stack + Actions */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-rule">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] text-ink-2 bg-paper-2 px-2 py-0.5 rounded-sm border border-rule"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {item.link && item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-xs text-ink-2 hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                      {language === "id" ? "Kunjungi" : "Visit"}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
