import{o as Xe,e5 as tn,e as fn,d as be,g as i,P as hn,b2 as Ue,bq as Ce,U as Hn,b1 as vn,F as x,J as M,I as U,H as ne,G as Qe,Q as Oe,K as Ze,N as gn,R as j,e6 as Un,r as S,c as P,a6 as Fe,b0 as bn,b7 as qn,b6 as ge,bu as Be,M as on,T as en,bp as Gn,b4 as Jn,e7 as Qn,be as Yn,e8 as Xn,a8 as Zn,e9 as et,b8 as nt,by as tt,bz as ot,c7 as lt}from"./entry.B79t8160.js";import{t as pn,l as it,h as Ie,N as rt,j as at,u as st,a as dt,n as ln,w as ut,c as ee}from"./Button.DLsEGMw6.js";import{b as rn,r as ct,u as an}from"./use-merged-state.Dyf7G0SV.js";import{u as ft}from"./use-compitable.BTv5PzVL.js";import{i as nn,b as ht,_ as vt,u as Ye,B as gt,V as bt,a as pt}from"./Popover.rmCVgHdz.js";import{N as qe}from"./Tag.ehYFDh3x.js";import{V as sn}from"./index.DxLfcg4e.js";import{g as dn}from"./Tabs.CgZEd0ml.js";import{V as mt,N as wt}from"./Empty.Dpu5cBr_.js";function Ge(e){const a=e.filter(s=>s!==void 0);if(a.length!==0)return a.length===1?a[0]:s=>{e.forEach(c=>{c&&c(s)})}}function mn(e,a){a&&(Xe(()=>{const{value:s}=e;s&&tn.registerHandler(s,a)}),fn(()=>{const{value:s}=e;s&&tn.unregisterHandler(s)}))}const yt=be({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),xt=be({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ct(e,a){return i(vn,{name:"fade-in-scale-up-transition"},{default:()=>e?i(Hn,{clsPrefix:a,class:`${a}-base-select-option__check`},{default:()=>i(yt)}):null})}const un=be({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:a,pendingTmNodeRef:s,multipleRef:c,valueSetRef:f,renderLabelRef:v,renderOptionRef:h,labelFieldRef:r,valueFieldRef:z,showCheckmarkRef:E,nodePropsRef:F,handleOptionClick:N,handleOptionMouseEnter:R}=hn(nn),C=Ue(()=>{const{value:T}=s;return T?e.tmNode.key===T.key:!1});function w(T){const{tmNode:O}=e;O.disabled||N(T,O)}function _(T){const{tmNode:O}=e;O.disabled||R(T,O)}function K(T){const{tmNode:O}=e,{value:k}=C;O.disabled||k||R(T,O)}return{multiple:c,isGrouped:Ue(()=>{const{tmNode:T}=e,{parent:O}=T;return O&&O.rawNode.type==="group"}),showCheckmark:E,nodeProps:F,isPending:C,isSelected:Ue(()=>{const{value:T}=a,{value:O}=c;if(T===null)return!1;const k=e.tmNode.rawNode[z.value];if(O){const{value:D}=f;return D.has(k)}else return T===k}),labelField:r,renderLabel:v,renderOption:h,handleMouseMove:K,handleMouseEnter:_,handleClick:w}},render(){const{clsPrefix:e,tmNode:{rawNode:a},isSelected:s,isPending:c,isGrouped:f,showCheckmark:v,nodeProps:h,renderOption:r,renderLabel:z,handleClick:E,handleMouseEnter:F,handleMouseMove:N}=this,R=Ct(s,e),C=z?[z(a,s),v&&R]:[Ce(a[this.labelField],a,s),v&&R],w=h==null?void 0:h(a),_=i("div",Object.assign({},w,{class:[`${e}-base-select-option`,a.class,w==null?void 0:w.class,{[`${e}-base-select-option--disabled`]:a.disabled,[`${e}-base-select-option--selected`]:s,[`${e}-base-select-option--grouped`]:f,[`${e}-base-select-option--pending`]:c,[`${e}-base-select-option--show-checkmark`]:v}],style:[(w==null?void 0:w.style)||"",a.style||""],onClick:Ge([E,w==null?void 0:w.onClick]),onMouseenter:Ge([F,w==null?void 0:w.onMouseenter]),onMousemove:Ge([N,w==null?void 0:w.onMousemove])}),i("div",{class:`${e}-base-select-option__content`},C));return a.render?a.render({node:_,option:a,selected:s}):r?r({node:_,option:a,selected:s}):_}}),cn=be({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:a,labelFieldRef:s,nodePropsRef:c}=hn(nn);return{labelField:s,nodeProps:c,renderLabel:e,renderOption:a}},render(){const{clsPrefix:e,renderLabel:a,renderOption:s,nodeProps:c,tmNode:{rawNode:f}}=this,v=c==null?void 0:c(f),h=a?a(f,!1):Ce(f[this.labelField],f,!1),r=i("div",Object.assign({},v,{class:[`${e}-base-select-group-header`,v==null?void 0:v.class]}),h);return f.render?f.render({node:r,option:f}):s?s({node:r,option:f,selected:!1}):r}}),Ft=x("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[x("scrollbar",`
 max-height: var(--n-height);
 `),x("virtual-list",`
 max-height: var(--n-height);
 `),x("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[M("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),x("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),x("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),M("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),M("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),M("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),M("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),x("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),x("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ne("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ne("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[ne("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[ne("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[Qe("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),M("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[pn({enterScale:"0.5"})])])]),Ot=be({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=Ze(e),c=gn("InternalSelectMenu",s,a),f=Oe("InternalSelectMenu","-internal-select-menu",Ft,Un,e,j(e,"clsPrefix")),v=S(null),h=S(null),r=S(null),z=P(()=>e.treeMate.getFlattenedNodes()),E=P(()=>it(z.value)),F=S(null);function N(){const{treeMate:o}=e;let d=null;const{value:$}=e;$===null?d=o.getFirstAvailableNode():(e.multiple?d=o.getNode(($||[])[($||[]).length-1]):d=o.getNode($),(!d||d.disabled)&&(d=o.getFirstAvailableNode())),Y(d||null)}function R(){const{value:o}=F;o&&!e.treeMate.getNode(o.key)&&(F.value=null)}let C;Fe(()=>e.show,o=>{o?C=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?N():R(),bn(ce)):R()},{immediate:!0}):C==null||C()},{immediate:!0}),fn(()=>{C==null||C()});const w=P(()=>qn(f.value.self[ge("optionHeight",e.size)])),_=P(()=>Be(f.value.self[ge("padding",e.size)])),K=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=P(()=>{const o=z.value;return o&&o.length===0});function O(o){const{onToggle:d}=e;d&&d(o)}function k(o){const{onScroll:d}=e;d&&d(o)}function D(o){var d;(d=r.value)===null||d===void 0||d.sync(),k(o)}function B(){var o;(o=r.value)===null||o===void 0||o.sync()}function G(){const{value:o}=F;return o||null}function q(o,d){d.disabled||Y(d,!1)}function de(o,d){d.disabled||O(d)}function ue(o){var d;Ie(o,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,o)}function J(o){var d;Ie(o,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,o)}function Q(o){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,o),!e.focusable&&o.preventDefault()}function te(){const{value:o}=F;o&&Y(o.getNext({loop:!0}),!0)}function I(){const{value:o}=F;o&&Y(o.getPrev({loop:!0}),!0)}function Y(o,d=!1){F.value=o,d&&ce()}function ce(){var o,d;const $=F.value;if(!$)return;const le=E.value($.key);le!==null&&(e.virtualScroll?(o=h.value)===null||o===void 0||o.scrollTo({index:le}):(d=r.value)===null||d===void 0||d.scrollTo({index:le,elSize:w.value}))}function re(o){var d,$;!((d=v.value)===null||d===void 0)&&d.contains(o.target)&&(($=e.onFocus)===null||$===void 0||$.call(e,o))}function Se(o){var d,$;!((d=v.value)===null||d===void 0)&&d.contains(o.relatedTarget)||($=e.onBlur)===null||$===void 0||$.call(e,o)}on(nn,{handleOptionMouseEnter:q,handleOptionClick:de,valueSetRef:K,pendingTmNodeRef:F,nodePropsRef:j(e,"nodeProps"),showCheckmarkRef:j(e,"showCheckmark"),multipleRef:j(e,"multiple"),valueRef:j(e,"value"),renderLabelRef:j(e,"renderLabel"),renderOptionRef:j(e,"renderOption"),labelFieldRef:j(e,"labelField"),valueFieldRef:j(e,"valueField")}),on(ht,v),Xe(()=>{const{value:o}=r;o&&o.sync()});const oe=P(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:d},self:{height:$,borderRadius:le,color:me,groupHeaderTextColor:we,actionDividerColor:ie,optionTextColorPressed:H,optionTextColor:ye,optionTextColorDisabled:ae,optionTextColorActive:Re,optionOpacityDisabled:Te,optionCheckColor:Me,actionTextColor:Pe,optionColorPending:fe,optionColorActive:he,loadingColor:ze,loadingSize:ke,optionColorActivePending:_e,[ge("optionFontSize",o)]:xe,[ge("optionHeight",o)]:ve,[ge("optionPadding",o)]:V}}=f.value;return{"--n-height":$,"--n-action-divider-color":ie,"--n-action-text-color":Pe,"--n-bezier":d,"--n-border-radius":le,"--n-color":me,"--n-option-font-size":xe,"--n-group-header-text-color":we,"--n-option-check-color":Me,"--n-option-color-pending":fe,"--n-option-color-active":he,"--n-option-color-active-pending":_e,"--n-option-height":ve,"--n-option-opacity-disabled":Te,"--n-option-text-color":ye,"--n-option-text-color-active":Re,"--n-option-text-color-disabled":ae,"--n-option-text-color-pressed":H,"--n-option-padding":V,"--n-option-padding-left":Be(V,"left"),"--n-option-padding-right":Be(V,"right"),"--n-loading-color":ze,"--n-loading-size":ke}}),{inlineThemeDisabled:pe}=e,W=pe?en("internal-select-menu",P(()=>e.size[0]),oe,e):void 0,X={selfRef:v,next:te,prev:I,getPendingTmNode:G};return mn(v,e.onResize),Object.assign({mergedTheme:f,mergedClsPrefix:a,rtlEnabled:c,virtualListRef:h,scrollbarRef:r,itemSize:w,padding:_,flattenedNodes:z,empty:T,virtualListContainer(){const{value:o}=h;return o==null?void 0:o.listElRef},virtualListContent(){const{value:o}=h;return o==null?void 0:o.itemsElRef},doScroll:k,handleFocusin:re,handleFocusout:Se,handleKeyUp:ue,handleKeyDown:J,handleMouseDown:Q,handleVirtualListResize:B,handleVirtualListScroll:D,cssVars:pe?void 0:oe,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender},X)},render(){const{$slots:e,virtualScroll:a,clsPrefix:s,mergedTheme:c,themeClass:f,onRender:v}=this;return v==null||v(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${s}-base-select-menu`,this.rtlEnabled&&`${s}-base-select-menu--rtl`,f,this.multiple&&`${s}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},rn(e.header,h=>h&&i("div",{class:`${s}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?i("div",{class:`${s}-base-select-menu__loading`},i(Gn,{clsPrefix:s,strokeWidth:20})):this.empty?i("div",{class:`${s}-base-select-menu__empty`,"data-empty":!0},ct(e.empty,()=>[i(wt,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty,size:this.size})])):i(Jn,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:a?this.virtualListContainer:void 0,content:a?this.virtualListContent:void 0,onScroll:a?void 0:this.doScroll},{default:()=>a?i(mt,{ref:"virtualListRef",class:`${s}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?i(cn,{key:h.key,clsPrefix:s,tmNode:h}):h.ignored?null:i(un,{clsPrefix:s,key:h.key,tmNode:h})}):i("div",{class:`${s}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?i(cn,{key:h.key,clsPrefix:s,tmNode:h}):i(un,{clsPrefix:s,key:h.key,tmNode:h})))}),rn(e.action,h=>h&&[i("div",{class:`${s}-base-select-menu__action`,"data-action":!0,key:"action"},h),i(xt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),St=ne([x("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[x("base-loading",`
 color: var(--n-loading-color);
 `),x("base-selection-tags","min-height: var(--n-height);"),M("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),M("state-border",`
 z-index: 1;
 border-color: #0000;
 `),x("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[M("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),x("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[M("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),x("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[M("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),x("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),x("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[x("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[M("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),M("render-label",`
 color: var(--n-text-color);
 `)]),Qe("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),x("base-selection-label","background-color: var(--n-color-active);"),x("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[M("arrow",`
 color: var(--n-arrow-color-disabled);
 `),x("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[x("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),M("render-label",`
 color: var(--n-text-color-disabled);
 `)]),x("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),x("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),x("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[M("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),M("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[M("state-border",`border: var(--n-border-${e});`),Qe("disabled",[ne("&:hover",[M("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[M("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),x("base-selection-label",`background-color: var(--n-color-active-${e});`),x("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[M("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),x("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),x("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ne("&:last-child","padding-right: 0;"),x("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[M("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Rt=be({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:s}=Ze(e),c=gn("InternalSelection",s,a),f=S(null),v=S(null),h=S(null),r=S(null),z=S(null),E=S(null),F=S(null),N=S(null),R=S(null),C=S(null),w=S(!1),_=S(!1),K=S(!1),T=Oe("InternalSelection","-internal-selection",St,Qn,e,j(e,"clsPrefix")),O=P(()=>e.clearable&&!e.disabled&&(K.value||e.active)),k=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ce(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=P(()=>{const t=e.selectedOption;if(t)return t[e.labelField]}),B=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function G(){var t;const{value:u}=f;if(u){const{value:A}=v;A&&(A.style.width=`${u.offsetWidth}px`,e.maxTagCount!=="responsive"&&((t=R.value)===null||t===void 0||t.sync({showAllItemsBeforeCalculate:!1})))}}function q(){const{value:t}=C;t&&(t.style.display="none")}function de(){const{value:t}=C;t&&(t.style.display="inline-block")}Fe(j(e,"active"),t=>{t||q()}),Fe(j(e,"pattern"),()=>{e.multiple&&bn(G)});function ue(t){const{onFocus:u}=e;u&&u(t)}function J(t){const{onBlur:u}=e;u&&u(t)}function Q(t){const{onDeleteOption:u}=e;u&&u(t)}function te(t){const{onClear:u}=e;u&&u(t)}function I(t){const{onPatternInput:u}=e;u&&u(t)}function Y(t){var u;(!t.relatedTarget||!(!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)))&&ue(t)}function ce(t){var u;!((u=h.value)===null||u===void 0)&&u.contains(t.relatedTarget)||J(t)}function re(t){te(t)}function Se(){K.value=!0}function oe(){K.value=!1}function pe(t){!e.active||!e.filterable||t.target!==v.value&&t.preventDefault()}function W(t){Q(t)}const X=S(!1);function o(t){if(t.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:u}=e;u!=null&&u.length&&W(u[u.length-1])}}let d=null;function $(t){const{value:u}=f;if(u){const A=t.target.value;u.textContent=A,G()}e.ignoreComposition&&X.value?d=t:I(t)}function le(){X.value=!0}function me(){X.value=!1,e.ignoreComposition&&I(d),d=null}function we(t){var u;_.value=!0,(u=e.onPatternFocus)===null||u===void 0||u.call(e,t)}function ie(t){var u;_.value=!1,(u=e.onPatternBlur)===null||u===void 0||u.call(e,t)}function H(){var t,u;if(e.filterable)_.value=!1,(t=E.value)===null||t===void 0||t.blur(),(u=v.value)===null||u===void 0||u.blur();else if(e.multiple){const{value:A}=r;A==null||A.blur()}else{const{value:A}=z;A==null||A.blur()}}function ye(){var t,u,A;e.filterable?(_.value=!1,(t=E.value)===null||t===void 0||t.focus()):e.multiple?(u=r.value)===null||u===void 0||u.focus():(A=z.value)===null||A===void 0||A.focus()}function ae(){const{value:t}=v;t&&(de(),t.focus())}function Re(){const{value:t}=v;t&&t.blur()}function Te(t){const{value:u}=F;u&&u.setTextContent(`+${t}`)}function Me(){const{value:t}=N;return t}function Pe(){return v.value}let fe=null;function he(){fe!==null&&window.clearTimeout(fe)}function ze(){e.active||(he(),fe=window.setTimeout(()=>{B.value&&(w.value=!0)},100))}function ke(){he()}function _e(t){t||(he(),w.value=!1)}Fe(B,t=>{t||(w.value=!1)}),Xe(()=>{Yn(()=>{const t=E.value;t&&(e.disabled?t.removeAttribute("tabindex"):t.tabIndex=_.value?-1:0)})}),mn(h,e.onResize);const{inlineThemeDisabled:xe}=e,ve=P(()=>{const{size:t}=e,{common:{cubicBezierEaseInOut:u},self:{borderRadius:A,color:je,placeholderColor:Ke,textColor:$e,paddingSingle:Ee,paddingMultiple:Ae,caretColor:We,colorDisabled:He,textColorDisabled:Ne,placeholderColorDisabled:se,colorActive:n,boxShadowFocus:l,boxShadowActive:g,boxShadowHover:y,border:p,borderFocus:b,borderHover:m,borderActive:L,arrowColor:Z,arrowColorDisabled:yn,loadingColor:xn,colorActiveWarning:Cn,boxShadowFocusWarning:Fn,boxShadowActiveWarning:On,boxShadowHoverWarning:Sn,borderWarning:Rn,borderFocusWarning:Tn,borderHoverWarning:Mn,borderActiveWarning:Pn,colorActiveError:zn,boxShadowFocusError:kn,boxShadowActiveError:_n,boxShadowHoverError:Bn,borderError:In,borderFocusError:$n,borderHoverError:En,borderActiveError:An,clearColor:Nn,clearColorHover:Dn,clearColorPressed:Ln,clearSize:Vn,arrowSize:jn,[ge("height",t)]:Kn,[ge("fontSize",t)]:Wn}}=T.value,De=Be(Ee),Le=Be(Ae);return{"--n-bezier":u,"--n-border":p,"--n-border-active":L,"--n-border-focus":b,"--n-border-hover":m,"--n-border-radius":A,"--n-box-shadow-active":g,"--n-box-shadow-focus":l,"--n-box-shadow-hover":y,"--n-caret-color":We,"--n-color":je,"--n-color-active":n,"--n-color-disabled":He,"--n-font-size":Wn,"--n-height":Kn,"--n-padding-single-top":De.top,"--n-padding-multiple-top":Le.top,"--n-padding-single-right":De.right,"--n-padding-multiple-right":Le.right,"--n-padding-single-left":De.left,"--n-padding-multiple-left":Le.left,"--n-padding-single-bottom":De.bottom,"--n-padding-multiple-bottom":Le.bottom,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":se,"--n-text-color":$e,"--n-text-color-disabled":Ne,"--n-arrow-color":Z,"--n-arrow-color-disabled":yn,"--n-loading-color":xn,"--n-color-active-warning":Cn,"--n-box-shadow-focus-warning":Fn,"--n-box-shadow-active-warning":On,"--n-box-shadow-hover-warning":Sn,"--n-border-warning":Rn,"--n-border-focus-warning":Tn,"--n-border-hover-warning":Mn,"--n-border-active-warning":Pn,"--n-color-active-error":zn,"--n-box-shadow-focus-error":kn,"--n-box-shadow-active-error":_n,"--n-box-shadow-hover-error":Bn,"--n-border-error":In,"--n-border-focus-error":$n,"--n-border-hover-error":En,"--n-border-active-error":An,"--n-clear-size":Vn,"--n-clear-color":Nn,"--n-clear-color-hover":Dn,"--n-clear-color-pressed":Ln,"--n-arrow-size":jn}}),V=xe?en("internal-selection",P(()=>e.size[0]),ve,e):void 0;return{mergedTheme:T,mergedClearable:O,mergedClsPrefix:a,rtlEnabled:c,patternInputFocused:_,filterablePlaceholder:k,label:D,selected:B,showTagsPanel:w,isComposing:X,counterRef:F,counterWrapperRef:N,patternInputMirrorRef:f,patternInputRef:v,selfRef:h,multipleElRef:r,singleElRef:z,patternInputWrapperRef:E,overflowRef:R,inputTagElRef:C,handleMouseDown:pe,handleFocusin:Y,handleClear:re,handleMouseEnter:Se,handleMouseLeave:oe,handleDeleteOption:W,handlePatternKeyDown:o,handlePatternInputInput:$,handlePatternInputBlur:ie,handlePatternInputFocus:we,handleMouseEnterCounter:ze,handleMouseLeaveCounter:ke,handleFocusout:ce,handleCompositionEnd:me,handleCompositionStart:le,onPopoverUpdateShow:_e,focus:ye,focusInput:ae,blur:H,blurInput:Re,updateCounter:Te,getCounter:Me,getTail:Pe,renderLabel:e.renderLabel,cssVars:xe?void 0:ve,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){const{status:e,multiple:a,size:s,disabled:c,filterable:f,maxTagCount:v,bordered:h,clsPrefix:r,ellipsisTagPopoverProps:z,onRender:E,renderTag:F,renderLabel:N}=this;E==null||E();const R=v==="responsive",C=typeof v=="number",w=R||C,_=i(Xn,null,{default:()=>i(rt,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,O;return(O=(T=this.$slots).arrow)===null||O===void 0?void 0:O.call(T)}})});let K;if(a){const{labelField:T}=this,O=I=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:I.value},F?F({option:I,handleClose:()=>{this.handleDeleteOption(I)}}):i(qe,{size:s,closable:!I.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(I)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>N?N(I,!0):Ce(I[T],I,!0)})),k=()=>(C?this.selectedOptions.slice(0,v):this.selectedOptions).map(O),D=f?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,B=R?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(qe,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let G;if(C){const I=this.selectedOptions.length-v;I>0&&(G=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(qe,{size:s,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${I}`})))}const q=R?f?i(sn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:B,tail:()=>D}):i(sn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:k,counter:B}):C&&G?k().concat(G):k(),de=w?()=>i("div",{class:`${r}-base-selection-popover`},R?k():this.selectedOptions.map(O)):void 0,ue=w?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},z):null,Q=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,te=f?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},q,R?null:D,_):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:c?void 0:0},q,_);K=i(Zn,null,w?i(vt,Object.assign({},ue,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>te,default:de}):te,Q)}else if(f){const T=this.pattern||this.isComposing,O=this.active?!T:!this.selected,k=this.active?!1:this.selected;K=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:dn(this.label)},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),k?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},F?F({option:this.selectedOption,handleClose:()=>{}}):N?N(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):null,O?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,_)}else K=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:dn(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},F?F({option:this.selectedOption,handleClose:()=>{}}):N?N(this.selectedOption,!0):Ce(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),_);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},K,h?i("div",{class:`${r}-base-selection__border`}):null,h?i("div",{class:`${r}-base-selection__state-border`}):null)}});function Ve(e){return e.type==="group"}function wn(e){return e.type==="ignored"}function Je(e,a){try{return!!(1+a.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Tt(e,a){return{getIsGroup:Ve,getIgnored:wn,getKey(c){return Ve(c)?c.name||c.key||"key-required":c[e]},getChildren(c){return c[a]}}}function Mt(e,a,s,c){if(!a)return e;function f(v){if(!Array.isArray(v))return[];const h=[];for(const r of v)if(Ve(r)){const z=f(r[c]);z.length&&h.push(Object.assign({},r,{[c]:z}))}else{if(wn(r))continue;a(s,r)&&h.push(r)}return h}return f(e)}function Pt(e,a,s){const c=new Map;return e.forEach(f=>{Ve(f)?f[s].forEach(v=>{c.set(v[a],v)}):c.set(f[a],f)}),c}const zt=ne([x("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),x("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[pn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),kt=Object.assign(Object.assign({},Oe.props),{to:Ye.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Vt=be({name:"Select",props:kt,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:s,namespaceRef:c,inlineThemeDisabled:f}=Ze(e),v=Oe("Select","-select",zt,et,e,a),h=S(e.defaultValue),r=j(e,"value"),z=an(r,h),E=S(!1),F=S(""),N=ft(e,["items","options"]),R=S([]),C=S([]),w=P(()=>C.value.concat(R.value).concat(N.value)),_=P(()=>{const{filter:n}=e;if(n)return n;const{labelField:l,valueField:g}=e;return(y,p)=>{if(!p)return!1;const b=p[l];if(typeof b=="string")return Je(y,b);const m=p[g];return typeof m=="string"?Je(y,m):typeof m=="number"?Je(y,String(m)):!1}}),K=P(()=>{if(e.remote)return N.value;{const{value:n}=w,{value:l}=F;return!l.length||!e.filterable?n:Mt(n,_.value,l,e.childrenField)}}),T=P(()=>{const{valueField:n,childrenField:l}=e,g=Tt(n,l);return at(K.value,g)}),O=P(()=>Pt(w.value,e.valueField,e.childrenField)),k=S(!1),D=an(j(e,"show"),k),B=S(null),G=S(null),q=S(null),{localeRef:de}=st("Select"),ue=P(()=>{var n;return(n=e.placeholder)!==null&&n!==void 0?n:de.value.placeholder}),J=[],Q=S(new Map),te=P(()=>{const{fallbackOption:n}=e;if(n===void 0){const{labelField:l,valueField:g}=e;return y=>({[l]:String(y),[g]:y})}return n===!1?!1:l=>Object.assign(n(l),{value:l})});function I(n){const l=e.remote,{value:g}=Q,{value:y}=O,{value:p}=te,b=[];return n.forEach(m=>{if(y.has(m))b.push(y.get(m));else if(l&&g.has(m))b.push(g.get(m));else if(p){const L=p(m);L&&b.push(L)}}),b}const Y=P(()=>{if(e.multiple){const{value:n}=z;return Array.isArray(n)?I(n):[]}return null}),ce=P(()=>{const{value:n}=z;return!e.multiple&&!Array.isArray(n)?n===null?null:I([n])[0]||null:null}),re=dt(e),{mergedSizeRef:Se,mergedDisabledRef:oe,mergedStatusRef:pe}=re;function W(n,l){const{onChange:g,"onUpdate:value":y,onUpdateValue:p}=e,{nTriggerFormChange:b,nTriggerFormInput:m}=re;g&&ee(g,n,l),p&&ee(p,n,l),y&&ee(y,n,l),h.value=n,b(),m()}function X(n){const{onBlur:l}=e,{nTriggerFormBlur:g}=re;l&&ee(l,n),g()}function o(){const{onClear:n}=e;n&&ee(n)}function d(n){const{onFocus:l,showOnFocus:g}=e,{nTriggerFormFocus:y}=re;l&&ee(l,n),y(),g&&ie()}function $(n){const{onSearch:l}=e;l&&ee(l,n)}function le(n){const{onScroll:l}=e;l&&ee(l,n)}function me(){var n;const{remote:l,multiple:g}=e;if(l){const{value:y}=Q;if(g){const{valueField:p}=e;(n=Y.value)===null||n===void 0||n.forEach(b=>{y.set(b[p],b)})}else{const p=ce.value;p&&y.set(p[e.valueField],p)}}}function we(n){const{onUpdateShow:l,"onUpdate:show":g}=e;l&&ee(l,n),g&&ee(g,n),k.value=n}function ie(){oe.value||(we(!0),k.value=!0,e.filterable&&Ae())}function H(){we(!1)}function ye(){F.value="",C.value=J}const ae=S(!1);function Re(){e.filterable&&(ae.value=!0)}function Te(){e.filterable&&(ae.value=!1,D.value||ye())}function Me(){oe.value||(D.value?e.filterable?Ae():H():ie())}function Pe(n){var l,g;!((g=(l=q.value)===null||l===void 0?void 0:l.selfRef)===null||g===void 0)&&g.contains(n.relatedTarget)||(E.value=!1,X(n),H())}function fe(n){d(n),E.value=!0}function he(){E.value=!0}function ze(n){var l;!((l=B.value)===null||l===void 0)&&l.$el.contains(n.relatedTarget)||(E.value=!1,X(n),H())}function ke(){var n;(n=B.value)===null||n===void 0||n.focus(),H()}function _e(n){var l;D.value&&(!((l=B.value)===null||l===void 0)&&l.$el.contains(lt(n))||H())}function xe(n){if(!Array.isArray(n))return[];if(te.value)return Array.from(n);{const{remote:l}=e,{value:g}=O;if(l){const{value:y}=Q;return n.filter(p=>g.has(p)||y.has(p))}else return n.filter(y=>g.has(y))}}function ve(n){V(n.rawNode)}function V(n){if(oe.value)return;const{tag:l,remote:g,clearFilterAfterSelect:y,valueField:p}=e;if(l&&!g){const{value:b}=C,m=b[0]||null;if(m){const L=R.value;L.length?L.push(m):R.value=[m],C.value=J}}if(g&&Q.value.set(n[p],n),e.multiple){const b=xe(z.value),m=b.findIndex(L=>L===n[p]);if(~m){if(b.splice(m,1),l&&!g){const L=t(n[p]);~L&&(R.value.splice(L,1),y&&(F.value=""))}}else b.push(n[p]),y&&(F.value="");W(b,I(b))}else{if(l&&!g){const b=t(n[p]);~b?R.value=[R.value[b]]:R.value=J}Ee(),H(),W(n[p],n)}}function t(n){return R.value.findIndex(g=>g[e.valueField]===n)}function u(n){D.value||ie();const{value:l}=n.target;F.value=l;const{tag:g,remote:y}=e;if($(l),g&&!y){if(!l){C.value=J;return}const{onCreate:p}=e,b=p?p(l):{[e.labelField]:l,[e.valueField]:l},{valueField:m,labelField:L}=e;N.value.some(Z=>Z[m]===b[m]||Z[L]===b[L])||R.value.some(Z=>Z[m]===b[m]||Z[L]===b[L])?C.value=J:C.value=[b]}}function A(n){n.stopPropagation();const{multiple:l}=e;!l&&e.filterable&&H(),o(),l?W([],[]):W(null,null)}function je(n){!Ie(n,"action")&&!Ie(n,"empty")&&!Ie(n,"header")&&n.preventDefault()}function Ke(n){le(n)}function $e(n){var l,g,y,p,b;if(!e.keyboard){n.preventDefault();return}switch(n.key){case" ":if(e.filterable)break;n.preventDefault();case"Enter":if(!(!((l=B.value)===null||l===void 0)&&l.isComposing)){if(D.value){const m=(g=q.value)===null||g===void 0?void 0:g.getPendingTmNode();m?ve(m):e.filterable||(H(),Ee())}else if(ie(),e.tag&&ae.value){const m=C.value[0];if(m){const L=m[e.valueField],{value:Z}=z;e.multiple&&Array.isArray(Z)&&Z.includes(L)||V(m)}}}n.preventDefault();break;case"ArrowUp":if(n.preventDefault(),e.loading)return;D.value&&((y=q.value)===null||y===void 0||y.prev());break;case"ArrowDown":if(n.preventDefault(),e.loading)return;D.value?(p=q.value)===null||p===void 0||p.next():ie();break;case"Escape":D.value&&(ut(n),H()),(b=B.value)===null||b===void 0||b.focus();break}}function Ee(){var n;(n=B.value)===null||n===void 0||n.focus()}function Ae(){var n;(n=B.value)===null||n===void 0||n.focusInput()}function We(){var n;D.value&&((n=G.value)===null||n===void 0||n.syncPosition())}me(),Fe(j(e,"options"),me);const He={focus:()=>{var n;(n=B.value)===null||n===void 0||n.focus()},focusInput:()=>{var n;(n=B.value)===null||n===void 0||n.focusInput()},blur:()=>{var n;(n=B.value)===null||n===void 0||n.blur()},blurInput:()=>{var n;(n=B.value)===null||n===void 0||n.blurInput()}},Ne=P(()=>{const{self:{menuBoxShadow:n}}=v.value;return{"--n-menu-box-shadow":n}}),se=f?en("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},He),{mergedStatus:pe,mergedClsPrefix:a,mergedBordered:s,namespace:c,treeMate:T,isMounted:nt(),triggerRef:B,menuRef:q,pattern:F,uncontrolledShow:k,mergedShow:D,adjustedTo:Ye(e),uncontrolledValue:h,mergedValue:z,followerRef:G,localizedPlaceholder:ue,selectedOption:ce,selectedOptions:Y,mergedSize:Se,mergedDisabled:oe,focused:E,activeWithoutMenuOpen:ae,inlineThemeDisabled:f,onTriggerInputFocus:Re,onTriggerInputBlur:Te,handleTriggerOrMenuResize:We,handleMenuFocus:he,handleMenuBlur:ze,handleMenuTabOut:ke,handleTriggerClick:Me,handleToggle:ve,handleDeleteOption:V,handlePatternInput:u,handleClear:A,handleTriggerBlur:Pe,handleTriggerFocus:fe,handleKeydown:$e,handleMenuAfterLeave:ye,handleMenuClickOutside:_e,handleMenuScroll:Ke,handleMenuKeydown:$e,handleMenuMousedown:je,mergedTheme:v,cssVars:f?void 0:Ne,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(gt,null,{default:()=>[i(bt,null,{default:()=>i(Rt,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,a;return[(a=(e=this.$slots).arrow)===null||a===void 0?void 0:a.call(e)]}})}),i(pt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ye.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(vn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,a,s;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),tt(i(Ot,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(a=this.menuProps)===null||a===void 0?void 0:a.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(s=this.menuProps)===null||s===void 0?void 0:s.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,f;return[(f=(c=this.$slots).empty)===null||f===void 0?void 0:f.call(c)]},header:()=>{var c,f;return[(f=(c=this.$slots).header)===null||f===void 0?void 0:f.call(c)]},action:()=>{var c,f;return[(f=(c=this.$slots).action)===null||f===void 0?void 0:f.call(c)]}}),this.displayDirective==="show"?[[ot,this.mergedShow],[ln,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ln,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Ot as N,Vt as _,Tt as c,Ge as m};
