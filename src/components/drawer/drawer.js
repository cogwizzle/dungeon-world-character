import template from './drawer.html'
import CharacterFormObservable from '../../state/character-form-observable'

export class Drawer extends HTMLElement {
  _toggled = false
  _characterClass = ''
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  onToggle = () => {
    const drawerElement = this.shadowRoot.querySelector('#drawer')
    const drawerToggleElement = this.shadowRoot.querySelector('#drawer__toggle')
    this._toggled = !this._toggled
    if (this._toggled) {
      drawerToggleElement.innerHTML = 'x'
      drawerToggleElement.classList.add('text-left')
      drawerToggleElement.classList.add('ml-2')
      drawerElement.classList.remove('w-10')
      drawerElement.classList.add('w-64')
      const invisibleElements = [
        ...this.shadowRoot.querySelectorAll('.invisible'),
      ].filter((element) => element.id !== 'drawer__toggle')
      invisibleElements.forEach((element) => {
        element.classList.remove('invisible')
        element.classList.add('visible')
      })
    } else {
      drawerToggleElement.innerHTML = '≡'
      drawerToggleElement.classList.remove('text-left')
      drawerToggleElement.classList.remove('ml-2')
      drawerElement.classList.remove('w-64')
      drawerElement.classList.add('w-10')
      const visibleElements = [
        ...this.shadowRoot.querySelectorAll('.visible'),
      ].filter((element) => element.id !== 'drawer__toggle')
      visibleElements.forEach((element) => {
        element.classList.remove('visible')
        element.classList.add('invisible')
      })
    }
  }

  onClassChange = (event) => {
    this._characterClass = event.target.value
    CharacterFormObservable.characterClass = this._characterClass
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#drawer__toggle')
      .addEventListener('click', this.onToggle)
    this.shadowRoot
      .querySelector('#character-class')
      .addEventListener('change', this.onClassChange)
  }

  beforeUnmount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#drawer__toggle')
      .removeEventListener('click', this.onToggle)
    this.shadowRoot
      .querySelector('#character-class')
      .removeEventListener('change', this.onClassChange)
  }

  hydrate = (state) => {
    this._characterClass = state.characterClass
    this.shadowRoot.querySelector('#character-class').value =
      this._characterClass || ''
    this.shadowRoot.querySelector('#class-name').innerHTML =
      this._characterClass || ''
  }

  connectedCallback() {
    this.render()
    this.onMount()
  }

  disconnectedCallback() {
    this.beforeUnmount()
  }

  render() {
    this.shadowRoot.innerHTML = template
  }
}

customElements.define('dw-drawer', Drawer)
