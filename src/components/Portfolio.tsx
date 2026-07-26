import React, { useState, useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";
import { PortfolioItem } from "../types";
import { useLanguage } from "../LanguageContext";

export default function Portfolio() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  useEffect(() => {
    setActiveFilter(language === "id" ? "Semua" : "All");
  }, [language]);

  const portfolioItems: PortfolioItem[] = language === "id" ? [
    {
      id: "sekolah-rapi",
      title: "SekolahRapi",
      category: "Web Application",
      description: "Platform administrasi & keuangan sekolah paling praktis se-Indonesia. Pendaftaran siswa online tanpa antri, manajemen SPP otomatis, dan laporan keuangan real-time — semua dari HP, bahkan tanpa internet.",
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
      description: "Sistem Informasi Manajemen Sekolah (ERP) all-in-one — dari CRM siswa, SPP & infak otomatis, payroll guru, manajemen dana BOS, jadwal & kalender akademik, inventaris aset, komunikasi orang tua, hingga radar kesehatan dan kelulusan alumni. Offline-first, siap dipakai tanpa internet.",
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
      description: "Platform QR Table-Order & loyalty untuk warkop dan café. Scan QR meja, pesan via HP, bayar QRIS. Barista lihat order real-time tanpa biaya server.",
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
      description: "Platform intelijen pasar kripto berbasis AI untuk membantu trader menganalisis sentimen pasar, pergerakan on-chain, dan sinyal trading presisi.",
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
      description: "Platform rewards Web3 untuk UMKM. Pembeli dapat mengonversi koin digital menjadi diskon atau merchandise di warung kelontong favorit mereka — dengan transaksi near-zero gas fee.",
      badge: "Web3 UMKM",
      status: "Top 100 Global",
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
      description: "Sistem digitalisasi birokrasi kelurahan. Manajemen data penduduk, pengajuan surat RT/RW, dan notifikasi WhatsApp tanpa biaya API. Offline-ready untuk daerah dengan koneksi terbatas.",
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
      description: "Sistem Manajemen Kasir & Inventori skala grosir/gudang untuk optimasi transaksi rantai pasok dan volume tinggi. Solusi enterprise untuk efisiensi distribusi barang.",
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
      description: "Sistem Point of Sale (POS) modern berbasis cloud untuk akselerasi operasional bisnis kuliner dan UMKM. Integrasi menu digital dan cetak struk instan.",
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
      description: "Sistem koordinasi tugas berstruktur hierarki untuk organisasi, relawan kampanye, atau tim besar dengan pelaporan berbasis bukti foto.",
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
      description: "The most practical school admin & finance platform in Indonesia. Online enrollment, automated SPP tracking, and real-time reports — all from your phone, even offline.",
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
      description: "All-in-one School Management Information System (ERP) — student CRM, automated tuition & donation tracking, teacher payroll, BOS fund management, academic schedules & calendar, asset inventory, parent communication portal, health radar, and alumni graduation management. Offline-first, works without internet.",
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
      description: "Self-service QR Table-Order & loyalty for cafes. Scan table QR, order via phone, pay QRIS instantly. Barista gets real-time orders — zero server cost.",
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
      description: "AI-driven crypto market terminal for market sentiment, on-chain movements, and precision trading signals.",
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
      description: "Web3 rewards platform for small businesses. Buyers convert digital coins into discounts or merchandise at local warungs — with near-zero gas fees.",
      badge: "Web3 UMKM",
      status: "Top 100 Global",
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
      description: "Digital village bureaucracy management. Citizen data management, RT/RW letter applications, and WhatsApp notifications at zero API cost. Offline-ready for limited connectivity areas.",
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
      description: "Wholesale POS & inventory management engine for supply chains and high-volume transactions. Enterprise solution for massive stock distribution.",
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
      description: "Modern cloud-native F&B point of sale system for restaurants and retail. Built-in digital menus and mobile-ready receipt layouts.",
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
      description: "Hierarchical task coordination tool for large field organizations, campaign volunteers, or youth communities with photo-based work proofs.",
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
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section head */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-ink-2 uppercase tracking-[0.15em]">
            {language === "id" ? "Karya Kami" : "Our Work"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mt-3 tracking-tight">
            {language === "id" ? "Portofolio Produk" : "Featured Products"}
          </h2>
          <p className="font-body text-base text-ink-2 mt-4 leading-relaxed">
            {language === "id"
              ? "Platform dan sistem yang kami kembangkan untuk memecahkan masalah nyata."
              : "Platforms and systems we've built to solve real-world problems."}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="border border-rule rounded-sm overflow-hidden bg-paper">
              {/* Image */}
              {item.image && (
                <div className="aspect-video w-full overflow-hidden bg-paper-2 border-b border-rule">
                  <img
                    src={item.image}
                    alt={item.imageLabel || `${item.title} preview`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Badge + Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] text-accent uppercase tracking-[0.1em]">
                    {item.badge}
                  </span>
                  <span className="font-mono text-[10px] text-ink-2 uppercase tracking-[0.05em]">
                    {item.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-ink mb-3">{item.title}</h3>
                <p className="font-body text-sm text-ink-2 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {item.features.map((feat, i) => (
                    <li key={i} className="font-body text-sm text-ink-2 flex items-start gap-2">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-accent shrink-0" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
