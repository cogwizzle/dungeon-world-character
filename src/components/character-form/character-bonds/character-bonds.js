import template from './character-bonds.html'
import '../../section-header/section-header'
import CharacterFormObservable from '../../../state/character-form-observable'

export class CharacterBonds extends HTMLElement {
  _bonds = []
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['bonds']
  }

  get bonds() {
    return this._bonds
  }

  set bonds(value) {
    this._bonds = value
  }

  hydrate = (state) => {
    this._bonds = state.bonds || []
    this._bonds.forEach((bond, index) => {
      let input = this.querySelector(`#bond-${index}`)
      if (!input) {
        const listElement = this.querySelector('#bonds-list')
        input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('value', bond)
        input.setAttribute('id', `bond-${index}`)
        input.setAttribute(
          'class',
          'bg-transparent border-b-2 border-b-black outline-none w-full'
        )
        listElement.insertBefore(input, document.querySelector('#new-bond'))
      } else {
        input.value = bond
      }
    })
  }

  addBond = (event) => {
    this._bonds.push(event.target.value)
    const newInput = document.createElement('input')
    const newIndex = this._bonds.length - 1
    newInput.setAttribute('type', 'text')
    newInput.setAttribute('id', `bond-${newIndex}`)
    newInput.setAttribute('value', event.target.value)
    newInput.setAttribute(
      'class',
      'bg-transparent border-b-2 border-b-black outline-none w-full'
    )
    event.target.parentElement.insertBefore(newInput, event.target)
    event.target.value = ''
    newInput.setSelectionRange(newInput.value.length, newInput.value.length)
    newInput.focus()
    newInput.addEventListener('keyup', (event) =>
      this.updateBond(event.target.value, newIndex)
    )

    CharacterFormObservable.bonds = this._bonds
  }

  updateBond = (value, index) => {
    this._bonds[index] = value
    if (!value || value === '') {
      this._bonds.forEach((bond, bondIndex) => {
        const element = document.querySelector(`#bond-${bondIndex}`)
        element.removeEventListener('keyup', (event) =>
          this.updateBond(event.target.value, bondIndex)
        )
        element.remove()
      })
      this._bonds = this._bonds.filter((bond) => bond !== '')
      this.renderListOfBonds()
      this.addBondEventListeners()
    }
    CharacterFormObservable.bonds = this._bonds
  }

  addBondEventListeners() {
    this._bonds.forEach((bond, index) => {
      const input = document.querySelector(`#bond-${index}`)
      input.addEventListener('keyup', (event) =>
        this.updateBond(event.target.value, index)
      )
    })
  }

  removeBondEventListeners() {
    this._bonds.forEach((bond, index) => {
      const element = document.querySelector(`#bond-${index}`)
      element.removeEventListener('keyup', (event) =>
        this.updateBond(event.target.value, index)
      )
    })
  }

  connectedCallback() {
    this.render()
    CharacterFormObservable.subscribe(this.hydrate)
    const newInputElement = this.querySelector('#new-bond')
    newInputElement.addEventListener('keyup', this.addBond)
    this.addBondEventListeners()
  }

  disconnectedCallback() {
    CharacterFormObservable.unsubscribe(this.hydrate)
    const newInputElement = this.querySelector('#new-bond')
    newInputElement.removeEventListener('keyup', this.addBond)
    this.removeBondEventListeners()
  }

  renderListOfBonds() {
    const listElement = this.querySelector('#bonds-list')
    this._bonds.forEach((bond, index) => {
      const input = document.createElement('input')
      input.setAttribute('type', 'text')
      input.setAttribute('value', bond)
      input.setAttribute('id', `bond-${index}`)
      input.setAttribute(
        'class',
        'bg-transparent border-b-2 border-b-black outline-none w-full'
      )
      listElement.prepend(input)
    })
  }

  render() {
    this.innerHTML = template
    this.renderListOfBonds()
  }
}

customElements.define('dw-character-bonds', CharacterBonds)
