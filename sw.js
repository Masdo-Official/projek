/* ================================================================
   sw.js — TKJ XI-9 | Service Worker (PWA Offline Cache)
   Versi 2.1 · Patch 2026
   - Cache offline.html sebagai fallback navigasi
   - Stale-while-revalidate untuk halaman HTML
   - Retry eksponensial tidak perlu (browser handles retries natively)
   ================================================================ */
'use strict';

/* Lightweight service worker that does NOT cache assets.
   It simply forwards requests to network so pages are always fresh.
   Offline fallback will still try to return ./offline.html if network fails. */

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET') return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      const networkPromise = fetch(request).then(res => {
        if (res && res.status === 200) {
          caches.open(CACHE_NAME).then(c => c.put(request, res.clone()));
        }
        return res;
      }).catch(() => null);
      // Stale-while-revalidate: serve cache immediately, update in background
      return cached ?? await networkPromise ?? await caches.match('./offline.html');
    })());
    return;
  }

  event.respondWith(
    fetch(request).catch(() => fetch('./offline.html'))
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

