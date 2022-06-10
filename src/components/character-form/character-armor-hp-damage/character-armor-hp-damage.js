import template from './character-armor-hp-damage.html'
import CharacterFormObservable from '../../../state/character-form-observable'
import './labeled-decorated-input/labeled-decorated-input'

export class CharacterArmorHpDamage extends HTMLElement {
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

  hydrate = (state) => {
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
  }
}

customElements.define('dw-character-armor-hp-damage', CharacterArmorHpDamage)
