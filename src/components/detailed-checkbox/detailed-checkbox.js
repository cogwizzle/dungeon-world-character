import template from './detailed-checkbox.html'

export class DetailedCheckbox extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['name', 'label']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return
    switch (name) {
      case 'name':
      case 'label':
        this.onMount()
        break
      default:
        break
    }
  }

  onMount() {
    const name = this.getAttribute('name')
    const label = this.getAttribute('label')
    const input = this.querySelector('input')
    const labelEl = this.querySelector('label')
    if (labelEl) {
      labelEl.innerHTML = label
      labelEl.setAttribute('for', name)
    }
    if (!input) return
    input.setAttribute('name', name)
    input.setAttribute('id', name)
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  render() {
    const innerHTML = this.innerHTML
    this.innerHTML = template
    this.querySelector('slot').innerHTML = innerHTML
  }
}

customElements.define('dw-detailed-checkbox', DetailedCheckbox)
