import{bg as D,bA as G,cb as g,hd as z,hk as L,dr as T,b9 as _,X as A,gQ as U,gl as b,a5 as a,a6 as p,a9 as q,gy as V,B as m,aW as d,cI as M,fu as x,d1 as B,fe as Q,fk as X,fv as j,fC as Y,mC as J,mD as K,cH as C,bh as N}from"./index-b516d057.js";import{h as ee}from"./UpdatingHandles-7949a657.js";import{r as O}from"./dehydratedFeatureComparison-7855b188.js";import{o as te,c as H,f as ie}from"./elevationInfoUtils-be36d866.js";import{l as ne}from"./ViewingMode-5d7d590b.js";import{w as se,V as re,p as oe,l as ae}from"./EditGeometryOperations-c2e73f2d.js";import{d as w,C as pe}from"./InteractiveToolBase-ddd44c70.js";import{w as le,g as he,b as ce}from"./snappingUtils-93e84fbe.js";import{c as $,p as E}from"./SketchTooltipOptions-cc43c059.js";import{e as I}from"./SnappingContext-90969376.js";import{f as de}from"./SnappingDragPipelineStep-e275580d.js";import{p as ue}from"./SnappingOperation-4a4ee09b.js";import{e as R}from"./dehydratedPoint-5a1dfed5.js";import{x as F}from"./hydratedFeatures-2365c307.js";import{r as ge}from"./mat2d-d4af8487.js";import{e as P,r as me}from"./mat2df64-4d1a9198.js";const We=["freehand","hybrid","click"],Z="click";class ve{constructor({grabbableForEvent:e}){this.events=new D,this.interactive=!0,this.selectable=!1,this.cursor=null,this.grabbable=!0,this.consumesClicks=!0,this.grabbableForEvent=e}destroy(){}intersectionDistance(e,i){return 0}attach(){}detach(){}onElevationChange(){}onViewChange(){}}const fe="crosshair",ye="progress";let o=class extends D.EventedMixin(G){constructor(t){super(t),this._createOperationCompleted=!1,this._hideDefaultCursor=!1,this._pointerDownStates=new Set,this._stagedScreenPoint=null,this._stagedPointerType=null,this._stagedPointerId=null,this._updatingHandles=new ee,this.constraint=void 0,this.isDraped=!0,this.labelOptions=new $,this.tooltipOptions=new E,this.cursor=null,this.loading=!1,this.snapToSceneEnabled=null,this.lastVertex=null,t.elevationInfo==null&&(this.elevationInfo=te(!!t.hasZ))}initialize(){const{geometryType:t,view:e}=this,i=e.spatialReference,n="viewingMode"in e.state?e.state.viewingMode:ne.Local,l=t==="segment"||t==="multipoint"?"polyline":t;this.coordinateHelper=se(this.hasZ,this.hasM,i),this._editGeometryOperations=new re(new oe(l,this.coordinateHelper)),this._snappingOperation=new ue({view:e,constrainResult:s=>{var r;return s?(r=this._getEffectiveDrawSurface())==null?void 0:r.constrainZ(s):void 0}}),this.addHandles([g(()=>this.stagedVertex,s=>{s!=null&&this.emit("cursor-update",{updated:null,vertices:[{componentIndex:0,vertexIndex:this._activeComponent.vertices.length,coordinates:this.coordinateHelper.pointToArray(s)}],operation:"apply",type:"vertex-update"})},{sync:!0,equals:(s,r)=>z(s,r,O)}),g(()=>this.view.viewpoint,(s,r)=>{s&&r&&L(s,r)&&this._onViewpointChange()})]),this._activeComponent=new ae(i,n),this._editGeometryOperations.data.components.push(this._activeComponent);const h=this.segmentLabels;h!=null&&(h.context={view:e,editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,labelOptions:this.labelOptions},this.addHandles([g(()=>this.labelOptions.enabled,s=>{h.visible=s},T),this.on("cursor-update",()=>{const s=this.stagedVertex;h.stagedVertex=s!=null?this.coordinateHelper.pointToVector(s):null})])),this.addHandles(this._editGeometryOperations.on(["vertex-add","vertex-update","vertex-remove"],s=>{const r=s.vertices.map(u=>({componentIndex:0,vertexIndex:u.index,coordinates:this.coordinateHelper.vectorToArray(u.pos)})),f=r.map(u=>u.coordinates);switch(s.type){case"vertex-add":this.emit(s.type,{...s,added:f,vertices:r});break;case"vertex-update":this.emit(s.type,{...s,updated:f,vertices:r});break;case"vertex-remove":this.emit(s.type,{...s,removed:f,vertices:r})}const S=this._activeComponent.getLastVertex(),y=S!=null?this.coordinateHelper.vectorToDehydratedPoint(S.pos):null;y!=null&&this.lastVertex!=null&&O(this.lastVertex,y)||(this.lastVertex=y)}));const c=this._manipulator=new ve({grabbableForEvent:s=>this.drawingMode!=="click"||s.pointerType==="touch"&&this._snappingEnabled&&this._pointerDownStates.size===1});this.manipulators.add(c),c.grabbable=t!=="point",this.addHandles([this._createManipulatorDragPipeline(c),c.events.on("immediate-click",s=>this._onImmediateClick(s)),c.events.on("immediate-double-click",s=>this._onImmediateDoubleClick(s)),g(()=>({effectiveCursor:this.effectiveCursor}),({effectiveCursor:s})=>{c.cursor=s},T)]),le(this,()=>{const s=this.view.inputManager.latestPointerType??"mouse",r=this._getSnappingContext(s);this.snappingManager!=null&&this._updatingHandles.addPromise(b(this._snappingOperation.resnap(this.snappingManager,r)))})}destroy(){_(this.segmentLabels),_(this._snappingOperation),this._editGeometryOperations=_(this._editGeometryOperations),this._updatingHandles.destroy()}get _snappingEnabled(){return this.snappingManager!=null&&this.snappingManager.options.effectiveEnabled}get _requiresScenePoint(){const t=this._getEffectiveDrawSurface();return this.view.type==="3d"&&this.drawSurface!==t}get canRedo(){return this._editGeometryOperations.canRedo}get canUndo(){return this._editGeometryOperations.canUndo}get committedVertices(){return this._activeComponent.vertices.map(t=>this.coordinateHelper.vectorToArray(t.pos))}set drawingMode(t){this._set("drawingMode",t??Z)}get effectiveCursor(){return this.loading?ye:this._hideDefaultCursor?null:this.cursor||fe}get interactive(){return this._manipulator.interactive}set interactive(t){this._manipulator.interactive=t}get isCompleted(){return this._createOperationCompleted}get numCommittedVertices(){return this._activeComponent.vertices.length}get numVertices(){return this.stagedVertex!=null?this._activeComponent.vertices.length+1:this._activeComponent.vertices.length}get snappingOptions(){return this.snappingManager!=null?this.snappingManager.options:null}get stagedVertex(){const t=this._snappingOperation.stagedPoint,{constraint:e,elevationInfo:i,view:n}=this;if(!t||!e)return t;const l=he(t,n,i),h=l?e.closestTo(l):void 0;return h?ce(h,t.spatialReference):t}set stagedVertex(t){this._snappingOperation.stagedPoint=A(t)}get updating(){return this._updatingHandles.updating}get vertices(){const t=this.committedVertices;return this.stagedVertex!=null&&t.push(this.coordinateHelper.pointToArray(this.stagedVertex)),t}cancel(){this.complete({aborted:!0})}commitStagedVertex(){if(this._snappingOperation.abort(),this.stagedVertex!=null){const{stagedVertex:t}=this;this.stagedVertex=null,this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(t))}}complete(t){const e=t&&t.aborted||!1;this._snappingOperation.abort(),this.snappingManager!=null&&this.snappingManager.doneSnapping(),this.geometryType==="segment"||this.geometryType==="point"?this.commitStagedVertex():this.stagedVertex=null;const i=this.geometryType==="multipoint"&&this.numVertices===0||this.geometryType==="polyline"&&this.numVertices<2||this.geometryType==="polygon"&&this.numVertices<3;this._createOperationCompleted=!i,(this.isCompleted||e)&&this.emit("complete",{vertices:this.vertices.map((n,l)=>({componentIndex:0,vertexIndex:l,coordinates:n})),aborted:e,type:"complete"})}onInputEvent(t){switch(t.type){case"pointer-down":this._pointerDownStates.add(t.pointerId);break;case"pointer-up":this._pointerDownStates.delete(t.pointerId)}switch(t.type){case"pointer-move":return this._onPointerMove(t);case"hold":return this._onHold(t)}}redo(){this._editGeometryOperations.redo()}undo(){this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._editGeometryOperations.undo()}_closeOnClickVertexIndex(t){const e=this._activeComponent;if(this.geometryType==="polygon"&&e.vertices.length>2){if(this._vertexWithinPointerDistance(e.vertices[0].pos,t))return 0;if(this._vertexWithinPointerDistance(e.vertices[e.vertices.length-1].pos,t))return e.vertices.length-1}return null}_createManipulatorDragPipeline(t){switch(this.drawingMode){case"click":return this._createManipulatorDragPipelineClick(t);case"freehand":return this._createManipulatorDragPipelineFreehand(t);case"hybrid":return this._createManipulatorDragPipelineHybrid(t)}}_createManipulatorDragPipelineClick(t){return w(t,(e,i,n,l)=>{const h=l==="touch"&&this._snappingEnabled;if(this.isCompleted||!h)return;const{snappingStep:c,cancelSnapping:s}=de({predicate:()=>h,snappingManager:this.snappingManager,snappingContext:new I({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,feature:this.graphic,pointer:l,visualizer:this.snappingVisualizer}),updatingHandles:this._updatingHandles,useZ:!this._requiresScenePoint});n=n.next(r=>(h&&this.snappingManager!=null&&this.snappingManager.doneSnapping(),r)).next(s),i.next(this._screenToMapDragEventStep()).next(r=>(r.action==="start"&&(this.stagedVertex=r.mapStart,(this.geometryType==="segment"||h&&this.numVertices===0)&&this.commitStagedVertex()),r)).next(pe(this.view,this.elevationInfo)).next(...c).next(r=>(h&&(this.stagedVertex=r.mapEnd,r.action==="end"&&this.commitStagedVertex()),r)).next(r=>(r.action==="end"&&(this.geometryType!=="segment"&&this.geometryType!=="point"||this.complete()),r))})}_createManipulatorDragPipelineFreehand(t){return w(t,(e,i)=>{this.isCompleted||i.next(this._screenToMapDragEventStep()).next(n=>(n.action==="start"&&(this.stagedVertex==null&&(this.stagedVertex=n.mapStart),this.geometryType==="segment"&&this.commitStagedVertex()),n)).next(n=>{switch(n.action){case"start":case"update":this.stagedVertex=n.mapEnd,this.geometryType!=="polygon"&&this.geometryType!=="polyline"||this.commitStagedVertex();break;case"end":this.complete()}return n})})}_createManipulatorDragPipelineHybrid(t){return w(t,(e,i)=>{this.isCompleted||i.next(this._screenToMapDragEventStep()).next(n=>(n.action==="start"&&(this.stagedVertex==null&&(this.stagedVertex=n.mapStart),this.commitStagedVertex()),n)).next(n=>{switch(n.action){case"start":case"update":this.stagedVertex=n.mapEnd,this.geometryType!=="polygon"&&this.geometryType!=="polyline"||this.commitStagedVertex();break;case"end":this.geometryType!=="segment"&&this.geometryType!=="point"||this.complete()}return n})})}get _drawAtFixedElevation(){return(this.geometryType==="segment"||this.geometryType==="polygon")&&this.numCommittedVertices>0}_getEffectiveDrawSurface(){if(this.elevationDrawSurface==null)return this.drawSurface;if(!this.coordinateHelper.hasZ())return this.elevationDrawSurface.defaultZ=null,this.elevationDrawSurface;let t=this.defaultZ,e=!1;return this.elevationInfo!=null&&this.elevationInfo.mode==="absolute-height"&&(e=!0),this.snapToSceneEnabled!=null&&(e=this.snapToSceneEnabled),this.elevationInfo!=null&&this.elevationInfo.mode==="on-the-ground"&&(e=!1),this._drawAtFixedElevation&&(t=this.coordinateHelper.getZ(this._activeComponent.vertices[0].pos),e=!1),e?this.drawSurface:(this.elevationDrawSurface.defaultZ=t,this.elevationDrawSurface)}_mapToScreen(t){var e;return(e=this._getEffectiveDrawSurface())==null?void 0:e.mapToScreen(t)}_onHold(t){this._snappingOperation.abort(),this.drawingMode==="click"&&t.pointerType==="touch"&&this._snappingEnabled&&(this.stagedVertex=t.mapPoint),t.stopPropagation()}_onImmediateClick(t){if(t.pointerType==="mouse"&&t.button===2||this._manipulator.dragging)return;const e=this._activeComponent;if(this._closeOnClickVertexIndex(t.screenPoint)!=null)return t.stopPropagation(),void this.complete();const i=this._screenToMap(t.screenPoint);if(i!=null)switch(this.drawingMode){case"freehand":this.geometryType==="point"&&(this.stagedVertex!=null?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i)),this.complete());break;case"click":case"hybrid":this._snappingOperation.abort(),this.stagedVertex!=null?this.commitStagedVertex():this._editGeometryOperations.appendVertex(this.coordinateHelper.pointToVector(i)),(this.geometryType==="point"||this.geometryType==="segment"&&e.vertices.length===2||this.geometryType==="segment"&&this.drawingMode==="hybrid"&&e.vertices.length===1)&&this.complete()}t.stopPropagation()}_onImmediateDoubleClick(t){this._manipulator.dragging||this.geometryType==="point"||(this.complete(),t.stopPropagation())}_onPointerMove(t){const e=U(t.x,t.y);this._stagedScreenPoint=e,this._stagedPointerType=t.pointerType,this._stagedPointerId=t.pointerId;const i=this._snappingOperation,n=this._manipulator;this._pointerDownStates.has(t.pointerId)||n.grabbing||!n.interactive?i.abort():(t.stopPropagation(),this._updateStagedVertexOnPointerMove(e,t.pointerType))}_onViewpointChange(){const t=this._manipulator;this._stagedPointerType==="mouse"&&this._stagedScreenPoint&&this._stagedPointerId!=null&&!this._pointerDownStates.has(this._stagedPointerId)&&!t.grabbing&&t.interactive?this._updateStagedVertexOnPointerMove(this._stagedScreenPoint,this._stagedPointerType??"mouse"):this._snappingOperation.abort()}_updateStagedVertexOnPointerMove(t,e){var r;const i=this._snappingOperation,n=this._closeOnClickVertexIndex(t);if(n!=null)return this._closeOnVertex(n),void i.abort();const l=this._screenToMap(t),h=this._requiresScenePoint?(r=this.drawSurface)==null?void 0:r.screenToMap(t):null;if(l==null)return this._hideDefaultCursor=!0,void i.abort();this._hideDefaultCursor=!1;const c=this.snappingManager;if(c==null)return this.stagedVertex=l,void i.abort();const s=this._getSnappingContext(e);this._updatingHandles.addPromise(b(i.snap({point:l,scenePoint:h},c,s)))}_closeOnVertex(t){this.stagedVertex=null;const e={componentIndex:0,vertexIndex:t,coordinates:this.coordinateHelper.vectorToArray(this._activeComponent.vertices[t].pos)};this.emit("cursor-update",{updated:null,vertices:[e],operation:"apply",type:"vertex-update"})}_screenToMap(t){var e;return(e=this._getEffectiveDrawSurface())==null?void 0:e.screenToMap(t)}_screenToMapDragEventStep(){let t=null;return e=>{if(e.action==="start"&&(t=this._screenToMap(e.screenStart)),t==null)return null;const i=this._screenToMap(e.screenEnd);return i!=null?{...e,mapStart:t,mapEnd:i}:null}}_vertexWithinPointerDistance(t,e){const n=this._mapToScreen(this.coordinateHelper.vectorToDehydratedPoint(t));return n!=null&&_e(n,e,25)}_getSnappingContext(t){var i;const e=this._drawAtFixedElevation?(i=this.elevationDrawSurface)==null?void 0:i.defaultZ:null;return new I({editGeometryOperations:this._editGeometryOperations,elevationInfo:this.elevationInfo,pointer:t,feature:this.graphic,visualizer:this.snappingVisualizer,selfSnappingZ:e!=null?{value:e,elevationInfo:this.elevationInfo}:null})}};function _e(t,e,i){const n=t.x-e.x,l=t.y-e.y;return n*n+l*l<=i}a([p()],o.prototype,"_hideDefaultCursor",void 0),a([p()],o.prototype,"_snappingOperation",void 0),a([p()],o.prototype,"_snappingEnabled",null),a([p({constructOnly:!0})],o.prototype,"graphic",void 0),a([p()],o.prototype,"constraint",void 0),a([p()],o.prototype,"defaultZ",void 0),a([p()],o.prototype,"isDraped",void 0),a([p({value:Z})],o.prototype,"drawingMode",null),a([p({constructOnly:!0})],o.prototype,"elevationDrawSurface",void 0),a([p({constructOnly:!0})],o.prototype,"elevationInfo",void 0),a([p({constructOnly:!0,type:$})],o.prototype,"labelOptions",void 0),a([p({constructOnly:!0,type:E})],o.prototype,"tooltipOptions",void 0),a([p({constructOnly:!0})],o.prototype,"geometryType",void 0),a([p({constructOnly:!0})],o.prototype,"hasM",void 0),a([p({constructOnly:!0})],o.prototype,"hasZ",void 0),a([p()],o.prototype,"cursor",void 0),a([p()],o.prototype,"effectiveCursor",null),a([p()],o.prototype,"loading",void 0),a([p({constructOnly:!0})],o.prototype,"manipulators",void 0),a([p({constructOnly:!0})],o.prototype,"drawSurface",void 0),a([p({constructOnly:!0})],o.prototype,"segmentLabels",void 0),a([p({constructOnly:!0})],o.prototype,"snappingManager",void 0),a([p({constructOnly:!0})],o.prototype,"snappingVisualizer",void 0),a([p()],o.prototype,"snapToSceneEnabled",void 0),a([p()],o.prototype,"stagedVertex",null),a([p()],o.prototype,"lastVertex",void 0),a([p()],o.prototype,"updating",null),a([p({constructOnly:!0})],o.prototype,"view",void 0),o=a([q("esri.views.draw.DrawOperation")],o);class ke{constructor(e,i,n,l=null){this._elevationInfo=e,this.defaultZ=i,this._view=n,this._excludeGraphics=l}screenToMap(e){if(this.defaultZ!=null)return this._view.sceneIntersectionHelper.intersectElevationFromScreen(V(e.x,e.y),this._elevationInfo,this.defaultZ,this._excludeGraphics);const i=this._view.sceneIntersectionHelper.intersectElevationFromScreen(V(e.x,e.y),this._elevationInfo,0,this._excludeGraphics);return i!=null&&(i.z=void 0),i}mapToScreen(e){const i=R(e.x,e.y,H(this._view,e,this._elevationInfo),e.spatialReference);return this._view.toScreen(i)}constrainZ(e){const{defaultZ:i}=this;return i!=null&&e.z!==i&&((e=F(e)).z=i),e}}class Ge{constructor(e,i,n=[]){this.view=e,this.elevationInfo=i,this.exclude=n}screenToMap(e){const i=this.view.toMap(e,{exclude:this.exclude});return i!=null&&(i.z=ie(i,this.view,this.elevationInfo)),i}mapToScreen(e){let i=e;return this.elevationInfo!=null&&(i=R(e.x,e.y,H(this.view,e,this.elevationInfo),e.spatialReference)),this.view.toScreen(i)}constrainZ(e){return e}}class ze{constructor(e,i=!1,n=0){this.view=e,this.hasZ=i,this.defaultZ=n,this.mapToScreen=l=>e.toScreen(l),this.screenToMap=i?l=>{const h=e.toMap(l);return h.z=n,h}:l=>e.toMap(l)}constrainZ(e){const{defaultZ:i}=this;return this.hasZ&&e.z!==i&&((e=F(e)).z=i),e}}function v(t,e,i=null){return i!=null?[t,e,i]:[t,e]}function W(t,e,i=null){return i!=null?{x:t,y:e,z:i}:{x:t,y:e}}class k{constructor(e){this.spatialReference=e}mapToLocalMultiple(e){return e.map(i=>this.mapToLocal(i)).filter(N)}get doUnnormalization(){return!1}}class xe extends k{constructor(e,i,n=null){super(i),this._defaultZ=n,this.transform=P(),this.transformInv=P(),this.transform=me(e),ge(this.transformInv,this.transform)}makeMapPoint(e,i){return v(e,i,this._defaultZ)}mapToLocal(e){return W(this.transform[0]*e[0]+this.transform[2]*e[1]+this.transform[4],this.transform[1]*e[0]+this.transform[3]*e[1]+this.transform[5])}localToMap(e){return v(this.transformInv[0]*e.x+this.transformInv[2]*e.y+this.transformInv[4],this.transformInv[1]*e.x+this.transformInv[3]*e.y+this.transformInv[5],this._defaultZ)}}class we extends k{constructor(e,i){super(e.spatialReference),this.view=e,this.defaultZ=null,this.pWS=d(),this.tangentFrameUpWS=d(),this.tangentFrameRightWS=d(),this.tangentFrameForwardWS=d(),this.localFrameRightWS=d(),this.localFrameUpWS=d(),this.worldToLocalTransform=M(),this.localToWorldTransform=M(),this.scale=1,this.scale=e.resolution,this.referenceMapPoint=i,this.defaultZ=i.hasZ?i.z:null;const n=e.state.camera.viewRight;this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint,this.pWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,x.X,this.tangentFrameRightWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,x.Y,this.tangentFrameUpWS),this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS,x.Z,this.tangentFrameForwardWS);const l=d();B(l,this.tangentFrameForwardWS,Q(n,this.tangentFrameForwardWS)),X(this.localFrameRightWS,n,l),j(this.localFrameRightWS,this.localFrameRightWS),Y(this.localFrameUpWS,this.tangentFrameForwardWS,this.localFrameRightWS),J(this.worldToLocalTransform,this.localFrameRightWS,this.tangentFrameRightWS),K(this.localToWorldTransform,this.worldToLocalTransform)}get doUnnormalization(){return this.view.viewingMode==="global"}makeMapPoint(e,i){return v(e,i,this.defaultZ)}mapToLocal(e){const i=d();this.view.renderCoordsHelper.toRenderCoords(new m({x:e[0],y:e[1],spatialReference:this.spatialReference}),i),C(i,i,this.worldToLocalTransform);const n=this.view.renderCoordsHelper.fromRenderCoords(i,this.view.spatialReference);return n!=null?W(n.x/this.scale,n.y/this.scale):null}localToMap(e){const i=d();this.view.renderCoordsHelper.toRenderCoords(new m({x:e.x*this.scale,y:e.y*this.scale,spatialReference:this.spatialReference}),i),C(i,i,this.localToWorldTransform);const n=this.view.renderCoordsHelper.fromRenderCoords(i,this.view.spatialReference);return n!=null?v(n.x,n.y,this.defaultZ):null}}function Le(t,e){if(t.type==="2d")return new xe(t.state.transform,t.spatialReference,e.length>2?e[2]:null);if(t.type==="3d"){const i=e.length>2?new m({x:e[0],y:e[1],z:e[2],spatialReference:t.spatialReference}):new m({x:e[0],y:e[1],spatialReference:t.spatialReference});return new we(t,i)}return null}export{Le as F,ze as a,We as c,Z as e,W as g,o as k,Ge as o,ke as r};
