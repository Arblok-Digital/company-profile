import { Article } from "../types";

const ARTICLES_ID: Article[] = [
  {
    id: "siasat-jitu-arblok-marketing",
    slug: "siasat-jitu-arblok-digital-akselerasi-bisnis-tanpa-boncos",
    title: "Siasat Jitu Arblok Digital: Akselerasi Bisnis & Birokrasi Tanpa Boncos!",
    excerpt: "Banyak agensi memasang tarif selangit dan menolak UMKM berbudget minim. Arblok Digital hadir mendobrak batasan itu dengan arsitektur Monorepo & Zero-Cost Serverless. Baca strategi kami melahirkan KasirPro dan E-Warga yang bersahabat untuk semua kantong!",
    category: "Teknologi & Bisnis",
    publishedAt: "2026-07-10",
    dateModified: "2026-08-09",
    readTime: "6 Menit Bacaan",
    tags: ["Arblok Digital", "Monorepo", "Zero-Cost", "Marketing", "SaaS Lokal", "KasirPro", "E-Warga"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Mengapa Arblok Digital sangat fleksibel soal budget pengembangan?",
        answer: "Karena kami menerapkan filosofi inklusivitas digital untuk UMKM dan birokrasi lokal. Dengan memanfaatkan arsitektur Monorepo (NPM Workspaces) untuk penggunaan kembali kode secara maksimal serta teknologi Zero-Cost Serverless, kami bisa menekan biaya modal awal (CAPEX) and biaya operasional bulanan (OPEX) hingga Rp 0,-. Penghematan inilah yang kami kembalikan kepada Anda dalam bentuk harga layanan yang super fleksibel!"
      },
      {
        question: "Bagaimana cara kerja sistem notifikasi gratis tanpa biaya API WhatsApp?",
        answer: "Aplikasi kami (seperti E-Warga) menggunakan integrasi WhatsApp Click-to-Chat Deep Links (wa.me) yang dinamis. Ketika dokumen selesai diproses, sistem memformat pesan otomatis berisi tautan verifikasi atau rangkuman data secara aman di frontend, lalu mengarahkan pengguna untuk mengirimkannya langsung via WhatsApp web/app. Hasilnya? Notifikasi terkirim instan dan 100% gratis tanpa biaya API bulanan!"
      },
      {
        question: "Apakah sistem dengan budget minim tetap aman dan bisa di-scale di masa depan?",
        answer: "Tentu saja! Keamanan kami dilindungi oleh PostgreSQL Row Level Security (RLS) di sisi database terkelola. Sedangkan skalabilitas jangka panjang dijamin oleh arsitektur Monorepo NPM Workspaces. Ketika bisnis Anda tumbuh dari 1 cabang menjadi 10 cabang, sistem dapat dikembangkan dengan menambahkan aplikasi baru tanpa harus membongkar atau menduplikasi logika bisnis yang sudah ada."
      }
    ],
    content: `### Keresahan Nyata di Balik Lahirnya Arblok Digital

Banyak pejuang UMKM, pemilik toko kelontong, hingga aparatur desa yang sebenarnya ingin sekali menikmati kemudahan teknologi modern. Sayangnya, begitu mereka melihat penawaran harga dari agensi-agensi perangkat lunak konvensional—yang sering kali menembus puluhan hingga ratusan juta rupiah—nyali mereka langsung ciut. Belum lagi beban biaya bulanan sewa server dan pemeliharaan sistem yang terus menghantui meski penjualan sedang sepi.

Arblok Digital lahir dari keresahan nyata tersebut di Tasikmalaya. Dipimpin oleh **Ardi**, seorang Senior Full-Stack Developer & Software Architect, kami percaya bahwa teknologi kelas dunia tidak harus dibayar dengan harga yang membuat kantong bolong. Kami hadir untuk mendobrak stigma bahwa software profesional harus mahal!

### Siasat 1: Hemat Biaya dengan Arsitektur Zero-Cost Serverless

Bagaimana kami bisa menawarkan solusi tangguh dengan biaya yang sangat bersahabat? Kuncinya ada pada pemilihan arsitektur teknologi:

* **PostgreSQL dengan Row Level Security (RLS):** Kami menghubungkan aplikasi frontend langsung ke cloud database terkelola (seperti Supabase) secara aman. Berkat proteksi RLS tingkat tinggi, aturan otorisasi ditulis langsung di basis data sehingga data transaksi Anda dijamin aman tanpa perlu menyewa server virtual backend yang menyala 24 jam penuh. Biaya operasional bulanan pun sukses dipangkas menjadi **Rp 0,-** selama berada pada batas wajar gratis!
* **Frontend Kompresi Ultra-Efisien:** Untuk menyimpan berkas sensitif seperti dokumen KTP/KK atau bukti pembayaran, kami menerapkan kompresi otomatis di sisi browser hingga berukuran **di bawah 150KB** sebelum dikirim ke cloud storage. Hasilnya? Kuota penyimpanan gratis 1GB yang disediakan penyedia cloud bisa bertahan bertahun-tahun untuk menampung puluhan ribu data transaksi Anda.
* **Notifikasi WhatsApp Tanpa Biaya API:** Kami memanfaatkan deep link WhatsApp click-to-chat (*wa.me*) terintegrasi yang memicu pengiriman pesan otomatis berformat dinamis dari perangkat Anda sendiri. Solusi ini memotong total biaya bulanan pihak ketiga (SMS/Official WA API) yang biasanya sangat mahal bagi pejuang usaha mikro.

### Siasat 2: Skalabilitas Tanpa Duplikasi Melalui Monorepo

Banyak pemilik usaha ragu membuat aplikasi murah karena takut sistemnya tidak bisa dikembangkan di masa depan. Di Arblok Digital, ketakutan itu kami musnahkan lewat **Arsitektur Monorepo (NPM Workspaces)**:

Semua logika utama (seperti skema database, alur persetujuan dokumen, dan tipe data transaksi) diisolasi ke dalam paket bersama (*shared packages*) yang terpisah dari kode frontend aplikasi Anda.

Ketika bisnis kelontong Anda berkembang dan membutuhkan aplikasi baru di masa depan—misalnya dashboard analisis multi-gudang atau sistem kemitraan grosir—kami tinggal mengimpor logika bisnis yang sudah ada dari pustaka bersama tersebut. Ini memangkas waktu pengembangan hingga 70%, menghindari redundansi kode, dan yang paling penting: menghemat biaya investasi teknologi Anda di masa mendatang!

### Komitmen Emas Kami: Tidak Ada Budget yang Terlalu Kecil!

Apakah budget Anda di bawah 1 juta rupiah? Atau Anda adalah pemilik warung kelontong kecil yang ingin menguji coba aplikasi kasir digital esensial?

**Jangan ragu dan jangan malu!** Di Arblok Digital, pintu kami selalu terbuka lebar untuk berdiskusi. Kami tidak akan menolak ide hebat Anda hanya karena keterbatasan dana. Kami siap membuatkan paket **Starter/MVP (Minimum Viable Product)** yang pas dengan budget Anda saat ini, lalu tumbuh bersama seiring meningkatnya profit usaha Anda.

Mari kita bertransmutasi dari keresahan menjadi karya nyata! Hubungi Founder kami, Ardi, untuk konsultasi santai dan negosiasi harga terbaik yang ramah di kantong.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795**`
  },
  {
    id: "digitalisasi-umkm-zero-cost",
    slug: "panduan-digitalisasi-umkm-zero-cost-serverless",
    title: "Mengapa UMKM Harus Go-Digital: Panduan Zero-Cost Serverless Terapan",
    excerpt: "Banyak pemilik UMKM takut Go-Digital karena biaya server bulanan yang mahal. Temukan bagaimana arsitektur Zero-Cost Serverless dengan PostgreSQL Row Level Security (RLS) di Supabase memotong biaya operasional menjadi Rp 0,- tanpa mengorbankan keamanan data.",
    category: "Digitalisasi UMKM",
    publishedAt: "2026-07-08",
    dateModified: "2026-08-09",
    readTime: "5 Menit Bacaan",
    tags: ["Digitalisasi UMKM", "Serverless", "Supabase", "Zero-Cost", "Birokrasi Modern"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Apakah benar-benar bisa gratis atau Rp 0,- per bulan?",
        answer: "Sangat bisa. Dengan memanfaatkan paket gratis (Free Tier) dari platform cloud modern seperti Supabase (untuk database dan authentication) serta Vercel/Cloud Run (untuk hosting statis atau serverless functions), Anda tidak perlu membayar sepeser pun selama volume transaksi harian masih berada dalam batas penggunaan wajar (misal, database size < 1GB, yang mana sangat cukup untuk ribuan transaksi UMKM)."
      },
      {
        question: "Bagaimana cara menjaga keamanan data jika tidak menggunakan server backend sendiri?",
        answer: "Keamanan dijamin oleh PostgreSQL Row Level Security (RLS). Dengan RLS, aturan otorisasi ditulis langsung di tingkat database. Artinya, pengguna hanya bisa membaca, mengubah, atau menghapus baris data milik mereka sendiri berdasarkan token JWT yang aman. Tidak ada celah bagi pengguna biasa untuk mengakses data sensitif lain."
      },
      {
        question: "Mengapa kompresi file KTP atau KK di sisi pengguna (frontend) itu penting?",
        answer: "Batas penyimpanan gratis biasanya berkisar antara 1GB. Jika satu file KTP berukuran 5MB, ruang penyimpanan akan cepat habis. Dengan mengompres gambar di sisi frontend hingga <150KB sebelum diunggah ke cloud storage, Anda bisa menghemat kuota penyimpanan hingga 30 kali lipat, mempercepat proses upload, dan menjaga sistem tetap berjalan gratis dalam jangka panjang."
      }
    ],
    content: `### Pentingnya Digitalisasi untuk Keberlanjutan UMKM

Di era digital, kecepatan pelayanan dan efisiensi operasional adalah kunci utama untuk bertahan. Banyak pelaku usaha mikro, kecil, dan menengah (UMKM) masih mengandalkan pencatatan manual dalam mengelola bisnis mereka. Hal ini menimbulkan risiko kehilangan data, lambatnya layanan, dan kesulitan menganalisis tren penjualan secara real-time.

Namun, kendala utama yang sering dikeluhkan oleh pelaku UMKM saat diajak go-digital adalah **biaya langganan perangkat lunak (SaaS)** atau **biaya sewa server bulanan** yang dinilai memberatkan.

### Solusi Modern: Arsitektur Zero-Cost Serverless

Arblok Digital menghadirkan paradigma baru dalam pengembangan software bagi UMKM: **Zero-Cost Serverless Architecture**. Pendekatan ini memisahkan frontend dari backend tradisional dengan memanfaatkan serverless database modern.

Berikut adalah 3 pilar utama untuk mewujudkan ekosistem digital yang hemat biaya dan aman:

1. **Database Terdesentralisasi dengan Row Level Security (RLS)**
   Alih-alih menyewa Virtual Private Server (VPS) yang menyala 24 jam penuh dan memakan biaya tetap, aplikasi web modern dapat langsung terhubung ke database cloud menggunakan client-side SDK. Keamanan sistem ini diproteksi oleh PostgreSQL RLS, yang menguji setiap query secara real-time untuk memastikan pengguna hanya dapat memanipulasi data mereka sendiri.
   
2. **Optimalisasi Penyimpanan Berkas secara Efisien**
   Penyimpanan awan (cloud storage) gratis memiliki batasan kuota (misalnya 1GB pada paket gratis Supabase). Arblok Digital menerapkan kompresi gambar otomatis di sisi peramban (client-side) sebelum file diunggah. Dengan memastikan ukuran berkas KTP, KK, atau bukti pembayaran berada di bawah **150KB**, kuota gratis tersebut dapat bertahan untuk melayani ribuan transaksi atau data warga tanpa perlu upgrade paket berbayar.
   
3. **Notifikasi Jalur Mandiri (WhatsApp Click-to-Chat Deep Links)**
   Biaya integrasi SMS Gateway atau API WhatsApp berbayar (Official WhatsApp Business API) sangat tinggi bagi UMKM dan instansi desa. Sebagai gantinya, kami menggunakan integrasi tautan langsung *wa.me* yang dikombinasikan dengan template teks dinamis. Sistem ini memungkinkan notifikasi terkirim secara gratis langsung dari aplikasi melalui aplikasi WhatsApp pengguna secara instan.`
  },
  {
    id: "revolusi-ai-generatif-bisnis",
    slug: "revolusi-ai-generatif-untuk-efisiensi-bisnis",
    title: "Revolusi AI Generatif untuk Efisiensi Bisnis: Bukan Sekadar Chatbot Biasa",
    excerpt: "Banyak perusahaan mengira teknologi AI hanya sebatas chatbot penjawab pesan otomatis. Pelajari bagaimana integrasi Large Language Models (LLM) di sisi server dapat meningkatkan konversi penjualan, mengotomatisasi posting kampanye, dan melakukan analisis pasar otonom.",
    category: "Kecerdasan Buatan (AI)",
    publishedAt: "2026-07-08",
    dateModified: "2026-08-09",
    readTime: "6 Menit Bacaan",
    tags: ["Kecerdasan Buatan (AI)", "Gemini AI", "Automasi Bisnis", "Teknologi Cerdas", "IEO"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Apakah integrasi AI aman bagi kerahasiaan data internal perusahaan?",
        answer: "Ya, sangat aman asalkan diimplementasikan secara benar di sisi server (Server-Side Proxy). Dengan memanggil API AI (seperti Gemini API) melalui endpoint backend internal, kita dapat menyaring data sensitif, mengontrol instruksi sistem (system instructions), dan merahasiakan API Key dari browser publik."
      },
      {
        question: "Bagaimana cara kerja Autonomous Marketing Pipeline?",
        answer: "Sistem ini berjalan di latar belakang menggunakan skrip terjadwal (cron job/scheduler). AI bertugas menganalisis tren pasar, menyusun salinan iklan (copywriting) yang persuasif, dan mempublikasikannya secara otomatis ke platform media sosial tanpa campur tangan manusia setiap harinya."
      }
    ],
    content: `### Melampaui Batas Chatbot Konvensional

Ketika membicarakan Kecerdasan Buatan (AI) di sektor bisnis, sebagian besar orang hanya membayangkan widget chat kecil di pojok situs web yang memberikan jawaban kaku dari template yang sudah ditentukan. Padahal, potensi asli AI Generatif modern jauh melampaui itu.

Large Language Models (LLM) generasi terbaru, seperti seri **Gemini 3.5**, memiliki kemampuan pemecahan masalah yang dinamis, analisis sentimen, ekstraksi informasi, hingga penulisan kode terstruktur secara real-time.

### Penerapan AI Nyata yang Mengubah Lanskap Bisnis

Arblok Digital merancang solusi AI terintegrasi yang berfokus pada hasil bisnis nyata, bukan sekadar dekorasi teknologi:

* **Sistem Klasifikasi Dokumen Otomatis**
  Dalam platform birokrasi seperti *E-Warga*, AI dapat digunakan untuk menganalisis deskripsi keluhan atau permohonan surat secara otonom, lalu mengelompokkannya ke kategori dinas yang sesuai dalam hitungan detik secara otomatis.
  
* **Autonomous Marketing Generator & Auto-Publisher**
  Menulis konten promosi setiap hari membutuhkan waktu dan kreativitas konsisten yang tidak sedikit. Dengan pipa automasi pemasaran yang dirancang secara khusus, AI dapat secara otomatis memproduksi rancangan konten pemasaran, melengkapinya dengan tagar tren terbaru, dan menjadwalkannya untuk diunggah langsung ke platform media sosial Anda.
  
* **Asisten Penjualan & Rekomendasi Terpersonalisasi**
  AI dapat menganalisis kebiasaan belanja pelanggan di aplikasi kasir digital (seperti *KasirPro F&B*), menemukan pola kombinasi produk terlaris, dan merekomendasikan paket menu baru untuk meningkatkan rata-rata nilai pesanan per pelanggan secara signifikan.`
  },
  {
    id: "arsitektur-monorepo-skalabilitas",
    slug: "arsitektur-monorepo-skalabilitas-masa-depan",
    title: "Membangun Aplikasi Cepat dan Scalable dengan Arsitektur Monorepo",
    excerpt: "Mengapa memulai dengan satu codebase tunggal (monorepo) menggunakan NPM Workspaces adalah pilihan terbaik bagi startup dan agensi teknologi modern. Solusi menghindari redundansi logika dan mempercepat waktu rilis ke pasar (time-to-market).",
    category: "Teknologi & Bisnis",
    publishedAt: "2026-07-08",
    dateModified: "2026-08-09",
    readTime: "4 Menit Bacaan",
    tags: ["Monorepo", "NPM Workspaces", "Arsitektur Perangkat Lunak", "TypeScript", "Scalability"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Apa perbedaan Monorepo dengan Monolith?",
        answer: "Monolith adalah satu aplikasi besar tunggal di mana semua kode saling bertumpuk erat. Sedangkan Monorepo adalah satu repositori yang menampung banyak aplikasi independen dan paket terpisah (misalnya frontend warga, dashboard admin, dan logika inti) yang dapat dikembangkan dan dideploy secara terpisah tapi tetap berbagi kode yang sama secara modular."
      },
      {
        question: "Kapan sebuah proyek software harus beralih ke struktur Monorepo?",
        answer: "Sangat disarankan untuk mengadopsi Monorepo sejak awal pengembangan jika Anda berencana membuat beberapa aplikasi yang saling terhubung (misal: satu aplikasi untuk pengguna Android/iOS, satu portal admin desktop, dan satu backend server) yang berbagi logika bisnis, tipe data TypeScript, atau model database yang sama."
      }
    ],
    content: `### Tantangan Duplikasi Kode pada Skala Besar

Ketika sebuah produk teknologi berkembang, developer sering kali perlu membuat beberapa aplikasi pendukung yang berbeda namun menggunakan basis data dan alur kerja yang serupa. Sebagai contoh, pada ekosistem *E-Warga*, pada awalnya kita mungkin hanya membutuhkan aplikasi web untuk warga (*apps/warga-pwa*).

Namun di masa mendatang, instansi kecamatan akan memerlukan panel kontrol khusus (*apps/kecamatan-dashboard*) dan dinas kependudukan memerlukan aplikasi verifikasi (*apps/disdukcapil-app*). 

Jika menggunakan struktur multi-repositori tradisional, developer terpaksa menduplikasi kode tipe data TypeScript, skema database, atau alur validasi di ketiga tempat tersebut. Saat terjadi perubahan alur, developer harus memperbarui ketiga repositori tersebut secara manual satu per satu—sebuah proses yang sangat rawan kesalahan.

### Solusi NPM Workspaces & Shared Packages

Melalui penerapan **Monorepo (NPM Workspaces)**, Arblok Digital menyatukan seluruh subsistem tersebut dalam satu repositori kerja yang teratur:

1. **Paket Logika Bersama (\`packages/logic\`)**
   Seluruh logika bisnis seperti transisi status dokumen pengantar warga diisolasi ke dalam satu folder tersendiri. Logika ini diekspor sebagai pustaka lokal bernama \`@e-warga/logic\`.
   
2. **Paket Koneksi Database (\`packages/supabase\`)**
   Konfigurasi klien, kueri database penting, serta migrasi skema Row Level Security diwadahi dalam satu paket \`@e-warga/supabase\` yang independen.
   
3. **Kemudahan Integrasi Lokal**
   Aplikasi front-end warga tinggal mengimpor pustaka bersama ini menggunakan perintah impor standar. Saat kita menambahkan aplikasi kecamatan di masa depan, kita hanya perlu mengimpor library yang sama tanpa perlu menulis ulang satu baris kode database pun.`
  },
  {
    id: "cara-memilih-software-house-tasikmalaya",
    slug: "cara-memilih-software-house-umkm-tasikmalaya",
    title: "Cara Memilih Software House untuk UMKM di Tasikmalaya: Panduan Lengkap",
    excerpt: "Bingung milih software house di Tasikmalaya? Pelajari 5 kriteria penting: portofolio nyata, arsitektur scalable, transparansi biaya, dukungan after-launch, dan testimonial. Plus cara bedain agensi beneran dari reseller template.",
    category: "Digitalisasi UMKM",
    publishedAt: "2026-07-17",
    dateModified: "2026-08-09",
    readTime: "7 Menit Bacaan",
    tags: ["Software House Tasikmalaya", "Digital Agency", "UMKM Digital", "Web Development", "Arblok Digital", "PWA Tasikmalaya", "Jasa Pembuatan Website"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Berapa biaya jasa pembuatan website di software house Tasikmalaya?",
        answer: "Kisaran harga sangat bervariasi tergantung kompleksitas. Landing page sederhana bisa mulai dari 2-5 juta, aplikasi kasir (POS) 10-30 juta, marketplace 30-100 juta. Yang penting: pastikan software house transparan soal biaya maintenance dan hosting bulanan. Di Arblok Digital, kami tidak memasang biaya tersembunyi dan menawarkan Zero-Cost Hosting (Rp 0 per bulan)."
      },
      {
        question: "Apa yang membedakan software house profesional dengan reseller template?",
        answer: "Software house profesional membangun dari kode murni (custom code), punya portofolio produk sendiri (bukan template), menerapkan arsitektur scalable (Monorepo), dan memberikan akses ke source code. Reseller template biasanya cuma ganti logo/warna di template yang dijual massal, kode berantakan, dan susah dikembangkan. Tanya selalu: 'Apakah source code diserahkan ke klien?'"
      },
      {
        question: "Berapa lama waktu pembuatan website oleh software house di Tasikmalaya?",
        answer: "Tergantung skala. Website profil/company profile: 1-2 minggu. Aplikasi custom seperti sistem kasir atau e-commerce: 3-8 minggu. Platform kompleks seperti digitalisasi kelurahan atau marketplace multi-vendor: 2-4 bulan. Hindari software house yang janji 'jadi 3 hari' untuk sistem kompleks — itu red flag."
      },
      {
        question: "Apakah aplikasi UMKM perlu arsitektur Monorepo?",
        answer: "Tidak wajib untuk landing page sederhana, tapi sangat direkomendasikan jika Anda berencana berkembang. Monorepo memungkinkan satu codebase dipakai untuk banyak aplikasi (web admin, aplikasi android, dashboard mitra) tanpa duplikasi kode. Ini menghemat 70% biaya pengembangan jangka panjang. Di Arblok Digital, Monorepo adalah standar kami."
      },
      {
        question: "Bagaimana cara verifikasi kredibilitas software house?",
        answer: "Cek 3 hal: (1) Portofolio — minta akses demo langsung, bukan screenshot. (2) Testimonial — chat klien sebelumnya via WhatsApp atau telepon. (3) Google — cari review di Google Maps atau forum. Bonus: lihat apakah mereka punya produk sendiri (bukan cuma jasa). Produk sendiri = bukti mereka paham siklus hidup software."
      }
    ],
    content: `### Memilih Software House di Tasikmalaya: Kenapa Ini Penting?

Tasikmalaya berkembang sebagai kota dengan potensi digital yang besar. Banyak pelaku UMKM, pemilik toko, hingga perangkat kelurahan mulai sadar pentingnya go-digital. Tapi masalahnya: **bagaimana memilih software house yang beneran paham kebutuhan lokal, bukan sekadar jual template murahan?**

Pasar jasa pembuatan website di Indonesia Timur (termasuk Tasikmalaya, Garut, Bandung timur) dipenuhi dua ekstrem: agensi besar dengan harga puluhan hingga ratusan juta, atau "jasa website" 500 ribuan yang cuma ganti logo di template Wix. Keduanya jarang yang pas untuk UMKM yang butuh **kualitas enterprise dengan harga UMKM**.

Artikel ini bakal bantu Anda — owner UMKM, pemilik toko, kepala desa, atau siapapun yang serius mau digital — untuk memilih software house yang tepat. Tanpa hype, tanpa istilah teknis berlebihan.

### 5 Kriteria Penting Sebelum Pilih Software House

#### 1. Portofolio Nyata, Bukan Screenshot Oloran
Software house profesional punya produk yang **bisa lo akses langsung**. Bukan cuma gambar mockup di slideshare. Minta link demo, coba fitur-fiturnya, tes di HP sendiri. Kalau software house cuma kasih PDF portofolio tanpa link langsung, itu red flag besar.

Coba tanya: _"Ini produk punya lo sendiri atau klien? Bisa saya coba langsung?"_

#### 2. Arsitektur yang Bisa Tumbuh Bareng Usaha Lo
Banyak UMKM bikin website murah, 6 bulan kemudian pengen tambah fitur — ternyata harus bikin dari nol lagi karena kode-nya berantakan. Boros.

Software house yang paham arsitektur akan pakai **Monorepo (NPM Workspaces)** atau setidaknya kode yang terstruktur rapi. Ini bikin:
- Nambah fitur baru **gak perlu ngulang dari awal**
- Shared logic bisa dipakai di aplikasi lain (web admin, dashboard, aplikasi android)
- Biaya pengembangan jangka panjang **turun drastis**

Di Arblok Digital, semua produk—dari KasirPro hingga E-Warga—dibangun di atas arsitektur Monorepo. Ini kenapa kami bisa nawarin harga fleksibel: karena shared codebase bikin biaya development lebih efisien.

#### 3. Transparansi Biaya Total (Bukan Cuma DP)
Ini jebakan paling umum. Software house bilang "mulai 3 jutaan", tapi pas deal ternyata ada biaya:
- Hosting bulanan Rp 200-500rb
- Domain per tahun Rp 300rb
- SSL certificate (padahal gratis)
- Biaya maintenance bulanan
- Biaya revisi tambahan per fitur

**Total tahun pertama bisa 2-3x lipat dari harga awal.**

Software house profesional akan transparan dari awal: berapa biaya sekali jalan, berapa biaya recurring per bulan, dan apa yang bisa lo lakukan sendiri (misal: belajar update konten).

#### 4. Dukungan Setelah Launch
Website selesai bukan akhir dari perjalanan. Pastikan software house punya:
- **Dokumentasi** — cara update konten, nambah produk, ganti gambar
- **Garansi** — berapa lama gratis revisi bug (minimal 30 hari)
- **Kontak darurat** — ada WhatsApp atau telepon yang bisa dihubungi kalau server down

Software house yang ilang setelah launching = bencana buat bisnis lo.

#### 5. Testimonial dari Klien Nyata (Bukan Cuma Bintang 5 di Website)
Minta kontak 1-2 klien sebelumnya. Chat mereka. Tanya:
_"Apa yang lo suka dari software house ini?"  
"Apa kendala yang lo alami?"  
"Apakah sesuai janji?"_

Kalau software house gak bisa kasih kontak klien, itu tanda bahaya. Di Arblok Digital, kami selalu siap koneksikan Anda dengan klien kami untuk diskusi langsung via WhatsApp.

### Panduan Memilih Berdasarkan Budget

| Budget | Yang Realistis | Yang Harus Diwaspadai |
|--------|---------------|----------------------|
| < 5 juta | Landing page company profile | Janji jadi 3 hari dengan fitur unlimited |
| 5-15 juta | PWA sederhana + admin panel | Klaim "SEO guaranteed page 1 Google" |
| 15-40 juta | Aplikasi kasir, sistem kelurahan | Arsitektur template murah yang gak scalable |
| 40-100 juta | Marketplace, platform multi-vendor | Gak ada source code diserahkan |
| 100jt+ | Enterprise grade, AI integration, Web3 | **Harus ada kontrak SLA resmi** |

### Pertanyaan Wajib ke Software House Sebelum Deal

Sebelum transfer DP, tanyakan 5 hal ini:  
1. "Teknologi stack apa yang lo pake?" (Jawaban ideal: React/Vue + TypeScript + cloud database)
2. "Apakah source code diserahkan ke klien?" (Ideal: YA — kode lo punya lo)
3. "Berapa perkiraan biaya bulanan setelah launching?" (Termasuk hosting, domain, third-party services)
4. "Berapa lama estimasi pengerjaan & apa milestone-nya?" (Ada timeline jelas)
5. "Siapa yang handle maintenance setelah serah terima?" (Ada kontak darurat)

### Kenapa Arblok Digital Bisa Jadi Pilihan?

Kami bukan software house biasa. Di Arblok Digital:
- **Produk sendiri sudah production-ready**: KasirPro F&B, KasirPro Grosiran, E-Warga, SekolahPro — bukan template, bukan mockup
- **Zero-Cost Hosting**: Anda gak perlu bayar server bulanan (Rp 0 untuk beban normal UMKM)
- **Arsitektur Monorepo**: Biaya pengembangan jangka panjang lebih murah karena kode reusable
- **Pendiri (Ardi) bisa dihubungi langsung**: Gak ada CS robot, gak ada sales ambisius
- **Top 100 Global Google Innovation Award**: Solana Warung — bukti kompetensi internasional
- **Transparan harga**: Berani kasih rincian biaya dari awal
- **Bilingual ID/EN**: Siap bantu ekspansi bisnis ke pasar global

### Kesimpulan

Memilih software house di Tasikmalaya gak perlu bingung. Fokus pada 5 hal: portofolio nyata, arsitektur scalable, transparansi biaya, dukungan after-launch, dan testimonial asli.

Gak ada yang lebih mahal daripada software murah yang harus dibikin ulang 6 bulan kemudian. Investasi di awal yang sedikit lebih (tapi arsitektur bener) = hemat puluhan juta di masa depan.

**Butuh konsultasi gratis?** Langsung chat Ardi via WhatsApp. Gak ada kewajiban, gak ada sales pressure. Kita bahas kebutuhan lo, kami kasih solusi — sederhana.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795**
👉 **Lihat langsung portofolio kami: https://arblok-digital.vercel.app/#portfolio**`
  },
  {
    id: "keluar-marketplace-toko-sendiri",
    slug: "keluar-marketplace-bikin-toko-online-sendiri-tanpa-potongan-admin",
    title: "Cara Keluar dari Marketplace: Bikin Toko Online Sendiri Tanpa Potongan Admin 2-10%",
    excerpt: "Biaya admin Shopee & Tokopedia naik 2-10% per transaksi Mei 2026. Pelajari cara bikin toko online sendiri dengan payment gateway langsung: 0% potongan platform, margin utuh, dan customer jadi milik lo. Plus checklist modal & teknologinya.",
    category: "UMKM & Marketplace",
    publishedAt: "2026-07-17",
    dateModified: "2026-08-09",
    readTime: "8 Menit Bacaan",
    tags: ["Keluar Marketplace", "Toko Online Sendiri", "Biaya Admin Marketplace", "UMKM 2026", "Shopee Tokopedia", "Payment Gateway", "Web Development Tasikmalaya", "Arblok Digital"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Berapa biaya admin Shopee dan Tokopedia per transaksi di 2026?",
        answer: "Per Januari-Mei 2026, biaya admin Shopee berkisar 2-10% per transaksi (tergantung kategori produk dan program subsidi). Tokopedia juga menyesuaikan struktur biaya layanan. Ditambah Rp 1.250 yang tetap dipotong meski barang diretur. Untuk seller dengan margin tipis (F&B, grosir, kerajinan), ini bisa menggerus 15-25% profit per bulan."
      },
      {
        question: "Apakah bisa jualan online tanpa marketplace?",
        answer: "Sangat bisa. Ada 3 jalur utama: (1) Toko online sendiri + payment gateway (Midtrans, Xendit, DOKU) untuk terima QRIS, virtual account, e-wallet. (2) WhatsApp Business + katalog produk + payment link (zero infrastructure). (3) Social commerce Instagram/TikTok yang diarahkan ke payment link pribadi. Semua jalur ini 0% potongan platform."
      },
      {
        question: "Berapa modal bikin toko online sendiri?",
        answer: "Modal bervariasi: (a) Pakai platform jadi seperti Shopify/WooCommerce: 500rb-3jt untuk setup + 300-800rb/bulan langganan. (b) Custom website dari software house: 8-25jt (sekali bayar) + Rp 0/bulan untuk hosting. (c) WhatsApp + payment link: gratis tapi gak punya brand presence. Pilihan (b) paling ROI tinggi untuk UMKM serius."
      },
      {
        question: "Apa itu payment gateway dan kenapa penting untuk toko online sendiri?",
        answer: "Payment gateway adalah perantara antara customer Anda dan bank untuk proses pembayaran online. Contoh populer: Midtrans, Xendit, DOKU, iPaymu. Mereka kasih QRIS, virtual account, e-wallet (OVO, DANA, GoPay), dan credit card. Biaya transaksi hanya 0.7-2.5% (jauh lebih murah dari 2-10% marketplace) dan customer bayar langsung ke nomor rekening/rekening usaha Anda."
      },
      {
        question: "Bagaimana cara bawa customer dari marketplace ke toko sendiri?",
        answer: "Strategi 3 lapis: (1) Packaging premium — sisipkan kartu ucapan + QR code toko online di setiap paket. (2) Konten edukatif — buat Instagram/TikTok dengan value konten, link ke toko sendiri di bio. (3) Loyalty program — kasih diskon eksklusif untuk repeat order via website (misal: 'Beli 5 gratis ongkir khusus member website'). Konsistensi 3-6 bulan biasanya cukup untuk migrasi 30-50% customer ke channel sendiri."
      },
      {
        question: "Apakah toko online sendiri bisa menang SEO dari marketplace di Google?",
        answer: "Justru lebih mudah. Domain sendiri (tokosaya.com) punya otoritas SEO yang bisa lo bangun dari 0. Halaman produk lo 100% bisa di-customize untuk target kata kunci spesifik (misal: 'keripik pedas Tasikmalaya'). Marketplace halaman produknya keadilannya banyak saingan, persis seperti rank di Google. Dengan SEO konten (artikel blog, FAQ schema, backlink lokal) toko sendiri bisa page-1 Google dalam 3-6 bulan untuk keyword spesifik niche Anda."
      }
    ],
    content: `### Marketplace Mahal? Lo Gak Sendirian

Shopee naik lagi. Tokopedia nyusul. Biaya admin Shopee resmi jadi 2-10% per transaksi per Januari 2026, dan Tokopedia menyesuaikan struktur biayanya di Mei 2026. Ditambah Rp 1.250 yang tetap dipotong meski barang diretur. Hasilnya: banyak seller UKM, terutama F&B, kerajinan, dan grosir, ngerasain margin mereka tergerus 15-25% per bulan.

Pemerintah udah turun tangan — Permendag No. 19/2026, Permen UMKM No. 3/2026 — tapi aturan transparansi gak otomatis menghapus biaya. Lo tetap bayar, cuma lebih jelas perhitungannya.

Pertanyaan besarnya: **mau terus-terusan gajian orang lain, atau mulai bangun toko sendiri yang profit 100% milik lo?**

### Tanda Lo Harus Pindah dari Marketplace

Cek 5 kondisi ini. Kalau 3+ cocok, berarti sudah waktunya:

1. **Margin lo tergerus >15%** karena admin fee + ongkir subsidi + iklan wajib
2. **Views organik marketplace terus turun** — lo dipaksa keluar uang iklan supaya produk tetap terlihat
3. **Customer lo gak kenal brand lo**, yang mereka ingat cuma platform-nya
4. **Data customer lo bukan milik lo** — gak bisa di-reach langsung, harus bayar lagi untuk remarketing
5. **Cash flow lo boncos** setelah jualan rame karena potongan admin + retur

Kalau 3+ dari 5 kondisi di atas kejadian di lo, pertimbangkan serius untuk migrasi.

### 3 Jalur Keluar dari Marketplace (Tanpa Kehilangan Customer)

#### Jalur 1: Toko Online Sendiri + Payment Gateway (RECOMMENDED)
- Lo punya domain sendiri (misal: keripikpedas.tasik.id)
- Customer checkout langsung di website lo
- Pembayaran lewat payment gateway (Midtrans, Xendit, DOKU) — bisa QRIS, virtual account, e-wallet, credit card
- **Biaya transaksi cuma 0.7-2.5%** (vs 2-10% di marketplace)
- **Modal 8-25jt sekali bayar** untuk custom website, **Rp 0/bulan** untuk hosting (pakai arsitektur serverless + free tier Supabase/Vercel)
- **Customer 100% milik lo** — nomor WA, email, alamat bisa lo kumpulin untuk retensi

#### Jalur 2: WhatsApp Business + Payment Link
- Tanpa website, tanpa setup teknis
- Cukup katalog produk di WhatsApp Business + payment link dari DOKU/iPaymu
- **Gratis total**, tapi gak ada brand presence (customer cuma inget nomor WA lo)
- Cocok untuk: jualan skala kecil (< 50 order/bulan), produk yang butuh konsultasi langsung (katering, jasa)

#### Jalur 3: Social Commerce (Instagram/TikTok → Payment Link)
- Jualan via konten reels/shorts
- Checkout via payment link di bio/caption
- **0% potongan platform** karena lo gak jualan di Instagram, cuma narik traffic
- Cocok untuk: produk visual (fashion, F&B estetik, craft), owner yang aktif bikin konten
- Resiko: bergantung algoritma IG/TikTok, gak punya customer database sendiri

**Rekomendasi gue: Kombinasi Jalur 1 + 3.** Website jadi hub resmi, Instagram/TikTok jadi corong traffic. WhatsApp untuk closing & after-sales.

### Anatomi Toko Online Sendiri yang Untung

Toko online sendiri yang profitable punya 5 komponen wajib:

1. **Katalog Produk yang SEO-Friendly**
   - Setiap produk punya halaman URL sendiri (contoh: /produk/keripik-pedas-original)
   - Ada deskripsi + foto + harga + stok + ongkir otomatis
   - Markup schema Product (otomatis muncul di Google rich snippet)

2. **Payment Gateway Terintegrasi**
   - QRIS, virtual account BCA/Mandiri/BNI, e-wallet (OVO, DANA, GoPay, ShopeePay)
   - Midtrans (paling populer, biaya 0.7-2.5%)
   - Webhook otomatis: customer bayar → sistem langsung update status pesanan

3. **Manajemen Order & Stok Real-Time**
   - Dashboard admin untuk lihat order masuk, status bayar, stok produk
   - Integrasi dengan jasa kirim (JNE, J&T, SiCepat) untuk print resi otomatis
   - Notifikasi WhatsApp ke customer setiap status berubah (pakai deep link wa.me — gratis, gak pakai API mahal)

4. **Sistem Retensi & Loyalty**
   - Diskon member untuk repeat order
   - Poin rewards (setiap Rp 100rb = 1 poin, 10 poin = diskon 10%)
   - Birthday promo otomatis dari database customer

5. **Tracking & Analytics**
   - Google Analytics + Meta Pixel untuk tahu asal traffic
   - Dashboard konversi: berapa visitor → berapa add-to-cart → berapa checkout
   - A/B testing landing page untuk iklan

### Checklist Modal & Teknologi

| Komponen | DIY (Sendiri) | Custom Software House | Platform Jadi (Shopify) |
|----------|---------------|----------------------|------------------------|
| **Modal Awal** | 0-1jt (belajar) | 8-25jt | 500rb-3jt |
| **Biaya Bulanan** | 0 | **Rp 0** (zero-cost hosting) | 300-800rb |
| **Waktu Setup** | 2-4 minggu | 3-6 minggu | 1-3 hari |
| **Biaya Transaksi** | 0.7-2.5% (Midtrans) | 0.7-2.5% (Midtrans) | 2% (Shopify Payments) |
| **Custom Fitur** | Sangat terbatas | 100% sesuai kebutuhan | Terbatas tema |
| **Source Code** | Punya sendiri | Punya sendiri | Gak punya (langganan) |
| **SEO Friendly** | Tergantung builder | Sangat (bisa di-optimize full) | Cukup |
| **Skalabilitas** | Rendah | Sangat tinggi (Monorepo) | Tinggi tapi mahal |

### 3 Strategi Bawa Customer Marketplace ke Toko Sendiri

1. **Packaging is Marketing**
   Sisipkan kartu ucapan + QR code toko online di setiap paket yang lo kirim dari marketplace. Tulis manual: "Yuk, order lagi lebih murah di tokosaya.com — gratis ongkir khusus member!" 70% customer loyal bakal notice.

2. **Konten Edukatif, Bukan Jualan**
   Bikin Instagram/TikTok dengan value konten: behind the scene produksi, tips masak, review customer. Di bio, link ke toko online sendiri. Konsistensi 3-6 bulan = traffic organik 5-20rb/bulan.

3. **Loyalty Program Eksklusif**
   "Beli 5 gratis ongkir khusus order via website" atau "Poin rewards 2x lebih besar untuk member website." Ini bikin customer migrate pelan-pelan tanpa lo harus keluar dari marketplace seketika.

### Real Case: Bikin Toko Sendiri Cuma 12 Juta, Bayar Sendiri dalam 4 Bulan

Kasus nyata (generalisir, bukan nama asli):

- **Owner:** UMKM keripik Tasikmalaya, omzet Rp 35-50jt/bulan via Shopee
- **Masalah:** Margin tergerus 18% karena admin fee + iklan wajib + retur
- **Solusi:** Custom website toko online + integrasi Midtrans (QRIS) + WA notification
- **Modal:** Rp 12jt (sekali bayar) + Rp 0/bulan hosting
- **Hasil 4 bulan pertama:**
  - 40% customer migrate ke website sendiri
  - Margin naik dari 18% jadi 30% (hemat ~Rp 4.5jt/bulan)
  - Bayar modal dalam 4 bulan. Setelah itu profit naik 100% ke owner.

### Kenapa Arblok Digital?

Lo bisa aja bikin sendiri pakai Shopify atau WooCommerce. Tapi kalau lo pengen:

- **Source code 100% milik lo** (bukan langganan)
- **Zero-cost hosting** — Rp 0/bulan selamanya (bukan 300-800rb/bulan)
- **Custom fitur tanpa batas** — integrasi langsung ke kasir, loyalty, ERP
- **SEO yang beneran jalan** — schema markup, fast load, content strategy
- **Support langsung ke Founder** — bukan CS robot

...maka custom website dari software house profesional adalah jawabannya.

Di Arblok Digital, kami udah build:
- **KasirPro F&B** — sistem kasir online untuk warung & resto
- **E-Warga** — platform birokrasi digital untuk kelurahan
- **SekolahPro** — sistem manajemen sekolah
- **Solana Warung** — masuk Top 100 Google Innovation Award 2025

Semua dibangun dengan arsitektur **Monorepo (NPM Workspaces)** yang bikin pengembangan fitur baru 70% lebih cepat dan murah. Kami gak pakai template — semua kode custom dari nol sesuai kebutuhan Anda.

### Kesimpulan

Marketplace itu tools, bukan tempat tinggal permanen. Lo boleh jualan di sana buat dapet exposure awal, tapi tujuan akhir adalah: **customer 100% milik lo, margin utuh, brand lo yang dikenal, bukan platform.**

Tiga jalur keluar udah gue bahas. Pilihan ada di lo. Yang penting: mulai dari sekarang, bukan nanti. Karena setiap bulan lo nunggu, marketplace naik admin fee lagi.

**Mau diskusi gratis dulu?** Langsung chat Ardi via WhatsApp. Kita akan analisis kondisi bisnis lo, kasih rekomendasi yang paling pas — tanpa sales pressure, tanpa obligation.

Konsultasi 30 menit pertama gratis. Setelah itu, kalau cocok, kita lanjut ke proposal. Kalau belum cocok, gak ada tagihan, gak ada drama.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795**
👉 **Lihat portofolio kami: https://arblok-digital.vercel.app/#portfolio**
👉 **Cek layanan Marketplace Custom: https://arblok-digital.vercel.app/#services**`
  },
  {
    id: "biaya-operasional-teknologi-perusahaan",
    slug: "biaya-bulanan-yang-tidak-perlu-perusahaan-hemat-teknologi",
    title: "Biaya Bulanan yang Tidak Perlu: Mengapa Banyak Perusahaan Bayar untuk Hal yang Bisa Gratis",
    excerpt: "Banyak perusahaan membayar puluhan juta per tahun untuk software yang tidak sepenuhnya dimanfaatkan. Pelajari cara menghemat 30-40% biaya operasional teknologi tanpa kehilangan fungsi kritis.",
    category: "Efisiensi Bisnis",
    publishedAt: "2026-07-22",
    dateModified: "2026-08-09",
    readTime: "7 Menit Bacaan",
    tags: ["Biaya Operasional", "Efisiensi Teknologi", "Software Custom", "Cost Optimization", "Arblok Digital", "Tasikmalaya", "Digitalisasi Perusahaan", "Konsultasi IT"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Berapa rata-rata biaya operasional teknologi perusahaan kecil per tahun?",
        answer: "Berdasarkan pengamatan kami, perusahaan dengan 30-50 karyawan bisa menghabiskan Rp 40-60 juta per tahun hanya untuk software berlangganan, server hosting, dan gateway notifikasi. Sebagian besar fitur yang dibayar tidak digunakan optimal."
      },
      {
        question: "Apakah bisa menghemat biaya teknologi tanpa mengganti sistem yang sudah ada?",
        answer: "Bisa. Langkah pertama adalah audit menyeluruh: fitur mana yang dipakai setiap hari, fitur mana yang jarang dibuka, dan fitur mana yang bisa digantikan oleh solusi custom yang lebih ringan. Biasanya 30-40% biaya bisa dihemat."
      },
      {
        question: "Apa bedanya software custom dengan software berlangganan (SaaS)?",
        answer: "Software berlangganan (SaaS) mengharuskan Anda membayar setiap bulan untuk menggunakan fitur yang sama dengan ribuan pengguna lain. Software custom dibangun sekali milik Anda selamanya, hanya berisi fitur yang benar-benar Anda butuhkan, dan biaya pengembangannya lebih rendah dari total berlangganan 2-3 tahun."
      },
      {
        question: "Apakah Arblok Digital melayani perusahaan menengah dan besar?",
        answer: "Ya. Meskipun kami berbasis di Tasikmalaya, klien kami mulai dari UMKM hingga perusahaan menengah yang membutuhkan solusi custom spesifik. Kami tidak memiliki batasan ukuran perusahaan — yang kami butuhkan adalah masalah bisnis yang jelas yang bisa kami bantu selesaikan."
      }
    ],
    content: `### Biaya Bulanan yang Tidak Perlu

Beberapa minggu yang lalu, saya ngobrol dengan seorang Finance Director di sebuah perusahaan manufaktur kecil di Jawa Barat. Dia cerita soal stack teknologi yang mereka pakai: software akuntansi berlangganan Rp 800 ribu per bulan, sistem HR berbayar Rp 1,2 juta per bulan, platform komunikasi tim Rp 400 ribu per bulan, dan biaya gateway WhatsApp Business API Rp 1,5 juta per bulan. Belum termasuk biaya server dedicated Rp 500 ribu per bulan.

Total? Rp 4,4 juta per bulan. Atau Rp 52,8 juta per tahun. Untuk sebuah perusahaan dengan 30 karyawan.

Ketika saya tanya, "Apakah semua fitur itu dipakai?" jawabannya membuat saya diam sejenak: "Sebagian besar? Saya tidak yakin. Tapi kalau berhenti subscribe, takut ada yang terganggu."

### Kenapa ini masalah yang nyata

Bukan sekadar "kurang efisien." Ketika biaya operasional membengkak karena infrastruktur berlangganan yang berlebihan, dampaknya tidak terasa langsung di bulan pertama. Tapi perlahan: anggaran untuk hal produktif tergerus, divisi lain harus mengencangkan ikat pinggang, dan yang paling berbahaya, tidak ada yang tahu pasti apakah software yang dibayar benar-benar berkontribusi pada hasil bisnis.

Menurut data Conference Board C-Suite Outlook 2026 yang disurvey ke 1.732 eksekutif global, 30,3% CEO menyebut teknologi sebagai salah satu risiko terbesar di tahun ini. Bukan karena teknologinya berbahaya, tapi karena keputusan teknologi yang tidak tepat sasaran bisa menggerus anggaran tanpa perlawanan yang terlihat.

Di Indonesia sendiri, tren biaya digitalisasi memang meningkat tajam. Kompas Money melaporkan di Juni 2026 bahwa kenaikan biaya platform dan software berlangganan menjadi keluhan utama pelaku bisnis. Koran Jakarta pada Juli 2026 menyebutkan bahwa digitalisasi yang tidak tepat sasaran justru bisa memperlebar jurang kompetitif, bukan menutupnya.

### Apa yang sebenarnya bisa dilakukan

Di Arblok Digital, sebuah studio software dari Tasikmalaya, kami melihat pola ini berulang di banyak klien: biaya operasional teknologi yang seharusnya bisa ditekan jauh lebih rendah, kalau pendekatannya tepat.

Pertama, kami membantu perusahaan mengidentifikasi biaya teknologi mana yang benar-benar memberikan dampak. Bukan sekadar audit daftar langganan, tapi evaluasi mendalam: fitur mana yang dipakai setiap hari, fitur mana yang hanya dibuka sekali sebulan, dan fitur mana yang sama sekali tidak dibuka. Dari situ, biasanya terlihat 30-40% dari biaya bisa dihemat tanpa kehilangan fungsi yang kritis.

Kedua, kami membangun solusi yang mengganti model berlangganan dengan kepemilikan. Banyak fitur yang ditawarkan oleh software berbayar sebenarnya bisa dibangun secara custom, sekali, milik perusahaan selamanya, dengan biaya pengembangan yang jauh lebih rendah dari total berlangganan 2-3 tahun. Sistem manajemen inventori, dashboard keuangan, formulir pendaftaran klien, atau bahkan sistem kasir digital, semuanya bisa dibangun sesuai kebutuhan spesifik perusahaan.

Ketiga, kami memastikan solusi yang dibangun benar-benar dipakai. Bukan demo yang mengesankan lalu ditinggalkan. Kami mendampingi tim perusahaan dalam proses adopsi, memastikan setiap karyawan tahu cara menggunakannya, dan menyediakan dukungan teknis jangka panjang. Karena software yang canggih tapi tidak dipakai itu lebih buruk dari tidak punya software sama sekali.

### Real Case: Rp 52,8 Juta/Tahun Jadi Rp 0/Tahun untuk Server

Kasus nyata (generalisir):

- Perusahaan: Perusahaan manufaktur kecil di Jawa Barat, 30 karyawan
- Masalah: Rp 4,4 juta per bulan untuk software berlangganan + server + gateway WA API
- Solusi: Migrasi ke arsitektur Zero-Cost Serverless (Supabase + RLS) + WhatsApp deep-link + dashboard custom
- Modal: Rp 18 juta (sekali bayar untuk pengembangan custom)
- Hasil 6 bulan pertama:
  - Biaya server bulanan turun dari Rp 500 ribu jadi Rp 0
  - Biaya gateway WA API turun dari Rp 1,5 juta jadi Rp 0
  - Beberapa software SaaS digantikan oleh sistem custom yang lebih ringan
  - Penghematan total: Rp 2,7 juta per bulan = Rp 32,4 juta per tahun
  - Modal terbayar dalam 7 bulan. Setelah itu, penghematan masuk langsung ke profit.

### Mengapa Arblok Digital

Arblok Digital adalah tim kecil yang berbasis di Tasikmalaya. Kami tidak mengklaim bisa menyelesaikan semua masalah teknologi di Indonesia. Tapi kami percaya bahwa banyak perusahaan kecil dan menengah sebenarnya sudah membayar lebih dari yang mereka sadari, dan mereka berhak mendapatkan solusi yang lebih cerdas.

Kami spesialis dalam:
- Zero-Cost Serverless Architecture (Rp 0/bulan hosting)
- Software custom yang dibangun sekali dan dimiliki selamanya
- Migrasi dari model SaaS berlangganan ke sistem kepemilikan
- Monorepo architecture untuk skalabilitas jangka panjang

Kalau perusahaan Anda sedang mengevaluasi biaya operasional teknologi tahun ini, atau bahkan hanya ingin tahu apakah ada yang bisa dihemat, saya terbuka untuk berbicara.

30 menit konsultasi awal gratis. Kalau cocok, kita lanjut ke proposal. Kalau gak cocok, gak ada tagihan, gak ada drama.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795**
👉 **Lihat portofolio kami: https://arblok-digital.vercel.app/#portfolio**`
  },
  {
    id: "fee-marketplace-makin-besar-2026",
    slug: "fee-marketplace-makin-besar-2026-potongan-shopee-tokopedia-tiktok-shop",
    title: "Fee Marketplace Makin Besar 2026: Rincian Potongan Shopee, Tokopedia & TikTok Shop + Cara Jualan Tanpa Tergerus",
    excerpt: "Potongan total di Shopee, Tokopedia & TikTok Shop bisa lebih dari 20% dari nilai transaksi (Mei 2026): komisi naik, biaya logistik baru dari sisi penjual, batas komisi Tokopedia Rp650.000, plus PPh 22 0,5%. Rincian biaya, simulasi margin, dan 3 jurus jualan dengan potongan minimal.",
    category: "UMKM & Marketplace",
    publishedAt: "2026-08-06",
    dateModified: "2026-08-09",
    readTime: "9 Menit Bacaan",
    tags: ["Fee Marketplace 2026", "Biaya Admin Shopee", "Komisi Tokopedia", "Potongan TikTok Shop", "Biaya Layanan Logistik", "PPh 22", "Toko Online Sendiri", "UMKM", "Arblok Digital"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Berapa potongan total Shopee atas satu transaksi di 2026?",
        answer: "Di skenario tertinggi (mengikuti Gratis Ongkir XTRA, Promo XTRA, dan Shopee Live) potongan total bisa lebih dari 20% dari nilai transaksi. Biaya administrasi di kategori fashion sampai 10%, belum termasuk iklan dan biaya proses Rp1.250/pesanan."
      },
      {
        question: "Apakah benar Tokopedia menaikkan batas komisi per item menjadi Rp650.000?",
        answer: "Benar. Batas komisi per item naik dari Rp40.000 menjadi Rp650.000 sejak 18 Mei 2026 — hampir 16 kali lipat dan paling berdampak untuk produk bernilai jual tinggi."
      },
      {
        question: "Berapa biaya layanan logistik Tokopedia dan TikTok Shop sejak 1 Mei 2026?",
        answer: "Rp100 sampai Rp3.000 per pesanan, dengan batas maksimum Rp10.110 (Tokopedia) dan Rp5.055 (TikTok Shop) sebelum pajak. Biaya ditanggung penjual dan tidak terlihat pembeli saat checkout."
      },
      {
        question: "Apakah PPh Pasal 22 0,5% mulai 1 Agustus 2026 merupakan fee marketplace baru?",
        answer: "Bukan. Ini perubahan mekanisme pemungutan pajak oleh marketplace yang ditunjuk (Shopee, Tokopedia, Lazada, Blibli), bukan tambahan komisi platform. Tetap harus dihitung dalam margin."
      },
      {
        question: "Bagaimana cara jualan agar tidak tergerus potongan marketplace?",
        answer: "Empat jalur: (1) bangun toko online sendiri dengan payment gateway berbiaya 0,5–2,5% per transaksi, (2) WhatsApp Business + payment link, (3) social commerce yang diarahkan ke website sendiri, (4) audit ulang harga jual per produk. Toko sendiri memberi margin terbesar dan data pelanggan sepenuhnya milik Anda."
      }
    ],
    content: `### Ringkasan Singkat (30 Detik)

Paruh pertama 2026 dibuka dengan banyak penyesuaian biaya di marketplace Indonesia: Shopee menaikkan tarif Gratis Ongkir XTRA dan memperluas atribusi iklan GMV Max; Tokopedia & TikTok Shop memberlakukan biaya layanan logistik baru yang ditanggung penjual serta menaikkan batas komisi per item dari **Rp40.000 menjadi Rp650.000**; dan mulai 1 Agustus 2026, **PPh Pasal 22 sebesar 0,5%** mulai dipungut oleh marketplace yang ditunjuk — pajak, bukan fee platform baru. Bagi seller bermargin tipis, kombinasi komisi + biaya layanan + iklan bisa menggerus **15-20%+ dari harga jual**.

### Rincian Biaya Marketplace per Platform (Mei 2026)

**Shopee — potongan bisa tembus 20%+:**
- Biaya administrasi per kategori: fashion/FMCG/lifestyle **10%**, elektronik tertentu 9–9,5%, susu/suplemen 6,5–6,75%, elektronik high-end 5,25%, logam mulia 4,25%
- Gratis Ongkir XTRA (2 Mei 2026): fashion ukuran tambahan naik 5,5% → **7,5%**
- Atribusi iklan GMV Max (7 Mei 2026): transaksi bisa diklaim sebagai hasil iklan meski pembeli hanya lihat tanpa klik lalu beli dalam sehari
- Opsional: Promo XTRA 4,5–8%, Shopee Live XTRA 3%, pre-order 3%, biaya proses Rp1.250/pesanan

**Tokopedia & TikTok Shop:**
- Komisi platform 2,5%–12,2% tergantung kategori (Tokopedia umumnya 6,97% termasuk PPN)
- Batas komisi per item: Rp40.000 → **Rp650.000** (18 Mei 2026)
- Biaya layanan logistik baru (1 Mei 2026): Rp100–Rp3.000/pesanan, maksimal Rp10.110 (Tokopedia) / Rp5.055 (TikTok Shop) sebelum pajak, ditanggung penjual
- TikTok Shop afiliasi 5–25% (Targeted hingga 50%); total dasar platform 5–15%, dengan afiliasi aktif 20–35%

**Lazada:** non-elektronik 1,5–6% (maks. Rp20.000/produk), elektronik 4% (maks. Rp10.000/produk).

**Catatan PPh Pasal 22 0,5% (1 Agustus 2026):** Shopee, Tokopedia, Lazada, Blibli ditunjuk memungut dari seller yang memenuhi kriteria. Bukan fee platform, tapi tetap masuk kalkulasi margin.

### Simulasi: Jual 1 Item Rp150.000, Berapa yang Sampai ke Dompet?

| Komponen | Marketplace (skema aktif) | Toko Online Sendiri |
|----------|--------------------------|---------------------|
| Harga jual | Rp150.000 | Rp150.000 |
| HPP | Rp80.000 | Rp80.000 |
| Biaya komisi admin | Rp15.000 (10%) | Rp0 |
| Biaya program ongkir | Rp11.250 (7,5%) | Rp0 |
| Logistik seller | Rp5.000 | Rp0 |
| Iklan (estimasi) | Rp8.000 | Rp0 |
| Payment gateway | — | Rp3.750 (2,5%) |
| **Sisa margin** | **Rp30.750 (20,5%)** | **Rp66.250 (44,2%)** |

Selisih per transaksi **Rp35.500**. Satu pesanan retur saja sudah menghapus keuntungan beberapa transaksi.

### Kenapa Fee Naik Terus? 3 Penjelasan Tanpa Rumor

1. **Masa subsidi berakhir** — potongan ongkir dan promo yang dulu didanai platform kini dialihkan sebagai biaya layanan penjual.
2. **Biaya kecil yang ditampung** — Rp1.250/order, Rp100–3.000/order logistik, +2–7,5% program tertentu: sendirian kecil, digabung langsung menggerus margin.
3. **Iklan sudah de facto wajib** — perubahan atribusi GMV Max membuat biaya iklan semakin sulit dihindari.

### Timeline Perubahan 2025–2026

- **Jul–Agustus 2025:** biaya proses Rp1.250/order (Shopee 20 Jul; Tokopedia & TikTok Shop 11 Agst).
- **Januari 2026:** Shopee biaya administrasi 2–10% per kategori + biaya preorder 3%.
- **1 Mei 2026:** Tokopedia & TikTok Shop biaya layanan logistik dari sisi penjual.
- **2 Mei 2026:** tarif Gratis Ongkir XTRA Shopee naik (fashion tambahan 5,5 → 7,5%).
- **7 Mei 2026:** aturan atribusi iklan GMV Max.
- **18 Mei 2026:** Tokopedia batas komisi per item → Rp650.000.
- **1 Agustus 2026:** pemungutan PPh Pasal 22 0,5%.

### 3 Jurus Bertahan Tanpa Harus Keluar Marketplace

**Jurus 1 — Hitung ulang unit economics per produk, bukan sekadar omzet.** Margin bersih = harga jual − HPP − komisi − biaya layanan − estimasi iklan − risiko retur. Produk yang marginnya negatif: naikkan harga atau hentikan.

**Jurus 2 — Diversifikasi kanal.** Tetap jual di marketplace untuk exposure, tapi arahkan pembeli ke kanal sendiri: QR di kemasan, program member eksklusif, konten edukatif di IG/TikTok yang berakhir di website atau payment link Anda.

**Jurus 3 — Bangun jalur penjualan sendiri.** Dengan toko online sendiri, satu-satunya potongan adalah payment gateway (**0,5–2,5%**). Margin, data, dan kontak pelanggan utuh milik Anda — hosting bisa Rp0/bulan.

### Kesimpulan

Kenaikan fee marketplace 2026 bukan kabar yang berhenti di Mei. Lakukan 3 hal: hitung ulang margin, diversifikasi kanal, dan bangun jalur yang Anda kontrol. Marketplace tetap berguna — tapi jangan jadikan satu-satunya pintu.

### Sumber Data

- Katadata.id — "Biaya Admin Marketplace Naik, Seller Mulai Lirik Kanal Penjualan Mandiri" (Mei 2026).
- Bisnis via Datasatu (bersumber Investing.com) — "Tarif Komisi Marketplace Makin Tinggi, Seller Harus Hitung Ulang Margin" (Mei 2026).
- Tokopedia Seller University — halaman "Biaya Komisi Platform" (2026).
- Toco.id dan UKMIndonesia.id — ringkasan perubahan biaya marketplace Mei 2026.
- BiteShip Blog — "Biaya Marketplace Indonesia 2026: Perbandingan Lengkap" (Juli 2026).

**Butuh konsultasi gratis?** Chat Ardi via WhatsApp: 30 menit pertama gratis, tanpa kewajiban.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795`
  },
  {
    id: "pendaftaran-sekolah-online-semrawut",
    slug: "pendaftaran-sekolah-online-semrawut-spmb-ppdb-2026",
    title: "Pendaftaran Sekolah Online Semrawut: SPMB/PPDB 2026 Down dan Kenapa Terjadi Lagi",
    excerpt: "SPMB/PPDB 2026: server down di Bekasi dan Bontang, 928 pendaftar lawan 130 kursi di Makassar, orang tua antre di Disdik. Kenapa pendaftaran online selalu semrawut tiap tahun + 3 solusi untuk sekolah, lengkap dengan sumber berita.",
    category: "Sekolah & Pendidikan",
    publishedAt: "2026-08-06",
    dateModified: "2026-08-09",
    readTime: "8 Menit Bacaan",
    tags: ["Pendaftaran Sekolah Online", "SPMB 2026", "PPDB 2026", "Server Down", "Antrean Pendaftaran", "Literasi Digital", "SekolahRapi", "Arblok Digital"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Kenapa server PPDB/SPMB hampir selalu down setiap tahun ajaran baru?",
        answer: "Karena banyak orang tua mengakses dan mengunggah berkas pada waktu yang sama saat pendaftaran dibuka, sementara kapasitas server dirancang untuk lalu lintas normal. Sistem yang tidak diuji lonjakan akan cepat kewalahan. Pola ini berulang sejak 2021, 2024, hingga 2026."
      },
      {
        question: "Apa yang terjadi pada SPMB 2026 di Makassar?",
        answer: "Hari pertama pendaftaran, banyak orang tua datang ke sekolah karena belum paham unggah dokumen. SMP Negeri 3 Makassar mencatat 928 pendaftar untuk kuota 130 kursi jalur domisili (Kompas TV, 23 Juni 2026)."
      },
      {
        question: "Di mana saja kendala server pendaftaran dilaporkan pada 2026?",
        answer: "Bekasi: sistem terganggu, orang tua antre di kantor Disdik (Lensa Bekasi, 1 Juli 2026). Bontang: PPDB online SMA/SMK bermasalah di hari pertama (Kita Muda Media, 22 Juni 2026). Beberapa kota lain juga melaporkan kesulitan saat akses puncak."
      },
      {
        question: "Apakah sekolah boleh membuat sistem pendaftaran sendiri?",
        answer: "Boleh. Jalur resmi (zonasi, afirmasi, prestasi) tetap mengikuti aturan Dinas, tetapi formulir, antrean, verifikasi bertahap, dan daftar tunggu bisa dikelola sekolah sendiri. Contoh implementasinya: SekolahRapi dan SekolahPro."
      },
      {
        question: "Bagaimana cara agar pendaftaran sekolah tidak semrawut?",
        answer: "Empat kunci: (1) sistem pendaftaran sendiri yang tetap hidup saat server Dinas bermasalah, (2) antrean berbasis slot waktu, (3) verifikasi bertahap dengan notifikasi WhatsApp, (4) pendampingan orang tua di titik layanan manual."
      }
    ],
    content: `### Ringkasan Singkat (30 Detik)

Pendaftaran sekolah negeri yang dilakukan online (dulu PPDB, kini disebut SPMB) selalu menghadirkan masalah yang sama: **server tidak bisa diakses saat pendaftaran dibuka**, **orang tua tidak bisa mengunggah berkas**, dan **antrean berpindah ke sekolah atau kantor Dinas Pendidikan**.

Contoh Juni–Juli 2026: di Bekasi orang tua antre seharian di kantor Disdik. Di Bontang pendaftaran SMA/SMK bermasalah di hari pertama. Di Makassar sebuah SMP negeri mencatat **928 pendaftar untuk 130 kursi**, dan sebagian besar orang tua butuh pendampingan saat mengunggah dokumen. Pola yang sama terjadi sejak 2021, 2024, dan 2025.

### Fakta di Lapangan: Mei–Juli 2026

| Kota | Kejadian | Sumber |
|------|----------|--------|
| Makassar | SPMB jalur domisili: 928 pendaftar vs kuota 130 kursi; orang tua butuh pendampingan unggah | Kompas TV |
| Bekasi | Sistem SPMB terganggu; orang tua antre seharian di kantor Disdik | Lensa Bekasi |
| Bontang | PPDB online SMA/SMK bermasalah di hari pertama | Kita Muda Media |
| Tangsel | Diskominfo menaikkan kapasitas server cegah down | Media Indonesia |

Jejak sebelumnya: 2021 DKI Jakarta (server down, akun disetop sementara), 2024 Jawa Barat ("ambruk selalu berulang"), 2025 Banyumas (down sejam, 90% data masuk bersamaan).

### Kenapa Sistem Pendaftaran Online Selalu Semrawut?

1. **Semua mengakses di jam yang sama.** Ribuan orang membuka sistem dalam 2–3 jam pertama. Sistem yang dirancang untuk trafik "biasa" kewalahan saat puncak.
2. **Kapasitas server sering dibuat hemat.** Menyewa kapasitas besar sepanjang tahun untuk beberapa hari itu mahal. Tanpa uji beban, hari-H jadi perbaikan dadakan.
3. **Proses unggah berkas itu berat.** Scan KK, akta, dan foto dalam ukuran besar dikirim ribuan orang sekaligus. Sistem yang mengompres berkas di sisi pengguna jauh lebih ringan.
4. **Literasi digital belum merata.** Banyak orang tua belum memahami unggah dan verifikasi. Sistem tanpa pendampingan manusia mempersulit sebagian warga.

### 3 Solusi yang Bisa Langsung Diterapkan Sekolah

**1. Halaman pendaftaran sendiri yang tetap hidup.** Server Dinas down tidak harus membuat sekolah ikut down. Formulir online, data masuk ke database sekolah, verifikasi bertahap. Prinsip ini diterapkan di **SekolahRapi** dan **SekolahPro**.

**2. Antrean berbasis slot waktu, bukan rebutan.** Ubah pola "siapa cepat dia dapat" menjadi slot waktu (07.00–08.00, 08.00–09.00). Beban akses menyebar, orang tua dapat kepastian.

**3. Verifikasi bertahap plus notifikasi WhatsApp.** Pisahkan isi data dan verifikasi berkas, beri kesempatan revisi, kirim status via wa.me tanpa biaya API. Posko manusia tetap ada untuk yang kurang melek teknologi.

### Kesimpulan

Kekacauan pendaftaran online bukan karena orang tua, melainkan karena sistem tidak diuji pada titik paling tegang dan tata caranya belum dijelaskan. Solusinya: sistem yang tahan lonjakan, antrean tanpa rebutan, verifikasi bertahap, dan pendampingan manusia. Sumber berita lengkap ada di versi artikel web (Kompas TV, Lensa Bekasi, Kita Muda Media, Media Indonesia, Bandungbergerak.id, Metro TV, detikNews, VOI).

### Sumber Data

- Kompas TV — peliputan SPMB Makassar: 928 pendaftar vs kuota 130 kursi jalur domisili (23 Juni 2026).
- Lensa Bekasi — sistem SPMB terganggu, orang tua antre di kantor Disdik (1 Juli 2026).
- Kita Muda Media — PPDB online SMA/SMK Bontang bermasalah di hari pertama (22 Juni 2026).
- Media Indonesia — Diskominfo Tangsel menaikkan kapasitas server cegah down.
- Bandungbergerak.id, Metro TV, detikNews, VOI — jejak permasalahan PPDB/SPMB 2021, 2024, 2025.

Butuh diskusi untuk sistem pendaftaran sekolah Anda? Konsultasi 30 menit pertama gratis.

👉 **Chat WhatsApp (Ardi - Arblok Digital): https://wa.me/6289508053795**`
  }
];

const ARTICLES_EN: Article[] = [
  {
    id: "siasat-jitu-arblok-marketing",
    slug: "siasat-jitu-arblok-digital-akselerasi-bisnis-tanpa-boncos",
    title: "Arblok Digital's Strategy: Business & GovTech Acceleration on Any Budget!",
    excerpt: "Many software agencies demand sky-high fees, shutting out small businesses. Arblok Digital breaks those barriers with Monorepos & Zero-Cost Serverless architectures. Read our blueprint behind KasirPro and E-Warga!",
    category: "Technology & Business",
    publishedAt: "2026-07-10",
    readTime: "6 Min Read",
    tags: ["Arblok Digital", "Monorepo", "Zero-Cost", "Marketing", "Local SaaS", "KasirPro", "E-Warga"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Why is Arblok Digital so flexible with project budgets?",
        answer: "Because we practice digital inclusivity. By leveraging Monorepo workspaces (NPM Workspaces) for code reuse and Zero-Cost Serverless architectures, we completely eliminate upfront hosting capital (CAPEX) and recurring monthly server bills (OPEX) for MVP tiers. We pass these savings directly to you!"
      },
      {
        question: "How does the zero-cost WhatsApp notification system work?",
        answer: "Our platforms (like E-Warga) utilize dynamic WhatsApp click-to-chat deep links (wa.me). When a certificate is ready, the frontend prepares a secure verification summary and pre-fills it into a WhatsApp action, prompting the user to send it instantly. No official API fees, 100% free!"
      },
      {
        question: "Are low-budget systems secure and scalable?",
        answer: "Absolutely! Data security is locked down via PostgreSQL Row Level Security (RLS) directly on our cloud database. Long-term scalability is guaranteed by our Monorepo architecture. As your business grows, we easily spin up new applications without rewriting your existing databases or core business pipelines."
      }
    ],
    content: `### The Genuine Frustration Behind Arblok Digital

Many small merchants, local grocery store owners, and village officers want to harness the power of modern technology. Unfortunately, traditional software agencies charge massive fees—often running into thousands of dollars. On top of that, fixed monthly server bills and database maintenance costs overwhelm small businesses, especially during slow sales seasons.

Arblok Digital was founded in Tasikmalaya to solve this exact problem. Led by **Ardi**, a Senior Full-Stack Developer & Software Architect, we believe world-class software shouldn't cost an arm and a leg. We're here to shatter the myth that professional software has to be expensive!

### Strategy 1: Slashing Costs via Zero-Cost Serverless Architecture

How do we deliver resilient solutions at such accessible rates? The key is modern cloud design:

* **PostgreSQL with Row Level Security (RLS):** We connect our frontend clients directly to managed cloud databases (such as Supabase) securely. Thanks to robust RLS policies written directly on the database tables, your transactional ledger is perfectly safe without paying for 24/7 virtual server instances. Monthly cloud hosting bills are kept at **$0/month** under standard free-tier quotas!
* **Ultra-Efficient Frontend File Compression:** To store sensitive documents like government IDs (KTP/KK) or payment receipts, we apply automated compression on the browser side to resize images **below 150KB** before upload. This guarantees your 1GB free cloud tier lasts for years, holding tens of thousands of records without paid upgrades.
* **Zero-Cost WhatsApp Alerts:** We implement custom deep-link templates (*wa.me*) that trigger instant status sharing directly from your own device. This removes the expensive third-party SMS or Official API tolls that drain small business budgets.

### Strategy 2: Monorepo Scalability: No Code Duplication

Many entrepreneurs hesitate to build affordable MVPs fearing they cannot scale. At Arblok Digital, we eradicate that concern with a **Monorepo (NPM Workspaces)** architecture:

All core business parameters, document approval transition pipelines, and database query clients are isolated into localized packages (*shared packages*) completely decoupled from your app's frontend.

When your business grows and you need a secondary analytical dashboard or a wholesale supplier portal in the future, we simply import those exact same packages. This slashes future development cycles by up to 70%, prevents logic fragmentation, and saves you massive engineering expenses downstream!

### Our Golden Promise: No Budget is Too Small!

Is your project budget under $100? Are you a neighborhood shopkeeper looking to test an essential digital register?

**Do not hesitate and do not be shy!** At Arblok Digital, our doors are always open. We never reject a brilliant idea based on budget limits. We are fully prepared to build a streamlined **Starter/MVP (Minimum Viable Product)** that fits your current cash flow, and grow side-by-side as your profits scale.

Let us translate your business pain points into elegant software. Reach out to our Founder, Ardi, for a friendly consultation and a custom, wallet-friendly quote.

👉 **WhatsApp Chat (Ardi - Arblok Digital): https://wa.me/6289508053795**`
  },
  {
    id: "digitalisasi-umkm-zero-cost",
    slug: "panduan-digitalisasi-umkm-zero-cost-serverless",
    title: "Why SMBs Must Go Digital: A Practical Guide to Zero-Cost Serverless",
    excerpt: "Many business owners fear digital transformation due to expensive hosting overheads. Learn how Zero-Cost Serverless architectures with PostgreSQL Row Level Security (RLS) in Supabase cut recurring bills to $0/month while keeping data rock-solid.",
    category: "SMB Digitalization",
    publishedAt: "2026-07-08",
    readTime: "5 Min Read",
    tags: ["SMB Digitalization", "Serverless", "Supabase", "Zero-Cost", "Modern Bureaucracy"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Can it really run for $0/month?",
        answer: "Yes. By utilizing the free tiers of modern cloud providers like Supabase (database & auth) and Vercel/Cloud Run (static web hosting or serverless microservices), you pay nothing as long as your volume remains within standard limits (e.g., database storage under 1GB, which easily fits thousands of transactions)."
      },
      {
        question: "How is security maintained without a dedicated backend server?",
        answer: "Security is enforced database-side via PostgreSQL Row Level Security (RLS). Using RLS policies, every single SQL query is checked against secure JWT tokens. Users can only fetch, modify, or delete their own data rows, eliminating unauthorized privilege escalation."
      },
      {
        question: "Why compress KTP or receipt images in the frontend client?",
        answer: "Standard cloud free storage tiers have a 1GB cap. Uploading raw 5MB mobile photos will quickly deplete your quota. Compressing photos on the client side to <150KB before uploading extends storage efficiency by 30x and ensures your system stays free forever."
      }
    ],
    content: `### The Urgency of Digital Transformation for SMBs

In the digital age, operational speed and lean costs dictate market survival. Many micro-merchants and small businesses still rely on paper journals or disjointed spreadsheets to track inventories, leading to high data-loss risks, slower order turnarounds, and zero analytical foresight.

However, the chief complaint from owners when invited to digitize is the **daunting software-as-a-service (SaaS) subscription** or **ongoing monthly server hosting** costs.

### The Modern Remedy: Zero-Cost Serverless Architecture

Arblok Digital introduces a new design paradigm for small business engineering: **Zero-Cost Serverless Architecture**. This approach connects modular static web applications directly to scalable cloud databases.

Here are the 3 pillars of this highly efficient ecosystem:

1. **Decentralized Databases with Row Level Security (RLS)**
   Instead of renting a virtual private server (VPS) running 24/7 (which incurs fixed monthly costs), modern frontend apps connect straight to secure cloud databases. Authorization is hardcoded inside database policies, keeping ledger lines secure without active compute overhead.

2. **Aggressive Client-Side File Compression**
   Cloud storage tiers are generous but limited (e.g., 1GB on Supabase Free). Arblok Digital deploys browser-level compression. By guaranteeing uploaded receipts or IDs are compressed **below 150KB**, you can process thousands of records without spending a dime on premium hosting tiers.

3. **Frictionless Free Communication Channels**
   Official SMS Gateways or WhatsApp APIs carry steep entry fees. By integrating deep-linked *wa.me* endpoints with dynamic text presets, we trigger instant customer notifications for free, directly utilizing the merchant's WhatsApp client.`
  },
  {
    id: "revolusi-ai-generatif-bisnis",
    slug: "revolusi-ai-generatif-untuk-efisiensi-bisnis",
    title: "The Generative AI Business Revolution: Beyond Basic Chatbots",
    excerpt: "Many companies assume AI is merely an automated FAQ answering widget. Discover how server-side integration of Large Language Models (LLMs) boosts sales conversions, automates marketing campaigns, and analyzes user feedback autonomously.",
    category: "Artificial Intelligence (AI)",
    publishedAt: "2026-07-08",
    readTime: "6 Min Read",
    tags: ["Artificial Intelligence (AI)", "Gemini AI", "Business Automation", "Smart Systems", "IEO"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "Is AI integration safe for corporate proprietary data?",
        answer: "Yes, perfectly safe when implemented using a Server-Side Proxy. By routing LLM prompts (such as Gemini API requests) through secure internal backend routes, we sanitize sensitive queries, govern system instructions, and keep API secrets hidden from the client browser."
      },
      {
        question: "How does an Autonomous Marketing Pipeline operate?",
        answer: "The pipeline runs in the background using cron schedules. The AI engine parses market trends, drafts persuasive ad copy, and auto-posts campaigns directly to social media accounts daily with zero manual intervention required."
      }
    ],
    content: `### Demolishing Chatbot Limitations

When businesses discuss artificial intelligence, they usually picture a static, robotic chat balloon in the corner of a website regurgitating canned answers. In reality, the potential of modern generative AI goes lightyears beyond that.

Modern Large Language Models (LLMs), such as the **Gemini 3.5** family, boast dynamic problem-solving, real-time sentiment parsing, unstructured data extraction, and structured code output capabilities.

### Real-World AI Integrations Driving Business Growth

Arblok Digital architects tailored AI features that focus on real, bottom-line efficiency rather than tech-hype:

* **Automated Support & Document Classification**
  In public platforms like *E-Warga*, AI analyzes long resident complaints, extracts key problems, and automatically channels the document to the corresponding municipal department in seconds.

* **Autonomous Marketing Generator & Auto-Publisher**
  Writing fresh copy every day is exhausting. Using automated pipelines, AI scans trending hashtags, drafts creative posts, and pre-publishes marketing collateral directly to your social media channels.

* **Smart Cross-Selling & Custom Product Recommendations**
  By analyzing checkout patterns inside digital POS systems (like *KasirPro F&B*), the AI extracts co-purchase trends and crafts personalized menus, significantly driving up average transaction values.`
  },
  {
    id: "arsitektur-monorepo-skalabilitas",
    slug: "arsitektur-monorepo-skalabilitas-masa-depan",
    title: "Building High-Speed & Scalable Apps with Monorepo Architecture",
    excerpt: "Why starting with a unified workspace using NPM Workspaces is the absolute best decision for modern startups and technology teams. Prevent code duplication and accelerate time-to-market.",
    category: "Technology & Business",
    publishedAt: "2026-07-08",
    readTime: "4 Min Read",
    tags: ["Monorepo", "NPM Workspaces", "Software Architecture", "TypeScript", "Scalability"],
    author: {
      name: "Ardi",
      role: "Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "What is the difference between a Monorepo and a Monolith?",
        answer: "A Monolith is a massive, tightly coupled codebase where everything is tangled. A Monorepo is a single repository hosting multiple completely independent applications and packages (such as citizen PWAs, manager dashboards, and core databases) that share local libraries and schemas modularly."
      },
      {
        question: "When should a project adopt a Monorepo workspace?",
        answer: "We highly recommend adopting a Monorepo right from day one if you intend to build multiple interconnected products (e.g., an iOS/Android customer app, a desktop admin board, and a backend server) that share business models, TypeScript definitions, or database modules."
      }
    ],
    content: `### The Trap of Code Duplication at Scale

As digital ecosystems expand, developers often need to build auxiliary systems that leverage the same schemas and core workflows. In the *E-Warga* platform, for example, we start with a standard resident PWA (*apps/warga-pwa*).

Eventually, district staff require an analytical dashboard (*apps/kecamatan-dashboard*) and civic registers need verification consoles (*apps/disdukcapil-app*).

Under a traditional multi-repo setup, developers must copy-paste TypeScript models, database query engines, and validation schemas across three repositories. Any rule change requires updating three codebases manually—a process highly prone to mismatch bugs.

### The NPM Workspaces Remedy

By leveraging **Monorepo workspaces**, Arblok Digital bundles these sub-systems into a clean, single workspace:

1. **Shared Logic Package (\`packages/logic\`)**
   All workflow validations, status handshakes, and civic parameters are isolated here, exported as a local library called \`@e-warga/logic\`.

2. **Shared Database Client (\`packages/supabase\`)**
   Client configurations, core transactional queries, and PostgreSQL security policies are housed in \`@e-warga/supabase\`.

3. **Seamless Local Workspaces**
   Your citizen application imports these shared local packages. When we build the district dashboard, we simply import the exact same modules in seconds with zero code rewriting.`
  },
  {
    id: "exit-marketplace-own-store",
    slug: "exit-marketplace-build-own-online-store-zero-commission",
    title: "How to Exit the Marketplace: Build Your Own Online Store with 0% Platform Commission",
    excerpt: "Shopee & Tokopedia fees up to 2-10% per transaction in May 2026. Learn how to build your own online store with a direct payment gateway: 0% platform cuts, full margins, and customers you actually own. Plus a complete budget & technology checklist.",
    category: "SMB & Marketplace",
    publishedAt: "2026-07-17",
    readTime: "8 Min Read",
    tags: ["Exit Marketplace", "Own Online Store", "Marketplace Fees", "SMB 2026", "Shopee Tokopedia", "Payment Gateway", "Tasikmalaya Web Development", "Arblok Digital"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "What are the Shopee and Tokopedia transaction fees in 2026?",
        answer: "As of January-May 2026, Shopee service fees range from 2-10% per transaction (depending on product category and subsidy programs). Tokopedia has also adjusted its fee structure. Add a flat Rp 1,250 cut that applies even on returns. For sellers with thin margins (F&B, wholesale, crafts), this can erode 15-25% of monthly profit."
      },
      {
        question: "Can you sell online without a marketplace?",
        answer: "Absolutely. There are 3 main paths: (1) Your own online store + payment gateway (Midtrans, Xendit, DOKU) for QRIS, virtual account, and e-wallet acceptance. (2) WhatsApp Business + product catalog + payment link (zero infrastructure). (3) Instagram/TikTok social commerce that funnels to your own payment link. All three paths mean 0% platform commission."
      },
      {
        question: "How much does it cost to build your own online store?",
        answer: "Costs vary: (a) Using a hosted platform like Shopify/WooCommerce: IDR 500K-3M setup + 300-800K/month subscription. (b) Custom website from a software house: 8-25M (one-time) + IDR 0/month for hosting. (c) WhatsApp + payment link: free but no brand presence. Option (b) offers the highest ROI for serious SMBs."
      },
      {
        question: "What is a payment gateway and why is it critical for a self-hosted store?",
        answer: "A payment gateway is an intermediary between your customers and the bank for processing online payments. Popular options in Indonesia: Midtrans, Xendit, DOKU, iPaymu. They support QRIS, virtual account, e-wallet (OVO, DANA, GoPay), and credit card. Transaction fees are only 0.7-2.5% (far cheaper than 2-10% on marketplaces) and customers pay directly to your business bank account."
      },
      {
        question: "How do you migrate marketplace customers to your own store?",
        answer: "3-layer strategy: (1) Premium packaging — slip in a thank-you card + QR code linking to your online store in every package. (2) Educational content — build an Instagram/TikTok presence with value content, link your store in the bio. (3) Loyalty program — exclusive discounts for repeat orders via your website (e.g., 'Buy 5 get free shipping for website members'). Consistency for 3-6 months usually migrates 30-50% of customers to your own channel."
      },
      {
        question: "Can a self-hosted store outrank marketplaces on Google SEO?",
        answer: "Actually, it's easier. Your own domain (yourstore.com) builds SEO authority from scratch. Your product pages can be 100% customized for specific keywords (e.g., 'spicy chips Tasikmalaya'). Marketplace product pages are packed with competition, exactly like ranking on Google. With content SEO (blog articles, FAQ schema, local backlinks) your own store can hit Google's page 1 within 3-6 months for your specific niche keywords."
      }
    ],
    content: `### Marketplaces Getting Expensive? You're Not Alone

Shopee raised fees again. Tokopedia followed. Shopee's official service fee is now 2-10% per transaction as of January 2026, and Tokopedia adjusted its fee structure in May 2026. Add Rp 1,250 that gets deducted even on returns. The result: many SMB sellers, especially in F&B, crafts, and wholesale, see their margins eroded by 15-25% per month.

The government has stepped in — Permendag No. 19/2026, Permen UMKM No. 3/2026 — but transparency rules don't automatically eliminate fees. You still pay, just with clearer math.

The big question: **keep feeding someone else's platform, or start building your own store where 100% of the profit is yours?**

### 5 Signs You Should Migrate Off Marketplaces

Check these 5 conditions. If 3+ match, it's time:

1. **Margins eroded >15%** from admin fees + shipping subsidies + mandatory ads
2. **Organic marketplace views keep dropping** — you're forced to pay for ads just to stay visible
3. **Customers don't recognize your brand** — they only remember the platform
4. **Customer data isn't yours** — you can't reach them directly, must pay again to remarket
5. **Cash flow goes negative** even on busy sales days due to admin cuts + returns

If 3+ of those apply to you, seriously consider migrating.

### 3 Paths Out of the Marketplace (Without Losing Customers)

#### Path 1: Your Own Online Store + Payment Gateway (RECOMMENDED)
- You own your domain (e.g., spicysnacks.tasik.id)
- Customers check out directly on your website
- Payments via payment gateway (Midtrans, Xendit, DOKU) — supports QRIS, virtual account, e-wallet, credit card
- **Transaction fees only 0.7-2.5%** (vs 2-10% on marketplaces)
- **8-25M one-time investment** for a custom website, **IDR 0/month** for hosting (using serverless architecture + free tier of Supabase/Vercel)
- **100% customers are yours** — phone, email, address all yours for retention

#### Path 2: WhatsApp Business + Payment Link
- No website, no technical setup
- Just a product catalog in WhatsApp Business + payment link from DOKU/iPaymu
- **Totally free**, but no brand presence (customers only remember your WA number)
- Best for: small-scale sales (< 50 orders/month), products requiring direct consultation (catering, services)

#### Path 3: Social Commerce (Instagram/TikTok → Payment Link)
- Sell via reels/shorts content
- Checkout via payment link in bio/caption
- **0% platform commission** because you're not selling on Instagram, just pulling traffic
- Best for: visual products (fashion, aesthetic F&B, crafts), owners who actively create content
- Risk: depends on IG/TikTok algorithm, no customer database of your own

**My recommendation: Combine Path 1 + 3.** Website as the official hub, Instagram/TikTok as the traffic funnel. WhatsApp for closing and after-sales.

### Anatomy of a Profitable Self-Hosted Store

A profitable self-hosted store has 5 mandatory components:

1. **SEO-Friendly Product Catalog**
   - Each product has its own URL page (e.g., /products/spicy-chips-original)
   - Includes description + photos + price + stock + automatic shipping
   - Product schema markup (auto-appears in Google rich snippets)

2. **Integrated Payment Gateway**
   - QRIS, virtual account (BCA/Mandiri/BNI), e-wallet (OVO, DANA, GoPay, ShopeePay)
   - Midtrans (most popular, 0.7-2.5% fee)
   - Automatic webhook: customer pays → system auto-updates order status

3. **Real-Time Order & Inventory Management**
   - Admin dashboard to view incoming orders, payment status, product stock
   - Integration with couriers (JNE, J&T, SiCepat) for automatic label printing
   - WhatsApp notification to customers on every status change (using wa.me deep links — free, no expensive API)

4. **Retention & Loyalty System**
   - Member discounts for repeat orders
   - Reward points (every IDR 100K = 1 point, 10 points = 10% discount)
   - Automatic birthday promo from customer database

5. **Tracking & Analytics**
   - Google Analytics + Meta Pixel to know traffic sources
   - Conversion dashboard: visitors → add-to-cart → checkouts
   - A/B testing landing pages for ads

### Budget & Technology Checklist

| Component | DIY (Self-Built) | Custom Software House | Hosted Platform (Shopify) |
|-----------|------------------|----------------------|---------------------------|
| **Initial Cost** | 0-1M (learning) | 8-25M | 500K-3M |
| **Monthly Cost** | 0 | **IDR 0** (zero-cost hosting) | 300-800K |
| **Setup Time** | 2-4 weeks | 3-6 weeks | 1-3 days |
| **Transaction Fee** | 0.7-2.5% (Midtrans) | 0.7-2.5% (Midtrans) | 2% (Shopify Payments) |
| **Custom Features** | Very limited | 100% to your needs | Limited by theme |
| **Source Code** | You own it | You own it | You don't (subscription) |
| **SEO Friendly** | Depends on builder | Excellent (fully optimizable) | Decent |
| **Scalability** | Low | Very high (Monorepo) | High but expensive |

### 3 Strategies to Bring Marketplace Customers to Your Own Store

1. **Packaging is Marketing**
   Slip in a thank-you card + QR code linking to your online store in every package you ship from the marketplace. Handwrite: "Order again cheaper at yourstore.com — free shipping for members!" 70% of loyal customers will notice.

2. **Educational Content, Not Sales**
   Build an Instagram/TikTok with value content: production behind-the-scenes, cooking tips, customer reviews. In bio, link to your own online store. Consistency for 3-6 months = 5-20K organic monthly traffic.

3. **Exclusive Loyalty Program**
   "Buy 5 get free shipping on website orders only" or "2x reward points for website members." This migrates customers gradually without forcing you to leave the marketplace overnight.

### Real Case: 12 Million IDR Custom Store, Paid for Itself in 4 Months

Real case (generalized, not real names):

- **Owner:** Tasikmalaya chips SMB, IDR 35-50M/month revenue via Shopee
- **Problem:** 18% margin erosion from admin fees + mandatory ads + returns
- **Solution:** Custom online store + Midtrans integration (QRIS) + WA notification
- **Investment:** IDR 12M (one-time) + IDR 0/month hosting
- **Results after 4 months:**
  - 40% of customers migrated to their own website
  - Margin rose from 18% to 30% (saved ~IDR 4.5M/month)
  - Investment paid for itself in 4 months. After that, 100% profit increase to owner.

### Why Arblok Digital?

You could DIY with Shopify or WooCommerce. But if you want:

- **100% source code ownership** (not subscription)
- **Zero-cost hosting** — IDR 0/month forever (not 300-800K/month)
- **Unlimited custom features** — direct integration with POS, loyalty, ERP
- **SEO that actually works** — schema markup, fast load, content strategy
- **Direct support from the Founder** — not a robot CS

...then a custom website from a professional software house is the answer.

At Arblok Digital, we've built:
- **KasirPro F&B** — online POS system for warungs and restaurants
- **E-Warga** — digital bureaucracy platform for villages
- **SekolahPro** — school management system
- **Solana Warung** — Top 100 Google Innovation Award 2025

All built on a **Monorepo (NPM Workspaces)** architecture that makes new feature development 70% faster and cheaper. We don't use templates — everything is custom-coded from scratch to your specific needs.

### Conclusion

A marketplace is a tool, not a permanent home. You can sell there to get initial exposure, but the end goal is: **100% of customers are yours, margins intact, your brand is known, not the platform.**

Three exit paths are covered above. The choice is yours. The important thing: start now, not later. Because every month you wait, marketplaces raise admin fees again.

**Want a free consultation first?** Chat directly with Ardi via WhatsApp. We'll analyze your business situation, give the most fitting recommendation — no sales pressure, no obligation.

First 30 minutes of consultation are free. If it clicks, we move to proposal. If it doesn't, no bill, no drama.

👉 **WhatsApp Chat (Ardi - Arblok Digital): https://wa.me/6289508053795**
👉 **View our portfolio: https://arblok-digital.vercel.app/#portfolio**
👉 **Check our Custom Marketplace service: https://arblok-digital.vercel.app/#services**`
  },
  {
    id: "operational-cost-cutting-companies",
    slug: "monthly-costs-you-should-not-pay-cutting-technology-expenses",
    title: "Monthly Subscriptions That Drain Your Budget: Why Many Companies Pay for What Could Be Free",
    excerpt: "Many companies spend tens of millions per year on software they barely use. Learn how to cut 30-40% of operational technology costs without losing critical functionality.",
    category: "Business Efficiency",
    publishedAt: "2026-07-22",
    readTime: "7 Min Read",
    tags: ["Operational Costs", "Technology Efficiency", "Custom Software", "Cost Optimization", "Arblok Digital", "Tasikmalaya", "Business Digitalization", "IT Consulting"],
    author: {
      name: "Ardi",
      role: "Founder & Lead Software Architect @ Arblok Digital"
    },
    faq: [
      {
        question: "How much do small companies typically spend on technology per year?",
        answer: "Based on our observation, companies with 30-50 employees can spend IDR 40-60 million per year just on software subscriptions, server hosting, and notification gateways. Most features paid for are not fully utilized."
      },
      {
        question: "Can you reduce technology costs without replacing existing systems?",
        answer: "Yes. The first step is a thorough audit: which features are used daily, which are opened once a month, and which could be replaced by a leaner custom solution. Typically, 30-40% of costs can be saved."
      },
      {
        question: "What is the difference between custom software and SaaS subscriptions?",
        answer: "SaaS requires monthly payments for the same features used by thousands of other users. Custom software is built once, owned by you forever, contains only the features you actually need, and costs less than 2-3 years of SaaS subscriptions combined."
      },
      {
        question: "Does Arblok Digital serve medium and large enterprises?",
        answer: "Yes. Although based in Tasikmalaya, our clients range from SMBs to mid-size enterprises that need specific custom solutions. We have no company-size restrictions — what we need is a clear business problem we can help solve."
      }
    ],
    content: `### Monthly Subscriptions That Should Not Exist

A few weeks ago, I spoke with a Finance Director at a small manufacturing company in West Java. He described their technology stack: accounting software at IDR 800K/month, HR system at IDR 1.2M/month, team communication platform at IDR 400K/month, and WhatsApp Business API gateway at IDR 1.5M/month. That's before the dedicated server cost of IDR 500K/month.

Total? IDR 4.4 million per month. Or IDR 52.8 million per year. For a company with 30 employees.

When I asked, "Do you use all those features?" the answer made me pause: "Most of them? I'm not sure. But if we cancel the subscription, I'm worried something will break."

### Why This Is a Real Problem

Not just "inefficiency." When operational costs bloat from excessive software subscriptions, the impact isn't felt in the first month. But gradually: budgets for productive activities shrink, other departments tighten their belts, and most dangerously, nobody truly knows whether the paid software is contributing to business results.

According to the Conference Board C-Suite Outlook 2026 survey of 1,732 global executives, 30.3% of CEOs cited technology as one of the top risks this year. Not because technology is harmful, but because misdirected technology spending can drain budgets without visible resistance.

In Indonesia, the trend of rising digitalization costs is sharp. Kompas Money reported in June 2026 that increased platform and software subscription fees are the primary complaint among business operators. Koran Jakarta noted in July 2026 that misdirected digitalization can actually widen the competitive gap rather than close it.

### What Can Actually Be Done

At Arblok Digital, a software studio based in Tasikmalaya, we see this pattern repeated across many clients: operational technology costs that could be significantly reduced, if the approach is right.

First, we help companies identify which technology costs actually deliver impact. Not just a subscription list audit, but deep evaluation: which features are used daily, which are opened once a month, and which are never opened at all. Typically, 30-40% of costs can be saved without losing critical functionality.

Second, we build solutions that replace the subscription model with ownership. Many features offered by paid software can actually be built custom, once, owned by the company forever, with development costs far lower than 2-3 years of combined subscriptions. Inventory management systems, financial dashboards, client registration forms, or even digital POS systems — all can be built to your specific needs.

Third, we ensure the solution is actually used. Not an impressive demo that gets abandoned. We support your team through the adoption process, ensure every employee knows how to use it, and provide long-term technical support. Because sophisticated software that nobody uses is worse than having no software at all.

### Real Case: IDR 52.8M/Year Down to IDR 0/Year for Server Costs

Real case (generalized):

- Company: Small manufacturer in West Java, 30 employees
- Problem: IDR 4.4M/month for software subscriptions + server + WA API gateway
- Solution: Migration to Zero-Cost Serverless architecture (Supabase + RLS) + WhatsApp deep-link + custom dashboard
- Investment: IDR 18M (one-time custom development)
- Results after 6 months:
  - Server costs dropped from IDR 500K/month to IDR 0
  - WA API gateway costs dropped from IDR 1.5M/month to IDR 0
  - Several SaaS tools replaced by leaner custom systems
  - Total savings: IDR 2.7M/month = IDR 32.4M/year
  - Investment paid off in 7 months. After that, savings go straight to profit.

### Why Arblok Digital

Arblok Digital is a small team based in Tasikmalaya. We do not claim to solve all technology problems in Indonesia. But we believe that many small and mid-size companies are actually paying more than they realize, and they deserve smarter solutions.

We specialize in:
- Zero-Cost Serverless Architecture (IDR 0/month hosting)
- Custom software built once and owned forever
- Migration from SaaS subscription models to owned systems
- Monorepo architecture for long-term scalability

If your company is evaluating operational technology costs this year, or even just wants to know what could be saved, I am open to a conversation.

First 30 minutes of consultation are free. If it clicks, we move to a proposal. If not, no bill, no drama.

👉 **WhatsApp Chat (Ardi - Arblok Digital): https://wa.me/6289508053795**
👉 **View our portfolio: https://arblok-digital.vercel.app/#portfolio**`
  }
];

export const getArticlesData = (lang: string): Article[] => {
  const source = lang === "id" ? ARTICLES_ID : ARTICLES_EN;
  return [...source].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Backward-compatible export
export const ARTICLES_DATA: Article[] = ARTICLES_ID;
