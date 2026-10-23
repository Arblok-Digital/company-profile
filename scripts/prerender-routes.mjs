#!/usr/bin/env node
/**
 * Generate route-specific HTML shells after Vite builds.
 *
 * These files retain the compiled JS/CSS assets from dist/index.html, so
 * React Router still boots normally. The initial HTML contains route-specific
 * metadata and useful fallback content for crawlers/social preview consumers.
 * Unknown paths are intentionally not rewritten to index.html; Vercel can
 * return a real 404 instead of a soft-404.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = join(process.cwd(), "dist");
const indexPath = join(DIST, "index.html");
if (!existsSync(indexPath)) {
  throw new Error("dist/index.html is missing. Run this script after vite build.");
}
const baseHtml = readFileSync(indexPath, "utf8");
const BASE_URL = "https://arblok-digital.vercel.app";

const routes = [
  {
    path: "/articles",
    file: "articles.html",
    title: "Artikel Digitalisasi Bisnis & Software | Arblok Digital",
    description: "Baca panduan, tips, dan studi kasus tentang aplikasi kasir, administrasi sekolah, otomatisasi, dan pengembangan sistem digital dari Arblok Digital.",
    h1: "Artikel dan panduan digital",
    body: "Jelajahi panduan praktis tentang digitalisasi usaha, administrasi sekolah, pengembangan software, dan otomatisasi proses kerja.",
    links: [
      ["/articles/cara-memilih-software-house-umkm-tasikmalaya", "Cara memilih software house untuk UMKM"],
      ["/consultant", "Konsultasikan kebutuhan sistem digital"],
      ["/", "Kenali layanan Arblok Digital"]
    ]
  },
  {
    path: "/consultant",
    file: "consultant.html",
    title: "Konsultan Digital & Konsultasi Sistem | Arblok Digital",
    description: "Diskusikan kebutuhan aplikasi, sistem kasir, administrasi sekolah, portal layanan, dan otomatisasi bisnis bersama Arblok Digital.",
    h1: "Konsultasi sistem digital",
    body: "Ceritakan alur kerja yang ingin dirapikan. Arblok Digital membantu memetakan kebutuhan, pengguna, prioritas, dan pendekatan teknologi yang sesuai.",
    links: [
      ["/#services", "Lihat layanan digital"],
      ["/#portfolio", "Lihat portofolio"],
      ["/articles", "Baca artikel dan panduan"]
    ]
  },
  {
    path: "/referral",
    file: "referral.html",
    title: "Program Referral Arblok Digital | Produk & Jasa Digital",
    description: "Pelajari program referral Arblok Digital untuk rekomendasi produk digital dan jasa pengembangan website atau aplikasi. Ketentuan komisi dibahas secara transparan.",
    h1: "Program referral Arblok Digital",
    body: "Kenalkan produk dan layanan Arblok Digital kepada calon pelanggan yang membutuhkan digitalisasi. Hubungi tim untuk mengonfirmasi produk, mekanisme referral, dan ketentuan komisi yang berlaku.",
    links: [
      ["/#portfolio", "Lihat produk dan portofolio"],
      ["/consultant", "Tanya tentang program referral"],
      ["/", "Kembali ke beranda"]
    ]
  }
];

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function upsertMeta(html, name, content) {
  const safe = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");
  const tag = `<meta name="${name}" content="${safe}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}
function upsertProperty(html, property, content) {
  const safe = escapeHtml(content);
  const regex = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, "i");
  const tag = `<meta property="${property}" content="${safe}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}
function upsertCanonical(html, href) {
  const safe = escapeHtml(href);
  const regex = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${safe}" />`;
  return regex.test(html) ? html.replace(regex, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

for (const route of routes) {
  const canonical = `${BASE_URL}${route.path}`;
  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = upsertMeta(html, "title", route.title);\n  html = upsertMeta(html, "description", route.description);
  html = upsertMeta(html, "robots", "index, follow");
  html = upsertCanonical(html, canonical);
  html = upsertProperty(html, "og:type", "website");
  html = upsertProperty(html, "og:title", route.title);
  html = upsertProperty(html, "og:description", route.description);
  html = upsertProperty(html, "og:url", canonical);
  html = upsertMeta(html, "twitter:title", route.title);
  html = upsertMeta(html, "twitter:description", route.description);

  const linkList = route.links.map(([href, label]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join("");
  const fallback = `<main id="seo-fallback"><article><p>Arblok Digital · Tasikmalaya</p><h1>${escapeHtml(route.h1)}</h1><p>${escapeHtml(route.body)}</p><nav aria-label="Tautan terkait"><ul>${linkList}</ul></nav><p><a href="https://wa.me/6289508053795">Hubungi Arblok Digital via WhatsApp</a></p></article></main>`;
  // Replace existing root fallback/loader markup so homepage content does not leak into route HTML.
  html = html.replace(/(<div id="root">)[\s\S]*?(?=\s*<\/body>)/i, (_match, rootOpen) => `${rootOpen}${fallback}</div>\n  `);
  writeFileSync(join(DIST, route.file), html, "utf8");
  console.log(`Generated dist/${route.file} (${canonical})`);
}
