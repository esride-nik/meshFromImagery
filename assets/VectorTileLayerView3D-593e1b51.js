import{y as N,bj as V,nd as A,g3 as k,k as $,s as U,gs as F,cb as G,dr as W,gt as j,gj as Z,b9 as H,a5 as d,a6 as u,a9 as K}from"./index-b516d057.js";import{t as Y}from"./mat3f32-6c416b1c.js";import{i as Q,e as J,l as X,u as tt,t as et}from"./TileInfoViewPOT-2edba27b.js";import{i as it,s as rt,d as ot}from"./RenderableTile-52f61d09.js";import{i as L,a as g}from"./StyleDefinition-29c49b98.js";import{e as st}from"./TileKey-4b1303ff.js";import{_ as lt,d as at,f as nt,o as mt,a as pt}from"./WGLBrushVTLSymbol-00207292.js";import{o as ht}from"./VTLMaterialManager-5138ba61.js";import{O as ct,R as b}from"./enums-bdecffa2.js";import{l as P}from"./StyleRepository-00d8a116.js";import{n as dt}from"./LayerView3D-c03d44fc.js";import{o as ut}from"./TiledLayerView3D-14f64d5b.js";import{k as gt,M as yt}from"./terrainUtils-b6b761ab.js";import{u as ft}from"./LayerView-060b46d4.js";import"./Rect-ea14f53a.js";import"./Texture-bcb6d63f.js";import"./contextUtils-81fda295.js";import"./pbf-2651fe50.js";import"./rasterizingUtils-364392eb.js";import"./floatRGBA-ca990bbb.js";import"./config-1337d16e.js";import"./TileInfoView-ce4d65fb.js";import"./enums-fb086c25.js";import"./FramebufferObject-123b7c8d.js";import"./VertexArrayObject-d19dab8d.js";import"./TiledDisplayObject-e7d105ae.js";import"./DisplayObject-9a6e3923.js";import"./enums-f1a6a48a.js";import"./vec4f32-0d1b2306.js";import"./definitions-5366d472.js";import"./enums-b1d611e3.js";import"./number-e491b09e.js";import"./vec2f32-eaf29605.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./programUtils-f035fe8a.js";import"./VertexElementDescriptor-2925c6af.js";import"./GeometryUtils-984e8446.js";import"./unitBezier-881ac1eb.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./HeightModelInfo-b816d32b.js";import"./SceneView-123ac862.js";import"./Viewpoint-f83262d0.js";import"./Cyclical-4c223a04.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./ElevationQuery-a3eaf0a0.js";import"./RenderGeometry-5dbc1699.js";import"./vec3f32-bac7ea57.js";import"./DefaultTechniqueConfiguration-b4dbe32f.js";import"./requestImageUtils-b142708c.js";import"./interfaces-8918b36f.js";import"./Material-5f4156ac.js";import"./ViewingMode-5d7d590b.js";import"./ShaderTechniqueConfiguration-2502462e.js";import"./ElevationProvider-abb53936.js";import"./dehydratedPoint-5a1dfed5.js";import"./hydratedFeatures-2365c307.js";import"./weather-2eb64924.js";import"./RenderState-1d6218ee.js";import"./NestedMap-1b5db22e.js";import"./frustum-f9d53cdf.js";import"./Octree-7cea9440.js";import"./InterleavedLayout-d76b0d59.js";import"./types-1305598a.js";import"./OrderIndependentTransparency-755f7dcc.js";import"./Intersector-2e1d9db3.js";import"./Intersector-fa865806.js";import"./boundedPlane-1da2f094.js";import"./verticalOffsetUtils-e5214af9.js";import"./orientedBoundingBox-67c5cd22.js";import"./glUtil-ce5ee52b.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./ColorMaterial-bdf1f62a.js";import"./VerticalOffset.glsl-5743f98e.js";import"./dehydratedFeatures-2a3f0608.js";import"./quantizationUtils-17105106.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./edgeUtils-6e4a97fb.js";import"./SnappingCandidate-970faec6.js";import"./objectResourceUtils-003803db.js";import"./devEnvironmentUtils-4eab2a99.js";import"./DefaultMaterial_COLOR_GAMMA-101ea40c.js";import"./Version-1f969b2a.js";import"./resourceUtils-1d03d2fe.js";import"./symbolColorUtils-3ca646c8.js";import"./callExpressionWithFeature-36423058.js";import"./lineStippleUtils-0688e06c.js";import"./projectVectorToDehydratedPoint-e30a7ff8.js";import"./interfaces-1a80c8eb.js";import"./webStyleSymbolUtils-4761c8f2.js";import"./Intersector-a291e778.js";import"./fontUtils-56b88a2f.js";import"./projectVectorToVector-56c29b20.js";import"./coordinateSystem-38339d17.js";import"./scaleUtils-72744379.js";import"./LayerConstants-d3ac1b7a.js";import"./DefaultUI-af7068c2.js";import"./UpdatingHandles-7949a657.js";import"./screenUtils-8dc4a7f9.js";import"./Map-1ad4186f.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Ground-ed93a93a.js";import"./CollectionFlattener-193451da.js";import"./editableLayers-856f2cb4.js";import"./basemapUtils-6ec10a55.js";import"./TablesMixin-292d1d89.js";import"./IViewEvents-9a85f53d.js";import"./interfaces-0421c5e6.js";import"./mat2d-d4af8487.js";import"./mat2df32-fb26a8c9.js";import"./mat2df64-4d1a9198.js";import"./capabilities-9d56a1da.js";import"./themeUtils-7dcf5b71.js";import"./globalCss-94006b67.js";import"./accessibleHandler-e91101b2.js";import"./Compass-b37d7d1d.js";import"./GoTo-4d856ce0.js";import"./NavigationToggle-57c00adb.js";import"./Zoom-73b5f25a.js";import"./resources-d4afed0c.js";import"./viewpointUtils-245ed782.js";import"./projectPointToVectorWithEngine-f608a34a.js";import"./projectVectorToPoint-fbaf5599.js";import"./earthUtils-ef4b5643.js";import"./spatialReferenceSupport-5aeb751c.js";import"./ElevationSamplerData-9f34f589.js";import"./Environment-91bfea7d.js";import"./projectPointToWGS84ComparableLonLat-1ba40d40.js";import"./projectVectorToWGS84ComparableLonLat-5675a9f4.js";import"./ShadowCastVisualizeTechniqueConfiguration-4fcc4e25.js";import"./ray-8da55042.js";import"./ZoomMomentumEstimator-7437d26a.js";import"./labelFormatUtils-d440367f.js";import"./labelUtils-b29175f3.js";import"./FeatureTileDescriptor3D-27dbeac7.js";import"./geometryServiceUtils-3e048225.js";import"./project-1bd91657.js";import"./RenderCoordsHelper-8f237859.js";import"./intersectorUtilsConversions-d05d75a3.js";import"./LercDecoder-b49c0e9c.js";import"./WorkerHandle-9433ab9a.js";import"./rasterUtils-15abcc11.js";import"./TileStrategy-a729431f.js";import"./QueueProcessor-4b9d43d3.js";import"./edgeProcessing-82213448.js";import"./resources-15104e7a.js";import"./EdgeWorkerHandle-7d97defa.js";import"./workerHelper-d1cc0cda.js";import"./testSVGPremultipliedAlpha-f5e92e14.js";import"./DefaultVertexAttributeLayouts-8962d8eb.js";import"./RenderingContext-c0ea7a49.js";import"./ProgramCache-891c4b8d.js";import"./Program-96bc94ed.js";import"./hitTestSelectUtils-d512707e.js";import"./layerViewUtils-6ebe90f4.js";class _t{constructor(t,e,r){this._scale=t,this._shift=e,this._levelShift=r}getLevelRowColumn(t){const e=this.getLevelShift(t[0]),r=this._shift+e;return r?[t[0]-e,t[1]>>r,t[2]>>r]:t}getLevelShift(t){return Math.min(t,this._levelShift)}getOffset(t,e){let r=0,s=0;const o=this._shift+this.getLevelShift(t[0]);if(o){const i=(1<<o)-1,l=e/(this._scale*(1<<o-1));r=(t[2]&i)*l,s=(t[1]&i)*l}return[r,s]}getScale(t){return this._scale*(1<<this._shift+this.getLevelShift(t))}}function vt(a){const t=[],e=new Q(4096,t,()=>{const s=new rt;return s.show=!1,s.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),s.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),s}),r=new J(t,e,(s,o,i)=>new X(s,o,i,a.styleRepository,a.key.level,0),(s,o)=>{it(s,o,!1)},()=>0,s=>{const o=a.styleRepository.getStyleLayerByUID(s).getLayoutProperty("visibility");return!o||o.getValue()!==L.NONE});t.push(a),e.add(a),r.setScreenSize(512,512),r.continue(1/0)}class D extends tt{constructor(t,e,r,s){super(t,e,r),this._memCache=s,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new et(t.tileInfo,t.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(t=>t.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(t,e,r,s){const o=new st(t,e,r,0);let i=this._memCache.get(o.id);if(i!=null)return i.retain(),i;const l=await this._getVectorTileData(o);if(N(s),!this._layer)return null;if(i=this._memCache.get(o.id),i!=null)return i.retain(),i;const n=this._layer.tileInfo.getTileBounds(V(),o),h=this._tileInfoView.getTileResolution(t);return i=new ot(o,h,n[0],n[3],512,512,this._styleRepository,this._memCache),l?(i.setData(l),i.retain(),this._memCache.put(o.id,i,i.memoryUsed,A)):i.setData(null),i.neededForCoverage=!0,i.transforms.tileUnitsToPixels=Y(1/8,0,0,0,1/8,0,0,0,1),vt(i),i}_getVectorTileData(t){const e=t.id;if(this._ongoingTileRequests.has(e))return this._ongoingTileRequests.get(e);const r=new AbortController,s={signal:r.signal},o=this._getParsedVectorTileData(t,s).then(i=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),i)).catch(()=>(this._ongoingTileRequests.delete(e),this._ongoingRequestToController.delete(e),null));return this._ongoingTileRequests.set(e,o),this._ongoingRequestToController.set(e,r),o}_getParsedVectorTileData(t,e){return this.fetchTileData(t,e).then(r=>this.parseTileData({key:t,data:r},e))}}const Ct={vtlBackground:lt,vtlFill:at,vtlLine:nt,vtlCircle:mt,vtlSymbol:pt},_=1e-6;class O{constructor(t,e){this.spriteMosaic=t,this.glyphMosaic=e,this._brushCache=new Map,this._vtlMaterialManager=new ht}dispose(){this._brushCache&&(this._brushCache.forEach(t=>t.dispose()),this._brushCache=null),this._vtlMaterialManager=k(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(t,e,r){const s=r.layers;t.renderPass="translucent";for(let o=0;o<s.length;o++){const i=s[o];if(i.type!==g.SYMBOL)continue;const l=i.getLayoutProperty("visibility");if(l&&l.getValue()===L.NONE)continue;const n=t.displayLevel;i.minzoom!==void 0&&i.minzoom>n+_||i.maxzoom!==void 0&&i.maxzoom<=n-_||(t.styleLayerUID=i.uid,t.styleLayer=i,this._drawWithBrush(t,e,"vtlSymbol"))}}drawBackground(t,e,r){if(r.backgroundBucketIds.length===0)return;const{context:s,displayLevel:o,requiredLevel:i}=t;e.key.level=i,s.setBlendingEnabled(!0),s.setDepthTestEnabled(!1),s.setStencilTestEnabled(!1),t.renderPass="background",r.backgroundBucketIds.forEach(l=>{const n=r.getLayerById(l);if(n.type!==g.BACKGROUND)return;const h=n.getLayoutProperty("visibility");h&&h.getValue()===L.NONE||n.minzoom!==void 0&&n.minzoom>o+_||n.maxzoom!==void 0&&n.maxzoom<=o-_||(t.styleLayerUID=n.uid,t.styleLayer=n,this._drawWithBrush(t,e,"vtlBackground"))})}drawTile(t,e,r,s){const{context:o}=t,i=r.layers;o.setBlendingEnabled(!1),o.setDepthTestEnabled(!0),o.setDepthWriteEnabled(!0),o.setDepthFunction(ct.LEQUAL),t.renderPass="opaque";for(let l=i.length-1;l>=0;l--){const n=i[l];s!=null&&s!==n.type||this._renderStyleLayer(n,t,e,!1)}o.setDepthWriteEnabled(!1),o.setBlendingEnabled(!0),o.setBlendFunctionSeparate(b.ONE,b.ONE_MINUS_SRC_ALPHA,b.ONE,b.ONE_MINUS_SRC_ALPHA),t.renderPass="translucent";for(let l=0;l<i.length;l++){const n=i[l];s!=null&&s!==n.type||this._renderStyleLayer(n,t,e,!1)}o.setDepthTestEnabled(!1),o.bindVAO()}_renderStyleLayer(t,e,r,s){if(!(s||t&&r.layerData.has(t.uid)))return;const o=t.getLayoutProperty("visibility");if(o&&o.getValue()===L.NONE)return;const{renderPass:i}=e;let l;switch(t.type){case g.BACKGROUND:if(i!=="background")return;l="vtlBackground";break;case g.FILL:if(i!=="opaque"&&e.renderPass!=="translucent")return;l="vtlFill";break;case g.LINE:if(i!=="translucent")return;l="vtlLine";break;case g.CIRCLE:if(i!=="translucent")return;l="vtlCircle";break;case g.SYMBOL:if(i!=="translucent")return;l="vtlSymbol"}const n=e.displayLevel;if(t.minzoom!==void 0&&t.minzoom>n+_||t.maxzoom!==void 0&&t.maxzoom<=n-_)return;const{context:h}=e;h.setStencilTestEnabled(!1),h.setStencilWriteMask(0),e.styleLayerUID=t.uid,e.styleLayer=t,this._drawWithBrush(e,r,l)}_drawWithBrush(t,e,r){if(!this._brushCache.has(r)){const s=Ct[r];this._brushCache.set(r,new s)}this._brushCache.get(r).drawMany(t,[e])}}let p=class extends ut(dt(ft)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=$("disable-feature:vtl-level-shift")?0:1}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new U("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:a,spatialReference:t,state:e,viewingMode:r}=this.view,s=r==="local"&&!gt(t)||yt.force512VTL,o=this.layer.tileInfo.spatialReference.isGeographic,i=s?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,o?1:2),l=this._getTileInfoSupportError(i,this.layer.fullExtent);if(l!=null)return this.addResolvingPromise(Promise.reject(l));const n=F(()=>{var m,c;return(c=(m=this.view)==null?void 0:m.basemapTerrain)==null?void 0:c.tilingSchemeLocked}).then(()=>{var w,v,E;const m=a.tilingScheme,c=m.pixelSize,R=c===256?1:2,y=(w=a.spatialReference)!=null&&w.isGeographic&&c===256?1:0,C=(v=a.spatialReference)!=null&&v.isGeographic||c!==256?0:1;let f;if(this.schemaHelper=new _t(R,y,this.levelShift+C),c===256){const z=this.layer.tileInfo.spatialReference.isGeographic;f=this.layer.tileInfo.getOrCreateCompatible(256,z?1:2)}else f=(E=this.view.spatialReference)!=null&&E.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const S=this._getTileInfoCompatibilityError(f,m);if(S)throw S;this.tileInfo=f});this._tileHandlerController=new AbortController;const h=this.view.resourceController;this._memCache=h.memoryController.newCache(`vtl-${this.layer.uid}`,m=>{m.release()}),this.addHandles(G(()=>this.view.qualitySettings.memoryLimit,m=>this._memCache.maxSize=Math.ceil(m/10*1048576),W));const B=new P(this.layer.currentStyleInfo.style);this._tileHandler=new D(this.layer,B,e.contentPixelRatio,this._memCache);const T=this._tileHandlerController.signal,x=St(h),I=this._tileHandler.start({signal:T,schedule:x}),M=this._tileHandler.spriteMosaic;M.then(m=>{!j(T)&&this._tileHandler&&(this.painter=new O(m,this._tileHandler.glyphMosaic))}),I.then(()=>this._tileHandlerController=null),this._updatingHandles.add(()=>{var m;return{style:this.layer.currentStyleInfo.style,pixelRatio:(m=this.view.state)==null?void 0:m.contentPixelRatio}},({style:m,pixelRatio:c})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const R=new P(m),y=new D(this.layer,R,c,this._memCache),C=y.start({signal:this._tileHandlerController.signal,schedule:x}),f=y.spriteMosaic;C.then(()=>this._tileHandlerController=null),this._updatingHandles.addPromise(Promise.all([C,f]).then(([,S])=>{const w=this._tileHandler,v=this.painter;this.painter=new O(S,y.glyphMosaic),this._tileHandler=y,this.emit("data-changed"),w.destroy(),v&&v.dispose()}))});const q=Promise.all([n,I,M]);this.addResolvingPromise(q)}destroy(){this.painter=k(this.painter),this._tileHandlerController=Z(this._tileHandlerController),this._tileHandler=H(this._tileHandler),this._memCache=H(this._memCache)}get contentZoom(){return $("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const a=this.tileInfo.lods,t=this.layer.minScale||a[0].scale,e=this.layer.maxScale||a[a.length-1].scale,r=this.levelRangeFromScaleRange(t,e);return this.layer.maxScale?r.maxLevel++:r.maxLevel+=this.levelShift,r}get dataScaleRange(){const a=this.tileInfo.lods;return{minScale:a[0].scale,maxScale:a[a.length-1].scale}}get dataLevelRange(){const{minScale:a,maxScale:t}=this.dataScaleRange,e=this.levelRangeFromScaleRange(a,t);return e.minLevel===1&&this.tileInfo.size[0]===256&&(e.minLevel=0),e.maxLevel+=this.levelShift,e}async fetchTile(a,t,e,r){return this._tileHandler.getVectorTile(a,t,e,r)}};d([u()],p.prototype,"layer",void 0),d([u()],p.prototype,"levelShift",void 0),d([u()],p.prototype,"contentZoom",null),d([u()],p.prototype,"displayLevelRange",null),d([u()],p.prototype,"tileInfo",void 0),d([u()],p.prototype,"dataScaleRange",null),d([u()],p.prototype,"dataLevelRange",null),d([u()],p.prototype,"updatingProgressValue",void 0),p=d([K("esri.views.3d.layers.VectorTileLayerView3D")],p);const br=p;function St(a){return t=>a.immediate.schedule(t)}export{br as default};