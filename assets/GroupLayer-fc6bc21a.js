import{dk as b,dl as v,a0 as c,a1 as m,a2 as f,dm as _,cb as y,dn as w,S as g,q as I,dp as p,dq as L,a5 as r,a6 as l,ad as h,a7 as O,dr as S,cd as $,ce as u,a9 as A,aa as V,_ as E,an as P}from"./index-b516d057.js";import{l as M}from"./CollectionFlattener-193451da.js";import{t as C}from"./loadAll-5e767cfa.js";import{a as T}from"./lazyLayerLoader-edff256b.js";import{l as x,d as G,t as R}from"./TablesMixin-292d1d89.js";import{e as j}from"./tagSymbols-a2a561f5.js";import{m as H}from"./saveUtils-2b9108f6.js";import{f as F}from"./writeUtils-e226a8aa.js";import"./uuid-709b6c67.js";import"./resourceUtils-2ae38811.js";let s=class extends b(v(c(m(x(G(f(V))))))){constructor(e){super(e),this.allLayers=new M({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=R(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=_(async(i,t,a)=>{const{save:o,saveAs:n}=await E(()=>import("./groupLayerUtils-fb00648c.js"),["assets/groupLayerUtils-fb00648c.js","assets/utils-2132f574.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-08550f59.js","assets/saveAPIKeyUtils-b849c848.js","assets/saveUtils-2b9108f6.js","assets/uuid-709b6c67.js","assets/resourceUtils-2ae38811.js"]);switch(i){case p.SAVE:return o(this,t);case p.SAVE_AS:return n(this,a,t)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([y(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&j in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles($(()=>this.tables,"before-add",t=>{t.preventDefault(),P.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),i))},S),y(()=>this.visible,this._onVisibilityChange.bind(this),u)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===w.USER}_writeLayers(e,i,t,a){const o=[];if(!e)return o;e.forEach(n=>{const d=F(n,a.webmap?a.webmap.getLayerJSONFromResourceInfo(n):null,a);d!=null&&d.layerType&&o.push(d)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,i,t){const{itemId:a,layerType:o}=i;if(o==="GroupLayer"&&a)return new g({id:a,portal:t==null?void 0:t.portal})}writePortalItem(e,i){e!=null&&e.id&&(i.itemId=e.id)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}async beforeSave(){return H(this)}load(e){const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:T},e).catch(t=>{if(I(t),this.sourceIsPortalItem)throw t});return this.addResolvingPromise(i),Promise.resolve(this)}async loadAll(){return C(this,e=>{e(this.layers,this.tables)})}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,i){return this._debouncedSaveOperations(p.SAVE_AS,i,e)}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles(y(()=>e.visible,i=>this._onChildVisibilityChange(e,i),u),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!L(this).initialized)return;const t=this.layers;let a=t.find(o=>o.visible);switch(e){case"exclusive":t.length&&!a&&(a=t.at(0),a.visible=!0),this._turnOffOtherLayers(a);break;case"inherited":t.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};r([l({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),r([l({readOnly:!0})],s.prototype,"allTables",void 0),r([l({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),r([l()],s.prototype,"fullExtent",void 0),r([l({readOnly:!0})],s.prototype,"sourceIsPortalItem",null),r([l({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),r([h("layers")],s.prototype,"_writeLayers",null),r([l({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),r([l({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,i,t){return{enabled:(e==null?void 0:e.type)==="Group Layer"&&(t==null?void 0:t.initiator)!==this}}}},"web-scene":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),r([O("web-map","portalItem",["itemId"])],s.prototype,"readPortalItem",null),r([h("web-map","portalItem",{itemId:{type:String}})],s.prototype,"writePortalItem",null),r([l()],s.prototype,"spatialReference",void 0),r([l({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),r([l({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,t)=>{e!=="inherited"&&(i[t]=e)}}}}})],s.prototype,"visibilityMode",null),s=r([A("esri.layers.GroupLayer")],s);const W=s;export{W as default};
