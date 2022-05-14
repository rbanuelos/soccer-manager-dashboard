import express, { Express } from 'express'
import dotenv from 'dotenv'
import { tacticRouter } from './routes'
import { connectToDatabase } from './services'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

if (port === undefined) {
  throw new Error('Invalid port value')
}

connectToDatabase()
  .then(() => {
    app.use('/user', tacticRouter)
    app.listen(port, () => {
      console.log(`⚡️[server] : Server is running at http://localhost:${port}`)
    })
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error)
    process.exit()
  })
