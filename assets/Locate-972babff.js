import{a5 as t,a6 as a,a9 as b,kl as y,s as p,al as _,km as E,eo as L,an as M,_ as u,kn as h}from"./index-b516d057.js";import{e as g,O as C,r as O,n,i as w}from"./jsxFactory-92036771.js";import{r as T}from"./actions-713d334d.js";import{b as I}from"./GeolocationPositioning-dfe01ae0.js";import{p as $}from"./geolocationUtils-4a35382f.js";import{e as s}from"./globalCss-94006b67.js";import{t as k}from"./accessibleHandler-e91101b2.js";import{e as N}from"./vmEvent-d773b6c5.js";import"./uuid-709b6c67.js";import"./GoTo-4d856ce0.js";import"./project-1bd91657.js";async function S(){const e=await E("esri/widgets/Locate/t9n/Locate");return new L({title:e.currentLocation,fieldInfos:[{fieldName:"timestamp",label:e.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:e.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:e.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",label:e.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:e.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:e.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:e.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:e.speed,format:{places:0,digitSeparator:!0}}],actions:[T.clone()],content:[{type:"fields"}]})}let r=class extends I{constructor(e){super(e),this._locateController=null,this.popupEnabled=!0,this.locate=this.locate.bind(this)}initialize(){this.addHandles([y(()=>{var d;const{graphic:e,view:o}=this;if(!e)return;((d=o==null?void 0:o.graphics)==null?void 0:d.includes(e))&&this._updatePopupTemplate(e)})])}destroy(){this.cancelLocate()}get state(){var e;return this._geolocationUsable?(e=this.view)!=null&&e.ready?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}async locate(){if(this.cancelLocate(),this.state==="disabled")throw new p("locate:disabled-state","Cannot locate when disabled.");if(this.state==="feature-unsupported")throw new p("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const e=new AbortController;this._locateController=e;try{const o=await $(this.geolocationOptions);if(await this.updatePosition(o,e),this._locateController!==e)return null;const{graphic:l}=this;return l&&await this._updatePopupTemplate(l),this._addGraphic(),this.emit("locate",{position:o}),this._locateController=null,o}catch(o){if(_(o))return null;throw e===this._locateController&&(this._locateController=null),this.emit("locate-error",{error:o}),o}}cancelLocate(){this._clearGraphic(),this._locateController&&this._locateController.abort(),this._locateController=null}async _updatePopupTemplate(e){if(!this.popupEnabled)return;const o=await S(),l=e!==this.graphic;this.destroyed||l||(e.popupTemplate=o)}};t([a()],r.prototype,"_locateController",void 0),t([a()],r.prototype,"popupEnabled",void 0),t([a({readOnly:!0})],r.prototype,"state",null),t([a()],r.prototype,"locate",null),t([a()],r.prototype,"cancelLocate",null),r=t([b("esri.widgets.Locate.LocateViewModel")],r);const v=r,c={base:"esri-locate",widgetIcon:w.northNavigation},P="gps-off",f="esri.widgets.Locate",m=M.getLogger(f);let i=class extends C{constructor(e,o){super(e,o),this.iconClass=c.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new v}loadDependencies(){return O({icon:()=>u(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"]),loader:()=>u(()=>import("./calcite-loader-7e936043.js"),["assets/calcite-loader-7e936043.js","assets/loader-ea663d25.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/guid-2347ca41.js"])})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(e){this.viewModel.geolocationOptions=e}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(e){this.viewModel.goToLocationEnabled=e}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get graphic(){return this.viewModel.graphic}set graphic(e){this.viewModel.graphic=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(e){this.viewModel.popupEnabled=e}get rotationEnabled(){return this.viewModel.rotationEnabled}set rotationEnabled(e){this.viewModel.rotationEnabled=e}get scale(){return this.viewModel.scale}set scale(e){this.viewModel.scale=e}get useHeadingEnabled(){return h(m,"useHeadingEnabled",{replacement:"rotationEnabled",version:"4.27",warnOnce:!0}),this.viewModel.rotationEnabled}set useHeadingEnabled(e){h(m,"useHeadingEnabled",{replacement:"rotationEnabled",version:"4.27",warnOnce:!0}),this.viewModel.rotationEnabled=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){const{state:e}=this.viewModel,o=e==="locating"?this.messagesCommon.cancel:this.messages.title;return n("div",{"aria-label":o,bind:this,class:this.classes(c.base,s.widget,s.widgetButton,{[s.disabled]:e==="disabled",[s.hidden]:e==="feature-unsupported"}),hidden:e==="feature-unsupported",onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,title:o},this._renderIcon(),n("span",{class:w.fontFallbackText},this.messages.title))}_renderIcon(){const{icon:e,iconClass:o,viewModel:l}=this;return(l==null?void 0:l.state)==="locating"?n("calcite-loader",{inline:!0,key:"loader",label:"",scale:"s",type:"indeterminate"}):e?this._renderCalciteIcon(e):o&&o!==c.widgetIcon?this._renderLegacyIcon(o):this._renderCalciteIcon(P)}_renderCalciteIcon(e){return n("calcite-icon",{icon:e,key:"icon",scale:"s"})}_renderLegacyIcon(e){return n("span",{"aria-hidden":"true",class:e,key:"legacy-icon"})}_locate(){const{viewModel:e}=this;e.state==="locating"?e.cancelLocate():e.locate()}};t([a()],i.prototype,"geolocationOptions",null),t([a()],i.prototype,"goToLocationEnabled",null),t([a()],i.prototype,"goToOverride",null),t([a()],i.prototype,"graphic",null),t([a()],i.prototype,"iconClass",void 0),t([a()],i.prototype,"icon",void 0),t([a()],i.prototype,"label",null),t([a(),g("esri/widgets/Locate/t9n/Locate")],i.prototype,"messages",void 0),t([a(),g("esri/t9n/common")],i.prototype,"messagesCommon",void 0),t([a()],i.prototype,"popupEnabled",null),t([a()],i.prototype,"rotationEnabled",null),t([a()],i.prototype,"scale",null),t([a()],i.prototype,"useHeadingEnabled",null),t([a()],i.prototype,"view",null),t([a({type:v}),N(["locate","locate-error"])],i.prototype,"viewModel",void 0),t([k()],i.prototype,"_locate",null),i=t([b(f)],i);const j=i;export{j as default};