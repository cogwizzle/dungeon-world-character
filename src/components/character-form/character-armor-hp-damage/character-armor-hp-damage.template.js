import { html } from '../../../utility/html-template'

export default html`<div class="flex flex-col">
  <dw-labeled-decorated-input for="armor" icon-class="shield">
    ARMOR
    <input
      slot="input"
      type="text"
      id="armor"
      name="armor"
      class="text-black bg-white w-7 z-10 mr-10 outline-none text-center disabled:overflow-visible"
    />
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="hp" icon-class="heart">
    HP
    <span slot="input" class="z-10">
      <input
        type="text"
        id="hit-points"
        name="hit-points"
        class="text-black bg-white w-6 outline-none text-center border-r-2 border-black"
      />
      <input
        type="text"
        id="max-hit-points"
        name="max-hit-points"
        class="text-black bg-white w-6 mr-7 outline-none text-center"
      />
    </span>
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="damage" icon-class="damage-dice">
    DAMAGE
    <span id="damage-input" slot="input" class="z-10 mr-10 text-black"></span>
  </dw-labeled-decorated-input>
</div> `
