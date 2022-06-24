import"./chunk-7Z555Q4H.js";import{a as s}from"./chunk-YJ2DKIZS.js";var D=`<form\r
  id="character-form"\r
  class="my-4 overflow-x-hidden lg:overflow-x-auto"\r
>\r
  <div class="grid grid-cols-2 xl:grid-cols-5 my-1">\r
    <div\r
      class="flex flex-row col-span-2 lg:col-span-3 bg-white my-1 lg:my-0 items-center"\r
    >\r
      <label for="character-name">NAME</label>\r
      <input\r
        class="text-input"\r
        id="character-name"\r
        name="character-name"\r
        type="text"\r
      />\r
    </div>\r
    <div\r
      class="flex flex-row my-2 col-span-2 md:col-span-1 lg:my-0 lg:justify-end items-center"\r
    >\r
      <label for="level">LEVEL</label>\r
      <input\r
        class="text-input bg-white rounded-full pl-1.5 mr-1 w-7 h-7 grow-0"\r
        id="level"\r
        name="level"\r
        type="text"\r
      />\r
    </div>\r
    <div class="flex flex-row bg-white my-2 col-span-2 md:col-span-1 lg:py-0">\r
      <label for="xp">XP</label>\r
      <input\r
        class="text-input grow-0 lg:grow"\r
        id="xp"\r
        name="xp"\r
        type="number"\r
      />\r
    </div>\r
  </div>\r
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">\r
    <div class="grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-2 mt-5">\r
      <dw-character-look\r
        class="min-h-[33rem] xl:min-h-[16.5rem]"\r
      ></dw-character-look>\r
      <dw-character-armor-hp-damage></dw-character-armor-hp-damage>\r
      <div class="col-span-1 lg:col-span-2 gap-2">\r
        <dw-character-attributes\r
          class="md:col-span-2"\r
        ></dw-character-attributes>\r
      </div>\r
      <div class="col-span-1 lg:col-span-2 gap-2">\r
        <dw-character-moves></dw-character-moves>\r
      </div>\r
    </div>\r
    <div class="flex flex-col grid-cols-1 mt-5 gap-2">\r
      <dw-character-alignment\r
        class="min-h-[10.625rem]"\r
      ></dw-character-alignment>\r
      <dw-character-bonds></dw-character-bonds>\r
      <dw-character-race class="min-h-[10.125rem]"></dw-character-race>\r
      <dw-character-coin></dw-character-coin>\r
      <dw-character-gear></dw-character-gear>\r
    </div>\r
  </div>\r
</form>\r
`;var b=class{constructor(){s(this,"_observers");s(this,"_state");this._observers=[],this._state=void 0}subscribe(a){this._observers.push(a)}unsubscribe(a){this._observers=this._observers.filter(e=>e!==a)}notify(){this._observers.forEach(a=>a(this._state))}};var v=class extends b{constructor(){super();let a=JSON.parse(localStorage.getItem("character"))||{};this._state={...a}}save(){return this._state}loadCharacter(a){this._state=a,this.notify()}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(a){super.subscribe(a),a(this._state)}set characterName(a){this._state={...this._state,characterName:a},this.notify()}set level(a){this._state={...this._state,level:a},this.notify()}set xp(a){this._state={...this._state,xp:a},this.notify()}set look(a){this._state={...this._state,look:a},this.notify()}set armor(a){this._state={...this._state,armor:a},this.notify()}set hitPoints(a){this._state={...this._state,hitPoints:a},this.notify()}set maxHitPoints(a){this._state={...this._state,maxHitPoints:a},this.notify()}set alignment(a){this._state={...this._state,alignment:a},this.notify()}set strength(a){this._state={...this._state,strength:a},this.notify()}set weak(a){this._state={...this._state,weak:a},this.notify()}set dexterity(a){this._state={...this._state,dexterity:a},this.notify()}set shaky(a){this._state={...this._state,shaky:a},this.notify()}set constitution(a){this._state={...this._state,constitution:a},this.notify()}set sick(a){this._state={...this._state,sick:a},this.notify()}set intelligence(a){this._state={...this._state,intelligence:a},this.notify()}set stunned(a){this._state={...this._state,stunned:a},this.notify()}set wisdom(a){this._state={...this._state,wisdom:a},this.notify()}set confused(a){this._state={...this._state,confused:a},this.notify()}set charisma(a){this._state={...this._state,charisma:a},this.notify()}set scarred(a){this._state={...this._state,scarred:a},this.notify()}set bonds(a){this._state={...this._state,bonds:a.filter(e=>e.trim()!=="")},this.notify()}set race(a){this._state={...this._state,race:a},this.notify()}set coin(a){this._state={...this._state,coin:a},this.notify()}set gear(a){this._state={...this._state,gear:a.filter(e=>e.trim()!=="")},this.notify()}set load(a){this._state={...this._state,load:a},this.notify()}set maxLoad(a){this._state={...this._state,maxLoad:a},this.notify()}set moves(a){this._state={...this._state,moves:a},this.notify()}set characterClass(a){this._state={...this._state,characterClass:a,look:void 0,moves:void 0,race:void 0,alignment:void 0},this.notify()}},V=new v,r=V;var l={Fighter:"Fighter",Ranger:"Ranger",Bard:"Bard"};var y=n=>n.toLowerCase().replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g,a=>a.toUpperCase());var p=(n,...a)=>{let e="";return n.forEach((t,o)=>{e+=t+(a[o]||"")}),e};var ee=({title:n,options:a})=>p`<div class="flex flex-col xl:flex-row xl:items-center">
    <label for="body" class="font-bold">${n.toUpperCase()}</label>
    ${a.map(e=>p`<div class="flex-row ml-2 xl:ml-0">
            <input
              type="radio"
              name="${n}"
              id="${n}-${e}"
              value="${e}"
            />
            <label class="text-sm" for="${n}-${e}"
              >${y(e).replace("-"," ")}</label
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
  </div>`,g=class extends HTMLElement{constructor(){super();s(this,"_options",[]);s(this,"_title","")}static get observedAttributes(){return["options","title"]}attributeChangedCallback(e,t,o){switch(e){case"options":this._options=JSON.parse(o)||[],this.render();break;case"title":this._title=o||"",this.render();break;default:break}}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.innerHTML=ee({title:this._title,options:this._options})}};customElements.define("dw-character-look-group",g);var w=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onChange",e=>{let{name:t,value:o}=e.target;this[`_${t}`]=o,this.emit()});s(this,"hydrate",async e=>{let t=e.look||{};this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.groups.forEach(i=>{this[`_${i}`]=t[i]||"";let c=[...this.querySelectorAll(`[name="${i}"][type="radio"]`)];c.forEach(h=>{h.checked=h.value===t[i]});let u=this.querySelector(`#${i}-other`);u.value=c.every(h=>h.value!==t[i])&&t[i]?t[i]:""})})}get groups(){switch(this._characterClass){case l.Fighter:return["body","eyes","hair","skin"];case l.Ranger:case l.Bard:return["body","eyes","hair","clothes"];default:return[]}}emit(){switch(this._characterClass){case l.Fighter:r.look={body:this._body,eyes:this._eyes,hair:this._hair,skin:this._skin};break;case l.Ranger:case l.Bard:r.look={body:this._body,eyes:this._eyes,hair:this._hair,clothes:this._clothes};default:break}}onMount(){r.subscribe(this.hydrate),this.groups.reduce((t,o)=>[...t,...this.querySelectorAll(`[name="${o}"]`)],[]).forEach(t=>t.addEventListener("change",this.onChange))}beforeUnmount(){r.unsubscribe(this.hydrate),this.groups.reduce((t,o)=>[...t,...this.querySelectorAll(`[name="${o}"]`)],[]).forEach(t=>t.removeEventListener("change",this.onChange))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case l.Fighter:let e=await import("./fighter-look-RVNWJ37O.js");this.innerHTML=e.default;break;case l.Ranger:let t=await import("./ranger-look-7XLKCARA.js");this.innerHTML=t.default;break;case l.Bard:let o=await import("./bard-look-MILTANGH.js");this.innerHTML=o.default;default:break}}};customElements.define("dw-character-look",w);var te=({title:n,options:a})=>p`<div class="flex flex-col">
    <label for="${n}" class="bg-black text-white flex flex-row relative">
      ${n.toUpperCase()}
    </label>
    ${a.map(e=>p`<div class="flex flex-row items-center">
          <input
            type="radio"
            name="${n}"
            id="${n}-${e.name}"
            class="mx-2"
            value="${e.name}"
          />
          <label for="${n}-${e.name}" class="flex flex-col">
            <div>${y(e.name)}</div>
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
  <link rel="stylesheet" href="tailwind.css" />`,k=class extends HTMLElement{constructor(){super();s(this,"_title","");s(this,"_options",[]);s(this,"_value","");s(this,"updateValues",()=>{let e=[...this.shadowRoot.querySelectorAll(`[name="${this._title}"][type="radio"]`)];e.forEach(o=>{o.checked=o.value===this._value});let t=this.shadowRoot.querySelector(`#${this._title}-other`);t.value=e.every(o=>o.value!==this._value)&&this._value&&this._value||""});this.attachShadow({mode:"open"})}static get observedAttributes(){return["options","title","value"]}attributeChangedCallback(e,t,o){switch(e){case"options":this._options=JSON.parse(o)||[],this.rerender();break;case"title":this._title=o||"",this.rerender();break;case"value":this._value=o&&o!=="undefined"?o:"",this.updateValues();break;default:break}}onChange(e){let t=e.composedPath()[0].value;this.dispatchEvent(new CustomEvent("dw-change",{detail:{value:t}}))}onMount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.addEventListener("change",this.onChange.bind(this))})}beforeUnmount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.removeEventListener("change",this.onChange.bind(this))})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}rerender(){this.beforeUnmount(),this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=te({title:this._title,options:this._options}),this.updateValues()}};customElements.define("dw-vertical-selection",k);var x=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onAlignmentChange",e=>{r.alignment=e.detail.value});s(this,"hydrate",async e=>{this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.querySelector("#alignment")?.setAttribute("value",e.alignment)})}onMount(){r.subscribe(this.hydrate),this.querySelector("#alignment")?.addEventListener("dw-change",this.onAlignmentChange)}beforeUnmount(){r.unsubscribe(this.hydrate),this.querySelector("#alignment")?.removeEventListener("dw-change",this.onAlignmentChange)}connectedCallback(){this.render().then(()=>this.onMount())}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case l.Fighter:let e=await import("./fighter-alignment-COVG5SPA.js");this.innerHTML=e.default;break;case l.Ranger:let t=await import("./ranger-alignment-WSCT2KBM.js");this.innerHTML=t.default;break;case l.Bard:let o=await import("./bard-alignment-BMTYTUFG.js");this.innerHTML=o.default;default:break}}};customElements.define("dw-character-alignment",x);var U=`<div class="text-sm italic text-center mb-1">\r
  Assign these scores to your stats: 16(+2), 15(+1), 13(+1), 12(-), 9(-), 8(-1)\r
</div>\r
<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">\r
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
</div>\r
`;var P=`<style>\r
  .w {\r
    width: 4rem;\r
  }\r
\r
  .h {\r
    height: 4rem;\r
  }\r
</style>\r
<div class="flex flex-col border-2 border-black mb-8">\r
  <div class="flex flex-row py-2 px-2 bg-white">\r
    <label id="score-label">\r
      <slot></slot>\r
    </label>\r
    <input\r
      type="number"\r
      name="score"\r
      class="w-full mx-2 bg-transparent outline-none border-none"\r
    />\r
  </div>\r
  <div class="flex flex-row bg-black text-white px-2 py-2">\r
    <div\r
      class="flex flex-col bg-white rounded-full w h text-black justify-center items-center absolute shadow-md"\r
    >\r
      <label id="modifier-label" for="modifier">\r
        <slot name="abbreviation"></slot>\r
      </label>\r
      <div id="modifier"></div>\r
    </div>\r
    <div class="flex justify-end items-end w-full">\r
      <label id="debuff-label" for="debuff">\r
        <slot name="debuff"></slot>\r
      </label>\r
      <input type="checkbox" id="debuff" name="debuff" />\r
    </div>\r
  </div>\r
</div>\r
<link rel="stylesheet" href="tailwind.css" />\r
`;var _=class extends HTMLElement{constructor(){super();s(this,"_id");s(this,"_value",0);s(this,"_debuff",!1);s(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));s(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));s(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});s(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,o){switch(e){case"id":this._id=o;break;case"debuff":this._debuff=o==="true";let i=this.shadowRoot.querySelector("#debuff");i.checked=this._debuff;break;case"value":default:this._value=o;let c=this.shadowRoot.querySelector('[name="score"]');c.value=o,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),o=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),o.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=P,this.updateModifier()}};customElements.define("dw-character-attribute",_);var C=["strength","dexterity","constitution","intelligence","wisdom","charisma"],E=class extends HTMLElement{constructor(){super();s(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":r.strength=t.detail;break;case"dexterity":r.dexterity=t.detail;break;case"constitution":r.constitution=t.detail;break;case"intelligence":r.intelligence=t.detail;break;case"wisdom":r.wisdom=t.detail;break;case"charisma":r.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});s(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":r.weak=t.detail;break;case"dexterity":r.shaky=t.detail;break;case"constitution":r.sick=t.detail;break;case"intelligence":r.stunned=t.detail;break;case"wisdom":r.confused=t.detail;break;case"charisma":r.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});s(this,"hydrate",e=>{C.forEach(t=>{let o=this.querySelector(`#${t}`),i,c;switch(t){case"strength":i=e.strength,c=e.weak;break;case"dexterity":i=e.dexterity,c=e.shaky;break;case"constitution":i=e.constitution,c=e.sick;break;case"intelligence":i=e.intelligence,c=e.stunned;break;case"wisdom":i=e.wisdom,c=e.confused;break;case"charisma":i=e.charisma,c=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}o.setAttribute("value",i||0),o.setAttribute("debuff",c||!1)})})}connectedCallback(){this.render(),r.subscribe(this.hydrate),C.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){C.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=U}};customElements.define("dw-character-attributes",E);var F=`<div id="bonds" class="flex flex-col">\r
  <dw-section-header>\r
    BONDS\r
  </dw-section-header>\r
  <dw-infinite-list id="bonds-list"></dw-infinite-list>\r
</div>\r
`;var N=`<div id="list">\r
  <input\r
    id="new"\r
    type="text"\r
    class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full"\r
  />\r
</div>\r
<link rel="stylesheet" href="tailwind.css" />\r
`;var I=(n,a)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<input type="text" value="${n}" id="item-${a}" class="${t}" />`,e.content.firstChild},L=class extends HTMLElement{constructor(){super();s(this,"_value",[]);s(this,"onUpdate",async(e,t)=>{let o=e.target.value;if(this._value[t]=o,o===""){let i=this._value;this._value=this._value.filter((c,u)=>u!==t),this.renderList(i,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});s(this,"onAdd",e=>{let t=this._value.length;this._value=[...this._value,e],this.shadowRoot.querySelector("#new").value="";let o=I(e,t);o.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(o,this.shadowRoot.querySelector("#new")),o.setSelectionRange(o.value.length,o.value.length),o.addEventListener("keyup",i=>{this.onUpdate(i,t)}),o.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[o,i]=t.reduce(([u,h],d,m)=>(m<e.length&&e[m]!==d&&h.push(m),m>=e.length&&u.push(d),[u,h]),[[],[]]);return{removed:e.reduce((u,h,d)=>(t[d]||u.push(d),u),[]),added:o,modified:i}}renderList(e=[],t=[]){let{removed:o,added:i,modified:c}=this.diff(e,t),u=this.shadowRoot.querySelector("#list");o.forEach(h=>{let d=this.shadowRoot.querySelector(`#item-${h}`);d&&(d.removeEventListener("keyup",m=>this.onUpdate(m,h)),d.remove())}),c.forEach(h=>{let d=this.shadowRoot.querySelector(`#item-${h}`);d&&(d.value=t[h])}),i.forEach((h,d)=>{let m=I(h,e.length+d);m.addEventListener("keyup",Q=>this.onUpdate(Q,d)),u.insertBefore(m,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",i=>this.onUpdate(i,t))})}render(){this.shadowRoot.innerHTML=N,this.renderList([],this._value)}};customElements.define("dw-infinite-list",L);var S=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){r.bonds=e.detail}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=F}};customElements.define("dw-character-bonds",S);var j=`<dw-vertical-selection id="race" title="race"></dw-vertical-selection>\r
`;var f=(n,a)=>({name:n,description:a}),q=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onChange",e=>{r.race=e.detail.value});s(this,"hydrate",e=>{this._characterClass!==e.characterClass&&(this._characterClass=e.characterClass,this.querySelector("#race").setAttribute("value",e.race),this.updateOptions())})}get options(){switch(this._characterClass){case l.Fighter:return[f("dwarf","When you share a drink with someone, you may parley with them using CON instead of CHA."),f("elf","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),f("halfling","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),f("human","Once per battle you may reroll a single damage roll (yours or someone else's")];case l.Ranger:return[f("elf","When you Undertake A Perilous Journey through wilderness whatever job you take you succeed as if you rolled a 10+."),f("human","When you Make Camp in a dungeon or city, you don't need to consume a ration.")];case l.Bard:return[f("elf","When you enter an important location (your call) you can ask the GM for one fact from the history of that location."),f("human","When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest.")];default:return[]}}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}updateOptions(){this.querySelector("#race").setAttribute("options",JSON.stringify(this.options))}render(){this.innerHTML=j,this.updateOptions()}};customElements.define("dw-character-race",q);var B=`<style>\r
  .coin {\r
    top: -0.4rem;\r
  }\r
</style>\r
<div class="flex flex-col relative my-2">\r
  <dw-section-header>\r
    <input\r
      type="text"\r
      id="coin"\r
      name="coin"\r
      class="absolute w-10 h-10 text-center rounded-full shadow-md coin text-black border-2 border-black outline-none"\r
    />\r
    <span class="pl-12">COIN</span>\r
  </dw-section-header>\r
</div>\r
`;var M=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,o){e==="value"&&(this.querySelector("#coin").innerHTML=o)}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{r.coin=t.target.value})}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{r.coin=t.target.value})}render(){this.innerHTML=B}};customElements.define("dw-character-coin",M);var G=`<div>\r
  <dw-section-header>\r
    <div class="flex flex-row">\r
      <span class="flex-1">GEAR</span>\r
      <div class="text-black relative flex flex-row bg-white">\r
        <input\r
          type="text"\r
          id="load"\r
          name="load"\r
          class="absolute right-10 w-10 text-center rounded-l-full shadow-md gear text-black border-r-2 border-black outline-none"\r
        />\r
        <input\r
          type="text"\r
          id="max-load"\r
          name="max-load"\r
          class="absolute right-0 text-center w-10 rounded-r-full shadow-md max-gear text-black border-black outline-none"\r
        />\r
      </div>\r
    </div>\r
  </dw-section-header>\r
  <dw-infinite-list id="gear-list"></dw-infinite-list>\r
</div>\r
`;var T=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){r.gear=e.detail}connectedCallback(){this.render(),r.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{r.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{r.maxLoad=e.target.value})}disconnectedCallback(){r.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{r.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{r.maxLoad=e.target.value})}render(){this.innerHTML=G}};customElements.define("dw-character-gear",T);var O=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"_value",{})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}updateDom(){let e=this.firstChild;!e||(e.value=this._value)}async hydrate(e){e.characterClass!==this._characterClass&&(this._characterClass=e.characterClass,await this.render())}connectedCallback(){this.render(),r.subscribe(this.hydrate.bind(this))}disconnectedCallback(){r.unsubscribe(this.hydrate.bind(this))}async render(){switch(this._characterClass){case l.Fighter:await import("./fighter-moves-JMG7GJM4.js"),this.innerHTML="<dw-fighter-moves></dw-fighter-moves>";break;case l.Ranger:await import("./ranger-moves-56XTQVP6.js"),this.innerHTML="<dw-ranger-moves></dw-ranger-moves>";break;case l.Bard:await import("./bard-moves-CVR2RZU3.js"),this.innerHTML="<dw-bard-moves></dw-bard-moves>";break;default:this.innerHTML="";break}this.updateDom()}};customElements.define("dw-character-moves",O);var z=`<div class="flex flex-col">\r
  <dw-labeled-decorated-input for="armor" icon-class="shield">\r
    ARMOR\r
    <input\r
      slot="input"\r
      type="text"\r
      id="armor"\r
      name="armor"\r
      class="text-black bg-white w-7 z-10 mr-10 outline-none text-center disabled:overflow-visible"\r
    />\r
  </dw-labeled-decorated-input>\r
  <dw-labeled-decorated-input for="hp" icon-class="heart">\r
    HP\r
    <span slot="input" class="z-10">\r
      <input\r
        type="text"\r
        id="hit-points"\r
        name="hit-points"\r
        class="text-black bg-white w-6 outline-none text-center border-r-2 border-black"\r
      />\r
      <input\r
        type="text"\r
        id="max-hit-points"\r
        name="max-hit-points"\r
        class="text-black bg-white w-6 mr-7 outline-none text-center"\r
      />\r
    </span>\r
  </dw-labeled-decorated-input>\r
  <dw-labeled-decorated-input for="damage" icon-class="damage-dice">\r
    DAMAGE\r
    <span id="damage-input" slot="input" class="z-10 mr-10 text-black"></span>\r
  </dw-labeled-decorated-input>\r
</div>\r
`;var J=`<label\r
  id="labeled-decorate-input__label"\r
  for="labeled-decorate-input__input"\r
  class="bg-black text-white flex flex-row relative mb-16"\r
>\r
  <slot></slot>\r
  <div id="labeled-decorated-input__icon" class="flex flex-1 grow justify-end">\r
    <slot name="input"></slot>\r
  </div>\r
</label>\r
<link rel="stylesheet" href="tailwind.css" />\r
`;var R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["for","icon-class"]}attributeChangedCallback(a,e,t){let o=this.shadowRoot.querySelector("#labeled-decorate-input__input");switch(a){case"for":this.shadowRoot.querySelector("#labeled-decorate-input__label")?.setAttribute("for",t);break;case"icon-class":this.shadowRoot.querySelector("#labeled-decorated-input__icon")?.classList.add(t);break;default:break}}onMount(){let a=this.shadowRoot.querySelector("#labeled-decorated-input__icon"),e=this.shadowRoot.querySelector("#labeled-decorate-input__label");a.classList.add(this.getAttribute("icon-class")),e.setAttribute("for",this.getAttribute("for"))}connectedCallback(){this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=J}};customElements.define("dw-labeled-decorated-input",R);var H=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"_inputs",[["armor","armor"],["hit-points","hitPoints"],["max-hit-points","maxHitPoints"]]);s(this,"onArmorChange",e=>{r.armor=e.target.value});s(this,"onHitPointsChange",e=>{r.hitPoints=e.target.value});s(this,"onMaxHitPointsChange",e=>{r.maxHitPoints=e.target.value});s(this,"onChange",e=>{let{name:t}=e.target;switch(t){case"armor":this.onArmorChange(e);break;case"hit-points":this.onHitPointsChange(e);break;case"max-hit-points":this.onMaxHitPointsChange(e);break;default:break}});s(this,"hydrate",e=>{if(this._characterClass!==e.characterClass){this._characterClass=e.characterClass;let t=this.querySelector("#damage-input");t&&(t.innerHTML=this.getDiceAmount())}this._inputs.forEach(([t,o])=>{let i=this.querySelector(`#${t}`);i.value=e[o]||0})});s(this,"onMount",()=>{r.subscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).addEventListener("change",this.onChange)})});s(this,"beforeUnmount",()=>{r.unsubscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).removeEventListener("dw-input-change",this.onChange)})})}getDiceAmount(){switch(this._characterClass){case l.Fighter:return"D10";case l.Ranger:return"D8";case l.Bard:return"D6";default:return"D?"}}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=z;let e=this.querySelector("#damage-input");e&&(e.innerHTML=this.getDiceAmount())}};customElements.define("dw-character-armor-hp-damage",H);var A=class extends HTMLElement{constructor(){super();s(this,"onCharacterNameChange",e=>{r.characterName=e.target.value});s(this,"onLevelChange",e=>{r.level=e.target.value});s(this,"onXpChange",e=>{r.xp=e.target.value});s(this,"onMovesChange",e=>{r.moves=e.detail});s(this,"hydrate",e=>{let t=this.querySelector("#character-name"),o=this.querySelector("#level"),i=this.querySelector("#xp"),c=this.querySelector("dw-character-moves");t.value=e.characterName||"",o.value=e.level||"",i.value=e.xp||0,c.value=e.moves||{}})}connectedCallback(){this.render(),r.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),o=this.querySelector("#xp"),i=this.querySelector("dw-character-moves");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),o.addEventListener("change",this.onXpChange),i.addEventListener("dw-character-moves-change",this.onMovesChange)}disconnectedCallback(){r.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),o=this.querySelector("dw-character-moves");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),xpElement.removeEventListener("change",this.onXpChange),o.removeEventListener("dw-character-moves-change",this.onMovesChange)}render(){this.innerHTML=D}};customElements.define("dw-character-form",A);var X=`<style>\r
  .banner .arrow-up {\r
    width: 100%;\r
    height: 20px;\r
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\r
  }\r
\r
  .banner .arrow-down {\r
    width: 100%;\r
    height: 20px;\r
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\r
    transform: rotate(180deg);\r
  }\r
\r
  .banner #class-name {\r
    transform: rotate(-90deg);\r
  }\r
</style>\r
<div\r
  class="w-10 lg:w-36 shadow-lg lg:shadow-none h-full overflow-hidden lg:pl-2"\r
>\r
  <div\r
    id="drawer"\r
    class="w-10 lg:w-36 bg-black fixed flex flex-col text-white z-20 h-full pt-4"\r
  >\r
    <button\r
      id="drawer__toggle"\r
      type="button"\r
      class="lg:hidden visible text-2xl"\r
    >\r
      \u2261\r
    </button>\r
    <div\r
      id="content"\r
      class="flex-1 flex flex-col relative invisible lg:visible"\r
    >\r
      <label for="character-class">Class</label>\r
      <input\r
        type="text"\r
        class="h-10 text-black outline-none border-none mx-2"\r
        id="character-class"\r
        list="class-list"\r
      />\r
      <datalist id="class-list" for="character-class"></datalist>\r
      <button id="save" type="button pionter" class="text-left mx-2">\r
        Save\r
      </button>\r
      <button id="load" type="button pointer" class="text-left mx-2">\r
        Load\r
      </button>\r
      <a id="player-moves-link" href="#player-moves" class="text-left mx-2 hidden">Player Moves</a>\r
      <input\r
        id="load-character-file"\r
        type="file"\r
        class="hidden"\r
        accept="application/JSON"\r
      />\r
    </div>\r
    <div\r
      class="banner hidden lg:flex flex-col lg:bg-slate-200 border-r-2 border-black lg:border-r-0"\r
    >\r
      <div class="arrow-down bg-black"></div>\r
      <div class="lg:bg-slate-200 h-64 relative pt-36">\r
        <div\r
          id="class-name"\r
          class="text-6xl text-bold text-black justify-self-center self-center flex w-full"\r
        ></div>\r
      </div>\r
      <div class="arrow-up bg-black"></div>\r
    </div>\r
    <div\r
      id="dungeon-world"\r
      class="text-6xl text-center font-bold invisible lg:visible"\r
    >\r
      DW\r
    </div>\r
  </div>\r
</div>\r
<link rel="stylesheet" href="tailwind.css" />\r
`;var ue=(n,a,e)=>{let t=document.createElement("a"),o=new Blob([n],{type:e});t.href=URL.createObjectURL(o),t.download=a,t.click()},Y=ue;var me=n=>`<option value="${n}" />`,$=class extends HTMLElement{constructor(){super();s(this,"_toggled",!1);s(this,"_characterClass","");s(this,"_characterName","");s(this,"onToggle",()=>{let e=this.shadowRoot.querySelector("#drawer"),t=this.shadowRoot.querySelector("#drawer__toggle");this._toggled=!this._toggled,this._toggled?(t.innerHTML="x",t.classList.add("text-left"),t.classList.add("ml-2"),e.classList.remove("w-10"),e.classList.add("w-64"),[...this.shadowRoot.querySelectorAll(".invisible")].filter(i=>i.id!=="drawer__toggle").forEach(i=>{i.classList.remove("invisible"),i.classList.add("visible")})):(t.innerHTML="\u2261",t.classList.remove("text-left"),t.classList.remove("ml-2"),e.classList.remove("w-64"),e.classList.add("w-10"),[...this.shadowRoot.querySelectorAll(".visible")].filter(i=>i.id!=="drawer__toggle").forEach(i=>{i.classList.remove("visible"),i.classList.add("invisible")}))});s(this,"onClassChange",e=>{let t=this._characterClass;!t||t===""||confirm("Are you sure you want to change your class? This will reset some values on this form.")?(this._characterClass=e.target.value,r.characterClass=this._characterClass):r.characterClass=t});s(this,"onLoadClick",()=>{this.shadowRoot.querySelector("#load-character-file").click()});s(this,"onSaveClick",()=>Y(JSON.stringify(r.save()),`${this._characterName.toLocaleLowerCase()}.json`,"text/plain"));s(this,"onLoadFileChange",e=>{let t=e.currentTarget.files?.[0];if(t){var o=new FileReader;o.onload=i=>{let c=i.target?.result;if(!c||typeof c!="string")throw new Error("No file contents or multiple files detected.");let u=JSON.parse(c);r.loadCharacter(u)},o.readAsText(t),e.currentTarget.value=""}else alert("Failed to load file!")});s(this,"hydrate",e=>{this._characterClass=e.characterClass,this._characterName=e.characterName,this.shadowRoot.querySelector("#character-class").value=this._characterClass||"",this.shadowRoot.querySelector("#class-name").innerHTML=this._characterClass||"";let t=this.shadowRoot.querySelector("#player-moves-link");this._characterClass&&this._characterClass!==""?t?.classList.remove("hidden"):t.classList.contains("hidden")||t?.classList.add("hidden")});this.attachShadow({mode:"open"})}onMount(){r.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").addEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").addEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").addEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").addEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").addEventListener("change",this.onLoadFileChange)}beforeUnmount(){r.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").removeEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").removeEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").removeEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").removeEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").removeEventListener("change",this.onLoadFileChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=X,this.shadowRoot.querySelector("#class-list").innerHTML=Object.values(l).map(me).join("")}};customElements.define("dw-drawer",$);var K=`<div id="player-moves">\r
  <h2 class="font-bold text-2xl">Player Moves</h2>\r
  <hr />\r
  <h3 class="flex-1 text-2xl medium mt-3">Basic Moves</h3>\r
  <div class="grid grid-cols-3 gap-3">\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Hack and Slash</h4>\r
      <p>\r
        When you attack an enemy in melee, roll+Str. On a 10+ you deal\r
        your damage to the enemy and avoid their attack. At your option,\r
        you may choose to do +1d6 damage but expose yourself to the\r
        enemy's attack. On a 7-9, you deal your damage to the enemy and\r
        the enemy makes an attack against you.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Defy Danger</h4>\r
      <p>\r
        When you act despite an imminent threat or suffer a calamity, say\r
        how you deal with it and roll. If you do it...\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>by powering through, +Str </li>\r
        <li>by getting out of the way or acting fast, +Dex</li>\r
        <li>by enduring, +Con</li>\r
        <li>with quick thinking, +Int</li>\r
        <li>through mental fortitude, +Wis</li>\r
        <li>sing charm and social grace, +Cha </li>\r
      </ul>\r
      <p>\r
        On a 10+, you do what you set out to, the threat doesn't come to\r
        bear. On a 7-9, you stumble, hesitate, or flinch: the GM will\r
        offer you a worse outcome, hard bargain, or ugly choice.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Discern Realities</h4>\r
      <p>\r
        When you closely study a situation or person, roll+Wis. On a 10+\r
        ask the GM three questions from the list below. On a 7-9 ask only\r
        one. Take +1 forward when acting on the answers.\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>What happened here recently?</li>\r
        <li>What is about to happen?</li>\r
        <li>What should I be on the lookout for?</li>\r
        <li>What here is useful or valuable to me?</li>\r
        <li>Who's really in control here?</li>\r
        <li>What here is not what it appears to be?</li>\r
      </ul>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Volley</h4>\r
      <p>\r
        When you take aim and shoot at an enemy at range, roll+Dex. On a\r
        10+ you have a clear shot\u2014deal your damage. On a 7-9, choose one\r
        (whichever you choose you deal your damage):\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>\r
          You have to move to get the shot placing you in danger of the\r
          GM's choice\r
        </li>\r
        <li>You have to take what you can get: -1d6 damage</li>\r
        <li>\r
          You have to take several shots, reducing your ammo by one.\r
        </li>\r
      </ul>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Defend</h4>\r
      <p>\r
        When you stand in defense of a person, item, or location under\r
        attack, roll+Con. On a 10+, hold 3. On a 7-9, hold 1. So long as\r
        you stand in defense, when you or the thing you defend is attacked\r
        you may spend hold, 1 for 1, to choose an option:\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>Redirect an attack from the thing you defend to yourself</li>\r
        <li>Halve the attack's effect or damage</li>\r
        <li>\r
          Open up the attacker to an ally giving that ally +1 forward\r
          against the attacker\r
        </li>\r
        <li>Deal damage to the attacker equal to your level</li>\r
      </ul>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Spout Lore</h4>\r
      <p>\r
        When you consult your accumulated knowledge about something,\r
        roll+Int. On a 10+ the GM will tell you something interesting and\r
        useful about the subject relevant to your situation. On a 7-9 the\r
        GM will only tell you something interesting it's on you to make it\r
        useful. The GM might ask you \u201CHow do you know this?\u201D Tell them the\r
        truth, now.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Parley</h4>\r
      <p>\r
        When you have leverage on a GM character and manipulate them,\r
        roll+Cha. Leverage is something they need or want. On a hit they\r
        ask you for something and do it if you make them a promise first.\r
        On a 7-9, they need some concrete assurance of your promise, right\r
        now.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Aid or Interfere</h4>\r
      <p>\r
        When you help or hinder someone you have a Bond with, roll+Bond\r
        with them. On a hit they take +1 or -2, your choice. On a 7-9 you\r
        also expose yourself to danger, retribution, or cost.\r
      </p>\r
    </div>\r
  </div>\r
  <h3 class="flex-1 text-2xl medium mt-3">Special Moves</h3>\r
  <hr />\r
  <div class="grid grid-cols-3 gap-3 px-2">\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Last Breath</h4>\r
      <p>\r
        When you're dying you catch a glimpse of what lies beyond the\r
        Black Gates of Death's Kingdom (the GM will describe it). Then\r
        roll (just roll, +nothing\u2014yeah, Death doesn't care how tough or\r
        cool you are). On a 10+ you've cheated death\u2014 you're in a bad spot\r
        but you're still alive. On a 7-9 Death will offer you a bargain.\r
        Take it and stabilize or refuse and pass beyond the Black Gates\r
        into whatever fate awaits you. On a miss, your fate is sealed.\r
        You're marked as Death's own and you'll cross the threshold soon.\r
        The GM will tell you when.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Undertake A Perilous Journey</h4>\r
      <p>\r
        When you travel through hostile territory, choose one member of\r
        the party to act as trailblazer, one to scout ahead, and one to be\r
        quartermaster (the same character cannot have two jobs). If you\r
        don't have enough party members or choose not to assign a job,\r
        treat that job as if it had rolled a 6. Each character with a job\r
        to do rolls+Wis. On a 10+ the quartermaster reduces the number of\r
        rations required by one. On a 10+ the trailblazer reduces the\r
        amount of time it takes to reach your destination (the GM will say\r
        by how much). On a 10+ the scout will spot any trouble quick\r
        enough to let you get the drop on it. On a 7-9 each roles performs\r
        their job as expected: the normal number of rations are consumed,\r
        the journey takes about as long as expected, no one gets the drop\r
        on you but you don't get the drop on them either.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">End of Session</h4>\r
      <p>\r
        When you reach the end of a session, choose one your bonds that\r
        you feel is resolved (completely explored, no longer relevant, or\r
        otherwise). Ask the player of the character you have the bond with\r
        if they agree. If they do, mark XP and write a new bond with\r
        whomever you wish. Once bonds have been updated look at your\r
        alignment. If you fulfilled that alignment at least once this\r
        session, mark XP. Then answer these three questions as a group:\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>Did we learn something new and important about the world?</li>\r
        <li>Did we overcome a notable monster or enemy?</li>\r
        <li>Did we loot a memorable treasure?</li>\r
      </ul>\r
      <p>For each "yes" answer everyone marks XP.</p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Encumbrance</h4>\r
      <p>\r
        When you make a move while carrying weight up to or equal to Load,\r
        you're fine. When you make a move while carrying weight equal to\r
        load+1 or load+2, you take -1. When you make a move while carrying\r
        weight greater than load+2, you have a choice: drop at least 1\r
        weight and roll at -1, or automatically fail.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Recover</h4>\r
      <p>\r
        When you do nothing but rest in comfort and safety after a day of\r
        rest you recover all your HP. After three days of rest you remove\r
        one debility of your choice. If you're under the care of a healer\r
        (magical or otherwise) you heal a debility for every two days of\r
        rest instead.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Level Up</h4>\r
      <p>\r
        When you have downtime (hours or days) and XP equal to (or greater\r
        than) your current level+7, subtract your current level +7 from\r
        your XP, increase your level by 1, and choose a new advanced move\r
        from your class. If you are the wizard, you also get to add a new\r
        spell to your spellbook. Choose one of your stats and increase it\r
        by 1 (this may change your modifier). Note that changing your\r
        Constitution increases your maximum and current HP. Ability scores\r
        can't go higher than 18.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Take Watch</h4>\r
      <p>\r
        When you're on watch and something approaches the camp, roll+Wis.\r
        On a 10+ you're able to wake the camp and prepare a response, the\r
        camp takes +1 forward. On a 7-9 you react just a moment too late;\r
        the camp is awake but hasn't had time to prepare. You have weapons\r
        and armor but little else. On a miss whatever lurks outside the\r
        campfire's light has the drop on you.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Carouse</h4>\r
      <p>\r
        When you return triumphant and throw a big party, spend 100 coin\r
        and roll + extra 100s of coin spent. On a 10+ choose 3. On a 7-9\r
        choose 1. On a miss, you still choose one, but things get really\r
        out of hand.\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>You befriend a useful NPC</li>\r
        <li>You hear rumors of an opportunity</li>\r
        <li>You gain useful information</li>\r
        <li>You are not entagngled, enscorcelled, or tricked</li>\r
      </ul>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Outstanding Warrants</h4>\r
      <p>\r
        When you return to a civilized place in which you've caused\r
        trouble before, roll+Cha. On a hit, word has spread of your deeds\r
        and everyone recognizes you. On a 7-9, that, and, the GM chooses a\r
        complication:\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>The local constabulary has a warrant out for your arrest</li>\r
        <li>Someone has put a price on your head</li>\r
        <li>\r
          Someon important to you has been put in a bad spot as a result\r
          of your actions\r
        </li>\r
      </ul>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Bolster</h4>\r
      <p>\r
        When you spend your leisure time in study, meditation, or hard\r
        practice, you gain preparation. If you prepare for a week or two,\r
        1 preparation. If you prepare for a month or longer, 3\r
        preparation. When your preparation pays off spend 1 preparation\r
        for +1 to any roll. You can only spend one preparation per roll.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Recruit</h4>\r
      <p>\r
        When you put out word that you're looking to hire help, roll. If\r
        you make it known...\r
      </p>\r
      <ul class="list-disc ml-5">\r
        <li>...that your pay is generous, take +1</li>\r
        <li>...what you're setting out to do, take +1</li>\r
        <li>...that they'll get a share of whatever you find, take +1</li>\r
      </ul>\r
      <p>\r
        If you have a useful reputation around these parts take an\r
        additional +1. On a 10+ you've got your pick of a number of\r
        skilled applicants, your choice who you hire, no penalty for not\r
        taking them along. On a 7-9 you'll have to settle for someone\r
        close or turn them away. On a miss someone influential and\r
        ill-suited declares they'd like to come along (a foolhardy youth,\r
        a loose-cannon, or a veiled enemy, for example), bring them and\r
        take the consequences or turn them away. If you turn away\r
        applicants you take -1 forward to Recruit.\r
      </p>\r
    </div>\r
    <div class="col-span-full md:col-span-1">\r
      <h4 class="text-lg font-bold">Supply</h4>\r
      <p>\r
        When you go to buy something with money on hand, if it's something\r
        readily available in the settlement you're in, you can buy it at\r
        market price. If it's something special, beyond what's usually\r
        available here, or non-mundane, roll+Cha. On a 10+ you find what\r
        you're looking for at a fair price. On a 7-9 you'll have to pay\r
        more or settle for something similar.\r
      </p>\r
    </div>\r
  </div>\r
</div>\r
<link rel="stylesheet" href="tailwind.css" />\r
`;var W=class extends HTMLElement{constructor(){super();s(this,"_characterClass");this.attachShadow({mode:"open"})}hydrate(e){this._characterClass=e.characterClass,this._characterClass&&this._characterClass!==""?this.classList.remove("hidden"):this.classList.contains("hidden")||this.classList.add("hidden")}onMount(){r.subscribe(this.hydrate.bind(this))}beforeUnmount(){r.unsubscribe(this.hydrate.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=K}};customElements.define("dw-player-moves",W);
