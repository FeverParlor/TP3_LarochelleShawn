const CACHE_NAME = "bpw-cache-v5";

const APP_SHELL = [
  "./index.html",
  "./P2-roster.html",
  "./P3-events.html",
  "./P4-championship.html",
  "./P5-academy.html",
  "./css/style.css",
  "./js/main.js",
  "./js/academy-validation.js",
  "./manifest.json",
  "./assets/icons/icon-144.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/images/bpw-screenshot.png",
  "./assets/images/Dojo/Academy.jpg",
  "./assets/images/Dojo/academy-cta.jpeg",
  "./assets/images/events/Fracture-Event.png",
  "./assets/images/events/Intro.jpg",
  "./assets/images/news/news-1.jpg",
  "./assets/images/news/news-2.jpg",
  "./assets/images/news/news-3.jpg",
  "./assets/images/wrestlers/Axel_Wave-Matchup.png",
  "./assets/images/wrestlers/Axel_Wave_2-Matchup.png",
  "./assets/images/wrestlers/Beast_King-Matchup.png",
  "./assets/images/wrestlers/Dessler-Matchup.png",
  "./assets/images/wrestlers/Georges_Kabrit-Matchup.png",
  "./assets/images/wrestlers/Grixix-Matchup.png",
  "./assets/images/wrestlers/Jason_Grey-Matchup.png",
  "./assets/images/wrestlers/John_Riviere-Matchup.png",
  "./assets/images/wrestlers/KC_Austin-Matchup.png",
  "./assets/images/wrestlers/Karl_Jepson-Matchup.png",
  "./assets/images/wrestlers/Kevin_Gray-Matchup.png",
  "./assets/images/wrestlers/Lil_Pep-Matchup.png",
  "./assets/images/wrestlers/Mickey_Thunder-Matchup.png",
  "./assets/images/wrestlers/Morino-Matchup.png",
  "./assets/images/wrestlers/Nick_Melvick-Matchup.png",
  "./assets/images/wrestlers/Rayen_Gurzil-Matchup.png",
  "./assets/images/wrestlers/Shawn-Dessler-Champion.jpg",
  "./assets/images/wrestlers/Stryker-Matchup.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL);
    }),
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            (networkResponse.status === 200 ||
              networkResponse.type === "opaque")
          ) {
            const responseClone = networkResponse.clone();

            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }

          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    }),
  );
});
