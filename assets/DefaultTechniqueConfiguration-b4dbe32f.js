import{ms as Ye,g5 as lr,_ as Qr,j5 as Zr,an as cr,s as yt,mA as Jr,lh as ea,bg as ta,ed as Ot,t as ra,cE as Ie,pX as Le,u as Oe,c9 as C,y as Nt,qu as aa,ib as ia,iL as na,g3 as pt,gk as oa,g_ as et,gH as p,mj as sa,bQ as dr,bE as Pt,bB as la,bC as ca,c2 as da,bD as Ht,t0 as ur,t1 as hr,aW as $,fJ as be,fx as ye,a$ as wt,bu as gt,t2 as le,gL as $t,fq as vt,d2 as mr,fk as fr,f6 as re,oA as Qe,a5 as g,mg as _t,m0 as ua,t3 as ha,t4 as ma,gJ as pr,a6 as b,a9 as fa,bA as gr,b0 as Ct,la as pa,nn as ga,ld as va,lb as _a,lc as Ta,fB as Ea,j$ as Sa,fK as xa,gN as Aa,kx as zt,nd as Ra,t5 as Bt,a3 as Ut,mk as U,jM as Gt,gi as ba,db as It,d8 as me,gG as ya,d1 as Vt,da as wa,hW as he}from"./index-b516d057.js";import{t as $a}from"./requestImageUtils-b142708c.js";import{c as te,G as j,L as K,D as ae,E as Ca,O as ce,I as M,P as ze,U as tt,B as nt,X as Ia}from"./enums-bdecffa2.js";import{T as ge,E as La,e as ie,b as Da}from"./Texture-bcb6d63f.js";import{o as l,n as we}from"./interfaces-8918b36f.js";import{d as Ma}from"./Material-5f4156ac.js";import{a as ot,E as Fa,i as Oa}from"./FramebufferObject-123b7c8d.js";import{r as Ne,t as Na}from"./ShaderTechniqueConfiguration-2502462e.js";function Pn(t,e=!1){return t<=Ye?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function Hn(t){return lr(t)?t.length<Ye?t:new Float32Array(t):t.length<Ye?Array.from(t):t}function zn(t){return(lr(t)?t.length:t.byteLength/8)<=Ye?Array.from(t):new Float32Array(t)}function Bn(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}function Pa(){if(st==null){const t=e=>Zr(`esri/libs/basisu/${e}`);st=Qr(()=>import("./basis_transcoder-58f546cb.js"),["assets/basis_transcoder-58f546cb.js","assets/index-b516d057.js","assets/index-b252abd2.css"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return st}let st;var fe;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(fe||(fe={}));let V=null,Be=null;async function vr(){return Be==null&&(Be=Pa(),V=await Be),Be}function Ha(t,e){if(V==null)return t.byteLength;const r=new V.BasisFile(new Uint8Array(t)),a=Tr(r)?_r(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),a}function za(t,e){if(V==null)return t.byteLength;const r=new V.KTX2File(new Uint8Array(t)),a=Er(r)?_r(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),a}function _r(t,e,r,a,i){const n=La(e?te.COMPRESSED_RGBA8_ETC2_EAC:te.COMPRESSED_RGB8_ETC2),o=i&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*a*n*o)}function Tr(t){return t.getNumImages()>=1&&!t.isUASTC()}function Er(t){return t.getFaces()>=1&&t.isETC1S()}async function Ba(t,e,r){V==null&&(V=await vr());const a=new V.BasisFile(new Uint8Array(r));if(!Tr(a))return null;a.startTranscoding();const i=Sr(t,e,a.getNumLevels(0),a.getHasAlpha(),a.getImageWidth(0,0),a.getImageHeight(0,0),(n,o)=>a.getImageTranscodedSizeInBytes(0,n,o),(n,o,s)=>a.transcodeImage(s,0,n,o,0,0));return a.close(),a.delete(),i}async function Ua(t,e,r){V==null&&(V=await vr());const a=new V.KTX2File(new Uint8Array(r));if(!Er(a))return null;a.startTranscoding();const i=Sr(t,e,a.getLevels(),a.getHasAlpha(),a.getWidth(),a.getHeight(),(n,o)=>a.getImageTranscodedSizeInBytes(n,0,0,o),(n,o,s)=>a.transcodeImage(s,n,0,0,o,0,-1,-1));return a.close(),a.delete(),i}function Sr(t,e,r,a,i,n,o,s){const{compressedTextureETC:c,compressedTextureS3TC:u}=t.capabilities,[d,h]=c?a?[fe.ETC2_RGBA,te.COMPRESSED_RGBA8_ETC2_EAC]:[fe.ETC1_RGB,te.COMPRESSED_RGB8_ETC2]:u?a?[fe.BC3_RGBA,te.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[fe.BC1_RGB,te.COMPRESSED_RGB_S3TC_DXT1_EXT]:[fe.RGBA32,j.RGBA],x=e.hasMipmap?r:Math.min(1,r),N=[];for(let I=0;I<x;I++)N.push(new Uint8Array(o(I,d))),s(I,d,N[I]);return e.internalFormat=h,e.hasMipmap=N.length>1,e.samplingMode=e.hasMipmap?K.LINEAR_MIPMAP_LINEAR:K.LINEAR,e.width=i,e.height=n,new ge(t,e,{type:"compressed",levels:N})}const Ue=cr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ga=542327876,Va=131072,Wa=4;function Lt(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ka(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const qa=Lt("DXT1"),Xa=Lt("DXT3"),ja=Lt("DXT5"),Ka=31,Ya=0,Qa=1,Za=2,Ja=3,ei=4,ti=7,ri=20,ai=21;function ii(t,e,r){const a=ni(r,e.hasMipmap??!1);if(a==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:n,width:o,height:s}=a;return e.samplingMode=i.levels.length>1?K.LINEAR_MIPMAP_LINEAR:K.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=n,e.width=o,e.height=s,new ge(t,e,i)}function ni(t,e){const r=new Int32Array(t,0,Ka);if(r[Ya]!==Ga)return Ue.error("Invalid magic number in DDS header"),null;if(!(r[ri]&Wa))return Ue.error("Unsupported format, must contain a FourCC code"),null;const a=r[ai];let i,n;switch(a){case qa:i=8,n=te.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Xa:i=16,n=te.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ja:i=16,n=te.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ue.error("Unsupported FourCC code:",ka(a)),null}let o=1,s=r[ei],c=r[Ja];!(3&s)&&!(3&c)||(Ue.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const u=s,d=c;let h,x;r[Za]&Va&&e!==!1&&(o=Math.max(1,r[ti]));let N=r[Qa]+4;const I=[];for(let Y=0;Y<o;++Y)x=(s+3>>2)*(c+3>>2)*i,h=new Uint8Array(t,N,x),I.push(h),N+=x,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:I},internalFormat:n,width:u,height:d}}const Wt=16;function Un(t){return Math.ceil(t/Wt)*Wt}function oi(t,e){let n=t.width*t.height;if(n<4096)return t instanceof ImageData?xr(t):t;let o=t.width,s=t.height;do o=Math.ceil(o/2),s=Math.ceil(s/2),n=o*s;while(n>1048576||e!=null&&(o>e||s>e));return Dt(t,o,s)}function si(t,e){const r=Math.max(t.width,t.height);if(r<=e)return t;const a=e/r;return Dt(t,Math.round(t.width*a),Math.round(t.height*a))}function Dt(t,e,r){if(t instanceof ImageData)return Dt(xr(t),e,r);const a=document.createElement("canvas");return a.width=e,a.height=r,a.getContext("2d").drawImage(t,0,0,a.width,a.height),a}function xr(t){const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");if(r==null)throw new yt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(t,0,0),e}let Gn=class extends Jr{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=ea.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ta,this._parameters={...ci,...r},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(e,r),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(Ot(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const a=()=>{e.removeEventListener("canplay",a),e.play()};e.addEventListener("canplay",a)}}}_startPreloadImageElement(e){ra(e.src)||Ot(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const r=new ie;return r.wrapMode=this._parameters.wrap??ae.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?K.LINEAR_MIPMAP_LINEAR:K.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||li(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ge(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(Ie(r)||Le(r))&&this._parameters.encoding===Oe.DDS_ENCODING?this._loadFromDDSData(e,r):(Ie(r)||Le(r))&&this._parameters.encoding===Oe.KTX2_ENCODING?this._loadFromKTX2(e,r):(Ie(r)||Le(r))&&this._parameters.encoding===Oe.BASIS_ENCODING?this._loadFromBasis(e,r):Le(r)?this._loadFromPixelData(e,r):Ie(r)?this._loadFromPixelData(e,new Uint8Array(r)):null)}_frameUpdate(e,r){return this._glTexture==null||e.readyState<Pe.HAVE_CURRENT_DATA||r===e.currentTime?r:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,r){return this._glTexture=ii(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Ua(e,this._createDescriptor(e),r).then(a=>(this._glTexture=a,a)))}_loadFromBasis(e,r){return this._loadAsync(()=>Ba(e,this._createDescriptor(e),r).then(a=>(this._glTexture=a,a)))}_loadFromPixelData(e,r){C(this._parameters.width>0&&this._parameters.height>0);const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===1?j.LUMINANCE:this._parameters.components===3?j.RGB:j.RGBA,a.width=this._parameters.width??0,a.height=this._parameters.height??0,this._glTexture=new ge(e,a,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async a=>{const i=await $a(r,{signal:a});return Nt(a),this._loadFromImage(e,i)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async a=>{const i=await aa(r,r.src,!1,a);return Nt(a),this._loadFromImage(e,i)})}_loadFromVideoElement(e,r){return r.readyState>=Pe.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(a=>new Promise((i,n)=>{const o=()=>{r.removeEventListener("loadeddata",s),r.removeEventListener("error",c),oa(u)},s=()=>{r.readyState>=Pe.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(e,r)))},c=d=>{o(),n(d||new yt("Failed to load video"))};r.addEventListener("loadeddata",s),r.addEventListener("error",c);const u=ia(a,()=>c(na()))}))}_loadFromImage(e,r){let a=r;if(!(a instanceof HTMLVideoElement)){const{maxTextureSize:o}=e.parameters;a=this._parameters.downsampleUncompressed?oi(a,o):si(a,o)}const i=Ar(a);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=this._parameters.components===3?j.RGB:j.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new ge(e,n,a),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const a=e(r.signal);this._loadingPromise=a;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===a&&(this._loadingPromise=null)};return a.then(i,i),a}unload(){if(this._glTexture=pt(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function li(t,e){if(t==null)return 0;if(Ie(t)||Le(t))return e.encoding===Oe.KTX2_ENCODING?za(t,!!e.mipmap):e.encoding===Oe.BASIS_ENCODING?Ha(t,!!e.mipmap):t.byteLength;const{width:r,height:a}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?Ar(t):e;return(e.mipmap?4/3:1)*r*a*(e.components||4)||0}function Ar(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var Pe;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Pe||(Pe={}));const ci={wrap:{s:ae.REPEAT,t:ae.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var L;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.CompositeColor=9]="CompositeColor",t[t.COUNT=10]="COUNT"})(L||(L={}));function di(t,e){switch(e.normalType){case z.Compressed:t.attributes.add(p.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(l`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case z.Attribute:t.attributes.add(p.NORMAL,"vec3"),t.vertex.code.add(l`vec3 normalModel() {
return normal;
}`);break;case z.ScreenDerivative:t.fragment.code.add(l`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:et(e.normalType);case z.COUNT:case z.Ground:}}var z;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(z||(z={}));var B;function ui(t,e){switch(e.textureCoordinateType){case B.Default:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case B.Compressed:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(l`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case B.Atlas:return t.attributes.add(p.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(p.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(l`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:et(e.textureCoordinateType);case B.None:return void t.vertex.code.add(l`void forwardTextureCoordinates() {}`);case B.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(B||(B={}));function hi(t){t.fragment.code.add(l`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function mi(t,e){switch(t.include(ui,e),e.textureCoordinateType){case B.Default:case B.Compressed:return void t.fragment.code.add(l`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case B.Atlas:return t.include(hi),void t.fragment.code.add(l`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:et(e.textureCoordinateType);case B.None:case B.COUNT:return}}var f;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(f||(f={}));let O=class{constructor(e,r,a,i,n=null){if(this.name=e,this.type=r,this.arraySize=n,this.bind={[f.Pass]:null,[f.Draw]:null},i)switch(a){case f.Pass:this.bind[f.Pass]=i;break;case f.Draw:this.bind[f.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},W=class extends O{constructor(e,r){super(e,"vec3",f.Draw,(a,i,n,o)=>a.setUniform3fv(e,r(i,n,o)))}},D=class extends O{constructor(e,r){super(e,"vec3",f.Pass,(a,i,n)=>a.setUniform3fv(e,r(i,n)))}},lt=class extends O{constructor(e,r){super(e,"sampler2D",f.Draw,(a,i,n)=>a.bindTexture(e,r(i,n)))}},xe=class extends O{constructor(e,r){super(e,"sampler2D",f.Pass,(a,i,n)=>a.bindTexture(e,r(i,n)))}},Kn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return sa.LOADED}};var P;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(P||(P={}));function Qn(t,e){const r=t.fragment,a=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===P.Normal&&a&&t.include(mi,e),e.pbrMode!==P.Schematic)if(e.pbrMode!==P.Disabled){if(e.pbrMode===P.Normal){r.code.add(l`vec3 mrr;
vec3 emission;
float occlusion;`);const i=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(i===f.Pass?new xe("texMetallicRoughness",n=>n.textureMetallicRoughness):new lt("texMetallicRoughness",n=>n.textureMetallicRoughness)),r.code.add(l`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(i===f.Pass?new xe("texEmission",n=>n.textureEmissive):new lt("texEmission",n=>n.textureEmissive)),r.code.add(l`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(i===f.Pass?new xe("texOcclusion",n=>n.textureOcclusion):new lt("texOcclusion",n=>n.textureOcclusion)),r.code.add(l`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(l`float getBakedOcclusion() { return 1.0; }`),i===f.Pass?r.uniforms.add(new D("emissionFactor",n=>n.emissiveFactor),new D("mrrFactors",n=>n.mrrFactors)):r.uniforms.add(new W("emissionFactor",n=>n.emissiveFactor),new W("mrrFactors",n=>n.mrrFactors)),r.code.add(l`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?l`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?l`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?l`applyEmission(${e.hasEmissiveTextureTransform?l`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?l`applyOcclusion(${e.hasOcclusionTextureTransform?l`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(l`float getBakedOcclusion() { return 1.0; }`);else r.code.add(l`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}var kt;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.ANTIALIASING=10]="ANTIALIASING",t[t.COMPOSITE=11]="COMPOSITE",t[t.BLIT=12]="BLIT",t[t.SSAO=13]="SSAO",t[t.HIGHLIGHT=14]="HIGHLIGHT",t[t.SHADOW_HIGHLIGHT=15]="SHADOW_HIGHLIGHT",t[t.ENVIRONMENT_OPAQUE=16]="ENVIRONMENT_OPAQUE",t[t.ENVIRONMENT_TRANSPARENT=17]="ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=18]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=19]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=20]="HUD_MATERIAL",t[t.LABEL_MATERIAL=21]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=22]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=23]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=24]="DRAPED_MATERIAL",t[t.DRAPED_WATER=25]="DRAPED_WATER",t[t.VOXEL=26]="VOXEL",t[t.MAX_SLOTS=27]="MAX_SLOTS"})(kt||(kt={}));function Zn(t,e,r,a=1){const{data:i,indices:n}=t,o=e.typedBuffer,s=e.typedBufferStride,c=n.length;if(r*=s,a===1)for(let u=0;u<c;++u)o[r]=i[n[u]],r+=s;else for(let u=0;u<c;++u){const d=i[n[u]];for(let h=0;h<a;h++)o[r]=d,r+=s}}function qt(t,e,r){const{data:a,indices:i}=t,n=e.typedBuffer,o=e.typedBufferStride,s=i.length;r*=o;for(let c=0;c<s;++c){const u=2*i[c];n[r]=a[u],n[r+1]=a[u+1],r+=o}}function Rr(t,e,r,a){const{data:i,indices:n}=t,o=e.typedBuffer,s=e.typedBufferStride,c=n.length;if(r*=s,a==null||a===1)for(let u=0;u<c;++u){const d=3*n[u];o[r]=i[d],o[r+1]=i[d+1],o[r+2]=i[d+2],r+=s}else for(let u=0;u<c;++u){const d=3*n[u];for(let h=0;h<a;++h)o[r]=i[d],o[r+1]=i[d+1],o[r+2]=i[d+2],r+=s}}function br(t,e,r,a=1){const{data:i,indices:n}=t,o=e.typedBuffer,s=e.typedBufferStride,c=n.length;if(r*=s,a===1)for(let u=0;u<c;++u){const d=4*n[u];o[r]=i[d],o[r+1]=i[d+1],o[r+2]=i[d+2],o[r+3]=i[d+3],r+=s}else for(let u=0;u<c;++u){const d=4*n[u];for(let h=0;h<a;++h)o[r]=i[d],o[r+1]=i[d+1],o[r+2]=i[d+2],o[r+3]=i[d+3],r+=s}}function Jn(t,e,r){const a=t.typedBuffer,i=t.typedBufferStride;e*=i;for(let n=0;n<r;++n)a[e]=0,a[e+1]=0,a[e+2]=0,a[e+3]=0,e+=i}function fi(t,e,r,a,i=1){if(!e)return void Rr(t,r,a,i);const{data:n,indices:o}=t,s=r.typedBuffer,c=r.typedBufferStride,u=o.length,d=e[0],h=e[1],x=e[2],N=e[4],I=e[5],Y=e[6],ve=e[8],_e=e[9],Te=e[10],de=e[12],ne=e[13],k=e[14];a*=c;let q=0,S=0,_=0;const A=ur(e)?v=>{q=n[v]+de,S=n[v+1]+ne,_=n[v+2]+k}:v=>{const m=n[v],R=n[v+1],T=n[v+2];q=d*m+N*R+ve*T+de,S=h*m+I*R+_e*T+ne,_=x*m+Y*R+Te*T+k};if(i===1)for(let v=0;v<u;++v)A(3*o[v]),s[a]=q,s[a+1]=S,s[a+2]=_,a+=c;else for(let v=0;v<u;++v){A(3*o[v]);for(let m=0;m<i;++m)s[a]=q,s[a+1]=S,s[a+2]=_,a+=c}}function pi(t,e,r,a,i=1){if(!e)return void Rr(t,r,a,i);const{data:n,indices:o}=t,s=e,c=r.typedBuffer,u=r.typedBufferStride,d=o.length,h=s[0],x=s[1],N=s[2],I=s[4],Y=s[5],ve=s[6],_e=s[8],Te=s[9],de=s[10],ne=!hr(s),k=1e-6,q=1-k;a*=u;let S=0,_=0,A=0;const v=ur(s)?m=>{S=n[m],_=n[m+1],A=n[m+2]}:m=>{const R=n[m],T=n[m+1],H=n[m+2];S=h*R+I*T+_e*H,_=x*R+Y*T+Te*H,A=N*R+ve*T+de*H};if(i===1)if(ne)for(let m=0;m<d;++m){v(3*o[m]);const R=S*S+_*_+A*A;if(R<q&&R>k){const T=1/Math.sqrt(R);c[a]=S*T,c[a+1]=_*T,c[a+2]=A*T}else c[a]=S,c[a+1]=_,c[a+2]=A;a+=u}else for(let m=0;m<d;++m)v(3*o[m]),c[a]=S,c[a+1]=_,c[a+2]=A,a+=u;else for(let m=0;m<d;++m){if(v(3*o[m]),ne){const R=S*S+_*_+A*A;if(R<q&&R>k){const T=1/Math.sqrt(R);S*=T,_*=T,A*=T}}for(let R=0;R<i;++R)c[a]=S,c[a+1]=_,c[a+2]=A,a+=u}}function gi(t,e,r,a,i=1){if(!e)return void br(t,r,a,i);const{data:n,indices:o}=t,s=e,c=r.typedBuffer,u=r.typedBufferStride,d=o.length,h=s[0],x=s[1],N=s[2],I=s[4],Y=s[5],ve=s[6],_e=s[8],Te=s[9],de=s[10],ne=!hr(s),k=1e-6,q=1-k;if(a*=u,i===1)for(let S=0;S<d;++S){const _=4*o[S],A=n[_],v=n[_+1],m=n[_+2],R=n[_+3];let T=h*A+I*v+_e*m,H=x*A+Y*v+Te*m,Q=N*A+ve*v+de*m;if(ne){const X=T*T+H*H+Q*Q;if(X<q&&X>k){const ue=1/Math.sqrt(X);T*=ue,H*=ue,Q*=ue}}c[a]=T,c[a+1]=H,c[a+2]=Q,c[a+3]=R,a+=u}else for(let S=0;S<d;++S){const _=4*o[S],A=n[_],v=n[_+1],m=n[_+2],R=n[_+3];let T=h*A+I*v+_e*m,H=x*A+Y*v+Te*m,Q=N*A+ve*v+de*m;if(ne){const X=T*T+H*H+Q*Q;if(X<q&&X>k){const ue=1/Math.sqrt(X);T*=ue,H*=ue,Q*=ue}}for(let X=0;X<i;++X)c[a]=T,c[a+1]=H,c[a+2]=Q,c[a+3]=R,a+=u}}function vi(t,e,r,a,i=1){const{data:n,indices:o}=t,s=r.typedBuffer,c=r.typedBufferStride,u=o.length;if(a*=c,e!==n.length||e!==4)if(i!==1)if(e!==4)for(let d=0;d<u;++d){const h=3*o[d];for(let x=0;x<i;++x)s[a]=n[h],s[a+1]=n[h+1],s[a+2]=n[h+2],s[a+3]=255,a+=c}else for(let d=0;d<u;++d){const h=4*o[d];for(let x=0;x<i;++x)s[a]=n[h],s[a+1]=n[h+1],s[a+2]=n[h+2],s[a+3]=n[h+3],a+=c}else{if(e===4){for(let d=0;d<u;++d){const h=4*o[d];s[a]=n[h],s[a+1]=n[h+1],s[a+2]=n[h+2],s[a+3]=n[h+3],a+=c}return}for(let d=0;d<u;++d){const h=3*o[d];s[a]=n[h],s[a+1]=n[h+1],s[a+2]=n[h+2],s[a+3]=255,a+=c}}else{s[a]=n[0],s[a+1]=n[1],s[a+2]=n[2],s[a+3]=n[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,x=d[a/=4];a+=h;const N=u*i;for(let I=1;I<N;++I)d[a]=x,a+=h}}function _i(t,e,r){const{data:a,indices:i}=t,n=e.typedBuffer,o=e.typedBufferStride,s=i.length,c=a[0];r*=o;for(let u=0;u<s;++u)n[r]=c,r+=o}function Ti(t,e,r,a,i=1){const n=e.typedBuffer,o=e.typedBufferStride;if(a*=o,i===1)for(let s=0;s<r;++s)n[a]=t[0],n[a+1]=t[1],n[a+2]=t[2],n[a+3]=t[3],a+=o;else for(let s=0;s<r;++s)for(let c=0;c<i;++c)n[a]=t[0],n[a+1]=t[1],n[a+2]=t[2],n[a+3]=t[3],a+=o}function Ei(t,e,r,a,i,n){var o;for(const s of e.fields.keys()){const c=t.attributes.get(s),u=c==null?void 0:c.indices;if(c&&u)Si(s,c,r,a,i,n);else if(s===p.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const d=(o=t.attributes.get(p.POSITION))==null?void 0:o.indices;if(d){const h=d.length,x=i.getField(s,dr);Ti(t.objectAndLayerIdColor,x,h,n)}}}}function Si(t,e,r,a,i,n){switch(t){case p.POSITION:{C(e.size===3);const o=i.getField(t,Ht);C(!!o,`No buffer view for ${t}`),o&&fi(e,r,o,n);break}case p.NORMAL:{C(e.size===3);const o=i.getField(t,Ht);C(!!o,`No buffer view for ${t}`),o&&pi(e,a,o,n);break}case p.NORMALCOMPRESSED:{C(e.size===2);const o=i.getField(t,da);C(!!o,`No buffer view for ${t}`),o&&qt(e,o,n);break}case p.UV0:{C(e.size===2);const o=i.getField(t,ca);C(!!o,`No buffer view for ${t}`),o&&qt(e,o,n);break}case p.COLOR:case p.SYMBOLCOLOR:{const o=i.getField(t,dr);C(!!o,`No buffer view for ${t}`),C(e.size===3||e.size===4),!o||e.size!==3&&e.size!==4||vi(e,e.size,o,n);break}case p.COLORFEATUREATTRIBUTE:{const o=i.getField(t,la);C(!!o,`No buffer view for ${t}`),C(e.size===1),o&&e.size===1&&_i(e,o,n);break}case p.TANGENT:{C(e.size===4);const o=i.getField(t,Pt);C(!!o,`No buffer view for ${t}`),o&&gi(e,a,o,n);break}case p.PROFILERIGHT:case p.PROFILEUP:case p.PROFILEVERTEXANDNORMAL:case p.FEATUREVALUE:{C(e.size===4);const o=i.getField(t,Pt);C(!!o,`No buffer view for ${t}`),o&&br(e,o,n)}}}let eo=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(p.POSITION).indices.length}write(e,r,a,i,n){Ei(a,this.vertexBufferLayout,e,r,i,n)}};function xi(t){t.attributes.add(p.POSITION,"vec3"),t.vertex.code.add(l`vec3 positionModel() { return position; }`)}function yr({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(l`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(l`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let wr=class extends O{constructor(e,r){super(e,"mat3",f.Draw,(a,i,n)=>a.setUniformMatrix3fv(e,r(i,n)))}},rt=class extends O{constructor(e,r){super(e,"mat3",f.Pass,(a,i,n)=>a.setUniformMatrix3fv(e,r(i,n)))}},Ae=class extends O{constructor(e,r){super(e,"mat4",f.Pass,(a,i,n)=>a.setUniformMatrix4fv(e,r(i,n)))}};function $r(t,e){t.include(xi);const r=t.vertex;r.include(yr,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new D("transformWorldFromViewTH",a=>a.transformWorldFromViewTH),new D("transformWorldFromViewTL",a=>a.transformWorldFromViewTL),new rt("transformViewFromCameraRelativeRS",a=>a.transformViewFromCameraRelativeRS),new Ae("transformProjFromView",a=>a.transformProjFromView),new wr("transformWorldFromModelRS",a=>a.transformWorldFromModelRS),new W("transformWorldFromModelTH",a=>a.transformWorldFromModelTH),new W("transformWorldFromModelTL",a=>a.transformWorldFromModelTL)),r.code.add(l`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(l`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?l`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:l`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new D("transformWorldFromViewTL",a=>a.transformWorldFromViewTL)),r.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(l`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ai=class extends we{constructor(){super(...arguments),this.transformWorldFromViewTH=$(),this.transformWorldFromViewTL=$(),this.transformViewFromCameraRelativeRS=be(),this.transformProjFromView=ye()}},Ri=class extends we{constructor(){super(...arguments),this.transformWorldFromModelRS=be(),this.transformWorldFromModelTH=$(),this.transformWorldFromModelTL=$()}};function so(t,e){switch(e.normalType){case z.Attribute:case z.Compressed:t.include(di,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new wr("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new rt("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(l`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case z.Ground:t.include($r,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(l`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?l`normalize(vPositionWorldCameraRelative);`:l`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case z.ScreenDerivative:t.vertex.code.add(l`void forwardNormal() {}`);break;default:et(e.normalType);case z.COUNT:}}let lo=class extends Ai{constructor(){super(...arguments),this.transformNormalViewFromGlobal=be()}},uo=class extends Ri{constructor(){super(...arguments),this.transformNormalGlobalFromModel=be(),this.toMapSpace=wt()}};const mo=.1,fo=.001;let po=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},vo=class{constructor(e,r,a){this.release=a,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=pt(this._program),this._pipeline=this._configuration=null}reload(e){pt(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Ca.TRIANGLES}getPipeline(e,r,a){return this._pipeline}initializeConfiguration(e,r){}},To=class{constructor(e,r,a){this._context=e,this._locations=a,this._textures=new Map,this._freeTextureUnits=new gt({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),a),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Da()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if((r==null?void 0:r.glName)==null){const i=this._textures.get(e);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(e)),null}let a=this._textures.get(e);return a==null?(a=this._allocTextureUnit(r),this._textures.set(e,a)):a.texture=r,this._context.useProgram(this),this.setUniform1i(e,a.unit),this._context.bindTexture(r,a.unit),a.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};const So={func:ce.LESS},xo={func:ce.ALWAYS},Ao={mask:255},Ro={mask:0},bo=t=>({function:{func:ce.NOTEQUAL,ref:t,mask:t},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.KEEP}}),yo=t=>({function:{func:ce.ALWAYS,ref:t,mask:t},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.REPLACE}}),wo={function:{func:ce.ALWAYS,ref:le.OutlineVisualElementMask,mask:le.OutlineVisualElementMask},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.ZERO}},$o={function:{func:ce.ALWAYS,ref:le.OutlineVisualElementMask,mask:le.OutlineVisualElementMask},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.REPLACE}},Co={function:{func:ce.EQUAL,ref:le.OutlineVisualElementMask,mask:le.OutlineVisualElementMask},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.KEEP}},Io={function:{func:ce.NOTEQUAL,ref:le.OutlineVisualElementMask,mask:le.OutlineVisualElementMask},operation:{fail:M.KEEP,zFail:M.KEEP,zPass:M.KEEP}};let Mt=class extends O{constructor(e,r){super(e,"vec2",f.Pass,(a,i,n)=>a.setUniform2fv(e,r(i,n)))}};function Xt(t){t.varyings.add("linearDepth","float")}function bi(t){t.vertex.uniforms.add(new Mt("nearFar",(e,r)=>r.camera.nearFar))}function Cr(t){t.vertex.code.add(l`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Do(t,e){const{vertex:r}=t;switch(e.output){case L.Color:if(e.receiveShadows)return Xt(t),void r.code.add(l`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case L.Depth:case L.Shadow:case L.ShadowHighlight:case L.ShadowExcludeHighlight:return t.include($r,e),Xt(t),bi(t),Cr(t),void r.code.add(l`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(l`void forwardLinearDepth() {}`)}let Mo=class extends we{constructor(e){super(),this.slicePlaneLocalOrigin=e}};function Oo(t,e){Ir(t,e,new D("slicePlaneOrigin",(r,a)=>Fr(e,r,a)),new D("slicePlaneBasis1",(r,a)=>{var i;return Ze(e,r,a,(i=a.slicePlane)==null?void 0:i.basis1)}),new D("slicePlaneBasis2",(r,a)=>{var i;return Ze(e,r,a,(i=a.slicePlane)==null?void 0:i.basis2)}))}function No(t,e){Ir(t,e,new W("slicePlaneOrigin",(r,a)=>Fr(e,r,a)),new W("slicePlaneBasis1",(r,a)=>{var i;return Ze(e,r,a,(i=a.slicePlane)==null?void 0:i.basis1)}),new W("slicePlaneBasis2",(r,a)=>{var i;return Ze(e,r,a,(i=a.slicePlane)==null?void 0:i.basis2)}))}function Ir(t,e,...r){if(!e.hasSlicePlane){const o=l`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(o),void t.fragment.code.add(o)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const a=l`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=e.hasSliceHighlight?l`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(a),t.fragment.code.add(a),t.fragment.code.add(n)}function Lr(t,e,r){return t.instancedDoublePrecision?re(yi,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Dr(t,e){return t!=null?fr(Je,e.origin,t):e.origin}function Mr(t,e,r){return t.hasSliceTranslatedView?e!=null?Qe(wi,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Fr(t,e,r){if(r.slicePlane==null)return $t;const a=Lr(t,e,r),i=Dr(a,r.slicePlane),n=Mr(t,a,r);return n!=null?vt(Je,i,n):i}function Ze(t,e,r,a){if(a==null||r.slicePlane==null)return $t;const i=Lr(t,e,r),n=Dr(i,r.slicePlane),o=Mr(t,i,r);return o!=null?(mr($e,a,n),vt(Je,n,o),vt($e,$e,o),fr($e,$e,Je)):a}const yi=$(),Je=$(),$e=$(),wi=ye();function Po(t){Cr(t),t.vertex.code.add(l`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(l`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let $i=class extends O{constructor(e,r){super(e,"float",f.Pass,(a,i,n)=>a.setUniform1f(e,r(i,n)))}},Ci=class extends O{constructor(e,r){super(e,"mat4",f.Draw,(a,i,n)=>a.setUniformMatrix4fv(e,r(i,n)))}};function Bo(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",$t):t.uniforms.add(new W("cameraPosition",(r,a)=>re(Or,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Uo(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new Ae("proj",(a,i)=>i.camera.projectionMatrix),new Ci("view",(a,i)=>Qe(jt,i.camera.viewMatrix,a.origin)),new W("localOrigin",a=>a.origin));const r=a=>re(Or,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new Ae("proj",(a,i)=>i.camera.projectionMatrix),new Ae("view",(a,i)=>Qe(jt,i.camera.viewMatrix,r(i))),new D("localOrigin",(a,i)=>r(i)))}const jt=ye(),Or=$();function Ii(t){t.uniforms.add(new Ae("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function Go(t){t.uniforms.add(new $i("pixelRatio",(e,r)=>r.camera.pixelRatio/r.overlayStretch))}let Tt=class extends Na{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};g([Ne()],Tt.prototype,"instancedDoublePrecision",void 0),g([Ne()],Tt.prototype,"hasModelTransformation",void 0);const Kt=be();function Wo(t,e){const r=e.hasModelTransformation,a=e.instancedDoublePrecision;r&&(t.vertex.uniforms.add(new Ae("model",n=>n.modelTransformation??_t)),t.vertex.uniforms.add(new rt("normalLocalOriginFromModel",n=>(ua(Kt,n.modelTransformation??_t),Kt)))),e.instanced&&a&&(t.attributes.add(p.INSTANCEMODELORIGINHI,"vec3"),t.attributes.add(p.INSTANCEMODELORIGINLO,"vec3"),t.attributes.add(p.INSTANCEMODEL,"mat3"),t.attributes.add(p.INSTANCEMODELNORMAL,"mat3"));const i=t.vertex;a&&(i.include(yr,e),i.uniforms.add(new W("viewOriginHi",(n,o)=>ha(re(Ge,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Ge)),new W("viewOriginLo",(n,o)=>ma(re(Ge,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Ge)))),i.code.add(l`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?l`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(l`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),e.output===L.Normal&&(Ii(i),i.code.add(l`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),e.hasVertexTangents&&i.code.add(l`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Ge=$();let Li=class extends O{constructor(e,r){super(e,"int",f.Pass,(a,i,n)=>a.setUniform1i(e,r(i,n)))}},G=class extends O{constructor(e,r){super(e,"vec4",f.Pass,(a,i,n)=>a.setUniform4fv(e,r(i,n)))}};function Xo(t,e){const r=e.output===L.ObjectAndLayerIdColor,a=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),a?t.attributes.add(p.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(p.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(l`
     void forwardObjectAndLayerIdColor() {
      ${r?a?l`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:l`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:l``} }`),t.fragment.code.add(l`
      void outputObjectAndLayerIdColor() {
        ${r?l`fragColor = objectAndLayerIdColorVarying;`:l``} }`)}function Nr(t){t.code.add(l`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function Pr(t){t.code.add(l`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function jo(t,e){switch(e.output){case L.Shadow:case L.ShadowHighlight:case L.ShadowExcludeHighlight:t.fragment.include(Nr),t.fragment.code.add(l`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case L.Depth:t.fragment.include(Pr),t.fragment.code.add(l`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Di=pr(1,1,0,1),Mi=pr(1,0,1,1);function Ko(t){t.fragment.uniforms.add(new xe("depthTexture",(e,r)=>r.mainDepth)),t.fragment.constants.add("occludedHighlightFlag","vec4",Di).add("unoccludedHighlightFlag","vec4",Mi),t.fragment.code.add(l`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let Fi=class extends O{constructor(e,r,a){super(e,"vec4",f.Pass,(i,n,o)=>i.setUniform4fv(e,r(n,o)),a)}},Oi=class extends O{constructor(e,r,a){super(e,"float",f.Pass,(i,n,o)=>i.setUniform1fv(e,r(n,o)),a)}},E=class extends gr{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};g([b()],E.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),g([b()],E.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),g([b()],E.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),g([b()],E.prototype,"DECONFLICTOR_SHOW_GRID",void 0),g([b()],E.prototype,"LABELS_SHOW_BORDER",void 0),g([b()],E.prototype,"TEXT_SHOW_BASELINE",void 0),g([b()],E.prototype,"TEXT_SHOW_BORDER",void 0),g([b()],E.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),g([b()],E.prototype,"OVERLAY_SHOW_CENTER",void 0),g([b()],E.prototype,"SHOW_POI",void 0),g([b()],E.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),g([b()],E.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),g([b()],E.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),g([b()],E.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),g([b()],E.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),g([b()],E.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),g([b()],E.prototype,"I3S_TREE_SHOW_TILES",void 0),g([b()],E.prototype,"I3S_SHOW_MODIFICATIONS",void 0),g([b()],E.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),g([b()],E.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),g([b()],E.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),g([b()],E.prototype,"LINE_WIREFRAMES",void 0),E=g([fa("esri.views.3d.support.DebugFlags")],E);const Ni=new E;var F,Yt;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(F||(F={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(Yt||(Yt={}));let Ft=class{constructor(e){this.field=e}},Pi=class extends Ft{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[F.Undefined,F.Undefined,F.Undefined]}},Hi=class extends Ft{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}},zi=class extends Ft{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}},Bi=class{};function Ce(t){return t!=null}function Ee(t){return typeof t=="number"}function at(t){return typeof t=="string"}function Ui(t){return t==null||at(t)}function w(t,e){t&&t.push(e)}function Gi(t,e,r,a=ye()){const i=t||0,n=e||0,o=r||0;return i!==0&&va(a,a,-i/180*Math.PI),n!==0&&_a(a,a,n/180*Math.PI),o!==0&&Ta(a,a,o/180*Math.PI),a}function oe(t,e,r,a,i){var s;const n=t.minSize,o=t.maxSize;if(t.expression)return w(i,"Could not convert size info: expression not supported"),!1;if(t.useSymbolValue){const c=a.symbolSize[r];return e.minSize[r]=c,e.maxSize[r]=c,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=F.DefinedSize,!0}if(Ce(t.field))return Ce(t.stops)?t.stops.length===2&&Ee(t.stops[0].size)&&Ee(t.stops[1].size)?(Qt(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=F.DefinedSize,!0):(w(i,"Could not convert size info: stops only supported with 2 elements"),!1):Ee(n)&&Ee(o)&&Ce(t.minDataValue)&&Ce(t.maxDataValue)?(Qt(n,o,t.minDataValue,t.maxDataValue,e,r),e.type[r]=F.DefinedSize,!0):t.valueUnit==="unknown"?(w(i,"Could not convert size info: proportional size not supported"),!1):zt[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/zt[t.valueUnit],e.type[r]=F.DefinedSize,!0):(w(i,"Could not convert size info: scale-dependent size not supported"),!1);if(!Ce(t.field)){if((s=t.stops)!=null&&s[0]&&Ee(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=F.DefinedSize,!0;if(Ee(n))return e.minSize[r]=n,e.maxSize[r]=n,e.offset[r]=n,e.factor[r]=0,e.type[r]=F.DefinedSize,!0}return w(i,"Could not convert size info: unsupported variant of sizeInfo"),!1}function Qt(t,e,r,a,i,n){const o=Math.abs(a-r)>0?(e-t)/(a-r):0;i.minSize[n]=o>0?t:e,i.maxSize[n]=o>0?e:t,i.offset[n]=t-r*o,i.factor[n]=o}function Vi(t,e,r,a){if(t.normalizationField||t.valueRepresentation)return w(a,"Could not convert size info: unsupported property"),null;if(!Ui(t.field))return w(a,"Could not convert size info: field is not a string"),null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return w(a,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size=new Pi(t.field);let i;switch(t.axis){case"width":return i=oe(t,e.size,0,r,a),i?e:null;case"height":return i=oe(t,e.size,2,r,a),i?e:null;case"depth":return i=oe(t,e.size,1,r,a),i?e:null;case"width-and-depth":return i=oe(t,e.size,0,r,a),i&&oe(t,e.size,1,r,a),i?e:null;case null:case void 0:case"all":return i=oe(t,e.size,0,r,a),i=i&&oe(t,e.size,1,r,a),i=i&&oe(t,e.size,2,r,a),i?e:null;default:return w(a,`Could not convert size info: unknown axis "${t.axis}""`),null}}function Wi(t,e,r){for(let i=0;i<3;++i){let n=e.unitInMeters;t.type[i]===F.DefinedSize&&(n*=e.modelSize[i],t.type[i]=F.DefinedScale),t.minSize[i]=t.minSize[i]/n,t.maxSize[i]=t.maxSize[i]/n,t.offset[i]=t.offset[i]/n,t.factor[i]=t.factor[i]/n}let a;if(t.type[0]!==F.Undefined)a=0;else if(t.type[1]!==F.Undefined)a=1;else{if(t.type[2]===F.Undefined)return w(r,"No size axis contains a valid size or scale"),!1;a=2}for(let i=0;i<3;++i)t.type[i]===F.Undefined&&(t.minSize[i]=t.minSize[a],t.maxSize[i]=t.maxSize[a],t.offset[i]=t.offset[a],t.factor[i]=t.factor[a],t.type[i]=t.type[a]);return!0}function Zt(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function ki(t,e,r){if(t.normalizationField)return w(r,"Could not convert color info: unsupported property"),null;if(at(t.field)){if(!t.stops)return w(r,"Could not convert color info: missing stops or colors"),null;{if(t.stops.length>8)return w(r,"Could not convert color info: too many color stops"),null;e.color=new Hi(t.field);const a=t.stops;for(let i=0;i<8;++i){const n=a[Math.min(i,a.length-1)];e.color.values[i]=n.value,Zt(e.color.colors,i,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return w(r,"Could not convert color info: no field and no colors/stops"),null;{const a=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)e.color.values[i]=1/0,Zt(e.color.colors,i,a)}}return e}function qi(t,e,r){if(t.normalizationField)return w(r,"Could not convert opacity info: unsupported property"),null;if(at(t.field)){if(!t.stops)return w(r,"Could not convert opacity info: missing stops or opacities"),null;{if(t.stops.length>8)return w(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity=new zi(t.field);const a=t.stops;for(let i=0;i<8;++i){const n=a[Math.min(i,a.length-1)];e.opacity.values[i]=n.value,e.opacity.opacityValues[i]=n.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return w(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const a=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)e.opacity.values[i]=1/0,e.opacity.opacityValues[i]=a}}return e}function ct(t,e,r){const a=r===2&&t.rotationType==="arithmetic";e.offset[r]=a?90:0,e.factor[r]=a?-1:1,e.type[r]=1}function Xi(t,e,r){if(!at(t.field))return w(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return w(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return ct(t,e.rotation,0),e;case"roll":return ct(t,e.rotation,1),e;case null:case void 0:case"heading":return ct(t,e.rotation,2),e;default:return w(r,`Could not convert rotation info: unknown axis "${t.axis}""`),null}}let is=class{constructor(e,r=[1,1,1],a=[1,1,1],i=1,n=[0,0,0],o=[1,1,1],s=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=a,this.unitInMeters=i,this.anchor=n,this.scale=o,this.rotation=s}};function Hr(t,e,r){if(!t)return null;const a=t.reduce((i,n)=>{if(!i)return i;if(n.valueExpression)return w(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(n.type){case"size":return e.supports.size?Vi(n,i,e,r):i;case"color":return e.supports.color?ki(n,i,r):i;case"opacity":return e.supports.opacity?qi(n,i,r):null;case"rotation":return e.supports.rotation?Xi(n,i,r):i;default:return null}},new Bi);return!(t.length>0&&a)||a.size||a.color||a.opacity||a.rotation?a!=null&&a.size&&!Wi(a.size,e,r)?null:a:null}class ji{constructor(e,r,a){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=a}}function os(t,e){if(!t||Ni.TESTS_DISABLE_FAST_UPDATES)return null;const r=Hr(t.visualVariables,e);return r?new ji(r,Br(r,e),!!r.size):null}function ss(t,e,r){if(!e||!t)return!1;const a=t.visualVariables,i=Hr(e.visualVariables,r);return!!i&&!!(Ve(a.size,i.size,"size")&&Ve(a.color,i.color,"color")&&Ve(a.rotation,i.rotation,"rotation")&&Ve(a.opacity,i.opacity,"opacity"))&&(t.visualVariables=i,t.materialParameters=Br(i,r),t.requiresShaderTransformation=!!i.size,!0)}function Ve(t,e,r){if(!!t!=!!e||t&&t.field!==(e==null?void 0:e.field))return!1;if(t&&r==="rotation"){const a=t,i=e;for(let n=0;n<3;n++)if(a.type[n]!==i.type[n]||a.offset[n]!==i.offset[n]||a.factor[n]!==i.factor[n])return!1}return!0}class zr extends we{constructor(e){super(),this.vvSize=(e==null?void 0:e.size)??null,this.vvColor=(e==null?void 0:e.color)??null,this.vvOpacity=(e==null?void 0:e.opacity)??null}}function Br(t,e){const r=new zr(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,pa(He),Gi(e.rotation[2],e.rotation[0],e.rotation[1],He),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||be(),ga(r.vvSymbolRotationMatrix,He)),r}function ls(t,e,r){if(!t.vvSize)return r;Ea(se,r);const a=t.vvSymbolRotationMatrix;Sa(He,a[0],a[1],a[2],0,a[3],a[4],a[5],0,a[6],a[7],a[8],0,0,0,0,1),xa(se,se,He);for(let i=0;i<3;++i){const n=t.vvSize.offset[i]+e[0]*t.vvSize.factor[i];Jt[i]=Ct(n,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return Aa(se,se,Jt),Qe(se,se,t.vvSymbolAnchor),se}function cs(t,e,r){if(!e.vvSize)return re(t,1,1,1),t;for(let a=0;a<3;++a){const i=e.vvSize.offset[a]+r[0]*e.vvSize.factor[a];t[a]=Ct(i,e.vvSize.minSize[a],e.vvSize.maxSize[a])}return t}function ds(t,e){const r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}const se=ye(),Jt=$(),He=ye();let us=class extends zr{constructor(){super(...arguments),this.renderOccluded=Ma.Occlude,this.isDecoration=!1}};const dt=8;function ms(t,e){const{vertex:r,attributes:a}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&a.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new D("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new D("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new D("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new D("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new rt("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new D("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(l`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(l`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?l`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(l`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",dt),r.uniforms.add(new Oi("vvColorValues",i=>i.vvColor.values,dt),new Fi("vvColorColors",i=>i.vvColor.colors,dt)),r.code.add(l`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?l`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(l`vec4 vvColor() { return vec4(1.0); }`)}let Ki=class{constructor(e,r){this._cache=e(r,(a,i)=>this._remove(a,i))}hitrate(){return this._cache.hitRate}destroy(){this._cache.destroy()}clear(){this._cache.clear()}pop(e){const r=this._cache.peek(e);if(!r)return;const a=r.pop();if(r.length>0){const i=r.reduce((n,o)=>n+o.usedMemory,0);this._cache.updateSize(e,r,i)}else this._cache.pop(e);return a}put(e,r,a=Ra){const i=this._cache.peek(e);if(!i)return void this._cache.put(e,[r],r.usedMemory,a);i.push(r);const n=i.reduce((o,s)=>o+s.usedMemory,0);this._cache.updateSize(e,i,n)}_remove(e,r){var a;switch(r){case Bt.ALL:return e.forEach(i=>i.dispose()),0;case Bt.SOME:return(a=e.shift())==null||a.dispose(),e.reduce((i,n)=>i+n.usedMemory,0)}}},ut=class{constructor(e,r){this._last=new gt,this._incarnation=0,this._cache=new Ki(e,r)}destroy(){var e;(e=this._last)==null||e.forAll(r=>r.dispose()),this._last=null,this._cache.destroy()}set interactive(e){var r;e&&!this._last?this._last=new gt:e||((r=this._last)==null||r.forAll(a=>a.dispose()),this._last=null)}clean(){var e;(e=this._last)==null||e.filterInPlace(r=>!(r.incarnation<this._incarnation)||(this._cache.put(r.key,r),!1))}frame(){++this._incarnation}pop(e){if(this._last){const r=this._last.find(a=>a.key===e);if(r)return this._last.removeUnordered(r),r}return this._cache.pop(e)}put(e){e.incarnation=this._incarnation,this._last?this._last.push(e):this._cache.put(e.key,e)}get usedMemory(){var e;return((e=this._last)==null?void 0:e.reduce((r,a)=>r+a.usedMemory,0))??0}},gs=class{constructor(e){this.rctx=e,this._acquired=new Set,this._cache=new ut(e.newCache,"FBOCache"),this._depthCache=new ut(e.newCache,"DepthAttachmentCache"),this._colorCache=new ut(e.newCache,"ColorAttachmentCache")}destroy(){this._cache.destroy(),this._depthCache.destroy(),this._colorCache.destroy()}clean(){this._cache.clean(),this._colorCache.clean(),this._depthCache.clean()}frame(){this._cache.frame(),this._colorCache.frame(),this._depthCache.frame()}get usedMemory(){return Array.from(this._acquired.values()).reduce((e,r)=>{var a;return e+("colorTexture"in r?((a=r.colorTexture)==null?void 0:a.gpuMemoryUsage)??0:r.usedMemory)},this._cache.usedMemory+this._colorCache.usedMemory+this._depthCache.usedMemory)}set interactive(e){this._cache.interactive=this._colorCache.interactive=this._depthCache.interactive=e}acquire(e,r,a){const i=ht(e,r,a),n=this._cache.pop(i)||new Yi(i,new Fa(this.rctx,{...tr[e],width:r,height:a}),o=>(n.releaseDepth(),n.depth=this._acquireDepth(o,n.fbo.width,n.fbo.height),n.fbo.attachDepthStencil(n.depth.attachment),n),(o,s)=>{const c=this._acquireColor(o,r,a);return n.colors??(n.colors=new Map),n.colors.set(s,c),n.fbo.attachColorTexture(c.attachment,s),n});return n.release=()=>{this._acquired.delete(n),n.releaseDepth(),this._cache.put(n),n.release=()=>console.log(`Double FBO release in ${new Error().stack}`)},this.rctx.unbindTexture(n.fbo.colorTexture),this._trackHandle(n)}acquireDepth(e,r,a){return this._acquireDepth(e,r,a)}_acquireDepth(e,r,a){const i=ht(e,r,a),n=this._depthCache.pop(i);if(n)return this._trackHandle(n);const o=e===pe.DEPTH_STENCIL_TEXTURE?new er(i,new ge(this.rctx,{...rr[e],width:r,height:a}),()=>{this._acquired.delete(o),this._depthCache.put(o)}):new er(i,new Oa(this.rctx,{...rr[e],width:r,height:a}),()=>{this._acquired.delete(o),this._depthCache.put(o)});return this._trackHandle(o)}_acquireColor(e,r,a){const i=ht(e,r,a),n=this._colorCache.pop(i);if(n)return this._trackHandle(n);const o=new Qi(i,new ge(this.rctx,{...tr[e],width:r,height:a}),()=>{this._acquired.delete(o),this._colorCache.put(o)});return this._trackHandle(o)}_trackHandle(e){return this._acquired.add(e),e}};class Yi{constructor(e,r,a,i){this.key=e,this.fbo=r,this.acquireDepth=a,this.acquireColor=i,this.release=()=>{},this.incarnation=0}dispose(){this.fbo.dispose()}releaseDepth(){this.fbo.detachDepthStencilTexture(),this.fbo.detachDepthStencilBuffer(),this.depth=Ut(this.depth)}detachDepth(){const e=this.depth;return this.depth=void 0,this.fbo.detachDepthStencilTexture(),this.fbo.detachDepthStencilBuffer(),e}attachDepth(e){return this.releaseDepth(),e&&(this.fbo.attachDepthStencil(e.attachment),this.depth=e),this}releaseColor(e){var a,i;this.fbo.detachColorTexture(e);const r=(a=this.colors)==null?void 0:a.get(e);(i=this.colors)==null||i.delete(e),Ut(r)}get colorTexture(){var e;return(e=this.fbo)==null?void 0:e.colorTexture}getColorTexture(e=Ia.COLOR_ATTACHMENT0){var r;return(r=this.fbo)==null?void 0:r.getColorTexture(e)}get usedMemory(){return this.fbo.gpuMemoryUsage}}class Ur{constructor(e,r,a){this.key=e,this.attachment=r,this.release=a,this.incarnation=0}dispose(){this.attachment.dispose()}get usedMemory(){return this.attachment.gpuMemoryUsage}}let er=class extends Ur{};class Qi extends Ur{constructor(e,r,a){super(e,r,a),this.attachment=r,this.release=a}}function ht(t,e,r){return`${t}x${e}x${r}`}var J;(function(t){t[t.RED=0]="RED",t[t.RG=1]="RG",t[t.RGBA4=2]="RGBA4",t[t.RGBA=3]="RGBA",t[t.RGBA_MIPMAP=4]="RGBA_MIPMAP",t[t.R16F=5]="R16F",t[t.RGBA16F=6]="RGBA16F"})(J||(J={}));const ke=new ie;ke.pixelFormat=j.RED,ke.internalFormat=ze.R8,ke.wrapMode=ae.CLAMP_TO_EDGE;const qe=new ie;qe.pixelFormat=j.RG,qe.internalFormat=ze.RG8,qe.wrapMode=ae.CLAMP_TO_EDGE;const Xe=new ie;Xe.internalFormat=ze.RGBA4,Xe.dataType=tt.UNSIGNED_SHORT_4_4_4_4,Xe.wrapMode=ae.CLAMP_TO_EDGE;const Gr=new ie;Gr.wrapMode=ae.CLAMP_TO_EDGE;const De=new ie;De.wrapMode=ae.CLAMP_TO_EDGE,De.samplingMode=K.LINEAR_MIPMAP_LINEAR,De.hasMipmap=!0,De.maxAnisotropy=8;const Me=new ie;Me.pixelFormat=j.RED,Me.dataType=tt.HALF_FLOAT,Me.internalFormat=ze.R16F,Me.samplingMode=K.NEAREST;const je=new ie;je.dataType=tt.HALF_FLOAT,je.internalFormat=ze.RGBA16F,je.samplingMode=K.NEAREST;const tr={[J.RED]:ke,[J.RG]:qe,[J.RGBA4]:Xe,[J.RGBA]:Gr,[J.RGBA_MIPMAP]:De,[J.R16F]:Me,[J.RGBA16F]:je};var pe;(function(t){t[t.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",t[t.DEPTH_STENCIL_BUFFER=1]="DEPTH_STENCIL_BUFFER",t[t.DEPTH24_BUFFER=2]="DEPTH24_BUFFER",t[t.DEPTH16_BUFFER=3]="DEPTH16_BUFFER"})(pe||(pe={}));const Fe=new ie;Fe.pixelFormat=j.DEPTH_STENCIL,Fe.dataType=tt.UNSIGNED_INT_24_8,Fe.samplingMode=K.NEAREST,Fe.wrapMode=ae.CLAMP_TO_EDGE;const rr={[pe.DEPTH_STENCIL_TEXTURE]:Fe,[pe.DEPTH_STENCIL_BUFFER]:new ot(nt.DEPTH24_STENCIL8,4),[pe.DEPTH24_BUFFER]:new ot(nt.DEPTH_COMPONENT24,4),[pe.DEPTH16_BUFFER]:new ot(nt.DEPTH_COMPONENT16,4)},Zi={required:[]},Ts={required:[L.Depth]},Es={required:[L.CompositeColor]},Ss={required:[L.Highlight]},xs={required:[L.Depth,L.Normal]};let it=class extends gr{consumes(){return Zi}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}},Rs=class extends it{},ys=class extends it{},$s=class extends it{},Is=class extends it{};function Ds(t,e=!0){t.attributes.add(p.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(l`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?l`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Ji(t){t.include(Pr),t.code.add(l`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTex, 0)));
return linearDepthFromRGBA(texelFetch(depthTex, iuv, 0), nearFar);
}`)}const Vr=cr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Wr=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const a=this._includedModules.get(e);if(a!==r){Vr.error("Trying to include shader module multiple times with different sets of options.");const i=new Set;for(const n of Object.keys(a))a[n]!==e[n]&&i.add(n);for(const n of Object.keys(e))a[n]!==e[n]&&i.add(n);i.forEach(n=>console.error(`  ${n}: current ${a[n]} new ${e[n]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},Fs=class extends Wr{constructor(){super(...arguments),this.vertex=new ar,this.fragment=new ar,this.attributes=new rn,this.varyings=new an,this.extensions=new Et,this.constants=new kr,this.outputs=new xt}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),a=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n=e==="vertex"?this.vertex:this.fragment,o=n.uniforms.generateSource(),s=n.code.generateSource(),c=e==="vertex"?on:nn,u=this.constants.generateSource().concat(n.constants.generateSource()),d=this.outputs.generateSource(e);return`#version 300 es
${r.join(`
`)}

${c}

${u.join(`
`)}

${o.join(`
`)}

${a.join(`
`)}

${i.join(`
`)}

${d.join(`
`)}

${s.join(`
`)}`}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[f.Pass];o&&r.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[f.Pass];o&&r.set(n.name,o)});const a=Array.from(r.values()),i=a.length;return(n,o)=>{for(let s=0;s<i;++s)a[s](e,n,o)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[f.Draw];o&&r.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[f.Draw];o&&r.set(n.name,o)});const a=Array.from(r.values()),i=a.length;return(n,o,s)=>{for(let c=0;c<i;++c)a[c](e,n,o,s)}}},en=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new yt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Vr.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},tn=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},ar=class extends Wr{constructor(){super(...arguments),this.uniforms=new en,this.code=new tn,this.constants=new kr}get builder(){return this}},rn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},an=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&C(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((a,i)=>r.push(e==="vertex"?`out ${a} ${i};`:`in ${a} ${i};`)),r}},Et=class St{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?St.ALLOWLIST_VERTEX:St.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(a=>r.includes(a)).map(a=>`#extension ${a} : enable`)}};Et.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Et.ALLOWLIST_VERTEX=[];let xt=class At{constructor(){this._entries=new Map}add(e,r,a=0){const i=this._entries.get(a);i?C(i.name===e&&i.type===r,`Fragment shader output location ${a} occupied`):this._entries.set(a,{name:e,type:r})}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:At.DEFAULT_NAME,type:At.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((a,i)=>r.push(`layout(location = ${i}) out ${a.type} ${a.name};`)),r}};xt.DEFAULT_TYPE="vec4",xt.DEFAULT_NAME="fragColor";let kr=class y{constructor(){this._entries=new Set}add(e,r,a){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=y._numberToFloatStr(a);break;case"int":i=y._numberToIntStr(a);break;case"bool":i=a.toString();break;case"vec2":i=`vec2(${y._numberToFloatStr(a[0])},                            ${y._numberToFloatStr(a[1])})`;break;case"vec3":i=`vec3(${y._numberToFloatStr(a[0])},                            ${y._numberToFloatStr(a[1])},                            ${y._numberToFloatStr(a[2])})`;break;case"vec4":i=`vec4(${y._numberToFloatStr(a[0])},                            ${y._numberToFloatStr(a[1])},                            ${y._numberToFloatStr(a[2])},                            ${y._numberToFloatStr(a[3])})`;break;case"ivec2":i=`ivec2(${y._numberToIntStr(a[0])},                             ${y._numberToIntStr(a[1])})`;break;case"ivec3":i=`ivec3(${y._numberToIntStr(a[0])},                             ${y._numberToIntStr(a[1])},                             ${y._numberToIntStr(a[2])})`;break;case"ivec4":i=`ivec4(${y._numberToIntStr(a[0])},                             ${y._numberToIntStr(a[1])},                             ${y._numberToIntStr(a[2])},                             ${y._numberToIntStr(a[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(a,n=>y._numberToFloatStr(n)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const nn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,on=`precision highp float;
precision highp sampler2D;`;function Us(t){t.fragment.uniforms.add(new G("projInfo",(e,r)=>sn(r))),t.fragment.uniforms.add(new Mt("zScale",(e,r)=>ln(r))),t.fragment.code.add(l`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function sn(t){const e=t.camera.projectionMatrix;return e[11]===0?U(ir,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):U(ir,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const ir=wt();function ln(t){return t.camera.projectionMatrix[11]===0?Gt(nr,0,1):Gt(nr,1,0)}const nr=ba();function Gs(t,e){const r=t.fragment,a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(r.uniforms.add(new D("lightingAmbientSH0",(i,n)=>re(or,n.lighting.sh.r[0],n.lighting.sh.g[0],n.lighting.sh.b[0]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(r.uniforms.add(new G("lightingAmbientSH_R",(i,n)=>U(Z,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3])),new G("lightingAmbientSH_G",(i,n)=>U(Z,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3])),new G("lightingAmbientSH_B",(i,n)=>U(Z,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===2&&(r.uniforms.add(new D("lightingAmbientSH0",(i,n)=>re(or,n.lighting.sh.r[0],n.lighting.sh.g[0],n.lighting.sh.b[0])),new G("lightingAmbientSH_R1",(i,n)=>U(Z,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4])),new G("lightingAmbientSH_G1",(i,n)=>U(Z,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4])),new G("lightingAmbientSH_B1",(i,n)=>U(Z,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4])),new G("lightingAmbientSH_R2",(i,n)=>U(Z,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8])),new G("lightingAmbientSH_G2",(i,n)=>U(Z,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8])),new G("lightingAmbientSH_B2",(i,n)=>U(Z,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8]))),r.code.add(l`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==P.Normal&&e.pbrMode!==P.Schematic||r.code.add(l`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const or=$(),Z=wt();function cn(t){t.uniforms.add(new D("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function dn(t){t.uniforms.add(new D("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function Vs(t){cn(t.fragment),dn(t.fragment),t.fragment.code.add(l`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function un(t){const e=t.fragment.code;e.add(l`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(l`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(l`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function qr(t){t.vertex.code.add(l`const float PI = 3.141592653589793;`),t.fragment.code.add(l`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Ws(t,e){const r=t.fragment.code;t.include(qr),e.pbrMode!==P.Normal&&e.pbrMode!==P.Schematic&&e.pbrMode!==P.Terrain&&e.pbrMode!==P.TerrainWithWater||(r.add(l`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(l`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==P.Normal&&e.pbrMode!==P.Schematic||(t.include(un),r.add(l`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(l`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(l`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(l`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ks(t,e){const r=t.fragment.code;t.include(qr),r.add(l`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(l`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(l`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(l`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(l`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}class qs extends O{constructor(e,r){super(e,"bool",f.Pass,(a,i,n)=>a.setUniform1b(e,r(i,n)))}}class hn{constructor(e=$()){this.intensity=e}}class mn{constructor(e=$(),r=It(.57735,.57735,.57735)){this.intensity=e,this.direction=r}}let Rt=class{constructor(e=$(),r=It(.57735,.57735,.57735),a=!0,i=1,n=1){this.intensity=e,this.direction=r,this.castShadows=a,this.specularStrength=i,this.environmentStrength=n}};class Xr{constructor(){this.r=[0],this.g=[0],this.b=[0]}}function fn(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]*e[a];return r}function mt(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]*e;return r}function Re(t,e,r){(r=r||t).length=t.length;for(let a=0;a<t.length;a++)r[a]=t[a]+e[a];return r}function jr(t){return(t+1)*(t+1)}function pn(t){return Ct(Math.floor(Math.sqrt(t)-1),0,2)}function Kr(t,e,r){const a=t[0],i=t[1],n=t[2],o=r||[];return o.length=jr(e),e>=0&&(o[0]=.28209479177),e>=1&&(o[1]=.4886025119*a,o[2]=.4886025119*n,o[3]=.4886025119*i),e>=2&&(o[4]=1.09254843059*a*i,o[5]=1.09254843059*i*n,o[6]=.31539156525*(3*n*n-1),o[7]=1.09254843059*a*n,o[8]=.54627421529*(a*a-i*i)),o}function gn(t,e){const r=jr(t),a=e||{r:[],g:[],b:[]};a.r.length=a.g.length=a.b.length=r;for(let i=0;i<r;i++)a.r[i]=a.g[i]=a.b[i]=0;return a}function vn(t,e){const r=pn(e.r.length);for(const a of t)ya(bt,a.direction),Kr(bt,r,ee),fn(ee,Ke),mt(ee,a.intensity[0],Se),Re(e.r,Se),mt(ee,a.intensity[1],Se),Re(e.g,Se),mt(ee,a.intensity[2],Se),Re(e.b,Se);return e}function _n(t,e){Kr(bt,0,ee);for(const r of t)e.r[0]+=ee[0]*Ke[0]*r.intensity[0]*4*Math.PI,e.g[0]+=ee[0]*Ke[0]*r.intensity[1]*4*Math.PI,e.b[0]+=ee[0]*Ke[0]*r.intensity[2]*4*Math.PI;return e}function Tn(t,e,r,a){gn(e,a),re(r.intensity,0,0,0);let i=!1;const n=En,o=Sn,s=xn;n.length=0,o.length=0,s.length=0;for(const c of t)c instanceof Rt&&!i?(me(r.direction,c.direction),me(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,i=!0):c instanceof Rt||c instanceof mn?n.push(c):c instanceof hn?o.push(c):c instanceof Xr&&s.push(c);vn(n,a),_n(o,a);for(const c of s)Re(a.r,c.r),Re(a.g,c.g),Re(a.b,c.b)}const En=[],Sn=[],xn=[],ee=[0],Se=[0],bt=$(),Ke=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class sr{constructor(){this.color=$(),this.intensity=1}}let An=class{constructor(){this.direction=$(),this.ambient=new sr,this.diffuse=new sr}};const Rn=.4;class Ks{constructor(){this._shOrder=2,this._legacy=new An,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Xr,this._mainLight=new Rt($(),It(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Tn(e,this._shOrder,this._mainLight,this._sphericalHarmonics),me(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,Vt(this._legacy.diffuse.color,this._mainLight.intensity,r),me(We,this._legacy.diffuse.color),Vt(We,We,Rn*this.globalFactor),mr(this._legacy.ambient.color,this._legacy.ambient.color,We)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),me(this._mainLight.direction,e.mainLight.direction),me(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,a){if(wa(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,a),this._mainLight.environmentStrength=he(e.mainLight.environmentStrength,r.mainLight.environmentStrength,a),this._mainLight.specularStrength=he(e.mainLight.specularStrength,r.mainLight.specularStrength,a),me(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=he(e.globalFactor,r.globalFactor,a),this.noonFactor=he(e.noonFactor,r.noonFactor,a),e.sh.r.length===r.sh.r.length)for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=he(e.sh.r[i],r.sh.r[i],a),this._sphericalHarmonics.g[i]=he(e.sh.g[i],r.sh.g[i],a),this._sphericalHarmonics.b[i]=he(e.sh.b[i],r.sh.b[i],a);else for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=r.sh.r[i],this._sphericalHarmonics.g[i]=r.sh.g[i],this._sphericalHarmonics.b[i]=r.sh.b[i]}}const We=$();function Ys(t,e){if(!e.multipassEnabled)return;t.fragment.include(Ji),t.fragment.uniforms.add(new xe("terrainDepthTexture",(a,i)=>{var n;return(n=i.multipassTerrain.linearDepth)==null?void 0:n.colorTexture})),t.fragment.uniforms.add(new Mt("nearFar",(a,i)=>i.camera.nearFar));const r=e.occlusionPass;t.fragment.code.add(l`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?l`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:l`
          if(fragmentDepth ${e.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}let Qs=class{constructor(){this.cullAboveGround=!1}};class bn extends O{constructor(e,r,a){super(e,"mat4",f.Draw,(i,n,o,s)=>i.setUniformMatrix4fv(e,r(n,o,s)),a)}}let yn=class extends O{constructor(e,r,a){super(e,"mat4",f.Pass,(i,n,o)=>i.setUniformMatrix4fv(e,r(n,o)),a)}};class wn extends we{constructor(){super(...arguments),this.origin=$()}}let el=class extends wn{};class $n extends we{constructor(){super(...arguments),this.modelTransformation=_t}}class rl extends $n{constructor(){super(...arguments),this.origin=$()}}function al(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new yn("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),Yr(t))}function il(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new bn("shadowMapMatrix",(r,a)=>a.shadowMap.getShadowMapMatrices(r.origin),4)),Yr(t))}function Yr(t){const e=t.fragment;e.include(Nr),e.uniforms.add(new xe("shadowMapTex",(r,a)=>a.shadowMap.depthTexture),new Li("numCascades",(r,a)=>a.shadowMap.numCascades),new G("cascadeDistances",(r,a)=>a.shadowMap.cascadeDistances)),e.code.add(l`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMapTex, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMapTex);
}`)}function nl(t){t.code.add(l`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}class ft extends Tt{}g([Ne({constValue:!0})],ft.prototype,"hasSliceHighlight",void 0),g([Ne({constValue:!1})],ft.prototype,"hasSliceInVertexProgram",void 0),g([Ne({constValue:f.Pass})],ft.prototype,"pbrTextureBindType",void 0);export{cs as $,kt as A,Ii as B,fo as C,fi as D,Ei as E,Ji as F,Us as G,Mt as H,Ae as I,Ds as J,ys as K,Ts as L,Mo as M,Gn as N,Ci as O,No as P,W as Q,bi as R,Cr as S,Pr as T,Ko as U,Go as V,qs as W,ms as X,Xo as Y,Di as Z,Mi as _,Ni as a,Fi as a$,pi as a0,vi as a1,br as a2,Jn as a3,Ti as a4,jo as a5,Xt as a6,us as a7,vr as a8,Hn as a9,al as aA,il as aB,Qn as aC,lo as aD,uo as aE,Ks as aF,Qs as aG,zn as aH,ks as aI,Oi as aJ,xo as aK,Io as aL,Ro as aM,Co as aN,So as aO,Un as aP,pe as aQ,Ki as aR,hn as aS,ds as aT,os as aU,ss as aV,is as aW,Is as aX,ls as aY,Bn as aZ,dt as a_,B as aa,oi as ab,Li as ac,O as ad,f as ae,ui as af,di as ag,so as ah,z as ai,mi as aj,lt as ak,xs as al,Zi as am,J as an,Rn as ao,P as ap,Ws as aq,Gs as ar,qr as as,cn as at,dn as au,Vs as av,rt as aw,xi as ax,Wo as ay,Do as az,Po as b,wr as b0,Rt as b1,mn as b2,rl as b3,bo as b4,$r as b5,hi as b6,Oo as b7,yo as b8,$s as b9,Es as ba,Ss as bb,el as bc,Ai as bd,Ri as be,yr as bf,gs as bg,Ys as c,Uo as d,$i as e,L as f,mo as g,nl as h,po as i,To as j,Ao as k,$o as l,wo as m,ft as n,Fs as o,eo as p,Zn as q,vo as r,xe as s,Pn as t,Si as u,Rs as v,Kn as w,D as x,Bo as y,G as z};
