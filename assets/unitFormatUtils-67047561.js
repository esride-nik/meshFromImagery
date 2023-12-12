import{k4 as m,g9 as a,fU as c,k5 as y,k6 as D,k7 as x,k8 as d,k9 as b,dR as k,b0 as B,ka as $,kb as v}from"./index-b516d057.js";import{s as M}from"./Cyclical-4c223a04.js";function w(n,t){return{type:m(t),value:n,unit:t}}function T(n,t){return{type:m(t),value:n,unit:t}}function S(n,t){return{type:m(t),value:n,unit:t}}function f(n,t,e="arithmetic"){return{type:m(t),value:n,unit:t,rotationType:e}}function z(n,t){const e=Z(n,t);return n.type==="angle"?f(e,t,n.rotationType):w(e,t)}function Z(n,t){return a(n.value,n.unit,t)}function E(n,t){return n==null?t:t==null||n.value>a(t.value,t.unit,n.unit)?n:t}function K(n,t){return n==null?null:{...n,value:n.value*t}}function I(n,t,e){if(t===e)return n;switch(e){case"arithmetic":case"geographic":return 90-n}}const j=T(0,"meters"),G=S(0,"square-meters");f(0,"radians");const L=f(0,"degrees");function F(n,t,e){return n.units[t][e]}function s(n,t,e,i=2,u="abbr"){return`${c(t,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:t>0?"never":"exceptZero"})} ${F(n,e,u)}`}function l(n,t,e,i=2,u="abbr"){return`${c(t,{minimumFractionDigits:i,maximumFractionDigits:i,signDisplay:"exceptZero"})} ${F(n,e,u)}`}function N(n,t,e,i=2,u="abbr"){const r=y(t,e);return s(n,a(t,e,r),r,i,u)}function Y(n,t,e,i=2,u="abbr"){const r=y(t,e);return l(n,a(t,e,r),r,i,u)}function q(n,t,e,i=2,u="abbr"){const r=$(t,e);return s(n,a(t,e,r),r,i,u)}function A(n,t,e,i=2,u="abbr"){const r=$(t,e);return l(n,a(t,e,r),r,i,u)}function J(n,t,e,i=2,u="abbr"){const r=D(t,e);return s(n,a(t,e,r),r,i,u)}function R(n,t,e,i=2,u="abbr"){const r=D(t,e);return l(n,a(t,e,r),r,i,u)}function C(n,t,e,i=2,u="abbr"){const r=v(t,e);return s(n,a(t,e,r),r,i,u)}function H(n,t,e,i=2,u="abbr"){const r=v(t,e);return l(n,a(t,e,r),r,i,u)}function P(n,t,e,i=2,u="abbr"){const r=x(t,e);return s(n,a(t,e,r),r,i,u)}function Q(n,t,e,i=2,u="abbr"){const r=d(t,e);return s(n,a(t,e,r),r,i,u)}function V(n,t,e,i,u){u=u??2;let r=M.normalize(I(a(n,t,"degrees"),e,i),0,!0);const o={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:u,minimumFractionDigits:u,signDisplay:r>0?"never":"exceptZero"};return r=h(r,o),c(r,o)}function W(n,t,e,i,u){e!==i&&(n=-n);const r={style:"unit",unitDisplay:"narrow",unit:"degree",maximumFractionDigits:u=u??2,minimumFractionDigits:u,signDisplay:"exceptZero"};let o=a(n,t,"degrees")%360;return o=h(o,r),c(o,r)}const g=new Map;function h(n,t){const e=JSON.stringify(t);let i=g.get(e);return i||(i=new Intl.NumberFormat("en-US",t),g.set(e,i)),/\-?\+?360/.test(i.format(n))?0:n}const p=["B","kB","MB","GB","TB"];function X(n,t){let e=(t=Math.round(t))===0?0:Math.floor(Math.log(t)/Math.log(b.KILOBYTES));e=B(e,0,p.length-1);const i=c(t/b.KILOBYTES**e,{maximumFractionDigits:2});return k(n.units.bytes[p[e]],{fileSize:i})}export{Q as $,C as B,N as D,A as F,H as M,X as O,V as U,j as a,F as b,I as c,J as d,L as e,z as f,s as g,R as h,T as i,P as j,G as k,S as l,K as m,E as n,f as o,l as p,w as r,Z as s,W as w,Y as x,q as y};