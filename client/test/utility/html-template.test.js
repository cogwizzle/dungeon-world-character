import { expect } from '@esm-bundle/chai'
import { html } from '../../src/utility/html-template.js'

it('Give a template string with variables is passed to the html template utility when it returns the results of the template string then it should act as if it would without the html tag.', () => {
  const name = 'World'
  const template = html`<h1>Hello ${name}!</h1>`
  expect(template).to.equal('<h1>Hello World!</h1>')
})
