import{s as h,y,aH as g,cn as _,al as d,an as F,bm as w}from"./index-b516d057.js";import{r as S,s as E}from"./featureConversionUtils-09cf00ff.js";import{m as q}from"./FeatureStore-02a891a3.js";import{x,j as T}from"./projectionSupport-dcf335fc.js";import{W as R}from"./QueryEngine-ee1ccbba.js";import{E as I,N as b}from"./geojson-573ee405.js";import{p as j}from"./sourceUtils-34e7b477.js";import{a as C,B as $}from"./wfsUtils-b983817c.js";import{Z as k}from"./FieldsIndex-e8db657f.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./BoundsStore-230a1891.js";import"./PooledRBush-fa11eac4.js";import"./quickselect-bc0541de.js";import"./optimizedFeatureQueryEngineAdapter-1fecea41.js";import"./json-48e3ea08.js";import"./WhereClause-41137be1.js";import"./TimeOnly-879c5107.js";import"./UnknownTimeZone-a05df022.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-17105106.js";import"./utils-f54bcc46.js";import"./heatmapUtils-7f42325f.js";import"./utils-1a995f8e.js";import"./basemapUtils-6ec10a55.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./SnappingCandidate-970faec6.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./RenderState-1d6218ee.js";import"./date-294ce3fb.js";import"./xmlUtils-444cb4c0.js";class ge{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:r,getFeatureOutputFormat:u,fields:n,geometryType:i,featureType:o,objectIdField:p,customParameters:a}=e,{spatialReference:s,getFeatureSpatialReference:m}=C(r,o,e.spatialReference);this._featureType=o,this._customParameters=a,this._getFeatureUrl=r,this._getFeatureOutputFormat=u,this._getFeatureSpatialReference=m;try{await x(m,s)}catch{throw new h("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:s})}y(t);const l=k.fromLayerJSON({fields:n,dateFieldsTimeReference:n.some(f=>f.type==="esriFieldTypeDate")?{timeZoneIANA:g}:null}),c=await this._snapshotFeatures({fieldsIndex:l,geometryType:i,objectIdField:p,spatialReference:s},t.signal);return this._queryEngine=new R({fieldsIndex:l,geometryType:i,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:s,timeInfo:null,featureStore:new q({geometryType:i,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new h("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=_(r=>this._snapshotFeatures(this._queryEngine,r)),this._snapshotTask.promise.then(r=>{this._queryEngine.featureStore.clear(),r&&this._queryEngine.featureStore.addMany(r)},r=>{this._queryEngine.featureStore.clear(),d(r)||F.getLogger("esri.layers.WFSLayer").error(new h("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:e,geometryType:t,spatialReference:r,fieldsIndex:u},n){const i=await $(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:n});I(i,this._getFeatureSpatialReference.wkid),y(n);const o=b(i,{geometryType:t,hasZ:!1,objectIdField:e});if(!w(r,this._getFeatureSpatialReference))for(const a of o)a.geometry!=null&&(a.geometry=S(T(E(a.geometry,t,!1,!1),this._getFeatureSpatialReference,r)));let p=1;for(const a of o){const s={};j(u,s,a.attributes,!0),a.attributes=s,s[e]==null&&(a.objectId=s[e]=p++)}return o}}export{ge as default};
