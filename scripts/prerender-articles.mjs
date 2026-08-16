#!/usr/bin/env node
/**
 * prerender-articles.mjs
 * Generates static HTML files at public/articles/[slug].html directly from
 * src/data/articles.ts (SINGLE SOURCE OF TRUTH — jangan duplikasi data di sini).
 * AI crawlers (GPTBot, ClaudeBot, PerplexityBot) dapat membaca halaman ini tanpa JS.
 *
 * Run: tsx scripts/prerender-articles.mjs   (tsx agar bisa import .ts)
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { ARTICLES_DATA } from "../src/data/articles.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "articles");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const BASE_URL = "https://arblok-digital.vercel.app";
const today = new Date().toISOString().split("T")[0];

// ── Markdown-ish → HTML (mendukung: ### heading, -/+ bullet, 1. list, tabel pipa, **bold**, *italic*, URL) ──
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineFormat(text) {
  let t = escapeHtml(text);
  t = t
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  t = t.replace(
    /(^|\s)(https?:\/\/[^\s<]+)/g,
    '$1<a href="$2" rel="noopener noreferrer">$2</a>'
  );
  return t;
}

function isTableBlock(blockLines) {
  return (
    blockLines.length >= 2 &&
    blockLines.every((l) => l.trim().startsWith("|") && l.trim().endsWith("|")) &&
    blockLines.some((l) => /^\|[\s:|-]+\|$/.test(l.trim()))
  );
}

function tableToHtml(blockLines) {
  const rows = blockLines.map((l) =>
    l
      .trim()
      .replace(/^\||\|$/g, "")
      .split("|")
      .map((c) => c.trim())
  );
  const sepIdx = rows.findIndex((r) => r.every((c) => /^:?-{2,}:?$/.test(c)));
  const headerRows = sepIdx > 0 ? rows.slice(0, sepIdx) : [];
  const bodyRows = sepIdx >= 0 ? rows.slice(sepIdx + 1) : rows;
  const header = headerRows.length
    ? `<thead><tr>${headerRows[0].map((c) => `<th>${inlineFormat(c)}</th>`).join("")}</tr></thead>`
    : "";
  const body = bodyRows.length
    ? `<tbody>${bodyRows
        .map(
          (r) =>
            `<tr>${r
              .map((c) => `<td>${inlineFormat(c)}</td>`)
              .join("")}</tr>`
        )
        .join("")}</tbody>`
    : "";
  return `<table>${header}${body}</table>`;
}

function contentToHtml(content) {
  return content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";

      // Table
      const lines = trimmed.split("\n");
      if (isTableBlock(lines)) return tableToHtml(lines);

      // Heading (### / ## / #)
      const h = trimmed.match(/^#{1,4}\s+(.+)$/);
      if (h) return `<h2>${inlineFormat(h[1])}</h2>`;

      // Bullet list (- / *)
      if (trimmed.split("\n").every((l) => /^[-*]\s+/.test(l.trim()))) {
        const items = trimmed
          .split("\n")
          .map((l) => `<li>${inlineFormat(l.trim().replace(/^[-*]\s+/, ""))}</li>`)
          .join("\n");
        return `<ul>\n${items}\n</ul>`;
      }

      // Numbered list
      if (trimmed.match(/^\d+\.\s/)) {
        const items = trimmed
          .split("\n")
          .map((l) => `<li>${inlineFormat(l.replace(/^\d+\.\s+/, ""))}</li>`)
          .join("\n");
        return `<ol>\n${items}\n</ol>`;
      }

      return `<p>${inlineFormat(trimmed)}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

// ── Generate HTML per artikel ──
for (const article of ARTICLES_DATA) {
  const articleUrl = `${BASE_URL}/articles/${article.slug}`;
  const ogImage = `${BASE_URL}/og/article-${article.slug}.png`;
  const dateModified = article.dateModified || article.publishedAt;
  const faq = article.faq || [];

  const faqSchema = faq.length
    ? JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      })
    : null;

  const blogSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified,
    author: { "@type": "Person", name: article.author.name, jobTitle: article.author.role },
    publisher: {
      "@type": "Organization",
      name: "Arblok Digital",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/arblok_logo.webp` },
    },
    image: ogImage,
    keywords: article.tags.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Artikel", item: `${BASE_URL}/articles` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  });

  const faqHtml = faq.length
    ? `<section><h2>FAQ</h2>${faq
        .map((f) => `<div><h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p></div>`)
        .join("\n")}</section>`
    : "";

  const waText = encodeURIComponent(
    `Halo Arblok Digital, saya membaca artikel "${article.title}" dan ingin konsultasi gratis.`
  );
  const waUrl = `https://wa.me/6289508053795?text=${waText}`;

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(article.title)} | Arblok Digital</title>
  <meta name="description" content="${escapeHtml(article.excerpt)}">
  <meta name="robots" content="index, follow">
  <meta name="keywords" content="${escapeHtml(article.tags.join(", "))}">
  <link rel="canonical" href="${articleUrl}">
  <link rel="alternate" hreflang="id" href="${articleUrl}">
  <link rel="alternate" hreflang="x-default" href="${articleUrl}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${escapeHtml(article.title)}">
  <meta property="og:description" content="${escapeHtml(article.excerpt)}">
  <meta property="og:url" content="${articleUrl}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${escapeHtml(article.title)}">
  <meta property="og:locale" content="id_ID">
  <meta property="og:site_name" content="Arblok Digital">
  <meta property="article:published_time" content="${article.publishedAt}">
  <meta property="article:modified_time" content="${dateModified}">
  <meta property="article:section" content="${escapeHtml(article.category)}">
  ${article.tags.map((t) => `<meta property="article:tag" content="${escapeHtml(t)}">`).join("\n  ")}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(article.title)}">
  <meta name="twitter:description" content="${escapeHtml(article.excerpt)}">
  <meta name="twitter:image" content="${ogImage}">
  <script type="application/ld+json">${blogSchema}</script>
  ${faqSchema ? `<script type="application/ld+json">${faqSchema}</script>` : ""}
  <script type="application/ld+json">${breadcrumbSchema}</script>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 720px; margin: 2rem auto; padding: 0 1rem; color: #1a1a2e; line-height: 1.7; }
    h1 { font-size: 1.8rem; margin-bottom: 0.5rem; }
    h2 { font-size: 1.3rem; margin-top: 2rem; color: #E2823F; }
    h3 { font-size: 1.1rem; margin-top: 1.5rem; }
    .meta { color: #666; font-size: 0.85rem; margin-bottom: 2rem; }
    .meta span { margin-right: 1rem; }
    table { width: 100%; border-collapse: collapse; margin: 1rem 0; font-size: 0.92rem; }
    th, td { border: 1px solid #e2e8f0; padding: 0.5rem 0.6rem; text-align: left; }
    th { background: #f8fafc; }
    strong { color: #0f172a; }
    ol, ul { padding-left: 1.5rem; }
    li { margin-bottom: 0.5rem; }
    a { color: #E2823F; }
    section { margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e2e8f0; }
    .sources { font-size: 0.85rem; color: #475569; }
    .cta { margin-top: 2rem; padding: 1rem; background: #fbeedd; border: 1px solid #E2823F; border-radius: 8px; text-align: center; }
    .cta a { color: #E2823F; font-weight: bold; text-decoration: none; }
    a.back { color: #E2823F; text-decoration: none; display: inline-block; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <a class="back" href="/articles">&larr; Kembali ke Blog</a>
  <article>
    <h1>${escapeHtml(article.title)}</h1>
    <div class="meta">
      <span>${escapeHtml(article.category)}</span>
      <span>${article.publishedAt}</span>
      <span>Oleh ${escapeHtml(article.author.name)}</span>
    </div>
    <p><em>${escapeHtml(article.excerpt)}</em></p>
    ${contentToHtml(article.content)}
    ${faqHtml}
  </article>
  <div class="cta">
    <p>Butuh solusi yang sama untuk usaha, sekolah, atau instansi Anda?</p>
    <a href="${waUrl}" rel="noopener noreferrer">Diskusikan di WhatsApp &rarr;</a>
  </div>
</body>
</html>`;

  writeFileSync(join(OUT_DIR, `${article.slug}.html`), html, "utf-8");
  console.log(`✅ ${article.slug}.html`);
}

console.log(`\n✅ ${ARTICLES_DATA.length} static article pages → ${OUT_DIR}`);

// ── Sitemap (single generator — jangan edit public/sitemap.xml manual) ──
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/articles", priority: "0.9", changefreq: "weekly" },
  { path: "/consultant", priority: "0.8", changefreq: "monthly" },
  { path: "/referral", priority: "0.7", changefreq: "monthly" },
];

const urlEntry = (loc, lastmod, changefreq, priority) =>
  `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

const entries = staticRoutes.map((r) =>
  urlEntry(`${BASE_URL}${r.path}`, today, r.changefreq, r.priority)
);

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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), sitemap, "utf-8");
console.log(`✅ sitemap.xml updated (${entries.length} URLs)`);