import { html } from '../../../utility/html-template'

export default html`<dw-vertical-selection
  id="alignment"
  title="alignment"
  options='[
    {"name": "chaotic", "description": "Destroy a symbol of civilization."},
    {"name": "good", "description": "Help something or someone grow."},
    {"name": "neutral", "description": "Eliminate an unnatural menace."}
  ]'
></dw-vertical-selection>
`