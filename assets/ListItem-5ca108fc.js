import{dZ as C,cb as o,h3 as d,b9 as k,_ as E,a5 as s,a6 as n,a9 as L,V as v,h4 as A,h5 as V,h6 as H,bA as F,kf as y,bh as M,eU as N}from"./index-b516d057.js";import{f as T,a as W,s as R,r as z,i as w,b as x,t as $}from"./layerListUtils-a0f5e0ab.js";import{O as j,n as c}from"./jsxFactory-92036771.js";import{e as f}from"./widget-826a6ea9.js";const S="esri-layer-list-panel",p=`${S}__content`,h={base:S,content:p,contentLegend:`${p}--legend`,contentString:`${p}--string`,contentElement:`${p}--html-element`,contentWidget:`${p}--widget`},D="legends";let r=class extends C(j){constructor(e,t){super(e,t),this._legend=null,this.content=null,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}initialize(){this.addHandles(o(()=>this.content,e=>this._createLegend(e),d))}destroy(){this._legend=k(this._legend)}get className(){const{image:e}=this,t=this._getFirstWidget();return this._get("className")||(!e&&t?t.iconClass??"":"")}set className(e){this._override("className",e)}get disabled(){var a;const{listItem:e,_legend:t,content:i}=this;return!e||!(Array.isArray(i)&&i.length>1)&&!!t&&(!((a=t.activeLayerInfos)!=null&&a.length)||!e.visibleAtCurrentScale||!e.visible)}set disabled(e){this._overrideIfSome("disabled",e)}get title(){const e=this._getFirstWidget();return this._get("title")||((e==null?void 0:e.label)??"")}set title(e){this._override("title",e)}render(){return c("div",{class:h.base},this._renderContents())}_renderContent(e){const{_legend:t,disabled:i}=this;return!e||i?null:e==="legend"&&t?c("div",{class:this.classes(h.content,h.contentLegend),key:t},t.render()):typeof e=="string"?c("div",{class:this.classes(h.content,h.contentString),innerHTML:e,key:e}):f(e)?c("div",{class:this.classes(h.content,h.contentWidget),key:e},e.render()):e instanceof HTMLElement?c("div",{afterCreate:this._attachToNode,bind:e,class:this.classes(h.content,h.contentElement),key:e}):null}_renderContents(){const{content:e}=this;return Array.isArray(e)?e.map(t=>this._renderContent(t)):this._renderContent(e)}_getLegendOptions(){const{listItem:e}=this;if(!e)return{};const{layer:t,view:i}=e;return t&&i?{view:i,layerInfos:[T(t)]}:{}}async _createLegend(e){if(!this._hasLegend(e)||this._legend)return;const{default:t}=await E(()=>import("./Legend-c056e326.js"),["assets/Legend-c056e326.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/jsxFactory-92036771.js","assets/uuid-709b6c67.js","assets/EffectView-b2b90b02.js","assets/ExportImageParameters-eb8f9ddb.js","assets/scaleUtils-72744379.js","assets/floorFilterUtils-080a7cd2.js","assets/sublayerUtils-4fbad2bd.js","assets/jsonUtils-52514725.js","assets/DictionaryLoader-e327eff9.js","assets/Version-1f969b2a.js","assets/FieldsIndex-e8db657f.js","assets/UnknownTimeZone-a05df022.js","assets/HeatmapColorStop-3fff4333.js","assets/heatmapUtils-7f42325f.js","assets/rendererConversion-b2429202.js","assets/utils-1a995f8e.js","assets/basemapUtils-6ec10a55.js","assets/Basemap-8d62c69e.js","assets/loadAll-5e767cfa.js","assets/writeUtils-e226a8aa.js","assets/symbolUtils-b4f6caa2.js","assets/mat2df32-fb26a8c9.js","assets/mat2d-d4af8487.js","assets/webStyleSymbolUtils-4761c8f2.js","assets/devEnvironmentUtils-4eab2a99.js","assets/utils-6ca5af6f.js","assets/themeUtils-7dcf5b71.js","assets/utils-1e31e9a9.js","assets/Heading-92f210ca.js","assets/globalCss-94006b67.js","assets/accessibleHandler-e91101b2.js"]),{listItem:i}=this,a=new t(this._getLegendOptions());this._legend=a,this.notifyChange("className"),this.notifyChange("title");const O=o(()=>{var b,m;return[i==null?void 0:i.view,i==null?void 0:i.layer,(b=i==null?void 0:i.layer)==null?void 0:b.source,(m=i==null?void 0:i.layer)==null?void 0:m.parent]},()=>this._updateLegend(a),d);this.addHandles(O,D),this.scheduleRender()}_hasLegend(e){const t="legend";return e===t||e!=null&&!!Array.isArray(e)&&e.includes(t)}_attachToNode(e){e.appendChild(this)}_updateLegend(e){e.set(this._getLegendOptions()),this.scheduleRender()}_getWidget(e){return e==="legend"?this._legend:f(e)?e:null}_getFirstWidget(){const{content:e}=this;if(Array.isArray(e)){let t=null;return e.some(i=>{const a=this._getWidget(i);return a&&(t=a),!!a}),t}return this._getWidget(e)}};s([n()],r.prototype,"_legend",void 0),s([n()],r.prototype,"className",null),s([n()],r.prototype,"content",void 0),s([n()],r.prototype,"disabled",null),s([n()],r.prototype,"image",void 0),s([n()],r.prototype,"listItem",void 0),s([n()],r.prototype,"title",null),s([n()],r.prototype,"open",void 0),s([n()],r.prototype,"visible",void 0),r=s([L("esri.widgets.LayerList.ListItemPanel")],r);const I=r;var u;const K=v.ofType({key:"type",defaultKeyValue:"button",base:A,typeMap:{button:V,toggle:H,slider:W}}),P=v.ofType(K),g="layer",_="child-list-mode",U="hide",Z="esri.widgets.LayerList.ListItem";let l=u=class extends C(F){constructor(e){super(e),this.actionsSections=new P,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.children=new(v.ofType(u)),this.childrenSortable=!0,this.hidden=!1,this.layer=null,this.layerView=null,this.listItemCreatedFunction=null,this.open=!1,this.panel=null,this.parent=null,this.sortable=!0,this.view=null}initialize(){if(this.addHandles([o(()=>this.layer,e=>this._watchLayerProperties(e),d),o(()=>this.checkPublishStatusEnabled,e=>this._updateChildrenPublishing(e),d),o(()=>this.view,e=>this._updateChildrenView(e),d),o(()=>this.panel,e=>this._setListItemOnPanel(e),d),o(()=>[this.layer,this.view],()=>this._getLayerView(),d)]),typeof this.listItemCreatedFunction=="function"){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){this.view=null}get connectionStatus(){const{layerView:e,publishing:t}=this;if(!t&&e&&"connectionStatus"in e)return e.connectionStatus}get error(){var e;return(e=this.layer)==null?void 0:e.loadError}get incompatible(){const{layerView:e}=this;return!(!e||!("spatialReferenceSupported"in e))&&!e.spatialReferenceSupported}castPanel(e){var t;return(t=this.panel)!=null&&t.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new I(e):null}get title(){const e=y(this,"layer.layer");return(!e||e&&y(this,"layer.layer.loaded"))&&y(this,"layer.title")||y(this,"layer.attributes.title")||""}set title(e){this._override("title",e)}get publishing(){var i;const{layer:e,checkPublishStatusEnabled:t}=this;return t&&e&&"publishingInfo"in e&&((i=e.publishingInfo)==null?void 0:i.status)==="publishing"}get updating(){const{layerView:e,connectionStatus:t,layer:i,publishing:a}=this;return!a&&!t&&(e?e.updating:(i==null?void 0:i.loadStatus)==="loading"||!1)}get visible(){var e;return(e=this.layer)==null?void 0:e.visible}set visible(e){const t=this.layer;t&&(t.visible=e)}get visibleAtCurrentScale(){var e;return!R(this.layer,(e=this.view)==null?void 0:e.scale)}get visibilityMode(){return z(this.layer)}clone(){return new u({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,children:this.children.clone(),layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,open:this.open,panel:this.panel,title:this.title,view:this.view,visible:this.visible})}_setListItemOnPanel(e){e&&(e.listItem=this)}_updateChildrenPublishing(e){const t=this.children;t&&t.forEach(i=>i.checkPublishStatusEnabled=e)}_updateChildrenView(e){const t=this.children;t&&t.forEach(i=>i.view=e)}_addChildren(e){if(this.removeHandles(_),this.children.removeAll(),!e)return;e.forEach(i=>{this.addHandles(o(()=>i.listMode,()=>this._addChildren(e)),_)});const t=e.filter(i=>w(i)!==U);this.children.addMany(this._makeChildren(t))}_watchSublayerChanges(e){e&&this.addHandles(e.on("change",()=>{this._addChildren(e)}),g)}_initializeChildLayers(e){this._addChildren(e),this._watchSublayerChanges(e)}_makeChildren(e){return e.map(t=>x(t)?new u({layer:t,checkPublishStatusEnabled:this.checkPublishStatusEnabled,listItemCreatedFunction:this.listItemCreatedFunction,parent:this,view:this.view}):null).filter(M).reverse()}_watchLayerProperties(e){if(this.removeHandles(g),this.removeHandles(_),!e)return;if(this.addHandles(o(()=>e.listMode,()=>this._watchLayerProperties(e)),g),w(e)==="hide-children")return void this.children.removeAll();const t=$(e);t&&this.addHandles(o(()=>e[t],i=>{e.hasOwnProperty(t)&&this._initializeChildLayers(i)},d),g)}async _getLayerView(){const{layer:e,view:t}=this;if(e&&t)try{const i=await t.whenLayerView(e);if(i.layer!==this.layer)return;this._set("layerView",i)}catch{}}};s([n({type:P})],l.prototype,"actionsSections",void 0),s([n()],l.prototype,"actionsOpen",void 0),s([n()],l.prototype,"checkPublishStatusEnabled",void 0),s([n({type:v})],l.prototype,"children",void 0),s([n()],l.prototype,"childrenSortable",void 0),s([n({readOnly:!0})],l.prototype,"connectionStatus",null),s([n({readOnly:!0})],l.prototype,"error",null),s([n()],l.prototype,"hidden",void 0),s([n({readOnly:!0})],l.prototype,"incompatible",null),s([n()],l.prototype,"layer",void 0),s([n({readOnly:!0})],l.prototype,"layerView",void 0),s([n()],l.prototype,"listItemCreatedFunction",void 0),s([n()],l.prototype,"open",void 0),s([n({type:I})],l.prototype,"panel",void 0),s([N("panel")],l.prototype,"castPanel",null),s([n()],l.prototype,"parent",void 0),s([n()],l.prototype,"sortable",void 0),s([n()],l.prototype,"title",null),s([n({readOnly:!0})],l.prototype,"publishing",null),s([n({readOnly:!0})],l.prototype,"updating",null),s([n()],l.prototype,"view",void 0),s([n()],l.prototype,"visible",null),s([n({readOnly:!0})],l.prototype,"visibleAtCurrentScale",null),s([n({readOnly:!0})],l.prototype,"visibilityMode",null),l=u=s([L(Z)],l);const Q=l;export{Q as k};
