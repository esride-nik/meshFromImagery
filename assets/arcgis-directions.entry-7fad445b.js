import{r as a,e as h,h as i,g as n}from"./index-b516d057.js";import{t as s,u as d,i as o}from"./index-c227d296-dd1efda8.js";import{r as c,c as p}from"./component-utils-2ebdae59-b855ce5d.js";import{o as w}from"./disconnected-bc5fc8bc-72f6378d.js";const y="",l=class{constructor(e){a(this,e),this.widgetReady=h(this,"widgetReady",7),this.referenceElement=void 0,this.apiKey=void 0,this.routeLayerItemId=void 0,this.lastRoute=void 0,this.layer=void 0,this.maxStops=void 0,this.searchProperties=void 0,this.unit=void 0,this.position="bottom-left",this.expandable=!1,this.view=void 0,this.widget=void 0}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}apiKeyWatcher(e){e&&this.widget&&(this.widget.apiKey=e)}routeLayerItemIdWatcher(e){e&&this.widget&&s({portalItem:{id:e}}).then(t=>{this.layer=t})}layerWatcher(e){var t;e&&this.widget&&(this.widget.layer=e,(t=this.view)==null||t.map.add(this.layer))}maxStopsWatcher(e){e&&this.widget&&(this.widget.maxStops=e)}searchPropertiesWatcher(e){e&&this.widget&&(this.widget.searchProperties=e)}unitWatcher(e){e&&this.widget&&(this.widget.unit=e)}referenceElementWatcher(e){c(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e,this.layer&&this.widget.view.map.add(this.layer))}async getDirections(){var e;return(e=this.widget)==null?void 0:e.getDirections()}async save(){var e;return(e=this.widget)==null?void 0:e.save()}async saveAs(e,t){var r;return(r=this.widget)==null?void 0:r.saveAs(e,t)}async zoomToRoute(){var e;return(e=this.widget)==null?void 0:e.zoomToRoute()}async componentDidLoad(){const e=await this._createParams(),t=await d(e);this.widget=t,await this._addWatchers(),this.widgetReady.emit({widget:this.widget}),p(this)}disconnectedCallback(){w(this)}render(){return this.expandable?i("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},i("div",{ref:e=>this.childElem=e})):i("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await o();e(()=>this.widget.lastRoute,t=>this.lastRoute=t,{initial:!0})}async _createParams(){var t;const e={container:this.childElem};return this.view&&(e.view=this.view),this.apiKey&&(e.apiKey=this.apiKey),this.routeLayerItemId?(e.layer=await s({portalItem:{id:this.routeLayerItemId}}),this.layer=e.layer):this.layer?(e.layer=this.layer,this.layer=e.layer):(e.layer=await s({}),this.layer=e.layer),this.layer!==void 0&&((t=this.view)==null||t.map.add(this.layer)),this.maxStops!==void 0&&(e.maxStops=this.maxStops),this.searchProperties&&(e.searchProperties=this.searchProperties),this.unit&&(e.unit=this.unit),e}get el(){return n(this)}static get watchers(){return{position:["positionWatcher"],apiKey:["apiKeyWatcher"],routeLayerItemId:["routeLayerItemIdWatcher"],layer:["layerWatcher"],maxStops:["maxStopsWatcher"],searchProperties:["searchPropertiesWatcher"],unit:["unitWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};l.style=y;export{l as arcgis_directions};
