import{aC as N,aD as S,aE as y,aF as g,aG as O,an as b,s as B,aH as c,aI as f,aJ as q,aK as z,as as D,aL as I,aM as L,aN as $,aO as h}from"./index-b516d057.js";import{t as R}from"./UnknownTimeZone-a05df022.js";function x(s){return"timeZone"in s}function J(s){return"timeZone"in s}function A(s){return"dateFieldsTimeZone"in s}const C=new Map;class u{static fromJSON(e){return new u(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new u(e.fields??[],T(e))}static fromLayerJSON(e){return new u(e.fields??[],T(e))}constructor(e=[],i){var l;this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=i?new Map(i):null;const n=[];for(const t of this.fields){const r=t==null?void 0:t.name,a=_(r);if(r&&a){const o=d(r);this._fieldsMap.set(r,t),this._fieldsMap.set(o,t),this._normalizedFieldsMap.set(a,t),n.push(`${o}:${t.type}:${(l=this._timeZoneByFieldName)==null?void 0:l.get(r)}`),N(t)?(this.dateFields.push(t),this._dateFieldsSet.add(t)):S(t)&&(this._numericFieldsSet.add(t),this.numericFields.push(t)),y(t)||g(t)||(t.editable=t.editable==null||!!t.editable,t.nullable=t.nullable==null||!!t.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)y(e)||g(e)||e.nullable||O(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===(e==null?void 0:e.uid)}has(e){return this.get(e)!=null}get(e){if(!e)return;let i=this._fieldsMap.get(e);return i||(i=this._fieldsMap.get(d(e))??this._normalizedFieldsMap.get(_(e)),i&&this._fieldsMap.set(e,i),i)}getTimeZone(e){const i=this.get(e&&typeof e!="string"?e.name:e);return i?this._timeZoneByFieldName?this._timeZoneByFieldName.get(i.name):i.type==="date"||i.type==="esriFieldTypeDate"?(b.getLogger("esri.layers.support.FieldsIndex").error(new B("getTimeZone:no-timezone-information",`no time zone information for field '${i.name}'`)),c):w.has(i.type)?f:null:null}getLuxonTimeZone(e){const i=this.getTimeZone(e);return i?i===f?R.instance:i===c?q.utcInstance:z(C,i,()=>D.create(i)):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return I(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){var i;return((i=this.get(e))==null?void 0:i.name)??void 0}toJSON(){return{fields:this.fields.map(e=>L(e)?e.toJSON():e),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function d(s){return s.trim().toLowerCase()}function _(s){var e;return((e=$(s))==null?void 0:e.toLowerCase())??""}const w=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function T(s){const e=new Map;if(!s.fields)return e;const i=s.datesInUnknownTimezone===!0,{timeInfo:n,editFieldsInfo:l}=s,t=(n?"startField"in n?n.startField:n.startTimeField:"")??"",r=(n?"endField"in n?n.endField:n.endTimeField:"")??"",a=A(s)?s.dateFieldsTimeZone??null:s.dateFieldsTimeReference?h(s.dateFieldsTimeReference):null,o=l?x(l)?l.timeZone??a:l.dateFieldsTimeReference?h(l.dateFieldsTimeReference):a??c:null,p=n?J(n)?n.timeZone??a:n.timeReference?h(n.timeReference):a:null,Z=new Map([[d((l==null?void 0:l.creationDateField)??""),o],[d((l==null?void 0:l.editDateField)??""),o],[d(t),p],[d(r),p]]);for(const{name:m,type:F}of s.fields)if(w.has(F))e.set(m,f);else if(F!=="date"&&F!=="esriFieldTypeDate")e.set(m,null);else if(i)e.set(m,f);else{const M=Z.get(d(m??""))??a;e.set(m,M)}return e}export{u as Z};
