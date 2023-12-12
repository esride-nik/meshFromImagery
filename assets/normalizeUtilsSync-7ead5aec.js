import{bj as V,eN as X,aM as A,bp as N,eO as S,au as R,ax as j,aX as G,av as J,aw as M,eP as Q,eQ as $,eR as q,eS as p}from"./index-b516d057.js";function H(e){return b(e,!0)}function K(e){return b(e,!1)}function b(e,s){if(e==null)return null;const i=e.spatialReference,n=X(i),t=A(e)?e.toJSON():e;if(!n)return t;const h=N(i)?102100:4326,u=S[h].maxX,_=S[h].minX;if(R(t))return T(t,u,_);if(j(t))return t.points=t.points.map(o=>T(o,u,_)),t;if(G(t))return z(t,n);if(J(t)||M(t)){const o=Q(D,t),r={xmin:o[0],ymin:o[1],xmax:o[2],ymax:o[3]},x=p(r.xmin,_)*(2*u),m=x===0?t:$(t,x);return r.xmin+=x,r.xmax+=x,r.xmax>u?L(m,u,s):r.xmin<_?L(m,_,s):m}return t}function z(e,s){if(!s)return e;const i=B(e,s).map(n=>n.extent);return i.length<2?i[0]||e:i.length>2?(e.xmin=s.valid[0],e.xmax=s.valid[1],e):{rings:i.map(n=>[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]])}}function T(e,s,i){if(Array.isArray(e)){const n=e[0];if(n>s){const t=p(n,s);e[0]=n+t*(-2*s)}else if(n<i){const t=p(n,i);e[0]=n+t*(-2*i)}}else{const n=e.x;if(n>s){const t=p(n,s);e.x+=t*(-2*s)}else if(n<i){const t=p(n,i);e.x+=t*(-2*i)}}return e}function B(e,s){const i=[],{ymin:n,ymax:t,xmin:h,xmax:u}=e,_=e.xmax-e.xmin,[o,r]=s.valid,{x,frameId:m}=w(e.xmin,s),{x:l,frameId:c}=w(e.xmax,s),k=x===l&&_>0;if(_>2*r){const g={xmin:h<u?x:l,ymin:n,xmax:r,ymax:t},O={xmin:o,ymin:n,xmax:h<u?l:x,ymax:t},P={xmin:0,ymin:n,xmax:r,ymax:t},C={xmin:o,ymin:n,xmax:0,ymax:t},f=[],d=[];v(g,P)&&f.push(m),v(g,C)&&d.push(m),v(O,P)&&f.push(c),v(O,C)&&d.push(c);for(let y=m+1;y<c;y++)f.push(y),d.push(y);i.push(new a(g,[m]),new a(O,[c]),new a(P,f),new a(C,d))}else x>l||k?i.push(new a({xmin:x,ymin:n,xmax:r,ymax:t},[m]),new a({xmin:o,ymin:n,xmax:l,ymax:t},[c])):i.push(new a({xmin:x,ymin:n,xmax:l,ymax:t},[m]));return i}function w(e,s){const[i,n]=s.valid,t=2*n;let h,u=0;return e>n?(h=Math.ceil(Math.abs(e-n)/t),e-=h*t,u=h):e<i&&(h=Math.ceil(Math.abs(e-i)/t),e+=h*t,u=-h),{x:e,frameId:u}}function v(e,s){const{xmin:i,ymin:n,xmax:t,ymax:h}=s;return I(e,i,n)&&I(e,i,h)&&I(e,t,h)&&I(e,t,n)}function I(e,s,i){return s>=e.xmin&&s<=e.xmax&&i>=e.ymin&&i<=e.ymax}function L(e,s,i=!0){const n=!M(e);if(n&&q(e),i)return new E().cut(e,s);const t=n?e.rings:e.paths,h=n?4:2,u=t.length,_=-2*s;for(let o=0;o<u;o++){const r=t[o];if(r&&r.length>=h){const x=[];for(const m of r)x.push([m[0]+_,m[1]]);t.push(x)}}return n?e.rings=t:e.paths=t,e}class a{constructor(s,i){this.extent=s,this.frameIds=i}}const D=V();class E{constructor(){this._linesIn=[],this._linesOut=[]}cut(s,i){let n;if(this._xCut=i,s.rings)this._closed=!0,n=s.rings,this._minPts=4;else{if(!s.paths)return null;this._closed=!1,n=s.paths,this._minPts=2}for(const h of n){if(!h||h.length<this._minPts)continue;let u=!0;for(const _ of h)u?(this.moveTo(_),u=!1):this.lineTo(_);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const h of this._linesIn)h&&h.length>=this._minPts&&n.push(h);const t=-2*this._xCut;for(const h of this._linesOut)if(h&&h.length>=this._minPts){for(const u of h)u[0]+=t;n.push(h)}return this._closed?s.rings=n:s.paths=n,s}moveTo(s){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(s[0]),this._moveTo(s[0],s[1],this._prevSide),this._prevPt=s,this._firstPt=s}lineTo(s){const i=this._side(s[0]);if(i*this._prevSide==-1){const n=this._intersect(this._prevPt,s);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(s[0],s[1],i)}else this._lineTo(s[0],s[1],i);this._prevSide=i,this._prevPt=s}close(){const s=this._firstPt,i=this._prevPt;s[0]===i[0]&&s[1]===i[1]||this.lineTo(s),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(s,i,n){this._closed?(this._lineIn.push([n<=0?s:this._xCut,i]),this._lineOut.push([n>=0?s:this._xCut,i])):(n<=0&&this._lineIn.push([s,i]),n>=0&&this._lineOut.push([s,i]))}_lineTo(s,i,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?s:this._xCut,i),this._addPolyVertex(this._lineOut,n>=0?s:this._xCut,i)):n<0?(this._prevSide===0&&this._pushLineOut(),this._lineIn.push([s,i])):n>0?(this._prevSide===0&&this._pushLineIn(),this._lineOut.push([s,i])):this._prevSide<0?(this._lineIn.push([s,i]),this._lineOut.push([s,i])):this._prevSide>0&&(this._lineOut.push([s,i]),this._lineIn.push([s,i]))}_addPolyVertex(s,i,n){const t=s.length;t>1&&s[t-1][0]===i&&s[t-2][0]===i?s[t-1][1]=n:s.push([i,n])}_checkClosingPt(s){const i=s.length;i>3&&s[0][0]===this._xCut&&s[i-2][0]===this._xCut&&s[1][0]===this._xCut&&(s[0][1]=s[i-2][1],s.pop())}_side(s){return s<this._xCut?-1:s>this._xCut?1:0}_intersect(s,i){const n=(this._xCut-s[0])/(i[0]-s[0]);return s[1]+n*(i[1]-s[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}export{K as a,H as p};
