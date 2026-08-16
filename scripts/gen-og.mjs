#!/usr/bin/env node
/**
 * gen-og.mjs
 * Generate public/og-image.png (1200x630) = tiruan desain hero situs Arblok Digital:
 * kiri = headline + tagline, kanan = kartu "Contoh peta pekerjaan" (mockup alur sistem).
 * Palet dari src/index.css (warm graphite + burnt orange #E2823F + emerald).
 * Run: node scripts/gen-og.mjs         (SKIP kalau og-image.png sudah ada)
 * Run: node scripts/gen-og.mjs --force (paksa overwrite)
 */
import { createCanvas } from "@napi-rs/canvas";
import { writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Guard: og-image.png adalah desain custom (logo Arblok Digital), jangan di-overwrite tanpa sengaja ──
const out = join(ROOT, "public", "og-image.png");
if (existsSync(out) && !process.argv.includes("--force")) {
  console.log(`⚠️  ${out} sudah ada (desain custom dengan logo). Lewati — pakai --force untuk overwrite.`);
  process.exit(0);
}

const W = 1200;
const H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// ── Palette (dari src/index.css) ──
const PAPER = "#1b1712";
const PAPER2 = "#26201a";
const INK = "#f2ece2";
const INK2 = "#a99d8c";
const ACCENT = "#E2823F";
const ACCENT2 = "#4BD9A3";
const AMBER = "#e8c86a";
const RULE = "rgba(242,236,226,0.14)";
const RULE_SOFT = "rgba(242,236,226,0.09)";

const FONT_SANS = "'Segoe UI', sans-serif";
const FONT_MONO = "'Cascadia Mono', 'Consolas', monospace";

// ── Background ──
const bg = ctx.createLinearGradient(0, 0, 0, H);
bg.addColorStop(0, "#241e16");
bg.addColorStop(1, "#14100b");
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

const glow = ctx.createRadialGradient(W - 60, 20, 0, W - 60, 20, 560);
glow.addColorStop(0, "rgba(226,130,63,0.3)");
glow.addColorStop(1, "rgba(226,130,63,0)");
ctx.fillStyle = glow;
ctx.fillRect(W - 700, -300, 760, 760);

const glow2 = ctx.createRadialGradient(150, H + 60, 0, 150, H + 60, 500);
glow2.addColorStop(0, "rgba(75,217,163,0.18)");
glow2.addColorStop(1, "rgba(75,217,163,0)");
ctx.fillStyle = glow2;
ctx.fillRect(-380, H - 260, 700, 520);

ctx.fillStyle = "rgba(242,236,226,0.05)";
for (let y = 22; y < H; y += 48) {
  for (let x = 22; x < W; x += 48) ctx.fillRect(x, y, 1.6, 1.6);
}

ctx.textBaseline = "alphabetic";

function rr(x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapLines(ctx2, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const t = cur ? cur + " " + w : w;
    if (ctx2.measureText(t).width <= maxWidth) {
      cur = t;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

// ── Column left (teks) ──
const LX = 72;
const LW = 470;

// badge chip
ctx.font = `600 15px ${FONT_SANS}`;
const chipText = "Solusi Software & POS Tanpa Komisi – ARBLOK Digital";
const chipW = ctx.measureText(chipText).width + 44;
let chipY = 64;
rr(LX, chipY, chipW, 34, 17);
ctx.fillStyle = "rgba(242,236,226,0.08)";
ctx.fill();
ctx.strokeStyle = RULE;
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = ACCENT2;
ctx.beginPath();
ctx.arc(LX + 22, chipY + 17, 4.5, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = INK;
ctx.textAlign = "left";
ctx.textBaseline = "middle";
ctx.fillText(chipText, LX + 34, chipY + 17);

// headline
ctx.textBaseline = "alphabetic";
ctx.font = `700 40px ${FONT_SANS}`;
const h1Lines = wrapLines(ctx, "Hentikan Potongan Fee Marketplace. Miliki Sistem Toko & Kasir Sendiri yang Otomatis.", 430);
let y = chipY + 34 + 16;
ctx.fillStyle = INK;
for (const [i, line] of h1Lines.entries()) {
  ctx.fillText(line, LX, y + i * 48);
}
const h1End = y + h1Lines.length * 48;

// accent-line
const al = ctx.createLinearGradient(LX, 0, LX + 120, 0);
al.addColorStop(0, ACCENT);
al.addColorStop(1, ACCENT2);
ctx.fillStyle = al;
rr(LX, h1End + 8, 120, 5, 2.5);
ctx.fill();

// sub (tagline)
ctx.font = `400 17px ${FONT_SANS}`;
ctx.fillStyle = INK2;
const subTexts = [
  "Arblok Digital membangun kasir, toko online,",
  "dan operasional bisnis khusus tanpa komisi per",
  "transaksi — kontrol stok & omzet dari HP.",
];
let sy = h1End + 34;
for (const [i, line] of subTexts.entries()) {
  ctx.fillText(line, LX, sy + i * 24);
}
const subEnd = sy + (subTexts.length - 1) * 24;

// chips row (UMKM / Sekolah / Instansi)
const chipsID = ["UMKM: jualan tanpa fee", "Sekolah: administrasi", "Instansi: persetujuan"];
ctx.font = `500 13px ${FONT_SANS}`;
let cx = LX;
const chipY2 = subEnd + 34;
for (const [i, c] of chipsID.entries()) {
  const cw = ctx.measureText(c).width + 34;
  rr(cx, chipY2, cw, 30, 15);
  ctx.fillStyle = "rgba(238,240,246,0.08)";
  ctx.fill();
  ctx.strokeStyle = RULE_SOFT;
  ctx.stroke();
  ctx.fillStyle = ACCENT;
  ctx.beginPath();
  ctx.arc(cx + 16, chipY2 + 15, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = INK;
  ctx.textBaseline = "middle";
  ctx.fillText(c, cx + 26, chipY2 + 15);
  ctx.textBaseline = "alphabetic";
  cx += cw + 10;
}

// CTA
const ctaW = 270;
const ctaH = 44;
const ctaY = chipY2 + 47;
const cg = ctx.createLinearGradient(LX, 0, LX + ctaW, 0);
cg.addColorStop(0, ACCENT);
cg.addColorStop(1, "#c96a2b");
ctx.fillStyle = cg;
rr(LX, ctaY, ctaW, ctaH, 22);
ctx.fill();
ctx.fillStyle = "#181310";
ctx.font = `700 15px ${FONT_SANS}`;
ctx.textBaseline = "middle";
ctx.fillText("Hitung Penghematan Bisnis Anda", LX + ctaW / 2, ctaY + ctaH / 2 + 1);
ctx.textBaseline = "alphabetic";

// ── Kartu mockup (kanan) ──
const CDX = 610;
const CDW = W - 610 - 72;
const CDY = 66;
const CDH = H - 66 - 58;

rr(CDX, CDY, CDW, CDH, 12);
ctx.fillStyle = "rgba(38,32,26,0.85)";
ctx.fill();
ctx.strokeStyle = RULE;
ctx.stroke();

// header bar
rr(CDX, CDY, CDW, 44, 12);
ctx.fillStyle = PAPER2;
ctx.fill();
ctx.beginPath();
ctx.rect(CDX, CDY + 30, CDW, 14);
ctx.fill();
// dots
for (const [i, col] of [RULE_SOFT, RULE_SOFT, ACCENT2].entries()) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.arc(CDX + 26 + i * 16, CDY + 22, 5, 0, Math.PI * 2);
  ctx.fill();
}
ctx.fillStyle = INK2;
ctx.font = `400 12px ${FONT_MONO}`;
ctx.textBaseline = "middle";
ctx.fillText("Contoh peta pekerjaan", CDX + 90, CDY + 22);
ctx.fillStyle = ACCENT;
ctx.font = `600 10.5px ${FONT_MONO}`;
ctx.textAlign = "right";
ctx.fillText("Input → Process → Result", CDX + CDW - 18, CDY + 22);
ctx.textAlign = "left";
ctx.textBaseline = "alphabetic";

// stat tiles
const tiles = [
  { v: "21", l: "Transaksi hari ini" },
  { v: "4", l: "Alur aktif" },
  { v: "0", l: "Data tercecer" },
];
const tileP = 14;
const tileW = (CDW - tileP * 2 - 12) / 3;
const tileH = 62;
const tileY = CDY + 44 + 14;
for (const [i, t] of tiles.entries()) {
  const tx = CDX + tileP + i * (tileW + 6);
  rr(tx, tileY, tileW, tileH, 8);
  ctx.fillStyle = "rgba(38,32,26,0.9)";
  ctx.fill();
  ctx.strokeStyle = RULE_SOFT;
  ctx.stroke();
  ctx.fillStyle = ACCENT;
  ctx.font = `700 24px ${FONT_MONO}`;
  ctx.fillText(t.v, tx + 12, tileY + 26);
  ctx.fillStyle = INK2;
  ctx.font = `400 10.5px ${FONT_SANS}`;
  ctx.fillText(t.l, tx + 12, tileY + 43);
}

// workflow rows
const rows = [
  { id: "01", label: "Pencatatan", out: "Data tersusun", ok: true },
  { id: "02", label: "Pelayanan", out: "Status terlihat", ok: true },
  { id: "03", label: "Persetujuan", out: "Menunggu", ok: false },
];
const rowH = 50;
const rowGap = 10;
let rowY = tileY + tileH + 14;
for (const [i, r] of rows.entries()) {
  const rw = CDW - tileP * 2;
  rr(CDX + tileP, rowY, rw, rowH, 8);
  ctx.fillStyle = "rgba(27,23,18,0.9)";
  ctx.fill();
  ctx.strokeStyle = RULE_SOFT;
  ctx.stroke();
  ctx.fillStyle = ACCENT;
  ctx.font = `600 12px ${FONT_MONO}`;
  ctx.textBaseline = "middle";
  ctx.fillText(r.id, CDX + tileP + 14, rowY + rowH / 2);
  ctx.fillStyle = INK;
  ctx.font = `600 13.5px ${FONT_SANS}`;
  ctx.fillText(r.label, CDX + tileP + 48, rowY + rowH / 2);
  ctx.strokeStyle = RULE_SOFT;
  ctx.beginPath();
  ctx.moveTo(CDX + tileP + 200, rowY + 8);
  ctx.lineTo(CDX + tileP + 200, rowY + rowH - 8);
  ctx.stroke();
  ctx.fillStyle = INK2;
  ctx.font = `400 11.5px ${FONT_SANS}`;
  ctx.fillText(r.out, CDX + tileP + 214, rowY + rowH / 2);
  ctx.fillStyle = r.ok ? ACCENT2 : AMBER;
  ctx.beginPath();
  ctx.arc(CDX + tileP + rw - 20, rowY + rowH / 2, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.textBaseline = "alphabetic";
  rowY += rowH + rowGap;
}

// footer note
const footY = CDY + CDH - 44;
rr(CDX, footY, CDW, 44, 12);
ctx.fillStyle = "rgba(38,32,26,0.9)";
ctx.fill();
ctx.beginPath();
ctx.rect(CDX, footY, CDW, 12);
ctx.fill();
ctx.fillStyle = ACCENT;
ctx.beginPath();
ctx.arc(CDX + 22, footY + 22, 4, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = INK2;
ctx.font = `400 12px ${FONT_SANS}`;
ctx.textBaseline = "middle";
ctx.fillText("Teknologi mengikuti alur kerja — fitur dipilih setelah", CDX + 34, footY + 22);
ctx.textBaseline = "alphabetic";

// ── Footer URL ──
ctx.fillStyle = "rgba(169,157,140,0.7)";
ctx.font = `400 15px ${FONT_MONO}`;
ctx.fillText("arblok-digital.vercel.app", LX, H - 34);

// ── Save ──
writeFileSync(out, canvas.toBuffer("image/png"));
console.log(`✅ og-image.png ${canvas.width}x${canvas.height} → ${out}`);