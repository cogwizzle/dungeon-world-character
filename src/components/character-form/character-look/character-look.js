import template from './character-look.html'

export class CharacterLook extends HTMLElement {
  _body
  _eyes
  _hair
  _skin
  constructor() {
    super()
  }

  emit = () => {
    this.dispatchEvent(
      new CustomEvent('dw-change', {
        detail: {
          body: this._body,
          eyes: this._eyes,
          hair: this._hair,
        },
      })
    )
  }

  get body() {
    return this._body
  }

  set body(value) {
    this._body = value
    this.emit()
  }

  get eyes() {
    return this._eyes
  }

  set eyes(value) {
    this._eyes = value
    this.emit()
  }

  get hair() {
    return this._hair
  }

  set hair(value) {
    this._hair = value
    this.emit()
  }

  get skin() {
    return this._skin
  }

  set skin(value) {
    this._skin = value
    this.emit()
  }

  onBodyChange = (event) => {
    this._body = event.target.value
    this.emit()
  }

  onEyesChange = (event) => {
    this._eyes = event.target.value
    this.emit()
  }

  onHairChange = (event) => {
    this._hair = event.target.value
    this.emit()
  }

  connectedCallback() {
    this.render()
    const bodyElements = [...this.querySelectorAll('[name="body-shape"]')]
    const eyesElements = [...this.querySelectorAll('[name="eyes"]')]
    const hairElements = [...this.querySelectorAll('[name="hair"]')]
    bodyElements.map((element) =>
      element.addEventListener('change', this.onBodyChange)
    )
    eyesElements.map((element) =>
      element.addEventListener('change', this.onEyesChange)
    )
    hairElements.map((element) =>
      element.addEventListener('change', this.onHairChange)
    )
  }

  disconnectedCallback() {
    const bodyElements = this.querySelectorAll('[name="body"]')
    const eyesElements = this.querySelectorAll('[name="eyes"]')
    const hairElements = this.querySelectorAll('[name="hair"]')
    bodyElements.map((element) =>
      element.removeEventListener('change', this.onBodyChange)
    )
    eyesElements.map((element) =>
      element.removeEventListener('change', this.onEyesChange)
    )
    hairElements.map((element) =>
      element.removeEventListener('change', this.onHairChange)
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-look', CharacterLook)
