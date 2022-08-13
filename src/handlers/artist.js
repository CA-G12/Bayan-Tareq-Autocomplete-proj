const path = require('path');
const fs = require('fs');


const artistHandler = (res, endpoint) => {
  fs.readFile(path.join(__dirname, '../post.json'), (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-type': 'html/text' });
      res.write('<h1> Internal Server Error ! <h1>');
      res.end();
    } 
    else {
      const value = endpoint.slice(endpoint.lastIndexOf('/') + 1);
      const allValue= value.split("%20").join(" ")
      let count = 0;
      const parsedData = JSON.parse(data);
      const filteredData =parsedData.songs.filter((ele) => {
        if (ele.artist.toUpperCase().includes(allValue.toUpperCase()) && count < 5) {
          // eslint-disable-next-line no-plusplus
          count++;
          return ele;
        }
      });
      res.writeHead(200, 'application/json');
      res.write(JSON.stringify(filteredData));
      res.end();
    }
  });
};
module.exports = artistHandler; 