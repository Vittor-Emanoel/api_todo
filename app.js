const http = require('http')

http
  .createServer((req, res) => {
    res.write('Olá api')
    res.end()
  })
  .listen(3333, () => {
    console.log('listening on http://localhost3333')
  })
