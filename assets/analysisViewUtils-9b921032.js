import{ib as c,cn as s,gs as r,gk as v,cb as u,dr as w}from"./index-b516d057.js";function y(t,n){t.interactive=!0;const{tool:i,view:e}=t;e.activeTool=i;let a=c(n,()=>{e.activeTool===i&&(e.activeTool=null)});return s(async o=>{await r(()=>i==null||!i.active,o),a=v(a)},n)}function $(t,n){return u(()=>t.interactive,()=>f(t,n),w)}function f(t,n){t.interactive?d(t,n):l(t)}function d(t,n){l(t);const{view:i,analysis:e}=t,a=new n({view:i,analysis:e,analysisViewData:t});return t.tool=a,i.tools.add(a),a}function l(t){const{view:n,tool:i}=t;i!=null&&(n.tools.remove(i),t.tool=null)}export{$ as a,y as l,l as v};
