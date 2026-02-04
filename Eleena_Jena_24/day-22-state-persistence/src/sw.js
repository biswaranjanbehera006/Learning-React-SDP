const CACHE = "vite-offline-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(["/", "/index.html", "/src/offline.html"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() =>
      caches.match(e.request).then(
        (res) => res || caches.match("/src/offline.html")
      )
    )
  );
});
