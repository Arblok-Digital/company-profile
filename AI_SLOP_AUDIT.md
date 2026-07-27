# AI Slop Audit — Round 2

**Date:** 2026-07-25

---

## STEP 1 — Expanded Scope

| File | Temuan | Hallmark Gate | Status |
|------|--------|---------------|--------|
| Navbar.tsx | ✅ Bersih (tidak ada LLM-ism). Ganti `t()` ke inline constants. | — | ✅ |
| Footer.tsx | ❌ **Line 31:** "Modern, manusiawi, dan dibangun untuk bertumbuh" | Anti-pattern #1: triple-adjective | ✅ Fixed |
| Portfolio.tsx | ✅ Semua copy konkret per produk, tidak ada filler. `"terintegrasi"` di feature list → describing concrete feature (BOS fund + payroll integrated) — acceptable | — | ✅ OK |
| AiConsultant.tsx | ✅ Tidak pake LanguageContext. Copy standar. | — | ✅ |
| Articles.tsx | ❌ **Line 184:** "Artikel Inovasi Teknologi" → kata "Inovasi" filler. | Anti-pattern #12 | ✅ Fixed |

---

## STEP 2a — LanguageContext.tsx Dead Code

**Sebelum:** 163 lines, 40+ translation keys, hanya 7 yang dipakai.
**Sesudah:** 34 lines, hanya LanguageProvider + useLanguage hook. Semua `t()` dipindah jadi inline constants langsung di komponen.

**File diffs:**
- `LanguageContext.tsx` — hapus translations dictionary & `t()` function (163→34 lines)
- `Navbar.tsx` — `t("nav.*")` → inline `navLabels` object
- `Hero.tsx` — `t("hero.cta_*")` → inline `heroLabels` object

**Build:** ✅ `tsc` 0 error, `vite build` 0 error, bundle -6kB (375→369 kB)

---

## STEP 2b — Buzzword Borderline Fix

| Item | Before | After |
|------|--------|-------|
| Hero eyebrow ID | "Studio Inovasi Web & AI" | "Kami bikin kasir, portal sekolah, & sistem kelurahan" |
| Hero eyebrow EN | "Web & AI Innovation Studio" | "We build POS, school portals, & village systems" |
| Footer ID | "Modern, manusiawi, dan dibangun untuk bertumbuh" | "Satu fondasi kode untuk semua produk." |
| Footer EN | "Modern, human, built to grow" | "One codebase for every product." |
| Articles title ID | "Artikel Inovasi Teknologi" | "Artikel & Wawasan Teknologi" |
| Articles title EN | "Tech Innovation Articles" | "Tech Articles & Insights" |

---

## STEP 3 — Deploy Status

**Commit lokal:** `a7ecf79` — round2: hapus LanguageContext t(), fix Footer triple-adj, Hero eyebrow, Articles Inovasi

⚠️ **Belum push ke origin/main** — menunggu konfirmasi user.

---

# ⚠️ GUARDRAILS — Copy & Design Rules (Permanent)

> Berlaku untuk semua perubahan copy/design ke depannya.

### Pola kalimat yang DILARANG
- ❌ Triplet-adjective: "X, Y, dan Z" untuk 3 kata sifat berturutan
- ❌ Negation-opener template: "Bukan sekadar X. Kami Y" — pola LLM umum
- ❌ Invented/unverifiable metrics: angka too-perfect tanpa data pendukung
- ❌ Kata buzzword generic: premium, eksklusif, seamless/mulus, cutting-edge, terintegrasi (kecuali describing fitur teknis konkret), revolutionary, next-level, holistic
- ❌ Verbatim copy-paste kalimat/frasa yang sama persis di 2+ komponen berbeda

### Layout/struktur
- Hero/section TIDAK BOLEH cuma jadi: badge → headline → subtitle → 2 CTA → stats bar. Itu skeleton default AI page-builder.
- Tombol CTA primary = outlined + border-2/font-medium, BUKAN filled/solid (bg-accent). Cross-check ke design.md tiap ubah button.
- Urutan standar: eyebrow → headline → subtitle → CTA (context before action).

### WAJIB dicek sebelum lapor selesai
1. `grep -rniE "premium|eksklusif|seamless|mulus|tangguh|scalable" src/components/*.tsx` → 0 hasil
2. **Cek `scripts/prerender-site.mjs` dan `public/prerendered/*.html`** — file ini SUMBER TERPISAH yang mudah kelupaan. Kalau ubah copy di Hero/About/Services, WAJIB sync manual ke sini.
3. `tsc --noEmit && vite build`, 0 error
4. Commit lokal dulu, JANGAN auto-push — tunggu approve

---

# Known Risks & Technical Debt

### Prerender drift (high risk)
`scripts/prerender-site.mjs` berisi **hardcoded copy duplikat** dari Hero.tsx, Services.tsx, About.tsx, dan Portfolio.tsx. Setiap perubahan copy di komponen React WAJIB di-sync manual ke file ini, lalu `node scripts/prerender-site.mjs` dijalankan untuk regenerate `public/prerendered/*.html`. AI crawler membaca file ini via `llms.txt`, bukan komponen React.

**Ideal fix:** refactor prerender-site.mjs untuk import string dari shared constants file, bukan duplikasi manual. Scope besar — skip untuk sekarang.
