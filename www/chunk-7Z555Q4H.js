var t=`<h1 class="bg-black text-white px-2">\r
  <slot></slot>\r
</h1>\r
`;var e=class extends HTMLElement{constructor(){super()}connectedCallback(){this.render()}render(){let n=this.innerHTML;this.innerHTML=t,this.querySelector("slot").innerHTML=n}};customElements.define("dw-section-header",e);
