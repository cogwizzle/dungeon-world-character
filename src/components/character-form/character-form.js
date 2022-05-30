import template from './character-form.html'
import './character-look/character-look'

export class CharacterForm extends HTMLElement {
  _characterName
  _level
  _xp
  constructor() {
    super()
  }

  get characterName() {
    return this._characterName
  }

  set characterName(value) {
    this._characterName = value
    const characterNameElement = this.querySelector('#character-name')
    characterNameElement.value = this.characterName
  }

  get level() {
    return this._level
  }

  set level(value) {
    this._level = value
    const levelElement = this.querySelector('#level')
    levelElement.value = this.level
  }

  get xp() {
    return this._xp
  }

  set xp(value) {
    this._xp = value
    const xpElement = this.querySelector('#xp')
    xpElement.value = this.xp
  }

  onCharacterNameChange = (event) => {
    this._characterName = event.target.value
    const characterNameElement = this.querySelector('#character-name')
    characterNameElement.value = this.characterName
  }

  onLevelChange = (event) => {
    this._level = event.target.value
    const levelElement = this.querySelector('#level')
    levelElement.value = this.level
  }

  onXpChange = (event) => {
    this._xp = event.target.value
    const xpElement = this.querySelector('#xp')
    xpElement.value = this.xp
  }

  onLookChange = (event) => {
    console.log(event.detail)
  }

  connectedCallback() {
    this.render()
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const lookElement = this.querySelector('dw-character-look')
    characterNameElement.addEventListener('change', this.onCharacterNameChange)
    levelElement.addEventListener('change', this.onLevelChange)
    xpElement.addEventListener('change', this.onXpChange)
    lookElement.addEventListener('dw-change', this.onLookChange)
  }

  disconnectedCallback() {
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const lookElement = this.querySelector('dw-character-look')
    characterNameElement.removeEventListener(
      'change',
      this.onCharacterNameChange
    )
    levelElement.removeEventListener('change', this.onLevelChange)
    xpElement.removeEventListener('change', this.onXpChange)
    lookElement.removeEventListener('dw-change', this.onLookChange)
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-form', CharacterForm)
