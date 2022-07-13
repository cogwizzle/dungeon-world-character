import template from './wizard-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'
import '../../../detailed-checkbox/detailed-checkbox'

const inputs = [
  ['#cast-a-spell', 'castASpell'],
  ['#spellbook', 'spellbook'],
  ['#spell-defense', 'spellDefense'],
  ['#prepare-spells', 'prepareSpells'],
  ['#ritual', 'ritual'],
]

export class WizardMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-wizard-moves', WizardMoves)
