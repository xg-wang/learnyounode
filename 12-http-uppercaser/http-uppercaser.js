const http = require('http')
const map = require('through2-map')

const port = process.argv[2] || 8000

http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  if (req.method !== 'POST') {
    return req.end('Only support POST :)\n');
  }
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
}).listen(port)
