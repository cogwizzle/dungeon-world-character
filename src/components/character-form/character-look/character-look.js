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

  onBodyChange = (event) => {
    this._body = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
      skin: this._skin,
    }
  }

  onEyesChange = (event) => {
    this._eyes = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
      skin: this._skin,
    }
  }

  onHairChange = (event) => {
    this._hair = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
      skin: this._skin,
    }
  }

  onSkinChange = (event) => {
    this._skin = event.target.value
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
      skin: this._skin,
    }
  }

  hydrate = (state) => {
    const look = state.look || {}
    this._body = look.body || ''
    this._eyes = look.eyes || ''
    this._hair = look.hair || ''
    this._skin = look.skin || ''
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
    const skinElements = [
      ...this.querySelectorAll('[name="skin"][type="radio"]'),
    ]
    skinElements.map(
      (element) => (element.checked = look.skin === element.value)
    )
    const skinOther = this.querySelector('#skin-other')
    skinOther.value = skinElements.every(
      (element) => element.value !== look.skin
    )
      ? look.skin || ''
      : ''
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const bodyElements = [...this.querySelectorAll('[name="body"]')]
    const eyesElements = [...this.querySelectorAll('[name="eyes"]')]
    const hairElements = [...this.querySelectorAll('[name="hair"]')]
    const skinElements = [...this.querySelectorAll('[name="skin"]')]
    bodyElements.map((element) =>
      element.addEventListener('change', this.onBodyChange)
    )
    eyesElements.map((element) =>
      element.addEventListener('change', this.onEyesChange)
    )
    hairElements.map((element) =>
      element.addEventListener('change', this.onHairChange)
    )
    skinElements.map((element) =>
      element.addEventListener('change', this.onSkinChange)
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const bodyElements = [...this.querySelectorAll('[name="body"]')]
    const eyesElements = [...this.querySelectorAll('[name="eyes"]')]
    const hairElements = [...this.querySelectorAll('[name="hair"]')]
    const skinElements = [...this.querySelectorAll('[name="skin"]')]
    bodyElements.map((element) =>
      element.removeEventListener('change', this.onBodyChange)
    )
    eyesElements.map((element) =>
      element.removeEventListener('change', this.onEyesChange)
    )
    hairElements.map((element) =>
      element.removeEventListener('change', this.onHairChange)
    )
    skinElements.map((element) =>
      element.removeEventListener('change', this.onSkinChange)
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-look', CharacterLook)
