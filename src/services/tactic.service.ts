import { ObjectId } from 'mongodb'
import { collections } from './database.service'
import { TacticGroup } from '../models'

class TacticService {
  async getAllTacticGroup (): Promise<TacticGroup[]> {
    return (await collections.tacticGroup?.find({}).toArray()) as TacticGroup[]
  }

  async getTacticGroup (
    tacticGroupId: number
  ): Promise<TacticGroup | null> {
    const query = { _id: new ObjectId(tacticGroupId) }
    return (await collections.tacticGroup?.findOne(query)) as TacticGroup
  }

  async saveGroupTactic (tacticGroup: TacticGroup): Promise<ObjectId | undefined> {
    if (tacticGroup.id === undefined) {
      return await this.insertGroupTactic(tacticGroup)
    } else {
      return await this.updateGroupTactic(tacticGroup)
    }
  }

  async insertGroupTactic (tacticGroup: TacticGroup): Promise<ObjectId | undefined> {
    const inserted: ObjectId | undefined =
      (await collections.tacticGroup?.insertOne(tacticGroup))?.insertedId
    return inserted
  }

  async updateGroupTactic (tacticGroup: TacticGroup): Promise<ObjectId | undefined> {
    const filter = { _id: new ObjectId(tacticGroup.id) }
    const update = { $set: { tactics: tacticGroup.tactics } }
    await collections.tacticGroup?.updateMany(filter, update)
    return tacticGroup.id
  }
}

export const tacticService = new TacticService()
