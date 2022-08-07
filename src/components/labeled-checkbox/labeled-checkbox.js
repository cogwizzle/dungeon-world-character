import template from './labeled-checkbox.template.js'
const templateEl = document.createElement('template')
templateEl.innerHTML = template

export class LabeledCheckbox extends HTMLElement {
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
    this.appendChild(templateEl.content.cloneNode(true))
  }
}

customElements.define('dw-labeled-checkbox', LabeledCheckbox)
