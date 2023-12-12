import{a5 as n,a6 as s,a9 as g,bA as y,cd as C,cc as _,iv as I,_ as b}from"./index-b516d057.js";import{e as x,O as E,r as f,i as u,n as d}from"./jsxFactory-92036771.js";import{e as v}from"./globalCss-94006b67.js";import{e as h,t as $}from"./widget-826a6ea9.js";import{t as M}from"./accessibleHandler-e91101b2.js";import"./uuid-709b6c67.js";let c=class extends y{constructor(e){super(e),this._viewpointHandle=null,this.group=null}initialize(){this.addHandles(C(()=>{var e;return(e=this.view)==null?void 0:e.ui},"expand",e=>{const{target:t}=e;t&&t!==this&&t.expanded&&t.group&&t.group===this.group&&this._collapse()}))}destroy(){this._viewpointHandle=null,this.view=null}set autoCollapse(e){this._set("autoCollapse",e),this._watchViewpoint()}set expanded(e){var a;const t=!!e;this._set("expanded",t);const o=(a=this.view)==null?void 0:a.ui;o&&o.emit("expand",{target:this}),this._viewpointHandleChange(t)}get state(){var e;return(e=this.view)!=null&&e.ready?"ready":"disabled"}set view(e){this._get("view")!==e&&(this._set("view",e),e&&_(()=>e.ready,()=>{this.view===e&&this._watchViewpoint()},{once:!0,initial:!0}))}_viewpointHandleChange(e){this._viewpointHandle&&(e?_(()=>{var t;return(t=this.view)==null?void 0:t.stationary},()=>{var t;return(t=this._viewpointHandle)==null?void 0:t.resume()},{once:!0,initial:!0}):this._viewpointHandle.pause())}_watchViewpoint(){const e="viewpoint";this.removeHandles(e),this._viewpointHandle=null;const{autoCollapse:t,view:o}=this;if(!o||!t)return;const a=I(()=>o.type==="3d"?o.camera:o.viewpoint,()=>this._collapse());this.addHandles(a,e),this._viewpointHandle=a}_collapse(){this.expanded=!1}};n([s({value:!1})],c.prototype,"autoCollapse",null),n([s({value:!1})],c.prototype,"expanded",null),n([s()],c.prototype,"group",void 0),n([s({readOnly:!0})],c.prototype,"state",null),n([s({value:null})],c.prototype,"view",null),c=n([g("esri.widgets.Expand.ExpandViewModel")],c);const m=c,r="esri-expand",l={base:r,modeAuto:`${r}--auto`,modeDrawer:`${r}--drawer`,modeFloating:`${r}--floating`,container:`${r}__container`,containerExpanded:`${r}__container--expanded`,panel:`${r}__panel`,icon:"esri-collapse__icon",iconExpanded:`${r}__icon--expanded`,iconNumber:`${r}__icon-number`,iconNumberExpanded:`${r}__icon-number--expanded`,content:`${r}__content`,contentExpanded:`${r}__content--expanded`,expandMask:`${r}__mask`,expandMaskExpanded:`${r}__mask--expanded`};let i=class extends E{constructor(e,t){super(e,t),this.closeOnEsc=!0,this.collapseIcon=null,this.collapseTooltip="",this.content="",this.expandTooltip="",this.iconClass=null,this.icon=null,this.iconNumber=0,this.messages=null,this.messagesCommon=null,this.mode="auto",this.viewModel=new m,this._handleKeyDown=o=>{const{closeOnEsc:a,_toggleButtonEl:p,expanded:w}=this;!w||!a||o.target===p||o.key!=="Escape"||(typeof a=="function"?a(o):a)&&(this.expanded=!1,p==null||p.focus())}}loadDependencies(){return f({icon:()=>b(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"])})}get contentId(){return`${this.id}_controls_content`}get expandTitle(){const{expanded:e,messagesCommon:t,collapseTooltip:o,expandTooltip:a}=this;return(e?o||(t==null?void 0:t.collapse):a||(t==null?void 0:t.expand))??""}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(e){this.viewModel.autoCollapse=e}get collapseIconClass(){return u.collapse}set collapseIconClass(e){this._overrideIfSome("collapseIconClass",e)}get expanded(){return this.viewModel.expanded}set expanded(e){this.viewModel.expanded=e}get expandIconClass(){return h(this.content)?this.content.iconClass:u.expand}set expandIconClass(e){this._overrideIfSome("expandIconClass",e)}get expandIcon(){return h(this.content)?this.content.icon:void 0}set expandIcon(e){this._overrideIfSome("expandIcon",e)}get group(){return this.viewModel.group}set group(e){this.viewModel.group=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=!1}toggle(){this.viewModel.expanded=!this.viewModel.expanded}render(){const{mode:e}=this,t={[l.modeAuto]:e==="auto",[l.modeDrawer]:e==="drawer",[l.modeFloating]:e==="floating"};return d("div",{class:this.classes(l.base,v.widget,t),onkeydown:this._handleKeyDown},this._renderMask(),this._renderContainer())}_renderContainer(){const{expanded:e}=this,t={[l.containerExpanded]:e};return d("div",{class:this.classes(l.container,t)},this._renderPanel(),this._renderContent())}_renderMask(){const{expanded:e}=this,t={[l.expandMaskExpanded]:e};return d("div",{bind:this,class:this.classes(l.expandMask,t),onclick:this._toggle})}_renderBadgeNumber(){const{expanded:e,iconNumber:t}=this;return t&&!e?d("span",{class:l.iconNumber,key:"expand__icon-number"},t):null}_renderPanelNumber(){const{iconNumber:e,expanded:t}=this;return e&&t?d("span",{class:this.classes(l.iconNumber,l.iconNumberExpanded),key:"expand__expand-icon-number"},e):null}_renderIcon(){const e=(this.expanded?this.collapseIcon:this.expandIcon)??"";return d("calcite-icon",{icon:e,key:"icon",scale:"s"})}_renderLegacyIcon(){const{collapseIconClass:e,expandIconClass:t,expanded:o}=this,a={[l.iconExpanded]:o};return t!=null&&(a[t]=!o),e!=null&&(a[e]=e===t||o),d("span",{"aria-hidden":"true",class:this.classes(l.icon,a),key:"legacy-icon"})}_renderTitle(){return d("span",{class:u.fontFallbackText},this.expandTitle)}_renderExpandButton(){const{expanded:e,expandTitle:t,expandIcon:o,collapseIcon:a,contentId:p}=this;return d("div",{afterCreate:this._storeToggleButtonEl,"aria-controls":p,"aria-expanded":e?"true":"false",bind:this,class:v.widgetButton,onclick:this._toggle,onkeydown:this._toggle,role:"button",tabIndex:0,title:t},this._renderBadgeNumber(),!e&&o!=null||e&&a!=null?this._renderIcon():this._renderLegacyIcon(),this._renderTitle())}_renderPanel(){return d("div",{class:l.panel},this._renderExpandButton(),this._renderPanelNumber())}_renderContent(){const{expanded:e,contentId:t,content:o}=this,a={[l.contentExpanded]:e},p={id:t,role:"region",class:this.classes(l.content,a)};return typeof o=="string"?d("div",{innerHTML:o,key:"content__string",...p}):h(o)?d("div",{key:"content__widget",...p},o.render()):o instanceof HTMLElement?d("div",{afterCreate:this._attachToNode,bind:o,key:"content__html-element",...p}):$(o)?d("div",{afterCreate:this._attachToNode,bind:o.domNode,key:"content__node",...p}):null}_toggle(){this.toggle()}_attachToNode(e){const t=this;e.appendChild(t)}_storeToggleButtonEl(e){this._toggleButtonEl=e}};n([s({readOnly:!0})],i.prototype,"contentId",null),n([s({readOnly:!0})],i.prototype,"expandTitle",null),n([s()],i.prototype,"autoCollapse",null),n([s()],i.prototype,"closeOnEsc",void 0),n([s()],i.prototype,"collapseIconClass",null),n([s()],i.prototype,"collapseIcon",void 0),n([s()],i.prototype,"collapseTooltip",void 0),n([s()],i.prototype,"content",void 0),n([s()],i.prototype,"expanded",null),n([s()],i.prototype,"expandIconClass",null),n([s()],i.prototype,"expandIcon",null),n([s()],i.prototype,"expandTooltip",void 0),n([s()],i.prototype,"group",null),n([s()],i.prototype,"iconClass",void 0),n([s()],i.prototype,"icon",void 0),n([s()],i.prototype,"iconNumber",void 0),n([s()],i.prototype,"label",null),n([s(),x("esri/widgets/Expand/t9n/Expand")],i.prototype,"messages",void 0),n([s(),x("esri/t9n/common")],i.prototype,"messagesCommon",void 0),n([s()],i.prototype,"mode",void 0),n([s()],i.prototype,"view",null),n([s({type:m})],i.prototype,"viewModel",void 0),n([M()],i.prototype,"_toggle",null),i=n([g("esri.widgets.Expand")],i);const D=i;export{D as default};
