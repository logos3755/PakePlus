import{H as t,F as f,en as U,I as s,J as d,bb as X,bc as Y,Q as S,d as ee,K as oe,ev as re,N as ne,c as y,b6 as z,bu as te,T as de,g as i,Z as ae,b3 as se}from"./entry.B79t8160.js";import{b,e as g}from"./use-merged-state.Dyf7G0SV.js";import{c as ie}from"./Button.DLsEGMw6.js";const le=t([f("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[U({background:"var(--n-color-modal)"}),s("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),s("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),s("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),s("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),s("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),s("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),s("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("embedded",`
 background-color: var(--n-color-embedded);
 `)]),X(f("card",`
 background: var(--n-color-modal);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Y(f("card",`
 background: var(--n-color-popover);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),k={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},he=ae(k),ce=Object.assign(Object.assign({},S.props),k),me=ee({name:"Card",props:ce,setup(o){const p=()=>{const{onClose:n}=o;n&&ie(n)},{inlineThemeDisabled:h,mergedClsPrefixRef:e,mergedRtlRef:u}=oe(o),c=S("Card","-card",le,re,o,e),x=ne("Card",u,e),m=y(()=>{const{size:n}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:v,titleTextColor:$,titleFontWeight:w,borderColor:_,actionColor:E,borderRadius:T,lineHeight:B,closeIconColor:P,closeIconColorHover:R,closeIconColorPressed:F,closeColorHover:O,closeColorPressed:j,closeBorderRadius:I,closeIconSize:M,closeSize:H,boxShadow:V,colorPopover:K,colorEmbedded:N,colorEmbeddedModal:L,colorEmbeddedPopover:W,[z("padding",n)]:A,[z("fontSize",n)]:D,[z("titleFontSize",n)]:J},common:{cubicBezierEaseInOut:Q}}=c.value,{top:Z,left:q,bottom:G}=te(A);return{"--n-bezier":Q,"--n-border-radius":T,"--n-color":r,"--n-color-modal":l,"--n-color-popover":K,"--n-color-embedded":N,"--n-color-embedded-modal":L,"--n-color-embedded-popover":W,"--n-color-target":C,"--n-text-color":v,"--n-line-height":B,"--n-action-color":E,"--n-title-text-color":$,"--n-title-font-weight":w,"--n-close-icon-color":P,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":F,"--n-close-color-hover":O,"--n-close-color-pressed":j,"--n-border-color":_,"--n-box-shadow":V,"--n-padding-top":Z,"--n-padding-bottom":G,"--n-padding-left":q,"--n-font-size":D,"--n-title-font-size":J,"--n-close-size":H,"--n-close-icon-size":M,"--n-close-border-radius":I}}),a=h?de("card",y(()=>o.size[0]),m,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:p,cssVars:h?void 0:m,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:p,hoverable:h,mergedClsPrefix:e,rtlEnabled:u,onRender:c,embedded:x,tag:m,$slots:a}=this;return c==null||c(),i(m,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:u,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:p,[`${e}-card--hoverable`]:h}],style:this.cssVars,role:this.role},b(a.cover,n=>{const r=this.cover?g([this.cover()]):n;return r&&i("div",{class:`${e}-card-cover`,role:"none"},r)}),b(a.header,n=>{const{title:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):n;return l||this.closable?i("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},i("div",{class:`${e}-card-header__main`,role:"heading"},l),b(a["header-extra"],C=>{const v=this.headerExtra?g([this.headerExtra()]):C;return v&&i("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)}),this.closable&&i(se,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),b(a.default,n=>{const{content:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):n;return l&&i("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),b(a.footer,n=>{const r=this.footer?g([this.footer()]):n;return r&&i("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),b(a.action,n=>{const r=this.action?g([this.action()]):n;return r&&i("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{me as _,he as a,k as c};
