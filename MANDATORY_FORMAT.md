# MANDATORY FORMAT — Arblok Digital

> **Dokumen ini adalah sumber aturan tunggal (source of truth) untuk SEMUA konten, copy, dan format teknis di project ini.**
>
> Tujuan: agar website tidak berubah-ubah setiap kali diupdate, dan setiap halaman baru langsung lolos standar SEO, IEO (AI crawler), AEO (answer engine), dan GEO (generative engine).
>
> **Aturan utama: JANGAN ubah isi dokumen ini tanpa konfirmasi Ardi. JANGAN commit/push sebelum dicek di localhost.**

---

## 1. Keputusan Terkunci (LOCKED — tidak boleh dibalik lagi)

| # | Keputusan | Detail |
|---|-----------|--------|
| 1 | Positioning | **"Sistem digital untuk usaha, sekolah, dan instansi"** — BUKAN naratif "Software House & Digital Agency" yang teknis |
| 2 | Bahasa | Awam, rendah hati, langsung. ID primary, EN secondary (inline `language === "id" ? ... : ...`) |
| 3 | Alur marketing | **Problem → Process → Solution → Proof → Answer → Contact** (sesuai design.md) |
| 4 | Gaya visual | **Modern Software Studio (Dark)** — dark warm graphite, indigo accent terang, kartu rounded + ring, mockup dashboard, CTA solid gradient (design.md). JANGAN pilih warna ungu/neon AI-slop |
| 5 | 3 persona | **UMKM** (bebas fee marketplace, punya lead), **Sekolah** (administrasi & pendaftaran online), **Instansi/Kelurahan** (birokrasi & persetujuan) |
| 6 | Domain solusi | Pencatatan, pelayanan, alur persetujuan, portal informasi, pekerjaan berulang |
| 7 | Kontak | WhatsApp `https://wa.me/6289508053795` (dengan `?text=` pre-filled sesuai konteks) |

## 2. Aturan Copy (WAJIB — melanggar = harus revisi)

- ❌ **Dilarang:** triplet kata sifat beruntun ("modern, manusiawi, dan tumbuh"), pola "Bukan sekadar X. Kami Y", buzzword generic (premium, eksklusif, seamless/mulus, cutting-edge, next-level, holistic, revolusioner).
- ❌ **Dilarang:** klaim superlatif tanpa bukti ("paling praktis se-Indonesia", "terbaik", "nomor 1").
- ❌ **Dilarang:** angka/invented metrics tanpa sumber ("hemat 70%", "1000+ klien") — kalau tidak bisa diverifikasi, jangan ditulis.
- ❌ **Dilarang:** kata "AI" di copy marketing → ganti "kecerdasan buatan", "sistem otomatis", "teknologi pintar".
- ❌ **Dilarang:** copy yang sama persis di 2+ komponen berbeda (verbatim duplication).
- ✅ CTA menyebut aksi konkret ("Ceritakan masalah Anda", "Diskusikan kebutuhan"), primary = **solid indigo gradient** (`btn-gradient`), secondary = outline. Lihat `design.md`.

## 3. Struktur Halaman Beranda (tidak berubah lagi)

```
Hero (headline = masalah calon klien, bukan jargon)
  → Problems (masalah → dampak → hasil yang dituju)
  → About/Cara Kerja (4 langkah)
  → Services (5 solusi)
  → Portfolio (bukti kerja)
  → FAQ (min 5 pertanyaan ASLI calon klien)
  → Footer (kontak + navigasi)
```

- **FAQ WAJIB** menyentuh: harga/biaya, timeline, garansi/pendampingan, cara mulai, perbedaan dengan agensi lain.
- Hero headline pakai kata-kata yang calon klien ketik sendiri (mis. "pendaftaran online", "kasir", "surat kelurahan") — bukan istilah teknis.

## 4. Format SEO (wajib tiap halaman)

| Elemen | Standar |
|--------|---------|
| `<title>` | ≤ 60 karakter. Pola: `[Nama] \| [Manfaat untuk siapa]` |
| `meta description` | ≤ 155 karakter, **diawali jawaban langsung** (bukan pemanis) |
| `canonical` | Self-canonical, tanpa trailing slash ganda, tanpa `.html` |
| `hreflang` | `id` + `x-default` di index.html |
| Open Graph / Twitter | title, description, image (1200x630) konsisten |
| JSON-LD Home | ProfessionalService/LocalBusiness + Breadcrumb + FAQPage |
| JSON-LD Artikel | BlogPosting + FAQPage + `dateModified` asli (jangan sama dengan datePublished) |
| Sitemap + robots | Tiap halaman baru masuk sitemap.xml; AI crawler tetap di-allow di robots.txt |

## 5. Format AEO (Answer Engine Optimization — wajib tiap halaman)

- **Answer-first:** 40–60 kata jawaban langsung setelah judul, sebelum prolog/cerita.
- **Satu URL = satu pertanyaan utama.** Jangan menumpuk banyak pertanyaan besar dalam satu halaman.
- **H2 = pertanyaan natural user:** "Berapa biayanya?", "Berapa lama selesainya?", "Apakah ada garansi?", "Apa bedanya dengan ...?"
- **FAQPage JSON-LD min 2–3** per artikel, 5 untuk beranda.
- Jawaban dalam paragraf ringkas yang bisa dikutip utuh (1–2 kalimat).

## 6. Format GEO (Generative Engine Optimization)

- Fakta entity jelas dan konsisten di semua media: nama, lokasi (Tasikmalaya, Jawa Barat), founder (Ardi), WhatsApp, area layanan.
- Kalau harga/timeline dipublikasikan: tulis eksplisit dan konsisten (jangan beda antara homepage, FAQ, dan llms.txt).
- Angka wajib punya konteks/sumber. Kalau tidak ada sumber: tulis perkiraan dengan kalimat "pada umumnya" + rentang.
- Sediakan 1–2 kalimat "ringkas" per topik yang layak dikutip mesin generatif.

## 7. Format IEO / AI Crawler (wajib tiap halaman)

- **Setiap halaman punya versi HTML statis** yang terbaca tanpa JavaScript (`public/prerendered/` untuk home/consultant, `public/articles/[slug].html` untuk artikel).
- **`public/llms.txt`** — update tiap ada konten baru; format: intro ringkas, link halaman, daftar artikel, entity notes, tanggal update.
- **`vercel.json`** — rewrite `/articles/:slug` → `.html` WAJIB ada sebelum catch-all.
- **Internal link pakai `<Link>`/`<a href>`** — JANGAN `<button onClick>` untuk navigasi.
- **AI crawler di-allow** di robots.txt: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, dll.

## 8. Template Artikel (semua field wajib diisi)

```typescript
{
  id: "slug-pendek",
  slug: "slug-lengkap-untuk-url",
  title: "Judul = pertanyaan atau manfaat nyata (bukan judul clickbait)",
  excerpt: "Answer-first, 1-2 kalimat, memuat jawaban inti (dipakai juga di meta description)",
  category: "Digitalisasi UMKM" | "Kecerdasan Buatan (AI)" | "Teknologi & Bisnis",
  publishedAt: "YYYY-MM-DD",
  readTime: "X Menit Bacaan",
  tags: ["tag1", "tag2"],
  author: { name: "Ardi", role: "Founder & Lead Software Architect @ Arblok Digital" },
  faq: [ { question: "...", answer: "..." } ],  // min 2-3
  content: `### Sub-judul pertanyaan\nJawaban langsung...`,
}
```

Struktur isi artikel: **jawaban singkat (answer-first) → penjelasan dengan H2 bertanya → contoh konkret/alur → FAQ → CTA WhatsApp**.

## 9. Sinkronisasi WAJIB (Drift Checklist — paling sering kelupaan)

Sumber konten ada di **5 tempat** — semua harus konsisten saat ada perubahan copy:

| Sumber | Lokasi |
|--------|--------|
| Komponen React | `src/components/Hero.tsx`, `Services.tsx`, `About.tsx`, `Portfolio.tsx`, `FAQ.tsx`, dst |
| Prerender site | `scripts/prerender-site.mjs` (copy HARDCODED duplikat — WAJIB di-sync manual) |
| Output statis | `public/prerendered/home.html`, `public/prerendered/consultant.html` |
| Fallback meta | `index.html` (static content + JSON-LD) |
| AI reference | `public/llms.txt` |

**Setiap ubah copy → wajib:** sync ke 5 sumber → jalankan `npm run prerender` → regenerate sitemap → cek localhost → baru commit.

## 10. Protokol Perubahan (wajib dipatuhi agent manapun)

1. Edit di local, JANGAN langsung commit.
2. Jalankan: `npm run lint` / `tsc --noEmit` + `npm run build` → 0 error.
3. Jalankan `npm run prerender` (artikel + site) → cek `public/prerendered/` ter-generate ulang.
4. Jalankan cek buzzword: `grep -rniE "premium|eksklusif|seamless|mulus|tangguh|scalable" src/components/*.tsx` → 0 hasil.
5. **Tunjukkan ke Ardi untuk dicek di localhost** (`npm run dev`).
6. Setelah disetujui, barulah commit + push. **JANGAN pernah auto-commit/auto-push.**
7. Setelah deploy: validasi live dengan curl (canonical, llms.txt, sitemap, article rewrite) — jangan klaim "sudah fix" tanpa bukti.

## 11. Checklist Final Sebelum Deploy

- [ ] Copy sudah lewat aturan di section 2 (tanpa buzzword, tanpa klaim tanpa bukti)
- [ ] Halaman punya answer-first + FAQ (AEO)
- [ ] Static HTML ada dan sinkron (AI crawler/IEO)
- [ ] llms.txt + sitemap.xml + robots.txt update
- [ ] JSON-LD valid (cek di validator schema.org / Rich Results)
- [ ] `npm run build` + `npm run prerender` 0 error
- [ ] Dicheck Ardi di localhost
- [ ] Baru commit + push

---

*Dokumen resmi pertama: 6 Agustus 2026 — dibuat berdasarkan audit copy, SEO/IEO/GEO/AEO, dan keputusan positioning Arblok Digital.*
