import{X as J,dJ as B,dw as S,hG as H,a5 as p,a9 as N,a6 as y,an as L,m_ as K,bA as q,m$ as Q,hH as X,hJ as W,di as Y,bh as Z,eh as ee,gs as T,q as D,_ as te,kz as R,eI as re,eJ as ne,gj as ie}from"./index-b516d057.js";import{r as oe}from"./featureQueryAll-40af0622.js";import{a as se,n as ae,u as le}from"./DefinitionExpressionSceneLayerView-8a0da2cd.js";import{u as de}from"./LayerView-060b46d4.js";const ue={setAttribute(){},rollback(){},commit(){}};var E;function Ee(e,r){const t=r.attributes[e.objectIdField];if(t==null)return ue;const n=e.sessions.get(t);if(n)return n;const a=J(r.attributes),s=new Set,d=e.i3sOverrides.createInteractiveEditSession(t),u=new Map,i=(c,f)=>{const g=u.get(c);if(g==null){const m=f.indexOf(t);return u.set(c,m),m}return g};let l=E.EDITING;const o={setAttribute(c,f){if(l!==E.EDITING)return;const g=e.fieldsIndex.get(c);if(!g)return;const m=e.attributeStorageInfo.findIndex(F=>F.name===g.name);if(m<0)return;if(!(c in a))throw new Error(`Attribute "${c}" is not an attribute of the edited feature.`);d.setAttribute(m,f);const w=e.attributeStorageInfo[m];let b=!1;s.add(c),e.forEachNode((F,x)=>{const v=i(F,x);if(v===-1)return;const A=e.getAttributeData(F.index);if(A){const O=A[w.name];O&&(O[v]=f,e.setAttributeData(F.index,A,r),b=!0)}}),b&&e.clearMemCache()},rollback(){if(l===E.EDITING){for(const c of s)this.setAttribute(c,a[c]);d.remove(),l=E.ROLLED_BACK,e.sessions.delete(t)}},commit(){l===E.EDITING&&(d.remove(),l=E.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,o),o}function ce(e,r,t){const{gidToFeatureInfo:n,oidToFeatureInfo:a,fieldsIndex:s,objectIdField:d,globalIdField:u,featureOrIdentifierList:i}=t;if(!t.featuresResolved&&i!=null){for(const l of i){const o={feature:null,oid:-1,gid:null};if("attributes"in l){o.feature=l;const c=l.attributes;if(c!=null)for(const f in c){if(o.oid!==-1&&o.gid!=null)break;const g=s.normalizeFieldName(f);g===d&&(o.oid=c[f]??-1),g===u&&(o.gid=c[f])}}else o.oid=l.objectId??-1,o.gid=l.globalId;o.gid!=null&&n.set(o.gid,o),o.oid!==-1&&a.set(o.oid,o)}t.featuresResolved=!0}return(e!==-1?a.get(e):null)??(r!=null?n.get(r):null)}function $(e,r,t,n,a=null,s=!0){const d=[],u={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:t==null,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:t};for(const i of r){if(i.error!=null)continue;const l=i.objectId??-1,o=i.globalId,c=(l===-1||s?ce(l,o,u):null)??{feature:null,oid:l,gid:o},f={oid:l===-1?c.oid:l,gid:o??c.gid,feature:c.feature,result:i};if(d.push(f),f.oid===-1&&f.gid!=null&&a!=null&&(f.oid=a.get(f.gid)??-1),f.oid===-1&&f.gid!=null){let g=n.get(f.gid);g==null&&(g=[],n.set(f.gid,g)),g.push(f)}}return d}async function xe(e,r){var d,u,i;const t=new Map,n=$(e,r.addedFeatures,(d=r.edits)==null?void 0:d.addFeatures,t),a=$(e,r.updatedFeatures,(u=r.edits)==null?void 0:u.updateFeatures,t),s=$(e,r.deletedFeatures,(i=r.edits)==null?void 0:i.deleteFeatures,t,r.globalIdToObjectId,!1);return t.size>0&&await fe(e,t),{adds:n.filter(l=>l.oid!==-1),updates:a.filter(l=>l.oid!==-1),deletes:s.filter(l=>l.oid!==-1)}}async function fe(e,r){const t=e.i3sOverrides.layer.associatedLayer;if((t==null?void 0:t.globalIdField)==null)return;const n=t.createQuery(),{objectIdField:a,globalIdField:s}=t;n.where=Array.from(r.keys()).map(i=>`${s}='${i}'`).join(" OR "),n.returnGeometry=!1,n.outFields=[a,s],n.cacheHint=!1;const d=await B(oe(t,n));if(!d.ok)return;const u=d.value.features;for(const i of u){const l=i.attributes[s],o=i.attributes[a];if(l==null||o==null||o===-1)continue;const c=r.get(l);if(c!=null)for(const f of c)f.oid=o}}function ve(e,r){var d,u;const t=new Map,n=r.adds,a=r.updates,s=r.deletes;if(n.length>0)for(const i of n){const l=i.oid,o=i.feature;((d=o==null?void 0:o.geometry)==null?void 0:d.type)==="mesh"&&t.set(l,o.geometry)}if(a.length>0)for(const i of a){const l=i.oid,o=i.feature;((u=o==null?void 0:o.geometry)==null?void 0:u.type)==="mesh"&&t.set(l,o.geometry)}if(s.length>0)for(const i of s)t.set(i.oid,null);for(const[i,l]of t)e.i3sOverrides.updateGeometry(i,l)}function Ae(e,r){var f;const t=pe(e,r),n=ge(e,r);if(t.size===0&&n.size===0)return;const a=new Map;for(let g=0;g<e.attributeStorageInfo.length;g++)a.set(e.attributeStorageInfo[g].name,g);let s=!1;t.forEach((g,m)=>{const w=e.getAttributeData(m);let b=!1;g.forEach((F,x)=>{const v=w!=null?w[x]:null,A=a.get(x);for(const{featureIndex:O,value:M,featureId:G}of F)v&&(v[O]=M,b=!0,s=!0),e.i3sOverrides.updateAttributeValue(G,A,M)}),b&&e.setAttributeData(m,w,null)}),s&&e.clearMemCache();const{fieldsIndex:d,i3sOverrides:u,objectIdField:i,globalIdField:l}=e,o=(f=u.layer.associatedLayer)==null?void 0:f.infoFor3D,c=new Set(o?[...Object.values(o.assetMapFieldRoles),...Object.values(o.transformFieldRoles)]:[]);for(const[g,m]of n){u.featureAdded(g);const{attributes:w}=m;for(const b in w){if(b!==i&&b!==l&&c.has(b))continue;const F=d.normalizeFieldName(b),x=F!=null?a.get(F):null;if(x==null)continue;const v=w[b];u.updateAttributeValue(g,x,v)}}}function ge(e,r){var a;const t=new Map,n=r.adds;if(!n||n.length===0||e.globalIdField==null)return t;for(const s of n){const d=s.oid,u=s.feature;((a=u==null?void 0:u.geometry)==null?void 0:a.type)==="mesh"&&t.set(d,u)}return t}function pe(e,r){const t=r.updates;if(!t||t.length===0)return new C;const n=new C,a=new Map;for(let s=0;s<e.attributeStorageInfo.length;s++)a.set(e.attributeStorageInfo[s].name,s);return e.forEachNode((s,d)=>{for(const u of t){if(u.feature==null)continue;const i=u.feature,l=u.oid,o=d.indexOf(l);for(const c in i.attributes){const f=e.fieldsIndex.normalizeFieldName(c),g=ye(n,s.index,f),m=i.attributes[c];g.push({featureIndex:o,featureId:l,value:m})}}}),n}function ye(e,r,t){const n=he(e,r),a=t!=null&&n.get(t);if(a)return a;const s=new Array;return n.set(t,s),s}function he(e,r){const t=e.get(r);if(t)return t;const n=new me;return e.set(r,n),n}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(E||(E={}));const me=Map,C=Map;function Oe(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:r},requiredFields:t}=this;return e.outFields?S(r,[...H(r,e.outFields),...t]):S(r,t)}}}}const P=e=>{let r=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,n){return be(a=>this._updateAsync(t,a),n)}async _updateAsync(t,n){if(!this._startAsyncUpdate(t)){try{const a=await n();this._set(t,a)}catch{L.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,n)}}_startAsyncUpdate(t){const n=this._asyncUpdateState.get(t)??I.None;return n&I.Updating?(this._asyncUpdateState.set(t,n|I.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,n|I.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const n=(this._asyncUpdateState.get(t)??I.None)&~I.Updating;return n&I.Invalidated?(this._asyncUpdateState.set(t,n&~I.Invalidated),!0):(this._asyncUpdateState.set(t,n),!1)}};return p([y({readOnly:!0})],r.prototype,"updating",null),p([y()],r.prototype,"_numUpdating",void 0),r=p([N("esri.core.AsyncUpdate")],r),r};var I;function be(e,r){const t=()=>{s&&!d&&e(n)},n=()=>{if(!s||d)return r();s.clear(),d=!0;const u=Q(s,r);return d=!1,u},a=()=>{s&&(s.destroy(),s=null)};let s=new K(t),d=!1;return e(n),{remove:a}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(I||(I={}));let k=class extends P(q){};k=p([N("esri.core.AsyncUpdate")],k);const V="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let _=class extends P(q){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:r},rendererFields:t,labelingFields:n,viewFilterFields:a}=this;return S(e,[...r??[],...t??[],...n??[],...a??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:r}=this.layer;return r?U(t=>r.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?U(r=>X(r,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:r}=this.layerView;return U(t=>W(t,e,r))})])}};async function U(e){const r=new Set;try{return await e(r),Array.from(r).sort()}catch(t){return L.getLogger(V).error(t),null}}p([y()],_.prototype,"layerView",void 0),p([y()],_.prototype,"layer",null),p([y()],_.prototype,"requiredFields",null),p([y()],_.prototype,"rendererFields",void 0),p([y()],_.prototype,"labelingFields",void 0),p([y()],_.prototype,"viewFilterFields",void 0),_=p([N(V)],_);const z="esri.views.layers.SceneLayerView",j=L.getLogger(z);let h=class extends de{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return se(this._layerFilter)}get _layerFilter(){var u;const e=(u=this.layer)==null?void 0:u.filter;if(e==null||e.geometries.length<1)return null;const r=this._geometryEngine;if(r==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return ae;const t=e.geometries.at(0).spatialReference,n=e.geometries.toArray().map(i=>{try{i=r.simplify(i)}catch{return j.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(i==null)return null;if(i.spatialReference.equals(t))return i;try{return Y(i,t)}catch{return j.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(Z).sort((i,l)=>i.extent.xmin-l.extent.xmin),a=new Set,s=new Array,d=new Array;for(let i of n){const l=i.extent.xmin;if(s.length=0,a.forEach(o=>{if(l>=o.extent.xmax)return d.push(o),void a.delete(o);i.extent.ymin<=o.extent.ymax&&i.extent.ymax>=o.extent.ymin&&r.intersects(i,o)&&s.push(o)}),s.length>0){s.push(i);try{i=r.union(s)}catch{j.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}s.pop(),s.forEach(o=>a.delete(o))}a.add(i)}return a.forEach(i=>d.push(i)),d.length>0?{spatialRelationship:e.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const r=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(r)&&!ee(t,r))}get layerFilterUpdating(){return le(this._layerFilter)}initialize(){const{signal:e}=this._abortController;T(()=>{var r,t,n;return this.destroyed||!this._geometryEngine&&((n=(t=(r=this.layer)==null?void 0:r.filter)==null?void 0:t.geometries)==null?void 0:n.length)},e).then(async()=>{D(e),this._geometryEngine=await te(()=>import("./geometryEngine-656a968c.js"),["assets/geometryEngine-656a968c.js","assets/geometryEngineBase-dfbd3a67.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/hydrated-40effdd0.js"])}).catch(R),this._projectionEngineLoaded=re(),T(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{D(e),await ne(),this._projectionEngineLoaded=!0}).catch(R)}destroy(){this._abortController=ie(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,r){throw new Error("Not implemented")}queryObjectIds(e,r){throw new Error("Not implemented")}queryFeatureCount(e,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,r){throw new Error("Not implemented")}};p([y()],h.prototype,"layer",void 0),p([y()],h.prototype,"availableFields",null),p([y()],h.prototype,"maximumNumberOfFeatures",null),p([y({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null),p([y()],h.prototype,"filter",void 0),p([y({readOnly:!0})],h.prototype,"layerFilter",null),p([y({readOnly:!0})],h.prototype,"_layerFilter",null),p([y()],h.prototype,"_geometryEngine",void 0),p([y()],h.prototype,"_projectionEngineLoaded",void 0),p([y()],h.prototype,"_filterNeedsProjectionEngine",null),p([y()],h.prototype,"layerFilterUpdating",null),h=p([N(z)],h);const $e=h;export{Oe as a,_ as c,ve as d,Ae as f,Ee as i,$e as j,xe as u};
