import { expect } from '@esm-bundle/chai'
import { fixture, html, waitUntil } from '@open-wc/testing'
import '../../../src/components/player-moves/player-moves'

it(`Given the player moves component is rendered
When the component is rendered
Then it should have a section for each of the basic and advanced moves.`, async () => {
  const el = await fixture(html`<dw-player-moves></dw-player-moves>`)
  const shadowRoot = el.shadowRoot
  await waitUntil(() => shadowRoot != null, 'shadowRoot was not created.')
  if (!shadowRoot) throw Error('shadowRoot was not created.')
  const hackAndSlash = shadowRoot.querySelector('#hack-and-slash')
  const defyDanger = shadowRoot.querySelector('#defy-danger')
  const discernRealities = shadowRoot.querySelector('#discern-realities')
  const volley = shadowRoot.querySelector('#volley')
  const defend = shadowRoot.querySelector('#defend')
  const spoutLore = shadowRoot.querySelector('#spout-lore')
  const parley = shadowRoot.querySelector('#parley')
  const aidOrInterference = shadowRoot.querySelector('#aid-or-interfere')
  const lastBreath = shadowRoot.querySelector('#last-breath')
  const undertakeAPerilousJourney = shadowRoot.querySelector(
    '#undertake-a-perilous-journey'
  )
  const endOfSession = shadowRoot.querySelector('#end-of-session')
  const encumbrance = shadowRoot.querySelector('#encumbrance')
  const recover = shadowRoot.querySelector('#recover')
  const levelUp = shadowRoot.querySelector('#level-up')
  const takeWatch = shadowRoot.querySelector('#take-watch')
  const carouse = shadowRoot.querySelector('#carouse')
  const outstanding = shadowRoot.querySelector('#outstanding')
  const bolster = shadowRoot.querySelector('#bolster')
  const recruit = shadowRoot.querySelector('#recruit')
  const supply = shadowRoot.querySelector('#supply')

  expect(hackAndSlash).to.exist
  expect(defyDanger).to.exist
  expect(discernRealities).to.exist
  expect(volley).to.exist
  expect(defend).to.exist
  expect(spoutLore).to.exist
  expect(parley).to.exist
  expect(aidOrInterference).to.exist
  expect(lastBreath).to.exist
  expect(undertakeAPerilousJourney).to.exist
  expect(endOfSession).to.exist
  expect(encumbrance).to.exist
  expect(recover).to.exist
  expect(levelUp).to.exist
  expect(takeWatch).to.exist
  expect(carouse).to.exist
  expect(outstanding).to.exist
  expect(bolster).to.exist
  expect(recruit).to.exist
  expect(supply).to.exist
})
