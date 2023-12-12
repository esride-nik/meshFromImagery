import{a5 as e,a6 as t,a9 as n,ae as a,dx as E,cl as M,dE as q,X as j,V as N,a7 as R,ad as A}from"./index-b516d057.js";let p=class extends a{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],p.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],p.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],p.prototype,"sublayerId",void 0),p=e([n("esri.layers.support.FacilityLayerInfo")],p);const B=p;let s=class extends a{constructor(i){super(i),this.facilityIdField=null,this.layerId=null,this.levelIdField=null,this.levelNumberField=null,this.longNameField=null,this.shortNameField=null,this.sublayerId=null,this.verticalOrderField=null}};e([t({type:String,json:{write:!0}})],s.prototype,"facilityIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelIdField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"levelNumberField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"longNameField",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"shortNameField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"sublayerId",void 0),e([t({type:String,json:{write:!0}})],s.prototype,"verticalOrderField",void 0),s=e([n("esri.layers.support.LevelLayerInfo")],s);const O=s;let y=class extends a{constructor(r){super(r),this.layerId=null,this.nameField=null,this.siteIdField=null,this.sublayerId=null}};e([t({type:String,json:{write:!0}})],y.prototype,"layerId",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"nameField",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"siteIdField",void 0),e([t({type:Number,json:{read:{source:"subLayerId"},write:{target:"subLayerId"},origins:{"web-scene":{read:!1,write:!1}}}})],y.prototype,"sublayerId",void 0),y=e([n("esri.layers.support.SiteLayerInfo")],y);const V=y;let c=class extends a{constructor(i){super(i),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};e([t({type:O,json:{write:!0}})],c.prototype,"levelLayer",void 0),e([t({type:B,json:{write:!0}})],c.prototype,"facilityLayer",void 0),e([t({type:V,json:{write:!0}})],c.prototype,"siteLayer",void 0),c=e([n("esri.support.MapFloorInfo")],c);const U=c,X={width:600,height:400},v=1.5;function W(r,i){i=i||X;let{width:o,height:d}=i;const x=o/d;return x<v?d=o/v:x>v&&(o=d*v),o>r.width&&(d*=r.width/o,o=r.width),d>r.height&&(o*=r.height/d,d=r.height),{width:Math.round(o),height:Math.round(d)}}function L(r){return{enabled:!!(r!=null&&r.length)}}var S;let h=S=class extends a{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new S({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],h.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],h.prototype,"name",void 0),e([E(M)],h.prototype,"type",void 0),h=S=e([n("esri.webdoc.applicationProperties.SearchLayerField")],h);const k=h;var I;let u=I=class extends a{constructor(r){super(r),this.field=null,this.id=null,this.subLayer=null}clone(){return new I(j({field:this.field,id:this.id,subLayer:this.subLayer}))}};e([t({type:k,json:{write:{isRequired:!0}}})],u.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],u.prototype,"id",void 0),e([t({type:q,json:{write:!0}})],u.prototype,"subLayer",void 0),u=I=e([n("esri.webdoc.applicationProperties.SearchLayer")],u);const z=u;var F;let w=F=class extends a{constructor(r){super(r),this.exactMatch=!1,this.name=null,this.type=null}clone(){return new F({exactMatch:this.exactMatch,type:this.type,name:this.name})}};e([t({type:Boolean,json:{write:!0}})],w.prototype,"exactMatch",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"name",void 0),e([E(M)],w.prototype,"type",void 0),w=F=e([n("esri.webdoc.applicationProperties.SearchTableField")],w);const C=w;var $;let b=$=class extends a{constructor(r){super(r),this.field=null,this.id=null}clone(){return new $(j({field:this.field,id:this.id}))}};e([t({type:C,json:{write:{isRequired:!0}}})],b.prototype,"field",void 0),e([t({type:String,json:{write:{isRequired:!0}}})],b.prototype,"id",void 0),b=$=e([n("esri.webdoc.applicationProperties.SearchTable")],b);const D=b;var f;const P=N.ofType(z),T=N.ofType(D);let l=f=class extends a{constructor(r){super(r),this.addressSearchEnabled=!0,this.enabled=!0,this.hintText=null,this.layers=new P,this.tables=new T}readAddressSearchEnabled(r){return!r}writeAddressSearchEnabled(r,i,o){i[o]=!r}clone(){return new f(j({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers,tables:this.tables}))}};e([t({type:Boolean,nonNullable:!0,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder",isRequired:!0},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"addressSearchEnabled",void 0),e([R("addressSearchEnabled")],l.prototype,"readAddressSearchEnabled",null),e([A("addressSearchEnabled")],l.prototype,"writeAddressSearchEnabled",null),e([t({type:Boolean,nonNullable:!0,json:{write:!0,origins:{"web-map":{write:{isRequired:!0}},"web-scene":{default:!0,write:!0}}}})],l.prototype,"enabled",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"hintText",void 0),e([t({type:P,json:{write:{overridePolicy:L},origins:{"web-scene":{write:{isRequired:!0}}}}})],l.prototype,"layers",void 0),e([t({type:T,json:{read:!0,write:{overridePolicy:L}}})],l.prototype,"tables",void 0),l=f=e([n("esri.webdoc.applicationProperties.Search")],l);const G=l;var m;let g=m=class extends a{constructor(r){super(r),this.search=null}clone(){return new m(j({search:this.search}))}};e([t({type:G,json:{write:!0}})],g.prototype,"search",void 0),g=m=e([n("esri.webdoc.applicationProperties.Viewing")],g);const Y=g;export{W as a,Y as i,U as l};
