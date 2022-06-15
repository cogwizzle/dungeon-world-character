import { supportedClasses } from '../../../data/supported-classes'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterMoves extends HTMLElement {
  _characterClass
  super() {
    super()
  }

  async hydrate(state) {
    if (state.characterClass === this._characterClass) return
    this._characterClass = state.characterClass
    await this.render()
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
  }

  async render() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        await import('./fighter-moves/fighter-moves')
        this.innerHTML = '<dw-fighter-moves></dw-fighter-moves>'
        break
      case supportedClasses.Ranger:
        await import('./ranger-moves/ranger-moves')
        this.innerHTML = '<dw-ranger-moves></dw-ranger-moves>'
        break
      default:
        this.innerHTML = ''
        break
    }
  }
}

customElements.define('dw-character-moves', CharacterMoves)
