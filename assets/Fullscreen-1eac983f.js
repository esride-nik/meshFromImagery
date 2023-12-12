import{a5 as t,a6 as r,a9 as h,bA as v,an as c}from"./index-b516d057.js";import{e as p,O as _,n as a,i as o}from"./jsxFactory-92036771.js";import{e as u}from"./globalCss-94006b67.js";import{t as g}from"./accessibleHandler-e91101b2.js";import"./uuid-709b6c67.js";let l=class extends v{constructor(e){super(e),this._vendorInfo=null,this._fullscreenStyle="width: 100%; height: 100%;",this.view=null,this._errorHandler=this._errorHandler.bind(this),this._stateHandler=this._stateHandler.bind(this)}destroy(){this._removeFullscreenListeners(),this.view=null}get element(){var e;return((e=this.view)==null?void 0:e.container)??null}set element(e){this._override("element",e)}get state(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"}enter(){this._enterFullscreen()}exit(){this._exitFullscreen()}toggle(){this._isActive()?this._exitFullscreen():this._enterFullscreen()}_isSupported(){this._removeFullscreenListeners();const e=this._getVendorInfo(this.element);return this._addFullscreenListeners(e),this._vendorInfo=e,!!e}_isActive(){return!!this._vendorInfo&&!!document[this._vendorInfo.propertyName]}_stateHandler(){this.notifyChange("state"),this.state==="active"?this._addStyle():this._removeStyle()}_errorHandler(e){c.getLogger(this).error("fullscreen request failed",e)}_getVendorInfo(e){if(e)return e.requestFullscreen?{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"}:e.webkitRequestFullScreen?{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"}:e.mozRequestFullScreen?{enterName:"mozRequestFullScreen",exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"}:void 0}_enterFullscreen(){if(this.state==="feature-unsupported")return void c.getLogger(this).warn("The fullscreen API is not supported in this browser.");const{element:e}=this;e&&(this._vendorInfo&&e[this._vendorInfo.enterName].call(e),this.notifyChange("state"))}_addStyle(){const{element:e}=this;e&&e.setAttribute("style",this._fullscreenStyle)}_removeStyle(){const{element:e}=this;e&&e.removeAttribute("style")}_exitFullscreen(){if(this.state==="feature-unsupported")return;const{element:e}=this;e&&(this._vendorInfo&&document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))}_addFullscreenListeners(e){e&&(document.addEventListener(e.changeEventName,this._stateHandler),document.addEventListener(e.errorEventName,this._errorHandler))}_removeFullscreenListeners(){const{_vendorInfo:e}=this;e&&(document.removeEventListener(e.changeEventName,this._stateHandler),document.removeEventListener(e.errorEventName,this._errorHandler))}};t([r()],l.prototype,"element",null),t([r({readOnly:!0})],l.prototype,"state",null),t([r()],l.prototype,"view",void 0),t([r()],l.prototype,"enter",null),t([r()],l.prototype,"exit",null),t([r()],l.prototype,"toggle",null),l=t([h("esri.widgets.Fullscreen.FullscreenViewModel")],l);const m=l,f={base:"esri-fullscreen"};let s=class extends _{constructor(e,n){super(e,n),this.messages=null,this.viewModel=new m}get element(){return this.viewModel.element}set element(e){this.viewModel.element=e}get fullscreenTitle(){var n;const e=(n=this.viewModel)==null?void 0:n.state;return e==="active"?this.messages.exit:e==="ready"?this.messages.enter:""}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}render(){var d;const e=(d=this.viewModel)==null?void 0:d.state,{fullscreenTitle:n}=this,i={[u.disabled]:e==="disabled"||e==="feature-unsupported"};return a("div",{"aria-label":n,bind:this,class:this.classes(f.base,u.widget,u.widgetButton,i),onclick:this._toggle,onkeydown:this._toggle,role:"button",tabIndex:0,title:n},this._renderIcon(),this._renderTitle())}_renderIcon(){var i;const e=(i=this.viewModel)==null?void 0:i.state,n={[o.zoomOutFixed]:e==="ready"||e==="disabled"||e==="feature-unsupported",[o.zoomInFixed]:e==="active"};return a("span",{"aria-hidden":"true",class:this.classes(o.icon,n)})}_renderTitle(){return a("span",{class:o.fontFallbackText},this.fullscreenTitle)}_toggle(){this.viewModel.toggle()}};t([r()],s.prototype,"element",null),t([r({readOnly:!0})],s.prototype,"fullscreenTitle",null),t([r()],s.prototype,"label",null),t([r(),p("esri/widgets/Fullscreen/t9n/Fullscreen")],s.prototype,"messages",void 0),t([r()],s.prototype,"view",null),t([r({type:m})],s.prototype,"viewModel",void 0),t([g()],s.prototype,"_toggle",null),s=t([h("esri.widgets.Fullscreen")],s);const x=s;export{x as default};