import{an as _,s as E}from"./index-b516d057.js";import{e as I,n as S}from"./enums-f1a6a48a.js";import{E as i,S as T,I as g}from"./enums-b1d611e3.js";import{F as v,U as d,C as m}from"./enums-bdecffa2.js";import{t as B}from"./VertexElementDescriptor-2925c6af.js";import{x as A}from"./number-e491b09e.js";const y=_.getLogger("esri.views.2d.engine.webgl.Utils"),c="geometry",O=[{name:c,strideInBytes:12}],$=[{name:c,strideInBytes:36}],F=[{name:c,strideInBytes:24}],b=[{name:c,strideInBytes:12}],x=[{name:c,strideInBytes:40}],P=[{name:c,strideInBytes:36}],z=[{name:c,strideInBytes:36}];function l(t){const n={};for(const e of t)n[e.name]=e.strideInBytes;return n}const k=l([{name:c,strideInBytes:36}]),G=l(O),V=l($),Y=l(F),H=l(b),q=l(x),K=l(P),W=l(z);function yt(t,n){switch(t){case i.MARKER:return n===T.HEATMAP?G:k;case i.FILL:switch(n){case T.DOT_DENSITY:return H;case T.SIMPLE:case T.OUTLINE_FILL_SIMPLE:return Y;default:return V}case i.LINE:return q;case i.TEXT:return K;case i.LABEL:return W}}const X=[c],J=[c],Q=[c],Z=[c],j=[c];function tt(t){switch(t){case i.MARKER:return X;case i.FILL:return J;case i.LINE:return Q;case i.TEXT:return Z;case i.LABEL:return j}}function nt(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function pt(t,n){switch(n%4){case 0:case 2:return new Uint32Array(Math.floor(t*n/4));case 1:case 3:return new Uint8Array(t*n)}}function It(t,n){switch(n%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function St(t){return t!=null}function Tt(t){return typeof t=="number"}function gt(t){switch(t){case"butt":return I.BUTT;case"round":return I.ROUND;case"square":return I.SQUARE;default:return y.error(new E("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),I.ROUND}}function Et(t){switch(t){case"miter":return S.MITER;case"bevel":return S.BEVEL;case"round":return S.ROUND;default:return y.error(new E("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),S.ROUND}}function ht(t){switch(t){case"opacity":return g.OPACITY;case"color":return g.COLOR;case"rotation":return g.ROTATION;case"size":return g.SIZE;default:return y.error(`Cannot interpret unknown vv: ${t}`),null}}function wt(t,n,e,r,a,o,s){for(const f in o){const u=o[f].stride,h=nt(u),L=o[f].data,N=e[f].data;if(L==null||N==null)continue;const M=u*a.vertexCount/h,C=u*t/h,R=u*a.vertexFrom/h;for(let p=0;p<M;++p)N[p+C]=L[p+R]}if(s!=null&&r!=null){const f=a.indexCount;for(let u=0;u<f;++u)r[u+n]=s[u+a.indexFrom]-a.vertexFrom+t}}const Lt={[c]:v.STATIC_DRAW};function Nt(t,n){const e=[];for(let r=0;r<5;++r){const a=tt(r),o={};for(const s of a)o[s]={data:n(r,s)};e.push({data:t(r),buffers:o})}return e}function et(t){switch(t){case m.BYTE:case m.UNSIGNED_BYTE:return 1;case m.SHORT:case m.UNSIGNED_SHORT:return 2;case m.FLOAT:case m.INT:case m.UNSIGNED_INT:return 4}}function Dt(t){switch(t){case d.UNSIGNED_BYTE:return 1;case d.UNSIGNED_SHORT_4_4_4_4:return 2;case d.FLOAT:return 4;default:return void y.error(new E("webgl-utils",`Unable to handle type ${t}`))}}function Ut(t){switch(t){case d.UNSIGNED_BYTE:return Uint8Array;case d.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case d.FLOAT:return Float32Array;default:return void y.error(new E("webgl-utils",`Unable to handle type ${t}`))}}function rt(t){var e;const n={};for(const r in t){const a=t[r];let o=0;n[r]=a.map(s=>{const f=new B(s.name,s.count,s.type,o,0,s.normalized||!1);return o+=s.count*et(s.type),f}),(e=n[r])==null||e.forEach(s=>s.stride=o)}return n}const at=t=>{const n=new Map;for(const e in t)for(const r of t[e])n.set(r.name,r.location);return n},st=t=>{const n={};for(const e in t){const r=t[e];n[e]=r!=null&&r.length?r[0].stride:0}return n},w=new Map,At=(t,n)=>{if(!w.has(t)){const e=rt(n),r={strides:st(e),bufferLayouts:e,attributes:at(n)};w.set(t,r)}return w.get(t)};function Mt(t){t(i.FILL),t(i.LINE),t(i.MARKER),t(i.TEXT),t(i.LABEL)}const Ct=t=>"path"in t&&it(t.path),Rt=t=>!(!("url"in t)||!t.url)||!(!("imageData"in t)||!t.imageData),_t=t=>"imageData"in t&&t.imageData&&"contentType"in t&&t.contentType?`data:${t.contentType};base64,${t.imageData}`:"url"in t?t.url:null,D=t=>t!=null&&t.startsWith("data:image/gif"),vt=t=>"url"in t&&t.url&&(t.url.includes(".gif")||D(t.url))||"contentType"in t&&t.contentType==="image/gif"||"imageData"in t&&D(t.imageData),U=t=>t!=null&&t.startsWith("data:image/png"),Bt=t=>"url"in t&&t.url&&(t.url.includes(".png")||U(t.url))||"contentType"in t&&t.contentType==="image/png"||"imageData"in t&&U(t.imageData),Ot=t=>t.type&&t.type.toLowerCase().includes("3d");function $t(t){switch(t.type){case"line":{const n=t;return n.cim.type==="CIMSolidStroke"&&!n.dashTemplate}case"fill":return t.cim.type==="CIMSolidFill";case"esriSFS":return t.style==="esriSFSSolid"||t.style==="esriSFSNull";case"esriSLS":return t.style==="esriSLSSolid"||t.style==="esriSLSNull";default:return!1}}function Ft(t){switch("cim"in t?t.cim.type:t.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":return!1;case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":return ct(t);default:return!0}}function bt(t){const n="maxVVSize"in t&&t.maxVVSize,e="width"in t&&t.width||"size"in t&&t.size||0;return n||e}function xt(t){const n=[];for(let e=0;e<t.length;e++)n.push(t.charCodeAt(e));return n}const it=t=>!!t&&(t=t.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4)),ct=t=>{var n,e;return t.type==="fill"&&((e=(n=t==null?void 0:t.cim)==null?void 0:n.markerPlacement)==null?void 0:e.type)==="CIMMarkerPlacementInsidePolygon"};function Pt(t,n=0,e=!1){const r=t[n+3];return t[n]*=r,t[n+1]*=r,t[n+2]*=r,e||(t[n+3]*=255),t}function zt(t){if(!t)return 0;const{r:n,g:e,b:r,a}=t;return A(n*a,e*a,r*a,255*a)}function kt(t){if(!t)return 0;const[n,e,r,a]=t;return A(n*(a/255),e*(a/255),r*(a/255),a)}function Gt(t,n,e=0){if(n==null)return t[e]=0,t[e+1]=0,t[e+2]=0,void(t[e+3]=0);const{r,g:a,b:o,a:s}=n;t[e]=r*s/255,t[e+1]=a*s/255,t[e+2]=o*s/255,t[e+3]=s}export{Tt as $,nt as F,Et as G,Nt as H,Dt as K,pt as P,yt as R,ht as V,Ut as W,Lt as Y,Rt as a,Gt as b,kt as c,xt as d,At as e,Ft as f,zt as g,vt as i,wt as j,gt as k,$t as l,bt as m,Ct as n,Bt as o,Pt as r,_t as s,Mt as t,Ot as u,It as x,ct as y,St as z};