import{d as M}from"./calcite-input-time-picker-b892fc00.js";import"./index-b516d057.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./form-60623048.js";import"./guid-2347ca41.js";import"./interactive-39956fb6.js";import"./key-c2c83cc7.js";import"./label2-0071fcd4.js";import"./loadable-7d42c3de.js";import"./locale-2cb18332.js";import"./observers-9c654f26.js";import"./Heading-2d7d203c.js";import"./t9n-622f279b.js";import"./math-d5d87794.js";import"./component-7281ffa6.js";import"./icon-c122f720.js";import"./openCloseComponent-3fbda1cf.js";import"./action-79a6733c.js";import"./loader-ea663d25.js";import"./input-9795a695.js";import"./progress-2100df13.js";import"./popover-33772892.js";import"./floating-ui-a6c9d5df.js";import"./debounce-7cc294e2.js";import"./FloatingArrow-9e5c8eb0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */var e="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),p="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),a="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),s=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function h(_,t){var r=_.split("_");return t%10===1&&t%100!==11?r[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?r[1]:r[2]}function o(_,t,r){var l={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return r==="m"?t?"минута":"минуту":_+" "+h(l[r],+_)}var m=function(t,r){return s.test(r)?e[t.month()]:n[t.month()]};m.s=n;m.f=e;var i=function(t,r){return s.test(r)?p[t.month()]:a[t.month()]};i.s=a;i.f=p;var d={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:m,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:o,mm:o,h:"час",hh:o,d:"день",dd:o,M:"месяц",MM:o,y:"год",yy:o},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};M.locale(d,null,!0);export{d as default};