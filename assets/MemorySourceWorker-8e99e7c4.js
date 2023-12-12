import{s as I,cl as Q,cm as Z,aG as A,aH as k,co as F,ck as S,au as v}from"./index-b516d057.js";import{e as w,n as C,t as P}from"./featureConversionUtils-09cf00ff.js";import{t as G,n as $}from"./objectIdUtils-789e911a.js";import{m as L}from"./FeatureStore-02a891a3.js";import{x as E,j as _}from"./projectionSupport-dcf335fc.js";import{W}from"./QueryEngine-ee1ccbba.js";import{i as z,o as H,a as N}from"./clientSideDefaults-dfab1319.js";import{I as B,f as g,p as T,d as j,w as O}from"./sourceUtils-34e7b477.js";import{Z as D}from"./FieldsIndex-e8db657f.js";import"./OptimizedFeature-e90b69df.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./OptimizedGeometry-196224d4.js";import"./BoundsStore-230a1891.js";import"./PooledRBush-fa11eac4.js";import"./quickselect-bc0541de.js";import"./optimizedFeatureQueryEngineAdapter-1fecea41.js";import"./json-48e3ea08.js";import"./WhereClause-41137be1.js";import"./TimeOnly-879c5107.js";import"./UnknownTimeZone-a05df022.js";import"./QueryEngineCapabilities-85c4f1d0.js";import"./quantizationUtils-17105106.js";import"./utils-f54bcc46.js";import"./heatmapUtils-7f42325f.js";import"./utils-1a995f8e.js";import"./basemapUtils-6ec10a55.js";import"./Basemap-8d62c69e.js";import"./loadAll-5e767cfa.js";import"./writeUtils-e226a8aa.js";import"./SnappingCandidate-970faec6.js";import"./Scheduler-ff5943a4.js";import"./signal-51ed66f5.js";import"./debugFlags-9a30f077.js";import"./RenderState-1d6218ee.js";import"./defaultsJSON-59981e75.js";import"./date-294ce3fb.js";const U=S,J={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:S},K={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function V(h){return v(h)?h.z!=null:!!h.hasZ}function X(h){return v(h)?h.m!=null:!!h.hasM}class Ze{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){const i=[],{features:a}=e,r=this._inferLayerProperties(a,e.fields),l=e.fields||[],u=e.hasM!=null?e.hasM:!!r.hasM,f=e.hasZ!=null?e.hasZ:!!r.hasZ,p=!e.spatialReference&&!r.spatialReference,d=p?U:e.spatialReference||r.spatialReference,y=p?J:null,m=e.geometryType||r.geometryType,o=!m;let t=e.objectIdField||r.objectIdField,n=e.timeInfo;const c=new D(l);if(!o&&(p&&i.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!m))throw new I("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!t)throw new I("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&t!==r.objectIdField&&(i.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${t}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),t=r.objectIdField),t&&!r.objectIdField){const s=c.get(t);s?(t=s.name,s.type="esriFieldTypeOID",s.editable=!1,s.nullable=!1):l.unshift({alias:t,name:t,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const s of l){if(s.name==null&&(s.name=s.alias),s.alias==null&&(s.alias=s.name),!s.name)throw new I("feature-layer:invalid-field-name","field name is missing",{field:s});if(s.name===t&&(s.type="esriFieldTypeOID"),!Q.jsonValues.includes(s.type))throw new I("feature-layer:invalid-field-type",`invalid type for field "${s.name}"`,{field:s});s.length==null&&(s.length=Z(s))}const b={};for(const s of l)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const q=A(s);q!==void 0&&(b[s.name]=q)}if(n){if(n.startTimeField){const s=c.get(n.startTimeField);s?(n.startTimeField=s.name,s.type="esriFieldTypeDate"):n.startTimeField=null}if(n.endTimeField){const s=c.get(n.endTimeField);s?(n.endTimeField=s.name,s.type="esriFieldTypeDate"):n.endTimeField=null}if(n.trackIdField){const s=c.get(n.trackIdField);s?n.trackIdField=s.name:(n.trackIdField=null,i.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:n}}))}n.startTimeField||n.endTimeField||(i.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:n}}),n=null)}const x=c.dateFields.length?{timeZoneIANA:e.dateFieldsTimeZone??k}:null;this._createDefaultAttributes=z(b,t);const R={warnings:i,featureErrors:[],layerDefinition:{...K,drawingInfo:H(m),templates:N(b),extent:y,geometryType:m,objectIdField:t,fields:l,hasZ:f,hasM:u,timeInfo:n,dateFieldsTimeReference:x},assignedObjectIds:{}};if(this._queryEngine=new W({fieldsIndex:D.fromLayerJSON({fields:l,timeInfo:n,dateFieldsTimeReference:x}),geometryType:m,hasM:u,hasZ:f,objectIdField:t,spatialReference:d,featureStore:new L({geometryType:m,hasM:u,hasZ:f}),timeInfo:n,cacheSpatialQueries:!0}),!(a!=null&&a.length))return this._nextObjectId=G,R;const M=$(t,a);return this._nextObjectId=M+1,await E(a,d),this._loadInitialFeatures(R,a)}async applyEdits(e){const{spatialReference:i,geometryType:a}=this._queryEngine;return await Promise.all([B(i,a),E(e.adds,i),E(e.updates,i)]),this._applyEdits(e)}queryFeatures(e,i={}){return this._queryEngine.executeQuery(e,i.signal)}queryFeatureCount(e,i={}){return this._queryEngine.executeQueryForCount(e,i.signal)}queryObjectIds(e,i={}){return this._queryEngine.executeQueryForIds(e,i.signal)}queryExtent(e,i={}){return this._queryEngine.executeQueryForExtent(e,i.signal)}querySnapping(e,i={}){return this._queryEngine.executeQueryForSnapping(e,i.signal)}_inferLayerProperties(e,i){let a,r,l=null,u=null,f=null;for(const p of e){const d=p.geometry;if(d!=null&&(l||(l=F(d)),u||(u=d.spatialReference),a==null&&(a=V(d)),r==null&&(r=X(d)),l&&u&&a!=null&&r!=null))break}if(i&&i.length){let p=null;i.some(d=>{const y=d.type==="esriFieldTypeOID",m=!d.type&&d.name&&d.name.toLowerCase()==="objectid";return p=d,y||m})&&(f=p.name)}return{geometryType:l,spatialReference:u,objectIdField:f,hasM:r,hasZ:a}}async _loadInitialFeatures(e,i){const{geometryType:a,hasM:r,hasZ:l,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine,y=[];for(const t of i){if(t.uid!=null&&(e.assignedObjectIds[t.uid]=-1),t.geometry&&a!==F(t.geometry)){e.featureErrors.push(g("Incorrect geometry type."));continue}const n=this._createDefaultAttributes(),c=T(d,n,t.attributes,!0);c?e.featureErrors.push(c):(this._assignObjectId(n,t.attributes,!0),t.attributes=n,t.uid!=null&&(e.assignedObjectIds[t.uid]=t.attributes[u]),t.geometry!=null&&(t.geometry=_(t.geometry,t.geometry.spatialReference,f)),y.push(t))}p.addMany(w([],y,a,l,r,u));const{fullExtent:m,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=m,o){const{start:t,end:n}=o;e.layerDefinition.timeInfo.timeExtent=[t,n]}return e}async _applyEdits(e){const{adds:i,updates:a,deletes:r}=e,l={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(i!=null&&i.length&&this._applyAddEdits(l,i),a!=null&&a.length&&this._applyUpdateEdits(l,a),r==null?void 0:r.length){for(const p of r)l.deleteResults.push(j(p));this._queryEngine.featureStore.removeManyById(r)}const{fullExtent:u,timeExtent:f}=await this._queryEngine.fetchRecomputedExtents();return{extent:u,timeExtent:f,featureEditResults:l}}_applyAddEdits(e,i){const{addResults:a}=e,{geometryType:r,hasM:l,hasZ:u,objectIdField:f,spatialReference:p,featureStore:d,fieldsIndex:y}=this._queryEngine,m=[];for(const o of i){if(o.geometry&&r!==F(o.geometry)){a.push(g("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=T(y,t,o.attributes);if(n)a.push(n);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,o.uid!=null){const c=o.attributes[f];e.uidToObjectId[o.uid]=c}if(o.geometry!=null){const c=o.geometry.spatialReference??p;o.geometry=_(O(o.geometry,c),c,p)}m.push(o),a.push(j(o.attributes[f]))}}d.addMany(w([],m,r,u,l,f))}_applyUpdateEdits({updateResults:e},i){const{geometryType:a,hasM:r,hasZ:l,objectIdField:u,spatialReference:f,featureStore:p,fieldsIndex:d}=this._queryEngine;for(const y of i){const{attributes:m,geometry:o}=y,t=m==null?void 0:m[u];if(t==null){e.push(g(`Identifier field ${u} missing`));continue}if(!p.has(t)){e.push(g(`Feature with object id ${t} missing`));continue}const n=C(p.getFeature(t),a,l,r);if(o!=null){if(a!==F(o)){e.push(g("Incorrect geometry type."));continue}const c=o.spatialReference??f;n.geometry=_(O(o,c),c,f)}if(m){const c=T(d,n.attributes,m);if(c){e.push(c);continue}}p.add(P(n,a,l,r,u)),e.push(j(t))}}_assignObjectId(e,i,a=!1){const r=this._queryEngine.objectIdField;a&&i&&isFinite(i[r])?e[r]=i[r]:e[r]=this._nextObjectId++}}export{Ze as default};
