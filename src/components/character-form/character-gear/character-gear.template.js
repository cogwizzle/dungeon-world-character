import { html } from '../../../utility/html-template'

export default html`<div>
  <dw-section-header>
    <div class="flex flex-row">
      <span class="flex-1">GEAR</span>
      <div class="text-black relative flex flex-row bg-white">
        <input
          type="text"
          id="load"
          name="load"
          class="absolute right-10 w-10 text-center rounded-l-full shadow-md gear text-black border-r-2 border-black outline-none"
        />
        <input
          type="text"
          id="max-load"
          name="max-load"
          class="absolute right-0 text-center w-10 rounded-r-full shadow-md max-gear text-black border-black outline-none"
        />
      </div>
    </div>
  </dw-section-header>
  <dw-infinite-list id="gear-list"></dw-infinite-list>
</div> `
