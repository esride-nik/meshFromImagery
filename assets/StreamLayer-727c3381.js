import{a5 as t,a6 as r,a9 as I,ae as E,dk as F,ev as P,dl as A,d_ as O,$ as k,a0 as D,a1 as C,a2 as N,ew as U,cg as L,ah as j,dm as V,s as d,q as G,jD as f,an as M,_ as v,cy as h,hQ as J,j8 as z,dp as c,v as q,cz as W,jE as Q,j9 as X,M as Y,jG as Z,e0 as B,dE as g,jS as H,jT as K,ja as ee,eo as te,a7 as w,X as ie,jI as re,a8 as se,aa as oe}from"./index-b516d057.js";import{o as ne,m as ae,u as pe}from"./jsonUtils-52514725.js";import{p as le}from"./FeatureEffectLayer-1948d1a0.js";import{c as de}from"./FeatureReductionLayer-443167bc.js";import{D as me}from"./featureLayerUtils-16361d1f.js";import{s as ce}from"./fieldProperties-8c831c84.js";import{C as ue}from"./LabelClass-c3c309a8.js";import{i as he}from"./labelingInfo-aae625ac.js";import{t as ye}from"./styleUtils-a3d96bf6.js";import{b as fe}from"./Query-071039d7.js";import"./DictionaryLoader-e327eff9.js";import"./Version-1f969b2a.js";import"./FieldsIndex-e8db657f.js";import"./UnknownTimeZone-a05df022.js";import"./HeatmapColorStop-3fff4333.js";import"./heatmapUtils-7f42325f.js";import"./FeatureEffect-c80bb16d.js";import"./FeatureFilter-55dd341e.js";import"./clusterUtils-50a66940.js";import"./MD5-715f37cd.js";import"./FeatureReductionSelection-d84c375a.js";import"./featureQueryAll-40af0622.js";import"./AttachmentQuery-bede5a71.js";import"./RelationshipQuery-2c9e4485.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./labelUtils-b29175f3.js";import"./defaults-4faa92e6.js";import"./defaultsJSON-59981e75.js";var y;let l=y=class extends E{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new y({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],l.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=y=t([I("esri.layers.support.PurgeOptions")],l);const $=l,b=ce();function S(e,s){return new d("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${s}`,{layer:e})}let i=class extends de(le(F(P(A(O(k(D(C(N(U(L(oe)))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new $,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=j.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=V(async(s,o,a)=>{const{save:n,saveAs:p}=await v(()=>import("./streamLayerUtils-ab4a5f59.js"),["assets/streamLayerUtils-ab4a5f59.js","assets/utils-2132f574.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/originUtils-cfe4feaf.js","assets/multiOriginJSONSupportUtils-c978f4c3.js","assets/jsonContext-08550f59.js","assets/saveAPIKeyUtils-b849c848.js"]);switch(s){case c.SAVE:return n(this,o);case c.SAVE_AS:return p(this,a,o)}})}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const s=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(G).then(()=>this._fetchService(s))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const s=this._normalizeFeatureReduction(e);this._set("featureReduction",s)}set renderer(e){f(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,s,o){var n;s=s.layerDefinition||s;const a=(n=s.drawingInfo)==null?void 0:n.renderer;if(a){const p=ne(a,s,o)||void 0;return p||M.getLogger(this).error("Failed to create renderer",{rendererDefinition:s.drawingInfo.renderer,layer:this,context:o}),p}return me(s,o)}async connect(e){const[{createConnection:s}]=await Promise.all([v(()=>import("./createConnection-c6387383.js"),["assets/createConnection-c6387383.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/query-351887b5.js","assets/pbfQueryUtils-b37a842c.js","assets/pbf-2651fe50.js","assets/OptimizedGeometry-196224d4.js","assets/OptimizedFeature-e90b69df.js","assets/OptimizedFeatureSet-1d1ac4b9.js","assets/queryZScale-d7a48772.js","assets/Query-071039d7.js","assets/FullTextSearch-12e0754c.js","assets/QuantizationParameters-f983cf8d.js"]),this.load()]),o=this.geometryType?h.toJSON(this.geometryType):null,{customParameters:a=null,definitionExpression:n=null,geometryDefinition:p=null,maxReconnectionAttempts:x=0,maxReconnectionInterval:R=20,spatialReference:T=this.spatialReference}=e||this.createConnectionParameters(),m=s(this.parsedUrl,this.spatialReference,T,o,{geometry:p,where:n},x,R,a??void 0),_=J([this.on("send-message-to-socket",u=>m.sendMessageToSocket(u)),this.on("send-message-to-client",u=>m.sendMessageToClient(u))]);return m.once("destroy",_.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return z(this,e)}createQuery(){const e=new fe;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,s){if(!this.fields)return null;let o=null;return this.fields.some(a=>(a.name===e&&(o=a.domain),!!o)),o}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(c.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(c.SAVE_AS,s,e)}write(e,s){const o=s==null?void 0:s.messages;return this.webSocketUrl?(o==null||o.push(S(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,s):(o==null||o.push(S(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var s,o,a;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await q(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((s=this.timeInfo)!=null&&s.trackIdField))throw new d("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(o=this.fields.find(p=>p.type==="oid"))==null?void 0:o.name;if(!n)throw new d("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new d("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new W({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new d("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(a=this.portalItem)==null?void 0:a.portal,url:this.parsedUrl}),f(this.renderer,this.fieldsIndex),Q(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ye(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:X})],i.prototype,"elevationInfo",void 0),t([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],i.prototype,"featureReduction",null),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:Y,json:{name:"layerDefinition.definitionGeometry",write:!0}})],i.prototype,"geometryDefinition",void 0),t([r({type:h.apiValues,json:{read:{reader:h.read}}})],i.prototype,"geometryType",void 0),t([r(Z)],i.prototype,"labelsVisible",void 0),t([r({type:[ue],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:he},write:!0}})],i.prototype,"labelingInfo",void 0),t([r(B)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],i.prototype,"listMode",void 0),t([r({type:g})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:g})],i.prototype,"maxReconnectionInterval",void 0),t([r(H)],i.prototype,"maxScale",void 0),t([r(K)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r({readOnly:!0})],i.prototype,"outFields",void 0),t([r(ee)],i.prototype,"popupEnabled",void 0),t([r({type:te,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),t([r({type:$})],i.prototype,"purgeOptions",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"refreshInterval",void 0),t([r({types:ae,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:pe,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([w("service","renderer",["drawingInfo.renderer","defaultSymbol"]),w("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r((()=>{const e=ie(re);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:j,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(se)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({json:{read:!1,write:!1}})],i.prototype,"useViewTime",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const We=i;export{We as default};
