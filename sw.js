// 每次實質修改內容後，把這個版號往上加一碼（v1 -> v2 -> v3...），
// 舊版快取會在 activate 階段被自動清掉，強迫大家吃到新內容。
const CACHE_NAME = '5g-nr-quiz-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-152.png',
  './icon-167.png',
  './icon-180.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  // 新版 Service Worker 一裝好就立刻生效，不用等舊分頁全部關閉
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  // 立刻接管所有已開啟的頁面，不用重新整理兩次
  self.clients.claim();
});

// Network-first：每次都先嘗試連網路拿最新版本，
// 拿到了就順便更新快取；連不到網路（離線）才退回用快取。
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
