let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntill(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "static/js/bundle.js",
        // "/static/js/0.chunk.js",
        // "/static/js/main.chunk.js",
        // "/static/js/1.chunk.js",
        "static/css/2.5a2f7233.chunk.css",
        "static/css/main.cb9ffb5f.chunk.css",
        "static/js/2.0885b664.chunk.js",
        "static/js/main.1e30c515.chunk.js",
        "static/js/runtime-main.57c95b75.js",
        "static/media/logo.07f09d74.png",
        "index.html",
        "/",
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
