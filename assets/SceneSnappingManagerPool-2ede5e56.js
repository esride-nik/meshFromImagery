import{cb as p,h3 as s,V as c,ao as u,ke as l}from"./index-b516d057.js";import{l as f,p as d,P as m,I as g}from"./SnappingManager-aa70fdd4.js";import{p as r}from"./snappingUtils-93e84fbe.js";function v(n,e){const o=new f({enabled:!0,selfEnabled:!1,featureEnabled:!0,distance:(e==null?void 0:e.distance)??r.distance,touchSensitivityMultiplier:(e==null?void 0:e.touchSensitivityMultiplier)??r.touchSensitivityMultiplier});return{...p(()=>{var t,a;return((a=(t=n.map)==null?void 0:t.allLayers)==null?void 0:a.toArray())??[]},t=>{o.featureSources=new c(t.map(a=>new d({layer:a,enabled:!0})))},s),options:o}}const i=new Map;function h(n){if(!i.has(n)){const t=v(n,{distance:10}),a=y(n,t.options);i.set(n,{referenceCount:0,snappingManager:a,remove:()=>{t.remove(),a.destroy()}})}const e=i.get(n);e.referenceCount++;const o=u(()=>w(n,e));return{snappingManager:e.snappingManager,...o}}function w(n,e){e.referenceCount--,e.referenceCount>0||l(()=>{e.referenceCount===0&&(e.remove(),i.delete(n))})}function y(n,e){return new m({view:n,options:e,snappingEnginesFactory:(o,t)=>[new g({view:n,spatialReference:n.spatialReference,options:t})]})}export{h as a};