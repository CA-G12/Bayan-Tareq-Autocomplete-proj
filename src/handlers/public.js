const path = require('path');
const fs = require('fs');

const mimeTypes = require('mime-types');

const publicHandler = (res, endpoint) => {
  const filePath = path.join(__dirname, '..','..', endpoint);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>Internal Server Error ! <h1> ')
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': mimeTypes.lookup(endpoint) });
      res.write(data)
      res.end();
    }
  })
}

module.exports = publicHandler;