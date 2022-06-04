import template from './character-gear.html'
import CharacterFormObservable from '../../../state/character-form-observable'
import '../../section-header/section-header'

export class CharacterGear extends HTMLElement {
  constructor() {
    super()
  }

  hydrate = (state) => {
    this.querySelector('#gear-list').value = state.gear || []
  }

  onUpdate(event) {
    CharacterFormObservable.gear = event.detail
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#gear-list').addEventListener(
      'dw-infinite-list-change',
      this.onUpdate
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#gear-list').removeEventListener(
      'dw-infinite-list-change',
      this.onUpdate
    )
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-gear', CharacterGear)
