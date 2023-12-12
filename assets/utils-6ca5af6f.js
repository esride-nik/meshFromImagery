import{fU as I,_ as d,dT as E,dA as f,an as x,mU as p,mV as C,b4 as V,aK as $}from"./index-b516d057.js";import"./basemapUtils-6ec10a55.js";import{N}from"./utils-1a995f8e.js";import{a as U}from"./HeatmapColorStop-3fff4333.js";const B=/^-?(\d+)(\.(\d+))?$/i;function M(t,e){return t-e}function _(t,e){let n,a;return n=Number(t.toFixed(e)),n<t?a=n+1/10**e:(a=n,n-=1/10**e),n=Number(n.toFixed(e)),a=Number(a.toFixed(e)),[n,a]}function O(t,e,n,a,o){const l=R(t,e,n,a),i=l.previous==null||l.previous<=o,r=l.next==null||l.next<=o;return i&&r||l.previous+l.next<=2*o}function v(t){const e=String(t),n=e.match(B);if(n&&n[1])return{integer:n[1].split("").length,fractional:n[3]?n[3].split("").length:0};if(e.toLowerCase().includes("e")){const a=e.split("e"),o=a[0],l=a[1];if(o&&l){const i=Number(o);let r=Number(l);const u=r>0;u||(r=Math.abs(r));const s=v(i);return u?(s.integer+=r,r>s.fractional?s.fractional=0:s.fractional-=r):(s.fractional+=r,r>s.integer?s.integer=1:s.integer-=r),s}}return{integer:0,fractional:0}}function R(t,e,n,a){const o={previous:null,next:null};if(n!=null){const l=t-n,i=e-n-l;o.previous=Math.floor(Math.abs(100*i/l))}if(a!=null){const l=a-t,i=a-e-l;o.next=Math.floor(Math.abs(100*i/l))}return o}function z(t,e={}){const n=t.slice(0),{tolerance:a=2,strictBounds:o=!1,indexes:l=n.map((i,r)=>r)}=e;l.sort(M);for(let i=0;i<l.length;i++){const r=l[i],u=n[r],s=r===0?null:n[r-1],A=r===n.length-1?null:n[r+1],m=v(u).fractional;if(m){let g,w=0,h=!1;for(;w<=m&&!h;){const b=_(u,w);g=o&&i===0?b[1]:b[0],h=O(u,g,s,A,a),w++}h&&(n[r]=g)}}return n}const S={maximumFractionDigits:20};function q(t){return I(t,S)}const Q="<",k=">";function K(t,e,n,a){let o="";return e===0?o=`${Q} `:e===n&&(o=`${k} `),o+(a?N(t,a):q(t))}const J=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];async function j(t){if(!("visualVariables"in t)||!t.visualVariables)return null;const e=t.visualVariables.find(i=>i.type==="color");if(!e)return null;let n=null,a=null;if(e.stops){if(e.stops.length===1)return e.stops[0].color;n=e.stops[0].value,a=e.stops[e.stops.length-1].value}const o=n!=null&&a!=null?n+(a-n)/2:0,{getColor:l}=await d(()=>import("./index-b516d057.js").then(i=>i.uI),["assets/index-b516d057.js","assets/index-b252abd2.css"]);return l(e,o)??null}async function Z(t,e){const n=t.trailCap,a=t.trailWidth||1,o=e||await j(t)||t.color;return new E({cap:n,color:o,width:a})}function tt(t){return t!=null&&typeof t=="object"&&"min"in t&&"max"in t}const L=new f([64,64,64]);function y(t,e){const n=[],a=t.length-1;return t.length===5?n.push(0,2,4):n.push(0,a),t.map((o,l)=>n.includes(l)?K(o,l,a,e):null)}async function W(t,e,n){let a=!1,o=[],l=[];if(t.stops){const s=t.stops;o=s.map(A=>A.value),a=s.some(A=>!!A.label),a&&(l=s.map(A=>A.label))}const i=o[0],r=o[o.length-1];if(i==null&&r==null)return null;const u=a?null:y(o,n);return(await Promise.all(o.map(async(s,A)=>({value:s,color:t.type==="opacity"?await F(s,t,e):(await d(()=>import("./index-b516d057.js").then(m=>m.uI),["assets/index-b516d057.js","assets/index-b252abd2.css"])).getColor(t,s),label:a?l[A]:(u==null?void 0:u[A])??""})))).reverse()}async function F(t,e,n){const a=new f(n??L),o=(await d(()=>import("./index-b516d057.js").then(l=>l.uI),["assets/index-b516d057.js","assets/index-b252abd2.css"])).getOpacity(e,t);return o!=null&&(a.a=o),a}function et(t){let e=!1,n=[],a=[];n=t.map(r=>r.value),e=t.some(r=>!!r.label),e&&(a=t.map(r=>r.label??""));const o=n[0],l=n[n.length-1];if(o==null&&l==null)return null;const i=e?null:y(n);return n.map((r,u)=>({value:r,color:G(r,t),label:e?a[u]:(i==null?void 0:i[u])??""})).reverse()}function G(t,e){const{startIndex:n,endIndex:a,weight:o}=P(t,e);if(n===a)return e[n].color;const l=f.blendColors(e[n].color,e[a].color,o);return new f(l)}function P(t,e){let n=0,a=e.length-1;return e.some((o,l)=>t<o.value?(a=l,!0):(n=l,!1)),{startIndex:n,endIndex:a,weight:(t-e[n].value)/(e[a].value-e[n].value)}}function nt(t,e){let n=[];if(t&&t.type==="multipart")t.colorRamps.reverse().forEach((a,o)=>{o===0?n.push({value:e.max,color:new f(a.toColor),label:"high"}):n.push({value:null,color:new f(a.toColor),label:""}),o===t.colorRamps.length-1?n.push({value:e.min,color:new f(a.fromColor),label:"low"}):n.push({value:null,color:new f(a.fromColor),label:""})});else{let a,o;t&&t.type==="algorithmic"?(a=t.fromColor,o=t.toColor):(a=[0,0,0,1],o=[255,255,255,1]),n=[{value:e.max,color:new f(o),label:"high"},{value:e.min,color:new f(a),label:"low"}]}return n}function H(t){if(!t.colorStops)return[];const e=[...t.colorStops].filter(a=>{var o;return((o=a.color)==null?void 0:o.a)>0});let n=e.length-1;if(e&&e[0]){const a=e[n];a&&a.ratio!==1&&(e.push(new U({ratio:1,color:a.color})),n++)}return e.map((a,o)=>{var i,r;let l="";return o===0?l=((i=t.legendOptions)==null?void 0:i.minLabel)||"low":o===n&&(l=((r=t.legendOptions)==null?void 0:r.maxLabel)||"high"),{color:a.color,label:l,ratio:a.ratio}}).reverse()}x.getLogger("esri.renderers.support.utils");const ot=V("short-date");async function c(t,e,n){$(t,e,()=>[]).push(...n)}async function at(t){var n,a;const e=new Map;if(!t)return e;if("visualVariables"in t&&t.visualVariables){const o=t.visualVariables.filter(l=>l.type==="color");for(const l of o){const i=(await W(l)??[]).map(r=>r.color);await c(e,l.field||l.valueExpression,i)}}if(t.type==="heatmap"){const o=H(t).map(l=>l.color);await c(e,t.field||t.valueExpression,o)}else if(t.type==="pie-chart"){for(const o of t.attributes)await c(e,o.field||o.valueExpression,[o.color]);await c(e,"default",[(n=t==null?void 0:t.othersCategory)==null?void 0:n.color,p(t.backgroundFillSymbol,null)])}else if(t.type==="dot-density"){for(const o of t.attributes)await c(e,o.field||o.valueExpression,[o.color]);await c(e,"default",[t.backgroundColor])}else if(t.type==="unique-value")if(((a=t.authoringInfo)==null?void 0:a.type)==="predominance")for(const o of t.uniqueValueInfos??[])await c(e,o.value.toString(),[p(o.symbol,null)]);else{const o=(t.uniqueValueInfos??[]).map(s=>p(s.symbol,null)),{field:l,field2:i,field3:r,valueExpression:u}=t;(l||u)&&await c(e,l||u,o),i&&await c(e,i,o),r&&await c(e,r,o)}else if(t.type==="class-breaks"){const o=t.classBreakInfos.map(r=>p(r.symbol,null)),{field:l,valueExpression:i}=t;await c(e,l??i,o)}else t.type==="simple"&&await c(e,"default",[p(t.symbol,null)]);return"defaultSymbol"in t&&t.defaultSymbol&&await c(e,"default",[p(t.defaultSymbol,null)]),e.forEach((o,l)=>{const i=C(o.filter(Boolean),(r,u)=>JSON.stringify(r)===JSON.stringify(u));e.set(l,i)}),e}export{Q as a,k as b,G as c,et as d,H as e,tt as f,nt as g,W as h,v as i,R as l,Z as n,j as o,K as r,J as s,z as u,ot as v,at as x};
