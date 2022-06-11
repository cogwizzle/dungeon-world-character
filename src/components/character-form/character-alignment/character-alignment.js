import template from './character-alignment.html'
import CharacterFormObservable from '../../../state/character-form-observable'
import '../../vertical-selection/vertical-selection'

export class CharacterAlignment extends HTMLElement {
  constructor() {
    super()
  }

  onAlignmentChange = (event) => {
    CharacterFormObservable.alignment = event.detail.value
  }

  hydrate = (state) => {
    this.querySelector('#alignment').setAttribute('value', state.alignment)
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#alignment').addEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#alignment').removeEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-alignment', CharacterAlignment)
