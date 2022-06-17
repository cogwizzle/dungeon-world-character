import CharacterFormObservable from '../../../state/character-form-observable'
import '../../vertical-selection/vertical-selection'
import { supportedClasses } from '../../../data/supported-classes'

const templates = {}

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

  async getTemplate() {
    let template
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        if (templates[this._characterClass])
          return templates[this._characterClass]
        template = document.createElement('template')
        const fighterTemplate = await import('./fighter-alignment.html')
        template.innerHTML = fighterTemplate.default
        templates[this._characterClass] = template
        return template
      case supportedClasses.Ranger:
        if (templates[this._characterClass])
          return templates[this._characterClass]
        template = document.createElement('template')
        const rangerTemplate = await import('./ranger-alignment.html')
        template.innerHTML = rangerTemplate.default
        templates[this._characterClass] = template
        return template
      default:
        return document.createElement('template')
    }
  }

  async render() {
    const template = await this.getTemplate()
    this.innerHTML = ''
    this.appendChild(template.content.cloneNode(true))
  }
}

customElements.define('dw-character-alignment', CharacterAlignment)
