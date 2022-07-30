import { expect } from '@esm-bundle/chai'
import { fixtureSync, html, waitUntil } from '@open-wc/testing'
import '../../../src/components/section-header/section-header'

it('Given I have a character sheet header when passed a slot value then the slot value should be put inside of an element with a black background and white font.', async () => {
  const el = await fixture(
    html`<dw-section-header>Hello World!</dw-section-header>`
  )
  await waitUntil(() => el.shadowRoot != null, 'shadowRoot was not created.')
  expect(el.shadowRoot.querySelector('h1').innerHTML).to.be.eq('Hello World!')
  expect(el.shadowRoot.querySelector('h1').classList.contains('bg-black')).to.be
    .true
  expect(el.shadowRoot.querySelector('h1').classList.contains('text-white')).to
    .be.true
})
