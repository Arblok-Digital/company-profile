#!/usr/bin/env node
/**
 * gen-og-articles.mjs
 * Generate public/og/article-<slug>.png (1200x630) untuk setiap artikel.
 * Desain konsisten dengan gen-og.mjs (palet dark graphite + indigo + teal).
 * Run: tsx scripts/gen-og-articles.mjs
 */
import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { ARTICLES_DATA } from "../src/data/articles.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "og");

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

// ── Font fallback agar jalan juga di Linux (Vercel build) ──
try {
  GlobalFonts.registerFromPath("C:/Windows/Fonts/segoeui.ttf", "Segoe UI");
  GlobalFonts.registerFromPath("C:/Windows/Fonts/segoeuib.ttf", "Segoe UI Bold");
} catch {
  // pakai sistem font default
}

const W = 1200;
const H = 630;
const PALETTE = {
  PAPER: "#1c1b26",
  PAPER2: "#26242f",
  INK: "#eef0f6",
  INK2: "#9aa3b7",
  ACCENT: "#6a7bff",
  ACCENT2: "#4ed6bf",
  RULE: "rgba(238,240,246,0.14)",
  RULE_SOFT: "rgba(238,240,246,0.09)",
};
const FONT_SANS = "'Segoe UI', 'DejaVu Sans', sans-serif";
const FONT_MONO = "'Cascadia Mono', 'Consolas', 'DejaVu Sans Mono', monospace";

function wrapLines(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    const t = cur ? cur + " " + w : w;
    if (ctx.measureText(t).width <= maxWidth) {
      cur = t;
    } else {
      if (cur) lines.push(cur);
      cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

for (const article of ARTICLES_DATA) {
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext("2d");

  // ── Background ──
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#21202c");
  bg.addColorStop(1, "#14131f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W - 60, 20, 0, W - 60, 20, 560);
  glow.addColorStop(0, "rgba(106,123,255,0.3)");
  glow.addColorStop(1, "rgba(106,123,255,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(W - 700, -300, 760, 760);

  const glow2 = ctx.createRadialGradient(150, H + 60, 0, 150, H + 60, 500);
  glow2.addColorStop(0, "rgba(78,214,190,0.18)");
  glow2.addColorStop(1, "rgba(78,214,190,0)");
  ctx.fillStyle = glow2;
  ctx.fillRect(-380, H - 260, 700, 520);

  ctx.fillStyle = "rgba(238,240,246,0.05)";
  for (let y = 22; y < H; y += 48) {
    for (let x = 22; x < W; x += 48) ctx.fillRect(x, y, 1.6, 1.6);
  }

  ctx.textBaseline = "alphabetic";
  const LX = 72;
  const LW = 1056;

  // ── Brand chip ──
  ctx.font = `600 15px ${FONT_SANS}`;
  const brand = "ARBLOK DIGITAL  ·  ARTIKEL";
  const brandW = ctx.measureText(brand).width + 44;
  const chipY = 56;
  rr(ctx, LX, chipY, brandW, 34, 17);
  ctx.fillStyle = "rgba(238,240,246,0.08)";
  ctx.fill();
  ctx.strokeStyle = PALETTE.RULE;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = PALETTE.ACCENT2;
  ctx.beginPath();
  ctx.arc(LX + 22, chipY + 17, 4.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = PALETTE.INK;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(brand, LX + 34, chipY + 17);

  // ── Category chip ──
  ctx.font = `600 13px ${FONT_SANS}`;
  const catW = ctx.measureText(article.category).width + 34;
  const catX = LX + brandW + 12;
  rr(ctx, catX, chipY, catW, 34, 17);
  ctx.fillStyle = "rgba(106,123,255,0.14)";
  ctx.fill();
  ctx.strokeStyle = PALETTE.RULE_SOFT;
  ctx.stroke();
  ctx.fillStyle = PALETTE.ACCENT;
  ctx.textBaseline = "middle";
  ctx.fillText(article.category, catX + 17, chipY + 17);

  // ── Headline (wrap) ──
  const titleLines = wrapLines(ctx, article.title, LW);
  ctx.textBaseline = "alphabetic";
  const maxTitleLines = 6;
  const shown = titleLines.slice(0, maxTitleLines);
  ctx.font = `700 40px ${FONT_SANS}`;
  let ty = chipY + 34 + 22;
  ctx.fillStyle = PALETTE.INK;
  for (const [i, line] of shown.entries()) {
    ctx.fillText(line, LX, ty + i * 52);
  }
  const titleEnd = ty + shown.length * 52;

  // ── Accent line ──
  const al = ctx.createLinearGradient(LX, 0, LX + 120, 0);
  al.addColorStop(0, PALETTE.ACCENT);
  al.addColorStop(1, PALETTE.ACCENT2);
  ctx.fillStyle = al;
  rr(ctx, LX, titleEnd + 4, 120, 5, 2.5);
  ctx.fill();

  // ── Sub (excerpt, max 2 baris) ──
  ctx.font = `400 17px ${FONT_SANS}`;
  ctx.fillStyle = PALETTE.INK2;
  const subLines = wrapLines(ctx, article.excerpt || "", 640).slice(0, 2);
  const sy = titleEnd + 30;
  for (const [i, line] of subLines.entries()) {
    ctx.fillText(line, LX, sy + i * 26);
  }

  // ── Meta footer ──
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "rgba(154,163,183,0.7)";
  ctx.font = `400 15px ${FONT_MONO}`;
  ctx.fillText("arblok-digital.vercel.app", LX, H - 34);
  ctx.textAlign = "right";
  ctx.fillText(article.readTime || "", W - 72, H - 34);
  ctx.textAlign = "left";

  // ── Save ──
  const out = join(OUT_DIR, `article-${article.slug}.png`);
  writeFileSync(out, canvas.toBuffer("image/png"));
  console.log(`✅ ${out} (${canvas.width}x${canvas.height})`);
}

console.log(`✅ ${ARTICLES_DATA.length} unique article OG images → ${OUT_DIR}`);