import{V as y,a5 as s,a6 as r,eq as f,a9 as v,cb as m,dr as x,ep as b,er as $,es as z,et as E,eu as _}from"./index-b516d057.js";import{c as w}from"./Analysis-bb7abb72.js";import{f as O,u as R}from"./LineOfSightAnalysisTarget-09d41c0b.js";import{r as q}from"./elevationInfoUtils-be36d866.js";const a=y.ofType(O);let t=class extends w{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(m(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},x))}get targets(){return this._get("targets")||new a}set targets(e){this._set("targets",b(e,this.targets,a))}get spatialReference(){var e;return((e=this.observer)==null?void 0:e.position)!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[(e=this.observer)==null?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){var h;const e=this.spatialReference;if(((h=this.observer)==null?void 0:h.position)==null||e==null)return null;const p=i=>q(i.position,i.elevationInfo)==="absolute-height",n=this.observer.position,u=$(n.x,n.y,n.z,n.x,n.y,n.z);for(const i of this.targets)if(i.position!=null){const o=z(i.position,e);if(o.pending!=null)return{pending:o.pending,extent:null};if(o.geometry!=null){const{x:d,y:g,z:c}=o.geometry;E(u,[d,g,c])}}const l=_(u,e);return p(this.observer)&&this.targets.every(p)||(l.zmin=void 0,l.zmax=void 0),{pending:null,extent:l}}clear(){this.observer=null,this.targets.removeAll()}};s([r({type:["line-of-sight"]})],t.prototype,"type",void 0),s([r({type:R,json:{read:!0,write:!0}})],t.prototype,"observer",void 0),s([r({cast:f,type:a,nonNullable:!0,json:{read:!0,write:!0}})],t.prototype,"targets",null),s([r({value:null,readOnly:!0})],t.prototype,"extent",void 0),s([r({readOnly:!0})],t.prototype,"spatialReference",null),s([r({readOnly:!0})],t.prototype,"requiredPropertiesForEditing",null),t=s([v("esri.analysis.LineOfSightAnalysis")],t);const C=t;export{C as v};
