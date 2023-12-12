import{bg as Lt,a5 as a,a6 as c,a9 as m,cb as N,cd as Ct,_ as E,fU as S,si as Et,sj as Vt,sk as Ot,bA as zt,dr as P,b9 as ht,gb as Dt,bp as It,f$ as Rt,f6 as Nt,aW as O,bm as Ft}from"./index-b516d057.js";import{n as At}from"./themeUtils-7dcf5b71.js";import{n as o,g as St,O as A,e as mt,r as bt,X as Pt,Q as Ht}from"./jsxFactory-92036771.js";import{t as Ut}from"./memoize-3e55df82.js";import{T as at,k as Wt,q as ft,x as Zt,F as qt,S as Kt,U as jt}from"./quantityFormatUtils-e5b1c45f.js";import{b as Gt,i as C}from"./unitFormatUtils-67047561.js";import{e as vt}from"./getDefaultUnitForView-d1ffbf16.js";import{h as F}from"./snappingUtils-93e84fbe.js";import{f as wt,s as xt,m as V,z as Xt,Z as H,x as Qt}from"./euclideanLengthMeasurementUtils-aa8fca96.js";import{geodesicLength as kt}from"./geometryEngine-656a968c.js";import{o as gt}from"./projectVectorToWGS84ComparableLonLat-5675a9f4.js";import{M as Yt,b as lt,R as Bt,y as Jt}from"./geodesicUtils-822c19ca.js";let w=class extends Lt.EventedAccessor{constructor(t){super(t),this._mode="feedback",this.helpMessage=void 0,this.viewType=void 0}get mode(){return this._mode}get allFields(){return[]}get editableFields(){return this.allFields.filter(t=>!t.readOnly)}enterInputMode(){this._mode="input",this.emit("focus")}exitInputMode(){this._mode="feedback"}unlockAllFields(){this.allFields.forEach(t=>t.unlock())}};a([c()],w.prototype,"tooltipOptions",void 0),a([c()],w.prototype,"_mode",void 0),a([c()],w.prototype,"mode",null),a([c()],w.prototype,"helpMessage",void 0),a([c()],w.prototype,"viewType",void 0),a([c()],w.prototype,"allFields",null),a([c()],w.prototype,"editableFields",null),w=a([m("esri.views.interactive.tooltip.SketchTooltipInfo")],w);const k="esri-tooltip",u=`${k}-content`,te=`${k}-content--input`,ee=`${k}-content__header`,ie=`${k}-table`,ne=`${k}-help-message`;function f({className:n,helpMessage:t,mode:e,onDiscard:i,onkeydown:s},...l){const r=l.flat(10).filter(d=>!!d);return o("div",{class:St(n,u,e==="input"&&te),onkeydown:s},e==="input"?o("div",{class:ee,key:"tooltip-content-header"},o("calcite-button",{appearance:"transparent",iconFlipRtl:"both",iconStart:"chevron-left",kind:"neutral",onclick:i,scale:"s",tabIndex:-1})):null,r.length>0?o("div",{class:ie},...r):null,t?o("div",{class:ne,key:"help-message"},t):null)}const z=`${k}-field`,D={base:z,inputMode:`${z}--input`,title:`${z}__title`,value:`${z}__value`};let p=class extends A{constructor(){super(...arguments),this.hidden=!1,this.mode="feedback"}render(){return o("div",{class:this.classes({[D.base]:!0,[D.inputMode]:this.mode==="input"})},o("div",{class:D.title},this.title),o("div",{class:D.value},this.value))}};a([c()],p.prototype,"hidden",void 0),a([c()],p.prototype,"mode",void 0),a([c()],p.prototype,"title",void 0),a([c()],p.prototype,"value",void 0),p=a([m("esri.views.interactive.tooltip.TooltipField")],p);const se={base:`${k}-value-by-value`};let x=class extends A{constructor(){super(...arguments),this.divider="×"}render(){return o("div",{class:se.base},o("span",null,this.left),o("span",null,this.divider),o("span",null,this.right))}};a([c()],x.prototype,"left",void 0),a([c()],x.prototype,"divider",void 0),a([c()],x.prototype,"right",void 0),x=a([m("esri.views.interactive.tooltip.ValueByValue")],x);let h=class extends A{constructor(){super(...arguments),this._getFormatters=Ut((t,e)=>({angle:i=>at(i,i.rotationType),area:(i,s)=>Wt(t,i,s??e.area),length:(i,s,l)=>ft(t,i,s??e.length,l),relativeLength:(i,s)=>Zt(t,i,s??e.length),totalLength:(i,s)=>ft(t,i,s??e.length),verticalLength:(i,s)=>qt(t,i,s??e.length),relativeVerticalLength:(i,s)=>Kt(t,i,s??e.verticalLength),relativeOrientation:i=>S(i,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"}),percentage:i=>S(i.value,{style:"percent"}),scale:i=>S(i,{style:"percent",maximumFractionDigits:0})})),this._formatScale=t=>this._formatters.scale(t),this._formatRelativeOrientation=t=>this._formatters.relativeOrientation(t),this._formatLength=(t,e,i)=>this._formatters.length(t,e,i),this._formatRelativeLength=(t,e)=>this._formatters.relativeLength(t,e),this._formatVerticalLength=(t,e)=>this._formatters.verticalLength(t,e),this._formatRelativeVerticalLength=(t,e)=>this._formatters.relativeVerticalLength(t,e),this._formatArea=(t,e)=>this._formatters.area(t,e),this._formatPercentage=t=>this._formatters.percentage(t),this._onDiscard=()=>{this._exitInputMode()},this._onCommit=(t,e)=>{var d;if(e==="commit-and-exit")return this._exitInputMode();const i=this._getFocusableInputs(),s=i.length,l=i.indexOf(t);if(l===-1)return this._exitInputMode();const r=((l+(e==="commit-and-next"?1:-1))%s+s)%s;(d=i.at(r))==null||d.focus()},this._handleTab=t=>{if(t.code!==F.next)return;const e=this._getFocusableInputs();if(e.length===0)return;const i=e.at(0),s=e.at(-1);i&&s&&(t.shiftKey?document.activeElement===i&&(t.preventDefault(),s.focus()):document.activeElement===s&&(t.preventDefault(),i.focus()))}}get _displayUnits(){const t=vt(this.tooltip.view);return{length:t,verticalLength:t,area:t,angle:"degrees"}}get _inputUnitInfos(){const t=this._messagesUnits,e=y=>({unit:y,abbreviation:Gt(t,y,"abbr")}),i=vt(this.tooltip.view),s=Et(i),l=Vt(i),r=Ot(i),d="degrees";return{length:e(s),relativeLength:e(s),verticalLength:e(l),relativeVerticalLength:e(l),area:e(r),orientation:e(d),rotation:e(d)}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,onCommit:this._onCommit,onDiscard:this._onDiscard}}initialize(){let t=new AbortController;this.addHandles([N(()=>this.info.mode,e=>{this.tooltip.positionMode=e==="input"?"fixed":"follow-cursor"}),Ct(()=>this.info,"focus",()=>{t==null||t.abort();const{signal:e}=t=new AbortController;requestAnimationFrame(()=>{var i;e.aborted||((i=this._getFocusableInputs().at(0))==null||i.focus())})})])}loadDependencies(){return bt({button:()=>E(()=>import("./calcite-button-5457cec5.js"),["assets/calcite-button-5457cec5.js","assets/button-27a2f99e.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/form-60623048.js","assets/interactive-39956fb6.js","assets/label2-0071fcd4.js","assets/loadable-7d42c3de.js","assets/locale-2cb18332.js","assets/key-c2c83cc7.js","assets/observers-9c654f26.js","assets/component-7281ffa6.js","assets/t9n-622f279b.js","assets/icon-c122f720.js","assets/loader-ea663d25.js","assets/guid-2347ca41.js"]),icon:()=>E(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"]),input:()=>E(()=>import("./calcite-input-f0ebb300.js"),["assets/calcite-input-f0ebb300.js","assets/input-9795a695.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/form-60623048.js","assets/interactive-39956fb6.js","assets/key-c2c83cc7.js","assets/label2-0071fcd4.js","assets/loadable-7d42c3de.js","assets/locale-2cb18332.js","assets/observers-9c654f26.js","assets/t9n-622f279b.js","assets/component-7281ffa6.js","assets/icon-c122f720.js","assets/progress-2100df13.js"])})}_getHelpMessage(t){var T,b,v,dt;const{info:e}=this,{tooltipOptions:i,helpMessage:s,viewType:l}=e,r=(T=i==null?void 0:i.visibleElements)==null?void 0:T.helpMessage,d=t??s,y=l==="3d"?"helpMessages3d":"helpMessages2d";return r&&d?(dt=(v=(b=this._messagesTooltip)==null?void 0:b.sketch)==null?void 0:v[y])==null?void 0:dt[d]:void 0}_exitInputMode(){this.info.exitInputMode(),document.querySelector(".esri-view-surface").focus()}_getFocusableInputs(){var t;return Array.from(((t=this.domNode)==null?void 0:t.querySelectorAll("input:not([disabled])"))??[])}};a([mt("esri/core/t9n/Units"),c()],h.prototype,"_messagesUnits",void 0),a([mt("esri/views/interactive/tooltip/t9n/Tooltip"),c()],h.prototype,"_messagesTooltip",void 0),a([c()],h.prototype,"info",void 0),a([c()],h.prototype,"tooltip",void 0),a([c()],h.prototype,"_displayUnits",null),a([c()],h.prototype,"_inputUnitInfos",null),a([c()],h.prototype,"_formatters",null),a([c()],h.prototype,"fieldContext",null),h=a([m("esri.views.interactive.tooltip.content.TooltipContent")],h);const oe={base:`${u} ${`${u}--draw-rectangle`}`};let U=class extends h{render(){const{area:t,radius:e,xSize:i,ySize:s,tooltipOptions:l}=this.info,{visibleElements:r}=l,d=this._messagesTooltip.sketch;return o(f,{className:oe.base,helpMessage:this._getHelpMessage()},r.radius&&e!=null?o(p,{title:d.radius,value:this._formatLength(e)}):null,r.size&&i!=null&&s!=null?o(p,{title:d.size,value:o(x,{left:this._formatLength(i),right:this._formatLength(s)})}):null,r.area?o(p,{title:d.area,value:this._formatArea(t)}):null)}};U=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],U);const ae={base:`${u}--draw-mesh`};let W=class extends h{render(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:i}=e,s=this._messagesTooltip.sketch;return o(f,{className:ae.base,helpMessage:this._getHelpMessage()},i.elevation?o(p,{title:s.elevation,value:this._formatVerticalLength(t.actual)}):null)}};W=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],W);const g=`${k}-editable-field`,_={base:g,inputMode:`${g}--input`,locked:`${g}--locked`,title:`${g}__title`,titleContent:`${g}__title__content`,value:`${g}__value`,valueContent:`${g}__value__content`,input:`${g}__input`,inputDisabled:`${g}__input--disabled`,inputReadOnly:`${g}__input--read-only`,inputSuffix:`${g}__input-suffix`,button:`${g}__button`};let $=class extends A{constructor(){super(...arguments),this._input=null,this._afterInputCreate=t=>{this._input=t},this._selectText=()=>{requestAnimationFrame(()=>{var t;(t=this._input)==null||t.select()})},this._onKeyDown=t=>{t.key===F.discard&&this._discard()},this._onInputKeyDown=t=>{switch(t.key){case F.commit:return this._commit({type:"commit-and-exit",allowLockingCurrentValue:!0});case F.next:return t.stopPropagation(),this._commit({type:t.shiftKey?"commit-and-previous":"commit-and-next",allowLockingCurrentValue:!1})}},this._onInput=t=>{this.field.inputValue=t.target.value},this._onLockClick=()=>{const{field:t}=this;t.locked?t.unlock():this._lock()}}loadDependencies(){return bt({button:()=>E(()=>import("./calcite-button-5457cec5.js"),["assets/calcite-button-5457cec5.js","assets/button-27a2f99e.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/form-60623048.js","assets/interactive-39956fb6.js","assets/label2-0071fcd4.js","assets/loadable-7d42c3de.js","assets/locale-2cb18332.js","assets/key-c2c83cc7.js","assets/observers-9c654f26.js","assets/component-7281ffa6.js","assets/t9n-622f279b.js","assets/icon-c122f720.js","assets/loader-ea663d25.js","assets/guid-2347ca41.js"]),icon:()=>E(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"])})}render(){const{mode:t,field:e}=this,i=t==="input",{locked:s}=e;return o("div",{class:this.classes({[_.base]:!0,[_.inputMode]:t==="input",[_.locked]:s})},o("div",{class:_.title,key:"title"},o("div",{class:_.titleContent,key:"title-content"},this._title,s&&!i?o("calcite-icon",{icon:"lock",key:"icon",scale:"s"}):null)),o("div",{class:_.value,key:"value"},i?this._renderInput():o("span",{key:"formatted-value"},this._feedbackValue)))}get _initialValue(){const{field:t}=this;return t.actual!=null?t.toInputUnits(t.actual,this.context).value:null}get _feedbackValue(){const{context:t,field:e}=this,{actual:i,committed:s,format:l}=e;return s!=null?l(s,t):i!=null?l(i,t):""}get _displayValue(){const{field:t}=this,{inputValue:e,committed:i}=t;return e??(i!=null?this._toString(t.toInputUnits(i,this.context).value):this._toString(this._initialValue))}get _suffix(){const{suffix:t}=this.field;return typeof t=="string"?t:t(this.context)}get _title(){const{title:t}=this.field;return typeof t=="string"?t:t(this.context)}_renderInput(){const{disabled:t,locked:e,readOnly:i}=this.field;return o("div",{class:_.valueContent,key:"input-container",onkeydown:this._onKeyDown},o("input",{afterCreate:this._afterInputCreate,class:this.classes({[_.input]:!0,[_.inputDisabled]:t,[_.inputReadOnly]:i}),disabled:t||i,onfocus:this._selectText,oninput:this._onInput,onkeydown:this._onInputKeyDown,readOnly:i,type:"text",value:this._displayValue}),o("div",{class:_.inputSuffix,key:"suffix"},this._suffix),i?void 0:o("calcite-button",{appearance:"transparent",class:_.button,disabled:t,iconStart:e?"lock":"unlock",kind:"neutral",onclick:this._onLockClick,scale:"s",tabIndex:-1}))}_commit({type:t,allowLockingCurrentValue:e}){const{_input:i,field:s}=this;i&&(s.locked&&s.inputValue===""?s.unlock():(e||s.inputValue!=null)&&this._lock(),this.context.onCommit(i,t))}_discard(){this._input&&(this.field.inputValue=null,this.context.onDiscard(this._input))}_lock(){const{field:t}=this,e=this._parseNumber(t.inputValue),i=e!=null?t.createQuantity(e,this.context):null;t.lock(i)}_parseNumber(t){if(t==null)return null;const e=parseFloat(t);return isNaN(e)||!isFinite(e)?null:e}_toString(t){return t!=null?t.toFixed(3):"0"}};a([c()],$.prototype,"field",void 0),a([c()],$.prototype,"context",void 0),a([c()],$.prototype,"mode",void 0),a([c()],$.prototype,"_initialValue",null),a([c()],$.prototype,"_feedbackValue",null),a([c()],$.prototype,"_input",void 0),a([c()],$.prototype,"_displayValue",null),a([c()],$.prototype,"_suffix",null),a([c()],$.prototype,"_title",null),$=a([m("esri.views.interactive.tooltip.TooltipEditableField")],$);function rt(n){const t=n.fields.filter(e=>e!=null&&!e.hidden);return t.length===0?null:o(Pt,null,t.map(e=>o($,{context:n.context,field:e,key:e.id,mode:n.mode})))}const le={base:`${u}--draw-point`};let Z=class extends h{render(){const{fieldContext:t,info:e}=this,{mode:i,elevation:s,tooltipOptions:l}=e,{visibleElements:r}=l;return o(f,{className:le.base,helpMessage:this._getHelpMessage(),mode:i,onkeydown:this._handleTab,onDiscard:this._onDiscard},o(rt,{context:t,fields:[r.elevation?s:void 0],mode:i}))}};Z=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],Z);const re={base:`${u} ${`${u}--draw-polygon`}`};let q=class extends h{render(){const{fieldContext:t,info:e}=this,{area:i,distance:s,elevation:l,mode:r,orientation:d,tooltipOptions:y,viewType:T}=e,{inputEnabled:b,visibleElements:v}=y;return o(f,{className:re.base,helpMessage:this._getHelpMessage(),mode:r,onkeydown:this._handleTab,onDiscard:this._onDiscard},o(rt,{context:t,fields:[b&&v.orientation?d:void 0,b&&v.distance?s:void 0,v.elevation&&T!=="2d"?l:void 0,v.area?i:void 0],mode:r}))}};q=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],q);const ce={base:`${u} ${`${u}--draw-polyline`}`};let K=class extends h{render(){const{fieldContext:t,info:e}=this,{distance:i,elevation:s,mode:l,orientation:r,tooltipOptions:d,totalLength:y,viewType:T}=e,{inputEnabled:b,visibleElements:v}=d;return o(f,{className:ce.base,helpMessage:this._getHelpMessage(),mode:l,onkeydown:this._handleTab,onDiscard:this._onDiscard},o(rt,{context:t,fields:[b&&v.orientation?r:void 0,b&&v.distance?i:void 0,v.elevation&&T!=="2d"?s:void 0,v.totalLength?y:void 0],mode:l}))}};K=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],K);const pe={base:`${u} ${`${u}--draw-rectangle`}`};let j=class extends h{render(){const{area:t,xSize:e,ySize:i,tooltipOptions:s}=this.info,{visibleElements:l}=s,r=this._messagesTooltip.sketch;return o(f,{className:pe.base,helpMessage:this._getHelpMessage()},l.size&&e!=null&&i!=null?o(p,{title:r.size,value:o(x,{left:this._formatLength(e),right:this._formatLength(i)})}):null,l.area?o(p,{title:r.area,value:this._formatArea(t)}):null)}};j=a([m("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],j);const ue={base:`${u} ${`${u}--extent-rotate`}`};let G=class extends h{render(){const{angle:t,tooltipOptions:e}=this.info,{visibleElements:i}=e,s=this._messagesTooltip.sketch;return o(f,{className:ue.base,helpMessage:this._getHelpMessage()},i.rotation?o(p,{title:s.rotation,value:this._formatRelativeOrientation(t)}):null)}};G=a([m("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],G);const de={base:`${u} ${`${u}--extent-scale`}`};let X=class extends h{render(){const t=this.info,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:de.base,helpMessage:this._getHelpMessage()},e.size?o(p,{title:i.size,value:o(x,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}):null,e.scale?o(p,{title:i.scale,value:o(x,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}):null)}};X=a([m("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],X);const he={base:`${u} ${`${u}--reshape-edge-offset`}`};let Q=class extends h{render(){const{area:t,distance:e,totalLength:i,tooltipOptions:s}=this.info,{visibleElements:l}=s,r=this._messagesTooltip.sketch;return o(f,{className:he.base,helpMessage:this._getHelpMessage()},l.distance?o(p,{title:r.distance,value:this._formatRelativeLength(e)}):null,l.area&&t!=null?o(p,{title:r.area,value:this._formatArea(t)}):null,l.totalLength&&i!=null?o(p,{title:r.totalLength,value:this._formatLength(i)}):null)}};Q=a([m("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],Q);const me={base:`${u} ${`${u}--transform-absolute`}`};let Y=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:me.base,helpMessage:this._getHelpMessage()},e.orientation&&t.orientation!=null?o(p,{key:"orientation",title:i.orientation,value:at(t.orientation,t.rotationType,t.orientationPrecision)}):null,e.size&&t.size!=null?o(p,{key:"size",title:i.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}):null)}};Y=a([m("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],Y);const fe={base:`${u} ${`${u}--transform-rotate`}`};let B=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:fe.base,helpMessage:this._getHelpMessage()},e.rotation&&t.rotation!=null?o(p,{key:"rotation",title:i.rotation,value:jt(t.rotation,t.rotationType,t.rotationPrecision)}):null,e.orientation&&t.orientation!=null?o(p,{key:"orientation",title:i.orientation,value:at(t.orientation,t.rotationType,t.orientationPrecision)}):null)}};B=a([m("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],B);const ve={base:`${u} ${`${u}--transform-scale`}`};let J=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:ve.base,helpMessage:this._getHelpMessage()},e.scale&&t.scale!=null?o(p,{key:"scale",title:i.scale,value:this._formatPercentage(t.scale)}):null,e.size&&t.size!=null?o(p,{key:"size",title:i.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}):null)}};J=a([m("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],J);const ge={base:`${u} ${`${u}--translate-graphic`}`};let tt=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:ge.base,helpMessage:this._getHelpMessage()},e.distance?o(p,{title:i.distance,value:this._formatLength(t.distance)}):null)}};tt=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],tt);const _e={base:`${u} ${`${u}--translate-graphic-xy`}`};let et=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:_e.base,helpMessage:this._getHelpMessage()},e.distance?o(p,{title:i.distance,value:this._formatRelativeLength(t.distance)}):null)}};et=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],et);const $e={base:`${u} ${`${u}--translate-graphic-z`}`};let it=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,i=this._messagesTooltip.sketch;return o(f,{className:$e.base,helpMessage:this._getHelpMessage()},e.distance?o(p,{title:i.distance,value:this._formatRelativeVerticalLength(t.distance)}):null)}};it=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],it);const ye={base:`${u} ${`${u}--translate-vertex`}`};let nt=class extends h{render(){const{distance:t,elevation:e,area:i,totalLength:s,tooltipOptions:l}=this.info,{visibleElements:r}=l,d=this._messagesTooltip.sketch;return o(f,{className:ye.base,helpMessage:this._getHelpMessage()},r.distance?o(p,{title:d.distance,value:this._formatLength(t)}):null,r.elevation&&e!=null?o(p,{title:d.elevation,value:this._formatVerticalLength(e.actual)}):null,r.area&&i!=null?o(p,{title:d.area,value:this._formatArea(i)}):null,r.totalLength&&s!=null?o(p,{title:d.totalLength,value:this._formatLength(s)}):null)}};nt=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],nt);const be={base:`${u} ${`${u}--translate-vertex`}`};let st=class extends h{render(){const{area:n,distance:t,elevation:e,totalLength:i,tooltipOptions:s}=this.info,{visibleElements:l}=s,r=this._messagesTooltip.sketch;return o(f,{className:be.base,helpMessage:this._getHelpMessage()},l.distance?o(p,{title:r.distance,value:this._formatRelativeLength(t)}):null,l.elevation&&e!=null?o(p,{title:r.elevation,value:this._formatVerticalLength(e.actual)}):null,l.area&&n!=null?o(p,{title:r.area,value:this._formatArea(n)}):null,l.totalLength&&i!=null?o(p,{title:r.totalLength,value:this._formatLength(i)}):null)}};st=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],st);const we={base:`${u} ${`${u}--translate-vertex`}`};let ot=class extends h{render(){const{distance:t,elevation:e,tooltipOptions:i}=this.info,{visibleElements:s}=i,l=this._messagesTooltip.sketch;return o(f,{className:we.base,helpMessage:this._getHelpMessage()},s.distance?o(p,{title:l.distance,value:this._formatRelativeVerticalLength(t)}):null,s.elevation&&e!=null?o(p,{title:l.elevation,value:this._formatVerticalLength(e.actual)}):null)}};ot=a([m("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],ot);function xe(n,t){if(t==null)return null;const e=document.createElement("div");switch(t.type){case"draw-point":return new Z({tooltip:n,info:t,container:e});case"draw-polygon":return new q({tooltip:n,info:t,container:e});case"draw-polyline":return new K({tooltip:n,info:t,container:e});case"draw-mesh":return new W({tooltip:n,info:t,container:e});case"draw-rectangle":return new j({tooltip:n,info:t,container:e});case"draw-circle":return new U({tooltip:n,info:t,container:e});case"extent-rotate":return new G({tooltip:n,info:t,container:e});case"extent-scale":return new X({tooltip:n,info:t,container:e});case"transform-absolute":return new Y({tooltip:n,info:t,container:e});case"transform-rotate":return new B({tooltip:n,info:t,container:e});case"transform-scale":return new J({tooltip:n,info:t,container:e});case"translate-graphic":return new tt({tooltip:n,info:t,container:e});case"translate-graphic-z":return new it({tooltip:n,info:t,container:e});case"translate-graphic-xy":return new et({tooltip:n,info:t,container:e});case"translate-vertex":return new nt({tooltip:n,info:t,container:e});case"translate-vertex-z":return new ot({tooltip:n,info:t,container:e});case"translate-vertex-xy":return new st({tooltip:n,info:t,container:e});case"reshape-edge-offset":return new Q({tooltip:n,info:t,container:e})}}const ke={base:`${k}`};let M=class extends zt{constructor(t){super(t),this.info=null,this.positionMode="follow-cursor",this._contentContainer=(()=>{const e=document.createElement("div");return e.classList.add(ke.base),At(e),e})(),this._contentWidget=null}initialize(){const t=this._contentContainer;this.addHandles([N(()=>{var e;return(e=this.view.overlay)==null?void 0:e.surface},e=>{t.remove(),e==null||e.appendChild(t)},P),N(()=>this.info,(e,i)=>{if(this._contentWidget!=null&&e!=null&&i!=null&&e.type===i.type)this._contentWidget.info=e;else{this._contentWidget=ht(this._contentWidget);const s=xe(this,e);s&&(this._contentWidget=s,s.container&&t.appendChild(s.container))}},P),N(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint,positionMode:this.positionMode}),Te,P)])}destroy(){this._contentWidget=ht(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const t=this.view.inputManager;return t!=null&&t.multiTouchActive?null:t==null?void 0:t.latestPointerLocation}get test(){var t;return{contentContainer:this._contentContainer,visible:((t=this._contentContainer)==null?void 0:t.style.display)!=="none"}}};function Te({container:n,contentWidget:t,screenPoint:e,positionMode:i}){const{style:s}=n;if(i==="docked")return s.display="block",void(s.transform="none");if(i!=="fixed")if(e!=null&&t!=null){s.display="block";const l=Ht(n),r=`translate(${Math.round(e.x)+_t[0]*(l?-1:1)}px, ${Math.round(e.y)+_t[1]}px)`;s.transform=l?`translate(-100%, 0) ${r}`:r}else s.display="none"}a([c({nonNullable:!0})],M.prototype,"view",void 0),a([c()],M.prototype,"info",void 0),a([c()],M.prototype,"positionMode",void 0),a([c()],M.prototype,"_contentContainer",void 0),a([c()],M.prototype,"_contentWidget",void 0),a([c()],M.prototype,"_screenPoint",null),M=a([m("esri.views.interactive.tooltip.Tooltip")],M);const _t=[20,20];function Tt(n,t,e,i,...s){return Dt(n)&&Yt(n)?t.apply(void 0,s):It(n)?e.apply(void 0,s):i.apply(void 0,s)}function Me({hasZ:n,spatialReference:t,paths:e},i,s=0){const l=Rt(t);if(l==null)return!1;const r=n?d=>d:d=>Nt(Le,d[0],d[1],s);for(const d of e){const y=[];for(const T of d){const b=[0,0,s];l(r(T),0,b,0),y.push(b)}i.push(y)}return!0}const Le=O();function Mt(n){const{spatialReference:t}=n;return Tt(t,Oe,ze,De,n)}function ct(n,t){if(!Ft(n.spatialReference,t.spatialReference))return null;const{spatialReference:e}=n;return I[0]=n.x,I[1]=n.y,I[2]=n.hasZ?n.z:0,R[0]=t.x,R[1]=t.y,R[2]=t.hasZ?t.z:0,pt(I,R,e)}function pt(n,t,e){return Tt(e,Ce,Ee,Ve,n,t,e)}function Ce(n,t,e){return C(lt(ut,n,t,e).distance,"meters")}function Ee(n,t,e){return C(kt(Ie(n,t,e),"meters"),"meters")}function Ve(n,t,e){return gt(n,e,$t)&&gt(t,e,yt)?C(lt(ut,$t,yt).distance,"meters"):null}function Oe(n){return C(Jt([n],"meters")[0],"meters")}function ze(n){return C(kt(n,"meters"),"meters")}function De(n){const t=[];if(!Me(n,t))return null;let e=0;for(const i of t){let s=0;for(let l=1;l<i.length;++l)s+=lt(ut,i[l-1],i[l]).distance;e+=s}return C(e,"meters")}function Ie(n,t,e){return{type:"polyline",spatialReference:e,paths:[[[...n],[...t]]]}}const ut=new Bt,I=O(),R=O(),$t=O(),yt=O();function vi(n,t){return L(xt,Mt,wt,t,n)}function gi(n,t,e){return L(Xt,ct,V,e,n,t)}function _i(n,t,e,i){return L(Qt,pt,H,i,n,t,e)}function $i(n,t,e){return L(V,ct,V,e,n,t)}function yi(n,t,e,i){return L(H,pt,H,i,n,t,e)}function bi(n){return L(xt,Mt,wt,"on-the-ground",n)}function wi(n,t){return L(V,ct,V,"on-the-ground",n,t)}function L(n,t,e,i,...s){if(i==="on-the-ground"){const l=t.apply(void 0,s);return l??e.apply(void 0,s)}return n.apply(void 0,s)}export{$i as a,pt as b,yi as c,gi as d,bi as g,_i as l,wi as m,vi as p,Tt as r,w as s,M as u};