import{r as s,e as a,h as t,g as r}from"./index-b516d057.js";import{G as n}from"./index-c227d296-dd1efda8.js";import{c as m}from"./component-utils-2ebdae59-b855ce5d.js";import{o as d}from"./disconnected-bc5fc8bc-72f6378d.js";const h="arcgis-histogram-range-slider{}",c=class{constructor(e){s(this,e),this.widgetReady=a(this,"widgetReady",7),this.referenceElement=void 0,this.max=0,this.min=0,this.position="bottom-left",this.expandable=!1,this.widget=void 0}maxWatcher(e){this.widget&&(this.widget.max=Number(e))}minWatcher(e){this.widget&&(this.widget.min=Number(e))}async componentDidLoad(){const e=this._createParams(),i=await n(e);this.widget=i,this.widgetReady.emit({widget:this.widget}),m(this)}disconnectedCallback(){d(this)}render(){return this.expandable?t("arcgis-expand",{position:this.position,ref:e=>this.expandElem=e},t("div",{ref:e=>this.childElem=e})):t("div",{ref:e=>this.childElem=e})}_createParams(){return{container:this.childElem,min:this.min,max:this.max}}get el(){return r(this)}static get watchers(){return{max:["maxWatcher"],min:["minWatcher"]}}};c.style=h;export{c as arcgis_histogram_range_slider};