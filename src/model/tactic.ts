export enum ElementArrow {
    UP, DOWN, LEFT, RIGHT
}

export enum Color {
    WHITE, RED, BLUE
}

export enum ElementType {
    PLAYER, BALL
}

// main domain object
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

