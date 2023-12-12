import{a5 as r,a6 as o,a9 as b,U as x,dm as j,e3 as $,M as I,s as m,C as w,am as J,k as N,cy as F,an as f,ew as R,dk as q,ev as P,dl as T,d_ as k,a0 as D,a1 as G,a2 as L,ah as O,q as C,jD as g,jE as Z,I as v,_ as z,j8 as Q,ey as V,jF as M,cz as U,d$ as A,jG as B,e0 as W,jH as H,ja as K,eo as X,jI as Y,a8 as ee,aa as te}from"./index-b516d057.js";import{m as re,u as ie}from"./jsonUtils-52514725.js";import{l as oe}from"./clientSideDefaults-dfab1319.js";import{p as se}from"./FeatureEffectLayer-1948d1a0.js";import{c as ne}from"./FeatureReductionLayer-443167bc.js";import{c as ae}from"./OrderedLayer-32293fe1.js";import{p as le}from"./FeatureTemplate-d1d1c7be.js";import{n as pe}from"./FeatureType-f30c4b8b.js";import{s as ue}from"./fieldProperties-8c831c84.js";import{C as de}from"./LabelClass-c3c309a8.js";import{i as he}from"./labelingInfo-aae625ac.js";import{b as y}from"./Query-071039d7.js";import"./DictionaryLoader-e327eff9.js";import"./Version-1f969b2a.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-59981e75.js";import"./FeatureEffect-c80bb16d.js";import"./FeatureFilter-55dd341e.js";import"./clusterUtils-50a66940.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-d84c375a.js";import"./featureLayerUtils-16361d1f.js";import"./featureQueryAll-40af0622.js";import"./AttachmentQuery-bede5a71.js";import"./RelationshipQuery-2c9e4485.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";let d=class extends x{constructor(){super(...arguments),this.type="geojson",this.refresh=j(async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(i=>$.fromJSON(i))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:I.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],a=[],l=[];if(e.addFeatures)for(const n of e.addFeatures)i.push(this._serializeFeature(n));if(e.deleteFeatures)for(const n of e.deleteFeatures)"objectId"in n&&n.objectId!=null?a.push(n.objectId):"attributes"in n&&n.attributes[t]!=null&&a.push(n.attributes[t]);if(e.updateFeatures)for(const n of e.updateFeatures)l.push(this._serializeFeature(n));return this._connection.invoke("applyEdits",{adds:i,updates:l,deletes:a}).then(({extent:n,timeExtent:p,featureEditResults:u})=>(this.sourceJSON.extent=n,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?w.fromExtent(t.extent):t}async _startWorker(e){this._connection=await J("GeoJSONSourceWorker",{strategy:N("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:i,hasZ:a,geometryType:l,objectIdField:n,url:p,timeInfo:u,customParameters:E}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",_={url:p,customParameters:E,fields:t&&t.map(c=>c.toJSON()),geometryType:F.toJSON(l),hasZ:a,objectIdField:n,timeInfo:u?u.toJSON():null,spatialReference:S?null:i&&i.toJSON()},h=await this._connection.invoke("load",_,{signal:e});for(const c of h.warnings)f.getLogger(this.layer).warn("#load()",`$${c.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:c});h.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${h.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:h.featureErrors}),this.sourceJSON=h.layerDefinition,this.capabilities=oe(this.sourceJSON.hasZ,!0)}};r([o()],d.prototype,"capabilities",void 0),r([o()],d.prototype,"type",void 0),r([o({constructOnly:!0})],d.prototype,"layer",void 0),r([o()],d.prototype,"sourceJSON",void 0),d=r([b("esri.layers.graphics.sources.GeoJSONSource")],d);const ye=ue();let s=class extends ae(R(ne(se(q(P(T(k(D(G(L(te))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=O.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(C).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),Z(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:i}=await z(()=>import("./editingSupport-af497a72.js"),["assets/editingSupport-af497a72.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/EditBusLayer-caf9fed8.js"]);await this.load();const a=await i(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),a}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Q(this,e)}createQuery(){var l;const e=new y,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:a}=this;return e.timeExtent=i!=null&&a!=null?a.offset(-i.value,i.unit):a||null,e}getFieldDomain(e,t){let i,a=!1;const l=t==null?void 0:t.feature,n=l==null?void 0:l.attributes,p=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return p!=null&&this.types&&(a=this.types.some(u=>u.id==p&&(i=u.domains&&u.domains[e],i&&i.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),a||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(i=>{if(i!=null&&i.features)for(const a of i.features)a.layer=a.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(i=>(i.name===e&&(t=i.domain),!!t)),t}};r([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",null),r([o({type:String})],s.prototype,"copyright",void 0),r([o({readOnly:!0})],s.prototype,"createQueryVersion",null),r([o(V("dateFieldsTimeReference"))],s.prototype,"dateFieldsTimeZone",void 0),r([o({readOnly:!0})],s.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],s.prototype,"definitionExpression",void 0),r([o({type:String})],s.prototype,"displayField",void 0),r([o({type:Boolean})],s.prototype,"editingEnabled",void 0),r([o(M)],s.prototype,"elevationInfo",void 0),r([o({type:[U],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],s.prototype,"fields",void 0),r([o(ye.fieldsIndex)],s.prototype,"fieldsIndex",void 0),r([o({type:I,json:{name:"extent"}})],s.prototype,"fullExtent",void 0),r([o({type:["point","polygon","polyline","multipoint"],json:{read:{reader:F.read}}})],s.prototype,"geometryType",void 0),r([o({type:Boolean})],s.prototype,"hasZ",void 0),r([o(A)],s.prototype,"id",void 0),r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([o(B)],s.prototype,"labelsVisible",void 0),r([o({type:[de],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:he},write:!0}})],s.prototype,"labelingInfo",void 0),r([o(W)],s.prototype,"legendEnabled",void 0),r([o({type:["show","hide"]})],s.prototype,"listMode",void 0),r([o({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],s.prototype,"objectIdField",void 0),r([o(H)],s.prototype,"opacity",void 0),r([o({type:["GeoJSON"]})],s.prototype,"operationalLayerType",void 0),r([o({readOnly:!0})],s.prototype,"parsedUrl",null),r([o(K)],s.prototype,"popupEnabled",void 0),r([o({type:X,json:{name:"popupInfo",write:!0}})],s.prototype,"popupTemplate",void 0),r([o({types:re,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ie}}}})],s.prototype,"renderer",null),r([o(Y)],s.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],s.prototype,"source",void 0),r([o({type:O})],s.prototype,"spatialReference",void 0),r([o({type:[le]})],s.prototype,"templates",void 0),r([o()],s.prototype,"title",void 0),r([o({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),r([o({type:String,readOnly:!0})],s.prototype,"typeIdField",void 0),r([o({type:[pe]})],s.prototype,"types",void 0),r([o(ee)],s.prototype,"url",null),s=r([b("esri.layers.GeoJSONLayer")],s);const Ae=s;export{Ae as default};