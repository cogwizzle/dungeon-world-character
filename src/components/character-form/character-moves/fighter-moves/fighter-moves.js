import template from './character-moves.html'
import '../../section-header/section-header'

export class FighterMoves extends HTMLElement {
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

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
    this.updateDom()
  }

  emit = () => {
    this.dispatchEvent(
      new CustomEvent('dw-character-moves-change', {
        detail: this._value,
      })
    )
  }

  addEventListenerFacade = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.addEventListener('change', () => {
      this._value[key] = !this._value[key]
      this.emit()
    })
  }

  removeEventListenerFacade = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.removeEventListener('change', () => {
      this._value[key] = !this._value[key]
      this.emit()
    })
  }

  updateElement = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.checked = this._value[key]
  }

  updateDom = () => {
    this._inputs.forEach(([id, key]) => {
      this.updateElement(id, key)
    })
  }

  connectedCallback() {
    this.render()
    this._inputs.forEach(([id, key]) => this.addEventListenerFacade(id, key))
  }

  disconnectedCallback() {
    this._inputs.forEach(([id, key]) => this.removeEventListenerFacade(id, key))
  }

  render() {
    this.innerHTML = template
    this.updateDom()
  }
}

customElements.define('dw-fighter-moves', FighterMoves)
