import{bg as u,s as _,a5 as t,a6 as o,a9 as w,_ as h}from"./index-b516d057.js";import{e as p,O as y,r as b,n as r,i as v}from"./jsxFactory-92036771.js";import{l as C}from"./Viewpoint-f83262d0.js";import{t as I}from"./GoTo-4d856ce0.js";import{e as a}from"./globalCss-94006b67.js";import{t as M}from"./accessibleHandler-e91101b2.js";import{e as H}from"./vmEvent-d773b6c5.js";import"./uuid-709b6c67.js";import"./Cyclical-4c223a04.js";let l=class extends I(u.EventedAccessor){constructor(e){super(e),this._initialViewpoint=null,this._goingHomeController=null,this.go=this.go.bind(this)}destroy(){this._cancelGo(),this.view=null}get state(){var e;return(e=this.view)!=null&&e.ready?this._goingHomeController?"going-home":"ready":"disabled"}set view(e){this._initialViewpoint=null,this._set("view",e),e&&e.when().then(()=>{this.view===e&&(this._initialViewpoint=e.viewpoint.clone(),this.notifyChange("viewpoint"))})}get viewpoint(){return this._get("viewpoint")||this._initialViewpoint}set viewpoint(e){this._set("viewpoint",e)}async go(){var s,n;if(!((s=this.view)!=null&&s.ready))throw new _("home:disabled-state","Cannot go when disabled.");this._cancelGo(),this.emit("go");const e=new AbortController;this._goingHomeController=e;try{await((n=this.view)==null?void 0:n.when()),await this.callGoTo({target:this.viewpoint,options:{signal:e.signal}})}catch{}this._goingHomeController=null}cancelGo(){this._cancelGo()}_cancelGo(){const{_goingHomeController:e}=this;e&&e.abort(),this._goingHomeController=null}};t([o()],l.prototype,"_goingHomeController",void 0),t([o({readOnly:!0})],l.prototype,"state",null),t([o()],l.prototype,"view",null),t([o({type:C})],l.prototype,"viewpoint",null),t([o()],l.prototype,"go",null),t([o()],l.prototype,"cancelGo",null),l=t([w("esri.widgets.Home.HomeViewModel")],l);const m=l,c={base:"esri-home",widgetIcon:v.home},f="home";let i=class extends y{constructor(e,s){super(e,s),this.iconClass=c.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.uiStrings=void 0,this.viewModel=new m}loadDependencies(){return b({icon:()=>h(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"]),loader:()=>h(()=>import("./calcite-loader-7e936043.js"),["assets/calcite-loader-7e936043.js","assets/loader-ea663d25.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/guid-2347ca41.js"])})}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(e){this.viewModel.goToOverride=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get viewpoint(){return this.viewModel.viewpoint}set viewpoint(e){this.viewModel.viewpoint=e}cancelGo(){this.viewModel.cancelGo()}go(){return this.viewModel.go()}render(){var g;const e=(g=this.viewModel)==null?void 0:g.state,{messagesCommon:s,messages:n}=this,d={[a.disabled]:e==="disabled"};return r("div",{"aria-label":n.widgetLabel,bind:this,class:this.classes(c.base,a.widget,a.widgetButton,d),onclick:this._go,onkeydown:this._go,role:"button",tabIndex:0,title:e==="going-home"?s.cancel:n.title},this._renderIcon())}_renderIcon(){const{icon:e,iconClass:s,viewModel:n}=this;return(n==null?void 0:n.state)==="going-home"?r("calcite-loader",{inline:!0,key:"loader",label:"",scale:"s",type:"indeterminate"}):e?this._renderCalciteIcon(e):s&&s!==c.widgetIcon?this._renderLegacyIcon(s):this._renderCalciteIcon(f)}_renderCalciteIcon(e){return r("calcite-icon",{icon:e,key:"icon",scale:"s"})}_renderLegacyIcon(e){return r("span",{"aria-hidden":"true",class:this.classes(v.icon,e),key:"legacy-icon"})}_go(){const{viewModel:e}=this;e.state==="going-home"?e.cancelGo():e.go()}};t([o()],i.prototype,"goToOverride",null),t([o()],i.prototype,"iconClass",void 0),t([o()],i.prototype,"icon",void 0),t([o()],i.prototype,"label",null),t([o(),p("esri/widgets/Home/t9n/Home")],i.prototype,"messages",void 0),t([o(),p("esri/t9n/common")],i.prototype,"messagesCommon",void 0),t([o()],i.prototype,"uiStrings",void 0),t([o()],i.prototype,"view",null),t([o({type:m}),H("go")],i.prototype,"viewModel",void 0),t([o()],i.prototype,"viewpoint",null),t([M()],i.prototype,"_go",null),i=t([w("esri.widgets.Home")],i);const A=i;export{A as default};
