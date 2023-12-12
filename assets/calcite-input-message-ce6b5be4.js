import{p as o,H as l,B as n,h as s,k as r}from"./jsxFactory-92036771.js";import{d as u}from"./icon-c122f720.js";import"./index-b516d057.js";import"./uuid-709b6c67.js";import"./observers-9c654f26.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */var i;(function(e){e.valid="check-circle",e.invalid="exclamation-mark-triangle",e.idle="information"})(i||(i={}));const h=":host([scale=m]),:host([scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{visibility:hidden;box-sizing:border-box;display:flex;block-size:0px;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);visibility:visible;block-size:auto;opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([scale=m]),:host([scale=l]){margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status]){color:var(--calcite-ui-text-1)}:host([status][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][scale=m]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([status][scale=l]){margin-block-start:0.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}",c=o(class extends l{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=n(i,this.icon,this.status)}connectedCallback(){this.requestedIcon=n(i,this.icon,this.status)}render(){const e=this.el.hidden;return s(r,{"calcite-hydrated-hidden":e},this.renderIcon(this.requestedIcon),s("slot",null))}renderIcon(e){if(e)return s("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return h}},[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]}]);function a(){if(typeof customElements>"u")return;["calcite-input-message","calcite-icon"].forEach(t=>{switch(t){case"calcite-input-message":customElements.get(t)||customElements.define(t,c);break;case"calcite-icon":customElements.get(t)||u();break}})}a();const v=c,b=a;export{v as CalciteInputMessage,b as defineCustomElement};
