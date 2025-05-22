import{a5 as D,r as y,bJ as U,b9 as Z,e as K,bK as V,o as De,a6 as W,Z as Ce,H as X,F as B,J as k,I as M,bb as He,en as Ke,d as ee,Q as H,K as ke,N as qe,c as z,eo as Ue,b6 as Ve,bu as We,T as we,g as l,bq as $,U as Xe,b3 as Ye,bV as ie,bW as Je,Y as Ge,bX as Qe,O as Ze,R as Y,P as J,b0 as se,M as N,cb as en,c3 as nn,bA as tn,by as G,bz as le,b4 as on,b1 as xe,a0 as Q,bC as sn,b8 as ln,ep as an,c7 as rn}from"./entry.B79t8160.js";import{c as cn,_ as dn,a as un}from"./Card.t-T5tsO1.js";import{b as q,r as ae}from"./use-merged-state.Dyf7G0SV.js";import{A as Pe,D as Re,i as fn,B as re,E as Se,q as hn,o as gn,p as mn,G as vn,F as pn,n as bn,t as yn,L as Cn,H as kn,c as _,s as wn,z as xn}from"./Button.DLsEGMw6.js";const j=y(null);function ce(e){if(e.clientX>0||e.clientY>0)j.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:o,top:i,width:u,height:d}=n.getBoundingClientRect();o>0||i>0?j.value={x:o+u/2,y:i+d/2}:j.value={x:0,y:0}}else j.value=null}}let A=0,de=!0;function Pn(){if(!Pe)return D(y(null));A===0&&U("click",document,ce,!0);const e=()=>{A+=1};return de&&(de=Re())?(Z(e),K(()=>{A-=1,A===0&&V("click",document,ce,!0)})):e(),D(j)}const Rn=y(void 0);let L=0;function ue(){Rn.value=Date.now()}let fe=!0;function Sn(e){if(!Pe)return D(y(!1));const n=y(!1);let o=null;function i(){o!==null&&window.clearTimeout(o)}function u(){i(),n.value=!0,o=window.setTimeout(()=>{n.value=!1},e)}L===0&&U("click",window,ue,!0);const d=()=>{L+=1,U("click",window,u,!0)};return fe&&(fe=Re())?(Z(d),K(()=>{L-=1,L===0&&V("click",window,ue,!0),V("click",window,u,!0),i()})):d(),D(n)}let T=0,he="",ge="",me="",ve="";const pe=y("0px");function Bn(e){if(typeof document>"u")return;const n=document.documentElement;let o,i=!1;const u=()=>{n.style.marginRight=he,n.style.overflow=ge,n.style.overflowX=me,n.style.overflowY=ve,pe.value="0px"};De(()=>{o=W(e,d=>{if(d){if(!T){const a=window.innerWidth-n.offsetWidth;a>0&&(he=n.style.marginRight,n.style.marginRight=`${a}px`,pe.value=`${a}px`),ge=n.style.overflow,me=n.style.overflowX,ve=n.style.overflowY,n.style.overflow="hidden",n.style.overflowX="hidden",n.style.overflowY="hidden"}i=!0,T++}else T--,T||u(),i=!1},{immediate:!0})}),K(()=>{o==null||o(),i&&(T--,T||u(),i=!1)})}const ne=y(!1);function be(){ne.value=!0}function ye(){ne.value=!1}let E=0;function On(){return fn&&(Z(()=>{E||(window.addEventListener("compositionstart",be),window.addEventListener("compositionend",ye)),E++}),K(()=>{E<=1?(window.removeEventListener("compositionstart",be),window.removeEventListener("compositionend",ye),E=0):E--})),ne}const te={icon:Function,type:{type:String,default:"default"},title:[String,Function],closable:{type:Boolean,default:!0},negativeText:String,positiveText:String,positiveButtonProps:Object,negativeButtonProps:Object,content:[String,Function],action:Function,showIcon:{type:Boolean,default:!0},loading:Boolean,bordered:Boolean,iconPlacement:String,titleClass:[String,Array],titleStyle:[String,Object],contentClass:[String,Array],contentStyle:[String,Object],actionClass:[String,Array],actionStyle:[String,Object],onPositiveClick:Function,onNegativeClick:Function,onClose:Function},Fn=Ce(te),$n=X([B("dialog",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[k("icon",{color:"var(--n-icon-color)"}),M("bordered",{border:"var(--n-border)"}),M("icon-top",[k("close",{margin:"var(--n-close-margin)"}),k("icon",{margin:"var(--n-icon-margin)"}),k("content",{textAlign:"center"}),k("title",{justifyContent:"center"}),k("action",{justifyContent:"center"})]),M("icon-left",[k("icon",{margin:"var(--n-icon-margin)"}),M("closable",[k("title",`
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]),k("close",`
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `),k("content",`
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,[M("last","margin-bottom: 0;")]),k("action",`
 display: flex;
 justify-content: flex-end;
 `,[X("> *:not(:last-child)",`
 margin-right: var(--n-action-space);
 `)]),k("icon",`
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `),k("title",`
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),B("dialog-icon-container",`
 display: flex;
 justify-content: center;
 `)]),He(B("dialog",`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)),B("dialog",[Ke(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]),Tn={default:()=>l(ie,null),info:()=>l(ie,null),success:()=>l(Je,null),warning:()=>l(Ge,null),error:()=>l(Qe,null)},zn=ee({name:"Dialog",alias:["NimbusConfirmCard","Confirm"],props:Object.assign(Object.assign({},H.props),te),setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:u}=ke(e),d=qe("Dialog",u,o),a=z(()=>{var h,g;const{iconPlacement:C}=e;return C||((g=(h=n==null?void 0:n.value)===null||h===void 0?void 0:h.Dialog)===null||g===void 0?void 0:g.iconPlacement)||"left"});function p(h){const{onPositiveClick:g}=e;g&&g(h)}function b(h){const{onNegativeClick:g}=e;g&&g(h)}function x(){const{onClose:h}=e;h&&h()}const P=H("Dialog","-dialog",$n,Ue,e,o),R=z(()=>{const{type:h}=e,g=a.value,{common:{cubicBezierEaseInOut:C},self:{fontSize:r,lineHeight:m,border:c,titleTextColor:O,textColor:S,color:v,closeBorderRadius:t,closeColorHover:s,closeColorPressed:w,closeIconColor:F,closeIconColorHover:Be,closeIconColorPressed:Oe,closeIconSize:Fe,borderRadius:$e,titleFontWeight:Te,titleFontSize:ze,padding:Me,iconSize:Ee,actionSpace:je,contentMargin:Ie,closeSize:_e,[g==="top"?"iconMarginIconTop":"iconMargin"]:Ae,[g==="top"?"closeMarginIconTop":"closeMargin"]:Le,[Ve("iconColor",h)]:Ne}}=P.value,I=We(Ae);return{"--n-font-size":r,"--n-icon-color":Ne,"--n-bezier":C,"--n-close-margin":Le,"--n-icon-margin-top":I.top,"--n-icon-margin-right":I.right,"--n-icon-margin-bottom":I.bottom,"--n-icon-margin-left":I.left,"--n-icon-size":Ee,"--n-close-size":_e,"--n-close-icon-size":Fe,"--n-close-border-radius":t,"--n-close-color-hover":s,"--n-close-color-pressed":w,"--n-close-icon-color":F,"--n-close-icon-color-hover":Be,"--n-close-icon-color-pressed":Oe,"--n-color":v,"--n-text-color":S,"--n-border-radius":$e,"--n-padding":Me,"--n-line-height":m,"--n-border":c,"--n-content-margin":Ie,"--n-title-font-size":ze,"--n-title-font-weight":Te,"--n-title-text-color":O,"--n-action-space":je}}),f=i?we("dialog",z(()=>`${e.type[0]}${a.value[0]}`),R,e):void 0;return{mergedClsPrefix:o,rtlEnabled:d,mergedIconPlacement:a,mergedTheme:P,handlePositiveClick:p,handleNegativeClick:b,handleCloseClick:x,cssVars:i?void 0:R,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var e;const{bordered:n,mergedIconPlacement:o,cssVars:i,closable:u,showIcon:d,title:a,content:p,action:b,negativeText:x,positiveText:P,positiveButtonProps:R,negativeButtonProps:f,handlePositiveClick:h,handleNegativeClick:g,mergedTheme:C,loading:r,type:m,mergedClsPrefix:c}=this;(e=this.onRender)===null||e===void 0||e.call(this);const O=d?l(Xe,{clsPrefix:c,class:`${c}-dialog__icon`},{default:()=>q(this.$slots.icon,v=>v||(this.icon?$(this.icon):Tn[this.type]()))}):null,S=q(this.$slots.action,v=>v||P||x||b?l("div",{class:[`${c}-dialog__action`,this.actionClass],style:this.actionStyle},v||(b?[$(b)]:[this.negativeText&&l(re,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,ghost:!0,size:"small",onClick:g},f),{default:()=>$(this.negativeText)}),this.positiveText&&l(re,Object.assign({theme:C.peers.Button,themeOverrides:C.peerOverrides.Button,size:"small",type:m==="default"?"primary":m,disabled:r,loading:r,onClick:h},R),{default:()=>$(this.positiveText)})])):null);return l("div",{class:[`${c}-dialog`,this.themeClass,this.closable&&`${c}-dialog--closable`,`${c}-dialog--icon-${o}`,n&&`${c}-dialog--bordered`,this.rtlEnabled&&`${c}-dialog--rtl`],style:i,role:"dialog"},u?q(this.$slots.close,v=>{const t=[`${c}-dialog__close`,this.rtlEnabled&&`${c}-dialog--rtl`];return v?l("div",{class:t},v):l(Ye,{clsPrefix:c,class:t,onClick:this.handleCloseClick})}):null,d&&o==="top"?l("div",{class:`${c}-dialog-icon-container`},O):null,l("div",{class:[`${c}-dialog__title`,this.titleClass],style:this.titleStyle},d&&o==="left"?O:null,ae(this.$slots.header,()=>[$(a)])),l("div",{class:[`${c}-dialog__content`,S?"":`${c}-dialog__content--last`,this.contentClass],style:this.contentStyle},ae(this.$slots.default,()=>[$(p)])),S)}}),Mn=Ze("n-dialog-provider"),oe=Object.assign(Object.assign({},cn),te),En=Ce(oe),jn=ee({name:"ModalBody",inheritAttrs:!1,props:Object.assign(Object.assign({show:{type:Boolean,required:!0},preset:String,displayDirective:{type:String,required:!0},trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},blockScroll:Boolean},oe),{renderMask:Function,onClickoutside:Function,onBeforeLeave:{type:Function,required:!0},onAfterLeave:{type:Function,required:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0},onClose:{type:Function,required:!0},onAfterEnter:Function,onEsc:Function}),setup(e){const n=y(null),o=y(null),i=y(e.show),u=y(null),d=y(null);W(Y(e,"show"),r=>{r&&(i.value=!0)}),Bn(z(()=>e.blockScroll&&i.value));const a=J(Se);function p(){if(a.transformOriginRef.value==="center")return"";const{value:r}=u,{value:m}=d;if(r===null||m===null)return"";if(o.value){const c=o.value.containerScrollTop;return`${r}px ${m+c}px`}return""}function b(r){if(a.transformOriginRef.value==="center")return;const m=a.getMousePosition();if(!m||!o.value)return;const c=o.value.containerScrollTop,{offsetLeft:O,offsetTop:S}=r;if(m){const v=m.y,t=m.x;u.value=-(O-t),d.value=-(S-v-c)}r.style.transformOrigin=p()}function x(r){se(()=>{b(r)})}function P(r){r.style.transformOrigin=p(),e.onBeforeLeave()}function R(){i.value=!1,u.value=null,d.value=null,e.onAfterLeave()}function f(){const{onClose:r}=e;r&&r()}function h(){e.onNegativeClick()}function g(){e.onPositiveClick()}const C=y(null);return W(C,r=>{r&&se(()=>{const m=r.el;m&&n.value!==m&&(n.value=m)})}),N(hn,n),N(gn,null),N(mn,null),{mergedTheme:a.mergedThemeRef,appear:a.appearRef,isMounted:a.isMountedRef,mergedClsPrefix:a.mergedClsPrefixRef,bodyRef:n,scrollbarRef:o,displayed:i,childNodeRef:C,handlePositiveClick:g,handleNegativeClick:h,handleCloseClick:f,handleAfterLeave:R,handleBeforeLeave:P,handleEnter:x}},render(){const{$slots:e,$attrs:n,handleEnter:o,handleAfterLeave:i,handleBeforeLeave:u,preset:d,mergedClsPrefix:a}=this;let p=null;if(!d){if(p=vn(e),!p){en("modal","default slot is empty");return}p=nn(p),p.props=tn({class:`${a}-modal`},n,p.props||{})}return this.displayDirective==="show"||this.displayed||this.show?G(l("div",{role:"none",class:`${a}-modal-body-wrapper`},l(on,{ref:"scrollbarRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:`${a}-modal-scroll-content`},{default:()=>{var b;return[(b=this.renderMask)===null||b===void 0?void 0:b.call(this),l(pn,{disabled:!this.trapFocus,active:this.show,onEsc:this.onEsc,autoFocus:this.autoFocus},{default:()=>{var x;return l(xe,{name:"fade-in-scale-up-transition",appear:(x=this.appear)!==null&&x!==void 0?x:this.isMounted,onEnter:o,onAfterEnter:this.onAfterEnter,onAfterLeave:i,onBeforeLeave:u},{default:()=>{const P=[[le,this.show]],{onClickoutside:R}=this;return R&&P.push([bn,this.onClickoutside,void 0,{capture:!0}]),G(this.preset==="confirm"||this.preset==="dialog"?l(zn,Object.assign({},this.$attrs,{class:[`${a}-modal`,this.$attrs.class],ref:"bodyRef",theme:this.mergedTheme.peers.Dialog,themeOverrides:this.mergedTheme.peerOverrides.Dialog},Q(this.$props,Fn),{"aria-modal":"true"}),e):this.preset==="card"?l(dn,Object.assign({},this.$attrs,{ref:"bodyRef",class:[`${a}-modal`,this.$attrs.class],theme:this.mergedTheme.peers.Card,themeOverrides:this.mergedTheme.peerOverrides.Card},Q(this.$props,un),{"aria-modal":"true",role:"dialog"}),e):this.childNodeRef=p,P)}})}})]}})),[[le,this.displayDirective==="if"||this.displayed||this.show]]):null}}),In=X([B("modal-container",`
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `),B("modal-mask",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,[sn({enterDuration:".25s",leaveDuration:".25s",enterCubicBezier:"var(--n-bezier-ease-out)",leaveCubicBezier:"var(--n-bezier-ease-out)"})]),B("modal-body-wrapper",`
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,[B("modal-scroll-content",`
 min-height: 100%;
 display: flex;
 position: relative;
 `)]),B("modal",`
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,[yn({duration:".25s",enterScale:".5"})])]),_n=Object.assign(Object.assign(Object.assign(Object.assign({},H.props),{show:Boolean,unstableShowMask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},preset:String,to:[String,Object],displayDirective:{type:String,default:"if"},transformOrigin:{type:String,default:"mouse"},zIndex:Number,autoFocus:{type:Boolean,default:!0},trapFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}}),oe),{onEsc:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onBeforeLeave:Function,onAfterLeave:Function,onClose:Function,onPositiveClick:Function,onNegativeClick:Function,onMaskClick:Function,internalDialog:Boolean,internalModal:Boolean,internalAppear:{type:Boolean,default:void 0},overlayStyle:[String,Object],onBeforeHide:Function,onAfterHide:Function,onHide:Function}),Hn=ee({name:"Modal",inheritAttrs:!1,props:_n,setup(e){const n=y(null),{mergedClsPrefixRef:o,namespaceRef:i,inlineThemeDisabled:u}=ke(e),d=H("Modal","-modal",In,an,e,o),a=Sn(64),p=Pn(),b=ln(),x=e.internalDialog?J(Mn,null):null,P=e.internalModal?J(kn,null):null,R=On();function f(t){const{onUpdateShow:s,"onUpdate:show":w,onHide:F}=e;s&&_(s,t),w&&_(w,t),F&&!t&&F(t)}function h(){const{onClose:t}=e;t?Promise.resolve(t()).then(s=>{s!==!1&&f(!1)}):f(!1)}function g(){const{onPositiveClick:t}=e;t?Promise.resolve(t()).then(s=>{s!==!1&&f(!1)}):f(!1)}function C(){const{onNegativeClick:t}=e;t?Promise.resolve(t()).then(s=>{s!==!1&&f(!1)}):f(!1)}function r(){const{onBeforeLeave:t,onBeforeHide:s}=e;t&&_(t),s&&s()}function m(){const{onAfterLeave:t,onAfterHide:s}=e;t&&_(t),s&&s()}function c(t){var s;const{onMaskClick:w}=e;w&&w(t),e.maskClosable&&!((s=n.value)===null||s===void 0)&&s.contains(rn(t))&&f(!1)}function O(t){var s;(s=e.onEsc)===null||s===void 0||s.call(e),e.show&&e.closeOnEsc&&wn(t)&&(R.value||f(!1))}N(Se,{getMousePosition:()=>{const t=x||P;if(t){const{clickedRef:s,clickedPositionRef:w}=t;if(s.value&&w.value)return w.value}return a.value?p.value:null},mergedClsPrefixRef:o,mergedThemeRef:d,isMountedRef:b,appearRef:Y(e,"internalAppear"),transformOriginRef:Y(e,"transformOrigin")});const S=z(()=>{const{common:{cubicBezierEaseOut:t},self:{boxShadow:s,color:w,textColor:F}}=d.value;return{"--n-bezier-ease-out":t,"--n-box-shadow":s,"--n-color":w,"--n-text-color":F}}),v=u?we("theme-class",void 0,S,e):void 0;return{mergedClsPrefix:o,namespace:i,isMounted:b,containerRef:n,presetProps:z(()=>Q(e,En)),handleEsc:O,handleAfterLeave:m,handleClickoutside:c,handleBeforeLeave:r,doUpdateShow:f,handleNegativeClick:C,handlePositiveClick:g,handleCloseClick:h,cssVars:u?void 0:S,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){const{mergedClsPrefix:e}=this;return l(Cn,{to:this.to,show:this.show},{default:()=>{var n;(n=this.onRender)===null||n===void 0||n.call(this);const{unstableShowMask:o}=this;return G(l("div",{role:"none",ref:"containerRef",class:[`${e}-modal-container`,this.themeClass,this.namespace],style:this.cssVars},l(jn,Object.assign({style:this.overlayStyle},this.$attrs,{ref:"bodyWrapper",displayDirective:this.displayDirective,show:this.show,preset:this.preset,autoFocus:this.autoFocus,trapFocus:this.trapFocus,blockScroll:this.blockScroll},this.presetProps,{onEsc:this.handleEsc,onClose:this.handleCloseClick,onNegativeClick:this.handleNegativeClick,onPositiveClick:this.handlePositiveClick,onBeforeLeave:this.handleBeforeLeave,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave,onClickoutside:o?void 0:this.handleClickoutside,renderMask:o?()=>{var i;return l(xe,{name:"fade-in-transition",key:"mask",appear:(i=this.internalAppear)!==null&&i!==void 0?i:this.isMounted},{default:()=>this.show?l("div",{"aria-hidden":!0,ref:"containerRef",class:`${e}-modal-mask`,onClick:this.handleClickoutside}):null})}:void 0}),this.$slots)),[[xn,{zIndex:this.zIndex,enabled:this.show}]])}})}});export{Hn as _,On as a,Bn as u};
