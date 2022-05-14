import { ObjectId } from 'mongodb'
import { collections } from './database.service'
import { UserTactic } from '../models'

class UserTacticService {
  async getTactics (): Promise<UserTactic[]> {
    return (await collections.userTactics?.find({}).toArray()) as UserTactic[]
  }

  async getUserTactics (
    userId: number
  ): Promise<UserTactic | null> {
    const query = { _id: new ObjectId(userId) }
    return (await collections.userTactics?.findOne(query)) as UserTactic
  }

  async saveUserTactic (usertTactic: UserTactic): Promise<ObjectId | undefined> {
    const inserted: ObjectId | undefined =
      (await collections.userTactics?.insertOne(usertTactic))?.insertedId
    return inserted
  }
}

export const userTacticService = new UserTacticService()
