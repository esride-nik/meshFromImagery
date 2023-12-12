import{V as n,h3 as u,bh as h,ao as c,cb as g,a5 as m,a6 as d,a9 as _}from"./index-b516d057.js";import{l as w}from"./CollectionFlattener-193451da.js";import{m as y,c as f,C as k,T as M,j as V,S as v}from"./RouteInfo-fa5be8a1.js";import{O as G}from"./Stop-bb61a730.js";import{m as I}from"./LayerView2D-4970cda5.js";import{i as F}from"./GraphicContainer-1a5a19a4.js";import{r as H}from"./GraphicsView2D-59987375.js";import{u as C}from"./LayerView-060b46d4.js";import"./scaleUtils-72744379.js";import"./Container-1d2d049f.js";import"./mat3f32-6c416b1c.js";import"./EffectView-b2b90b02.js";import"./DisplayObject-9a6e3923.js";import"./definitions-5366d472.js";import"./enums-bdecffa2.js";import"./Texture-bcb6d63f.js";import"./contextUtils-81fda295.js";import"./MapView-feaca8e4.js";import"./Viewpoint-f83262d0.js";import"./Cyclical-4c223a04.js";import"./DefaultUI-af7068c2.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./UpdatingHandles-7949a657.js";import"./screenUtils-8dc4a7f9.js";import"./signal-51ed66f5.js";import"./Map-1ad4186f.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./Ground-ed93a93a.js";import"./editableLayers-856f2cb4.js";import"./basemapUtils-6ec10a55.js";import"./TablesMixin-292d1d89.js";import"./HeightModelInfo-b816d32b.js";import"./IViewEvents-9a85f53d.js";import"./interfaces-0421c5e6.js";import"./heightModelInfoUtils-0dd2b6e4.js";import"./ViewingMode-5d7d590b.js";import"./mat2d-d4af8487.js";import"./mat2df32-fb26a8c9.js";import"./mat2df64-4d1a9198.js";import"./vec2f32-eaf29605.js";import"./capabilities-9d56a1da.js";import"./themeUtils-7dcf5b71.js";import"./globalCss-94006b67.js";import"./accessibleHandler-e91101b2.js";import"./Compass-b37d7d1d.js";import"./GoTo-4d856ce0.js";import"./NavigationToggle-57c00adb.js";import"./Zoom-73b5f25a.js";import"./resources-d4afed0c.js";import"./unitBezier-881ac1eb.js";import"./TileInfoView-ce4d65fb.js";import"./TileKey-4b1303ff.js";import"./TileStrategy-a729431f.js";import"./QueueProcessor-4b9d43d3.js";import"./TileStore-c31b905a.js";import"./quickselect-bc0541de.js";import"./QuantizationParameters-f983cf8d.js";import"./ColorBackground-5c13202f.js";import"./ClipRect-9f8fe7eb.js";import"./enums-b1d611e3.js";import"./BaseGraphicContainer-4835aeec.js";import"./FeatureContainer-57c36de3.js";import"./AttributeStoreView-e5fce3c6.js";import"./TiledDisplayObject-e7d105ae.js";import"./labelingInfo-aae625ac.js";import"./LabelClass-c3c309a8.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";import"./color-a1c19855.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-73827040.js";import"./FramebufferObject-123b7c8d.js";import"./VertexArrayObject-d19dab8d.js";import"./WGLBrushVTLSymbol-00207292.js";import"./vec4f32-0d1b2306.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./ShaderCompiler-77d0dcb6.js";import"./ProgramTemplate-611fcbef.js";import"./Program-96bc94ed.js";import"./MaterialKey-96278cae.js";import"./alignmentUtils-ae955d28.js";import"./heatmapUtils-7f42325f.js";import"./heatmapTextureUtils-6877589a.js";import"./DefaultVertexAttributeLayouts-8962d8eb.js";import"./featureConversionUtils-09cf00ff.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./visualVariablesUtils-b310591f.js";import"./createSymbolSchema-001203d9.js";import"./cimAnalyzer-ce1886a0.js";import"./fontUtils-56b88a2f.js";import"./BidiEngine-9a40f2f4.js";import"./labelPoint-96433514.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-36423058.js";import"./quantizationUtils-17105106.js";import"./floatRGBA-ca990bbb.js";import"./ExpandedCIM-76245323.js";import"./clusterUtils-50a66940.js";import"./MD5-715f37cd.js";import"./util-8b594274.js";import"./TileContainer-8209da9f.js";import"./vec3f32-bac7ea57.js";import"./normalizeUtilsSync-7ead5aec.js";import"./projectionSupport-dcf335fc.js";import"./json-48e3ea08.js";import"./Matcher-fcb8339d.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-a90259bc.js";import"./ComputedAttributeStorage-bbcde1eb.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./TimeOnly-879c5107.js";const b=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],p={graphic:null,property:null,oldValue:null,newValue:null};function l(t){return t instanceof y||t instanceof f||t instanceof k||t instanceof M||t instanceof V||t instanceof v||t instanceof G}function U(t){return n.isCollection(t)&&t.length&&l(t.at(0))}function $(t){return Array.isArray(t)&&t.length>0&&l(t[0])}let s=class extends I(C){constructor(){super(...arguments),this._graphics=new n,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new w({getCollections:()=>this.layer==null||this.destroyed?[]:[this.layer.routeInfo!=null?new n([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange(()=>this._routeItems,t=>this._routeItemsChanged(t),u)}destroy(){var t;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),(t=this._get("_routeItems"))==null||t.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeatures(t){return this._graphicsView.hitTest(t).filter(i=>!!i.popupTemplate)}highlight(t){let i;i=l(t)?[this._getNetworkFeatureUid(t)]:$(t)?t.map(e=>this._getNetworkFeatureUid(e)):U(t)?t.map(e=>this._getNetworkFeatureUid(e)).toArray():[t.uid];const r=i.filter(h);return r.length?(this._addHighlight(r),c(()=>this._removeHighlight(r))):c()}async hitTest(t,i){if(this.suspended)return null;const r=this._graphicsView.hitTest(t).filter(h).map(o=>this._networkGraphicMap.get(o));if(!r.length)return null;const{layer:e}=this;return r.reverse().map(o=>({type:"route",layer:e,mapPoint:t,networkFeature:o}))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i);this._highlightIds.set(i,r+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),r=new F(t.featuresTilingScheme);this._graphicsView=new H({container:r,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(r),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return b.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const r=this._highlightIds.get(i)-1;r===0?this._highlightIds.delete(i):this._highlightIds.set(i,r)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map(i=>{const r=this._networkFeatureMap.get(i);return this._networkFeatureMap.delete(i),this._networkGraphicMap.delete(r),r}));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map(i=>{const r=this._createGraphic(i);return r.symbol==null?null:(this._networkFeatureMap.set(i,r),this._networkGraphicMap.set(r,i),r)}).filter(h));for(const i of t.added)this.addHandles([g(()=>i.geometry,(r,e)=>{this._updateGraphic(i,"geometry",r,e)}),g(()=>i.symbol,(r,e)=>{this._updateGraphic(i,"symbol",r,e)})],i);this._graphics.sort((i,r)=>this._getDrawOrder(i)-this._getDrawOrder(r))}}_updateGraphic(t,i,r,e){if(!this._networkFeatureMap.has(t)){const a=this._createGraphic(t);return this._networkFeatureMap.set(t,a),this._networkGraphicMap.set(a,t),void this._graphics.add(a)}const o=this._networkFeatureMap.get(t);o[i]=r,p.graphic=o,p.property=i,p.oldValue=e,p.newValue=r,this._graphicsView.graphicUpdateHandler(p)}_updateHighlight(){const t=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(t)}};m([d()],s.prototype,"_graphics",void 0),m([d()],s.prototype,"_routeItems",null),s=m([_("esri.views.2d.layers.RouteLayerView2D")],s);const Ji=s;export{Ji as default};
