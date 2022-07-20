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
    this.render().then(() =>
      CharacterFormObservable.subscribe(this.hydrate.bind(this))
    )
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate.bind(this))
  }

  async render() {
    if (!this._characterClass) return
    return new Promise((resolve) => {
      setTimeout(async () => {
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
          case supportedClasses.Thief:
            await import('./thief-moves/thief-moves')
            this.innerHTML = '<dw-thief-moves></dw-thief-moves>'
            break
          case supportedClasses.Cleric:
            await import('./cleric-moves/cleric-moves')
            this.innerHTML = '<dw-cleric-moves></dw-cleric-moves>'
            break
          case supportedClasses.Wizard:
            await import('./wizard-moves/wizard-moves')
            this.innerHTML = '<dw-wizard-moves></dw-wizard-moves>'
            break
          default:
            await import('./other-moves/other-moves')
            this.innerHTML = '<dw-other-moves></dw-other-moves>'
            break
        }
        this.updateDom()
        resolve()
      })
    })
  }
}

customElements.define('dw-character-moves', CharacterMoves)
