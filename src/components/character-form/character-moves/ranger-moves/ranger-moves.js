import { AbstractCharacterMoves } from '../abstract-character-moves'
import template from './ranger-moves.html'

const inputs = []

export class RangerMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-ranger-moves', RangerMoves)
