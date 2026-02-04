const CACHE_NAME = "offline-cache-v2";
const OFFLINE_URL = "/offline.html";
const ASSETS = ["/", "/index.html", "/offline.html", "/static/js/bundle.js"];

// Install: cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Fetch: Cache strategies
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Offline fallback for navigation
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // API requests: Stale-While-Revalidate
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        const networkResponsePromise = fetch(event.request)
          .then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          })
          .catch(() => null);

        // Return cached response immediately if available, else wait for network
        return cachedResponse || networkResponsePromise;
      })
    );
    return;
  }

  // Default: Cache first for other static assets
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
