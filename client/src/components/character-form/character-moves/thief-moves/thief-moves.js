import template from './thief-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'

const inputs = [
  ['#trap-expert', 'trapExpert'],
  ['#flexible-morals', 'flexibleMorals'],
  ['#tricks-of-the-trade', 'tricksOfTheTrade'],
  ['#poisoner', 'poisoner'],
  ['#backstab', 'backstab'],
  ['#cheap-shot', 'cheapShot'],
  ['#poison-master', 'poisonMaster'],
  ['#cautious', 'cautious'],
  ['#envenom', 'envenom'],
  ['#wealth-and-taste', 'wealthAndTaste'],
  ['#brewer', 'brewer'],
  ['#shoot-first', 'shootFirst'],
  ['#connections', 'connections'],
  ['#underdog', 'underdog'],
  ['#dirty-fighter', 'dirtyFighter'],
  ['#alchemist', 'alchemist'],
  ['#extremely-cautious', 'extremelyCautious'],
  ['#serious-underdog', 'seriousUnderdog'],
  ['#escape-route', 'escapeRoute'],
  ['#evasion', 'evasion'],
  ['#disguise', 'disguise'],
  ['#heist', 'heist'],
  ['#strong-arm-true-aim', 'strongArmTrueAim'],
]

export class ThiefMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-thief-moves', ThiefMoves)
