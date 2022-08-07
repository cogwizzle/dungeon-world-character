import template from './character-coin.template.js'
import '../../section-header/section-header'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterCoin extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value') {
      this.querySelector('#coin').innerHTML = newValue
    }
  }

  hydrate = (state) => {
    const coinElement = this.querySelector('#coin')
    coinElement.value = state.coin || 0
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const coinElement = this.querySelector('#coin')
    coinElement.addEventListener('change', (event) => {
      CharacterFormObservable.coin = event.target.value
    })
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const coinElement = this.querySelector('#coin')
    coinElement.removeEventListener('change', (event) => {
      CharacterFormObservable.coin = event.target.value
    })
  }

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-coin', CharacterCoin)
