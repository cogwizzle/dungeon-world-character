import template from './character-moves.html'
import '../../section-header/section-header'

export class CharacterMoves extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-moves', CharacterMoves)
