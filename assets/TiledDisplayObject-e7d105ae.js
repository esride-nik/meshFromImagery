import{g0 as a,g1 as l}from"./index-b516d057.js";import{i as u}from"./DisplayObject-9a6e3923.js";import{e as g}from"./TileKey-4b1303ff.js";let f=class extends u{constructor(t,s,i,h,e,r,o=e,n=r){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new g(t),this.resolution=s,this.x=i,this.y=h,this.width=e,this.height=r,this.rangeX=o,this.rangeY=n}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(t){const s=this.resolution/(t.resolution*t.pixelRatio),i=this.transforms.tileMat3,[h,e]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.width/this.rangeX*s,o=this.height/this.rangeY*s;a(i,r,0,0,0,o,0,h,e,1),l(this.transforms.dvs,t.displayViewMat3,i)}};export{f as r};