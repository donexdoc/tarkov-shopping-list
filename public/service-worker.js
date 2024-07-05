const CACHE_NAME = 'tarkov-shopping-list-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/*',
  '/manifest.json',
  '/favicon.png',
  '/favicon512.png',
  '/favicon192.png',
  '/favicon256.png',
  '/favicon64.png',
];

function shouldCache(url) {
  return urlsToCache.some((cacheUrl) => {
    if (cacheUrl.endsWith('*')) {
      const prefix = cacheUrl.slice(0, -1);
      return url.startsWith(prefix);
    }
    return url === cacheUrl;
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        urlsToCache
          .filter((url) => !url.endsWith('*'))
          .map((url) => {
            return fetch(url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                return cache.put(url, response);
              })
              .then(() => console.log('Successfully cached:', url))
              .catch((err) => console.error('Failed to cache:', url, err));
          })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        if (shouldCache(event.request.url)) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    })
  );
});
