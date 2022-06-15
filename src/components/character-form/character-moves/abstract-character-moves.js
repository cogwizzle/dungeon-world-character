export class AbstractCharacterMoves extends HTMLElement {
  _template = ''
  _value = {}
  _inputs = []
  constructor() {
    super()
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
    this.updateDom()
  }

  emit = () => {
    this.dispatchEvent(
      new CustomEvent('dw-character-moves-change', {
        detail: this._value,
        bubbles: true,
      })
    )
  }

  addEventListenerFacade = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.addEventListener('change', () => {
      this._value[key] = !this._value[key]
      this.emit()
    })
  }

  removeEventListenerFacade = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.removeEventListener('change', () => {
      this._value[key] = !this._value[key]
      this.emit()
    })
  }

  updateElement = (id, key) => {
    const element = this.querySelector(id)
    if (!element) throw new Error(`Element ${id} not found`)
    element.checked = this._value[key]
  }

  updateDom = () => {
    this._inputs.forEach(([id, key]) => {
      this.updateElement(id, key)
    })
  }

  connectedCallback() {
    this.render()
    this._inputs.forEach(([id, key]) => this.addEventListenerFacade(id, key))
  }

  disconnectedCallback() {
    this._inputs.forEach(([id, key]) => this.removeEventListenerFacade(id, key))
  }

  render() {
    this.innerHTML = this._template
    this.updateDom()
  }
}