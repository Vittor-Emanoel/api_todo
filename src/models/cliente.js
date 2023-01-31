import mongoose from 'mongoose'

const clienteSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
})

const clientes = mongoose.model('agendamentos', clienteSchema)

export default clientes
