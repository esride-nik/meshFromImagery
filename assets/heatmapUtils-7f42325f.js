import{aY as v,aZ as x,a_ as D,a$ as E,b0 as b}from"./index-b516d057.js";const w=2.4;function _(t){return v(t*w)}function q(t){return x(t)/w}function G(t,a,n,o){let{color:f,ratio:e}=a,{color:c,ratio:r}=n;r===e&&(r===1?e-=1e-6:r+=1e-6);const i=b((o-e)/(r-e),0,1);D(t,f.toArray(),c.toArray(),i)}function L(t){const n=new Uint8ClampedArray(2048);if(t=t.filter(({ratio:r})=>r>=0&&r<=1).sort((r,i)=>r.ratio-i.ratio).map(({color:r,ratio:i})=>({color:r,ratio:Math.max(i,.001)})),t.length<1)return n;let o=t[0],f=t[0],e=1;const c=E();for(let r=0;r<512;r++){const i=(r+.5)/512;for(;i>f.ratio&&e<t.length;)o=f,f=t[e++];G(c,o,f,i),n.set(c,4*r)}return n}function R(t,a,n,o){const{radius:f,fieldOffset:e,field:c}=a,r=Math.round(x(f)),i=new Float64Array(n*o);let s,l=Number.NEGATIVE_INFINITY;const g=T(c,e),A=new Set;for(const p of t){const h=p.getCursor();for(;h.next();){const M=h.getObjectId();if(A.has(M))continue;A.add(M);const u=h.readLegacyPointGeometry(),y=128;if(u.x<-y||u.x>=n+y||u.y<-y||u.y>o+y)continue;const I=+g(h),U=Math.max(0,Math.round(u.x)-r),N=Math.max(0,Math.round(u.y)-r),$=Math.min(o,Math.round(u.y)+r),C=Math.min(n,Math.round(u.x)+r);for(let d=N;d<$;d++)for(let m=U;m<C;m++){const F=d*n+m,j=P(u.x-m,u.y-d,r);s=i[F]+=j*I,s>l&&(l=s)}}}return{matrix:i.buffer,max:l}}function S(t,a,n,o,f,e){t.canvas.width=t.canvas.height=a,t.clearRect(0,0,a,a);const c=t.getImageData(0,0,a,a);n&&o&&c.data.set(new Uint8ClampedArray(O(a,n,o,f,e))),t.putImageData(c,0,0)}function O(t,a,n,o,f){const e=new Uint32Array(t*t),c="buffer"in a?a:new Float64Array(a),r="buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer),i=r.length/(f-o);for(let s=0;s<c.length;s++){const l=c[s],g=Math.floor((l-o)*i);e[s]=r[b(g,0,r.length-1)]}return e.buffer}function P(t,a,n){const o=Math.sqrt(t**2+a**2)/n;return o>1?0:3/(Math.PI*n**2)*(1-o**2)**2}function V(t,a){return typeof t=="function"?t:t?typeof a=="string"?n=>-1*+n[t]:n=>+n[t]+a:()=>1}function T(t,a){return t!=null?typeof a=="string"?n=>-1*+n.readAttribute(t):n=>+n.readAttribute(t)+a:n=>1}export{w as a,q as c,_ as i,S as l,P as m,R as s,L as u,V as y};
