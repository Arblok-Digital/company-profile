#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "prerendered");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const BASE_URL = "https://arblok-digital.vercel.app";

const homeHeadline =
  "Jualan tanpa fee marketplace di setiap transaksi.";

const homeSubtitle =
  "Arblok Digital membangun toko online dan kasir sendiri — omzet dan stok terpantau dari HP, dan pekerjaannya tetap berjalan walau Anda sedang tidak melihat.";

const servicesID = [
  {
    title: "Penjualan dan persediaan",
    desc: "Untuk usaha yang perlu mencatat transaksi, stok, dan laporan tanpa berpindah-pindah catatan.",
    details: ["Kasir dan pencatatan transaksi", "Perubahan stok", "Ringkasan yang dapat diperiksa"],
  },
  {
    title: "Administrasi sekolah",
    desc: "Untuk pembayaran, data siswa, dan pekerjaan administrasi yang perlu dipantau oleh petugas terkait.",
    details: ["Pencatatan pembayaran", "Data siswa dan kelas", "Status administrasi"],
  },
  {
    title: "Pelayanan dan persetujuan",
    desc: "Untuk pengajuan surat, pemeriksaan dokumen, dan keputusan yang melewati beberapa petugas.",
    details: ["Formulir pengajuan", "Tahap pemeriksaan", "Riwayat keputusan"],
  },
  {
    title: "Website dan portal informasi",
    desc: "Untuk memperjelas layanan, menerima permintaan, atau menyediakan area informasi bagi pelanggan dan anggota.",
    details: ["Company profile", "Formulir dan katalog", "Portal yang dapat dipasang di ponsel"],
  },
  {
    title: "Pekerjaan berulang",
    desc: "Untuk tugas yang bisa dibantu aturan otomatis atau teknologi pintar setelah alurnya jelas.",
    details: ["Pengingat dan notifikasi", "Pembacaan data dokumen", "Pengelompokan permintaan"],
  },
];

const faqID = [
  { question: "Berapa biaya pembuatan website atau aplikasi?", answer: "Sangat fleksibel. Kami menawarkan paket Starter/MVP mulai dari harga terjangkau untuk UMKM, hingga sistem enterprise. Tidak ada budget yang terlalu kecil — kami selalu siap diskusi via WhatsApp untuk mencari solusi yang pas." },
  { question: "Apa itu zero-cost hosting?", answer: "Kami menghubungkan aplikasi langsung ke database cloud dengan keamanan Row Level Security (RLS) — tanpa perlu server backend yang menyala 24/7. Hasilnya biaya hosting bulanan bisa Rp 0 untuk beban kerja UMKM normal." },
  { question: "Berapa lama proses pembuatan website?", answer: "Tergantung kompleksitas. Landing page atau company profile sederhana 1-3 minggu. Sistem khusus seperti kasir, sekolah, atau kelurahan 1-3 bulan. Timeline jelas diberikan saat konsultasi." },
  { question: "Apakah bisa custom fitur setelah aplikasi selesai?", answer: "Tentu. Kami menggunakan arsitektur Monorepo (NPM Workspaces) yang membuat modifikasi masa depan cepat dan murah. Cukup import shared business logic — tanpa duplikasi kode." },
  { question: "Apakah ada garansi setelah peluncuran?", answer: "Ya. Kami menyediakan paket maintenance fleksibel dan bisa melatih tim Anda untuk mengelola sistem secara mandiri. Konsultasikan kebutuhan Anda via WhatsApp untuk detailnya." },
  { question: "Apa itu Arblok Digital?", answer: "Arblok Digital adalah studio perangkat lunak dari Tasikmalaya. Kami membantu usaha, sekolah, dan instansi membuat sistem untuk pencatatan, pelayanan, serta alur persetujuan." },
  { question: "Masalah seperti apa yang dapat dibahas?", answer: "Contohnya pencatatan penjualan dan stok yang terpisah, administrasi sekolah yang sulit dipantau, pengajuan dokumen yang lambat, atau pekerjaan berulang yang rawan terlewat." },
  { question: "Bagaimana memulai pembicaraan?", answer: "Kirim gambaran singkat tentang pekerjaan yang masih merepotkan melalui WhatsApp. Pembicaraan awal digunakan untuk memahami masalah, pengguna, dan prioritasnya." },
];

const portfolioItems = [
  { title: "SekolahRapi", badge: "Fintech Edukasi", desc: "Platform administrasi & keuangan sekolah — pendaftaran online, SPP otomatis, laporan real-time.", link: "https://sekolah-rapi.vercel.app/" },
  { title: "SekolahPro", badge: "EduTech ERP", desc: "Sistem Informasi Manajemen Sekolah (ERP) all-in-one.", link: "https://sekolah-pro.vercel.app/" },
  { title: "Solana Warung", badge: "Google Top 100 Global", desc: "Platform rewards Web3 untuk UMKM. Top 100 Global dalam Google Solution Challenge.", cert: "JVC2605-N74Z-Y7DN" },
  { title: "KasirPro F&B", badge: "SaaS F&B", desc: "Sistem Point of Sale (POS) modern berbasis cloud untuk bisnis kuliner dan UMKM.", link: "https://kasirpro-fnb-app.vercel.app/" },
  { title: "KasirPro Grosiran", badge: "SaaS Grosir", desc: "Manajemen kasir & inventori skala grosir/gudang.", link: "https://kasirproid-app-grosiran.vercel.app/" },
  { title: "E-Warga", badge: "GovTech", desc: "Digitalisasi birokrasi kelurahan — data penduduk, pengajuan surat, notifikasi WhatsApp gratis.", link: "#" },
  { title: "Onyx Terminal", badge: "Crypto Intelligence", desc: "Platform intelijen pasar kripto berbasis AI.", link: "https://onyx-terminal-v1.vercel.app/" },
  { title: "Sanajan QR Order", badge: "F&B Digitalisasi", desc: "QR Table-Order & loyalty platform untuk warkop dan cafe." },
  { title: "CoordinationApp", badge: "Manajemen Tim", desc: "Koordinasi tugas hierarki untuk organisasi besar." },
];

function serveHtml(content, extraSchema) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${content.title}</title>
  <meta name="description" content="${content.desc}">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${content.canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${content.title}">
  <meta property="og:description" content="${content.desc}">
  <meta property="og:url" content="${content.canonical}">
  <meta property="og:image" content="${BASE_URL}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  ${extraSchema || ""}
  <style>
    body { font-family: system-ui, sans-serif; max-width: 960px; margin: 0 auto; padding: 1rem; color: #1a1a2e; line-height: 1.7; }
    h1 { font-size: 2rem; }
    h2 { font-size: 1.4rem; color: #0ea5e9; margin-top: 2rem; }
    h3 { font-size: 1.1rem; }
    .service { border: 1px solid #e2e8f0; border-radius: 8px; padding: 1rem; margin: 1rem 0; }
    .portfolio-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: 0.8rem; margin: 0.8rem 0; }
    .footer { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; font-size: 0.9rem; color: #666; }
    .cta { background: #f0f9ff; border: 1px solid #0ea5e9; border-radius: 8px; padding: 1rem; text-align: center; margin: 1rem 0; }
    .cta a { color: #0ea5e9; font-weight: bold; text-decoration: none; }
    ul { padding-left: 1.5rem; }
    li { margin-bottom: 0.3rem; }
    .badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
    .wa { background: #22c55e; color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 6px; display: inline-block; font-weight: bold; }
    nav a { color: #0ea5e9; text-decoration: none; margin-right: 1rem; }
  </style>
</head>
<body>
  <nav>
    <a href="${BASE_URL}/">Beranda</a>
    <a href="${BASE_URL}/#services">Layanan</a>
    <a href="${BASE_URL}/#portfolio">Portofolio</a>
    <a href="${BASE_URL}/articles">Artikel</a>
    <a href="${BASE_URL}/consultant">Konsultan Digital</a>
  </nav>
  ${content.body}
  <div class="cta">
    <p>Ceritakan pekerjaan yang paling ingin dirapikan.</p>
    <a class="wa" href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20pencatatan%20atau%20alur%20kerja%20di%20organisasi%20saya.">Ceritakan masalah Anda via WhatsApp &rarr;</a>
  </div>
  <div class="footer">
    <p>&copy; 2026 Arblok Digital — Tasikmalaya, Jawa Barat, Indonesia</p>
    <p>Kontak: <a href="https://wa.me/6289508053795">+62 895-0805-3795</a> | Email: ardiblokchine@gmail.com</p>
    <p><a href="https://wa.me/6289508053795">WhatsApp Founder (Ardi)</a> · <a href="https://wa.me/6289508053795">Ceritakan masalah Anda</a></p>
  </div>
</body>
</html>`;
}

// ── HOME PAGE ──
const homeContent = {
  title: "Arblok Digital | Sistem Digital untuk Usaha, Sekolah & Instansi",
  desc: "Arblok Digital membantu usaha, sekolah, dan instansi membuat sistem pencatatan, pelayanan, dan persetujuan. Mulai dari satu masalah prioritas — harga transparan, hosting mulai Rp 0/bulan.",
  canonical: BASE_URL,
  body: `
<p>Studio perangkat lunak · Tasikmalaya</p>
<h1>${homeHeadline}</h1>
<p>${homeSubtitle}</p>
<p><a class="wa" href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20pencatatan%20atau%20alur%20kerja%20di%20organisasi%20saya.">Konsultasi via WhatsApp</a></p>

<h2>Masalah yang dapat dibenahi</h2>
<div class="case-study">
  <p><strong>Studi kasus · UMKM</strong> — Pemilik toko tidak bisa memantau penjualan kasir secara langsung.</p>
  <p><strong>Masalah:</strong> fee marketplace naik tiap transaksi dan kasir manual menyebarkan pencatatan.</p>
  <p><strong>Alur solusi:</strong> kasir mencatat jualan di HP/komputer → sistem menyusun rekap dan mengurangi stok otomatis → pemilik melihat omzet, stok, dan kas realtime dari ponsel.</p>
  <p><strong>Hasil:</strong> toko punya kasir sendiri tanpa fee per transaksi, omzet dan stok terpantau realtime.</p>
</div>
<div class="case-study">
  <p><strong>Studi kasus · Sekolah</strong> — Pendaftaran offline dan SPP manual membuat cashflow sekolah sulit terpantau.</p>
  <p><strong>Masalah:</strong> tiap tahun ajaran baru orang tua antre, data rawan hilang, dan SPP dicatat manual sehingga cashflow tidak dapat dipantau online.</p>
  <p><strong>Alur solusi:</strong> orang tua mendaftar online (formulir dan berkas dari rumah) → berkas tersusun otomatis dan status tahap terlihat → pembayaran SPP tercatat otomatis, kas sekolah terpantau.</p>
  <p><strong>Hasil:</strong> pendaftaran tanpa antre, data aman, cashflow sekolah dipantau kapan saja.</p>
</div>

<h2>Berjalan sendiri</h2>
<ul>
  <li><strong>Rekap tersusun sendiri.</strong> Tiap transaksi kasir atau pembayaran SPP langsung tercatat — tidak menunggu dihitung ulang.</li>
  <li><strong>Tunggakan dan tugas diingatkan.</strong> Tunggakan SPP terdeteksi dan notifikasi WhatsApp jalan otomatis — seperti yang dipakai SekolahRapi dan E-Warga.</li>
  <li><strong>Laporan siap saat diminta.</strong> Omzet, kas, dan stok menjadi ringkasan yang bisa diperiksa tanpa proses manual.</li>
</ul>
<p>Sistem bekerja walau pemilik sedang tidak melihat — karena data tidak boleh menunggu orang.</p>

<h2>Cara kerja</h2>
<ol>
  <li><strong>Pahami pekerjaan sehari-hari.</strong> Dengarkan pengguna dan petakan alur yang sedang berjalan.</li>
  <li><strong>Pilih satu prioritas.</strong> Jadikan masalah yang paling menghambat sebagai ruang lingkup awal.</li>
  <li><strong>Uji versi pertama.</strong> Minta pengguna mencoba alur utama sebelum pekerjaan diperluas.</li>
  <li><strong>Jalankan dan dampingi.</strong> Lakukan penyesuaian berdasarkan kebutuhan operasional.</li>
</ol>

<h2>Layanan</h2>
${servicesID.map(s => `
<div class="service">
  <h3>${s.title}</h3>
  <p>${s.desc}</p>
  <ul>${s.details.map(d => `<li>${d}</li>`).join("")}</ul>
</div>`).join("")}

<h2>Pertanyaan umum</h2>
${faqID.map(item => `<h3>${item.question}</h3><p>${item.answer}</p>`).join("")}

<h2>Portofolio Produk</h2>
${portfolioItems.map(p => `
<div class="portfolio-item">
  <strong>${p.title}</strong> <span class="badge">${p.badge}</span>
  <p>${p.desc}</p>
  ${p.link ? `<a href="${p.link}">Kunjungi &rarr;</a>` : ""}
  ${p.cert ? `<p><small>Sertifikat: ${p.cert} — <a href="https://goo.gle/jvc-cert-verifier">Verifikasi</a></small></p>` : ""}
</div>`).join("")}

<h2>Hubungi Kami</h2>
<p>Tasikmalaya, Jawa Barat, Indonesia</p>
<p>WhatsApp: <a href="https://wa.me/6289508053795">+62 895-0805-3795</a></p>
<p>Email: <a href="mailto:ardiblokchine@gmail.com">ardiblokchine@gmail.com</a></p>
`
};

const homeSchema = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org", "@type": "ProfessionalService",
  "name": "ARBLOK Digital", "url": BASE_URL,
  "description": homeContent.desc,
  "address": { "@type": "PostalAddress", "addressLocality": "Tasikmalaya", "addressRegion": "Jawa Barat", "addressCountry": "Indonesia" },
  "telephone": "+6289508053795", "email": "ardiblokchine@gmail.com",
  "knowsAbout": ["Sistem penjualan dan persediaan", "Administrasi sekolah", "Pelayanan dokumen", "Alur persetujuan", "Website dan portal informasi", "Otomatisasi pekerjaan berulang"],
  "founder": { "@type": "Person", "name": "Ardi" },
  "contactPoint": { "@type": "ContactPoint", "telephone": "+6289508053795", "contactType": "customer service", "availableLanguage": ["Indonesian", "English"] }
})}</script><script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqID.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
})}</script>`;

writeFileSync(join(OUT_DIR, "home.html"), serveHtml(homeContent, homeSchema), "utf-8");

// ── CONSULTANT PAGE ──
const consultantContent = {
  title: "Arblok AI Consultant — Konsultasi Digital & Teknologi | Arblok Digital",
  desc: "Konsultasikan ide digitalisasi bisnis Anda secara interaktif dengan AI Consultant Arblok Digital. Dapatkan analisis arsitektur sistem, workflow pipeline, dan rekomendasi teknologi instan.",
  canonical: `${BASE_URL}/consultant`,
  body: `
<h1>Arblok AI Consultant</h1>
<p>Uji kemampuan teknologi AI kami langsung di sini. Konsultasikan ide digitalisasi Anda secara interaktif dan dapatkan rancangan sistem serta arsitektur solusi instan.</p>

<p>Chatbot ini adalah bukti nyata integrasi API AI (Gemini AI, NVIDIA NIM) di sisi server dengan Express proxy yang aman.</p>

<h2>Apa yang bisa ditanyakan?</h2>
<ul>
  <li>Struktur database, workflow pipeline & hak akses</li>
  <li>Teknologi Web3, blockchain & mikro-pembayaran</li>
  <li>Efisiensi kerja UMKM atau Instansi</li>
  <li>Integrasi AI untuk otomatisasi bisnis</li>
  <li>Arsitektur Monorepo & Offline-first</li>
</ul>

<h2>Rekomendasi Pertanyaan</h2>
<ul>
  <li><strong>Digitalisasi RT/RW:</strong> Bagaimana cara digitalisasi birokrasi pengurusan surat warga di tingkat RT/RW agar gratis dan aman?</li>
  <li><strong>Offline-first Architecture:</strong> Bagaimana cara bikin aplikasi yang tetap jalan walau tanpa internet?</li>
  <li><strong>Integrasi AI Chat:</strong> Bagaimana cara mengintegrasikan Chatbot AI ke website operasional internal perusahaan?</li>
  <li><strong>Teknologi Kasir F&B:</strong> Ingin membuat aplikasi kasir F&B berbasis web modern, arsitektur monorepo seperti apa yang cocok?</li>
</ul>

<h2>Cara Menggunakan</h2>
<p>Kunjungi halaman interaktif di <a href="${BASE_URL}/consultant">${BASE_URL}/consultant</a> untuk mencoba AI Consultant secara langsung. Cukup ketik pertanyaan Anda dan AI akan memberikan analisis serta rekomendasi instan.</p>
<div class="cta">
  <p>Butuh konsultasi langsung dengan tim teknis?</p>
  <a class="wa" href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20konsultasi%20langsung">Chat Founder (Ardi) di WhatsApp</a>
</div>
`
};

const consultantSchema = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Arblok AI Consultant",
  "description": consultantContent.desc,
  "url": consultantContent.canonical,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "author": { "@type": "Organization", "name": "Arblok Digital" }
})}</script>`;

writeFileSync(join(OUT_DIR, "consultant.html"), serveHtml(consultantContent, consultantSchema), "utf-8");

console.log(`✅ Prerendered: home.html + consultant.html → ${OUT_DIR}`);
