import CharacterFormObservable from '../../../state/character-form-observable'
import template from './character-look.html'
import '../../section-header/section-header'

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

  onBodyChange = (event) => {
    this._body = event.target.value
    this.emit()
  }

  onEyesChange = (event) => {
    this._eyes = event.target.value
    this.emit()
  }

  onHairChange = (event) => {
    this._hair = event.target.value
    this.emit()
  }

  onSkinChange = (event) => {
    this._skin = event.target.value
    this.emit()
  }

  onChange = (event) => {
    const { name } = event.target
    switch (name) {
      case 'body':
        this.onBodyChange(event)
        break
      case 'eyes':
        this.onEyesChange(event)
        break
      case 'hair':
        this.onHairChange(event)
        break
      case 'skin':
        this.onSkinChange(event)
        break
      default:
        break
    }
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
