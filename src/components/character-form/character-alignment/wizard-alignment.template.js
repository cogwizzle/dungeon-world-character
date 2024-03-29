import { html } from '../../../utility/html-template'

export default html`<dw-vertical-selection
  id="alignment"
  title="alignment"
  options='[
    {"name": "good", "description": "Use magic to directly aid another."},
    {"name": "neutral", "description": "Discover something about a magical mystery."},
    {"name": "evil", "description": "Use magic to cause terror and fear."}
  ]'
></dw-vertical-selection>
`