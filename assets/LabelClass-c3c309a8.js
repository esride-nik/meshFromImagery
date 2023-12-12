import{a5 as n,a6 as o,a7 as f,ad as c,a9 as x,ae as S,ch as E,js as j,jt as A,ju as C,jv as y,jw as I,X as m}from"./index-b516d057.js";import{w as d,u as B,_ as N,x as O,f as $,g as M}from"./labelUtils-b29175f3.js";import{a as V}from"./defaults-4faa92e6.js";var v;let a=v=class extends S{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,r){return r.value?d(r.value):e}writeExpression(e,r,t){this.value!=null&&(e=d(this.value)),e!=null&&(r[t]=e)}clone(){return new v({expression:this.expression,title:this.title,value:this.value})}};n([o({type:String,json:{write:{writerEnsuresNonNull:!0}}})],a.prototype,"expression",void 0),n([f("expression",["expression","value"])],a.prototype,"readExpression",null),n([c("expression")],a.prototype,"writeExpression",null),n([o({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],a.prototype,"title",void 0),n([o({json:{read:!1,write:!1}})],a.prototype,"value",void 0),a=v=n([x("esri.layers.support.LabelExpressionInfo")],a);const P=a;var w;const u=new E({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function b(e,r,t){return{enabled:!I(t==null?void 0:t.layer)}}function g(e){var r;return!e||e.origin!=="service"&&((r=e.layer)==null?void 0:r.type)!=="map-image"}function D(e){return(e==null?void 0:e.type)==="map-image"}function L(e){var r,t;return!!D(e)&&!!((t=(r=e.capabilities)==null?void 0:r.exportMap)!=null&&t.supportsArcadeExpressionForLabeling)}function R(e){return g(e)||L(e==null?void 0:e.layer)}let l=w=class extends S{static evaluateWhere(e,r){const t=(i,p,s)=>{switch(p){case"=":return i==s;case"<>":return i!=s;case">":return i>s;case">=":return i>=s;case"<":return i<s;case"<=":return i<=s}return!1};try{if(e==null)return!0;const i=e.split(" ");if(i.length===3)return t(r[i[0]],i[1],i[2]);if(i.length===7){const p=t(r[i[0]],i[1],i[2]),s=i[3],h=t(r[i[4]],i[5],i[6]);switch(s){case"AND":return p&&h;case"OR":return p||h}}return!1}catch{console.log("Error.: can't parse = "+e)}}constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=V,this.useCodedValues=void 0,this.where=null}readLabelExpression(e,r){const t=r.labelExpressionInfo;if(!t||!t.value&&!t.expression)return e}writeLabelExpression(e,r,t){if(this.labelExpressionInfo){if(this.labelExpressionInfo.value!=null)e=B(this.labelExpressionInfo.value);else if(this.labelExpressionInfo.expression!=null){const i=N(this.labelExpressionInfo.expression);i&&(e="["+i+"]")}}e!=null&&(r[t]=e)}writeLabelExpressionInfo(e,r,t,i){if(e==null&&this.labelExpression!=null&&g(i))e=new P({expression:this.getLabelExpressionArcade()});else if(!e)return;const p=e.toJSON(i);p.expression&&(r[t]=p)}writeMaxScale(e,r){(e||this.minScale)&&(r.maxScale=e)}writeMinScale(e,r){(e||this.maxScale)&&(r.minScale=e)}getLabelExpression(){return O(this)}getLabelExpressionArcade(){return $(this)}getLabelExpressionSingleField(){return M(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:m(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:m(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};n([o({type:String,json:{write:!0}})],l.prototype,"name",void 0),n([o({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1},"portal-item":{default:!1,write:{overridePolicy:b}}}}})],l.prototype,"allowOverrun",void 0),n([o({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1},"portal-item":{default:"static",write:{overridePolicy:b}}}}})],l.prototype,"deconflictionStrategy",void 0),n([o({type:String,json:{write:{overridePolicy(e,r,t){return this.labelExpressionInfo&&(t==null?void 0:t.origin)==="service"&&L(t.layer)?{enabled:!1}:{allowNull:!0}}}}})],l.prototype,"labelExpression",void 0),n([f("labelExpression")],l.prototype,"readLabelExpression",null),n([c("labelExpression")],l.prototype,"writeLabelExpression",null),n([o({type:P,json:{write:{overridePolicy:(e,r,t)=>R(t)?{allowNull:!0}:{enabled:!1}}}})],l.prototype,"labelExpressionInfo",void 0),n([c("labelExpressionInfo")],l.prototype,"writeLabelExpressionInfo",null),n([o({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],l.prototype,"labelPlacement",void 0),n([o({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],l.prototype,"labelPosition",void 0),n([o({type:Number})],l.prototype,"maxScale",void 0),n([c("maxScale")],l.prototype,"writeMaxScale",null),n([o({type:Number})],l.prototype,"minScale",void 0),n([c("minScale")],l.prototype,"writeMinScale",null),n([o({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],l.prototype,"repeatLabel",void 0),n([o({type:Number,cast:j,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:{overridePolicy:b}}}}})],l.prototype,"repeatLabelDistance",void 0),n([o({types:A,json:{origins:{"web-scene":{types:C,write:y,default:null}},write:y,default:null}})],l.prototype,"symbol",void 0),n([o({type:Boolean,json:{write:!0}})],l.prototype,"useCodedValues",void 0),n([o({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=w=n([x("esri.layers.support.LabelClass")],l);const k=l;export{k as C};
