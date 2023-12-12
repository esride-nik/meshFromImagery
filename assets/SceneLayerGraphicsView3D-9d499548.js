import{bg as V,lO as R,b9 as y,h3 as N,cb as H,_ as q,ci as Q,an as w,cF as D,kE as F,lP as U,f6 as T,lQ as z,lR as k,eH as G,cB as B,ji as W,a5 as c,a6 as m,a9 as Z,aW as K,jp as Y}from"./index-b516d057.js";import{t as X}from"./projectVectorToVector-56c29b20.js";import{o as J}from"./LayerConstants-d3ac1b7a.js";import{j as ee}from"./dehydratedFeatures-2a3f0608.js";import{e as te}from"./dehydratedPoint-5a1dfed5.js";import{c as re}from"./hydratedFeatures-2365c307.js";import{S,e as ie}from"./I3SOverrides-a9f31f33.js";import{d as oe}from"./FeatureFilter-55dd341e.js";import{b as A}from"./Query-071039d7.js";import{S as se}from"./basemapUtils-6ec10a55.js";import{h as ae}from"./WorkerHandle-9433ab9a.js";import{n as ne}from"./LayerView3D-c03d44fc.js";import{P as de,l as le}from"./FeatureLikeLayerView3D-88097627.js";import{j as he,c as pe,i as ue,u as ce,f as me,a as ge}from"./SceneLayerView-5ec175b3.js";import{h as _e,y as fe,$ as ye,t as be,c as L}from"./I3SUtil-1c5e04a1.js";import{t as ve}from"./DefinitionExpressionSceneLayerView-8a0da2cd.js";import{i as xe}from"./PopupSceneLayerView-3bc58223.js";import{a as O}from"./DefaultTechniqueConfiguration-b4dbe32f.js";import{L as Ee}from"./orientedBoundingBox-67c5cd22.js";import{W as Ie}from"./SceneView-123ac862.js";import{C as we}from"./RenderGeometry-5dbc1699.js";import{u as Ne}from"./popupUtils-e4ebc84a.js";import{I as Oe}from"./Scheduler-ff5943a4.js";import"./quantizationUtils-17105106.js";import"./ElevationQuery-a3eaf0a0.js";import"./vec2f32-eaf29605.js";import"./InterleavedLayout-d76b0d59.js";import"./types-1305598a.js";import"./Material-5f4156ac.js";import"./interfaces-8918b36f.js";import"./ViewingMode-5d7d590b.js";import"./ColorMaterial-bdf1f62a.js";import"./VerticalOffset.glsl-5743f98e.js";import"./OrderIndependentTransparency-755f7dcc.js";import"./enums-bdecffa2.js";import"./ShaderTechniqueConfiguration-2502462e.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./edgeUtils-6e4a97fb.js";import"./SnappingCandidate-970faec6.js";import"./ElevationProvider-abb53936.js";import"./objectResourceUtils-003803db.js";import"./devEnvironmentUtils-4eab2a99.js";import"./DefaultMaterial_COLOR_GAMMA-101ea40c.js";import"./Version-1f969b2a.js";import"./resourceUtils-1d03d2fe.js";import"./mat3f32-6c416b1c.js";import"./NestedMap-1b5db22e.js";import"./requestImageUtils-b142708c.js";import"./verticalOffsetUtils-e5214af9.js";import"./symbolColorUtils-3ca646c8.js";import"./RenderState-1d6218ee.js";import"./Texture-bcb6d63f.js";import"./contextUtils-81fda295.js";import"./callExpressionWithFeature-36423058.js";import"./lineStippleUtils-0688e06c.js";import"./projectVectorToDehydratedPoint-e30a7ff8.js";import"./interfaces-1a80c8eb.js";import"./frustum-f9d53cdf.js";import"./webStyleSymbolUtils-4761c8f2.js";import"./glUtil-ce5ee52b.js";import"./VertexElementDescriptor-2925c6af.js";import"./Intersector-fa865806.js";import"./boundedPlane-1da2f094.js";import"./Octree-7cea9440.js";import"./FramebufferObject-123b7c8d.js";import"./Intersector-a291e778.js";import"./fontUtils-56b88a2f.js";import"./uuid-709b6c67.js";import"./I3SNode-81f8301c.js";import"./I3SBinaryReader-e72af7de.js";import"./layerViewUtils-6ebe90f4.js";import"./ReactiveSet-7afb73d5.js";import"./featureQueryAll-40af0622.js";import"./meshFeatureSet-8aa95dd7.js";import"./FeatureLayerView3D-08fb50ad.js";import"./FeatureLayerViewBase3D-6a7790b6.js";import"./query-351887b5.js";import"./pbfQueryUtils-b37a842c.js";import"./pbf-2651fe50.js";import"./queryZScale-d7a48772.js";import"./EventedSet-680e6831.js";import"./FeatureLayerView-7680760d.js";import"./FeatureEffect-c80bb16d.js";import"./floorFilterUtils-080a7cd2.js";import"./LayerView-060b46d4.js";import"./UpdatingHandles-7949a657.js";import"./RefreshableLayerView-4a86a8ac.js";import"./geometryServiceUtils-3e048225.js";import"./project-1bd91657.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./dehydratedFeatureComparison-7855b188.js";import"./Viewpoint-f83262d0.js";import"./Cyclical-4c223a04.js";import"./jsxFactory-92036771.js";import"./HeightModelInfo-b816d32b.js";import"./vec3f32-bac7ea57.js";import"./weather-2eb64924.js";import"./VertexArrayObject-d19dab8d.js";import"./floatRGBA-ca990bbb.js";import"./Intersector-2e1d9db3.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./coordinateSystem-38339d17.js";import"./scaleUtils-72744379.js";import"./DefaultUI-af7068c2.js";import"./screenUtils-8dc4a7f9.js";import"./Map-1ad4186f.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Ground-ed93a93a.js";import"./CollectionFlattener-193451da.js";import"./editableLayers-856f2cb4.js";import"./TablesMixin-292d1d89.js";import"./IViewEvents-9a85f53d.js";import"./interfaces-0421c5e6.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./mat2d-d4af8487.js";import"./mat2df32-fb26a8c9.js";import"./mat2df64-4d1a9198.js";import"./capabilities-9d56a1da.js";import"./themeUtils-7dcf5b71.js";import"./globalCss-94006b67.js";import"./accessibleHandler-e91101b2.js";import"./Compass-b37d7d1d.js";import"./GoTo-4d856ce0.js";import"./NavigationToggle-57c00adb.js";import"./Zoom-73b5f25a.js";import"./resources-d4afed0c.js";import"./viewpointUtils-245ed782.js";import"./projectPointToVectorWithEngine-f608a34a.js";import"./projectVectorToPoint-fbaf5599.js";import"./earthUtils-ef4b5643.js";import"./spatialReferenceSupport-5aeb751c.js";import"./ElevationSamplerData-9f34f589.js";import"./terrainUtils-b6b761ab.js";import"./Environment-91bfea7d.js";import"./projectPointToWGS84ComparableLonLat-1ba40d40.js";import"./projectVectorToWGS84ComparableLonLat-5675a9f4.js";import"./ShadowCastVisualizeTechniqueConfiguration-4fcc4e25.js";import"./ray-8da55042.js";import"./ZoomMomentumEstimator-7437d26a.js";import"./labelFormatUtils-d440367f.js";import"./labelUtils-b29175f3.js";import"./FeatureTileDescriptor3D-27dbeac7.js";import"./RenderCoordsHelper-8f237859.js";import"./intersectorUtilsConversions-d05d75a3.js";import"./LercDecoder-b49c0e9c.js";import"./RenderableTile-52f61d09.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-e7d105ae.js";import"./DisplayObject-9a6e3923.js";import"./TileKey-4b1303ff.js";import"./rasterUtils-15abcc11.js";import"./TileInfoView-ce4d65fb.js";import"./TileStrategy-a729431f.js";import"./QueueProcessor-4b9d43d3.js";import"./StyleDefinition-29c49b98.js";import"./enums-f1a6a48a.js";import"./edgeProcessing-82213448.js";import"./resources-15104e7a.js";import"./EdgeWorkerHandle-7d97defa.js";import"./workerHelper-d1cc0cda.js";import"./testSVGPremultipliedAlpha-f5e92e14.js";import"./DefaultVertexAttributeLayouts-8962d8eb.js";import"./RenderingContext-c0ea7a49.js";import"./ProgramCache-891c4b8d.js";import"./Program-96bc94ed.js";import"./hitTestSelectUtils-d512707e.js";import"./queryForSymbologySnapping-caae9522.js";import"./elevationInfoUtils-be36d866.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-511adea3.js";import"./jsonUtils-52514725.js";import"./DictionaryLoader-e327eff9.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./rendererConversion-b2429202.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";import"./optimizedFeatureQueryEngineAdapter-1fecea41.js";import"./PooledRBush-fa11eac4.js";import"./quickselect-bc0541de.js";import"./QueryEngine-ee1ccbba.js";import"./WhereClause-41137be1.js";import"./TimeOnly-879c5107.js";import"./projectionSupport-dcf335fc.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./utils-f54bcc46.js";import"./utils-1a995f8e.js";import"./FeatureStore-02a891a3.js";import"./BoundsStore-230a1891.js";import"./heatmapTextureUtils-6877589a.js";import"./projectExtentUtils-15e84132.js";class P extends ae{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class Ce extends V{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const o=new Set;for(let a=0;a<r.length;a++){const n=r[a],d=n.objectId,h=this._graphics.get(d);if(h){o.add(d),n!==h&&(r[a]=h);const p=this._duplicates.get(d);p?p.push(t):this._duplicates.set(d,[h.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(d,n)}o.size&&this._updateForeignGraphics(i);const s=o.size>0?r.filter(a=>!o.has(a.objectId)):r;s.length>0&&this.emit("change",{added:s,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return void console.error("Removing unknown node");this._nodes.delete(t);const r=new Set,o=[];for(const s of i.graphics){const a=s.objectId,n=this._graphics.get(a);if(!n)continue;const d=this._duplicates.get(a);if(d){const h=d.indexOf(t);if(h===-1){console.error("error: removing graphic from node that should not reference it.");continue}if(d.splice(h,1),n.nodeIndex===t){let p=this.getNode(d[0]);for(let l=1;l<d.length;l++){const g=this.getNode(d[l]);(p==null||g!=null&&g.node.level>p.node.level)&&(p=g)}p!=null&&r.add(p)}d.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),o.push(s)}o.length>0&&this.emit("change",{added:[],removed:o}),r.forEach(s=>this._updateForeignGraphics(s))}_updateForeignGraphics(t){const i=[],r=t.node.index,o=t.node.level;let s=0;for(;s<t.graphics.length;){const a=t.graphics[s].nodeIndex;if(a===r){s++;continue}let n=1;for(;s+n<t.graphics.length&&t.graphics[s+n].nodeIndex===a;)n++;const d=this.getNode(a);if(d!=null&&d.node.level>o)s+=n;else{for(let h=s;h<s+n;h++){const p=t.graphics[h];p.nodeIndex=r,this._updateAndCompare(p,t,h)&&i.push(p)}s+=n}}this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){let i;return R(this._graphics,r=>!!t(r)&&(i=r,!0)),i}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((r,o)=>{o!==r.node.index&&console.error("Mismatched node index"),r.graphics.forEach(s=>{t.set(s.objectId,1+(t.get(s.objectId)??0));const a=this._duplicates.get(s.objectId);a&&!a.includes(o)&&console.error("Node not listed in duplicate list"),a||s.nodeIndex===o||console.error("Unique graphic does not reference owning node index")})}),this._graphics.size!==t.size&&console.error("Mismatch between actual and expected number of graphics");let i=0;t.forEach((r,o)=>{i+=r>1?1:0;const s=this._graphics.get(o);if(!s)return void console.error("Missing graphic entry");const a=this._nodes.get(s.nodeIndex);if(!a)return void console.error("Graphic references unkown node");const n=this._duplicates.get(o);n?(n.length!==r&&console.error("Wrong number of entries in duplicate list"),n.forEach(d=>{const h=this._nodes.get(d);h?h.node.level>a.node.level&&console.error("Duplicated graphic does not reference highest level node"):console.error("Unknown node in duplicate list")})):r>1&&console.error("Missing duplicates entry")}),this._duplicates.size!==i&&console.error("Mismatch between expected and actual number of duplicate entries")}}const M=ge();class De{constructor(t,i,r,o){this.graphics=t,this.featureIds=i,this.attributeInfo=r,this.node=o}}let u=class extends ve(xe(ne(he))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new Ce((e,t,i)=>Ge(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;_e(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new S({view:this.view,layer:e,memoryController:i}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new S({view:this.view,layer:this.layer,memoryController:e}),fe(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new pe({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),N),this._updatingHandles.add(()=>this.layer.renderer,(r,o)=>this._rendererChange(r,o)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(H(()=>O.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const o=this._controller.crsIndex;q(()=>import("./I3STreeDebugger-be19074b.js"),["assets/I3STreeDebugger-be19074b.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/TileTreeDebugger-7b374a11.js"]).then(({I3STreeDebugger:s})=>{!this._treeDebugger&&O.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new s({lv:this,view:this.view,nodeSR:o}))})}else r||!this._treeDebugger||O.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new de({owner:this,preferredUpdatePolicy:we.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",r=>this._controller.updateElevationChanged(r.extent,r.spatialReference)),this.supportsHeightUnitConversion&&(this._verticalScale=Q("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.initializePromise),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new ie({layerView:this,scaleVisibilityEnabled:!1}),ye(this.layer.geometryDefinitions)&&(this._worker=new P(r=>this.view.resourceController.immediate.schedule(r))),this.addHandles(this.layer.on("apply-edits",r=>this._updatingHandles.addPromise(r.result))),this.addHandles(this.layer.on("edits",r=>{const o=this._pendingEditsQueue.then(()=>this._handleEdits(r)).then();this._pendingEditsQueue=o,this._updatingHandles.addPromise(o)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,N),this._updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.rootNodeVisible)}get legendEnabled(){var e;return this.contentVisible&&((e=this.i3slayer)==null?void 0:e.legendEnabled)===!0}async whenGraphicAttributes(e,t){return be(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){var r;if(!this.loadedGraphics)return null;const t=re(this.loadedGraphics.find(o=>o.uid===e),this.layer),i=this._getObjectIdField();return(r=t==null?void 0:t.attributes)!=null&&r[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e){return this.processor.highlight(e,this.layer.objectIdField)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return ue(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};this._worker==null&&(this._worker=new P(o=>this.view.resourceController.immediate.schedule(o)));const r=await this._worker.invoke(i,t);if(r==null)throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){var f;if(!C(t)&&!Fe(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void w.getLogger(this).error("I3S node "+e.id+" already added");const r=this.layer.fullExtent!=null?Se(this.layer.fullExtent.clone(),.5):null,o=[],{featureIds:s,pointPositions:a}=C(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t);this._validatePositions(e,s,a,r,o);const n=this._controller.crsVertex,d=this.view.spatialReference;D(a,n,0,a,d,0,s.length);const h=C(t)?e.level:0,p=this._createGraphics(s,a,e.index,h),l=new De(p,s,t.attributeDataInfo,e);if(await this._i3sOverrides.applyAttributeOverrides(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),$(l),o.length>0&&(this._computeObb(e,o,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(l);if(this._verticalScale!=null)for(const b of l.graphics)this._verticalScale(b.geometry);const g=this.view._stage.renderView.objectAndLayerIdRenderHelper;if(g!=null){const b=se(this.view.map,this.layer.uid);for(let x=0;x<l.featureIds.length;x++){const I=l.featureIds[x];g.setUidToObjectAndLayerId(I,l.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!b&&Ne(this.layer,(f=this.view.popup)==null?void 0:f.defaultPopupTemplateEnabled),l.node.resources.attributes,x)}}this.loadedGraphics.addNode(e.index,l),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,o=r.isGeographic?this.view.renderSpatialReference:r;D(t,i,0,t,o,0,t.length/3),e.serviceObb=Ee(new Y(t,3)),r.isGeographic&&X(e.serviceObb.center,o,e.serviceObb.center,r)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),o=r.positionData,s=3,a=o.length/s,n=F(3*a),d=e.serviceObb!=null?e.serviceObb.center:[0,0,0],h=Math.abs(d[2])*2**-20;for(let p=0;p<a;p++){const l=p*s;n[l]=o[l]+d[0],n[l+1]=o[l+1]+d[1],n[l+2]=o[l+2]+d[2],Math.abs(n[l+2])<h&&(n[l+2]=0)}return{featureIds:r.featureIds?U(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var o,s;const t=e.pointData.length,i=F(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],d=n.featureDataPosition,h=d.length,p=((o=n.geometries)==null?void 0:o[0])??Ae[h],l=n.featureIds[0];if(p.type!=="Embedded"||p.params.type!=="points"||h<2||h>3)continue;const g=((s=p.params.vertexAttributes)==null?void 0:s.position)??[0,0,0],f=3*r.length;i[f]=d[0]+g[0],i[f+1]=d[1]+g[1],i[f+2]=h===3?d[2]+g[2]:NaN,r.push(l)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,o){if(r==null&&e.serviceObb)return;const s=t.length,a=3;for(let n=0;n<s;n++){const d=n*a;T(E,i[d],i[d+1],i[d+2]);const h=!Number.isNaN(i[2]);r==null||(h?z(r,E):k(r,E))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObb||o.push(E[0],E[1],E[2])}}_createGraphics(e,t,i,r){const o=e.length,s=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,d=new Array,h=this.view.spatialReference;for(let p=0;p<o;p++){const l=e[p],g={};l!=null&&(g[a]=l);const f=l??G.generateUID(),b=p*s,x=isNaN(t[b+2])?void 0:t[b+2],I=te(t[b],t[b+1],x,h),v=this.loadedGraphics.get(f);if(v!=null)(v.level==null||v.level<r)&&(_.property="geometry",_.graphic=v,_.oldValue=v.geometry,_.newValue=I,v.geometry=I,v.level=r,n.graphicUpdateHandler(_)),d.push(v);else{const j=G.generateUID();d.push({objectId:f,uid:j,geometry:I,attributes:g,visible:!0,nodeIndex:i,level:r})}}return d}_updateNodeMemory(e){e.memory=4096+(e.numFeatures!=null?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>ee(r)+i,B(e.featureIds)+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return t==null?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?w.getLogger(this).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(t.featureIds,i,r),this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),t.attributeInfo=i,this._attributeValuesChanged(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);(i==null?void 0:i.attributeInfo)!=null&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);r!=null&&(await this._i3sOverrides.applyAttributeOverrides(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){if($(e),this._filterNode(e),this.processor.graphicsCore.labelsEnabled){const t=e.graphics.map(i=>i.uid);this.processor.graphicsCore.updateLabelingInfo(t)}}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||J}_getGlobalIdField(){var e;return(e=this.layer.associatedLayer)==null?void 0:e.globalIdField}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let o,s;e?(await e.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],r.clear(),t?(await t.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],o.length===s.length&&o.every((a,n)=>o[n]===s[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&w.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const o of e.graphics){const s=o.visible,a=!t||this._evaluateClause(t,o),n=i==null||W(i,o.attributes[r])<0;o.visible=a&&n,s!==o.visible&&(_.graphic=o,_.property="visible",_.oldValue=s,_.newValue=o.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new A(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():A.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new le({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:Oe.FEATURE_QUERY_ENGINE})}get usedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}get unloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(e){const t=this._attributeEditingContext,i=await ce(t,e);me(t,i)}get _attributeEditingContext(){const e=this._getObjectIdField(),t=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,globalIdField:t,forEachNode:i=>this.loadedGraphics.forEachNode(r=>i(r.node,r.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:i=>this.getAttributeData(i),setAttributeData:(i,r,o)=>{this._setAttributeData(i,r);const s=this.loadedGraphics.getNode(i);if(o!=null){const a=this.loadedGraphics.get(o.attributes[e]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else s!=null&&this.processor.graphicsCore.recreateGraphics(s.graphics)},clearMemCache:()=>{}}}get performanceInfo(){const e={displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:this.maximumNumberOfFeatures,totalNumberOfFeatures:-1,nodes:this.loadedGraphics.nodeCount,core:this.processor.graphicsCore.performanceInfo};return this._controller&&this._controller.updateStats(e),e}get test(){return{controller:this._controller,numNodes:this.loadedGraphics.nodeCount,loadedGraphics:this.loadedGraphics}}};c([m()],u.prototype,"processor",void 0),c([m({type:oe})],u.prototype,"filter",void 0),c([m()],u.prototype,"loadedGraphics",void 0),c([m()],u.prototype,"i3slayer",null),c([m()],u.prototype,"_controller",void 0),c([m()],u.prototype,"updating",void 0),c([m()],u.prototype,"suspended",void 0),c([m()],u.prototype,"holeFilling",void 0),c([m(Ie)],u.prototype,"updatingProgress",void 0),c([m()],u.prototype,"updatingProgressValue",null),c([m(M.requiredFields)],u.prototype,"requiredFields",null),c([m(M.availableFields)],u.prototype,"availableFields",void 0),c([m()],u.prototype,"_fieldsHelper",void 0),c([m({type:Number})],u.prototype,"maximumNumberOfFeatures",null),c([m({readOnly:!0})],u.prototype,"maximumNumberOfFeaturesExceeded",null),c([m()],u.prototype,"_excludeObjectIdsSorted",null),c([m({readOnly:!0})],u.prototype,"lodFactor",null),c([m({readOnly:!0})],u.prototype,"hasM",null),c([m({readOnly:!0})],u.prototype,"hasZ",null),c([m()],u.prototype,"contentVisible",null),c([m({readOnly:!0})],u.prototype,"legendEnabled",null),u=c([Z("esri.views.3d.layers.SceneLayerGraphicsView3D")],u);const vo=u;function Fe(e){return"pointData"in e}function C(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Ge(e,t,i){const r=t.attributeInfo;if((r==null?void 0:r.loadedAttributes)==null||r.attributeData==null)return!1;let o=!1;for(const{name:s}of r.loadedAttributes)if(r.attributeData[s]){const a=L(r.attributeData[s],i);a!==e.attributes[s]&&(e.attributes[s]=a,o=!0)}return o}function $(e){const t=e.attributeInfo,i=e.node.index;if((t==null?void 0:t.loadedAttributes)!=null&&t.attributeData!=null)for(let r=0;r<e.graphics.length;r++){const o=e.graphics[r];if(o.nodeIndex===i){o.attributes||(o.attributes={});for(const{name:s}of t.loadedAttributes)t.attributeData[s]&&(o.attributes[s]=L(t.attributeData[s],r))}}}function Se(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const Ae={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},E=K(),_={graphic:null,property:null,oldValue:null,newValue:null};export{vo as default};