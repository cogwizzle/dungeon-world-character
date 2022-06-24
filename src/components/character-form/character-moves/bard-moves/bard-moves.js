import template from './bard-moves.html'
import '../../../section-header/section-header'
import { AbstractCharacterMoves } from '../abstract-character-moves'

export class BardMoves extends AbstractCharacterMoves {
  _template = template
  _value = {}
  _inputs = [
    ['#arcane-art', 'arcaneArt'],
    ['#bardic-lore', 'bardicLore'],
    ['#bardic-lore-spells-and-magicks', 'bardicLoreSpellsAndMagicks'],
    ['#bardic-lore-the-dead-and-undead', 'bardicLoreTheDeadAndUndead'],
    [
      '#bardic-lore-grand-histories-of-the-known-world',
      'bardicLoreGrandHistoriesOfTheKnownWorld',
    ],
    [
      '#bardic-lore-a-bestiary-of-creatures-unusual',
      'bardicLoreABestiaryOfCreaturesUnusual',
    ],
    ['#bardic-lore-the-planar-spheres', 'bardicLoreThePlanarSpheres'],
    ['#bardic-lore-legends-of-heroes-past', 'bardicLoreLegendsOfHeroesPast'],
    ['#bardic-lore-gods-and-their-servants', 'bardicLoreGodsAndTheirServants'],
    ['#charming-and-open', 'charmingAndOpen'],
    ['#port-in-the-storm', 'portInTheStorm'],
    ['#healing-song', 'healingSong'],
    ['#eldritch-tones', 'eldritchTones'],
    ['#vicious-cacophony', 'viciousCacophony'],
    ['#duelists-parry', 'duelistsParry'],
    ['#arcane-art-advanced', 'arcaneArtAdvanced'],
    ['#bamboozle', 'bamboozle'],
    ['#multiclass-dabbler', 'multiclassDabbler'],
    ['#metal-hurlant', 'metalHurlant'],
    ['#multiclass-initiate', 'multiclassInitiate'],
    ['#arcane-art-master', 'arcaneArtMaster'],
    ['#healing-chorus', 'healingChorus'],
    ['#an-ear-for-magic', 'anEarForMagic'],
    ['#vicious-blast', 'viciousBlast'],
    ['#devious', 'devious'],
    ['#unforgettable-face', 'unforgettableFace'],
    ['#duelist-block', 'duelistBlock'],
    ['#reputation', 'reputation'],
    ['#con', 'con'],
    ['#eldritch-chord', 'eldritchChord'],
    ['#multiclass-master', 'multiclassMaster'],
  ]
  constructor() {
    super()
  }
}

customElements.define('dw-bard-moves', BardMoves)
