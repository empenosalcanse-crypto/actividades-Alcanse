// Service worker mínimo: permite instalar la app. No guarda copias de la página,
// así que siempre se ve la versión más reciente y los datos en vivo.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:sans-serif;padding:24px;color:#545556"><h2 style="color:#009acb">Sin conexión</h2><p>Revisa tu internet y vuelve a abrir Actividades Alcanse.</p></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
