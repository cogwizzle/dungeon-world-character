import template from './character-form.html'
import CharacterFormObservable from '../../state/character-form-observable'
import './character-look/character-look'
import './character-alignment/character-alignment'
import './character-attributes/character-attributes'

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

  onArmorChange = (event) => {
    CharacterFormObservable.armor = event.target.value
  }

  onHitPointsChange = (event) => {
    CharacterFormObservable.hitPoints = event.target.value
  }

  onMaxHitPointsChange = (event) => {
    CharacterFormObservable.maxHitPoints = event.target.value
  }

  hydrate = (state) => {
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const armorElement = this.querySelector('#armor')
    const hitPointsElement = this.querySelector('#hit-points')
    const maxHitPointsElement = this.querySelector('#max-hit-points')
    characterNameElement.value = state.characterName || ''
    levelElement.value = state.level || ''
    xpElement.value = state.xp || 0
    armorElement.value = state.armor || 0
    hitPointsElement.value = state.hitPoints || 0
    maxHitPointsElement.value = state.maxHitPoints || 0
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const armorElement = this.querySelector('#armor')
    const hitPointsElement = this.querySelector('#hit-points')
    const maxHitPointsElement = this.querySelector('#max-hit-points')
    characterNameElement.addEventListener('change', this.onCharacterNameChange)
    levelElement.addEventListener('change', this.onLevelChange)
    xpElement.addEventListener('change', this.onXpChange)
    armorElement.addEventListener('change', this.onArmorChange)
    hitPointsElement.addEventListener('change', this.onHitPointsChange)
    maxHitPointsElement.addEventListener('change', this.onMaxHitPointsChange)
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const armorElement = this.querySelector('#armor')
    const hitPointsElement = this.querySelector('#hit-points')
    const maxHitPointsElement = this.querySelector('#max-hit-points')
    characterNameElement.removeEventListener(
      'change',
      this.onCharacterNameChange
    )
    levelElement.removeEventListener('change', this.onLevelChange)
    xpElement.removeEventListener('change', this.onXpChange)
    armorElement.removeEventListener('change', this.onArmorChange)
    hitPointsElement.removeEventListener('change', this.onHitPointsChange)
    maxHitPointsElement.removeEventListener('change', this.onMaxHitPointsChange)
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-form', CharacterForm)
