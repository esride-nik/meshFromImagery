import{cb as l,h3 as h,e3 as g,V as w,eo as f,a5 as d,a9 as u}from"./index-b516d057.js";import{t as b,p as n}from"./jsonUtils-52514725.js";import{m as V}from"./LayerView2D-4970cda5.js";import{i as S}from"./GraphicContainer-1a5a19a4.js";import{r as _}from"./GraphicsView2D-59987375.js";import{u as T}from"./LayerView-060b46d4.js";import"./DictionaryLoader-e327eff9.js";import"./Version-1f969b2a.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./scaleUtils-72744379.js";import"./Container-1d2d049f.js";import"./mat3f32-6c416b1c.js";import"./EffectView-b2b90b02.js";import"./DisplayObject-9a6e3923.js";import"./definitions-5366d472.js";import"./enums-bdecffa2.js";import"./Texture-bcb6d63f.js";import"./contextUtils-81fda295.js";import"./MapView-feaca8e4.js";import"./Viewpoint-f83262d0.js";import"./Cyclical-4c223a04.js";import"./CollectionFlattener-193451da.js";import"./DefaultUI-af7068c2.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./UpdatingHandles-7949a657.js";import"./screenUtils-8dc4a7f9.js";import"./signal-51ed66f5.js";import"./Map-1ad4186f.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Ground-ed93a93a.js";import"./editableLayers-856f2cb4.js";import"./basemapUtils-6ec10a55.js";import"./TablesMixin-292d1d89.js";import"./HeightModelInfo-b816d32b.js";import"./IViewEvents-9a85f53d.js";import"./interfaces-0421c5e6.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./ViewingMode-5d7d590b.js";import"./mat2d-d4af8487.js";import"./mat2df32-fb26a8c9.js";import"./mat2df64-4d1a9198.js";import"./vec2f32-eaf29605.js";import"./capabilities-9d56a1da.js";import"./themeUtils-7dcf5b71.js";import"./globalCss-94006b67.js";import"./accessibleHandler-e91101b2.js";import"./Compass-b37d7d1d.js";import"./GoTo-4d856ce0.js";import"./NavigationToggle-57c00adb.js";import"./Zoom-73b5f25a.js";import"./resources-d4afed0c.js";import"./unitBezier-881ac1eb.js";import"./TileInfoView-ce4d65fb.js";import"./TileKey-4b1303ff.js";import"./TileStrategy-a729431f.js";import"./QueueProcessor-4b9d43d3.js";import"./TileStore-c31b905a.js";import"./quickselect-bc0541de.js";import"./QuantizationParameters-f983cf8d.js";import"./ColorBackground-5c13202f.js";import"./ClipRect-9f8fe7eb.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-4835aeec.js";import"./FeatureContainer-57c36de3.js";import"./AttributeStoreView-e5fce3c6.js";import"./TiledDisplayObject-e7d105ae.js";import"./labelingInfo-aae625ac.js";import"./LabelClass-c3c309a8.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";import"./color-a1c19855.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-73827040.js";import"./FramebufferObject-123b7c8d.js";import"./VertexArrayObject-d19dab8d.js";import"./WGLBrushVTLSymbol-00207292.js";import"./vec4f32-0d1b2306.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-611fcbef.js";import"./Program-96bc94ed.js";import"./MaterialKey-96278cae.js";import"./alignmentUtils-ae955d28.js";import"./heatmapTextureUtils-6877589a.js";import"./DefaultVertexAttributeLayouts-8962d8eb.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-b310591f.js";import"./createSymbolSchema-001203d9.js";import"./cimAnalyzer-ce1886a0.js";import"./fontUtils-56b88a2f.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-96433514.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-36423058.js";import"./quantizationUtils-17105106.js";import"./floatRGBA-ca990bbb.js";import"./ExpandedCIM-76245323.js";import"./clusterUtils-50a66940.js";import"./MD5-715f37cd.js";import"./util-8b594274.js";import"./TileContainer-8209da9f.js";import"./vec3f32-bac7ea57.js";import"./normalizeUtilsSync-7ead5aec.js";import"./projectionSupport-dcf335fc.js";import"./json-48e3ea08.js";import"./Matcher-fcb8339d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-a90259bc.js";import"./ComputedAttributeStorage-bbcde1eb.js";import"./TimeOnly-879c5107.js";let y=class extends V(T){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,o){if(!this.graphicsViews.length)return null;const p=this.layer;return this.graphicsViews.reverse().flatMap(r=>{const t=this._popupTemplates.get(r),e=r.hitTest(i);for(const m of e)m.layer=p,m.sourceLayer=p,m.popupTemplate=t;return e}).map(r=>({type:"graphic",graphic:r,layer:p,mapPoint:i}))}update(i){if(this.graphicsViews)for(const o of this.graphicsViews)o.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:o,featureSet:p,layerDefinition:r}of i){const t=g.fromJSON(p),e=new w(t.features),m=r.drawingInfo,c=o?f.fromJSON(o):null,s=b(m.renderer),a=new _({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:e,renderer:s,container:new S(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=a,this._popupTemplates.set(a,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=s.symbol):this.layer.lineSymbol=s.symbol:this.layer.polygonSymbol=s.symbol,this.graphicsViews.push(a),this.container.addChild(a.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=d([u("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Gt=y;export{Gt as default};