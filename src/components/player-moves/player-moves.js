import CharacterFormObservable from '../../state/character-form-observable'
import template from './player-moves.html'

export class PlayerMoves extends HTMLElement {
  _characterClass
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  hydrate(state) {
    this._characterClass = state.characterClass
    if (this._characterClass && this._characterClass !== '') {
      this.classList.remove('hidden')
    } else if (!this.classList.contains('hidden')) {
      this.classList.add('hidden')
    }
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate.bind(this))
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate.bind(this))
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-player-moves', PlayerMoves)
