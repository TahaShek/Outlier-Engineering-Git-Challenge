const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') return respondHello(req, res)

  res.end()
})

function respondHello (req, res) {
  res.end(JSON.stringify({ msg: 'hello' }))
}

app.post('/encode', (req, res) => {
  let data = JSON.stringify(req.body);
console.log(typeof data);
  if (!data) {
    return res.status(400).json({ error: 'Missing data field in the request body.' });
  }
  const encodedData = Buffer.from(data).toString('base64');
  res.json({ encodedData });
});

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
