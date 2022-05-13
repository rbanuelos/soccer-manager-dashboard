import { ObjectId } from 'mongodb'
import { collections } from './database.service'
import { UserTactic } from '../models'

export async function getUserTactics (
  userId: number
): Promise<UserTactic> {
  const query = { _id: new ObjectId(userId) }
  return (await collections.userTactics?.findOne(query)) as UserTactic
}
