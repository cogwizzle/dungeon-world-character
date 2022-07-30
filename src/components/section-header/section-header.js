import template from './section-header.html'

export class SectionHeader extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-section-header', SectionHeader)
