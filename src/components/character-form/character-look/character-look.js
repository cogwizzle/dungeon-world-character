import CharacterFormObservable from '../../../state/character-form-observable'
import template from './character-look.html'
import '../../section-header/section-header'
import './character-look-group/character-look-group'

export class CharacterLook extends HTMLElement {
  _groups = ['body', 'eyes', 'hair', 'skin']
  constructor() {
    super()
  }

  emit() {
    CharacterFormObservable.look = {
      body: this._body,
      eyes: this._eyes,
      hair: this._hair,
      skin: this._skin,
    }
  }

  onChange = (event) => {
    const { name, value } = event.target
    this[`_${name}`] = value
    this.emit()
  }

  hydrate = (state) => {
    const look = state.look || {}
    this._groups.forEach((group) => {
      this[`_${group}`] = look[group] || ''
      const radioElements = [
        ...this.querySelectorAll(`[name="${group}"][type="radio"]`),
      ]
      radioElements.forEach((radioElement) => {
        radioElement.checked = radioElement.value === look[group]
      })
      const otherElement = this.querySelector(`#${group}-other`)
      otherElement.value = radioElements.every(
        (radioElement) => radioElement.value !== look[group]
      )
        ? look[group]
        : ''
    })
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    const elements = this._groups.reduce((acc, group) => {
      return [...acc, ...this.querySelectorAll(`[name="${group}"]`)]
    }, [])
    elements.forEach((element) =>
      element.addEventListener('change', this.onChange)
    )
  }

  beforeUnmount() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const elements = this._groups.reduce((acc, group) => {
      return [...acc, ...this.querySelectorAll(`[name="${group}"]`)]
    }, [])
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

  render() {
    this.innerHTML = template
  }
}

customElements.define('dw-character-look', CharacterLook)
