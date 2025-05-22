import{d as P,g as l,F as ae,I as t,J as g,G as z,H as y,Q as T,r as te,K as le,eg as se,M as ie,R as de,N as he,c as w,b6 as c,bu as ge,T as be,b3 as ue,O as ve}from"./entry.B79t8160.js";import{d as I,c as fe}from"./Button.DLsEGMw6.js";import{b as M}from"./use-merged-state.Dyf7G0SV.js";const Be=P({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Ce=ae("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[t("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),t("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),t("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),t("icon, avatar",[t("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),t("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),t("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),t("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},T.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=ve("n-tag"),$e=P({name:"Tag",props:pe,setup(r){const i=te(null),{mergedBorderedRef:o,mergedClsPrefixRef:b,inlineThemeDisabled:u,mergedRtlRef:B}=le(r),f=T("Tag","-tag",Ce,se,r,b);ie(me,{roundRef:de(r,"round")});function v(){if(!r.disabled&&r.checkable){const{checked:e,onCheckedChange:n,onUpdateChecked:h,"onUpdate:checked":s}=r;h&&h(!e),s&&s(!e),n&&n(!e)}}function k(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){const{onClose:n}=r;n&&fe(n,e)}}const C={setTextContent(e){const{value:n}=i;n&&(n.textContent=e)}},p=he("Tag",B,b),a=w(()=>{const{type:e,size:n,color:{color:h,textColor:s}={}}=r,{common:{cubicBezierEaseInOut:m},self:{padding:_,closeMargin:H,borderRadius:O,opacityDisabled:S,textColorCheckable:j,textColorHoverCheckable:F,textColorPressedCheckable:N,textColorChecked:E,colorCheckable:U,colorHoverCheckable:A,colorPressedCheckable:K,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:W,closeBorderRadius:G,fontWeightStrong:J,[c("colorBordered",e)]:L,[c("closeSize",n)]:Q,[c("closeIconSize",n)]:q,[c("fontSize",n)]:X,[c("height",n)]:$,[c("color",e)]:Y,[c("textColor",e)]:Z,[c("border",e)]:ee,[c("closeIconColor",e)]:R,[c("closeIconColorHover",e)]:oe,[c("closeIconColorPressed",e)]:re,[c("closeColorHover",e)]:ne,[c("closeColorPressed",e)]:ce}}=f.value,x=ge(H);return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":m,"--n-border-radius":O,"--n-border":ee,"--n-close-icon-size":q,"--n-close-color-pressed":ce,"--n-close-color-hover":ne,"--n-close-border-radius":G,"--n-close-icon-color":R,"--n-close-icon-color-hover":oe,"--n-close-icon-color-pressed":re,"--n-close-icon-color-disabled":R,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":Q,"--n-color":h||(o.value?L:Y),"--n-color-checkable":U,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":W,"--n-color-hover-checkable":A,"--n-color-pressed-checkable":K,"--n-font-size":X,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":_,"--n-text-color":s||Z,"--n-text-color-checkable":j,"--n-text-color-checked":E,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":N}}),d=u?be("tag",w(()=>{let e="";const{type:n,size:h,color:{color:s,textColor:m}={}}=r;return e+=n[0],e+=h[0],s&&(e+=`a${I(s)}`),m&&(e+=`b${I(m)}`),o.value&&(e+="c"),e}),a,r):void 0;return Object.assign(Object.assign({},C),{rtlEnabled:p,mergedClsPrefix:b,contentRef:i,mergedBordered:o,handleClick:v,handleCloseClick:k,cssVars:u?void 0:a,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var r,i;const{mergedClsPrefix:o,rtlEnabled:b,closable:u,color:{borderColor:B}={},round:f,onRender:v,$slots:k}=this;v==null||v();const C=M(k.avatar,a=>a&&l("div",{class:`${o}-tag__avatar`},a)),p=M(k.icon,a=>a&&l("div",{class:`${o}-tag__icon`},a));return l("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:b,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:f,[`${o}-tag--avatar`]:C,[`${o}-tag--icon`]:p,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||C,l("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(r=this.$slots).default)===null||i===void 0?void 0:i.call(r)),!this.checkable&&u?l(ue,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:f,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?l("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{Be as A,$e as N,me as t};
