import{a5 as r,a6 as p,a9 as _,bA as g,cb as c,cc as u,cd as o,ce as m,ao as h,cf as H}from"./index-b516d057.js";let l=class extends g{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(e,s,t={}){return this._installWatch(e,s,t,c)}addWhen(e,s,t={}){return this._installWatch(e,s,t,u)}addOnCollectionChange(e,s,{initial:t=!1,final:a=!1}={}){const n=++this._handleId;return this.addHandles([o(e,"after-changes",this._createSyncUpdatingCallback(),m),o(e,"change",s,{onListenerAdd:t?d=>s({added:d.toArray(),removed:[]}):void 0,onListenerRemove:a?d=>s({added:[],removed:d.toArray()}):void 0})],n),h(()=>this.removeHandles(n))}addPromise(e){if(e==null)return e;const s=++this._handleId;this.addHandles(h(()=>{this._pendingPromises.delete(e)&&(this._pendingPromises.size!==0||this.hasHandles(i)||this._set("updating",!1))}),s),this._pendingPromises.add(e),this._set("updating",!0);const t=()=>this.removeHandles(s);return e.then(t,t),e}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(e,s,t={},a){const n=++this._handleId;t.sync||this._installSyncUpdatingWatch(e,n);const d=a(e,s,t);return this.addHandles(d,n),h(()=>this.removeHandles(n))}_installSyncUpdatingWatch(e,s){const t=this._createSyncUpdatingCallback(),a=c(e,t,{sync:!0,equals:()=>!1});return this.addHandles(a,s),a}_createSyncUpdatingCallback(){return()=>{this.removeHandles(i),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles(H(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(i))}),i)}}};r([p({readOnly:!0})],l.prototype,"updating",void 0),l=r([_("esri.core.support.UpdatingHandles")],l);const i=-42;export{l as h};
