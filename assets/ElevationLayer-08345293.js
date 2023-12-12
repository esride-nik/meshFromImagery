import{$ as m,a0 as g,a1 as w,a2 as T,a3 as f,s as S,q as b,v as p,a4 as _,_ as d,y as c,a5 as o,a6 as s,a7 as h,a8 as $,a9 as I,aa as O}from"./index-b516d057.js";import{v as E}from"./HeightModelInfo-b816d32b.js";import{p as j}from"./ArcGISCachedService-b7d75cf5.js";import{s as D,a as L}from"./LercDecoder-b49c0e9c.js";import"./TileInfoTilemapCache-c19bf120.js";import"./WorkerHandle-9433ab9a.js";let a=class extends j(m(g(w(T(O))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=D()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=f(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map(i=>i.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new S("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(b).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const l=(i=i||{signal:null}).signal!=null?i.signal:i.signal=new AbortController().signal,u={responseType:"array-buffer",signal:l},v={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>p(this.getTileUrl(e,r,t),u)).then(n=>this._lercDecoder.decode(n.data,v,l)).then(n=>new L(n))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=_({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${l?"?"+l:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery-4be4efe0.js"),["assets/ElevationQuery-4be4efe0.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/ElevationSamplerData-9f34f589.js"]);return c(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await d(()=>import("./ElevationQuery-4be4efe0.js"),["assets/ElevationQuery-4be4efe0.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/ElevationSamplerData-9f34f589.js"]);return c(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await p(this.parsedUrl.path,r);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[y]}};o([s({readOnly:!0})],a.prototype,"capabilities",void 0),o([h("service","capabilities",["capabilities"])],a.prototype,"readCapabilities",null),o([s({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([s({readOnly:!0,type:E})],a.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([s({type:["show","hide"]})],a.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),o([s()],a.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),o([s($)],a.prototype,"url",void 0),o([s()],a.prototype,"version",void 0),o([h("version",["currentVersion"])],a.prototype,"readVersion",null),a=o([I("esri.layers.ElevationLayer")],a);const y=Symbol("default-fetch-tile");a.prototype.fetchTile[y]=!0;const U=a;export{U as default};
