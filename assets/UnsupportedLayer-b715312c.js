import{a1 as n,a2 as p,cf as l,a5 as r,a6 as a,a9 as d,aa as u,s as y}from"./index-b516d057.js";let t=class extends n(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unsupported layer type";s&&(i+=" "+s),o(new y("layer:unsupported-layer-type",i,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};r([a({readOnly:!0})],t.prototype,"resourceInfo",void 0),r([a({type:["show","hide"]})],t.prototype,"listMode",void 0),r([a({type:Boolean,readOnly:!1})],t.prototype,"persistenceEnabled",void 0),r([a({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=r([d("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};
