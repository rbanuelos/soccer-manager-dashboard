import express from 'express'
import { Color, ElementArrow, ElementType, Tactic } from '../model'

const router = express.Router()

router.get('/tactic', (req, res) => {
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
  return res.send(tactic)
})

export { router as tacticRouter }
