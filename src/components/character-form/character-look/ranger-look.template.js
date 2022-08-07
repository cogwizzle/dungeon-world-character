import { html } from '../../../utility/html-template'

export default html`<div class="flex flex-col">
  <dw-section-header>LOOK</dw-section-header>
  <div class="text-xs">
    <div class="px-2 text-xs italic">
      Choose one for each, or write your own:
    </div>
    <dw-character-look-group
      title="body"
      options='["lithe", "wild", "sharp"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="eyes"
      options='["wild", "sharp", "animal"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="hair"
      options='["wild", "bald", "hooded"]'
    ></dw-character-look-group>
    <dw-character-look-group
      title="clothes"
      options='["cape", "camouflage", "traveling clothes"]'
    ></dw-character-look-group>
  </div>
</div> `
