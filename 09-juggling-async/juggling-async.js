const http = require('http');
const concat = require('concat-stream');

const urls = process.argv.slice(2);

Promise.all(urls
  .map( url => new Promise((resolve, reject) => {
      http.get(url, (res) => {
        res.setEncoding('utf8');
        res.on('error', reject);
        res.pipe(concat(resolve));
      });
    })
  ))
.then(res => {
  res.forEach(r => console.log(r));
});
