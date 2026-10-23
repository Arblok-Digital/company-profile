# Roadmap SEO & IEO — Arblok Digital

> **Status:** Dokumen perencanaan / audit awal  
> **Repo:** `Arblok-Digital/company-profile`  
> **Branch dokumen:** `docs/seo-ieo-roadmap`  
> **Tanggal:** 23 Oktober 2026  
> **Tujuan:** Menjadi peta kerja sebelum mengubah kode SEO, tanpa mengasumsikan folder lokal adalah sumber terbaru.

---

## 1. Konteks dan aturan kerja

Website produksi pernah diperbaiki langsung melalui GitHub, bukan dari salinan lokal. Karena itu:

1. **Branch `main` adalah sumber kebenaran awal untuk audit kode** sampai kondisi repo dan deployment diverifikasi kembali.
2. Jangan menyalin folder lokal lama ke repo atau melakukan push seluruh project dari lokal sebelum membandingkan commit, diff, environment, dan deployment.
3. Dokumen ini adalah rencana kerja. **Belum ada perubahan SEO aplikasi yang dilakukan sebagai bagian dari dokumen ini.**
4. Temuan dari pembacaan source adalah hipotesis yang harus dibuktikan lewat build dan pemeriksaan URL produksi. Jangan mengubah robots, canonical, rewrite, atau prerender berdasarkan dugaan.
5. Perubahan kode berikutnya sebaiknya dibuat dalam branch terpisah, diperiksa diff-nya, diuji, lalu baru digabungkan ke `main`.

### Definisi IEO yang dipakai dalam dokumen ini

Istilah **IEO** di sini dipakai sebagai istilah kerja untuk *Information Engine Optimization*: membuat informasi Arblok mudah ditemukan, dipahami, dipercaya, dan dikutip oleh mesin pencari maupun mesin jawaban berbasis AI. Istilah yang lebih umum di industri juga mencakup **GEO** (*Generative Engine Optimization*) dan **AEO** (*Answer Engine Optimization*). Tidak ada satu label yang menjamin kemunculan di jawaban AI.

SEO teknis dan kualitas konten tetap menjadi fondasi. File `llms.txt`, schema, atau penyebutan brand saja tidak menjamin Google ranking maupun kutipan AI.

---

## 2. Tujuan bisnis dan hasil yang ingin dicapai

Arblok Digital perlu ditemukan oleh calon pelanggan yang mencari solusi nyata, bukan hanya oleh orang yang sudah mengetahui nama brand.

### Positioning utama yang perlu dikonsistenkan

**Arblok Digital adalah studio/software house pengembang sistem digital dari Tasikmalaya** yang membangun dan mengembangkan aplikasi untuk operasional bisnis, sekolah, dan layanan/institusi.

Positioning final harus disepakati dengan pemilik bisnis dan sesuai kemampuan serta portofolio yang benar-benar tersedia. Jangan mengklaim layanan, integrasi, pelanggan, hasil, atau sertifikasi yang belum bisa dibuktikan.

### Sasaran

- Meningkatkan keterlihatan non-brand untuk layanan yang memang dijual.
- Mengubah tayangan organik menjadi kunjungan berkualitas, pertanyaan, konsultasi, dan peluang penjualan.
- Membantu Google memahami entitas Arblok, produk, layanan, wilayah layanan, dan hubungan antarhalaman.
- Menyajikan fakta yang jelas dan konsisten agar mesin jawaban AI dapat memahami informasi Arblok dengan tepat.
- Menjaga website stabil, dapat dirayapi, dapat diindeks, cepat, dan mudah digunakan.

### Metrik keberhasilan

**Indikator utama**
- Klik organik non-brand.
- Tayangan non-brand berdasarkan kelompok layanan.
- CTR dan posisi per query/halaman (ditafsirkan bersama, bukan berdiri sendiri).
- Klik CTA, klik WhatsApp/email, pengiriman formulir, dan konsultasi yang benar-benar terjadi.
- Prospek yang relevan dan asal kanalnya.

**Indikator teknis**
- Halaman penting dapat diindeks.
- Tidak ada canonical/robots yang tidak disengaja.
- Sitemap hanya memuat URL kanonis yang layak diindeks.
- Tidak ada URL utama yang gagal dengan 4xx/5xx atau redirect loop.
- Metadata dan konten HTML awal sesuai dengan tujuan tiap URL.

**Indikator IEO/GEO/AEO**
- Konsistensi fakta brand pada website dan profil resmi.
- Halaman layanan dapat menjawab pertanyaan spesifik secara langsung.
- Kutipan/rujukan brand di mesin jawaban dapat dipantau secara berkala dengan metode dan prompt yang konsisten. Hasil AI bersifat berubah-ubah; jangan menjadikannya satu-satunya KPI.

---

## 3. Peta audit awal: apa yang diketahui dan belum diketahui

Pembacaan awal repo menunjukkan adanya beberapa komponen SEO: `index.html`, generator prerender, generator artikel, routing React, `vercel.json`, sitemap, robots, `llms.txt`, metadata sosial, dan structured data. Ini menunjukkan fondasi sudah ada, tetapi beberapa sumber metadata meningkatkan risiko ketidakkonsistenan.

| Area | Status audit awal | Tindakan validasi |
|---|---|---|
| Metadata beranda | Title/description dasar sudah ada; positioning dapat dipertajam | Bandingkan source, HTML hasil build, dan HTML URL produksi |
| Prerender/crawler HTML | Ada generator dan snapshot HTML; pernah terlihat perbedaan arahan metadata/robots antarfile | Telusuri script build, rewrite, output akhir, dan response URL utama sebelum mengubah apa pun |
| React routing | Rute beranda, artikel, konsultasi, referral terlihat dalam struktur awal | Audit semua rute dan cara metadata diatur saat navigasi langsung |
| Artikel | Ada data artikel dan generator HTML artikel | Periksa keunikan, akurasi, internal link, schema, canonical, tanggal, dan manfaat pembaca |
| Sitemap | Ada file sitemap dan mekanisme generator | Cocokkan sitemap hasil build dengan sitemap produksi; validasi URL dan `lastmod` |
| Robots | Ada `robots.txt` | Pastikan tidak menghalangi aset/halaman penting dan tidak bertentangan dengan meta robots/header |
| Structured data | Beberapa tipe schema telah digunakan | Validasi sintaks, kesesuaian fakta, dan kecocokan dengan konten terlihat |
| Open Graph/Twitter | Metadata sosial tersedia | Uji URL gambar, dimensi, status HTTP, dan preview aktual |
| Performa/Core Web Vitals | Belum diuji pada audit awal ini | Jalankan PageSpeed Insights / Search Console CWV untuk URL prioritas |
| Analytics dan konversi | Screenshot Search Console di Analytics menunjukkan sampel awal kecil: 8 tayangan, 0 klik untuk periode yang dipilih | Verifikasi properti, rentang tanggal, Search Console langsung, dan event konversi |
| IEO/GEO/AEO | Ada `llms.txt`, tetapi manfaat aktual belum diukur | Perbaiki sumber fakta di halaman utama dan halaman layanan; pantau hasil dengan protokol konsisten |
| Deployment | Repo terhubung dengan alur deploy | Pastikan commit yang diaudit sama dengan commit yang dipublikasikan |

**Penting:** tabel di atas bukan pernyataan bahwa semua hal tersebut pasti rusak. Item yang belum diverifikasi harus tetap berstatus *perlu diuji*, bukan langsung diubah.

---

## 4. Roadmap bertahap

### Tahap 0 — Kunci sumber kebenaran dan kondisi produksi

**Prioritas: P0 — sebelum perubahan SEO**

- Catat commit SHA `main` saat audit dimulai dan commit yang sedang berjalan di deployment produksi.
- Periksa status deployment Vercel dan kaitan branch/commit.
- Jangan menggunakan folder lokal lama sebagai dasar patch.
- Simpan daftar URL penting: beranda, artikel, konsultasi, referral, produk/layanan yang sudah ada, sitemap, robots, dan `llms.txt`.
- Ambil respons HTTP dan HTML awal untuk URL prioritas, termasuk status, redirect, title, description, canonical, robots, H1, schema, serta konten utama.
- Bandingkan HTML respons dengan DOM setelah JavaScript berjalan.
- Catat bukti berupa URL, waktu pemeriksaan, status HTTP, dan commit yang diuji.

**Kriteria selesai:** kita tahu versi kode yang benar-benar live dan bagaimana crawler menerima setiap URL prioritas.

### Tahap 1 — Audit teknis dan indeksasi

**Prioritas: P0**

1. **Robots dan indeksasi**
   - Periksa `robots.txt`, meta robots, dan header `X-Robots-Tag`.
   - Pastikan halaman publik yang perlu dicari tidak mendapat `noindex` secara tidak sengaja.
   - Jangan menghapus `noindex` dari snapshot atau file internal sebelum diketahui apakah file itu dapat diakses sebagai URL publik dan bagaimana rewrite bekerja.

2. **Canonical dan redirect**
   - Setiap halaman yang ingin diindeks harus memiliki canonical yang tepat dan konsisten dengan URL final.
   - Periksa HTTP/HTTPS, host utama, trailing slash, parameter query, redirect lama, serta URL duplikat.
   - Hindari canonical semua halaman ke beranda.

3. **Sitemap**
   - Hanya sertakan URL kanonis yang mengembalikan halaman valid dan memang layak diindeks.
   - Hilangkan URL redirect, 404, noindex, duplikat, dan halaman tipis yang tidak dimaksudkan untuk pencarian.
   - Pastikan tanggal `lastmod` merepresentasikan perubahan konten yang berarti, bukan selalu tanggal build.

4. **Prerender dan routing**
   - Pahami alur build: source konten → generator → output → rewrite/deployment.
   - Uji direct-load dan refresh untuk setiap URL.
   - Pastikan title, description, canonical, robots, H1, dan isi utama tersedia dalam HTML awal tanpa mengandalkan interaksi pengguna.
   - Hindari dua sumber data metadata yang bisa saling berbeda. Jika memungkinkan, buat satu konfigurasi metadata yang digunakan generator dan komponen terkait.

5. **Status HTTP dan error**
   - Uji halaman valid, slug artikel yang tidak ada, aset gambar, sitemap, robots, dan `llms.txt`.
   - URL artikel yang tidak ditemukan sebaiknya memberi status 404 yang benar, bukan menampilkan halaman beranda dengan status 200 (*soft 404*).

**Kriteria selesai:** tidak ada hambatan indeksasi kritis yang belum dijelaskan; setiap URL prioritas memiliki respons yang benar dan metadata konsisten.

### Tahap 2 — Metadata, struktur halaman, dan internal linking

**Prioritas: P1**

- Tetapkan pola title per jenis halaman, dengan nama brand konsisten dan tanpa penjejalan keyword.
- Tulis meta description yang spesifik terhadap isi halaman dan menawarkan alasan relevan untuk berkunjung; description bukan jaminan Google akan menampilkannya persis.
- Pastikan satu H1 utama yang jelas dan heading berikutnya berurutan secara semantik.
- Periksa title, description, H1, canonical, Open Graph title/description, dan konten hero agar tidak menyampaikan positioning yang saling bertentangan.
- Gunakan anchor text deskriptif dari artikel menuju layanan/produk terkait.
- Pastikan navigasi penting menggunakan tautan HTML yang dapat dirayapi, bukan hanya tombol dengan event JavaScript.
- Tambahkan breadcrumb yang membantu pengguna dan sesuai struktur situs.
- Pastikan gambar penting memiliki alt text deskriptif; gambar dekoratif tidak perlu alt yang dipenuhi keyword.
- Periksa tautan rusak, halaman yatim (*orphan pages*), dan tautan yang mengarah ke preview/deployment sementara.

**Contoh arah beranda (draft, belum diterapkan):**

- **Title:** `Arblok Digital — Software House & Pengembang Sistem Digital`
- **Description:** `Arblok Digital adalah software house dari Tasikmalaya yang membangun aplikasi kasir, sistem administrasi sekolah, portal layanan, dan software bisnis sesuai kebutuhan. Konsultasikan kebutuhan sistem Anda.`

Draft ini hanya digunakan jika positioning dan daftar layanan cocok dengan konten dan penawaran aktual. Ukur hasil setelah perubahan; jangan menjanjikan peningkatan ranking.

### Tahap 3 — Arsitektur halaman layanan dan strategi keyword

**Prioritas: P1**

Buat peta *search intent* sebelum menulis halaman baru. Hindari beberapa URL yang menargetkan keyword sama dengan isi hampir identik.

| Kelompok niat pencarian | Contoh topik untuk riset | Arah halaman |
|---|---|---|
| Brand | Arblok Digital, Arblok software | Beranda dan profil perusahaan |
| Software house/pengembangan | software house Tasikmalaya, jasa pembuatan aplikasi | Halaman layanan pengembangan software jika layanan ini benar-benar ditawarkan |
| UMKM/retail | aplikasi kasir UMKM, sistem kasir/barcode | Halaman layanan/produk kasir |
| Sekolah | aplikasi administrasi sekolah, sistem keuangan sekolah | Halaman layanan sekolah yang menjelaskan ruang lingkup secara akurat |
| Instansi/komunitas | portal layanan warga, administrasi digital | Halaman layanan yang sesuai kemampuan dan bukti implementasi |
| Konsultasi | konsultasi pengembangan sistem, digitalisasi operasional | Halaman konsultasi dengan proses dan CTA jelas |

Untuk setiap halaman layanan, siapkan:
- Masalah pengguna dan siapa yang dilayani.
- Solusi, ruang lingkup, fitur, integrasi, batasan, dan alur implementasi.
- Screenshot/demo atau studi kasus yang dapat dibagikan.
- FAQ yang berasal dari pertanyaan pelanggan nyata.
- CTA dan cara menghubungi.
- Bukti kepercayaan: identitas perusahaan, kontak resmi, contoh hasil kerja, dan klaim yang dapat diverifikasi.
- Title, description, H1, canonical, schema, dan internal links yang unik.

Jangan membuat halaman lokasi atau kota secara massal hanya dengan mengganti nama tempat. Halaman lokal harus mencerminkan layanan dan bukti yang benar-benar relevan.

### Tahap 4 — Kualitas artikel dan topical authority

**Prioritas: P1–P2**

Audit setiap artikel dengan checklist berikut:

- Apakah artikel menjawab pertanyaan nyata calon pelanggan?
- Apakah informasi akurat, diperbarui saat perlu, dan punya sumber untuk klaim eksternal?
- Apakah klaim angka (misalnya persentase penghematan, harga, atau biaya hosting) punya konteks dan bukti?
- Apakah artikel memuat pengalaman, contoh implementasi, screenshot, atau wawasan orisinal?
- Apakah artikel berbeda secara substansial dari artikel lain di situs?
- Apakah artikel punya penulis/penanggung jawab yang jelas jika relevan?
- Apakah tanggal publikasi dan pembaruan ditampilkan dengan benar dan sesuai schema?
- Apakah internal link mengarahkan pembaca ke halaman layanan terkait tanpa memaksa?
- Apakah FAQ benar-benar menjawab pertanyaan pembaca, bukan menambahkan keyword berulang?
- Apakah artikel tetap bermanfaat jika nama Arblok dan keyword SEO dihilangkan?

Prioritaskan pembaruan artikel yang punya tayangan Search Console dan relevan secara bisnis. Jangan menambah volume artikel hanya untuk mengejar jumlah indeks.

### Tahap 5 — Structured data dan identitas entitas

**Prioritas: P1–P2**

- Validasi JSON-LD dengan Rich Results Test dan Schema Markup Validator.
- Pastikan `Organization` atau tipe bisnis yang sesuai menggambarkan nama, URL, logo, kontak, dan profil resmi secara akurat.
- Gunakan `WebSite`, `BreadcrumbList`, `Article`/`BlogPosting`, dan schema layanan hanya jika cocok dengan isi halaman dan panduan yang berlaku.
- `FAQPage` boleh menggambarkan FAQ yang benar-benar terlihat, tetapi Google membatasi tampilan FAQ rich result; jangan menganggapnya sebagai cara otomatis memperoleh rich result.
- Jangan memasukkan review, rating, harga, alamat, pelanggan, atau layanan yang tidak nyata.
- Konsistenkan entitas brand dan produk di website, Google Business Profile (jika memenuhi syarat), dan profil sosial resmi.
- Schema membantu mesin memahami konten; schema bukan jaminan ranking atau jawaban AI.

### Tahap 6 — IEO / GEO / AEO: kesiapan untuk mesin jawaban

**Prioritas: P2, dikerjakan bersama kualitas konten**

- Pastikan halaman utama menjawab dengan jelas: siapa Arblok, apa yang dikerjakan, siapa yang dilayani, wilayah layanan, produk/layanan yang tersedia, dan cara menghubungi.
- Buat halaman layanan dengan jawaban langsung di awal, lalu penjelasan detail, bukti, batasan, dan FAQ.
- Gunakan istilah dan nama produk secara konsisten; jelaskan hubungan antara Arblok Digital dan produk-produknya.
- Cantumkan tanggal, sumber, contoh, dan batasan pada informasi yang mudah berubah.
- Gunakan struktur heading, tabel, daftar, dan definisi yang memudahkan pembaca dan mesin mengekstrak fakta.
- Pastikan halaman penting dapat diakses crawler yang memang ingin diizinkan, dengan kebijakan robots yang disengaja.
- Tinjau `llms.txt` sebagai file informasi tambahan; jangan mengandalkannya sebagai pengganti HTML yang jelas, sitemap, atau akses crawler.
- Jangan membuat halaman khusus yang hanya berisi teks untuk AI dan tidak berguna bagi manusia.
- Jangan menjanjikan bahwa optimasi tertentu akan membuat ChatGPT/Gemini mengutip Arblok.

**Protokol pemantauan IEO**
1. Susun 10–20 pertanyaan tetap yang mencerminkan kebutuhan pelanggan dan pasar target.
2. Catat tanggal, platform/model, prompt persis, apakah Arblok disebut, sumber yang dikutip, dan pesaing yang muncul.
3. Ulangi secara berkala dengan kondisi sedekat mungkin sama.
4. Perlakukan hasil sebagai observasi kualitatif, bukan ukuran pangsa pasar atau jaminan atribusi.

### Tahap 7 — Performa, aksesibilitas, dan konversi

**Prioritas: P1–P2**

- Ukur Core Web Vitals pada URL utama dan halaman layanan: LCP, INP, CLS.
- Periksa ukuran gambar, format modern, lazy loading untuk gambar di bawah fold, font, JavaScript, dan layout shift.
- Hindari optimasi yang mengorbankan aksesibilitas atau konten utama demi skor lab.
- Uji mobile, keyboard navigation, kontras, label formulir, dan pesan error.
- Pastikan CTA utama mudah ditemukan dan berfungsi.
- Lacak event yang relevan: klik WhatsApp/email, formulir terkirim, klik demo, dan permintaan konsultasi.
- Jangan mengirim data pribadi sensitif ke Analytics.
- Verifikasi event melalui DebugView/Realtime dan dokumentasikan definisi konversi.

### Tahap 8 — Pengukuran dan iterasi

**Prioritas: berkelanjutan**

- Verifikasi properti domain di Google Search Console dan sitemap yang dikirim.
- Periksa laporan Pages/Indexing, manual actions, security issues, Core Web Vitals, dan URL Inspection.
- Gunakan Search Console sebagai sumber utama performa pencarian Google; GA4 dipakai untuk perilaku dan konversi di situs.
- Kelompokkan query menjadi brand, software house, UMKM/kasir, sekolah, instansi, dan konsultasi.
- Evaluasi per halaman dan kelompok query, bukan hanya angka domain total.
- Gunakan periode pembanding yang sebanding dan pertimbangkan jeda crawling/indexing.
- Ubah satu kelompok elemen pada satu waktu bila memungkinkan agar hasil lebih mudah ditafsirkan.
- Simpan baseline dan tanggal deployment setiap perubahan.

---

## 5. Backlog implementasi

| ID | Tugas | Prioritas | Ketergantungan | Kriteria selesai |
|---|---|---|---|---|
| SEO-00 | Cocokkan commit repo dengan deployment produksi | P0 | Akses GitHub/Vercel | SHA produksi dan repo tercatat |
| SEO-01 | Crawl URL prioritas dan ambil HTML respons | P0 | SEO-00 | Bukti status, redirect, HTML, metadata tersedia |
| SEO-02 | Audit robots, canonical, noindex, sitemap, rewrite | P0 | SEO-01 | Tidak ada konflik kritis yang belum dijelaskan |
| SEO-03 | Jalankan build bersih dan inspeksi output | P0 | Repo sinkron; environment tersedia | Output build cocok dengan routing/deployment |
| SEO-04 | Petakan semua route, metadata, dan sumber konten | P0 | SEO-03 | Matriks URL → title/description/H1/canonical/schema |
| SEO-05 | Tetapkan satu pola/sumber metadata yang konsisten | P1 | SEO-04 | Semua URL prioritas lulus uji metadata |
| SEO-06 | Finalisasi positioning dan metadata beranda | P1 | Persetujuan bisnis; audit SEO-04 | Title/description/H1 selaras dengan penawaran |
| SEO-07 | Susun keyword-to-page map | P1 | Data Search Console dan penawaran bisnis | Tidak ada target utama yang tumpang tindih tanpa alasan |
| SEO-08 | Rancang halaman layanan prioritas | P1 | SEO-07 | Brief halaman, bukti, CTA, dan FAQ siap |
| SEO-09 | Audit artikel dan klaim | P1 | Daftar artikel + Search Console | Artikel prioritas memiliki daftar revisi berbukti |
| SEO-10 | Validasi structured data dan sosial | P2 | HTML stabil | Tidak ada error sintaks atau fakta tidak akurat |
| SEO-11 | Audit Core Web Vitals dan aksesibilitas | P2 | URL produksi | Baseline dan backlog performa tercatat |
| IEO-01 | Konsolidasi fakta entitas Arblok dan produk | P1 | SEO-06 | Satu lembar fakta terverifikasi |
| IEO-02 | Perbaiki jawaban langsung, bukti, dan FAQ halaman layanan | P2 | SEO-08 | Halaman berguna untuk manusia dan mudah dipahami mesin |
| IEO-03 | Buat protokol pemantauan jawaban AI | P2 | IEO-01 | Set prompt, log, dan jadwal evaluasi tersedia |
| SEO-12 | Baseline dan laporan performa bulanan | P1 | Analytics/GSC terverifikasi | Laporan klik, tayangan, konversi, dan isu teknis tersedia |

---

## 6. Rencana 30 hari yang realistis

### Minggu 1 — Verifikasi
- Kunci commit produksi.
- Audit response HTML, routing, robots, canonical, sitemap, dan prerender.
- Buat matriks semua URL penting dan catat bug yang terbukti.
- Ambil baseline Search Console dan Analytics.

### Minggu 2 — Fondasi
- Selesaikan masalah teknis P0.
- Satukan pola metadata dan perbaiki ketidakkonsistenan yang sudah terbukti.
- Finalisasi positioning dan copy beranda.
- Uji build, direct URL, refresh, mobile, dan preview sosial.

### Minggu 3 — Halaman dan konten
- Susun keyword-to-page map.
- Pilih maksimal 1–3 halaman layanan prioritas berdasarkan penawaran dan bukti yang tersedia.
- Audit artikel dengan tayangan atau relevansi bisnis tertinggi.
- Perbaiki internal linking dan CTA.

### Minggu 4 — IEO dan pengukuran
- Validasi schema, sitemap, dan URL prioritas setelah deployment.
- Kirim sitemap jika diperlukan dan pantau indeksasi melalui Search Console.
- Terapkan protokol pengamatan jawaban AI tanpa menjanjikan hasil.
- Buat laporan baseline dan backlog siklus berikutnya.

**Catatan:** 30 hari adalah urutan pengerjaan, bukan janji bahwa ranking atau kutipan AI akan berubah dalam 30 hari. Crawling, indexing, dan perubahan performa memerlukan waktu yang bervariasi.

---

## 7. Definition of Done untuk setiap perubahan SEO

Sebuah tugas belum dianggap selesai hanya karena source code berubah.

- [ ] Perubahan dibuat pada branch terpisah dan diff diperiksa.
- [ ] Tidak ada perubahan bisnis atau desain yang tidak terkait.
- [ ] Build produksi berhasil.
- [ ] URL terkait merespons status HTTP yang benar.
- [ ] Title, description, canonical, robots, H1, dan schema diperiksa pada HTML hasil build.
- [ ] Tidak ada canonical atau `noindex` yang tidak disengaja.
- [ ] Sitemap dan internal links sesuai.
- [ ] Mobile dan CTA utama diuji.
- [ ] Deployment commit SHA tercatat.
- [ ] Setelah deploy, URL Inspection/Search Console dipantau sesuai kebutuhan.

---

## 8. Referensi resmi untuk validasi

Gunakan dokumentasi resmi yang berlaku saat implementasi; jangan mengandalkan klaim SEO dari artikel pihak ketiga saja.

- Google Search Central — SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central — Crawling and indexing: https://developers.google.com/search/docs/crawling-indexing
- Google Search Central — Canonical URLs: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google Search Central — Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Google Search Central — Structured data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Central — Creating helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Schema Markup Validator: https://validator.schema.org/

---

## 9. Keputusan yang perlu disetujui sebelum implementasi

1. Apakah positioning utama yang dipakai adalah **software house/pengembang sistem digital**, atau ada istilah lain yang lebih akurat untuk layanan Arblok saat ini?
2. Produk/layanan mana yang menjadi prioritas bisnis 90 hari ke depan: kasir/UMKM, sistem sekolah, sistem instansi, atau jasa pengembangan khusus?
3. Wilayah pemasaran utama: Tasikmalaya dan sekitarnya, seluruh Indonesia, atau kombinasi?
4. Apakah setiap produk boleh memiliki landing page sendiri jika isi dan penawarannya cukup unik?
5. Konversi utama yang ingin diukur: WhatsApp, formulir konsultasi, demo produk, atau beberapa sekaligus?

**Prinsip akhir:** audit dulu, buktikan masalah, lakukan perubahan sekecil mungkin, uji hasil build dan produksi, baru ukur dampaknya. Jangan menimpa repo terbaru dengan salinan lokal yang tertinggal.


---

## 10. Hasil validasi produksi — 23 Oktober 2026

Pemeriksaan read-only dilakukan pada URL publik `https://arblok-digital.vercel.app` menggunakan fetch Vercel. Temuan berikut berasal dari respons HTTP/HTML yang diamati pada tanggal tersebut; cache dapat memengaruhi snapshot, jadi ulangi setelah deployment.

### Konteks deployment

- Project Vercel: `arblok-digital`, framework Vite, terhubung ke `Arblok-Digital/company-profile`.
- Deployment terbaru yang tercatat saat audit berasal dari branch `docs/seo-ieo-roadmap` dan SHA `9a09fe874a3f36034727f19c1337e9c11200409c`; ini deployment preview (target bukan production), bukan bukti bahwa branch dokumen telah dipromosikan ke produksi.
- Deployment produksi terakhir yang tercatat pada daftar deployment: branch `main`, SHA `096f6a0d11a17a61f829ea92cf521039329cd482`, status `READY`.
- Jangan menganggap deployment preview sebagai production. Semua perubahan aplikasi harus diuji di preview sebelum dipromosikan secara eksplisit.

### Temuan yang sudah terkonfirmasi

| URL / file | Hasil observasi | Dampak / tindak lanjut |
|---|---|---|
| `/` | HTTP 200; title dan canonical beranda hadir; meta robots `index, follow`; HTML awal memuat crawler-content dan loader React | Fondasi beranda tersedia. Selaraskan konten fallback dengan positioning yang dipilih dan pastikan fallback tidak menyebabkan flash visual atau membingungkan pengguna. |
| `/articles` | HTTP 200, tetapi respons HTML awal yang diamati memakai title, description, dan canonical beranda | Masalah SEO nyata: halaman daftar artikel tidak memiliki metadata server-side yang unik di HTML awal. Perlu halaman statis/prerender dengan metadata dan isi yang sesuai atau solusi rendering server yang setara. |
| `/consultant` | HTTP 200, tetapi respons HTML awal yang diamati sama dengan beranda, termasuk canonical beranda | Halaman konsultasi tidak terwakili dengan baik untuk crawler yang membaca HTML awal. Buat metadata/konten awal khusus dan canonical sesuai URL jika halaman ini memang ingin diindeks. |
| URL acak `/this-should-not-exist-seo-audit` | HTTP 200 dan respons HTML awal beranda | Soft-404 terkonfirmasi pada lapisan HTTP. React menampilkan komponen NotFoundPage di sisi klien, tetapi status server tetap 200. Atur routing agar URL yang tidak dikenal menghasilkan status HTTP 404, tanpa merusak SPA routes yang valid. |
| `vercel.json` | Rewrite terakhir `/(.*)` ke `/index.html`; rewrite artikel spesifik `/articles/:slug` ke `/articles/:slug.html` ada sebelumnya | Catch-all menjelaskan mengapa route tidak dikenal memperoleh HTML aplikasi. Perubahan harus mempertahankan route valid, aset, file statis, dan artikel. |
| `/sitemap.xml` | HTTP 200 dan XML valid secara bentuk; response cache HIT. URL beranda dan halaman statis menunjukkan `lastmod` 2026-10-14; artikel banyak bertanggal 2026-08-09 | Sitemap belum mencerminkan waktu perubahan konten terbaru yang teramati pada repo/deployment. Periksa alur build dan cache serta gunakan `lastmod` yang benar-benar berdasarkan perubahan konten, bukan tanggal build semata. |
| `/robots.txt` | HTTP 200; mengizinkan crawler umum dan beberapa crawler AI; menunjuk ke sitemap yang benar | Tidak ditemukan larangan crawling global dalam file ini. Kebijakan crawler tetap keputusan bisnis; izin robots bukan jaminan indexing atau sitasi AI. |
| `/llms.txt` | HTTP 200 dan berisi ringkasan brand, layanan, kontak, serta URL utama | File tersedia, tetapi bukan pengganti metadata HTML, sitemap, atau konten halaman yang dapat dirayapi. |
| Artikel contoh `/articles/cara-memilih-software-house-umkm-tasikmalaya` | HTTP 200; HTML artikel statis memiliki title, canonical, Open Graph, BlogPosting, FAQ dan Breadcrumb schema | Jalur artikel individual tampak lebih siap dibanding route listing/konsultasi. Tetap audit akurasi klaim dan konsistensi schema/isi. |

### Catatan interpretasi

- Pengamatan HTML awal menunjukkan masalah metadata server-side. Karena SPA dapat mengubah DOM setelah JavaScript berjalan, ini bukan bukti bahwa Google tidak pernah dapat memahami halaman; namun HTML awal tetap perlu dibuat benar untuk crawling yang andal, social preview, dan mesin yang tidak menjalankan JavaScript.
- Status HTTP 200 pada URL acak adalah bukti yang lebih kuat dari sekadar metadata dinamis: server perlu mengembalikan 404 untuk route yang tidak ada.
- File `public/prerendered/home.html` yang dibaca dari branch `main` memiliki `noindex, follow`, sedangkan URL beranda publik yang diamati memiliki `index, follow`. Belum ada bukti bahwa snapshot `public/prerendered/home.html` disajikan sebagai URL publik. Jangan mengubah robots snapshot sebelum alur penggunaannya dipastikan.
- `robots.txt` dan `sitemap.xml` menunjukkan header `Last-Modified`/cache yang berbeda-beda. Perlu diperiksa apakah hasil fetch yang diamati dilayani oleh deployment dan cache yang sama; lakukan validasi ulang setelah deploy.
- Belum dijalankan build bersih di lingkungan lokal/container dan belum diuji browser/DOM setelah JavaScript. Kriteria SEO-03 dan pengujian visual tetap terbuka.

### Backlog hasil validasi — urutan eksekusi yang diperbarui

1. **P0 — Perbaiki respons 404 server-side** untuk URL yang tidak dikenal, sambil mempertahankan semua route valid.
2. **P0 — Sediakan HTML awal khusus untuk `/articles`, `/consultant`, dan `/referral`** (metadata unik, canonical yang tepat, H1 dan konten yang cocok) atau pilih arsitektur rendering setara yang terbukti mengirim HTML tepat.
3. **P0 — Uji ulang rewrite Vercel** agar aset/file statis dan `/articles/:slug` tetap bekerja; hindari catch-all yang menutupi 404.
4. **P0 — Sinkronkan sitemap produksi** dengan route valid yang memang ingin diindeks; validasi seluruh URL, status, canonical, dan `lastmod`.
5. **P1 — Audit semua metadata dan schema** pada HTML awal beranda, listing artikel, konsultasi, referral, dan artikel individual.
6. **P1 — Audit konten artikel** untuk klaim angka yang perlu bukti, termasuk penghematan 70%, hosting Rp 0, harga pasar, dan penghargaan/sertifikasi. Hapus atau beri konteks bila tidak dapat dibuktikan.
7. **P1 — Baru setelah masalah di atas selesai**, putuskan perubahan title/description beranda dan pembuatan halaman layanan baru.

**Status pengerjaan:** hasil di atas adalah audit read-only. Belum ada source aplikasi yang diubah, belum ada perubahan pada branch `main`, dan belum ada deployment produksi yang dipromosikan.
