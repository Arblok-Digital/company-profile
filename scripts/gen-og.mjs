#!/usr/bin/env node
/**
 * gen-og.mjs
 * Generate public/og-image.png (1200x630) sesuai brand Arblok Digital:
 * dark warm graphite + indigo accent + teal accent-2 (dari src/index.css).
 * Run: node scripts/gen-og.mjs
 */
import { createCanvas, loadImage } from "@napi-rs/canvas";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const W = 1200;
const H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext("2d");

// ── Palette (dari src/index.css) ──
const PAPER = "#1c1b26";
const PAPER2 = "#26242f";
const INK = "#eef0f6";
const INK2 = "#9aa3b7";
const ACCENT = "#6a7bff";
const ACCENT2 = "#4ed6bf";
const RULE = "rgba(238,240,246,0.14)";

// ── Background gradient ──
const bg = ctx.createLinearGradient(0, 0, 0, H);
bg.addColorStop(0, "#21202c");
bg.addColorStop(1, "#141320");
ctx.fillStyle = bg;
ctx.fillRect(0, 0, W, H);

// ── Glow top-right (indigo) ──
const glow = ctx.createRadialGradient(W - 140, 40, 0, W - 140, 40, 520);
glow.addColorStop(0, "rgba(106,123,255,0.32)");
glow.addColorStop(1, "rgba(106,123,255,0)");
ctx.fillStyle = glow;
ctx.fillRect(W - 700, -260, 700, 700);

// ── Glow bottom-left (teal) ──
const glow2 = ctx.createRadialGradient(120, H + 40, 0, 120, H + 40, 480);
glow2.addColorStop(0, "rgba(78,214,191,0.22)");
glow2.addColorStop(1, "rgba(78,214,191,0)");
ctx.fillStyle = glow2;
ctx.fillRect(-380, H - 240, 700, 500);

// ── Subtle grid dots ──
ctx.fillStyle = "rgba(238,240,246,0.05)";
for (let y = 24; y < H; y += 48) {
  for (let x = 24; x < W; x += 48) {
    ctx.fillRect(x, y, 1.6, 1.6);
  }
}

// ── Helper legibility bar (bottom vignette) ──
const vg = ctx.createLinearGradient(0, H - 120, 0, H);
vg.addColorStop(0, "rgba(20,19,32,0)");
vg.addColorStop(1, "rgba(20,19,32,0.7)");
ctx.fillStyle = vg;
ctx.fillRect(0, H - 120, W, 120);

const roundRect = (x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

// ── Logo tile ──
async function drawLogo() {
  let img = null;
  try {
    img = await loadImage(join(ROOT, "public", "arblok_logo.webp"));
  } catch {
    try {
      img = await loadImage(join(ROOT, "public", "arblok_logo.jpg"));
    } catch (e) {
      console.warn("Logo tidak ditemukan, skip:", e.message);
    }
  }

  const tx = 72;
  const ty = 64;
  const s = 96;
  roundRect(tx, ty, s, s, 24);
  ctx.fillStyle = PAPER2;
  ctx.fill();
  ctx.lineWidth = 1.4;
  ctx.strokeStyle = RULE;
  ctx.stroke();
  if (img) {
    ctx.save();
    roundRect(tx, ty, s, s, 24);
    ctx.clip();
    ctx.drawImage(img, tx, ty, s, s);
    ctx.restore();
  } else {
    // fallback monogram "AB"
    ctx.fillStyle = ACCENT;
    ctx.font = "700 44px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("AB", tx + s / 2, ty + s / 2 + 4);
  }
}

// ── Wordmark ──
ctx.textBaseline = "alphabetic";
ctx.font = "700 44px 'Segoe UI', sans-serif";
ctx.fillStyle = INK;
ctx.fillText("Arblok", 192, 112);

ctx.font = "600 20px 'Segoe UI', sans-serif";
ctx.fillStyle = ACCENT;
ctx.textBaseline = "top";
ctx.fillText("DIGITAL", 194, 122);

ctx.font = "400 17px 'Segoe UI', sans-serif";
ctx.fillStyle = INK2;
ctx.fillText("Studio Sistem Digital · Tasikmalaya", 194, 148);

// ── Headline ──
ctx.textAlign = "left";
ctx.textBaseline = "alphabetic";
ctx.font = "700 54px 'Segoe UI', sans-serif";
ctx.fillStyle = INK;
ctx.fillText("Sistem digital untuk usaha,", 72, 272);
ctx.fillStyle = ACCENT;
ctx.fillText("sekolah, dan instansi.", 72, 338);

// accent-line gradient
const al = ctx.createLinearGradient(74, 372, 640, 372);
al.addColorStop(0, ACCENT);
al.addColorStop(1, ACCENT2);
ctx.fillStyle = al;
roundRect(74, 372, 260, 6, 3);
ctx.fill();

// ── Subline ──
ctx.font = "400 27px 'Segoe UI', sans-serif";
ctx.fillStyle = INK2;
ctx.fillText("Kasir, toko online, dan pendaftaran online —", 74, 408);
ctx.fillText("dicatat dan terpantau dari HP Anda.", 74, 444);

// ── Bottom bar ──
ctx.font = "400 21px 'Cascadia Mono', 'Consolas', monospace";
ctx.fillStyle = INK2;
ctx.fillText("arblok-digital.vercel.app", 72, H - 46);

const ctaW = 396;
const ctaH = 58;
const ctaX = W - ctaW - 72;
const ctaY = H - 80;
const cg = ctx.createLinearGradient(ctaX, ctaY, ctaX + ctaW, ctaY + ctaH);
cg.addColorStop(0, ACCENT);
cg.addColorStop(1, "#8f9bff");
ctx.fillStyle = cg;
roundRect(ctaX, ctaY, ctaW, ctaH, 12);
ctx.fill();
ctx.fillStyle = "#141320";
ctx.font = "700 22px 'Segoe UI', sans-serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Konsultasi via WhatsApp", ctaX + ctaW / 2, ctaY + ctaH / 2 + 1);

// ── Save ──
const out = join(ROOT, "public", "og-image.png");
writeFileSync(out, canvas.toBuffer("image/png"));
console.log(`✅ og-image.png ${canvas.width}x${canvas.height} → ${out}`);