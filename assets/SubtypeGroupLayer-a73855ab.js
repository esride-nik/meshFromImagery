import{dF as X,a2 as R,cg as k,dZ as K,X as S,dO as Y,an as ee,jD as te,s as m,j8 as re,eD as A,dn as N,a5 as i,a6 as n,ad as ie,jG as se,e0 as ne,jT as oe,jS as ae,ja as le,eo as pe,a7 as $,a9 as U,jU as ue,dI as de,jV as ye,U as ce,dk as he,ev as me,dl as be,d_ as fe,$ as ge,a0 as ve,a1 as we,ew as Se,V as C,dm as Fe,cb as Ie,ce as $e,q as Oe,I as je,aq as Ee,jb as Te,iq as _e,_ as x,dp as E,jE as Ce,d$ as Ae,ea as P,jW as Le,aa as xe}from"./index-b516d057.js";import{t as Pe}from"./loadAll-5e767cfa.js";import{i as qe}from"./APIKeyMixin-bfb00271.js";import{F as Ge}from"./EditBusLayer-caf9fed8.js";import{y as Ve,D as De}from"./FeatureLayerBase-0746b503.js";import{x as M,Q as Re,T as ke,m as Ne,w as Ue,b as Me,j as Qe,I as He,q as Be,F as Je,A as Ze,O as ze,P as We,E as Xe,S as Ke}from"./featureLayerUtils-16361d1f.js";import{s as Q}from"./fieldProperties-8c831c84.js";import{p as L}from"./jsonUtils-52514725.js";import{p as H}from"./FeatureTemplate-d1d1c7be.js";import{C as Ye}from"./LabelClass-c3c309a8.js";import{i as et}from"./labelingInfo-aae625ac.js";import{b as B}from"./Query-071039d7.js";import{c as tt,u as rt,S as it}from"./defaults-4faa92e6.js";import{e as st}from"./versionUtils-5892620e.js";import"./uuid-709b6c67.js";import"./HeightModelInfo-b816d32b.js";import"./LayerFloorInfo-4234db4d.js";import"./serviceCapabilitiesUtils-42d4d20c.js";import"./featureQueryAll-40af0622.js";import"./AttachmentQuery-bede5a71.js";import"./RelationshipQuery-2c9e4485.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./DictionaryLoader-e327eff9.js";import"./Version-1f969b2a.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./labelUtils-b29175f3.js";import"./defaultsJSON-59981e75.js";const nt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],J={key:"type",base:ue,errorContext:"renderer",typeMap:{simple:L,"unique-value":de,"class-breaks":ye}},q=Q(),G=X({types:J});let ot=0;function I(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function at(e){return new L({symbol:lt(e)})}function lt(e){switch(e){case"point":case"multipoint":return it.clone();case"polyline":return rt.clone();case"polygon":case"multipatch":return tt.clone();default:return null}}function pt(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function Z(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function ut(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},o=Z(e,t);if(o!=null){const{defaultValues:a}=o;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new H({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const z="esri.layers.support.SubtypeSublayer";let l=class extends R(k(K(ce))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${ot++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:o}=this;let a;if(s){a=[];let p=0;s.forEach(({name:y,alias:c,editable:f,visible:g})=>{var O;if(!g)return;const d=(O=o==null?void 0:o.fields)==null?void 0:O.find(F=>F.name===y);if(!d)return;const b={name:y};let w=!1;c!==d.alias&&(b.alias=c,w=!0),f!==d.editable&&(b.editable=f,w=!0),a.push(b),w&&p++}),p===0&&a.length===s.length&&(a=null)}else a=S(e);a!=null&&a.length&&Y(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:o,subtypeField:a}=e,p=o==null?void 0:o.find(g=>g.code===r),y=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,f=[];for(const g of s){const d=g.clone(),{name:b}=d,w=t==null?void 0:t.find(j=>j.name===b);if(d.visible=!t||!!w,w){const{alias:j,editable:W}=w;j&&(d.alias=j),W===!1&&(d.editable=!1)}const O=(y==null?void 0:y[b])??null;d.defaultValue=b===a?r:O;const F=(c==null?void 0:c[b])??null;d.domain=b===a?null:F?F.type==="inherited"?d.domain:F.clone():null,f.push(d)}return f}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ee.getLogger(z).error(v("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){te(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?at(e.geometryType):null}readRendererFromService(e,t,r){var y,c,f;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,o=G(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&pt(o,t.subtypeField)){const g=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));g&&(a=new L({symbol:g.symbol}))}else(o==null?void 0:o.type)!=="simple"||(f=o.visualVariables)!=null&&f.length||(a=o);return a}readRenderer(e,t,r){var a,p,y;const s=(p=(a=t==null?void 0:t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:p.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(c=>c.type!=="rotationInfo"))?void 0:G(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ut(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Z(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw v("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw v("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw v("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new m("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw v("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:o}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:y,title:o}}return re(t,e)}createQuery(){if(!this.parent)throw v("createQuery");const e=M(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=A(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return nt.some(e=>this.originIdOf(e)===N.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw v("queryAttachments");const s=e.clone();return s.where=V(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw v("queryFeatures");const s=B.from(e)??r.createQuery();return e!=null&&(s.where=V(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([n({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([n({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([n({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([n({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([n({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([ie("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([n({...q.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([n(q.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"floorInfo",null),i([n({type:Ve,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([n({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([n(I(S(se)))],l.prototype,"labelsVisible",void 0),i([n({type:[Ye],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:et},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([n({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([n(I(S(ne)))],l.prototype,"legendEnabled",void 0),i([n({type:["show","hide"]})],l.prototype,"listMode",void 0),i([n((()=>{const e=S(oe);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"minScale",void 0),i([n((()=>{const e=S(ae);return e.json.origins.service.read=!1,I(e)})())],l.prototype,"maxScale",void 0),i([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([n({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([n({clonable:!1})],l.prototype,"parent",void 0),i([n(I(S(le)))],l.prototype,"popupEnabled",void 0),i([n({type:pe,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([n({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([n({types:J,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([$("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([$("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([n({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([n({type:[H],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([$("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([n({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([$("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([n({readOnly:!0,json:{read:!1}})],l.prototype,"url",null),i([n({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([n({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([U(z)],l);const V=(e,t,r)=>{const s=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,a=e??"";return s.test(a)?a.replace(s,o):A(o,a)},v=e=>new m(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),T=l,h="SubtypeGroupLayer",dt="esri.layers.SubtypeGroupLayer";function D(e,t){return new m("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const _=Q();let u=class extends De(Ge(he(me(be(fe(ge(ve(we(R(Se(qe(k(xe))))))))))))){constructor(...e){super(...e),this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(C.ofType(T)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=Fe(async(t,r,s)=>{const{save:o,saveAs:a}=await x(()=>import("./featureLayerUtils-d02566b9.js"),["assets/featureLayerUtils-d02566b9.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/utils-2132f574.js","assets/jsonContext-08550f59.js","assets/saveAPIKeyUtils-b849c848.js","assets/fetchService-9c0aadd1.js","assets/lazyLayerLoader-edff256b.js"]);switch(t){case E.SAVE:return o(this,r);case E.SAVE_AS:return a(this,s,r)}}),this.addHandles(Ie(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),$e))}destroy(){var e;(e=this.source)==null||e.destroy()}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(Oe).then(async()=>{if(!this.url)throw new m("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new m("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>Re(this,"load",e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return ke(this)}get parsedUrl(){const e=je(this.url);return e!=null&&this.layerId!=null&&(e.path=Ee(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Te(this.url,t):t}async addAttachment(e,t){return Ne(this,e,t,h)}async updateAttachment(e,t,r){return Ue(this,e,t,r,h)}async applyEdits(e,t){return Me(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await _e(x(()=>import("./FeatureLayerSource-f85b3bec.js"),["assets/FeatureLayerSource-f85b3bec.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/editingSupport-af497a72.js","assets/EditBusLayer-caf9fed8.js","assets/clientSideDefaults-dfab1319.js","assets/QueryEngineCapabilities-85c4f1d0.js","assets/defaultsJSON-59981e75.js","assets/QueryTask-c8bdd708.js","assets/Query-071039d7.js","assets/FullTextSearch-12e0754c.js","assets/QuantizationParameters-f983cf8d.js","assets/executeForIds-dd65ee28.js","assets/query-351887b5.js","assets/pbfQueryUtils-b37a842c.js","assets/pbf-2651fe50.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-d7a48772.js","assets/executeQueryJSON-eec0ecca.js","assets/executeQueryPBF-ba35ba83.js","assets/featureConversionUtils-09cf00ff.js","assets/featureLayerUtils-16361d1f.js","assets/featureQueryAll-40af0622.js","assets/jsonUtils-52514725.js","assets/DictionaryLoader-e327eff9.js","assets/Version-1f969b2a.js","assets/FieldsIndex-e8db657f.js","assets/UnknownTimeZone-a05df022.js","assets/HeatmapColorStop-3fff4333.js","assets/heatmapUtils-7f42325f.js","assets/AttachmentQuery-bede5a71.js","assets/RelationshipQuery-2c9e4485.js","assets/editsZScale-e45bb69c.js"]),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=M(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=A(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Qe(this,e,t,h)}async fetchRecomputedExtents(e){return He(this,e,h)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return Pe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Be(this,e,t,h)}async queryFeatures(e,t){const r=await this.load(),s=B.from(e)??r.createQuery(),o=s.outFields??[];o.includes(this.subtypeField)||(o.push(this.subtypeField),s.outFields=o);const a=await r.source.queryFeatures(s,t);if(a!=null&&a.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Je(this,e,t,h)}async queryFeatureCount(e,t){return Ze(this,e,t,h)}async queryExtent(e,t){return ze(this,e,t,h)}async queryRelatedFeatures(e,t){return We(this,e,t,h)}async queryRelatedFeaturesCount(e,t){return Xe(this,e,t,h)}async save(e){return this._debouncedSaveOperations(E.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(E.SAVE_AS,t,e)}write(e,t){var a;const{origin:r,layerContainerType:s,messages:o}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return o==null||o.push(D(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return o==null||o.push(D(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(o==null||o.push(new m("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&st(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new m("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new m("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Ce(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ke(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.addHandles([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([n({readOnly:!0})],u.prototype,"createQueryVersion",null),i([n({readOnly:!0})],u.prototype,"editingEnabled",null),i([n({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([n({..._.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([n(_.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([n(Ae)],u.prototype,"id",void 0),i([n({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],u.prototype,"listMode",void 0),i([n({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],u.prototype,"operationalLayerType",void 0),i([n(_.outFields)],u.prototype,"outFields",void 0),i([n({readOnly:!0})],u.prototype,"parsedUrl",null),i([n({clonable:!1})],u.prototype,"source",null),i([n({type:C.ofType(T),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:o})=>{const a=new T({subtypeCode:o});return a.read(t,r),a});return new(C.ofType(T))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),o=N.PORTAL_ITEM;let a=!0;if(P(s)===o&&P(r.origin)>o){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([n({type:Le})],u.prototype,"timeInfo",void 0),i([n({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([$("service","title",["name"])],u.prototype,"readTitleFromService",null),i([n({json:{read:!1}})],u.prototype,"type",void 0),u=i([U(dt)],u);const Mt=u;export{Mt as default};