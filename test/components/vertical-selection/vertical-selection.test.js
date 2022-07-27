import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
import '../../../src/components/vertical-selection/vertical-selection'

it('Given I have a vertical selection component when the vertical selection component has options then a list of the options should be rendered with a radio button to select an option and an input field to put an other value in.', async () => {
  const el = await fixture(html`<dw-vertical-selection
    id="test"
    title="test"
    options='[
      { "name": "one", "description": "One" },
      { "name": "two", "description": "Two" }
    ]'
  ></dw-vertical-selection>`)

  await waitUntil(() => el.shadowRoot != null, 'shadowRoot was not created.')
  await waitUntil(
    () => !!el.shadowRoot.querySelector('#options'),
    'Options was not rendered.'
  )
  expect(el.shadowRoot.querySelector('#options').children.length).to.be.eq(2)
  expect(el.shadowRoot.querySelector('#test-other')).to.exist
})
