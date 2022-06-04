import template from './character-race.html'
import '../../section-header/section-header'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterRace extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return []
  }

  emit = (value) => {
    CharacterFormObservable.race = value
  }

  onChange = (event) => {
    this.emit(event.target.value)
  }

  hydrate = (state) => {
    this.querySelectorAll('[name="race"]').forEach((element) => {
      element.checked = state.race === element.value
    })
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelectorAll('[name="race"]').forEach((element) =>
      element.addEventListener('change', this.onChange)
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelectorAll('[name="race"]').forEach((element) =>
      element.removeEventListener('change', this.onChange)
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-race', CharacterRace)
