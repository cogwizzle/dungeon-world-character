import"./chunk-3NIBINFW.js";import{a as s}from"./chunk-YJ2DKIZS.js";var U=`<form id="character-form" class="my-4 overflow-x-hidden lg:overflow-x-auto">
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
      <dw-notes></dw-notes>
    </div>
  </div>
</form>
`;var b=class{constructor(){s(this,"_observers");s(this,"_state");this._observers=[],this._state=void 0}subscribe(a){this._observers.push(a)}unsubscribe(a){this._observers=this._observers.filter(e=>e!==a)}notify(){this._observers.forEach(a=>a(this._state))}};var v=class extends b{constructor(){super();let a=JSON.parse(localStorage.getItem("character"))||{};this._state={...a}}save(){return this._state}loadCharacter(a){this._state=a,this.notify()}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(a){super.subscribe(a),a(this._state)}set characterName(a){this._state={...this._state,characterName:a},this.notify()}set level(a){this._state={...this._state,level:a},this.notify()}set xp(a){this._state={...this._state,xp:a},this.notify()}set look(a){this._state={...this._state,look:a},this.notify()}set armor(a){this._state={...this._state,armor:a},this.notify()}set hitPoints(a){this._state={...this._state,hitPoints:a},this.notify()}set maxHitPoints(a){this._state={...this._state,maxHitPoints:a},this.notify()}set alignment(a){this._state={...this._state,alignment:a},this.notify()}set strength(a){this._state={...this._state,strength:a},this.notify()}set weak(a){this._state={...this._state,weak:a},this.notify()}set dexterity(a){this._state={...this._state,dexterity:a},this.notify()}set shaky(a){this._state={...this._state,shaky:a},this.notify()}set constitution(a){this._state={...this._state,constitution:a},this.notify()}set sick(a){this._state={...this._state,sick:a},this.notify()}set intelligence(a){this._state={...this._state,intelligence:a},this.notify()}set stunned(a){this._state={...this._state,stunned:a},this.notify()}set wisdom(a){this._state={...this._state,wisdom:a},this.notify()}set confused(a){this._state={...this._state,confused:a},this.notify()}set charisma(a){this._state={...this._state,charisma:a},this.notify()}set scarred(a){this._state={...this._state,scarred:a},this.notify()}set bonds(a){this._state={...this._state,bonds:a.filter(e=>e.trim()!=="")},this.notify()}set race(a){this._state={...this._state,race:a},this.notify()}set coin(a){this._state={...this._state,coin:a},this.notify()}set gear(a){this._state={...this._state,gear:a.filter(e=>e.trim()!=="")},this.notify()}set load(a){this._state={...this._state,load:a},this.notify()}set maxLoad(a){this._state={...this._state,maxLoad:a},this.notify()}set moves(a){this._state={...this._state,moves:a},this.notify()}set notes(a){this._state={...this._state,notes:a},this.notify()}set characterClass(a){this._state={...this._state,characterClass:a,look:void 0,moves:void 0,race:void 0,alignment:void 0},this.notify()}},te=new v,o=te;var i={Fighter:"Fighter",Ranger:"Ranger",Bard:"Bard",Druid:"Druid",Paladin:"Paladin",Thief:"Thief",Cleric:"Cleric",Wizard:"Wizard"};var y=l=>l.toLowerCase().replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g,a=>a.toUpperCase());var f=(l,...a)=>{let e="";return l.forEach((t,r)=>{e+=t+(a[r]||"")}),e};var ae=({title:l,options:a})=>f`<div class="flex flex-col xl:flex-row xl:items-center">
    <label for="body" class="font-bold">${l.toUpperCase()}</label>
    ${a.map(e=>f`<div class="flex-row ml-2 xl:ml-0">
            <input
              type="radio"
              name="${l}"
              id="${l}-${e}"
              value="${e}"
            />
            <label class="text-sm" for="${l}-${e}"
              >${y(e).replace("-"," ")}</label
            >
          </div>`).join(`
`)}
    <div class="flex-row ml-2 xl:ml-0">
      <input
        type="text"
        name="body"
        id="${l}-other"
        value=""
        class="bg-transparent border-b-2 border-b-black outline-none w-14"
      />
    </div>
  </div>`,g=class extends HTMLElement{constructor(){super();s(this,"_options",[]);s(this,"_title","")}static get observedAttributes(){return["options","title"]}attributeChangedCallback(e,t,r){switch(e){case"options":this._options=JSON.parse(r)||[],this.render();break;case"title":this._title=r||"",this.render();break;default:break}}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.innerHTML=ae({title:this._title,options:this._options})}};customElements.define("dw-character-look-group",g);var w=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onChange",e=>{let{name:t,value:r}=e.target;this[`_${t}`]=r,this.emit()});s(this,"hydrate",async e=>{let t=e.look||{};this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.groups.forEach(n=>{this[`_${n}`]=t[n]||"";let c=[...this.querySelectorAll(`[name="${n}"][type="radio"]`)];c.forEach(h=>{h.checked=h.value===t[n]});let d=this.querySelector(`#${n}-other`);d.value=c.every(h=>h.value!==t[n])&&t[n]?t[n]:""})})}get groups(){switch(this._characterClass){case i.Fighter:return["body","eyes","hair","skin"];case i.Ranger:case i.Bard:case i.Thief:case i.Cleric:return["body","eyes","hair","clothes"];case i.Druid:return["hair","eyes","clothes"];case i.Paladin:return["body","eyes","hair","holy-symbol"];case i.Wizard:return["body","eyes","hair","robes"];default:return[]}}emit(){switch(this._characterClass){case i.Fighter:o.look={body:this._body,eyes:this._eyes,hair:this._hair,skin:this._skin};break;case i.Ranger:case i.Bard:case i.Thief:case i.Cleric:o.look={body:this._body,eyes:this._eyes,hair:this._hair,clothes:this._clothes};break;case i.Druid:o.look={hair:this._hair,eyes:this._eyes,clothes:this._clothes};break;case i.Paladin:o.look={body:this._body,eyes:this._eyes,hair:this._hair,"holy-symbol":this["_holy-symbol"]};break;case i.Wizard:o.look={body:this._body,eyes:this._eyes,hair:this._hair,robes:this._robes};break;default:break}}onMount(){o.subscribe(this.hydrate),this.groups.reduce((t,r)=>[...t,...this.querySelectorAll(`[name="${r}"]`)],[]).forEach(t=>t.addEventListener("change",this.onChange))}beforeUnmount(){o.unsubscribe(this.hydrate),this.groups.reduce((t,r)=>[...t,...this.querySelectorAll(`[name="${r}"]`)],[]).forEach(t=>t.removeEventListener("change",this.onChange))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case i.Fighter:let e=await import("./fighter-look-VDSQ5JCS.js");this.innerHTML=e.default;break;case i.Ranger:let t=await import("./ranger-look-SO67EGNR.js");this.innerHTML=t.default;break;case i.Bard:let r=await import("./bard-look-LUT6FNQJ.js");this.innerHTML=r.default;break;case i.Druid:let n=await import("./druid-look-MZU6JRTR.js");this.innerHTML=n.default;break;case i.Paladin:let c=await import("./paladin-look-GDRYJQXM.js");this.innerHTML=c.default;break;case i.Thief:let d=await import("./thief-look-Z4AFMMAW.js");this.innerHTML=d.default;break;case i.Cleric:let h=await import("./cleric-look-NQU5UQWX.js");this.innerHTML=h.default;break;case i.Wizard:let u=await import("./wizard-look-F4NN2RWW.js");this.innerHTML=u.default;break;default:break}}};customElements.define("dw-character-look",w);var se=({title:l,options:a})=>f`<div class="flex flex-col">
    <label for="${l}" class="bg-black text-white flex flex-row relative">
      ${l.toUpperCase()}
    </label>
    ${a.map(e=>f`<div class="flex flex-row items-center">
          <input
            type="radio"
            name="${l}"
            id="${l}-${e.name}"
            class="mx-2"
            value="${e.name}"
          />
          <label for="${l}-${e.name}" class="flex flex-col">
            <div>${y(e.name)}</div>
            <div class="text-xs italic">${e.description}</div>
          </label>
        </div>`).join(`
`)}
    <div class="flex flex-row items-center">
      <input
        type="text"
        name="${l}"
        id="${l}-other"
        class="ml-9 bg-transparent outline-none border-b-2 border-black w-full"
      />
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" />`,k=class extends HTMLElement{constructor(){super();s(this,"_title","");s(this,"_options",[]);s(this,"_value","");s(this,"updateValues",()=>{let e=[...this.shadowRoot.querySelectorAll(`[name="${this._title}"][type="radio"]`)];e.forEach(r=>{r.checked=r.value===this._value});let t=this.shadowRoot.querySelector(`#${this._title}-other`);t.value=e.every(r=>r.value!==this._value)&&this._value&&this._value||""});this.attachShadow({mode:"open"})}static get observedAttributes(){return["options","title","value"]}attributeChangedCallback(e,t,r){switch(e){case"options":this._options=JSON.parse(r)||[],this.rerender();break;case"title":this._title=r||"",this.rerender();break;case"value":this._value=r&&r!=="undefined"?r:"",this.updateValues();break;default:break}}onChange(e){let t=e.composedPath()[0].value;this.dispatchEvent(new CustomEvent("dw-change",{detail:{value:t}}))}onMount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.addEventListener("change",this.onChange.bind(this))})}beforeUnmount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.removeEventListener("change",this.onChange.bind(this))})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}rerender(){this.beforeUnmount(),this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=se({title:this._title,options:this._options}),this.updateValues()}};customElements.define("dw-vertical-selection",k);var x=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onAlignmentChange",e=>{o.alignment=e.detail.value});s(this,"hydrate",async e=>{this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.querySelector("#alignment")?.setAttribute("value",e.alignment)})}onMount(){o.subscribe(this.hydrate),this.querySelector("#alignment")?.addEventListener("dw-change",this.onAlignmentChange)}beforeUnmount(){o.unsubscribe(this.hydrate),this.querySelector("#alignment")?.removeEventListener("dw-change",this.onAlignmentChange)}connectedCallback(){this.render().then(()=>this.onMount())}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case i.Fighter:let e=await import("./fighter-alignment-DVQX3AGN.js");this.innerHTML=e.default;break;case i.Ranger:let t=await import("./ranger-alignment-JLOZBRE3.js");this.innerHTML=t.default;break;case i.Bard:let r=await import("./bard-alignment-XCWO6EBW.js");this.innerHTML=r.default;break;case i.Druid:let n=await import("./druid-alignment-LEWBAOGW.js");this.innerHTML=n.default;break;case i.Paladin:let c=await import("./paladin-alignment-UZYDVALU.js");this.innerHTML=c.default;break;case i.Thief:let d=await import("./thief-alignment-TY44A7PS.js");this.innerHTML=d.default;break;case i.Cleric:let h=await import("./cleric-alignment-ZUB7M3V3.js");this.innerHTML=h.default;break;case i.Wizard:let u=await import("./wizard-alignment-IUOE3XYY.js");this.innerHTML=u.default;break;default:break}}};customElements.define("dw-character-alignment",x);var P=`<div class="text-sm italic text-center mb-1">
  Assign these scores to your stats: 16(+2), 15(+1), 13(+1), 12(-), 9(-), 8(-1)
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
  <dw-character-attribute id="strength">
    Strength
    <span slot="abbreviation">STR</span>
    <span slot="debuff">Weak -1</span>
  </dw-character-attribute>
  <dw-character-attribute id="dexterity">
    Dexterity
    <span slot="abbreviation">DEX</span>
    <span slot="debuff">Shaky -1</span>
  </dw-character-attribute>
  <dw-character-attribute id="constitution">
    Constitution
    <span slot="abbreviation">CON</span>
    <span slot="debuff">Sick -1</span>
  </dw-character-attribute>
  <dw-character-attribute id="intelligence">
    Intelligence
    <span slot="abbreviation">INT</span>
    <span slot="debuff">Stunned -1</span>
  </dw-character-attribute>
  <dw-character-attribute id="wisdom">
    Wisdom
    <span slot="abbreviation">WIS</span>
    <span slot="debuff">Confused -1</span>
  </dw-character-attribute>
  <dw-character-attribute id="charisma">
    Charisma
    <span slot="abbreviation">CHA</span>
    <span slot="debuff">Scarred -1</span>
  </dw-character-attribute>
</div>
`;var F=`<style>
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
`;var C=class extends HTMLElement{constructor(){super();s(this,"_id");s(this,"_value",0);s(this,"_debuff",!1);s(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));s(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));s(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});s(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,r){switch(e){case"id":this._id=r;break;case"debuff":this._debuff=r==="true";let n=this.shadowRoot.querySelector("#debuff");n.checked=this._debuff;break;case"value":default:this._value=r;let c=this.shadowRoot.querySelector('[name="score"]');c.value=r,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),r=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),r.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=F,this.updateModifier()}};customElements.define("dw-character-attribute",C);var _=["strength","dexterity","constitution","intelligence","wisdom","charisma"],E=class extends HTMLElement{constructor(){super();s(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":o.strength=t.detail;break;case"dexterity":o.dexterity=t.detail;break;case"constitution":o.constitution=t.detail;break;case"intelligence":o.intelligence=t.detail;break;case"wisdom":o.wisdom=t.detail;break;case"charisma":o.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});s(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":o.weak=t.detail;break;case"dexterity":o.shaky=t.detail;break;case"constitution":o.sick=t.detail;break;case"intelligence":o.stunned=t.detail;break;case"wisdom":o.confused=t.detail;break;case"charisma":o.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});s(this,"hydrate",e=>{_.forEach(t=>{let r=this.querySelector(`#${t}`),n,c;switch(t){case"strength":n=e.strength,c=e.weak;break;case"dexterity":n=e.dexterity,c=e.shaky;break;case"constitution":n=e.constitution,c=e.sick;break;case"intelligence":n=e.intelligence,c=e.stunned;break;case"wisdom":n=e.wisdom,c=e.confused;break;case"charisma":n=e.charisma,c=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}r.setAttribute("value",n||0),r.setAttribute("debuff",c||!1)})})}connectedCallback(){this.render(),o.subscribe(this.hydrate),_.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){_.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=P}};customElements.define("dw-character-attributes",E);var z=`<div id="bonds" class="flex flex-col">
  <dw-section-header>
    BONDS
  </dw-section-header>
  <dw-infinite-list id="bonds-list"></dw-infinite-list>
</div>
`;var N=`<div id="list">
  <input
    id="new"
    type="text"
    class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full"
  />
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var I=(l,a)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<input type="text" value="${l}" id="item-${a}" class="${t}" />`,e.content.firstChild},L=class extends HTMLElement{constructor(){super();s(this,"_value",[]);s(this,"onUpdate",async(e,t)=>{let r=e.target.value;if(this._value[t]=r,r===""){let n=this._value;this._value=this._value.filter((c,d)=>d!==t),this.renderList(n,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});s(this,"onAdd",e=>{if(e==="")return;let t=this._value||[],r=t.length;this._value=[...t,e],this.shadowRoot.querySelector("#new").value="";let n=I(e,r);n.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(n,this.shadowRoot.querySelector("#new")),n.setSelectionRange(n.value.length,n.value.length),n.addEventListener("keyup",c=>{this.onUpdate(c,r)}),n.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[r,n]=t.reduce(([d,h],u,p)=>(p<e.length&&e[p]!==u&&h.push(p),p>=e.length&&d.push(u),[d,h]),[[],[]]);return{removed:e.reduce((d,h,u)=>(t[u]||d.push(u),d),[]),added:r,modified:n}}renderList(e=[],t=[]){let{removed:r,added:n,modified:c}=this.diff(e,t),d=this.shadowRoot.querySelector("#list");r.forEach(h=>{let u=this.shadowRoot.querySelector(`#item-${h}`);u&&(u.removeEventListener("keyup",p=>this.onUpdate(p,h)),u.remove())}),c.forEach(h=>{let u=this.shadowRoot.querySelector(`#item-${h}`);u&&(u.value=t[h])}),n.forEach((h,u)=>{let p=I(h,e.length+u);p.addEventListener("keyup",V=>this.onUpdate(V,u)),d.insertBefore(p,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",n=>this.onUpdate(n,t))})}render(){this.shadowRoot.innerHTML=N,this.renderList([],this._value)}};customElements.define("dw-infinite-list",L);var S=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){o.bonds=e.detail}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=z}};customElements.define("dw-character-bonds",S);var j=`<dw-vertical-selection id="race" title="race"></dw-vertical-selection>
`;var m=(l,a)=>({name:l,description:a}),M=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"onChange",e=>{o.race=e.detail.value});s(this,"hydrate",e=>{this._characterClass!==e.characterClass&&(this._characterClass=e.characterClass),this.querySelector("#race")?.setAttribute("value",e.race),this.updateOptions()})}get options(){switch(this._characterClass){case i.Fighter:return[m("dwarf","When you share a drink with someone, you may parley with them using CON instead of CHA."),m("elf","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),m("halfling","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),m("human","Once per battle you may reroll a single damage roll (yours or someone else's")];case i.Ranger:return[m("elf","When you Undertake A Perilous Journey through wilderness whatever job you take you succeed as if you rolled a 10+."),m("human","When you Make Camp in a dungeon or city, you don't need to consume a ration.")];case i.Bard:return[m("elf","When you enter an important location (your call) you can ask the GM for one fact from the history of that location."),m("human","When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest.")];case i.Druid:return[m("elf","The sap of the elder trees flows within you. In addition to any other attunements, the Great Forest is always considered your land."),m("human","As your people learned to bind animals to field and farm, so too are you bound to them. You may always take the shape of any domesticated animal, in addition to your normal options."),m("halfling","You sing the healing songs of spring and brook. When you make camp, you and your allies heal +1d6.")];case i.Paladin:return[m("human","When you pray for guidance, even for a moment and ask \u201Cwhat here is evil?\u201D the GM will tell you, honestly.")];case i.Thief:return[m("halfling","When you attack with a ranged weapon, deal +2 damage."),m("human","You are a professional. When you Spout Lore or Discern Realities about criminal activities, take +1.")];case i.Cleric:return[m("dwarf","You are one with stone. When you commune you are also granted a special version of Words of the Unspeaking as a rote which only works on stone."),m("human","Your faith is diverse. Choose one wizard spell. You can cast and be granted that spell as if it was a cleric spell.")];case i.Wizard:return[m("elf","Magic is as natural as breath to you. Detect Magic is a cantrip for you."),m("human","Choose one cleric spell. You can cast it as if it was a wizard spell.")];default:return[]}}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}updateOptions(){this.querySelector("#race").setAttribute("options",JSON.stringify(this.options))}render(){this.innerHTML=j,this.updateOptions()}};customElements.define("dw-character-race",M);var B=`<style>
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
`;var T=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,r){e==="value"&&(this.querySelector("#coin").innerHTML=r)}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{o.coin=t.target.value})}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{o.coin=t.target.value})}render(){this.innerHTML=B}};customElements.define("dw-character-coin",T);var Y=`<div>
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
`;var q=class extends HTMLElement{constructor(){super();s(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){o.gear=e.detail}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{o.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{o.maxLoad=e.target.value})}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{o.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{o.maxLoad=e.target.value})}render(){this.innerHTML=Y}};customElements.define("dw-character-gear",q);var H=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"_value",{})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}updateDom(){let e=this.firstChild;!e||(e.value=this._value)}async hydrate(e){e.characterClass!==this._characterClass&&(this._characterClass=e.characterClass,await this.render())}connectedCallback(){this.render(),o.subscribe(this.hydrate.bind(this))}disconnectedCallback(){o.unsubscribe(this.hydrate.bind(this))}async render(){switch(this._characterClass){case i.Fighter:await import("./fighter-moves-UYOARIUJ.js"),this.innerHTML="<dw-fighter-moves></dw-fighter-moves>";break;case i.Ranger:await import("./ranger-moves-5NDNEC6Q.js"),this.innerHTML="<dw-ranger-moves></dw-ranger-moves>";break;case i.Bard:await import("./bard-moves-2VHU6DKC.js"),this.innerHTML="<dw-bard-moves></dw-bard-moves>";break;case i.Druid:await import("./druid-moves-3HTZX3AH.js"),this.innerHTML="<dw-druid-moves></dw-druid-moves>";break;case i.Paladin:await import("./paladin-moves-CCQROVA5.js"),this.innerHTML="<dw-paladin-moves></dw-paladin-moves>";break;case i.Thief:await import("./thief-moves-GGB33BJL.js"),this.innerHTML="<dw-thief-moves></dw-thief-moves>";break;case i.Cleric:await import("./cleric-moves-C2RNPC57.js"),this.innerHTML="<dw-cleric-moves></dw-cleric-moves>";break;case i.Wizard:await import("./wizard-moves-BRVPE3UG.js"),this.innerHTML="<dw-wizard-moves></dw-wizard-moves>";break;default:this.innerHTML="";break}this.updateDom()}};customElements.define("dw-character-moves",H);var G=`<div class="flex flex-col">
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
</div>
`;var J=`<label
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
`;var R=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["for","icon-class"]}attributeChangedCallback(a,e,t){let r=this.shadowRoot.querySelector("#labeled-decorate-input__input");switch(a){case"for":this.shadowRoot.querySelector("#labeled-decorate-input__label")?.setAttribute("for",t);break;case"icon-class":this.shadowRoot.querySelector("#labeled-decorated-input__icon")?.classList.add(t);break;default:break}}onMount(){let a=this.shadowRoot.querySelector("#labeled-decorated-input__icon"),e=this.shadowRoot.querySelector("#labeled-decorate-input__label");a.classList.add(this.getAttribute("icon-class")),e.setAttribute("for",this.getAttribute("for"))}connectedCallback(){this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=J}};customElements.define("dw-labeled-decorated-input",R);var O=class extends HTMLElement{constructor(){super();s(this,"_characterClass");s(this,"_inputs",[["armor","armor"],["hit-points","hitPoints"],["max-hit-points","maxHitPoints"]]);s(this,"onArmorChange",e=>{o.armor=e.target.value});s(this,"onHitPointsChange",e=>{o.hitPoints=e.target.value});s(this,"onMaxHitPointsChange",e=>{o.maxHitPoints=e.target.value});s(this,"onChange",e=>{let{name:t}=e.target;switch(t){case"armor":this.onArmorChange(e);break;case"hit-points":this.onHitPointsChange(e);break;case"max-hit-points":this.onMaxHitPointsChange(e);break;default:break}});s(this,"hydrate",e=>{if(this._characterClass!==e.characterClass){this._characterClass=e.characterClass;let t=this.querySelector("#damage-input");t&&(t.innerHTML=this.getDiceAmount())}this._inputs.forEach(([t,r])=>{let n=this.querySelector(`#${t}`);n.value=e[r]||0})});s(this,"onMount",()=>{o.subscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).addEventListener("change",this.onChange)})});s(this,"beforeUnmount",()=>{o.unsubscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).removeEventListener("dw-input-change",this.onChange)})})}getDiceAmount(){switch(this._characterClass){case i.Fighter:case i.Paladin:return"D10";case i.Ranger:case i.Thief:return"D8";case i.Bard:case i.Druid:case i.Cleric:return"D6";case i.Wizard:return"D4";default:return"D?"}}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=G;let e=this.querySelector("#damage-input");e&&(e.innerHTML=this.getDiceAmount())}};customElements.define("dw-character-armor-hp-damage",O);var X=`<div class="flex flex-row relative">
  <label class="absolute t-2 font-bold" for="notes">NOTES</label>
  <textarea id="notes" class="px-2 pt-7 flex-1" rows="20"></textarea>
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var A=class extends HTMLElement{constructor(){super();s(this,"_value","");this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,r){if(e==="value"&&t!==r){this._value=r;let n=this.shadowRoot.querySelector("#notes");n&&(n.innerHTML=r)}}onMount(){this.shadowRoot.querySelector("#notes")?.addEventListener("keyup",this.onChange.bind(this))}beforeUnmount(){this.shadowRoot.querySelector("#notes")?.removeEventListener("keyup",this.onChange.bind(this))}onChange(e){this._value=e.target.value,this.dispatchEvent(new CustomEvent("notes-changed",{detail:e.target.value}))}connectedCallback(){this._value=this.getAttribute("value")||"",this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=X;let e=this.shadowRoot.querySelector("#notes");e&&(e.innerHTML=this._value)}};customElements.define("dw-notes",A);var W=class extends HTMLElement{constructor(){super();s(this,"onCharacterNameChange",e=>{o.characterName=e.target.value});s(this,"onLevelChange",e=>{o.level=e.target.value});s(this,"onXpChange",e=>{o.xp=e.target.value});s(this,"onMovesChange",e=>{o.moves=e.detail});s(this,"onNotesChange",e=>{o.notes=e.detail});s(this,"hydrate",e=>{let t=this.querySelector("#character-name"),r=this.querySelector("#level"),n=this.querySelector("#xp"),c=this.querySelector("dw-character-moves"),d=this.querySelector("dw-notes");t.value=e.characterName||"",r.value=e.level||"",n.value=e.xp||0,c.value=e.moves||{},d.setAttribute("value",e.notes||"")})}connectedCallback(){this.render(),o.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),r=this.querySelector("#xp"),n=this.querySelector("dw-character-moves"),c=this.querySelector("dw-notes");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),r.addEventListener("change",this.onXpChange),n.addEventListener("dw-character-moves-change",this.onMovesChange),c.addEventListener("notes-changed",this.onNotesChange)}disconnectedCallback(){o.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),r=this.querySelector("dw-character-moves"),n=this.querySelector("dw-notes");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),xpElement.removeEventListener("change",this.onXpChange),r.removeEventListener("dw-character-moves-change",this.onMovesChange),n.removeEventListener("notes-changed",this.onNotesChange)}render(){this.innerHTML=U}};customElements.define("dw-character-form",W);var K=`<style>
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
      <a id="player-moves-link" href="#player-moves" class="text-left mx-2 hidden">Player Moves</a>
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
`;var fe=(l,a,e)=>{let t=document.createElement("a"),r=new Blob([l],{type:e});t.href=URL.createObjectURL(r),t.download=a,t.click()},Q=fe;var be=l=>`<option value="${l}" />`,$=class extends HTMLElement{constructor(){super();s(this,"_toggled",!1);s(this,"_characterClass","");s(this,"_characterName","");s(this,"onToggle",()=>{let e=this.shadowRoot.querySelector("#drawer"),t=this.shadowRoot.querySelector("#drawer__toggle");this._toggled=!this._toggled,this._toggled?(t.innerHTML="x",t.classList.add("text-left"),t.classList.add("ml-2"),e.classList.remove("w-10"),e.classList.add("w-64"),[...this.shadowRoot.querySelectorAll(".invisible")].filter(n=>n.id!=="drawer__toggle").forEach(n=>{n.classList.remove("invisible"),n.classList.add("visible")})):(t.innerHTML="\u2261",t.classList.remove("text-left"),t.classList.remove("ml-2"),e.classList.remove("w-64"),e.classList.add("w-10"),[...this.shadowRoot.querySelectorAll(".visible")].filter(n=>n.id!=="drawer__toggle").forEach(n=>{n.classList.remove("visible"),n.classList.add("invisible")}))});s(this,"onClassChange",e=>{let t=this._characterClass;!t||t===""||confirm("Are you sure you want to change your class? This will reset some values on this form.")?(this._characterClass=e.target.value,o.characterClass=this._characterClass):o.characterClass=t});s(this,"onLoadClick",()=>{this.shadowRoot.querySelector("#load-character-file").click()});s(this,"onSaveClick",()=>Q(JSON.stringify(o.save()),`${this._characterName.toLocaleLowerCase()}.json`,"text/plain"));s(this,"onLoadFileChange",e=>{let t=e.currentTarget.files?.[0];if(t){var r=new FileReader;r.onload=n=>{let c=n.target?.result;if(!c||typeof c!="string")throw new Error("No file contents or multiple files detected.");let d=JSON.parse(c);o.loadCharacter(d)},r.readAsText(t),e.currentTarget.value=""}else alert("Failed to load file!")});s(this,"hydrate",e=>{this._characterClass=e.characterClass,this._characterName=e.characterName,this.shadowRoot.querySelector("#character-class").value=this._characterClass||"",this.shadowRoot.querySelector("#class-name").innerHTML=this._characterClass||"";let t=this.shadowRoot.querySelector("#player-moves-link");this._characterClass&&this._characterClass!==""?t?.classList.remove("hidden"):t.classList.contains("hidden")||t?.classList.add("hidden")});this.attachShadow({mode:"open"})}onMount(){o.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").addEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").addEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").addEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").addEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").addEventListener("change",this.onLoadFileChange)}beforeUnmount(){o.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").removeEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").removeEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").removeEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").removeEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#load-character-file").removeEventListener("change",this.onLoadFileChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=K,this.shadowRoot.querySelector("#class-list").innerHTML=Object.values(i).map(be).join("")}};customElements.define("dw-drawer",$);var Z=`<div id="player-moves">
  <h2 class="font-bold text-2xl">Player Moves</h2>
  <hr />
  <h3 class="flex-1 text-2xl medium mt-3">Basic Moves</h3>
  <div class="grid grid-cols-3 gap-3">
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Hack and Slash</h4>
      <p>
        When you attack an enemy in melee, roll+Str. On a 10+ you deal
        your damage to the enemy and avoid their attack. At your option,
        you may choose to do +1d6 damage but expose yourself to the
        enemy's attack. On a 7-9, you deal your damage to the enemy and
        the enemy makes an attack against you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Defy Danger</h4>
      <p>
        When you act despite an imminent threat or suffer a calamity, say
        how you deal with it and roll. If you do it...
      </p>
      <ul class="list-disc ml-5">
        <li>by powering through, +Str </li>
        <li>by getting out of the way or acting fast, +Dex</li>
        <li>by enduring, +Con</li>
        <li>with quick thinking, +Int</li>
        <li>through mental fortitude, +Wis</li>
        <li>sing charm and social grace, +Cha </li>
      </ul>
      <p>
        On a 10+, you do what you set out to, the threat doesn't come to
        bear. On a 7-9, you stumble, hesitate, or flinch: the GM will
        offer you a worse outcome, hard bargain, or ugly choice.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Discern Realities</h4>
      <p>
        When you closely study a situation or person, roll+Wis. On a 10+
        ask the GM three questions from the list below. On a 7-9 ask only
        one. Take +1 forward when acting on the answers.
      </p>
      <ul class="list-disc ml-5">
        <li>What happened here recently?</li>
        <li>What is about to happen?</li>
        <li>What should I be on the lookout for?</li>
        <li>What here is useful or valuable to me?</li>
        <li>Who's really in control here?</li>
        <li>What here is not what it appears to be?</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Volley</h4>
      <p>
        When you take aim and shoot at an enemy at range, roll+Dex. On a
        10+ you have a clear shot\u2014deal your damage. On a 7-9, choose one
        (whichever you choose you deal your damage):
      </p>
      <ul class="list-disc ml-5">
        <li>
          You have to move to get the shot placing you in danger of the
          GM's choice
        </li>
        <li>You have to take what you can get: -1d6 damage</li>
        <li>
          You have to take several shots, reducing your ammo by one.
        </li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Defend</h4>
      <p>
        When you stand in defense of a person, item, or location under
        attack, roll+Con. On a 10+, hold 3. On a 7-9, hold 1. So long as
        you stand in defense, when you or the thing you defend is attacked
        you may spend hold, 1 for 1, to choose an option:
      </p>
      <ul class="list-disc ml-5">
        <li>Redirect an attack from the thing you defend to yourself</li>
        <li>Halve the attack's effect or damage</li>
        <li>
          Open up the attacker to an ally giving that ally +1 forward
          against the attacker
        </li>
        <li>Deal damage to the attacker equal to your level</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Spout Lore</h4>
      <p>
        When you consult your accumulated knowledge about something,
        roll+Int. On a 10+ the GM will tell you something interesting and
        useful about the subject relevant to your situation. On a 7-9 the
        GM will only tell you something interesting it's on you to make it
        useful. The GM might ask you \u201CHow do you know this?\u201D Tell them the
        truth, now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Parley</h4>
      <p>
        When you have leverage on a GM character and manipulate them,
        roll+Cha. Leverage is something they need or want. On a hit they
        ask you for something and do it if you make them a promise first.
        On a 7-9, they need some concrete assurance of your promise, right
        now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Aid or Interfere</h4>
      <p>
        When you help or hinder someone you have a Bond with, roll+Bond
        with them. On a hit they take +1 or -2, your choice. On a 7-9 you
        also expose yourself to danger, retribution, or cost.
      </p>
    </div>
  </div>
  <h3 class="flex-1 text-2xl medium mt-3">Special Moves</h3>
  <hr />
  <div class="grid grid-cols-3 gap-3 px-2">
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Last Breath</h4>
      <p>
        When you're dying you catch a glimpse of what lies beyond the
        Black Gates of Death's Kingdom (the GM will describe it). Then
        roll (just roll, +nothing\u2014yeah, Death doesn't care how tough or
        cool you are). On a 10+ you've cheated death\u2014 you're in a bad spot
        but you're still alive. On a 7-9 Death will offer you a bargain.
        Take it and stabilize or refuse and pass beyond the Black Gates
        into whatever fate awaits you. On a miss, your fate is sealed.
        You're marked as Death's own and you'll cross the threshold soon.
        The GM will tell you when.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Undertake A Perilous Journey</h4>
      <p>
        When you travel through hostile territory, choose one member of
        the party to act as trailblazer, one to scout ahead, and one to be
        quartermaster (the same character cannot have two jobs). If you
        don't have enough party members or choose not to assign a job,
        treat that job as if it had rolled a 6. Each character with a job
        to do rolls+Wis. On a 10+ the quartermaster reduces the number of
        rations required by one. On a 10+ the trailblazer reduces the
        amount of time it takes to reach your destination (the GM will say
        by how much). On a 10+ the scout will spot any trouble quick
        enough to let you get the drop on it. On a 7-9 each roles performs
        their job as expected: the normal number of rations are consumed,
        the journey takes about as long as expected, no one gets the drop
        on you but you don't get the drop on them either.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">End of Session</h4>
      <p>
        When you reach the end of a session, choose one your bonds that
        you feel is resolved (completely explored, no longer relevant, or
        otherwise). Ask the player of the character you have the bond with
        if they agree. If they do, mark XP and write a new bond with
        whomever you wish. Once bonds have been updated look at your
        alignment. If you fulfilled that alignment at least once this
        session, mark XP. Then answer these three questions as a group:
      </p>
      <ul class="list-disc ml-5">
        <li>Did we learn something new and important about the world?</li>
        <li>Did we overcome a notable monster or enemy?</li>
        <li>Did we loot a memorable treasure?</li>
      </ul>
      <p>For each "yes" answer everyone marks XP.</p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Encumbrance</h4>
      <p>
        When you make a move while carrying weight up to or equal to Load,
        you're fine. When you make a move while carrying weight equal to
        load+1 or load+2, you take -1. When you make a move while carrying
        weight greater than load+2, you have a choice: drop at least 1
        weight and roll at -1, or automatically fail.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Recover</h4>
      <p>
        When you do nothing but rest in comfort and safety after a day of
        rest you recover all your HP. After three days of rest you remove
        one debility of your choice. If you're under the care of a healer
        (magical or otherwise) you heal a debility for every two days of
        rest instead.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Level Up</h4>
      <p>
        When you have downtime (hours or days) and XP equal to (or greater
        than) your current level+7, subtract your current level +7 from
        your XP, increase your level by 1, and choose a new advanced move
        from your class. If you are the wizard, you also get to add a new
        spell to your spellbook. Choose one of your stats and increase it
        by 1 (this may change your modifier). Note that changing your
        Constitution increases your maximum and current HP. Ability scores
        can't go higher than 18.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Take Watch</h4>
      <p>
        When you're on watch and something approaches the camp, roll+Wis.
        On a 10+ you're able to wake the camp and prepare a response, the
        camp takes +1 forward. On a 7-9 you react just a moment too late;
        the camp is awake but hasn't had time to prepare. You have weapons
        and armor but little else. On a miss whatever lurks outside the
        campfire's light has the drop on you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Carouse</h4>
      <p>
        When you return triumphant and throw a big party, spend 100 coin
        and roll + extra 100s of coin spent. On a 10+ choose 3. On a 7-9
        choose 1. On a miss, you still choose one, but things get really
        out of hand.
      </p>
      <ul class="list-disc ml-5">
        <li>You befriend a useful NPC</li>
        <li>You hear rumors of an opportunity</li>
        <li>You gain useful information</li>
        <li>You are not entagngled, enscorcelled, or tricked</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Outstanding Warrants</h4>
      <p>
        When you return to a civilized place in which you've caused
        trouble before, roll+Cha. On a hit, word has spread of your deeds
        and everyone recognizes you. On a 7-9, that, and, the GM chooses a
        complication:
      </p>
      <ul class="list-disc ml-5">
        <li>The local constabulary has a warrant out for your arrest</li>
        <li>Someone has put a price on your head</li>
        <li>
          Someon important to you has been put in a bad spot as a result
          of your actions
        </li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Bolster</h4>
      <p>
        When you spend your leisure time in study, meditation, or hard
        practice, you gain preparation. If you prepare for a week or two,
        1 preparation. If you prepare for a month or longer, 3
        preparation. When your preparation pays off spend 1 preparation
        for +1 to any roll. You can only spend one preparation per roll.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Recruit</h4>
      <p>
        When you put out word that you're looking to hire help, roll. If
        you make it known...
      </p>
      <ul class="list-disc ml-5">
        <li>...that your pay is generous, take +1</li>
        <li>...what you're setting out to do, take +1</li>
        <li>...that they'll get a share of whatever you find, take +1</li>
      </ul>
      <p>
        If you have a useful reputation around these parts take an
        additional +1. On a 10+ you've got your pick of a number of
        skilled applicants, your choice who you hire, no penalty for not
        taking them along. On a 7-9 you'll have to settle for someone
        close or turn them away. On a miss someone influential and
        ill-suited declares they'd like to come along (a foolhardy youth,
        a loose-cannon, or a veiled enemy, for example), bring them and
        take the consequences or turn them away. If you turn away
        applicants you take -1 forward to Recruit.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 class="text-lg font-bold">Supply</h4>
      <p>
        When you go to buy something with money on hand, if it's something
        readily available in the settlement you're in, you can buy it at
        market price. If it's something special, beyond what's usually
        available here, or non-mundane, roll+Cha. On a 10+ you find what
        you're looking for at a fair price. On a 7-9 you'll have to pay
        more or settle for something similar.
      </p>
    </div>
  </div>
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var D=class extends HTMLElement{constructor(){super();s(this,"_characterClass");this.attachShadow({mode:"open"})}hydrate(e){this._characterClass=e.characterClass,this._characterClass&&this._characterClass!==""?this.classList.remove("hidden"):this.classList.contains("hidden")||this.classList.add("hidden")}onMount(){o.subscribe(this.hydrate.bind(this))}beforeUnmount(){o.unsubscribe(this.hydrate.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=Z}};customElements.define("dw-player-moves",D);
