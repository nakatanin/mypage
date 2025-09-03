// 空のService Worker（PWA必須要件）
self.addEventListener("install", event => {
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});
