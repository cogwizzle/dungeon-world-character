import template from './character-attribute.html'

export class CharacterAttribute extends HTMLElement {
  _id
  _value = 0
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['id', 'value']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'id':
        this._id = newValue
        break
      case 'value':
      default:
        this._value = newValue
        this.updateModifier()
        break
    }
  }

  calculateModifier() {
    if (this._value <= 3) {
      return -3
    } else if (this._value <= 5) {
      return -2
    } else if (this._value <= 8) {
      return -1
    } else if (this._value <= 12) {
      return 0
    } else if (this._value <= 15) {
      return 1
    } else if (this._value <= 17) {
      return 2
    }
    return 3
  }

  updateModifier() {
    const modifierElement = this.shadowRoot.querySelector('#modifier')
    modifierElement.innerHTML = this.calculateModifier()
  }

  emit = (value) =>
    this.dispatchEvent(
      new CustomEvent('dw-attribute-change', { detail: value })
    )

  onScoreChange = (event) => {
    this._value = event.target.value
    this.emit(event.target.value)
    this.updateModifier()
  }

  connectedCallback() {
    this.render()
    const scoreElement = this.shadowRoot.querySelector('[name="score"]')
    const scoreLabel = this.shadowRoot.querySelector('#score-label')
    scoreElement.setAttribute('id', `score-${this._id}`)
    scoreLabel.setAttribute('for', `score-${this._id}`)
    scoreElement.addEventListener('change', this.onScoreChange)
  }

  disconnectedCallback() {
    const scoreElement = this.shadowRoot.querySelector('[name="score"]')
    scoreElement.removeEventListener('change', this.onScoreChange)
  }

  render() {
    this.shadowRoot.innerHTML = template
    this.updateModifier()
  }
}

customElements.define('dw-character-attribute', CharacterAttribute)
