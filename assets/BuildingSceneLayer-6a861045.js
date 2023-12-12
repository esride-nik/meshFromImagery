import{a5 as t,a6 as s,a9 as a,ae as d,X as y,V as O,dx as Q,pj as Y,U as Z,hF as ee,an as b,v as te,$ as re,a0 as se,a1 as ie,dl as oe,a2 as le,s as q,aq as ae,q as ne,a7 as P,pk as pe,e0 as ye,j7 as ue,jF as de,ah as ce,aa as he}from"./index-b516d057.js";import{l as ge}from"./CollectionFlattener-193451da.js";import{t as ve}from"./loadAll-5e767cfa.js";import{C as V}from"./BuildingComponentSublayer-0e038021.js";import{d as c}from"./BuildingGroupSublayer-2dcd1645.js";import{i as fe}from"./APIKeyMixin-bfb00271.js";import{E as me,P as K}from"./SceneService-95a4a9ce.js";import{l as be}from"./associatedFeatureServiceUtils-158b7391.js";import{n as Se}from"./uuid-709b6c67.js";import{x as C,p as we,E as $e}from"./elevationInfoUtils-be36d866.js";let S=class extends d{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),S=t([a("esri.layers.support.BuildingFilterAuthoringInfo")],S);const X=S;var T;let g=T=class extends d{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new T({filterType:this.filterType,filterValues:y(this.filterValues)})}};t([s({type:String,json:{write:!0}})],g.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],g.prototype,"filterValues",void 0),g=T=t([a("esri.layers.support.BuildingFilterAuthoringInfoType")],g);const je=g;var I;const xe=O.ofType(je);let w=I=class extends d{clone(){return new I({filterTypes:y(this.filterTypes)})}};t([s({type:xe,json:{write:!0}})],w.prototype,"filterTypes",void 0),w=I=t([a("esri.layers.support.BuildingFilterAuthoringInfoBlock")],w);const Oe=w;var _;const Be=O.ofType(Oe);let v=_=class extends X{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:y(this.filterBlocks)})}};t([s({type:["checkbox"]})],v.prototype,"type",void 0),t([s({type:Be,json:{write:!0}})],v.prototype,"filterBlocks",void 0),v=_=t([a("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],v);const U=v;let $=class extends d{};t([s({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=t([a("esri.layers.support.BuildingFilterMode")],$);const B=$;var A;let j=A=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],j.prototype,"type",void 0),j=A=t([a("esri.layers.support.BuildingFilterModeSolid")],j);const E=j;var k;let f=k=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:y(this.edges)})}};t([Q({wireFrame:"wire-frame"})],f.prototype,"type",void 0),t([s(Y)],f.prototype,"edges",void 0),f=k=t([a("esri.layers.support.BuildingFilterModeWireFrame")],f);const J=f;var L;let x=L=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new L}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=L=t([a("esri.layers.support.BuildingFilterModeXRay")],x);const H=x;var M;const Fe={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:E,"wire-frame":J,"x-ray":H}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return E.fromJSON(e);case"wireFrame":return J.fromJSON(e);case"x-ray":return H.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let h=M=class extends d{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new E,this.title=""}clone(){return new M({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterExpression",void 0),t([s(Fe)],h.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"title",void 0),h=M=t([a("esri.layers.support.BuildingFilterBlock")],h);const Te=h;var N;const Ie=O.ofType(Te);let u=N=class extends d{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Se(),this.name=null}clone(){return new N({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],u.prototype,"description",void 0),t([s({type:Ie,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:X,typeMap:{checkbox:U}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?U.fromJSON(e):null,write:!0}})],u.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"name",void 0),u=N=t([a("esri.layers.support.BuildingFilter")],u);const _e=u;let p=class extends d{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],p.prototype,"fieldName",void 0),t([s({type:String})],p.prototype,"modelName",void 0),t([s({type:String})],p.prototype,"label",void 0),t([s({type:Number})],p.prototype,"min",void 0),t([s({type:Number})],p.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],p.prototype,"subLayerIds",void 0),p=t([a("esri.layers.support.BuildingFieldStatistics")],p);let m=class extends Z.LoadableMixin(ee(d)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(b.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await te(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],m.prototype,"url",void 0),t([s({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=t([a("esri.layers.support.BuildingSummaryStatistics")],m);const W=m,D=O.ofType(_e),G=y(c.sublayersProperty);var z;const F=(z=G.json)==null?void 0:z.origins;F&&(F["web-scene"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},F["portal-item"]={type:[V],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let i=class extends me(re(se(ie(oe(le(fe(he))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ge({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new D,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const l=c.readSublayers(e,r,o);return c.forEachSublayer(l,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:o}){c.forEachSublayer(e,l=>l.read(r.get(l.id),o))}readSublayerOverrides(e,r){var l;const o=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?o.set(n.id,n):(l=r.messages)==null||l.push(new q("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const l=[];c.forEachSublayer(this.sublayers,n=>{const R=n.write({},o);Object.keys(R).length>1&&l.push(R)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push(y(o))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this._sublayerOverrides=o}}readSummaryStatistics(e,r){var o;if(typeof r.statisticsHRef=="string"){const l=ae((o=this.parsedUrl)==null?void 0:o.path,r.statisticsHRef);return new W({url:l})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ne).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return ve(this,e=>{c.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(K.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(K.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new q("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await be(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){b.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";C(b.getLogger(this),we(r,"absolute-height",e)),C(b.getLogger(this),$e(r,e))}};t([s({type:["BuildingSceneLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],i.prototype,"allSublayers",void 0),t([s(G)],i.prototype,"sublayers",void 0),t([P("service","sublayers")],i.prototype,"readSublayers",null),t([s({type:D,nonNullable:!0,json:{write:!0}})],i.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],i.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:W})],i.prototype,"summaryStatistics",void 0),t([P("summaryStatistics",["statisticsHRef"])],i.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],i.prototype,"outFields",void 0),t([s(pe)],i.prototype,"fullExtent",void 0),t([s(ye)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),t([s(ue(ce))],i.prototype,"spatialReference",void 0),t([s(de)],i.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([s()],i.prototype,"associatedFeatureServiceItem",void 0),i=t([a("esri.layers.BuildingSceneLayer")],i);const Ae=i,Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Ae},Symbol.toStringTag,{value:"Module"}));export{Ue as B,Ae as M,H as a,Te as c,_e as f,E as i};