#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 * Regenerates public/sitemap.xml dari src/data/articles.ts (single source).
 * Catatan: prerender-articles.mjs juga menulis sitemap.xml yang sama;
 * script ini tetap dipertahankan sebagai pintu generate terpisah.
 * Run: tsx scripts/generate-sitemap.mjs
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { ARTICLES_DATA } from "../src/data/articles.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const BASE_URL = "https://arblok-digital.vercel.app";
const TODAY = new Date().toISOString().split("T")[0];

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/articles", priority: "0.9", changefreq: "weekly" },
  { path: "/consultant", priority: "0.8", changefreq: "monthly" },
  { path: "/referral", priority: "0.7", changefreq: "monthly" },
];

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const entries = [];

for (const r of staticRoutes) {
  entries.push(urlEntry(`${BASE_URL}${r.path}`, TODAY, r.changefreq, r.priority));
}

for (const a of ARTICLES_DATA) {
  entries.push(
    urlEntry(
      `${BASE_URL}/articles/${a.slug}`,
      a.dateModified || a.publishedAt,
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