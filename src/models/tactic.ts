
export enum ElementArrow {
  TOP_LEFT = 'topLeft',
  TOP = 'top',
  TOP_RIGHT = 'topRight',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM_LEFT = 'bottomLeft',
  BOTTOM = 'bottom',
  BOTTOM_RIGHT = 'bottomRight'
}

export enum ElementType {
  PLAYER, BALL
}

export enum Team {
  TEAM_1 = 'team1',
  TEAM_2 = 'team2'
}

export interface TacticGroup {
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
