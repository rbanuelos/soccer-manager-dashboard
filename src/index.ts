import express, { Express } from 'express'
import dotenv from 'dotenv'
import { tacticRouter } from './routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

if (port === undefined) {
  throw new Error('Invalid port value!')
}

app.use(tacticRouter)

app.listen(port, () => {
  console.log(`⚡️[server] : Server is running at http://localhost:${port}`)
})
