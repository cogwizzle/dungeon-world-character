import templateText from './fighter-moves.html'
import '../../../section-header/section-header'
import { AbstractCharacterMoves } from '../abstract-character-moves'

const template = document.createElement('template')
template.innerHTML = templateText

export class FighterMoves extends AbstractCharacterMoves {
  _template = template
  _value = {}
  _inputs = [
    ['#signature-weapon', 'signatureWeapon'],
    ['#signature-weapon-sword', 'signatureWeaponSword'],
    ['#signature-weapon-spear', 'signatureWeaponSpear'],
    ['#signature-weapon-axe', 'signatureWeaponAxe'],
    ['#signature-weapon-flail', 'signatureWeaponFlail'],
    ['#signature-weapon-hammer', 'signatureWeaponHammer'],
    ['#signature-weapon-fists', 'signatureWeaponFists'],
    ['#signature-weapon-range-hand', 'signatureWeaponRangeHand'],
    ['#signature-weapon-range-close', 'signatureWeaponRangeClose'],
    ['#signature-weapon-range-reach', 'signatureWeaponRangeReach'],
    [
      '#signature-weapon-enhancement-hooks-and-spikes',
      'signatureWeaponEnhancementHooksAndSpikes',
    ],
    ['#signature-weapon-enhancement-sharp', 'signatureWeaponEnhancementSharp'],
    [
      '#signature-weapon-enhancement-prefectly-weighted',
      'signatureWeaponEnhancementPrefectlyWeighted',
    ],
    [
      '#signature-weapon-enhancement-serrated-edges',
      'signatureWeaponEnhancementSerratedEdges',
    ],
    [
      '#signature-weapon-enhancement-glows-in-the-dark',
      'signatureWeaponEnhancementGlowsInTheDark',
    ],
    ['#signature-weapon-enhancement-huge', 'signatureWeaponEnhancementHuge'],
    [
      '#signature-weapon-enhancement-versatile',
      'signatureWeaponEnhancementVersatile',
    ],
    [
      '#signature-weapon-enhancement-well-crafted',
      'signatureWeaponEnhancementWellCrafted',
    ],
    ['#signature-weapon-look-ancient', 'signatureWeaponLookAncient'],
    ['#signature-weapon-look-blood-stained', 'signatureWeaponLookBloodStained'],
    ['#signature-weapon-look-unblemished', 'signatureWeaponLookUnblemished'],
    ['#signature-weapon-look-sinister', 'signatureWeaponLookSinister'],
    ['#signature-weapon-look-ornate', 'signatureWeaponLookOrnate'],
    ['#bend-bars-lift-gates', 'bendBarsLiftGates'],
    ['#armored', 'armored'],
    ['#merciless', 'merciless'],
    ['#armor-mastery', 'armorMastery'],
    ['#heirloom', 'heirloom'],
    ['#seeing-red', 'seeingRed'],
    ['#improved-weapon', 'improvedWeapon'],
    ['#interrogator', 'interrogator'],
    ['#blacksmith', 'blacksmith'],
    ['#scent-of-blood', 'scentOfBlood'],
    ['#iron-hide', 'ironHide'],
    ['#multiclass-dabbler', 'multiclassDabbler'],
    ['#bloodthirsty', 'bloodthirsty'],
    ['#armored-perfection', 'armoredPerfection'],
    ['#through-deaths-eyes', 'throughDeathsEyes'],
    ['#evil-eye', 'evilEye'],
    ['#eye-for-weaponry', 'eyeForWeaponry'],
    ['#superior-warrior', 'superiorWarrior'],
    ['#taste-of-blood', 'tasteOfBlood'],
    ['#steel-hide', 'steelHide'],
    ['#multiclass-initiate', 'multiclassInitiate'],
  ]
  constructor() {
    super()
  }
}

customElements.define('dw-fighter-moves', FighterMoves)
