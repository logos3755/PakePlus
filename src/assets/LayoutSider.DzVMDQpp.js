import{F as n,I as d,J as l,H as h,d as C,g as a,U as A,Q as R,P as W,r as y,R as P,c as p,el as N,M as U,K as H,T as V,b4 as K,em as X}from"./entry.B79t8160.js";import{C as q}from"./Dropdown.CmVOl3u5.js";import{l as D,p as J,a as Q}from"./Layout.BrvNxXSP.js";import{u as G}from"./use-merged-state.Dyf7G0SV.js";import{r as x,c as v}from"./Button.DLsEGMw6.js";const Z=n("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[d("bordered",[l("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),l("left-placement",[d("bordered",[l("border",`
 right: 0;
 `)])]),d("right-placement",`
 justify-content: flex-start;
 `,[d("bordered",[l("border",`
 left: 0;
 `)]),d("collapsed",[n("layout-toggle-button",[n("base-icon",`
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",[h("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),n("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[n("base-icon",`
 transform: rotate(0);
 `)]),n("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[h("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),d("collapsed",[n("layout-toggle-bar",[h("&:hover",[l("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),n("layout-toggle-button",[n("base-icon",`
 transform: rotate(0);
 `)])]),n("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[n("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[l("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),l("bottom",`
 position: absolute;
 top: 34px;
 `),h("&:hover",[l("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),l("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[l("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),l("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),n("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),d("show-content",[n("layout-sider-scroll-container",{opacity:1})]),d("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),ee=C({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(A,{clsPrefix:e},{default:()=>a(q,null)}))}}),te=C({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),oe={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ie=C({name:"LayoutSider",props:Object.assign(Object.assign({},R.props),oe),setup(e){const s=W(Q),i=y(null),b=y(null),S=y(e.defaultCollapsed),f=G(P(e,"collapsed"),S),$=p(()=>x(f.value?e.collapsedWidth:e.width)),I=p(()=>e.collapseMode!=="transform"?{}:{minWidth:x(e.width)}),j=p(()=>s?s.siderPlacement:"left");function O(r,t){if(e.nativeScrollbar){const{value:o}=i;o&&(t===void 0?o.scrollTo(r):o.scrollTo(r,t))}else{const{value:o}=b;o&&o.scrollTo(r,t)}}function E(){const{"onUpdate:collapsed":r,onUpdateCollapsed:t,onExpand:o,onCollapse:m}=e,{value:u}=f;t&&v(t,!u),r&&v(r,!u),S.value=!u,u?o&&v(o):m&&v(m)}let T=0,z=0;const M=r=>{var t;const o=r.target;T=o.scrollLeft,z=o.scrollTop,(t=e.onScroll)===null||t===void 0||t.call(e,r)};N(()=>{if(e.nativeScrollbar){const r=i.value;r&&(r.scrollTop=z,r.scrollLeft=T)}}),U(D,{collapsedRef:f,collapseModeRef:P(e,"collapseMode")});const{mergedClsPrefixRef:k,inlineThemeDisabled:w}=H(e),B=R("Layout","-layout-sider",Z,X,e,k);function Y(r){var t,o;r.propertyName==="max-width"&&(f.value?(t=e.onAfterLeave)===null||t===void 0||t.call(e):(o=e.onAfterEnter)===null||o===void 0||o.call(e))}const F={scrollTo:O},_=p(()=>{const{common:{cubicBezierEaseInOut:r},self:t}=B.value,{siderToggleButtonColor:o,siderToggleButtonBorder:m,siderToggleBarColor:u,siderToggleBarColorHover:L}=t,c={"--n-bezier":r,"--n-toggle-button-color":o,"--n-toggle-button-border":m,"--n-toggle-bar-color":u,"--n-toggle-bar-color-hover":L};return e.inverted?(c["--n-color"]=t.siderColorInverted,c["--n-text-color"]=t.textColorInverted,c["--n-border-color"]=t.siderBorderColorInverted,c["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColorInverted,c.__invertScrollbar=t.__invertScrollbar):(c["--n-color"]=t.siderColor,c["--n-text-color"]=t.textColor,c["--n-border-color"]=t.siderBorderColor,c["--n-toggle-button-icon-color"]=t.siderToggleButtonIconColor),c}),g=w?V("layout-sider",p(()=>e.inverted?"a":"b"),_,e):void 0;return Object.assign({scrollableElRef:i,scrollbarInstRef:b,mergedClsPrefix:k,mergedTheme:B,styleMaxWidth:$,mergedCollapsed:f,scrollContainerStyle:I,siderPlacement:j,handleNativeElScroll:M,handleTransitionend:Y,handleTriggerClick:E,inlineThemeDisabled:w,cssVars:_,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},F)},render(){var e;const{mergedClsPrefix:s,mergedCollapsed:i,showTrigger:b}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${s}-layout-sider`,this.themeClass,`${s}-layout-sider--${this.position}-positioned`,`${s}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${s}-layout-sider--bordered`,i&&`${s}-layout-sider--collapsed`,(!i||this.showCollapsedContent)&&`${s}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:x(this.width)}]},this.nativeScrollbar?a("div",{class:[`${s}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):a(K,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),b?b==="bar"?a(te,{clsPrefix:s,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(ee,{clsPrefix:s,class:i?this.collapsedTriggerClass:this.triggerClass,style:i?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${s}-layout-sider__border`}):null)}});export{ie as _};
