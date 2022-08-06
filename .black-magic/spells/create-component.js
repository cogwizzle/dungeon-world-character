const { createSpell } = require('black-magic')
const fs = require('fs')
const { pascalCase, paramCase, sentenceCase } = require('change-case')

module.exports = (spellbook) => {
  createSpell({
    spellbook,
    spellPath: 'create.component',
    /**
     * Create a new component file by name, and file path.
     * @param {string} name Component name.
     * @param {string} directory Component directory.
     * @returns {void}
     */
    spell: (name, directory) => {
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
    },
    /**
     * Log help message for create.component spell.
     * @returns {void}
     */
    help: () => {
      console.group('Create component')
      console.log('Description: Creates a new component.')
      console.log('Params:')
      console.log('  - name: The name of the component.')
      console.log('  - directory: The directory to create the component in.')
      console.groupEnd()
    },
  })
}
