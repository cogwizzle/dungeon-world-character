import template from './other-look.template.js'
import CharacterFormObservable from '../../../state/character-form-observable'

class OtherLook extends HTMLElement {
  constructor() {
    super()
    this._value = ''
  }

  hydrate(state) {
    const look = typeof state.look === 'object' ? '' : state.look || ''
    if (look === this._value) return
    this._value = look
    const input = this.querySelector('#look')
    if (!input) return
    input.value = look
  }

  onChange(event) {
    const { value } = event.target
    CharacterFormObservable.look = value
    this._value = value
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate.bind(this))
    this.querySelector('#look')?.addEventListener(
      'change',
      this.onChange.bind(this)
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate.bind(this))
    this.querySelector('#look')?.removeEventListener(
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

customElements.define('dw-other-look', OtherLook)
