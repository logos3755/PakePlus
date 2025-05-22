import{O as v,F as m,I as R,d as O,Q as y,r as S,K as j,em as z,M as I,el as P,c as g,T as E,g as c,b4 as L}from"./entry.B79t8160.js";const V=v("n-layout-sider"),_={type:String,default:"static"},$=m("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),w={embedded:Boolean,position:_,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},B=v("n-layout");function K(d){return O({name:d?"LayoutContent":"Layout",props:Object.assign(Object.assign({},y.props),w),setup(e){const s=S(null),a=S(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=j(e),u=y("Layout","-layout",$,z,e,r);function x(t,o){if(e.nativeScrollbar){const{value:l}=s;l&&(o===void 0?l.scrollTo(t):l.scrollTo(t,o))}else{const{value:l}=a;l&&l.scrollTo(t,o)}}I(B,e);let f=0,h=0;const p=t=>{var o;const l=t.target;f=l.scrollLeft,h=l.scrollTop,(o=e.onScroll)===null||o===void 0||o.call(e,t)};P(()=>{if(e.nativeScrollbar){const t=s.value;t&&(t.scrollTop=h,t.scrollLeft=f)}});const C={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:x},b=g(()=>{const{common:{cubicBezierEaseInOut:t},self:o}=u.value;return{"--n-bezier":t,"--n-color":e.embedded?o.colorEmbedded:o.color,"--n-text-color":o.textColor}}),n=i?E("layout",g(()=>e.embedded?"e":""),b,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:s,scrollbarInstRef:a,hasSiderStyle:C,mergedTheme:u,handleNativeElScroll:p,cssVars:i?void 0:b,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender},T)},render(){var e;const{mergedClsPrefix:s,hasSider:a}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=a?this.hasSiderStyle:void 0,i=[this.themeClass,d&&`${s}-layout-content`,`${s}-layout`,`${s}-layout--${this.position}-positioned`];return c("div",{class:i,style:this.cssVars},this.nativeScrollbar?c("div",{ref:"scrollableElRef",class:[`${s}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,r],onScroll:this.handleNativeElScroll},this.$slots):c(L,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,r]}),this.$slots))}})}const k=K(!1);export{k as _,B as a,K as c,V as l,_ as p};
