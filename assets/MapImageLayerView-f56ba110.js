import{a5 as r,a6 as o,eC as a,a9 as i}from"./index-b516d057.js";import{m}from"./ExportImageParameters-eb8f9ddb.js";const l=s=>{let e=class extends s{initialize(){this.exportImageParameters=new m({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var t;return((t=this.view)==null?void 0:t.floors)??null}get exportImageVersion(){var t;return(t=this.exportImageParameters)==null||t.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var t;return!!super.canResume()&&!((t=this.timeExtent)!=null&&t.isEmpty)}};return r([o()],e.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],e.prototype,"floors",null),r([o({readOnly:!0})],e.prototype,"exportImageVersion",null),r([o()],e.prototype,"layer",void 0),r([o()],e.prototype,"suspended",void 0),r([o(a)],e.prototype,"timeExtent",void 0),e=r([i("esri.views.layers.MapImageLayerView")],e),e};export{l as p};