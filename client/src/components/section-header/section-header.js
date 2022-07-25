import template from './section-header.html'

export class SectionHeader extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const originalContent = this.innerHTML
    this.innerHTML = template
    this.querySelector('slot').innerHTML = originalContent
  }
}

customElements.define('dw-section-header', SectionHeader)
