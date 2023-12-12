import{r as n,e as r,h as i,g as o}from"./index-b516d057.js";import{r as d,i as a}from"./index-c227d296-dd1efda8.js";import{r as h,c}from"./component-utils-2ebdae59-b855ce5d.js";import{o as f}from"./disconnected-bc5fc8bc-72f6378d.js";const g="",m=class{constructor(e){n(this,e),this.widgetReady=r(this,"widgetReady",7),this.referenceElement=void 0,this.conversions=void 0,this.currentLocation=void 0,this.formats=void 0,this.locationSymbol=void 0,this.mode=void 0,this.multipleConversions=void 0,this.orientation=void 0,this.storageEnabled=void 0,this.storageType=void 0,this.position="bottom-left",this.expandable=!1,this.view=void 0,this.widget=void 0}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}conversionsWatcher(e){e!==void 0&&this.widget&&(this.widget.conversions=e)}formatsWatcher(e){e!==void 0&&this.widget&&(this.widget.formats=e)}locationSymbolWatcher(e){e!==void 0&&this.widget&&(this.widget.locationSymbol=e)}modeWatcher(e){e!==void 0&&this.widget&&(this.widget.mode=e)}multipleConversionsWatcher(e){e!==void 0&&this.widget&&(this.widget.multipleConversions=e)}orientationWatcher(e){e!==void 0&&this.widget&&(this.widget.orientation=e)}storageEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.storageEnabled=e)}storageTypeWatcher(e){e!==void 0&&this.widget&&(this.widget.storageType=e)}referenceElementWatcher(e){h(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async reverseConvert(e,t){var s;return(s=this.widget)==null?void 0:s.reverseConvert(e,t)}async componentDidLoad(){const e=this._createParams(),t=await d(e);this.widget=t,await this._addWatchers(),this.widgetReady.emit({widget:this.widget}),c(this)}disconnectedCallback(){f(this)}render(){return this.expandable?i("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},i("div",{ref:e=>this.childElem=e})):i("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await a();e(()=>this.widget.currentLocation,t=>this.currentLocation=t,{initial:!0})}_createParams(){const e={container:this.childElem};return this.view&&(e.view=this.view),e}get el(){return o(this)}static get watchers(){return{position:["positionWatcher"],conversions:["conversionsWatcher"],formats:["formatsWatcher"],locationSymbol:["locationSymbolWatcher"],mode:["modeWatcher"],multipleConversions:["multipleConversionsWatcher"],orientation:["orientationWatcher"],storageEnabled:["storageEnabledWatcher"],storageType:["storageTypeWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};m.style=g;export{m as arcgis_coordinate_conversion};
