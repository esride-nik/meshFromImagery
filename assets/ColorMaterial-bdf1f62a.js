import{gH as d,jM as te,n3 as Pe,fZ as Se,gi as Ae,_ as we,a5 as p,nn as le,c9 as et,f6 as Z,fq as B,fv as ce,fk as tt,d1 as V,fo as ot,d8 as L,fa as H,f9 as it,jK as at,fe as rt,b0 as st,d2 as J,bj as nt,kJ as lt,aW as F,a$ as oe,fJ as Te,fx as ct,db as dt,gJ as de,lf as pt,k as ze,bQ as ut,kK as ie}from"./index-b516d057.js";import{d as Ee,y as ft,z as $,e as M,B as ht,V as _e,W as vt,c as De,s as $e,o as je,P as Ie,T as gt,h as Re,X as Ve,Y as Le,H as pe,f as v,C as G,g as ue,Z as mt,_ as Ot,i as Fe,r as Ue,j as Ne,n as Me,A as z,a as bt,$ as Ct,D as xt,a0 as yt,a1 as Pt,a2 as fe,a3 as he,a4 as St,b as At,a5 as wt,R as Tt,a6 as zt,U as Et,k as _t,l as Dt,m as $t,p as jt,w as It,a7 as Rt}from"./DefaultTechniqueConfiguration-b4dbe32f.js";import{H as Be}from"./InterleavedLayout-d76b0d59.js";import{s as He,f as Vt,o as Ge,t as Lt,r as Ft,l as Ut,e as Nt}from"./VerticalOffset.glsl-5743f98e.js";import{o as n}from"./interfaces-8918b36f.js";import{E as We,c as Mt,s as Bt,f as Ht,a as ve,L as Gt,d as Wt}from"./Material-5f4156ac.js";import{M as kt,N as ge,F as qt}from"./RenderGeometry-5dbc1699.js";import{o as E,s as Xt,a as ke,S as qe,A as Xe,_ as Ye,d as Yt,h as Zt,l as Jt,b as Qt,c as Kt}from"./OrderIndependentTransparency-755f7dcc.js";import{l as eo}from"./ViewingMode-5d7d590b.js";import{R as me,O as to,E as Oe}from"./enums-bdecffa2.js";import{r as u}from"./ShaderTechniqueConfiguration-2502462e.js";function oo(t){return t instanceof Float32Array&&t.length>=16}function io(t){return Array.isArray(t)&&t.length>=16}function ao(t){return oo(t)||io(t)}const Ze=.5;function ro(t,e){t.include(He),t.attributes.add(d.POSITION,"vec3"),t.attributes.add(d.NORMAL,"vec3"),t.attributes.add(d.AUXPOS1,"vec4");const o=t.vertex;Ee(o,e),ft(o,e),o.uniforms.add(new $("viewport",(i,a)=>a.camera.fullViewport),new M("polygonOffset",i=>i.shaderPolygonOffset),new M("cameraGroundRelative",(i,a)=>a.camera.aboveGround?1:-1)),e.hasVerticalOffset&&Vt(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(n`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(n`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.multipassEnabled?n.float(0):n`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||ht(o),e.draped||(o.uniforms.add(new M("perDistancePixelRatio",(i,a)=>Math.tan(a.camera.fovY/2)/(a.camera.fullViewport[2]/2))),o.code.add(n`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${n.float(Ze)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),e.screenCenterOffsetUnitsEnabled&&_e(o),e.hasScreenSizePerspective&&Ge(o),o.code.add(n`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offset of labels with respect to objects.
      // It also pulls the label towards the viewer so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?n`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":n`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}let so=class{constructor(){this.factor=new be,this.factorAlignment=new be}};class be{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function ae(t){t.uniforms.add(new vt("alignPixelEnabled",(e,o)=>o.alignPixelEnabled)),t.code.add(n`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(n`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function no(t,e){const{vertex:o,fragment:i}=t;o.include(ae),e.multipassEnabled&&(o.include(kt),t.varyings.add("depth","float")),o.code.add(n`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.multipassEnabled?n`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.multipassEnabled?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),t.include(De,e),i.code.add(n`
  void main() {
    fragColor = vec4(1);
    ${e.multipassEnabled?n`
        if(terrainDepthTest(depth)) {
          fragColor.g = 0.5;
        }`:""}
  }
  `)}function lo(t){t.vertex.uniforms.add(new M("renderTransparentlyOccludedHUD",(e,o)=>o.hudRenderStyle===ge.Occluded?1:o.hudRenderStyle===ge.NotOccluded?0:.75),new $("viewport",(e,o)=>o.camera.fullViewport),new $e("hudVisibilityTexture",(e,o)=>{var i;return(i=o.hudVisibility)==null?void 0:i.colorTexture})),t.vertex.include(ae),t.vertex.code.add(n`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function co(t){const e=new je,o=t.signedDistanceFieldEnabled;if(e.include(ro,t),e.include(Ie,t),t.occlusionPass)return e.include(no,t),e;const{vertex:i,fragment:a}=e;e.include(He),a.include(gt),a.include(Re),e.include(Ve,t),e.include(Le,t),e.include(lo),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),e.varyings.add("voccluded","float"),i.uniforms.add(new $("viewport",(r,g)=>g.camera.fullViewport),new pe("screenOffset",(r,g)=>te(Je,2*r.screenOffset[0]*g.camera.pixelRatio,2*r.screenOffset[1]*g.camera.pixelRatio)),new pe("anchorPosition",r=>W(r)),new $("materialColor",r=>r.color)),_e(i),o&&(i.uniforms.add(new $("outlineColor",r=>r.outlineColor)),a.uniforms.add(new $("outlineColor",r=>Ce(r)?r.outlineColor:Pe),new M("outlineSize",r=>Ce(r)?r.outlineSize:0))),t.pixelSnappingEnabled&&i.include(ae),t.hasScreenSizePerspective&&(Lt(i),Ge(i)),t.debugDrawLabelBorder&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UV0,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),i.code.add(n`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?n`
            inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
            vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:n`
            inputSize = size;
            vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(featureAttribute).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);
      bool visible = testHUDVisibility(posProj);
      voccluded = visible ? 0.0 : 1.0;
    `);const s=n`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`,f=t.pixelSnappingEnabled?o?n`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:n`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:n`posProj += quadOffset;`;i.code.add(n`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${s}
    ${t.vvColor?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===v.ObjectAndLayerIdColor?n`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${n.float(G)};
    ${o?`alphaDiscard = alphaDiscard && outlineColor.a < ${n.float(G)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?n`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),a.uniforms.add(new $e("tex",r=>r.texture));const l=t.debugDrawLabelBorder?n`(isBorder > 0.0 ? 0.0 : ${n.float(ue)})`:n.float(ue),h=n`
    ${t.debugDrawLabelBorder?n`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${t.sampleSignedDistanceFieldTexelCenter?n`
      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;
      `:n`
      vec2 samplePos = vtc;
      `}

    ${o?n`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${l} ||
          fillPixelColor.a + outlinePixelColor.a < ${n.float(G)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${l}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:n`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${l}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?n`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;switch(t.output){case v.Color:a.code.add(n`
        void main() {
          ${h}
          ${t.transparencyPassType===E.FrontFace?"fragColor.rgb /= fragColor.a;":""}
        }`);break;case v.Alpha:a.code.add(n`
        void main() {
          ${h}
          fragColor = vec4(fragColor.a);
        }`);break;case v.ObjectAndLayerIdColor:a.code.add(n`
        void main() {
          ${h}
          outputObjectAndLayerIdColor();
        }`);break;case v.Highlight:a.constants.add("occludedHighlightFlag","vec4",mt).add("unoccludedHighlightFlag","vec4",Ot),a.code.add(n`
        void main() {
          ${h}
          if (voccluded == 1.0) {
            fragColor = occludedHighlightFlag;
          } else {
            fragColor = unoccludedHighlightFlag;
          }
        }`)}return e}function Ce(t){return t.outlineColor[3]>0&&t.outlineSize>0}function W(t,e=Je){return t.textureIsSignedDistanceField?po(t.anchorPosition,t.distanceFieldBoundingBox,e):Se(e,t.anchorPosition),e}function po(t,e,o){e!=null?te(o,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):te(o,0,0)}const Je=Ae(),uo=Object.freeze(Object.defineProperty({__proto__:null,build:co,calculateAnchorPosForRendering:W},Symbol.toStringTag,{value:"Module"}));class k extends Ue{initializeConfiguration(e,o){o.spherical=e.viewingMode===eo.Global}initializeProgram(e){return new Ne(e.rctx,k.shader.get().build(this.configuration),We)}initializePipeline(){const e=this.configuration.transparencyPassType,o=this.configuration,i=e===E.NONE,a=e===E.FrontFace,s=this.configuration.hasPolygonOffset?fo:null,f=(i||a)&&o.output!==v.Highlight&&(o.depthEnabled||o.occlusionPass)?ke:null;return qe({blending:o.output===v.Color||o.output===v.Alpha||o.output===v.Highlight?i?ho:Xe(e):null,depthTest:{func:to.LEQUAL},depthWrite:f,colorWrite:Ye,polygonOffset:s})}get primitiveType(){return this.configuration.occlusionPass?Oe.POINTS:Oe.TRIANGLES}}k.shader=new Fe(uo,()=>we(()=>import("./HUDMaterial.glsl-104b3f06.js"),["assets/HUDMaterial.glsl-104b3f06.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/interfaces-8918b36f.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/RenderGeometry-5dbc1699.js","assets/vec3f32-bac7ea57.js","assets/ElevationProvider-abb53936.js","assets/dehydratedPoint-5a1dfed5.js","assets/hydratedFeatures-2365c307.js","assets/weather-2eb64924.js","assets/RenderState-1d6218ee.js","assets/NestedMap-1b5db22e.js","assets/frustum-f9d53cdf.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d19dab8d.js","assets/Octree-7cea9440.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/floatRGBA-ca990bbb.js","assets/Intersector-2e1d9db3.js","assets/Intersector-fa865806.js","assets/boundedPlane-1da2f094.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/glUtil-ce5ee52b.js","assets/Scheduler-ff5943a4.js","assets/signal-51ed66f5.js","assets/debugFlags-9a30f077.js","assets/VerticalOffset.glsl-5743f98e.js"]));const fo={factor:0,units:-4},ho=Xt(me.ONE,me.ONE_MINUS_SRC_ALPHA);class m extends Me{constructor(){super(...arguments),this.output=v.Color,this.transparencyPassType=E.NONE,this.screenCenterOffsetUnitsEnabled=!1,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}p([u({count:v.COUNT})],m.prototype,"output",void 0),p([u({count:E.COUNT})],m.prototype,"transparencyPassType",void 0),p([u()],m.prototype,"screenCenterOffsetUnitsEnabled",void 0),p([u()],m.prototype,"spherical",void 0),p([u()],m.prototype,"occlusionTestEnabled",void 0),p([u()],m.prototype,"signedDistanceFieldEnabled",void 0),p([u()],m.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),p([u()],m.prototype,"vvSize",void 0),p([u()],m.prototype,"vvColor",void 0),p([u()],m.prototype,"hasVerticalOffset",void 0),p([u()],m.prototype,"hasScreenSizePerspective",void 0),p([u()],m.prototype,"debugDrawLabelBorder",void 0),p([u()],m.prototype,"hasSlicePlane",void 0),p([u()],m.prototype,"hasPolygonOffset",void 0),p([u()],m.prototype,"depthEnabled",void 0),p([u()],m.prototype,"pixelSnappingEnabled",void 0),p([u()],m.prototype,"draped",void 0),p([u()],m.prototype,"multipassEnabled",void 0),p([u()],m.prototype,"cullAboveGround",void 0),p([u()],m.prototype,"occlusionPass",void 0),p([u()],m.prototype,"objectAndLayerIdColorInstanced",void 0),p([u({constValue:!0})],m.prototype,"hasSliceInVertexProgram",void 0),p([u({constValue:!1})],m.prototype,"hasVvInstancing",void 0);class ko extends Mt{constructor(e){super(e,new wo),this._configuration=new m}getConfiguration(e,o){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=o.slot===z.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===v.Color||e===v.Alpha),e===v.Color&&(this._configuration.debugDrawLabelBorder=!!bt.LABELS_SHOW_BORDER),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration}intersect(e,o,i,a,s,f){if(!(i.options.selectionMode&&i.options.hud&&e.visible&&i.point))return;const l=this.parameters,h=i.point,r=i.camera;let{scaleX:g,scaleY:b}=this._getScreenScale(e);g*=r.pixelRatio,b*=r.pixelRatio,le(K,o),e.attributes.has(d.FEATUREATTRIBUTE)&&mo(K);const c=e.attributes.get(d.POSITION),x=e.attributes.get(d.SIZE),A=e.attributes.get(d.NORMAL),w=e.attributes.get(d.AUXPOS1);et(c.size>=3);const j=W(l),D=this.parameters.centerOffsetUnits==="screen";for(let O=0;O<c.data.length/c.size;O++){const T=O*c.size;Z(y,c.data[T],c.data[T+1],c.data[T+2]),B(y,y,o);const I=O*x.size;_[0]=x.data[I]*g,_[1]=x.data[I+1]*b,B(y,y,r.viewMatrix);const R=O*w.size;if(Z(S,w.data[R],w.data[R+1],w.data[R+2]),!D&&(y[0]+=S[0],y[1]+=S[1],S[2]!==0)){const Y=S[2];ce(S,y),tt(y,y,V(S,S,Y))}const X=O*A.size;if(Z(N,A.data[X],A.data[X+1],A.data[X+2]),this._normalAndViewAngle(N,K,r,ee),this._applyVerticalOffsetTransformationView(y,ee,r,Q),r.applyProjection(y,P),P[0]>-1){D&&(S[0]||S[1])&&(P[0]+=S[0]*r.pixelRatio,S[1]!==0&&(P[1]+=Bt(S[1],Q.factorAlignment)*r.pixelRatio),r.unapplyProjection(P,y)),P[0]+=this.parameters.screenOffset[0]*r.pixelRatio,P[1]+=this.parameters.screenOffset[1]*r.pixelRatio,P[0]=Math.floor(P[0]),P[1]=Math.floor(P[1]),Ht(_,Q.factor,_);const Y=Po*r.pixelRatio;let re=0;if(l.textureIsSignedDistanceField&&(re=l.outlineSize*r.pixelRatio/2),xe(h,P[0],P[1],_,Y,re,l,j)){const se=i.ray;if(B(ye,y,ot(Co,r.viewMatrix)),P[0]=h[0],P[1]=h[1],r.unprojectFromRenderScreen(P,y)){const U=F();L(U,se.direction);const ne=1/H(U);V(U,U,ne),f(it(se.origin,y)*ne,U,-1,!0,1,ye)}}}}}intersectDraped(e,o,i,a,s,f){const l=e.attributes.get(d.POSITION),h=e.attributes.get(d.SIZE),r=this.parameters,g=W(r);let{scaleX:b,scaleY:c}=this._getScreenScale(e);b*=e.screenToWorldRatio,c*=e.screenToWorldRatio;const x=So*e.screenToWorldRatio;for(let A=0;A<l.data.length/l.size;A++){const w=A*l.size,j=l.data[w],D=l.data[w+1],O=A*h.size;_[0]=h.data[O]*b,_[1]=h.data[O+1]*c;let T=0;r.textureIsSignedDistanceField&&(T=r.outlineSize*e.screenToWorldRatio/2),xe(a,j,D,_,x,T,r,g)&&s(f.dist,f.normal,-1,!1)}}createBufferWriter(){return new zo(this)}_normalAndViewAngle(e,o,i,a){return ao(o)&&(o=le(bo,o)),at(a.normal,e,o),B(a.normal,a.normal,i.viewInverseTransposeMatrix),a.cosAngle=rt(Qe,Ao),a}_updateScaleInfo(e,o,i){const a=this.parameters;a.screenSizePerspective!=null?ve(i,o,a.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),a.screenSizePerspectiveAlignment!=null?ve(i,o,a.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}applyShaderOffsetsView(e,o,i,a,s,f,l){const h=this._normalAndViewAngle(o,i,s,ee);return this._applyVerticalGroundOffsetView(e,h,s,l),this._applyVerticalOffsetTransformationView(l,h,s,f),this._applyPolygonOffsetView(l,h,a[3],s,l),this._applyCenterOffsetView(l,a,l),l}applyShaderOffsetsNDC(e,o,i,a,s){return this._applyCenterOffsetNDC(e,o,i,a),s!=null&&L(s,a),this._applyPolygonOffsetNDC(a,o,i,a),a}_applyPolygonOffsetView(e,o,i,a,s){const f=a.aboveGround?1:-1;let l=Math.sign(i);l===0&&(l=f);const h=f*l;if(this.parameters.shaderPolygonOffset<=0)return L(s,e);const r=st(Math.abs(o.cosAngle),.01,1),g=1-Math.sqrt(1-r*r)/r/a.viewport[2];return V(s,e,h>0?g:1/g),s}_applyVerticalGroundOffsetView(e,o,i,a){const s=H(e),f=i.aboveGround?1:-1,l=i.computeRenderPixelSizeAtDist(s)*Ze,h=V(y,o.normal,f*l);return J(a,e,h),a}_applyVerticalOffsetTransformationView(e,o,i,a){var r;const s=this.parameters;if(!((r=s.verticalOffset)!=null&&r.screenLength)){if(s.screenSizePerspective||s.screenSizePerspectiveAlignment){const g=H(e);this._updateScaleInfo(a,g,o.cosAngle)}else a.factor.scale=1,a.factorAlignment.scale=1;return e}const f=H(e),l=s.screenSizePerspectiveAlignment??s.screenSizePerspective,h=Gt(i,f,s.verticalOffset,o.cosAngle,l);return this._updateScaleInfo(a,f,o.cosAngle),V(o.normal,o.normal,h),J(e,e,o.normal)}_applyCenterOffsetView(e,o,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&L(i,e),a&&(i[0]+=o[0],i[1]+=o[1],o[2]&&(ce(N,i),J(i,i,V(N,N,o[2])))),i}_applyCenterOffsetNDC(e,o,i,a){const s=this.parameters.centerOffsetUnits!=="screen";return a!==e&&L(a,e),s||(a[0]+=o[0]/i.fullWidth*2,a[1]+=o[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,o,i,a){const s=this.parameters.shaderPolygonOffset;if(e!==a&&L(a,e),s){const f=i.aboveGround?1:-1,l=f*Math.sign(o[3]);a[2]-=(l||f)*s}return a}produces(e,o){if(o===v.Color||o===v.Alpha||o===v.Highlight||o===v.ObjectAndLayerIdColor){if(e===z.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:i,occlusionTest:a}=this.parameters;return e===(i?z.LABEL_MATERIAL:z.HUD_MATERIAL)||a&&e===z.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new vo(e)}calculateRelativeScreenBounds(e,o,i=nt()){return go(this.parameters,e,o,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}_getScreenScale(e){const o=e.attributes.get(d.FEATUREATTRIBUTE);if(o==null)return{scaleX:1,scaleY:1};const i=lt(o.data,yo),[a,s]=Ct(xo,this.parameters,i);return{scaleX:a,scaleY:s}}}class vo extends Ft{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(k,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}}function go(t,e,o,i=Oo){return Se(i,t.anchorPosition),i[0]*=-e[0],i[1]*=-e[1],i[0]+=t.screenOffset[0]*o,i[1]+=t.screenOffset[1]*o,i}function mo(t){const e=t[0],o=t[1],i=t[2],a=t[3],s=t[4],f=t[5],l=t[6],h=t[7],r=t[8],g=1/Math.sqrt(e*e+o*o+i*i),b=1/Math.sqrt(a*a+s*s+f*f),c=1/Math.sqrt(l*l+h*h+r*r);return t[0]=e*g,t[1]=o*g,t[2]=i*g,t[3]=a*b,t[4]=s*b,t[5]=f*b,t[6]=l*c,t[7]=h*c,t[8]=r*c,t}function xe(t,e,o,i,a,s,f,l){let h=e-a-(l[0]>0?i[0]*l[0]:0),r=h+i[0]+2*a,g=o-a-(l[1]>0?i[1]*l[1]:0),b=g+i[1]+2*a;const c=f.distanceFieldBoundingBox;return f.textureIsSignedDistanceField&&c!=null&&(h+=i[0]*c[0],g+=i[1]*c[1],r-=i[0]*(1-c[2]),b-=i[1]*(1-c[3]),h-=s,r+=s,g-=s,b+=s),t[0]>h&&t[0]<r&&t[1]>g&&t[1]<b}const Q=new so,Oo=Ae(),y=F(),N=F(),P=oe(),Qe=F(),ye=F(),K=Te(),bo=Te(),Co=ct(),S=F(),xo=oe(),yo=oe(),ee={normal:Qe,cosAngle:0},Po=1,So=2,_=[0,0],Ao=dt(0,0,1);class wo extends Ut{constructor(){super(...arguments),this.renderOccluded=Wt.Occlude,this.isDecoration=!1,this.color=de(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=pt(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=de(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const Ke=Be().vec3f(d.POSITION).vec3f(d.NORMAL).vec2f(d.UV0).vec4u8(d.COLOR).vec2f(d.SIZE).vec4f(d.AUXPOS1).vec4f(d.FEATUREATTRIBUTE),To=Ke.clone().vec4u8(d.OBJECTANDLAYERIDCOLOR);class zo{constructor(e){this._material=e,this.vertexBufferLayout=ze("enable-feature:objectAndLayerId-rendering")?To:Ke}elementCount(e){return 6*e.attributes.get(d.POSITION).indices.length}write(e,o,i,a,s){var D;xt(i.attributes.get(d.POSITION),e,a.position,s,6),yt(i.attributes.get(d.NORMAL),o,a.normal,s,6);const f=i.attributes.get(d.UV0).data;let l,h,r,g;if(f==null||f.length<4){const O=this._material.parameters;l=0,h=0,r=O.texCoordScale[0],g=O.texCoordScale[1]}else l=f[0],h=f[1],r=f[2],g=f[3];r=Math.min(1.99999,r+1),g=Math.min(1.99999,g+1);let b=i.attributes.get(d.POSITION).indices.length,c=s;const x=a.uv0;for(let O=0;O<b;++O)x.set(c,0,l),x.set(c,1,h),c++,x.set(c,0,r),x.set(c,1,h),c++,x.set(c,0,r),x.set(c,1,g),c++,x.set(c,0,r),x.set(c,1,g),c++,x.set(c,0,l),x.set(c,1,g),c++,x.set(c,0,l),x.set(c,1,h),c++;Pt(i.attributes.get(d.COLOR),4,a.color,s,6);const{data:A,indices:w}=i.attributes.get(d.SIZE);b=w.length;const j=a.size;c=s;for(let O=0;O<b;++O){const T=A[2*w[O]],I=A[2*w[O]+1];for(let R=0;R<6;++R)j.set(c,0,T),j.set(c,1,I),c++}if(i.attributes.get(d.AUXPOS1)?fe(i.attributes.get(d.AUXPOS1),a.auxpos1,s,6):he(a.auxpos1,s,6*b),i.attributes.get(d.FEATUREATTRIBUTE)?fe(i.attributes.get(d.FEATUREATTRIBUTE),a.featureAttribute,s,6):he(a.featureAttribute,s,6*b),i.objectAndLayerIdColor!=null){const O=(D=i.attributes.get(d.POSITION))==null?void 0:D.indices;if(O){const T=O.length,I=a.getField(d.OBJECTANDLAYERIDCOLOR,ut);St(i.objectAndLayerIdColor,I,T,s,6)}}}}function Eo(t){const e=new je,{vertex:o,fragment:i,attributes:a,varyings:s}=e;Ee(o,t),e.include(At,t),e.include(Nt,t),e.include(Ve,t),e.include(Le,t),a.add(d.POSITION,"vec3"),t.vvColor&&a.add(d.COLORFEATUREATTRIBUTE,"float"),s.add("vColor","vec4"),s.add("vpos","vec3");const f=t.multipassEnabled&&(t.output===v.Color||t.output===v.Alpha);f&&s.add("depth","float"),o.uniforms.add(new $("eColor",r=>r.color));const l=t.output===v.Depth;l&&(e.include(wt,t),Tt(e),zt(e)),o.code.add(n`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${f?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${l?n`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:n`transformPosition(proj, view, vpos);`}
    }
  `),e.include(Ie,t),f&&e.include(De,t),i.include(Re);const h=t.output===v.Highlight;return h&&e.include(Et,t),i.code.add(n`
  void main() {
    discardBySlice(vpos);
    ${f?"terrainDepthTest(depth);":""}
    vec4 fColor = vColor;

    ${t.output===v.ObjectAndLayerIdColor?n`fColor.a = 1.0;`:""}

    if (fColor.a < ${n.float(G)}) {
      discard;
    }

    ${t.output===v.Alpha?n`fragColor = vec4(fColor.a);`:""}

    ${t.output===v.Color?n`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===E.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${h?n`outputHighlight();`:""};
    ${t.output===v.Depth?n`outputDepth(linearDepth);`:""};
    ${t.output===v.ObjectAndLayerIdColor?n`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const _o=Object.freeze(Object.defineProperty({__proto__:null,build:Eo},Symbol.toStringTag,{value:"Module"}));class q extends Ue{initializeProgram(e){return new Ne(e.rctx,q.shader.get().build(this.configuration),We)}_createPipeline(e,o){const i=this.configuration,a=e===E.NONE,s=e===E.FrontFace;return qe({blending:i.output!==v.Color&&i.output!==v.Alpha||!i.transparent?null:a?Yt:Xe(e),culling:Zt(i.cullFace),depthTest:{func:Jt(e)},depthWrite:(a||s)&&i.writeDepth?ke:null,colorWrite:Ye,stencilWrite:i.hasOccludees?_t:null,stencilTest:i.hasOccludees?o?Dt:$t:null,polygonOffset:a||s?i.polygonOffset?Do:null:Qt(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}q.shader=new Fe(_o,()=>we(()=>import("./ColorMaterial.glsl-c492777a.js"),["assets/ColorMaterial.glsl-c492777a.js","assets/DefaultTechniqueConfiguration-b4dbe32f.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/requestImageUtils-b142708c.js","assets/enums-bdecffa2.js","assets/Texture-bcb6d63f.js","assets/contextUtils-81fda295.js","assets/interfaces-8918b36f.js","assets/Material-5f4156ac.js","assets/ViewingMode-5d7d590b.js","assets/FramebufferObject-123b7c8d.js","assets/ShaderTechniqueConfiguration-2502462e.js","assets/OrderIndependentTransparency-755f7dcc.js","assets/InterleavedLayout-d76b0d59.js","assets/types-1305598a.js","assets/VerticalOffset.glsl-5743f98e.js","assets/RenderGeometry-5dbc1699.js","assets/vec3f32-bac7ea57.js","assets/ElevationProvider-abb53936.js","assets/dehydratedPoint-5a1dfed5.js","assets/hydratedFeatures-2365c307.js","assets/weather-2eb64924.js","assets/RenderState-1d6218ee.js","assets/NestedMap-1b5db22e.js","assets/frustum-f9d53cdf.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d19dab8d.js","assets/Octree-7cea9440.js","assets/floatRGBA-ca990bbb.js","assets/Intersector-2e1d9db3.js","assets/Intersector-fa865806.js","assets/boundedPlane-1da2f094.js","assets/verticalOffsetUtils-e5214af9.js","assets/orientedBoundingBox-67c5cd22.js","assets/glUtil-ce5ee52b.js","assets/Scheduler-ff5943a4.js","assets/signal-51ed66f5.js","assets/debugFlags-9a30f077.js"]));const Do={factor:1,units:1};class C extends Me{constructor(){super(...arguments),this.output=v.Color,this.cullFace=ie.None,this.transparencyPassType=E.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.multipassEnabled=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1}}p([u({count:v.COUNT})],C.prototype,"output",void 0),p([u({count:ie.COUNT})],C.prototype,"cullFace",void 0),p([u({count:E.COUNT})],C.prototype,"transparencyPassType",void 0),p([u()],C.prototype,"hasSlicePlane",void 0),p([u()],C.prototype,"hasVertexColors",void 0),p([u()],C.prototype,"transparent",void 0),p([u()],C.prototype,"polygonOffset",void 0),p([u()],C.prototype,"enableOffset",void 0),p([u()],C.prototype,"writeDepth",void 0),p([u()],C.prototype,"hasOccludees",void 0),p([u()],C.prototype,"multipassEnabled",void 0),p([u()],C.prototype,"cullAboveGround",void 0),p([u()],C.prototype,"objectAndLayerIdColorInstanced",void 0),p([u()],C.prototype,"vvColor",void 0),p([u({constValue:!1})],C.prototype,"occlusionPass",void 0),p([u({constValue:!0})],C.prototype,"hasVvInstancing",void 0),p([u({constValue:!1})],C.prototype,"vvSize",void 0),p([u({constValue:!1})],C.prototype,"vvOpacity",void 0);class qo extends qt{constructor(e){super(e,new jo),this.supportsEdges=!0,this._configuration=new C}getConfiguration(e,o){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._isTransparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<Kt,this._configuration.multipassEnabled=o.multipassEnabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration}produces(e,o){return o===v.Color||o===v.Alpha||o===v.Highlight||o===v.Depth&&this.parameters.writeLinearDepth||o===v.ObjectAndLayerIdColor?e===z.DRAPED_MATERIAL?!0:o===v.Highlight?e===z.OPAQUE_MATERIAL:e===(this._isTransparent?this.parameters.writeDepth?z.TRANSPARENT_MATERIAL:z.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:z.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new $o(e)}createBufferWriter(){const e=Be().vec3f(d.POSITION);return ze("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(d.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(d.COLORFEATUREATTRIBUTE):e.vec4u8(d.COLOR),new jt(e)}get _isTransparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}}class $o extends It{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==v.Color&&this._output!==v.Alpha||this._updateOccludeeState(e),this.ensureTechnique(q,e)}}class jo extends Rt{constructor(){super(...arguments),this.color=Pe,this.forceTransparentMode=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=ie.None,this.hasOccludees=!1}}export{ko as $,W as D,co as F,so as a,ro as d,qo as f,ae as o,lo as t,Eo as w};
