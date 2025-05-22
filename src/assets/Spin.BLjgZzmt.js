import{H as m,F as c,bC as C,I as h,Q as y,d as S,K as x,ek as k,c as f,bn as T,b6 as $,T as w,r as R,be as _,g as o,bp as B,b1 as I}from"./entry.B79t8160.js";import{u as N}from"./use-compitable.BTv5PzVL.js";const O=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),c("spin-container",`
 position: relative;
 `,[c("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[C()])]),c("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),c("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[h("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),c("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),c("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[h("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),P={small:20,medium:18,large:16},V=Object.assign(Object.assign({},y.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),E=S({name:"Spin",props:V,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=x(e),t=y("Spin","-spin",O,k,e,r),d=f(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:a},self:p}=t.value,{opacitySpinning:b,color:g,textColor:v}=p,z=typeof s=="number"?T(s):p[$("size",s)];return{"--n-bezier":a,"--n-opacity-spinning":b,"--n-size":z,"--n-color":g,"--n-text-color":v}}),i=n?w("spin",f(()=>{const{size:s}=e;return typeof s=="number"?String(s):s[0]}),d,e):void 0,u=N(e,["spinning","show"]),l=R(!1);return _(s=>{let a;if(u.value){const{delay:p}=e;if(p){a=window.setTimeout(()=>{l.value=!0},p),s(()=>{clearTimeout(a)});return}}l.value=u.value}),{mergedClsPrefix:r,active:l,mergedStrokeWidth:f(()=>{const{strokeWidth:s}=e;if(s!==void 0)return s;const{size:a}=e;return P[typeof a=="number"?"medium":a]}),cssVars:n?void 0:d,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,r;const{$slots:n,mergedClsPrefix:t,description:d}=this,i=n.icon&&this.rotate,u=(d||n.description)&&o("div",{class:`${t}-spin-description`},d||((e=n.description)===null||e===void 0?void 0:e.call(n))),l=n.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),u):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(B,{clsPrefix:t,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),u);return(r=this.onRender)===null||r===void 0||r.call(this),n.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.active&&`${t}-spin-content--spinning`,this.contentClass],style:this.contentStyle},n),o(I,{name:"fade-in-transition"},{default:()=>this.active?l:null})):l}});export{E as _};
