var t=`<h1 class="bg-black text-white px-2">
  <slot></slot>
</h1>
`;var e=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let n=this.innerHTML;this.innerHTML=t,this.querySelector("slot").innerHTML=n}};customElements.define("dw-section-header",e);
