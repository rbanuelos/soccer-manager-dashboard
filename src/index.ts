import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { Color, ElementArrow, ElementType, Tactic } from './model'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

if (port === undefined) {
  throw new Error('Invalid port value!')
}

app.get('/', (req: Request, res: Response) => {
  const tactic: Tactic = {
    id: 1,
    elements: [{
      id: 1,
      name: 'Player 1',
      position: {
        x: 10,
        y: 10
      },
      type: ElementType.PLAYER,
      attributes: {
        arrow: null,
        color: Color.RED
      }
    },
    {
      id: 2,
      name: 'Ball',
      position: {
        x: 20,
        y: 10
      },
      type: ElementType.BALL
    },
    {
      id: 3,
      name: 'Player 2',
      position: {
        x: 30,
        y: 30
      },
      type: ElementType.PLAYER,
      attributes: {
        arrow: ElementArrow.RIGHT,
        color: Color.BLUE
      }
    }]
  }
  res.send(tactic)
})

app.listen(port, () => {
  console.log(`⚡️[server] : Server is running at http://localhost:${port}`)
})
