import { html } from '../../utility/html-template'

export default html`<div class="flex flex-col">
  <div class="flex flex-row">
    <input type="checkbox" />
    <label></label>
  </div>
  <div class="flex flex-col">
    <slot></slot>
  </div>
</div> `
