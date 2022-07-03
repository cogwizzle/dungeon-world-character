import template from './paladin-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'

const inputs = [
  ['#quest', 'quest'],
  ['#quest-slay', 'questSlay'],
  ['#quest-defend', 'questDefend'],
  ['#quest-discover', 'questDiscover'],
  ['#quest-direction', 'questDirection'],
  ['#quest-invulnerability', 'questInvulnerability'],
]

export class PaladinMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-paladin-moves', PaladinMoves)
