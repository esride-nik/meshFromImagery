import{s as o,W as t,X as u,Y as a,Z as d}from"./index-b516d057.js";const m=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wms","wmts"]),p=new Set(["csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","web-tile","wfs","wms","wmts"]);function c(e){return e.layerContainerType==="basemap"?m:e.layerContainerType==="operational-layers"?p:null}function f(e,i){if(i.restrictedWebMapWriting){const n=c(i);return n==null||n.has(e.type)&&!t(e)}return!0}function y(e,i){var n;if(i)if(t(e)){const l=d("featureCollection.layers",i),r=(n=l==null?void 0:l[0])==null?void 0:n.layerDefinition;r&&s(e,r)}else e.type!=="group"&&s(e,i)}function s(e,i){"maxScale"in e&&(i.maxScale=a(e.maxScale)??void 0),"minScale"in e&&(i.minScale=a(e.minScale)??void 0)}function g(e,i){if(y(e,i),i&&(i.id=e.id,"blendMode"in e&&(i.blendMode=e.blendMode,i.blendMode==="normal"&&delete i.blendMode),i.opacity=a(e.opacity)??void 0,i.title=e.title||"Layer",i.visibility=e.visible,"legendEnabled"in e&&e.type!=="wmts"))if(t(e)){const n=i.featureCollection;n&&(n.showLegend=e.legendEnabled)}else i.showLegend=e.legendEnabled}function w(e,i,n){if(!e.persistenceEnabled)return null;if(!("write"in e)||!e.write)return n!=null&&n.messages&&n.messages.push(new o("layer:unsupported",`Layers (${e.title}, ${e.id}) of type '${e.declaredClass}' cannot be persisted`,{layer:e})),null;if(t(e)&&!e.isTable)i=e.resourceInfo;else if(f(e,n)){const l={};return e.write(l,n)?l:null}return i!=null&&g(e,i=u(i)),i}export{w as f};
