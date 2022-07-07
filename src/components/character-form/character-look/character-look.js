import { supportedClasses } from '../../../data/supported-classes'
import CharacterFormObservable from '../../../state/character-form-observable'
import '../../section-header/section-header'
import './character-look-group/character-look-group'

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
      case supportedClasses.Bard:
      case supportedClasses.Thief:
      case supportedClasses.Cleric:
        return ['body', 'eyes', 'hair', 'clothes']
      case supportedClasses.Druid:
        return ['hair', 'eyes', 'clothes']
      case supportedClasses.Paladin:
        return ['body', 'eyes', 'hair', 'holy-symbol']
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
      case supportedClasses.Bard:
      case supportedClasses.Thief:
      case supportedClasses.Cleric:
        CharacterFormObservable.look = {
          body: this._body,
          eyes: this._eyes,
          hair: this._hair,
          clothes: this._clothes,
        }
        break
      case supportedClasses.Druid:
        CharacterFormObservable.look = {
          hair: this._hair,
          eyes: this._eyes,
          clothes: this._clothes,
        }
        break
      case supportedClasses.Paladin:
        CharacterFormObservable.look = {
          body: this._body,
          eyes: this._eyes,
          hair: this._hair,
          'holy-symbol': this['_holy-symbol'],
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

  async render() {
    switch (this._characterClass) {
      case supportedClasses.Fighter:
        const fighterTemplate = await import('./fighter-look.html')
        this.innerHTML = fighterTemplate.default
        break
      case supportedClasses.Ranger:
        const rangerTemplate = await import('./ranger-look.html')
        this.innerHTML = rangerTemplate.default
        break
      case supportedClasses.Bard:
        const bardTemplate = await import('./bard-look.html')
        this.innerHTML = bardTemplate.default
        break
      case supportedClasses.Druid:
        const druidTemplate = await import('./druid-look.html')
        this.innerHTML = druidTemplate.default
        break
      case supportedClasses.Paladin:
        const paladinTemplate = await import('./paladin-look.html')
        this.innerHTML = paladinTemplate.default
        break
      case supportedClasses.Thief:
        const thiefTemplate = await import('./thief-look.html')
        this.innerHTML = thiefTemplate.default
        break
      case supportedClasses.Cleric:
        const clericTemplate = await import('./cleric-look.html')
        this.innerHTML = clericTemplate.default
        break
      default:
        break
    }
  }
}

customElements.define('dw-character-look', CharacterLook)
