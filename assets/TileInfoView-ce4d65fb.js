import{cj as R,eN as z}from"./index-b516d057.js";import{e as T}from"./TileKey-4b1303ff.js";let _=class{constructor(){this.spans=[]}acquire(t){this.lodInfo=t}release(){this.lodInfo=null,this.spans.length=0}forEach(t,o){const{spans:l,lodInfo:e}=this,{level:s}=e;if(l.length!==0)for(const{row:a,colFrom:i,colTo:r}of l)for(let n=i;n<=r;n++)t.call(o,s,a,e.normalizeCol(n),e.getWorldForColumn(n))}};_.pool=new R(_);function C(d,t){return[d,t]}function S(d,t,o){return d[0]=t,d[1]=o,d}function L(d,t,o,l,e){return d[0]=t,d[1]=o,d[2]=l,d[3]=e,d}const F=new T("0/0/0/0");let X=class I{static create(t,o,l=null){const e=z(t.spatialReference),s=o.origin||C(t.origin.x,t.origin.y),a=C(t.size[0]*o.resolution,t.size[1]*o.resolution),i=C(-1/0,-1/0),r=C(1/0,1/0),n=C(1/0,1/0);l!=null&&(S(i,Math.max(0,Math.floor((l.xmin-s[0])/a[0])),Math.max(0,Math.floor((s[1]-l.ymax)/a[1]))),S(r,Math.max(0,Math.floor((l.xmax-s[0])/a[0])),Math.max(0,Math.floor((s[1]-l.ymin)/a[1]))),S(n,r[0]-i[0]+1,r[1]-i[1]+1));const{cols:h,rows:f}=o;let w,p,y,m;return!l&&h&&f&&(S(i,h[0],f[0]),S(r,h[1],f[1]),S(n,h[1]-h[0]+1,f[1]-f[0]+1)),t.isWrappable?(w=C(Math.ceil(Math.round((e.valid[1]-e.valid[0])/o.resolution)/t.size[0]),n[1]),p=C(Math.floor((e.origin[0]-s[0])/a[0]),i[1]),y=C(w[0]+p[0]-1,r[1]),m=!0):(p=i,y=r,w=n,m=!1),new I(o.level,o.resolution,o.scale,s,i,r,n,a,p,y,w,m)}constructor(t,o,l,e,s,a,i,r,n,h,f,w){this.level=t,this.resolution=o,this.scale=l,this.origin=e,this.first=s,this.last=a,this.size=i,this.norm=r,this.worldStart=n,this.worldEnd=h,this.worldSize=f,this.wrap=w}normalizeCol(t){if(!this.wrap)return t;const o=this.worldSize[0];return t<0?o-1-Math.abs((t+1)%o):t%o}denormalizeCol(t,o){return this.wrap?this.worldSize[0]*o+t:t}getWorldForColumn(t){return this.wrap?Math.floor(t/this.worldSize[0]):0}getFirstColumnForWorld(t){return t*this.worldSize[0]+this.first[0]}getLastColumnForWorld(t){return t*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(t){return(t-this.origin[0])/this.norm[0]}getXForColumn(t){return this.origin[0]+t*this.norm[0]}getRowForY(t){return(this.origin[1]-t)/this.norm[1]}getYForRow(t){return this.origin[1]-t*this.norm[1]}getTileBounds(t,o,l=!1){F.set(o);const e=l?F.col:this.denormalizeCol(F.col,F.world),s=F.row;return L(t,this.getXForColumn(e),this.getYForRow(s+1),this.getXForColumn(e+1),this.getYForRow(s)),t}getTileCoords(t,o,l=!1){F.set(o);const e=l?F.col:this.denormalizeCol(F.col,F.world);return Array.isArray(t)?S(t,this.getXForColumn(e),this.getYForRow(F.row)):(t.x=this.getXForColumn(e),t.y=this.getYForRow(F.row)),t}};class B{constructor(t,o,l){this.row=t,this.colFrom=o,this.colTo=l}}const c=new T("0/0/0/0");class x{static create(t,o){t[1]>o[1]&&([t,o]=[o,t]);const[l,e]=t,[s,a]=o,i=s-l,r=a-e,n=r!==0?i/r:0,h=(Math.ceil(e)-e)*n,f=(Math.floor(e)-e)*n;return new x(l,Math.floor(e),Math.ceil(a),n,i<0?h:f,i<0?f:h,i<0?s:l,i<0?l:s)}constructor(t,o,l,e,s,a,i,r){this.x=t,this.ymin=o,this.ymax=l,this.invM=e,this.leftAdjust=s,this.rightAdjust=a,this.leftBound=i,this.rightBound=r}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}}const v=[[0,0],[0,0],[0,0],[0,0]],Y=1e-6;class j{constructor(t,o=null,l=t.lods[0].level,e=t.lods[t.lods.length-1].level){this.tileInfo=t,this.fullExtent=o,this.scales=[],this._infoByScale={},this._infoByLevel={};const s=t.lods.filter(i=>i.level>=l&&i.level<=e);this.minScale=s[0].scale,this.maxScale=s[s.length-1].scale;const a=this._lodInfos=s.map(i=>X.create(t,i,o));s.forEach((i,r)=>{this._infoByLevel[i.level]=a[r],this._infoByScale[i.scale]=a[r],this.scales[r]=i.scale},this),this._wrap=t.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(t){return this._infoByLevel[typeof t=="number"?t:t.level]}getTileBounds(t,o,l=!1){c.set(o);const e=this._infoByLevel[c.level];return e?e.getTileBounds(t,c,l):t}getTileCoords(t,o,l=!1){c.set(o);const e=this._infoByLevel[c.level];return e?e.getTileCoords(t,c,l):t}getTileCoverage(t,o=192,l=!0,e="closest"){if(!l&&(t.scale>this.minScale||t.scale<this.maxScale))return null;const s=e==="closest"?this.getClosestInfoForScale(t.scale):this.getSmallestInfoForScale(t.scale),a=_.pool.acquire(s),i=this._wrap;let r,n,h,f=1/0,w=-1/0;const p=a.spans;v[0][0]=v[0][1]=v[1][1]=v[3][0]=-o,v[1][0]=v[2][0]=t.size[0]+o,v[2][1]=v[3][1]=t.size[1]+o;for(const u of v)t.toMap(u,u),u[0]=s.getColumnForX(u[0]),u[1]=s.getRowForY(u[1]);const y=[];let m=3;for(let u=0;u<4;u++){if(v[u][1]===v[m][1]){m=u;continue}const g=x.create(v[u],v[m]);f=Math.min(g.ymin,f),w=Math.max(g.ymax,w),y[g.ymin]===void 0&&(y[g.ymin]=[]),y[g.ymin].push(g),m=u}if(f==null||w==null||w-f>100)return null;let M=[];for(r=f;r<w;){y[r]!=null&&(M=M.concat(y[r])),n=1/0,h=-1/0;for(let u=M.length-1;u>=0;u--){const g=M[u];n=Math.min(n,g.getLeftCol()),h=Math.max(h,g.getRightCol())}if(n=Math.floor(n),h=Math.floor(h),r>=s.first[1]&&r<=s.last[1])if(i)if(s.size[0]<s.worldSize[0]){const u=Math.floor(h/s.worldSize[0]);for(let g=Math.floor(n/s.worldSize[0]);g<=u;g++)p.push(new B(r,Math.max(s.getFirstColumnForWorld(g),n),Math.min(s.getLastColumnForWorld(g),h)))}else p.push(new B(r,n,h));else n>s.last[0]||h<s.first[0]||(n=Math.max(n,s.first[0]),h=Math.min(h,s.last[0]),p.push(new B(r,n,h)));r+=1;for(let u=M.length-1;u>=0;u--){const g=M[u];g.ymax>=r?g.incrRow():M.splice(u,1)}}return a}getTileParentId(t){c.set(t);const o=this._infoByLevel[c.level],l=this._lodInfos.indexOf(o)-1;return l<0?null:(this._getTileIdAtLOD(c,this._lodInfos[l],c),c.id)}getTileResolution(t){const o=this._infoByLevel[typeof t=="object"?t.level:t];return o?o.resolution:-1}getTileScale(t){const o=this._infoByLevel[t.level];return o?o.scale:-1}intersects(t,o){c.set(o);const l=this._infoByLevel[c.level],e=t.lodInfo;if(e.resolution>l.resolution){this._getTileIdAtLOD(c,e,c);const a=e.denormalizeCol(c.col,c.world);for(const i of t.spans)if(i.row===c.row&&i.colFrom<=a&&i.colTo>=a)return!0}if(e.resolution<l.resolution){const[a,i,r,n]=t.spans.reduce((m,M)=>(m[0]=Math.min(m[0],M.row),m[1]=Math.max(m[1],M.row),m[2]=Math.min(m[2],M.colFrom),m[3]=Math.max(m[3],M.colTo),m),[1/0,-1/0,1/0,-1/0]),h=l.denormalizeCol(c.col,c.world),f=e.getColumnForX(l.getXForColumn(h)),w=e.getRowForY(l.getYForRow(c.row)),p=e.getColumnForX(l.getXForColumn(h+1))-1,y=e.getRowForY(l.getYForRow(c.row+1))-1;return!(f>n||p<r||w>i||y<a)}const s=e.denormalizeCol(c.col,c.world);return t.spans.some(a=>a.row===c.row&&a.colFrom<=s&&a.colTo>=s)}normalizeBounds(t,o,l){if(t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=o[3],this._wrap){const e=z(this.tileInfo.spatialReference),s=-l*(e.valid[1]-e.valid[0]);t[0]+=s,t[2]+=s}return t}getSmallestInfoForScale(t){const o=this.scales;if(this._infoByScale[t])return this._infoByScale[t];if(t>o[0])return this._infoByScale[o[0]];for(let l=1;l<o.length-1;l++)if(t>o[l]+Y)return this._infoByScale[o[l-1]];return this._infoByScale[o[o.length-1]]}getClosestInfoForScale(t){const o=this.scales;return this._infoByScale[t]||(t=o.reduce((l,e)=>Math.abs(e-t)<Math.abs(l-t)?e:l,o[0])),this._infoByScale[t]}scaleToLevel(t){const o=this.scales;if(this._infoByScale[t])return this._infoByScale[t].level;for(let l=o.length-1;l>=0;l--)if(t<o[l])return l===o.length-1?this._infoByScale[o[o.length-1]].level:this._infoByScale[o[l]].level+(o[l]-t)/(o[l]-o[l+1]);return this._infoByScale[o[0]].level}scaleToZoom(t){return this.tileInfo.scaleToZoom(t)}_getTileIdAtLOD(t,o,l){const e=this._infoByLevel[l.level];return t.set(l),o.resolution<e.resolution?null:(o.resolution===e.resolution||(t.level=o.level,t.col=Math.floor(l.col*e.resolution/o.resolution+.01),t.row=Math.floor(l.row*e.resolution/o.resolution+.01)),t)}}export{j as h,_ as l};