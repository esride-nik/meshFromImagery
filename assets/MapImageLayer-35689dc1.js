import{dk as $,ev as w,dl as I,$ as T,a0 as E,a1 as M,a2 as O,d_ as R,ew as F,q as L,ea as v,dn as g,ex as P,v as f,M as j,dX as q,s as b,al as J,a5 as s,a6 as p,ey as x,a7 as N,ad as U,a8 as _,a9 as A,aa as k,dE as V}from"./index-b516d057.js";import{t as z}from"./loadAll-5e767cfa.js";import{i as Z}from"./scaleUtils-72744379.js";import{i as B}from"./APIKeyMixin-bfb00271.js";import{E as C,f as D,X as G}from"./SublayersOwner-0f33bba5.js";import{m as H}from"./ExportImageParameters-eb8f9ddb.js";import{t as K}from"./imageBitmapUtils-064ef341.js";import{e as S}from"./sublayerUtils-4fbad2bd.js";import{e as W}from"./versionUtils-5892620e.js";import"./Version-1f969b2a.js";import"./CollectionFlattener-193451da.js";import"./jsonUtils-52514725.js";import"./DictionaryLoader-e327eff9.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./QueryTask-c8bdd708.js";import"./Query-071039d7.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./executeForIds-dd65ee28.js";import"./query-351887b5.js";import"./pbfQueryUtils-b37a842c.js";import"./pbf-2651fe50.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d7a48772.js";import"./executeQueryJSON-eec0ecca.js";import"./executeQueryPBF-ba35ba83.js";import"./featureConversionUtils-09cf00ff.js";import"./FeatureType-f30c4b8b.js";import"./FeatureTemplate-d1d1c7be.js";import"./LabelClass-c3c309a8.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";import"./labelingInfo-aae625ac.js";import"./LayerFloorInfo-4234db4d.js";import"./serviceCapabilitiesUtils-42d4d20c.js";import"./AttachmentQuery-bede5a71.js";import"./floorFilterUtils-080a7cd2.js";let i=class extends $(w(I(C(D(T(E(M(O(R(B(F(k)))))))))))){constructor(...e){super(...e),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,a){return typeof e=="string"?{url:e,...a}:e}load(e){const a=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(L).then(()=>this._fetchService(a))),Promise.resolve(this)}readImageFormat(e,a){const l=a.supportedImageFormatTypes;return l&&l.includes("PNG32")?"png32":"png24"}writeSublayers(e,a,l,t){var h;if(!this.loaded||!e)return;const o=e.slice().reverse().flatten(({sublayers:r})=>r&&r.toArray().reverse()).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)!=null&&h.supportsDynamicLayers)){const r=v(t.origin);if(r===g.PORTAL_ITEM){const d=this.createSublayersForOrigin("service").sublayers;n=S(o,d,g.SERVICE)}else if(r>g.PORTAL_ITEM){const d=this.createSublayersForOrigin("portal-item");n=S(o,d.sublayers,v(d.origin))}}const m=[],y={writeSublayerStructure:n,...t};let c=n;o.forEach(r=>{const d=r.write({},y);m.push(d),c=c||r.originOf("visible")==="user"}),m.some(r=>Object.keys(r).length>1)&&(a.layers=m),c&&(a.visibleLayers=o.filter(r=>r.visible).map(r=>r.id))}createExportImageParameters(e,a,l,t){const o=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new H({layer:this,floors:t==null?void 0:t.floors,scale:Z({extent:e,width:a})*o}),m=n.toJSON();n.destroy();const y=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},c=e==null?void 0:e.spatialReference,h=P(c);m.dpi*=o;const r={};if(t!=null&&t.timeExtent){const{start:d,end:u}=t.timeExtent.toJSON();r.time=d&&u&&d===u?""+d:`${d??"null"},${u??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(r.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:a+","+l,...m,...y,...r}}async fetchImage(e,a,l,t){const{data:o}=await this._fetchImage("image",e,a,l,t);return o}async fetchImageBitmap(e,a,l,t){const{data:o,url:n}=await this._fetchImage("blob",e,a,l,t);return K(o,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const a={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:l}=await f(this.url,a),{extent:t,fullExtent:o,timeExtent:n}=l,m=t||o;return{fullExtent:m&&j.fromJSON(m),timeExtent:n&&q.fromJSON({start:n[0],end:n[1]})}}loadAll(){return z(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return W(this,e)}async _fetchImage(e,a,l,t,o){var y,c,h;const n={responseType:e,signal:(o==null?void 0:o.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(a,l,t,o),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(((y=n.query)==null?void 0:y.dynamicLayers)!=null&&!((h=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&h.supportsDynamicLayers))throw new b("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:r}=await f(m,n);return{data:r,url:m}}catch(r){throw J(r)?r:new b("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:r})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:a,ssl:l}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});l&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=a,this.read(a,{origin:"service",url:this.parsedUrl})}};s([p(x("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),s([p({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),s([p()],i.prototype,"dpi",void 0),s([p()],i.prototype,"gdbVersion",void 0),s([p()],i.prototype,"imageFormat",void 0),s([N("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),s([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),s([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),s([p()],i.prototype,"imageTransparency",void 0),s([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),s([p({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([p({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),s([p(x("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),s([p()],i.prototype,"sourceJSON",void 0),s([p({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),s([U("sublayers",{layers:{type:[G]},visibleLayers:{type:[V]}})],i.prototype,"writeSublayers",null),s([p({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),s([p({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),s([p(_)],i.prototype,"url",void 0),i=s([A("esri.layers.MapImageLayer")],i);const ke=i;export{ke as default};
