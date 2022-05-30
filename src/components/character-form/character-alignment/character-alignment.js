import template from './character-alignment.html'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterAlignment extends HTMLElement {
  constructor() {
    super()
  }

  onAlignmentChange = (event) => {
    CharacterFormObservable.alignment = event.target.value
  }

  hydrate = (state) => {
    const alignmentElements = [
      ...this.querySelectorAll('[name="alignment"][type="radio"]'),
    ]
    const alignmentOther = this.querySelector('#alignment-other')
    alignmentElements.forEach((element) => {
      element.checked = element.value === state.alignment
    })
    alignmentOther.value = alignmentElements.every(
      (element) => element.value !== state.alignment
    )
      ? state.alignment || ''
      : ''
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const alignmentElement = [...this.querySelectorAll('[name="alignment"]')]
    alignmentElement.forEach((element) => {
      element.addEventListener('change', this.onAlignmentChange)
    })
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const alignmentElement = [...this.querySelectorAll('[name="alignment"]')]
    alignmentElement.forEach((element) => {
      element.removeEventListener('change', this.onAlignmentChange)
    })
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-alignment', CharacterAlignment)
