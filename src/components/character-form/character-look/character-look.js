import CharacterFormObservable from '../../../state/character-form-observable'
import template from './character-look.html'
import '../../section-header/section-header'

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
  }

  get eyes() {
    return this._eyes
  }

  set eyes(value) {
    this._eyes = value
  }

  get hair() {
    return this._hair
  }

  set hair(value) {
    this._hair = value
  }

  get skin() {
    return this._skin
  }

  set skin(value) {
    this._skin = value
  }

  onBodyChange = (event) => {
    this._body = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
    }
  }

  onEyesChange = (event) => {
    this._eyes = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
    }
  }

  onHairChange = (event) => {
    this._hair = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
    }
  }

  hydrate = (state) => {
    const look = state.look || {}
    this._body = look.body || ''
    this._eyes = look.eyes || ''
    this._hair = look.hair || ''
    const bodyElements = [
      ...this.querySelectorAll('[name="body"][type="radio"]'),
    ]
    bodyElements.map(
      (element) => (element.checked = look.body === element.value)
    )
    const bodyOther = this.querySelector('#body-other')
    bodyOther.value = bodyElements.every(
      (element) => element.value !== look.body
    )
      ? look.body || ''
      : ''
    const eyesElements = [
      ...this.querySelectorAll('[name="eyes"][type="radio"]'),
    ]
    eyesElements.map(
      (element) => (element.checked = look.eyes === element.value)
    )
    const eyesOther = this.querySelector('#eyes-other')
    eyesOther.value = eyesElements.every(
      (element) => element.value !== look.eyes
    )
      ? look.eyes || ''
      : ''
    const hairElements = [
      ...this.querySelectorAll('[name="hair"][type="radio"]'),
    ]
    hairElements.map(
      (element) => (element.checked = look.hair === element.value)
    )
    const hairOther = this.querySelector('#hair-other')
    hairOther.value = hairElements.every(
      (element) => element.value !== look.hair
    )
      ? look.hair || ''
      : ''
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const bodyElements = [...this.querySelectorAll('[name="body"]')]
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
    CharacterFormObservable.unsubscribe(this.hydrate)
    const bodyElements = [...this.querySelectorAll('[name="body"]')]
    const eyesElements = [...this.querySelectorAll('[name="eyes"]')]
    const hairElements = [...this.querySelectorAll('[name="hair"]')]
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
