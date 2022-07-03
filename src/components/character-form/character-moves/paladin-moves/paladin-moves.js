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
  ['#lay-on-hands', 'layOnHands'],
  ['#i-am-the-law', 'iAmTheLaw'],
  ['#armored', 'armored'],
  ['#divine-favor', 'divineFavor'],
  ['#exterminatus', 'exterminatus'],
  ['#hospitaller', 'hospitaller'],
  ['#bloody-aegis', 'bloodyAegis'],
  ['#charge', 'charge'],
  ['#smite', 'smite'],
  ['#staunch-defender', 'staunchDefender'],
  ['#holy-protection', 'holyProtection'],
  ['#setup-strike', 'setupStrike'],
  ['#voice-of-authority', 'voiceOfAuthority'],
]

export class PaladinMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-paladin-moves', PaladinMoves)
