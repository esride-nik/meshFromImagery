import{gg as c,gm as l,gn as m,go as g,gi as y,gp as A,gq as M,gr as R}from"./index-b516d057.js";function d(t,s){return t[0]*s[1]-t[1]*s[0]}function $(t,s,n){const e=m(n,s)/l(n);return R(t,n,e)}function v(t,s,n,e,r=n){return c(p,e,n),c(h,s,r),$(E,h,p),A(t,r,E)}function Y(t,s,n,e){c(p,s,n);const r=e/M(p);return g(t,n,p,r)}function k(t,s){const n=t.start,e=t.end,r=s.start,N=s.end,u=c(p,e,n),a=c(q,N,r),f=d(u,a);if(Math.abs(f)<=b)return[];const o=c(h,n,r),I=d(a,o)/f,L=d(u,o)/f;if(I>=0){if(L>=0||s.type===i.LINE)return[g(E,n,u,I)]}else if(t.type===i.LINE&&(L>=0||s.type===i.LINE))return[g(E,n,u,I)];return[]}function x(t,s,n){const e=[],r=c(p,t.end,t.start),N=c(q,t.start,s),u=l(r),a=2*m(r,N),f=a*a-4*u*(l(N)-n*n);if(f===0){const o=-a/(2*u);(t.type===i.LINE||o>=0)&&e.push(g(E,t.start,r,o))}else if(f>0){const o=Math.sqrt(f),I=(-a+o)/(2*u);(t.type===i.LINE||I>=0)&&e.push(g(E,t.start,r,I));const L=(-a-o)/(2*u);(t.type===i.LINE||L>=0)&&e.push(g(h,t.start,r,L))}return e}var i;(function(t){t[t.RAY=0]="RAY",t[t.LINE=1]="LINE"})(i||(i={}));const b=1e-6,p=y(),q=y(),h=y(),E=y();export{v as L,k as j,i as l,Y as m,x as v};
