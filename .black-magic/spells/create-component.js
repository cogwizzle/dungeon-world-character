const fs = require('fs')
const { pascalCase, paramCase, sentenceCase } = require('change-case')

module.exports = (spellbook) => {
  spellbook.createComponent = (name, directory) => {
    const componentFile = paramCase(name)
    const componentName = pascalCase(name)
    const javascriptContent = `import template from './${componentFile}.html'

export class ${componentName} extends HTMLElement {
  constructor() {
    super()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, oldValue, newValue) {}

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = template
  }
}
`
    const htmlContent = `<div>${sentenceCase(name)}</div>
`
    fs.mkdirSync(`${directory}/${componentFile}`)
    fs.writeFileSync(
      `${directory}/${componentFile}/${componentFile}.js`,
      javascriptContent
    )
    fs.writeFileSync(
      `${directory}/${componentFile}/${componentFile}.html`,
      htmlContent
    )
    console.info(
      'Created component',
      `${directory}/${componentFile}/${componentFile}.js, ${directory}/${componentFile}/${componentFile}.html`
    )
  }
}
