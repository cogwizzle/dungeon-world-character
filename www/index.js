import"./chunk-3NIBINFW.js";import{a}from"./chunk-YJ2DKIZS.js";var O=`<form
  id="character-form"
  class="mx-4 my-4 sticky lg:relative overflow-x-hidden lg:overflow-x-auto"
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
        class="text-input bg-white rounded-full pl-1.5 mr-1 w-7 h-7 grow-0"
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
      <dw-character-look
        class="min-h-[33rem] xl:min-h-[16.5rem]"
      ></dw-character-look>
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
    </div>
  </div>
</form>
`;var p=class{constructor(){a(this,"_observers");a(this,"_state");this._observers=[],this._state=void 0}subscribe(s){this._observers.push(s)}unsubscribe(s){this._observers=this._observers.filter(e=>e!==s)}notify(){this._observers.forEach(s=>s(this._state))}};var g=class extends p{constructor(){super();let s=JSON.parse(localStorage.getItem("character"))||{};this._state={...s}}save(){return this._state}loadCharacter(s){this._state=s,this.notify()}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(s){super.subscribe(s),s(this._state)}set characterName(s){this._state={...this._state,characterName:s},this.notify()}set level(s){this._state={...this._state,level:s},this.notify()}set xp(s){this._state={...this._state,xp:s},this.notify()}set look(s){this._state={...this._state,look:s},this.notify()}set armor(s){this._state={...this._state,armor:s},this.notify()}set hitPoints(s){this._state={...this._state,hitPoints:s},this.notify()}set maxHitPoints(s){this._state={...this._state,maxHitPoints:s},this.notify()}set alignment(s){this._state={...this._state,alignment:s},this.notify()}set strength(s){this._state={...this._state,strength:s},this.notify()}set weak(s){this._state={...this._state,weak:s},this.notify()}set dexterity(s){this._state={...this._state,dexterity:s},this.notify()}set shaky(s){this._state={...this._state,shaky:s},this.notify()}set constitution(s){this._state={...this._state,constitution:s},this.notify()}set sick(s){this._state={...this._state,sick:s},this.notify()}set intelligence(s){this._state={...this._state,intelligence:s},this.notify()}set stunned(s){this._state={...this._state,stunned:s},this.notify()}set wisdom(s){this._state={...this._state,wisdom:s},this.notify()}set confused(s){this._state={...this._state,confused:s},this.notify()}set charisma(s){this._state={...this._state,charisma:s},this.notify()}set scarred(s){this._state={...this._state,scarred:s},this.notify()}set bonds(s){this._state={...this._state,bonds:s.filter(e=>e.trim()!=="")},this.notify()}set race(s){this._state={...this._state,race:s},this.notify()}set coin(s){this._state={...this._state,coin:s},this.notify()}set gear(s){this._state={...this._state,gear:s.filter(e=>e.trim()!=="")},this.notify()}set load(s){this._state={...this._state,load:s},this.notify()}set maxLoad(s){this._state={...this._state,maxLoad:s},this.notify()}set moves(s){this._state={...this._state,moves:s},this.notify()}set characterClass(s){this._state={...this._state,characterClass:s,look:void 0,moves:void 0,race:void 0,alignment:void 0},this.notify()}},Y=new g,r=Y;var c={Fighter:"Fighter",Ranger:"Ranger"};var v=n=>n.toLowerCase().replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g,s=>s.toUpperCase());var b=(n,...s)=>{let e="";return n.forEach((t,i)=>{e+=t+(s[i]||"")}),e};var Z=({title:n,options:s})=>b`<div class="flex flex-col xl:flex-row xl:items-center">
    <label for="body" class="font-bold">${n.toUpperCase()}</label>
    ${s.map(e=>b`<div class="flex-row ml-2 xl:ml-0">
            <input
              type="radio"
              name="${n}"
              id="${n}-${e}"
              value="${e}"
            />
            <label class="text-sm" for="${n}-${e}"
              >${v(e).replace("-"," ")}</label
            >
          </div>`).join(`
`)}
    <div class="flex-row ml-2 xl:ml-0">
      <input
        type="text"
        name="body"
        id="${n}-other"
        value=""
        class="bg-transparent border-b-2 border-b-black outline-none w-14"
      />
    </div>
  </div>`,w=class extends HTMLElement{constructor(){super();a(this,"_options",[]);a(this,"_title","")}static get observedAttributes(){return["options","title"]}attributeChangedCallback(e,t,i){switch(e){case"options":this._options=JSON.parse(i)||[],this.render();break;case"title":this._title=i||"",this.render();break;default:break}}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.innerHTML=Z({title:this._title,options:this._options})}};customElements.define("dw-character-look-group",w);var y=class extends HTMLElement{constructor(){super();a(this,"_characterClass");a(this,"onChange",e=>{let{name:t,value:i}=e.target;this[`_${t}`]=i,this.emit()});a(this,"hydrate",async e=>{let t=e.look||{};this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.groups.forEach(o=>{this[`_${o}`]=t[o]||"";let l=[...this.querySelectorAll(`[name="${o}"][type="radio"]`)];l.forEach(h=>{h.checked=h.value===t[o]});let u=this.querySelector(`#${o}-other`);u.value=l.every(h=>h.value!==t[o])&&t[o]?t[o]:""})})}get groups(){switch(this._characterClass){case c.Fighter:return["body","eyes","hair","skin"];case c.Ranger:return["body","eyes","hair","clothes"];default:return[]}}emit(){switch(this._characterClass){case c.Fighter:r.look={body:this._body,eyes:this._eyes,hair:this._hair,skin:this._skin};break;case c.Ranger:r.look={body:this._body,eyes:this._eyes,hair:this._hair,clothes:this._clothes};default:break}}onMount(){r.subscribe(this.hydrate),this.groups.reduce((t,i)=>[...t,...this.querySelectorAll(`[name="${i}"]`)],[]).forEach(t=>t.addEventListener("change",this.onChange))}beforeUnmount(){r.unsubscribe(this.hydrate),this.groups.reduce((t,i)=>[...t,...this.querySelectorAll(`[name="${i}"]`)],[]).forEach(t=>t.removeEventListener("change",this.onChange))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case c.Fighter:let e=await import("./fighter-look-VDSQ5JCS.js");this.innerHTML=e.default;break;case c.Ranger:let t=await import("./ranger-look-SO67EGNR.js");this.innerHTML=t.default;break;default:break}}};customElements.define("dw-character-look",y);var V=({title:n,options:s})=>b`<div class="flex flex-col">
    <label for="${n}" class="bg-black text-white flex flex-row relative">
      ${n.toUpperCase()}
    </label>
    ${s.map(e=>b`<div class="flex flex-row items-center">
          <input
            type="radio"
            name="${n}"
            id="${n}-${e.name}"
            class="mx-2"
            value="${e.name}"
          />
          <label for="${n}-${e.name}" class="flex flex-col">
            <div>${v(e.name)}</div>
            <div class="text-xs italic">${e.description}</div>
          </label>
        </div>`).join(`
`)}
    <div class="flex flex-row items-center">
      <input
        type="text"
        name="${n}"
        id="${n}-other"
        class="ml-9 bg-transparent outline-none border-b-2 border-black w-full"
      />
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" />`,_=class extends HTMLElement{constructor(){super();a(this,"_title","");a(this,"_options",[]);a(this,"_value","");a(this,"updateValues",()=>{let e=[...this.shadowRoot.querySelectorAll(`[name="${this._title}"][type="radio"]`)];e.forEach(i=>{i.checked=i.value===this._value});let t=this.shadowRoot.querySelector(`#${this._title}-other`);t.value=e.every(i=>i.value!==this._value)&&this._value&&this._value||""});this.attachShadow({mode:"open"})}static get observedAttributes(){return["options","title","value"]}attributeChangedCallback(e,t,i){switch(e){case"options":this._options=JSON.parse(i)||[],this.rerender();break;case"title":this._title=i||"",this.rerender();break;case"value":this._value=i&&i!=="undefined"?i:"",this.updateValues();break;default:break}}onChange(e){let t=e.composedPath()[0].value;this.dispatchEvent(new CustomEvent("dw-change",{detail:{value:t}}))}onMount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.addEventListener("change",this.onChange.bind(this))})}beforeUnmount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.removeEventListener("change",this.onChange.bind(this))})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}rerender(){this.beforeUnmount(),this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=V({title:this._title,options:this._options}),this.updateValues()}};customElements.define("dw-vertical-selection",_);var x=class extends HTMLElement{constructor(){super();a(this,"_characterClass");a(this,"onAlignmentChange",e=>{r.alignment=e.detail.value});a(this,"hydrate",async e=>{this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.querySelector("#alignment")?.setAttribute("value",e.alignment)})}onMount(){r.subscribe(this.hydrate),this.querySelector("#alignment")?.addEventListener("dw-change",this.onAlignmentChange)}beforeUnmount(){r.unsubscribe(this.hydrate),this.querySelector("#alignment")?.removeEventListener("dw-change",this.onAlignmentChange)}connectedCallback(){this.render().then(()=>this.onMount())}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case c.Fighter:let e=await import("./fighter-alignment-DVQX3AGN.js");this.innerHTML=e.default;break;case c.Ranger:let t=await import("./ranger-alignment-WSCT2KBM.js");this.innerHTML=t.default;break;default:break}}};customElements.define("dw-character-alignment",x);var F=`<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">\r
  <dw-character-attribute id="strength">\r
    Strength\r
    <span slot="abbreviation">STR</span>\r
    <span slot="debuff">Weak -1</span>\r
  </dw-character-attribute>\r
  <dw-character-attribute id="dexterity">\r
    Dexterity\r
    <span slot="abbreviation">DEX</span>\r
    <span slot="debuff">Shaky -1</span>\r
  </dw-character-attribute>\r
  <dw-character-attribute id="constitution">\r
    Constitution\r
    <span slot="abbreviation">CON</span>\r
    <span slot="debuff">Sick -1</span>\r
  </dw-character-attribute>\r
  <dw-character-attribute id="intelligence">\r
    Intelligence\r
    <span slot="abbreviation">INT</span>\r
    <span slot="debuff">Stunned -1</span>\r
  </dw-character-attribute>\r
  <dw-character-attribute id="wisdom">\r
    Wisdom\r
    <span slot="abbreviation">WIS</span>\r
    <span slot="debuff">Confused -1</span>\r
  </dw-character-attribute>\r
  <dw-character-attribute id="charisma">\r
    Charisma\r
    <span slot="abbreviation">CHA</span>\r
    <span slot="debuff">Scarred -1</span>\r
  </dw-character-attribute>\r
</div>`;var N=`<style>
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
<link rel="stylesheet" href="tailwind.css" />
`;var C=class extends HTMLElement{constructor(){super();a(this,"_id");a(this,"_value",0);a(this,"_debuff",!1);a(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));a(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));a(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});a(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,i){switch(e){case"id":this._id=i;break;case"debuff":this._debuff=i==="true";let o=this.shadowRoot.querySelector("#debuff");o.checked=this._debuff;break;case"value":default:this._value=i;let l=this.shadowRoot.querySelector('[name="score"]');l.value=i,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),i=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),i.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=N,this.updateModifier()}};customElements.define("dw-character-attribute",C);var k=["strength","dexterity","constitution","intelligence","wisdom","charisma"],E=class extends HTMLElement{constructor(){super();a(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":r.strength=t.detail;break;case"dexterity":r.dexterity=t.detail;break;case"constitution":r.constitution=t.detail;break;case"intelligence":r.intelligence=t.detail;break;case"wisdom":r.wisdom=t.detail;break;case"charisma":r.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});a(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":r.weak=t.detail;break;case"dexterity":r.shaky=t.detail;break;case"constitution":r.sick=t.detail;break;case"intelligence":r.stunned=t.detail;break;case"wisdom":r.confused=t.detail;break;case"charisma":r.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});a(this,"hydrate",e=>{k.forEach(t=>{let i=this.querySelector(`#${t}`),o,l;switch(t){case"strength":o=e.strength,l=e.weak;break;case"dexterity":o=e.dexterity,l=e.shaky;break;case"constitution":o=e.constitution,l=e.sick;break;case"intelligence":o=e.intelligence,l=e.stunned;break;case"wisdom":o=e.wisdom,l=e.confused;break;case"charisma":o=e.charisma,l=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}i.setAttribute("value",o||0),i.setAttribute("debuff",l||!1)})})}connectedCallback(){this.render(),r.subscribe(this.hydrate),k.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){k.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=F}};customElements.define("dw-character-attributes",E);var P=`<div id="bonds" class="flex flex-col">
  <dw-section-header>
    BONDS
  </dw-section-header>
  <dw-infinite-list id="bonds-list"></dw-infinite-list>
</div>
`;var D=`<div id="list">
  <input
    id="new"
    type="text"
    class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full"
  />
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var j=(n,s)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<input type="text" value="${n}" id="item-${s}" class="${t}" />`,e.content.firstChild},L=class extends HTMLElement{constructor(){super();a(this,"_value",[]);a(this,"onUpdate",async(e,t)=>{let i=e.target.value;if(this._value[t]=i,i===""){let o=this._value;this._value=this._value.filter((l,u)=>u!==t),this.renderList(o,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});a(this,"onAdd",e=>{let t=this._value.length;this._value=[...this._value,e],this.shadowRoot.querySelector("#new").value="";let i=j(e,t);i.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(i,this.shadowRoot.querySelector("#new")),i.setSelectionRange(i.value.length,i.value.length),i.addEventListener("keyup",o=>{this.onUpdate(o,t)}),i.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[i,o]=t.reduce(([u,h],d,m)=>(m<e.length&&e[m]!==d&&h.push(m),m>=e.length&&u.push(d),[u,h]),[[],[]]);return{removed:e.reduce((u,h,d)=>(t[d]||u.push(d),u),[]),added:i,modified:o}}renderList(e=[],t=[]){let{removed:i,added:o,modified:l}=this.diff(e,t),u=this.shadowRoot.querySelector("#list");i.forEach(h=>{let d=this.shadowRoot.querySelector(`#item-${h}`);d&&(d.removeEventListener("keyup",m=>this.onUpdate(m,h)),d.remove())}),l.forEach(h=>{let d=this.shadowRoot.querySelector(`#item-${h}`);d&&(d.value=t[h])}),o.forEach((h,d)=>{let m=j(h,e.length+d);m.addEventListener("keyup",K=>this.onUpdate(K,d)),u.insertBefore(m,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",o=>this.onUpdate(o,t))})}render(){this.shadowRoot.innerHTML=D,this.renderList([],this._value)}};customElements.define("dw-infinite-list",L);var S=class extends HTMLElement{constructor(){super();a(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){r.bonds=e.detail}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=P}};customElements.define("dw-character-bonds",S);var J=`<dw-vertical-selection id="race" title="race"></dw-vertical-selection>
`;var f=(n,s)=>({name:n,description:s}),q=class extends HTMLElement{constructor(){super();a(this,"_characterClass");a(this,"onChange",e=>{r.race=e.detail.value});a(this,"hydrate",e=>{this._characterClass!==e.characterClass&&(this._characterClass=e.characterClass,this.querySelector("#race").setAttribute("value",e.race),this.updateOptions())})}get options(){switch(this._characterClass){case c.Fighter:return[f("dwarf","When you share a drink with someone, you may parley with them using CON instead of CHA."),f("elf","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),f("halfling","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),f("human","Once per battle you may reroll a single damage roll (yours or someone else's")];case c.Ranger:return[f("elf","When you Undertake A Perilous Journey through wilderness whatever job you take you succeed as if you rolled a 10+."),f("human","When you Make Camp in a dungeon or city, you don't need to consume a ration.")];default:return[]}}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}updateOptions(){this.querySelector("#race").setAttribute("options",JSON.stringify(this.options))}render(){this.innerHTML=J,this.updateOptions()}};customElements.define("dw-character-race",q);var I=`<style>
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
</div>
`;var M=class extends HTMLElement{constructor(){super();a(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,i){e==="value"&&(this.querySelector("#coin").innerHTML=i)}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{r.coin=t.target.value})}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{r.coin=t.target.value})}render(){this.innerHTML=I}};customElements.define("dw-character-coin",M);var W=`<div>
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
</div>
`;var R=class extends HTMLElement{constructor(){super();a(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){r.gear=e.detail}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{r.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{r.maxLoad=e.target.value})}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{r.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{r.maxLoad=e.target.value})}render(){this.innerHTML=W}};customElements.define("dw-character-gear",R);var T=class extends HTMLElement{constructor(){super();a(this,"_characterClass");a(this,"_value",{})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}updateDom(){let e=this.firstChild;!e||(e.value=this._value)}async hydrate(e){e.characterClass!==this._characterClass&&(this._characterClass=e.characterClass,await this.render())}connectedCallback(){this.render(),r.subscribe(this.hydrate.bind(this))}disconnectedCallback(){r.unsubscribe(this.hydrate.bind(this))}async render(){switch(this._characterClass){case c.Fighter:await import("./fighter-moves-YEYUZGX7.js"),this.innerHTML="<dw-fighter-moves></dw-fighter-moves>";break;case c.Ranger:await import("./ranger-moves-SXMXXJZA.js"),this.innerHTML="<dw-ranger-moves></dw-ranger-moves>";break;default:this.innerHTML="";break}this.updateDom()}};customElements.define("dw-character-moves",T);var z=`<div class="flex flex-col">
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
    <span slot="input" class="z-10 mr-10 text-black">D10</span>
  </dw-labeled-decorated-input>
</div>
`;var X=`<label
  id="labeled-decorate-input__label"
  for="labeled-decorate-input__input"
  class="bg-black text-white flex flex-row relative mb-16"
>
  <slot></slot>
  <div id="labeled-decorated-input__icon" class="flex flex-1 grow justify-end">
    <slot name="input"></slot>
  </div>
</label>
<link rel="stylesheet" href="tailwind.css" />
`;var H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["for","icon-class"]}attributeChangedCallback(s,e,t){let i=this.shadowRoot.querySelector("#labeled-decorate-input__input");switch(s){case"for":this.shadowRoot.querySelector("#labeled-decorate-input__label")?.setAttribute("for",t);break;case"icon-class":this.shadowRoot.querySelector("#labeled-decorated-input__icon")?.classList.add(t);break;default:break}}onMount(){let s=this.shadowRoot.querySelector("#labeled-decorated-input__icon"),e=this.shadowRoot.querySelector("#labeled-decorate-input__label");s.classList.add(this.getAttribute("icon-class")),e.setAttribute("for",this.getAttribute("for"))}connectedCallback(){this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=X}};customElements.define("dw-labeled-decorated-input",H);var $=class extends HTMLElement{constructor(){super();a(this,"_inputs",[["armor","armor"],["hit-points","hitPoints"],["max-hit-points","maxHitPoints"]]);a(this,"onArmorChange",e=>{r.armor=e.target.value});a(this,"onHitPointsChange",e=>{r.hitPoints=e.target.value});a(this,"onMaxHitPointsChange",e=>{r.maxHitPoints=e.target.value});a(this,"onChange",e=>{let{name:t}=e.target;switch(t){case"armor":this.onArmorChange(e);break;case"hit-points":this.onHitPointsChange(e);break;case"max-hit-points":this.onMaxHitPointsChange(e);break;default:break}});a(this,"hydrate",e=>{this._inputs.forEach(([t,i])=>{let o=this.querySelector(`#${t}`);o.value=e[i]||0})});a(this,"onMount",()=>{r.subscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).addEventListener("change",this.onChange)})});a(this,"beforeUnmount",()=>{r.unsubscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).removeEventListener("dw-input-change",this.onChange)})})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=z}};customElements.define("dw-character-armor-hp-damage",$);var A=class extends HTMLElement{constructor(){super();a(this,"onCharacterNameChange",e=>{r.characterName=e.target.value});a(this,"onLevelChange",e=>{r.level=e.target.value});a(this,"onXpChange",e=>{r.xp=e.target.value});a(this,"onMovesChange",e=>{r.moves=e.detail});a(this,"hydrate",e=>{let t=this.querySelector("#character-name"),i=this.querySelector("#level"),o=this.querySelector("#xp"),l=this.querySelector("dw-character-moves");t.value=e.characterName||"",i.value=e.level||"",o.value=e.xp||0,l.value=e.moves||{}})}connectedCallback(){this.render(),r.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),i=this.querySelector("#xp"),o=this.querySelector("dw-character-moves");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),i.addEventListener("change",this.onXpChange),o.addEventListener("dw-character-moves-change",this.onMovesChange)}disconnectedCallback(){r.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),i=this.querySelector("dw-character-moves");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),xpElement.removeEventListener("change",this.onXpChange),i.removeEventListener("dw-character-moves-change",this.onMovesChange)}render(){this.innerHTML=O}};customElements.define("dw-character-form",A);var B=`<style>
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
      \u2261
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
<link rel="stylesheet" href="tailwind.css" />
`;var he=(n,s,e)=>{let t=document.createElement("a"),i=new Blob([n],{type:e});t.href=URL.createObjectURL(i),t.download=s,t.click()},G=he;var de=n=>`<option value="${n}" />`,U=class extends HTMLElement{constructor(){super();a(this,"_toggled",!1);a(this,"_characterClass","");a(this,"_characterName","");a(this,"onToggle",()=>{let e=this.shadowRoot.querySelector("#drawer"),t=this.shadowRoot.querySelector("#drawer__toggle");this._toggled=!this._toggled,this._toggled?(t.innerHTML="x",t.classList.add("text-left"),t.classList.add("ml-2"),e.classList.remove("w-10"),e.classList.add("w-64"),[...this.shadowRoot.querySelectorAll(".invisible")].filter(o=>o.id!=="drawer__toggle").forEach(o=>{o.classList.remove("invisible"),o.classList.add("visible")})):(t.innerHTML="\u2261",t.classList.remove("text-left"),t.classList.remove("ml-2"),e.classList.remove("w-64"),e.classList.add("w-10"),[...this.shadowRoot.querySelectorAll(".visible")].filter(o=>o.id!=="drawer__toggle").forEach(o=>{o.classList.remove("visible"),o.classList.add("invisible")}))});a(this,"onClassChange",e=>{let t=this._characterClass;!t||t===""||confirm("Are you sure you want to change your class? This will reset some values on this form.")?(this._characterClass=e.target.value,r.characterClass=this._characterClass):r.characterClass=t});a(this,"onLoadClick",()=>{this.shadowRoot.querySelector("#load-character-file").click()});a(this,"onSaveClick",()=>G(JSON.stringify(r.save()),`${this._characterName.toLocaleLowerCase()}.json`,"text/plain"));a(this,"onLoadFileChange",e=>{let t=e.currentTarget.files?.[0];if(t){var i=new FileReader;i.onload=o=>{let l=o.target?.result;if(!l||typeof l!="string")throw new Error("No file contents or multiple files detected.");let u=JSON.parse(l);r.loadCharacter(u)},i.readAsText(t),e.currentTarget.value=""}else alert("Failed to load file!")});a(this,"hydrate",e=>{this._characterClass=e.characterClass,this._characterName=e.characterName,this.shadowRoot.querySelector("#character-class").value=this._characterClass||"",this.shadowRoot.querySelector("#class-name").innerHTML=this._characterClass||""});this.attachShadow({mode:"open"})}onMount(){r.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").addEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").addEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").addEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").addEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").addEventListener("change",this.onLoadFileChange)}beforeUnmount(){r.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").removeEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").removeEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").removeEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").removeEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").removeEventListener("change",this.onLoadFileChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=B,this.shadowRoot.querySelector("#class-list").innerHTML=Object.values(c).map(de).join("")}};customElements.define("dw-drawer",U);
