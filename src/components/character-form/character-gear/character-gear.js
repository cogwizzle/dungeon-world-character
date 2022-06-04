import template from './character-gear.html'

export class CharacterGear extends HTMLElement {
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
