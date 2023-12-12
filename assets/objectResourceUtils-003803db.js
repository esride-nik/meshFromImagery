import{a as so}from"./devEnvironmentUtils-4eab2a99.js";import{g1 as ot,g_ as ft,fn as lo,gL as co,gH as w,qy as y,f9 as uo,_ as Me,gi as vt,jM as ve,k as gt,a5 as c,a6 as at,a9 as ho,cb as mo,dr as po,g3 as fo,aR as vo,p7 as Ge,kK as q,db as me,gJ as go,aW as N,sl as se,f6 as xt,d8 as xo,fv as bt,fk as pe,fa as Tt,d1 as rt,fe as bo,jK as To,an as yo,sm as Co,x as yt,v as wo,q as Ct,s as Mo,pW as Eo,gP as Z,gO as wt,cv as Mt,et as ge,lI as So,m0 as it,k_ as $o,bE as Oo,bQ as Et,bU as _o,bD as St,sn as nt,bP as Ao,bT as Po,fJ as Ro,fo as Lo,fx as zo,fq as st,qY as lt,da as No}from"./index-b516d057.js";import{ac as jo,C as Be,ad as $t,ae as De,e as O,f,d as oe,b as ae,af as re,X as ie,s as z,P as Y,U as Go,ag as Ie,ah as Ot,ai as P,a5 as Fo,Y as Bo,R as Do,aa as ne,aj as Io,ak as _t,o as Ee,J as At,F as Pt,H as fe,r as Ve,j as qe,i as Se,G as Vo,v as qo,A as ee,al as Wo,am as Uo,an as Pe,ao as Yo,ap as b,aq as We,ar as Jo,as as ko,at as Rt,au as Ue,av as ct,W as Zo,aw as le,h as Xo,ax as Lt,ay as zt,y as xe,az as Nt,z as jt,aA as Gt,aB as Ft,c as be,x as Te,aC as Bt,aD as Ko,g as Ho,k as Qo,l as ea,m as ta,aE as oa,n as aa,p as ra,N as Dt,t as de}from"./DefaultTechniqueConfiguration-b4dbe32f.js";import{l as ia,n as na,i as k,o as sa,j as la,k as ca,u as dt,t as da,m as ua}from"./DefaultMaterial_COLOR_GAMMA-101ea40c.js";import{r as Re}from"./resourceUtils-1d03d2fe.js";import{t as Le,e as K}from"./mat3f32-6c416b1c.js";import{c as ha,i as ma}from"./vec2f32-eaf29605.js";import{t as It}from"./NestedMap-1b5db22e.js";import{r as Vt}from"./Version-1f969b2a.js";import{t as pa}from"./requestImageUtils-b142708c.js";import{l as Fe}from"./ViewingMode-5d7d590b.js";import{H as fa}from"./InterleavedLayout-d76b0d59.js";import{o as r,n as qt}from"./interfaces-8918b36f.js";import{a as Wt,e as Ut,r as va}from"./VerticalOffset.glsl-5743f98e.js";import{b as ga,E as Ye,d as xa,c as ba,L as Ta,h as ya}from"./Material-5f4156ac.js";import{S as Je,_ as ke,o as X,d as Ca,A as wa,h as Ma,l as Ea,a as Sa,b as $a,c as Oa}from"./OrderIndependentTransparency-755f7dcc.js";import{I as _a}from"./verticalOffsetUtils-e5214af9.js";import{n as V}from"./symbolColorUtils-3ca646c8.js";import{I as F}from"./RenderState-1d6218ee.js";import{D as ye,G as Aa,_ as Pa,O as ut}from"./enums-bdecffa2.js";import{e as Ra,T as La}from"./Texture-bcb6d63f.js";import{r as h}from"./ShaderTechniqueConfiguration-2502462e.js";function Q(e){if(e==null)return null;const t=e.offset!=null?e.offset:ha,o=e.rotation!=null?e.rotation:0,a=e.scale!=null?e.scale:ma,s=Le(1,0,0,0,1,0,t[0],t[1],1),i=Le(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=Le(a[0],0,0,0,a[1],0,0,0,1),u=K();return ot(u,i,l),ot(u,s,u),u}let za=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},Na=class{constructor(t,o,a){this.name=t,this.lodThreshold=o,this.pivotOffset=a,this.stageResources=new za,this.numberOfVertices=0}};function ja(e,t){const o=e.fragment;switch(o.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case R.None:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case R.View:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case R.WindingOrder:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ft(t.doubleSidedMode);case R.COUNT:}}var R;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(R||(R={}));function Ga({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:s,emissiveFactor:i,occlusionTexture:l}){return e==null&&t==null&&s==null&&(i==null||lo(i,co))&&l==null&&(a==null||a===1)&&(o==null||o===1||o===0)}const Yt=[1,1,.5],Fa=[0,.6,.2],Ba=[0,1,.2];function Jt(e){e.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Da(e){e.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(V.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(V.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(V.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(V.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function kt(e,t){t.hasSymbolColors?(e.include(Da),e.attributes.add(w.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new jo("colorMixMode",o=>ga[o.colorMixMode])),e.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ia(e){e.fragment.code.add(r`
    #define discardOrAdjustAlpha(color) { if (color.a < ${r.float(Be)}) { discard; } }
  `)}let Va=class extends $t{constructor(t,o){super(t,"float",De.Draw,(a,s,i)=>a.setUniform1f(t,o(s,i)))}};function J(e,t){Zt(e,t,new O("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function ii(e,t){Zt(e,t,new Va("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function Zt(e,t,o){const a=e.fragment;switch(t.alphaDiscardMode!==y.Mask&&t.alphaDiscardMode!==y.MaskBlend||a.uniforms.add(o),t.alphaDiscardMode){case y.Blend:return e.include(Ia);case y.Opaque:a.code.add(r`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:a.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:e.fragment.code.add(r`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Xt(e,t){const{vertex:o,fragment:a}=e,s=t.hasColorTexture&&t.alphaDiscardMode!==y.Opaque;switch(t.output){case f.Depth:case f.Shadow:case f.ShadowHighlight:case f.ShadowExcludeHighlight:case f.ObjectAndLayerIdColor:oe(o,t),e.include(ae,t),e.include(re,t),e.include(ie,t),e.include(Fo,t),e.include(Y,t),e.include(Bo,t),Do(e),e.varyings.add("depth","float"),s&&a.uniforms.add(new z("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(J,t),a.code.add(r`
          void main(void) {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===f.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}
          }
        `);break;case f.Normal:{oe(o,t),e.include(ae,t),e.include(Ie,t),e.include(Ot,t),e.include(re,t),e.include(ie,t),s&&a.uniforms.add(new z("tex",l=>l.texture)),t.normalType===P.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===P.Attribute||t.normalType===P.Compressed;o.code.add(r`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Y,t),e.include(J,t),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===P.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case f.Highlight:oe(o,t),e.include(ae,t),e.include(re,t),e.include(ie,t),s&&a.uniforms.add(new z("tex",i=>i.texture)),o.code.add(r`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(Y,t),e.include(J,t),e.include(Go,t),a.code.add(r`
          void main() {
            discardBySlice(vpos);
            ${s?r`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function qa(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(w.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===R.WindingOrder?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==ne.None&&(e.include(Io,t),o.uniforms.add(t.pbrTextureBindType===De.Pass?new z("normalTexture",a=>a.textureNormal):new _t("normalTexture",a=>a.textureNormal)),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}let Wa=class extends $t{constructor(t,o){super(t,"vec2",De.Draw,(a,s,i,l)=>a.setUniform2fv(t,o(s,i,l)))}};const ze=4;function Ua(){const e=new Ee,t=e.fragment;e.include(At);const o=(ze+1)/2,a=1/(2*o*o);return t.include(Pt),t.uniforms.add(new z("depthMap",s=>s.depthTexture),new _t("tex",s=>s.colorTexture),new Wa("blurSize",s=>s.blurSize),new O("projScale",(s,i)=>{const l=uo(i.camera.eye,i.camera.center);return l>5e4?Math.max(0,s.projScale-(l-5e4)):s.projScale}),new fe("nearFar",(s,i)=>i.camera.nearFar)),t.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(r`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${r.int(ze)}; r <= ${r.int(ze)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const Ya=Object.freeze(Object.defineProperty({__proto__:null,build:Ua},Symbol.toStringTag,{value:"Module"}));let Kt=class Ht extends Ve{initializeProgram(t){return new qe(t.rctx,Ht.shader.get().build(),Ye)}initializePipeline(){return Je({colorWrite:ke})}};Kt.shader=new Se(Ya,()=>Me(()=>import("./SSAOBlur.glsl-477413ff.js"),["assets/SSAOBlur.glsl-477413ff.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/interfaces-8918b36f.js","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/devEnvironmentUtils-4eab2a99.js","assets/DefaultMaterial_COLOR_GAMMA-101ea40c.js","assets/Version-1f969b2a.js","assets/resourceUtils-1d03d2fe.js","assets/mat3f32-6c416b1c.js","assets/vec2f32-eaf29605.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/VerticalOffset.glsl-5743f98e.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/symbolColorUtils-3ca646c8.js","assets/RenderState-1d6218ee.js"]));const Ja="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class ka extends qt{constructor(){super(...arguments),this.projScale=1}}let Za=class extends ka{constructor(){super(...arguments),this.intensity=1}},Xa=class extends qt{},Ka=class extends Xa{constructor(){super(...arguments),this.blurSize=vt()}};const ht=16;function Ha(){const e=new Ee,t=e.fragment;return e.include(At),t.include(Pt),e.include(Vo),t.uniforms.add(new O("radius",(o,a)=>Ze(a.camera))),t.code.add(r`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new fe("nearFar",(o,a)=>a.camera.nearFar),new z("normalMap",o=>o.normalTexture),new z("depthMap",o=>o.depthTexture),new O("projScale",o=>o.projScale),new z("rnm",o=>o.noiseTexture),new fe("rnmScale",(o,a)=>ve(mt,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new O("intensity",o=>o.intensity),new fe("screenSize",(o,a)=>ve(mt,a.camera.fullWidth,a.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.code.add(r`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 0.0;
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(ht)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${r.int(ht)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function Ze(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const mt=vt(),Qa=Object.freeze(Object.defineProperty({__proto__:null,build:Ha,getRadius:Ze},Symbol.toStringTag,{value:"Module"}));class $e extends Ve{initializeProgram(t){return new qe(t.rctx,$e.shader.get().build(),Ye)}initializePipeline(){return Je({colorWrite:ke})}}$e.shader=new Se(Qa,()=>Me(()=>import("./SSAO.glsl-721e597e.js"),["assets/SSAO.glsl-721e597e.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/interfaces-8918b36f.js","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/devEnvironmentUtils-4eab2a99.js","assets/DefaultMaterial_COLOR_GAMMA-101ea40c.js","assets/Version-1f969b2a.js","assets/resourceUtils-1d03d2fe.js","assets/mat3f32-6c416b1c.js","assets/vec2f32-eaf29605.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/VerticalOffset.glsl-5743f98e.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/symbolColorUtils-3ca646c8.js","assets/RenderState-1d6218ee.js"]));var L;function di(e=!gt("disable-feature:high-quality-idle"),t=null){const o=new It;return e?(o.set(F.IDLE,L.Antialiasing,t!=="low"),o.set(F.IDLE,L.HighResolutionAtmosphere,t!=="low"),o.set(F.IDLE,L.HighQualityTransparency,!0),o.set(F.IDLE,L.SSAO,!0),o.set(F.IDLE,L.WaterReflection,!0),o.set(F.IDLE,L.PhysicalPixelRendering,!0)):(o.set(F.ANIMATING,L.HighResolutionShadows,!0),o.set(F.INTERACTING,L.HighResolutionShadows,!0)),o.set(F.IDLE,L.HighResolutionShadows,!0),o.set(F.IDLE,L.HighResolutionVoxel,!0),o}(function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"})(L||(L={}));const te=2;let ue=class extends qo{constructor(e){super(e),this._context=null,this._passParameters=new Za,this._drawParameters=new Ka,this.produces=new Map([[ee.SSAO,()=>this._produces()]])}_produces(){return this._enableTime!=null&&this._context!=null}consumes(){return this._produces()?Wo:Uo}initializeRenderContext(e){this._context=e,this.addHandles([mo(()=>{var t;return this.view.qualitySettings.ambientOcclusion||((t=this._context)==null?void 0:t.isFeatureEnabled(L.SSAO))},t=>t?this._enable():this._disable(),po)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=fo(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){var o;if(this._enableTime!=null||!this._context)return;const e=Uint8Array.from(atob(Ja),a=>a.charCodeAt(0)),t=new Ra;t.wrapMode=ye.CLAMP_TO_EDGE,t.pixelFormat=Aa.RGB,t.wrapMode=ye.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new La(this._context.renderContext.rctx,t,e),this._ssaoTechnique==null&&(this._ssaoTechnique=this._context.techniqueRepository.acquire($e)),this._blurTechnique==null&&(this._blurTechnique=this._context.techniqueRepository.acquire(Kt)),this._enableTime=vo(0),(o=this._context)==null||o.requestRender()}renderNode(e,t,o){var _,B;const a=e.bindParameters,s=(_=a.linearDepth)==null?void 0:_.colorTexture,i=(B=o==null?void 0:o.normal)==null?void 0:B.colorTexture;if(this._enableTime==null||this._context==null||s==null||!i)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();this._enableTime===0&&(this._enableTime=e.time);const l=e.rctx,u=a.camera,n=this.view.qualitySettings.fadeDuration,p=n>0?Math.min(n,e.time-this._enableTime)/n:1;this._passParameters.normalTexture=i,this._passParameters.depthTexture=s,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*er/Ze(u)**6*p;const m=u.fullViewport[2],g=u.fullViewport[3],x=Math.round(m/te),v=Math.round(g/te),T=this._context.fbos,C=T.acquire(Pe.RED,m,g);l.bindFramebuffer(C.fbo),l.setViewport(0,0,m,g),l.bindTechnique(this._ssaoTechnique,this._passParameters,a).bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw();const S=l.bindTechnique(this._blurTechnique,this._passParameters,a);l.setViewport(0,0,x,v);const $=T.acquire(Pe.RED,x,v);l.bindFramebuffer($.fbo),this._drawParameters.colorTexture=C.colorTexture,ve(this._drawParameters.blurSize,0,te/g),S.bindDraw(this._drawParameters,a,this._passParameters),l.setViewport(0,0,x,v),l.screen.draw(),C.release();const A=T.acquire(Pe.RED,x,v);return l.bindFramebuffer(A.fbo),l.setViewport(0,0,m,g),l.setClearColor(1,1,1,0),l.clear(Pa.COLOR_BUFFER_BIT),l.setViewport(0,0,x,v),this._drawParameters.colorTexture=$.colorTexture,ve(this._drawParameters.blurSize,te/m,0),S.bindDraw(this._drawParameters,a,this._passParameters),l.screen.draw(),l.setViewport4fv(u.fullViewport),$.release(),p<1&&this._context.requestRender(),A}};c([at({constructOnly:!0})],ue.prototype,"view",void 0),c([at()],ue.prototype,"_context",void 0),ue=c([ho("esri.views.3d.webgl-engine.effects.ssao.SSAO")],ue);const er=.5;function Xe(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new z("ssaoTex",(a,s)=>{var i;return(i=s.ssao)==null?void 0:i.colorTexture})),o.constants.add("blurSizePixelsInverse","float",1/te),o.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ke(e){e.constants.add("ambientBoostFactor","float",Yo)}function He(e){e.uniforms.add(new O("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function Qt(e,t){const o=e.fragment;switch(e.include(Xe,t),t.pbrMode!==b.Disabled&&e.include(We,t),e.include(Jo,t),e.include(ko),o.code.add(r`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===b.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ke(o),He(o),Rt(o),o.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ue(o),o.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case b.Disabled:case b.WaterOnIntegratedMesh:case b.Water:e.include(ct),o.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case b.Normal:case b.Schematic:o.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new Zo("hasFillLights",(a,s)=>s.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new O("lightingSpecularStrength",(a,s)=>s.lighting.mainLight.specularStrength),new O("lightingEnvironmentStrength",(a,s)=>s.lighting.mainLight.environmentStrength)),o.code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==b.Schematic||t.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case b.Terrain:case b.TerrainWithWater:e.include(ct),o.code.add(r`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:ft(t.pbrMode);case b.COUNT:}}function tr(e){e.vertex.uniforms.add(new le("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix!=null?t.colorTextureTransformMatrix:K())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function or(e){e.vertex.uniforms.add(new le("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix!=null?t.normalTextureTransformMatrix:K())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ar(e){e.vertex.uniforms.add(new le("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix!=null?t.emissiveTextureTransformMatrix:K())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function rr(e){e.vertex.uniforms.add(new le("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix!=null?t.occlusionTextureTransformMatrix:K())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ir(e){e.vertex.uniforms.add(new le("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix!=null?t.metallicRoughnessTextureTransformMatrix:K())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ce(e){e.include(Xo),e.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(V.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(V.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(V.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${r.int(V.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(V.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function nr(e){const t=new Ee,{vertex:o,fragment:a,varyings:s}=t;if(oe(o,e),t.include(Lt),s.add("vpos","vec3"),t.include(ie,e),t.include(zt,e),t.include(Wt,e),e.hasColorTextureTransform&&t.include(tr),e.output===f.Color||e.output===f.Alpha){e.hasNormalTextureTransform&&t.include(or),e.hasEmissionTextureTransform&&t.include(ar),e.hasOcclusionTextureTransform&&t.include(rr),e.hasMetallicRoughnessTextureTransform&&t.include(ir),xe(o,e),t.include(Ie,e),t.include(ae,e);const i=e.normalType===P.Attribute||e.normalType===P.Compressed;i&&e.offsetBackfaces&&t.include(Jt),t.include(qa,e),t.include(Ot,e),e.instancedColor&&t.attributes.add(w.INSTANCECOLOR,"vec4"),s.add("vPositionLocal","vec3"),t.include(re,e),t.include(Nt,e),t.include(kt,e),t.include(Ut,e),o.uniforms.add(new jt("externalColor",l=>l.externalColor)),s.add("vcolorExt","vec4"),e.multipassEnabled&&s.add("depth","float"),o.code.add(r`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${r.float(Be)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?r`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?r`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?r`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?r`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?r`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?r`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case f.Alpha:t.include(Y,e),t.include(J,e),t.include(be,e),a.uniforms.add(new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),a.include(Ce),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case f.Color:t.include(Y,e),t.include(Qt,e),t.include(Xe,e),t.include(J,e),t.include(e.instancedDoublePrecision?Gt:Ft,e),t.include(be,e),xe(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),t.include(Bt,e),t.include(We,e),a.include(Ce),t.include(ja,e),Ke(a),He(a),Ue(a),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===P.ScreenDerivative?r`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?r`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?r`normalUV`:"vuv0"});`:r`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?r`normalize(posWorld);`:r`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?r`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===X.Color?r`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Xt,e),t}const sr=Object.freeze(Object.defineProperty({__proto__:null,build:nr},Symbol.toStringTag,{value:"Module"}));let lr=class extends Ko{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ge(Yt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=q.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=me(0,0,0),this.instancedDoublePrecision=!1,this.normalType=P.Attribute,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=me(.2,.2,.2),this.diffuse=me(.8,.8,.8),this.externalColor=go(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=se.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=Ho,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=xa.Occlude,this.isDecoration=!1}},hi=class extends oa{constructor(){super(...arguments),this.origin=N(),this.slicePlaneLocalOrigin=this.origin}},Qe=class eo extends Ve{initializeConfiguration(t,o){o.spherical=t.viewingMode===Fe.Global,o.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?ne.Default:ne.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,eo.shader)}_initializeProgram(t,o){return new qe(t.rctx,o.get().build(this.configuration),Ye)}_convertDepthTestFunction(t){return t===se.Lequal?ut.LEQUAL:ut.LESS}_makePipeline(t,o){const a=this.configuration,s=t===X.NONE,i=t===X.FrontFace;return Je({blending:a.output!==f.Color&&a.output!==f.Alpha||!a.transparent?null:s?Ca:wa(t),culling:cr(a)?Ma(a.cullFace):null,depthTest:{func:Ea(t,this._convertDepthTestFunction(a.customDepthTest))},depthWrite:(s||i)&&a.writeDepth?Sa:null,colorWrite:ke,stencilWrite:a.hasOccludees?Qo:null,stencilTest:a.hasOccludees?o?ea:ta:null,polygonOffset:s||i?null:$a(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function cr(e){return e.cullFace!==q.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Qe.shader=new Se(sr,()=>Me(()=>import("./DefaultMaterial.glsl-2d392ed1.js"),["assets/DefaultMaterial.glsl-2d392ed1.js","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/interfaces-8918b36f.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/symbolColorUtils-3ca646c8.js","assets/mat3f32-6c416b1c.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/devEnvironmentUtils-4eab2a99.js","assets/DefaultMaterial_COLOR_GAMMA-101ea40c.js","assets/Version-1f969b2a.js","assets/resourceUtils-1d03d2fe.js","assets/vec2f32-eaf29605.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/VerticalOffset.glsl-5743f98e.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/RenderState-1d6218ee.js"]));class d extends aa{constructor(){super(...arguments),this.output=f.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=R.None,this.pbrMode=b.Disabled,this.cullFace=q.None,this.transparencyPassType=X.NONE,this.normalType=P.Attribute,this.textureCoordinateType=ne.None,this.customDepthTest=se.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}c([h({count:f.COUNT})],d.prototype,"output",void 0),c([h({count:y.COUNT})],d.prototype,"alphaDiscardMode",void 0),c([h({count:R.COUNT})],d.prototype,"doubleSidedMode",void 0),c([h({count:b.COUNT})],d.prototype,"pbrMode",void 0),c([h({count:q.COUNT})],d.prototype,"cullFace",void 0),c([h({count:X.COUNT})],d.prototype,"transparencyPassType",void 0),c([h({count:P.COUNT})],d.prototype,"normalType",void 0),c([h({count:ne.COUNT})],d.prototype,"textureCoordinateType",void 0),c([h({count:se.COUNT})],d.prototype,"customDepthTest",void 0),c([h()],d.prototype,"spherical",void 0),c([h()],d.prototype,"hasVertexColors",void 0),c([h()],d.prototype,"hasSymbolColors",void 0),c([h()],d.prototype,"hasVerticalOffset",void 0),c([h()],d.prototype,"hasSlicePlane",void 0),c([h()],d.prototype,"hasSliceHighlight",void 0),c([h()],d.prototype,"hasColorTexture",void 0),c([h()],d.prototype,"hasMetallicRoughnessTexture",void 0),c([h()],d.prototype,"hasEmissionTexture",void 0),c([h()],d.prototype,"hasOcclusionTexture",void 0),c([h()],d.prototype,"hasNormalTexture",void 0),c([h()],d.prototype,"hasScreenSizePerspective",void 0),c([h()],d.prototype,"hasVertexTangents",void 0),c([h()],d.prototype,"hasOccludees",void 0),c([h()],d.prototype,"multipassEnabled",void 0),c([h()],d.prototype,"hasModelTransformation",void 0),c([h()],d.prototype,"offsetBackfaces",void 0),c([h()],d.prototype,"vvSize",void 0),c([h()],d.prototype,"vvColor",void 0),c([h()],d.prototype,"receiveShadows",void 0),c([h()],d.prototype,"receiveAmbientOcclusion",void 0),c([h()],d.prototype,"textureAlphaPremultiplied",void 0),c([h()],d.prototype,"instanced",void 0),c([h()],d.prototype,"instancedColor",void 0),c([h()],d.prototype,"objectAndLayerIdColorInstanced",void 0),c([h()],d.prototype,"instancedDoublePrecision",void 0),c([h()],d.prototype,"doublePrecisionRequiresObfuscation",void 0),c([h()],d.prototype,"writeDepth",void 0),c([h()],d.prototype,"transparent",void 0),c([h()],d.prototype,"enableOffset",void 0),c([h()],d.prototype,"cullAboveGround",void 0),c([h()],d.prototype,"snowCover",void 0),c([h()],d.prototype,"hasColorTextureTransform",void 0),c([h()],d.prototype,"hasEmissionTextureTransform",void 0),c([h()],d.prototype,"hasNormalTextureTransform",void 0),c([h()],d.prototype,"hasOcclusionTextureTransform",void 0),c([h()],d.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([h({constValue:!1})],d.prototype,"occlusionPass",void 0),c([h({constValue:!0})],d.prototype,"hasVvInstancing",void 0),c([h({constValue:!1})],d.prototype,"useCustomDTRExponentForWater",void 0),c([h({constValue:!1})],d.prototype,"supportsTextureAtlas",void 0),c([h({constValue:!0})],d.prototype,"useFillLights",void 0);function dr(e){const t=new Ee,{vertex:o,fragment:a,varyings:s}=t;return oe(o,e),t.include(Lt),s.add("vpos","vec3"),t.include(ie,e),t.include(zt,e),t.include(Wt,e),e.output!==f.Color&&e.output!==f.Alpha||(xe(t.vertex,e),t.include(Ie,e),t.include(ae,e),e.offsetBackfaces&&t.include(Jt),e.instancedColor&&t.attributes.add(w.INSTANCECOLOR,"vec4"),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3"),e.multipassEnabled&&s.add("depth","float"),t.include(re,e),t.include(Nt,e),t.include(kt,e),t.include(Ut,e),o.uniforms.add(new jt("externalColor",i=>i.externalColor)),s.add("vcolorExt","vec4"),o.code.add(r`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${r.float(Be)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?r`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===f.Alpha&&(t.include(Y,e),t.include(J,e),t.include(be,e),a.uniforms.add(new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),a.include(Ce),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?r`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===f.Color&&(t.include(Y,e),t.include(Qt,e),t.include(Xe,e),t.include(J,e),t.include(e.instancedDoublePrecision?Gt:Ft,e),t.include(be,e),xe(t.fragment,e),Rt(a),Ke(a),He(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new O("opacity",i=>i.opacity),new O("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&a.uniforms.add(new z("tex",i=>i.texture)),t.include(Bt,e),t.include(We,e),a.include(Ce),Ue(a),a.code.add(r`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?r`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?r`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?r`colorUV`:r`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?r`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?r`albedo = mix(albedo, vec3(1), 0.9);`:r``}
        ${r`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?e.spherical?r`vec3 normalGround = normalize(vpos + localOrigin);`:r`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:r``}
        ${e.pbrMode===b.Normal||e.pbrMode===b.Schematic?r`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?r`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===X.Color?r`fragColor = premultiplyAlpha(fragColor);`:r``}
      }
    `)),t.include(Xt,e),t}const ur=Object.freeze(Object.defineProperty({__proto__:null,build:dr},Symbol.toStringTag,{value:"Module"}));class Oe extends Qe{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=P.Attribute,o.doubleSidedMode=R.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,Oe.shader)}}Oe.shader=new Se(ur,()=>Me(()=>import("./RealisticTree.glsl-32d568c9.js"),["assets/RealisticTree.glsl-32d568c9.js","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/interfaces-8918b36f.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/symbolColorUtils-3ca646c8.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/devEnvironmentUtils-4eab2a99.js","assets/DefaultMaterial_COLOR_GAMMA-101ea40c.js","assets/Version-1f969b2a.js","assets/resourceUtils-1d03d2fe.js","assets/mat3f32-6c416b1c.js","assets/vec2f32-eaf29605.js","assets/NestedMap-1b5db22e.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/VerticalOffset.glsl-5743f98e.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/RenderState-1d6218ee.js"]));let we=class extends ba{constructor(t){super(t,pr),this.supportsEdges=!0,this._configuration=new d,this._vertexBufferLayout=fr(this.parameters)}isVisibleForOutput(t){return t!==f.Shadow&&t!==f.ShadowExcludeHighlight&&t!==f.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:s,vvColor:i}=t,l=t.colorMixMode==="replace",u=t.opacity>0,n=t.externalColor&&t.externalColor[3]>0,p=o||i||s;return a&&p?l||u:a?l?n:u:p?l||u:l?n:u}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?q.None:this.parameters.cullFace,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,t!==f.Color&&t!==f.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=R.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?R.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?R.WindingOrder:R.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=o.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?b.Schematic:b.Normal:b.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Oa,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,a,s,i,l){if(this.parameters.verticalOffset!=null){const u=a.camera;xt(je,o[12],o[13],o[14]);let n=null;switch(a.viewingMode){case Fe.Global:n=bt(pt,je);break;case Fe.Local:n=xo(pt,xr)}let p=0;const m=pe(br,je,u.eye),g=Tt(m),x=rt(m,m,1/g);let v=null;this.parameters.screenSizePerspective&&(v=bo(n,x)),p+=Ta(u,g,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),rt(n,n,p),To(Ne,n,a.transform.inverseRotation),s=pe(vr,s,Ne),i=pe(gr,i,Ne)}ya(t,a,s,i,_a(a.verticalOffset),l)}produces(t,o){return o===f.Color||o===f.Alpha||o===f.Depth||o===f.Normal||o===f.Shadow||o===f.ShadowHighlight||o===f.ShadowExcludeHighlight||o===f.Highlight||o===f.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?ee.TRANSPARENT_MATERIAL:ee.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:ee.OPAQUE_MATERIAL)||t===ee.DRAPED_MATERIAL:!1}createGLMaterial(t){return new hr(t)}createBufferWriter(){return new ra(this._vertexBufferLayout)}},hr=class extends va{constructor(t){super({...t,...t.material.parameters})}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){this._output!==f.Color&&this._output!==f.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const o=this._material.parameters;this.updateTexture(o.textureId);const a=t.camera.viewInverseTransposeMatrix;return xt(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?Oe:Qe,t)}},mr=class extends lr{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const pr=new mr;function fr(e){const t=fa().vec3f(w.POSITION);return e.normalType===P.Compressed?t.vec2i16(w.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(w.NORMAL),e.hasVertexTangents&&t.vec4f(w.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(w.UV0),e.hasVertexColors&&t.vec4u8(w.COLOR),e.hasSymbolColors&&t.vec4u8(w.SYMBOLCOLOR),gt("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(w.OBJECTANDLAYERIDCOLOR),t}const vr=N(),gr=N(),xr=me(0,0,1),pt=N(),Ne=N(),je=N(),br=N(),I=yo.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Tr(e,t){const o=await yr(e,t),a=await Sr(o.textureDefinitions??{},t);let s=0;for(const i in a)if(a.hasOwnProperty(i)){const l=a[i];s+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:a,size:s+Co(o)}}async function yr(e,t){const o=t==null?void 0:t.streamDataRequester;if(o)return Cr(e,o,t);const a=await yt(wo(e,t));if(a.ok===!0)return a.value.data;Ct(a.error),to(a.error)}async function Cr(e,t,o){const a=await yt(t.request(e,"json",o));if(a.ok===!0)return a.value;Ct(a.error),to(a.error.details.url)}function to(e){throw new Mo("",`Request for object resource failed: ${e}`)}function wr(e){const t=e.params,o=t.topology;let a=!0;switch(t.vertexAttributes||(I.warn("Geometry must specify vertex attributes"),a=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const l in t.vertexAttributes){const u=i[l];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(I.warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),a=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(I.warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),a=!1)):(I.warn(`Indexed geometry does not specify face indices for '${l}' attribute`),a=!1)}}else I.warn("Indexed geometries must specify faces"),a=!1;break}default:I.warn(`Unsupported topology '${o}'`),a=!1}e.params.material||(I.warn("Geometry requires material"),a=!1);const s=e.params.vertexAttributes;for(const i in s)s[i].values||(I.warn("Geometries with externally defined attributes are not yet supported"),a=!1);return a}function Mr(e,t){var T,C;const o=new Array,a=new Array,s=new Array,i=new It,l=e.resource,u=Vt.parse(l.version||"1.0","wosr");Or.validate(u);const n=l.model.name,p=l.model.geometries,m=l.materialDefinitions??{},g=e.textures;let x=0;const v=new Map;for(let S=0;S<p.length;S++){const $=p[S];if(!wr($))continue;const A=$r($),_=$.params.vertexAttributes,B=[],W=E=>{if($.params.topology==="PerAttributeArray")return null;const G=$.params.faces;for(const D in G)if(D===E)return G[D].values;return null},U=_[w.POSITION],_e=U.values.length/U.valuesPerElement;for(const E in _){const G=_[E],D=G.values,Ae=W(E)??Eo(_e);B.push([E,new Z(D,Ae,G.valuesPerElement,!0)])}const j=A.texture,M=g&&g[j];if(M&&!v.has(j)){const{image:E,parameters:G}=M,D=new Dt(E,G);a.push(D),v.set(j,D)}const et=v.get(j),io=et?et.id:void 0,ce=A.material;let H=i.get(ce,j);if(H==null){const E=m[ce.substring(ce.lastIndexOf("/")+1)].params;E.transparency===1&&(E.transparency=0);const G=M&&M.alphaChannelUsage,D=E.transparency>0||G==="transparency"||G==="maskAndTransparency",Ae=M?oo(M.alphaChannelUsage):void 0,tt={ambient:Ge(E.diffuse),diffuse:Ge(E.diffuse),opacity:1-(E.transparency||0),transparent:D,textureAlphaMode:Ae,textureAlphaCutoff:.33,textureId:io,initTextureTransparent:!0,doubleSided:!0,cullFace:q.None,colorMixMode:E.externalColorMixMode||"tint",textureAlphaPremultiplied:(M==null?void 0:M.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParameters&&Object.assign(tt,t.materialParameters),H=new we(tt),i.set(ce,j,H)}s.push(H);const no=new wt(H,B);x+=((C=(T=B.find(E=>E[0]===w.POSITION))==null?void 0:T[1])==null?void 0:C.indices.length)??0,o.push(no)}return{engineResources:[{name:n,stageResources:{textures:a,materials:s,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:x,lodThreshold:null}],referenceBoundingBox:Er(o)}}function Er(e){const t=Mt();return e.forEach(o=>{const a=o.boundingInfo;a!=null&&(ge(t,a.bbMin),ge(t,a.bbMax))}),t}async function Sr(e,t){const o=new Array;for(const i in e){const l=e[i],u=l.images[0].data;if(!u){I.warn("Externally referenced texture data is not yet supported");continue}const n=l.encoding+";base64,"+u,p="/textureDefinitions/"+i,m=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",g={noUnpackFlip:!0,wrap:{s:ye.REPEAT,t:ye.REPEAT},preMultiplyAlpha:oo(m)!==y.Opaque},x=t!=null&&t.disableTextures?Promise.resolve(null):pa(n,t);o.push(x.then(v=>({refId:p,image:v,parameters:g,alphaChannelUsage:m})))}const a=await Promise.all(o),s={};for(const i of a)s[i.refId]=i;return s}function oo(e){switch(e){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function $r(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Or=new Vt(1,2,"wosr");async function _r(e,t){var g;const o=ao(so(e));if(o.fileType==="wosr"){const x=await(t.cache?t.cache.loadWOSR(o.url,t):Tr(o.url,t)),{engineResources:v,referenceBoundingBox:T}=Mr(x,t);return{lods:v,referenceBoundingBox:T,isEsriSymbolResource:!1,isWosr:!0}}const a=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):ia(new na(t.streamDataRequester),o.url,t,t.usePBR)),s=(g=a.model.meta)==null?void 0:g.ESRI_proxyEllipsoid,i=a.meta.isEsriSymbolResource&&s!=null&&a.meta.uri.includes("/RealisticTrees/");i&&!a.customMeta.esriTreeRendering&&(a.customMeta.esriTreeRendering=!0,Lr(a,s));const l=!!t.usePBR,u=a.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[...Ba]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...Yt]},n={...t.materialParameters,treeRendering:i},{engineResources:p,referenceBoundingBox:m}=ro(a,u,n,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:p,referenceBoundingBox:m,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1}}function ao(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ro(e,t,o,a){const s=e.model,i=new Array,l=new Map,u=new Map,n=s.lods.length,p=Mt();return s.lods.forEach((m,g)=>{const x=a.skipHighLods===!0&&(n>1&&g===0||n>3&&g===1)||a.skipHighLods===!1&&a.singleLodIndex!=null&&g!==a.singleLodIndex;if(x&&g!==0)return;const v=new Na(m.name,m.lodThreshold,[0,0,0]);m.parts.forEach(T=>{const C=x?new we({}):Ar(s,T,v,t,o,l,u),{geometry:S,vertexCount:$}=Pr(T,C??new we({})),A=S.boundingInfo;A!=null&&g===0&&(ge(p,A.bbMin),ge(p,A.bbMax)),C!=null&&(v.stageResources.geometries.push(S),v.numberOfVertices+=$)}),x||i.push(v)}),{engineResources:i,referenceBoundingBox:p}}function Ar(e,t,o,a,s,i,l){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),n=e.materials.get(t.material),p=t.attributes.texCoord0!=null,m=t.attributes.normal!=null;if(n==null)return null;const g=Rr(n.alphaMode);if(!i.has(u)){if(p){const W=(U,_e=!1)=>{if(U!=null&&!l.has(U)){const j=e.textures.get(U);if(j!=null){const M=j.data;l.set(U,new Dt(Re(M)?M.data:M,{...j.parameters,preMultiplyAlpha:!Re(M)&&_e,encoding:Re(M)&&M.encoding!=null?M.encoding:void 0}))}}};W(n.textureColor,g!==y.Opaque),W(n.textureNormal),W(n.textureOcclusion),W(n.textureEmissive),W(n.textureMetallicRoughness)}const v=n.color[0]**(1/k),T=n.color[1]**(1/k),C=n.color[2]**(1/k),S=n.emissiveFactor[0]**(1/k),$=n.emissiveFactor[1]**(1/k),A=n.emissiveFactor[2]**(1/k),_=n.textureColor!=null&&p?l.get(n.textureColor):null,B=Ga({normalTexture:n.textureNormal,metallicRoughnessTexture:n.textureMetallicRoughness,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,emissiveTexture:n.textureEmissive,emissiveFactor:n.emissiveFactor,occlusionTexture:n.textureOcclusion});i.set(u,new we({...a,transparent:g===y.Blend,customDepthTest:se.Lequal,textureAlphaMode:g,textureAlphaCutoff:n.alphaCutoff,diffuse:[v,T,C],ambient:[v,T,C],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?q.None:q.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?P.Attribute:P.ScreenDerivative,castShadows:!0,textureId:_!=null?_.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:n.textureNormal!=null&&p?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:_!=null&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:n.textureOcclusion!=null&&p?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:n.textureEmissive!=null&&p?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:n.textureMetallicRoughness!=null&&p?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[S,$,A],mrrFactors:B?[...Fa]:[n.metallicFactor,n.roughnessFactor,a.mrrFactors[2]],isSchematic:B,colorTextureTransformMatrix:Q(n.colorTextureTransform),normalTextureTransformMatrix:Q(n.normalTextureTransform),occlusionTextureTransformMatrix:Q(n.occlusionTextureTransform),emissiveTextureTransformMatrix:Q(n.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:Q(n.metallicRoughnessTextureTransform),...s}))}const x=i.get(u);if(o.stageResources.materials.push(x),p){const v=T=>{T!=null&&o.stageResources.textures.push(l.get(T))};v(n.textureColor),v(n.textureNormal),v(n.textureOcclusion),v(n.textureEmissive),v(n.textureMetallicRoughness)}return x}function Pr(e,t){const o=e.attributes.position.count,a=sa(e.indices||o,e.primitiveType),s=de(3*o),{typedBuffer:i,typedBufferStride:l}=e.attributes.position;So(s,i,e.transform,3,l);const u=[[w.POSITION,new Z(s,a,3,!0)]];if(e.attributes.normal!=null){const n=de(3*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.normal;it(he,e.transform),$o(n,p,he,3,m),u.push([w.NORMAL,new Z(n,a,3,!0)])}if(e.attributes.tangent!=null){const n=de(4*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.tangent;it(he,e.transform),la(n,p,he,4,m),u.push([w.TANGENT,new Z(n,a,4,!0)])}if(e.attributes.texCoord0!=null){const n=de(2*o),{typedBuffer:p,typedBufferStride:m}=e.attributes.texCoord0;ca(n,p,2,m),u.push([w.UV0,new Z(n,a,2,!0)])}if(e.attributes.color!=null){const n=new Uint8Array(4*o);e.attributes.color.elementCount===4?e.attributes.color instanceof Oo?dt(n,e.attributes.color,255):e.attributes.color instanceof Et?da(n,e.attributes.color):e.attributes.color instanceof _o&&dt(n,e.attributes.color,1/256):(n.fill(255),e.attributes.color instanceof St?nt(n,e.attributes.color,255,4):e.attributes.color instanceof Ao?ua(n,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof Po&&nt(n,e.attributes.color,1/256,4)),u.push([w.COLOR,new Z(n,a,4,!0)])}return{geometry:new wt(t,u),vertexCount:o}}const he=Ro();function Rr(e){switch(e){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function Lr(e,t){for(let o=0;o<e.model.lods.length;++o){const a=e.model.lods[o];for(const s of a.parts){const i=s.attributes.normal;if(i==null)return;const l=s.attributes.position,u=l.count,n=N(),p=N(),m=N(),g=new Uint8Array(4*u),x=new Float64Array(3*u),v=Lo(zo(),s.transform);let T=0,C=0;for(let S=0;S<u;S++){l.getVec(S,p),i.getVec(S,n),st(p,p,s.transform),pe(m,p,t.center),lt(m,m,t.radius);const $=m[2],A=Tt(m),_=Math.min(.45+.55*A*A,1);lt(m,m,t.radius),v!==null&&st(m,m,v),bt(m,m),o+1!==e.model.lods.length&&e.model.lods.length>1&&No(m,m,n,$>-1?.2:Math.min(-4*$-3.8,1)),x[T]=m[0],x[T+1]=m[1],x[T+2]=m[2],T+=3,g[C]=255*_,g[C+1]=255*_,g[C+2]=255*_,g[C+3]=255,C+=4}s.attributes.normal=new St(x),s.attributes.color=new Et(g)}}}const gi=Object.freeze(Object.defineProperty({__proto__:null,fetch:_r,gltfToEngineResources:ro,parseUrl:ao},Symbol.toStringTag,{value:"Module"}));export{Tr as A,nr as H,dr as I,hi as N,_r as X,Wa as a,Ga as b,Ia as c,Ze as d,we as e,Ha as f,Q as g,ja as h,Ke as i,He as j,R as k,Da as l,Ce as m,Yt as n,L as o,Qt as p,Va as q,Fa as r,ii as s,Xe as t,Ua as u,qa as v,di as w,gi as x,ue as y};
