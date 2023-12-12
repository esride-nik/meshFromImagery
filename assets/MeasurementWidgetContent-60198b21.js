import{a5 as s,a6 as i,a9 as d,bA as p,an as m,cb as h,dr as c,cc as v,_}from"./index-b516d057.js";import{O as g,r as y,n as r}from"./jsxFactory-92036771.js";import{n as w}from"./UnitSelect-52961079.js";let u=class extends p{constructor(e){super(e),this.tool=null,this._loggedUnsupportedErrorOnce=!1,this.logger=m.getLogger(this),(e==null?void 0:e.visible)!=null&&(this.visible=e.visible)}initialize(){this.addHandles(h(()=>({ready:this.view!=null&&this.view.ready,supported:this.supported}),({ready:e,supported:t})=>{!e||t||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},c))}destroy(){this.removeTool(),this.view=null}get active(){return this.tool!=null&&this.tool.active}get disabled(){return this.view==null||!this.view.ready||!this.supported}get supported(){return this.view==null||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(e){if(e===this.view)return;this.removeTool(),this._set("view",e);const t="tools";this.removeHandles(t),e!=null&&this.addHandles(e.tools.on("after-remove",l=>{l.item===this.tool&&this._set("tool",null)}),t)}set visible(e){this._set("visible",e),this.tool!=null&&(this.tool.visible=e)}createTool(e={interactive:!1}){if(this.removeTool(),this.view==null||!this.view.ready||!this.supported)return;const t=this.constructTool();t.created?(this._set("tool",t),this.view.tools.add(t)):e.interactive?(this._set("tool",t),this.view.addAndActivateTool(t),v(()=>t.created,()=>{t.active&&this.view!=null&&(this.view.activeTool=null)},{initial:!0,once:!0})):t.destroy()}removeTool(){var l;const e=this.tool;if(e==null)return;const t=(l=this.view)==null?void 0:l.tools;t!=null?t.remove(e):e.destroy(),this._set("tool",null)}logError(...e){this.logger.error(...e)}};s([i({constructOnly:!0})],u.prototype,"tool",void 0),s([i()],u.prototype,"active",null),s([i()],u.prototype,"disabled",null),s([i()],u.prototype,"supported",null),s([i({value:null})],u.prototype,"view",null),s([i({type:Boolean,value:!0})],u.prototype,"visible",null),u=s([d("esri.widgets.support.InteractiveToolViewModel")],u);const o="esri-measurement-widget-content",a={base:o,actions:`${o}__actions`,error:`${o}__error`,hint:`${o}__hint`,hintText:`${o}__hint-text`,panelError:`${o}__panel--error`,settings:`${o}__settings`,measurement:`${o}__measurement`,measurementItem:`${o}__measurement-item`,measurementItemDisabled:`${o}__measurement-item--disabled`,measurementItemTitle:`${o}__measurement-item__title`,measurementItemValue:`${o}__measurement-item__value`};let n=class extends g{constructor(e,t){super(e,t)}loadDependencies(){return y({button:()=>_(()=>import("./calcite-button-5457cec5.js"),["assets/calcite-button-5457cec5.js","assets/button-27a2f99e.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/form-60623048.js","assets/interactive-39956fb6.js","assets/label2-0071fcd4.js","assets/loadable-7d42c3de.js","assets/locale-2cb18332.js","assets/key-c2c83cc7.js","assets/observers-9c654f26.js","assets/component-7281ffa6.js","assets/t9n-622f279b.js","assets/icon-c122f720.js","assets/loader-ea663d25.js","assets/guid-2347ca41.js"])})}render(){return r("div",{class:a.base},this._renderContent())}_renderContent(){const{supported:e,active:t,state:l}=this;switch(l){case"disabled":case"ready":return e?t?this._renderHint():this._renderActions():this._renderUnsupportedMessage();case"measuring":case"measured":return[this._renderSettings(),this._renderMeasurement(),this._renderActions()]}}_renderUnsupportedMessage(){return r("section",{class:a.error,key:"unsupported"},r("p",null,this.messages.unsupported))}_renderHint(){const{messages:e}=this;return r("section",{class:a.hint,key:"hint"},r("p",{class:a.hintText},e.hint))}_renderSettings(){return r("div",{class:a.settings,key:"settings"},r(w,{options:this.unitOptions,selectLabel:this.messages.unit,value:this.unit,onChange:this.onUnitChange}))}_renderMeasurement(){return r("section",{class:a.measurement,key:"measurement"},this.measurementItems.map(e=>this._renderMeasurementItem(e)))}_renderMeasurementItem({key:e,title:t,value:l}){return r("div",{class:this.classes(a.measurementItem,l==null&&a.measurementItemDisabled),key:e},r("span",{class:a.measurementItemTitle},t),r("span",{"aria-live":"polite",class:a.measurementItemValue},l??this.messages.notApplicable))}_renderActions(){const{messages:e}=this;return r("div",{class:a.actions},r("calcite-button",{class:this.newMeasurementButtonClass,disabled:this.state==="disabled",onclick:this.onNewMeasurementClick},e.newMeasurement))}};s([i()],n.prototype,"active",void 0),s([i()],n.prototype,"measurementItems",void 0),s([i()],n.prototype,"messages",void 0),s([i()],n.prototype,"newMeasurementButtonClass",void 0),s([i()],n.prototype,"onNewMeasurementClick",void 0),s([i()],n.prototype,"onUnitChange",void 0),s([i()],n.prototype,"state",void 0),s([i()],n.prototype,"supported",void 0),s([i()],n.prototype,"unit",void 0),s([i()],n.prototype,"unitOptions",void 0),n=s([d("esri.widgets.support.MeasurementWidgetContent")],n);export{u as n,n as u};