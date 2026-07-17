/* Service Worker — offline para o app "English Through My Routine".
   Estratégia: cache-first para os recursos do app; ao publicar uma versão
   nova, suba o CACHE (v2, v3...) para forçar atualização nos aparelhos. */
var CACHE = 'eng-routine-v1';
var ASSETS = [
  '.',
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'licoes/_indice.js',
  'licoes/licao-01.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){if(k!==CACHE)return caches.delete(k);}));
    }).then(function(){return self.clients.claim();})
  );
});

self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit)return hit;
      return fetch(e.request).then(function(res){
        if(res&&res.status===200&&res.type==='basic'){
          var copy=res.clone(); caches.open(CACHE).then(function(c){c.put(e.request,copy);});
        }
        return res;
      }).catch(function(){return caches.match('index.html');});
    })
  );
});
