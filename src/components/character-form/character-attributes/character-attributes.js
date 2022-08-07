import template from './character-attributes.template.js'
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

  onDebuffChangeHof = (attributeName) => (event) => {
    switch (attributeName) {
      case 'strength':
        CharacterFormObservable.weak = event.detail
        break
      case 'dexterity':
        CharacterFormObservable.shaky = event.detail
        break
      case 'constitution':
        CharacterFormObservable.sick = event.detail
        break
      case 'intelligence':
        CharacterFormObservable.stunned = event.detail
        break
      case 'wisdom':
        CharacterFormObservable.confused = event.detail
        break
      case 'charisma':
        CharacterFormObservable.scarred = event.detail
        break
      default:
        throw new Error(`Unknown attribute: ${attributeName}`)
    }
  }

  hydrate = (state) => {
    ATTRIBUTES.forEach((attributeName) => {
      const attributeElement = this.querySelector(`#${attributeName}`)
      let value
      let debuff
      switch (attributeName) {
        case 'strength':
          value = state.strength
          debuff = state.weak
          break
        case 'dexterity':
          value = state.dexterity
          debuff = state.shaky
          break
        case 'constitution':
          value = state.constitution
          debuff = state.sick
          break
        case 'intelligence':
          value = state.intelligence
          debuff = state.stunned
          break
        case 'wisdom':
          value = state.wisdom
          debuff = state.confused
          break
        case 'charisma':
          value = state.charisma
          debuff = state.scarred
          break
        default:
          throw new Error(`Unknown attribute: ${attributeName}`)
      }
      attributeElement.setAttribute('value', value || 0)
      attributeElement.setAttribute('debuff', debuff || false)
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
      attributeElement.addEventListener(
        'dw-debuff-change',
        this.onDebuffChangeHof(attributeName)
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
      attributeElement.removeEventListener(
        'dw-debuff-change',
        this.onDebuffChangeHof(attributeName)
      )
    })
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-attributes', CharacterAttributes)
