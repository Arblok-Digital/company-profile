import express from "express";
import path from "path";
import { existsSync } from "fs";
import dotenv from "dotenv";
import { buildSystemInstruction } from "./src/lib/arblok-knowledge";
import { checkRateLimit, getClientIp } from "./src/lib/rate-limit";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3005;

app.use(express.json());

// ─── OpenRouter streaming ──────────────────────────────────────
async function streamOpenRouter(messages: any[], systemInstruction: string, res: any) {
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.NVIDIA_API_KEY;
  if (!apiKey) throw new Error("API Key untuk OpenRouter belum dikonfigurasi.");

  const models = [
    "nvidia/nemotron-3-ultra-550b-a55b:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
    "openrouter/free",
    "meta/llama-3.3-70b-instruct:free",
    "meta/llama-3.1-70b-instruct:free",
    "meta/llama-3.1-8b-instruct:free",
    "openrouter/auto"
  ];

  for (const model of models) {
    try {
      console.log(`[OR] Streaming ${model}...`);
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": "https://arblok-digital.vercel.app",
          "X-Title": "Arblok AI Consultant"
        },
        body: JSON.stringify({
          model,
          stream: true,
          messages: [
            { role: "system", content: systemInstruction },
            ...messages.map((m: any) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }))
          ],
          temperature: 0.7,
          max_tokens: 2048
        })
      });

      if (!response.ok) {
        const err = await response.text();
        console.warn(`[OR] ${model} gagal: ${response.status}`);
        continue;
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let tokenCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const payload = trimmed.slice(6);
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const token = json.choices?.[0]?.delta?.content;
            if (token) {
              res.write(`data: ${JSON.stringify({ token })}\n\n`);
              tokenCount++;
            }
          } catch { /* skip malformed */ }
        }
      }
      console.log(`[OR] ${model} selesai (${tokenCount} tokens)`);
      return; // success
    } catch (err: any) {
      console.warn(`[OR] ${model} error: ${err.message}`);
    }
  }
  throw new Error("Semua model OpenRouter gagal.");
}

// ─── NVIDIA NIM streaming ─────────────────────────────────────
async function streamNvidia(messages: any[], systemInstruction: string, res: any) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) throw new Error("NVIDIA_API_KEY belum dikonfigurasi.");

  // Redirect ke OpenRouter kalau key format OpenRouter
  if (apiKey.startsWith("sk-or-") || process.env.OPENROUTER_API_KEY) {
    console.log("[NVIDIA] Deteksi OpenRouter key, redirect...");
    return streamOpenRouter(messages, systemInstruction, res);
  }

  const models = [
    "nvidia/nemotron-3-ultra-550b-a55b",
    "nvidia/nemotron-3-super-120b-a12b",
    "meta/llama-3.3-70b-instruct",
    "nvidia/nemotron-4-340b-instruct",
    "meta/llama-3.1-70b-instruct"
  ];

  for (const model of models) {
    try {
      console.log(`[NVIDIA] Streaming ${model}...`);
      const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
        body: JSON.stringify({
          model,
          stream: true,
          messages: [
            { role: "system", content: systemInstruction },
            ...messages.map((m: any) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }))
          ],
          temperature: 0.7,
          max_tokens: 2048,
          top_p: 1
        })
      });

      if (!response.ok) continue;

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let tokenCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const payload = trimmed.slice(6);
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const token = json.choices?.[0]?.delta?.content;
            if (token) {
              res.write(`data: ${JSON.stringify({ token })}\n\n`);
              tokenCount++;
            }
          } catch { /* skip */ }
        }
      }
      console.log(`[NVIDIA] ${model} selesai (${tokenCount} tokens)`);
      return;
    } catch (err: any) {
      console.warn(`[NVIDIA] ${model} error: ${err.message}`);
    }
  }

  // Fallback ke OpenRouter
  console.log("[NVIDIA] Semua gagal, fallback ke OpenRouter...");
  return streamOpenRouter(messages, systemInstruction, res);
}

// ─── Gemini streaming ─────────────────────────────────────────
async function streamGemini(messages: any[], systemInstruction: string, res: any) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY belum dikonfigurasi.");

  const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-1.5-flash", "gemini-1.5-pro"];

  for (const modelName of models) {
    try {
      console.log(`[Gemini] Streaming ${modelName}...`);

      const contents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }]
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:streamGenerateContent?alt=sse&key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
          })
        }
      );

      if (!response.ok) {
        const err = await response.text();
        console.warn(`[Gemini] ${modelName} gagal: ${response.status} ${err.slice(0, 100)}`);
        continue;
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let tokenCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || !trimmed.startsWith("data: ")) continue;
          const payload = trimmed.slice(6);
          if (payload === "[DONE]") continue;
          try {
            const json = JSON.parse(payload);
            const token = json.candidates?.[0]?.content?.parts?.[0]?.text;
            if (token) {
              res.write(`data: ${JSON.stringify({ token })}\n\n`);
              tokenCount++;
            }
          } catch { /* skip */ }
        }
      }
      console.log(`[Gemini] ${modelName} selesai (${tokenCount} tokens)`);
      return;
    } catch (err: any) {
      console.warn(`[Gemini] ${modelName} error: ${err.message}`);
    }
  }
  throw new Error("Semua model Gemini gagal.");
}

// ─── Route: Streaming Chat ────────────────────────────────────
app.post("/api/chat", async (req, res) => {
  const { messages, provider = "auto" } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Format pesan tidak valid." });
  }

  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() || req.socket.remoteAddress || "local";
  const rl = checkRateLimit(ip);
  if (!rl.allowed) {
    const reasonText = rl.reason === "daily" ? "Kuota chat hari ini sudah penuh." : "Terlalu banyak pesan dalam waktu singkat.";
    return res.status(429).json({
      error:
        reasonText + " Yuk lanjutkan diskusi santai langsung ke WhatsApp kami ya: https://wa.me/6289508053795",
      rateLimited: true,
      retryAfterSec: rl.retryAfterSec,
    });
  }

  const systemInstruction = buildSystemInstruction();

  // SSE headers
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  try {
    if (provider === "nvidia") {
      try {
        await streamNvidia(messages, systemInstruction, res);
      } catch (err: any) {
        console.warn("[NVIDIA] gagal, fallback Gemini:", err.message);
        if (process.env.GEMINI_API_KEY) {
          await streamGemini(messages, systemInstruction, res);
        } else {
          throw err;
        }
      }
    } else if (provider === "gemini") {
      try {
        await streamGemini(messages, systemInstruction, res);
      } catch (err: any) {
        console.warn("[Gemini] gagal, fallback NVIDIA:", err.message);
        if (process.env.NVIDIA_API_KEY) {
          await streamNvidia(messages, systemInstruction, res);
        } else {
          throw err;
        }
      }
    } else {
      // auto: Gemini → NVIDIA → OpenRouter
      try {
        await streamGemini(messages, systemInstruction, res);
      } catch (err: any) {
        console.warn("[Auto] Gemini gagal:", err.message);
        try {
          await streamNvidia(messages, systemInstruction, res);
        } catch (err2: any) {
          console.warn("[Auto] NVIDIA juga gagal:", err2.message);
          await streamOpenRouter(messages, systemInstruction, res);
        }
      }
    }
  } catch (err: any) {
    console.error("[Stream] Semua provider gagal:", err.message);
    res.write(`data: ${JSON.stringify({ error: err.message || "Gagal memproses chat." })}\n\n`);
  }

  res.write("data: [DONE]\n\n");
  res.end();
});

// ─── Static serving ────────────────────────────────────────────
async function setupApp() {
  if (!process.env.VERCEL) {
    if (process.env.NODE_ENV !== "production") {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } else {
      const distPath = path.join(process.cwd(), "dist");
      app.use(express.static(distPath, { extensions: ["html"] }));
      app.get("/articles/:slug", (req, res) => {
        const file = path.join(distPath, "articles", `${req.params.slug}.html`);
        if (existsSync(file)) return res.sendFile(file);
        res.sendFile(path.join(distPath, "index.html"));
      });
      app.get("*", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
      });
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`[Arblok Server] running on http://localhost:${PORT}`);
    });
  }
}

setupApp().catch((err) => {
  console.error("Failed to setup app:", err);
});

export default app;
