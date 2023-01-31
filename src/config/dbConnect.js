import mongoose from 'mongoose'

mongoose.connect(
  'mongodb+srv://vittor:300321Vb@cluster0.izrwffs.mongodb.net/?retryWrites=true&w=majority'
)

let db = mongoose.connection

export default db
