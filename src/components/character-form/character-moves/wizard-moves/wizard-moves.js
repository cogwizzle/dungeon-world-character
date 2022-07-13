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
  ['#prodigy', 'prodigy'],
  ['#logical', 'logical'],
  ['#empower-magic', 'empowerMagic'],
  ['#arcane-ward', 'arcaneWard'],
  ['#fount-of-knowledge', 'fountOfKnowledge'],
  ['#counterspell', 'counterspell'],
  ['#know-it-all', 'knowItAll'],
  ['#expanded-spellbook', 'expandedSpellbook'],
  ['#quick-study', 'quickStudy'],
  ['#enchanter', 'enchanter'],
  ['#master', 'master'],
  ['#greater-empower-magic', 'greaterEmpowerMagic'],
  ['#protective-counter', 'protectiveCounter'],
  ['#enchanters-soul', 'enchantersSoul'],
  ['#ethereal-tether', 'etherealTether'],
  ['#highly-logical', 'highlyLogical'],
  ['#spell-augmentation', 'spellAugmentation'],
  ['#mystical-puppet-strings', 'mysticalPuppetStrings'],
  ['#spell-powered', 'spellPowered'],
  ['#light', 'light'],
  ['#unseen-servant', 'unseenServant'],
  ['#prestidigitation', 'prestidigitation'],
]

export class WizardMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-wizard-moves', WizardMoves)
