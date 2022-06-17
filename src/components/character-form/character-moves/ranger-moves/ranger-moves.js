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
  ['#animal-companion-other-species', 'animalCompanionOtherSpecies'],
  ['#animal-companion-base-1', 'animalCompanionBase1'],
  ['#animal-companion-base-2', 'animalCompanionBase2'],
  ['#animal-companion-base-3', 'animalCompanionBase3'],
  ['#animal-companion-base-4', 'animalCompanionBase4'],
  ['#animal-companion-fast', 'animalCompanionFast'],
  ['#animal-companion-burly', 'animalCompanionBurly'],
  ['#animal-companion-huge', 'animalCompanionHuge'],
  ['#animal-companion-calm', 'animalCompanionCalm'],
  ['#animal-companion-adaptable', 'animalCompanionAdaptable'],
  ['#animal-companion-tireless', 'animalCompanionTireless'],
  ['#animal-companion-quick-reflexes', 'animalCompanionQuickReflexes'],
  ['#animal-companion-camouflage', 'animalCompanionCamouflage'],
  ['#animal-companion-ferocious', 'animalCompanionFerocious'],
  ['#animal-companion-intimidating', 'animalCompanionIntimidating'],
  ['#animal-companion-keen-senses', 'animalCompanionKeenSenses'],
  ['#animal-companion-stealthy', 'animalCompanionStealthy'],
  ['#animal-companion-hunt', 'animalCompanionHunt'],
  ['#animal-companion-search', 'animalCompanionSearch'],
  ['#animal-companion-scout', 'animalCompanionScout'],
  ['#animal-companion-guard', 'animalCompanionGuard'],
  ['#animal-companion-labor', 'animalCompanionLabor'],
  ['#animal-companion-travel', 'animalCompanionTravel'],
  ['#animal-companion-fight-monsters', 'animalCompanionFightMonsters'],
  ['#animal-companion-perform', 'animalCompanionPerform'],
  ['#animal-companion-other-training', 'animalCompanionOtherTraining'],
]

export class RangerMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-ranger-moves', RangerMoves)
