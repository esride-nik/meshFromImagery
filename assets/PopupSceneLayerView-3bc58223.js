import{a5 as y,a9 as d,s as l,hG as f,i1 as w}from"./index-b516d057.js";import{p as o,n as F}from"./popupUtils-e4ebc84a.js";const x=h=>{let r=class extends h{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:t}=e;if(!t)throw new l("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e});if(!o(e,p))throw new l("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){this._validateFetchPopupFeatures(e);const t=e!=null?e.clientGraphics:null;if(!t||t.length===0)return[];const u=this.layer.type==="scene"&&this.layer.associatedLayer!=null?this.layer.associatedLayer:this.layer;let i=[];"fieldsIndex"in this.layer&&(i=f(this.layer.fieldsIndex,await F(u,o(this.layer,e)))),await this.prepareFetchPopupFeatures(i);const c=new Set,n=[],a=[];for(const s of t)w(i,s,c)?a.push(s):n.push(s);return a.length===0?n:this.whenGraphicAttributes(a,[...c]).catch(()=>a).then(s=>n.concat(s))}};return r=y([d("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{x as i};
