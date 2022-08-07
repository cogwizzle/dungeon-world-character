import template from './labeled-decorated-input.template.js'

export class LabeledDecoratedInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['for', 'icon-class']
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    const input = this.shadowRoot.querySelector(
      '#labeled-decorate-input__input'
    )
    switch (attrName) {
      case 'for':
        this.shadowRoot
          .querySelector('#labeled-decorate-input__label')
          ?.setAttribute('for', newVal)
        break
      case 'icon-class':
        this.shadowRoot
          .querySelector('#labeled-decorated-input__icon')
          ?.classList.add(newVal)
        break
      default:
        break
    }
  }

  onMount() {
    const icon = this.shadowRoot.querySelector('#labeled-decorated-input__icon')
    const label = this.shadowRoot.querySelector(
      '#labeled-decorate-input__label'
    )
    icon.classList.add(this.getAttribute('icon-class'))
    label.setAttribute('for', this.getAttribute('for'))
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  render() {
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-labeled-decorated-input', LabeledDecoratedInput)
