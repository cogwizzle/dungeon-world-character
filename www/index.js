import"./chunk-LU7DNXH4.js";import{a as o,b as c}from"./chunk-2DL6MCQC.js";var z=c`<form
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
`;var y=class{constructor(){this._observers=[],this._state=void 0}reset(){this._observers=[],this._state=void 0}subscribe(a){this._observers.push(a)}unsubscribe(a){this._observers=this._observers.filter(e=>e!==a)}notify(){this._observers.forEach(a=>a(this._state))}};var g=class extends y{constructor(){super();let a=JSON.parse(localStorage.getItem("character")||"{}");this._state={...a}}reset(){super.reset(),this._state={},localStorage.removeItem("character"),window.location.reload()}save(){return this._state}loadCharacter(a){this._state=a,this.notify()}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(a){super.subscribe(a),a(this._state)}set characterName(a){this._state={...this._state,characterName:a},this.notify()}set level(a){this._state={...this._state,level:a},this.notify()}set xp(a){this._state={...this._state,xp:a},this.notify()}set look(a){this._state={...this._state,look:a},this.notify()}set armor(a){this._state={...this._state,armor:a},this.notify()}set hitPoints(a){this._state={...this._state,hitPoints:a},this.notify()}set maxHitPoints(a){this._state={...this._state,maxHitPoints:a},this.notify()}set alignment(a){this._state={...this._state,alignment:a},this.notify()}set strength(a){this._state={...this._state,strength:a},this.notify()}set weak(a){this._state={...this._state,weak:a},this.notify()}set dexterity(a){this._state={...this._state,dexterity:a},this.notify()}set shaky(a){this._state={...this._state,shaky:a},this.notify()}set constitution(a){this._state={...this._state,constitution:a},this.notify()}set sick(a){this._state={...this._state,sick:a},this.notify()}set intelligence(a){this._state={...this._state,intelligence:a},this.notify()}set stunned(a){this._state={...this._state,stunned:a},this.notify()}set wisdom(a){this._state={...this._state,wisdom:a},this.notify()}set confused(a){this._state={...this._state,confused:a},this.notify()}set charisma(a){this._state={...this._state,charisma:a},this.notify()}set scarred(a){this._state={...this._state,scarred:a},this.notify()}set bonds(a){this._state={...this._state,bonds:a.filter(e=>e.trim()!=="")},this.notify()}set race(a){this._state={...this._state,race:a},this.notify()}set coin(a){this._state={...this._state,coin:a},this.notify()}set gear(a){this._state={...this._state,gear:a.filter(e=>e.trim()!=="")},this.notify()}set load(a){this._state={...this._state,load:a},this.notify()}set maxLoad(a){this._state={...this._state,maxLoad:a},this.notify()}set moves(a){this._state={...this._state,moves:a},this.notify()}set notes(a){this._state={...this._state,notes:a},this.notify()}set otherDice(a){this._state={...this._state,otherDice:a},this.notify()}set characterClass(a){this._state={...this._state,characterClass:a,look:void 0,moves:void 0,race:void 0,alignment:void 0,otherDice:void 0},this.notify()}},ne=new g,s=ne;var i={Fighter:"Fighter",Ranger:"Ranger",Bard:"Bard",Druid:"Druid",Paladin:"Paladin",Thief:"Thief",Cleric:"Cleric",Wizard:"Wizard"};var v=l=>l.toLowerCase().replace(/(?:^|[^a-zØ-öø-ÿ])[a-zØ-öø-ÿ]/g,a=>a.toUpperCase());var le=({title:l,options:a})=>c`<div class="flex flex-col xl:flex-row xl:items-center">
    <label for="body" class="font-bold">${l.toUpperCase()}</label>
    ${a.map(e=>c`<div class="flex-row ml-2 xl:ml-0">
            <input
              type="radio"
              name="${l}"
              id="${l}-${e}"
              value="${e}"
            />
            <label class="text-sm" for="${l}-${e}"
              >${v(e).replace("-"," ")}</label
            >
          </div>`).join(`
`)}
    <div class="flex-row ml-2 xl:ml-0">
      <input
        type="text"
        name="${l}"
        id="${l}-other"
        value=""
        class="bg-transparent border-b-2 border-b-black outline-none w-14"
      />
    </div>
  </div>`,w=class extends HTMLElement{constructor(){super();o(this,"_options",[]);o(this,"_title","")}static get observedAttributes(){return["options","title"]}attributeChangedCallback(e,t,r){switch(e){case"options":this._options=JSON.parse(r)||[],this.render();break;case"title":this._title=r||"",this.render();break;default:break}}connectedCallback(){this.render()}disconnectedCallback(){}render(){this.innerHTML=le({title:this._title,options:this._options})}};customElements.define("dw-character-look-group",w);var k=class extends HTMLElement{constructor(){super();o(this,"_characterClass");o(this,"onChange",e=>{let{name:t,value:r}=e.target;this[`_${t}`]=r,this.emit()});o(this,"hydrate",async e=>{let t=e.look||{};this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.groups.forEach(n=>{this[`_${n}`]=t[n]||"";let h=[...this.querySelectorAll(`[name="${n}"][type="radio"]`)];h.forEach(d=>{d.checked=d.value===t[n]});let u=this.querySelector(`#${n}-other`);u.value=h.every(d=>d.value!==t[n])&&t[n]?t[n]:""})})}get groups(){switch(this._characterClass){case i.Fighter:return["body","eyes","hair","skin"];case i.Ranger:case i.Bard:case i.Thief:case i.Cleric:return["body","eyes","hair","clothes"];case i.Druid:return["hair","eyes","clothes"];case i.Paladin:return["body","eyes","hair","holy-symbol"];case i.Wizard:return["body","eyes","hair","robes"];default:return[]}}emit(){switch(this._characterClass){case i.Fighter:s.look={body:this._body,eyes:this._eyes,hair:this._hair,skin:this._skin};break;case i.Ranger:case i.Bard:case i.Thief:case i.Cleric:s.look={body:this._body,eyes:this._eyes,hair:this._hair,clothes:this._clothes};break;case i.Druid:s.look={hair:this._hair,eyes:this._eyes,clothes:this._clothes};break;case i.Paladin:s.look={body:this._body,eyes:this._eyes,hair:this._hair,"holy-symbol":this["_holy-symbol"]};break;case i.Wizard:s.look={body:this._body,eyes:this._eyes,hair:this._hair,robes:this._robes};break;default:break}}onMount(){s.subscribe(this.hydrate),this.groups.reduce((t,r)=>[...t,...this.querySelectorAll(`[name="${r}"]`)],[]).forEach(t=>t.addEventListener("change",this.onChange))}beforeUnmount(){s.unsubscribe(this.hydrate),this.groups.reduce((t,r)=>[...t,...this.querySelectorAll(`[name="${r}"]`)],[]).forEach(t=>t.removeEventListener("change",this.onChange))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case i.Fighter:let e=await import("./fighter-look.template-NXGXOBU3.js");this.innerHTML=e.default;break;case i.Ranger:let t=await import("./ranger-look.template-WC6NEVGS.js");this.innerHTML=t.default;break;case i.Bard:let r=await import("./bard-look.template-5GJB4IVD.js");this.innerHTML=r.default;break;case i.Druid:let n=await import("./druid-look.template-VEK6IFT3.js");this.innerHTML=n.default;break;case i.Paladin:let h=await import("./paladin-look.template-TRTV4MQ2.js");this.innerHTML=h.default;break;case i.Thief:let u=await import("./thief-look.template-BS7GNK3D.js");this.innerHTML=u.default;break;case i.Cleric:let d=await import("./cleric-look.template-647A67W6.js");this.innerHTML=d.default;break;case i.Wizard:let m=await import("./wizard-look.template-EE754JK7.js");this.innerHTML=m.default;break;default:break}}};customElements.define("dw-character-look",k);var I=c`<div class="flex flex-col">
  <dw-section-header>LOOK</dw-section-header>
  <textarea rows="10" id="look" name="look" class="p-2"></textarea>
</div> `;var x=class extends HTMLElement{constructor(){super(),this._value=""}hydrate(a){let e=typeof a.look=="object"?"":a.look||"";if(e===this._value)return;this._value=e;let t=this.querySelector("#look");!t||(t.value=e)}onChange(a){let{value:e}=a.target;s.look=e,this._value=e}onMount(){s.subscribe(this.hydrate.bind(this)),this.querySelector("#look")?.addEventListener("change",this.onChange.bind(this))}beforeUnmount(){s.unsubscribe(this.hydrate.bind(this)),this.querySelector("#look")?.removeEventListener("change",this.onChange.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=I}};customElements.define("dw-other-look",x);var b={SUPPORTED_CLASS:"SUPPORTED_CLASS",OTHER:"OTHER"},C=class extends HTMLElement{constructor(){super(),this._currentStrategy}hydrate(a){if(Object.values(i).some(t=>a.characterClass===t))switch(this._currentStrategy){case b.SUPPORTED_CLASS:this._currentStrategy=b.SUPPORTED_CLASS;break;case b.OTHER:default:this._currentStrategy=b.SUPPORTED_CLASS,this.render();break}else switch(this._currentStrategy){case b.OTHER:this._currentStrategy=b.OTHER;break;case b.SUPPORTED_CLASS:default:this._currentStrategy=b.OTHER,this.render();break}}onMount(){s.subscribe(this.hydrate.bind(this))}beforeUnmount(){s.unsubscribe(this.hydrate.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){switch(this._currentStrategy){case b.SUPPORTED_CLASS:this.innerHTML="<dw-character-look></dw-character-look>";break;case b.OTHER:this.innerHTML="<dw-other-look></dw-other-look>";break;default:this.innerHTML="";break}}};customElements.define("dw-character-look-strategy",C);var j=(l,a)=>l.map(e=>c`<div class="flex flex-row items-center">
        <input
          type="radio"
          name="${a}"
          id="${a}-${e.name}"
          class="mx-2"
          value="${e.name}"
        />
        <label for="${a}-${e.name}" class="flex flex-col">
          <div>${v(e.name)}</div>
          <div class="text-xs italic">${e.description}</div>
        </label>
      </div>`).join(`
`),ce=({title:l,options:a})=>c`<div class="flex flex-col">
    <label
      id="title"
      for="${l}"
      class="bg-black text-white flex flex-row relative py-1"
    >
      ${l.toUpperCase()}
    </label>
    <div id="options">${j(a,l)}</div>
    <div class="flex flex-row items-center">
      <input
        type="text"
        name="${l}"
        id="${l}-other"
        class="ml-9 bg-transparent outline-none border-b-2 border-black w-full"
      />
    </div>
  </div>
  <link rel="stylesheet" href="tailwind.css" />`,_=class extends HTMLElement{constructor(){super();o(this,"_title","");o(this,"_options",[]);o(this,"_value","");this.attachShadow({mode:"open"})}get value(){return this._value}static get observedAttributes(){return["options","title","value"]}attributeChangedCallback(e,t,r){switch(e){case"options":this._options=JSON.parse(r)||[],this.rerender();break;case"title":this._title=r||"",this.rerender();break;case"value":this._value=r&&r!=="undefined"?r:"",this.updateValues();break;default:break}}onChange(e){let t=e.composedPath()[0].value;this._value=t,this.updateValues(),this.dispatchEvent(new CustomEvent("dw-change",{detail:{value:t}}))}onMount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.addEventListener("change",this.onChange.bind(this))})}beforeUnmount(){[...this.shadowRoot.querySelectorAll(`[name="${this._title}"]`)].forEach(t=>{t.removeEventListener("change",this.onChange.bind(this))})}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}rerender(){this.beforeUnmount();let e=this.shadowRoot.querySelector("#title");e?.setAttribute("for",this._title),e&&(this.shadowRoot.querySelector("#title").innerHTML=this._title.toUpperCase()),this.shadowRoot.querySelector("#options")&&(this.shadowRoot.querySelector("#options").innerHTML=j(this._options,this._title)),this.onMount()}updateValues(){let e=[...this.shadowRoot.querySelectorAll(`[name="${this._title}"][type="radio"]`)];e.forEach(r=>{r.checked=r.value===this._value});let t=this.shadowRoot.querySelector(`#${this._title}-other`);t.value=e.every(r=>r.value!==this._value)&&this._value&&this._value||""}render(){this.shadowRoot.innerHTML=ce({title:this._title,options:this._options}),this.updateValues()}};customElements.define("dw-vertical-selection",_);var E=class extends HTMLElement{constructor(){super();o(this,"_characterClass");o(this,"onAlignmentChange",e=>{s.alignment=e.detail.value});o(this,"hydrate",async e=>{this._characterClass!==e.characterClass&&(this.beforeUnmount(),this._characterClass=e.characterClass,await this.render(),this.onMount()),this.querySelector("#alignment")?.setAttribute("value",e.alignment)})}onMount(){s.subscribe(this.hydrate),this.querySelector("#alignment")?.addEventListener("dw-change",this.onAlignmentChange)}beforeUnmount(){s.unsubscribe(this.hydrate),this.querySelector("#alignment")?.removeEventListener("dw-change",this.onAlignmentChange)}connectedCallback(){this.render().then(()=>this.onMount())}disconnectedCallback(){this.beforeUnmount()}async render(){switch(this._characterClass){case i.Fighter:let e=await import("./fighter-alignment.template-GSLI73BA.js");this.innerHTML=e.default;break;case i.Ranger:let t=await import("./ranger-alignment.template-LPMUZXGZ.js");this.innerHTML=t.default;break;case i.Bard:let r=await import("./bard-alignment.template-G47YH36G.js");this.innerHTML=r.default;break;case i.Druid:let n=await import("./druid-alignment.template-6CMSOAGF.js");this.innerHTML=n.default;break;case i.Paladin:let h=await import("./paladin-alignment.template-BOTBXXYE.js");this.innerHTML=h.default;break;case i.Thief:let u=await import("./thief-alignment.template-45V4O43D.js");this.innerHTML=u.default;break;case i.Cleric:let d=await import("./cleric-alignment.template-2J6CVBRR.js");this.innerHTML=d.default;break;case i.Wizard:let m=await import("./wizard-alignment.template-BW7RDNRD.js");this.innerHTML=m.default;break;default:let f=await import("./other-alignment.template-VUE3WKHE.js");this.innerHTML=f.default;break}}};customElements.define("dw-character-alignment",E);var B=c`<div class="text-sm italic text-center mb-1">
    Assign these scores to your stats: 16(+2), 15(+1), 13(+1), 12(-), 9(-),
    8(-1)
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
  </div> `;var G=c`<style>
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
  <link rel="stylesheet" href="tailwind.css" /> `;var L=class extends HTMLElement{constructor(){super();o(this,"_id");o(this,"_value",0);o(this,"_debuff",!1);o(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));o(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));o(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});o(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,r){switch(e){case"id":this._id=r;break;case"debuff":this._debuff=r==="true";let n=this.shadowRoot.querySelector("#debuff");n.checked=this._debuff;break;case"value":default:this._value=r;let h=this.shadowRoot.querySelector('[name="score"]');h.value=r,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),r=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),r.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=G,this.updateModifier()}};customElements.define("dw-character-attribute",L);var S=["strength","dexterity","constitution","intelligence","wisdom","charisma"],T=class extends HTMLElement{constructor(){super();o(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":s.strength=t.detail;break;case"dexterity":s.dexterity=t.detail;break;case"constitution":s.constitution=t.detail;break;case"intelligence":s.intelligence=t.detail;break;case"wisdom":s.wisdom=t.detail;break;case"charisma":s.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});o(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":s.weak=t.detail;break;case"dexterity":s.shaky=t.detail;break;case"constitution":s.sick=t.detail;break;case"intelligence":s.stunned=t.detail;break;case"wisdom":s.confused=t.detail;break;case"charisma":s.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});o(this,"hydrate",e=>{S.forEach(t=>{let r=this.querySelector(`#${t}`),n,h;switch(t){case"strength":n=e.strength,h=e.weak;break;case"dexterity":n=e.dexterity,h=e.shaky;break;case"constitution":n=e.constitution,h=e.sick;break;case"intelligence":n=e.intelligence,h=e.stunned;break;case"wisdom":n=e.wisdom,h=e.confused;break;case"charisma":n=e.charisma,h=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}r.setAttribute("value",n||0),r.setAttribute("debuff",h||!1)})})}connectedCallback(){this.render(),s.subscribe(this.hydrate),S.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){S.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=B}};customElements.define("dw-character-attributes",T);var Y=c`<div id="bonds" class="flex flex-col">
  <dw-section-header> BONDS </dw-section-header>
  <dw-infinite-list id="bonds-list"></dw-infinite-list>
</div> `;var J=c`<div id="list">
    <textarea
      id="new"
      type="text"
      class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full"
      rows="1"
    ></textarea>
  </div>
  <link rel="stylesheet" href="tailwind.css" /> `;var X=(l,a)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<textarea rows="1" type="text" id="item-${a}" class="${t}">${l}</textarea>`,e.content.firstChild},M=class extends HTMLElement{constructor(){super();o(this,"_value",[]);o(this,"onUpdate",async(e,t)=>{let r=e.target.value;if(this._value[t]=r,r===""){let n=this._value;this._value=this._value.filter((h,u)=>u!==t),this.renderList(n,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});o(this,"onAdd",e=>{if(e==="")return;let t=this._value||[],r=t.length;this._value=[...t,e],this.shadowRoot.querySelector("#new").value="";let n=X(e,r);n.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(n,this.shadowRoot.querySelector("#new")),n.setSelectionRange(n.value.length,n.value.length),n.addEventListener("keyup",h=>{this.onUpdate(h,r)}),n.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[r,n]=t.reduce(([u,d],m,f)=>(f<e.length&&e[f]!==m&&d.push(f),f>=e.length&&u.push(m),[u,d]),[[],[]]);return{removed:e.reduce((u,d,m)=>(t[m]||u.push(m),u),[]),added:r,modified:n}}renderList(e=[],t=[]){let{removed:r,added:n,modified:h}=this.diff(e,t),u=this.shadowRoot.querySelector("#list");r.forEach(d=>{let m=this.shadowRoot.querySelector(`#item-${d}`);m&&(m.removeEventListener("keyup",f=>this.onUpdate(f,d)),m.remove())}),h.forEach(d=>{let m=this.shadowRoot.querySelector(`#item-${d}`);m&&(m.value=t[d])}),n.forEach((d,m)=>{let f=X(d,e.length+m);f.addEventListener("keyup",ie=>this.onUpdate(ie,m)),u.insertBefore(f,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",n=>this.onUpdate(n,t))})}render(){this.shadowRoot.innerHTML=J,this.renderList([],this._value)}};customElements.define("dw-infinite-list",M);var q=class extends HTMLElement{constructor(){super();o(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){s.bonds=e.detail}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=Y}};customElements.define("dw-character-bonds",q);var K=c`<dw-vertical-selection
  id="race"
  title="race"
></dw-vertical-selection> `;var p=(l,a)=>({name:l,description:a}),R=class extends HTMLElement{constructor(){super();o(this,"_characterClass");o(this,"onChange",e=>{s.race=e.detail.value});o(this,"hydrate",e=>{let t=e.race||"";this._characterClass!==e.characterClass&&(this._characterClass=e.characterClass,this.updateOptions());let r=this.shadowRoot.querySelector("#race");r.value!==t&&r?.setAttribute("value",t)});this.attachShadow({mode:"open"})}get options(){switch(this._characterClass){case i.Fighter:return[p("dwarf","When you share a drink with someone, you may parley with them using CON instead of CHA."),p("elf","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),p("halfling","Choose one weapon-you can always treat weapons of that type as if they had the precise tag."),p("human","Once per battle you may reroll a single damage roll (yours or someone else's")];case i.Ranger:return[p("elf","When you Undertake A Perilous Journey through wilderness whatever job you take you succeed as if you rolled a 10+."),p("human","When you Make Camp in a dungeon or city, you don't need to consume a ration.")];case i.Bard:return[p("elf","When you enter an important location (your call) you can ask the GM for one fact from the history of that location."),p("human","When you first enter a civilized settlement someone who respects the custom of hospitality to minstrels will take you in as their guest.")];case i.Druid:return[p("elf","The sap of the elder trees flows within you. In addition to any other attunements, the Great Forest is always considered your land."),p("human","As your people learned to bind animals to field and farm, so too are you bound to them. You may always take the shape of any domesticated animal, in addition to your normal options."),p("halfling","You sing the healing songs of spring and brook. When you make camp, you and your allies heal +1d6.")];case i.Paladin:return[p("human","When you pray for guidance, even for a moment and ask \u201Cwhat here is evil?\u201D the GM will tell you, honestly.")];case i.Thief:return[p("halfling","When you attack with a ranged weapon, deal +2 damage."),p("human","You are a professional. When you Spout Lore or Discern Realities about criminal activities, take +1.")];case i.Cleric:return[p("dwarf","You are one with stone. When you commune you are also granted a special version of Words of the Unspeaking as a rote which only works on stone."),p("human","Your faith is diverse. Choose one wizard spell. You can cast and be granted that spell as if it was a cleric spell.")];case i.Wizard:return[p("elf","Magic is as natural as breath to you. Detect Magic is a cantrip for you."),p("human","Choose one cleric spell. You can cast it as if it was a wizard spell.")];default:return[]}}onMount(){s.subscribe(this.hydrate),this.shadowRoot.querySelector("#race")?.addEventListener("dw-change",this.onChange)}beforeUnmount(){s.unsubscribe(this.hydrate),this.shadowRoot.querySelector("#race").removeEventListener("dw-change",this.onChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}updateOptions(){this.shadowRoot.querySelector("#race").setAttribute("options",JSON.stringify(this.options))}render(){this.shadowRoot.innerHTML=K,this.updateOptions()}};customElements.define("dw-character-race",R);var Q=c`<style>
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
  </div> `;var H=class extends HTMLElement{constructor(){super();o(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,r){e==="value"&&(this.querySelector("#coin").innerHTML=r)}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{s.coin=t.target.value})}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{s.coin=t.target.value})}render(){this.innerHTML=Q}};customElements.define("dw-character-coin",H);var Z=c`<div>
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
</div> `;var O=class extends HTMLElement{constructor(){super();o(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){s.gear=e.detail}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{s.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{s.maxLoad=e.target.value})}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{s.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{s.maxLoad=e.target.value})}render(){this.innerHTML=Z}};customElements.define("dw-character-gear",O);var A=class extends HTMLElement{constructor(){super();o(this,"_characterClass");o(this,"_value",{})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}updateDom(){let e=this.firstChild;!e||(e.value=this._value)}async hydrate(e){e.characterClass!==this._characterClass&&(this._characterClass=e.characterClass,await this.render())}connectedCallback(){this.render().then(()=>s.subscribe(this.hydrate.bind(this)))}disconnectedCallback(){s.unsubscribe(this.hydrate.bind(this))}async render(){if(!!this._characterClass)return new Promise(e=>{setTimeout(async()=>{switch(this._characterClass){case i.Fighter:await import("./fighter-moves-IQQEODG4.js"),this.innerHTML="<dw-fighter-moves></dw-fighter-moves>";break;case i.Ranger:await import("./ranger-moves-DKY2AL47.js"),this.innerHTML="<dw-ranger-moves></dw-ranger-moves>";break;case i.Bard:await import("./bard-moves-UP7N2CWF.js"),this.innerHTML="<dw-bard-moves></dw-bard-moves>";break;case i.Druid:await import("./druid-moves-OGNFT542.js"),this.innerHTML="<dw-druid-moves></dw-druid-moves>";break;case i.Paladin:await import("./paladin-moves-O4LZCLNY.js"),this.innerHTML="<dw-paladin-moves></dw-paladin-moves>";break;case i.Thief:await import("./thief-moves-UC74YZHZ.js"),this.innerHTML="<dw-thief-moves></dw-thief-moves>";break;case i.Cleric:await import("./cleric-moves-33KKFHZK.js"),this.innerHTML="<dw-cleric-moves></dw-cleric-moves>";break;case i.Wizard:await import("./wizard-moves-PID3NTOF.js"),this.innerHTML="<dw-wizard-moves></dw-wizard-moves>";break;default:await import("./other-moves-P7NOW65T.js"),this.innerHTML="<dw-other-moves></dw-other-moves>";break}this.updateDom(),e()})})}};customElements.define("dw-character-moves",A);var V=c`<div class="flex flex-col">
  <dw-labeled-decorated-input for="armor" icon-class="shield">
    ARMOR ⛨
    <input
      slot="input"
      type="text"
      id="armor"
      name="armor"
      class="text-black w-10 text-right ontline-none px-2"
    />
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="hp" icon-class="heart">
    HP 🤍
    <span slot="input" class="z-10 flex flex-row bg-white text-black">
      <input
        type="text"
        id="hit-points"
        name="hit-points"
        class="text-black w-10 text-right text-input"
      />
      /
      <input
        type="text"
        id="max-hit-points"
        name="max-hit-points"
        class="text-black w-10 text-left text-input"
      />
    </span>
  </dw-labeled-decorated-input>
  <dw-labeled-decorated-input for="damage" icon-class="damage-dice">
    DAMAGE ⚔
    <span id="damage-input" slot="input" class="text-black bg-white px-2"></span>
  </dw-labeled-decorated-input>
</div>`;var ee=c`<label
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
  <link rel="stylesheet" href="tailwind.css" /> `;var D=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["for","icon-class"]}attributeChangedCallback(a,e,t){let r=this.shadowRoot.querySelector("#labeled-decorate-input__input");switch(a){case"for":this.shadowRoot.querySelector("#labeled-decorate-input__label")?.setAttribute("for",t);break;case"icon-class":this.shadowRoot.querySelector("#labeled-decorated-input__icon")?.classList.add(t);break;default:break}}onMount(){let a=this.shadowRoot.querySelector("#labeled-decorated-input__icon"),e=this.shadowRoot.querySelector("#labeled-decorate-input__label");a.classList.add(this.getAttribute("icon-class")),e.setAttribute("for",this.getAttribute("for"))}connectedCallback(){this.render(),this.onMount()}render(){this.shadowRoot.innerHTML=ee}};customElements.define("dw-labeled-decorated-input",D);var te=c`<label for="dice" class="text-center p-0">
  D
  <input
    id="dice"
    name="dice"
    type="text"
    class="bg-transparent outline-none border-b-2 border-black text-black w-[1.2rem]"
  />
</label> `;var W=class extends HTMLElement{constructor(){super(),this._value=""}hydrate(a){this._value=a.otherDice;let e=this.querySelector("#dice");e&&(e.value=this._value||"")}onChange(a){s.otherDice=a.target.value}onMount(){s.subscribe(this.hydrate.bind(this)),this.querySelector("#dice")?.addEventListener("change",this.onChange.bind(this))}beforeUnmount(){s.unsubscribe(this.hydrate.bind(this)),this.querySelector("#dice")?.removeEventListener("change",this.onChange.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=te}};customElements.define("dw-other-dice",W);var U=class extends HTMLElement{constructor(){super();o(this,"_characterClass");o(this,"_inputs",[["armor","armor"],["hit-points","hitPoints"],["max-hit-points","maxHitPoints"]]);o(this,"onArmorChange",e=>{s.armor=e.target.value});o(this,"onHitPointsChange",e=>{s.hitPoints=e.target.value});o(this,"onMaxHitPointsChange",e=>{s.maxHitPoints=e.target.value});o(this,"onChange",e=>{let{name:t}=e.target;switch(t){case"armor":this.onArmorChange(e);break;case"hit-points":this.onHitPointsChange(e);break;case"max-hit-points":this.onMaxHitPointsChange(e);break;default:break}});o(this,"hydrate",e=>{if(this._characterClass!==e.characterClass){this._characterClass=e.characterClass;let t=this.querySelector("#damage-input");t&&(t.innerHTML=this.getDiceAmount())}this._inputs.forEach(([t,r])=>{let n=this.querySelector(`#${t}`);n.value=e[r]||0})});o(this,"onMount",()=>{s.subscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).addEventListener("change",this.onChange)})});o(this,"beforeUnmount",()=>{s.unsubscribe(this.hydrate),this._inputs.forEach(([e])=>{this.querySelector(`#${e}`).removeEventListener("dw-input-change",this.onChange)})})}getDiceAmount(){switch(this._characterClass){case i.Fighter:case i.Paladin:return"D10";case i.Ranger:case i.Thief:return"D8";case i.Bard:case i.Druid:case i.Cleric:return"D6";case i.Wizard:return"D4";default:return"<dw-other-dice></dw-other-dice>"}}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.innerHTML=V;let e=this.querySelector("#damage-input");e&&(e.innerHTML=this.getDiceAmount())}};customElements.define("dw-character-armor-hp-damage",U);var ae=c`<div class="flex flex-row relative">
    <label class="absolute t-2 font-bold" for="notes">NOTES</label>
    <textarea id="notes" class="px-2 pt-7 flex-1" rows="20"></textarea>
  </div>
  <link rel="stylesheet" href="tailwind.css" /> `;var P=class extends HTMLElement{constructor(){super();o(this,"_value","");this.attachShadow({mode:"open"})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,r){if(e==="value"&&t!==r){this._value=r;let n=this.shadowRoot.querySelector("#notes");n&&(n.innerHTML=r)}}onMount(){this.shadowRoot.querySelector("#notes")?.addEventListener("keyup",this.onChange.bind(this))}beforeUnmount(){this.shadowRoot.querySelector("#notes")?.removeEventListener("keyup",this.onChange.bind(this))}onChange(e){this._value=e.target.value,this.dispatchEvent(new CustomEvent("notes-changed",{detail:e.target.value}))}connectedCallback(){this._value=this.getAttribute("value")||"",this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=ae;let e=this.shadowRoot.querySelector("#notes");e&&(e.innerHTML=this._value)}};customElements.define("dw-notes",P);var $=class extends HTMLElement{constructor(){super();o(this,"onCharacterNameChange",e=>{s.characterName=e.target.value});o(this,"onLevelChange",e=>{s.level=e.target.value});o(this,"onXpChange",e=>{s.xp=e.target.value});o(this,"onMovesChange",e=>{s.moves=e.detail});o(this,"onNotesChange",e=>{s.notes=e.detail});o(this,"hydrate",e=>{let t=this.querySelector("#character-name"),r=this.querySelector("#level"),n=this.querySelector("#xp"),h=this.querySelector("dw-character-moves"),u=this.querySelector("dw-notes");t.value=e.characterName||"",r.value=e.level||"",n.value=e.xp||0,h.value=e.moves||{},u.setAttribute("value",e.notes||"")})}connectedCallback(){this.render(),s.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),r=this.querySelector("#xp"),n=this.querySelector("dw-character-moves"),h=this.querySelector("dw-notes");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),r.addEventListener("change",this.onXpChange),n.addEventListener("dw-character-moves-change",this.onMovesChange),h.addEventListener("notes-changed",this.onNotesChange)}disconnectedCallback(){s.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),r=this.querySelector("dw-character-moves"),n=this.querySelector("dw-notes");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),xpElement.removeEventListener("change",this.onXpChange),r.removeEventListener("dw-character-moves-change",this.onMovesChange),n.removeEventListener("notes-changed",this.onNotesChange)}render(){this.innerHTML=z}};customElements.define("dw-character-form",$);var se=c`<style>
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
  <link rel="stylesheet" href="tailwind.css" /> `;var he=(l,a,e)=>{let t=document.createElement("a"),r=new Blob([l],{type:e});t.href=URL.createObjectURL(r),t.download=a,t.click()},oe=he;var de=l=>`<option value="${l}" />`,F=class extends HTMLElement{constructor(){super();o(this,"_toggled",!1);o(this,"_characterClass","");o(this,"_characterName","");o(this,"onToggle",()=>{let e=this.shadowRoot.querySelector("#drawer"),t=this.shadowRoot.querySelector("#drawer__toggle");this._toggled=!this._toggled,this._toggled?(t.innerHTML="x",t.classList.add("text-left"),t.classList.add("ml-2"),e.classList.remove("w-10"),e.classList.add("w-64"),[...this.shadowRoot.querySelectorAll(".invisible")].filter(n=>n.id!=="drawer__toggle").forEach(n=>{n.classList.remove("invisible"),n.classList.add("visible")})):(t.innerHTML="\u2261",t.classList.remove("text-left"),t.classList.remove("ml-2"),e.classList.remove("w-64"),e.classList.add("w-10"),[...this.shadowRoot.querySelectorAll(".visible")].filter(n=>n.id!=="drawer__toggle").forEach(n=>{n.classList.remove("visible"),n.classList.add("invisible")}))});o(this,"onClassChange",e=>{let t=this._characterClass;!t||t===""||confirm("Are you sure you want to change your class? This will reset some values on this form.")?(this._characterClass=e.target.value,s.characterClass=this._characterClass):s.characterClass=t});o(this,"onLoadClick",()=>{this.shadowRoot.querySelector("#load-character-file").click()});o(this,"onSaveClick",()=>oe(JSON.stringify(s.save()),`${this._characterName.toLocaleLowerCase()}.json`,"text/plain"));o(this,"onLoadFileChange",e=>{let t=e.currentTarget.files?.[0];if(t){var r=new FileReader;r.onload=n=>{let h=n.target?.result;if(!h||typeof h!="string")throw new Error("No file contents or multiple files detected.");let u=JSON.parse(h);s.loadCharacter(u)},r.readAsText(t),e.currentTarget.value=""}else alert("Failed to load file!")});o(this,"onResetClick",()=>{confirm("Are you sure you want to reset your character?")&&s.reset()});o(this,"hydrate",e=>{this._characterClass=e.characterClass,this._characterName=e.characterName,this.shadowRoot.querySelector("#character-class").value=this._characterClass||"",this.shadowRoot.querySelector("#class-name").innerHTML=this._characterClass||"";let t=this.shadowRoot.querySelector("#player-moves-link");this._characterClass&&this._characterClass!==""?t?.classList.remove("hidden"):t.classList.contains("hidden")||t?.classList.add("hidden")});this.attachShadow({mode:"open"})}onMount(){s.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").addEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").addEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").addEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").addEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#reset").addEventListener("click",this.onResetClick),this.shadowRoot.querySelector("#load-character-file").addEventListener("change",this.onLoadFileChange)}beforeUnmount(){s.subscribe(this.hydrate),this.shadowRoot.querySelector("#drawer__toggle").removeEventListener("click",this.onToggle),this.shadowRoot.querySelector("#character-class").removeEventListener("change",this.onClassChange),this.shadowRoot.querySelector("#load").removeEventListener("click",this.onLoadClick),this.shadowRoot.querySelector("#save").removeEventListener("click",this.onSaveClick),this.shadowRoot.querySelector("#reset").removeEventListener("click",this.onResetClick),this.shadowRoot.querySelector("#load-character-file").removeEventListener("change",this.onLoadFileChange)}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot.innerHTML=se,this.shadowRoot.querySelector("#class-list").innerHTML=Object.values(i).map(de).join("")}};customElements.define("dw-drawer",F);var re=c`<div id="player-moves">
  <h2 class="font-bold text-2xl">Player Moves</h2>
  <hr />
  <h3 class="flex-1 text-2xl medium mt-3">Basic Moves</h3>
  <div class="grid grid-cols-3 gap-3">
    <div class="col-span-full md:col-span-1">
      <h4 id="hack-and-slash" class="text-lg font-bold">Hack and Slash</h4>
      <p>
        When you attack an enemy in melee, roll+Str. On a 10+ you deal your
        damage to the enemy and avoid their attack. At your option, you may
        choose to do +1d6 damage but expose yourself to the enemy's attack. On a
        7-9, you deal your damage to the enemy and the enemy makes an attack
        against you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="defy-danger" class="text-lg font-bold">Defy Danger</h4>
      <p>
        When you act despite an imminent threat or suffer a calamity, say how
        you deal with it and roll. If you do it...
      </p>
      <ul class="list-disc ml-5">
        <li>by powering through, +Str</li>
        <li>by getting out of the way or acting fast, +Dex</li>
        <li>by enduring, +Con</li>
        <li>with quick thinking, +Int</li>
        <li>through mental fortitude, +Wis</li>
        <li>sing charm and social grace, +Cha</li>
      </ul>
      <p>
        On a 10+, you do what you set out to, the threat doesn't come to bear.
        On a 7-9, you stumble, hesitate, or flinch: the GM will offer you a
        worse outcome, hard bargain, or ugly choice.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="discern-realities" class="text-lg font-bold">
        Discern Realities
      </h4>
      <p>
        When you closely study a situation or person, roll+Wis. On a 10+ ask the
        GM three questions from the list below. On a 7-9 ask only one. Take +1
        forward when acting on the answers.
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
      <h4 id="volley" class="text-lg font-bold">Volley</h4>
      <p>
        When you take aim and shoot at an enemy at range, roll+Dex. On a 10+ you
        have a clear shot—deal your damage. On a 7-9, choose one (whichever you
        choose you deal your damage):
      </p>
      <ul class="list-disc ml-5">
        <li>
          You have to move to get the shot placing you in danger of the GM's
          choice
        </li>
        <li>You have to take what you can get: -1d6 damage</li>
        <li>You have to take several shots, reducing your ammo by one.</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="defend" class="text-lg font-bold">Defend</h4>
      <p>
        When you stand in defense of a person, item, or location under attack,
        roll+Con. On a 10+, hold 3. On a 7-9, hold 1. So long as you stand in
        defense, when you or the thing you defend is attacked you may spend
        hold, 1 for 1, to choose an option:
      </p>
      <ul class="list-disc ml-5">
        <li>Redirect an attack from the thing you defend to yourself</li>
        <li>Halve the attack's effect or damage</li>
        <li>
          Open up the attacker to an ally giving that ally +1 forward against
          the attacker
        </li>
        <li>Deal damage to the attacker equal to your level</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="spout-lore" class="text-lg font-bold">Spout Lore</h4>
      <p>
        When you consult your accumulated knowledge about something, roll+Int.
        On a 10+ the GM will tell you something interesting and useful about the
        subject relevant to your situation. On a 7-9 the GM will only tell you
        something interesting it's on you to make it useful. The GM might ask
        you “How do you know this?” Tell them the truth, now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="parley" class="text-lg font-bold">Parley</h4>
      <p>
        When you have leverage on a GM character and manipulate them, roll+Cha.
        Leverage is something they need or want. On a hit they ask you for
        something and do it if you make them a promise first. On a 7-9, they
        need some concrete assurance of your promise, right now.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="aid-or-interfere" class="text-lg font-bold">Aid or Interfere</h4>
      <p>
        When you help or hinder someone you have a Bond with, roll+Bond with
        them. On a hit they take +1 or -2, your choice. On a 7-9 you also expose
        yourself to danger, retribution, or cost.
      </p>
    </div>
  </div>
  <h3 class="flex-1 text-2xl medium mt-3">Special Moves</h3>
  <hr />
  <div class="grid grid-cols-3 gap-3 px-2">
    <div class="col-span-full md:col-span-1">
      <h4 id="last-breath" class="text-lg font-bold">Last Breath</h4>
      <p>
        When you're dying you catch a glimpse of what lies beyond the Black
        Gates of Death's Kingdom (the GM will describe it). Then roll (just
        roll, +nothing—yeah, Death doesn't care how tough or cool you are). On a
        10+ you've cheated death— you're in a bad spot but you're still alive.
        On a 7-9 Death will offer you a bargain. Take it and stabilize or refuse
        and pass beyond the Black Gates into whatever fate awaits you. On a
        miss, your fate is sealed. You're marked as Death's own and you'll cross
        the threshold soon. The GM will tell you when.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="undertake-a-perilous-journey" class="text-lg font-bold">
        Undertake A Perilous Journey
      </h4>
      <p>
        When you travel through hostile territory, choose one member of the
        party to act as trailblazer, one to scout ahead, and one to be
        quartermaster (the same character cannot have two jobs). If you don't
        have enough party members or choose not to assign a job, treat that job
        as if it had rolled a 6. Each character with a job to do rolls+Wis. On a
        10+ the quartermaster reduces the number of rations required by one. On
        a 10+ the trailblazer reduces the amount of time it takes to reach your
        destination (the GM will say by how much). On a 10+ the scout will spot
        any trouble quick enough to let you get the drop on it. On a 7-9 each
        roles performs their job as expected: the normal number of rations are
        consumed, the journey takes about as long as expected, no one gets the
        drop on you but you don't get the drop on them either.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="end-of-session" class="text-lg font-bold">End of Session</h4>
      <p>
        When you reach the end of a session, choose one your bonds that you feel
        is resolved (completely explored, no longer relevant, or otherwise). Ask
        the player of the character you have the bond with if they agree. If
        they do, mark XP and write a new bond with whomever you wish. Once bonds
        have been updated look at your alignment. If you fulfilled that
        alignment at least once this session, mark XP. Then answer these three
        questions as a group:
      </p>
      <ul class="list-disc ml-5">
        <li>Did we learn something new and important about the world?</li>
        <li>Did we overcome a notable monster or enemy?</li>
        <li>Did we loot a memorable treasure?</li>
      </ul>
      <p>For each "yes" answer everyone marks XP.</p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="encumbrance" class="text-lg font-bold">Encumbrance</h4>
      <p>
        When you make a move while carrying weight up to or equal to Load,
        you're fine. When you make a move while carrying weight equal to load+1
        or load+2, you take -1. When you make a move while carrying weight
        greater than load+2, you have a choice: drop at least 1 weight and roll
        at -1, or automatically fail.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="recover" class="text-lg font-bold">Recover</h4>
      <p>
        When you do nothing but rest in comfort and safety after a day of rest
        you recover all your HP. After three days of rest you remove one
        debility of your choice. If you're under the care of a healer (magical
        or otherwise) you heal a debility for every two days of rest instead.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="level-up" class="text-lg font-bold">Level Up</h4>
      <p>
        When you have downtime (hours or days) and XP equal to (or greater than)
        your current level+7, subtract your current level +7 from your XP,
        increase your level by 1, and choose a new advanced move from your
        class. If you are the wizard, you also get to add a new spell to your
        spellbook. Choose one of your stats and increase it by 1 (this may
        change your modifier). Note that changing your Constitution increases
        your maximum and current HP. Ability scores can't go higher than 18.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="take-watch" class="text-lg font-bold">Take Watch</h4>
      <p>
        When you're on watch and something approaches the camp, roll+Wis. On a
        10+ you're able to wake the camp and prepare a response, the camp takes
        +1 forward. On a 7-9 you react just a moment too late; the camp is awake
        but hasn't had time to prepare. You have weapons and armor but little
        else. On a miss whatever lurks outside the campfire's light has the drop
        on you.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="carouse" class="text-lg font-bold">Carouse</h4>
      <p>
        When you return triumphant and throw a big party, spend 100 coin and
        roll + extra 100s of coin spent. On a 10+ choose 3. On a 7-9 choose 1.
        On a miss, you still choose one, but things get really out of hand.
      </p>
      <ul class="list-disc ml-5">
        <li>You befriend a useful NPC</li>
        <li>You hear rumors of an opportunity</li>
        <li>You gain useful information</li>
        <li>You are not entangled, ensorcelled, or tricked</li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="outstanding" class="text-lg font-bold">Outstanding Warrants</h4>
      <p>
        When you return to a civilized place in which you've caused trouble
        before, roll+Cha. On a hit, word has spread of your deeds and everyone
        recognizes you. On a 7-9, that, and, the GM chooses a complication:
      </p>
      <ul class="list-disc ml-5">
        <li>The local constabulary has a warrant out for your arrest</li>
        <li>Someone has put a price on your head</li>
        <li>
          Someone important to you has been put in a bad spot as a result of your
          actions
        </li>
      </ul>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="bolster" class="text-lg font-bold">Bolster</h4>
      <p>
        When you spend your leisure time in study, meditation, or hard practice,
        you gain preparation. If you prepare for a week or two, 1 preparation.
        If you prepare for a month or longer, 3 preparation. When your
        preparation pays off spend 1 preparation for +1 to any roll. You can
        only spend one preparation per roll.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="recruit" class="text-lg font-bold">Recruit</h4>
      <p>
        When you put out word that you're looking to hire help, roll. If you
        make it known...
      </p>
      <ul class="list-disc ml-5">
        <li>...that your pay is generous, take +1</li>
        <li>...what you're setting out to do, take +1</li>
        <li>...that they'll get a share of whatever you find, take +1</li>
      </ul>
      <p>
        If you have a useful reputation around these parts take an additional
        +1. On a 10+ you've got your pick of a number of skilled applicants,
        your choice who you hire, no penalty for not taking them along. On a 7-9
        you'll have to settle for someone close or turn them away. On a miss
        someone influential and ill-suited declares they'd like to come along (a
        foolhardy youth, a loose-cannon, or a veiled enemy, for example), bring
        them and take the consequences or turn them away. If you turn away
        applicants you take -1 forward to Recruit.
      </p>
    </div>
    <div class="col-span-full md:col-span-1">
      <h4 id="supply" class="text-lg font-bold">Supply</h4>
      <p>
        When you go to buy something with money on hand, if it's something
        readily available in the settlement you're in, you can buy it at market
        price. If it's something special, beyond what's usually available here,
        or non-mundane, roll+Cha. On a 10+ you find what you're looking for at a
        fair price. On a 7-9 you'll have to pay more or settle for something
        similar.
      </p>
    </div>
  </div>
</div>
<link rel="stylesheet" href="tailwind.css" />
`;var N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._characterClass}hydrate(a){this._characterClass=a.characterClass,this._characterClass&&this._characterClass!==""?this.classList.remove("hidden"):this.classList.contains("hidden")||this.classList.add("hidden")}onMount(){s.subscribe(this.hydrate.bind(this))}beforeUnmount(){s.unsubscribe(this.hydrate.bind(this))}connectedCallback(){this.render(),this.onMount()}disconnectedCallback(){this.beforeUnmount()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=re)}};customElements.define("dw-player-moves",N);
