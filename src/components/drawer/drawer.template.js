import { html } from '../../utility/html-template'

export default html`<style>
    .banner .arrow-up {
      width: 100%;
      height: 20px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .banner .arrow-down {
      width: 100%;
      height: 20px;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transform: rotate(180deg);
    }

    .banner #class-name {
      transform: rotate(-90deg);
    }
  </style>
  <div
    class="w-10 lg:w-36 shadow-lg lg:shadow-none h-full overflow-hidden lg:pl-2"
  >
    <div
      id="drawer"
      class="w-10 lg:w-36 bg-black fixed flex flex-col text-white z-20 h-full pt-4"
    >
      <button
        id="drawer__toggle"
        type="button"
        class="lg:hidden visible text-2xl"
      >
        ≡
      </button>
      <div
        id="content"
        class="flex-1 flex flex-col relative invisible lg:visible"
      >
        <label for="character-class">Class</label>
        <input
          type="text"
          class="h-10 text-black outline-none border-none mx-2"
          id="character-class"
          list="class-list"
        />
        <datalist id="class-list" for="character-class"></datalist>
        <button id="save" type="button pionter" class="text-left mx-2">
          Save
        </button>
        <button id="load" type="button pointer" class="text-left mx-2">
          Load
        </button>
        <button id="reset" type="button pointer" class="text-left mx-2">
          Reset
        </button>
        <a
          id="character-form-link"
          href="#character-form"
          class="text-left mx-2"
        >
          Character Sheet
        </a>
        <a
          id="player-moves-link"
          href="#player-moves"
          class="text-left mx-2 hidden"
          >Player Moves</a
        >
        <input
          id="load-character-file"
          type="file"
          class="hidden"
          accept="application/JSON"
        />
      </div>
      <div
        class="banner hidden lg:flex flex-col lg:bg-slate-200 border-r-2 border-black lg:border-r-0"
      >
        <div class="arrow-down bg-black"></div>
        <div class="lg:bg-slate-200 h-64 relative pt-36">
          <div
            id="class-name"
            class="text-6xl text-bold text-black justify-self-center self-center flex w-full"
          ></div>
        </div>
        <div class="arrow-up bg-black"></div>
      </div>
      <div
        id="dungeon-world"
        class="text-6xl text-center font-bold invisible lg:visible"
      >
        DW
      </div>
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" /> `
