(()=>{var $=Object.defineProperty;var F=(c,a,e)=>a in c?$(c,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[a]=e;var i=(c,a,e)=>(F(c,typeof a!="symbol"?a+"":a,e),e);var q=`<form id="character-form" class="container mx-auto px-4 py-4">\r
  <div class="grid grid-cols-2 lg:grid-cols-5 my-1">\r
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
      <div>\r
        <dw-character-look></dw-character-look>\r
      </div>\r
      <div class="flex flex-col">\r
        <label\r
          for="armor"\r
          class="bg-black text-white flex flex-row relative mb-16"\r
        >\r
          ARMOR\r
          <div class="flex flex-1 grow justify-end shield">\r
            <input\r
              type="text"\r
              id="armor"\r
              name="armor"\r
              class="text-black bg-white w-6 z-10 mr-10 outline-none text-center"\r
            />\r
          </div>\r
        </label>\r
        <div class="bg-black text-white flex flex-row relative mb-16 px-2">\r
          HIT POINTS\r
          <div class="flex flex-1 grow justify-end heart">\r
            <input\r
              type="text"\r
              id="hit-points"\r
              name="hit-points"\r
              class="text-black bg-white w-6 z-10 outline-none text-center border-r-2 border-black"\r
            />\r
            <input\r
              type="text"\r
              id="max-hit-points"\r
              name="max-hit-points"\r
              class="text-black bg-white w-6 z-10 mr-7 outline-none text-center"\r
            />\r
          </div>\r
        </div>\r
        <div class="bg-black text-white flex flex-row relative mb-16 px-2">\r
          DAMAGE\r
          <div class="flex flex-1 grow justify-end damage-dice">\r
            <span class="z-10 mr-10 text-black">D10</span>\r
          </div>\r
        </div>\r
      </div>\r
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
      <dw-character-alignment></dw-character-alignment>\r
      <dw-character-bonds></dw-character-bonds>\r
      <dw-character-race></dw-character-race>\r
      <dw-character-coin></dw-character-coin>\r
      <dw-character-gear></dw-character-gear>\r
    </div>\r
  </div>\r
</form>\r
`;var m=class{constructor(){i(this,"_observers");i(this,"_state");this._observers=[],this._state=void 0}subscribe(a){this._observers.push(a)}unsubscribe(a){this._observers=this._observers.filter(e=>e!==a)}notify(){this._observers.forEach(a=>a(this._state))}};var v=class extends m{constructor(){super();let a=JSON.parse(localStorage.getItem("character"))||{};this._state={...a}}notify(){super.notify(),localStorage.setItem("character",JSON.stringify(this._state))}subscribe(a){super.subscribe(a),a(this._state)}set characterName(a){this._state={...this._state,characterName:a},this.notify()}set level(a){this._state={...this._state,level:a},this.notify()}set xp(a){this._state={...this._state,xp:a},this.notify()}set look(a){this._state={...this._state,look:a},this.notify()}set armor(a){this._state={...this._state,armor:a},this.notify()}set hitPoints(a){this._state={...this._state,hitPoints:a},this.notify()}set maxHitPoints(a){this._state={...this._state,maxHitPoints:a},this.notify()}set alignment(a){this._state={...this._state,alignment:a},this.notify()}set strength(a){this._state={...this._state,strength:a},this.notify()}set weak(a){this._state={...this._state,weak:a},this.notify()}set dexterity(a){this._state={...this._state,dexterity:a},this.notify()}set shaky(a){this._state={...this._state,shaky:a},this.notify()}set constitution(a){this._state={...this._state,constitution:a},this.notify()}set sick(a){this._state={...this._state,sick:a},this.notify()}set intelligence(a){this._state={...this._state,intelligence:a},this.notify()}set stunned(a){this._state={...this._state,stunned:a},this.notify()}set wisdom(a){this._state={...this._state,wisdom:a},this.notify()}set confused(a){this._state={...this._state,confused:a},this.notify()}set charisma(a){this._state={...this._state,charisma:a},this.notify()}set scarred(a){this._state={...this._state,scarred:a},this.notify()}set bonds(a){this._state={...this._state,bonds:a.filter(e=>e.trim()!=="")},this.notify()}set race(a){this._state={...this._state,race:a},this.notify()}set coin(a){this._state={...this._state,coin:a},this.notify()}set gear(a){this._state={...this._state,gear:a.filter(e=>e.trim()!=="")},this.notify()}set load(a){this._state={...this._state,load:a},this.notify()}set maxLoad(a){this._state={...this._state,maxLoad:a},this.notify()}set moves(a){this._state={...this._state,moves:a},this.notify()}},Y=new v,s=Y;var H=`<div class="flex flex-col">\r
  <dw-section-header>LOOK</dw-section-header>\r
  <div class="px-2 text-xs italic">Choose one for each, or write your own:</div>\r
  <div class="flex flex-col xl:flex-row xl:items-center">\r
    <label for="body" class="font-bold">BODY</label>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="body" id="body-built" value="built" />\r
      <label class="text-sm" for="body-built">Built</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="body" id="body-lithe" value="lithe" />\r
      <label class="text-sm" for="body-thin">Lithe</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="body" id="body-ravaged" value="ravaged" />\r
      <label class="text-sm" for="body-ravaged">Ravaged</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input\r
        type="text"\r
        name="body"\r
        id="body-other"\r
        value=""\r
        class="bg-transparent border-b-2 border-b-black outline-none w-14"\r
      />\r
    </div>\r
  </div>\r
  <div class="flex flex-col xl:flex-row xl:items-center">\r
    <label for="eyes" class="font-bold">EYES</label>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="eyes" id="eyes-hard" value="hard" />\r
      <label class="text-sm" for="eyes-hard">Hard</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="eyes" id="eyes-dead" value="dead" />\r
      <label class="text-sm" for="eyes-dead">Dead</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="eyes" id="eyes-eager" value="eager" />\r
      <label class="text-sm" for="eyes-dead">Eager</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input\r
        type="text"\r
        name="eyes"\r
        id="eyes-other"\r
        value=""\r
        class="bg-transparent border-b-2 border-b-black outline-none w-14"\r
      />\r
    </div>\r
  </div>\r
  <div class="flex flex-col xl:flex-row xl:items-center">\r
    <label for="hair" class="font-bold">HAIR</label>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="hair" id="hair-wild" value="wild" />\r
      <label class="text-sm" for="hair-wild">Wild</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input type="radio" name="hair" id="hair-shorn" value="shorn" />\r
      <label class="text-sm" for="hair-shorn">Shorn</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input\r
        type="radio"\r
        name="hair"\r
        id="battered-helm"\r
        value="battered-helm"\r
      />\r
      <label class="text-sm" for="battered-helm">Battered Helm</label>\r
    </div>\r
    <div class="flex-row ml-2 xl:ml-0">\r
      <input\r
        type="text"\r
        name="hair"\r
        id="hair-other"\r
        value=""\r
        class="bg-transparent border-b-2 border-b-black outline-none w-14"\r
      />\r
    </div>\r
  </div>\r
</div>\r
`;var A=`<h1 class="bg-black text-white px-2">
  <slot></slot>
</h1>
`;var p=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let a=this.innerHTML;this.innerHTML=A,this.querySelector("slot").innerHTML=a}};customElements.define("dw-section-header",p);var f=class extends HTMLElement{constructor(){super();i(this,"_body");i(this,"_eyes");i(this,"_hair");i(this,"_skin");i(this,"emit",()=>{this.dispatchEvent(new CustomEvent("dw-change",{detail:{body:this._body,eyes:this._eyes,hair:this._hair}}))});i(this,"onBodyChange",e=>{this._body=e.target.value,s.look={body:this._body,eyes:this._eyes,hair:this._hair}});i(this,"onEyesChange",e=>{this._eyes=e.target.value,s.look={body:this._body,eyes:this._eyes,hair:this._hair}});i(this,"onHairChange",e=>{this._hair=e.target.value,s.look={body:this._body,eyes:this._eyes,hair:this._hair}});i(this,"hydrate",e=>{let t=e.look||{};this._body=t.body||"",this._eyes=t.eyes||"",this._hair=t.hair||"";let n=[...this.querySelectorAll('[name="body"][type="radio"]')];n.map(l=>l.checked=t.body===l.value);let o=this.querySelector("#body-other");o.value=n.every(l=>l.value!==t.body)&&t.body||"";let r=[...this.querySelectorAll('[name="eyes"][type="radio"]')];r.map(l=>l.checked=t.eyes===l.value);let u=this.querySelector("#eyes-other");u.value=r.every(l=>l.value!==t.eyes)&&t.eyes||"";let d=[...this.querySelectorAll('[name="hair"][type="radio"]')];d.map(l=>l.checked=t.hair===l.value);let h=this.querySelector("#hair-other");h.value=d.every(l=>l.value!==t.hair)&&t.hair||""})}get body(){return this._body}set body(e){this._body=e}get eyes(){return this._eyes}set eyes(e){this._eyes=e}get hair(){return this._hair}set hair(e){this._hair=e}get skin(){return this._skin}set skin(e){this._skin=e}connectedCallback(){this.render(),s.subscribe(this.hydrate);let e=[...this.querySelectorAll('[name="body"]')],t=[...this.querySelectorAll('[name="eyes"]')],n=[...this.querySelectorAll('[name="hair"]')];e.map(o=>o.addEventListener("change",this.onBodyChange)),t.map(o=>o.addEventListener("change",this.onEyesChange)),n.map(o=>o.addEventListener("change",this.onHairChange))}disconnectedCallback(){s.unsubscribe(this.hydrate);let e=[...this.querySelectorAll('[name="body"]')],t=[...this.querySelectorAll('[name="eyes"]')],n=[...this.querySelectorAll('[name="hair"]')];e.map(o=>o.removeEventListener("change",this.onBodyChange)),t.map(o=>o.removeEventListener("change",this.onEyesChange)),n.map(o=>o.removeEventListener("change",this.onHairChange))}render(){this.innerHTML=H}};customElements.define("dw-character-look",f);var M=`<div class="flex flex-col">\r
  <label for="armor" class="bg-black text-white flex flex-row relative">\r
    ALIGNMENT\r
  </label>\r
  <div class="flex flex-row items-center">\r
    <input type="radio" name="alignment" id="alignment-good" class="mx-2" value="good" />\r
    <label for="alignment-good" class="flex flex-col">\r
      <div>Good</div>\r
      <div class="text-xs italic">Defend those weaker than you.</div>\r
    </label>\r
  </div>\r
  <div class="flex flex-row items-center">\r
    <input type="radio" name="alignment" id="alignment-neutral" class="mx-2" value="neutral" />\r
    <label for="alignment-neutral" class="flex flex-col">\r
      <div>Neutral</div>\r
      <div class="text-xs italic">Defeat a worthy opponent.</div>\r
    </label>\r
  </div>\r
  <div class="flex flex-row items-center">\r
    <input type="radio" name="alignment" id="alignment-evil" class="mx-2" value="evil" />\r
    <label for="alignment-evil" class="flex flex-col">\r
      <div>Evil</div>\r
      <div class="text-xs italic">Kill a defenseless or surrendered enemy.</div>\r
    </label>\r
  </div>\r
  <div class="flex flex-row items-center">\r
    <input type="text" name="alignment" id="alignment-other" class="ml-9 bg-transparent outline-none border-b-2 border-black w-full" />\r
  </div>\r
</div>`;var b=class extends HTMLElement{constructor(){super();i(this,"onAlignmentChange",e=>{s.alignment=e.target.value});i(this,"hydrate",e=>{let t=[...this.querySelectorAll('[name="alignment"][type="radio"]')],n=this.querySelector("#alignment-other");t.forEach(o=>{o.checked=o.value===e.alignment}),n.value=t.every(o=>o.value!==e.alignment)&&e.alignment||""})}connectedCallback(){this.render(),s.subscribe(this.hydrate),[...this.querySelectorAll('[name="alignment"]')].forEach(t=>{t.addEventListener("change",this.onAlignmentChange)})}disconnectedCallback(){s.unsubscribe(this.hydrate),[...this.querySelectorAll('[name="alignment"]')].forEach(t=>{t.removeEventListener("change",this.onAlignmentChange)})}render(){this.innerHTML=M}};customElements.define("dw-character-alignment",b);var W=`<div class="grid grid-cols-1 lg:grid-cols-3 gap-2">\r
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
</div>`;var T=`<style>\r
  .flex {\r
    display: flex;\r
  }\r
  \r
  .flex-row {\r
    flex-direction: row;\r
  }\r
\r
  .flex-col {\r
    flex-direction: column;\r
  }\r
\r
  .py-2 {\r
    padding-top: 0.5rem;\r
    padding-bottom: 0.5rem;\r
  }\r
\r
  .mb-6 {\r
    margin-bottom: 2rem;\r
  }\r
\r
  .px-2 {\r
    padding-left: 0.5rem;\r
    padding-right: 0.5rem;\r
  }\r
\r
  .mx-2 {\r
    margin-right: 0.5rem;\r
    margin-left: 0.5rem;\r
  }\r
\r
  .border-2 {\r
    border: 2px solid black;\r
  }\r
\r
  .w-full {\r
    width: 100%;\r
  }\r
\r
  .bg-transparent {\r
    background-color: transparent;\r
  }\r
\r
  .bg-black {\r
    background-color: black;\r
  }\r
\r
  .bg-white {\r
    background-color: white;\r
  }\r
\r
  .rounded-full {\r
    border-radius: 50%;\r
  }\r
\r
  .text-white {\r
    color: white;\r
  }\r
\r
  .text-black {\r
    color: black;\r
  }\r
\r
  .border-none {\r
    border: none;\r
  }\r
\r
  .outline-none {\r
    outline: none;\r
  }\r
\r
  .justify-end {\r
    justify-content: end;\r
  }\r
\r
  .items-end {\r
    align-items: end;\r
  }\r
\r
  .flex-1 {\r
    flex: 1;\r
  }\r
\r
  .w {\r
    width: 4rem;\r
  }\r
\r
  .h {\r
    height: 4rem;\r
  }\r
  \r
  .justify-center {\r
    justify-content: center;\r
  }\r
\r
  .items-center {\r
    align-items: center;\r
  }\r
\r
  .absolute {\r
    position: absolute;\r
  }\r
\r
  .shadow-2 {\r
    box-shadow: 0 0 2px 2px black;\r
  }\r
\r
</style>\r
<div class="flex flex-col border-2 mb-6">\r
  <div class="flex flex-row py-2 px-2 bg-white">\r
    <label id="score-label">\r
      <slot></slot>\r
    </label>\r
    <input type="number" name="score" class="w-full mx-2 bg-transparent outline-none border-none" />\r
  </div>\r
  <div class="flex flex-row bg-black text-white px-2 py-2">\r
    <div class="flex flex-col bg-white rounded-full w h text-black justify-center items-center absolute shadow-2">\r
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
</div>`;var g=class extends HTMLElement{constructor(){super();i(this,"_id");i(this,"_value",0);i(this,"_debuff",!1);i(this,"emitAttributeChange",e=>this.dispatchEvent(new CustomEvent("dw-attribute-change",{detail:e})));i(this,"emitDebuffChange",e=>this.dispatchEvent(new CustomEvent("dw-debuff-change",{detail:e})));i(this,"onScoreChange",e=>{this._value=e.target.value,this.emitAttributeChange(e.target.value),this.updateModifier()});i(this,"onDebuffClick",()=>{this._debuff=!this._debuff,this.emitDebuffChange(this._debuff)});this.attachShadow({mode:"open"})}static get observedAttributes(){return["id","value","debuff"]}attributeChangedCallback(e,t,n){switch(e){case"id":this._id=n;break;case"debuff":this._debuff=n==="true";let o=this.shadowRoot.querySelector("#debuff");o.checked=this._debuff;break;case"value":default:this._value=n;let r=this.shadowRoot.querySelector('[name="score"]');r.value=n,this.updateModifier();break}}calculateModifier(){return this._value<=3?-3:this._value<=5?-2:this._value<=8?-1:this._value<=12?0:this._value<=15?1:this._value<=17?2:3}updateModifier(){let e=this.shadowRoot.querySelector("#modifier");e.innerHTML=this.calculateModifier()}connectedCallback(){this.render();let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#score-label"),n=this.shadowRoot.querySelector("#debuff");e.setAttribute("id",`score-${this._id}`),t.setAttribute("for",`score-${this._id}`),e.addEventListener("change",this.onScoreChange),n.addEventListener("click",this.onDebuffClick)}disconnectedCallback(){let e=this.shadowRoot.querySelector('[name="score"]'),t=this.shadowRoot.querySelector("#debuff");e.removeEventListener("change",this.onScoreChange),t.removeEventListener("change",this.onDebuffClick)}render(){this.shadowRoot.innerHTML=T,this.updateModifier()}};customElements.define("dw-character-attribute",g);var y=["strength","dexterity","constitution","intelligence","wisdom","charisma"],x=class extends HTMLElement{constructor(){super();i(this,"onAttributeChangeHof",e=>t=>{switch(e){case"strength":s.strength=t.detail;break;case"dexterity":s.dexterity=t.detail;break;case"constitution":s.constitution=t.detail;break;case"intelligence":s.intelligence=t.detail;break;case"wisdom":s.wisdom=t.detail;break;case"charisma":s.charisma=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});i(this,"onDebuffChangeHof",e=>t=>{switch(e){case"strength":s.weak=t.detail;break;case"dexterity":s.shaky=t.detail;break;case"constitution":s.sick=t.detail;break;case"intelligence":s.stunned=t.detail;break;case"wisdom":s.confused=t.detail;break;case"charisma":s.scarred=t.detail;break;default:throw new Error(`Unknown attribute: ${e}`)}});i(this,"hydrate",e=>{y.forEach(t=>{let n=this.querySelector(`#${t}`),o,r;switch(t){case"strength":o=e.strength,r=e.weak;break;case"dexterity":o=e.dexterity,r=e.shaky;break;case"constitution":o=e.constitution,r=e.sick;break;case"intelligence":o=e.intelligence,r=e.stunned;break;case"wisdom":o=e.wisdom,r=e.confused;break;case"charisma":o=e.charisma,r=e.scarred;break;default:throw new Error(`Unknown attribute: ${t}`)}n.setAttribute("value",o||0),n.setAttribute("debuff",r||!1)})})}connectedCallback(){this.render(),s.subscribe(this.hydrate),y.forEach(e=>{let t=this.querySelector(`#${e}`);t.addEventListener("dw-attribute-change",this.onAttributeChangeHof(e)),t.addEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}disconnectedCallback(){y.forEach(e=>{let t=this.querySelector(`#${e}`);t.removeEventListener("change",this.onAttributeChangeHof(e)),t.removeEventListener("dw-debuff-change",this.onDebuffChangeHof(e))})}render(){this.innerHTML=W}};customElements.define("dw-character-attributes",x);var R=`<div id="bonds" class="flex flex-col">
  <dw-section-header>
    BONDS
  </dw-section-header>
  <dw-infinite-list id="bonds-list"></dw-infinite-list>
</div>
`;var O=`<style>

  .outline-none {
    outline: none;
  }

  .flex {
    display: flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .bg-transparent {
    background-color: transparent;
  }

  .border-b-2 {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom-width: 2px;
  }

  .border-b-black {
    border-bottom-color: black;
  }

  .outline-none {
    outline: none;
  }

  .w-full {
    width: 100%;
  }
</style>
<div id="list">
  <input id="new" type="text" class="outline-none bg-transparent border-b-2 border-b-black outline-none w-full" />
</div>
`;var D=(c,a)=>{let e=document.createElement("template"),t="bg-transparent border-b-2 border-b-black outline-none w-full";return e.innerHTML=`<input type="text" value="${c}" id="item-${a}" class="${t}" />`,e.content.firstChild},w=class extends HTMLElement{constructor(){super();i(this,"_value",[]);i(this,"onUpdate",async(e,t)=>{let n=e.target.value;if(this._value[t]=n,n===""){let o=this._value;this._value=this._value.filter((r,u)=>u!==t),this.renderList(o,this._value)}this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});i(this,"onAdd",e=>{let t=this._value.length;this._value=[...this._value,e],this.shadowRoot.querySelector("#new").value="";let n=D(e,t);n.setAttribute("value",e),this.shadowRoot.querySelector("#list").insertBefore(n,this.shadowRoot.querySelector("#new")),n.setSelectionRange(n.value.length,n.value.length),n.addEventListener("keyup",o=>{this.onUpdate(o,t)}),n.focus(),this.dispatchEvent(new CustomEvent("dw-infinite-list-change",{detail:this._value}))});this.attachShadow({mode:"open"})}get value(){return this._value}set value(e){this.renderList(this._value,e),this._value=e}diff(e,t){let[n,o]=t.reduce(([u,d],h,l)=>(l<e.length&&e[l]!==h&&d.push(l),l>=e.length&&u.push(h),[u,d]),[[],[]]);return{removed:e.reduce((u,d,h)=>(t[h]||u.push(h),u),[]),added:n,modified:o}}renderList(e=[],t=[]){let{removed:n,added:o,modified:r}=this.diff(e,t),u=this.shadowRoot.querySelector("#list");n.forEach(d=>{let h=this.shadowRoot.querySelector(`#item-${d}`);h&&(h.removeEventListener("keyup",l=>this.onUpdate(l,d)),h.remove())}),r.forEach(d=>{let h=this.shadowRoot.querySelector(`#item-${d}`);h&&(h.value=t[d])}),o.forEach((d,h)=>{let l=D(d,e.length+h);l.addEventListener("keyup",U=>this.onUpdate(U,h)),u.insertBefore(l,this.shadowRoot.querySelector("#new"))})}connectedCallback(){this.render(),this.shadowRoot.querySelector("#new").addEventListener("keyup",e=>this.onAdd(e.target.value))}disconnectedCallback(){this.shadowRoot.querySelector("#new").removeEventListener("keyup",e=>this.onAdd(e.target.value)),this._value.forEach((e,t)=>{document.querySelector(`#item-${t}`).removeEventListener("keyup",o=>this.onUpdate(o,t))})}render(){this.shadowRoot.innerHTML=O,this.renderList([],this._value)}};customElements.define("dw-infinite-list",w);var k=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{this.querySelector("#bonds-list").value=e.bonds})}onUpdate(e){s.bonds=e.detail}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#bonds-list").addEventListener("dw-infinite-list-change",this.onUpdate)}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#bonds-list").removeEventListener("dw-infinite-list-change",this.onUpdate)}render(){this.innerHTML=R}};customElements.define("dw-character-bonds",k);var P=`<div id="character-race" class="flex flex-col">
  <dw-section-header>Race</dw-section-header>
  <div class="flex flex-row items-center">
    <input
      type="radio"
      name="race"
      id="race-dwarf"
      class="mx-2"
      value="Dwarf"
    />
    <label for="race-dwarf" class="flex flex-col">
      <div>Dwarf</div>
      <div class="text-xs italic">
        When you share a drink with someone, you may parley with them using CON
        instead of CHA.
      </div>
    </label>
  </div>
  <div class="flex flex-row items-center">
    <input type="radio" name="race" id="race-elf" class="mx-2" value="Elf" />
    <label for="race-elf" class="flex flex-col">
      <div>Elf</div>
      <div class="text-xs italic">
        Choose one weapon-you can always treat weapons of that type as if they
        had the precise tag.
      </div>
    </label>
  </div>
  <div class="flex flex-row items-center">
    <input
      type="radio"
      name="race"
      id="race-halfling"
      class="mx-2"
      value="Halfling"
    />
    <label for="race-halfling" class="flex flex-col">
      <div>Halfling</div>
      <div class="text-xs italic">
        When you Defy Danger and use your small size to your advantage, take +1.
      </div>
    </label>
  </div>
  <div class="flex flex-row items-center">
    <input
      type="radio"
      name="race"
      id="race-human"
      class="mx-2"
      value="Human"
    />
    <label for="race-human" class="flex flex-col">
      <div>Human</div>
      <div class="text-xs italic">
        Once per battle you may reroll a single damage roll (yours or someone
        else's
      </div>
    </label>
  </div>
</div>
`;var E=class extends HTMLElement{constructor(){super();i(this,"emit",e=>{s.race=e});i(this,"onChange",e=>{this.emit(e.target.value)});i(this,"hydrate",e=>{this.querySelectorAll('[name="race"]').forEach(t=>{t.checked=e.race===t.value})})}static get observedAttributes(){return[]}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelectorAll('[name="race"]').forEach(e=>e.addEventListener("change",this.onChange))}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelectorAll('[name="race"]').forEach(e=>e.removeEventListener("change",this.onChange))}render(){this.innerHTML=P}};customElements.define("dw-character-race",E);var I=`<style>
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
`;var _=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{let t=this.querySelector("#coin");t.value=e.coin||0})}static get observedAttributes(){return["value"]}attributeChangedCallback(e,t,n){e==="value"&&(this.querySelector("#coin").innerHTML=n)}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#coin").addEventListener("change",t=>{s.coin=t.target.value})}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#coin").removeEventListener("change",t=>{s.coin=t.target.value})}render(){this.innerHTML=I}};customElements.define("dw-character-coin",_);var N=`<div>
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
`;var S=class extends HTMLElement{constructor(){super();i(this,"hydrate",e=>{this.querySelector("#gear-list").value=e.gear||[],this.querySelector("#load").value=e.load||0,this.querySelector("#max-load").value=e.maxLoad||0})}onUpdate(e){s.gear=e.detail}connectedCallback(){this.render(),s.subscribe(this.hydrate),this.querySelector("#gear-list").addEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").addEventListener("change",e=>{s.load=e.target.value}),this.querySelector("#max-load").addEventListener("change",e=>{s.maxLoad=e.target.value})}disconnectedCallback(){s.unsubscribe(this.hydrate),this.querySelector("#gear-list").removeEventListener("dw-infinite-list-change",this.onUpdate),this.querySelector("#load").removeEventListener("change",e=>{s.load=e.target.value}),this.querySelector("#max-load").removeEventListener("change",e=>{s.maxLoad=e.target.value})}render(){this.innerHTML=N}};customElements.define("dw-character-gear",S);var B=`<div>
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
        <div class="grid grid-cols-2" id="signature-weapon-look">
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
`;var C=class extends HTMLElement{constructor(){super();i(this,"_value",{});i(this,"_inputs",[["#signature-weapon","signatureWeapon"],["#signature-weapon-sword","signatureWeaponSword"],["#signature-weapon-spear","signatureWeaponSpear"],["#signature-weapon-axe","signatureWeaponAxe"],["#signature-weapon-flail","signatureWeaponFlail"],["#signature-weapon-hammer","signatureWeaponHammer"],["#signature-weapon-fists","signatureWeaponFists"],["#signature-weapon-range-hand","signatureWeaponRangeHand"],["#signature-weapon-range-close","signatureWeaponRangeClose"],["#signature-weapon-range-reach","signatureWeaponRangeReach"],["#signature-weapon-enhancement-hooks-and-spikes","signatureWeaponEnhancementHooksAndSpikes"],["#signature-weapon-enhancement-sharp","signatureWeaponEnhancementSharp"],["#signature-weapon-enhancement-prefectly-weighted","signatureWeaponEnhancementPrefectlyWeighted"],["#signature-weapon-enhancement-serrated-edges","signatureWeaponEnhancementSerratedEdges"],["#signature-weapon-enhancement-glows-in-the-dark","signatureWeaponEnhancementGlowsInTheDark"],["#signature-weapon-enhancement-huge","signatureWeaponEnhancementHuge"],["#signature-weapon-enhancement-versatile","signatureWeaponEnhancementVersatile"],["#signature-weapon-enhancement-well-crafted","signatureWeaponEnhancementWellCrafted"],["#signature-weapon-look-ancient","signatureWeaponLookAncient"],["#signature-weapon-look-blood-stained","signatureWeaponLookBloodStained"],["#signature-weapon-look-unblemished","signatureWeaponLookUnblemished"],["#signature-weapon-look-sinister","signatureWeaponLookSinister"],["#signature-weapon-look-ornate","signatureWeaponLookOrnate"],["#bend-bars-lift-gates","bendBarsLiftGates"],["#armored","armored"],["#merciless","merciless"],["#armor-mastery","armorMastery"],["#heirloom","heirloom"],["#seeing-red","seeingRed"],["#improved-weapon","improvedWeapon"],["#interrogator","interrogator"],["#blacksmith","blacksmith"],["#scent-of-blood","scentOfBlood"],["#iron-hide","ironHide"],["#multiclass-dabbler","multiclassDabbler"],["#bloodthirsty","bloodthirsty"],["#armored-perfection","armoredPerfection"],["#through-deaths-eyes","throughDeathsEyes"],["#evil-eye","evilEye"],["#eye-for-weaponry","eyeForWeaponry"],["#superior-warrior","superiorWarrior"],["#taste-of-blood","tasteOfBlood"],["#steel-hide","steelHide"],["#multiclass-initiate","multiclassInitiate"]]);i(this,"emit",()=>{this.dispatchEvent(new CustomEvent("dw-character-moves-change",{detail:this._value}))});i(this,"addEventListenerFacade",(e,t)=>{let n=this.querySelector(e);if(!n)throw new Error(`Element ${e} not found`);n.addEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()})});i(this,"removeEventListenerFacade",(e,t)=>{let n=this.querySelector(e);if(!n)throw new Error(`Element ${e} not found`);n.removeEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()})});i(this,"updateElement",(e,t)=>{let n=this.querySelector(e);if(!n)throw new Error(`Element ${e} not found`);n.checked=this._value[t]});i(this,"updateDom",()=>{this._inputs.forEach(([e,t])=>{this.updateElement(e,t)})})}get value(){return this._value}set value(e){this._value=e,this.updateDom()}connectedCallback(){this.render(),this._inputs.forEach(([e,t])=>this.addEventListenerFacade(e,t))}disconnectedCallback(){this._inputs.forEach(([e,t])=>this.removeEventListenerFacade(e,t))}render(){this.innerHTML=B,this.updateDom()}};customElements.define("dw-character-moves",C);var L=class extends HTMLElement{constructor(){super();i(this,"onCharacterNameChange",e=>{s.characterName=e.target.value});i(this,"onLevelChange",e=>{s.level=e.target.value});i(this,"onXpChange",e=>{s.xp=e.target.value});i(this,"onArmorChange",e=>{s.armor=e.target.value});i(this,"onHitPointsChange",e=>{s.hitPoints=e.target.value});i(this,"onMaxHitPointsChange",e=>{s.maxHitPoints=e.target.value});i(this,"onMovesChange",e=>{s.moves=e.detail});i(this,"hydrate",e=>{let t=this.querySelector("#character-name"),n=this.querySelector("#level"),o=this.querySelector("#xp"),r=this.querySelector("#armor"),u=this.querySelector("#hit-points"),d=this.querySelector("#max-hit-points"),h=this.querySelector("dw-character-moves");t.value=e.characterName||"",n.value=e.level||"",o.value=e.xp||0,r.value=e.armor||0,u.value=e.hitPoints||0,d.value=e.maxHitPoints||0,h.value=e.moves||{}})}connectedCallback(){this.render(),s.subscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),n=this.querySelector("#xp"),o=this.querySelector("#armor"),r=this.querySelector("#hit-points"),u=this.querySelector("#max-hit-points"),d=this.querySelector("dw-character-moves");e.addEventListener("change",this.onCharacterNameChange),t.addEventListener("change",this.onLevelChange),n.addEventListener("change",this.onXpChange),o.addEventListener("change",this.onArmorChange),r.addEventListener("change",this.onHitPointsChange),u.addEventListener("change",this.onMaxHitPointsChange),d.addEventListener("dw-character-moves-change",this.onMovesChange)}disconnectedCallback(){s.unsubscribe(this.hydrate);let e=this.querySelector("#character-name"),t=this.querySelector("#level"),n=this.querySelector("#xp"),o=this.querySelector("#armor"),r=this.querySelector("#hit-points"),u=this.querySelector("#max-hit-points"),d=this.querySelector("dw-character-moves");e.removeEventListener("change",this.onCharacterNameChange),t.removeEventListener("change",this.onLevelChange),n.removeEventListener("change",this.onXpChange),o.removeEventListener("change",this.onArmorChange),r.removeEventListener("change",this.onHitPointsChange),u.removeEventListener("change",this.onMaxHitPointsChange),d.removeEventListener("dw-character-moves-change",this.onMovesChange)}render(){this.innerHTML=q}};customElements.define("dw-character-form",L);})();
//# sourceMappingURL=index.js.map
