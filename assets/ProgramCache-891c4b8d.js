import{t as h}from"./NestedMap-1b5db22e.js";import{m as i}from"./Program-96bc94ed.js";class _{constructor(t){this._rctx=t,this._store=new h}dispose(){this._store.forEach(t=>t.forEach(r=>r.dispose())),this._store.clear()}acquire(t,r,s,c){const e=this._store.get(t,r);if(e!=null)return e.ref(),e;const o=new i(this._rctx,t,r,s,c);return o.ref(),this._store.set(t,r,o),o}get test(){let t=0;return this._store.forEach(r=>r.forEach(s=>t+=s.hasGLName?2:1)),{cachedWebGLProgramObjects:t}}}export{_ as e};
