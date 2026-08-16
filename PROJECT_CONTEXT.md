# Arblok Digital — Project Context

> Dokumen ini untuk AI assistant (atau developer baru) yang接手 project ini. Baca dulu sebelum tanya atau ngerjain apa-apa.
>
> **SEO/IEO Status**: Baca `SEO_CRAWLABILITY_STATUS.md` untuk status tervalidasi (canonical, llms.txt, sitemap, nav crawlability). Jangan klaim "sudah fix" tanpa validasi ke live URL production.

---

## 1. IDENTITAS PROYEK

- **Nama**: Arblok Digital
- **Tipe**: Company profile + AI consultant demo + blog
- **Owner/Founder**: Ardi (Tasikmalaya, Jawa Barat, Indonesia)
- **Live URL**: https://arblok-digital.vercel.app/
- **Branding**: Dark warm graphite (oklch(0.16 0.012 70)) + burnt orange accent (#E2823F) + emerald status
- **Bahasa**: Bilingual ID/EN via LanguageContext + manual conditionals

## 2. WORKFLOW & ENVIRONMENT

**PENTING**: Project ini di-build di **Google AI Studio** (cloud IDE), BUKAN di local.

### Alur kerja:
1. Ardi coding di AI Studio (cloud sandbox, web-based)
2. Push dari AI Studio → GitHub
3. GitHub connected ke Vercel → auto-deploy
4. Vercel detect Vite → `npm run build` → live

### Konsekuensi:
- **File `index.html` di repo = template Vite polos** (13 baris)
- **Meta tags & JSON-LD di-inject** via `useEffect` di runtime ATAU di-handle AI Studio di cloud (TIDAK terlihat di source zip download)
- **AI Studio sering rate-limited** — makanya Ardi kerja paralel di local
- **Local folder = mirror** dari cloud, edit di sini harus di-sync balik ke cloud (manual copy-paste atau git push dari local)

### Keterbatasan:
- AI Studio sandbox iframe TIDAK support path-based routing yang refresh (hash `#` dulu dipakai, sekarang sudah pake React Router path routing)
- AI Studio nge-keep `vercel.json` 100% (tidak di-overwrite)
- `/public/` file otomatis ke-deploy via Vite build

## 3. TECH STACK (LOCKED)

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.0.1 |
| Build | Vite | 6.2.3 |
| Language | TypeScript | 5.8.2 |
| Styling | Tailwind CSS | 4.1.14 (via @tailwindcss/vite) |
| Animation | Motion (Framer Motion) | 12.x |
| Icons | lucide-react | 0.546 |
| AI SDK | @google/genai | 2.4.0 |
| Backend | Express | 4.21 (local dev) + Vercel serverless (prod) |
| Deployment | Vercel | auto-detect Vite |

## 4. STRUKTUR FOLDER

```
Arblok-Digital--main/
├── api/
│   └── chat.ts                  # Vercel serverless function (production)
├── assets/
│   └── .aistudio/              # AI Studio internal (jangan diedit)
├── public/
│   ├── arblok_logo.jpg         # 648KB, perlu optimasi
│   └── portfolio/
│       ├── coordination.jpg
│       ├── e-warga.jpg
│       ├── kasirpro-grosir.jpg
│       ├── kasirpro.jpg
│       ├── onyx.jpg
│       ├── sekolah-pro.jpg
│       └── solana-warung.jpg
│   ├── arblok_logo.webp           # 28KB (was 648KB JPG)
│   ├── icon-192.png               # PWA icon
│   ├── icon-512.png               # PWA icon
│   ├── manifest.json              # PWA manifest
│   ├── sw.js                      # Service worker (cache-first)
├── src/
│   ├── components/
│   │   ├── About.tsx           # Visi & Misi section
│   │   ├── AiConsultant.tsx    # Chat interface (calls /api/chat)
│   │   ├── Articles.tsx        # Blog + dynamic JSON-LD injection
│   │   ├── ErrorBoundary.tsx   # React error boundary + WhatsApp CTA
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx       # 443 baris, 22KB (data BAKED IN)
│   │   └── Services.tsx
│   ├── data/
│   │   └── articles.ts         # 400 baris, bilingual articles
│   ├── App.tsx                 # React Router path routing (/, /articles, /consultant)
│   ├── LanguageContext.tsx     # Translation provider
│   ├── main.tsx                # Entry point
│   ├── types.ts                # TypeScript interfaces
│   └── index.css               # Tailwind 4 + custom utilities
├── server.ts                   # Express dev server (DUPLIKASI logic dgn api/chat.ts)
├── index.html                  # Template Vite polos (13 baris)
├── metadata.json               # AI Studio config
├── package.json
├── vercel.json                 # Vercel config (rewrites + security headers)
├── vite.config.ts
├── tsconfig.json
└── README.md                   # Template Google AI Studio
```

## 5. KONVENSI CODING

- **No AI terminology di copy** — "kecerdasan buatan" atau singkatan teknis, BUKAN "AI" di marketing copy (sesuai instruksi founder)
- **Bilingual pattern**: hardcode inline `language === "id" ? ... : ...`, BUKAN pakai `t("key")` di components
- **Routing**: React Router path routing (`/`, `/articles`, `/consultant`). Old hash `#articles` → `/articles`, `#ai-consultant` → `/consultant` via OldHashRedirect
- **Pricing flexibility**: Sales copy tidak pernah tolak budget — selalu tawarkan starter/MVP
- **WhatsApp CTA**: `https://wa.me/6289508053795` (Ardi, founder)

## 6. STATE MANAGEMENT

- `useState` lokal per component (no Redux/Zustand)
- `LanguageContext` untuk bahasa (localStorage-backed, key: `arblok_lang`)
- Hash sync di `App.tsx` useEffect — handle bookmarking + direct URL
- AI chat history di state lokal `AiConsultant.tsx`

## 7. KEY COMPONENTS — APA YANG DILAKUKAN

| Component | Fungsi | Catatan |
|-----------|--------|---------|
| `Navbar.tsx` | Fixed nav + language switcher + mobile menu | React Router `<Link>` (bukan `<button>`) |
| `Hero.tsx` | Landing hero + fake code mockup + CTA | React Router for internal links |
| `About.tsx` | Visi/Misi + monorepo narrative | Bilingual hardcoded |
| `Services.tsx` | 4 service cards + CTA banners | Bilingual hardcoded |
| `Portfolio.tsx` | 7 projects grid + filter | 443 baris, data BAKED IN (refactor nanti) |
| `Articles.tsx` | Blog list + detail view | **Inject JSON-LD dinamis (BlogPosting + FAQPage)** |
| `AiConsultant.tsx` | Chat UI, call `/api/chat` | Provider switcher: auto/gemini/nvidia |
| `Footer.tsx` | 4-column footer + WA CTA | Bilingual hardcoded |

## 8. BACKEND ARCHITECTURE

### Dual backend (DRY violation, refactor nanti):

**`/server.ts`** (347 baris) — Local dev only
- Express + Vite middleware mode
- `npm run dev` → `tsx server.ts`
- 3-tier fallback: Gemini → NVIDIA NIM → OpenRouter

**`/api/chat.ts`** (330 baris) — Vercel production
- VercelRequest/Response handler
- Same logic, beda wrapper
- Auto-detect OpenRouter key format (sk-or-*) → route to OR

### AI Providers (priority order):
1. **Google Gemini**: gemini-2.5-flash → 2.0-flash → 1.5-flash → 1.5-pro
2. **NVIDIA NIM**: nemotron-3-ultra → super → llama-3.3-70b → nemotron-4 → llama-3.1-70b
3. **OpenRouter** (fallback): nemotron → llama-3.3 → llama-3.1 → openrouter/auto

### Environment variables (`.env`):
- `GEMINI_API_KEY` (required)
- `NVIDIA_API_KEY` (optional)
- `OPENROUTER_API_KEY` (optional)
- `VITE_SUPABASE_URL` (legacy, not used in current build)
- `VITE_SUPABASE_ANON_KEY` (legacy)
- `APP_URL` (AI Studio injected)

### System instruction (Arblok AI Consultant persona):
- Warm, empathetic Indonesian tone
- NEVER reject client based on budget
- Always push to WhatsApp: https://wa.me/6289508053795
- Emphasize monorepo, zero-cost, Solanas Warung Top 100 Google

## 9. SEO & IEO — CURRENT STATE

### Yang SUDAH done (verified di live):
- [x] Title tag: "ARBLOK Digital | Premium Software House & Digital Agency - Tasikmalaya"
- [x] Meta description (155 char)
- [x] Canonical URL
- [x] OG tags (title, description, image, url, locale, site_name)
- [x] Twitter Cards (summary_large_image)
- [x] JSON-LD: ProfessionalService schema
- [x] HTML lang="id"
- [x] robots: index, follow
- [x] HSTS enabled (Vercel default)
- [x] Dynamic BlogPosting + FAQPage schema via useEffect (Articles.tsx)

### Yang UDAH done (AUDIT 18 JUL 2026):
- [x] `public/robots.txt` — ✅
- [x] `public/sitemap.xml` — ✅ (auto-generated via `scripts/generate-sitemap.mjs`)
- [x] `public/llms.txt` — ✅
- [x] `public/og-image.png` — ✅
- [x] `public/arblok_logo.webp` — ✅ (648KB → 28KB, -96%)
- [x] `vercel.json` security headers + rewrite fix — ✅
- [x] hreflang ID/EN — ✅
- [x] PWA (`manifest.json`, `sw.js`, icons) — ✅
- [x] ErrorBoundary — ✅
- [x] React Router migration (hash → path routing) — ✅
- [x] Static fallback meta tags di `index.html` — ✅


### Yang UDAH done (AUDIT 22-23 JUL 2026 - SEO/IEO Fix):
- [x] Hapus fake Product/AggregateRating JSON-LD (risiko Google manual action) — ✅
- [x] Breadcrumb schema: update hash URLs → path routing URLs — ✅
- [x] Static article pages: `public/articles/[slug].html` — AI crawler readable tanpa JS — ✅
- [x] Sitemap auto-generated dari articles data (`scripts/generate-sitemap.mjs`) — ✅
- [x] Prerender script (`scripts/prerender-articles.mjs`) — generate HTML + JSON-LD baked — ✅
- [x] BlogPosting + FAQPage JSON-LD baked ke static HTML — ✅
- [x] GA4 ID (`G-GHKVV2YQE2`) — ✅
- [x] Google Search Console verification — ✅
- [x] Canonical mismatch fix: `vercel.json` rewrite `/articles/:slug` → `.html` — ✅
- [x] Navbar/Footer `<button>` → `<Link>` (crawlable internal links) — ✅
- [x] `llms.txt`: 7 artikel link ditambahkan — ✅
- [x] React Router path routing (`/`, `/articles`, `/consultant`) — ✅
- [x] PWA manifest + service worker — ✅
- [x] `public/prerendered/home.html` + `consultant.html` untuk AI crawler — ✅

### Yang PERLU dilakukan (Fase 2):
- [ ] Schema `sameAs` tambah LinkedIn/GitHub (Knowledge Panel)
- [ ] `LocalBusiness` schema (geo coordinates Tasikmalaya)
- [ ] `WebSite` + `SearchAction` schema (Sitelinks Search Box)
- [ ] `dateModified` artikel — jangan hardcode sama dengan `datePublished`
- [ ] OG image unik per artikel
- [ ] Google My Business listing — klaim + optimasi

### Yang Sudah Manual (Done):
- [x] GA4 ID (`G-GHKVV2YQE2`) — configured di `index.html`
- [x] Search Console verification (`RkF0KYjHZOgzBy-BxiyVmGqdNUDnmqdEumhbR7uyRbw`) — configured di `index.html`

### Yang Masih Manual (Belum):
- [ ] GMB listing — klaim Google Business Profile (butuh akses Google oleh Ardi)

## 10. PRODUK / PORTFOLIO (7 ITEMS)

| ID | Title | Category | Status | Live Link |
|----|-------|----------|--------|-----------|
| e-warga | E-Warga | Web Application | Production-ready | (no link) |
| kasirpro | KasirPro F&B | Web Application | Production-ready | https://kasirpro-fnb-app.vercel.app/ |
| kasirpro-grosir | KasirPro Grosiran | Web Application | Production-ready | https://kasirproid-app-grosiran.vercel.app/ |
| sekolah-pro | SekolahPro | Web Application | Production-ready | https://sekolah-pro.vercel.app/ |
| onyx | Onyx Terminal | AI & Automation | Production-ready | https://onyx-terminal-v1.vercel.app/ |
| solana-warung | Solana Warung | Web3 & Blockchain | Production-ready + Top 100 Google | (no link) |
| coordination | CoordinationApp | Web Application | Featured | (no link) |

**Credential ID (Solana Warung)**: JVC2605-N74Z-Y7DN
**Verify**: https://goo.gle/jvc-cert-verifier

## 11. KNOWN ISSUES & DEBT

1. **server.ts + api/chat.ts duplikasi 95%** — refactor ke `src/lib/ai-providers.ts`
2. **LanguageContext translation keys dead code** — components hardcode bilingual
3. **Portfolio.tsx 443 baris** — data baked in, susah maintain
4. ~~**No error boundary di App.tsx**~~ ✅ SUDAH — ErrorBoundary.tsx wrapping App
5. ~~**Logo 648KB**~~ ✅ SUDAH — compressed to 28KB WebP
6. ~~**No static fallback meta**~~ ✅ SUDAH — meta tags hardcoded di index.html
7. **AI Studio rate limit** — workflow blocker kalau edit panjang
8. **AGENTS.md rule "JANGAN migrate React Router" outdated** — sudah dimigrasi, need update

## 12. YANG PERLU DITANYAIN KE USER (BUKAN DI-ASUMSI)

1. **Apakah meta tags di-inject oleh AI Studio di cloud (tidak muncul di source)?** — CONFIRMED YES via audit 17 Jul 2026
2. **Apakah perlu hardcode fallback meta di index.html?** — Currently planned, low priority
3. **Apakah mau refactor server.ts / LanguageContext dead code?** — Low priority, cosmetic
4. **Kapan mau bikin OG image branded?** — Owner decision, butuh design tool

## 13. CARA KERJA YANG BENAR (ONBOARDING)

Kalau接手 project ini:
1. **JANGAN langsung refactor** — baca dulu konteks
2. **Confirm dengan Ardi** sebelum ngerjain apapun yang break existing functionality
3. **Test di local** sebelum push (`npm run dev`)
4. **Push via git local** (bukan via AI Studio) kalau kena rate limit
5. **Verify di Vercel** setelah push (cek deployment logs)
6. **Document setiap perubahan** di file ini atau commit message yang jelas

## 14. BUILD & DEPLOY COMMANDS

```bash
# Install deps
npm install

# Local dev (Express + Vite middleware)
npm run dev

# Type check
npm run lint

# Build (Vite + esbuild server bundle)
npm run build

# Production local serve
npm start

# Clean build artifacts
npm run clean
```

**Vite Windows quirk**: `npx vite` HANGS di terminal tool. Pakai:
```bash
node node_modules/vite/bin/vite.js build
node_modules/.bin/vite --host
```

## 15. CONTACT & ESCALATION

- **Founder WhatsApp**: https://wa.me/6289508053795
- **Founder email**: ardiblokchine@gmail.com
- **Style komunikasi**: Casual Indo ("bro", "gue"), fast-iterative, real-talk > over-promise
- **Fix one module at a time** — jangan big-bang refactor
- **Laptop constraint**: 16GB RAM, 30GB SSD sisa, sering memory pressure (--turbopack recommended)

---

**Last updated**: 23 Juli 2026
**Status**: Production live, ongoing polish
**Next priority**: GA4 setup, Search Console verification, GMB listing
