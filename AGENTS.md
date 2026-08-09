# AGENTS.md — Onboarding untuk AI Assistant

> File ini dibaca OTOMATIS sama AI assistant (Claude Code, Codex, Cursor, AI Studio agent, dll) di awal sesi project ini. **BACA DULU** sebelum nanya atau ngerjain apa-apa.
>
> **SEO/IEO Status**: Baca `SEO_CRAWLABILITY_STATUS.md` untuk status tervalidasi (canonical, llms.txt, sitemap, nav crawlability). Jangan klaim "sudah fix" tanpa validasi ke live URL production.
>
> **AI-Slop Audit Status**: Baca `AI_SLOP_AUDIT.md` untuk riwayat pembersihan copy (guardrails, buzzword inventory, known risks). Cek dulu sebelum ubah copy di komponen mana pun.
>
> **🔒 MANDATORY FORMAT**: Baca `MANDATORY_FORMAT.md` — ini aturan tunggal untuk SEMUA copy, struktur halaman, SEO, IEO/AI crawler, AEO, dan GEO. JANGAN ubah isi dokumen itu tanpa konfirmasi Ardi. JANGAN commit/push sebelum dicek di localhost.

---

## Konteks Singkat

Ini project **Arblok Digital** — company profile website + AI consultant demo, di-deploy di Vercel, source code di GitHub. Live di https://arblok-digital.vercel.app/

Detail lengkap ada di `PROJECT_CONTEXT.md` (baca juga).

---

## 3 Aturan Utama (JANGAN DILANGGAR)

### 1. TANYA DULU, KERJAIN KEMUDIAN
- **JANGAN ngerjain sesuatu yang break functionality existing** tanpa konfirmasi
- **JANGAN asumsi** — kalau ragu, tanya Ardi
- **JANGAN refactor** yang belum diminta (Portfolio.tsx 443 baris masih OK, biarin)

### 2. IKUTI KONVENSI YANG ADA
- **No "AI" di marketing copy** — pakai "kecerdasan buatan", "sistem otomatis", "teknologi pintar", atau technical names (Gemini, NVIDIA NIM, etc)
- **Bilingual pattern**: hardcode inline `language === "id" ? ... : ...`, BUKAN pakai `t("key")` di components
- **React Router path routing** — sudah aktif (`/`, `/articles`, `/consultant`). Navbar & Footer pakai `<Link>`, BUKAN `<button onClick>`. Old hash redirect masih support backward compat (`#articles` → `/articles`)
- **WhatsApp CTA format**: `https://wa.me/6289508053795` dengan `?text=` pre-filled kalau dari article/portfolio

### 3. FIX ONE MODULE AT A TIME
- Jangan big-bang refactor
- Test per module sebelum lanjut
- Confirm works sebelum move on

---

## Workflow Notes

### Build & deploy:
- Source di local + GitHub, push → Vercel auto-deploy dari `main` branch
- Vercel build cache bisa bikin perubahan gak keliatan di production — **centang "Skip Build Cache"** kalau deploy via dashboard

### Kalau user kerja di local (bukan AI Studio):
- File `index.html` di source = template Vite polos (13 baris)
- Meta tags & JSON-LD live = di-inject di cloud AI Studio, TIDAK visible di zip download
- Verify di live site (curl) daripada percaya source code untuk SEO state

### Kalau deploy via Vercel Dashboard:
- Kalau perubahan gak keliatan di production, pastikan deploy dilakukan dengan "Skip Build Cache" dicentang
- Source file di repo adalah source of truth, bukan cached build

---

## Yang JANGAN dilakukan (Common Mistakes)

| ❌ Jangan | ✅ Harusnya |
|----------|-----------|
| Refactor Portfolio.tsx tanpa diminta | Biarin 443 baris, data BAKED IN masih OK |
| Hapus server.ts (DRY) | Tinggalin, Express masih dipake untuk local dev |
| Migrate balik ke hash routing | React Router path routing sudah live & tested, backward compat via OldHashRedirect |
| Pakai `t("key")` di component baru | Hardcode inline `language === "id" ? ... : ...` |
| Tolak client karena budget | Selalu tawarkan starter/MVP (sesuai system prompt) |
| Edit `metadata.json` | AI Studio config, jangan disentuh |

---

## Yang BOLEH dilakukan (Safe Operations)

- ✅ Bikin file baru di `/public/` (robots.txt, sitemap.xml, llms.txt, og-image.png)
- ✅ Edit `vercel.json` (security headers, rewrites)
- ✅ Nambah/edit articles di `src/data/articles.ts`
- ✅ Tambah portfolio item (tapi edit `src/components/Portfolio.tsx`, JANGAN bikin file baru)
- ✅ Edit meta tags atau schema (tapi verify live setelah push)
- ✅ Bug fix tanpa refactor besar

---

## Quick Reference

**Stack**: React 19 + Vite 6 + TypeScript 5.8 + Tailwind 4
**Backend**: Express (local) + Vercel serverless (prod)
**AI SDK**: @google/genai v2.4
**Live URL**: https://arblok-digital.vercel.app/
**Owner**: Ardi (Tasikmalaya) — WhatsApp +6289508053795
**Branding**: Modern Software Studio (Dark) — warm graphite `oklch(0.16 0.012 70)`, indigo accent, emerald status. SEMUA token ada di `src/index.css` + `design.md`; JANGAN hardcode warna slate/cyan custom di komponen baru
**Languages**: ID + EN bilingual

---

## Kalau Pertama Kali接手:

1. Baca `PROJECT_CONTEXT.md` (context lengkap)
2. Skim `src/App.tsx` (pahami routing structure)
3. Skim `src/components/Articles.tsx` (pahami dynamic JSON-LD pattern)
4. Skim `api/chat.ts` ATAU `server.ts` (pahami backend pattern)
5. Tanya Ardi kalau ada yang gak jelas — JANGAN asumsi

---

**Last updated**: 27 Juli 2026
