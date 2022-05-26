import express from 'express'
import { UserTactic } from '../models'
import { userTacticService } from '../services'

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const tactis: UserTactic[] = await userTacticService.getTactics()
      res.status(200).send(tactis)
    } catch (error) {
      res.status(400)
    }
  })()
})

router.get('/:userId', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const userId = req?.params?.userId
      const userTactic: UserTactic | null =
        await userTacticService.getUserTactics(+userId)
      if (userTactic !== null) {
        res.status(200).send(userTactic)
      } else {
        res.status(404).send(`Unable to find ${req.params.userId}`)
      }
    } catch (error) {
      res.status(500)
    }
  })()
})

router.post('/', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const userTactic = req.body as UserTactic
      const result = await userTacticService.saveUserTactic(userTactic)
      if (result !== undefined) {
        res.status(201)
          .send(`Successfully created a new game with id ${result.toString()}`)
      } else {
        res.status(500).send('Failed to create a entry.')
      }
    } catch (error) {
      console.error(error)
      res.status(400).send(error)
    }
  })()
})

export { router as tacticRouter }
