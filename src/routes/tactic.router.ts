import express from 'express'
import { TacticGroup } from '../models'
import { tacticService } from '../services'

const router = express.Router()
router.use(express.json())

router.get('/', (_req, res) => {
  void (async function (): Promise<void> {
    try {
      const tactis: TacticGroup[] = await tacticService.getAllTacticGroup()
      res.status(200).send(tactis)
    } catch (error) {
      res.status(400)
    }
  })()
})

router.get('/:tacticGroupId', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const tacticGroupId = req?.params?.tacticGroupId
      const tacticGroup: TacticGroup | null =
        await tacticService.getTacticGroup(tacticGroupId)
      if (tacticGroup !== null) {
        res.status(200).send(tacticGroup)
      } else {
        res.status(404).send(`Unable to find ${req.params.tacticGroupId}`)
      }
    } catch (error) {
      res.status(500)
    }
  })()
})

router.post('/', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const tacticGroup = req.body as TacticGroup
      const insertedTacticGroup: TacticGroup | null = await tacticService.insertGroupTactic(tacticGroup)
      if (insertedTacticGroup !== null) {
        res.status(201)
          .send(insertedTacticGroup)
      } else {
        res.status(400).send('Failed to create a entry.')
      }
    } catch (error) {
      res.status(500).send(error)
    }
  })()
})

router.put('/:tacticGroupId', (req, res) => {
  void (async function (): Promise<void> {
    try {
      const tacticGroupId = req?.params?.tacticGroupId
      const requestTacticGroup = req.body as TacticGroup
      const tacticGroup: TacticGroup | null =
        await tacticService.getTacticGroup(tacticGroupId)

      if (tacticGroup === null) {
        res.status(404).send(`Unable to find ${req.params.tacticGroupId}`)
        return
      }

      const updatedTacticGroup: TacticGroup = {
        name: requestTacticGroup?.name,
        tactics: requestTacticGroup?.tactics
      }

      const resultTacticGroup: TacticGroup | null = await tacticService.updateGroupTactic(tacticGroupId, updatedTacticGroup)

      if (resultTacticGroup !== null) {
        res.status(200).send(resultTacticGroup)
      } else {
        // bad request
        res.status(400).send('An error was found in the request object')
      }
    } catch (error) {
      res.status(500)
    }
  })()
})

export { router as tacticRouter }
