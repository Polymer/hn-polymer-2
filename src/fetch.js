/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
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