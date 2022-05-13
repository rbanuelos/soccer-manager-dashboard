import express from 'express'
import { UserTactic } from '../models'
import { getUserTactics } from '../services'

const router = express.Router()
router.use(express.json())

router.get('/:userId', async (req, res): Promise<void> => {
  const userId = req?.params?.userId
  try {
    const userTactic: UserTactic = await getUserTactics(userId)
    if (userTactic) {
      res.status(200).send(userTactic)
    }
  } catch (error) {
    res.status(400).send(`Unable to find ${req.params.userId}`)
  }
})

export { router as tacticRouter }
