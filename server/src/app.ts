import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import serviceRoutes from './routes/service.routes'
import contactRoutes from './routes/contact.routes'

dotenv.config()

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

app.use('/api/services', serviceRoutes)
app.use('/api/contact', contactRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

export default app
