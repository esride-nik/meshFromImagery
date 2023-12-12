import{_ as $,j5 as q,an as O,a5 as A,a6 as N,a9 as D,cb as L,h3 as F,v as z,al as H,k as P,f9 as j,eH as G,aW as X}from"./index-b516d057.js";import{F as Y}from"./coordinateSystem-38339d17.js";import{k as y,l as b}from"./frustum-f9d53cdf.js";import{l as K}from"./ViewingMode-5d7d590b.js";import{c as Q}from"./intersectorUtilsConversions-d05d75a3.js";import{a1 as J}from"./SceneView-123ac862.js";import{U as Z}from"./RenderCoordsHelper-8f237859.js";import{v as tt,A as et}from"./DefaultTechniqueConfiguration-b4dbe32f.js";import{i as it,t as rt,M as st}from"./Intersector-fa865806.js";import{o as at}from"./objectResourceUtils-003803db.js";import{n as nt}from"./contextUtils-81fda295.js";import{O as ot,N as V,I as T}from"./enums-bdecffa2.js";import"./boundedPlane-1da2f094.js";import"./Intersector-2e1d9db3.js";import"./Intersector-a291e778.js";import"./Viewpoint-f83262d0.js";import"./Cyclical-4c223a04.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./HeightModelInfo-b816d32b.js";import"./ElevationQuery-a3eaf0a0.js";import"./RenderGeometry-5dbc1699.js";import"./vec3f32-bac7ea57.js";import"./ElevationProvider-abb53936.js";import"./dehydratedPoint-5a1dfed5.js";import"./hydratedFeatures-2365c307.js";import"./interfaces-8918b36f.js";import"./weather-2eb64924.js";import"./RenderState-1d6218ee.js";import"./NestedMap-1b5db22e.js";import"./ShaderTechniqueConfiguration-2502462e.js";import"./Material-5f4156ac.js";import"./VertexElementDescriptor-2925c6af.js";import"./VertexArrayObject-d19dab8d.js";import"./Texture-bcb6d63f.js";import"./FramebufferObject-123b7c8d.js";import"./Octree-7cea9440.js";import"./InterleavedLayout-d76b0d59.js";import"./types-1305598a.js";import"./OrderIndependentTransparency-755f7dcc.js";import"./floatRGBA-ca990bbb.js";import"./glUtil-ce5ee52b.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./vec2f32-eaf29605.js";import"./ColorMaterial-bdf1f62a.js";import"./VerticalOffset.glsl-5743f98e.js";import"./dehydratedFeatures-2a3f0608.js";import"./quantizationUtils-17105106.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./edgeUtils-6e4a97fb.js";import"./SnappingCandidate-970faec6.js";import"./callExpressionWithFeature-36423058.js";import"./lineStippleUtils-0688e06c.js";import"./projectVectorToDehydratedPoint-e30a7ff8.js";import"./interfaces-1a80c8eb.js";import"./resourceUtils-1d03d2fe.js";import"./symbolColorUtils-3ca646c8.js";import"./webStyleSymbolUtils-4761c8f2.js";import"./devEnvironmentUtils-4eab2a99.js";import"./fontUtils-56b88a2f.js";import"./projectVectorToVector-56c29b20.js";import"./scaleUtils-72744379.js";import"./LayerConstants-d3ac1b7a.js";import"./DefaultUI-af7068c2.js";import"./UpdatingHandles-7949a657.js";import"./screenUtils-8dc4a7f9.js";import"./Map-1ad4186f.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Ground-ed93a93a.js";import"./CollectionFlattener-193451da.js";import"./editableLayers-856f2cb4.js";import"./basemapUtils-6ec10a55.js";import"./TablesMixin-292d1d89.js";import"./IViewEvents-9a85f53d.js";import"./interfaces-0421c5e6.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./mat2d-d4af8487.js";import"./mat2df32-fb26a8c9.js";import"./mat2df64-4d1a9198.js";import"./mat3f32-6c416b1c.js";import"./capabilities-9d56a1da.js";import"./themeUtils-7dcf5b71.js";import"./globalCss-94006b67.js";import"./accessibleHandler-e91101b2.js";import"./Compass-b37d7d1d.js";import"./GoTo-4d856ce0.js";import"./NavigationToggle-57c00adb.js";import"./Zoom-73b5f25a.js";import"./resources-d4afed0c.js";import"./viewpointUtils-245ed782.js";import"./projectPointToVectorWithEngine-f608a34a.js";import"./projectVectorToPoint-fbaf5599.js";import"./earthUtils-ef4b5643.js";import"./spatialReferenceSupport-5aeb751c.js";import"./ElevationSamplerData-9f34f589.js";import"./terrainUtils-b6b761ab.js";import"./Environment-91bfea7d.js";import"./projectPointToWGS84ComparableLonLat-1ba40d40.js";import"./projectVectorToWGS84ComparableLonLat-5675a9f4.js";import"./ShadowCastVisualizeTechniqueConfiguration-4fcc4e25.js";import"./ray-8da55042.js";import"./verticalOffsetUtils-e5214af9.js";import"./orientedBoundingBox-67c5cd22.js";import"./ZoomMomentumEstimator-7437d26a.js";import"./labelFormatUtils-d440367f.js";import"./labelUtils-b29175f3.js";import"./FeatureTileDescriptor3D-27dbeac7.js";import"./geometryServiceUtils-3e048225.js";import"./project-1bd91657.js";import"./DefaultMaterial_COLOR_GAMMA-101ea40c.js";import"./Version-1f969b2a.js";import"./LercDecoder-b49c0e9c.js";import"./WorkerHandle-9433ab9a.js";import"./RenderableTile-52f61d09.js";import"./enums-fb086c25.js";import"./config-1337d16e.js";import"./TiledDisplayObject-e7d105ae.js";import"./DisplayObject-9a6e3923.js";import"./TileKey-4b1303ff.js";import"./rasterUtils-15abcc11.js";import"./TileInfoView-ce4d65fb.js";import"./TileStrategy-a729431f.js";import"./QueueProcessor-4b9d43d3.js";import"./StyleDefinition-29c49b98.js";import"./enums-f1a6a48a.js";import"./edgeProcessing-82213448.js";import"./requestImageUtils-b142708c.js";import"./resources-15104e7a.js";import"./EdgeWorkerHandle-7d97defa.js";import"./workerHelper-d1cc0cda.js";import"./testSVGPremultipliedAlpha-f5e92e14.js";import"./DefaultVertexAttributeLayouts-8962d8eb.js";import"./RenderingContext-c0ea7a49.js";import"./ProgramCache-891c4b8d.js";import"./Program-96bc94ed.js";import"./hitTestSelectUtils-d512707e.js";import"./layerViewUtils-6ebe90f4.js";var M,C,w,W,g,S;(function(t){t[t.Binary=0]="Binary",t[t.JSON=1]="JSON"})(M||(M={})),function(t){t[t.TreeIndex=0]="TreeIndex",t[t.TreeStats=1]="TreeStats",t[t.TreeData=2]="TreeData",t[t.BrickBundles=3]="BrickBundles",t[t.Section=4]="Section",t[t.VariableStats=5]="VariableStats"}(C||(C={})),function(t){t[t.None=1]="None",t[t.Front=2]="Front",t[t.Back=3]="Back"}(w||(w={})),function(t){t[t.Low=0]="Low",t[t.Medium=1]="Medium",t[t.High=2]="High"}(W||(W={})),function(t){t[t.None=0]="None",t[t.StaticSections=1]="StaticSections",t[t.Slices=2]="Slices",t[t.DynamicSections=4]="DynamicSections",t[t.GhostShell=8]="GhostShell",t[t.Isosurface=16]="Isosurface",t[t.Quality=32]="Quality",t[t.SunLocation=64]="SunLocation",t[t.StaticSectionSelection=128]="StaticSectionSelection",t[t.ExaggerationAndOffset=256]="ExaggerationAndOffset",t[t.CurrentTime=512]="CurrentTime",t[t.CurrentVariable=1024]="CurrentVariable",t[t.DeleteIsosurface=2048]="DeleteIsosurface",t[t.ContainerVisibility=4096]="ContainerVisibility",t[t.RenderMode=8192]="RenderMode",t[t.Optimization=16384]="Optimization",t[t.VariableStyles=32768]="VariableStyles",t[t.VolumeStyles=65536]="VolumeStyles",t[t.AnalysisSlice=131072]="AnalysisSlice"}(g||(g={})),function(t){t[t.Isosurfaces=0]="Isosurfaces",t[t.DynamicSections=1]="DynamicSections",t[t.StaticSections=2]="StaticSections"}(S||(S={}));function lt(t){return new Promise(e=>$(()=>import("./vxlLayer-2f5ec1f6.js"),["assets/vxlLayer-2f5ec1f6.js","assets/index-b516d057.js","assets/index-b252abd2.css"]).then(i=>i.v).then(({default:i})=>{const r=i({locateFile:ht,preinitializedWebGLContext:t,onRuntimeInitialized:()=>e(r)})})).catch(e=>{throw e})}function ht(t){return q(`esri/libs/vxl/${t}`)}const v=O.getLogger("esri.layers.VoxelWasmPerSceneView");var o;(function(t){t[t.Lifetime=1]="Lifetime",t[t.RequestResponse=2]="RequestResponse",t[t.Rendering=3]="Rendering",t[t.Error=4]="Error"})(o||(o={}));let E=class extends tt{constructor(t){super(t),this._halfIntTexturesAvailable=!1,this._textureFloatLinearAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxlPromise=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._captureFrustum=!1,this._frustum=null,this._frustumRenderableId=-1,this._renderCoordsHelper=null,this.produces=new Map([[et.VOXEL,()=>!!this._vxl&&this.view.viewingMode==="local"]]),this.type=it.VOXEL,this.slicePlaneEnabled=!0,this.isGround=!1,this.layerUid=[]}_dbg(t,e){this._dbgFlags.has(t)&&(t===o.Error?v.error(e):v.warn(e))}_removeRenderPlugin(){this._pluginIsActive&&this.view._stage&&(this._dbg(o.Lifetime,"--removeRenderPlugin--"),this.view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}initialize(){this._dbg(o.Lifetime,"--initialize--");for(const t of this._wasmMemBlockSizes)this._wasmMemBlocks.set(t,0);this.addHandles([L(()=>this.view.ready,t=>{t&&this.view.viewingMode==="local"?(this._dbg(o.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this.view._stage.addRenderPlugin(this),this._pluginIsActive=!0):(this._dbg(o.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())},F),L(()=>{var t;return(t=this.view)==null?void 0:t.qualityProfile},t=>{this._dbg(o.Rendering,"qualityProfile changed to "+t),this._vxl&&this._vxl.set_quality(this._toWasmQuality(t))},F),L(()=>{var t;return(t=this.view)==null?void 0:t.timeExtent},()=>{var t;if(this._vxl){const e=this._getTimeArgs((t=this.view)==null?void 0:t.timeExtent);this._dbg(o.Rendering,"sceneView timeExtent changed to useTime="+e.useTime+" st="+e.startTime+" et="+e.endTime),this._vxl.set_scene_time_extent(e.startTime,e.endTime,e.useTime),this._renderPluginContext.requestRender()}},F),L(()=>{var t;return(t=this.view)==null?void 0:t.stationary},t=>{this._vxl&&t&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()})])}initializeRenderContext(t){this._dbg(o.Lifetime,"--initializeRenderContext--");const e=t.renderContext.rctx;e.type===nt.WEBGL2?(this._renderPluginContext=t,this._rctx=t.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._textureFloatLinearAvailable=this._rctx.capabilities.textureFloatLinear,this._initializeWasm(e.gl)):this._dbg(o.Error,"WebGL 1 context only!")}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(o.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const t=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(o.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(t,!0);const e=this._renderTargetToRestore.viewport;this._rctx.setViewport(e.x,e.y,e.width,e.height)}_bindPreviousDepthToSlot(t,e){const i=!!this._rctx,r=!!this._renderTargetToRestore;if(!i||!r)return 0;const a=this._renderTargetToRestore.fbo.depthStencilTexture;return a?(e===0?this._rctx.bindTexture(null,t,!0):this._rctx.bindTexture(a,t,!0),1):(this._dbg(o.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(t,e,i){if(!this._rctx)return void this._dbg(o.Error,"modifyAllocation callback has no rendering context!");const r=t;i===1?this._rctx.instanceCounter.increment(r,e):this._rctx.instanceCounter.decrement(r,e)}_setBlendState(t,e,i,r){this._rctx?(this._rctx.setBlendingEnabled(t===1),this._rctx.setBlendFunction(e,i),this._rctx.setBlendEquation(r)):this._dbg(o.Error,"setBlendState callback has no rendering context!")}_setFrontFace(t){this._rctx?this._rctx.setFrontFace(t):this._dbg(o.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(t,e,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(t===1),this._rctx.setDepthWriteEnabled(e===1),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(ot.ALWAYS,0,255),this._rctx.setStencilOpSeparate(V.FRONT,T.KEEP,T.INCR,T.KEEP),this._rctx.setStencilOpSeparate(V.BACK,T.KEEP,T.DECR,T.KEEP)):this._dbg(o.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(t){if(this._rctx)switch(t){case w.None:this._rctx.setFaceCullingEnabled(!1);break;case w.Back:this._rctx.setCullFace(V.BACK),this._rctx.setFaceCullingEnabled(!0);break;case w.Front:this._rctx.setCullFace(V.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(o.Error,"setRasterizerState callback has no rendering context!")}_setViewport(t,e,i,r){this._rctx?this._rctx.setViewport(t,e,i,r):this._dbg(o.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach((t,e)=>{if(t.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(e);i>=0&&(t.needMemoryUsageUpdate=!1,t.layerView.setUsedMemory(i))}})}_syncRequestsResponses(){this._layers.forEach((t,e)=>{const i=[];t.responses.forEach((s,u)=>{i.push(u),this._dbg(o.RequestResponse,"responding for requestID:"+u+" size:"+s.size),this._vxl.respond(e,u,s),s.requestType!==C.TreeIndex&&s.requestType!==C.Section||(t.needMemoryUsageUpdate=!0)});const r=t.responses;for(const s of i)r.delete(s);const a=this._vxl.get_new_requests(e),n=t.abortController.signal;for(const s in a){t.outstandingRequestCount+=1,t.outstandingRequestCount===1&&t.layerView.updatingFlagChanged();const u=a[s],p={responseType:"array-buffer",signal:n};this._dbg(o.RequestResponse,"making requestID:"+s+" url:"+u.url),z(u.url,p).then(h=>{t.outstandingRequestCount-=1,t.outstandingRequestCount===0&&t.layerView.updatingFlagChanged(),this._dbg(o.RequestResponse,"have response for requestID:"+s);let _=0;if(h.data.byteLength>0){_=this._vxl._malloc(h.data.byteLength);const d=new Uint8Array(this._vxl.HEAPU8.buffer,_,h.data.byteLength),m=new Uint8Array(h.data);for(let f=0;f<h.data.byteLength;++f)d[f]=m[f]}r.set(+s,{responseType:u.responseType,ptr:_,size:h.data.byteLength,success:!0,requestType:u.requestType})}).catch(h=>{t.outstandingRequestCount-=1,t.outstandingRequestCount===0&&t.layerView.updatingFlagChanged(),H(h)||(this._dbg(o.Error,`requestID:${s} failed, error=${h.toString()}`),r.set(+s,{responseType:u.responseType,ptr:0,size:0,success:!1,requestType:u.requestType}))})}})}updateWasmCamera(t){this._vxl.set_projection_matrix.apply(this._vxl,t.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,t.viewMatrix),this._vxl.set_near_far(t.near,t.far)}isUpdating(t){if(!this._vxl&&this._vxlPromise)return!0;const e=this._layers.get(t);return!!e&&e.outstandingRequestCount>0}getLayerTimes(t){const e=[];return this._layers.forEach((i,r)=>{if(i.layerView.wasmLayerId===t.wasmLayerId){const a=this._vxl.get_layer_epoch_times(r,t.layer.currentVariableId);for(let n=0;n<a.length;++n)e.push(a[n])}}),e}getCurrentLayerTimeIndex(t){let e=0;return this._layers.forEach((i,r)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(e=this._vxl.get_layer_current_time_id(r))}),e}setEnabled(t,e){this._layers.forEach((i,r)=>{i.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.set_enabled(r,e),i.needMemoryUsageUpdate=!0,this._renderPluginContext.requestRender())})}setStaticSections(t,e){const i={mask:g.StaticSections,staticSections:e};return this._doMaskedUIUpdate(t,i,!0)}setCurrentVariable(t,e){const i={mask:g.CurrentVariable,currentVariable:e};return this._doMaskedUIUpdate(t,i,!0)}setRenderMode(t,e){const i={mask:g.RenderMode,renderMode:e};return this._doMaskedUIUpdate(t,i,!0)}setVerticalExaggerationAndOffset(t,e,i,r){const a={mask:g.ExaggerationAndOffset,volStyleDesc:{volumeId:e,verticalExaggeration:i,verticalOffset:r}};return this._doMaskedUIUpdate(t,a,!0)}setVariableStyles(t,e){const i={mask:g.VariableStyles,variableStyles:e};return this._doMaskedUIUpdate(t,i,!0)}setVolumeStyles(t,e){const i={mask:g.VolumeStyles,volumeStyles:e};return this._doMaskedUIUpdate(t,i,!0)}setEnableDynamicSections(t,e){const i={mask:g.ContainerVisibility,containerIsVisible:e,container:S.DynamicSections};return this._doMaskedUIUpdate(t,i,!0)}setEnableIsosurfaces(t,e){const i={mask:g.ContainerVisibility,containerIsVisible:e,container:S.Isosurfaces};return this._doMaskedUIUpdate(t,i,!0)}setEnableSections(t,e){const i={mask:g.ContainerVisibility,containerIsVisible:e,container:S.StaticSections};return this._doMaskedUIUpdate(t,i,!0)}setAnalysisSlice(t,e,i,r){const a={mask:g.AnalysisSlice,analysisSlice:{point:i,normal:r,enabled:e}};return this._doMaskedUIUpdate(t,a,!0)}_doMaskedUIUpdate(t,e,i){if(!this._vxl)return!1;let r=!1;return this._layers.forEach((a,n)=>{if(a.layerView.wasmLayerId===t.wasmLayerId){const s={str:JSON.stringify(e),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(s)&&(r=this._vxl.handle_masked_ui_update(n,s.ptr,s.byteCount)===1,s.isReusable||this._vxl._free(s.ptr))}}),r&&i&&this._renderPluginContext.requestRender(),r}_addTriangleToWasmBuffer(t,e,i,r,a){return t[3*e]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],t[3*(e+=1)]=r[0],t[3*e+1]=r[1],t[3*e+2]=r[2],t[3*(e+=1)]=a[0],t[3*e+1]=a[1],t[3*e+2]=a[2],e+=1}_addNormalToWasmBuffer(t,e,i){return t[3*e]=i[0],t[3*e+1]=i[1],t[3*e+2]=i[2],e+=1}_doCaptureFrustum(){if(!this._vxl)return;const t=36,e=t/3,i=this._vxl._malloc(3*t*Float32Array.BYTES_PER_ELEMENT),r=new Float32Array(this._vxl.HEAPF32.buffer,i,3*t),a=this._vxl._malloc(3*e*Float32Array.BYTES_PER_ELEMENT),n=new Float32Array(this._vxl.HEAPF32.buffer,a,t),s=this._frustum.points[y.NEAR_BOTTOM_LEFT],u=this._frustum.points[y.NEAR_BOTTOM_RIGHT],p=this._frustum.points[y.NEAR_TOP_RIGHT],h=this._frustum.points[y.NEAR_TOP_LEFT],_=this._frustum.points[y.FAR_BOTTOM_LEFT],d=this._frustum.points[y.FAR_BOTTOM_RIGHT],m=this._frustum.points[y.FAR_TOP_RIGHT],f=this._frustum.points[y.FAR_TOP_LEFT];let l=0,c=0;const x=this._frustum.planes[b.NEAR];l=this._addTriangleToWasmBuffer(r,l,p,u,s),c=this._addNormalToWasmBuffer(n,c,x),l=this._addTriangleToWasmBuffer(r,l,s,h,p),c=this._addNormalToWasmBuffer(n,c,x);const R=this._frustum.planes[b.FAR];l=this._addTriangleToWasmBuffer(r,l,_,d,m),c=this._addNormalToWasmBuffer(n,c,R),l=this._addTriangleToWasmBuffer(r,l,m,f,_),c=this._addNormalToWasmBuffer(n,c,R);const I=this._frustum.planes[b.TOP];l=this._addTriangleToWasmBuffer(r,l,m,p,h),c=this._addNormalToWasmBuffer(n,c,I),l=this._addTriangleToWasmBuffer(r,l,h,f,m),c=this._addNormalToWasmBuffer(n,c,I);const k=this._frustum.planes[b.BOTTOM];l=this._addTriangleToWasmBuffer(r,l,s,u,d),c=this._addNormalToWasmBuffer(n,c,k),l=this._addTriangleToWasmBuffer(r,l,d,_,s),c=this._addNormalToWasmBuffer(n,c,k);const B=this._frustum.planes[b.LEFT];l=this._addTriangleToWasmBuffer(r,l,h,s,_),c=this._addNormalToWasmBuffer(n,c,B),l=this._addTriangleToWasmBuffer(r,l,_,f,h),c=this._addNormalToWasmBuffer(n,c,B);const U=this._frustum.planes[b.RIGHT];l=this._addTriangleToWasmBuffer(r,l,p,m,d),c=this._addNormalToWasmBuffer(n,c,U),l=this._addTriangleToWasmBuffer(r,l,d,u,p),c=this._addNormalToWasmBuffer(n,c,U),this._frustumRenderableId!==-1&&this._vxl.remove_generic_mesh(this._frustumRenderableId),this._frustumRenderableId=this._vxl.add_generic_mesh(i,3*t,a,t,255,0,0,64),this._vxl._free(i),this._vxl._free(a),this._captureFrustum=!1,this._renderPluginContext.requestRender()}captureFrustum(){this._renderCoordsHelper===null&&(this._renderCoordsHelper=Z.create(K.Local,Y(!1,this.view.spatialReference))),this._frustum===null&&(this._frustum=new J(this._renderCoordsHelper)),this._captureFrustum=!0,this._renderPluginContext!==null&&this._renderPluginContext.requestRender()}toggleFullVolumeExtentDraw(t){this._vxl&&this._layers.forEach((e,i)=>{e.layerView.wasmLayerId===t.wasmLayerId&&(this._vxl.toggle_full_volume_extent_draw(i),this._renderPluginContext.requestRender())})}addVoxelLayer(t){if(!this._vxl){const i={layerView:t,resolveCallback:null,rejectCallback:null},r=new Promise((a,n)=>{i.resolveCallback=a,i.rejectCallback=n});return this._newLayers.push(i),r}const e=this._addVoxelLayer(t);return e<0?Promise.reject(-1):Promise.resolve(e)}removeVoxelLayer(t){if(!this._vxl){const r=this._newLayers.findIndex(n=>t.uid===n.layerView.uid);r>=0&&(this._newLayers[r].resolveCallback(-1),this._newLayers.splice(r,1));const a=this._newLayers.length;return a===0&&(this._dbg(o.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),a}let e=-1;this._layers.forEach((r,a)=>{if(r.layerView.wasmLayerId===t.wasmLayerId){e=a,r.abortController.abort(),this._vxl.remove_layer(e);const n=this.layerUid.indexOf(t.layer.uid);n!==-1&&this.layerUid.splice(n,1)}}),e>=0&&this._layers.delete(e);const i=this._layers.size;return i===0&&(this._dbg(o.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(t){for(const e of this._wasmMemBlockSizes)if(t<e)return e;return-1}_allocateBlock(t){t.byteCount=this._vxl.lengthBytesUTF8(t.str)+1;const e=this._getBlockSize(t.byteCount);return e<0?(t.isReusable=!1,t.ptr=this._vxl._malloc(t.byteCount)):(t.isReusable=!0,t.ptr=this._wasmMemBlocks.get(e),t.ptr===0&&(t.ptr=this._vxl._malloc(e),this._wasmMemBlocks.set(e,t.ptr))),t.ptr!==0&&(this._vxl.stringToUTF8(t.str,t.ptr,t.byteCount),!0)}_getTimeArgs(t){let e=-Number.MAX_VALUE,i=Number.MAX_VALUE,r=!1;return t!=null&&(t.isAllTime?r=!0:(t.start!=null&&(r=!0,e=t.start.getTime()/1e3),t.end!=null&&(r=!0,i=t.end.getTime()/1e3))),{startTime:e,endTime:i,useTime:r}}_addVoxelLayer(t){var u,p;const e=t.layer;let i=-1;const r=e.getConfiguration();if(r.length<1)return-1;const a={str:r,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const n=this._getTimeArgs((u=this.view)==null?void 0:u.timeExtent),s=this.view.spatialReference.isWGS84&&e.spatialReference.isWGS84?111319.49079327357:1;if(i=this._vxl.add_layer(e.serviceRoot,a.ptr,a.byteCount,s,s,n.startTime,n.endTime,n.useTime,this._toWasmQuality(this.view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),i>=0){(p=e.test)!=null&&p.constantUpscaling&&(this._setUpscalingLimits(0,.25,.25),this._setUpscalingLimits(1,.5,.5),this._setUpscalingLimits(2,.75,.75));const h=new AbortController;if(this._layers.set(i,{layerView:t,responses:new Map,outstandingRequestCount:0,abortController:h,needMemoryUsageUpdate:!1}),this.layerUid.push(t.layer.uid),!this._halfIntTexturesAvailable||P("mac")){const _=[];let d="";for(const m of t.layer.variables)m.renderingFormat.type!=="Int16"&&m.renderingFormat.type!=="UInt16"||(_.push(m.name),m.id===t.layer.currentVariableId&&(d=m.name));d!==""&&v.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${d}' in this browser`),_.length>0&&v.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}if(!this._textureFloatLinearAvailable){const _=[];let d="";for(const m of t.layer.variables)m.renderingFormat.type==="Float32"&&(_.push(m.name),m.id===t.layer.currentVariableId&&(d=m.name));d!==""&&v.error("#addVoxelLayer_error()",t.layer,`The voxel layer '${t.layer.title}' cannot render the current variable '${d}' in this browser`),_.length>0&&v.warn("#addVoxelLayer_warning()",t.layer,`The voxel layer '${t.layer.title}' cannot render the variables '${_.toString()}' in this browser`)}return P("esri-mobile")&&v.warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),i}return-1}prepareRender(t){if(!this._vxl)return;const e=t.bindParameters.camera.viewForward,i=t.bindParameters.camera.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],e[0],e[1],e[2]);const r=this._vxl.cull();this._dbg(o.RequestResponse,"missingResourceCount="+r),this._moreToLoad=r>0,this._havePreparedWithAllLayers=this._newLayers.length===0,this._updateMemoryUsage()}renderNode(t){if(!this._vxl)return;for(const i of this._newLayers){const r=this._addVoxelLayer(i.layerView);r===-1?i.rejectCallback(-1):i.resolveCallback(r)}if(this._newLayers=[],this._layers.size===0)return void this._dbg(o.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._lastFrameWasStationary=this.view.stationary,this._syncRequestsResponses(),this._beforeDraw(),this._vxl.begin_color_frame(!this.view._stage.renderer.isFeatureEnabled(at.HighResolutionVoxel),t.bindParameters.lighting.mainLight.direction[0],t.bindParameters.lighting.mainLight.direction[1],t.bindParameters.lighting.mainLight.direction[2]);const e=this._renderTargetToRestore.viewport;e.width===this._viewportWidth&&e.height===this._viewportHeight||(this._viewportWidth=e.width,this._viewportHeight=e.height,this._vxl.set_viewport(e.width,e.height),this._layers.forEach(i=>{i.needMemoryUsageUpdate=!0})),e.x===0&&e.y===0||this._dbg(o.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(t.bindParameters.camera),this._captureFrustum&&(this._frustum.update(t.bindParameters.camera),this._doCaptureFrustum()),this._vxl.draw(),this._afterDraw(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(o.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._vxl&&(this._layers.forEach(t=>{t.abortController.abort()}),this._wasmMemBlocks.forEach(t=>{t!==0&&this._vxl._free(t)}),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(t){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=lt(t).then(e=>{var f;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(o.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs((f=this.view)==null?void 0:f.timeExtent),r=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),a=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),n=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),s=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),u=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),p=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),_=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),d=this._halfIntTexturesAvailable&&!P("mac"),m=this._textureFloatLinearAvailable;this._vxl.initialize_voxel_wasm(r,a,n,s,u,p,h,_,i.startTime,i.endTime,i.useTime,d,m),this._renderPluginContext&&this._renderPluginContext.requestRender()}).catch(()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(o.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()})),this._vxlPromise)}pickDepth(t,e,i){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const r=i.viewport[3]-e;if(t<0||t>i.viewport[2]||e<0||e>i.viewport[3])return this._dbg(o.Error,`[js] pickDepth: outOfRange, screenXY=[${t.toFixed(0)}, ${r.toFixed(0)}]]`),null;this._beforeDraw();const a=i.viewForward,n=i.eye;this._vxl.update_camera_pos_and_direction(n[0],n[1],n[2],a[0],a[1],a[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const s=this._vxl.pick_depth(t,r);return this._afterDraw(),s.success?s.distanceToCamera:null}pickObject(t,e,i,r){if(!this._vxl||!this._rctx||this._layers.size===0)return null;const a=Math.round(t),n=Math.round(e);if(a<0||a>i.viewport[2]||n<0||n>i.viewport[3])return this._dbg(o.Error,`[js] pickObject: outOfRange, screenXY=[${a}, ${n}], vp=[${i.viewport.toString()}]`),null;this._beforeDraw();const s=i.viewForward,u=i.eye;this._vxl.update_camera_pos_and_direction(u[0],u[1],u[2],s[0],s[1],s[2]),this.updateWasmCamera(i),this._vxl.begin_frame();let p=null;if(r.length===0)p=this._vxl.pick_object(a,n,0,0);else{const h={str:JSON.stringify({layerIds:r}),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(h)&&(p=this._vxl.pick_object(a,n,h.ptr,h.byteCount),h.isReusable||this._vxl._free(h.ptr))}return this._afterDraw(),p}_beforeDraw(){this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0)}_afterDraw(){this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate()}intersect(t,e,i,r,a){if(!this._vxl||!this._rctx||this._layers.size===0||!t.options.selectionMode||t.options.isFiltered)return;if(a[0]<0||a[0]>t.camera.viewport[2]||a[1]<0||a[1]>t.camera.viewport[3])return this._dbg(o.Error,`[js] VoxelWasmPerScene.intersect: outOfRange, screenXY=[${a[0].toFixed(0)}, ${a[1].toFixed(0)}]`),null;const n=[];this._layers.forEach(p=>{t.options.filteredLayerUids.includes(p.layerView.layer.uid)&&n.push(p.layerView.wasmLayerId)});const s=this.pickObject(a[0],a[1],t.camera,n);if(s==null||s.layerId===-1)return;const u=this._layers.get(s.layerId);if(u){const p=u.layerView.layer.uid,h=s.distanceToCamera/j(i,r),_=X();_[0]=s.worldX,_[1]=s.worldY,_[2]=s.worldZ;const d={};if(s.continuousValue!=null&&s.continuousValueUnits!=null?d["Voxel.ServiceValue"]=`${s.continuousValue.toLocaleString()} ${s.continuousValueUnits}`:s.uniqueValueLabel!=null&&s.uniqueValue!=null?d["Voxel.ServiceValue"]=`${s.uniqueValueLabel} (${s.uniqueValue})`:s.uniqueValue!=null&&(d["Voxel.ServiceValue"]=`${s.uniqueValue}`),d["Voxel.ServiceVariableLabel"]=s.variableLabel,d["Voxel.Position"]=s.voxelSpacePosition,s.epochTime!=null&&s.nativeTime!=null&&s.nativeTimeUnits!=null){const x=new Date(s.epochTime);d["Voxel.ServiceLocalTime"]=x.toString(),d["Voxel.ServiceNativeTime"]=`${s.nativeTime.toLocaleString()} ${s.nativeTimeUnits}`}s.depth!=null&&s.depthUnits!=null&&(d["Voxel.ServiceDepth"]=`${s.depth.toLocaleString()} ${s.depthUnits}`);const m=s.faceNormal;d["Voxel.WorldPosition"]=`[${_[0]}, ${_[1]}, ${_[2]}]`;const f=x=>{const R=new Q(_,p,()=>this._createVoxelGraphic(u.layerView.layer,d));x.set(this.type,R,h,m)},l=t.results,c=t.options.store===rt.ALL;if((l.min.dist==null||h<l.min.dist)&&f(l.min),(l.max.dist==null||h>l.max.dist)&&f(l.max),c){const x=st(t.ray);f(x),t.results.all.push(x)}}}_createVoxelGraphic(t,e){return new G({layer:t,sourceLayer:t,attributes:e})}_toWasmQuality(t){switch(t){case"low":return 0;case"medium":return 1;case"high":return 2}}_setUpscalingLimits(t,e,i){this._vxl&&this._vxl.set_upscaling_limits(t,e,i)}};A([N({constructOnly:!0})],E.prototype,"view",void 0),E=A([D("esri.layers.VoxelWasmPerSceneView")],E);const ji=E;export{ji as default};
