import express, { Express } from 'express'
import dotenv from 'dotenv'
import { tacticRouter } from './routes'
import { connectToDatabase } from './services'
import cors from 'cors'

dotenv.config()
const app: Express = express()
const port = process.env.PORT

if (port === undefined) {
  throw new Error('Invalid port value')
}

connectToDatabase()
  .then(() => {
    app.use(cors({
      origin: '*'
    }))
    app.use('/tactic', tacticRouter)
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error)
    process.exit()
  })
