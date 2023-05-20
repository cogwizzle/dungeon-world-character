import { html } from '../../utility/html-template'

export default html`<form
  id="character-form"
  class="my-4 overflow-x-hidden lg:overflow-x-auto"
>
  <div class="grid grid-cols-2 xl:grid-cols-5 my-1">
    <div
      class="flex flex-row col-span-2 lg:col-span-3 bg-white my-1 lg:my-0 items-center"
    >
      <label for="character-name">NAME</label>
      <input
        class="text-input"
        id="character-name"
        name="character-name"
        type="text"
      />
    </div>
    <div
      class="flex flex-row my-2 col-span-2 md:col-span-1 lg:my-0 lg:justify-end items-center"
    >
      <label for="level">LEVEL</label>
      <input
        class="text-input bg-white w-10 grow-0 mx-2 text-right px-2"
        id="level"
        name="level"
        type="text"
      />
    </div>
    <div class="flex flex-row bg-white my-2 col-span-2 md:col-span-1 lg:py-0">
      <label for="xp">XP</label>
      <input
        class="text-input grow-0 lg:grow"
        id="xp"
        name="xp"
        type="number"
      />
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
    <div class="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2 mt-5">
      <dw-character-look-strategy
        class="min-h-[33rem] xl:min-h-[16.5rem]"
      ></dw-character-look-strategy>
      <dw-character-armor-hp-damage></dw-character-armor-hp-damage>
      <div class="col-span-1 lg:col-span-2 gap-2">
        <dw-character-attributes
          class="md:col-span-2"
        ></dw-character-attributes>
      </div>
      <div class="col-span-1 lg:col-span-2 gap-2">
        <dw-character-moves></dw-character-moves>
      </div>
    </div>
    <div class="flex flex-col grid-cols-1 mt-5 gap-2">
      <dw-character-alignment
        class="min-h-[10.625rem]"
      ></dw-character-alignment>
      <dw-character-bonds></dw-character-bonds>
      <dw-character-race class="min-h-[10.125rem]"></dw-character-race>
      <dw-character-coin></dw-character-coin>
      <dw-character-gear></dw-character-gear>
      <dw-notes></dw-notes>
    </div>
  </div>
</form>
`
