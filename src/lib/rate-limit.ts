const MAX_PER_WINDOW = 10;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_DAILY_GLOBAL = 200;

const ipHits = new Map<string, number[]>();
let globalDay = "";
let globalCount = 0;

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function prune(key: string): void {
  const now = Date.now();
  const list = (ipHits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  if (list.length === 0) {
    ipHits.delete(key);
  } else {
    ipHits.set(key, list);
  }
}

export interface RateLimitResult {
  allowed: boolean;
  reason?: "per-ip" | "daily";
  retryAfterSec?: number;
}

export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  const day = todayKey();
  if (day !== globalDay) {
    globalDay = day;
    globalCount = 0;
  }
  if (globalCount >= MAX_DAILY_GLOBAL) {
    return { allowed: false, reason: "daily" };
  }

  prune(ip);
  const list = ipHits.get(ip) || [];
  if (list.length >= MAX_PER_WINDOW) {
    const oldest = list[0];
    const retryAfterSec = Math.ceil((oldest + WINDOW_MS - now) / 1000);
    return { allowed: false, reason: "per-ip", retryAfterSec };
  }

  list.push(now);
  ipHits.set(ip, list);
  globalCount += 1;
  return { allowed: true };
}

export function getClientIp(req: { headers: Record<string, any>; socket?: { remoteAddress?: string } }): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers["x-real-ip"];
  if (typeof realIp === "string" && realIp.length > 0) {
    return realIp;
  }
  return req.socket?.remoteAddress || "unknown";
}
