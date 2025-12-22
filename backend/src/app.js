import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/users.routes.js'

dotenv.config()

const app = express()
//conexion con frontend
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API funcionando 🚀')
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`)
})
