import template from './infinite-list.html'

const createNewInput = (value, index) => {
  const templateElement = document.createElement('template')
  const className =
    'bg-transparent border-b-2 border-b-black outline-none w-full'
  templateElement.innerHTML = `<input type="text" value="${value}" id="item-${index}" class="${className}" />`
  return templateElement.content.firstChild
}

export class InfiniteList extends HTMLElement {
  _value = []
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
    this.renderList()
  }

  removeAndRenumber(element) {
    this._value.forEach((value, index) => {
      if (index > this._value.indexOf(element.value)) {
        const input = this.shadowRoot.querySelector(`#item-${index}`)
        this.removeEventListener('keyup', (event) =>
          this.onUpdate(event, index)
        )
        const newIndex = index - 1
        input.setAttribute('id', `item-${newIndex}`)
        input.addEventListener('keyup', (event) =>
          this.onUpdate(event, newIndex)
        )
      } else if (index >= this._value.indexOf(element.value)) {
        element.removeEventListener('keyup', (event) =>
          this.onUpdate(event, index)
        )
        element.remove()
      }
    })
  }

  renderList() {
    const listElement = this.shadowRoot.querySelector('#list')
    this._value.forEach((value, index) => {
      let input = this.shadowRoot.querySelector(`#item-${index}`)
      if (input) return input.setAttribute('value', value)
      input = createNewInput(value, index)
      listElement.insertBefore(input, this.shadowRoot.querySelector('#new'))
      input.addEventListener('keyup', (event) => {
        this.onUpdate(event, index)
      })
    })
  }

  onUpdate = async (event, index) => {
    const newValue = event.target.value
    this._value[index] = newValue
    if (newValue === '') {
      this.removeAndRenumber(event.target)
    }
    this.dispatchEvent(
      new CustomEvent('dw-infinite-list-change', {
        detail: this._value,
      })
    )
  }

  onAdd = (newValue) => {
    const index = this._value.length
    this._value = [...this._value, newValue]
    this.shadowRoot.querySelector('#new').value = ''
    const newInput = createNewInput(newValue, index)
    newInput.setAttribute('value', newValue)
    this.shadowRoot
      .querySelector('#list')
      .insertBefore(newInput, this.shadowRoot.querySelector('#new'))
    newInput.setSelectionRange(newInput.value.length, newInput.value.length)
    newInput.addEventListener('keyup', (event) => {
      this.onUpdate(event, index)
    })
    newInput.focus()
    this.dispatchEvent(
      new CustomEvent('dw-infinite-list-change', {
        detail: this._value,
      })
    )
  }

  connectedCallback() {
    this.render()
    this.shadowRoot
      .querySelector('#new')
      .addEventListener('keyup', (event) => this.onAdd(event.target.value))
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('#new')
      .removeEventListener('keyup', (event) => this.onAdd(event.target.value))
    this._value.forEach((value, index) => {
      const element = document.querySelector(`#item-${index}`)
      element.removeEventListener('keyup', (event) =>
        this.onUpdate(event, index)
      )
    })
  }

  render() {
    this.shadowRoot.innerHTML = template
    this.renderList()
  }
}

customElements.define('dw-infinite-list', InfiniteList)
