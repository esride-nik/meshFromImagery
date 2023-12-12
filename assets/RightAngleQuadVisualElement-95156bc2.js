import{aW as d,gJ as h,gE as _,f9 as m,fv as p,fk as f,d8 as u,fn as g,gL as O,cb as S,d2 as b,f5 as c,gM as M,gN as R,gO as v,gH as w,gP as $,fx as j}from"./index-b516d057.js";import{e as q}from"./dehydratedPoint-5a1dfed5.js";import{t as G}from"./EngineVisualElement-43f3e8cb.js";import{b as z,h as T,f as C,s as I}from"./RenderGeometry-5dbc1699.js";import{d as D}from"./Material-5f4156ac.js";import{f as P}from"./ColorMaterial-bdf1f62a.js";class J extends G{constructor(e){super(e),this._maxSize=0,this._position=d(),this._up=d(),this._right=d(),this._renderOccluded=D.OccludeAndTransparent,this._color=h(1,0,0,1),this._outlineColor=h(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=D.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){_(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){_(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=this._outlineSize===0!=(e===0);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:t,next:r}){this._maxSize=Math.min(m(t,e),m(t,r))/3,p(this._up,f(this._up,e,t)),p(this._right,f(this._right,r,t)),u(this._position,t),this.recreateGeometry()}_createObject3DResources(e){const t=new P(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new z(this._outlineMaterialParameters);return this._createObject3DGeometries(e,t,r),{quadMaterial:t,outlineMaterial:r,forEach:s=>{s(t),r&&s(r)}}}_createObject3DGeometries(e,t,r){if(g(this._up,O)&&g(this._right,O))return;const s=this._createGeometries(t,r);for(const o of s)e.addGeometry(o);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new P(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new z(this._outlineMaterialParameters),r=this._createGeometries(e,t).map(s=>new T(s));return this._setTransformDraped(r),{quadMaterial:e,outlineMaterial:t,geometries:r,pixelRatioHandle:S(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_createGeometries(e,t){const{up:r,right:s,corner:o}=this._getVertices(),a=this._quadGeometryData(r,s,o,e);return t?[a,C(t,[r,o,s])]:[a]}_getVertices(){let e=this._up,t=this._right;const r=b(c.get(),e,t);return this.isDraped&&(e=u(c.get(),e),t=u(c.get(),t),e[2]=0,t[2]=0,r[2]=0),{up:e,right:t,corner:r}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const t=this.view.state.camera,r=this._size*t.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,r);M(i,this._position),R(i,i,[s,s,s]),e.transformation=i}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{_position:s,_size:o}=this,a=u(c.get(),s);a[2]=I;const n=F;n.spatialReference=t.renderer.spatialReference,n.x=a[0],n.y=a[1];const y=o*(this.view.overlayPixelSizeInMapUnits(n)*r),l=Math.min(this._maxSize,y);M(i,a),R(i,i,[l,l,1]);for(const x of e)x.transformation=i}_quadGeometryData(e,t,r,s){return new v(s,[[w.POSITION,new $([0,0,0,...t,...e,...r],[0,1,2,1,2,3],3,!0)]])}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){var e,t;(e=this.object3dResources.resources)==null||e.quadMaterial.setParameters(this._quadMaterialParameters),(t=this.drapedResources.resources)==null||t.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){var e,t,r,s;(t=(e=this.object3dResources.resources)==null?void 0:e.outlineMaterial)==null||t.setParameters(this._outlineMaterialParameters),(s=(r=this.drapedResources.resources)==null?void 0:r.outlineMaterial)==null||s.setParameters(this._outlineMaterialParameters)}}const i=j(),F=q(0,0,void 0,null);export{J as z};
