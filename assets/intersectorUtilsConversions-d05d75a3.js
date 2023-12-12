import{d3 as V,l7 as b,l8 as x,aW as B}from"./index-b516d057.js";import{o as c,i as g,a as d,e as L,s,u}from"./Intersector-fa865806.js";import{n as $,o as f}from"./Intersector-2e1d9db3.js";import{i as p}from"./Intersector-a291e778.js";class H{constructor(t){this._store=t}destroy(){this._store.destroy()}get(t){return this._store.get(t)}put(t,n){this._store.put(t,n,n.values.byteLength+256)}}class S extends d{constructor(t,n,r,i){super(n,r),this.point=t,this.createGraphic=i}}function y(e){return c(e)&&e.intersector===g.PCL&&!!e.target}class v extends L{constructor(t,n,r,i,U){super(t),this.layerUid=t,this.sublayerUid=n,this.nodeIndex=r,this.componentIndex=i,this.triangleNr=U}}class O extends d{constructor(t,n,r){super(n,null),this.point=t,this.createVoxelGraphic=r}}function o(e){return c(e)&&e.intersector===g.I3S&&!!e.target}function m(e){return c(e)&&e.intersector===g.VOXEL&&!!e.target}function W(e,t){var n,r;return s(e)||u(e)?a((n=e.target)==null?void 0:n.object,t):$(e)?(r=t.map)==null?void 0:r.ground:y(e)||o(e)||f(e)||m(e)?a(e.target,t):null}function C(e,t){const n=w(e,t);return n!=null&&n.type==="graphic"?n.graphic:null}function w(e,t){var n;if(e==null)return null;if(s(e)||u(e))return h((n=e.target)==null?void 0:n.object,t);if(y(e)){const r=e.target.createGraphic();return{type:"graphic",graphic:r,layer:r.layer}}if(m(e)){const r=e.target.createVoxelGraphic();return{type:"graphic",graphic:r,layer:r.layer}}return f(e)||p(e)?h(e.target,t):o(e)?I(e.target,t):null}function h(e,t){if((e==null?void 0:e.graphicUid)==null)return null;const n=a(e,t);if(n==null)return null;if(n===t.graphics)return t.graphicsView==null||typeof e.graphicUid!="number"?null:t.graphicsView.getHit(e.graphicUid);const r=t.allLayerViews.find(i=>i.layer===n);return!r||r.suspended||e.graphicUid==null?null:"getHit"in r?r.getHit(e.graphicUid):null}function I(e,t){const n=a(e,t);if(n==null)return null;const r=t.allLayerViews.find(i=>i.layer===n);return r&&!r.suspended&&"getGraphicFromIntersectorTarget"in r?T(r.getGraphicFromIntersectorTarget(e)):null}function G(e,t){const n=a(e,t);if(n==null)return null;const r=t.allLayerViews.find(i=>i.layer===n);return r&&!r.suspended&&"getAABBFromIntersectorTarget"in r?r.getAABBFromIntersectorTarget(e):null}function T(e){return e!=null?{type:"graphic",graphic:e,layer:e.layer}:null}function a(e,t){return(e==null?void 0:e.layerUid)==null?null:t.graphicsView!=null&&e.layerUid===t.graphicsView.processor.layer.id?t.graphics:t.map.findLayerByUid(e.layerUid)}function E(e,t){if(s(e)||u(e))return V(e.target.object.boundingVolumeWorldSpace.bounds);if(p(e)){b(l,e.transformation);const n=Math.max(l[0],l[1],l[2]);return e.target.baseBoundingSphere.radius*n}if(o(e)){const n=G(e.target,t);return n?.5*x(n):null}return null}function M(e){return!s(e)&&!u(e)&&(p(e)?e.target.numLodLevels>1:!!o(e))}const l=B();export{M as B,E as V,O as c,w as d,C as f,W as g,o as l,v as o,S as s,H as t};
