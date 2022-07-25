import { expect } from '@esm-bundle/chai'
import { initCap } from '../../src/utility/init-cap'

it('Given I pass a string to the init cap function when the function responds then the initial letter in the string should be capitalized.', () => {
  const value = 'hello world'
  const result = initCap(value)
  expect(result).to.equal('Hello World')
})
