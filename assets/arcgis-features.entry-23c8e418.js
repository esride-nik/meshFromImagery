import{r,e as n,h as i,g as a}from"./index-b516d057.js";import{C as d,i as c}from"./index-c227d296-dd1efda8.js";import{r as h,c as o}from"./component-utils-2ebdae59-b855ce5d.js";import{o as u}from"./disconnected-bc5fc8bc-72f6378d.js";const l="arcgis-features{}",f=class{constructor(e){r(this,e),this.widgetReady=n(this,"widgetReady",7),this.referenceElement=void 0,this.view=void 0,this.position="bottom-left",this.expandable=!1,this.content=void 0,this.features=void 0,this.selectedFeature=void 0,this.selectedFeatureIndex=void 0,this.selectedFeatureWidget=void 0,this.widget=void 0}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}referenceElementWatcher(e){h(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async fetchFeatures(e,t){var s;return(s=this.widget)==null?void 0:s.fetchFeatures(e,t)}async clear(){var e;return(e=this.widget)==null?void 0:e.clear()}async close(){var e;return(e=this.widget)==null?void 0:e.close()}async next(){var e;return(e=this.widget)==null?void 0:e.next()}async open(e){var t;return(t=this.widget)==null?void 0:t.open(e)}async previous(){var e;return(e=this.widget)==null?void 0:e.previous()}async componentDidLoad(){const e=this._createParams(),t=await d(e);this.widget=t,this._addWatchers(),this.widgetReady.emit({widget:this.widget}),o(this)}disconnectedCallback(){u(this)}render(){return this.expandable?i("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},i("div",{ref:e=>this.childElem=e})):i("div",{ref:e=>this.childElem=e})}async _addWatchers(){const{watch:e}=await c();e(()=>this.widget.selectedFeature,t=>this.selectedFeature=t,{initial:!0}),e(()=>this.widget.selectedFeatureIndex,t=>this.selectedFeatureIndex=t,{initial:!0}),e(()=>this.widget.selectedFeatureWidget,t=>this.selectedFeatureWidget=t,{initial:!0})}_createParams(){const e={container:this.childElem};return this.view&&(e.view=this.view),this.content&&(e.content=this.content),this.features&&(e.features=this.features),e}get el(){return a(this)}static get watchers(){return{position:["positionWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};f.style=l;export{f as arcgis_features};