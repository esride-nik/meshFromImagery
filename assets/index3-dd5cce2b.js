/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */const I=(()=>{const e=Intl.supportedValuesOf("timeZone"),n=["Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"];return[...new Set([...e,...n])]})(),$=new Date,v=$.toISOString(),R=365,y=R,J={startDate:v,groupDateRange:y,debug:!1},O=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]),x=(e,n,r)=>{const t=[];let i=r.create(e);for(let c=0;c<=n;c++)i=r.increase(i),t.push(r.formatToIsoDateString(i));return t},C=e=>{if(e.includes("Istanbul"))return"Europe";const n=e.lastIndexOf("/");return n===-1?e:e.slice(0,n)},w=e=>O.has(e),F=(e,n,r,t,i=!1)=>{const c=new Map;i&&console.log(`Initializing data starting ${n} with ${r} days in the future, comparing ${e.length} timezones`);const d=x(n,r,t);return e.map(f=>{const u=f.label,T=C(u),m=d.map(g=>{const p=`${g}-${u}`;let o=c.get(p);return o||(o=t.isoToTimeZone(g,u),c.set(p,o),o)});return{...f,continent:T,isRegularContinent:w(T),dates:m}})},_=(e,n,r)=>e.length===n.length&&e.every((t,i)=>r.same(t,n[i])),B=(e,n=5)=>{const r=e.filter(({label:i})=>w(C(i)));if(r.length===0)return[0];const t=r.map(i=>e.indexOf(i));return L(t,n)};function L(e,n=5){const r=e.length;if(r<=n)return e;const t=Math.min(r-2,n-2),i=(r-1)/(t+1);return[e[0],...Array.from({length:t},(c,d)=>e[Math.round((d+1)*i)]),e[r-1]]}async function q(e){var m,g,p,o,b;const{debug:n,groupDateRange:r,hooks:t,startDate:i,dateEngine:c}={...J,...e},d=[];if(!c)throw new Error("dateEngine is required");const f=I.map(a=>({label:a}));(m=t==null?void 0:t.onBeforeTimeZoneMetadataCreate)==null||m.call(t,f);const u=F(f,i,r,c,n);(g=t==null?void 0:t.onTimeZoneMetadataCreate)==null||g.call(t,u);for(const a of u){const{label:s,continent:G,dates:E}=a;if(a.visited)continue;a.visited=!0;const l={labelTzIndices:void 0,tzs:[{label:s}]};(p=t==null?void 0:t.onGroupCreate)==null||p.call(t,l,a);for(const M of u.filter(z=>!z.visited)){const{label:z,continent:Z,isRegularContinent:D,dates:S}=M;if((G===Z||!D)&&_(E,S,c)){const A={label:z};l.tzs.push(A),(o=t==null?void 0:t.onGroupTimeZoneAdd)==null||o.call(t,l,A,M),M.visited=!0}}d.push(l),(b=t==null?void 0:t.onGroupAdd)==null||b.call(t,l)}const T=d.map(a=>{var G,E;(G=t==null?void 0:t.onBeforeFinalGroupCreate)==null||G.call(t,a),a.tzs=a.tzs.sort((l,M)=>l.label.localeCompare(M.label));const s={labelTzIndices:B(a.tzs,7),tzs:a.tzs.map(l=>l.label)};return(E=t==null?void 0:t.onFinalGroupCreate)==null||E.call(t,s,a),s}).sort((a,s)=>s.tzs.length-a.tzs.length);if(n){const a=I.map(s=>T.some(G=>G.tzs.includes(s))?null:s).filter(Boolean);if(a.length>0)throw new Error(`There are ${a.length} missing timezones: ${a.toString()}`)}return t!=null&&t.onFinalGroupingCreate?t.onFinalGroupingCreate(T):T}export{q as groupTimeZones};