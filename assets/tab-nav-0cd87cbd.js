import{p as f,H as u,l as h,E as g,j as b,h as o,k as I,G as T}from"./jsxFactory-92036771.js";import{c as p}from"./observers-9c654f26.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const v={container:"tab-nav"},m=":host{position:relative;display:flex}.scale-s{min-block-size:1.5rem}.scale-m{min-block-size:2rem}.scale-l{min-block-size:2.75rem}:host([layout=center]:not([bordered])){padding-inline:1.25rem}:host([layout=center]:not([bordered])) .tab-nav ::slotted(calcite-tab-title:last-child){margin-inline-end:0px}:host(:not([bordered])) .scale-l ::slotted(calcite-tab-title){margin-inline-end:1.5rem}:host(:not([bordered])) .scale-m ::slotted(calcite-tab-title){margin-inline-end:1.25rem}:host(:not([bordered])) .scale-s ::slotted(calcite-tab-title){margin-inline-end:1rem}.tab-nav{display:flex;inline-size:100%;justify-content:flex-start;overflow:auto}.tab-nav-active-indicator-container{position:absolute;inset-inline:0px;inset-block-end:0px;block-size:0.125rem;inline-size:100%;overflow:hidden}.tab-nav-active-indicator{position:absolute;inset-block-end:0px;display:block;block-size:0.125rem;background-color:var(--calcite-ui-brand);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0, 0, 0.2, 1)}:host([layout=center]) .tab-nav{justify-content:space-evenly}:host .position-bottom .tab-nav-active-indicator{inset-block-end:unset;inset-block-start:0px}:host .position-bottom .tab-nav-active-indicator-container{inset-block-end:unset;inset-block-start:0px}:host([bordered]) .tab-nav-active-indicator-container{inset-block-end:unset}:host([bordered]) .position-bottom .tab-nav-active-indicator-container{inset-block-end:0;inset-block-start:unset}@media (forced-colors: active){.tab-nav-active-indicator{background-color:highlight}}:host([hidden]){display:none}[hidden]{display:none}",y=f(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTabChange=h(this,"calciteTabChange",6),this.calciteInternalTabChange=h(this,"calciteInternalTabChange",6),this.animationActiveDuration=.3,this.resizeObserver=p("resize",()=>{this.activeIndicatorEl&&(this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition())}),this.handleTabFocus=(t,e,i)=>{g(this.enabledTabTitles,e,i),t.stopPropagation()},this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s",this.updateOffsetPosition()},this.storageId=void 0,this.syncId=void 0,this.selectedTitle=null,this.scale="m",this.layout="inline",this.position="bottom",this.bordered=!1,this.indicatorOffset=void 0,this.indicatorWidth=void 0,this.selectedTabId=void 0}async selectedTabIdChanged(){localStorage&&this.storageId&&this.selectedTabId!==void 0&&this.selectedTabId!==null&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTabId)),this.calciteInternalTabChange.emit({tab:this.selectedTabId}),this.selectedTitle=await this.getTabTitleById(this.selectedTabId)}selectedTitleChanged(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}connectedCallback(){var t;this.parentTabsEl=this.el.closest("calcite-tabs"),(t=this.resizeObserver)==null||t.observe(this.el)}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const e=JSON.parse(localStorage.getItem(t));this.selectedTabId=e}}componentWillRender(){const{parentTabsEl:t}=this;this.layout=t==null?void 0:t.layout,this.bordered=t==null?void 0:t.bordered,this.selectedTitle&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every(t=>!t.selected)&&!this.selectedTabId&&this.tabTitles[0].getTabIdentifier().then(t=>{this.calciteInternalTabChange.emit({tab:t})})}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.disconnect()}render(){const t=b(this.el),e=`${this.indicatorWidth}px`,i=`${this.indicatorOffset}px`,n=t!=="rtl"?{width:e,left:i}:{width:e,right:i};return o(I,{role:"tablist"},o("div",{class:{[v.container]:!0,[`scale-${this.scale}`]:!0,[`position-${this.position}`]:!0},onScroll:this.handleContainerScroll,ref:a=>this.tabNavEl=a},o("slot",null),o("div",{class:"tab-nav-active-indicator-container",ref:a=>this.activeIndicatorContainerEl=a},o("div",{class:"tab-nav-active-indicator",style:n,ref:a=>this.activeIndicatorEl=a}))))}focusPreviousTabHandler(t){this.handleTabFocus(t,t.target,"previous")}focusNextTabHandler(t){this.handleTabFocus(t,t.target,"next")}focusFirstTabHandler(t){this.handleTabFocus(t,t.target,"first")}focusLastTabHandler(t){this.handleTabFocus(t,t.target,"last")}internalActivateTabHandler(t){this.selectedTabId=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation()}activateTabHandler(t){this.calciteTabChange.emit(),t.stopPropagation()}internalCloseTabHandler(t){const e=t.target;this.handleTabTitleClose(e),t.stopPropagation()}updateTabTitles(t){t.target.selected&&(this.selectedTabId=t.detail)}globalInternalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTabId!==t.detail.tab&&(this.selectedTabId=t.detail.tab),t.stopPropagation()}iconStartChangeHandler(){this.updateActiveWidth(),this.updateOffsetPosition()}updateOffsetPosition(){var l,s,c,d,r;const t=b(this.el),e=(l=this.activeIndicatorContainerEl)==null?void 0:l.offsetWidth,i=(s=this.selectedTitle)==null?void 0:s.offsetLeft,n=(c=this.selectedTitle)==null?void 0:c.offsetWidth,a=e-(i+n);this.indicatorOffset=t!=="rtl"?i-((d=this.tabNavEl)==null?void 0:d.scrollLeft):a+((r=this.tabNavEl)==null?void 0:r.scrollLeft)}updateActiveWidth(){var t;this.indicatorWidth=(t=this.selectedTitle)==null?void 0:t.offsetWidth}getIndexOfTabTitle(t,e=this.tabTitles){return e.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map(e=>e.getTabIdentifier())).then(e=>this.tabTitles[e.indexOf(t)])}get tabTitles(){return T(this.el,"calcite-tab-title")}get enabledTabTitles(){return T(this.el,"calcite-tab-title:not([disabled])").filter(t=>!t.closed)}handleTabTitleClose(t){const{tabTitles:e}=this,i=e.reduce((a,l,s)=>l.closed?a:[...a,s],[]),n=i.length;if(n===1&&e[i[0]].closable)e[i[0]].closable=!1,this.selectedTabId=i[0];else if(n>1){const a=e.findIndex(s=>s===t),l=i.find(s=>s>a);this.selectedTabId===a&&(this.selectedTabId=l||n-1)}requestAnimationFrame(()=>{this.updateOffsetPosition(),this.updateActiveWidth(),e[this.selectedTabId].focus()})}get el(){return this}static get watchers(){return{selectedTabId:["selectedTabIdChanged"],selectedTitle:["selectedTitleChanged"]}}static get style(){return m}},[1,"calcite-tab-nav",{storageId:[513,"storage-id"],syncId:[513,"sync-id"],selectedTitle:[1040],scale:[1],layout:[1537],position:[1],bordered:[1540],indicatorOffset:[1026,"indicator-offset"],indicatorWidth:[1026,"indicator-width"],selectedTabId:[32]},[[0,"calciteInternalTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteInternalTabsFocusNext","focusNextTabHandler"],[0,"calciteInternalTabsFocusFirst","focusFirstTabHandler"],[0,"calciteInternalTabsFocusLast","focusLastTabHandler"],[0,"calciteInternalTabsActivate","internalActivateTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[0,"calciteInternalTabsClose","internalCloseTabHandler"],[0,"calciteInternalTabTitleRegister","updateTabTitles"],[16,"calciteInternalTabChange","globalInternalTabChangeHandler"],[0,"calciteInternalTabIconChanged","iconStartChangeHandler"]]]);function C(){if(typeof customElements>"u")return;["calcite-tab-nav"].forEach(e=>{switch(e){case"calcite-tab-nav":customElements.get(e)||customElements.define(e,y);break}})}C();export{y as T,C as d};