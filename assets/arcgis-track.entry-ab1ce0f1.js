import{r as n,e as t,h as s,g as a}from"./index-b516d057.js";import{$ as o,i as r}from"./index-c227d296-dd1efda8.js";import{r as d,c}from"./component-utils-2ebdae59-b855ce5d.js";import{o as h}from"./disconnected-bc5fc8bc-72f6378d.js";const g="",l=class{constructor(e){n(this,e),this.trackComplete=t(this,"trackComplete",7),this.trackError=t(this,"trackError",7),this.widgetReady=t(this,"widgetReady",7),this.referenceElement=void 0,this.geolocationOptions=void 0,this.goToLocationEnabled=void 0,this.graphic=void 0,this.scale=void 0,this.tracking=void 0,this.useHeadingEnabled=void 0,this.position="bottom-left",this.view=void 0,this.widget=void 0}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}geolocationOptionsWatcher(e){e!==void 0&&this.widget&&(this.widget.geolocationOptions=e)}goToLocationEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.goToLocationEnabled=e)}graphicWatcher(e){e!==void 0&&this.widget&&(this.widget.graphic=e)}scaleWatcher(e){e!==void 0&&this.widget&&(this.widget.scale=e)}useHeadingEnabledWatcher(e){e!==void 0&&this.widget&&(this.widget.useHeadingEnabled=e)}referenceElementWatcher(e){d(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async componentDidLoad(){const e=this._createParams(),i=await o(e);this.widget=i,await this._addWatchers(),this._proxyEvents(),this.widgetReady.emit({widget:this.widget}),c(this)}disconnectedCallback(){h(this)}render(){return s("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await r();e(()=>this.widget.tracking,i=>this.tracking=i,{initial:!0})}_createParams(){const e={container:this.childElem};return this.geolocationOptions!==void 0&&(e.geolocationOptions=this.geolocationOptions),this.goToLocationEnabled!==void 0&&(e.goToLocationEnabled=this.goToLocationEnabled),this.graphic!==void 0&&(e.graphic=this.graphic),this.useHeadingEnabled!==void 0&&(e.useHeadingEnabled=this.useHeadingEnabled),this.scale!==void 0&&(e.scale=this.scale),this.view&&(e.view=this.view),e}_proxyEvents(){this.widget.on("track",e=>this.trackComplete.emit(e)),this.widget.on("track-error",e=>this.trackError.emit(e))}get el(){return a(this)}static get watchers(){return{position:["positionWatcher"],geolocationOptions:["geolocationOptionsWatcher"],goToLocationEnabled:["goToLocationEnabledWatcher"],graphic:["graphicWatcher"],scale:["scaleWatcher"],useHeadingEnabled:["useHeadingEnabledWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};l.style=g;export{l as arcgis_track};