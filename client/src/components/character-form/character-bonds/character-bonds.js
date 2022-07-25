import template from './character-bonds.html'
import '../../section-header/section-header'
import '../../infinite-list/infinite-list'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterBonds extends HTMLElement {
  constructor() {
    super()
  }

  hydrate = (state) => {
    this.querySelector('#bonds-list').value = state.bonds
  }

  onUpdate(event) {
    CharacterFormObservable.bonds = event.detail
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#bonds-list').addEventListener(
      'dw-infinite-list-change',
      this.onUpdate
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#bonds-list').removeEventListener(
      'dw-infinite-list-change',
      this.onUpdate
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-bonds', CharacterBonds)
