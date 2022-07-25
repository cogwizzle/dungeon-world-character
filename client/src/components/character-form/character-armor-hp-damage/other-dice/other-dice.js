import CharacterFormObservable from '../../../../state/character-form-observable'
import template from './other-dice.html'

class OtherDice extends HTMLElement {
  constructor() {
    super()
    this._value = ''
  }

  hydrate(state) {
    this._value = state.otherDice
    const element = this.querySelector('#dice')
    if (element) element.value = this._value || ''
  }

  onChange(event) {
    CharacterFormObservable.otherDice = event.target.value
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate.bind(this))
    this.querySelector('#dice')?.addEventListener(
      'change',
      this.onChange.bind(this)
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate.bind(this))
    this.querySelector('#dice')?.removeEventListener(
      'change',
      this.onChange.bind(this)
    )
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-other-dice', OtherDice)
