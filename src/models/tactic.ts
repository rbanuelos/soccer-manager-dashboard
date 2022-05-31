import { ObjectId } from 'mongodb'

export enum ElementArrow {
  UP, UP_LEFT, UP_RIGHT, DOWN, DOWN_LEFT, DOWN_RIGHT, LEFT, RIGHT
}

export enum ElementType {
  PLAYER, BALL
}

export enum Team {
  TEAM_1, TEAM_2
}

export interface TacticGroup {
  id?: ObjectId
  name: string
  tactics: Tactic[]
}

export interface Tactic {
  sequence: number
  elements: Element[]
}

export interface Element {
  id: number
  name: string
  index: number
  type: ElementType
  position: ElementPosition
  attributes?: ElementAttributes
}

export interface ElementPosition {
  x: number
  y: number
}

export interface ElementAttributes {
  arrow: ElementArrow | null
  number: number
  team: string
}
