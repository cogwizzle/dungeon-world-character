import template from './other-moves.template.js'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'

const inputs = [['#other', 'other']]

export class OtherMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-other-moves', OtherMoves)
