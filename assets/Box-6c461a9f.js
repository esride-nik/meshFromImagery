import{C as L,D as J,kQ as P,B as g,E as nt,dS as S,dU as D,dT as ct,bg as lt,bj as k,ge as U,gf as V,cc as pt,cb as b,dr as _t,b9 as F,h3 as dt,eH as R,a5 as u,a6 as m,a9 as ut}from"./index-b516d057.js";import{a as mt}from"./unitFormatUtils-67047561.js";import{i as x,s as H,a as gt,m as vt}from"./drawUtils-bd7471ac.js";import yt from"./GraphicMover-b901f690.js";import{l as ft}from"./HighlightHelper-5e29e60e.js";import{e as Gt}from"./layerUtils-437666a3.js";import{d as bt}from"./settings-24fe1554.js";import{p as K}from"./SketchTooltipOptions-cc43c059.js";import{i as xt,p as wt}from"./ExtentTooltipInfos-e0fd687c.js";import{u as j,m as z}from"./automaticLengthMeasurementUtils-412e2f10.js";import{r as St}from"./TranslateTooltipInfos-e784159d.js";import"./Cyclical-4c223a04.js";import"./screenUtils-8dc4a7f9.js";import"./signal-51ed66f5.js";import"./GraphicManipulator-bf7f8b04.js";import"./elevationInfoUtils-be36d866.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";import"./drapedUtils-5cffceb9.js";import"./layerViewUtils-6ebe90f4.js";import"./featureUtils-73b624d6.js";import"./utils-1a995f8e.js";import"./basemapUtils-6ec10a55.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./themeUtils-7dcf5b71.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./memoize-3e55df82.js";import"./quantityFormatUtils-e5b1c45f.js";import"./getDefaultUnitForView-d1ffbf16.js";import"./snappingUtils-93e84fbe.js";import"./dehydratedPoint-5a1dfed5.js";import"./Query-071039d7.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./euclideanLengthMeasurementUtils-aa8fca96.js";import"./projectVectorToVector-56c29b20.js";import"./measurementUtils-3881da59.js";import"./geometryEngine-656a968c.js";import"./geometryEngineBase-dfbd3a67.js";import"./hydrated-40effdd0.js";import"./projectVectorToWGS84ComparableLonLat-5675a9f4.js";import"./geodesicUtils-822c19ca.js";function B(t,i,e,s){const o=[];for(const r of t){const h=r.slice(0);o.push(h);const c=i*(r[0]-s.x)-e*(r[1]-s.y)+s.x,a=e*(r[0]-s.x)+i*(r[1]-s.y)+s.y;h[0]=c,h[1]=a}return o}function O(t,i,e){const{hasM:s,hasZ:o,spatialReference:r}=t,h=i*Math.PI/180,c=Math.cos(h),a=Math.sin(h);if("xmin"in t&&(e=e??t.center,t=new L({spatialReference:r,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){e=e??t.extent.center;const l=[];for(const n of t.paths)l.push(B(n,c,a,e));return new J({hasM:s,hasZ:o,spatialReference:r,paths:l})}if("rings"in t){e=e??t.extent.center;const l=[];for(const n of t.rings){const p=P(n),v=B(n,c,a,e);P(v)!==p&&v.reverse(),l.push(v)}return new L({hasM:s,hasZ:o,spatialReference:r,rings:l})}if("x"in t){e=e??t;const l=new g({x:c*(t.x-e.x)-a*(t.y-e.y)+e.x,y:a*(t.x-e.x)+c*(t.y-e.y)+e.y,spatialReference:r});return t.z!=null&&(l.z=t.z),t.m!=null&&(l.m=t.m),l}return"points"in t?(e=e??t.extent.center,new nt({hasM:s,hasZ:o,points:B(t.points,c,a,e),spatialReference:r})):null}class kt{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-start"}}class Rt{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move"}}class Z{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.dx=s,this.dy=o,this.type="move-stop"}}class Mt{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-start"}}class It{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate"}}class q{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-stop"}}class Ct{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-start"}}class Ht{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale"}}class Q{constructor(i,e,s,o){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=o,this.type="scale-stop"}}const _=bt.transformGraphics,Ot={centerIndicator:new S({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new D({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new D({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new S({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new S({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new S({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new S({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new ct({color:_.line.color,width:1})};let d=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=Ot,this.tooltipOptions=new K,this.view=null,this._getBounds=(()=>{const i=k();return(e,s)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const o of s){if(!o)continue;let r,h,c,a;if(o.type==="point")r=c=o.x,h=a=o.y;else if(o.type==="multipoint"){const l=U(o);[r,h,c,a]=V(i,[l])}else if(o.type==="extent")[r,h,c,a]=[o.xmin,o.ymin,o.xmax,o.ymax];else{const l=U(o);[r,h,c,a]=V(i,l)}e[0]=Math.min(r,e[0]),e[1]=Math.min(h,e[1]),e[2]=Math.max(c,e[2]),e[3]=Math.max(a,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new ft({view:t}),this._tooltip=new j({view:t}),this._setup(),this.addHandles([pt(()=>t==null?void 0:t.ready,()=>{const{layer:i,view:e}=this;Gt(e,i)},{once:!0,initial:!0}),b(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),b(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),b(()=>this.graphics,()=>this.refresh()),b(()=>this.layer,(i,e)=>{e&&this._resetGraphics(e),this.refresh()}),b(()=>this.highlightsEnabled,()=>{var i;(i=this._highlightHelper)==null||i.removeAll(),this._setUpHighlights()}),b(()=>this.tooltipOptions.enabled,i=>{this._tooltip=i?new j({view:this.view}):F(this._tooltip)},_t),b(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),dt),this.on("move-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStart)==null?void 0:s.call(e,i)}),this.on("move",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMove)==null?void 0:s.call(e,i)}),this.on("move-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStop)==null?void 0:s.call(e,i)}),this.on("rotate-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStart)==null?void 0:s.call(e,i)}),this.on("rotate",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotate)==null?void 0:s.call(e,i)}),this.on("rotate-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStop)==null?void 0:s.call(e,i)}),this.on("scale-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStart)==null?void 0:s.call(e,i)}),this.on("scale",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScale)==null?void 0:s.call(e,i)}),this.on("scale-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStop)==null?void 0:s.call(e,i)})])}destroy(){this._reset(),this._tooltip=F(this._tooltip)}get state(){var e;const t=((e=this.view)==null?void 0:e.ready)??!1,i=this.graphics.length&&this.layer;return t&&i?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=x(s,t,i,this.view);e.geometry=o}this.refresh(),this.emit("move-stop",new Z(this.graphics,null,t,i))}}scale(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,o=H(s,t,i);e.geometry=o}this.refresh(),this.emit("scale-stop",new Q(this.graphics,null,t,i))}}rotate(t,i){if(this._mover&&this.graphics.length){if(!i){const e=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;i=new g(e,s,this.view.spatialReference)}for(const e of this.graphics){const s=e.geometry,o=O(s,t,i);e.geometry=o}this.refresh(),this.emit("rotate-stop",new q(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){var t;(t=this._highlightHelper)==null||t.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new yt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:i=>this._onGraphicClickCallback(i),onGraphicMoveStart:i=>this._onGraphicMoveStartCallback(i),onGraphicMove:i=>this._onGraphicMoveCallback(i),onGraphicMoveStop:i=>this._onGraphicMoveStopCallback(i),onGraphicPointerOver:i=>this._onGraphicPointerOverCallback(i),onGraphicPointerOut:i=>this._onGraphicPointerOutCallback(i)}})}_getStartInfo(t){const[i,e,s,o]=this._getBoxBounds(k()),r=Math.abs(s-i),h=Math.abs(o-e),c=(s+i)/2,a=(o+e)/2,{x:l,y:n}=t.geometry;return{width:r,height:h,centerX:c,centerY:a,startX:l,startY:n,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const i=t.geometry,[e,s,o,r]=this._getBounds(k(),[i]);return{width:Math.abs(o-e),height:Math.abs(r-s),centerX:(o+e)/2,centerY:(r+s)/2,geometry:i}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:i,_xScale:e,_yScale:s,_backgroundGraphic:o,_vertexGraphics:r,_rotateHandleGraphic:h,symbols:c}=this,a=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),o.symbol=c.fill.active,this._startInfo=this._getStartInfo(a),this._updateTooltip(a,t.viewEvent),a===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Mt(this.graphics,a,i))):r.includes(a)?(this._activeHandleGraphic=a,this.emit("scale-start",new Ct(this.graphics,a,e,s))):this.emit("move-start",new kt(this.graphics,a,t.dx,t.dy))}_onGraphicMoveCallback(t){const i=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(i))this._scaleGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("scale",new Ht(this.graphics,i,this._xScale,this._yScale));else if(i===this._rotateHandleGraphic)this._rotateGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("rotate",new It(this.graphics,i,this._angleOfRotation));else{const{dx:e,dy:s}=t;this._totalDx+=e,this._totalDy+=s,this._moveGraphic(i,e,s),this._updateTooltip(i,t.viewEvent),this.emit("move",new Rt(this.graphics,i,e,s))}}_onGraphicMoveStopCallback(t){const i=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:e,_totalDx:s,_totalDy:o,_xScale:r,_yScale:h,_vertexGraphics:c,_rotateHandleGraphic:a}=this;this.refresh(),i===a?(this.view.cursor="pointer",this.emit("rotate-stop",new q(this.graphics,i,e))):c.includes(i)?this.emit("scale-stop",new Q(this.graphics,i,r,h)):this.emit("move-stop",new Z(this.graphics,i,s,o))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:i,_vertexGraphics:e,graphics:s,_rotateHandleGraphic:o,symbols:r,view:h}=this,c=t.graphic;if(this._hoveredGraphic=c,c===o)return o.symbol=r.rotator.hover,h.cursor="pointer",void this._updateTooltip(c);if(s.includes(c)||c===i)return void(h.cursor="move");if(!e.includes(c))return void(h.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=r.handles.hover;const a=h.rotation;let l,n=t.index;switch(n<8&&(a>=0&&a<45?n%=8:n=a>=45&&a<90?(n+1)%8:a>=90&&a<135?(n+2)%8:a>=135&&a<180?(n+3)%8:a>=180&&a<225?(n+4)%8:a>=225&&a<270?(n+5)%8:a>=270&&a<315?(n+6)%8:(n+7)%8),n){case 0:case 4:l="nwse-resize";break;case 1:case 5:l="ns-resize";break;case 2:case 6:l="nesw-resize";break;case 3:case 7:l="ew-resize";break;default:l="pointer"}h.cursor=l}_onGraphicPointerOutCallback(t){const{_vertexGraphics:i,_rotateHandleGraphic:e,symbols:s,view:o}=this;this._hoveredGraphic=null,t.graphic===e?e.symbol=s.rotator.default:i.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),o.cursor="default",this._updateTooltip()}_scaleGraphic(t){var Y;const{_startInfo:i,_vertexGraphics:e,preserveAspectRatio:s,view:o}=this,{centerX:r,centerY:h,startX:c,startY:a}=i,{resolution:l,transform:n}=o.state,p=e.indexOf(t);p!==1&&p!==5||this._updateX(t,r),p!==3&&p!==7||this._updateY(t,h);const{x:v,y}=t.geometry,T=n[0]*v+n[2]*y+n[4],$=n[1]*v+n[3]*y+n[5],M=((Y=i.graphicInfos)==null?void 0:Y.map(w=>w.geometry))??[];if(s){const w=n[0]*r+n[2]*h+n[4],I=n[1]*r+n[3]*h+n[5],f=n[0]*c+n[2]*a+n[4],G=n[1]*c+n[3]*a+n[5];this._xScale=this._yScale=gt(w,I,f,G,T,$);for(const C of M){const E=M.indexOf(C);this.graphics[E].geometry=H(C,this._xScale,this._yScale,[r,h])}this._updateBackgroundGraphic()}else{const{width:w,height:I}=i;let f=v-c,G=a-y;if(p===1||p===5?f=0:p!==3&&p!==7||(G=0),f===0&&G===0)return;const C=w+(c>r?f:-1*f),E=I+(a<h?G:-1*G),W=r+f/2,tt=h+G/2;this._xScale=C/w||1,this._yScale=E/I||1,p===1||p===5?this._xScale=1:p!==3&&p!==7||(this._yScale=1);const et=(W-r)/l,it=(tt-h)/l,st=H(i.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,et,it,o,!0);const{centerX:N,centerY:A}=this._getGraphicInfo(this._backgroundGraphic),ot=(N-r)/l,rt=-1*(A-h)/l;for(const X of M){const at=M.indexOf(X),ht=H(X,this._xScale,this._yScale,[r,h]);this.graphics[at].geometry=x(ht,ot,rt,o,!0)}this._centerGraphic.geometry=new g(N,A,o.spatialReference)}}_rotateGraphic(t){var v;const{centerX:i,centerY:e,startX:s,startY:o,box:r,rotate:h}=this._startInfo,c=this.view.spatialReference,a=new g(s,o,c),l=new g(i,e,c),n=t.geometry;this._angleOfRotation=vt(a,n,l);const p=((v=this._startInfo.graphicInfos)==null?void 0:v.map(y=>y.geometry))??[];for(const y of p){const T=p.indexOf(y),$=O(y,this._angleOfRotation,l);this.graphics[T].geometry=$}this._backgroundGraphic.geometry=O(r,this._angleOfRotation,l),this._rotateHandleGraphic.geometry=O(h,this._angleOfRotation,l)}_moveGraphic(t,i,e){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view);for(const o of this.graphics)o!==t&&(o.geometry=x(o.geometry,i,e,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,i,e,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new R(null,i.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new R(null,i.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new R(null,i.rotatorLine,t),this._rotateHandleGraphic=new R(null,i.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let e=0;e<8;e++)this._vertexGraphics.push(new R(null,i.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateSymbolsForTheme(){var i,e;const t=this.view.effectiveTheme.accentColor;this.symbols={...this.symbols,fill:{active:(i=this.symbols.fill.active)==null?void 0:i.clone().set("outline.color",t),default:(e=this.symbols.fill.default)==null?void 0:e.clone().set("outline.color",t)},handles:{...this.symbols.handles,default:this.symbols.handles.default.clone().set("outline.color",t)},rotator:{...this.symbols.rotator,default:this.symbols.rotator.default.clone().set("outline.color",t)},rotatorLine:this.symbols.rotatorLine.clone().set("color",t)};for(const s of this._vertexGraphics)s.symbol=s===this._hoveredGraphic?this.symbols.handles.hover:this.symbols.handles.default;this._backgroundGraphic.symbol=this.symbols.fill.default,this._rotateHandleGraphic.symbol=this._rotateHandleGraphic===this._hoveredGraphic?this.symbols.rotator.hover:this.symbols.rotator.default,this._rotateLineGraphic.symbol=this.symbols.rotatorLine}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((i,e)=>{const[s,o]=t[e];this._updateXY(i,s,o)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new L({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,i,e,s]=this._getBoxBounds(k()),o=(e+t)/2,r=(s+i)/2;this._centerGraphic.geometry=new g(o,r,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:i}=this._vertexGraphics[1].geometry,e=i+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new g(t,e,this.view.spatialReference)}_updateRotateLineGraphic(){var e;if(!this._vertexGraphics.length||!((e=this._rotateHandleGraphic)!=null&&e.geometry))return;const t=this._vertexGraphics[1].geometry,i=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new J({paths:[[t.x,t.y],[i.x,i.y]],spatialReference:this.view.spatialReference})}_updateXY(t,i,e){t.geometry=new g(i,e,this.view.spatialReference)}_updateX(t,i){const e=t.geometry.y;t.geometry=new g(i,e,this.view.spatialReference)}_updateY(t,i){const e=t.geometry.x;t.geometry=new g(e,i,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>(t==null?void 0:t.geometry)!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const i=this.graphics.map(e=>e.geometry);return this._getBounds(t,i)}_getCoordinates(t){const[i,e,s,o]=this._getBoxBounds(k());if(t){const r=(i+s)/2,h=(o+e)/2;return[[i,o],[r,o],[s,o],[s,h],[s,e],[r,e],[i,e],[i,h]]}return[[i,o],[s,o],[s,e],[i,e]]}_updateTooltip(t,i){if(this._tooltip==null)return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:e,graphics:s,_vertexGraphics:o,_rotateHandleGraphic:r}=this;t===r?this._updateRotateTooltip():o.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===e)&&this._updateMoveTooltip(i)}_updateRotateTooltip(){this._tooltip!=null&&(this._tooltip.info=new xt({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:i,_yScale:e,tooltipOptions:s,view:o}=this;if(t==null)return;const r=o.spatialReference,h=this._getCoordinates(),c=new g(h[0][0],h[0][1],r),a=new g(h[1][0],h[1][1],r),l=new g(h[2][0],h[2][1],r),n=z(c,a),p=z(a,l);if(n==null||p==null)return;const v=Math.abs(i),y=Math.abs(e);t.info=new wt({tooltipOptions:s,xScale:v,yScale:y,xSize:n,ySize:p})}_updateMoveTooltip(t){const{_tooltip:i,tooltipOptions:e,view:s}=this;if(i==null)return;const o=new St({tooltipOptions:e});if(t){const{x:r,y:h}=t.origin,c=s.toMap(t),a=s.toMap({x:r,y:h}),l=z(a,c);o.distance=l??mt}i.info=o}};u([m()],d.prototype,"_tooltip",void 0),u([m({readOnly:!0})],d.prototype,"type",void 0),u([m()],d.prototype,"callbacks",void 0),u([m()],d.prototype,"enableMovement",void 0),u([m()],d.prototype,"enableRotation",void 0),u([m()],d.prototype,"enableScaling",void 0),u([m()],d.prototype,"graphics",void 0),u([m()],d.prototype,"highlightsEnabled",void 0),u([m()],d.prototype,"layer",void 0),u([m()],d.prototype,"preserveAspectRatio",void 0),u([m()],d.prototype,"showCenterGraphic",void 0),u([m({readOnly:!0})],d.prototype,"state",null),u([m()],d.prototype,"symbols",void 0),u([m({type:K})],d.prototype,"tooltipOptions",void 0),u([m({constructOnly:!0})],d.prototype,"view",void 0),d=u([ut("esri.views.draw.support.Box")],d);const we=d;export{we as default};
