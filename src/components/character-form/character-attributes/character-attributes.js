import template from './character-attributes.html'
import './character-attribute/character-attribute'

export class CharacterAttributes extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-attributes', CharacterAttributes)
