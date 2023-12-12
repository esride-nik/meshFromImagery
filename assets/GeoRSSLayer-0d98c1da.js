import{dk as y,d_ as p,a0 as d,a1 as u,dl as c,a2 as h,b as m,q as S,v,cp as g,m as f,a5 as o,a6 as s,a7 as b,M as C,d$ as G,e0 as $,a8 as _,a9 as k,e1 as n,dT as w,e2 as x,dS as P,dU as R,aa as j}from"./index-b516d057.js";const F=["atom","xml"],M={base:n,key:"type",typeMap:{"simple-line":w},errorContext:"symbol"},E={base:n,key:"type",typeMap:{"picture-marker":x,"simple-marker":P},errorContext:"symbol"},L={base:n,key:"type",typeMap:{"simple-fill":R},errorContext:"symbol"};let t=class extends y(p(d(u(c(h(j)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}readFeatureCollections(e,r){return r.featureCollection.layers.forEach(i=>{var l;const a=i.layerDefinition.drawingInfo.renderer.symbol;a&&a.type==="esriSFS"&&((l=a.outline)!=null&&l.style.includes("esriSFS"))&&(a.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?m(this.url,F)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(S).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){const r=this.spatialReference,{data:i}=await v(f.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:g(r)?void 0:r.wkid??JSON.stringify(r)},signal:e});return i}_hasGeometry(e){var r;return((r=this.featureCollections)==null?void 0:r.some(i=>{var a,l;return((a=i.featureSet)==null?void 0:a.geometryType)===e&&((l=i.featureSet.features)==null?void 0:l.length)>0}))??!1}};o([s()],t.prototype,"description",void 0),o([s()],t.prototype,"featureCollections",void 0),o([b("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),o([s({type:C,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),o([s(G)],t.prototype,"id",void 0),o([s($)],t.prototype,"legendEnabled",void 0),o([s({types:M,json:{write:!0}})],t.prototype,"lineSymbol",void 0),o([s({type:["show","hide"]})],t.prototype,"listMode",void 0),o([s({types:E,json:{write:!0}})],t.prototype,"pointSymbol",void 0),o([s({types:L,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),o([s({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),o([s(_)],t.prototype,"url",void 0),o([s({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),o([s({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=o([k("esri.layers.GeoRSSLayer")],t);const D=t;export{D as default};