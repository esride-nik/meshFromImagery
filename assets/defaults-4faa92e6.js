import{dS as o,dT as t,dU as n,dV as e}from"./index-b516d057.js";import{l as s,o as m,S as a,t as l,r as u,s as S,y as c}from"./defaultsJSON-59981e75.js";const f=o.fromJSON(s),i=t.fromJSON(m),p=n.fromJSON(a),O=e.fromJSON(l);function y(r){if(r==null)return null;switch(r.type){case"mesh":return null;case"point":case"multipoint":return f;case"polyline":return i;case"polygon":case"extent":return p}return null}const $=o.fromJSON(u),d=t.fromJSON(S),h=n.fromJSON(c);export{y as J,$ as N,d as O,f as S,O as a,p as c,i as u,h as y};