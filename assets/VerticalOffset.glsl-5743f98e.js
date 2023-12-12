import{a3 as a,mj as l,hj as v,gH as x,f6 as h,aW as m,mk as p,a$ as _}from"./index-b516d057.js";import{n as g,o as s}from"./interfaces-8918b36f.js";import{w as z,x as n,y as S,z as w}from"./DefaultTechniqueConfiguration-b4dbe32f.js";class N extends z{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=a(this._texture),this._textureNormal=a(this._textureNormal),this._textureEmissive=a(this._textureEmissive),this._textureOcclusion=a(this._textureOcclusion),this._textureMetallicRoughness=a(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?l.LOADED:l.LOADING}get textureBindParameters(){return new O(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=a(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textureRepository.acquire(e);if(v(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return a(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}}class O extends g{constructor(e=null,r=null,i=null,o=null,c=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=c}}function R(t,e){e.hasVertexColors?(t.attributes.add(x.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function P(t){t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function b(t){t.uniforms.add(new n("screenSizePerspective",e=>u(e.screenSizePerspective)))}function C(t){t.uniforms.add(new n("screenSizePerspectiveAlignment",e=>u(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function u(t){return h(A,t.parameters.divisor,t.parameters.offset,t.minScaleFactor)}const A=m();function I(t,e){const r=t.vertex;e.hasVerticalOffset?(T(r),e.hasScreenSizePerspective&&(t.include(P),C(r),S(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const $=_();function T(t){t.uniforms.add(new w("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:c}=e.verticalOffset,d=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),f=r.camera.pixelRatio||1;return p($,c*f,d,i,o)}))}export{I as a,R as e,T as f,O as l,C as o,N as r,P as s,b as t};
