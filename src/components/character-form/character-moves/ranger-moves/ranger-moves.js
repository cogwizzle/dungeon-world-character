import { AbstractCharacterMoves } from '../abstract-character-moves'
import template from './ranger-moves.html'

const inputs = [
  ['#animal-companion', 'animalCompanion'],
  ['#animal-companion-name', 'animalCompanionName'],
  ['#animal-companion-wolf', 'animalCompanionWolf'],
  ['#animal-companion-bear', 'animalCompanionBear'],
  ['#animal-companion-eagle', 'animalCompanionEagle'],
  ['#animal-companion-dog', 'animalCompanionDog'],
  ['#animal-companion-hawk', 'animalCompanionHawk'],
  ['#animal-companion-cat', 'animalCompanionCat'],
  ['#animal-companion-owl', 'animalCompanionOwl'],
  ['#animal-companion-pigeon', 'animalCompanionPigeon'],
  ['#animal-companion-rat', 'animalCompanionRat'],
  ['#animal-companion-mule', 'animalCompanionMule'],
]

export class RangerMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-ranger-moves', RangerMoves)
