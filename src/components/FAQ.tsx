import { useLanguage } from "../LanguageContext";

const WHATSAPP_URL =
  "https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20ingin%20menceritakan%20masalah%20pencatatan%20atau%20alur%20kerja%20di%20organisasi%20saya.";

export default function FAQ() {
  const { language } = useLanguage();

  const questions = language === "id"
    ? [
        {
          question: "Berapa biaya pembuatan website atau aplikasi?",
          answer: "Sangat fleksibel. Kami menawarkan paket Starter/MVP mulai dari harga terjangkau untuk UMKM, hingga sistem enterprise. Tidak ada budget yang terlalu kecil — kami selalu siap diskusi via WhatsApp untuk mencari solusi yang pas.",
        },
        {
          question: "Apa itu zero-cost hosting?",
          answer: "Kami menghubungkan aplikasi langsung ke database cloud dengan keamanan Row Level Security (RLS) — tanpa perlu server backend yang menyala 24/7. Hasilnya biaya hosting bulanan bisa Rp 0 untuk beban kerja UMKM normal.",
        },
        {
          question: "Berapa lama proses pembuatan website?",
          answer: "Tergantung kompleksitas. Landing page atau company profile sederhana 1-3 minggu. Sistem khusus seperti kasir, sekolah, atau kelurahan 1-3 bulan. Timeline jelas diberikan saat konsultasi.",
        },
        {
          question: "Apakah bisa custom fitur setelah aplikasi selesai?",
          answer: "Tentu. Kami menggunakan arsitektur Monorepo (NPM Workspaces) yang membuat modifikasi masa depan cepat dan murah. Cukup import shared business logic — tanpa duplikasi kode.",
        },
        {
          question: "Apakah ada garansi setelah peluncuran?",
          answer: "Ya. Kami menyediakan paket maintenance fleksibel dan bisa melatih tim Anda untuk mengelola sistem secara mandiri. Konsultasikan kebutuhan Anda via WhatsApp untuk detailnya.",
        },
        {
          question: "Apa itu Arblok Digital?",
          answer: "Arblok Digital adalah studio perangkat lunak dari Tasikmalaya. Kami membantu usaha, sekolah, dan instansi membuat sistem untuk pencatatan, pelayanan, serta alur persetujuan.",
        },
        {
          question: "Masalah seperti apa yang dapat dibahas?",
          answer: "Contohnya pencatatan penjualan dan stok yang terpisah, administrasi sekolah yang sulit dipantau, pengajuan dokumen yang lambat, atau pekerjaan berulang yang rawan terlewat.",
        },
        {
          question: "Bagaimana memulai pembicaraan?",
          answer: "Kirim gambaran singkat tentang pekerjaan yang masih merepotkan melalui WhatsApp. Pembicaraan awal digunakan untuk memahami masalah, pengguna, dan prioritasnya.",
        },
      ]
    : [
        {
          question: "How much does it cost to build a website or app?",
          answer: "Very flexible. We offer Starter/MVP packages starting at affordable rates for small businesses, up to enterprise systems. No budget is too small — we are always ready to discuss via WhatsApp.",
        },
        {
          question: "What is zero-cost hosting?",
          answer: "We connect apps directly to a cloud database secured with Row Level Security (RLS) — no dedicated backend server running 24/7. Monthly hosting costs can be Rp 0 for typical small-business workloads.",
        },
        {
          question: "How long does it take to build a website?",
          answer: "Depending on complexity. A landing page or simple company profile takes 1-3 weeks. Custom systems like POS, school, or village administration take 1-3 months. A clear timeline is given during consultation.",
        },
        {
          question: "Can features be customized after launch?",
          answer: "Of course. We use a Monorepo (NPM Workspaces) architecture that makes future changes fast and affordable — import shared business logic, no duplicated code.",
        },
        {
          question: "Is there a guarantee after launch?",
          answer: "Yes. We provide flexible maintenance packages and can train your team to manage the system independently. Discuss your needs via WhatsApp for details.",
        },
        {
          question: "What is Arblok Digital?",
          answer: "Arblok Digital is a software studio from Tasikmalaya. We help businesses, schools, and public organizations build systems for records, services, and approval workflows.",
        },
        {
          question: "What kind of problems can we discuss?",
          answer: "Examples include separate sales and stock records, school administration that is hard to monitor, slow document requests, or repeated work that is easy to miss.",
        },
        {
          question: "How do we start the conversation?",
          answer: "Send a short description of the work that is still causing friction through WhatsApp. The initial conversation is used to understand the problem, users, and priorities.",
        },
      ];

  return (
    <section id="faq" className="border-b border-rule bg-paper-2 py-20 sm:py-28">
      <div className="mx-auto grid w-full gap-12 px-6 sm:px-8 lg:max-w-none lg:grid-cols-12 lg:gap-16 lg:px-14 xl:px-20">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">FAQ</p>
          <h2 className="mt-4 text-balance font-body text-3xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
            {language === "id" ? "Pertanyaan sebelum memulai." : "Questions before you start."}
          </h2>
          <p className="mt-5 font-body text-sm leading-6 text-ink-2">
            {language === "id" ? "Jawaban singkat tentang ruang lingkup dan cara kami bekerja." : "Short answers about scope and how we work."}
          </p>
        </div>

        <div className="card divide-y divide-rule lg:col-span-8">
          {questions.map((item, index) => (
            <details key={item.question} className="group px-7 py-5">
              <summary className="flex cursor-pointer list-none items-start gap-5 font-body font-semibold leading-6 text-ink marker:content-none">
                <span className="mt-0.5 font-mono text-xs font-normal text-accent">0{index + 1}</span>
                <span className="flex-1">{item.question}</span>
                <span className="font-mono text-accent transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="ml-9 max-w-2xl pt-3 font-body text-sm leading-6 text-ink-2">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="card flex flex-col justify-between gap-6 p-7 lg:col-span-12 lg:flex-row lg:items-center lg:p-8">
          <div>
            <h3 className="font-body text-xl font-semibold text-ink">
              {language === "id" ? "Mulai dari masalah yang paling terasa." : "Start with the problem you feel most."}
            </h3>
            <p className="mt-2 max-w-2xl font-body text-sm leading-6 text-ink-2">
              {language === "id" ? "Ceritakan alur yang sedang berjalan. Kami akan membantu memetakan langkah awal yang dapat diuji." : "Describe the workflow you use today. We will help map a first step that can be tested."}
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gradient mt-6 inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg px-5 py-3 font-body text-sm font-semibold lg:mt-0">
            {language === "id" ? "Konsultasi gratis" : "Free consultation"}
          </a>
        </div>
      </div>
    </section>
  );
}