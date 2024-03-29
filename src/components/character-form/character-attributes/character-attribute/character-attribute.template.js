import { html } from '../../../../utility/html-template'

export default html`<style>
    .w {
      width: 4rem;
    }

    .h {
      height: 4rem;
    }
  </style>
  <div class="flex flex-col border-2 border-black mb-8">
    <div class="flex flex-row py-2 px-2 bg-white">
      <label id="score-label">
        <slot></slot>
      </label>
      <input
        type="number"
        name="score"
        class="w-full mx-2 bg-transparent outline-none border-none"
      />
    </div>
    <div class="flex flex-row bg-black text-white px-2 py-2">
      <div
        class="flex flex-col bg-white rounded-full w h text-black justify-center items-center absolute shadow-md"
      >
        <label id="modifier-label" for="modifier">
          <slot name="abbreviation"></slot>
        </label>
        <div id="modifier"></div>
      </div>
      <div class="flex justify-end items-end w-full">
        <label id="debuff-label" for="debuff">
          <slot name="debuff"></slot>
        </label>
        <input type="checkbox" id="debuff" name="debuff" />
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" /> `
