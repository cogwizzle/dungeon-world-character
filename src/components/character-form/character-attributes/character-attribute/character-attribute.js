import template from './character-attribute.template.js'

export class CharacterAttribute extends HTMLElement {
  _id
  _value = 0
  _debuff = false
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  static get observedAttributes() {
    return ['id', 'value', 'debuff']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'id':
        this._id = newValue
        break
      case 'debuff':
        this._debuff = newValue === 'true'
        const debuffElement = this.shadowRoot.querySelector('#debuff')
        debuffElement.checked = this._debuff
        break
      case 'value':
      default:
        this._value = newValue
        const scoreElement = this.shadowRoot.querySelector('[name="score"]')
        scoreElement.value = newValue
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

  emitAttributeChange = (value) =>
    this.dispatchEvent(
      new CustomEvent('dw-attribute-change', { detail: value })
    )

  emitDebuffChange = (value) =>
    this.dispatchEvent(new CustomEvent('dw-debuff-change', { detail: value }))

  onScoreChange = (event) => {
    this._value = event.target.value
    this.emitAttributeChange(event.target.value)
    this.updateModifier()
  }

  onDebuffClick = () => {
    this._debuff = !this._debuff
    this.emitDebuffChange(this._debuff)
  }

  connectedCallback() {
    this.render()
    const scoreElement = this.shadowRoot.querySelector('[name="score"]')
    const scoreLabel = this.shadowRoot.querySelector('#score-label')
    const debuffElement = this.shadowRoot.querySelector('#debuff')
    scoreElement.setAttribute('id', `score-${this._id}`)
    scoreLabel.setAttribute('for', `score-${this._id}`)
    scoreElement.addEventListener('change', this.onScoreChange)
    debuffElement.addEventListener('click', this.onDebuffClick)
  }

  disconnectedCallback() {
    const scoreElement = this.shadowRoot.querySelector('[name="score"]')
    const debuffElement = this.shadowRoot.querySelector('#debuff')
    scoreElement.removeEventListener('change', this.onScoreChange)
    debuffElement.removeEventListener('change', this.onDebuffClick)
  }

  render() {
    this.shadowRoot.innerHTML = template
    this.updateModifier()
  }
}

customElements.define('dw-character-attribute', CharacterAttribute)
