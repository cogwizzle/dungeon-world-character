import template from './druid-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'

const inputs = []

export class DruidMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-druid-moves', DruidMoves)
