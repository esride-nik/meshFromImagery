import{r as n,e as t,h as s,g as a}from"./index-b516d057.js";import{X as h,i as d}from"./index-c227d296-dd1efda8.js";import{c as l}from"./component-utils-2ebdae59-b855ce5d.js";import{o as r}from"./disconnected-bc5fc8bc-72f6378d.js";const c="arcgis-slider{min-width:200px;min-height:25px}",m=class{constructor(e){n(this,e),this.sliderMaxChange=t(this,"sliderMaxChange",7),this.sliderMaxClick=t(this,"sliderMaxClick",7),this.sliderMinChange=t(this,"sliderMinChange",7),this.sliderMinClick=t(this,"sliderMinClick",7),this.sliderSegmentClick=t(this,"sliderSegmentClick",7),this.sliderSegmentDrag=t(this,"sliderSegmentDrag",7),this.sliderThumbChange=t(this,"sliderThumbChange",7),this.sliderThumbClick=t(this,"sliderThumbClick",7),this.sliderThumbDrag=t(this,"sliderThumbDrag",7),this.sliderTickClick=t(this,"sliderTickClick",7),this.sliderTrackClick=t(this,"sliderTrackClick",7),this.widgetReady=t(this,"widgetReady",7),this.referenceElement=void 0,this.draggableSegmentsEnabled=void 0,this.effectiveMax=void 0,this.effectiveMin=void 0,this.effectiveSegmentElements=void 0,this.labelElements=void 0,this.labelInputsEnabled=void 0,this.labels=void 0,this.layout="horizontal",this.min=void 0,this.max=void 0,this.maxLabelElement=void 0,this.minLabelElement=void 0,this.precision=void 0,this.rangeLabelInputsEnabled=void 0,this.segmentElements=void 0,this.snapOnClickEnabled=void 0,this.syncedSegmentsEnabled=void 0,this.thumbElements=void 0,this.thumbsConstrained=void 0,this.tickConfigs=void 0,this.tickElements=void 0,this.trackElement=void 0,this.steps=void 0,this.values=void 0,this.position="bottom-left",this.expandable=!1,this.widget=void 0}draggableSegmentsEnabledWatcher(e){this.widget&&(this.widget.draggableSegmentsEnabled=e)}effectiveMaxWatcher(e){this.widget&&(this.widget.effectiveMax=e)}effectiveMinWatcher(e){this.widget&&(this.widget.effectiveMin=e)}layoutWatcher(e){this.widget&&(this.widget.layout=e)}minWatcher(e){this.widget&&(this.widget.min=e)}maxWatcher(e){this.widget&&(this.widget.max=e)}precisionWatcher(e){this.widget&&(this.widget.precision=e)}rangeLabelInputsEnabledWatcher(e){this.widget&&(this.widget.rangeLabelInputsEnabled=e)}snapOnClickEnabledWatcher(e){this.widget&&(this.widget.snapOnClickEnabled=e)}stepsWatcher(e){this.widget&&(this.widget.steps=e)}syncedSegmentsEnabledWatcher(e){this.widget&&(this.widget.syncedSegmentsEnabled=e)}thumbsConstrainedWatcher(e){this.widget&&(this.widget.thumbsConstrained=e)}tickConfigsWatcher(e){this.widget&&(this.widget.tickConfigs=e)}valuesWatcher(e){typeof e=="string"&&(this.values=e.split(",").map(i=>Number(i))),this.widget&&(this.widget.values=this.values)}async componentDidLoad(){const e=this._createParams(),i=await h(e);this.widget=i,await this._addWatchers(),this.widgetReady.emit({widget:this.widget}),l(this)}disconnectedCallback(){r(this)}render(){return this.expandable?s("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},s("div",{ref:e=>this.childElem=e})):s("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await d();e(()=>this.widget.effectiveSegmentElements,i=>this.effectiveSegmentElements=i,{initial:!0}),e(()=>this.widget.labelElements,i=>this.labelElements=i,{initial:!0}),e(()=>this.widget.maxLabelElement,i=>this.maxLabelElement=i,{initial:!0}),e(()=>this.widget.minLabelElement,i=>this.minLabelElement=i,{initial:!0}),e(()=>this.widget.segmentElements,i=>this.segmentElements=i,{initial:!0}),e(()=>this.widget.thumbElements,i=>this.thumbElements=i,{initial:!0}),e(()=>this.widget.tickElements,i=>this.tickElements=i,{initial:!0}),e(()=>this.widget.trackElement,i=>this.trackElement=i,{initial:!0})}_createParams(){const e={container:this.childElem,layout:this.layout};return this.min!==void 0&&(e.min=this.min),this.max!==void 0&&(e.max=this.max),this.steps&&(typeof this.steps=="string"&&(this.steps=this.steps.split(",").map(i=>Number(i))),e.steps=this.steps),this.values&&(typeof this.values=="string"&&(this.values=this.values.split(",").map(i=>Number(i))),e.values=this.values),e}get el(){return a(this)}static get watchers(){return{draggableSegmentsEnabled:["draggableSegmentsEnabledWatcher"],effectiveMax:["effectiveMaxWatcher"],effectiveMin:["effectiveMinWatcher"],layout:["layoutWatcher"],min:["minWatcher"],max:["maxWatcher"],precision:["precisionWatcher"],rangeLabelInputsEnabled:["rangeLabelInputsEnabledWatcher"],snapOnClickEnabled:["snapOnClickEnabledWatcher"],steps:["stepsWatcher"],syncedSegmentsEnabled:["syncedSegmentsEnabledWatcher"],thumbsConstrained:["thumbsConstrainedWatcher"],tickConfigs:["tickConfigsWatcher"],values:["valuesWatcher"]}}};m.style=c;export{m as arcgis_slider};