const { createSpell } = require('black-magic')
const fs = require('fs')
const path = require('path')

/**
 * Create file content for a new test.
 * @param {string} [testedModuleName] The name of the module to be tested.
 * @param {string[]} [requirementDescriptions] The descriptions of the requirements.
 * @returns {string} The file content.
 */
const createNewTestFileTemplate = (
  testedModuleName = 'Module being tested placeholder.',
  requirementDescriptions = ['Given x when y then z.']
) => `import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
// Add import here for tested file.

describe('${testedModuleName}', () => {
  ${requirementDescriptions
    .map(
      (description) => `
  it('${description}', async () => {
    // Add test code here.
  })`
    )
    .join('\n')}
`

function writeFileSyncRecursive(filename, content = '') {
  fs.mkdirSync(path.dirname(filename), { recursive: true })
  fs.writeFileSync(filename, content)
}

/**
 * @typedef CreateTestSpellArgs
 * @property {string} filepath The filepath of the file to be tested.
 * @property {string} [testedModuleName] Name of the tested module.
 * @property {string[]} [requirementDescriptions] Descriptions of the requirements.
 */

module.exports = (spellbook) => {
  createSpell({
    spellbook,
    spellPath: 'create.test',
    /**
     * Create a new test file by file path.
     * @param {CreateTestSpellArgs} args
     * @returns {void}
     */
    spell: ({ filepath, testedModuleName, requirementDescriptions }) => {
      const newFilepath = filepath
        .replace('src', 'test')
        .replace('js', 'test.js')
      writeFileSyncRecursive(
        newFilepath,
        createNewTestFileTemplate(testedModuleName, requirementDescriptions)
      )
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
