import template from './character-attributes.html'
import './character-attribute/character-attribute'
import CharacterFormObservable from '../../../state/character-form-observable'

const ATTRIBUTES = [
  'strength',
  'dexterity',
  'constitution',
  'intelligence',
  'wisdom',
  'charisma',
]

export class CharacterAttributes extends HTMLElement {
  constructor() {
    super()
  }

  onAttributeChangeHof = (attributeName) => (event) => {
    switch (attributeName) {
      case 'strength':
        CharacterFormObservable.strength = event.detail
        break
      case 'dexterity':
        CharacterFormObservable.dexterity = event.detail
        break
      case 'constitution':
        CharacterFormObservable.constitution = event.detail
        break
      case 'intelligence':
        CharacterFormObservable.intelligence = event.detail
        break
      case 'wisdom':
        CharacterFormObservable.wisdom = event.detail
        break
      case 'charisma':
        CharacterFormObservable.charisma = event.detail
        break
      default:
        throw new Error(`Unknown attribute: ${attributeName}`)
    }
  }

  hydrate = (state) => {
    ATTRIBUTES.forEach((attributeName) => {
      const attributeElement = this.querySelector(`#${attributeName}`)
      let value
      switch (attributeName) {
        case 'strength':
          value = state.strength
          break
        case 'dexterity':
          value = state.dexterity
          break
        case 'constitution':
          value = state.constitution
          break
        case 'intelligence':
          value = state.intelligence
          break
        case 'wisdom':
          value = state.wisdom
          break
        case 'charisma':
          value = state.charisma
          break
        default:
          throw new Error(`Unknown attribute: ${attributeName}`)
      }
      attributeElement.setAttribute('value', value || 0)
    })
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    ATTRIBUTES.forEach((attributeName) => {
      const attributeElement = this.querySelector(`#${attributeName}`)
      attributeElement.addEventListener(
        'dw-attribute-change',
        this.onAttributeChangeHof(attributeName)
      )
    })
  }

  disconnectedCallback() {
    ATTRIBUTES.forEach((attributeName) => {
      const attributeElement = this.querySelector(`#${attributeName}`)
      attributeElement.removeEventListener(
        'change',
        this.onAttributeChangeHof(attributeName)
      )
    })
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-attributes', CharacterAttributes)
