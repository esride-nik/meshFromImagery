import{gQ as u,aW as i,gy as g,d8 as R,gg as S,gR as j,gS as m}from"./index-b516d057.js";import{e as l}from"./dehydratedPoint-5a1dfed5.js";import{d as x}from"./elevationInfoUtils-be36d866.js";function h(r,o,n,e){n.projectToRenderScreen(r,d),n.projectToRenderScreen(o,f),S(e,f,d),j(e,e)}function y(r,o,n,e,s=i()){const c=R(p,r);return c[2]=x(e,c,o,n)||0,e.renderCoordsHelper.toRenderCoords(c,o,s),s}function H(r,o,n,e){return e.type==="2d"?(t.x=r[0],t.y=r[1],t.spatialReference=o,e.toScreen(t)):(y(r,o,n,e,p),e.state.camera.projectToScreen(p,a),u(a[0],a[1]))}const t=l(0,0,0,null),p=i(),d=m(),f=m(),a=g();export{y as f,h as p,H as u};
