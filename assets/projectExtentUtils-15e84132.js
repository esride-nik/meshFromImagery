import{cD as s}from"./index-b516d057.js";import{projectGeometry as a}from"./geometryServiceUtils-3e048225.js";function c(r){const l=r.view.spatialReference,e=r.layer.fullExtent,o=e!=null&&e.spatialReference;if(e==null||!o)return Promise.resolve(null);if(o.equals(l))return Promise.resolve(e.clone());const t=s(e,l);return t!=null?Promise.resolve(t):r.view.state.isLocal?a(e,l,r.layer.portalItem).then(n=>!r.destroyed&&n?n:null).catch(()=>null):Promise.resolve(null)}export{c as l};
