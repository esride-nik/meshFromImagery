import{ch as y,a5 as t,a6 as n,a9 as p,ae as f,dO as w}from"./index-b516d057.js";var c;const l=new y({asc:"ascending",desc:"descending"});let s=c=class extends f{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new c({field:this.field,valueExpression:this.valueExpression,order:this.order})}};t([n({type:String,json:{write:!0}})],s.prototype,"field",void 0),t([n({type:String,json:{write:!0}})],s.prototype,"valueExpression",void 0),t([n({type:l.apiValues,json:{read:l.read,write:l.write}})],s.prototype,"order",void 0),s=c=t([p("esri.layers.support.OrderByInfo")],s);const u=s;function v(e,r,o){if(!e)return null;const d=e.find(a=>!!a.field);if(!d)return null;const i=new u;return i.read(d,o),[i]}function g(e,r,o,d){const i=e.find(a=>!!a.field);i&&w(o,[i.toJSON()],r)}const x=e=>{let r=class extends e{constructor(){super(...arguments),this.orderBy=null}};return t([n({type:[u],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:v},write:{target:"layerDefinition.orderBy",writer:g}}})],r.prototype,"orderBy",void 0),r=t([p("esri.layers.mixins.OrderedLayer")],r),r};export{x as c};
