import{b as c}from"./Query-071039d7.js";async function d(t,e,u){e=e.clone(),t.capabilities.query.supportsMaxRecordCountFactor&&(e.maxRecordCountFactor=o(t));const n=s(t),i=t.capabilities.query.supportsPagination;e.start=0,e.num=n;let r=null;for(;;){const a=await t.source.queryFeaturesJSON(e,u);if(r==null?r=a:r.features=r.features.concat(a.features),r.exceededTransferLimit=a.exceededTransferLimit,!i||!a.exceededTransferLimit)break;e.start+=n}return r}function s(t){return o(t)*f(t)}function f(t){return t.capabilities.query.maxRecordCount||2e3}function o(t){return t.capabilities.query.supportsMaxRecordCountFactor?c.MAX_MAX_RECORD_COUNT_FACTOR:1}export{d as r,s as t};
