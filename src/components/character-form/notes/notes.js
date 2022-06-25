import template from './notes.html'

export class Notes extends HTMLElement {
  _value = ''
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
      this._value = newValue
      const notesElement = this.shadowRoot.querySelector('#notes')
      if (notesElement) notesElement.innerHTML = newValue
    }
  }

  onMount() {
    this.shadowRoot
      .querySelector('#notes')
      ?.addEventListener('keyup', this.onChange.bind(this))
  }

  beforeUnmount() {
    this.shadowRoot
      .querySelector('#notes')
      ?.removeEventListener('keyup', this.onChange.bind(this))
  }

  onChange(event) {
    this._value = event.target.value
    this.dispatchEvent(
      new CustomEvent('notes-changed', { detail: event.target.value })
    )
  }

  connectedCallback() {
    this._value = this.getAttribute('value') || ''
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    this.shadowRoot.innerHTML = template
    const notesElement = this.shadowRoot.querySelector('#notes')
    if (notesElement) notesElement.innerHTML = this._value
  }
}

customElements.define('dw-notes', Notes)
