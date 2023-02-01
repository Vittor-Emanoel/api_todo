import express from 'express'
import db from './src/config/dbConnect.js'
import clientes from './src/models/cliente.js'

const app = express()

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('Conexão com o banco feita com sucesso')
})

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization'
  )
  next()
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
  let cliente = new clientes(req.body)

  cliente.save((err) => {
    if (err) {
      res
        .status(500)
        .send({ message: `${err}- falha ao cadastrar o novo cliente.` })
    } else {
      res.status(201).send(cliente.toJSON())
    }
  })
})

app.put('/agendamentos/:id', (req, res) => {
  const id = req.params.id

  clientes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
    if (!err) {
      res.status(200).send({ message: 'cliente editado com successo!' })
    } else {
      res.status(500).send({ message: `${err} - ao cadastrar o cliente` })
    }
  })
})

app.delete('/agendamentos/:id', (req, res) => {
  const id = req.params.id

  clientes.findByIdAndDelete(id, (err) => {
    if (!err) {
      res.status(202).send({ message: 'cliente removido com succeso!' })
    } else {
      res.status(202).send({ message: `${err} - ao remover o cliente` })
    }
  })
})

function buscandoPorId(id) {
  return schedules.findIndex((schedule) => schedule.id == id)
}

app.listen(3000, () => {
  console.log('listening on port 3333')
})
