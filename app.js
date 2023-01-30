import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, welcome to my api server')
})

app.listen(3000, () => {
  console.log('listening on port 3333')
})
