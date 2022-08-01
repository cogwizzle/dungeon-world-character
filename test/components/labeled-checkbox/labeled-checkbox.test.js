import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
import '../../../src/components/labeled-checkbox/labeled-checkbox'

it('Given I have a labeled checkbox component with a name and a key when I render the component then it should have a label with the label text in it and a checkbox input that corresponds to that label.', async () => {
  const el = await fixture(html`<dw-labeled-checkbox
    key="name"
    label="Name"
  ></dw-labeled-checkbox>`)
  await waitUntil(() => el.querySelector('input#name'))
  expect(el.querySelector('input#name')).to.exist
  expect(el.querySelector('label[for="name"]')).to.exist
  expect(el.querySelector('label[for="name"]').innerHTML).to.equal('Name')
})
