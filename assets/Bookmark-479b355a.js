import{dZ as y,ae as h,ba as c,an as u,s as d,X as v,a5 as n,a6 as a,eU as g,dX as b,a7 as x,ad as f,a9 as $}from"./index-b516d057.js";import{l as w}from"./Viewpoint-f83262d0.js";import{p}from"./SlideThumbnail-a64b3c3c.js";var l;let e=l=class extends y(h){constructor(t){super(t),this.name=null,this.thumbnail=new p,this.timeExtent=null}castThumbnail(t){return typeof t=="string"?new p({url:t}):c(p,t)}set viewpoint(t){const{targetGeometry:o,scale:r}=t;o!=null&&o.type==="point"&&r==null&&u.getLogger(this).warn("Bookmark.viewpoint should include 'scale' when its targetGeometry is a point.",t),this._set("viewpoint",t)}readViewpoint(t,o){const{extent:r,viewpoint:i}=o;return w.fromJSON(i||{targetGeometry:r})}writeViewpoint(t,o,r,i){if(!t)return;const{targetGeometry:s}=t;if(s==null||s.type==="extent")s!=null&&(o.extent=s.toJSON()),o[r]=t.toJSON();else{const m="Bookmark.viewpoint cannot be written to JSON when the viewpoint's targetGeometry is not an extent.";i!=null&&i.messages?i.messages.push(new d("property:unsupported",m)):u.getLogger(this).error(m)}}clone(){return new l(v({name:this.name,thumbnail:this.thumbnail,timeExtent:this.timeExtent,viewpoint:this.viewpoint}))}};n([a({type:String,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"name",void 0),n([a({type:p,json:{write:{overridePolicy:t=>({enabled:!(!t||!t.url)})}}})],e.prototype,"thumbnail",void 0),n([g("thumbnail")],e.prototype,"castThumbnail",null),n([a({type:b,json:{write:!0}})],e.prototype,"timeExtent",void 0),n([a({type:w,nonNullable:!0,json:{write:!0}})],e.prototype,"viewpoint",null),n([x("viewpoint",["extent","viewpoint"])],e.prototype,"readViewpoint",null),n([f("viewpoint")],e.prototype,"writeViewpoint",null),e=l=n([$("esri.webmap.Bookmark")],e);const S=e;export{S as f};