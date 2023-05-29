import template from './infinite-list.template.js'

const createNewInput = (value, index) => {
  const templateElement = document.createElement('template')
  const className =
    'bg-transparent border-b-2 border-b-black outline-none w-full'
  templateElement.innerHTML = `<textarea rows="1" type="text" id="item-${index}" class="${className}">${value}</textarea>`
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
    this.renderList(this._value, value)
    this._value = value
  }

  diff(oldValue, newValue) {
    const [added, modified] = newValue.reduce(
      ([added, modified], value, index) => {
        if (index < oldValue.length && oldValue[index] !== value)
          modified.push(index)
        if (index >= oldValue.length) added.push(value)
        return [added, modified]
      },
      [[], []]
    )
    const removed = oldValue.reduce((removed, _, index) => {
      if (!newValue[index]) removed.push(index)
      return removed
    }, [])
    return { removed, added, modified }
  }

  renderList(oldValue = [], newValue = []) {
    const { removed, added, modified } = this.diff(oldValue, newValue)
    const listElement = this.shadowRoot.querySelector('#list')
    removed.forEach((index) => {
      const element = this.shadowRoot.querySelector(`#item-${index}`)
      if (element) {
        element.removeEventListener('keyup', (event) =>
          this.onUpdate(event, index)
        )
        element.remove()
      }
    })
    modified.forEach((index) => {
      const element = this.shadowRoot.querySelector(`#item-${index}`)
      if (element) {
        element.value = newValue[index]
      }
    })
    added.forEach((value, index) => {
      const element = createNewInput(value, oldValue.length + index)
      element.addEventListener('keyup', (event) => this.onUpdate(event, index))
      listElement.insertBefore(element, this.shadowRoot.querySelector('#new'))
    })
  }

  onUpdate = async (event, index) => {
    const newValue = event.target.value
    this._value[index] = newValue
    if (newValue === '') {
      const oldValue = this._value
      this._value = this._value.filter((_, i) => i !== index)
      this.renderList(oldValue, this._value)
    }
    this.dispatchEvent(
      new CustomEvent('dw-infinite-list-change', {
        detail: this._value,
      })
    )
  }

  onAdd = (newValue) => {
    if (newValue === '') return
    const existingValue = this._value || []
    const index = existingValue.length
    this._value = [...existingValue, newValue]
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
    this.renderList([], this._value)
  }
}

customElements.define('dw-infinite-list', InfiniteList)
