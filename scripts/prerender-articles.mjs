#!/usr/bin/env node
/**
 * prerender-articles.mjs
 * Generates static HTML files for each article at public/articles/[slug].html
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can read these without JS.
 *
 * Run: node scripts/prerender-articles.mjs
 * Add to package.json: "prerender": "node scripts/prerender-articles.mjs"
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "articles");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const BASE_URL = "https://arblok-digital.vercel.app";

// ── Articles data (extracted from src/data/articles.ts) ──
// When adding new articles, update this array.
const articles = [
  {
    slug: "siasat-jitu-arblok-digital-akselerasi-bisnis-tanpa-boncos",
    title: "Siasat Jitu Arblok Digital: Akselerasi Bisnis & Birokrasi Tanpa Boncos!",
    excerpt: "Banyak agensi memasang tarif selangit dan menolak UMKM berbudget minim. Arblok Digital hadir mendobrak batasan itu dengan arsitektur Monorepo & Zero-Cost Serverless.",
    category: "Teknologi & Bisnis",
    publishedAt: "2026-07-10",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["Arblok Digital", "Monorepo", "Zero-Cost", "Marketing", "SaaS Lokal"],
    content: `Keresahan Nyata di Balik Lahirnya Arblok Digital

Banyak pejuang UMKM, pemilik toko kelontong, hingga aparatur desa yang sebenarnya ingin sekali menikmati kemudahan teknologi modern. Sayangnya, begitu mereka melihat penawaran harga dari agensi-agensi perangkat lunak konvensional—yang sering kali menembus puluhan hingga ratusan juta rupiah—nyali mereka langsung ciut.

Arblok Digital lahir dari keresahan nyata tersebut di Tasikmalaya. Dipimpin oleh Ardi, seorang Senior Full-Stack Developer & Software Architect, kami percaya bahwa teknologi kelas dunia tidak harus dibayar dengan harga yang membuat kantong bolong.

Siasat 1: Hemat Biaya dengan Arsitektur Zero-Cost Serverless

PostgreSQL dengan Row Level Security (RLS): Kami menghubungkan aplikasi frontend langsung ke cloud database terkelola secara aman. Biaya operasional bulanan pun sukses dipangkas menjadi Rp 0,-.

Frontend Kompresi Ultra-Efisien: Kami menerapkan kompresi otomatis di sisi browser hingga berukuran di bawah 150KB sebelum dikirim ke cloud storage.

Notifikasi WhatsApp Tanpa Biaya API: Kami memanfaatkan deep link WhatsApp click-to-chat yang memicu pengiriman pesan otomatis berformat dinamis dari perangkat Anda sendiri.

Siasat 2: Skalabilitas Tanpa Duplikasi Melalui Monorepo

Semua logika utama diisolasi ke dalam paket bersama (shared packages). Ketika bisnis berkembang, kami tinggal mengimpor logika bisnis yang sudah ada. Ini memangkas waktu pengembangan hingga 70%.

Komitmen Emas Kami: Tidak Ada Budget yang Terlalu Kecil!

Apakah budget Anda di bawah 1 juta rupiah? Jangan ragu dan jangan malu! Di Arblok Digital, pintu kami selalu terbuka lebar untuk berdiskusi.`,
    faq: [
      { q: "Mengapa Arblok Digital sangat fleksibel soal budget pengembangan?", a: "Karena kami menerapkan filosofi inklusivitas digital untuk UMKM dan birokrasi lokal. Dengan memanfaatkan arsitektur Monorepo dan teknologi Zero-Cost Serverless, kami bisa menekan biaya hingga Rp 0,-." },
      { q: "Bagaimana cara kerja sistem notifikasi gratis tanpa biaya API WhatsApp?", a: "Aplikasi kami menggunakan integrasi WhatsApp Click-to-Chat Deep Links (wa.me) yang dinamis. Hasilnya notifikasi terkirim instan dan 100% gratis." },
      { q: "Apakah sistem dengan budget minim tetap aman?", a: "Tentu saja! Keamanan kami dilindungi oleh PostgreSQL Row Level Security (RLS) di sisi database terkelola." },
    ],
  },
  {
    slug: "panduan-digitalisasi-umkm-zero-cost-serverless",
    title: "Mengapa UMKM Harus Go-Digital: Panduan Zero-Cost Serverless Terapan",
    excerpt: "Banyak pemilik UMKM takut Go-Digital karena biaya server bulanan yang mahal. Temukan bagaimana arsitektur Zero-Cost Serverless memotong biaya operasional menjadi Rp 0,-.",
    category: "Digitalisasi UMKM",
    publishedAt: "2026-07-08",
    author: { name: "Ardi", role: "Lead Software Architect @ Arblok Digital" },
    tags: ["Digitalisasi UMKM", "Serverless", "Supabase", "Zero-Cost"],
    content: `Pentingnya Digitalisasi untuk Keberlanjutan UMKM

Di era digital, kecepatan pelayanan dan efisiensi operasional adalah kunci utama untuk bertahan. Banyak pelaku UMKM masih mengandalkan pencatatan manual. Kendala utama yang sering dikeluhkan adalah biaya langganan perangkat lunak atau biaya sewa server bulanan.

Solusi Modern: Arsitektur Zero-Cost Serverless

1. Database Terdesentralisasi dengan Row Level Security (RLS): Aplikasi web modern dapat langsung terhubung ke database cloud menggunakan client-side SDK. Keamanan diproteksi oleh PostgreSQL RLS.

2. Optimalisasi Penyimpanan Berkas: Dengan mengompres gambar di sisi frontend hingga di bawah 150KB, kuota gratis 1GB dapat bertahan untuk ribuan transaksi.

3. Notifikasi WhatsApp Click-to-Chat Deep Links: Sistem ini memungkinkan notifikasi terkirim secara gratis langsung dari aplikasi.`,
    faq: [
      { q: "Apakah benar-benar bisa gratis atau Rp 0,- per bulan?", a: "Sangat bisa. Dengan memanfaatkan paket gratis dari Supabase dan Vercel, biaya operasional bisa Rp 0,- untuk volume UMKM normal." },
      { q: "Bagaimana menjaga keamanan data tanpa server backend?", a: "Keamanan dijamin oleh PostgreSQL Row Level Security (RLS). Aturan otorisasi ditulis langsung di tingkat database." },
      { q: "Mengapa kompresi file di sisi pengguna penting?", a: "Batas penyimpanan gratis 1GB. Dengan kompresi, kuota bisa bertahan untuk ribuan transaksi." },
    ],
  },
  {
    slug: "revolusi-ai-generatif-untuk-efisiensi-bisnis",
    title: "Revolusi AI Generatif untuk Efisiensi Bisnis: Bukan Sekadar Chatbot Biasa",
    excerpt: "Banyak perusahaan mengira teknologi AI hanya sebatas chatbot. Pelajari bagaimana integrasi LLM di sisi server meningkatkan konversi penjualan.",
    category: "Kecerdasan Buatan (AI)",
    publishedAt: "2026-07-08",
    author: { name: "Ardi", role: "Lead Software Architect @ Arblok Digital" },
    tags: ["Kecerdasan Buatan", "Gemini AI", "Automasi Bisnis", "IEO"],
    content: `Melampaui Batas Chatbot Konvensional

Large Language Models (LLM) generasi terbaru memiliki kemampuan pemecahan masalah yang dinamis, analisis sentimen, ekstraksi informasi, hingga penulisan kode terstruktur secara real-time.

Penerapan AI Nyata yang Mengubah Lanskap Bisnis

Sistem Klasifikasi Dokumen Otomatis: AI menganalisis deskripsi keluhan atau permohonan surat secara otonom, lalu mengelompokkannya ke kategori dinas yang sesuai.

Autonomous Marketing Generator: AI secara otomatis memproduksi rancangan konten pemasaran dan menjadwalkannya untuk diunggah ke platform media sosial.

Asisten Penjualan & Rekomendasi Terpersonalisasi: AI menganalisis kebiasaan belanja pelanggan dan merekomendasikan paket menu baru untuk meningkatkan rata-rata nilai pesanan.`,
    faq: [
      { q: "Apakah integrasi AI aman bagi kerahasiaan data?", a: "Ya, sangat aman asalkan diimplementasikan di sisi server (Server-Side Proxy). API Key tidak pernah terekspos ke browser." },
      { q: "Bagaimana cara kerja Autonomous Marketing Pipeline?", a: "Sistem berjalan di latar belakang menggunakan cron job. AI menganalisis tren pasar, menyusun salinan iklan, dan mempublikasikannya secara otomatis." },
    ],
  },
  {
    slug: "arsitektur-monorepo-skalabilitas-masa-depan",
    title: "Membangun Aplikasi Cepat dan Scalable dengan Arsitektur Monorepo",
    excerpt: "Mengapa memulai dengan satu codebase tunggal (monorepo) menggunakan NPM Workspaces adalah pilihan terbaik bagi startup modern.",
    category: "Teknologi & Bisnis",
    publishedAt: "2026-07-08",
    author: { name: "Ardi", role: "Lead Software Architect @ Arblok Digital" },
    tags: ["Monorepo", "NPM Workspaces", "TypeScript", "Scalability"],
    content: `Tantangan Duplikasi Kode pada Skala Besar

Ketika produk teknologi berkembang, developer sering perlu membuat beberapa aplikasi pendukung yang berbeda namun menggunakan basis data dan alur kerja yang serupa. Jika menggunakan multi-repositori tradisional, developer terpaksa menduplikasi kode.

Solusi NPM Workspaces & Shared Packages

1. Paket Logika Bersama (packages/logic): Seluruh logika bisnis diisolasi ke dalam satu folder tersendiri.

2. Paket Koneksi Database (packages/supabase): Konfigurasi klien, kueri database, serta migrasi skema RLS diwadahi dalam satu paket independen.

3. Kemudahan Integrasi: Aplikasi front-end tinggal mengimpor pustaka bersama. Saat menambahkan aplikasi baru, hanya perlu mengimpor library yang sama.`,
    faq: [
      { q: "Apa perbedaan Monorepo dengan Monolith?", a: "Monolith adalah satu aplikasi besar tunggal. Monorepo adalah satu repositori yang menampung banyak aplikasi independen yang berbagi kode secara modular." },
      { q: "Kapan proyek harus beralih ke Monorepo?", a: "Sangat disarankan sejak awal jika berencana membuat beberapa aplikasi yang saling terhubung." },
    ],
  },
  {
    slug: "cara-memilih-software-house-umkm-tasikmalaya",
    title: "Cara Memilih Software House untuk UMKM di Tasikmalaya: Panduan Lengkap",
    excerpt: "Bingung milih software house di Tasikmalaya? Pelajari 5 kriteria penting: portofolio nyata, arsitektur scalable, transparansi biaya, dukungan after-launch, dan testimonial.",
    category: "Digitalisasi UMKM",
    publishedAt: "2026-07-17",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["Software House Tasikmalaya", "UMKM Digital", "Web Development", "PWA"],
    content: `Memilih Software House di Tasikmalaya

Tasikmalaya berkembang sebagai kota dengan potensi digital yang besar. Tapi bagaimana memilih software house yang beneran paham kebutuhan lokal?

5 Kriteria Penting Sebelum Pilih Software House

1. Portofolio Nyata: Software house profesional punya produk yang bisa diakses langsung. Minta link demo, coba fitur-fiturnya.

2. Arsitektur yang Bisa Tumbuh: Gunakan Monorepo atau setidaknya kode yang terstruktur rapi. Ini bikin nambah fitur baru gak perlu ngulang dari awal.

3. Transparansi Biaya Total: Pastikan transparan dari awal: biaya sekali jalan, recurring per bulan, dan apa yang bisa dilakukan sendiri.

4. Dukungan Setelah Launch: Pastikan ada dokumentasi, garansi, dan kontak darurat.

5. Testimonial dari Klien Nyata: Minta kontak 1-2 klien sebelumnya. Chat mereka.

Panduan Memilih Berdasarkan Budget

- < 5 juta: Landing page company profile
- 5-15 juta: PWA sederhana + admin panel
- 15-40 juta: Aplikasi kasir, sistem kelurahan
- 40-100 juta: Marketplace, platform multi-vendor
- 100jt+: Enterprise grade, AI integration, Web3`,
    faq: [
      { q: "Berapa biaya jasa pembuatan website di Tasikmalaya?", a: "Landing page 2-5 juta, POS 10-30 juta, marketplace 30-100 juta. Pastikan transparan soal biaya maintenance." },
      { q: "Apa yang membedakan software house profesional dengan reseller template?", a: "Profesional membangun dari kode murni, punya portofolio sendiri, menerapkan arsitektur scalable, dan memberikan akses source code." },
      { q: "Berapa lama waktu pembuatan website?", a: "Company profile: 1-2 minggu. Aplikasi custom: 3-8 minggu. Platform kompleks: 2-4 bulan." },
      { q: "Apakah aplikasi UMKM perlu Monorepo?", a: "Sangat direkomendasikan jika berencana berkembang. Monorepo menghemat 70% biaya pengembangan jangka panjang." },
      { q: "Bagaimana verifikasi kredibilitas software house?", a: "Cek portofolio (minta demo langsung), testimonial (chat klien), dan Google review." },
    ],
  },
  {
    slug: "keluar-marketplace-bikin-toko-online-sendiri-tanpa-potongan-admin",
    title: "Cara Keluar dari Marketplace: Bikin Toko Online Sendiri Tanpa Potongan Admin 2-10%",
    excerpt: "Biaya admin Shopee & Tokopedia naik 2-10% per transaksi Mei 2026. Pelajari cara bikin toko online sendiri dengan payment gateway langsung.",
    category: "UMKM & Marketplace",
    publishedAt: "2026-07-17",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["Keluar Marketplace", "Toko Online Sendiri", "Biaya Admin Marketplace", "UMKM 2026"],
    content: `Marketplace Mahal? Lo Gak Sendirian

Shopee naik lagi. Tokopedia nyusul. Biaya admin Shopee resmi jadi 2-10% per transaksi per Januari 2026. Hasilnya: banyak seller UKM ngerasain margin mereka tergerus 15-25% per bulan.

3 Jalur Keluar dari Marketplace:
1. Toko Online Sendiri + Payment Gateway (Recommended) — modal 8-25jt, 0% potongan, 0% biaya server
2. WhatsApp Business + Payment Link — gratis total, cocok untuk skala kecil
3. Social Commerce (Instagram/TikTok → Payment Link) — 0% potongan, tapi tergantung algoritma

Kenapa custom website lebih untung? Source code milik Anda, hosting Rp 0/bulan, customer data sepenuhnya milik Anda.

Butuh bantuan migrasi dari marketplace? Chat Ardi via WhatsApp untuk konsultasi gratis.`,
    faq: [
      { q: "Berapa biaya admin Shopee dan Tokopedia di 2026?", a: "Shopee 2-10%, Tokopedia juga menyesuaikan. Bisa menggerus 15-25% margin bulanan." },
      { q: "Bisakah jualan online tanpa marketplace?", a: "Bisa. Lewat website sendiri + payment gateway, WA Business, atau social commerce." },
      { q: "Berapa modal bikin toko online sendiri?", a: "Custom website 8-25jt (sekali bayar) + Rp 0/bulan hosting. Lebih murah dari 2 tahun SaaS." },
      { q: "Bagaimana bawa customer dari marketplace?", a: "Sisipkan QR code website di packaging, konten edukatif di IG/TikTok, loyalty program eksklusif untuk member website." },
    ],
  },
  {
    slug: "biaya-bulanan-yang-tidak-perlu-perusahaan-hemat-teknologi",
    title: "Biaya Bulanan yang Tidak Perlu: Mengapa Banyak Perusahaan Bayar untuk Hal yang Bisa Gratis",
    excerpt: "Banyak perusahaan membayar puluhan juta per tahun untuk software yang tidak sepenuhnya dimanfaatkan. Pelajari cara menghemat 30-40% biaya operasional teknologi.",
    category: "Efisiensi Bisnis",
    publishedAt: "2026-07-22",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["Biaya Operasional", "Efisiensi Teknologi", "Software Custom", "Cost Optimization"],
    content: `Biaya Bulanan yang Tidak Perlu

Beberapa minggu lalu, saya ngobrol dengan seorang Finance Director di perusahaan manufaktur Jawa Barat. Total biaya teknologi mereka: Rp 4,4 juta per bulan = Rp 52,8 juta per tahun untuk 30 karyawan.

Masalahnya: sebagian besar fitur software tidak dipakai optimal. Biaya digitalisasi meningkat tajam (Kompas Money Juni 2026, Koran Jakarta Juli 2026).

Apa yang bisa dilakukan?
1. Audit biaya teknologi — 30-40% bisa dihemat tanpa kehilangan fungsi kritis
2. Ganti model langganan dengan kepemilikan — custom software sekali bayar
3. Pastikan software benar-benar dipakai — bukan demo lalu ditinggalkan

Real Case: Perusahaan manufaktur 30 karyawan — Rp 4,4jt/bulan jadi Rp 0/bulan untuk server + gateway WA. Modal Rp 18jt terbayar dalam 7 bulan.

Konsultasi 30 menit gratis. Hubungi Ardi via WhatsApp.`,
    faq: [
      { q: "Berapa rata-rata biaya teknologi perusahaan kecil per tahun?", a: "Rp 40-60 juta untuk 30-50 karyawan. Sebagian besar fitur tidak optimal." },
      { q: "Bisakah hemat biaya tanpa ganti sistem yang ada?", a: "Bisa. Audit fitur, biasanya 30-40% biaya bisa dipangkas." },
      { q: "Apa beda custom software dengan SaaS?", a: "SaaS bayar bulanan selamanya. Custom sekali bayar, milik Anda selamanya." },
      { q: "Apakah Arblok Digital melayani perusahaan menengah?", a: "Ya. Kami melayani UMKM hingga perusahaan menengah." },
    ],
  },
  {
    slug: "fee-marketplace-makin-besar-2026-potongan-shopee-tokopedia-tiktok-shop",
    title: "Fee Marketplace Makin Besar 2026: Rincian Potongan Shopee, Tokopedia & TikTok Shop + Cara Jualan Tanpa Tergerus",
    excerpt: "Rincian lengkap fee marketplace 2026: potongan Shopee hingga 10%, komisi Tokopedia naik, TikTok Shop 2,5-12,2%. Lihat simulasi margin dan cara jualan tanpa tergerus fee.",
    category: "UMKM & Marketplace",
    publishedAt: "2026-08-06",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["Fee Marketplace", "Shopee", "Tokopedia", "TikTok Shop", "UMKM"],
    content: "Konten premium file ini dibuat manual dengan sumber data lengkap dan tidak ditimpa generator.",
    faq: [],
    skipFile: true,
  },
  {
    slug: "pendaftaran-sekolah-online-semrawut-spmb-ppdb-2026",
    title: "Pendaftaran Sekolah Online Semrawut: SPMB/PPDB 2026 Down dan Kenapa Terjadi Lagi",
    excerpt: "Sistem SPMB/PPDB 2026 down lagi saat pendaftaran dibuka. Analisis penyebab dan solusi sistem pendaftaran sekolah yang tidak semrawut.",
    category: "Sekolah & Pendidikan",
    publishedAt: "2026-08-06",
    author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
    tags: ["SPMB", "PPDB", "Pendaftaran Sekolah", "Sistem Online", "Sekolah"],
    content: "Konten premium file ini dibuat manual dengan sumber data lengkap dan tidak ditimpa generator.",
    faq: [],
    skipFile: true,
  },
];

// ── Simple markdown-ish to HTML converter ──
function contentToHtml(content) {
  return content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.match(/^\d+\.\s/)) {
        const items = trimmed
          .split("\n")
          .map((li) => `<li>${li.replace(/^\d+\.\s+/, "")}</li>`)
          .join("\n");
        return `<ol>${items}</ol>`;
      }
      return `<p>${trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

// ── Generate HTML per article ──
for (const article of articles) {
  const faqSchema =
    article.faq && article.faq.length > 0
      ? JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        })
      : null;

  const articleUrl = `${BASE_URL}/articles/${article.slug}`;
  const blogSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "url": articleUrl,
    "datePublished": article.publishedAt,
    "dateModified": article.publishedAt,
    "author": { "@type": "Person", "name": article.author.name, "jobTitle": article.author.role },
    "publisher": {
      "@type": "Organization",
      "name": "Arblok Digital",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/arblok_logo.webp`
      }
    },
    "image": `${BASE_URL}/og-image.png`,
    "keywords": article.tags.join(", ")
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Beranda", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Artikel", "item": `${BASE_URL}/articles` },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": articleUrl }
    ]
  });

  const faqHtml =
    article.faq && article.faq.length > 0
      ? `<section><h2>FAQ</h2>${article.faq.map((f) => `<div><h3>${f.q}</h3><p>${f.a}</p></div>`).join("\n")}</section>`
      : "";

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${article.title} | Arblok Digital</title>
  <meta name="description" content="${article.excerpt}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${articleUrl}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${article.title}">
  <meta property="og:description" content="${article.excerpt}">
  <meta property="og:url" content="${articleUrl}">
  <meta property="og:image" content="${BASE_URL}/og-image.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="id_ID">
  <meta property="og:site_name" content="Arblok Digital">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${article.title}">
  <meta name="twitter:description" content="${article.excerpt}">
  <meta name="twitter:image" content="${BASE_URL}/og-image.png">
  <script type="application/ld+json">${blogSchema}</script>
  ${faqSchema ? `<script type="application/ld+json">${faqSchema}</script>` : ""}
  <script type="application/ld+json">${breadcrumbSchema}</script>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; color: #1a1a2e; line-height: 1.7; }
    h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
    .meta { color: #666; font-size: 0.85rem; margin-bottom: 2rem; }
    .meta span { margin-right: 1rem; }
    h2 { font-size: 1.3rem; margin-top: 2rem; color: #0ea5e9; }
    h3 { font-size: 1.1rem; margin-top: 1.5rem; }
    strong { color: #0f172a; }
    ol, ul { padding-left: 1.5rem; }
    li { margin-bottom: 0.5rem; }
    section { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; }
    .cta { margin-top: 2rem; padding: 1rem; background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; text-align: center; }
    .cta a { color: #0ea5e9; font-weight: bold; text-decoration: none; }
    a.back { color: #0ea5e9; text-decoration: none; display: inline-block; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <a class="back" href="/articles">&larr; Kembali ke Blog</a>
  <article>
    <h1>${article.title}</h1>
    <div class="meta">
      <span>${article.category}</span>
      <span>${article.publishedAt}</span>
      <span>Oleh ${article.author.name}</span>
    </div>
    <p><em>${article.excerpt}</em></p>
    ${contentToHtml(article.content)}
    ${faqHtml}
  </article>
  <div class="cta">
    <p>Tertarik menerapkan solusi ini?</p>
    <a href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20membaca%20artikel%20tentang%20${encodeURIComponent(article.title)}">Diskusikan di WhatsApp &rarr;</a>
  </div>
</body>
</html>`;

  const outPath = join(OUT_DIR, `${article.slug}.html`);
  if (!article.skipFile) {
    writeFileSync(outPath, html, "utf-8");
  }
}

console.log(`✅ ${articles.length} static article pages generated → ${OUT_DIR}`);

// ── Also regenerate sitemap with proper article URLs ──
const sitemapEntries = [
  `  <url>\n    <loc>${BASE_URL}/</loc>\n    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>`,
  `  <url>\n    <loc>${BASE_URL}/articles</loc>\n    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`,
  `  <url>\n    <loc>${BASE_URL}/consultant</loc>\n    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
];

for (const a of articles) {
  sitemapEntries.push(
    `  <url>\n    <loc>${BASE_URL}/articles/${a.slug}</loc>\n    <lastmod>${a.publishedAt}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  );
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), sitemap, "utf-8");
console.log(`✅ sitemap.xml updated (${sitemapEntries.length} URLs)`);
