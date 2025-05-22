import{c as x,p as b}from"./Layout.BrvNxXSP.js";import{F as f,I as l,d as h,Q as i,K as m,c as a,T as v,g as C,em as p}from"./entry.B79t8160.js";const $=x(!0),g=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[l("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),l("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),y={position:b,inverted:Boolean,bordered:{type:Boolean,default:!1}},I=h({name:"LayoutHeader",props:Object.assign(Object.assign({},i.props),y),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=m(e),c=i("Layout","-layout-header",g,p,e,r),d=a(()=>{const{common:{cubicBezierEaseInOut:u},self:t}=c.value,o={"--n-bezier":u};return e.inverted?(o["--n-color"]=t.headerColorInverted,o["--n-text-color"]=t.textColorInverted,o["--n-border-color"]=t.headerBorderColorInverted):(o["--n-color"]=t.headerColor,o["--n-text-color"]=t.textColor,o["--n-border-color"]=t.headerBorderColor),o}),n=s?v("layout-header",a(()=>e.inverted?"a":"b"),d,e):void 0;return{mergedClsPrefix:r,cssVars:s?void 0:d,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),C("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),_=f("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[l("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),l("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),z=Object.assign(Object.assign({},i.props),{inverted:Boolean,position:b,bordered:Boolean}),P=h({name:"LayoutFooter",props:z,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:s}=m(e),c=i("Layout","-layout-footer",_,p,e,r),d=a(()=>{const{common:{cubicBezierEaseInOut:u},self:t}=c.value,o={"--n-bezier":u};return e.inverted?(o["--n-color"]=t.footerColorInverted,o["--n-text-color"]=t.textColorInverted,o["--n-border-color"]=t.footerBorderColorInverted):(o["--n-color"]=t.footerColor,o["--n-text-color"]=t.textColor,o["--n-border-color"]=t.footerBorderColor),o}),n=s?v("layout-footer",a(()=>e.inverted?"a":"b"),d,e):void 0;return{mergedClsPrefix:r,cssVars:s?void 0:d,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),C("div",{class:[`${r}-layout-footer`,this.themeClass,this.position&&`${r}-layout-footer--${this.position}-positioned`,this.bordered&&`${r}-layout-footer--bordered`],style:this.cssVars},this.$slots)}});export{I as _,$ as a,P as b};
