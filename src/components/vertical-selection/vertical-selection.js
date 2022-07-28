import { initCap } from '../../utility/init-cap'
import { html } from '../../utility/html-template'

const generateOptions = (options, title) =>
  options
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
    .join('\n')

const template = ({ title, options }) => html`<div class="flex flex-col">
    <label
      id="title"
      for="${title}"
      class="bg-black text-white flex flex-row relative"
    >
      ${title.toUpperCase()}
    </label>
    <div id="options">${generateOptions(options, title)}</div>
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

  get value() {
    return this._value
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
        this._value = newValue && newValue !== 'undefined' ? newValue : ''
        this.updateValues()
        break
      default:
        break
    }
  }

  onChange(event) {
    const value = event.composedPath()[0].value
    this._value = value
    this.updateValues()
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
    const title = this.shadowRoot.querySelector('#title')
    title?.setAttribute('for', this._title)
    if (title)
      this.shadowRoot.querySelector('#title').innerHTML =
        this._title.toUpperCase()
    const options = this.shadowRoot.querySelector('#options')
    if (options)
      this.shadowRoot.querySelector('#options').innerHTML = generateOptions(
        this._options,
        this._title
      )
    this.onMount()
  }

  updateValues() {
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
