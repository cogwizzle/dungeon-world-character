import template from './character-form.html'
import CharacterFormObservable from '../../state/character-form-observable'
import './character-look/character-look'

export class CharacterForm extends HTMLElement {
  constructor() {
    super()
  }

  onCharacterNameChange = (event) => {
    CharacterFormObservable.characterName = event.target.value
  }

  onLevelChange = (event) => {
    CharacterFormObservable.level = event.target.value
  }

  onXpChange = (event) => {
    CharacterFormObservable.xp = event.target.value
  }

  hydrate = (state) => {
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    characterNameElement.value = state.characterName || ''
    levelElement.value = state.level || ''
    xpElement.value = state.xp || 0
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    characterNameElement.addEventListener('change', this.onCharacterNameChange)
    levelElement.addEventListener('change', this.onLevelChange)
    xpElement.addEventListener('change', this.onXpChange)
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    characterNameElement.removeEventListener(
      'change',
      this.onCharacterNameChange
    )
    levelElement.removeEventListener('change', this.onLevelChange)
    xpElement.removeEventListener('change', this.onXpChange)
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-form', CharacterForm)
