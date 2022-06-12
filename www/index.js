(()=>{var V=Object.defineProperty;var Z=(n,a,e)=>a in n?V(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var i=(n,a,e)=>(Z(n,typeof a!="symbol"?a+"":a,e),e);var $=`<form
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
      <dw-character-look></dw-character-look>
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
      <dw-character-alignment></dw-character-alignment>
      <dw-character-bonds></dw-character-bonds>
      <dw-character-race></dw-character-race>
      <dw-character-coin></dw-character-coin>
      <dw-character-gear></dw-character-gear>
    </div>
  </div>
</form>
`;var p=class{constructor(){i(this,"_observers");i(this,"_state");this._observers=[],this._state=void 0}subscribe(a){this._observers.push(a)}unsubscribe(a){this._observers=this._observers.filter(e=>e!==a)}notify(){this._observers.forEach(a=>a(this._state))}};var v=class extends p{constructor(){super();let a=JSON.parse(localStorage.getItem("character"))||{};this._state={...a}}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(a){super.subscribe(a),a(this._state)}set characterName(a){this._state={...this._state,characterName:a},this.notify()}set level(a){this._state={...this._state,level:a},this.notify()}set xp(a){this._state={...this._state,xp:a},this.notify()}set look(a){this._state={...this._state,look:a},this.notify()}set armor(a){this._state={...this._state,armor:a},this.notify()}set hitPoints(a){this._state={...this._state,hitPoints:a},this.notify()}set maxHitPoints(a){this._state={...this._state,maxHitPoints:a},this.notify()}set alignment(a){this._state={...this._state,alignment:a},this.notify()}set strength(a){this._state={...this._state,strength:a},this.notify()}set weak(a){this._state={...this._state,weak:a},this.notify()}set dexterity(a){this._state={...this._state,dexterity:a},this.notify()}set shaky(a){this._state={...this._state,shaky:a},this.notify()}set constitution(a){this._state={...this._state,constitution:a},this.notify()}set sick(a){this._state={...this._state,sick:a},this.notify()}set intelligence(a){this._state={...this._state,intelligence:a},this.notify()}set stunned(a){this._state={...this._state,stunned:a},this.notify()}set wisdom(a){this._state={...this._state,wisdom:a},this.notify()}set confused(a){this._state={...this._state,confused:a},this.notify()}set charisma(a){this._state={...this._state,charisma:a},this.notify()}set scarred(a){this._state={...this._state,scarred:a},this.notify()}set bonds(a){this._state={...this._state,bonds:a.filter(e=>e.trim()!=="")},this.notify()}set race(a){this._state={...this._state,race:a},this.notify()}set coin(a){this._state={...this._state,coin:a},this.notify()}set gear(a){this._state={...this._state,gear:a.filter(e=>e.trim()!=="")},this.notify()}set load(a){this._state={...this._state,load:a},this.notify()}set maxLoad(a){this._state={...this._state,maxLoad:a},this.notify()}set moves(a){this._state={...this._state,moves:a},this.notify()}set characterClass(a){this._state={...this._state,characterClass:a},this.notify()}},te=new v,o=te;var O=`<div class="flex flex-col">
  <dw-section-header>LOOK</dw-section-header>
  <div class="px-2 text-xs italic">Choose one for each, or write your own:</div>
  <dw-character-look-group
    title="body"
    options='["built", "lithe", "ravaged"]'
  ></dw-character-look-group>
  <dw-character-look-group
    title="eyes"
    options='["hard", "dead", "eager"]'
  ></dw-character-look-group>
  <dw-character-look-group
    title="hair"
    options='["wild", "shorn", "battered-helm"]'
  ></dw-character-look-group>
  <dw-character-look-group
    title="skin"
    options='["calloused", "tanned", "scarred"]'
  ></dw-character-look-group>
</div>
`;var U=`<h1 class="bg-black text-white px-2">
  <slot></slot>
</h1>
`;var f=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let a=this.innerHTML;this.innerHTML=U,this.querySelector("slot").innerHTML=a}};customElements.define("dw-section-header",f);var b=n=>n.toLowerCase().replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g,a=>a.toUpperCase());var m=(n,...a)=>{let e="";return n.forEach((t,s)=>{e+=t+(a[s]||"")}),e};var ie=({title:n,options:a})=>m`<div class="flex flex-col xl:flex-row xl:items-center">
    <label for="body" class="font-bold">${n.toUpperCase()}</label>
    ${a.map(e=>m`<div class="flex-row ml-2 xl:ml-0">
            <input
              type="radio"
              name="${n}"
              id="${n}-${e}"
              value="${e}"
            />
            <label class="text-sm" for="${n}-${e}"
              >${b(e).replace("-"," ")}</label
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
  </div>`,g=class extends HTMLElement{constructor(){super();i(this,"_options",[]);i(this,"_title","")}static get observedAttributes(){return["options","title"]}attributeChangedCallback(e,t,s){switch(e){case"options":this._options=JSON.parse(s)||[],this.render();break;case"title":this._title=s||"",this.render();break;default:break}}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.innerHTML=ie({title:this._title,options:this._options})}};customElements.define("dw-character-look-group",g);var w=class extends HTMLElement{constructor(){super();i(this,"_groups",["body","eyes","hair","skin"]);i(this,"onChange",e=>{let{name:t,value:s}=e.target;this[`_${t}`]=s,this.emit()});i(this,"hydrate",e=>{let t=e.look||{};this._groups.forEach(s=>{this[`_${s}`]=t[s]||"";let r=[...this.querySelectorAll(`[name="${s}"][type="radio"]`)];r.forEach(d=>{d.checked=d.value===t[s]});let l=this.querySelector(`#${s}-other`);l.value=r.every(d=>d.value!==t[s])&&t[s]?t[s]:""})})}emit(){o.look={body:this._body,eyes:this._eyes,hair:this._hair,skin:this._skin}}onMount(){o.subscribe(this.hydrate),this._groups.reduce((t,s)=>[...t,...this.querySelectorAll(`[name="${s}"]`)],[]).forEach(t=>t.addEventListener("change",this.onChange))}beforeUnmount(){o.unsubscribe(this.hydrate),this._groups.reduce((t,s)=>[...t,...this.querySelectorAll(`[name="${s}"]`)],[]).forEach(t=>t.removeEventListener("change",this.onChange))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=O}};customElements.define("dw-character-look",w);var D=`<dw-vertical-selection
  id="alignment"
  title="alignment"
  options='[
    {"name": "good", "description": "Defend those weaker than you."},
    {"name": "neutral", "description": "Defeat a worthy opponent."},
    {"name": "evil", "description": "Kill a defenseless or surrendered enemy."}
  ]'
></dw-vertical-selection>
`;var ne=({title:n,options:a})=>m`<div class="flex flex-col">
    <label for="${n}" class="bg-black text-white flex flex-row relative">
      ${n.toUpperCase()}
    </label>
    ${a.map(e=>m`<div class="flex flex-row items-center">
          <input
            type="radio"
            name="${n}"
            id="${n}-${e.name}"
            class="mx-2"
            value="${e.name}"
          />
          <label for="${n}-${e.name}" class="flex flex-col">
            <div>${b(e.name)}</div>
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
  <link rel="stylesheet" href="tailwind.css" />`,y=class extends HTMLElement{constructor(){super();i(this,"_title","");i(this,"_options",[]);i(this,"_value","");i(this,"updateValues",()=>{let e=[...this.shadowRoot.querySelectorAll(`[name="${this._title}"][type="radio"]`)];e.forEach(s=>{s.checked=s.value===this._value});let t=this.shadowRoot.querySelector(`#${this._title}-other`);t.value=e.every(s=>s.value!==this._value)&&this._value&&this._value||""});this.attachShadow({mode:"open"})}static get observedAttributes(){return["options","title","value"]}attributeChangedCallback(e,t,s){switch(e){case"options":this._options=JSON.parse(s)||[],this.rerender();break;case"title":this._title=s||"",this.rerender();break;case"value":this._value=s||"",this.updateValues();break;default:break}}onChange(e){let t=e.composedPath()[0].value;this.dispatchEvent(new CustomEvent("dw-change",{detail:{value:t}}))}onMount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.addEventListener("change",this.onChange.bind(this))})}beforeUnmount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.removeEventListener("change",this.onChange.bind(this))})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}rerender(){this.beforeUnmount(),this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=ne({title:this._title,options:this._options}),this.updateValues()}};customElements.define("dw-vertical-selection",y);var x=class extends HTMLElement{constructor(){super();i(this,"onAlignmentChange",e=>{o.alignment=e.detail.value});i(this,"hydrate",e=>{this.querySelector("#alignment").setAttribute("value",e.alignment)})}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#alignment").addEventListener("dw-change",this.onAlignmentChange)}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#alignment").removeEventListener("dw-change",this.onAlignmentChange)}render(){this.innerHTML=D}};customElements.define("dw-character-alignment",x);var I=`<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">\r
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
`;var k=class extends HTMLElement{constructor(){super();i(this,"_id");i(this,"_value",0);i(this,"_debuff",!1);i(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));i(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));i(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});i(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,s){switch(e){case"id":this._id=s;break;case"debuff":this._debuff=s==="true";let r=this.shadowRoot.querySelector("#debuff");r.checked=this._debuff;break;case"value":default:this._value=s;let l=this.shadowRoot.querySelector('[name="score"]');l.value=s,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),s=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),s.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=N,this.updateModifier()}};customElements.define("dw-character-attribute",k);var E=["strength","dexterity","constitution","intelligence","wisdom","charisma"],_=class extends HTMLElement{constructor(){super();i(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":o.strength=t.detail;break;case"dexterity":o.dexterity=t.detail;break;case"constitution":o.constitution=t.detail;break;case"intelligence":o.intelligence=t.detail;break;case"wisdom":o.wisdom=t.detail;break;case"charisma":o.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});i(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":o.weak=t.detail;break;case"dexterity":o.shaky=t.detail;break;case"constitution":o.sick=t.detail;break;case"intelligence":o.stunned=t.detail;break;case"wisdom":o.confused=t.detail;break;case"charisma":o.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});i(this,"hydrate",e=>{E.forEach(t=>{let s=this.querySelector(`#${t}`),r,l;switch(t){case"strength":r=e.strength,l=e.weak;break;case"dexterity":r=e.dexterity,l=e.shaky;break;case"constitution":r=e.constitution,l=e.sick;break;case"intelligence":r=e.intelligence,l=e.stunned;break;case"wisdom":r=e.wisdom,l=e.confused;break;case"charisma":r=e.charisma,l=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}s.setAttribute("value",r||0),s.setAttribute("debuff",l||!1)})})}connectedCallback(){this.render(),o.subscribe(this.hydrate),E.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){E.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=I}};customElements.define("dw-character-attributes",_);var P=`<div id="bonds" class="flex flex-col">
  <dw-section-header>
    BONDS
  </dw-section-header>
  <dw-infinite-list id="bonds-list"></dw-infinite-list>
</div>
`;var F=`<div id="list">
  <input
    id="new"
    type="text"
    class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full"
  />
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var B=(n,a)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<input type="text" value="${n}" id="item-${a}" class="${t}" />`,e.content.firstChild},C=class extends HTMLElement{constructor(){super();i(this,"_value",[]);i(this,"onUpdate",async(e,t)=>{let s=e.target.value;if(this._value[t]=s,s===""){let r=this._value;this._value=this._value.filter((l,d)=>d!==t),this.renderList(r,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});i(this,"onAdd",e=>{let t=this._value.length;this._value=[...this._value,e],this.shadowRoot.querySelector("#new").value="";let s=B(e,t);s.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(s,this.shadowRoot.querySelector("#new")),s.setSelectionRange(s.value.length,s.value.length),s.addEventListener("keyup",r=>{this.onUpdate(r,t)}),s.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[s,r]=t.reduce(([d,h],c,u)=>(u<e.length&&e[u]!==c&&h.push(u),u>=e.length&&d.push(c),[d,h]),[[],[]]);return{removed:e.reduce((d,h,c)=>(t[c]||d.push(c),d),[]),added:s,modified:r}}renderList(e=[],t=[]){let{removed:s,added:r,modified:l}=this.diff(e,t),d=this.shadowRoot.querySelector("#list");s.forEach(h=>{let c=this.shadowRoot.querySelector(`#item-${h}`);c&&(c.removeEventListener("keyup",u=>this.onUpdate(u,h)),c.remove())}),l.forEach(h=>{let c=this.shadowRoot.querySelector(`#item-${h}`);c&&(c.value=t[h])}),r.forEach((h,c)=>{let u=B(h,e.length+c);u.addEventListener("keyup",Q=>this.onUpdate(Q,c)),d.insertBefore(u,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",r=>this.onUpdate(r,t))})}render(){this.shadowRoot.innerHTML=F,this.renderList([],this._value)}};customElements.define("dw-infinite-list",C);var S=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){o.bonds=e.detail}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=P}};customElements.define("dw-character-bonds",S);var G=`<dw-vertical-selection id="race" title="race"></dw-vertical-selection>
`;var L=class extends HTMLElement{constructor(){super();i(this,"_options",[{name:"dwarf",description:"When you share a drink with someone, you may parley with them using CON instead of CHA."},{name:"elf",description:"Choose one weapon-you can always treat weapons of that type as if they had the precise tag."},{name:"halfling",description:"Choose one weapon-you can always treat weapons of that type as if they had the precise tag."},{name:"human",description:"Once per battle you may reroll a single damage roll (yours or someone else's"}]);i(this,"onChange",e=>{o.race=e.detail.value});i(this,"hydrate",e=>{this.querySelector("#race").setAttribute("value",e.race)})}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#race").addEventListener("dw-change",this.onChange)}render(){this.innerHTML=G,this.querySelector("#race").setAttribute("options",JSON.stringify(this._options))}};customElements.define("dw-character-race",L);var Y=`<style>
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
`;var q=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,s){e==="value"&&(this.querySelector("#coin").innerHTML=s)}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{o.coin=t.target.value})}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{o.coin=t.target.value})}render(){this.innerHTML=Y}};customElements.define("dw-character-coin",q);var j=`<div>
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
`;var M=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){o.gear=e.detail}connectedCallback(){this.render(),o.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{o.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{o.maxLoad=e.target.value})}disconnectedCallback(){o.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{o.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{o.maxLoad=e.target.value})}render(){this.innerHTML=j}};customElements.define("dw-character-gear",M);var z=`<div>
  <dw-section-header>STARTING MOVES</dw-section-header>
  <div class="grid grid-cols-2 gap-2">
    <div class="grid grid-cols-2 col-span-2 gap-1">
      <div class="flex flex-row col-span-2 lg:col-span-1">
        <input
          type="checkbox"
          id="signature-weapon"
          name="signature-weapon"
          class="m-2"
        />
        <div class="flex flex-col">
          <label for="signature-weapon">Signature Weapon</label>
          <div>
            This is your weapon. There are many like it, but this one is yours.
            Your weapon is your best friend. It is your life. You master it as
            you master your life. Your weapon, without you, is useless. Without
            your weapon, you are useless. You must wield your weapon true.
          </div>
          <div class="text-sm italic">
            Choose a base description, all are 2 weight:
          </div>
          <div class="grid grid-cols-2" id="signautre-weapon-type">
            <div>
              <input
                type="checkbox"
                id="signature-weapon-sword"
                name="signature-weapon-sword"
              />
              <label for="signature-weapon-sword">Sword</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-spear"
                name="signature-weapon-spear"
              />
              <label for="signature-weapon-spear">Spear</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-axe"
                name="signature-weapon-axe"
              />
              <label for="signature-weapon-axe">Axe</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-flail"
                name="signature-weapon-flail"
              />
              <label for="signature-weapon-flail">Flail</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-hammer"
                name="signature-weapon-hammer"
              />
              <label for="signature-weapon-hammer">Hammer</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-fists"
                name="signature-weapon-fists"
              />
              <label for="signature-weapon-fists">Fists</label>
            </div>
          </div>
          <div class="text-sm italic">
            Choose a range that best fits your weapon:
          </div>
          <div class="grid grid-cols-2" id="signautre-weapon-range">
            <div>
              <input
                type="checkbox"
                id="signature-weapon-range-hand"
                name="signature-weapon-range-hand"
              />
              <label for="signature-weapon-range-hand">Hand</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-range-close"
                name="signature-weapon-range-close"
              />
              <label for="signature-weapon-range-close">Close</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="signature-weapon-range-reach"
                name="signature-weapon-range-reach"
              />
              <label for="signature-weapon-range-reach">Reach</label>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-8 lg:pl-0">
        <div class="text-sm italic">Choose two enhancements:</div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-hooks-and-spikes"
            name="signature-weapon-enhancement-hooks-and-spikes"
          />
          <label for="signature-weapon-enhancement-hooks-and-spikes"
            >Hooks and spikes. +1 damage, but +1 weight.</label
          >
        </div>
        <div>
          <input type="checkbox" id="signature-weapon-enhancement-sharp" />
          <label for="signature-weapon-enhancement-sharp"
            >Sharp, +2 piercing.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-prefectly-weighted"
            name="signature-weapon-enhancement-prefectly-weighted"
          />
          <label for="signature-weapon-enhancement-prefectly-weighted"
            >Prefectly Weighted. Add precise.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-serrated-edges"
            name="signature-weapon-enhancement-serrated-edges"
          />
          <label for="signature-weapon-enhancement-serrated-edges"
            >Serrated Edges. + 1 damage.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-glows-in-the-dark"
            name="signature-weapon-enhancement-glows-in-the-dark"
          />
          <label for="signature-weapon-enhancement-glows-in-the-dark"
            >Glows in the presence of one type of creature, your choice.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-huge"
            name="signature-weapon-enhancement-huge"
          />
          <label for="signature-weapon-enhancement-huge"
            >Huge. Add messy and forceful.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-versatile"
            name="signature-weapon-enhancement-versatile"
          />
          <label for="signature-weapon-enhancement-versatile"
            >Versatile. Choose an additional range.</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="signature-weapon-enhancement-well-crafted"
            name="signature-weapon-enhancement-well-crafted"
          />
          <label for="signature-weapon-enhancement-well-crafted"
            >Well-crafted. -1 weight.</label
          >
        </div>
        <div class="text-sm italic">Choose a look:</div>
        <div class="grid grid-cols-1 lg:grid-cols-2" id="signature-weapon-look">
          <div>
            <input
              type="checkbox"
              id="signature-weapon-look-ancient"
              name="signature-weapon-look-ancient"
            />
            <label for="signature-weapon-look-ancient">Ancient</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="signature-weapon-look-blood-stained"
              name="signature-weapon-look-blood-stained"
            />
            <label for="signature-weapon-look-blood-stained"
              >Blood-stained</label
            >
          </div>
          <div>
            <input
              type="checkbox"
              id="signature-weapon-look-unblemished"
              name="signature-weapon-look-unblemished"
            />
            <label for="signature-weapon-look-unblemished">Unblemished</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="signature-weapon-look-sinister"
              name="signature-weapon-look-sinister"
            />
            <label for="signature-weapon-look-sinister">Sinister</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="signature-weapon-look-ornate"
              name="signature-weapon-look-ornate"
            />
            <label for="signature-weapon-look-ornate">Ornate</label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="bend-bars-lift-gates"
        name="bend-bars-lift-gates"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="bend-bars-lift-gates">Bend Bars, Lift Gates</label>
        <div class="text-sm">
          When you use pure strength to destroy an inanimate obstacle, roll+STR.
          \u2022 On a 10+, choose 3. \u2022 On a 7-9 choose 2.
        </div>
        <ul class="list-disc ml-5 text-sm">
          <li>It doesn't take very long</li>
          <li>Nothing of value is damaged</li>
          <li>It doesn't make an inordinate amount of noise</li>
          <li>You can fix the thing again without a lot of effort</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="armored" name="armored" class="m-2" />
      <div class="flex flex-col">
        <label for="armored">Armored</label>
        <div class="text-sm">
          You ignore the clumsy tag on any armor you wear.
        </div>
      </div>
    </div>
  </div>
  <dw-section-header>ADVANCED MOVES</dw-section-header>
  <div class="text-sm italic mx-2">
    When you gain a level from 2-10, you may choose from these moves.
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="merciless" name="merciless" class="m-2" />
      <div class="flex flex-col">
        <label for="merciless">Merciless</label>
        <div class="text-sm">When you deal damage, deal +1d4 damage.</div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="armor-mastery"
        name="armor-mastery"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="armor-mastery">Armor Mastery</label>
        <div class="text-sm">
          When you make your armor take the brunt of damage dealt to you, the
          damage is negated but you must reduce the armor value of your armor or
          shield (your choice) by 1. The value is reduced each time you make
          this choice. If the reduction leaves the item with 0 armor it is
          destroyed.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="heirloom" name="heirloom" class="m-2" />
      <div class="flex flex-col">
        <label for="heirloom">Heirloom</label>
        <div class="text-sm">
          When you consult the spirits that reside within your signature weapon,
          they will give you an insight relating to the current situation, and
          might ask you some questions in return, roll+CHA. \u2022 On a 10+, the GM
          will give you good detail. \u2022 On a 7-9, the GM will give you an
          impression.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="seeing-red" name="seeing-red" class="m-2" />
      <div class="flex flex-col">
        <label for="seeing-red">Seeing Red</label>
        <div class="text-sm">
          When you Discern Realities during combat, you take +1.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="improved-weapon"
        name="improved-weapon"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="improved-weapon">Improved Weapon</label>
        <div class="text-sm">
          Choose one extra enhancement for your signature weapon.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="interrogator"
        name="interrogator"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="interrogator">Interrogator</label>
        <div class="text-sm">
          When you parley using threats of violence as leverage, you may use STR
          instead of CHA.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="blacksmith" name="blacksmith" class="m-2" />
      <div class="flex flex-col">
        <label for="blacksmith">Blacksmith</label>
        <div class="text-sm">
          When you have access to a forge you can graft the magical powers of a
          weapon onto your signature weapon. This process destroys the magical
          weapon. Your signature weapon gains the magical powers of the
          destroyed weapon.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="scent-of-blood"
        name="scent-of-blood"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="scent-of-blood">Scent of Blood</label>
        <div class="text-sm">
          When you Hack & Slash an enemy, your next attack against that same foe
          deals +1d4 damage.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="iron-hide" name="iron-hide" class="m-2" />
      <div class="flex flex-col">
        <label for="iron-hide">Iron Hide</label>
        <div class="text-sm">You gain +1 armor.</div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="multiclass-dabbler"
        name="multiclass-dabbler"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="multiclass-dabbler">Multiclass Dabbler</label>
        <div class="text-sm">
          Get one move from another class. Treat your level as one lower for
          choosing the move.
        </div>
      </div>
    </div>
  </div>
  <hr class="border-b-2 border-b-slate-500 my-2" />
  <div class="text-sm italic">
    When you gain a level from 6-10, you may choose from these moves.
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="bloodthirsty"
        name="bloodthirsty"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="bloodthirsty">Bloodthirsty</label>
        <div class="text-sm">
          <div class="italic">Replaces: Merciless</div>
          When you deal damage, deal +1d8 damage.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="armored-perfection"
        name="armored-perfection"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="armored-perfection">Armored Perfection</label>
        <div class="text-sm">
          <div class="italic">Replaces: Armor Mastery</div>
          When you choose to let your armor take the brunt of damage dealt to
          you, the damage is negated and you take +1 forward against the
          attacker, but you must reduce the armor value of your armor or shield
          (your choice) by 1. The value is reduced each time you make this
          choice. If the reduction leaves the item with 0 armor it is destroyed.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="through-deaths-eyes"
        name="through-deaths-eyes"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="through-deaths-eyes">Through Death's Eyes</label>
        <div class="text-sm">
          When you go into battle, roll+WIS. \u2022 On a 10+, name someone who will
          live and someone who will die. \u2022 On a 7-9, name someone who will live
          or someone who will die. Name NPCs, not player characters. The GM will
          make your vision come true, if it's even remotely possible. \u2022 On a 6-
          you see your own death and consequently take -1 ongoing throughout the
          battle.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="evil-eye" name="evil-eye" class="m-2" />
      <div class="flex flex-col">
        <label for="evil-eye">Evil Eye</label>
        <div class="text-sm">
          <div class="italic">Replaces: Seeing Red</div>
          When you enter combat, roll+CHA. \u2022 On a 10+, hold 2. \u2022 On a 7-9, hold
          1. Spend your hold to make eye contact with an NPC present, who
          freezes or flinches and can't act until you break it off. \u2022 On a 6-,
          your enemies immediately identify you as their biggest threat.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="eye-for-weaponry"
        name="eye-for-weaponry"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="eye-for-weaponry">Eye for Weaponry</label>
        <div class="text-sm">
          When you look over an enemy's weaponry, ask the GM how much damage
          they do.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="superior-warrior"
        name="superior-warrior"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="superior-warrior">Superior Warrior</label>
        <div class="text-sm">
          When you Hack & Slash, on a 12+ you deal your damage, avoid their
          attack, and impress, dismay, or frighten your enemy.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="taste-of-blood"
        name="taste-of-blood"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="taste-of-blood">Taste of Blood</label>
        <div class="text-sm">
          <div class="italic">Replaces: Scent of Blood</div>
          When you Hack & Slash an enemy, your next attack against that same foe
          deals +1d8 damage.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input type="checkbox" id="steel-hide" name="steel-hide" class="m-2" />
      <div class="flex flex-col">
        <label for="steel-hide">Steel Hide</label>
        <div class="text-sm">
          <div class="italic">Replaces: Iron Hide</div>
          You gain +2 armor.
        </div>
      </div>
    </div>
    <div class="flex flex-row col-span-2 lg:col-span-1">
      <input
        type="checkbox"
        id="multiclass-initiate"
        name="multiclass-initiate"
        class="m-2"
      />
      <div class="flex flex-col">
        <label for="multiclass-initiate">Multiclass Initiate</label>
        <div class="text-sm">
          Get a move from another class. Treat your level as one lower for
          choosing the move.
        </div>
      </div>
    </div>
  </div>
</div>
`;var H=class extends HTMLElement{constructor(){super();i(this,"_value",{});i(this,"_inputs",[["#signature-weapon","signatureWeapon"],["#signature-weapon-sword","signatureWeaponSword"],["#signature-weapon-spear","signatureWeaponSpear"],["#signature-weapon-axe","signatureWeaponAxe"],["#signature-weapon-flail","signatureWeaponFlail"],["#signature-weapon-hammer","signatureWeaponHammer"],["#signature-weapon-fists","signatureWeaponFists"],["#signature-weapon-range-hand","signatureWeaponRangeHand"],["#signature-weapon-range-close","signatureWeaponRangeClose"],["#signature-weapon-range-reach","signatureWeaponRangeReach"],["#signature-weapon-enhancement-hooks-and-spikes","signatureWeaponEnhancementHooksAndSpikes"],["#signature-weapon-enhancement-sharp","signatureWeaponEnhancementSharp"],["#signature-weapon-enhancement-prefectly-weighted","signatureWeaponEnhancementPrefectlyWeighted"],["#signature-weapon-enhancement-serrated-edges","signatureWeaponEnhancementSerratedEdges"],["#signature-weapon-enhancement-glows-in-the-dark","signatureWeaponEnhancementGlowsInTheDark"],["#signature-weapon-enhancement-huge","signatureWeaponEnhancementHuge"],["#signature-weapon-enhancement-versatile","signatureWeaponEnhancementVersatile"],["#signature-weapon-enhancement-well-crafted","signatureWeaponEnhancementWellCrafted"],["#signature-weapon-look-ancient","signatureWeaponLookAncient"],["#signature-weapon-look-blood-stained","signatureWeaponLookBloodStained"],["#signature-weapon-look-unblemished","signatureWeaponLookUnblemished"],["#signature-weapon-look-sinister","signatureWeaponLookSinister"],["#signature-weapon-look-ornate","signatureWeaponLookOrnate"],["#bend-bars-lift-gates","bendBarsLiftGates"],["#armored","armored"],["#merciless","merciless"],["#armor-mastery","armorMastery"],["#heirloom","heirloom"],["#seeing-red","seeingRed"],["#improved-weapon","improvedWeapon"],["#interrogator","interrogator"],["#blacksmith","blacksmith"],["#scent-of-blood","scentOfBlood"],["#iron-hide","ironHide"],["#multiclass-dabbler","multiclassDabbler"],["#bloodthirsty","bloodthirsty"],["#armored-perfection","armoredPerfection"],["#through-deaths-eyes","throughDeathsEyes"],["#evil-eye","evilEye"],["#eye-for-weaponry","eyeForWeaponry"],["#superior-warrior","superiorWarrior"],["#taste-of-blood","tasteOfBlood"],["#steel-hide","steelHide"],["#multiclass-initiate","multiclassInitiate"]]);i(this,"emit",()=>{this.dispatchEvent(new CustomEvent("dw-character-moves-change",{detail:this._value}))});i(this,"addEventListenerFacade",(e,t)=>{let s=this.querySelector(e);if(!s)throw new Error(`Element ${e} not found`);s.addEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()})});i(this,"removeEventListenerFacade",(e,t)=>{let s=this.querySelector(e);if(!s)throw new Error(`Element ${e} not found`);s.removeEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()})});i(this,"updateElement",(e,t)=>{let s=this.querySelector(e);if(!s)throw new Error(`Element ${e} not found`);s.checked=this._value[t]});i(this,"updateDom",()=>{this._inputs.forEach(([e,t])=>{this.updateElement(e,t)})})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}connectedCallback(){this.render(),this._inputs.forEach(([e,t])=>this.addEventListenerFacade(e,t))}disconnectedCallback(){this._inputs.forEach(([e,t])=>this.removeEventListenerFacade(e,t))}render(){this.innerHTML=z,this.updateDom()}};customElements.define("dw-character-moves",H);var J=`<div class="flex flex-col">
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
`;var T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["for","icon-class"]}attributeChangedCallback(a,e,t){let s=this.shadowRoot.querySelector("#labeled-decorate-input__input");switch(a){case"for":this.shadowRoot.querySelector("#labeled-decorate-input__label")?.setAttribute("for",t);break;case"icon-class":this.shadowRoot.querySelector("#labeled-decorated-input__icon")?.classList.add(t);break;default:break}}onMount(){let a=this.shadowRoot.querySelector("#labeled-decorated-input__icon"),e=this.shadowRoot.querySelector("#labeled-decorate-input__label");a.classList.add(this.getAttribute("icon-class")),e.setAttribute("for",this.getAttribute("for"))}connectedCallback(){this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=X}};customElements.define("dw-labeled-decorated-input",T);var R=class extends HTMLElement{constructor(){super();i(this,"_inputs",[["armor","armor"],["hit-points","hitPoints"],["max-hit-points","maxHitPoints"]]);i(this,"onArmorChange",e=>{o.armor=e.target.value});i(this,"onHitPointsChange",e=>{o.hitPoints=e.target.value});i(this,"onMaxHitPointsChange",e=>{o.maxHitPoints=e.target.value});i(this,"onChange",e=>{let{name:t}=e.target;switch(t){case"armor":this.onArmorChange(e);break;case"hit-points":this.onHitPointsChange(e);break;case"max-hit-points":this.onMaxHitPointsChange(e);break;default:break}});i(this,"hydrate",e=>{this._inputs.forEach(([t,s])=>{let r=this.querySelector(`#${t}`);r.value=e[s]||0})});i(this,"onMount",()=>{o.subscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).addEventListener("change",this.onChange)})});i(this,"beforeUnmount",()=>{o.unsubscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).removeEventListener("dw-input-change",this.onChange)})})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=J}};customElements.define("dw-character-armor-hp-damage",R);var A=class extends HTMLElement{constructor(){super();i(this,"onCharacterNameChange",e=>{o.characterName=e.target.value});i(this,"onLevelChange",e=>{o.level=e.target.value});i(this,"onXpChange",e=>{o.xp=e.target.value});i(this,"onMovesChange",e=>{o.moves=e.detail});i(this,"hydrate",e=>{let t=this.querySelector("#character-name"),s=this.querySelector("#level"),r=this.querySelector("#xp"),l=this.querySelector("dw-character-moves");t.value=e.characterName||"",s.value=e.level||"",r.value=e.xp||0,l.value=e.moves||{}})}connectedCallback(){this.render(),o.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),s=this.querySelector("#xp"),r=this.querySelector("dw-character-moves");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),s.addEventListener("change",this.onXpChange),r.addEventListener("dw-character-moves-change",this.onMovesChange)}disconnectedCallback(){o.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),s=this.querySelector("dw-character-moves");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),xpElement.removeEventListener("change",this.onXpChange),s.removeEventListener("dw-character-moves-change",this.onMovesChange)}render(){this.innerHTML=$}};customElements.define("dw-character-form",A);var K=`<style>
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
      />
      <button type="button pionter" class="text-left mx-2">Save</button>
      <button type="button pointer" class="text-left mx-2">Load</button>
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
`;var W=class extends HTMLElement{constructor(){super();i(this,"_toggled",!1);i(this,"_characterClass","");i(this,"onToggle",()=>{let e=this.shadowRoot.querySelector("#drawer"),t=this.shadowRoot.querySelector("#drawer__toggle");this._toggled=!this._toggled,this._toggled?(t.innerHTML="x",t.classList.add("text-left"),t.classList.add("ml-2"),e.classList.remove("w-10"),e.classList.add("w-64"),[...this.shadowRoot.querySelectorAll(".invisible")].filter(r=>r.id!=="drawer__toggle").forEach(r=>{r.classList.remove("invisible"),r.classList.add("visible")})):(t.innerHTML="\u2261",t.classList.remove("text-left"),t.classList.remove("ml-2"),e.classList.remove("w-64"),e.classList.add("w-10"),[...this.shadowRoot.querySelectorAll(".visible")].filter(r=>r.id!=="drawer__toggle").forEach(r=>{r.classList.remove("visible"),r.classList.add("invisible")}))});i(this,"onClassChange",e=>{this._characterClass=e.target.value,o.characterClass=this._characterClass});i(this,"hydrate",e=>{this._characterClass=e.characterClass,this.shadowRoot.querySelector("#character-class").value=this._characterClass||"",this.shadowRoot.querySelector("#class-name").innerHTML=this._characterClass||""});this.attachShadow({mode:"open"})}onMount(){o.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").addEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").addEventListener("change",this.onClassChange)}beforeUnmount(){o.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").removeEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").removeEventListener("change",this.onClassChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=K}};customElements.define("dw-drawer",W);})();
