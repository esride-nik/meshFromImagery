import{eH as Z,X as c,fP as z,fQ as R,fR as g,ah as b}from"./index-b516d057.js";import{e as v}from"./dehydratedPoint-5a1dfed5.js";function W(t){return"declaredClass"in t}function m(t){return"declaredClass"in t}function C(t){return"declaredClass"in t}function O(t,a){return t?C(t)?t:new Z({layer:a,sourceLayer:a,visible:t.visible,symbol:c(t.symbol),attributes:c(t.attributes),geometry:A(t.geometry)}):null}function A(t){return t==null?null:W(t)?t:z(H(t))}function H(t){const{wkid:a,wkt:n,wkt2:l,latestWkid:o}=t.spatialReference,i={wkid:a,wkt:n,wkt2:l,latestWkid:o};switch(t.type){case"point":{const{x:s,y:r,z:e,m:u}=t;return{x:s,y:r,z:e,m:u,spatialReference:i}}case"polygon":{const{rings:s,hasZ:r,hasM:e}=t;return{rings:f(s),hasZ:r,hasM:e,spatialReference:i}}case"polyline":{const{paths:s,hasZ:r,hasM:e}=t;return{paths:f(s),hasZ:r,hasM:e,spatialReference:i}}case"extent":{const{xmin:s,xmax:r,ymin:e,ymax:u,zmin:x,zmax:y,mmin:d,mmax:k,hasZ:w,hasM:M}=t;return{xmin:s,xmax:r,ymin:e,ymax:u,zmin:x,zmax:y,mmin:d,mmax:k,hasZ:w,hasM:M,spatialReference:i}}case"multipoint":{const{points:s,hasZ:r,hasM:e}=t;return{points:p(s)?h(s):s,hasZ:r,hasM:e,spatialReference:i}}default:return}}function f(t){return J(t)?t.map(a=>h(a)):t}function h(t){return t.map(a=>Array.from(a))}function J(t){for(const a of t)if(a.length!==0)return p(a);return!1}function p(t){return t.length>0&&(R(t[0])||g(t[0]))}function P(t,a){if(!t)return null;let n;if(m(t)){if(a==null)return t.clone();if(m(a))return a.copy(t)}return a!=null?(n=a,n.x=t.x,n.y=t.y,n.spatialReference=t.spatialReference,t.hasZ?(n.z=t.z,n.hasZ=t.hasZ):(n.z=void 0,n.hasZ=!1),t.hasM?(n.m=t.m,n.hasM=!0):(n.m=void 0,n.hasM=!1)):(n=v(t.x,t.y,t.z,t.spatialReference),t.hasM&&(n.m=t.m,n.hasM=!0)),n}function Q(t){const{wkid:a,wkt:n,wkt2:l,latestWkid:o}=t,i={wkid:a,wkt:n,wkt2:l,latestWkid:o};return b.fromJSON(i)}export{O as c,Q as k,W as o,A as u,P as x};
