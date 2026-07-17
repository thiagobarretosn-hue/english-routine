/* Service Worker — "English Through My Routine".
   Estratégia por tipo de recurso:
   • App shell (index.html, app.js, styles.css, _indice.js, manifest.json)
     → NETWORK-FIRST: online sempre pega a versão nova; offline cai no cache.
   • Lições (licoes/licao-NN.js), ícones → CACHE-FIRST: imutáveis depois de
     escritos; entram no cache sob demanda e ficam disponíveis offline.
   Publicar lição nova NÃO exige mexer aqui — o network-first do _indice.js
   traz a lista atualizada e a lição é cacheada quando aberta. */
var CACHE = 'eng-routine-v3';
var SHELL = [
  '.', 'index.html', 'styles.css', 'app.js', 'manifest.json', 'licoes/_indice.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL);}).then(function(){return self.skipWaiting();}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){if(k!==CACHE)return caches.delete(k);}));
    }).then(function(){return self.clients.claim();})
  );
});

function isShell(url){
  return url.pathname.endsWith('/') ||
    /\/(index\.html|app\.js|styles\.css|manifest\.json)$/.test(url.pathname) ||
    /\/licoes\/_indice\.js$/.test(url.pathname);
}

self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET')return;
  var url=new URL(e.request.url);
  if(url.origin!==location.origin)return; // deixa recursos externos passarem direto

  var navigation = e.request.mode==='navigate';

  if(navigation || isShell(url)){
    // NETWORK-FIRST
    e.respondWith(
      fetch(e.request).then(function(res){
        if(res&&res.status===200){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy);});}
        return res;
      }).catch(function(){
        return caches.match(e.request).then(function(hit){return hit||caches.match('index.html');});
      })
    );
    return;
  }

  // CACHE-FIRST (lições, ícones, etc.)
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit)return hit;
      return fetch(e.request).then(function(res){
        if(res&&res.status===200){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,copy);});}
        return res;
      });
    })
  );
});
