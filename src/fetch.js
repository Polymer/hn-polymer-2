// Minimal fetch polyfill
// Always avoid using real `fetch` due to
// https://bugs.chromium.org/p/chromium/issues/detail?id=652228
window.fetch = (url => {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.onerror = reject;
    request.onload = () => resolve({
      json: () => Promise.resolve(request.responseText).then(JSON.parse),
    });
    request.open('get', url);
    request.send();
  })
});