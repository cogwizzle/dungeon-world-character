import { html } from '../../../utility/html-template'

export default html`<style>
    .coin {
      top: -0.4rem;
    }
  </style>
  <div class="flex flex-col relative my-2">
    <dw-section-header>
      <input
        type="text"
        id="coin"
        name="coin"
        class="absolute w-10 h-10 text-center rounded-full shadow-md coin text-black border-2 border-black outline-none"
      />
      <span class="pl-12">COIN</span>
    </dw-section-header>
  </div> `
