import { supportedClasses } from '../../../data/supported-classes'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterMoves extends HTMLElement {
  _characterClass
  _value = {}
  constructor() {
    super()
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
    this.updateDom()
  }

  updateDom() {
    const firstChild = this.firstChild
    if (!firstChild) return
    firstChild.value = this._value
  }

  async hydrate(state) {
    if (state.characterClass === this._characterClass) return
    this._characterClass = state.characterClass
    await this.render()
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate.bind(this))
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate.bind(this))
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
      case supportedClasses.Bard:
        await import('./bard-moves/bard-moves')
        this.innerHTML = '<dw-bard-moves></dw-bard-moves>'
        break
      case supportedClasses.Druid:
        await import('./druid-moves/druid-moves')
        this.innerHTML = '<dw-druid-moves></dw-druid-moves>'
        break
      case supportedClasses.Paladin:
        await import('./paladin-moves/paladin-moves')
        this.innerHTML = '<dw-paladin-moves></dw-paladin-moves>'
        break
      default:
        this.innerHTML = ''
        break
    }
    this.updateDom()
  }
}

customElements.define('dw-character-moves', CharacterMoves)
