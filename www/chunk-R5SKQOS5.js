import{a}from"./chunk-YJ2DKIZS.js";var s=class extends HTMLElement{constructor(){super();a(this,"_template","");a(this,"_value",{});a(this,"_inputs",[]);a(this,"emit",()=>{this.dispatchEvent(new CustomEvent("dw-character-moves-change",{detail:this._value,bubbles:!0}))});a(this,"addEventListenerFacade",(n,t)=>{let e=this.querySelector(n);if(!e)throw new Error(`Element ${n} not found`);switch(e.type){case"checkbox":e.addEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()});break;case"text":e.addEventListener("change",()=>{this._value[t]=e.value||"",this.emit()});break;default:if(e instanceof HTMLTextAreaElement){e.addEventListener("change",()=>{this._value[t]=e.value||"",this.emit()});return}throw new Error(`Unknown element type ${e.type}`)}});a(this,"removeEventListenerFacade",(n,t)=>{let e=this.querySelector(n);if(!e)throw new Error(`Element ${n} not found`);switch(e.type){case"checkbox":e.removeEventListener("change",()=>{this._value[t]=!this._value[t],this.emit()});break;case"text":e.removeEventListener("change",()=>{this._value[t]=e.value,this.emit()});break;default:if(e instanceof HTMLTextAreaElement){e.addEventListener("change",()=>{this._value[t]=e.value||"",this.emit()});return}throw new Error(`Unknown element type ${e.type}`)}});a(this,"updateElement",(n,t)=>{let e=this.querySelector(n);if(!e)throw new Error(`Element ${n} not found`);switch(e.type){case"checkbox":e.checked=this._value[t];break;case"text":e.value=this._value[t]&&this._value[t]!=="undefined"?this._value[t]:"";break;default:if(e instanceof HTMLTextAreaElement){e.value=this._value[t]&&this._value[t]!=="undefined"?this._value[t]:"";return}throw new Error(`Unknown element type ${e.type}`)}});a(this,"updateDom",()=>{this._inputs.forEach(([n,t])=>{this.updateElement(n,t)})})}get value(){return this._value}set value(n){this._value=n,this.updateDom()}connectedCallback(){this.render(),this._inputs.forEach(([n,t])=>this.addEventListenerFacade(n,t))}disconnectedCallback(){this._inputs.forEach(([n,t])=>this.removeEventListenerFacade(n,t))}render(){this.innerHTML=this._template,this.updateDom()}};export{s as a};
