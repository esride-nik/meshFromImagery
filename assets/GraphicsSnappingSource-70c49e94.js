import{bA as v,y as c,h3 as m,cb as S,cd as w,ir as b,cn as k,br as E,C as F,is as y,eh as C,di as A,cy as P,a5 as a,a6 as l,a9 as $,iq as G,ac as I}from"./index-b516d057.js";import{t as H}from"./memoize-3e55df82.js";import{h as R}from"./UpdatingHandles-7949a657.js";import{a as O}from"./normalizeUtilsSync-7ead5aec.js";import{r as x}from"./featureConversionUtils-09cf00ff.js";import{t as z}from"./OptimizedFeature-e90b69df.js";import{m as Z}from"./FeatureStore-02a891a3.js";import{W as M}from"./QueryEngine-ee1ccbba.js";import{Z as L}from"./FieldsIndex-e8db657f.js";import{m as W}from"./elevationInfoUtils-be36d866.js";import{m as q,E as j}from"./snappingUtils-93e84fbe.js";import{a as J,o as N}from"./queryEngineUtils-3186d4e6.js";import{i as g,r as T,n as _}from"./symbologySnappingCandidates-ffc7ee52.js";import{I as D}from"./Scheduler-ff5943a4.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./BoundsStore-230a1891.js";import"./PooledRBush-fa11eac4.js";import"./quickselect-bc0541de.js";import"./optimizedFeatureQueryEngineAdapter-1fecea41.js";import"./WhereClause-41137be1.js";import"./TimeOnly-879c5107.js";import"./UnknownTimeZone-a05df022.js";import"./projectionSupport-dcf335fc.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-17105106.js";import"./utils-f54bcc46.js";import"./heatmapUtils-7f42325f.js";import"./utils-1a995f8e.js";import"./basemapUtils-6ec10a55.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./SnappingCandidate-970faec6.js";import"./dehydratedPoint-5a1dfed5.js";import"./Query-071039d7.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./screenUtils-8dc4a7f9.js";import"./signal-51ed66f5.js";import"./SnappingManager-aa70fdd4.js";import"./geometry2dUtils-a99dcf3d.js";import"./FeatureFilter-55dd341e.js";import"./floorFilterUtils-080a7cd2.js";import"./viewUtils-9f810d02.js";import"./VertexSnappingCandidate-bc4acb9f.js";import"./PointSnappingHint-671c9f09.js";import"./debugFlags-9a30f077.js";import"./RenderState-1d6218ee.js";const f="graphics-collections";let n=class extends v{get updating(){return this._updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="map-notes")return g();const o=async(r,s)=>(await G(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(r,s);return g(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:o})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d",o=this._extrudedPolygonSymbolsCount>0;return i&&t.type!=="map-notes"&&o?_(o,async(r,s)=>{const p=await e.whenLayerView(t);return c(s),p.queryForSymbologySnapping({candidates:r,spatialReference:e.spatialReference},s)}):_()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0,this._updatingHandles=new R,this._memoizedMakeGetGroundElevation=H(N)}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e)),this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),i=>{this._updatingHandles.removeHandles(f);for(const o of i)this._addMany(o.graphics.toArray()),this.addHandles([o.on("graphic-update",r=>this._onGraphicUpdate(r)),this._updatingHandles.addOnCollectionChange(()=>o.graphics,r=>this._onGraphicsChanged(r))],f)},m);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{W(i,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),S(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),m),w(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:i,coordinateHelper:{spatialReference:o}}=e,r=await b(this._mapSources(d=>this._fetchCandidatesForSource(d,e,t)));c(t);const s=this._memoizedMakeGetGroundElevation(this.view,o),p=r.flat().map(d=>J(d,s));return q(i,p),p}async _fetchCandidatesForSource(e,t,i){var u;const o=j(t,((u=this.view)==null?void 0:u.type)??"2d"),r=await e.queryEngine.executeQueryForSnapping(o,i);c(i);const s=await this._snappingElevationAligner.alignCandidates(r.candidates,t.coordinateHelper.spatialReference,i);c(i);const p=await this._symbologySnappingFetcher.fetch(s,i);c(i);const d=p.length===0?s:[...s,...p];return this._snappingElevationFilter.filter(o,d)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],i=new Map;for(const o of e)o.geometry!=null&&(this._needsInitializeProjection(o.geometry.spatialReference)?(t.push(o.geometry.spatialReference),i.set(o.uid,o)):this._add(o));this._createPendingAdd(t,i)}_createPendingAdd(e,t){if(!e.length)return;const i=k(async s=>{await E(e.map(p=>({source:p,dest:this.spatialReference})),{signal:s}),this._markLoadedSpatialReferences(e);for(const[,p]of t)this._add(p)});this._updatingHandles.addPromise(i.promise);const o={task:i,graphics:t},r=()=>I(this._pendingAdds,o);i.promise.then(r,r),this._pendingAdds.push(o)}_markLoadedSpatialReferences(e){for(const t of e){t.wkid!=null&&this._loadedWkids.add(t.wkid);const i=t.wkt2||t.wkt;i&&this._loadedWkts.add(i)}}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=F.fromExtent(t));const i=this._ensureSource(t.type);if(i==null)return;const o=this._createOptimizedFeature(e.uid,t);o!=null&&(i.featureStore.add(o),y(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){if(e.wkid!=null&&this._loadedWkids.has(e.wkid))return!1;const t=e.wkt2||e.wkt;return(!t||!this._loadedWkts.has(t))&&!C(e,this.spatialReference)}_createOptimizedFeature(e,t){const i=A(O(t),this.spatialReference);if(!i)return null;const o=this._ensureGeometryHasZ(i),r=x(o,this._hasZ,!1);return new z(r,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=o=>{for(;o.length<3;)o.push(0)},i=e.clone();switch(i.hasZ=!0,i.type){case"point":i.z=i.z??0;break;case"multipoint":i.points.forEach(t);break;case"polyline":i.paths.forEach(o=>o.forEach(t));break;case"polygon":i.rings.forEach(o=>o.forEach(t))}return i}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const i=this._createSource(e);return this._sources[e]=i,i}_createSource(e){const t=P.toJSON(e),i=this._hasZ,o=new Z({geometryType:t,hasZ:i,hasM:!1});return{featureStore:o,queryEngine:new M({featureStore:o,fieldsIndex:L.fromLayerJSON({fields:[{name:h,type:"esriFieldTypeOID",alias:h}]}),geometryType:t,hasM:!1,hasZ:i,objectIdField:h,spatialReference:this.spatialReference,priority:D.SNAPPING,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const i=t.uid;e.featureStore.has(i)&&(e.featureStore.removeById(t.uid),y(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:i,polyline:o,multipoint:r}=this._sources,s=[];return t!=null&&s.push(e(t)),i!=null&&s.push(e(i)),o!=null&&s.push(e(o)),r!=null&&s.push(e(r)),s}};a([l()],n.prototype,"getGraphicsLayers",void 0),a([l({constructOnly:!0})],n.prototype,"layerSource",void 0),a([l({constructOnly:!0})],n.prototype,"spatialReference",void 0),a([l({constructOnly:!0})],n.prototype,"view",void 0),a([l({readOnly:!0})],n.prototype,"updating",null),a([l({readOnly:!0})],n.prototype,"availability",void 0),a([l()],n.prototype,"_hasZ",null),a([l()],n.prototype,"_snappingElevationAligner",null),a([l()],n.prototype,"_snappingElevationFilter",null),a([l()],n.prototype,"_symbologySnappingFetcher",null),a([l()],n.prototype,"_extrudedPolygonSymbolsCount",void 0),n=a([$("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],n);const h="OBJECTID";export{n as GraphicsSnappingSource};