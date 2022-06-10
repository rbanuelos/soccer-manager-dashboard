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
      const result = await tacticService.insertGroupTactic(tacticGroup)
      if (result !== undefined) {
        res.status(201)
          .send(`Successfully created a new tactic group with id ${String(result)}`)
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
      const requestBodyTacticGroup = req.body as TacticGroup
      const tacticGroup: TacticGroup | null =
        await tacticService.getTacticGroup(tacticGroupId)

      if (tacticGroup === null) {
        res.status(404).send(`Unable to find ${req.params.tacticGroupId}`)
        return
      }

      const updatedTacticGroup: TacticGroup = {
        name: requestBodyTacticGroup?.name,
        tactics: requestBodyTacticGroup?.tactics
      }

      const result = await tacticService.updateGroupTactic(tacticGroupId, updatedTacticGroup)

      if (result === undefined) {
        res.status(200).send(result)
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
