import template from './character-form.html'
import CharacterFormObservable from '../../state/character-form-observable'
import './character-look/character-look'
import './character-alignment/character-alignment'
import './character-attributes/character-attributes'
import './character-bonds/character-bonds'
import './character-race/character-race'
import './character-coin/character-coin'
import './character-gear/character-gear'
import './character-moves/character-moves'
import './character-armor-hp-damage/character-armor-hp-damage'
import './notes/notes'

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

  onMovesChange = (event) => {
    CharacterFormObservable.moves = event.detail
  }

  onNotesChange = (event) => {
    CharacterFormObservable.notes = event.detail
  }

  hydrate = (state) => {
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const characterMovesElement = this.querySelector('dw-character-moves')
    const notes = this.querySelector('dw-notes')
    characterNameElement.value = state.characterName || ''
    levelElement.value = state.level || ''
    xpElement.value = state.xp || 0
    characterMovesElement.value = state.moves || {}
    notes.setAttribute('value', state.notes || '')
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const xpElement = this.querySelector('#xp')
    const characterMovesElement = this.querySelector('dw-character-moves')
    const notes = this.querySelector('dw-notes')
    characterNameElement.addEventListener('change', this.onCharacterNameChange)
    levelElement.addEventListener('change', this.onLevelChange)
    xpElement.addEventListener('change', this.onXpChange)
    characterMovesElement.addEventListener(
      'dw-character-moves-change',
      this.onMovesChange
    )
    notes.addEventListener('notes-changed', this.onNotesChange)
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const characterNameElement = this.querySelector('#character-name')
    const levelElement = this.querySelector('#level')
    const characterMovesElement = this.querySelector('dw-character-moves')
    const notes = this.querySelector('dw-notes')
    characterNameElement.removeEventListener(
      'change',
      this.onCharacterNameChange
    )
    levelElement.removeEventListener('change', this.onLevelChange)
    xpElement.removeEventListener('change', this.onXpChange)
    characterMovesElement.removeEventListener(
      'dw-character-moves-change',
      this.onMovesChange
    )
    notes.removeEventListener('notes-changed', this.onNotesChange)
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-form', CharacterForm)
