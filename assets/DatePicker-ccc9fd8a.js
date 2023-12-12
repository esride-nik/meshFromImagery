import{a5 as l,a6 as _,a9 as N,bA as J,mm as z,s as j,b5 as v,kW as H,cb as q,ce as U,ki as g,an as Z,h7 as S,mn as V,aP as O,mo as W}from"./index-b516d057.js";import{e as R,O as Q,n as d,S as M,i as k,x as P,Q as G}from"./jsxFactory-92036771.js";import{e as m}from"./globalCss-94006b67.js";import{y as X}from"./Popover-ca6b0b13.js";import{t as I}from"./accessibleHandler-e91101b2.js";let b=class extends J{constructor(){super(...arguments),this.state="ready",this.value=new Date}};l([_()],b.prototype,"state",void 0),l([_()],b.prototype,"value",void 0),b=l([N("esri.widgets.support.DateTimeElementViewModel")],b);const ee=b;let C=class extends ee{constructor(t){super(t)}};C=l([N("esri.widgets.support.DatePickerViewModel")],C);const K=C;function te(e,t){const a=z(t),i=Date.now(),s=a.formatToParts(i),n=new Set;s.filter(({type:p})=>p==="literal").forEach(({value:p})=>n.add(p));let h=0;const o={};for(;s.length>0;){const{type:p,value:$}=s.shift();for(let w=0;w<$.length;w++,h++){const D=e.charAt(h);if(n.has(D)){h++;break}if(p==="literal")break;o[p]||(o[p]=[]),o[p].push(D)}}const y={};try{y.day=x(o.day.join("")),y.month=x(o.month.join("")),y.year=x((o.year||o.relatedYear).join(""))}catch{throw Y(t)}if(isNaN(y.day)||isNaN(y.month)||isNaN(y.year))throw Y(t);return y}function x(e){const t=[/٠/g,/١/g,/٢/g,/٣/g,/٤/g,/٥/g,/٦/g,/٧/g,/٨/g,/٩/g];for(let a=0;a<10;a++)e=e.replace(t[a],a.toString());return Number(e)}function Y(e){return new j(`could not parse date input, expecting the following format: ${v(Date.now(),e)}`)}const f={ar:6,"ar-dz":6,"ar-kw":6,"ar-ly":6,"ar-ma":1,"ar-sa":7,"ar-tn":1,bg:1,bs:1,ca:1,cs:1,da:1,de:1,"de-at":1,"de-ch":1,el:1,"en-au":1,"en-ca":7,"en-gb":1,"en-ie":1,"en-il":7,"en-in":7,"en-nz":1,"en-sg":7,es:1,"es-do":7,"es-mx":7,"es-us":7,et:1,fi:1,fr:1,"fr-ca":7,"fr-ch":1,he:7,hr:1,hu:1,id:7,it:1,"it-ch":1,ja:7,ko:7,lt:1,lv:1,nb:1,nl:1,"nl-be":1,pl:1,pt:7,"pt-br":7,ro:1,ru:1,sk:1,sl:1,sr:1,"sr-cyrl":1,sv:1,th:7,tr:1,uk:1,vi:1,"zh-cn":1,"zh-hk":7,"zh-mo":7,"zh-tw":7},ae="Locale"in Intl&&"weekInfo"in Intl.Locale.prototype;function F(e){if(e=e.toLowerCase(),f[e])return f[e];if(ae)try{const a=new Intl.Locale(e).weekInfo.firstDay;return f[e]=a,a}catch{}const t=H(e);return f[t]?f[t]:7}function ie(e,t){return(t+7-F(e))%7}const c="esri-date-picker",r={base:c,datePicker:`${c}__calendar`,monthPicker:`${c}__month-picker`,dayPicker:`${c}__day-picker`,week:`${c}__week-item`,nearbyMonth:`${c}__day-item--nearby-month`,activeDay:`${c}__day-item--active`,today:`${c}__day-item--today`,selectedDay:`${c}__day-item--selected`,day:`${c}__day-item`,dayHeader:`${c}__day-item--header`,yearPicker:`${c}__year-picker`,selectedYear:`${c}__year-picker-item--selected`,year:`${c}__year-picker-item`,monthDropdown:`${c}__month-dropdown`,date:`${c}__date`,datePickerToggle:`${c}__calendar-toggle`,dateInput:`${c}__input`,dateTextInput:`${c}__text-input`,leadingIcon:`${c}__icon--leading`},se=new Set([" ","ArrowDown","ArrowLeft","ArrowRight","ArrowUp","End","Enter","Home","PageDown","PageUp"]);let u=class extends Q{constructor(e,t){super(e,t),this._calendarNode=null,this._inputOrButtonNode=null,this._rootNode=null,this._requestDayPickerFocusOnCreate=!1,this._activeDate=null,this._calendarPopover=new X({owner:this,placement:"bottom-start",anchorElement:()=>this._rootNode,renderContentFunction:this._renderCalendar}),this._isOpen=!1,this.dateInputEnabled=!1,this.messages=null,this.commitOnMonthChange=!1,this.viewModel=new K,this.disabled=!1,this.timeZone=void 0,this.toggle=this.toggle.bind(this)}initialize(){this.addHandles(q(()=>{var e;return{viewModel:this.viewModel,value:(e=this.viewModel)==null?void 0:e.value}},({viewModel:e,value:t})=>{!this.destroyed&&e&&this.onChange!=null&&this.onChange(t)},U))}destroy(){this._calendarPopover.destroy()}get _dateTimeFormatOptions(){return{year:"numeric",month:"2-digit",day:"2-digit",timeZone:this.timeZone||void 0}}get value(){return this.viewModel.value}set value(e){this.viewModel.value=e}get isOpen(){return this._isOpen}render(){return d("div",{afterCreate:M,bind:this,class:this.classes(r.base,m.widget),"data-node-ref":"_rootNode"},this.dateInputEnabled?this._renderInputAndButtonMode():this._renderButtonOnlyMode())}toggle(){this._isOpen?this.close():this.open()}open(e=!0){this._activeDate=g.fromJSDate(this.viewModel.value),this._isOpen=!0,this._calendarPopover.open=!0,this._requestDayPickerFocusOnCreate=e}close(e=!0){var t;this._activeDate=null,this._isOpen=!1,this._calendarPopover.open=!1,e&&((t=this._inputOrButtonNode)==null||t.focus())}_renderButtonOnlyMode(){const e=v(this.viewModel.value,this._dateTimeFormatOptions),{disabled:t,_isOpen:a,messages:i}=this;return d("div",{afterCreate:M,"aria-controls":a?this._getCalendarId():null,"aria-expanded":a.toString(),"aria-haspopup":"true","aria-label":i.setDate,"aria-pressed":a.toString(),bind:this,class:this.classes(m.widgetButton,m.select,r.datePickerToggle),"data-node-ref":"_inputOrButtonNode",key:`date-button-${t}`,onclick:this.toggle,onkeydown:this._handleDateButtonKeyDown,role:"button",tabIndex:t?void 0:0},d("span",{class:r.date},e))}_renderInputAndButtonMode(){const e=v(this.viewModel.value,this._dateTimeFormatOptions),{_isOpen:t,messages:a}=this;return d("div",{class:this.classes(r.dateInput)},d("input",{afterCreate:M,"aria-controls":t?this._getCalendarId():null,"aria-haspopup":"true","aria-label":a.setDate,bind:this,class:this.classes(r.dateTextInput,m.input),"data-node-ref":"_inputOrButtonNode",key:"date-input",onblur:this._handleDateInputBlur,onclick:this._handleDateInputClick,onkeydown:this._handleDateInputKeyDown,type:"text",value:e}),d("span",{"aria-hidden":"true",class:this.classes(r.leadingIcon,k.calendar)}))}_handleDateInputClick(){this.open(!1)}_handleDateInputKeyDown(e){const{key:t}=e;this._isOpen?t==="Enter"?this._handleDateText(e):t==="Escape"&&this.close():t==="ArrowDown"&&(this.open(),e.preventDefault())}_handleDateButtonKeyDown(e){const{key:t,shiftKey:a}=e;this._isOpen&&t==="Tab"&&a?this.close():P(t)&&this.toggle()}_handleDateInputBlur(e){this._isOpen||this._handleDateText(e)}_handleDateText(e){const t=e.currentTarget;let a;try{a=te(t.value,this._dateTimeFormatOptions)}catch(s){return Z.getLogger(this).warn(s),void(t.value=v(this.viewModel.value,this._dateTimeFormatOptions))}const i=g.fromObject(a);i.isValid?(this.viewModel.value=i.toJSDate(),this._activeDate=i):t.value=v(this.viewModel.value,this._dateTimeFormatOptions)}_handleDatePickerKeydown(e){S(e)==="Escape"&&(this.close(),e.preventDefault(),e.stopPropagation())}_renderCalendar(){const e=this._activeDate;if(!e)return null;const t=g.fromJSDate(this.viewModel.value);return d("div",{afterCreate:M,bind:this,class:this.classes(r.datePicker,m.widget),"data-node-ref":"_calendarNode",id:this._getCalendarId(),key:"esri-date-picker__calendar",onfocusout:this._onCalendarFocusOut,onkeydown:this._handleDatePickerKeydown,tabIndex:-1},this._renderMonthPicker(e),this._renderDayPicker(e,t),this._renderYearPicker(e))}_getCalendarId(){return`date-picker__calendar--${this.id}`}_onCalendarFocusOut(e){var a,i;const t=e.relatedTarget;t&&t instanceof Node&&((a=this._calendarNode)!=null&&a.contains(t)||(i=this._rootNode)!=null&&i.contains(t))||this.close(!1)}_renderMonthPicker(e){const t=G(this.container),a=t?k.right:k.left,i=t?k.left:k.right,s=V.months("long",{locale:O()}).map((o,y)=>{const p=e.month-1===y;return d("option",{selected:p,value:y.toString()},o)}),{disabled:n,messages:h}=this;return d("div",{class:r.monthPicker},d("div",{"aria-label":h.goToPreviousMonth,bind:this,class:m.button,key:`previous-month-${n}`,onclick:this._setPreviousMonth,onkeydown:this._handlePreviousMonthKeyDown,role:"button",tabIndex:n?void 0:0,title:h.goToPreviousMonth},d("span",{"aria-hidden":"true",class:a})),d("select",{"aria-label":h.selectMonth,"aria-live":"assertive",bind:this,class:this.classes(r.monthDropdown,m.select),disabled:n,id:`${this.id}__month-picker`,onchange:this._setMonth,onkeydown:this._setMonth,title:h.selectMonth},s),d("div",{"aria-label":h.goToNextMonth,bind:this,class:m.button,key:`next-month-${n}`,onclick:this._setNextMonth,onkeydown:this._setNextMonth,role:"button",tabIndex:n?void 0:0,title:h.goToNextMonth},d("span",{"aria-hidden":"true",class:i})))}_renderDayPicker(e,t){const a=this._getWeekLabels(),i=this._getDayId(e),s=this._renderMonth(e,t),{id:n,disabled:h}=this;return d("div",{afterCreate:this._handleDayPickerCreate,"aria-activedescendant":i,"aria-labelledby":`${n}__month-picker ${n}__selected-year`,bind:this,class:r.dayPicker,id:`${n}__day-picker`,key:`day-picker-${h}`,onkeydown:this._handleDayPickerKeydown,role:"grid",tabIndex:h?void 0:0},d("div",{class:r.week,role:"row"},a.map(o=>d("div",{"aria-label":o.name,class:this.classes(r.day,r.dayHeader),role:"columnheader",title:o.name},o.abbr))),s)}_getDayId(e){return`${this.id}__${v(e.valueOf(),this._dateTimeFormatOptions)}`}_handleDayPickerCreate(e){this._requestDayPickerFocusOnCreate&&(this._requestDayPickerFocusOnCreate=!1,e.focus())}_getWeekLabels(){const e=[],t={weekday:"long"},a={weekday:"narrow"};let i=g.now().set({weekday:F(O())});for(let s=0;s<7;s++)e.push({name:v(i.valueOf(),t),abbr:v(i.valueOf(),a)}),i=i.plus({day:1});return e}_handleDayPickerKeydown(e){const{ctrlKey:t,shiftKey:a}=e,i=S(e);if(!se.has(i))return;let s=this._activeDate;if(s){if(i==="ArrowLeft")s=s.minus({day:1});else if(i==="ArrowRight")s=s.plus({day:1});else if(i==="ArrowUp")s=s.minus({week:1});else if(i==="ArrowDown")s=s.plus({week:1});else if(i==="PageUp"){const n=a?"year":"month";s=s.minus({[n]:1})}else if(i==="PageDown"){const n=a?"year":"month";s=s.plus({[n]:1})}else if(i==="Home"){const n=t?"year":"month";s=s.startOf(n)}else if(i==="End"){const n=t?"year":"month";s=s.endOf(n)}else P(i)&&(this.viewModel.value=s.toJSDate(),this.close());this._activeDate=s,e.preventDefault(),e.stopPropagation()}}_renderMonth(e,t){const a=g.now(),i=e.startOf("month"),s=e.endOf("month"),n=6,h=7;let o=i.minus({day:ie(O(),i.weekday)});const y=[];for(let p=0;p<n;p++){const $=[];for(let w=0;w<h;w++){const D=o.day,T=o.hasSame(e,"day"),A=o.hasSame(t,"day"),B=this._getDayId(o),E=W.fromDateTimes(i,s),L={[r.nearbyMonth]:!E.contains(o),[r.today]:o.hasSame(a,"day"),[r.activeDay]:T,[r.selectedDay]:A};$.push(d("div",{"aria-label":D.toString(),"aria-selected":T.toString(),bind:this,class:this.classes(r.day,L),"data-iso-date":o.toISO(),id:B,onclick:this._handleSelectedDate,onkeydown:this._handleSelectedDate,role:"gridcell"},D)),o=o.plus({day:1})}y.push(d("div",{class:r.week,role:"row"},$))}return y}_renderYearPicker(e){const t={year:"numeric"},a=e,i=v(a.valueOf(),t),s=v(a.plus({year:1}).valueOf(),t),n=v(a.minus({year:1}).valueOf(),t),{disabled:h,messages:o}=this;return d("div",{class:r.yearPicker},d("div",{"aria-label":o.goToPreviousYear,bind:this,class:r.year,key:`previous-year-${h}`,onclick:this._setPreviousYear,onkeydown:this._setPreviousYear,tabIndex:h?void 0:0,title:o.goToPreviousYear},n),d("div",{class:this.classes(r.year,r.selectedYear),id:`${this.id}__selected-year`},i),d("div",{"aria-label":o.goToNextYear,bind:this,class:r.year,key:`next-year-${h}`,onclick:this._setNextYear,onkeydown:this._handleNextYearKeyDown,tabIndex:h?void 0:0,title:o.goToNextYear},s))}_setMonth(e){const t=e.target,a=Number(t.value)+1;this._activeDate&&(this._activeDate=this._activeDate.set({month:a}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))}_setPreviousMonth(){this._activeDate&&(this._activeDate=this._activeDate.minus({month:1}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))}_handlePreviousMonthKeyDown(e){if(e.key==="Tab"&&e.shiftKey)return e.preventDefault(),void this.close();P(e.key)&&this._setPreviousMonth()}_setNextMonth(){this._activeDate&&(this._activeDate=this._activeDate.plus({month:1}),this.commitOnMonthChange&&(this.viewModel.value=this._activeDate.toJSDate()))}_setPreviousYear(){var e;this._activeDate=((e=this._activeDate)==null?void 0:e.minus({year:1}))??null}_setNextYear(){var e;this._activeDate=((e=this._activeDate)==null?void 0:e.plus({year:1}))??null}_handleNextYearKeyDown(e){if(e.key==="Tab"&&!e.shiftKey)return e.preventDefault(),void this.close();P(e.key)&&this._setNextYear()}_handleSelectedDate(e){const t=e.target;this.viewModel.value=g.fromISO(t.getAttribute("data-iso-date")).toJSDate(),this.close()}};l([_()],u.prototype,"_activeDate",void 0),l([_()],u.prototype,"_calendarPopover",void 0),l([_()],u.prototype,"_isOpen",void 0),l([_()],u.prototype,"_dateTimeFormatOptions",null),l([_()],u.prototype,"dateInputEnabled",void 0),l([_(),R("esri/widgets/support/t9n/DatePicker")],u.prototype,"messages",void 0),l([_()],u.prototype,"value",null),l([_()],u.prototype,"commitOnMonthChange",void 0),l([_({type:K})],u.prototype,"viewModel",void 0),l([_()],u.prototype,"onChange",void 0),l([_()],u.prototype,"disabled",void 0),l([_()],u.prototype,"timeZone",void 0),l([_()],u.prototype,"isOpen",null),l([I()],u.prototype,"_setNextMonth",null),l([I()],u.prototype,"_setPreviousYear",null),l([I()],u.prototype,"_handleSelectedDate",null),u=l([N("esri.widgets.support.DatePicker")],u);const ue=u;export{ue as C,ee as p,K as t};
