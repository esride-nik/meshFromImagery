import{m as s,s as l,j as c}from"./index-b516d057.js";import{p as m,n as g}from"./project-1bd91657.js";async function u(e=null,a){var i,r;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||c.getDefault():e,await t.load({signal:a});const n=(r=(i=t.helperServices)==null?void 0:i.geometry)==null?void 0:r.url;if(!n)throw new l("internal:geometry-service-url-not-configured");return n}async function p(e,a,t=null,n){const i=await u(t,n),r=new m;r.geometries=[e],r.outSpatialReference=a;const o=await g(i,r,{signal:n});if(o&&Array.isArray(o)&&o.length===1)return o[0];throw new l("internal:geometry-service-projection-failed")}export{u as getGeometryServiceURL,p as projectGeometry};