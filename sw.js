const CACHE_NAME = "gymflow-v5";
const ARQUIVOS_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./exercicios.js",
  "./manifest.json",
  "./assets/logo.svg",
];

self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS_CACHE)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(
        chaves.map((chave) => {
          if (chave !== CACHE_NAME) return caches.delete(chave);
        }),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches
      .match(evento.request)
      .then((resposta) => resposta || fetch(evento.request)),
  );
});
