import{p as y,H as C,l as w,D as u,o as m,y as z,h as s,k as S}from"./jsxFactory-92036771.js";import{c as L,d as T}from"./conditionalSlot-11b5e54d.js";import{a as D,s as H,c as O}from"./loadable-7d42c3de.js";import{c as k,d as B}from"./locale-2cb18332.js";import{c as f}from"./observers-9c654f26.js";import{u as G,c as M,s as $,d as q}from"./t9n-622f279b.js";import{t as r,E as F,o as _,q as R,g as W,a as P,b as U}from"./ExpandToggle-3c0498ea.js";import{d as j}from"./action-79a6733c.js";import{d as I}from"./action-group-9d8d0307.js";import{d as J}from"./action-menu-8419d112.js";import{d as K}from"./icon-c122f720.js";import{d as Q}from"./loader-ea663d25.js";import{d as V}from"./popover-33772892.js";import{d as X}from"./debounce-7cc294e2.js";import"./index-b516d057.js";import"./uuid-709b6c67.js";import"./key-c2c83cc7.js";import"./guid-2347ca41.js";import"./interactive-39956fb6.js";import"./component-7281ffa6.js";import"./array-755a0ace.js";import"./floating-ui-a6c9d5df.js";import"./Heading-2d7d203c.js";import"./openCloseComponent-3fbda1cf.js";import"./FloatingArrow-9e5c8eb0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const Y={actionGroupEnd:"action-group--end"},p={actionsEnd:"actions-end",bottomActions:"bottom-actions",expandTooltip:"expand-tooltip"},Z=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-ui-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}",g=y(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=w(this,"calciteActionBarToggle",6),this.mutationObserver=f("mutation",()=>{const{el:e,expanded:t}=this;r({el:e,expanded:t}),this.overflowActions()}),this.resizeObserver=f("resize",e=>this.resizeHandlerEntries(e)),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(o=>{t.includes(o)||(o.menuOpen=!1)})}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=X(({width:e,height:t})=>{const{el:o,expanded:i,expandDisabled:l,layout:n,overflowActionsDisabled:d}=this;if(d||n==="vertical"&&!t||n==="horizontal"&&!e)return;const a=R(o),h=l?a.length:a.length+1,c=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(c);const x=this.hasActionsEnd||this.hasBottomActions||!l?c.length+1:c.length,{actionHeight:v,actionWidth:A}=W(a),E=U({layout:n,actionCount:h,actionHeight:v,actionWidth:A,height:t,width:e,groupCount:x});P({actionGroups:c,expanded:i,overflowCount:E})},_),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=u(e).filter(o=>o.matches("calcite-action-group"));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=m(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=m(e)},this.handleTooltipSlotChange=e=>{const t=u(e).filter(o=>o==null?void 0:o.matches("calcite-tooltip"));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;r({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){var t,o;if(e){(t=this.resizeObserver)==null||t.disconnect();return}(o=this.resizeObserver)==null||o.observe(this.el),this.overflowActions()}onMessagesChange(){}effectiveLocaleChange(){G(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;D(this),r({el:e,expanded:t}),this.overflowActions()}connectedCallback(){var o,i;const{el:e,expanded:t}=this;k(this),M(this),r({el:e,expanded:t}),(o=this.mutationObserver)==null||o.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||(i=this.resizeObserver)==null||i.observe(e),this.overflowActions(),L(this)}async componentWillLoad(){H(this),await $(this)}disconnectedCallback(){var e,t;(e=this.mutationObserver)==null||e.disconnect(),(t=this.resizeObserver)==null||t.disconnect(),T(this),B(this),q(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await O(this),z(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(t=>t.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:i,toggleExpand:l,scale:n,layout:d,messages:a,actionsEndGroupLabel:h}=this,c=t?null:s(F,{collapseText:a.collapse,el:o,expandText:a.expand,expanded:e,position:i,scale:n,toggle:l,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return s("calcite-action-group",{class:Y.actionGroupEnd,hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:h,layout:d,scale:n},s("slot",{name:p.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),s("slot",{name:p.bottomActions,onSlotchange:this.handleBottomActionsSlotChange}),s("slot",{name:p.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),c)}render(){return s(S,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},s("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Z}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]}]);function b(){if(typeof customElements>"u")return;["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(t=>{switch(t){case"calcite-action-bar":customElements.get(t)||customElements.define(t,g);break;case"calcite-action":customElements.get(t)||j();break;case"calcite-action-group":customElements.get(t)||I();break;case"calcite-action-menu":customElements.get(t)||J();break;case"calcite-icon":customElements.get(t)||K();break;case"calcite-loader":customElements.get(t)||Q();break;case"calcite-popover":customElements.get(t)||V();break}})}b();const we=g,ze=b;export{we as CalciteActionBar,ze as defineCustomElement};
