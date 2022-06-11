import { initCap } from '../../utility/init-cap'
import { html } from '../../utility/html-template'

const template = ({ title, options }) => html`<div class="flex flex-col">
    <label for="${title}" class="bg-black text-white flex flex-row relative">
      ${title.toUpperCase()}
    </label>
    ${options
      .map(
        (option) => html`<div class="flex flex-row items-center">
          <input
            type="radio"
            name="${title}"
            id="${title}-${option.name}"
            class="mx-2"
            value="${option.name}"
          />
          <label for="${title}-${option.name}" class="flex flex-col">
            <div>${initCap(option.name)}</div>
            <div class="text-xs italic">${option.description}</div>
          </label>
        </div>`
      )
      .join('\n')}
    <div class="flex flex-row items-center">
      <input
        type="text"
        name="${title}"
        id="${title}-other"
        class="ml-9 bg-transparent outline-none border-b-2 border-black w-full"
      />
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" />`

export class VerticalSelection extends HTMLElement {
  _title = ''
  _options = []
  _value = ''
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['options', 'title', 'value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'options':
        this._options = JSON.parse(newValue) || []
        this.rerender()
        break
      case 'title':
        this._title = newValue || ''
        this.rerender()
        break
      case 'value':
        this._value = newValue || ''
        this.updateValues()
        break
      default:
        break
    }
  }

  onChange(event) {
    const value = event.composedPath()[0].value
    this.dispatchEvent(
      new CustomEvent('dw-change', {
        detail: {
          value,
        },
      })
    )
  }

  onMount() {
    const elements = [
      ...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`),
    ]
    elements.forEach((element) => {
      element.addEventListener('change', this.onChange.bind(this))
    })
  }

  beforeUnmount() {
    const elements = [
      ...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`),
    ]
    elements.forEach((element) => {
      element.removeEventListener('change', this.onChange.bind(this))
    })
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  rerender() {
    this.beforeUnmount()
    this.render()
    this.onMount()
  }

  updateValues = () => {
    const radioElements = [
      ...this.shadowRoot.querySelectorAll(
        `[name="${this._title}"][type="radio"]`
      ),
    ]
    radioElements.forEach((element) => {
      element.checked = element.value === this._value
    })
    const otherElement = this.shadowRoot.querySelector(`#${this._title}-other`)
    otherElement.value =
      radioElements.every((element) => element.value !== this._value) &&
      this._value
        ? this._value || ''
        : ''
  }

  render() {
    this.shadowRoot.innerHTML = template({
      title: this._title,
      options: this._options,
    })
    this.updateValues()
  }
}

customElements.define('dw-vertical-selection', VerticalSelection)
