import express from 'express'

const app = express()

const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 20,
  },
  {
    id: 2,
    name: 'Waller',
    age: 30,
  },
]

app.get('/', (req, res) => {
  res.send('Hello, welcome to my api server')
})

app.get('/users', (req, res) => {
  res.status(200).json(users)
})

app.listen(3000, () => {
  console.log('listening on port 3333')
})
