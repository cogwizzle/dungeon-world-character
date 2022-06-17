import templateText from './section-header.html'
const template = document.createElement('template')
template.innerHTML = templateText

export class SectionHeader extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.render()
  }

  render() {
    const originalContent = this.innerHTML
    this.innerHTML = ''
    this.appendChild(template.content.cloneNode(true))
    this.querySelector('slot').innerHTML = originalContent
  }
}

customElements.define('dw-section-header', SectionHeader)
