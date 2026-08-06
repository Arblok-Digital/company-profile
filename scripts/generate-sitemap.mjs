#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 * Generates sitemap.xml from articles.ts data.
 * Run: node scripts/generate-sitemap.mjs
 * Add to package.json: "build:sitemap": "node scripts/generate-sitemap.mjs"
 */

import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BASE_URL = "https://arblok-digital.vercel.app";
const TODAY = new Date().toISOString().split("T")[0];

// ── Static routes ──
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/articles", priority: "0.9", changefreq: "weekly" },
  { path: "/consultant", priority: "0.8", changefreq: "monthly" },
];

// ── Article slugs (extracted from src/data/articles.ts) ──
// Update this array when adding new articles.
// Each article links to /articles page — individual routes TBD.
const articles = [
  {
    slug: "siasat-jitu-arblok-digital-akselerasi-bisnis-tanpa-boncos",
    lastmod: "2026-07-10",
  },
  {
    slug: "panduan-digitalisasi-umkm-zero-cost-serverless",
    lastmod: "2026-07-08",
  },
  {
    slug: "revolusi-ai-generatif-untuk-efisiensi-bisnis",
    lastmod: "2026-07-08",
  },
  {
    slug: "arsitektur-monorepo-skalabilitas-masa-depan",
    lastmod: "2026-07-08",
  },
  {
    slug: "cara-memilih-software-house-umkm-tasikmalaya",
    lastmod: "2026-07-17",
  },
  {
    slug: "keluar-marketplace-bikin-toko-online-sendiri-tanpa-potongan-admin",
    lastmod: "2026-07-17",
  },
  {
    slug: "biaya-bulanan-yang-tidak-perlu-perusahaan-hemat-teknologi",
    lastmod: "2026-07-22",
  },
  {
    slug: "fee-marketplace-makin-besar-2026-potongan-shopee-tokopedia-tiktok-shop",
    lastmod: "2026-08-06",
  },
  {
    slug: "pendaftaran-sekolah-online-semrawut-spmb-ppdb-2026",
    lastmod: "2026-08-06",
  },
];

// ── Build XML ──
function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [];

// Static routes
for (const r of staticRoutes) {
  entries.push(urlEntry(`${BASE_URL}${r.path}`, TODAY, r.changefreq, r.priority));
}

// Individual article routes (/articles/:slug)
for (const a of articles) {
  entries.push(
    urlEntry(
      `${BASE_URL}/articles/${a.slug}`,
      a.lastmod,
      "monthly",
      "0.7"
    )
  );
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

const outPath = join(ROOT, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`✅ sitemap.xml generated (${entries.length} URLs) → ${outPath}`);
