import { html } from '../../../utility/html-template'

export default html`<div class="flex flex-col">
  <dw-section-header>LOOK</dw-section-header>
  <div class="text-xs">
    <div class="px-2 text-xs italic">
      Choose one for each, or write your own:
    </div>
    <dw-character-look-group
      title="body"
      options='["fit", "well-fed", "thin"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="eyes"
      options='["knowing", "fiery", "joyous"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="hair"
      options='["fancy", "wild", "stylish cap"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="clothes"
      options='["finery", "traveling", "poor"]'
    ></dw-character-look-group>
  </div>
</div> `
