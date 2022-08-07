import template from './detailed-checkbox.template.js'
const templateEl = document.createElement('template')
templateEl.innerHTML = template

export class DetailedCheckbox extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['key', 'label']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    switch (name) {
      case 'key':
      case 'label':
        this.onMount()
        break
      default:
        break
    }
  }

  onMount() {
    const key = this.getAttribute('key')
    const label = this.getAttribute('label')
    const input = this.querySelector('input')
    const labelEl = this.querySelector('label')
    if (labelEl) {
      labelEl.innerHTML = label
      labelEl.setAttribute('for', key)
    }
    if (!input) return
    input.setAttribute('name', key)
    input.setAttribute('id', key)
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  render() {
    const innerHTML = this.innerHTML
    this.innerHTML = ''
    this.appendChild(templateEl.content.cloneNode(true))
    this.querySelector('slot').innerHTML = innerHTML
  }
}

customElements.define('dw-detailed-checkbox', DetailedCheckbox)
