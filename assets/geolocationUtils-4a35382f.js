import{an as l,s,B as g,gW as d,m as c,j as m,k as p}from"./index-b516d057.js";import{p as f,n as v}from"./project-1bd91657.js";const u=l.getLogger("esri.widgets.support.geolocationUtils"),w={maximumAge:0,timeout:15e3,enableHighAccuracy:!0};function h(){const e=p("esri-geolocation");return e||u.warn("geolocation-unsupported","Geolocation unsupported."),e}function y(){const e=window.isSecureContext;return e||u.warn("insecure-context","Geolocation requires a secure origin."),e}function R(){return h()&&y()}function U(e){return e||(e=w),new Promise((o,i)=>{setTimeout(()=>i(new s("geolocation:timeout","getting the current geolocation position timed out")),15e3),navigator.geolocation.getCurrentPosition(o,i,e??void 0)})}function j(e,t){const{position:o,view:i}=e,r=$(o),n=r==null?void 0:r.coords;if(!n)throw new s("geometry-service:no-coords","Geolocation has no coordinates");return S(P(n),i,t)}function $(e){const t=e&&e.coords||{},o={accuracy:t.accuracy,altitude:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,latitude:t.latitude,longitude:t.longitude,speed:t.speed};return e&&{coords:o,timestamp:e.timestamp}}function P({longitude:e,latitude:t,altitude:o}){return new g({longitude:e,latitude:t,z:o||void 0,spatialReference:{wkid:4326}})}function S(e,t,o){if(!t)return Promise.resolve(e);const i=t.spatialReference;return i.isWGS84?Promise.resolve(e):i.isWebMercator?Promise.resolve(d(e)):x(o).then(r=>{if(!r)throw new s("geometry-service:missing-url","Geometry service URL is missing");const n=new f({geometries:[e],outSpatialReference:i});return v(r,n,o).then(a=>a[0])})}function x(e){if(c.geometryServiceUrl)return Promise.resolve(c.geometryServiceUrl);const t=m.getDefault();return t.load(e).catch(()=>{}).then(()=>{var o,i;return(i=(o=t.helperServices)==null?void 0:o.geometry)==null?void 0:i.url})}export{j as f,R as g,U as p};
