import{d as p}from"./calcite-input-time-picker-b892fc00.js";import"./index-b516d057.js";import"./jsxFactory-92036771.js";import"./uuid-709b6c67.js";import"./form-60623048.js";import"./guid-2347ca41.js";import"./interactive-39956fb6.js";import"./key-c2c83cc7.js";import"./label2-0071fcd4.js";import"./loadable-7d42c3de.js";import"./locale-2cb18332.js";import"./observers-9c654f26.js";import"./Heading-2d7d203c.js";import"./t9n-622f279b.js";import"./math-d5d87794.js";import"./component-7281ffa6.js";import"./icon-c122f720.js";import"./openCloseComponent-3fbda1cf.js";import"./action-79a6733c.js";import"./loader-ea663d25.js";import"./input-9795a695.js";import"./progress-2100df13.js";import"./popover-33772892.js";import"./floating-ui-a6c9d5df.js";import"./debounce-7cc294e2.js";import"./FloatingArrow-9e5c8eb0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0
 */function t(i,r,a,m){var e={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return r?(e[a][2]?e[a][2]:e[a][1]).replace("%d",i):(m?e[a][0]:e[a][1]).replace("%d",i)}var o={name:"et",weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),ordinal:function(r){return r+"."},weekStart:1,relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"}};p.locale(o,null,!0);export{o as default};
