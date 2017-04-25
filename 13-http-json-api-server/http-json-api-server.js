const http = require('http')
const url = require('url')

const port = process.argv[2] || 8000

http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('Only support GET :)\n')
  }
  const urlObject = url.parse(req.url, true)
  const t = new Date(urlObject.query.iso)
  let retObj;
  if (urlObject.pathname === '/api/parsetime') {
    retObj = {
      hour: t.getHours(),
      minute: t.getMinutes(),
      second: t.getSeconds()
    }
  } else if (urlObject.pathname === '/api/unixtime') {
    retObj = {
      unixtime: t.getTime()
    }
  } else {
    res.writeHead(404)
    res.end()
  }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify(retObj))
}).listen(port)
