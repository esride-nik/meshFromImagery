import{d as n}from"./calcite-input-time-picker-b892fc00.js";import"./index-b516d057.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./form-60623048.js";import"./guid-2347ca41.js";import"./interactive-39956fb6.js";import"./key-c2c83cc7.js";import"./label2-0071fcd4.js";import"./loadable-7d42c3de.js";import"./locale-2cb18332.js";import"./observers-9c654f26.js";import"./Heading-2d7d203c.js";import"./t9n-622f279b.js";import"./math-d5d87794.js";import"./component-7281ffa6.js";import"./icon-c122f720.js";import"./openCloseComponent-3fbda1cf.js";import"./action-79a6733c.js";import"./loader-ea663d25.js";import"./input-9795a695.js";import"./progress-2100df13.js";import"./popover-33772892.js";import"./floating-ui-a6c9d5df.js";import"./debounce-7cc294e2.js";import"./FloatingArrow-9e5c8eb0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */var e={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(r,t){return r%10>=1&&r%10<=4&&(r%100<10||r%100>=20)?r%10===1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(r,t,a,d){var m=e.words[a];if(a.length===1)return a==="y"&&t?"jedna godina":d||t?m[0]:m[1];var o=e.correctGrammarCase(r,m);return a==="yy"&&t&&o==="%d godinu"?r+" godina":o.replace("%d",r)}},_={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:e.relativeTimeFormatter,mm:e.relativeTimeFormatter,h:e.relativeTimeFormatter,hh:e.relativeTimeFormatter,d:e.relativeTimeFormatter,dd:e.relativeTimeFormatter,M:e.relativeTimeFormatter,MM:e.relativeTimeFormatter,y:e.relativeTimeFormatter,yy:e.relativeTimeFormatter},ordinal:function(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};n.locale(_,null,!0);export{_ as default};
