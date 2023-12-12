import{by as g,bz as h,iP as m,gk as a,ib as d,iQ as b,bn as f,cf as v,hj as y,iL as k}from"./index-b516d057.js";import{r as q}from"./signal-51ed66f5.js";class l{constructor(){this._map=new Map,this._observable=new g}get size(){return h(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(s){const e=this._map.delete(s);return e&&this._observable.notify(),e}entries(){return h(this._observable),this._map.entries()}forEach(s,e){h(this._observable),this._map.forEach((r,t)=>s.call(e,r,t,this),e)}get(s){return h(this._observable),this._map.get(s)}has(s){return h(this._observable),this._map.has(s)}keys(){return h(this._observable),this._map.keys()}set(s,e){return this._map.set(s,e),this._observable.notify(),this}values(){return h(this._observable),this._map.values()}[Symbol.iterator](){return h(this._observable),this._map[Symbol.iterator]()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}class x{constructor(s,e){this.item=s,this.controller=e,this.promise=null}}class E{constructor(s){this._schedule=null,this._task=null,this._deferreds=new l,this._controllers=new l,this._processingItems=new l,this._pausedSignal=q(!1),this.concurrency=1,s.concurrency&&(this.concurrency=s.concurrency),this._queue=new m(s.peeker),this.process=s.process;const e=s.scheduler;s.priority&&e&&(this._task=e.registerTask(s.priority,this))}destroy(){this.clear(),this._schedule=a(this._schedule),this._task=a(this._task)}get updating(){var s;return!!((s=this._task)!=null&&s.updating)||this.running}get length(){return this._processingItems.size+this._queue.length}abort(s){const e=this._controllers.get(s);e&&e.abort()}clear(){this._queue.clear();const s=[];this._controllers.forEach(e=>s.push(e)),this._controllers.clear(),s.forEach(e=>e.abort()),this._processingItems.clear(),this._cancelNext()}forEach(s){this._deferreds.forEach((e,r)=>s(r))}get(s){const e=this._deferreds.get(s);return e?e.promise:void 0}isOngoing(s){return this._processingItems.has(s)}has(s){return this._deferreds.has(s)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(s,e){const r=this.get(s);if(r)return r;const t=new AbortController;let i=null;e&&(i=d(e,()=>t.abort()));const _=()=>{const c=this._processingItems.get(s);c&&c.controller.abort(),n(),o.reject(k())},n=()=>{p.remove(),i!=null&&i.remove(),this._deferreds.delete(s),this._controllers.delete(s),this._queue.remove(s),this._processingItems.delete(s),this._scheduleNext()},p=b(t.signal,_),o=f();return this._deferreds.set(s,o),this._controllers.set(s,t),o.promise.then(n,n),this._queue.push(s),this._scheduleNext(),o.promise}last(){return this._queue.last()}peek(){return this._queue.peek()}popLast(){return this._queue.popLast()}reset(){const s=[];this._processingItems.forEach(e=>s.push(e)),this._processingItems.clear();for(const e of s)this._queue.push(e.item),e.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const s=[];for(;this._queue.length;)s.push(this._queue.pop());return this.clear(),s}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(s){for(;!s.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),s.madeProgress()}_scheduleNext(){this._task||this._pausedSignal.value||this._schedule||(this._schedule=v(()=>{this._schedule=null,this._next()}))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(s,e){this._canProcessFulfillment(s)&&(this._scheduleNext(),this._deferreds.get(s.item).resolve(e))}_processError(s,e){this._canProcessFulfillment(s)&&(this._scheduleNext(),this._deferreds.get(s.item).reject(e))}_canProcessFulfillment(s){return!!this._deferreds.get(s.item)&&this._processingItems.get(s.item)===s}_process(s){if(s==null)return;let e;const r=new AbortController,t=new x(s,r);this._processingItems.set(s,t);try{e=this.process(s,r.signal)}catch(i){this._processError(t,i)}y(e)?(t.promise=e,e.then(i=>this._processResult(t,i),i=>this._processError(t,i))):this._processResult(t,e)}get test(){return{update:s=>this.runTask(s)}}}export{E as _};