import{e5 as x,e6 as N,e7 as P,e8 as v,e9 as b,ea as S,eb as A,ec as R,ed as U,ee as O,s as F,aq as J,ef as K,ar as q,eg as z}from"./index-b516d057.js";import{x as C}from"./MD5-715f37cd.js";import{i as H}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{n as V}from"./uuid-709b6c67.js";import{p as y}from"./resourceExtension-63924db9.js";function W(e){const s=(e==null?void 0:e.origins)??[void 0];return(r,n)=>{const o=Y(e,r,n);for(const a of s){const i=x(r,a,n);for(const t in o)i[t]=o[t]}}}function Y(e,s,r){if((e==null?void 0:e.type)==="resource")return Z(e,s,r);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:o}=z;return{read:n,write:o}}}}function Z(e,s,r){const n=N(s,r);return{type:String,read:(o,a,i)=>{const t=P(o,a,i);return n.type===String?t:typeof n.type=="function"?new n.type({url:t}):void 0},write:{writer(o,a,i,t){if(!(t!=null&&t.resources))return typeof o=="string"?void(a[i]=v(o,t)):void(a[i]=o.write({},t));const c=D(o),p=v(c,{...t,verifyItemRelativeUrls:t!=null&&t.verifyItemRelativeUrls?{writtenUrls:t.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},b.NO),d=n.type!==String&&(!H(this)||(t==null?void 0:t.origin)&&this.originIdOf(r)>S(t.origin)),l={object:this,propertyName:r,value:o,targetUrl:p,dest:a,targetPropertyName:i,context:t,params:e};t!=null&&t.portalItem&&p&&!A(p)?d&&(e!=null&&e.contentAddressed)?g(l):d?k(l):B(l):t!=null&&t.portalItem&&(p==null||R(p)!=null||U(p)||d)?g(l):a[i]=p}}}}function g(e){var h;const{targetUrl:s,params:r,value:n,context:o,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const t=O(s),c=I(n,s,o);if(r!=null&&r.contentAddressed&&c.type!=="json")return void((h=o.messages)==null?void 0:h.push(new F("persistable:contentAddressingUnsupported",`Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`,{content:c})));const p=r!=null&&r.contentAddressed&&c.type==="json"?C(c.jsonString):(t==null?void 0:t.filename)??V(),d=J((r==null?void 0:r.prefix)??(t==null?void 0:t.prefix),p),l=`${d}.${y(c)}`;if(r!=null&&r.contentAddressed&&o.resources&&c.type==="json"){const u=o.resources.toKeep.find(f=>f.resource.path===l)??o.resources.toAdd.find(f=>f.resource.path===l);if(u)return void(a[i]=u.resource.itemRelativeUrl)}const m=o.portalItem.resourceFromPath(l);U(s)&&o.resources&&o.resources.pendingOperations.push(K(s).then(u=>{m.path=`${d}.${y({type:"blob",blob:u})}`,a[i]=m.itemRelativeUrl}).catch(()=>{}));const j=(r==null?void 0:r.compress)??!1;o.resources&&w({...e,resource:m,content:c,compress:j,updates:o.resources.toAdd}),a[i]=m.itemRelativeUrl}function k(e){const{context:s,targetUrl:r,params:n,value:o,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const t=s.portalItem.resourceFromPath(r),c=I(o,r,s),p=y(c),d=q(t.path),l=(n==null?void 0:n.compress)??!1;p===d?(s.resources&&w({...e,resource:t,content:c,compress:l,updates:s.resources.toUpdate}),a[i]=r):g(e)}function B({context:e,targetUrl:s,dest:r,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(s),compress:!1}),r[n]=s)}function w({object:e,propertyName:s,updates:r,resource:n,content:o,compress:a}){r.push({resource:n,content:o,compress:a,finish:i=>{E(e,s,i)}})}function I(e,s,r){return typeof e=="string"?{type:"url",url:s}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}function D(e){return e==null?null:typeof e=="string"?e:e.url}function E(e,s,r){typeof e[s]=="string"?e[s]=r.url:e[s].url=r.url}export{W as j};
