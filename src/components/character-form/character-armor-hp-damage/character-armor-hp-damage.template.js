import { html } from '../../../utility/html-template'

export default html`<div class="flex flex-col">
  <dw-labeled-decorated-input for="armor" icon-class="shield">
    ARMOR ⛨
    <input
      slot="input"
      type="text"
      id="armor"
      name="armor"
      class="text-black w-10 text-right ontline-none px-2"
    />
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="hp" icon-class="heart">
    HP 🤍
    <span slot="input" class="z-10 flex flex-row bg-white text-black">
      <input
        type="text"
        id="hit-points"
        name="hit-points"
        class="text-black w-10 text-right text-input"
      />
      /
      <input
        type="text"
        id="max-hit-points"
        name="max-hit-points"
        class="text-black w-10 text-left text-input"
      />
    </span>
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="damage" icon-class="damage-dice">
    DAMAGE ⚔
    <span id="damage-input" slot="input" class="text-black bg-white px-2"></span>
  </dw-labeled-decorated-input>
</div>`
