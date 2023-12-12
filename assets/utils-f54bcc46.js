import{iH as q,iI as U,iJ as j,eN as A,B as Y,iK as C,aL as Z,dB as _,ah as R,aZ as H}from"./index-b516d057.js";import{L as J}from"./quantizationUtils-17105106.js";import{y as K,m as Q}from"./heatmapUtils-7f42325f.js";import{Z as W}from"./utils-1a995f8e.js";const X="<Null>",tt="equal-interval",et=1,nt=5,lt=10,it=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,at=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),ot=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),rt=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function F(t){return t==null||typeof t=="string"&&!t?X:t}function st(t){const e=t.normalizationField!=null||t.normalizationType!=null,n=t.minValue!=null||t.maxValue!=null,l=!!t.sqlExpression&&t.supportsSQLExpression;return!e&&!n&&!l}function Et(t){const e=t.returnDistinct?[...new Set(t.values)]:t.values,n=e.filter(a=>a!=null).sort(),l=n.length,i={count:l,min:n[0],max:n[l-1]};return t.supportsNullCount&&(i.nullcount=e.length-l),t.percentileParams&&(i.median=B(e,t.percentileParams)),i}function ut(t){const{values:e,useSampleStdDev:n,supportsNullCount:l}=t;let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=null,r=null,s=null,f=null,c=0;const d=t.minValue==null?-1/0:t.minValue,m=t.maxValue==null?1/0:t.maxValue;for(const u of e)Number.isFinite(u)?u>=d&&u<=m&&(o=o===null?u:o+u,i=Math.min(i,u),a=Math.max(a,u),c++):typeof u=="string"&&c++;if(c&&o!=null){r=o/c;let u=0;for(const v of e)Number.isFinite(v)&&v>=d&&v<=m&&(u+=(v-r)**2);f=n?c>1?u/(c-1):0:c>0?u/c:0,s=Math.sqrt(f)}else i=null,a=null;const h={avg:r,count:c,max:a,min:i,stddev:s,sum:o,variance:f};return l&&(h.nullcount=e.length-c),t.percentileParams&&(h.median=B(e,t.percentileParams)),h}function B(t,e){const{fieldType:n,value:l,orderBy:i,isDiscrete:a}=e,o=mt(n,i==="desc");if((t=[...t].filter(h=>h!=null).sort((h,u)=>o(h,u))).length===0)return null;if(l<=0)return t[0];if(l>=1)return t[t.length-1];const r=(t.length-1)*l,s=Math.floor(r),f=s+1,c=r%1,d=t[s],m=t[f];return f>=t.length||a||typeof d=="string"||typeof m=="string"?d:d*(1-c)+m*c}function mt(t,e){if(t){if(at.has(t))return O(e);if(ot.has(t))return E(e,!1);if(t==="esriFieldTypeTimestampOffset")return pt(e);const a=E(e,!0);if(t==="esriFieldTypeString")return a;if(t==="esriFieldTypeGUID"||t==="esriFieldTypeGlobalID")return(o,r)=>a(G(o),G(r))}const n=e?1:-1,l=O(e),i=E(e,!0);return(a,o)=>typeof a=="number"&&typeof o=="number"?l(a,o):typeof a=="string"&&typeof o=="string"?i(a,o):n}const M=(t,e)=>t==null?e==null?0:1:e==null?-1:null,w=(t,e)=>t==null?e==null?0:-1:e==null?1:null;function ct(t){return t?M:w}const ft=(t,e)=>w(t,e)??(t===e?0:new Date(t).getTime()-new Date(e).getTime()),dt=(t,e)=>M(t,e)??(t===e?0:new Date(e).getTime()-new Date(t).getTime());function pt(t){return t?dt:ft}const ht=(t,e)=>w(t,e)??(t===e?0:t<e?-1:1),vt=(t,e)=>M(t,e)??(t===e?0:t<e?1:-1);function E(t,e){if(!e)return t?vt:ht;const n=ct(t);return t?(l,i)=>{const a=n(l,i);return a??((l=l.toUpperCase())>(i=i.toUpperCase())?-1:l<i?1:0)}:(l,i)=>{const a=n(l,i);return a??((l=l.toUpperCase())<(i=i.toUpperCase())?-1:l>i?1:0)}}const yt=(t,e)=>M(t,e)??e-t,gt=(t,e)=>w(t,e)??t-e;function O(t){return t?yt:gt}function G(t){return t.substr(24,12)+t.substr(19,4)+t.substr(16,2)+t.substr(14,2)+t.substr(11,2)+t.substr(9,2)+t.substr(6,2)+t.substr(4,2)+t.substr(2,2)+t.substr(0,2)}function kt(t,e){let n;for(n in t)rt.includes(n)&&(Number.isFinite(t[n])||(t[n]=null));return e&&["avg","stddev","variance"].forEach(l=>{t[l]!=null&&(t[l]=Math.ceil(t[l]??0))}),t}function Ot(t){const e={};for(let n of t)(n==null||typeof n=="string"&&n.trim()==="")&&(n=null),e[n]==null?e[n]={count:1,data:n}:e[n].count++;return{count:e}}function k(t){return(t==null?void 0:t.type)!=="coded-value"?[]:t.codedValues.map(e=>e.code)}function Gt(t,e,n,l){const i=t.count,a=[];if(n&&e){const o=[],r=k(e[0]);for(const s of r)if(e[1]){const f=k(e[1]);for(const c of f)if(e[2]){const d=k(e[2]);for(const m of d)o.push(`${F(s)}${l}${F(c)}${l}${F(m)}`)}else o.push(`${F(s)}${l}${F(c)}`)}else o.push(s);for(const s of o)i.hasOwnProperty(s)||(i[s]={data:s,count:0})}for(const o in i){const r=i[o];a.push({value:r.data,count:r.count,label:r.label})}return{uniqueValueInfos:a}}function Tt(t,e,n,l){let i=null;switch(e){case"log":t!==0&&(i=Math.log(t)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&l!==0&&(i=t/l*100);break;case"field":Number.isFinite(n)&&n!==0&&(i=t/n);break;case"natural-log":t>0&&(i=Math.log(t));break;case"square-root":t>0&&(i=t**.5)}return i}function bt(t,e){const n=Ft({field:e.field,normalizationType:e.normalizationType,normalizationField:e.normalizationField,classificationMethod:e.classificationMethod,standardDeviationInterval:e.standardDeviationInterval,breakCount:e.numClasses||nt});return t=xt(t,e.minValue,e.maxValue),q({definition:n,values:t,normalizationTotal:e.normalizationTotal})}function xt(t,e,n){const l=e??-1/0,i=n??1/0;return t.filter(a=>Number.isFinite(a)&&a>=l&&a<=i)}function Ft(t){const{breakCount:e,field:n,normalizationField:l,normalizationType:i}=t,a=t.classificationMethod||tt,o=a==="standard-deviation"?t.standardDeviationInterval||et:void 0;return new U({breakCount:e,classificationField:n,classificationMethod:a,normalizationField:i==="field"?l:void 0,normalizationType:i,standardDeviationInterval:o})}function Bt(t,e){var s,f;let n=t.classBreaks;const l=n.length,i=(s=n[0])==null?void 0:s.minValue,a=(f=n[l-1])==null?void 0:f.maxValue,o=e==="standard-deviation",r=it;return n=n.map(c=>{const d=c.label,m={minValue:c.minValue,maxValue:c.maxValue,label:d};if(o&&d){const h=d.match(r),u=(h==null?void 0:h.map(v=>+v.trim()))??[];u.length===2?(m.minStdDev=u[0],m.maxStdDev=u[1],u[0]<0&&u[1]>0&&(m.hasAvg=!0)):u.length===1&&(d.includes("<")?(m.minStdDev=null,m.maxStdDev=u[0]):d.includes(">")&&(m.minStdDev=u[0],m.maxStdDev=null))}return m}),{minValue:i,maxValue:a,classBreakInfos:n,normalizationTotal:t.normalizationTotal}}function Lt(t,e){const n=Vt(t,e);if(n.min==null&&n.max==null)return{bins:[],minValue:n.min,maxValue:n.max,normalizationTotal:e.normalizationTotal};const l=n.intervals,i=n.min??0,a=n.max??0,o=l.map((r,s)=>({minValue:l[s][0],maxValue:l[s][1],count:0}));for(const r of t)if(r!=null&&r>=i&&r<=a){const s=It(l,r);s>-1&&o[s].count++}return{bins:o,minValue:i,maxValue:a,normalizationTotal:e.normalizationTotal}}function Vt(t,e){const{field:n,classificationMethod:l,standardDeviationInterval:i,normalizationType:a,normalizationField:o,normalizationTotal:r,minValue:s,maxValue:f}=e,c=e.numBins||lt;let d=null,m=null,h=null;if((!l||l==="equal-interval")&&!a){if(s!=null&&f!=null)d=s,m=f;else{const u=ut({values:t,minValue:s,maxValue:f,useSampleStdDev:!a,supportsNullCount:st({normalizationType:a,normalizationField:o,minValue:s,maxValue:f})});d=u.min??null,m=u.max??null}h=$t(d??0,m??0,c)}else{const{classBreaks:u}=bt(t,{field:n,normalizationType:a,normalizationField:o,normalizationTotal:r,classificationMethod:l,standardDeviationInterval:i,minValue:s,maxValue:f,numClasses:c});d=u[0].minValue,m=u[u.length-1].maxValue,h=u.map(v=>[v.minValue,v.maxValue])}return{min:d,max:m,intervals:h}}function It(t,e){let n=-1;for(let l=t.length-1;l>=0;l--)if(e>=t[l][0]){n=l;break}return n}function $t(t,e,n){const l=(e-t)/n,i=[];let a,o=t;for(let r=1;r<=n;r++)a=o+l,a=Number(a.toFixed(16)),i.push([o,r===n?e:a]),o=a;return i}let x=null;const Nt=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function zt(t,e,n){return t.x<0?t.x+=e:t.x>n&&(t.x-=e),t}function Pt(t,e,n,l){const i=j(n)?A(n):null,a=i?Math.round((i.valid[1]-i.valid[0])/e.scale[0]):null;return t.map(o=>{const r=new Y(o.geometry);return J(e,r,r,r.hasZ,r.hasM),o.geometry=i?zt(r,a??0,l[0]):r,o})}function qt(t,e=18,n,l,i,a){const o=new Float64Array(i*a);e=Math.round(H(e));let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY,f=0,c=0,d=0,m=0;const h=K(l,n);for(const{geometry:v,attributes:I}of t){const{x:g,y:V}=v,$=Math.max(0,g-e),N=Math.max(0,V-e),z=Math.min(a,V+e),y=Math.min(i,g+e),T=+h(I);for(let p=N;p<z;p++)for(let b=$;b<y;b++){const D=p*i+b,L=Q(b-g,p-V,e),P=o[D];f=o[D]+=L*T;const S=f-P;c+=S,d+=S*S,f<r&&(r=f),f>s&&(s=f),m++}}if(!m)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const u=(s-r)/2;return{mean:c/m,stdDev:Math.sqrt((d-c*c/m)/m),min:r,max:s,mid:u,count:m}}function Dt(t){const e=Nt.exec(t);if(!e)return null;const{hh:n,mm:l,ss:i,ms:a}=e.groups;return Number(n)*C.hours+Number(l)*C.minutes+Number(i)*C.seconds+Number(a||0)}async function Ut(t,e,n=!0){if(!e)return[];const{field:l,field2:i,field3:a,fieldDelimiter:o,fieldInfos:r,timeZone:s}=t,f=l&&(r==null?void 0:r.find(y=>y.name.toLowerCase()===l.toLowerCase())),c=!!f&&Z(f),d=!!f&&W(f),m=t.valueExpression,h=t.normalizationType,u=t.normalizationField,v=t.normalizationTotal,I=[],g=t.viewInfoParams;let V=null,$=null;if(m){if(!x){const{arcadeUtils:y}=await _();x=y}x.hasGeometryOperations(m)&&await x.enableGeometryOperations(),V=x.createFunction(m),$=g?x.getViewInfo({viewingMode:g.viewingMode,scale:g.scale,spatialReference:new R(g.spatialReference)}):null}const N=t.fieldInfos,z=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&N?{fields:N}:null;return e.forEach(y=>{const T=y.attributes;let p;if(m){const b=z?{...y,layer:z}:y,D=x.createExecContext(b,$,s);p=x.executeFunction(V,D)}else T&&(p=T[l],i?(p=`${F(p)}${o}${F(T[i])}`,a&&(p=`${p}${o}${F(T[a])}`)):typeof p=="string"&&n&&(d?p=p?new Date(p).getTime():null:c&&(p=p?Dt(p):null)));if(h&&typeof p=="number"&&isFinite(p)){const b=T&&parseFloat(T[u]);p=Tt(p,h,b,v)}I.push(p)}),I}export{Gt as $,Tt as B,kt as C,bt as E,Bt as P,mt as T,Lt as U,Ut as b,F as c,Et as d,st as f,Pt as j,Ot as k,ut as p,B as v,Dt as w,qt as x};
