import { ObjectId } from 'mongodb'
import { collections } from './database.service'
import { TacticGroup } from '../models'

class TacticService {
  async getAllTacticGroup (): Promise<TacticGroup[]> {
    return (await collections.tacticGroup?.find({}).project({ name: 1 }).toArray()) as TacticGroup[]
  }

  async getTacticGroup (
    tacticGroupId: string
  ): Promise<TacticGroup | null> {
    const query = { _id: new ObjectId(tacticGroupId) }
    return (await collections.tacticGroup?.findOne(query)) as TacticGroup
  }

  async insertGroupTactic (tacticGroup: TacticGroup): Promise<string | undefined> {
    const inserted: ObjectId | undefined =
      (await collections.tacticGroup?.insertOne(tacticGroup))?.insertedId
    return inserted?.toString()
  }

  async updateGroupTactic (tacticGroupId: string, tacticGroup: TacticGroup): Promise<string | undefined> {
    const filter = { _id: new ObjectId(tacticGroupId) }
    const update = {
      $set:
      {
        name: tacticGroup.name,
        tactics: tacticGroup.tactics
      }
    }
    await collections.tacticGroup?.updateOne(filter, update)
    return tacticGroupId
  }
}

export const tacticService = new TacticService()
