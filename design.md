# Design — Arblok Digital

Sistem desain ini menjadi acuan untuk seluruh halaman Arblok Digital. Tujuannya adalah membuat teknologi terasa terstruktur dan dapat dipercaya tanpa menjauhkan pembaca non-teknis.

## Genre
**Modern Software Studio (Dark)** — bersih, terang, dan presisi dengan tema **dark warm graphite** (bergaya dashboard produk seperti Linear/Supabase). Kesannya "software yang bekerja", bukan majalah editorial. Nuansa teknis hadir melalui mockup dashboard, kartu data, status, dan diagram alur; bukan melalui neon, efek terminal palsu, gradient ungu, atau jargon.

## Prinsip pengalaman
- Dalam lima detik, pembaca memahami siapa Arblok, siapa yang dibantu, dan masalah apa yang diselesaikan.
- Isi dimulai dari pekerjaan atau kendala klien, lalu menjelaskan sistem yang membantu.
- Bukti memakai produk, tangkapan layar, tautan, dan hasil yang dapat diperiksa. Hindari angka yang tidak memiliki sumber.
- Bahasa rendah hati dan langsung. Hindari klaim superlatif, pola defensif, dan tiga kata sifat beruntun.
- Halaman terasa hidup: mockup dashboard/statistik, kartu dengan shadow lembut, CTA solid gradient — bukan dokumen statis.

## Macrostructure
- Marketing: **Problem → Process → Solution → Proof → Answer → Contact**.
- Content: **Readable Document** dengan navigasi, hierarki heading, dan lebar baca yang konsisten.
- Mobile adalah baseline; desktop menambah ruang dan struktur, bukan menambah dekorasi.

## Theme
| Token | Value |
|-------|-------|
| `--color-paper` | oklch(0.16 0.012 70) — warm dark graphite (bukan hitam murni) |
| `--color-paper-2` | oklch(0.20 0.012 70) — panel graphite terang |
| `--color-ink` | oklch(0.93 0.008 265) — off-white teks utama |
| `--color-ink-2` | oklch(0.66 0.015 265) — muted off-white |
| `--color-rule` | oklch(0.85 0.02 265 / 0.14) — border putih transparan tipis |
| `--color-accent` | oklch(0.64 0.16 262) — indigo terang (kontras di dark) |
| `--color-accent-ink` | oklch(0.16 0.012 70) — graphite (teks di atas accent) |
| `--color-accent-2` | oklch(0.75 0.13 165) — emerald terang (status/sukses) |
| `--color-focus` | indigo terang (visible keyboard focus) |
| `--radius-card` | 1rem |
| `--shadow-card` | ring 1px + drop shadow gelap (border > shadow di dark) |

Aksen indigo terang untuk CTA dan highlight; emerald hanya untuk status atau hasil. Pada tema gelap, kontras teks accent (`text-accent` di atas `bg-paper`) WAJIB dicek — jangan pakai accent gelap di atas bg gelap.

## Typography
- **Semua heading & body:** Inter, system sans-serif — 600/700. Heading harus lugas dan mudah dipindai. **TIDAK pakai serif editorial (Newsreader).**
- **Body:** Inter, 400/500, line-height minimal 1.6 untuk paragraf.
- **Mono:** JetBrains Mono — label, koordinat, status, dan metadata saja.
- Measure paragraf: 60–68ch. Label uppercase memakai tracking 0.08–0.12em.

## Spacing
Gunakan skala empat poin yang tersedia sebagai `var(--space-*)` atau padanan utility Tailwind yang konsisten.
- `--space-3xs: 0.25rem` sampai `--space-3xl: 6rem`

## Surfaces & technical detail
- **Kartu** (`.card` / `.card-hover`): radius 1rem, border 1px rule, shadow lembut, hover naik 3px + border accent. Ini elemen utama — pakai kartu untuk masalah, solusi, langkah, portofolio, FAQ.
- Panel sekunder: `bg-paper-2`. Border tipis untuk struktur.
- **CTA**: `.btn-gradient` (indigo gradient, shadow lembut, hover brightness) untuk primary; outline/secondary untuk teks.
- **Badge chip** (`.badge-chip`): pill kecil mono uppercase untuk eyebrow & trust points.
- Grid tipis (`bg-grid`) + radial blur accent di hero sebagai latar.
- Hindari glow berlebihan, glassmorphism berat, partikel, dan gradient besar yang mengganggu.

## Motion
- Reveal diperbolehkan hanya untuk memperjelas urutan baca: 8–16px, 300–500ms, sekali jalan.
- Live dot pulse hanya untuk status (hero badge).
- Tidak ada count-up untuk klaim bisnis, pulse tanpa makna, atau hover yang menggeser layout.
- `prefers-reduced-motion: reduce` mematikan animation, transition, dan smooth scrolling.

## CTA voice
- Primary: **solid gradient indigo** (`.btn-gradient`), rounded-lg, aksi konkret.
- Secondary: outline/teks dengan arrow.
- CTA menyebut tindakan konkret, misalnya "Ceritakan masalah Anda".
- Kontak WhatsApp memakai nomor resmi dan pesan awal yang sesuai konteks.

## Shared requirements
- Logotype ARBLOK DIGITAL dan navigasi internal yang crawlable.
- Kontras WCAG AA, focus ring yang terlihat, semantic heading, dan target sentuh minimum 44px.
- Pola bilingual inline mengikuti `language === "id" ? ... : ...`.
- Copy terlihat, metadata, schema, prerender, dan llms harus menyampaikan fakta inti yang sama.
- Komponen interaktif tetap dapat digunakan dengan keyboard dan tanpa motion.
