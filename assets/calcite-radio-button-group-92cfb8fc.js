import{p as a,H as n,l as r,h as s,k as d}from"./jsxFactory-92036771.js";import{c as l}from"./observers-9c654f26.js";import{s as h,a as u,c}from"./loadable-7d42c3de.js";import"./index-b516d057.js";import"./uuid-709b6c67.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const m=":host{display:flex;max-inline-size:100vw}:host([layout=horizontal]){flex-direction:row;flex-wrap:wrap}:host([layout=horizontal][scale=s]){gap:1rem}:host([layout=horizontal][scale=m]){gap:1.25rem}:host([layout=horizontal][scale=l]){gap:1.5rem}:host([layout=vertical]){flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}",o=a(class extends n{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteRadioButtonGroupChange=r(this,"calciteRadioButtonGroupChange",6),this.mutationObserver=l("mutation",()=>this.passPropsToRadioButtons()),this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button")),this.selectedItem=Array.from(this.radioButtons).find(t=>t.checked)||null,this.radioButtons.length>0&&this.radioButtons.forEach(t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale})},this.disabled=!1,this.hidden=!1,this.layout="horizontal",this.name=void 0,this.required=!1,this.selectedItem=null,this.scale="m",this.radioButtons=[]}onDisabledChange(){this.passPropsToRadioButtons()}onHiddenChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){var t;this.passPropsToRadioButtons(),(t=this.mutationObserver)==null||t.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){h(this)}componentDidLoad(){u(this)}disconnectedCallback(){var t;(t=this.mutationObserver)==null||t.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(t=>!t.disabled)??null}async setFocus(){var t;if(await c(this),this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(this.radioButtons.length>0)return(t=this.getFocusableRadioButton())==null?void 0:t.setFocus()}radioButtonChangeHandler(t){this.selectedItem=t.target,this.calciteRadioButtonGroupChange.emit()}render(){return s(d,{role:"radiogroup"},s("slot",null))}get el(){return this}static get watchers(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return m}},[1,"calcite-radio-button-group",{disabled:[516],hidden:[516],layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]]]);function i(){if(typeof customElements>"u")return;["calcite-radio-button-group"].forEach(e=>{switch(e){case"calcite-radio-button-group":customElements.get(e)||customElements.define(e,o);break}})}i();const B=o,y=i;export{B as CalciteRadioButtonGroup,y as defineCustomElement};