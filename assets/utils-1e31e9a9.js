import{b5 as u,fU as s}from"./index-b516d057.js";import{v as e}from"./utils-6ca5af6f.js";function c(n){return u(new Date(n),e)}function l(n){const t=Math.floor(Math.log10(Math.abs(n)))+1,o=t<4||t>6?4:t,i=1e6,a=Math.abs(n)>=i?"compact":"standard";return s(n,{notation:a,minimumSignificantDigits:2,maximumSignificantDigits:o})}function g(n,r,t){if(r==null||n==null)return[];const o=[];for(let i=-1*t;i<=t;i++)i!==0&&o.push(r+i*n);return o}export{g as a,c as r,l as s};