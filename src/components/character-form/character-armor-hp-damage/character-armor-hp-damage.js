import template from './character-armor-hp-damage.html'
import CharacterFormObservable from '../../../state/character-form-observable'
import { supportedClasses } from '../../../data/supported-classes'
import './labeled-decorated-input/labeled-decorated-input'

export class CharacterArmorHpDamage extends HTMLElement {
  _characterClass
  _inputs = [
    ['armor', 'armor'],
    ['hit-points', 'hitPoints'],
    ['max-hit-points', 'maxHitPoints'],
  ]
  constructor() {
    super()
  }

  onArmorChange = (event) => {
    CharacterFormObservable.armor = event.target.value
  }

  onHitPointsChange = (event) => {
    CharacterFormObservable.hitPoints = event.target.value
  }

  onMaxHitPointsChange = (event) => {
    CharacterFormObservable.maxHitPoints = event.target.value
  }

  onChange = (event) => {
    const { name } = event.target
    switch (name) {
      case 'armor':
        this.onArmorChange(event)
        break
      case 'hit-points':
        this.onHitPointsChange(event)
        break
      case 'max-hit-points':
        this.onMaxHitPointsChange(event)
        break
      default:
        break
    }
  }

  getDiceAmount() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
      case supportedClasses.Paladin:
        return 'D10'
      case supportedClasses.Ranger:
      case supportedClasses.Thief:
        return 'D8'
      case supportedClasses.Bard:
      case supportedClasses.Druid:
      case supportedClasses.Cleric:
        return 'D6'
      default:
        return 'D?'
    }
  }

  hydrate = (state) => {
    if (this._characterClass !== state.characterClass) {
      this._characterClass = state.characterClass
      const element = this.querySelector('#damage-input')
      if (element) element.innerHTML = this.getDiceAmount()
    }
    this._inputs.forEach(([id, propName]) => {
      const element = this.querySelector(`#${id}`)
      element.value = state[propName] || 0
    })
  }

  onMount = () => {
    CharacterFormObservable.subscribe(this.hydrate)
    this._inputs.forEach(([id]) => {
      const element = this.querySelector(`#${id}`)
      element.addEventListener('change', this.onChange)
    })
  }

  beforeUnmount = () => {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this._inputs.forEach(([id]) => {
      const element = this.querySelector(`#${id}`)
      element.removeEventListener('dw-input-change', this.onChange)
    })
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    this.innerHTML = template
    const element = this.querySelector('#damage-input')
    if (element) element.innerHTML = this.getDiceAmount()
  }
}

customElements.define('dw-character-armor-hp-damage', CharacterArmorHpDamage)
