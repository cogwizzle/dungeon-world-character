import template from './paladin-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'

const inputs = []

export class PaladinMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-paladin-moves', PaladinMoves)
