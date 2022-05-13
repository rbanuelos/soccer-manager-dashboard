import { ObjectId } from 'mongodb'

export enum ElementArrow {
  UP, UP_LEAFT, UP_RIGHT, DOWN, DOWN_LEFT, DOWN_RIGHT, LEFT, RIGHT
}

export enum Color {
  WHITE, BLACK, RED, BLUE
}

export enum ElementType {
  PLAYER, BALL
}

export interface User {
  id?: ObjectId
  name: string
  tactics: Tactic[]
}

export interface Tactic {
  id: number
  elements: Element[]
}

export interface Element {
  id: number
  name: string
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
  color: Color
}
