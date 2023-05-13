import{b as i}from"./chunk-2DL6MCQC.js";var s=i`<div class="flex flex-col">
  <div class="flex flex-row">
    <input type="checkbox" />
    <label></label>
  </div>
  <div class="flex flex-col">
    <slot></slot>
  </div>
</div> `;var o=document.createElement("template");o.innerHTML=s;var r=class extends HTMLElement{constructor(){super()}static get observedAttributes(){return["key","label"]}attributeChangedCallback(e,l,t){if(l!==t)switch(e){case"key":case"label":this.onMount();break;default:break}}onMount(){let e=this.getAttribute("key"),l=this.getAttribute("label"),t=this.querySelector("input"),n=this.querySelector("label");n&&(n.innerHTML=l,n.setAttribute("for",e)),t&&(t.setAttribute("name",e),t.setAttribute("id",e))}connectedCallback(){this.render(),this.onMount()}render(){let e=this.innerHTML;this.innerHTML="",this.appendChild(o.content.cloneNode(!0)),this.querySelector("slot").innerHTML=e}};customElements.define("dw-detailed-checkbox",r);
