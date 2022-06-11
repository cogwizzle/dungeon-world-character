const initCap = (value) =>
  value
    .toLowerCase()
    .replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g, (m) => m.toUpperCase())

const template = ({ title, options }) =>
  `<div class="flex flex-col xl:flex-row xl:items-center">
<label for="body" class="font-bold">${title.toUpperCase()}</label>
${options
  .map(
    (option) =>
      `<div class="flex-row ml-2 xl:ml-0">
      <input type="radio" name="${title}" id="${title}-${option}" value="${option}" />
      <label class="text-sm" for="${title}-${option}">${initCap(option).replace(
        '-',
        ' '
      )}</label>
    </div>`
  )
  .join('\n')}
<div class="flex-row ml-2 xl:ml-0">
  <input
    type="text"
    name="body"
    id="${title}-other"
    value=""
    class="bg-transparent border-b-2 border-b-black outline-none w-14"
  />
</div>
</div>`

export class CharacterLookGroup extends HTMLElement {
  _options = []
  _title = ''
  constructor() {
    super()
  }

  static get observedAttributes() {
    return ['options', 'title']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'options':
        this._options = JSON.parse(newValue) || []
        this.render()
        break
      case 'title':
        this._title = newValue || ''
        this.render()
        break
      default:
        break
    }
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = template({
      title: this._title,
      options: this._options,
    })
  }
}

customElements.define('dw-character-look-group', CharacterLookGroup)
