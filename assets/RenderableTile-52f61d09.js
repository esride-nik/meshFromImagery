import{g3 as I,cB as M,kt as P,ku as k,kw as F,kv as v}from"./index-b516d057.js";import{e as b}from"./mat3f32-6c416b1c.js";import{E as m}from"./enums-fb086c25.js";import{h as f}from"./FramebufferObject-123b7c8d.js";import{F as d}from"./enums-bdecffa2.js";import{f as D}from"./VertexArrayObject-d19dab8d.js";import{e as S}from"./config-1337d16e.js";import{r as C}from"./TiledDisplayObject-e7d105ae.js";let z=class{constructor(e){this.xTile=0,this.yTile=0,this.hash=0,this.priority=1,this.colliders=[],this.textVertexRanges=[],this.iconVertexRanges=[],this.tile=e}},et=class{constructor(){this.tileSymbols=[],this.parts=[{startTime:0,startOpacity:0,targetOpacity:0,show:!1},{startTime:0,startOpacity:0,targetOpacity:0,show:!1}],this.show=!1}};function rt(h,e,r,t,s,i){const a=r-s;if(a>=0)return(e>>a)+(t-(i<<a))*(h>>a);const n=-a;return e-(i-(t<<n))*(h>>n)<<n}let it=class{constructor(e,r,t){this._rows=Math.ceil(r/t),this._columns=Math.ceil(e/t),this._cellSize=t,this.cells=new Array(this._rows);for(let s=0;s<this._rows;s++){this.cells[s]=new Array(this._columns);for(let i=0;i<this._columns;i++)this.cells[s][i]=[]}}getCell(e,r){const t=Math.min(Math.max(Math.floor(r/this._cellSize),0),this._rows-1),s=Math.min(Math.max(Math.floor(e/this._cellSize),0),this._columns-1);return this.cells[t]&&this.cells[t][s]||null}getCellSpan(e,r,t,s){return[Math.min(Math.max(Math.floor(e/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(r/this._cellSize),0),this.rows-1),Math.min(Math.max(Math.floor(t/this._cellSize),0),this.columns-1),Math.min(Math.max(Math.floor(s/this._cellSize),0),this.rows-1)]}get cellSize(){return this._cellSize}get columns(){return this._columns}get rows(){return this._rows}};function E(h,e,r,t,s,i){const a=e[t++];for(let n=0;n<a;n++){const o=new z(i);o.xTile=e[t++],o.yTile=e[t++],o.hash=e[t++],o.priority=e[t++];const c=e[t++];for(let l=0;l<c;l++){const x=e[t++],p=e[t++],g=e[t++],A=e[t++],w=!!e[t++],_=e[t++],R=r[t++],T=r[t++],V=e[t++],B=e[t++];o.colliders.push({xTile:x,yTile:p,dxPixels:g,dyPixels:A,hard:w,partIndex:_,width:V,height:B,minLod:R,maxLod:T})}const y=h[t++];for(let l=0;l<y;l++)o.textVertexRanges.push([h[t++],h[t++]]);const u=h[t++];for(let l=0;l<u;l++)o.iconVertexRanges.push([h[t++],h[t++]]);s.push(o)}return t}function nt(h,e,r){for(const[t,s]of h.symbols)W(h,e,r,s,t)}function W(h,e,r,t,s){const i=h.layerData.get(s);if(i.type===m.SYMBOL){for(const a of t){const n=a.unique;let o;if(a.selectedForRendering){const c=n.parts[0],y=c.startOpacity,u=c.targetOpacity;h.allSymbolsFadingOut=h.allSymbolsFadingOut&&u===0;const l=r?Math.floor(127*y)|u<<7:u?255:0;o=l<<24|l<<16|l<<8|l}else o=0;for(const[c,y]of a.iconVertexRanges)for(let u=c;u<c+y;u+=4)i.iconOpacity[u/4]=o;if(a.selectedForRendering){const c=n.parts[1],y=c.startOpacity,u=c.targetOpacity;h.allSymbolsFadingOut=h.allSymbolsFadingOut&&u===0;const l=r?Math.floor(127*y)|u<<7:u?255:0;o=l<<24|l<<16|l<<8|l}else o=0;for(const[c,y]of a.textVertexRanges)for(let u=c;u<c+y;u+=4)i.textOpacity[u/4]=o}i.lastOpacityUpdate=e,i.opacityChanged=!0}}class O{constructor(e,r){this.layerUIDs=[],this.isDestroyed=!1,this._data=e;let t=1;const s=new Uint32Array(e);this.layerUIDs=[];const i=s[t++];for(let a=0;a<i;a++)this.layerUIDs[a]=s[t++];this.bufferDataOffset=t,r&&(this.layer=r.getStyleLayerByUID(this.layerUIDs[0]))}get isPreparedForRendering(){return this._data==null}get offset(){return this.bufferDataOffset}get data(){return this._data}destroy(){this.isDestroyed||(this.doDestroy(),this._data=null,this.isDestroyed=!0)}prepareForRendering(e){this._data!=null&&(this.doPrepareForRendering(e,this._data,this.bufferDataOffset),this._data=null)}}class $ extends O{constructor(e,r){super(e,r),this.type=m.LINE,this.lineIndexStart=0,this.lineIndexCount=0;const t=new Uint32Array(e);let s=this.bufferDataOffset;this.lineIndexStart=t[s++],this.lineIndexCount=t[s++];const i=t[s++];if(i>0){this.patternMap=new Map;for(let a=0;a<i;a++){const n=t[s++],o=t[s++],c=t[s++];this.patternMap.set(n,[o,c])}}this.bufferDataOffset=s}get memoryUsed(){var e,r;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((r=this.vao)==null?void 0:r.usedMemory)??0)}hasData(){return this.lineIndexCount>0}triangleCount(){return this.lineIndexCount/3}doDestroy(){this.vao=I(this.vao)}doPrepareForRendering(e,r,t){const s=new Uint32Array(r),i=new Int32Array(s.buffer),a=s[t++],n=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,a));t+=a;const o=s[t++],c=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,o));t+=o;const y=this.layer.lineMaterial;this.vao=new D(e,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:n},c)}}class Y extends O{constructor(e,r){super(e,r),this.type=m.FILL,this.fillIndexStart=0,this.fillIndexCount=0,this.outlineIndexStart=0,this.outlineIndexCount=0;const t=new Uint32Array(e);let s=this.bufferDataOffset;this.fillIndexStart=t[s++],this.fillIndexCount=t[s++],this.outlineIndexStart=t[s++],this.outlineIndexCount=t[s++];const i=t[s++];if(i>0){this.patternMap=new Map;for(let a=0;a<i;a++){const n=t[s++],o=t[s++],c=t[s++];this.patternMap.set(n,[o,c])}}this.bufferDataOffset=s}get memoryUsed(){var e,r,t;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((r=this.fillVAO)==null?void 0:r.usedMemory)??0)+(((t=this.outlineVAO)==null?void 0:t.usedMemory)??0)}hasData(){return this.fillIndexCount>0||this.outlineIndexCount>0}triangleCount(){return(this.fillIndexCount+this.outlineIndexCount)/3}doDestroy(){this.fillVAO=I(this.fillVAO),this.outlineVAO=I(this.outlineVAO)}doPrepareForRendering(e,r,t){const s=new Uint32Array(r),i=new Int32Array(s.buffer),a=s[t++],n=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,a));t+=a;const o=s[t++],c=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,o));t+=o;const y=s[t++],u=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,y));t+=y;const l=s[t++],x=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,l));t+=l;const p=this.layer,g=p.fillMaterial,A=p.outlineMaterial;this.fillVAO=new D(e,g.getAttributeLocations(),g.getLayoutInfo(),{geometry:n},c),this.outlineVAO=new D(e,A.getAttributeLocations(),A.getLayoutInfo(),{geometry:u},x)}}class q extends O{constructor(e,r,t){super(e,r),this.type=m.SYMBOL,this.iconPerPageElementsMap=new Map,this.glyphPerPageElementsMap=new Map,this.symbolInstances=[],this.isIconSDF=!1,this.opacityChanged=!1,this.lastOpacityUpdate=0,this.symbols=[];const s=new Uint32Array(e),i=new Int32Array(e),a=new Float32Array(e);let n=this.bufferDataOffset;this.isIconSDF=!!s[n++];const o=s[n++];for(let l=0;l<o;l++){const x=s[n++],p=s[n++],g=s[n++];this.iconPerPageElementsMap.set(x,[p,g])}const c=s[n++];for(let l=0;l<c;l++){const x=s[n++],p=s[n++],g=s[n++];this.glyphPerPageElementsMap.set(x,[p,g])}const y=s[n++],u=s[n++];this.iconOpacity=new Int32Array(y),this.textOpacity=new Int32Array(u),n=E(s,i,a,n,this.symbols,t),this.bufferDataOffset=n}get memoryUsed(){var e,r,t;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((r=this.iconVAO)==null?void 0:r.usedMemory)??0)+(((t=this.textVAO)==null?void 0:t.usedMemory)??0)+M(this.iconOpacity)+M(this.textOpacity)}hasData(){return this.iconPerPageElementsMap.size>0||this.glyphPerPageElementsMap.size>0}triangleCount(){let e=0;for(const[r,t]of this.iconPerPageElementsMap)e+=t[1];for(const[r,t]of this.glyphPerPageElementsMap)e+=t[1];return e/3}doDestroy(){this.iconVAO=I(this.iconVAO),this.textVAO=I(this.textVAO)}updateOpacityInfo(){if(!this.opacityChanged)return;this.opacityChanged=!1;const e=this.iconOpacity,r=this.iconVAO.vertexBuffers.opacity;e.length>0&&e.byteLength===r.byteLength&&r.setSubData(e,0,0,e.length);const t=this.textOpacity,s=this.textVAO.vertexBuffers.opacity;t.length>0&&t.byteLength===s.byteLength&&s.setSubData(t,0,0,t.length)}doPrepareForRendering(e,r,t){const s=new Uint32Array(r),i=new Int32Array(s.buffer),a=s[t++],n=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,a));t+=a;const o=s[t++],c=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,o));t+=o;const y=s[t++],u=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,y));t+=y;const l=s[t++],x=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,l));t+=l;const p=f.createVertex(e,d.STATIC_DRAW,this.iconOpacity.buffer),g=f.createVertex(e,d.STATIC_DRAW,this.textOpacity.buffer),A=this.layer,w=A.iconMaterial,_=A.textMaterial;this.iconVAO=new D(e,w.getAttributeLocations(),w.getLayoutInfo(),{geometry:n,opacity:p},c),this.textVAO=new D(e,_.getAttributeLocations(),_.getLayoutInfo(),{geometry:u,opacity:g},x)}}class j extends O{constructor(e,r){super(e,r),this.type=m.CIRCLE,this.circleIndexStart=0,this.circleIndexCount=0;const t=new Uint32Array(e);let s=this.bufferDataOffset;this.circleIndexStart=t[s++],this.circleIndexCount=t[s++],this.bufferDataOffset=s}get memoryUsed(){var e,r;return(((e=this.data)==null?void 0:e.byteLength)??0)+(((r=this.vao)==null?void 0:r.usedMemory)??0)}hasData(){return this.circleIndexCount>0}triangleCount(){return this.circleIndexCount/3}doDestroy(){this.vao=I(this.vao)}doPrepareForRendering(e,r,t){const s=new Uint32Array(r),i=new Int32Array(s.buffer),a=s[t++],n=f.createVertex(e,d.STATIC_DRAW,new Int32Array(i.buffer,4*t,a));t+=a;const o=s[t++],c=f.createIndex(e,d.STATIC_DRAW,new Uint32Array(s.buffer,4*t,o));t+=o;const y=this.layer.circleMaterial;this.vao=new D(e,y.getAttributeLocations(),y.getLayoutInfo(),{geometry:n},c)}}class L extends C{constructor(e,r,t,s,i,a,n,o=null){super(e,r,t,s,i,a,4096,4096),this.styleRepository=n,this._memCache=o,this.type="vector-tile",this._referenced=0,this._hasSymbolBuckets=!1,this._memoryUsedByLayerData=0,this.layerData=new Map,this.status="loading",this.allSymbolsFadingOut=!1,this.lastOpacityUpdate=0,this.symbols=new Map,this.isCoverage=!1,this.neededForCoverage=!1,this.decluttered=!1,this.parentTile=null,this.childrenTiles=new Set,this._processed=!1,this._referenced=1,this.id=e.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<S}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||performance.now()-this.lastOpacityUpdate<S)}get wasRequested(){return this.status==="errored"||this.status==="loaded"||this.status==="reloading"}setData(e){this.changeDataImpl(e),this.requestRender(),this.ready(),this._processed=!0}deleteLayerData(e){var t;let r=!1;for(const s of e){const i=this.layerData.get(s);i&&(this._memoryUsedByLayerData-=i.memoryUsed,i.type===m.SYMBOL&&this.symbols.delete(s)&&(r=!0),i.destroy(),this.layerData.delete(s))}(t=this._memCache)==null||t.updateSize(this.key.id,this,this._memoryUsedByLayerData),r&&this.emit("symbols-changed"),this.requestRender()}processed(){return this._processed}hasData(){return this.layerData.size>0}dispose(){this.status!=="unloaded"&&(U.delete(this),L._destroyRenderBuckets(this.layerData),this.layerData=null,this._memoryUsedByLayerData=0,this.destroy(),this.status="unloaded")}release(){return--this._referenced==0&&(this.dispose(),this.stage=null,!0)}retain(){++this._referenced}get referenced(){return this._referenced}get memoryUsed(){return this._memoryUsedByLayerData+256}changeDataImpl(e){var t;let r=!1;if(e){const{bucketsWithData:s,emptyBuckets:i}=e,a=this._createRenderBuckets(s);if(i&&i.byteLength>0){const n=new Uint32Array(i);for(const o of n)this._deleteLayerData(o)}for(const[n,o]of a)this._deleteLayerData(n),o.type===m.SYMBOL&&(this.symbols.set(n,o.symbols),r=!0),this._memoryUsedByLayerData+=o.memoryUsed,this.layerData.set(n,o);(t=this._memCache)==null||t.updateSize(this.key.id,this,this.memoryUsed)}this._hasSymbolBuckets=!1;for(const[s,i]of this.layerData)i.type===m.SYMBOL&&(this._hasSymbolBuckets=!0);r&&this.emit("symbols-changed")}attachWithContext(e){this.stage={context:e,trashDisplayObject(r){r.processDetach()},untrashDisplayObject:()=>!1}}setTransform(e){super.setTransform(e);const r=this.resolution/(e.resolution*e.pixelRatio),t=this.width/this.rangeX*r,s=this.height/this.rangeY*r,i=[0,0];e.toScreen(i,[this.x,this.y]);const a=this.transforms.tileUnitsToPixels;P(a),k(a,a,i),F(a,a,Math.PI*e.rotation/180),v(a,a,[t,s,1])}_createTransforms(){return{dvs:b(),tileMat3:b(),tileUnitsToPixels:b()}}static _destroyRenderBuckets(e){if(!e)return;const r=new Set;for(const t of e.values())r.has(t)||(t.destroy(),r.add(t));e.clear()}_createRenderBuckets(e){const r=new Map,t=new Map;for(const s of e){const i=this._deserializeBucket(s,t);for(const a of i.layerUIDs)r.set(a,i)}return r}_deserializeBucket(e,r){let t=r.get(e);if(t)return t;switch(new Uint32Array(e)[0]){case m.FILL:t=new Y(e,this.styleRepository);break;case m.LINE:t=new $(e,this.styleRepository);break;case m.SYMBOL:t=new q(e,this.styleRepository,this);break;case m.CIRCLE:t=new j(e,this.styleRepository)}return r.set(e,t),t}_deleteLayerData(e){if(!this.layerData.has(e))return;const r=this.layerData.get(e);this._memoryUsedByLayerData-=r.memoryUsed,r.destroy(),this.layerData.delete(e)}}const U=new Map;function ot(){U.forEach((h,e)=>{console.log(`
${e.key}:`),h[0].forEach(r=>console.log(r)),console.log("========"),h[1].forEach(r=>console.log(r))})}class ht extends C{_createTransforms(){return{dvs:b(),tileMat3:b()}}}export{rt as a,L as d,nt as i,it as o,et as s,ht as t,ot as u};
