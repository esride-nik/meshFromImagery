import{fX as O,fW as m,gw as S,gx as $,f8 as x,aW as i,fa as R,d8 as y,gy as g,gz as H,e_ as T,fC as C,fk as E,gA as A,gB as D,fe as M,d1 as N,d2 as v}from"./index-b516d057.js";import{f as G,s as P}from"./elevationInfoUtils-be36d866.js";import{g as I}from"./ray-8da55042.js";import{b as k,t as h,i as F}from"./Intersector-fa865806.js";import{A as U}from"./verticalOffsetUtils-e5214af9.js";import{U as B}from"./InteractiveToolBase-ddd44c70.js";function q(n,e){return w(n,()=>e)}function tn(n){return w(n,e=>e.plane)}function w(n,e){const t=i(),l=i();let s=!1;return r=>{const a=e(r);if(r.action==="start"){const c=m(r.screenStart,S($.get())),u=I(n.state.camera,c,b);u!=null&&(s=x(a,u,t))}if(!s)return null;const o=m(r.screenEnd,S($.get())),d=I(n.state.camera,o,b);return d==null?null:x(a,d,l)?{...r,renderStart:t,renderEnd:l,plane:a,ray:d}:null}}function z(n,e,t=0,l=null,s=null){let r=null;return a=>{if(a.action==="start"&&(r=n.sceneIntersectionHelper.intersectElevationFromScreen(g(a.screenStart.x,a.screenStart.y),e,t,s),r!=null&&l!=null&&!H(r,r,l))||r==null)return null;const o=n.sceneIntersectionHelper.intersectElevationFromScreen(g(a.screenEnd.x,a.screenEnd.y),e,t,s);return o!=null&&(l==null||H(o,o,l))?{...a,mapStart:r,mapEnd:o}:null}}function W(n,e,t,l=null,s=null){return z(n,t,G(e,n,t),l,s)}function _(n,e,t,l=null,s=null){return W(n,t,P(e),l,s)}function rn(n,e,t,l){const s=e.toMap(n.screenStart,{include:[t]});return s!=null?_(e,t,s,l):null}function X(n,e){const t=K,l=L,s=T();n.renderCoordsHelper.worldUpAtPosition(e,t);const r=C(s,t,E(l,e,n.state.camera.eye));return C(r,r,t),A(e,r,s)}function ln(n,e,t){let l=null;const s=new B;return s.next(q(n,X(n,e))).next(j(n,e)).next(J(n,t)).next(r=>{r.mapEnd.x=r.mapStart.x,r.mapEnd.y=r.mapStart.y,l=r}),r=>(l=null,s.execute(r),l)}function j(n,e){const t=i(),l=R(e);n.renderCoordsHelper.worldUpAtPosition(e,t);const s=i(),r=i(),a=o=>(E(o,o,e),D(t,o,o),n.viewingMode==="global"&&R(o)*Math.sign(M(t,o))<.001-l&&E(o,N(o,t,.001),e),v(o,o,e),o);return o=>(o.renderStart=a(y(s,o.renderStart)),o.renderEnd=a(y(r,o.renderEnd)),o)}function J(n,e){const t=n.renderCoordsHelper;return l=>{const s=t.fromRenderCoords(l.renderStart,e),r=t.fromRenderCoords(l.renderEnd,e);return s!=null&&r!=null?{...l,mapStart:s,mapEnd:r}:null}}var p;function sn(n){let e=null;return t=>{switch(t.action){case"start":e=n.disableDisplay();break;case"end":case"cancel":e!=null&&(e.remove(),e=null)}return t}}function on(n,e=null){const t=k(n.state.viewingMode);t.options.selectionMode=!0,t.options.store=h.MIN,t.options.hud=!1;const l=g(),s={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},r=i(),a=e??n.spatialReference,o=c=>{n.map.ground&&n.map.ground.opacity<1?s.exclude.add(U):s.exclude.delete(U),n.sceneIntersectionHelper.intersectIntersectorScreen(m(c,l),t,s);const u=t.results.min;let f;if(u.getIntersectionPoint(r))f=u.intersector===F.TERRAIN?p.GROUND:p.OTHER;else{if(!t.results.ground.getIntersectionPoint(r))return null;f=p.GROUND}return{location:n.renderCoordsHelper.fromRenderCoords(r,a),surfaceType:f}};let d;return c=>{if(c.action==="start"){const f=o(c.screenStart);d=f!=null?f.location:null}if(d==null)return null;const u=o(c.screenEnd);return(u==null?void 0:u.location)!=null?{...c,mapStart:d,mapEnd:u.location,surfaceType:u.surfaceType}:null}}(function(n){n[n.GROUND=0]="GROUND",n[n.OTHER=1]="OTHER"})(p||(p={}));const K=i(),L=i(),b=O();export{sn as A,_ as D,on as F,p as G,q as H,rn as M,ln as P,W as T,tn as U,J as k};
