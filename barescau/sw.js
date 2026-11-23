// Service worker mínimo: no guarda nada en caché (así siempre se ve la última versión de la web).
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  e.respondWith(fetch(e.request).catch(function(){
    return new Response("Sin conexión / Offline",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}});
  }));
});
