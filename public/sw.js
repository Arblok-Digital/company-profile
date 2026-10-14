const CACHE = "arblok-v3";
const APP_SHELL = ["/"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("arblok-") && key !== CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Only handle navigations and real static assets. Do not cache API/data requests.
  const isNavigation = request.mode === "navigate";
  const isStaticAsset = ["script", "style", "image", "font"].includes(request.destination);
  if (!isNavigation && !isStaticAsset) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);

      if (response.ok && response.type === "basic") {
        const contentType = response.headers.get("content-type") || "";
        const validAssetType =
          (request.destination !== "script" || /javascript|ecmascript/i.test(contentType)) &&
          (request.destination !== "style" || /text\/css/i.test(contentType));

        if (validAssetType) {
          const cache = await caches.open(CACHE);
          await cache.put(request, response.clone());
        }
      }

      return response;
    } catch {
      const cached = await caches.match(request);
      if (cached) return cached;

      // Only document navigations may fall back to the cached HTML shell.
      if (isNavigation) {
        const shell = await caches.match("/");
        if (shell) return shell;
      }

      // Never answer a failed JS/CSS request with HTML; that can look like a syntax error.
      return new Response("Asset temporarily unavailable. Please reload.", {
        status: 503,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }
  })());
});
