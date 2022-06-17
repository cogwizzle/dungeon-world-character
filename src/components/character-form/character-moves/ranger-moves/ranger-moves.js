import { AbstractCharacterMoves } from '../abstract-character-moves'
import template from './ranger-moves.html'

const inputs = [
  ['#animal-companion', 'animalCompanion'],
  ['#animal-companion-name', 'animalCompanionName'],
  ['#animal-companion-wolf', 'animalCompanionWolf'],
  ['#animal-companion-cougar', 'animalCompanionCougar'],
  ['#animal-companion-bear', 'animalCompanionBear'],
  ['#animal-companion-eagle', 'animalCompanionEagle'],
  ['#animal-companion-dog', 'animalCompanionDog'],
  ['#animal-companion-hawk', 'animalCompanionHawk'],
  ['#animal-companion-cat', 'animalCompanionCat'],
  ['#animal-companion-owl', 'animalCompanionOwl'],
  ['#animal-companion-pigeon', 'animalCompanionPigeon'],
  ['#animal-companion-rat', 'animalCompanionRat'],
  ['#animal-companion-mule', 'animalCompanionMule'],
  ['#animal-companion-base-1', 'animalCompanionBase1'],
  ['#animal-companion-base-2', 'animalCompanionBase2'],
  ['#animal-companion-base-3', 'animalCompanionBase3'],
  ['#animal-companion-base-4', 'animalCompanionBase4'],
]

export class RangerMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-ranger-moves', RangerMoves)
