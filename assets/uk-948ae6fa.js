import{d as a}from"./calcite-input-time-picker-b892fc00.js";import"./index-b516d057.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./form-60623048.js";import"./guid-2347ca41.js";import"./interactive-39956fb6.js";import"./key-c2c83cc7.js";import"./label2-0071fcd4.js";import"./loadable-7d42c3de.js";import"./locale-2cb18332.js";import"./observers-9c654f26.js";import"./Heading-2d7d203c.js";import"./t9n-622f279b.js";import"./math-d5d87794.js";import"./component-7281ffa6.js";import"./icon-c122f720.js";import"./openCloseComponent-3fbda1cf.js";import"./action-79a6733c.js";import"./loader-ea663d25.js";import"./input-9795a695.js";import"./progress-2100df13.js";import"./popover-33772892.js";import"./floating-ui-a6c9d5df.js";import"./debounce-7cc294e2.js";import"./FloatingArrow-9e5c8eb0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */var i="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),p="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),e=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function M(m,_){var r=m.split("_");return _%10===1&&_%100!==11?r[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?r[1]:r[2]}function t(m,_,r){var s={ss:_?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:_?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:_?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return r==="m"?_?"хвилина":"хвилину":r==="h"?_?"година":"годину":m+" "+M(s[r],+m)}var o=function(_,r){return e.test(r)?i[_.month()]:p[_.month()]};o.s=p;o.f=i;var l={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:t,hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},ordinal:function(_){return _},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};a.locale(l,null,!0);export{l as default};
