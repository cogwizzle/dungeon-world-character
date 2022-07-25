import template from './druid-moves.html'
import { AbstractCharacterMoves } from '../abstract-character-moves'
import '../../../section-header/section-header'

const inputs = [
  ['#born-of-the-soil', 'bornOfTheSoil'],
  ['#the-great-forest', 'theGreatForest'],
  ['#the-whispering-plains', 'theWhisperingPlains'],
  ['#the-vast-desert', 'theVastDesert'],
  ['#the-stinking-mire', 'theStinkingMire'],
  ['#the-river-delta', 'theRiverDelta'],
  ['#the-depths-of-the-earth', 'theDepthsOfTheEarth'],
  ['#the-saphire-islands', 'theSaphireIslands'],
  ['#the-open-sea', 'theOpenSea'],
  ['#the-towering-mountains', 'theToweringMountains'],
  ['#the-frozen-north', 'theFrozenNorth'],
  ['#the-blasted-wasteland', 'theBlastedWasteland'],
  ['#by-nature-sustained', 'byNatureSustained'],
  ['#spirit-tongue', 'spiritTongue'],
  ['#shapeshifter', 'shapeshifter'],
  ['#studied-essence', 'studiedEssence'],
  ['#hunters-brother', 'huntersBrother'],
  ['#thing-talker', 'thingTalker'],
  ['#red-of-tooth-and-claw', 'redOfToothAndClaw'],
  ['#communion-of-whispers', 'communionOfWhispers'],
  ['#formcrafter', 'formCrafter'],
  ['#barkskin', 'barkskin'],
  ['#elemental-mastery', 'elementalMastery'],
  ['#eyes-of-the-tiger', 'eyesOfTheTiger'],
  ['#balance', 'balance'],
  ['#shed', 'shed'],
  ['#embracing-no-form', 'embracingNoForm'],
  ['#world-talker', 'worldTalker'],
  ['#dopplegangers-dance', 'dopplegangersDance'],
  ['#formshaper', 'formShaper'],
  ['#blood-and-thunder', 'bloodAndThunder'],
  ['#healthy-distrust', 'healthyDistrust'],
  ['#the-druid-sleep', 'theDruidSleep'],
  ['#chimera-form', 'chimeraForm'],
  ['#weather-weaver', 'weatherWeaver'],
  ['#stalkers-sister', 'stalkersSister'],
]

export class DruidMoves extends AbstractCharacterMoves {
  _inputs = inputs
  _template = template
  constructor() {
    super()
  }
}

customElements.define('dw-druid-moves', DruidMoves)
