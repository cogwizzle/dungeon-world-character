import template from './character-gear.template.js'
import CharacterFormObservable from '../../../state/character-form-observable'
import '../../section-header/section-header'

export class CharacterGear extends HTMLElement {
  constructor() {
    super()
  }

  hydrate = (state) => {
    this.querySelector('#gear-list').value = state.gear || []
    this.querySelector('#load').value = state.load || 0
    this.querySelector('#max-load').value = state.maxLoad || 0
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
    this.querySelector('#load').addEventListener('change', (event) => {
      CharacterFormObservable.load = event.target.value
    })
    this.querySelector('#max-load').addEventListener('change', (event) => {
      CharacterFormObservable.maxLoad = event.target.value
    })
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#gear-list').removeEventListener(
      'dw-infinite-list-change',
      this.onUpdate
    )
    this.querySelector('#load').removeEventListener('change', (event) => {
      CharacterFormObservable.load = event.target.value
    })
    this.querySelector('#max-load').removeEventListener('change', (event) => {
      CharacterFormObservable.maxLoad = event.target.value
    })
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-gear', CharacterGear)
