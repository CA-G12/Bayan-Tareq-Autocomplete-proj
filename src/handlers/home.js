const path = require('path');
const fs = require('fs');

const homeHandler = (res) => {
  const filePath = path.join(__dirname, '../../index.html');
  fs.readFile(filePath,(err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>Internal Server Error!<h1>')
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data)
      res.end();
    }
  })
}

module.exports = homeHandler; 