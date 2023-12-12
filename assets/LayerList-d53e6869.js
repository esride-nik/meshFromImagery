import{V as G,a5 as g,a6 as _,eU as z,a9 as K,cd as j,cb as $,h3 as M,_ as N,dr as q,h7 as J}from"./index-b516d057.js";import{e as V,O as Q,r as W,n as r,i as I}from"./jsxFactory-92036771.js";import{y as D}from"./LayerListViewModel-3e44a2f6.js";import{k as X}from"./ListItem-5ca108fc.js";import{d as L,c as Y,o as Z,u as tt}from"./layerListUtils-a0f5e0ab.js";import{e as A}from"./globalCss-94006b67.js";import{t as S}from"./accessibleHandler-e91101b2.js";import{e as et}from"./vmEvent-d773b6c5.js";import{S as it}from"./sortable.esm-0d19b1d3.js";import"./uuid-709b6c67.js";import"./widget-826a6ea9.js";function P(t,e,i){t.splice(i,0,t.splice(e,1)[0])}const st=G.ofType(X),U="data-sort-filter",F="data-layer-uid",nt="layerUid",u="esri-layer-list",m=`${u}__item`,o={base:u,widgetIcon:I.layers,newUI:`${u}--new-ui`,noItems:`${u}__no-items`,list:`${u}__list`,listRoot:`${u}__list--root`,listExclusive:`${u}__list--exclusive`,listEmpty:`${u}__list--empty`,listEmptyState:`${u}__list-empty-state`,listEmptyStateDragEnabled:`${u}__list-empty-state--drag-enabled`,listInherited:`${u}__list--inherited`,listIndependent:`${u}__list--independent`,item:m,itemContent:`${m}-content`,itemMessage:`${m}--has-message`,itemInvisible:`${m}--invisible`,itemInvisibleAtScale:`${m}--invisible-at-scale`,itemChildren:`${m}--has-children`,itemSelectable:`${m}--selectable`,itemContainer:`${m}-container`,actionsMenu:`${m}-actions-menu`,actionsMenuItem:`${m}-actions-menu-item`,actionsMenuItemActive:`${m}-actions-menu-item--active`,actions:`${m}-actions`,actionsList:`${m}-actions-list`,action:`${m}-action`,actionIcon:`${m}-action-icon`,actionImage:`${m}-action-image`,actionTitle:`${m}-action-title`,actionToggle:`${u}__action-toggle`,actionToggleOn:`${u}__action-toggle--on`,label:`${m}-label`,message:`${m}-message`,title:`${m}-title`,statusIndicator:`${u}__status-indicator`,publishing:`${u}__publishing`,updating:`${u}__updating`,connectionStatus:`${u}__connection-status`,connectionStatusConnected:`${u}__connection-status--connected`,toggleVisible:`${m}-toggle`,toggleVisibleIcon:`${m}-toggle-icon`,toggleIcon:`${m}-toggle-icon`,radioIcon:`${m}-radio-icon`,childToggle:`${u}__child-toggle`,childToggleOpen:`${u}__child-toggle--open`,childOpened:`${u}__child-toggle-icon--opened`,childClosed:`${u}__child-toggle-icon--closed`,childClosed_RTL:`${u}__child-toggle-icon--closed-rtl`,sortableChosen:`${u}--chosen`},C={actions:"actions",actionSection:"action-section",items:"items"},k={exclusive:"exclusive",inherited:"inherited",independent:"independent"};function B(t){const{actionsOpen:e,children:i}=t;e&&(t.actionsOpen=!1),i.forEach(s=>B(s))}const R="root",H={statusIndicators:!0,errors:!1};let h=class extends Q{constructor(t,e){super(t,e),this._sortableNodes=new Map,this._sortableMap=new Map,this._focusSortUid=null,this._tooltipReferenceMap=new Map,this.visibleItems=null,this.iconClass=o.widgetIcon,this.icon=null,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.multipleSelectionEnabled=!1,this.selectionEnabled=!1,this.selectedItems=new st,this.style="classic",this.viewModel=new D,this.visibleElements={...H},this._onSortableSort=({to:i,from:s,item:n,newIndex:l})=>{s&&i&&(s===i?this._sortLayers(this._sortableMap.get(s.dataset.group)):this._moveLayerFromChildList({to:i,from:s,item:n,newIndex:l}))},this._sortableCanSort=(i,s)=>!(!i.el.dataset.group||!s.el.dataset.group),this._sortableCanPull=(i,s,n)=>{const{listItemCanGiveFunction:l}=this,a={selected:p(n),from:p(s.el),to:p(i.el)};return!this._sortableCanSort(i,s)||typeof l!="function"||l.call(null,a)},this._sortableCanPut=(i,s,n)=>{const{listItemCanReceiveFunction:l}=this,a={selected:p(n),from:p(s.el),to:p(i.el)};return!this._sortableCanSort(i,s)||typeof l!="function"||l.call(null,a)},this._onSortableEnd=({oldIndex:i,from:s,to:n,item:l})=>{s!==n&&s.insertBefore(l,s.children[i])}}initialize(){const t=this.operationalItems;this._setVisibleItems(t),this.addHandles([j(()=>this.operationalItems,"change",()=>this._itemsChanged(t)),$(()=>this.visibleElements,()=>this._itemsChanged(t)),$(()=>this.selectionEnabled,()=>this._toggleAllSorting(),M)])}loadDependencies(){return W({icon:()=>N(()=>import("./calcite-icon-39deb8ae.js"),["assets/calcite-icon-39deb8ae.js","assets/icon-c122f720.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/observers-9c654f26.js"]),tooltip:()=>N(()=>import("./calcite-tooltip-5cb74da1.js"),["assets/calcite-tooltip-5cb74da1.js","assets/jsxFactory-92036771.js","assets/index-b516d057.js","assets/index-b252abd2.css","assets/uuid-709b6c67.js","assets/floating-ui-a6c9d5df.js","assets/debounce-7cc294e2.js","assets/guid-2347ca41.js","assets/openCloseComponent-3fbda1cf.js","assets/FloatingArrow-9e5c8eb0.js"])})}destroy(){this._destroySortables(),this._tooltipReferenceMap.clear()}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(t){this.viewModel.listItemCreatedFunction=t}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(t){this.viewModel.operationalItems=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}castVisibleElements(t){return{...H,...t}}triggerAction(t,e){return this.viewModel.triggerAction(t,e)}render(){var a;const{visibleItems:t,style:e}=this,i=(a=this.viewModel)==null?void 0:a.state,s={[o.newUI]:e==="modern",[A.hidden]:i==="loading",[A.disabled]:i==="disabled"},n=this._renderItemTooltips(),l=this._renderItems();return r("div",{class:this.classes(o.base,A.widget,A.panel,s)},t.length?[n,l]:this._renderNoItems())}_renderItemTooltip(t){const{_tooltipReferenceMap:e,messages:i}=this;return t?r("calcite-tooltip",{referenceElement:e.get(t.uid)},i.layerIncompatibleTooltip):null}_renderItemTooltipNodes(t){const{incompatible:e,children:i}=t;return[e?this._renderItemTooltip(t):null,...!e&&i?i.toArray().map(s=>this._renderItemTooltipNodes(s)):[]]}_renderItemTooltips(){return this.visibleItems.toArray().map(t=>this._renderItemTooltipNodes(t))??[]}_renderNoItems(){return r("div",{class:o.noItems},this.messages.noItemsToDisplay)}_renderItems(){const{visibleItems:t,selectionEnabled:e,messages:i}=this;return r("ul",{afterCreate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,afterUpdate:this._sortNodeCreated,"aria-label":i.widgetLabel,bind:this,class:this.classes(o.list,o.listRoot,o.listIndependent),"data-group":R,role:e?"listbox":void 0},t.map(s=>this._renderItem(s,null)).toArray())}_renderActionsMenuIcon(t,e){const{messagesCommon:i}=this,s={[o.actionsMenuItemActive]:t.actionsOpen};return r("div",{"aria-controls":e,"aria-label":i.options,bind:this,class:this.classes(o.actionsMenuItem,s),"data-item":t,key:"actions-menu-toggle",onclick:this._toggleActionsOpen,onkeydown:this._toggleActionsOpen,role:"button",tabIndex:0,title:i.options},r("span",{"aria-hidden":"true",class:I.handleHorizontal}))}_renderActionsMenu(t,e,i,s){const{panel:n}=t,l=n&&n.visible?this._renderPanelButton(n):null,a=i===1&&this._getSingleActionButton(e),c=a?this._renderAction({item:t,action:a,singleAction:!0}):null,d=!a&&i?this._renderActionsMenuIcon(t,s):null;return d||l||a?r("div",{class:o.actionsMenu,key:"actions-menu"},l,c,d):null}_renderChildList(t,e){var f;const{selectionEnabled:i}=this,{visibilityMode:s,children:n}=t,l=this._hasChildren(t),a=!l&&i&&((f=t.layer)==null?void 0:f.type)==="group",{exclusive:c,inherited:d}=k,b={[o.listEmpty]:!l,[o.listExclusive]:s===c,[o.listInherited]:s===d,[o.listIndependent]:s!==d&&s!==c},y={[o.listEmptyState]:!0,[o.listEmptyStateDragEnabled]:i};return l||a?l?r("ul",{afterCreate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,afterUpdate:this._sortNodeCreated,"aria-expanded":t.open?"true":"false",bind:this,class:this.classes(o.list,b),"data-group":t.uid,"data-item":t,hidden:!t.open&&!a||null,id:e,key:"list-items",role:i?"listbox":s===c?"radiogroup":"group"},n==null?void 0:n.map(v=>this._renderItem(v,t)).toArray()):r("div",{afterCreate:this._sortNodeCreated,afterRemoved:this._sortNodeRemoved,afterUpdate:this._sortNodeCreated,bind:this,class:this.classes(y),"data-group":t.uid,"data-item":t,id:e,key:"list-items"},this.messages.noItemsToDisplay):null}_renderChildrenToggle(t,e){const{messagesCommon:i}=this,s=this._hasChildren(t),n={[o.childToggleOpen]:t.open},l=t.open?i.collapse:i.expand;return s?r("span",{"aria-controls":e,"aria-label":l,class:this.classes(o.childToggle,n),"data-item":t,key:"toggle-children",onclick:this._toggleChildrenClick,onkeydown:this._toggleChildrenClick,role:"button",tabIndex:0,title:l},r("span",{"aria-hidden":"true",class:this.classes(o.childClosed,I.rightTriangleArrow)}),r("span",{"aria-hidden":"true",class:this.classes(o.childOpened,I.downArrow)}),r("span",{"aria-hidden":"true",class:this.classes(o.childClosed_RTL,I.leftTriangleArrow)})):null}_renderItemMessage(t){return t.error?r("div",{class:o.message,key:"esri-layer-list__error",role:"alert"},r("span",{"aria-hidden":"true",class:I.noticeTriangle}),this.messages.layerError):t.incompatible?r("div",{class:o.message,key:"esri-layer-list__incompatible",role:"alert"},r("span",{afterCreate:e=>this._setTooltipReference(e,t),"aria-hidden":"true",bind:this,class:I.noticeTriangle,tabIndex:0}),this.messages.layerIncompatible):null}_renderItemContent(t,e,i){const{id:s}=this,n=`${s}_${t.uid}`,l=`${n}_actions`,a=`${n}__list`,{panel:c}=t,d=this._filterActions(t.actionsSections),b=this._countActions(d);return[r("div",{class:o.itemContainer,key:"list-item-container"},this._renderChildrenToggle(t,a),this._renderLabel(t,e,i),this._renderActionsMenu(t,d,b,l)),this._renderItemMessage(t),b?this._renderActionsSections(t,d,l):null,c&&c.open&&!c.disabled?c.render():null,this._renderChildList(t,a)]}_renderItem(t,e){var y;const{style:i,id:s,selectionEnabled:n,selectedItems:l}=this,a=`${`${s}_${t.uid}`}__title`,c=this._hasMessage(t),d=this._hasChildren(t),b={[o.itemChildren]:d,[o.itemMessage]:!!c,[o.itemInvisible]:i==="modern"&&!t.visible,[o.itemInvisibleAtScale]:!t.visibleAtCurrentScale,[o.itemSelectable]:n};if(n){const f={[F]:(y=t.layer)==null?void 0:y.uid,[U]:(!t.sortable).toString()};return r("li",{afterCreate:this._focusListItem,afterUpdate:this._focusListItem,"aria-labelledby":a,"aria-selected":L(t,l)?"true":"false",bind:this,class:this.classes(o.item,b),"data-group":e?e.uid:R,"data-item":t,key:`item-with-selection-${t.uid}`,onclick:this._toggleSelection,onkeydown:this._selectionKeydown,role:"option",tabIndex:0,...f},this._renderItemContent(t,e,a))}return r("li",{afterCreate:this._focusListItem,afterUpdate:this._focusListItem,"aria-labelledby":a,bind:this,class:this.classes(o.item,b),key:`item-no-selection-${t.uid}`},this._renderItemContent(t,e,a))}_renderConnectionIcon(t){const{connectionStatus:e}=t;return e!=null?r("calcite-icon",{icon:e==="connected"?"beacon":"offline",scale:"s"}):null}_renderItemStatus(t,e){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:s,publishing:n,updating:l}=t,a=l&&!e,c=!!s;return r("span",{class:this.classes({[o.statusIndicator]:!0,[o.publishing]:n,[o.updating]:a,[o.connectionStatus]:c,[o.connectionStatusConnected]:c&&s==="connected"}),key:"layer-item-status"},this._renderConnectionIcon(t))}_renderItemTitle(t,e){const{messages:i}=this;if(!t)return null;const s=t.title||i.untitledLayer,n=t.visibleAtCurrentScale?s:`${s} (${i.layerInvisibleAtScale})`;return r("span",{"aria-label":n,class:o.title,id:e,key:"layer-title-container",title:n},s)}_renderItemToggleIcon({visible:t},e){const{style:i}=this,{exclusive:s}=k,n=e==null?void 0:e.visibilityMode,l=i==="modern",a=n===s,c={[o.toggleVisibleIcon]:l,[o.toggleIcon]:l&&!a,[o.radioIcon]:l&&a,[I.radioChecked]:a&&t,[I.radioUnchecked]:a&&!t,[I.visible]:!a&&t,[I.nonVisible]:!a&&!t};return r("span",{"aria-hidden":"true",class:this.classes(c),key:"item-toggle-icon"})}_renderItemToggle(t,e,i){const{selectionEnabled:s,messages:n}=this,{exclusive:l}=k,a=e==null?void 0:e.visibilityMode,c=a===l?"radio":"switch";return r("span",s?{"aria-checked":t.visible?"true":"false","aria-labelledby":i,bind:this,class:o.toggleVisible,"data-item":t,"data-parent-visibility":a,key:"item-toggle-selection-enabled",onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,role:c,tabIndex:0,title:n.layerVisibility}:{class:o.toggleVisible,key:"item-toggle"},this._renderItemToggleIcon(t,e))}_renderLabel(t,e,i){const{selectionEnabled:s,style:n,messages:l}=this,{inherited:a,exclusive:c}=k,d=e==null?void 0:e.visibilityMode,b=d===c?"radio":"switch",y=this._renderItemTitle(t,i),f=this._renderItemStatus(t,e),v=this._renderItemToggle(t,e,i),T=n==="modern"?[y,f,v]:[v,y,f],E=r("div",s?{class:o.label,key:`item-label-no-selection-${t.uid}`}:{"aria-checked":t.visible?"true":"false","aria-labelledby":i,bind:this,class:o.label,"data-item":t,"data-parent-visibility":d,key:`item-label-with-selection-${t.uid}`,onclick:this._toggleVisibility,onkeydown:this._toggleVisibility,role:b,tabIndex:0,title:l.layerVisibility},T);return d===a||t.error?r("div",{class:o.label,key:`item-label-container-${t.uid}`},this._renderItemTitle(t,i),this._renderItemStatus(t,e)):E}_renderPanelButton(t){const{className:e,open:i,title:s,image:n,disabled:l}=t,a=n||e?e:I.defaultAction,c=this._getIconImageStyles(t),d={[o.actionsMenuItemActive]:i&&!l},b={[o.actionImage]:!!c["background-image"],[A.disabledElement]:t.disabled};return a&&(b[a]=!!a),r("div",{"aria-disabled":t.disabled.toString(),"aria-label":s,bind:this,class:this.classes(o.actionsMenuItem,d),"data-panel":t,key:`panel-${t.uid}`,onclick:this._triggerPanel,onkeydown:this._triggerPanel,role:"button",tabIndex:t.disabled?void 0:0,title:s},r("span",{class:this.classes(b),styles:c}))}_renderActionsSections(t,e,i){const s=e.toArray().map((n,l)=>r("ul",{class:o.actionsList,key:`${t}-action-section-${l}`},this._renderActionSection(t,n)));return r("div",{"aria-expanded":t.actionsOpen?"true":"false",class:o.actions,hidden:!t.actionsOpen||null,id:i,key:"actions-section",role:"group"},s)}_renderActionSection(t,e){return(e&&e.toArray()).map(i=>this._renderAction({item:t,action:i}))}_renderActionIcon(t){const{active:e,className:i}=t,s=this._getIconImageStyles(t),n=t.type!=="button"||t.image||i?i:I.defaultAction,l={[o.actionImage]:!e&&!!s["background-image"],[I.loadingIndicator]:e,[A.rotating]:e};return n&&!e&&(l[n]=!0),r("span",{"aria-hidden":"true",class:this.classes(o.actionIcon,l),key:"action-icon",styles:s})}_renderActionTitle(t,e){return e?null:r("span",{class:o.actionTitle,key:"action-title"},t)}_renderAction(t){const{item:e,action:i,singleAction:s}=t,{active:n,disabled:l,title:a}=i,c={[o.actionsMenuItem]:s&&i.type==="button",[o.action]:n||!s&&i.type!=="toggle",[o.actionToggle]:!n&&i.type==="toggle",[o.actionToggleOn]:!n&&i.type==="toggle"&&i.value,[A.disabledElement]:l},d=[this._renderActionIcon(i),this._renderActionTitle(a,s)];return s?r("div",{"aria-label":a??void 0,bind:this,classes:c,"data-action":i,"data-item":e,key:`single-action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:0,title:a??void 0},d):r("li",{"aria-label":a??void 0,bind:this,classes:c,"data-action":i,"data-item":e,key:`action-${i.uid}`,onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:0,title:a??void 0},d)}_setTooltipReference(t,e){this._tooltipReferenceMap.set(e.uid,t),this.scheduleRender()}_hasMessage(t){return!!t.error||t.incompatible}_hasChildren(t){return!!t.children.length&&!this._hasMessage(t)}_sortNodeRemoved(t){const{_sortableMap:e}=this,i=t.dataset.group,s=e.get(i);s&&s.destroy(),e.delete(i)}_destroySortables(){const{_sortableMap:t,_sortableNodes:e}=this;t.forEach(i=>i&&i.destroy()),t.clear(),e.clear()}_moveLayerFromChildList({to:t,from:e,item:i,newIndex:s}){const n=p(i),l=p(t),a=p(e);this.viewModel.moveListItem(n,a,l,s)}_sortLayers(t){var s,n;if(!t)return;const e=p(t.el),i=t.toArray();e?Y(e,i):Z((n=(s=this.view)==null?void 0:s.map)==null?void 0:n.layers,i)}_toggleSorting(t,e){const{_sortableMap:i,selectionEnabled:s}=this,n=i.get(e),l=p(t),a=(e===R||(l==null?void 0:l.childrenSortable)&&tt(l))&&s;if(n)n.option("disabled",!a);else if(a){const c=it.create(t,{dataIdAttr:F,group:{name:e,pull:this._sortableCanPull,put:this._sortableCanPut},filter:`[${U}="true"]`,fallbackTolerance:4,onSort:this._onSortableSort,onEnd:this._onSortableEnd,disabled:!a,chosenClass:o.sortableChosen});i.set(e,c)}}_toggleAllSorting(){this._sortableNodes.forEach((t,e)=>this._toggleSorting(t,e))}_sortNodeCreated(t){const e=t.dataset.group;e&&(this._sortableNodes.set(e,t),this._toggleSorting(t,e))}_setVisibleItems(t){this.visibleItems=t.filter(e=>!e.hidden&&(this.visibleElements.errors||!e.error))}_getSingleActionButton(t){return t.reduce(e=>e).filter(e=>e&&e.type==="button").at(0)}_focusListItem(t){var s;const{_focusSortUid:e}=this;if(!t||!e)return;const i=p(t);((s=i==null?void 0:i.layer)==null?void 0:s.uid)===e&&(t.focus(),this._focusSortUid=null)}_watchActionSectionChanges(t){this.addHandles(t.on("change",this.scheduleRender.bind(this)),C.actionSection),t.forEach(e=>this._renderOnActionChanges(e))}_renderOnActionChanges(t){t.type!=="toggle"?t.type!=="slider"?this.addHandles($(()=>[t==null?void 0:t.className,t==null?void 0:t.image,t==null?void 0:t.id,t==null?void 0:t.title,t==null?void 0:t.visible],()=>this.scheduleRender(),M),C.actions):this.addHandles($(()=>[t==null?void 0:t.className,t==null?void 0:t.id,t==null?void 0:t.title,t==null?void 0:t.visible,t==null?void 0:t.value,t==null?void 0:t.displayValueEnabled,t==null?void 0:t.max,t==null?void 0:t.min,t==null?void 0:t.step],()=>this.scheduleRender(),M),C.actions):this.addHandles($(()=>[t==null?void 0:t.className,t==null?void 0:t.image,t==null?void 0:t.id,t==null?void 0:t.title,t==null?void 0:t.visible,t==null?void 0:t.value],()=>this.scheduleRender(),M),C.actions)}_renderOnItemChanges(t){this.addHandles([$(()=>{var e,i,s;return[t==null?void 0:t.actionsOpen,t==null?void 0:t.visible,t==null?void 0:t.open,t==null?void 0:t.updating,t==null?void 0:t.connectionStatus,t==null?void 0:t.publishing,t==null?void 0:t.title,t==null?void 0:t.visibleAtCurrentScale,t==null?void 0:t.error,t==null?void 0:t.visibilityMode,t==null?void 0:t.panel,(e=t==null?void 0:t.panel)==null?void 0:e.title,(i=t==null?void 0:t.panel)==null?void 0:i.content,(s=t==null?void 0:t.panel)==null?void 0:s.className,t==null?void 0:t.sortable,t==null?void 0:t.childrenSortable]},()=>this.scheduleRender(),q),$(()=>[t==null?void 0:t.hidden,t==null?void 0:t.error],()=>this._setVisibleItems(this.operationalItems)),t.actionsSections.on("change",()=>this.scheduleRender()),t.children.on("change",()=>this.scheduleRender())],C.items),t.children.forEach(e=>this._renderOnItemChanges(e)),t.actionsSections.forEach(e=>this._watchActionSectionChanges(e))}_itemsChanged(t){this.removeHandles(C.items),this.removeHandles(C.actions),this.removeHandles(C.actionSection),t.forEach(e=>this._renderOnItemChanges(e)),this._tooltipReferenceMap.clear(),this._setVisibleItems(t),this.scheduleRender()}_filterActions(t){return t.map(e=>e.filter(i=>i.visible))}_countActions(t){return t.reduce((e,i)=>e+i.length,0)}_getIconImageStyles(t){const e=t.declaredClass==="esri.widgets.LayerList.ListItemPanel"||t.declaredClass==="esri.support.Action.ActionButton"||t.declaredClass==="esri.support.Action.ActionToggle"?t.image:null;return{"background-image":e?`url("${e}")`:void 0}}_selectionKeydown(t){var T,E,x,O;const e=["ArrowDown","ArrowUp"],i=J(t);if(!e.includes(i))return void this._toggleSelection(t);t.stopPropagation();const s=t.currentTarget,n=p(s),{_sortableMap:l,selectedItems:a}=this,c=s.dataset.group,d=l.get(c);if(!d||!n)return;const b=L(n,a),y=d.toArray(),f=t.target,v=y.indexOf(f.dataset[nt]);if(v!==-1){if(i==="ArrowDown"){const w=v+1;if(w>=y.length)return;b?(P(y,v,w),d.sort(y),this._sortLayers(d),this._focusSortUid=(T=n.layer)==null?void 0:T.uid):(this._focusSortUid=(E=n.layer)==null?void 0:E.uid,this.scheduleRender())}if(i==="ArrowUp"){const w=v-1;if(w<=-1)return;b?(P(y,v,w),d.sort(y),this._sortLayers(d),this._focusSortUid=(x=n.layer)==null?void 0:x.uid):(this._focusSortUid=(O=n.layer)==null?void 0:O.uid,this.scheduleRender())}}}_toggleActionsOpen(t){const e=p(t.currentTarget);if(!e)return;const{actionsOpen:i}=e,s=!i;s&&this.operationalItems.forEach(n=>B(n)),e.actionsOpen=s,t.stopPropagation()}_triggerPanel(t){const e=ot(t.currentTarget);t.stopPropagation(),e&&!e.disabled&&(e.open=!e.open)}_triggerAction(t){const e=t.currentTarget,i=lt(e),s=p(e);i&&s&&(i.type==="toggle"&&(i.value=!i.value),this.triggerAction(i,s),t.stopPropagation())}_toggleVisibility(t){const e=t.currentTarget,i=e.getAttribute("data-parent-visibility"),s=p(e);s&&(i===k.exclusive&&s.visible||(s.visible=!s.visible),t.stopPropagation())}_toggleChildrenClick(t){const e=p(t.currentTarget);e&&(e.open=!e.open,t.stopPropagation())}_toggleSelection(t){var a,c;t.stopPropagation();const{multipleSelectionEnabled:e,selectedItems:i}=this,s=p(t.currentTarget);if(!s)return;const n=L(s,i),{length:l}=i;if(!e)return l&&!(n&&l===1)?(i.removeAll(),void i.add(s)):void(n?(a=i.remove)==null?void 0:a.call(i,n):i.add(s));n?(c=i.remove)==null||c.call(i,n):i.add(s)}get test(){return{visibleItems:this.visibleItems}}};function p(t){return t==null?void 0:t["data-item"]}function ot(t){return t==null?void 0:t["data-panel"]}function lt(t){return t==null?void 0:t["data-action"]}g([_()],h.prototype,"visibleItems",void 0),g([_()],h.prototype,"iconClass",void 0),g([_()],h.prototype,"icon",void 0),g([_()],h.prototype,"label",null),g([_()],h.prototype,"listItemCanGiveFunction",void 0),g([_()],h.prototype,"listItemCanReceiveFunction",void 0),g([_()],h.prototype,"listItemCreatedFunction",null),g([_(),V("esri/widgets/LayerList/t9n/LayerList")],h.prototype,"messages",void 0),g([_(),V("esri/t9n/common")],h.prototype,"messagesCommon",void 0),g([_()],h.prototype,"multipleSelectionEnabled",void 0),g([_()],h.prototype,"operationalItems",null),g([_()],h.prototype,"selectionEnabled",void 0),g([_()],h.prototype,"selectedItems",void 0),g([_()],h.prototype,"style",void 0),g([_()],h.prototype,"view",null),g([et("trigger-action"),_({type:D})],h.prototype,"viewModel",void 0),g([_()],h.prototype,"visibleElements",void 0),g([z("visibleElements")],h.prototype,"castVisibleElements",null),g([S()],h.prototype,"_toggleActionsOpen",null),g([S()],h.prototype,"_triggerPanel",null),g([S()],h.prototype,"_triggerAction",null),g([S()],h.prototype,"_toggleVisibility",null),g([S()],h.prototype,"_toggleChildrenClick",null),g([S()],h.prototype,"_toggleSelection",null),h=g([K("esri.widgets.LayerList")],h);const yt=h;export{yt as default};