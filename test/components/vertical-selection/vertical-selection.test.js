import { expect } from '@esm-bundle/chai'
import { elementUpdated, fixture, html, waitUntil } from '@open-wc/testing'
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

it('Given I have a vertical selection component when I select the radio button then other radio buttons should be deselected', async () => {
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
  let updateValue
  el.addEventListener('dw-change', (event) => {
    updateValue = event.detail.value
  })
  const one = el.shadowRoot.querySelector('#test-one')
  one.click()
  await waitUntil(
    () => updateValue === one.value,
    'Event listener never was not fired.'
  )
  await waitUntil(
    () => one.checked,
    'Radio button for first child was not checked.'
  )
  const two = el.shadowRoot.querySelector('#test-two')
  two.click()
  await waitUntil(
    () => updateValue === two.value,
    'Event listener never was not fired.'
  )
  await waitUntil(
    () => !one.checked && two.checked,
    'Radio button one was not unchecked or two was not checked.'
  )
  expect(updateValue).to.be.eq(two.value)
})

it('Given I have a vertical selection component when I select a radio button then the text input value should be cleared', async () => {
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
  let updateValue
  el.addEventListener('dw-change', (event) => {
    updateValue = event.detail.value
  })
  const other = el.shadowRoot.querySelector('#test-other')
  other.value = 'test'
  other.dispatchEvent(new Event('change'))
  expect(updateValue).to.be.eq('test')
  const one = el.shadowRoot.querySelector('#test-one')
  one.click()

  await waitUntil(
    () => updateValue === one.value,
    'Event listener never was not fired.'
  )
  await waitUntil(
    () => one.checked,
    'Radio button for first child was not checked.'
  )
  await waitUntil(() => other.value === '', 'Text input value was not cleared.')
  expect(updateValue).to.be.eq(one.value)
})

it('Given I have a vertical selection component when change the other input textbox and change focus then the radio buttons should be deselected', async () => {
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
  let updateValue
  el.addEventListener('dw-change', (event) => {
    updateValue = event.detail.value
  })
  const one = el.shadowRoot.querySelector('#test-one')
  one.click()
  await waitUntil(
    () => updateValue === one.value,
    'Event listener never was not fired.'
  )
  await waitUntil(
    () => one.checked,
    'Radio button for first child was not checked.'
  )
  expect(updateValue).to.be.eq(one.value)
  const other = el.shadowRoot.querySelector('#test-other')
  other.value = 'test'
  other.dispatchEvent(new Event('change'))
  other.dispatchEvent(new Event('blur'))
  await waitUntil(
    () => updateValue === 'test',
    'Event listener never was not fired.'
  )

  expect(updateValue).to.be.eq('test')
})
