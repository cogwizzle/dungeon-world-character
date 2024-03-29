import { html } from '../../../../utility/html-template'

export default html`<label
    id="labeled-decorate-input__label"
    for="labeled-decorate-input__input"
    class="bg-black text-white flex flex-row relative mb-16 py-1"
  >
    <slot></slot>
    <div
      id="labeled-decorated-input__icon"
      class="flex flex-1 grow justify-end"
    >
      <slot name="input"></slot>
    </div>
  </label>
  <link rel="stylesheet" href="tailwind.css" /> `
