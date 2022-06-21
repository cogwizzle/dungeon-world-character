import template from './drawer.html'
import CharacterFormObservable from '../../state/character-form-observable'
import saveFile from '../../utility/save-file'
import { supportedClasses } from '../../data/supported-classes'

const generateClassOption = (className) => `<option value="${className}" />`

export class Drawer extends HTMLElement {
  _toggled = false
  _characterClass = ''
  _characterName = ''
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
    const originalValue = this._characterClass
    if (
      !originalValue ||
      originalValue === '' ||
      confirm(
        'Are you sure you want to change your class? This will reset some values on this form.'
      )
    ) {
      this._characterClass = event.target.value
      CharacterFormObservable.characterClass = this._characterClass
    } else {
      CharacterFormObservable.characterClass = originalValue
    }
  }

  onLoadClick = () => {
    this.shadowRoot.querySelector('#load-character-file').click()
  }

  onSaveClick = () =>
    saveFile(
      JSON.stringify(CharacterFormObservable.save()),
      `${this._characterName.toLocaleLowerCase()}.json`,
      'text/plain'
    )

  onLoadFileChange = (event) => {
    //Retrieve the first (and only!) File from the FileList object
    const file = event.currentTarget.files?.[0]

    if (file) {
      var fileReader = new FileReader()
      fileReader.onload = (onLoadEvent) => {
        const contents = onLoadEvent.target?.result
        if (!contents || typeof contents !== 'string')
          throw new Error('No file contents or multiple files detected.')
        const loadedCharacter = JSON.parse(contents)
        CharacterFormObservable.loadCharacter(loadedCharacter)
      }
      fileReader.readAsText(file)
      event.currentTarget.value = ''
    } else {
      alert('Failed to load file!')
    }
  }

  onMount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#drawer__toggle')
      .addEventListener('click', this.onToggle)
    this.shadowRoot
      .querySelector('#character-class')
      .addEventListener('change', this.onClassChange)
    this.shadowRoot
      .querySelector('#load')
      .addEventListener('click', this.onLoadClick)
    this.shadowRoot
      .querySelector('#save')
      .addEventListener('click', this.onSaveClick)
    this.shadowRoot
      .querySelector('#load-character-file')
      .addEventListener('change', this.onLoadFileChange)
  }

  beforeUnmount() {
    CharacterFormObservable.subscribe(this.hydrate)
    this.shadowRoot
      .querySelector('#drawer__toggle')
      .removeEventListener('click', this.onToggle)
    this.shadowRoot
      .querySelector('#character-class')
      .removeEventListener('change', this.onClassChange)
    this.shadowRoot
      .querySelector('#load')
      .removeEventListener('click', this.onLoadClick)
    this.shadowRoot
      .querySelector('#save')
      .removeEventListener('click', this.onSaveClick)
    this.shadowRoot
      .querySelector('#load-character-file')
      .removeEventListener('change', this.onLoadFileChange)
  }

  hydrate = (state) => {
    this._characterClass = state.characterClass
    this._characterName = state.characterName
    this.shadowRoot.querySelector('#character-class').value =
      this._characterClass || ''
    this.shadowRoot.querySelector('#class-name').innerHTML =
      this._characterClass || ''
    const playerMovesLink = this.shadowRoot.querySelector('#player-moves-link')
    if (this._characterClass && this._characterClass !== '')
      playerMovesLink?.classList.remove('hidden')
    else if (!playerMovesLink.classList.contains('hidden'))
      playerMovesLink?.classList.add('hidden')
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
    this.shadowRoot.querySelector('#class-list').innerHTML = Object.values(
      supportedClasses
    )
      .map(generateClassOption)
      .join('')
  }
}

customElements.define('dw-drawer', Drawer)
