import React from "react";
import { useLanguage } from "../LanguageContext";
import { ArrowRight, AlertTriangle, Building2, ShoppingBag, Receipt, AlertCircle, Wallet } from "lucide-react";

type IllustrationProps = {
  className?: string;
};

/* ────────────────────────────────────────────────
   UMKM Problem Illustration Component
   100% Responsive, Tailwind-styled, Pixel-Perfect Layout.
   Teks label = dekorasi diagram → aria-hidden (tidak
   dibaca AI crawler), bilingual inline sesuai konvensi.
   ──────────────────────────────────────────────── */
export function UmkmProblemIllustration({ className }: IllustrationProps) {
  const { language } = useLanguage();
  const t = language === "id"
    ? {
        header: "DIAGRAM KENDALA · OPERASIONAL UMKM",
        live: "Alur Transaksi Marketplace",
        step1: "01 · Input",
        step1Badge: "Marketplace",
        step1Title: "Transaksi Pelanggan",
        step1Amount: "Rp 100.000",
        step1Row1: "Pencatatan",
        step1Row1Val: "App Luar",
        step1Row2: "Kasir Toko",
        step1Row2Val: "Manual",
        step2: "02 · Potongan",
        step2Badge: "-15% Fee",
        step2Row1: "Komisi Platform",
        step2Row1Val: "-10%",
        step2Row2: "Iklan & Admin",
        step2Row2Val: "-5%",
        step2Highlight: "TOTAL POTONGAN 15%",
        step2Sub: "Margin Keuntungan Tergerus",
        step3: "03 · Hasil",
        step3Badge: "Beban Toko",
        step3Title: "Net Masuk Kas",
        step3Amount: "Rp 85.000",
        step3Warn: "Stok Tidak Realtime",
        step3Row: "Pantauan HP",
        step3RowVal: "Tidak Bisa",
      }
    : {
        header: "FRICTION DIAGRAM · SME OPERATIONS",
        live: "Marketplace transaction flow",
        step1: "01 · Input",
        step1Badge: "Marketplace",
        step1Title: "Customer Transaction",
        step1Amount: "IDR 100,000",
        step1Row1: "Recording",
        step1Row1Val: "Third-party App",
        step1Row2: "Store Cashier",
        step1Row2Val: "Manual",
        step2: "02 · Deductions",
        step2Badge: "-15% Fee",
        step2Row1: "Platform Commission",
        step2Row1Val: "-10%",
        step2Row2: "Ads & Admin",
        step2Row2Val: "-5%",
        step2Highlight: "TOTAL DEDUCTION 15%",
        step2Sub: "Profit Margin Eroded",
        step3: "03 · Result",
        step3Badge: "Store Burden",
        step3Title: "Net Cash In",
        step3Amount: "IDR 85,000",
        step3Warn: "Stock Not in Real Time",
        step3Row: "Phone Monitoring",
        step3RowVal: "Unavailable",
      };

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden rounded-xl border border-rule bg-paper-2 shadow-card ${className ?? ""}`}
    >
      {/* Terminal / UI Header */}
      <div className="flex items-center justify-between border-b border-rule bg-paper px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/80" />
          <span className="ml-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
            {t.header}
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium text-amber">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
          {t.live}
        </span>
      </div>

      {/* 3-Column Flow Container */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:p-5 md:grid-cols-11 md:items-center">
        {/* STEP 1: Marketplace Order (Col 1-3) */}
        <div className="group relative flex flex-col justify-between rounded-lg border border-rule bg-paper p-3.5 transition-all duration-300 hover:border-amber/40 md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-rule/60 pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
                {t.step1}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-amber/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-amber">
                {t.step1Badge}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-amber/15 text-amber">
                  <ShoppingBag className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-ink">{t.step1Title}</p>
                  <p className="font-mono text-[11px] font-bold text-ink">{t.step1Amount}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-rule/40 pt-2.5">
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step1Row1}</span>
              <span className="font-mono font-medium text-amber">{t.step1Row1Val}</span>
            </div>
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step1Row2}</span>
              <span className="font-mono font-medium text-ink-2">{t.step1Row2Val}</span>
            </div>
          </div>
        </div>

        {/* Flow Arrow 1 -> 2 (Col 4) */}
        <div className="hidden justify-center md:col-span-1 md:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-coral/30 bg-coral/10 text-coral">
            <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </div>

        {/* STEP 2: Deductions / Friction Core (Col 5-7) */}
        <div className="relative flex flex-col justify-between rounded-lg border border-coral/40 bg-coral/5 p-3.5 shadow-sm md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-coral/20 pb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral">
                {t.step2}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-coral/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-coral">
                {t.step2Badge}
              </span>
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between rounded bg-paper/80 px-2 py-1 text-[10px]">
                <span className="text-ink-2">{t.step2Row1}</span>
                <span className="font-mono font-bold text-coral">{t.step2Row1Val}</span>
              </div>
              <div className="flex items-center justify-between rounded bg-paper/80 px-2 py-1 text-[10px]">
                <span className="text-ink-2">{t.step2Row2}</span>
                <span className="font-mono font-bold text-coral">{t.step2Row2Val}</span>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded border border-coral/30 bg-coral/15 px-2.5 py-2 text-center">
            <p className="font-mono text-[11px] font-extrabold uppercase text-coral">
              {t.step2Highlight}
            </p>
            <p className="mt-0.5 text-[9px] text-ink-2">{t.step2Sub}</p>
          </div>
        </div>

        {/* Flow Arrow 2 -> 3 (Col 8) */}
        <div className="hidden justify-center md:col-span-1 md:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-coral/30 bg-coral/10 text-coral">
            <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </div>

        {/* STEP 3: Unmonitored Result (Col 9-11) */}
        <div className="relative flex flex-col justify-between rounded-lg border border-rule bg-paper p-3.5 md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-rule/60 pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
                {t.step3}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-coral/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-coral">
                {t.step3Badge}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-coral/15 text-coral">
                  <Wallet className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-ink">{t.step3Title}</p>
                  <p className="font-mono text-[11px] font-bold text-amber">{t.step3Amount}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-rule/40 pt-2.5">
            <div className="flex items-center gap-1.5 rounded bg-coral/10 px-2 py-1 text-[10px] font-medium text-coral">
              <AlertTriangle className="h-3 w-3 shrink-0" />
              <span>{t.step3Warn}</span>
            </div>
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step3Row}</span>
              <span className="font-mono font-medium text-coral">{t.step3RowVal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   Sekolah Problem Illustration Component
   100% Responsive, Tailwind-styled, Pixel-Perfect Layout.
   Teks label = dekorasi diagram → aria-hidden (tidak
   dibaca AI crawler), bilingual inline sesuai konvensi.
   ──────────────────────────────────────────────── */
export function SekolahProblemIllustration({ className }: IllustrationProps) {
  const { language } = useLanguage();
  const t = language === "id"
    ? {
        header: "DIAGRAM KENDALA · ADMINISTRASI SEKOLAH",
        live: "Alur Pendaftaran & SPP Manual",
        step1: "01 · Input",
        step1Badge: "Offline",
        step1Title: "PPDB & SPP Fisik",
        step1Sub: "Antrean Panjang Loket",
        step1Row1: "Formulir",
        step1Row1Val: "Kertas Fisik",
        step1Row2: "Kehadiran",
        step1Row2Val: "Wajib Datang",
        step2: "02 · Rekap",
        step2Badge: "Manual",
        step2Row1: "Berkas PPDB",
        step2Row1Val: "Fisik",
        step2Row2: "Pembukuan SPP",
        step2Row2Val: "Buku Kas",
        step2Highlight: "RISIKO DATA HILANG",
        step2Sub: "Tanpa Backup Digital",
        step3: "03 · Hasil",
        step3Badge: "Gelap",
        step3Title: "Cashflow Sekolah",
        step3Status: "TIDAK REALTIME",
        step3Warn: "Rekap Pembayaran Lambat",
        step3Row: "Pantauan Web",
        step3RowVal: "Tidak Bisa",
      }
    : {
        header: "FRICTION DIAGRAM · SCHOOL ADMIN",
        live: "Manual enrollment & SPP flow",
        step1: "01 · Input",
        step1Badge: "Offline",
        step1Title: "Physical PPDB & SPP",
        step1Sub: "Long lines at the counter",
        step1Row1: "Forms",
        step1Row1Val: "Paper-based",
        step1Row2: "Attendance",
        step1Row2Val: "In Person",
        step2: "02 · Records",
        step2Badge: "Manual",
        step2Row1: "PPDB Documents",
        step2Row1Val: "Physical",
        step2Row2: "SPP Ledger",
        step2Row2Val: "Cash Book",
        step2Highlight: "DATA LOSS RISK",
        step2Sub: "No Digital Backup",
        step3: "03 · Result",
        step3Badge: "Blind",
        step3Title: "School Cash Flow",
        step3Status: "NOT REAL TIME",
        step3Warn: "Slow Payment Records",
        step3Row: "Web Monitoring",
        step3RowVal: "Unavailable",
      };

  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden rounded-xl border border-rule bg-paper-2 shadow-card ${className ?? ""}`}
    >
      {/* Terminal / UI Header */}
      <div className="flex items-center justify-between border-b border-rule bg-paper px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/80" />
          <span className="ml-2 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
            {t.header}
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium text-amber">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber" />
          {t.live}
        </span>
      </div>

      {/* 3-Column Flow Container */}
      <div className="grid grid-cols-1 gap-3 p-4 sm:p-5 md:grid-cols-11 md:items-center">
        {/* STEP 1: Offline Queue (Col 1-3) */}
        <div className="group relative flex flex-col justify-between rounded-lg border border-rule bg-paper p-3.5 md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-rule/60 pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
                {t.step1}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-amber/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-amber">
                {t.step1Badge}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-accent-2/15 text-accent-2">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-ink">{t.step1Title}</p>
                  <p className="font-mono text-[10px] text-ink-2">{t.step1Sub}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-rule/40 pt-2.5">
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step1Row1}</span>
              <span className="font-mono font-medium text-amber">{t.step1Row1Val}</span>
            </div>
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step1Row2}</span>
              <span className="font-mono font-medium text-coral">{t.step1Row2Val}</span>
            </div>
          </div>
        </div>

        {/* Flow Arrow 1 -> 2 (Col 4) */}
        <div className="hidden justify-center md:col-span-1 md:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-coral/30 bg-coral/10 text-coral">
            <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </div>

        {/* STEP 2: Paper Records / Risk (Col 5-7) */}
        <div className="relative flex flex-col justify-between rounded-lg border border-coral/40 bg-coral/5 p-3.5 shadow-sm md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-coral/20 pb-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-coral">
                {t.step2}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-coral/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-coral">
                {t.step2Badge}
              </span>
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between rounded bg-paper/80 px-2 py-1 text-[10px]">
                <span className="text-ink-2">{t.step2Row1}</span>
                <span className="font-mono font-bold text-coral">{t.step2Row1Val}</span>
              </div>
              <div className="flex items-center justify-between rounded bg-paper/80 px-2 py-1 text-[10px]">
                <span className="text-ink-2">{t.step2Row2}</span>
                <span className="font-mono font-bold text-amber">{t.step2Row2Val}</span>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded border border-coral/30 bg-coral/15 px-2.5 py-2 text-center">
            <p className="font-mono text-[11px] font-extrabold uppercase text-coral">
              {t.step2Highlight}
            </p>
            <p className="mt-0.5 text-[9px] text-ink-2">{t.step2Sub}</p>
          </div>
        </div>

        {/* Flow Arrow 2 -> 3 (Col 8) */}
        <div className="hidden justify-center md:col-span-1 md:flex">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-coral/30 bg-coral/10 text-coral">
            <ArrowRight className="h-3.5 w-3.5 animate-pulse" />
          </div>
        </div>

        {/* STEP 3: Unmonitored Cashflow (Col 9-11) */}
        <div className="relative flex flex-col justify-between rounded-lg border border-rule bg-paper p-3.5 md:col-span-3">
          <div>
            <div className="flex items-center justify-between border-b border-rule/60 pb-2">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-2">
                {t.step3}
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-coral/10 px-1.5 py-0.5 font-mono text-[9px] font-medium text-coral">
                {t.step3Badge}
              </span>
            </div>

            <div className="mt-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-coral/15 text-coral">
                  <Receipt className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-ink">{t.step3Title}</p>
                  <p className="font-mono text-[11px] font-bold text-coral">{t.step3Status}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 border-t border-rule/40 pt-2.5">
            <div className="flex items-center gap-1.5 rounded bg-coral/10 px-2 py-1 text-[10px] font-medium text-coral">
              <AlertCircle className="h-3 w-3 shrink-0" />
              <span>{t.step3Warn}</span>
            </div>
            <div className="flex items-center justify-between rounded bg-paper-2 px-2 py-1 text-[10px] text-ink-2">
              <span>{t.step3Row}</span>
              <span className="font-mono font-medium text-coral">{t.step3RowVal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
