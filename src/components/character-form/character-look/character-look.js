import { supportedClasses } from '../../../data/supported-classes'
import CharacterFormObservable from '../../../state/character-form-observable'
import '../../section-header/section-header'
import './character-look-group/character-look-group'

const templates = {}

export class CharacterLook extends HTMLElement {
  _characterClass
  constructor() {
    super()
  }

  get groups() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        return ['body', 'eyes', 'hair', 'skin']
      case supportedClasses.Ranger:
        return ['body', 'eyes', 'hair', 'clothes']
      default:
        return []
    }
  }

  emit() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        CharacterFormObservable.look = {
          body: this._body,
          eyes: this._eyes,
          hair: this._hair,
          skin: this._skin,
        }
        break
      case supportedClasses.Ranger:
        CharacterFormObservable.look = {
          body: this._body,
          eyes: this._eyes,
          hair: this._hair,
          clothes: this._clothes,
        }
      default:
        break
    }
  }

  onChange = (event) => {
    const { name, value } = event.target
    this[`_${name}`] = value
    this.emit()
  }

  hydrate = async (state) => {
    const look = state.look || {}
    const isPreviousClassDifferent =
      this._characterClass !== state.characterClass

    if (isPreviousClassDifferent) {
      this.beforeUnmount()
      this._characterClass = state.characterClass
      await this.render()
      this.onMount()
    }
    this.groups.forEach((group) => {
      this[`_${group}`] = look[group] || ''
      const radioElements = [
        ...this.querySelectorAll(`[name="${group}"][type="radio"]`),
      ]
      radioElements.forEach((radioElement) => {
        radioElement.checked = radioElement.value === look[group]
      })
      const otherElement = this.querySelector(`#${group}-other`)
      otherElement.value =
        radioElements.every(
          (radioElement) => radioElement.value !== look[group]
        ) && look[group]
          ? look[group]
          : ''
    })
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    const elements = this.groups.reduce(
      (acc, group) => [...acc, ...this.querySelectorAll(`[name="${group}"]`)],
      []
    )
    elements.forEach((element) =>
      element.addEventListener('change', this.onChange)
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const elements = this.groups.reduce(
      (acc, group) => [...acc, ...this.querySelectorAll(`[name="${group}"]`)],
      []
    )
    elements.forEach((element) =>
      element.removeEventListener('change', this.onChange)
    )
  }

  connectedCallback() {
    this.render()
    this.onMount()
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
        const fighterTemplate = await import('./fighter-look.html')
        template.innerHTML = fighterTemplate.default
        templates[this._characterClass] = template
        return template
      case supportedClasses.Ranger:
        if (templates[this._characterClass])
          return templates[this._characterClass]
        template = document.createElement('template')
        const rangerTemplate = await import('./ranger-look.html')
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

customElements.define('dw-character-look', CharacterLook)
