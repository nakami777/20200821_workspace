const http = require('http');
const fs = require('fs');

function getType(_url) {
  let types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'svg+xml',
  };
  for (let key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return 'text/plain';
}

let server = http.createServer(function (req, res) {
  let url =
    'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, {'Content-Type': getType(url)});
        res.end(data);
      } else {
        res.statusCode = 500;
        res.end();
      }
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

let port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log(
    'To view your app, open this link in your browser: http://localhost:' + port
  );
});
