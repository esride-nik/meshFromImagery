import{r as s,e as r,h as i,g as n}from"./index-b516d057.js";import{p as d}from"./index-c227d296-dd1efda8.js";import{r as h,c as o}from"./component-utils-2ebdae59-b855ce5d.js";import{o as c}from"./disconnected-bc5fc8bc-72f6378d.js";const a="",l=class{constructor(e){s(this,e),this.widgetReady=r(this,"widgetReady",7),this.referenceElement=void 0,this.position="bottom-left",this.expandable=!1,this.widget=void 0,this.view=void 0}positionWatcher(e){e!==void 0&&this.widget&&typeof this.view!="string"&&this.view.ui.move(this.childElem,e)}referenceElementWatcher(e){h(this,e)}viewWatcher(e){e!==void 0&&this.widget&&(this.widget.view=e)}async componentDidLoad(){const e={container:this.childElem};this.view&&(e.view=this.view);const t=await d(e);this.widget=t,this.view&&(t.view=this.view),this.widgetReady.emit({widget:this.widget}),o(this)}disconnectedCallback(){c(this)}render(){return this.expandable?i("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},i("div",{ref:e=>this.childElem=e})):i("div",{ref:e=>this.childElem=e})}get el(){return n(this)}static get watchers(){return{position:["positionWatcher"],referenceElement:["referenceElementWatcher"],view:["viewWatcher"]}}};l.style=a;export{l as arcgis_building_explorer};
