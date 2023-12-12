import{dm as p,cc as n,a5 as d,a9 as l}from"./index-b516d057.js";import{N as h}from"./DynamicLayerView3D-23a674d4.js";import{n as g}from"./ImageryLayerView-a6e95126.js";import"./RenderGeometry-5dbc1699.js";import"./vec3f32-bac7ea57.js";import"./DefaultTechniqueConfiguration-b4dbe32f.js";import"./requestImageUtils-b142708c.js";import"./enums-bdecffa2.js";import"./Texture-bcb6d63f.js";import"./contextUtils-81fda295.js";import"./interfaces-8918b36f.js";import"./Material-5f4156ac.js";import"./ViewingMode-5d7d590b.js";import"./FramebufferObject-123b7c8d.js";import"./ShaderTechniqueConfiguration-2502462e.js";import"./ElevationProvider-abb53936.js";import"./dehydratedPoint-5a1dfed5.js";import"./hydratedFeatures-2365c307.js";import"./weather-2eb64924.js";import"./RenderState-1d6218ee.js";import"./NestedMap-1b5db22e.js";import"./frustum-f9d53cdf.js";import"./VertexElementDescriptor-2925c6af.js";import"./VertexArrayObject-d19dab8d.js";import"./Octree-7cea9440.js";import"./InterleavedLayout-d76b0d59.js";import"./types-1305598a.js";import"./OrderIndependentTransparency-755f7dcc.js";import"./floatRGBA-ca990bbb.js";import"./Intersector-2e1d9db3.js";import"./Intersector-fa865806.js";import"./boundedPlane-1da2f094.js";import"./verticalOffsetUtils-e5214af9.js";import"./orientedBoundingBox-67c5cd22.js";import"./glUtil-ce5ee52b.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./LayerView3D-c03d44fc.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./HeightModelInfo-b816d32b.js";import"./projectExtentUtils-15e84132.js";import"./geometryServiceUtils-3e048225.js";import"./project-1bd91657.js";import"./ImageMaterial-10c9471b.js";import"./VerticalOffset.glsl-5743f98e.js";import"./LayerView-060b46d4.js";import"./UpdatingHandles-7949a657.js";import"./RefreshableLayerView-4a86a8ac.js";import"./layerViewUtils-6ebe90f4.js";import"./Query-071039d7.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./popupUtils-e4ebc84a.js";let a=class extends g(h){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=p(async t=>{this.redraw((i,e)=>this._redrawImage(i,e),t)},2e3)}initialize(){this.addHandles([n(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>{var t,i;return(i=(t=this.layer)==null?void 0:t.exportImageServiceParameters)==null?void 0:i.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>{var t;return(t=this.layer)==null?void 0:t.renderer},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(t,i,e){i.imageOrCanvasElement?t.image=i.imageOrCanvasElement:(t.image=document.createElement("canvas"),t.pixelData=i.pixelData,await this._redrawImage(t,e))}async _redrawImage(t,i){if(!(t.image instanceof HTMLCanvasElement)||t.pixelData==null)throw new Error;const e=t.image,o=e.getContext("2d"),s=await this.layer.applyRenderer(t.pixelData,{signal:i}),r=this.layer.applyFilter(s).pixelBlock;if(r==null)throw new Error;e.width=r.width,e.height=r.height;const m=o.createImageData(r.width,r.height);m.data.set(r.getAsRGBA()),o.putImageData(m,0,0)}};a=d([l("esri.views.3d.layers.ImageryLayerView3D")],a);const ut=a;export{ut as default};