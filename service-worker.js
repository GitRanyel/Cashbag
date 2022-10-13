var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './login.html',
        './contatos.html',
        './disponibilidade.html',
        './sobre.html',
        './parcerias.html',
        './cashbag_files/main.js.download',
        './cashbag_files/jquery.scrollex.min.js.download',
        './cashbag_files/jquery.scrolly.min.js.download',
        './cashbag_files/browser.min.js.download',
        './cashbag_files/breakpoints.min.js.download',
        './cashbag_files/util.js.download',
        './script.js',
        './assets/logo/29.png',
        './assets/logo/40.png',
        './assets/logo/57.png',
        './assets/logo/58.png',
        './assets/logo/60.png',
        './assets/logo/80.png',
        './assets/logo/87.png',
        './assets/logo/114.png',
        './assets/logo/120.png',
        './assets/logo/180.png',
        './assets/logo/1024.png',
       
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});