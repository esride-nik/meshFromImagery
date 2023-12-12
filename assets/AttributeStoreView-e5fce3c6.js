import{s as Ke,o as He}from"./mat2d-d4af8487.js";import{n as we}from"./mat2df32-fb26a8c9.js";import{g0 as Ye,g1 as Ge,an as se,k,s as p,js as de,hk as qe,eD as Je,aZ as ce,bh as je,bn as We}from"./index-b516d057.js";import{e as he}from"./mat3f32-6c416b1c.js";import{c as fe,d as Se,S as pe,E as ye,F as xe,G as me,H as ge,I as Y,J as G,K as _e,P as Qe,R as Ze,Q as Xe,U as et}from"./definitions-5366d472.js";import{r as tt}from"./TiledDisplayObject-e7d105ae.js";import{c as Fe}from"./labelingInfo-aae625ac.js";import{L as $,S as E}from"./enums-b1d611e3.js";import{V as st,W as U,K as it}from"./color-a1c19855.js";import{b as rt}from"./WGLContainer-73827040.js";import{d as nt,n as at,l as ot,f as be}from"./visualVariablesUtils-b310591f.js";import{createSymbolSchema as R}from"./createSymbolSchema-001203d9.js";import"./cimAnalyzer-ce1886a0.js";import"./alignmentUtils-ae955d28.js";import"./vec2f32-eaf29605.js";import"./number-e491b09e.js";import"./ExpandedCIM-76245323.js";import{n as Z}from"./capabilities-9d56a1da.js";import{f as lt,c as ut}from"./clusterUtils-50a66940.js";import{e as ke}from"./util-8b594274.js";import{D as Ce,L as ze,U as dt}from"./enums-bdecffa2.js";import{E as ct}from"./FramebufferObject-123b7c8d.js";import{e as Me,T as De}from"./Texture-bcb6d63f.js";class T{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let s=1;s<e.length;s++)t.next=new T([e[s]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}find(e){var t;return e(this.data)?this:(t=this.next)==null?void 0:t.find(e)}max(e,t=this){const s=e(this.data)>e(t.data)?this:t;return this.next?this.next.max(e,s):s}remove(e,t=null){var s;return this===e?t?(t.next=this.next,t):this.next:((s=this.next)==null?void 0:s.remove(e,this))??null}get last(){return this.next?this.next.last:this}}let ns=class{constructor(e){this._head=null,e!=null&&(this._head=new T(e))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;const e=this._head.max(t=>t.end-t.start);return e.data.end-e.data.start}firstFit(e){if(this._head==null)return null;let t=null,s=this._head;for(;s;){const i=s.data.end-s.data.start;if(i===e)return t?t.next=s.next:this._head=s.next,s.data.start;if(i>e){const n=s.data.start;return s.data.start+=e,n}t=s,s=s.next}return null}free(e,t){const s=e+t;if(this._head==null){const o=new T({start:e,end:s});return void(this._head=o)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=t);const o=new T({start:e,end:s});return o.next=this._head,void(this._head=o)}let i=this._head,n=i.next;for(;n;){if(n.data.start>=s){if(i.data.end===e){if(i.data.end+=t,i.data.end===n.data.start){const l=n.data.end-n.data.start;return i.data.end+=l,void(i.next=n.next)}return}if(n.data.start===s)return void(n.data.start-=t);const o=new T({start:e,end:s});return o.next=i.next,void(i.next=o)}i=n,n=n.next}if(e===i.data.end)return void(i.data.end+=t);const a=new T({start:e,end:s});i.next=a}},ht=class{acquire(e){return{refCount:1,version:-1,labelMat2d:we(),tileMat3:he(),dvs:he()}}release(e){}},ft=class X extends tt{constructor(e,t,s,i){super(e,t,s,i,fe,fe)}destroy(){super.destroy(),this._transforms&&X.TransformCache.release(this.key.hash)}setTransform(e){const t=this.resolution/e.resolution,s=this.transforms.tileMat3,[i,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,o=this.height/this.rangeY*t;Ye(s,a,0,0,0,o,0,i,n,1),Ge(this.transforms.dvs,e.displayViewMat3,s);const l=this.transforms.labelMat2d,u=window.devicePixelRatio,d=Ke(we(),a*u,0,0,o*u,i*u,n*u);He(l,e.viewMat2d,d)}_createTransforms(){return X.TransformCache.acquire(this.key.hash)}};ft.TransformCache=new ht;let O=class{constructor(e,t,s,i,n){this.target=e,this.geometryType=t,this.materialKey=s,this.indexFrom=i,this.indexCount=n}get indexEnd(){return this.indexFrom+this.indexCount}extend(e){this.indexCount+=e}},us=class Oe{constructor(e,t){this.geometryType=0,this._target=e,this.geometryType=t}static from(e,t,s,i){const n=new Oe(e,t);if(i!=null)for(const a of i)s.seekIndex(a),n.addRecord(s);else for(;s.next();)n.addRecord(s);return n}addRecord(e){const t=this._target,s=this.geometryType,i=e.materialKey;let n=e.indexFrom,a=e.indexCount;const o=e.vertexFrom,l=e.vertexCount;if(a||(n=o,a=l),this._head==null){const c=new O(t,s,i,n,a);return void(this._head=new T(c))}let u=null,d=this._head;for(;d;){if(n<d.data.indexFrom)return this._insert(i,n,a,u,d);u=d,d=d.next}this._insert(i,n,a,u,null)}forEach(e){this._head!=null&&this._head.forEach(e)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,s,i,n){if(i==null&&n==null){const a=new O(this._target,this.geometryType,e,t,s);this._head=new T(a)}return i==null&&n!=null?this._insertAtHead(e,t,s,n):i!=null&&n==null?this._insertAtEnd(e,t,s,i):i!=null&&n!=null?this._insertAtMiddle(e,t,s,i,n):void 0}_insertAtHead(e,t,s,i){const n=t+s;if(e===i.data.materialKey&&n===i.data.indexFrom)i.data.indexFrom=t,i.data.indexCount+=s;else{const a=new O(this._target,this.geometryType,e,t,s);this._head=new T(a),this._head.next=i}}_insertAtEnd(e,t,s,i){if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s;else{const n=new O(this._target,this.geometryType,e,t,s),a=new T(n);i.next=a}}_insertAtMiddle(e,t,s,i,n){const a=t+s;if(i.data.materialKey===e&&i.data.indexEnd===t)i.data.indexCount+=s,i.data.materialKey===n.data.materialKey&&i.data.indexEnd===n.data.indexFrom&&(i.data.indexCount+=n.data.indexCount,i.next=n.next);else if(e===n.data.materialKey&&a===n.data.indexFrom)n.data.indexFrom=t,n.data.indexCount+=s;else{const o=new O(this._target,this.geometryType,e,t,s),l=new T(o);i.next=l,l.next=n}}};const B=2147483647;class I{constructor(e){this._head=e,this._cursor=e}static from(e,t=0,s=e.byteLength/S.BYTES_PER_RECORD-t){const i=new S(new Int32Array(e,t*S.BYTES_PER_RECORD,s*S.ELEMENTS_PER_RECORD));return new I(i)}size(){let e=this._cursor,t=0;for(;e;)t+=e.size(),e=e._link;return t}get id(){return this._cursor.id}set id(e){this._cursor.id=e}get materialKey(){return this._cursor.materialKey}set materialKey(e){this._cursor.materialKey=e}get insertAfter(){return this._cursor.insertAfter}get indexFrom(){return this._cursor.indexFrom}set indexFrom(e){this._cursor.indexFrom=e}get indexCount(){return this._cursor.indexCount}set indexCount(e){this._cursor.indexCount=e}get vertexFrom(){return this._cursor.vertexFrom}set vertexFrom(e){this._cursor.vertexFrom=e}get vertexCount(){return this._cursor.vertexCount}set vertexCount(e){this._cursor.vertexCount=e}get sortKey(){return this._cursor.sortKey}set sortKey(e){this._cursor.sortKey=e}get index(){return this._cursor._indexStart+this._cursor._index}seekIndex(e){let t=e;for(this._cursor=this._head;this._cursor;){const s=this._cursor.size();if(t<s)return this._cursor._index=t,!0;t-=s,this._cursor=this._cursor._link}return!1}forEach(e){const t=this.getCursor();for(;t.next();)e(t)}link(e){if(!this._head)return void(this._head=e._head);let t=this._head;for(;t._link;)t=t._link;t._link=e._head,t._link._indexStart=t._indexStart+t.size()}getCursor(){return this.copy()}getDrawInfo(e,t){return new O(e,t,this.materialKey,this.indexFrom,this.indexCount)}lookup(e){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(e);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}copy(){var i;const e=new I((i=this._head)==null?void 0:i.copy());if(!e._head)return e;let t=e._head,s=e._head._link;for(;s;)t._link=s.copy(),t=s,s=t._link;return e}next(){return!!this._cursor&&(!!this._cursor.next()||!!this._cursor._link&&(this._cursor=this._cursor._link,this.next()))}peekId(){return this._cursor.peekId()??this._cursor._link.peekId()}delete(e){let t=this._head,s=null;for(;t;){if(t.delete(e))return t.isEmpty()&&(s!=null&&(s._link=t._link),t===this._head&&(this._head=t._link),t===this._cursor&&(this._cursor=t._link)),!0;s=t,t=t._link}return!1}}I.ELEMENTS_PER_RECORD=Se,I.BYTES_PER_RECORD=I.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;let S=class f{constructor(e){this._link=null,this._index=-1,this._indexStart=0,this._packedRecordsF32=null,this._deletedCount=0,this._offsets={instance:null},this._packedRecords=e}static from(e,t=0,s=e.byteLength/this.BYTES_PER_RECORD-t){return new f(new Int32Array(e,t*this.BYTES_PER_RECORD,s*this.ELEMENTS_PER_RECORD))}delete(e){const t=this._index,s=this.lookup(e);if(s)for(this.id=B,++this._deletedCount;this.next()&&this.id===e;)this.id=B,++this._deletedCount;return this._index=t,s}isEmpty(){return this._deletedCount===this.size()}link(e){this._link?this._link.link(e):this._link=e}lookup(e){if(this._offsets.instance==null){this._offsets.instance=new Map;const s=this.copy();s._index=-1;let i=0;for(;s.next();)s.id!==i&&(this._offsets.instance.set(s.id,s._index),i=s.id)}if(!this._offsets.instance.has(e))return!1;const t=this._index;return this._index=this._offsets.instance.get(e),this.id!==B||(this._index=t,!1)}get id(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD]}set id(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD]=e}get materialKey(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+1]}set materialKey(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+1]=e}get insertAfter(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+2]}get indexFrom(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+3]}set indexFrom(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+3]=e}get indexCount(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+4]}set indexCount(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+4]=e}get vertexFrom(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+5]}set vertexFrom(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+5]=e}get vertexCount(){return this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+6]}set vertexCount(e){this._packedRecords[this._index*f.ELEMENTS_PER_RECORD+6]=e}get sortKey(){return this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*f.ELEMENTS_PER_RECORD+7]}set sortKey(e){this._packedRecordsF32||(this._packedRecordsF32=new Float32Array(this._packedRecords.buffer)),this._packedRecordsF32[this._index*f.ELEMENTS_PER_RECORD+7]=e}get index(){return this._index}size(){return this._packedRecords.length/f.ELEMENTS_PER_RECORD}next(){for(;++this._index<this.size()&&this.id===B;);return this._index<this.size()}peekId(){const e=(this._index+1)*f.ELEMENTS_PER_RECORD;return e>=this._packedRecords.length?0:this._packedRecords[e]}getCursor(){return this.copy()}copy(){const e=new f(this._packedRecords);return e._indexStart=this._indexStart,e._link=this._link,e._index=this._index,e._offsets=this._offsets,e._deletedCount=this._deletedCount,e}};S.ELEMENTS_PER_RECORD=Se,S.BYTES_PER_RECORD=S.ELEMENTS_PER_RECORD*Int32Array.BYTES_PER_ELEMENT;function Ie(r){if(!r)return $.NONE;let e=0;for(const t of r)if(t.type==="size"){const s=nt(t);e|=s,t.target==="outline"&&(e|=s<<4)}else t.type==="color"?e|=$.COLOR:t.type==="opacity"?e|=$.OPACITY:t.type==="rotation"&&(e|=$.ROTATION);return e}function pt(r,e){if(!("visualVariables"in r)||!r.hasVisualVariables("size"))return 0;const t=r.getVisualVariablesForType("size");if(!t[0])return 0;const s=t[0];if(e&&s.field==="cluster_count"&&e.type==="cluster")return e.clusterMaxSize;if(s.target==="outline")return 0;if(s.transformationType==="stops")return s.stops.map(i=>i.size).reduce(q,0);if(s.transformationType==="clamped-linear"){let i=-1/0,n=-1/0;return i=typeof s.maxSize=="number"?s.maxSize:s.maxSize.stops.map(a=>a.size).reduce(q,0),n=typeof s.minSize=="number"?s.minSize:s.minSize.stops.map(a=>a.size).reduce(q,0),Math.max(i,n)}return s.transformationType==="real-world-size"?30:void 0}function q(r,e){return Math.max(r,e)}const K=8,Le=K-2,H=se.getLogger("esri.views.2d.layers.features.support.rendererUtils"),ds=r=>{var s;if(!("visualVariables"in r)||!((s=r.visualVariables)!=null&&s.length))return r;const e=r.clone(),t=e.visualVariables.map(i=>Ne(i)?Ve(i):i);return e.visualVariables=t,e};function yt(r){return r.map(e=>Ne(e)?Ve(e.clone()):e)}function Ne(r){return(r.type==="size"||r.type==="color"||r.type==="opacity")&&r.stops!=null}function Ve(r){return r.stops=gt(r.type,r.stops??[]),r}function D(r,e,t){return(1-t)*r+t*e}function xt(r,e){const[t,...s]=e,i=s.pop(),n=s[0].value,a=s[s.length-1].value,o=(a-n)/Le,l=[];for(let u=n;u<a;u+=o){let d=0;for(;u>=s[d].value;)d++;const c=s[d],h=e[d-1],v=u-h.value,_=c.value===h.value?1:v/(c.value-h.value);if(r==="color"){const x=s[d],b=e[d-1],y=x.color.clone();y.r=D(b.color.r,y.r,_),y.g=D(b.color.g,y.g,_),y.b=D(b.color.b,y.b,_),y.a=D(b.color.a,y.a,_),l.push({value:u,color:y,label:x.label})}else if(r==="size"){const x=s[d],b=e[d-1],y=de(x.size),g=D(de(b.size),y,_);l.push({value:u,size:g,label:x.label})}else{const x=s[d],b=D(e[d-1].opacity,x.opacity,_);l.push({value:u,opacity:b,label:x.label})}}return[t,...l,i]}function mt(r){const[e,...t]=r,s=t.pop();for(;t.length>Le;){let i=0,n=0;for(let a=1;a<t.length;a++){const o=t[a-1],l=t[a],u=Math.abs(l.value-o.value);u>n&&(n=u,i=a)}t.splice(i,1)}return[e,...t,s]}function gt(r,e){return e.length<=K?e:(H.warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${K}. Displayed stops will be simplified.`),e.length>2*K?xt(r,e):mt(e))}function ie(){if(k("heatmap-force-raster"))return"raster";const{supportsTextureFloat:r,supportsTextureHalfFloat:e,supportsColorBufferFloat:t,supportsColorBufferFloatBlend:s,supportsColorBufferHalfFloat:i}=Z("2d");return r&&t&&s||e&&i?"symbol":k("heatmap-allow-raster-fallback")?"raster":"none"}function cs(r){if(!r)return!0;switch(r.type){case"dot-density":if(!Z("2d").supportsTextureFloat)return H.error(new p("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":{const e=ie();if(e==="none"||e==="raster"&&!k("heatmap-force-raster")){const t=Z("2d"),s=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter(i=>!t[i]).join(", ");if(e==="none")return H.errorOnce(new p("webgl-missing-extension",`Missing WebGL${t.type} requirements for Heatmap: ${s}`)),!1;e==="raster"&&H.warnOnce(`Missing WebGL${t.type} requirements for accelerated Heatmap: ${s}. Feature support may be limited.`)}break}}return!0}const C=se.getLogger("esri.views.2d.layers.features.schemaUtils"),m="ValidationError";function ee(r,e){let t=0,s=0,i=E.DEFAULT;if(r!=null){if(s=pt(r,e),"visualVariables"in r&&(t=Ie(r.visualVariables||[]),r.type==="dot-density"&&(i=E.DOT_DENSITY)),r.type==="heatmap"&&(i=E.HEATMAP),r.type==="dictionary")return{maxVVSize:s,vvFlags:t,symbologyType:E.DEFAULT};if(r.type==="pie-chart")return{maxVVSize:s,vvFlags:t,symbologyType:E.PIE_CHART};if(i!==E.DOT_DENSITY&&i!==E.HEATMAP){const n=r.getSymbols();"backgroundFillSymbol"in r&&r.backgroundFillSymbol&&n.push(r.backgroundFillSymbol);let a=!0,o=!0;for(const l of n)if(l.type!=="cim"&&l.type!=="web-style"||(o=!1),l.type==="simple-fill"||l.type==="picture-fill"){const u=l.outline,d=u&&u.style!=="none"&&u.style!=="solid",c=l.type==="simple-fill"&&l.style!=="none"&&l.style!=="solid";d&&(a=!1),(l.type==="picture-fill"||c||d)&&(o=!1)}a?i=o?E.OUTLINE_FILL_SIMPLE:E.OUTLINE_FILL:o&&(i=E.SIMPLE)}}return{vvFlags:t,maxVVSize:s,symbologyType:i}}let Ee=null;function hs(r){if(k("esri-2d-update-debug")){const e=Te(r,!0);console.debug("Created new schema",e),console.debug("Schema diff",qe(Ee,e)),Ee=e}return Te(r)}function Te(r,e=!1){var t,s;try{const i=Tt(r,e),n=wt(r),a={};i.map(u=>_t(a,r,u));const o=r.subtypeCode!=null?`${r.subtypeField} = ${r.subtypeCode}`:null;return{source:{definitionExpression:Je(r.definitionExpression,o),fields:r.fields.map(u=>u.toJSON()),gdbVersion:r.gdbVersion,historicMoment:(t=r.historicMoment)==null?void 0:t.getTime(),outFields:r.availableFields,pixelBuffer:r.pixelBuffer,spatialReference:r.spatialReference.toJSON(),timeExtent:(s=r.timeExtent)==null?void 0:s.toJSON(),customParameters:r.customParameters},attributes:{fields:{},indexCount:0},processors:i,tileRenderer:n,targets:a}}catch(i){if(i.fieldName===m)return C.error(i),null;throw i}}function _t(r,e,t){switch(t.target){case"feature":return void j(r,J(e),t);case"aggregate":{if(!("featureReduction"in e))return;const s=e.featureReduction;switch(s==null?void 0:s.type){case"selection":throw new p(m,"Mapview does not support `selection` reduction type",s);case"binning":return j(r,J(e),t),void bt(r,s,e.fields.map(i=>i.toJSON()),t);case"cluster":return j(r,J(e),t),void Et(r,s,e.fields.map(i=>i.toJSON()),t)}}}}function re(r,e){var t,s;for(const i in e){const n=e[i];if(n.target!==r.name)continue;const a=r.attributes[i];if(a!=null&&a.context){const o=a.context;o.mesh=o.mesh||((t=n.context)==null?void 0:t.mesh),o.storage=o.storage||((s=n.context)==null?void 0:s.storage)}else r.attributes[i]=n}return r}function J(r){var e,t,s;return[((e=r.filter)==null?void 0:e.toJSON())??null,((s=(t=r.featureEffect)==null?void 0:t.filter)==null?void 0:s.toJSON())??null]}function j(r,e,t){return r.feature||(r.feature={name:"feature",input:"source",filters:e,attributes:{}}),re(r.feature,t.attributes.fields),r}function Ae(r,e){const{onStatisticExpression:t,onStatisticField:s,statisticType:i}=r;switch(i){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":{if(t){const{returnType:a}=t;return a?a==="string"?"esriFieldTypeString":"esriFieldTypeDouble":(C.error(new p(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",r)),"esriFieldTypeString")}const n=e.find(a=>a.name===s);return n?n.type:(C.error(new p(m,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",r)),"esriFieldTypeString")}}}function bt(r,e,t,s){return r.aggregate||(r.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:e.fixedBinLevel,fields:(e.fields??[]).map(i=>({...i.toJSON(),type:Ae(i,t)}))},attributes:{}}),re(r.aggregate,s.attributes.fields),r}function Et(r,e,t,s){const i=s.aggregateFields??[],n=new Set;for(const a of i)n.add(a.name);for(const a of(e==null?void 0:e.fields)??[])n.has(a.name)||i.push(a);return r.aggregate||(r.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:ce(e.clusterRadius/2),clusterPixelBuffer:64*Math.ceil(ce(e.clusterMaxSize)/64),fields:i.map(a=>({...a.toJSON(),type:Ae(a,t)}))}}),re(r.aggregate,s.attributes.fields),r}function w(r,e){return e.field?F(r,{...e,type:"field",field:e.field}):e.valueExpression?F(r,{...e,type:"expression",valueExpression:e.valueExpression}):{field:void 0,fieldIndex:void 0}}function F(r,e){switch(e.type){case"expression":{const t=e.valueExpression;if(!r.fields[t]){const s=r.indexCount++;r.fields[t]={...e,name:t,fieldIndex:s}}return{fieldIndex:r.fields[t].fieldIndex}}case"label-expression":{const t=JSON.stringify(e.label);if(!r.fields[t]){const s=r.indexCount++;r.fields[t]={...e,name:t,fieldIndex:s}}return{fieldIndex:r.fields[t].fieldIndex}}case"field":{const t=e.field;return e.target==="aggregate"&&r.fields[t]||(r.fields[t]={...e,name:t}),{field:t}}case"statistic":return r.fields[e.name]={...e},{field:e.name}}}function Tt(r,e=!1){const t=new Array;let s=0;return t.push(vt(r,s++,e)),t}function W(r,e,t,s,i,n=!1){const a=F(r,{type:"label-expression",target:t,context:{mesh:!0},resultType:"string",label:{labelExpression:e.labelExpression,labelExpressionInfo:e.labelExpressionInfo?{expression:e.labelExpressionInfo.expression}:null,symbol:!!e.symbol,where:e.where}}),{fieldIndex:o}=a;return{...R(e,i,n),fieldIndex:o,target:t,index:s}}function Rt(r,e,t){var d;const s="featureReduction"in e&&e.featureReduction;if(!s)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};const i="aggregate",n=[];let a=null,o=ke(e.geometryType),l=[],u=null;if(s)switch(s.type){case"selection":return C.error(new p(m,"Mapview does not support `selection` reduction type",s)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(n.push(...s.fields??[]),s.type==="cluster"?o="esriGeometryPoint":s.type==="binning"&&(o="esriGeometryPolygon"),s.renderer&&!((d=s.renderer.authoringInfo)!=null&&d.isAutoGenerated)){if(s.type==="cluster"){const{renderer:h}=lt(s.renderer,s,null);u=h}else u=s.renderer;const c=ee(s.renderer,s);a=te(r,i,s.renderer,c,t),l=s&&s.labelsVisible&&s.labelingInfo||[]}else if(s.type==="cluster"){if(u=ut(n,e.renderer,s,null,!0),s.symbol){const c=ee(u,s);a={type:"simple",symbol:R(s.symbol,c,t),symbologyType:c.symbologyType}}l=s&&s.labelsVisible&&s.labelingInfo||[]}}return Ft(r,n),{labels:Fe(l,s.type==="binning"?"esriGeometryPolygon":o),matcher:a,fields:n,rendererOverride:u}}function vt(r,e,t=!1){var y;const s={indexCount:0,fields:{}},i="featureReduction"in r?r.featureReduction??void 0:void 0,n=i?"aggregate":"feature";if("sublayers"in r){const g={type:"subtype",subtypeField:r.subtypeField,renderers:{},symbologyType:E.DEFAULT},A={type:"subtype",mapping:{},target:"feature",subtypeField:r.subtypeField},P={type:"subtype",classes:{}},Pe={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:A,mesh:{matcher:g,aggregateMatcher:null,labels:P,sortKey:null}},ae=new Set;let $e=0;for(const{renderer:z,subtypeCode:L,labelingInfo:Ue,labelsVisible:Be}of r.sublayers){let oe=0;"visualVariables"in z&&z.visualVariables&&(z.visualVariables.some(V=>V.type!=="rotation")&&C.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),oe=Ie(z.visualVariables.filter(V=>V.type!=="size")));const le={symbologyType:E.DEFAULT,vvFlags:oe,maxVVSize:0},N=te(s,n,z,le,t),M=Re(s,n,z),ue=Be&&Ue;if(N.type==="dictionary")throw new p(m,"Dictionary renderer is not supported in subtype layers");if(N.type==="subtype")throw new p(m,"Nested subtype renderers is not supported");if(M!=null&&M.type==="subtype")throw new p(m,"Nested subtype storage is not supported");if((M==null?void 0:M.attributeMapping)!=null)throw new p(m,"Non-visual-variable attributes are not supported in subtype layers");if(N.type==="heatmap")throw new p(m,"Heatmaps are not supported in subtype layers");if(N.type==="pie-chart")throw new p(m,"Pie-charts are not supported in subtype layers");if(ae.has(L))throw new p(m,"Subtype codes for sublayers must be unique");ae.add(L),g.renderers[L]=N,A.mapping[L]=M,ue&&(P.classes[L]=ue.map(V=>W(s,V,"feature",$e++,le,t)))}return Pe}if(((y=r.renderer)==null?void 0:y.type)==="heatmap"&&ie()==="raster"){const{radius:g,fieldOffset:A,field:P}=r.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:n,storage:null,mesh:{radius:g,fieldOffset:A,field:w(s,{target:n,field:P,resultType:"numeric"}).field}}}const a=Rt(s,r,t),o=ke(r.geometryType),l=a.rendererOverride??r.renderer,u=ee(l,i),d=te(s,n,l,u,t),c=Re(s,n,l),h=St(s,r.orderBy,r.renderer,i),v=r.labelsVisible&&r.labelingInfo||[],_=Fe(v,o);let x=0;const b=[..._.map(g=>W(s,g,"feature",x++,u,t)),...a.labels.map(g=>W(s,g,"aggregate",x++,u,t))];return{type:"symbol",target:n,attributes:s,aggregateFields:a.fields,storage:c,mesh:{matcher:d,labels:{type:"simple",classes:b},aggregateMatcher:a.matcher,sortKey:h}}}function wt(r){var e;return((e=r.renderer)==null?void 0:e.type)==="heatmap"&&ie()==="raster"?{type:"heatmap"}:{type:"symbol"}}function St(r,e,t,s){if(s!=null)return null;if(e!=null&&e.length){e.length>1&&C.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${e.length}. All but the first will be discarded`);const i=e[0],n=i.order==="ascending"?"asc":"desc";return i.field?{field:i.field,order:n}:i.valueExpression?{fieldIndex:F(r,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}:(C.error(new p(m,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}return t!=null&&t.type==="unique-value"&&t.orderByClassesEnabled?{byRenderer:!0,order:"asc"}:null}function Ft(r,e){const t={mesh:!0,storage:!0};for(const s of e){const{name:i,onStatisticField:n,onStatisticExpression:a,statisticType:o}=s;let l,u;const d="numeric",c="feature";a?u=F(r,{type:"expression",target:c,valueExpression:a.expression,resultType:d}).fieldIndex:l=F(r,{type:"field",target:c,field:n}).field,F(r,{type:"statistic",target:"aggregate",name:i,context:t,inField:l,inFieldIndex:u,statisticType:o})}}function Re(r,e,t){let s;switch(t.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":s={visualVariables:!0,attributes:null};break;default:s=rt(t).getStorageSpec(t)}return kt(r,e,s,t)}function kt(r,e,t,s){if(t==null)return null;const{visualVariables:i,attributes:n}=t;let a=null;i&&"visualVariables"in s&&(a=Ct(r,e,s.visualVariables));const o=a!=null?4:0;let l=null;return n!=null&&(l=n.map((u,d)=>{const{field:c,fieldIndex:h}=w(r,{valueExpression:u.valueExpression,field:u.field,resultType:"numeric",target:e});return{binding:d+o,field:c,fieldIndex:h}})),{type:"simple",target:e,attributeMapping:l,vvMapping:a}}function Ct(r,e,t){if(!(t!=null&&t.length))return[];const s={storage:!0},i="numeric";return yt(t).map(n=>{const a=st(n.type),{field:o,fieldIndex:l}=w(r,{target:e,valueExpression:n.valueExpression,field:n.field,context:s,resultType:i});switch(n.type){case"size":return n.valueExpression==="$view.scale"?null:{type:"size",binding:a,field:o,fieldIndex:l,normalizationField:w(r,{target:e,field:n.normalizationField,context:s,resultType:i}).field,valueRepresentation:n.valueRepresentation??null};case"color":return{type:"color",binding:a,field:o,fieldIndex:l,normalizationField:w(r,{target:e,field:n.normalizationField,context:s,resultType:i}).field};case"opacity":return{type:"opacity",binding:a,field:o,fieldIndex:l,normalizationField:w(r,{target:e,field:n.normalizationField,context:s,resultType:i}).field};case"rotation":return{type:"rotation",binding:a,field:o,fieldIndex:l}}}).filter(je)}function te(r,e,t,s,i=!1){const n=r??{indexCount:0,fields:{}};switch(t.type){case"simple":case"dot-density":return zt(n,t,s,i);case"class-breaks":return Dt(n,e,t,s,i);case"unique-value":return Ot(n,e,t,s,i);case"dictionary":return It(n,t,s,i);case"heatmap":return Lt(n,t,s,i);case"pie-chart":return Mt(n,t,s,i)}}function zt(r,e,t,s=!1){const i=e.getSymbols(),n=i.length?i[0]:null;return{type:"simple",symbol:R(n,t,s),symbologyType:t.symbologyType}}function Mt(r,e,t,s=!1){const i=e.getSymbols(),n=i[0],a=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:R(n,t,s),fillSymbol:R(a,t,s),symbologyType:t.symbologyType}}function Dt(r,e,t,s,i=!1){const n={mesh:!0,use:"renderer.field"},a=t.backgroundFillSymbol,{field:o,fieldIndex:l}=w(r,{target:e,field:t.field,valueExpression:t.valueExpression,resultType:"numeric",context:n}),u=t.normalizationType,d=u==="log"?"esriNormalizeByLog":u==="percent-of-total"?"esriNormalizeByPercentOfTotal":u==="field"?"esriNormalizeByField":null,c=t.classBreakInfos.map(h=>({symbol:R(h.symbol,s,i),min:h.minValue,max:h.maxValue})).sort((h,v)=>h.min-v.min);return{type:"interval",attributes:r.fields,field:o,fieldIndex:l,backgroundFillSymbol:R(a,s,i),defaultSymbol:R(t.defaultSymbol,s,i),intervals:c,normalizationField:t.normalizationField,normalizationTotal:t.normalizationTotal,normalizationType:d,isMaxInclusive:t.isMaxInclusive,symbologyType:s.symbologyType}}function Ot(r,e,t,s,i=!1){const n=[],a=t.backgroundFillSymbol,o={target:e,context:{mesh:!0},resultType:"string"};if(t.field&&typeof t.field!="string")throw new p(m,"Expected renderer.field to be a string",t);const{field:l,fieldIndex:u}=w(r,{...o,field:t.field,valueExpression:t.valueExpression});for(const d of t.uniqueValueInfos??[])n.push({value:""+d.value,symbol:R(d.symbol,s,i)});return{type:"map",attributes:r.fields,field:l,fieldIndex:u,field2:w(r,{...o,field:t.field2}).field,field3:w(r,{...o,field:t.field3}).field,fieldDelimiter:t.fieldDelimiter??void 0,backgroundFillSymbol:R(a,s),defaultSymbol:R(t.defaultSymbol,s),map:n,symbologyType:s.symbologyType}}function It(r,e,t,s=!1){return{type:"dictionary",config:e.config,fieldMap:e.fieldMap,scaleExpression:e.scaleExpression,url:e.url,symbolOptions:t,symbologyType:t.symbologyType}}function Lt(r,e,t,s=!1){const i=e.getSymbols(),n=i.length?i[0]:null;return{type:"heatmap",symbol:R(n,t,s),symbologyType:t.symbologyType}}const ne=se.getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),Q=at(ot,ne);class ve{constructor(e,t,s){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:i,pixelType:n,textureOnly:a}=e,o=U(n);this.shared=s,this.pixelType=n,this.size=t,this.textureOnly=a,a||(this.data=new o(i)),this._resetRange()}destroy(){var e;(e=this._texture)==null||e.dispose();for(const t in this._fbos){const s=this._fbos[t];s&&(t==="0"&&s.detachColorTexture(),s.dispose()),this._fbos[t]=null}this._texture=null}get _textureDesc(){const e=new Me;return e.wrapMode=Ce.CLAMP_TO_EDGE,e.samplingMode=ze.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,s){const i=be(e),n=this.data,a=i*this.texelSize+t;!n||a>=n.length||(n[a]=s,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i))}getData(e,t){if(this.data==null)return null;const s=be(e)*this.texelSize+t;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const s=t===0?this.getTexture(e):this._textureDesc;this._fbos[t]=new ct(e,s)}return this._fbos[t]}get locked(){return!(this.pixelType!==dt.UNSIGNED_BYTE||!this.shared||this.textureOnly||!k("esri-atomics")||!this.data)&&Atomics.load(this.data,0)===1}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){if(!this.locked){try{const s=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;this._resetRange();const n=this.data.buffer,a=this.getTexture(e),o=4,l=(s-s%this.size)/this.size,u=(i-i%this.size)/this.size,d=l,c=this.size,h=u,v=l*this.size*o,_=(c+h*this.size)*o-v,x=U(this.pixelType),b=new x(n,v*x.BYTES_PER_ELEMENT,_),y=this.size,g=h-d+1;if(g>this.size)return void ne.error(new p("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,y,g,b)}catch{}t()}}update(e){const{data:t,start:s,end:i}=e;if(t!=null&&this.data!=null){const n=this.data,a=s*this.texelSize;for(let o=0;o<t.length;o++){const l=1<<o%this.texelSize;e.layout&l&&(n[a+o]=t[o])}}this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,i)}resize(e,t){const s=this.size;if(this.size=t,this.textureOnly)return void(s!==this.size&&(this._lastTexture=this._texture,this._texture=null));const i=U(this.pixelType);this.destroy(),this.data=new i(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new De(e,this._textureDesc,this.data??void 0);if(this._lastTexture!=null&&this._fbos[0]){const s=this._lastTexture.descriptor.width,i=this._lastTexture.descriptor.height,n=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),l=it(n),u=new(U(n))(new ArrayBuffer(s*i*l*this.texelSize)),d=e.getBoundFramebufferObject(),{x:c,y:h,width:v,height:_}=e.getViewport();e.bindFramebuffer(o),o.readPixels(0,0,s,i,a,n,u),t.updateData(0,0,0,2*s,i/2,u),e.setViewport(c,h,v,_),e.bindFramebuffer(d)}return this.destroy(),this._texture=t,this._texture}}class fs{constructor(e){this._onUpdate=e,this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(e){const{blocks:t,shared:s,size:i}=e;if(this.shared=s,this.size=i,Q("Initializing AttributeStoreView",e),this._data==null)this._data=t.map(n=>n!=null?new ve(n,i,s):null);else for(let n=0;n<this._data.length;n++){const a=this._data[n],o=t[n];o!=null&&(a==null?this._data[n]=new ve(o,i,s):a.resize(o,i))}this._initialized=!0}destroy(){var e;for(const t of this._data??[])t==null||t.destroy();(e=this._defaultTexture)==null||e.dispose()}isEmpty(){return this._data==null}isUpdating(){const e=this._pendingAttributeUpdate!=null,t=e;return k("esri-2d-log-updating")&&console.log(`Updating AttributeStoreView ${t}
  -> hasPendingUpdate ${e}`),t}getBlock(e){return this._data==null?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,pe,0,0)}getData(e,t,s,i){if(!this._data)return 0;const n=this._data[t];if(n==null)return 0;const a=n.getData(e,s);return a??i}setData(e,t,s,i){this._data[t].setData(e,s,i)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(e){if(this._pendingAttributeUpdate)return void ne.error(new p("mapview-webgl","Tried to update attribute data with a pending update"));const t=We();return Q("AttributeStoreView Update Requested",e),this._pendingAttributeUpdate={data:e,resolver:t},this._onUpdate(),t.promise}update(){if(this._initialized&&this._pendingAttributeUpdate!=null){k("esri-2d-update-debug")&&console.debug("AttributeStoreView::update");const{data:e,resolver:t}=this._pendingAttributeUpdate,s=this._data;for(let i=0;i<e.blocks.length;i++){const n=e.blocks[i],a=s[i];a!=null&&n!=null&&(Q(`Updating block ${i}`,n),a.update(n))}this._pendingAttributeUpdate=null,t(),this._onUpdate()}}bindTextures(e,t=!0){var n,a,o,l,u,d,c;const s=this._getDefaultTexture(e);if(!this._initialized)return e.bindTexture(s,ye),void(t&&(e.bindTexture(s,xe),e.bindTexture(s,me),e.bindTexture(s,ge),e.bindTexture(s,Y),e.bindTexture(s,G),e.bindTexture(s,_e)));const i=this._data;if(!this._locked||this._forceNextUpload){for(const h of i)h==null||h.updateTexture(e,()=>this._onUpdate());this._forceNextUpload=!1}e.bindTexture(((n=i[Qe])==null?void 0:n.getTexture(e))??s,ye),t&&(e.bindTexture(((a=i[Ze])==null?void 0:a.getTexture(e))??s,_e),e.bindTexture(((o=i[Xe])==null?void 0:o.getTexture(e))??s,xe),e.bindTexture(((l=i[pe])==null?void 0:l.getTexture(e))??s,me),e.bindTexture(((u=i[et])==null?void 0:u.getTexture(e))??s,ge),e.bindTexture(((d=i[Y])==null?void 0:d.getTexture(e))??s,Y),e.bindTexture(((c=i[G])==null?void 0:c.getTexture(e))??s,G))}_getDefaultTexture(e){if(this._defaultTexture==null){const t=new Me;t.wrapMode=Ce.CLAMP_TO_EDGE,t.samplingMode=ze.NEAREST,t.width=1,t.height=1,this._defaultTexture=new De(e,t,new Uint8Array(4))}return this._defaultTexture}}export{ee as T,te as _,ns as a,ds as b,cs as h,fs as j,ft as m,us as n,I as r,hs as w};
