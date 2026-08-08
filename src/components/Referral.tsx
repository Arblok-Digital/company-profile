import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { MessageCircle, Copy, Check, Share2, ExternalLink, GraduationCap, Bot } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/6289508053795";
const STORAGE_KEY = "arblok_referrer_name";

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  tier: "saas" | "project";
  perk: string;
  simulation: string;
  link?: string;
}

const ID_PRODUCTS: Product[] = [
  {
    id: "sekolah-rapi",
    name: "SekolahRapi",
    tagline:
      "Pendaftaran siswa dan pembayaran SPP yang tadinya dicatat manual, jadi tercatat otomatis tanpa antre. Tunggakan terdeteksi, laporannya bisa diperiksa dari HP.",
    price: "Rp 149.000 / bulan",
    tier: "saas",
    perk: "Komisi 30% dari nilai deal yang berhasil ditutup, dibayar sekali.",
    simulation: "Simulasi: langganan setahun sekitar Rp 1,5 juta → komisi sekitar Rp 450 ribu (30%).",
    link: "https://sekolah-rapi.vercel.app/",
  },
  {
    id: "sekolah-pro",
    name: "SekolahPro",
    tagline:
      "Satu sistem untuk data siswa, SPP dan infak, gaji guru, dana BOS, sampai komunikasi orang tua. Tetap berjalan meski sinyal internet tidak stabil.",
    price: "Harga dibahas saat konsultasi",
    tier: "saas",
    perk: "Komisi 30% dari nilai deal yang berhasil ditutup, dibayar sekali.",
    simulation: "Simulasi: deal senilai Rp 2 juta → komisi Rp 600 ribu (30%).",
    link: "https://sekolah-pro.vercel.app/",
  },
  {
    id: "jasa-dev",
    name: "Jasa pembuatan website, kasir, dan toko online",
    tagline:
      "Website company profile, aplikasi kasir, sampai toko online sendiri yang tidak terpotong potongan marketplace. Dibangun sesuai kebutuhan, bukan paket jadi.",
    price: "Mulai dari 8 juta, tergantung ruang lingkup",
    tier: "project",
    perk: "Komisi 10% dari nilai kontrak, dibayar sekali setelah deal.",
    simulation: "Simulasi: proyek Rp 8 juta → komisi Rp 800 ribu; proyek Rp 50 juta → komisi Rp 5 juta (10%).",
  },
];

const EN_PRODUCTS: Product[] = [
  {
    id: "sekolah-rapi",
    name: "SekolahRapi",
    tagline:
      "Enrollment and tuition payments that used to be tracked by hand — recorded automatically, no queues, overdue flagged, reports checked from a phone.",
    price: "Rp 149,000 / month",
    tier: "saas",
    perk: "30% commission from the value of the closed deal, paid once.",
    simulation: "Example: a one-year plan worth ~Rp 1.5 million → ~Rp 450 thousand commission (30%).",
    link: "https://sekolah-rapi.vercel.app/",
  },
  {
    id: "sekolah-pro",
    name: "SekolahPro",
    tagline:
      "One system for student data, tuition payments, teacher payroll, BOS funds, schedules, and parent communication. Still works where the signal is weak.",
    price: "Price discussed during consultation",
    tier: "saas",
    perk: "30% commission from the value of the closed deal, paid once.",
    simulation: "Example: a Rp 2 million deal → Rp 600 thousand commission (30%).",
    link: "https://sekolah-pro.vercel.app/",
  },
  {
    id: "jasa-dev",
    name: "Custom website, POS, and online store",
    tagline:
      "Company profile websites, POS applications, or online stores without marketplace cuts. Built around your needs, not a one-size-fits-all package.",
    price: "Starting from 8 million, depending on scope",
    tier: "project",
    perk: "10% commission from the contract value, paid once after a deal.",
    simulation: "Example: an Rp 8 million project → Rp 800 thousand; an Rp 50 million project → Rp 5 million (10%).",
  },
];

const FAQ_ID = [
  {
    q: "Berapa persen komisinya?",
    a: "Dua kelompok. Produk langganan seperti SekolahRapi dan SekolahPro memberi komisi 30% dari nilai deal yang berhasil ditutup. Jasa pembuatan website, kasir, atau toko online memberi komisi 10% dari nilai kontrak. Komisi dibayar sekali setelah deal selesai.",
  },
  {
    q: "Apakah bisa merujuk lebih dari satu produk?",
    a: "Bisa. Setiap produk punya tombol WhatsApp sendiri dengan nama Anda di dalam pesannya. Satu rekomendasi yang jadi cukup — tidak ada batasan jumlah.",
  },
  {
    q: "Berapa lama sampai deal selesai?",
    a: "Tergantung produknya. Produk berlangganan biasanya berpindah cepat; proyek pembuatan menyesuaikan ruang lingkup dan kesepakatan. Upaya Anda hanya sampai rekomendasi disampaikan — proses selanjutnya kami yang menindaklanjuti.",
  },
  {
    q: "Bagaimana komisinya dibayar?",
    a: "Setelah deal ditutup dan fakta tersebukar, komisi dikirim melalui rekening atau e-wallet yang anda sebutkan saat chat. Detail pembayaran dikonfirmasi langsung via WhatsApp.",
  },
];

const FAQ_EN = [
  {
    q: "What is the commission rate?",
    a: "Subscription products like SekolahRapi and SekolahPro pay 30% of the value of a successfully closed deal. Custom projects (website, POS, online store) pay 10% of the contract value. The commission is paid once after the deal closes.",
  },
  {
    q: "Can I refer more than one product?",
    a: "Yes. Each product has its own WhatsApp button, and your name is already included in the message. Every closed referral counts — there is no limit.",
  },
  {
    q: "How long until the deal closes?",
    a: "It depends on the product. Subscription products can move in days or weeks; custom projects depend on scope and agreement. The timeline is confirmed during the WhatsApp conversation.",
  },
  {
    q: "How is the commission paid?",
    a: "Once a deal is closed and confirmed, the commission is paid to the bank account or e-wallet you mention in the chat. Payment details are confirmed on WhatsApp.",
  },
];

export default function Referral() {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || "";
    } catch {
      return "";
    }
  });
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const introName = searchParams.get("n") || "";
  const isReferee = introName.length > 0;
  const products = language === "id" ? ID_PRODUCTS : EN_PRODUCTS;
  const faq = language === "id" ? FAQ_ID : FAQ_EN;

  useEffect(() => {
    document.title = language === "id"
      ? "Program Referral | Dapatkan Komisi 30% & 10% | Arblok Digital"
      : "Referral Program | Earn 30% & 10% Commission | Arblok Digital";
    const desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (desc) {
      desc.content = language === "id"
        ? "Rekomendasikan SekolahRapi, SekolahPro, atau jasa pembuatan website dan aplikasi Arblok Digital. Komisi 30% untuk produk & 10% untuk jasa. Cair satu kali setelah deal."
        : "Refer SekolahRapi, SekolahPro, or Arblok Digital's website and app services. Earn 30% on products and 10% on services, paid once per deal.";
    }
  }, [language]);

  const saveName = () => {
    try {
      localStorage.setItem(STORAGE_KEY, name);
    } catch {
      /* storage tidak tersedia — abaikan */
    }
  };

  const shareLink = () => {
    const base = window.location.origin;
    const n = name.trim().split(/\s+/)[0] || "teman-anda";
    return `${base}/referral?n=${encodeURIComponent(n)}`;
  };

  const waHref = (product: Product) => {
    const cleanName = name.trim();
    const text = isReferee
      ? language === "id"
        ? `Halo Arblok Digital. Saya ${cleanName||"seseorang"}. Saya membuka halaman ini dari rekomendasi ${introName}, dan tertarik dengan produk ${product.name}. Mohon dijelaskan detailnya.`
        : `Hi Arblok Digital. I am ${cleanName || "someone"}. I opened this page from the recommendation of ${introName}, and I am interested in ${product.name}. Please explain.`
      : language === "id"
        ? `Halo Arblok Digital. Saya ${cleanName || "atas nama saya"}. Saya ingin merekomendasikan ${product.name}. Mohon dijelaskan proses referensi dan komisinya.`
        : `Hi Arblok Digital. I am ${cleanName || "my name"}. I want to recommend ${product.name}. Please explain the referral process and the commission.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  const handleCopy = async () => {
    saveName();
    const link = shareLink();
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = link;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* tanpa clipboard — user salin manual */
      }
      document.body.removeChild(ta);
    }
  };

  const steps = language === "id"
    ? [
        { title: "Tulis nama Anda", desc: "Satu kali ketik, terisi di semua tombol WhatsApp halaman ini dan tersimpan di perangkat Anda." },
        { title: "Pilih produk", desc: "SekolahRapi, SekolahPro, atau jasa pembuatan. Tiap tombol mengirim pesan yang sudah menyebut nama Anda dan produknya." },
        { title: "Komisi cair saat deal", desc: "Setelah deal ditutup dan dikonfirmasi, komisi dibayar sekali sesuai tarif. tidak ada biaya, tidak ada kuota." },
      ]
    : [
        { title: "Write your name", desc: "Typed once, filled into every WhatsApp button on this page and saved on your device." },
        { title: "Pick a product", desc: "SekolahRapi, SekolahPro, or a custom build. Each button opens WhatsApp with your name and the product mentioned." },
        { title: "Get paid on close", desc: "Once a deal closes and is confirmed, the commission is paid once. No fees, no quotas." },
      ];

  return (
    <div className="bg-paper">
      {/* Hero / answer-first */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:px-8 sm:pt-36">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {language === "id" ? "Program referensasi" : "Referral program"}
          </p>
          <h1 className="mt-5 max-w-3xl text-balance font-body text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl">
            {language === "id"
              ? "Rekomendasikan produk Arblok Digital dan terima komisi saat deal jadi."
              : "Refer Arblok Digital's products and get a commission when the deal closes."}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-7 text-ink-2">
            {language === "id"
              ? "Kami membayar komisi satu kali untuk setiap rekomendasi yang berhasil: 30% untuk produk berlangganan dan 10% untuk proyek pembangunan. Cocok untuk siapa saja yang melihat sekolah atau usaha yang masih repot dengan pencatatan manual."
              : "We pay a one-time commission for every successful referral: 30% for subscription products and 10% for custom projects. A simple program for anyone who knows a school or business still stuck on manual records."}
          </p>
          {isReferee && (
            <div className="card mt-8 inline-flex max-w-full items-start gap-3 p-4">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="font-body text-sm leading-6 text-ink-2">
                {language === "id"
                  ? `Anda membuka halaman ini dari rekomendasi ${introName}. Sebutkan nama tersebut saat menghubungi kami lewat WhatsApp.`
                  : `You opened this page through the recommendation of ${introName}. Mention that name when you contact us on WhatsApp.`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Form nama */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="card max-w-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2">
              <Share2 className="h-5 w-5 text-accent" aria-hidden="true" />
              <h2 className="font-body text-xl font-semibold text-ink">
                {language === "id" ? "Siapkan nama Anda" : "Set up your name"}
              </h2>
            </div>
            <p className="mt-3 font-body text-sm leading-6 text-ink-2">
              {language === "id"
                ? "Nama masuk otomatis ke semua tombol WhatsApp di halaman ini. Tanpa nomor, tanpa akun."
                : "Your name is automatically included in every WhatsApp button on this page. No phone number or account required."}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={saveName}
                placeholder={language === "id" ? "Contoh: Ibu Eka, Guru SDN 1" : "e.g. Mrs. Eka, teacher at SDN 1"}
                className="min-h-12 flex-1 rounded-lg border border-rule bg-paper-2 px-4 font-body text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="button"
                onClick={() => {
                  saveName();
                  setShowShare(true);
                }}
                className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 font-body text-sm font-semibold"
              >
                <Copy className="h-4 w-4" aria-hidden="true" />
                {language === "id" ? "Salin link undangan" : "Copy invite link"}
              </button>
            </div>
            {showShare && (
              <div className="mt-4 flex items-center gap-3 rounded-md border border-rule bg-paper-2 px-3 py-2.5">
                <code className="min-w-0 flex-1 truncate font-mono text-xs text-ink-2">{shareLink()}</code>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded border border-rule px-3 py-1.5 font-body text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                  {copied ? (language === "id" ? "Tersalin" : "Copied") : (language === "id" ? "Salin" : "Copy")}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Produk + komisi */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {language === "id" ? "Produk dan komisi" : "Products and commissions"}
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-body text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
            {language === "id" ? "Pilih produk, kirim via WhatsApp." : "Pick a product, share via WhatsApp."}
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-6 text-ink-2">
            {language === "id"
              ? "Semua tombol membuka WhatsApp. Harga dan estimasi setiap kerja sama dikonfirmasi langsung oleh kami."
              : "Every button opens WhatsApp. Prices and timelines are confirmed directly with you once a deal starts."}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="card card-hover flex flex-col overflow-hidden">
                <div className="flex items-center justify-between gap-3 px-6 pt-6">
                  <span className={`font-mono text-[10px] uppercase tracking-[0.14em] ${product.tier === "saas" ? "text-accent" : "text-accent-2"}`}>
                    {language === "id"
                      ? product.tier === "saas" ? "Produk berlangganan" : "Proyek sekali bayar"
                      : product.tier === "saas" ? "Subscription product" : "One-time project"}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-2">
                    {product.tier === "saas" ? "komisi 30%" : "komisi 10%"}
                  </span>
                </div>
                <div className="px-6 pb-6 pt-4">
                  <span className="badge-chip mb-3">{product.price}</span>
                  <h3 className="font-body text-xl font-semibold text-ink">{product.name}</h3>
                  <p className="mt-3 font-body text-sm leading-6 text-ink-2">{product.tagline}</p>
                  <p className="mt-4 border-t border-rule pt-4 font-body text-sm font-medium text-accent">
                    {product.perk}
                  </p>
                  <p className="mt-2 font-body text-sm leading-6 text-ink-2">{product.simulation}</p>
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 font-body text-xs text-ink-2 transition-colors hover:text-accent"
                    >
                      {language === "id" ? "Lihat demo" : "View demo"}
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <div className="mt-auto border-t border-rule px-6 py-5">
                  <a
                    href={waHref(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-4 font-body text-sm font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {language === "id"
                      ? isReferee ? "Tanyakan lewat WhatsApp" : "Rekomendasikan lewat WhatsApp"
                      : isReferee ? "Ask on WhatsApp" : "Refer on WhatsApp"}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cara kerja */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {language === "id" ? "Cara kerja" : "How it works"}
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-body text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
            {language === "id" ? "Tiga langkah sederhana." : "Three simple steps."}
          </h2>
          <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <li key={i} className="card p-6">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-body text-lg font-semibold text-ink">{steps[i].title}</h3>
                <p className="mt-2 font-body text-sm leading-6 text-ink-2">{steps[i].desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="referral-faq" className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">FAQ</p>
          <h2 className="mt-4 text-balance font-body text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
            {language === "id" ? "Pertanyaan tentang komisi." : "Questions about the commission."}
          </h2>
          <div className="card mt-8 divide-y divide-rule">
            {faq.map((item) => (
              <details key={item.q} className="group px-7 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-body font-semibold leading-6 text-ink marker:content-none">
                  <span>{item.q}</span>
                  <span className="font-mono text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-2xl pt-3 font-body text-sm leading-6 text-ink-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="card flex flex-col justify-between gap-6 p-7 sm:p-9 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-body text-xl font-semibold text-ink">
                {language === "id" ? "Mulai dari nama, lalu satu pesan." : "Start with your name, then one message."}
              </h2>
              <p className="mt-3 max-w-2xl font-body text-sm leading-6 text-ink-2">
                {language === "id"
                  ? "Masih ragu cara kerjanya? Tanyakan langsung ke konsultan digital Arblok — responsnya gratis dan menjelaskan seluk-beluk program referensi."
                  : "Still unsure how it works? Ask directly the Arblok digital consultant — it answers in seconds and explains the referral program."}
              </p>
            </div>
            <Link
              to="/consultant"
              className="btn-gradient inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg px-6 font-body text-sm font-semibold"
            >
              <Bot className="h-4 w-4" aria-hidden="true" />
              {language === "id" ? "Tanya chatbot Arblok" : "Ask Arblok's chatbot"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}