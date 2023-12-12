import{f1 as G,da as X,aW as m,fX as u,gC as J,iZ as v,d2 as j,fq as N,d1 as $,fa as P,d8 as A,j0 as H,fv as S,fx as W,mf as k,fB as M,mg as C,a$ as q}from"./index-b516d057.js";import{l as x}from"./ViewingMode-5d7d590b.js";import{u as z}from"./boundedPlane-1da2f094.js";import{y as Y,I as B}from"./verticalOffsetUtils-e5214af9.js";var d,O;(function(r){r[r.OBJECT=0]="OBJECT",r[r.HUD=1]="HUD",r[r.TERRAIN=2]="TERRAIN",r[r.OVERLAY=3]="OVERLAY",r[r.I3S=4]="I3S",r[r.PCL=5]="PCL",r[r.LOD=6]="LOD",r[r.VOXEL=7]="VOXEL"})(d||(d={}));let F=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=O.ALL}};(function(r){r[r.MIN=0]="MIN",r[r.MINMAX=1]="MINMAX",r[r.ALL=2]="ALL"})(O||(O={}));class Q{constructor(t,s,i){this.object=t,this.geometryId=s,this.triangleNr=i}}class Z extends Q{constructor(t,s,i,a){super(t,s,i),this.center=a!=null?G(a):null}}class K{constructor(t){this.layerUid=t}}let ot=class extends K{constructor(t,s){super(t),this.graphicUid=s}};function w(r){return(r==null?void 0:r.dist)!=null}function dt(r){return(t,s,i)=>(X(R,t,s,i),!z(r,R))}function lt(r){return w(r)&&r.intersector===d.OBJECT&&!!r.target}function ct(r){return w(r)&&r.intersector===d.HUD&&!!r.target&&"center"in r.target&&r.target.center!=null}const R=m(),U=1e-5;class tt{constructor(t){this.options=new F,this._results=new rt,this.transform=new Y,this.tolerance=U,this.verticalOffset=null,this._ray=u(),this._rayEnd=m(),this._rayBeginTransformed=m(),this._rayEndTransformed=m(),this.viewingMode=t??x.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,s,i){this.resetWithRay(J(t,s,this._ray),i)}resetWithRay(t,s){this.camera=s,t!==this._ray&&v(t,this._ray),this.options.verticalOffset!==0?this.viewingMode===x.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,j(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(t=null,s,i,a,o){var l;this.point=s,this.filterPredicate=a,this.tolerance=i??U;const f=B(this.verticalOffset);if(t&&t.length>0){const y=o?e=>{o(e)&&this.intersectObject(e)}:e=>{this.intersectObject(e)};for(const e of t){const c=(l=e.getSpatialQueryAccelerator)==null?void 0:l.call(e);c!=null?(f!=null?c.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,y,f):c.forEachAlongRay(this._ray.origin,this._ray.direction,y),this.options.selectionMode&&this.options.hud&&c.forEachDegenerateObject(y)):e.objects.forAll(_=>y(_))}}this.sortResults()}intersectObject(t){const s=t.geometries;if(!s)return;const i=t.effectiveTransformation,a=B(this.verticalOffset);for(const o of s){if(!o.visible)continue;const{material:f,id:l}=o;this.transform.setAndInvalidateLazyTransforms(i,o.transformation),N(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),N(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const y=this.transform.transform;a!=null&&(a.objectTransform=this.transform),f.intersect(o,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(e,c,_,b,L,V)=>{if(e>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,e))return;const n=b?this._results.hud:this._results,E=b?h=>{const D=new Z(t,l,_,V);h.set(d.HUD,D,e,c,C,L)}:h=>h.set(d.OBJECT,{object:t,geometryId:l,triangleNr:_},e,c,y,L);if((n.min.drapedLayerOrder==null||L>=n.min.drapedLayerOrder)&&(n.min.dist==null||e<n.min.dist)&&E(n.min),this.options.store!==O.MIN&&(n.max.drapedLayerOrder==null||L<n.max.drapedLayerOrder)&&(n.max.dist==null||e>n.max.dist)&&E(n.max),this.options.store===O.ALL)if(b){const h=new I(this._ray);E(h),this._results.hud.all.push(h)}else{const h=new g(this._ray);E(h),this._results.all.push(h)}}})}}sortResults(t=this._results.all){t.sort((s,i)=>s.dist!==i.dist?(s.dist??0)-(i.dist??0):s.drapedLayerOrder!==i.drapedLayerOrder?(s.drapedLayerOrder??Number.MAX_VALUE)-(i.drapedLayerOrder??Number.MAX_VALUE):(i.drapedLayerGraphicOrder??Number.MIN_VALUE)-(s.drapedLayerGraphicOrder??Number.MIN_VALUE))}}function ut(r){return new tt(r)}class rt{constructor(){this.min=new g(u()),this.max=new g(u()),this.hud={min:new I(u()),max:new I(u()),all:new Array},this.ground=new g(u()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}class g{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?($(T,this.ray.direction,this.dist),P(T)):null}getIntersectionPoint(t){return!!w(this)&&($(T,this.ray.direction,this.dist),j(t,this.ray.origin,T),!0)}getTransformedNormal(t){return A(p,this.normal),p[3]=0,H(p,p,this.transformation),A(t,p),S(t,t)}constructor(t){this.intersector=d.OBJECT,this.normal=m(),this.transformation=W(),this._ray=u(),this.init(t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=d.OBJECT,v(t,this._ray)}set(t,s,i,a,o,f,l){this.intersector=t,this.dist=i,A(this.normal,a??k),M(this.transformation,o??C),this.target=s,this.drapedLayerOrder=f,this.drapedLayerGraphicOrder=l}copy(t){v(t.ray,this._ray),this.intersector=t.intersector,this.dist=t.dist,this.target=t.target,this.drapedLayerOrder=t.drapedLayerOrder,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,A(this.normal,t.normal),M(this.transformation,t.transformation)}}class I extends g{constructor(){super(...arguments),this.intersector=d.HUD}}function ft(r){return new g(r)}const T=m(),p=q();export{ft as M,ot as a,ut as b,dt as c,K as e,d as i,w as o,lt as s,O as t,ct as u,U as w};
