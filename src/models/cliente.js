import mongoose from 'mongoose'

const clienteSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  dateAndHours: {
    type: Date,
  },
})

const clientes = mongoose.model('agendamentos', clienteSchema)

export default clientes
