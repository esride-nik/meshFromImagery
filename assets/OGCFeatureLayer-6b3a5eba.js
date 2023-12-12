import{a5 as r,a6 as s,a9 as D,U as B,e3 as L,ah as w,jP as N,s as R,ew as z,dk as k,ev as H,dl as J,a0 as U,a1 as Z,d_ as V,a2 as W,jD as F,j8 as K,jE as X,jF as Y,cz as ee,M as te,cy as I,jG as re,e0 as oe,ja as se,eo as ie,jI as pe,a8 as ne,aa as ae}from"./index-b516d057.js";import{m as le,u as ue}from"./jsonUtils-52514725.js";import{S as de,h as $,x as j,T as ce,I as ye,F as me,k as he,j as fe,b as ge}from"./ogcFeatureUtils-73278bb3.js";import{i as ve}from"./APIKeyMixin-bfb00271.js";import{p as Se}from"./FeatureEffectLayer-1948d1a0.js";import{c as we}from"./FeatureReductionLayer-443167bc.js";import{c as xe}from"./OrderedLayer-32293fe1.js";import{n as be}from"./FeatureType-f30c4b8b.js";import{s as Ce}from"./fieldProperties-8c831c84.js";import{C as Re}from"./LabelClass-c3c309a8.js";import{i as Fe}from"./labelingInfo-aae625ac.js";import{b as O}from"./Query-071039d7.js";import"./DictionaryLoader-e327eff9.js";import"./Version-1f969b2a.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./geojson-573ee405.js";import"./date-294ce3fb.js";import"./clientSideDefaults-dfab1319.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./defaultsJSON-59981e75.js";import"./FeatureEffect-c80bb16d.js";import"./FeatureFilter-55dd341e.js";import"./clusterUtils-50a66940.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-d84c375a.js";import"./featureLayerUtils-16361d1f.js";import"./featureQueryAll-40af0622.js";import"./AttachmentQuery-bede5a71.js";import"./RelationshipQuery-2c9e4485.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./FeatureTemplate-d1d1c7be.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";let d=class extends B{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:i,supportedCrs:p},layer:{apiKey:n,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:n,customParameters:l},spatialReference:i,supportedCrs:p}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(i=>L.fromJSON(i))}queryFeaturesJSON(e,t={}){const i=this.getSource();return this.load(t).then(()=>de(i,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const i=new RegExp(`^${t}$`,"i");return e.conformsTo.some(p=>i.test(p))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){var i,p,n,l,a;const t=(i=e==null?void 0:e.components)==null?void 0:i.parameters;return((n=(p=t==null?void 0:t.limit)==null?void 0:p.schema)==null?void 0:n.maximum)??((a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum)}_getStorageSpatialReference(e){const t=e.storageCrs??$,i=j(t);return i==null?w.WGS84:new w({wkid:i})}_getSupportedSpatialReferences(e,t){const i="#/crs",p=e.crs??[$],n=p.includes(i)?p.filter(a=>a!==i).concat(t.crs??[]):p,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter(a=>!l.test(a))}async _loadOGCServices(e,t){const i=t!=null?t.signal:null,{apiKey:p,collectionId:n,customParameters:l,fields:a,geometryType:m,hasZ:h,objectIdField:T,timeInfo:f,url:E}=e,P={fields:a==null?void 0:a.map(u=>u.toJSON()),geometryType:N.toJSON(m),hasZ:h??!1,objectIdField:T,timeInfo:f==null?void 0:f.toJSON()},c={apiKey:p,customParameters:l,signal:i},g=await ce(E,c),[x,b]=await Promise.all([ye(g,c),me(g,c)]);if(!this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const y=b.collections.find(u=>u.id===n);if(!y)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const _=this._conformsToType(x,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await he(g,c):null,C=await fe(y,P,c),q=this._getMaxRecordCount(_),M=this._getCapabilities(C.hasZ,q),A=this._getStorageSpatialReference(y).toJSON(),G=this._getSupportedSpatialReferences(y,b),Q=new RegExp(`^${ge}`,"i"),v={};for(const u of G){const S=j(u);S!=null&&(v[S]||(v[S]=u.replace(Q,"")))}this.featureDefinition={capabilities:M,collection:y,layerDefinition:C,spatialReference:A,supportedCrs:v}}};r([s()],d.prototype,"featureDefinition",void 0),r([s({constructOnly:!0})],d.prototype,"layer",void 0),r([s()],d.prototype,"type",void 0),d=r([D("esri.layers.graphics.sources.OGCFeatureSource")],d);const Ie=Ce();let o=class extends ve(z(we(Se(k(xe(H(J(U(Z(V(W(ae)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e;return this.maxRecordCount??((e=this.capabilities)==null?void 0:e.query.maxRecordCount)??5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){F(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return K(this,e)}createQuery(){return new O}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let i,p=!1;const n=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(n==null?void 0:n[this.typeIdField]);return l!=null&&this.types&&(p=this.types.some(m=>{var h;return m.id==l&&(i=(h=m.domains)==null?void 0:h[e],(i==null?void 0:i.type)==="inherited"&&(i=this._getLayerDomain(e)),!0)})),p||i||(i=this._getLayerDomain(e)),i}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.from(e)||this.createQuery(),t)).then(i=>{var p;return(p=i==null?void 0:i.features)==null||p.forEach(n=>{n.layer=n.sourceLayer=this}),i})}serviceSupportsSpatialReference(e){var t;return((t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),F(this.renderer,this.fieldsIndex),X(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([s({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),r([s({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),r([s({type:String})],o.prototype,"copyright",void 0),r([s({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([s({type:String})],o.prototype,"definitionExpression",void 0),r([s({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),r([s({type:String})],o.prototype,"displayField",void 0),r([s({type:Number})],o.prototype,"effectiveMaxRecordCount",null),r([s(Y)],o.prototype,"elevationInfo",void 0),r([s({type:[ee],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),r([s(Ie.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([s({readOnly:!0,type:te,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),r([s({type:I.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:I.read}}}}})],o.prototype,"geometryType",void 0),r([s({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),r([s({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([s({type:[Re],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Fe},write:!0}}}})],o.prototype,"labelingInfo",void 0),r([s(re)],o.prototype,"labelsVisible",void 0),r([s(oe)],o.prototype,"legendEnabled",void 0),r([s({type:Number})],o.prototype,"maxRecordCount",void 0),r([s({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([s({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),r([s(se)],o.prototype,"popupEnabled",void 0),r([s({type:ie,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([s({types:le,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:ue,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),r([s(pe)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],o.prototype,"source",void 0),r([s({readOnly:!0,type:w,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),r([s({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),r([s({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),r([s({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),r([s({type:[be]})],o.prototype,"types",void 0),r([s(ne)],o.prototype,"url",void 0),o=r([D("esri.layers.OGCFeatureLayer")],o);const mt=o;export{mt as default};
