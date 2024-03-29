import { html } from '../../../utility/html-template'

export default html`<dw-vertical-selection
  id="alignment"
  title="alignment"
  options='[
    {"name": "chaotic", "description": "Leap into danger without a plan."},
    {"name": "neutral", "description": "Avoid detection or infiltrate a location."},
    {"name": "evil", "description": "Shift danger or blame from yourself to someone else."}
  ]'
></dw-vertical-selection> `
