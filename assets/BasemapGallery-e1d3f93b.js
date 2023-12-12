import{y as I,nx as N,bh as Z,s as g,ny as X,nz as Y,dZ as ee,bA as D,cb as w,gs as te,al as j,a5 as i,a6 as r,a9 as C,V as R,U as L,hF as ae,j as q,h3 as se,an as ie,eU as re,cd as ne,cc as U,bm as M,eh as oe,eI as le,eJ as pe,_ as P,j5 as ce}from"./index-b516d057.js";import{U as de,R as me,O as he,d as ue,L as ye}from"./basemapUtils-6ec10a55.js";import{i as fe,e as be,O as ve,I as ge,r as we,n as m}from"./jsxFactory-92036771.js";import{R as F}from"./Basemap-8d62c69e.js";import{a as O,l as _e}from"./ViewingMode-5d7d590b.js";import{v as Be,C as S,a as $e}from"./terrainUtils-b6b761ab.js";import{r as Ce}from"./spatialReferenceSupport-5aeb751c.js";import{e as _}from"./globalCss-94006b67.js";import{e as Ie}from"./Heading-92f210ca.js";import{t as Re}from"./accessibleHandler-e91101b2.js";import"./uuid-709b6c67.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./RenderState-1d6218ee.js";async function ke(e,t={}){const{basemap:a,view:s}=e;await a.load(t),Le(a),await Ae(a,s,t),I(t)}async function Te(e,t={}){var o;const{basemap:a,view:s}=e;if(I(t),!s||"spatialReferenceLocked"in s&&!s.spatialReferenceLocked||(await a.load(t),I(t),a.baseLayers.length===0))return;const n=a.baseLayers.at(0);if(!N(n))return;if(a.spatialReference){if(s.spatialReference.equals(a.spatialReference))return;G()}await n.load(t),I(t);const p=(("supportedSpatialReferences"in n?n.supportedSpatialReferences:null)||["tileInfo"in n?(o=n.tileInfo)==null?void 0:o.spatialReference:null]).filter(Z);p.length!==0&&p.every(l=>!s.spatialReference.equals(l))&&G()}function G(){throw new g("basemap-compatibility:incompatible-spatial-reference","Basemap spatial reference is not compatible with the view")}function Le(e){if(e.baseLayers.length===0&&e.referenceLayers.length===0)return;const t=e.baseLayers.concat(e.referenceLayers).toArray().filter(a=>!X(a)).map(a=>Fe(a));if(t.length)throw t[0]}function Fe(e){return new g("basemap-compatibility:unsupported-basemap-layer-type","Unsupported basemap layer type ${operationalLayerType}",{layer:e,operationalLayerType:e.operationalLayerType||"unknown"})}async function Ae(e,t,a){if(e.baseLayers.length===0)return;const s=e.baseLayers.at(0);if(Y(s)){try{await s.load(a)}catch(n){const p="basemap-compatibility:unknown-error",o="Unknown basemap compatibility error",{name:l=p,message:f=o,details:d}=n;throw new g(l,f,d)}Ee(s,t)}}function Ee(e,t){var f;const a=t.state.viewingMode;if(!a)return;let s,n;if((e==null?void 0:e.type)==="wmts"){const d=Be(e,t.spatialReference,a);if(d.tileInfo==null)throw new g("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view");s=d.tileInfo,n=d.fullExtent}else s=e.tileInfo,n=e.fullExtent;if(s==null)return;if(!Ce(s.spatialReference,a))throw new g(`basemapgalleryitem:spatial-reference-unsupported-${O(a)}`,`Basemap spatial reference is unsupported in ${O(a)} mode`);const p=s.spatialReference.isGeographic,o=(e==null?void 0:e.type)==="vector-tile"?s.getOrCreateCompatible(256,p?1:2):null;if(a===_e.Global){let d=S(s,n,null,a);if(d&&(e==null?void 0:e.type)==="vector-tile"&&n!=null&&o&&!S(o,n,null,a)&&(d=null),d){const k=s.spatialReference.isWebMercator?"web-mercator":"wgs84";throw new g(`basemapgalleryitem:tiling-scheme-unsupported-${k}-global`,"Basemap tiling scheme is unsupported in global mode",{error:d})}}else if($e.checkUnsupported(s))throw new g("basemapgalleryitem:tiling-scheme-unsupported-local","Basemap tiling scheme is unsupported in local mode");const l=(f=t.basemapTerrain)==null?void 0:f.tilingScheme;if(l&&!l.compatibleWith(s)&&((e==null?void 0:e.type)!=="vector-tile"||!o||!l.compatibleWith(o)))throw new g("basemapgalleryitem:tiling-scheme-incompatible","Basemap tiling scheme is incompatible with the view")}let b=class extends ee(D){constructor(e){super(e),this.compatibilityFunction=null,this.error=null,this.state="loading",this.view=null}initialize(){const e=()=>this.refresh();this.addHandles([w(()=>{var t;return(t=this.basemap)==null?void 0:t.loadStatus},e),w(()=>this.compatibilityFunction,e),w(()=>{var t;return this.view&&"basemapTerrain"in this.view&&((t=this.view.basemapTerrain)==null?void 0:t.tilingScheme)},e),w(()=>{var t;return(t=this.view)==null?void 0:t.ready},e),w(()=>{var t;return(t=this.view)==null?void 0:t.spatialReference},e)]),this.refresh()}destroy(){this._cancelRefresh(),this.basemap=null,this.compatibilityFunction=null,this.view=null}get _spatialReferenceTask(){return de(this.view,this.basemap)}set basemap(e){e&&e.load().catch(()=>{}),this._set("basemap",e)}get spatialReference(){return this._spatialReferenceTask.spatialReference}refresh(){var s;this._cancelRefresh(),this._set("state","loading");const e=(s=this.basemap)==null?void 0:s.loadStatus;if(e!=="loaded"&&e!=="failed")return;if(!this.compatibilityFunction)return void(e==="loaded"?(this._set("state","ready"),this._set("error",null)):(this._set("state","error"),this._set("error",this.basemap.loadError)));const t=new AbortController,{signal:a}=t;this.compatibilityFunction(this,{signal:a}).then(()=>te(()=>!this._spatialReferenceTask.updating,a)).then(()=>{this._set("state","ready"),this._set("error",null)}).catch(n=>{j(n)||(this._set("state","error"),this._set("error",n))}),this._refreshController=t}_cancelRefresh(){this._refreshController&&(this._refreshController.abort(),this._refreshController=null)}};i([r({readOnly:!0})],b.prototype,"_spatialReferenceTask",null),i([r()],b.prototype,"basemap",null),i([r()],b.prototype,"compatibilityFunction",void 0),i([r({readOnly:!0})],b.prototype,"error",void 0),i([r({readOnly:!0})],b.prototype,"spatialReference",null),i([r({readOnly:!0})],b.prototype,"state",void 0),i([r()],b.prototype,"view",void 0),b=i([C("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],b);const z=b,H=R.ofType(F);let B=class extends D{constructor(e){super(e),this.basemaps=new H}destroy(){this.basemaps.forEach(e=>e.destroy())}get state(){return"ready"}refresh(){}};i([r({type:H})],B.prototype,"basemaps",void 0),i([r({readOnly:!0})],B.prototype,"state",null),B=i([C("esri.widgets.BasemapGallery.support.LocalBasemapsSource")],B);const Q=B,V=R.ofType(F);let v=class extends L.LoadableMixin(ae(Q)){constructor(e){super(e),this._lastPortalBasemapFetchController=null,this.basemaps=new V,this.filterFunction=null,this.portal=q.getDefault(),this.query=null,this.updateBasemapsCallback=null,this.viewType=null}initialize(){this.addHandles([w(()=>{var e,t,a;return[this.filterFunction,this.loadStatus,(e=this.portal)==null?void 0:e.basemapGalleryGroupQuery,(t=this.portal)==null?void 0:t.basemapGalleryGroupQuery3D,(a=this.portal)==null?void 0:a.user,this.query,this.updateBasemapsCallback]},()=>this.refresh(),se)])}destroy(){this.filterFunction=null,this.portal=null,this.basemaps.forEach(e=>e.destroy())}get state(){return this.loadStatus==="not-loaded"?"not-loaded":this.loadStatus==="loading"||this._lastPortalBasemapFetchController?"loading":"ready"}load(e){return this.addResolvingPromise(this.portal.load(e)),Promise.resolve(this)}async refresh(){if(this.loadStatus!=="loaded")return;this._lastPortalBasemapFetchController&&(this._lastPortalBasemapFetchController.abort(),this._lastPortalBasemapFetchController=null);const e=this.portal,t=new AbortController;this._lastPortalBasemapFetchController=t,this.notifyChange("state");try{const a=await e.fetchBasemaps(this._toQueryString(this.query),{signal:t.signal,include3d:this.viewType==="3d"||void 0});await this._updateBasemaps(a)}catch(a){if(j(a))throw a;ie.getLogger(this).warn(new g("basemap-source:fetch-basemaps-error","Could not fetch basemaps from portal.",{error:a})),await this._updateBasemaps()}this._lastPortalBasemapFetchController=null,this.notifyChange("state")}_toQueryString(e){return e&&typeof e!="string"?Object.keys(e).map(t=>`${t}:${e[t]}`).join(" AND "):e}async _updateBasemaps(e=[]){let t=await this._filterBasemaps(e);t=this.updateBasemapsCallback?this.updateBasemapsCallback(t):t,this.basemaps.removeAll(),this.basemaps.addMany(t)}async _filterBasemaps(e){if(!this.filterFunction)return e;const t=e.map(this.filterFunction),a=await Promise.all(t);return e.filter((s,n)=>a[n])}};i([r({readOnly:!0,type:V})],v.prototype,"basemaps",void 0),i([r()],v.prototype,"filterFunction",void 0),i([r({type:q})],v.prototype,"portal",void 0),i([r()],v.prototype,"query",void 0),i([r({readOnly:!0})],v.prototype,"state",null),i([r()],v.prototype,"updateBasemapsCallback",void 0),i([r()],v.prototype,"viewType",void 0),v=i([C("esri.widgets.BasemapGallery.support.PortalBasemapsSource")],v);const $=v,W=R.ofType(z);function xe(e){return e&&e.declaredClass==="esri.portal.Portal"}function Me(e){return e&&!(e instanceof $)&&(!!e.portal||!!e.query)}function Pe(e){return e&&"basemaps"in e&&"state"in e&&"refresh"in e}let h=class extends L{constructor(e){super(e),this._loadingProjectionEngine=!1,this._originalActiveBasemap=null,this.includeCurrentBasemap=!1,this.items=new W,this.source=new $,this.view=null}initialize(){const e=()=>this._recreateItems();this.addHandles([w(()=>{var t;return[this.view,(t=this.view)==null?void 0:t.ready]},()=>{var t;(t=this.view)!=null&&t.ready&&(this._originalActiveBasemap=this.activeBasemap)},{initial:!0}),w(()=>this.state==="ready"?this.compatibilityFunction:null,()=>this._updateItems()),w(()=>[this._effectiveIncludeCurrentBasemap,this._originalActiveBasemap],e),ne(()=>{var t;return(t=this.source)==null?void 0:t.basemaps},"change",e,{onListenerAdd:e}),U(()=>this.view,()=>{var t;this.source instanceof $&&(this.source.viewType=(t=this.view)==null?void 0:t.type)},{once:!0})])}destroy(){var t;const e=this.source.basemaps.find(a=>a===this.activeBasemap);e&&this.source.basemaps.remove(e),(t=this.source)==null||t.destroy()}get _effectiveIncludeCurrentBasemap(){var e;return this.includeCurrentBasemap&&((e=this.source)==null?void 0:e.basemaps.every(t=>t.loadStatus!=="loading"))}get activeBasemap(){var e,t;return((t=(e=this.view)==null?void 0:e.map)==null?void 0:t.basemap)??null}set activeBasemap(e){var n,p;const t=this.view;if(!(t!=null&&t.map))return;const a=typeof e=="string"?F.fromId(e):e;if(!a||!t.ready)return t.map.basemap=a,void this._clearOverride("activeBasemap");const s=a.spatialReference||((p=(n=this.items)==null?void 0:n.find(o=>this.basemapEquals(a,o.basemap)))==null?void 0:p.spatialReference);if(s&&"spatialReferenceLocked"in t&&!t.spatialReferenceLocked){const o=t.spatialReference;if(s!=null&&!M(o,s)&&!oe(t.spatialReference,s)&&!le())return this._override("activeBasemap",a),this._loadingProjectionEngine=!0,void pe().then(()=>{this._get("activeBasemap")===e&&(t.map.basemap=e,t.spatialReference=s,this._clearOverride("activeBasemap"))},()=>{}).then(()=>{this._loadingProjectionEngine=!1});t.map.basemap=a,this._clearOverride("activeBasemap"),s==null||M(t.spatialReference,s)||(t.spatialReference=s)}else t.map.basemap=a,this._clearOverride("activeBasemap")}get activeBasemapIndex(){const{state:e,activeBasemap:t}=this;return e!=="ready"?-1:this._findBasemapIndex(t)}get compatibilityFunction(){var e;return((e=this.view)==null?void 0:e.type)==="3d"?ke:Te}set compatibilityFunction(e){this._overrideIfSome("compatibilityFunction",e)}castSource(e){return Array.isArray(e)||R.isCollection(e)?new Q({basemaps:e}):xe(e)?new $({portal:e}):Me(e)?new $(e):Pe(e)?e:null}get state(){var e;return(e=this.view)!=null&&e.ready&&this.source?this._loadingProjectionEngine?"loading":"ready":"disabled"}basemapEquals(e,t){return me(e,t)}refresh(){this._recreateItems()}load(e){return this.addResolvingPromise(L.isLoadable(this.source)?this.source.load(e):null),Promise.resolve(this)}_findBasemapIndex(e){const{items:t}=this,a=t.findIndex(s=>s.basemap===e);return a===-1?t.findIndex(s=>this.basemapEquals(s.basemap,e)):a}_recreateItems(){var o;const e=(o=this.source)==null?void 0:o.basemaps,{view:t,compatibilityFunction:a}=this,s=new Map(this.items.map(l=>[l.basemap,l]));function n(l){const f=s.get(l);return f?(s.delete(l),f):new z({basemap:l,compatibilityFunction:a,view:t})}this.items.removeAll(),e&&this.items.addMany(e.map(n));const p=this._findBasemapIndex(this._originalActiveBasemap)!==-1;this._effectiveIncludeCurrentBasemap&&!p&&this._originalActiveBasemap!=null&&this.items.unshift(n(this._originalActiveBasemap)),s.forEach(l=>l.destroy())}_updateItems(){for(const e of this.items)e.compatibilityFunction=this.compatibilityFunction,e.view=this.view}};i([r()],h.prototype,"_effectiveIncludeCurrentBasemap",null),i([r()],h.prototype,"_loadingProjectionEngine",void 0),i([r()],h.prototype,"_originalActiveBasemap",void 0),i([r()],h.prototype,"activeBasemap",null),i([r({readOnly:!0})],h.prototype,"activeBasemapIndex",null),i([r()],h.prototype,"compatibilityFunction",null),i([r()],h.prototype,"includeCurrentBasemap",void 0),i([r({readOnly:!0,type:W})],h.prototype,"items",void 0),i([r()],h.prototype,"source",void 0),i([re("source")],h.prototype,"castSource",null),i([r({readOnly:!0})],h.prototype,"state",null),i([r()],h.prototype,"view",void 0),h=i([C("esri.widgets.BasemapGallery.BasemapGalleryViewModel")],h);const Oe=h,y="esri-basemap-gallery",u={base:y,widgetIcon:fe.basemap,sourceLoading:`${y}--source-loading`,layoutGrid:`${y}--grid`,narrowItems:`${y}--narrow-items`,loader:`${y}__loader`,item:`${y}__item`,itemContainer:`${y}__item-container`,itemContent:`${y}__item-content`,itemTitle:`${y}__item-title`,itemTagsContainer:`${y}__item-tags-container`,itemThumbnail:`${y}__item-thumbnail`,selectedItem:`${y}__item--selected`,itemError:`${y}__item--error`},T={small:200,default:280,wide:420};let c=class extends ve{constructor(e,t){super(e,t),this.disabled=!1,this.headingLevel=2,this.iconClass=u.widgetIcon,this.icon=null,this.messages=null,this.viewModel=new Oe,this._focusBasemapItemEnabled=!1,this._container=null,this._width=0,this._onContainerCreated=a=>{this._container=a}}initialize(){this.addHandles([ge(()=>this._container,({contentRect:e})=>{this._width=e.width}),U(()=>this.source,()=>this.viewModel.load(),{sync:!0,initial:!0,once:!0})])}loadDependencies(){return we({scrim:()=>P(()=>import("./calcite-scrim-5ea722f7.js"),["assets/calcite-scrim-5ea722f7.js","assets/scrim-41a5f26e.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/locale-2cb18332.js","assets/key-c2c83cc7.js","assets/observers-9c654f26.js","assets/t9n-622f279b.js","assets/loader-ea663d25.js","assets/guid-2347ca41.js"]),chip:()=>P(()=>import("./calcite-chip-e316f5fa.js"),["assets/calcite-chip-e316f5fa.js","assets/chip-9ebcd4a3.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/conditionalSlot-11b5e54d.js","assets/observers-9c654f26.js","assets/loadable-7d42c3de.js","assets/t9n-622f279b.js","assets/locale-2cb18332.js","assets/key-c2c83cc7.js","assets/interactive-39956fb6.js","assets/component-7281ffa6.js","assets/icon-c122f720.js"])})}get activeBasemap(){return this.viewModel.activeBasemap}set activeBasemap(e){this.viewModel.activeBasemap=e}get includeCurrentBasemap(){return this.viewModel.includeCurrentBasemap}set includeCurrentBasemap(e){this.viewModel.includeCurrentBasemap=e}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get source(){return this.viewModel.source}set source(e){this.viewModel.source=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){const e=this.source.state==="loading",t=this.disabled||this.viewModel.state==="disabled",a=this.viewModel.items,s={[u.sourceLoading]:e,[_.disabled]:t},n=this._width;n<=T.small||n>=T.wide?s[u.layoutGrid]=!0:n<T.default&&(s[u.narrowItems]=!0);const p=e?m("div",{class:u.loader,key:"loader"}):null,o=e?null:a.length>0?m("ul",{"aria-disabled":this.disabled,"aria-label":this.label,bind:this,class:u.itemContainer,key:"item-container",onkeydown:this._handleKeyDown,role:"radiogroup"},a.map((l,f)=>this._renderBasemapGalleryItem(l,f)).toArray()):m("div",{class:_.empty,key:"empty-message"},m(Ie,{level:this.headingLevel},this.messages.noBasemaps));return m("div",{afterCreate:this._onContainerCreated,class:this.classes(u.base,_.widget,_.panelHeightOnly,s),key:"container"},this._width===0?null:[p,o])}_getRoundRobinIndex(e,t){return(e+t)%t}_handleKeyDown(e){const{key:t}=e;if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(t))return;e.preventDefault();const{items:a,activeBasemapIndex:s}=this.viewModel,n=t==="ArrowUp"||t==="ArrowLeft"?this._getRoundRobinIndex(Math.max(s-1,-1),a.length):this._getRoundRobinIndex(s+1,a.length),p=a.at(n);(p==null?void 0:p.state)==="ready"&&(this.viewModel.activeBasemap=p.basemap),this._focusBasemapItemEnabled=!0}_focusBasemapItem(e){this._focusBasemapItemEnabled&&e.tabIndex===0&&(e.focus(),this._focusBasemapItemEnabled=!1)}_handleClick(e){const t=e.currentTarget["data-item"];t.state==="ready"&&(this.viewModel.activeBasemap=t.basemap)}_renderBasemapGalleryItem(e,t){var E,x;const a=he(e.basemap)||ce("esri/themes/base/images/basemap-toggle-64.svg"),s=e.basemap.title,n=(E=e.basemap.portalItem)==null?void 0:E.snippet,p=((x=e.error)==null?void 0:x.message)||n||s,{viewModel:{state:o,activeBasemapIndex:l}}=this,f=this.disabled||o==="disabled",d=l===t,k=d||l===-1&&t===0?0:-1,K=o==="loading",J={[u.selectedItem]:d,[u.itemError]:e.state==="error"},A=`basemapgallery-item-${e.uid}`;return m("li",{afterUpdate:this._focusBasemapItem,"aria-checked":d.toString(),"aria-disabled":f.toString(),"aria-labelledby":A,bind:this,class:this.classes(u.item,J),"data-item":e,key:e.uid,onclick:this._handleClick,onkeydown:this._handleClick,role:"radio",tabIndex:k,title:p},m("img",{alt:"",class:u.itemThumbnail,src:a}),m("div",{class:u.itemContent,key:"content"},m("div",{class:u.itemTitle,key:"title"},m("span",{id:A},s)),ue(e.basemap)?this._renderTags(e.basemap):null),e.state==="loading"||d&&K?m("calcite-scrim",null,m("span",{"aria-hidden":"true",class:_.loaderAnimation,key:"loader",role:"presentation"})):null)}_renderTags(e){return m("div",{class:u.itemTagsContainer,key:"tag"},this._render3DTag(),ye(e)?this._renderBetaTag():null)}_render3DTag(){const{messages:e}=this;return m("calcite-chip",{key:"tag-3d",scale:"s",value:e.tag3D},this.messages.tag3D)}_renderBetaTag(){const{messages:e}=this;return m("calcite-chip",{appearance:"outline-fill",key:"tag-beta",scale:"s",value:e.tagBeta},this.messages.tagBeta)}};i([r()],c.prototype,"activeBasemap",null),i([r()],c.prototype,"disabled",void 0),i([r()],c.prototype,"headingLevel",void 0),i([r()],c.prototype,"iconClass",void 0),i([r()],c.prototype,"icon",void 0),i([r()],c.prototype,"label",null),i([r(),be("esri/widgets/BasemapGallery/t9n/BasemapGallery")],c.prototype,"messages",void 0),i([r()],c.prototype,"source",null),i([r()],c.prototype,"view",null),i([r()],c.prototype,"viewModel",void 0),i([r()],c.prototype,"_focusBasemapItemEnabled",void 0),i([r()],c.prototype,"_container",void 0),i([r()],c.prototype,"_width",void 0),i([Re()],c.prototype,"_handleClick",null),c=i([C("esri.widgets.BasemapGallery")],c);const et=c;export{et as default};
