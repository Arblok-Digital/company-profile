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
  "Dari kasir warung sampai portal sekolah — semua dari satu fondasi kode";

const homeSubtitle =
  "Setiap fitur lahir dari obrolan dengan pemilik usaha, bukan dari meja meeting. Itulah kenapa barangnya dipakai.";

const servicesID = [
  {
    title: "Website & PWA",
    desc: "Landing page, company profile interaktif, atau PWA yang bisa diinstal langsung ke layar utama tanpa App Store.",
    details: ["Konversi tinggi & SEO-friendly", "PWA siap instalasi mobile", "Desain custom, bukan template"],
  },
  {
    title: "Marketplace & Bisnis",
    desc: "E-commerce custom, sistem kasir (POS), atau portal multi-vendor dengan alur transaksi terstruktur.",
    details: ["Multi-vendor marketplace", "Manajemen transaksi & POS", "Payment gateway terintegrasi"],
  },
  {
    title: "Custom Software & Pipeline",
    desc: "Spesialisasi kami: menerjemahkan alur kerja operasional jadi kode terstruktur dengan pipeline otorisasi otomatis.",
    details: ["Pipeline persetujuan dinamis", "Tracking real-time", "PostgreSQL Row Level Security"],
  },
  {
    title: "AI & Otomatisasi",
    desc: "AI terapan langsung di server-side — klasifikasi dokumen, ekstraksi OCR, dan otomasi logika tanpa sewa server mahal.",
    details: ["Klasifikasi dokumen otonom", "Server-side AI proxy", "Notifikasi hemat biaya"],
  },
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
    <a href="${BASE_URL}/consultant">AI Consultant</a>
  </nav>
  ${content.body}
  <div class="cta">
    <p>Tertarik dengan layanan Arblok Digital?</p>
    <a class="wa" href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20tertarik%20dengan%20layanan%20Anda">Konsultasi Gratis via WhatsApp &rarr;</a>
  </div>
  <div class="footer">
    <p>&copy; 2026 Arblok Digital — Tasikmalaya, Jawa Barat, Indonesia</p>
    <p>Kontak: <a href="https://wa.me/6289508053795">+62 895-0805-3795</a> | Email: ardiblokchine@gmail.com</p>
    <p><a href="https://wa.me/6289508053795">WhatsApp Founder (Ardi)</a></p>
  </div>
</body>
</html>`;
}

// ── HOME PAGE ──
const homeContent = {
  title: "ARBLOK Digital | Software House & Digital Agency - Tasikmalaya",
  desc: "ARBLOK Digital adalah software house & digital agency dari Tasikmalaya. Spesialisasi: sistem kasir, portal sekolah, aplikasi kelurahan, AI automation, dan Web3.",
  canonical: BASE_URL,
  body: `
<h1>ARBLOK Digital — Software House & Digital Agency Tasikmalaya</h1>
<p><strong>${homeHeadline}</strong></p>
<p>${homeSubtitle}</p>
<p>Kami bikin sistem digital yang beneran dipakai — dari kasir warung sampai portal sekolah, semua dari satu fondasi kode.</p>
<p>Keunggulan: <strong>Monorepo Workspace</strong> | Offline-first | Row Level Security</p>
<p><a class="wa" href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital">Konsultasi Gratis</a></p>

<h2>Visi & Misi</h2>
<p><strong>Visi:</strong> Digitalisasi nasional dimulai dari daerah. Kami bangun sistem yang bikin UMKM dan instansi publik bisa naik kelas — tanpa perlu modal besar atau tim IT khusus.</p>
<p><strong>Misi:</strong></p>
<ul>
  <li><strong>Produk Nyata:</strong> Bukan PowerPoint. Setiap baris kode yang kami tulis sudah dipakai di sekolah, kelurahan, dan warung sungguhan.</li>
  <li><strong>Efisiensi Operasional:</strong> Sederhanakan administrasi lewat sistem digital yang memang dirancang untuk pengguna non-teknis.</li>
  <li><strong>AI Itu Alat, Bukan Gimik:</strong> Integrasi AI hanya kalau benar-benar ngurangin pekerjaan manual, bukan sekadar tempel fitur biar keren.</li>
</ul>
<p><strong>Arsitektur Monorepo:</strong> Setiap proyek dibangun di atas fondasi bersama. Semua logika transisi, validasi, dan model database diisolasi dalam modul khusus — siap diimpor oleh aplikasi baru tanpa duplikasi.</p>

<h2>Layanan</h2>
${servicesID.map(s => `
<div class="service">
  <h3>${s.title}</h3>
  <p>${s.desc}</p>
  <ul>${s.details.map(d => `<li>${d}</li>`).join("")}</ul>
</div>`).join("")}

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
  "telephone": "+628****3795", "email": "ardiblokchine@gmail.com",
  "knowsAbout": ["Web Development", "PWA", "AI", "Blockchain", "POS", "Workflow Automation", "Monorepo", "Offline-first"],
  "founder": { "@type": "Person", "name": "Ardi" },
  "contactPoint": { "@type": "ContactPoint", "telephone": "+628****3795", "contactType": "customer service", "availableLanguage": ["Indonesian", "English"] }
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
