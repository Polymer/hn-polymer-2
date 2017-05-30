var functions = require('firebase-functions');
var fetch = require('node-fetch');

exports.hn = functions.https.onRequest((request, response) => {
  let path = request.path.slice(4);
  // TODO(dfreedm): is there some static prop we can use?
  let query = '';
  for (let p in request.query) {
    query = query || '?';
    query += `${p}=${request.query[p]}`;
  }
  let url = `https://node-hnapi.herokuapp.com/${path}${query}`;
  fetch(url).then(resp => {
    resp.json().then(json => {
      response.set('Cache-Control', 'public, max-age=300, s-maxage=300');
      response.send(json);
    });
  });
});