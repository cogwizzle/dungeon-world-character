import { supportedClasses } from '../../../data/supported-classes'
import CharacterFormObservable from '../../../state/character-form-observable'
import './character-look'
import './other-look'

const STRATEGIES = {
  SUPPORTED_CLASS: 'SUPPORTED_CLASS',
  OTHER: 'OTHER',
}

class CharacterLookStrategy extends HTMLElement {
  constructor() {
    super()
    this._currentStrategy
  }

  hydrate(state) {
    const isSupportedClass = Object.values(supportedClasses).some(
      (className) => state.characterClass === className
    )
    console.log('isSupportedClass', isSupportedClass)
    if (isSupportedClass) {
      // Supported Class
      switch (this._currentStrategy) {
        case STRATEGIES.SUPPORTED_CLASS:
          this._currentStrategy = STRATEGIES.SUPPORTED_CLASS
          break
        case STRATEGIES.OTHER:
        default:
          this._currentStrategy = STRATEGIES.SUPPORTED_CLASS
          this.render()
          break
      }
    } else {
      // Not a supported class.
      switch (this._currentStrategy) {
        case STRATEGIES.OTHER:
          this._currentStrategy = STRATEGIES.OTHER
          break
        case STRATEGIES.SUPPORTED_CLASS:
        default:
          this._currentStrategy = STRATEGIES.OTHER
          this.render()
          break
      }
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
    switch (this._currentStrategy) {
      case STRATEGIES.SUPPORTED_CLASS:
        this.innerHTML = '<dw-character-look></dw-character-look>'
        break
      case STRATEGIES.OTHER:
        this.innerHTML = '<dw-other-look></dw-other-look>'
        break
      default:
        this.innerHTML = ''
        break
    }
  }
}

customElements.define('dw-character-look-strategy', CharacterLookStrategy)
