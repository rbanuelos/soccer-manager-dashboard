import { ObjectId } from 'mongodb'
import { collections } from './database.service'
import { Element, ElementType, TacticGroup, Team } from '../models'

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
    if (!this.checkTacticGroup(tacticGroup)) {
      return undefined
    }
    const inserted: ObjectId | undefined =
      (await collections.tacticGroup?.insertOne(tacticGroup))?.insertedId
    return inserted?.toString()
  }

  async updateGroupTactic (tacticGroupId: string, tacticGroup: TacticGroup): Promise<string | undefined> {
    if (!this.checkTacticGroup(tacticGroup)) {
      return undefined
    }
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

  private checkTacticGroup (tacticGroup: TacticGroup): boolean {
    tacticGroup.tactics.forEach(tactic => {
      if (!(this.checkMaxAllowPlayersPerTeam(tactic.elements) ||
        this.checkOnlyOneBall(tactic.elements))) {
        return false
      }
    })
    return true
  }

  private checkMaxAllowPlayersPerTeam (elements: Element[]): boolean {
    const playersInTeamOne = elements.filter(element => element.attributes?.team === Team.TEAM_1)
    const playersInTeamTwo = elements.filter(element => element.attributes?.team === Team.TEAM_2)

    return playersInTeamOne.length <= 5 && playersInTeamTwo.length <= 5
  }

  private checkOnlyOneBall (elements: Element[]): boolean {
    const ballsInTactic = elements.filter(element => element.type === ElementType.BALL)

    return ballsInTactic.length < 2
  }
}

export const tacticService = new TacticService()
