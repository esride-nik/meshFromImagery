import{q as y,c as b,h as g}from"./jsxFactory-92036771.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */(function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(n){n?(t(n,this),n.click()):(n=document.createElement("input"),n.type="submit",n.hidden=!0,this.appendChild(n),n.click(),this.removeChild(n))};function t(n,o){n instanceof HTMLElement||r(TypeError,"parameter 1 is not of type 'HTMLElement'"),n.type=="submit"||r(TypeError,"The specified element is not a submit button"),n.form==o||r(DOMException,"The specified element is not owned by this form element","NotFoundError")}function r(n,o,a){throw new n("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+o+".",a)}})(HTMLFormElement.prototype);const f="hidden-form-input";function h(e){return"checked"in e}const m=new WeakMap,E=new WeakSet;function p(e,t){if(b(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let o=!1;return e.addEventListener(n,a=>{o=a.composedPath().some(i=>E.has(i)),a.stopPropagation()},{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),o}function R(e){const{formEl:t}=e;return t?(t.requestSubmit(),!0):!1}function q(e){var t;(t=e.formEl)==null||t.reset()}function M(e){const{el:t,value:r}=e,n=I(e);if(!n||p(n,t))return;e.formEl=n,e.defaultValue=r,h(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||H).bind(e);n.addEventListener("reset",o),m.set(e.el,o),E.add(t)}function I(e){const{el:t,form:r}=e;return r?y(t,{id:r}):b(t,"form")}function H(){if(h(this)){this.checked=this.defaultChecked;return}this.value=this.defaultValue}function T(e){const{el:t,formEl:r}=e;if(!r)return;const n=m.get(t);r.removeEventListener("reset",n),m.delete(t),e.formEl=null,E.delete(t)}function A(e,t){e.defaultValue=t}const S=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",S);function w(e){const{el:t,formEl:r,name:n,value:o}=e,{ownerDocument:a}=t,i=t.querySelectorAll(`input[slot="${f}"]`);if(!r||!n){i.forEach(s=>{v(s),s.remove()});return}const c=Array.isArray(o)?o:[o],l=[],F=new Set;i.forEach(s=>{const d=c.find(k=>k==s.value);d!=null?(F.add(d),C(e,s,d)):l.push(s)});let u;c.forEach(s=>{if(F.has(s))return;let d=l.pop();d||(d=a.createElement("input"),d.slot=f),u||(u=a.createDocumentFragment()),u.append(d),d.addEventListener("change",S),C(e,d,s)}),u&&t.append(u),l.forEach(s=>{v(s),s.remove()})}function C(e,t,r){var l;const{defaultValue:n,disabled:o,form:a,name:i,required:c}=e;t.defaultValue=n,t.disabled=o,t.name=i,t.required=c,t.tabIndex=-1,a?t.setAttribute("form",a):t.removeAttribute("form"),h(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?r||"on":""):t.value=r||"",(l=e.syncHiddenFormInput)==null||l.call(e,t)}const P=({component:e})=>(w(e),g("slot",{name:f}));export{P as H,A as a,M as c,T as d,I as f,q as r,R as s};
