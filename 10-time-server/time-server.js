const net = require('net')
const moment = require('moment')

const port = process.argv[2]
const server = net.createServer((socket) => {
  const dateStr = moment().format('YYYY-MM-DD HH:mm') + '\n'
  socket.end(dateStr)
}).listen(port)