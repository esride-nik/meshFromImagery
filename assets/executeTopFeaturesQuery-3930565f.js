import{e4 as a,e3 as f}from"./index-b516d057.js";import{p as s}from"./queryTopFeatures-f10f1ec4.js";import{S as n}from"./TopFeaturesQuery-6d0bf5f5.js";import"./query-351887b5.js";import"./pbfQueryUtils-b37a842c.js";import"./pbf-2651fe50.js";import"./OptimizedGeometry-196224d4.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-d7a48772.js";async function N(r,o,t,m){const i=a(r),p={...m},{data:e}=await s(i,n.from(o),t,p);return f.fromJSON(e)}export{N as executeTopFeaturesQuery};