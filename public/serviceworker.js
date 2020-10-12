let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/AtlanTaskRishabhVerma/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        "/static/js/1.chunk.js",
        "/AtlanTaskRishabhVerma/static/css/2.5a2f7233.chunk.css",
        "/AtlanTaskRishabhVerma/static/css/main.cb9ffb5f.chunk.css",
        "/AtlanTaskRishabhVerma/static/js/2.0885b664.chunk.js",
        "/AtlanTaskRishabhVerma/static/js/main.1e30c515.chunk.js",

        "/AtlanTaskRishabhVerma/static/media/logo.07f09d74.png",
        "/AtlanTaskRishabhVerma/index.html",
        "/AtlanTaskRishabhVerma",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
