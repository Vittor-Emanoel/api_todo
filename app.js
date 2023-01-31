import express from 'express'
import db from './src/config/dbConnect.js'
import clientes from './src/models/Cliente.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization'
  )
  next()
})

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso')
})

const schedules = [
  {
    id: 1,
    name: 'Ana Lucia',
    hours: Date.now(),
    description: 'Fazer uma escova',
  },
  {
    id: 2,
    name: 'Vânia',
    hours: Date.now(),
    description: 'Fazer uma progressiva',
  },
]

app.get('/', (req, res) => {
  res.send('Hello, welcome to my api server')
})

app.get('/agendamentos', (req, res) => {
  clientes.find((err, clientes) => {
    res.status(200).json(clientes)
  })
})

app.post('/agendamentos', (req, res) => {
  schedules.push(req.body)
  res.status(201).send('Novo Cliente cadastrado!')
})

app.put('/agendamentos/:id', (req, res) => {
  let index = buscandoPorId(req.params.id)
  schedules[index] = req.body
  res.json(schedules)
})

app.delete('/agendamentos/:id', (req, res) => {
  const id = req.params.id
  let index = buscandoPorId(id)
  schedules.splice(index, 1)
  res.send(`Agendamento ${id} excluido com successo!`)
})

function buscandoPorId(id) {
  return schedules.findIndex((schedule) => schedule.id == id)
}

app.listen(3000, () => {
  console.log('listening on port 3333')
})
