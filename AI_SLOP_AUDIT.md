# AI Slop Audit — Arblok Digital Company Profile

**Date:** 2026-07-25
**Skill:** Hallmark (Nutlope/hallmark) — 57 quality gates
**Source of Truth:** `design.md` (locked token system & CTA voice)

---

## 1. Hero CTA — Conflicting button classes ❌ → ✅

| Before | After |
|--------|-------|
| `border border-accent border-none bg-accent text-accent text-accent-ink` | `border border-accent text-accent bg-transparent hover:bg-accent hover:text-accent-ink` |
| Solid-filled (conflict: `border-none` + `bg-accent` contradicts `border-accent` + `text-accent`) | Outlined per design.md: "Primary: outlined button, no fill, thin border" |

**Hallmark gate:** CTA voice compliance — design.md `CTA voice / Primary`

---

## 2. Fake Invented Metrics — About.tsx banner ❌ → ✅

**Before:**
- 100% Kode Reusable
- Zero Duplikasi

**After:**
- 8+ Produk Live
- 1 Fondasi Kode

Verifiable metrics: 8+ live products listed in portfolio (KasirPro F&B, KasirPro Grosiran, E-Warga, SekolahRapi, SekolahPro, Solana Warung, Onyx Terminal, Sanajan QR Order, CoordinationApp). Single monorepo foundation.

**Hallmark gate:** Honest-copy — never fabricate metrics.

---

## 3. LLM-ism Copy — Rewrite Summary

### Hero.tsx subtitle
**Before ID:** "Kami merancang sistem digital yang kokoh, manusiawi, dan tumbuh bersama bisnis Anda."
**After ID:** "Kami bikin sistem digital yang beneran dipakai — dari kasir warung sampai portal sekolah."

**Before EN:** "We craft honest digital systems that grow with your business."
**After EN:** "We build digital systems that people actually use — from warung POS to school portals."

### About.tsx subheading
**Before:** "Menyatukan keandalan arsitektur monorepo dengan kepintaran AI untuk menghadirkan platform digital yang tangguh, efisien, dan siap bersaing."
**After:** "Arsitektur monorepo di setiap proyek. Satu fondasi kode untuk semua produk — dari aplikasi kasir hingga portal sekolah."

### About.tsx missions
**Before ID:** "Perangkat Lunak Kokoh", "Efisiensi Birokrasi", "Integrasi AI Terapan"
**After ID:** "Produk Nyata", "Efisiensi Operasional", "AI Itu Alat, Bukan Gimik"

### About.tsx vision
**Before:** "Menjadi motor penggerak digitalisasi nasional yang memberdayakan bisnis, UMKM, dan institusi melalui AI dan teknologi web modern"
**After:** "Digitalisasi nasional dimulai dari daerah. Kami bangun sistem yang bikin UMKM dan instansi publik bisa naik kelas — tanpa perlu modal besar atau tim IT khusus."

### Services.tsx
| Removed | Reason |
|---------|--------|
| "premium" (×3) | Anti-pattern #12: "premium" as filler adjective |
| "eksklusif" | Anti-pattern #14: invented exclusivity |
| "mulus" | Padded transition word |
| "seamless" (EN) | Same, Hallmark slop-test |
| "Bukan sekadar agensi web. Kami..." | Template phrase "Not just X, we Y" — Hallmark anti-pattern #8 |

**Hallmark gates:** Anti-patterns #1 (triple-adjective), #8 (template phrase), #12 (premium filler), #14 (invented exclusivity)

---

## 4. "Premium" Metadata — Cleaned ✅

| File | Before | After |
|------|--------|-------|
| `index.html` `<title>` | `Premium Software House & Digital Agency` | `Software House & Digital Agency` |
| `index.html` `og:title` | `Premium Software House & Digital Agency` | `Software House & Digital Agency` |
| `index.html` `twitter:title` | `Premium Software House & Digital Agency` | `Software House & Digital Agency` |
| `index.html` `og:description` | `yang tangguh, scalable, dan terintegrasi AI` | `yang scalable dan terintegrasi AI` |
| `index.html` `twitter:description` | `yang tangguh, scalable, dan terintegrasi AI` | `yang scalable dan terintegrasi AI` |
| `manifest.json` `name` | `Premium Software House & Digital Agency` | `Software House & Digital Agency` |
| `llms.txt` | `Premium landing pages` | `Landing pages` |
| `prerendered/home.html` `<title>` | `Premium Software House` | `Software House` |
| `prerendered/home.html` services | `Landing page premium` + `Desain UI/UX eksklusif` | `Landing page` + `Desain custom` |

**Remaining:** 1 match in `src/data/articles.ts` — "Premium packaging" within article content (legitimate context, not brand tagline). Acceptable.

---

## 5. Buzzword Grep — Remaining in Components

Grep: `premium|seamless|mulus|tangguh|scalable|terintegrasi|eksklusif|cutting-edge`

| File | Remaining | Verdict |
|------|-----------|---------|
| `src/components/Portfolio.tsx` | "terintegrasi" in feature list | Acceptable — concrete feature description |
| `src/components/Services.tsx` | "terintegrasi" in feature list | Acceptable — concrete feature description |
| `src/components/Hero.tsx` eyebrow | "Studio Inovasi Web & AI" | Borderline — can refine later, not a priority |
| `LanguageContext.tsx` | Multiple buzzwords | Dead code — see #6 |
| `src/data/articles.ts` | scattered | Article content, not brand copy — out of scope |
| `public/articles/*.html` | scattered | Prerendered articles — out of scope |

---

## 6. Dead Code — LanguageContext.tsx ⚠️

**Findings:**
- 40+ translation keys defined
- Only **7 keys** actually called via `t()` across all components:
  - `hero.cta_consultant` (Hero.tsx)
  - `hero.cta_portfolio` (Hero.tsx)
  - `nav.vision` (Navbar.tsx)
  - `nav.services` (Navbar.tsx)
  - `nav.portfolio` (Navbar.tsx)
  - `nav.articles` (Navbar.tsx)
  - `nav.cta` (Navbar.tsx) × 2

**Recommendation:** Separate refactor — extract surviving keys into Navbar/Hero directly (or a minimal `useTranslations` hook), remove LanguageContext entirely. Skipped per task instruction: "JANGAN hapus dulu tanpa cek build."

---

## 7. PWA / Manifest — Theme Colors Fixed ✅

**manifest.json:**
- `background_color`: `#020617` (old dark) → `#F5F0E8` (warm paper)
- `theme_color`: `#06b6d4` (old cyan) → `#F5F0E8` (warm paper)

This was a **high-severity PWA bug** — opening the site as installed PWA showed wrong status bar color.

---

## Build Verification

| Check | Result |
|-------|--------|
| `tsc --noEmit` | **0 errors** ✅ |
| `vite build` | **0 errors, 1696 modules** ✅ |
| Changes commit | `c715f68` (pending next deploy) |

---

## Files Modified (7 files)

```
src/components/Hero.tsx                  — button classes + subtitle rewrite
src/components/About.tsx                 — full copy rewrite, fake metrics fixed
src/components/Services.tsx              — removed premium/eksklusif/mulus/seamless
index.html                               — removed Premium from all metadata
public/manifest.json                     — Premium + theme_color/background_color
public/llms.txt                          — Premium removed
public/prerendered/home.html             — Premium + buzzwords removed
public/portfolio/sanajan-qr-order.html   — tangguh + premium removed
```
