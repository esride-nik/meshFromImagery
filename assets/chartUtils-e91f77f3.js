import{d as F,l as N}from"./Responsive-41bba195.js";import{y as Q,hQ as D,g9 as R,h1 as _,fU as q,kR as J,ao as K,eV as ii}from"./index-b516d057.js";import{r as P}from"./signal-51ed66f5.js";import{g as G,b as ti}from"./unitFormatUtils-67047561.js";import{n as v,e as ei,s as oi}from"./ElevationProfile-d4733872.js";import{Y as ni,S as ai}from"./chartUtilsAm5-2f34c09b.js";import{Q as O}from"./jsxFactory-92036771.js";import{r as si}from"./themeUtils-7dcf5b71.js";import{o as ri,u as Y,_ as li,b as di,r as pi,x as ci}from"./LineSeries-edf0978b.js";import{aN as b,$ as u,Y as mi,Z as ui}from"./Theme-016ad2b9.js";import{u as W}from"./Tooltip-3e2bf68f.js";import"./Cyclical-4c223a04.js";import"./memoize-3e55df82.js";import"./intersectorUtilsConversions-d05d75a3.js";import"./Intersector-fa865806.js";import"./ViewingMode-5d7d590b.js";import"./boundedPlane-1da2f094.js";import"./verticalOffsetUtils-e5214af9.js";import"./orientedBoundingBox-67c5cd22.js";import"./Intersector-2e1d9db3.js";import"./Intersector-a291e778.js";import"./defaultUnit-414db021.js";import"./getDefaultUnitForView-d1ffbf16.js";import"./throttle-7bf02de9.js";import"./elevationInfoUtils-be36d866.js";import"./Material-5f4156ac.js";import"./interfaces-8918b36f.js";import"./geodesicUtils-822c19ca.js";import"./QueueProcessor-4b9d43d3.js";import"./Scheduler-ff5943a4.js";import"./debugFlags-9a30f077.js";import"./RenderState-1d6218ee.js";import"./traversalUtils-bbdec2e9.js";import"./uuid-709b6c67.js";import"./Ground-ed93a93a.js";import"./loadAll-5e767cfa.js";import"./ElevationQuery-4be4efe0.js";import"./ElevationSamplerData-9f34f589.js";import"./SketchViewModel-fedf7932.js";import"./layerUtils-437666a3.js";import"./screenUtils-8dc4a7f9.js";import"./snappingUtils-93e84fbe.js";import"./dehydratedPoint-5a1dfed5.js";import"./Query-071039d7.js";import"./FullTextSearch-12e0754c.js";import"./QuantizationParameters-f983cf8d.js";import"./SketchTooltipOptions-cc43c059.js";import"./SnappingManager-aa70fdd4.js";import"./UpdatingHandles-7949a657.js";import"./geometry2dUtils-a99dcf3d.js";import"./FeatureFilter-55dd341e.js";import"./floorFilterUtils-080a7cd2.js";import"./viewUtils-9f810d02.js";import"./hitTestSelectUtils-d512707e.js";import"./UnitSelect-52961079.js";import"./globalCss-94006b67.js";import"./DefaultTheme-ef2e8ff5.js";import"./ColorSet-19b07c03.js";import"./Tick-52f438fc.js";import"./Button-d5e3d401.js";function fi(i,o,e=10){const t=X(o-i,!1);if(t===0)return[i,o];const n=X(t/(e-1),!0);return[Math.floor(i/n)*n,Math.ceil(o/n)*n]}function X(i,o){const e=Math.floor(Math.log10(i)),t=i/10**e;let n;return n=o?t<1.5?1:t<3?2:t<5?2.5:t<7?5:10:t<=1?1:t<=2?2:t<=3?2.5:t<=5?5:10,n*10**e}const A="#f8f8f8",V="#a9a9a9",g="#323232",xi="line",gi="fill",h=15,x=12,z=.001,hi=.1,Ai=.02,E={fontFamily:"Avenir Next",paddingBottom:x/2,paddingLeft:0,paddingRight:0,paddingTop:0,axisGridStroke:"#f4f4f4",axisLabelsFontSize:9,axisLabelsFontWeight:"400",axisLabelsColor:V,axisTooltipFontSize:12,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,axisTooltipPaddingTop:Math.round(x/4),axisTooltipPaddingBottom:Math.round(x/4),axisTooltipPaddingHorizontal:Math.round(h/4),xAxisMinGridDistance:50,xAxisLabelsSpacing:Math.round(x/2),xAxisMinLabelPosition:.05,xAxisMaxLabelPosition:.9,yAxisMinGridDistance:30,yAxisLabelSpacing:Math.round(h/4),yAxisMinLabelPosition:0,yAxisMaxLabelPosition:.8,seriesTooltipFontSize:12,seriesTooltipBackgroundColor:A,seriesTooltipLabelColor:g,seriesFillLighten:.9,seriesTooltipSpacing:x/2,seriesTooltipPaddingVertical:Math.round(h/4),seriesTooltipPaddingHorizontal:Math.round(h/4)},vi={...E,axisGridStroke:g,axisLabelsColor:V,axisTooltipBackgroundColor:g,axisTooltipLabelColor:A,seriesTooltipBackgroundColor:g,seriesTooltipLabelColor:A,seriesFillLighten:-.75},y={minX:void 0,maxX:void 0,minY:void 0,maxY:void 0};async function Et(i){const o=await ni(i.container);Q(i.abortOptions);const e=si(),t=e?vi:E;o.setThemes(e?[F.new(o),N.new(o)]:[F.new(o)]);const n=O(i.container),a=o.container.children.push(ri.new(o,{panX:!0,panY:!0,paddingTop:t.paddingTop,paddingBottom:t.paddingBottom,paddingLeft:n?t.paddingRight:t.paddingLeft,paddingRight:n?t.paddingLeft:t.paddingRight,maxTooltipDistance:0}));a.zoomOutButton.set("forceHidden",!0);const s=a.xAxes.push(Y.new(o,{renderer:li.new(o,{})})),r=a.yAxes.push(Y.new(o,{renderer:di.new(o,{})})),p=P(null),l=P("loading"),d={params:i,chart:a,xAxis:s,yAxis:r,seriesInfos:new Map,messages:null,theme:t,pointerIsOver:!1,get state(){return l.value},get data(){return p.value},set data(c){p.value=c}};yi(d),Ti(d),bi(d);const m=D([ki(d,i.onRangeChange),Ci(d,i.onCursorPositionChange),L(o.events.once("frameended",()=>{l.value="ready"})),L(o)]);return{destroy:()=>{m.remove(),l.value="destroyed"},update:c=>{c.data===d.data&&c.messages===d.messages||M(d)||Li(d,c)},zoomOut:()=>I(d)}}function M(i){return i.state==="destroyed"}function bi({chart:i,xAxis:o,yAxis:e}){const t=pi.new(i.root,{behavior:"none",xAxis:o,yAxis:e});t.lineY.set("visible",!1),i.set("cursor",t)}function yi(i){var s;const{chart:o,xAxis:e,theme:t}=i;e.setAll({extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"distance"),strictMinMax:!0,strictMinMaxSelection:!0}),e.axisHeader.set("forceHidden",!0);const n=e.get("renderer");n.setAll({inside:!1,minGridDistance:t.xAxisMinGridDistance}),n.labels.template.setAll({centerX:b,centerY:b,fill:u(t.axisLabelsColor),fontFamily:t.fontFamily,fontSize:t.axisLabelsFontSize,fontWeight:t.axisLabelsFontWeight,maxPosition:t.xAxisMaxLabelPosition,minPosition:t.xAxisMinLabelPosition,paddingLeft:0,paddingRight:0,paddingTop:t.xAxisLabelsSpacing});const a=e.set("tooltip",W.new(o.root,{paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0}));(s=a.get("background"))==null||s.setAll({fill:u(t.axisTooltipBackgroundColor),stroke:void 0}),a.label.setAll({fill:u(t.axisTooltipLabelColor),fontFamily:t.fontFamily,fontSize:t.axisTooltipFontSize,paddingBottom:t.axisTooltipPaddingBottom,paddingLeft:t.axisTooltipPaddingHorizontal,paddingRight:t.axisTooltipPaddingHorizontal,paddingTop:t.axisTooltipPaddingTop}),n.grid.template.setAll({strokeOpacity:1,stroke:u(t.axisGridStroke)})}function Ti(i){const{yAxis:o,theme:e}=i;o.setAll({baseValue:v().noDataValue,extraMax:0,extraMin:0,maxDeviation:0,numberFormatter:U(i,"elevation"),strictMinMax:!0,strictMinMaxSelection:!0,tooltip:void 0}),o.axisHeader.set("visible",!1);const t=O(i.params.container),n=o.get("renderer");n.setAll({minGridDistance:e.yAxisMinGridDistance,opposite:t,inside:!0}),n.labels.template.setAll({centerX:b,centerY:mi,fill:u(e.axisLabelsColor),fontFamily:e.fontFamily,fontSize:e.axisLabelsFontSize,fontWeight:e.axisLabelsFontWeight,maxPosition:e.yAxisMaxLabelPosition,minPosition:e.yAxisMinLabelPosition,paddingBottom:0,paddingLeft:t?0:e.yAxisLabelSpacing,paddingRight:t?e.yAxisLabelSpacing:0,paddingTop:0,textAlign:"start"}),n.grid.template.setAll({strokeOpacity:1,stroke:u(e.axisGridStroke)})}function Li(i,o){var r;if(M(i))return;const e=i.data??void 0,t=o.data??void 0;(r=i.chart.get("cursor"))==null||r.set("forceHidden",!(t!=null&&t.refined));const n=e!==t,a=(e==null?void 0:e.effectiveUnits)!==(t==null?void 0:t.effectiveUnits),s=(e==null?void 0:e.uniformScaling)!==(t==null?void 0:t.uniformScaling);i.data=t,i.messages=o.messages,(n||a)&&(Mi(i),Pi(i)),s&&I(i),T(i)}function I(i){M(i)||(i.xAxis.zoom(0,1),i.yAxis.zoom(0,1))}function Mi(i){const{chart:o,data:e,xAxis:t,yAxis:n}=i,{minX:a,maxX:s,minY:r,maxY:p}=Si({data:e,pixelWidth:t.width(),pixelHeight:n.height()}),l=!!(e!=null&&e.uniformScaling),d=!!(e!=null&&e.refined);o.setAll({panX:!0,panY:l,pinchZoomX:d,pinchZoomY:d&&l,wheelX:"panX",wheelY:d?l?"zoomXY":"zoomX":"none"}),t.setAll({max:s,min:a,panX:!0,panY:!1,zoomX:!0,zoomY:l}),n.setAll({max:p,min:r,panX:!1,panY:l,zoomX:l,zoomY:l})}function Si({data:i,pixelWidth:o,pixelHeight:e}){if(i==null)return y;const t=i.statistics,n=0,a=t==null?void 0:t.maxDistance;let s=t==null?void 0:t.minElevation,r=t==null?void 0:t.maxElevation;if(a==null||s==null||r==null)return y;const p=Math.max(a-n,z);let l=Math.max(r-s,z);const d=i.effectiveUnits;if(i.dynamicElevationRange){const m=R(p,d.distance,d.elevation);l=Math.max(l,m/v().maxChartRatio)}return s-=Ai*l,r=s+l+hi*l,[s,r]=fi(s,r,10),l=r-s,i.uniformScaling?Fi({data:i,bounds:{minX:n,maxX:a,minY:s,maxY:r},pixelWidth:o,pixelHeight:e,centered:!0}):{minX:n,maxX:n+p,minY:s,maxY:s+l}}function Fi({data:i,bounds:o,pixelWidth:e,pixelHeight:t,centered:n}){if(i==null)return o;let{minX:a,maxX:s,minY:r,maxY:p}=o;if(a==null||s==null||r==null||p==null)return y;const l=s-a,d=p-r,m=i.effectiveUnits,c=R(d,m.elevation,m.distance)/t/(l/e);return c>=1?[a,s]=k([a,s],c,n):[r,p]=k([r,p],1/c,n),{minX:a,maxX:s,minY:r,maxY:p}}function k([i,o],e,t){const n=(o-i)*e;if(t){const a=(i+o)/2-n/2;return[a,a+n]}return[i,i+n]}function Pi(i){var l;const{chart:o,data:e,seriesInfos:t,xAxis:n,yAxis:a}=i;if(e==null||e.lines.length===0)return void o.series.clear();const s=new Map,r=new Set(o.series.values),p=e.lines.length;for(let d=0;d<p;d++){const m=e.lines[d];let c=t.get(m.id);c?(c.fill&&r.delete(c.fill),r.delete(c.line)):(c=Xi(i,m),c.fill&&o.series.push(c.fill),o.series.push(c.line)),s.set(c.id,c);const f=p-d-1;(l=c.fill)==null||l.set("layer",f),c.line.set("layer",p+f),Yi(i,c,m)}i.seriesInfos=s;for(const d of r)o.series.removeValue(d);n.set("layer",p+1),a.set("layer",p+2)}function Yi({theme:i},o,e){const t=u(e.color.toCss()),n=e.samples??[],a=n.length>0,{line:s,fill:r}=o;s.set("visible",a),s.set("stroke",t),r==null||r.set("visible",a),r==null||r.set("fill",ui.lighten(t,i.seriesFillLighten)),s.data.setAll(n),r==null||r.data.setAll(n)}function Xi(i,o){const{id:e}=o,t=C(i,`${xi}-${e}`);t.setAll({dy:o.chartStrokeOffsetY,tooltip:zi(i)}),t.strokes.template.setAll({strokeWidth:o.chartStrokeWidth});let n=null;return o.chartFillEnabled&&(n=C(i,`${gi}-${e}`),n.fills.template.setAll({fillOpacity:1,visible:!0})),{id:e,line:t,fill:n}}function C(i,o){return ci.new(i.chart.root,{connect:!1,excludeFromTotal:!0,fill:void 0,id:o,stroke:void 0,valueXField:"distance",valueYField:"elevation",xAxis:i.xAxis,yAxis:i.yAxis})}function zi({theme:i,chart:o}){var a;const e=W.new(o.root,{forceHidden:!0,getFillFromSprite:!1,getLabelFillFromSprite:!1,pointerOrientation:"vertical",visible:!1}),t=i.seriesTooltipPaddingHorizontal,n=i.seriesTooltipPaddingVertical;return e.label.setAll({fill:u(i.seriesTooltipLabelColor),fontFamily:i.fontFamily,fontSize:i.seriesTooltipFontSize,paddingBottom:n,paddingLeft:t,paddingRight:t,paddingTop:n,textAlign:"start"}),(a=e.get("background"))==null||a.setAll({stroke:void 0,fill:u(i.seriesTooltipBackgroundColor)}),e.adapters.add("dy",s=>{var l;const r=i.seriesTooltipSpacing,p=((l=e.get("pointTo"))==null?void 0:l.y)??0;return(s??0)+(e.y()>p?r:-r)}),e}function ki(i,o){const{xAxis:e,yAxis:t}=i,n=()=>{o(w(e),w(t))},a=s=>[s.on("start",n),s.on("end",n)];return j([...a(e),...a(t)])}function w(i){const o=Math.abs((i.get("end")??0)-(i.get("start")??0)),e=o!==0?1/o:1;return Math.abs(1-e)<ii()?1:e}function Ci(i,o){const{chart:e,xAxis:t,yAxis:n}=i,a=e.get("cursor"),s=e.plotContainer.events,r=l=>{i.pointerIsOver=l,T(i)},p=()=>{r(!1),o(null,null)};return j([a==null?void 0:a.events.on("cursormoved",()=>{if(!i.pointerIsOver)return;T(i);let l=(a==null?void 0:a.getPrivate("positionX"))??0,d=(a==null?void 0:a.getPrivate("positionY"))??0;const m=i.data;if((m==null?void 0:m.statistics)!=null){const{maxDistance:c,minElevation:f,maxElevation:S}=m.statistics;c!=null&&(l=H(l,B(t),$(t),0,c)),f!=null&&S!=null&&(d=H(d,B(n),$(n),f,S))}o(l,d)}),s.on("pointerover",()=>r(!0)),s.on("pointerout",p),s.on("blur",p)])}function H(i,o,e,t,n){return(o+i*(e-o)-t)/(n-t)}function T(i){const o=wi(i);if(!o)return void i.seriesInfos.forEach(e=>{var t;(t=e.line.get("tooltip"))==null||t.set("forceHidden",!0)});i.seriesInfos.forEach(e=>{const t=e.line.get("tooltip");t.set("forceHidden",!1),t.label.set("text",o)}),i.xAxis.getTooltip().setAll({tooltipText:$i(i)})}function wi(i){const{data:o}=i,e=o==null?void 0:o.lines.map(t=>{var n;return{line:t,y:(n=Z(i,t))==null?void 0:n.elevation}}).sort(Hi);return e&&e.length!==0&&e[0].y!=null?e.map(({y:t,line:n})=>Bi(i,n,t)).join(`
`):null}function Hi({y:i},{y:o}){return i==null?1:o==null?-1:o-i}function Bi(i,o,e){const{data:t,messages:n}=i;if(t==null||n==null)return"";const a=v().formatPrecision,s=_(n.chartTooltip,{name:ei(o,n),elevation:e!=null?G(n,e,t.effectiveUnits.elevation,a):oi});return`[${o.color.toHex()}]●[/] ${s}`}function $i(i){const{data:o,messages:e}=i;if(o==null||e==null)return"";const t=o.lines[0],n=t?Z(i,t):null,a=v().formatPrecision;return n!=null?G(e,n.distance,o.effectiveUnits.distance,a):"-"}function U(i,o){const e=ai.new(i.chart.root,{});return e.format=(t,n,a)=>{const{data:s,messages:r}=i;return r==null||s==null||typeof t=="string"?"":`${q(t,{maximumFractionDigits:a})} ${ti(r,s.effectiveUnits[o],"abbr")}`},e}function Z({chart:i,xAxis:o},e){const t=e.samples??[];if(t.length===0)return null;const n=i.get("cursor"),a=(n==null?void 0:n.getPrivate("positionX"))??0,s=o.toAxisPosition(a),r=o.positionToValue(s);return J(t,r,p=>p.distance)}function B(i){return i.positionToValue(i.get("start")??0)}function $(i){return i.positionToValue(i.get("end")??1)}function j(i){return D(i.map(L))}function L(i){return K(()=>{i==null||i.dispose()})}export{Et as createChart,Si as getAdjustedBounds};