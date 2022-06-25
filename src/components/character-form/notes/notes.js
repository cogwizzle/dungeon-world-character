import template from './notes.html'

export class Notes extends HTMLElement {
  constructor() {
    super()
    this.shadowRoot = this.attachShadow({ mode: 'open' })
  }

  onMount() {
    this.shadowRoot
      .querySelector('#notes')
      .addEventListener('keyup', this.onChange.bind(this))
  }

  beforeUnmount() {
    this.shadowRoot
      .querySelector('#notes')
      .removeEventListener('keyup', this.onChange.bind(this))
  }

  onChange(event) {
    this.dispatchEvent(
      new CustomEvent('notes-changed', { detail: event.target.value })
    )
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-notes', Notes)
