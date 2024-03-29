import CharacterFormObservable from '../../../state/character-form-observable'
import '../../vertical-selection/vertical-selection'
import { supportedClasses } from '../../../data/supported-classes'

export class CharacterAlignment extends HTMLElement {
  _characterClass
  constructor() {
    super()
  }

  onAlignmentChange = (event) => {
    CharacterFormObservable.alignment = event.detail.value
  }

  hydrate = async (state) => {
    const isPreviousClassDifferent =
      this._characterClass !== state.characterClass
    if (isPreviousClassDifferent) {
      this.beforeUnmount()
      this._characterClass = state.characterClass
      await this.render()
      this.onMount()
    }
    this.querySelector('#alignment')?.setAttribute('value', state.alignment)
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.querySelector('#alignment')?.addEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    this.querySelector('#alignment')?.removeEventListener(
      'dw-change',
      this.onAlignmentChange
    )
  }

  connectedCallback() {
    this.render().then(() => this.onMount())
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  async render() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        const fighterTemplate = await import('./fighter-alignment.template.js')
        this.innerHTML = fighterTemplate.default
        break
      case supportedClasses.Ranger:
        const rangerTemplate = await import('./ranger-alignment.template.js')
        this.innerHTML = rangerTemplate.default
        break
      case supportedClasses.Bard:
        const bardTemplate = await import('./bard-alignment.template.js')
        this.innerHTML = bardTemplate.default
        break
      case supportedClasses.Druid:
        const druidTemplate = await import('./druid-alignment.template.js')
        this.innerHTML = druidTemplate.default
        break
      case supportedClasses.Paladin:
        const paladinTemplate = await import('./paladin-alignment.template.js')
        this.innerHTML = paladinTemplate.default
        break
      case supportedClasses.Thief:
        const thiefTemplate = await import('./thief-alignment.template.js')
        this.innerHTML = thiefTemplate.default
        break
      case supportedClasses.Cleric:
        const clericTemplate = await import('./cleric-alignment.template.js')
        this.innerHTML = clericTemplate.default
        break
      case supportedClasses.Wizard:
        const wizardTemplate = await import('./wizard-alignment.template.js')
        this.innerHTML = wizardTemplate.default
        break
      default:
        const otherTemplate = await import('./other-alignment.template.js')
        this.innerHTML = otherTemplate.default
        break
    }
  }
}

customElements.define('dw-character-alignment', CharacterAlignment)
