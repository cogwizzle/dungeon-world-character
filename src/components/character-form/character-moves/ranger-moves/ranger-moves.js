import { AbstractCharacterMoves } from '../abstract-character-moves'
import templateText from './ranger-moves.html'

const template = document.createElement('template')
template.innerHTML = templateText

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
  ['#animal-companion-flighty', 'animalCompanionFlighty'],
  ['#animal-companion-savage', 'animalCompanionSavage'],
  ['#animal-companion-slow', 'animalCompanionSlow'],
  ['#animal-companion-broken', 'animalCompanionBroken'],
  ['#animal-companion-frightening', 'animalCompanionFrightening'],
  ['#animal-companion-forgetful', 'animalCompanionForgetful'],
  ['#animal-companion-stubborn', 'animalCompanionStubborn'],
  ['#animal-companion-lame', 'animalCompanionLame'],
  ['#animal-companion-other-weakness', 'animalCompanionOtherWeakness'],
  ['#hunt-and-track', 'huntAndTrack'],
  ['#called-shot', 'calledShot'],
  ['#command', 'command'],
  ['#half-elven', 'halfElven'],
  ['#blot-out-the-sun', 'blotOutTheSun'],
  ['#wild-empathy', 'wildEmpathy'],
  ['#well-trained', 'wellTrained'],
  ['#familiar-prey', 'familiarPrey'],
  ['#god-amidst-the-wastes', 'godAmidstTheWastes'],
  ['#vipers-strike', 'vipersStrike'],
  ['#camouflage', 'camouflage'],
  ['#follow-me', 'followMe'],
  ['#mans-best-friend', 'mansBestFriend'],
  ['#a-safe-place', 'aSafePlace'],
  ['#wild-speech', 'wildSpeech'],
  ['#a-safer-place', 'aSaferPlace'],
  ['#hunters-prey', 'huntersPrey'],
  ['#observant', 'observant'],
  ['#vipers-fangs', 'vipersFangs'],
  ['#special-trick', 'specialTrick'],
  ['#smaugs-belly', 'smaugsBelly'],
  ['#unnatural-ally', 'unnaturalAlly'],
  ['#strider', 'strider'],
]

export class RangerMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-ranger-moves', RangerMoves)
