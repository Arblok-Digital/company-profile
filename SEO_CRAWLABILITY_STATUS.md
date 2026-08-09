# SEO / IEO / GEO / AI Crawlability — Status Tervalidasi

> **Dokumen ini adalah source of truth.** Semua status di bawah ini **dikonfirmasi lewat
> pengujian langsung** (curl + browser console + build produksi lokal), bukan asumsi dari
> commit message atau laporan audit semata.
>
> **Aturan buat agent manapun yang kerja di repo ini:** jangan klaim "sudah fix" hanya
> berdasarkan commit message atau membaca source code. Validasi dulu ke local repo / build
> production, baru laporkan status.

Terakhir divalidasi: **2026-08-09** — audit ulang penuh + Fase 2 selesai (`npm run build` 0 error, server production dist dites via curl).

---

## 1. Isu yang Sudah Fixed (Confirmed)

### 1.1 Canonical Mismatch — FIXED ✅
**Masalah lama:** Artikel punya `<link rel="canonical">` ke URL tanpa ekstensi `.html`, padahal URL itu sendiri di-serve SPA shell kosong oleh Vercel (canonical bertentangan sendiri).

**Fix:** Rewrite rule di `vercel.json`, dipasang sebelum catch-all:
```json
{ "source": "/articles/:slug", "destination": "/articles/:slug.html" }
```

**Validasi (live, 2026-08-09):**
`curl -sI https://arblok-digital.vercel.app/articles/fee-marketplace-makin-besar-2026-potongan-shopee-tokopedia-tiktok-shop`
→ `200 OK` + `Content-Disposition: inline; filename="....html"`, isi HTML = artikel penuh (canonical, BlogPosting, FAQPage, BreadcrumbList).

---

### 1.2 Nav/Footer `<button>` → `<a>`/`<Link>` — FIXED ✅
**Validasi live (2026-08-09):** `nav` berisi **9 `<a href>`** dan **2 `<button>`** (language switcher + hamburger). Keduanya adalah toggle UI, bukan link.

**Yang HARUS tetap `<button>`** (bukan navigasi):
- Language switcher desktop
- Language switcher mobile (muncul saat menu mobile terbuka)
- Hamburger menu toggle

```js
document.querySelectorAll('nav a[href]').length  // 9
document.querySelectorAll('nav button').length   // 2 (saat menu mobile tertutup)
```

---

### 1.3 llms.txt — pola baru (lebih tahan drift) — FIXED ✅
**Perubahan pola (2026-08-09):** llms.txt **tidak lagi** memuat daftar artikel manual. Sekarang:
- Artikel dirujuk ke `sitemap.xml` — "Article URLs and their latest modification dates are listed in the XML sitemap".
- 3 snapshot AI-crawler: `home.html`, `consultant.html`, `referral.html`.
- Entity notes konsisten (nama, kota, founder, WhatsApp, email, catatan koordinat tingkat kota).
- `Last updated: 2026-08-09`.

**Validasi:** `curl -s https://arblok-digital.vercel.app/llms.txt` → memuat 3 snapshot + referensi sitemap.

---

### 1.4 Sitemap.xml — FIXED ✅ (13 URL)
**Kondisi sekarang:** 4 halaman statis (`/`, `/articles`, `/consultant`, `/referral`) + 9 artikel = **13 URL**.
- `lastmod` artikel = `dateModified` (data nyata, bukan `publishedAt`).
- Generator baca langsung dari `src/data/articles.ts` (single source): `scripts/prerender-articles.mjs` dan `scripts/generate-sitemap.mjs`.

**Validasi (local prod server, 2026-08-09):** sitemap berisi 13 `<loc>`, termasuk `/referral`.

---

## 2. Fase 2 — SELESAI (2026-08-09)

| # | Item backlog lama | Status | Implementasi |
|---|---|---|---|
| 1 | Schema `sameAs` | ✅ (terbatas) | `sameAs: ["https://wa.me/6289508053795"]` di `index.html` (ProfessionalService) + `prerender-site.mjs`. LinkedIn/GitHub ditunda — profil resmi belum ada, dan mengarang URL dilarang. |
| 2 | `LocalBusiness` / geo | ✅ (tingkat kota) | `geo: { latitude: -7.3268, longitude: 108.2208 }` — koordinat kota Tasikmalaya. Koordinat alamat jalan **sengaja tidak dipasang** (sesuai catatan llms.txt: alamat jalan tidak dipublikasikan). |
| 3 | `WebSite` + `SearchAction` | ✅ WebSite tanpa SearchAction | `WebSite` + `@id #website`, `publisher: #organization`, `inLanguage`. `SearchAction` **sengaja TIDAK dipasang** — situs belum punya halaman hasil pencarian; schema palsu berisiko. Dipasang ulang kalau fitur search benar-benar ada. |
| 4 | `dateModified` artikel | ✅ | Field `dateModified?: string` di `src/types.ts`; diisi `2026-08-09` untuk 9 artikel (`src/data/articles.ts`). Dipakai di BlogPosting JSON-LD, `article:modified_time`, dan `lastmod` sitemap. Sudah tidak hardcode = `datePublished`. |
| 5 | OG image unik per artikel | ✅ | Script baru `scripts/gen-og-articles.mjs` (pakai `@napi-rs/canvas`) → `public/og/article-[slug].png` (1200x630, palet brand). Dipakai di `og:image`, `twitter:image`, dan BlogPosting `image`. |
| 6 | `contentToHtml()` lengkap | ✅ | Kini menangani: heading `###` → `<h2>`, bullet `-`/daftar, list bernomor, **tabel pipa** → `<table>`, bold, italic, dan URL otomatis jadi link. |
| 7 | Drift data source | ✅ ditutup | `prerender-articles.mjs` **import langsung dari `src/data/articles.ts`** (dijalankan via `tsx`). Copy hardcoded di dalam script dihapus; `generate-sitemap.mjs` ikut baca dari sumber yang sama. |
| 8 | Hindari edit manual HTML artikel | ✅ dipatuhi | Semua 9 file `public/articles/*.html` di-regenerate dari data. Daftar "Sumber Data" milik 2 artikel baru (fee marketplace dan SPMB) dipindah dulu ke `articles.ts` sebelum regenerasi agar tidak hilang. |

**Meta tambahan di artikel statis:** `hreflang` id + x-default, `article:published_time`, `article:modified_time`, `article:section`, `article:tag`, `og:image:width/height/alt`, `meta:keywords`, CTA WhatsApp kontekstual per artikel.

**Hasil validasi fase 2 (local prod server):**
- Artikel fee: 9 `<h2>`, 1 `<table>` (simulasi margin), FAQ lengkap, "Sumber Data", `hreflang` id+x-default, OG unik, `dateModified: 2026-08-09`.
- Homepage: 4 blok JSON-LD valid (semua ter-parse, 0 error).
- 9 file OG image terbaca `image/png`, 200 OK.

---

## 3. Belum Dikerjakan (sengaja — menunggu konfirmasi Ardi)

| Item | Alasan ditunda |
|---|---|
| `twitter:site` / `twitter:creator` | Tidak ada handle resmi terverifikasi. Mengarang handle = data palsu. |
| `sameAs` LinkedIn / GitHub | Profil resmi belum ada. |
| Alamat jalan / koordinat presisi | llms.txt menyatakan tidak dipublikasikan sebagai fakta terverifikasi. |
| `SearchAction` (Sitelinks Search Box) | Membutuhkan halaman hasil pencarian sungguhan. |
| Schema Review/testimonial | Menghindari Google manual action; butuh testimoni asli klien (KasirPro, E-Warga, SekolahRapi). |

---

## 4. Lesson Learned

1. **Klaim ≠ kenyataan:** commit message bukan bukti. Validasi wajib via curl + browser terhadap hasil LIVE (atau build lokal production).
2. **Vercel build cache:** perubahan tidak kelihatan di production → redeploy dengan **"Skip Build Cache"** dicentang.
3. **Satu sumber data:** artikel kini bersumber tunggal dari `src/data/articles.ts`. JANGAN edit `public/articles/*.html` atau `public/sitemap.xml` manual, dan jangan kembalikan copy hardcoded ke dalam script.
4. **Script yang import `.ts` harus dijalankan dengan `tsx`** — `prerender-articles.mjs`, `gen-og-articles.mjs`, `generate-sitemap.mjs` (jangan `node ...` langsung).

---

## 5. Struktur File Relevan (Jangan Dihapus)

```
public/
├── articles/*.html       ← 9 artikel statis (dari src/data/articles.ts)
├── og/article-*.png      ← 9 OG image unik per artikel
├── prerendered/
│   ├── home.html         ← snapshot homepage (noindex, untuk AI crawler)
│   ├── consultant.html   ← snapshot consultant page
│   └── referral.html     ← snapshot referral page
├── og-image.png          ← OG utama (homepage & halaman lain)
├── llms.txt              ← referensi AI crawler (Last updated: 2026-08-09)
├── sitemap.xml           ← 13 URL; WAJIB di-regenerate, jangan edit manual
├── robots.txt            ← AI crawlers allowed
└── manifest.json / sw.js ← PWA

src/
  components/Navbar.tsx, Footer.tsx   ← pakai <Link>, jangan revert ke <button>
  data/articles.ts                    ← SINGLE SOURCE artikel (termasuk dateModified)
  types.ts                            ← Article.dateModified?: string

scripts/
  prerender-articles.mjs   ← artikel + sitemap dari src/data/articles.ts (via tsx)
  gen-og-articles.mjs      ← OG image per artikel (via tsx)
  prerender-site.mjs       ← snapshot home/consultant/referral (node)
  generate-sitemap.mjs     ← generator sitemap terpisah (via tsx)
  gen-og.mjs               ← og-image.png utama
  gen-og-articles.mjs

package.json:
  "prerender": "tsx scripts/gen-og-articles.mjs && tsx scripts/prerender-articles.mjs && node scripts/prerender-site.mjs"

vercel.json   ← rewrite /articles/:slug → .html, headers keamanan
server.ts     ← Express: proxy AI chat + static dist (route /articles/:slug sudah ada)
```

---

## 6. Protokol Perubahan (ringkas)

1. Ubah data artikel → **hanya** edit di `src/data/articles.ts` (title/excerpt/content/faq/dateModified). JANGAN sentuh file statis/sitemap manual.
2. Jalankan `npm run build` sampai 0 error (lint + prerender + vite + server). 
   Kalau hanya artikel berubah tanpa UI: cukup `npm run prerender`.
3. Tes lokal: `NODE_ENV=production PORT=3006 node dist/server.cjs`, lalu curl cek artikel, sitemap, og image, homepage.
4. Tunjukkan ke Ardi di localhost terlebih dahulu, baru commit + push.
5. Setelah deploy: validasi live (canonical, og:image, sitemap, llms.txt). Jangan klaim "sudah fix" tanpa bukti.