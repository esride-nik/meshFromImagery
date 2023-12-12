import{m as ae,J as ne,K as S,L as re,M as ie,N,P as K,h as oe}from"./jsxFactory-92036771.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 *//*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function z(i,t){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);t&&(u=u.filter(function(b){return Object.getOwnPropertyDescriptor(i,b).enumerable})),o.push.apply(o,u)}return o}function Q(i){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?z(Object(o),!0).forEach(function(u){ue(i,u,o[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):z(Object(o)).forEach(function(u){Object.defineProperty(i,u,Object.getOwnPropertyDescriptor(o,u))})}return i}function ue(i,t,o){return t=ce(t),t in i?Object.defineProperty(i,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[t]=o,i}function se(i,t){if(typeof i!="object"||i===null)return i;var o=i[Symbol.toPrimitive];if(o!==void 0){var u=o.call(i,t||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function ce(i){var t=se(i,"string");return typeof t=="symbol"?t:String(t)}var W={activateTrap:function(t,o){if(t.length>0){var u=t[t.length-1];u!==o&&u.pause()}var b=t.indexOf(o);b===-1||t.splice(b,1),t.push(o)},deactivateTrap:function(t,o){var u=t.indexOf(o);u!==-1&&t.splice(u,1),t.length>0&&t[t.length-1].unpause()}},le=function(t){return t.tagName&&t.tagName.toLowerCase()==="input"&&typeof t.select=="function"},fe=function(t){return(t==null?void 0:t.key)==="Escape"||(t==null?void 0:t.key)==="Esc"||(t==null?void 0:t.keyCode)===27},L=function(t){return(t==null?void 0:t.key)==="Tab"||(t==null?void 0:t.keyCode)===9},de=function(t){return L(t)&&!t.shiftKey},ve=function(t){return L(t)&&t.shiftKey},X=function(t){return setTimeout(t,0)},Z=function(t,o){var u=-1;return t.every(function(b,s){return o(b)?(u=s,!1):!0}),u},B=function(t){for(var o=arguments.length,u=new Array(o>1?o-1:0),b=1;b<o;b++)u[b-1]=arguments[b];return typeof t=="function"?t.apply(void 0,u):t},A=function(t){return t.target.shadowRoot&&typeof t.composedPath=="function"?t.composedPath()[0]:t.target},be=[],pe=function(t,o){var u=(o==null?void 0:o.document)||document,b=(o==null?void 0:o.trapStack)||be,s=Q({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:de,isKeyBackward:ve},o),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},g,h=function(a,e,r){return a&&a[e]!==void 0?a[e]:s[r||e]},w=function(a,e){var r=typeof(e==null?void 0:e.composedPath)=="function"?e.composedPath():void 0;return n.containerGroups.findIndex(function(c){var l=c.container,d=c.tabbableNodes;return l.contains(a)||(r==null?void 0:r.includes(l))||d.find(function(v){return v===a})})},E=function(a){var e=s[a];if(typeof e=="function"){for(var r=arguments.length,c=new Array(r>1?r-1:0),l=1;l<r;l++)c[l-1]=arguments[l];e=e.apply(void 0,c)}if(e===!0&&(e=void 0),!e){if(e===void 0||e===!1)return e;throw new Error("`".concat(a,"` was specified but was not a node, or did not return a node"))}var d=e;if(typeof e=="string"&&(d=u.querySelector(e),!d))throw new Error("`".concat(a,"` as selector refers to no known node"));return d},D=function(){var a=E("initialFocus");if(a===!1)return!1;if(a===void 0||!S(a,s.tabbableOptions))if(w(u.activeElement)>=0)a=u.activeElement;else{var e=n.tabbableGroups[0],r=e&&e.firstTabbableNode;a=r||E("fallbackFocus")}if(!a)throw new Error("Your focus-trap needs to have at least one focusable element");return a},k=function(){if(n.containerGroups=n.containers.map(function(a){var e=re(a,s.tabbableOptions),r=ie(a,s.tabbableOptions),c=e.length>0?e[0]:void 0,l=e.length>0?e[e.length-1]:void 0,d=r.find(function(p){return N(p)}),v=r.slice().reverse().find(function(p){return N(p)}),m=!!e.find(function(p){return K(p)>0});return{container:a,tabbableNodes:e,focusableNodes:r,posTabIndexesFound:m,firstTabbableNode:c,lastTabbableNode:l,firstDomTabbableNode:d,lastDomTabbableNode:v,nextTabbableNode:function(F){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,y=e.indexOf(F);return y<0?O?r.slice(r.indexOf(F)+1).find(function(R){return N(R)}):r.slice(0,r.indexOf(F)).reverse().find(function(R){return N(R)}):e[y+(O?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(a){return a.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!E("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(a){return a.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},_=function f(a){var e=a.activeElement;if(e)return e.shadowRoot&&e.shadowRoot.activeElement!==null?f(e.shadowRoot):e},T=function f(a){if(a!==!1&&a!==_(document)){if(!a||!a.focus){f(D());return}a.focus({preventScroll:!!s.preventScroll}),n.mostRecentlyFocusedNode=a,le(a)&&a.select()}},H=function(a){var e=E("setReturnFocus",a);return e||(e===!1?!1:a)},U=function(a){var e=a.target,r=a.event,c=a.isBackward,l=c===void 0?!1:c;e=e||A(r),k();var d=null;if(n.tabbableGroups.length>0){var v=w(e,r),m=v>=0?n.containerGroups[v]:void 0;if(v<0)l?d=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:d=n.tabbableGroups[0].firstTabbableNode;else if(l){var p=Z(n.tabbableGroups,function(I){var x=I.firstTabbableNode;return e===x});if(p<0&&(m.container===e||S(e,s.tabbableOptions)&&!N(e,s.tabbableOptions)&&!m.nextTabbableNode(e,!1))&&(p=v),p>=0){var F=p===0?n.tabbableGroups.length-1:p-1,O=n.tabbableGroups[F];d=K(e)>=0?O.lastTabbableNode:O.lastDomTabbableNode}else L(r)||(d=m.nextTabbableNode(e,!1))}else{var y=Z(n.tabbableGroups,function(I){var x=I.lastTabbableNode;return e===x});if(y<0&&(m.container===e||S(e,s.tabbableOptions)&&!N(e,s.tabbableOptions)&&!m.nextTabbableNode(e))&&(y=v),y>=0){var R=y===n.tabbableGroups.length-1?0:y+1,V=n.tabbableGroups[R];d=K(e)>=0?V.firstTabbableNode:V.firstDomTabbableNode}else L(r)||(d=m.nextTabbableNode(e))}}else d=E("fallbackFocus");return d},C=function(a){var e=A(a);if(!(w(e,a)>=0)){if(B(s.clickOutsideDeactivates,a)){g.deactivate({returnFocus:s.returnFocusOnDeactivate});return}B(s.allowOutsideClick,a)||a.preventDefault()}},M=function(a){var e=A(a),r=w(e,a)>=0;if(r||e instanceof Document)r&&(n.mostRecentlyFocusedNode=e);else{a.stopImmediatePropagation();var c,l=!0;if(n.mostRecentlyFocusedNode)if(K(n.mostRecentlyFocusedNode)>0){var d=w(n.mostRecentlyFocusedNode),v=n.containerGroups[d].tabbableNodes;if(v.length>0){var m=v.findIndex(function(p){return p===n.mostRecentlyFocusedNode});m>=0&&(s.isKeyForward(n.recentNavEvent)?m+1<v.length&&(c=v[m+1],l=!1):m-1>=0&&(c=v[m-1],l=!1))}}else n.containerGroups.some(function(p){return p.tabbableNodes.some(function(F){return K(F)>0})})||(l=!1);else l=!1;l&&(c=U({target:n.mostRecentlyFocusedNode,isBackward:s.isKeyBackward(n.recentNavEvent)})),T(c||n.mostRecentlyFocusedNode||D())}n.recentNavEvent=void 0},ee=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=a;var r=U({event:a,isBackward:e});r&&(L(a)&&a.preventDefault(),T(r))},q=function(a){if(fe(a)&&B(s.escapeDeactivates,a)!==!1){a.preventDefault(),g.deactivate();return}(s.isKeyForward(a)||s.isKeyBackward(a))&&ee(a,s.isKeyBackward(a))},Y=function(a){var e=A(a);w(e,a)>=0||B(s.clickOutsideDeactivates,a)||B(s.allowOutsideClick,a)||(a.preventDefault(),a.stopImmediatePropagation())},$=function(){if(n.active)return W.activateTrap(b,g),n.delayInitialFocusTimer=s.delayInitialFocus?X(function(){T(D())}):T(D()),u.addEventListener("focusin",M,!0),u.addEventListener("mousedown",C,{capture:!0,passive:!1}),u.addEventListener("touchstart",C,{capture:!0,passive:!1}),u.addEventListener("click",Y,{capture:!0,passive:!1}),u.addEventListener("keydown",q,{capture:!0,passive:!1}),g},J=function(){if(n.active)return u.removeEventListener("focusin",M,!0),u.removeEventListener("mousedown",C,!0),u.removeEventListener("touchstart",C,!0),u.removeEventListener("click",Y,!0),u.removeEventListener("keydown",q,!0),g},te=function(a){var e=a.some(function(r){var c=Array.from(r.removedNodes);return c.some(function(l){return l===n.mostRecentlyFocusedNode})});e&&T(D())},j=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(te):void 0,P=function(){j&&(j.disconnect(),n.active&&!n.paused&&n.containers.map(function(a){j.observe(a,{subtree:!0,childList:!0})}))};return g={get active(){return n.active},get paused(){return n.paused},activate:function(a){if(n.active)return this;var e=h(a,"onActivate"),r=h(a,"onPostActivate"),c=h(a,"checkCanFocusTrap");c||k(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=u.activeElement,e==null||e();var l=function(){c&&k(),$(),P(),r==null||r()};return c?(c(n.containers.concat()).then(l,l),this):(l(),this)},deactivate:function(a){if(!n.active)return this;var e=Q({onDeactivate:s.onDeactivate,onPostDeactivate:s.onPostDeactivate,checkCanReturnFocus:s.checkCanReturnFocus},a);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,J(),n.active=!1,n.paused=!1,P(),W.deactivateTrap(b,g);var r=h(e,"onDeactivate"),c=h(e,"onPostDeactivate"),l=h(e,"checkCanReturnFocus"),d=h(e,"returnFocus","returnFocusOnDeactivate");r==null||r();var v=function(){X(function(){d&&T(H(n.nodeFocusedBeforeActivation)),c==null||c()})};return d&&l?(l(H(n.nodeFocusedBeforeActivation)).then(v,v),this):(v(),this)},pause:function(a){if(n.paused||!n.active)return this;var e=h(a,"onPause"),r=h(a,"onPostPause");return n.paused=!0,e==null||e(),J(),P(),r==null||r(),this},unpause:function(a){if(!n.paused||!n.active)return this;var e=h(a,"onUnpause"),r=h(a,"onPostUnpause");return n.paused=!1,e==null||e(),k(),$(),P(),r==null||r(),this},updateContainerElements:function(a){var e=[].concat(a).filter(Boolean);return n.containers=e.map(function(r){return typeof r=="string"?u.querySelector(r):r}),n.active&&k(),P(),this}},g.updateContainerElements(t),g};const G=globalThis.calciteConfig,me=(G==null?void 0:G.focusTrapStack)||[];function ge(i,t){const{el:o}=i,u=(t==null?void 0:t.focusTrapEl)||o;if(!u)return;const b={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:u,setReturnFocus:s=>(ae(s),!1),...t==null?void 0:t.focusTrapOptions,document:o.ownerDocument,tabbableOptions:ne,trapStack:me};i.focusTrap=pe(u,b)}function ye(i,t){var o;i.focusTrapDisabled||(o=i.focusTrap)==null||o.activate(t)}function Te(i,t){var o;(o=i.focusTrap)==null||o.deactivate(t)}function Fe(i){var t;(t=i.focusTrap)==null||t.updateContainerElements(i.el)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const we=(i,t)=>{const o=i.level?`h${i.level}`:"div";return delete i.level,oe(o,{...i},t)};export{we as H,ye as a,ge as c,Te as d,Fe as u};
