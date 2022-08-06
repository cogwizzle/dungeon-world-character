const { createSpell } = require('black-magic')
const fs = require('fs')
const path = require('path')

const newFileContent = `import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
// Add import here for tested file.

it('Given x when y then z', async () => {

})
`

function writeFileSyncRecursive(filename, content = '') {
  fs.mkdirSync(path.dirname(filename), { recursive: true })
  fs.writeFileSync(filename, content)
}

module.exports = (spellbook) => {
  createSpell({
    spellbook,
    spellPath: 'create.test',
    /**
     * Create a new test file by file path.
     * @param {string} filepath Filepath to test.
     * @returns {void}
     */
    spell: (filepath) => {
      const newFilepath = filepath
        .replace('src', 'test')
        .replace('js', 'test.js')
      writeFileSyncRecursive(newFilepath, newFileContent)
    },
    /**
     * Log help message for create.test spell.
     * @returns {void}
     */
    help: () => {
      console.group('Create test')
      console.log('Description: Creates a new test.')
      console.log('Params:')
      console.log('  - filepath: The filepath of the file to be tested.')
      console.groupEnd()
    },
  })
}
