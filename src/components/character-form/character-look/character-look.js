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
    const bodyOther = this.querySelector('#body-other')
    bodyOther.value = ''
  }

  onBodyOtherChange = (event) => {
    this._body = event.target.value
    this.emit()
    const bodyElements = [
      ...this.querySelectorAll('[name="body"][type="radio"]'),
    ]
    bodyElements.map((element) => (element.checked = false))
  }

  onEyesChange = (event) => {
    this._eyes = event.target.value
    this.emit()
    const eyesOther = this.querySelector('#eyes-other')
    eyesOther.value = ''
  }

  onEyesOtherChange = (event) => {
    this._eyes = event.target.value
    this.emit()
    const eyesElements = [
      ...this.querySelectorAll('[name="eyes"][type="radio"]'),
    ]
    eyesElements.map((element) => (element.checked = false))
  }

  onHairChange = (event) => {
    this._hair = event.target.value
    this.emit()
    const hairOther = this.querySelector('#hair-other')
    hairOther.value = ''
  }

  onHairOtherChange = (event) => {
    this._hair = event.target.value
    this.emit()
    const hairElements = [
      ...this.querySelectorAll('[name="hair"][type="radio"]'),
    ]
    hairElements.map((element) => (element.checked = false))
  }

  connectedCallback() {
    this.render()
    const bodyElements = [
      ...this.querySelectorAll('[name="body"][type="radio"]'),
    ]
    const bodyOther = this.querySelector('#body-other')
    const eyesElements = [
      ...this.querySelectorAll('[name="eyes"][type="radio"]'),
    ]
    const eyesOther = this.querySelector('#eyes-other')
    const hairElements = [
      ...this.querySelectorAll('[name="hair"][type="radio"]'),
    ]
    const hairOther = this.querySelector('#hair-other')
    bodyElements.map((element) =>
      element.addEventListener('change', this.onBodyChange)
    )
    bodyOther.addEventListener('change', this.onBodyOtherChange)
    eyesElements.map((element) =>
      element.addEventListener('change', this.onEyesChange)
    )
    eyesOther.addEventListener('change', this.onEyesOtherChange)
    hairElements.map((element) =>
      element.addEventListener('change', this.onHairChange)
    )
    hairOther.addEventListener('change', this.onHairOtherChange)
  }

  disconnectedCallback() {
    const bodyElements = [
      ...this.querySelectorAll('[name="body"][type="radio"]'),
    ]
    const bodyOther = this.querySelector('#body-other')
    const eyesElements = [
      ...this.querySelectorAll('[name="eyes"][type="radio"]'),
    ]
    const eyesOther = this.querySelector('#eyes-other')
    const hairElements = [
      ...this.querySelectorAll('[name="hair"][type="radio"]'),
    ]
    const hairOther = this.querySelector('#hair-other')
    bodyElements.map((element) =>
      element.removeEventListener('change', this.onBodyChange)
    )
    bodyOther.addEventListener('change', this.onBodyOtherChange)
    eyesElements.map((element) =>
      element.removeEventListener('change', this.onEyesChange)
    )
    eyesOther.removeEventListener('change', this.onEyesOtherChange)
    hairElements.map((element) =>
      element.removeEventListener('change', this.onHairChange)
    )
    hairOther.removeEventListener('change', this.onHairOtherChange)
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-look', CharacterLook)
