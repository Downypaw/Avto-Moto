const CACHE_PREFIX = 'avto-moto-cache';
const CACHE_VER = 'v14';
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VER}`;

const HTTP_STATUS_OK = 200;
const RESPONSE_SAFE_TYPE = 'basic';

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/fonts/open-sans-bold.woff2',
          '/fonts/open-sans-semibold.woff2',
          '/fonts/open-sans.woff2',
          '/img/arrow-icon.svg',
          '/img/desktop-slide-1.jpg',
          '/img/desktop-slide-2.jpg',
          '/img/desktop-slide-3.jpg',
          '/img/logo.svg',
          '/img/slide-1-preview.jpg',
          '/img/slide-2-preview.jpg',
          '/img/slide-3-preview.jpg',
          '/img/star-icon-active.svg',
          '/img/star-icon.svg',
        ]);
      }),
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys()
      .then(
        (keys) => Promise.all(
          keys.map(
            (key) => {
              if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
                return caches.delete(key);
              }

              return null;
            })
            .filter((key) => key !== null),
        ),
      ),
  );
});
