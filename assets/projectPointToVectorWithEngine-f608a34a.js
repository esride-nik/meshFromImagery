import{eh as l,bm as m,cF as u,f_ as x,aW as y}from"./index-b516d057.js";import{e as z}from"./dehydratedPoint-5a1dfed5.js";async function r(e,n,a,o,i){o??(o=0);const s=e.spatialReference;if(l(s,a)||s==null||a==null||m(s,a))return t[0]=e.x,t[1]=e.y,t[2]=e.z??o,void u(t,e.spatialReference,0,n,a,0,1);const f=z(e.x,e.y,e.z??o,s),c=await x(f,a,i);n[0]=c.x,n[1]=c.y,n[2]=c.z??0}const t=y();export{r as n};