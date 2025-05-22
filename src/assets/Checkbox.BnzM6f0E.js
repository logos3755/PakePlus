import{g as s,O as se,d as K,K as j,r as P,c as A,M as ue,R as U,H as b,F as c,I as S,J as C,bl as be,bb as fe,bc as he,Q as H,P as ke,b2 as ve,cm as me,N as ge,b6 as N,T as xe,X as pe,bo as Ce,bJ as ye}from"./entry.B79t8160.js";import{a as E,c as l}from"./Button.DLsEGMw6.js";import{u as G,b as we}from"./use-merged-state.Dyf7G0SV.js";const Re=s("svg",{viewBox:"0 0 64 64",class:"check-icon"},s("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),ze=s("svg",{viewBox:"0 0 100 100",class:"line-icon"},s("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),O=se("n-checkbox-group"),Se={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ie=K({name:"CheckboxGroup",props:Se,setup(o){const{mergedClsPrefixRef:i}=j(o),g=E(o),{mergedSizeRef:y,mergedDisabledRef:w}=g,x=P(o.defaultValue),T=A(()=>o.value),f=G(T,x),D=A(()=>{var u;return((u=f.value)===null||u===void 0?void 0:u.length)||0}),n=A(()=>Array.isArray(f.value)?new Set(f.value):new Set);function R(u,r){const{nTriggerFormInput:p,nTriggerFormChange:h}=g,{onChange:a,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(f.value)){const d=Array.from(f.value),I=d.findIndex(B=>B===r);u?~I||(d.push(r),v&&l(v,d,{actionType:"check",value:r}),k&&l(k,d,{actionType:"check",value:r}),p(),h(),x.value=d,a&&l(a,d)):~I&&(d.splice(I,1),v&&l(v,d,{actionType:"uncheck",value:r}),k&&l(k,d,{actionType:"uncheck",value:r}),a&&l(a,d),x.value=d,p(),h())}else u?(v&&l(v,[r],{actionType:"check",value:r}),k&&l(k,[r],{actionType:"check",value:r}),a&&l(a,[r]),x.value=[r],p(),h()):(v&&l(v,[],{actionType:"uncheck",value:r}),k&&l(k,[],{actionType:"uncheck",value:r}),a&&l(a,[]),x.value=[],p(),h())}return ue(O,{checkedCountRef:D,maxRef:U(o,"max"),minRef:U(o,"min"),valueSetRef:n,disabledRef:w,mergedSizeRef:y,toggleCheckbox:R}),{mergedClsPrefix:i}},render(){return s("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),Te=b([c("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),b("&:hover",[c("checkbox-box",[C("border","border: var(--n-border-checked);")])]),b("&:focus:not(:active)",[c("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[c("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[c("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[c("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[c("checkbox-box",[c("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[b("&:focus:not(:active)",[c("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),c("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[c("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),c("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),c("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),c("checkbox-icon",[b(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),c("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),c("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),c("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),be({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),fe(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),he(c("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},H.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Ae=K({name:"Checkbox",props:De,setup(o){const i=ke(O,null),g=P(null),{mergedClsPrefixRef:y,inlineThemeDisabled:w,mergedRtlRef:x}=j(o),T=P(o.defaultChecked),f=U(o,"checked"),D=G(f,T),n=ve(()=>{if(i){const e=i.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return D.value===o.checkedValue}),R=E(o,{mergedSize(e){const{size:m}=o;if(m!==void 0)return m;if(i){const{value:t}=i.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:m}=o;if(m!==void 0)return m;if(i){if(i.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:z}=i;if(t!==void 0&&z.value>=t&&!n.value)return!0;const{minRef:{value:M}}=i;if(M!==void 0&&z.value<=M&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:u,mergedSizeRef:r}=R,p=H("Checkbox","-checkbox",Te,me,o,y);function h(e){if(i&&o.value!==void 0)i.toggleCheckbox(!n.value,o.value);else{const{onChange:m,"onUpdate:checked":t,onUpdateChecked:z}=o,{nTriggerFormInput:M,nTriggerFormChange:F}=R,_=n.value?o.uncheckedValue:o.checkedValue;t&&l(t,_,e),z&&l(z,_,e),m&&l(m,_,e),M(),F(),T.value=_}}function a(e){u.value||h(e)}function k(e){if(!u.value)switch(e.key){case" ":case"Enter":h(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const d={focus:()=>{var e;(e=g.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=g.value)===null||e===void 0||e.blur()}},I=ge("Checkbox",x,y),B=A(()=>{const{value:e}=r,{common:{cubicBezierEaseInOut:m},self:{borderRadius:t,color:z,colorChecked:M,colorDisabled:F,colorTableHeader:_,colorTableHeaderModal:V,colorTableHeaderPopover:L,checkMarkColor:J,checkMarkColorDisabled:W,border:Q,borderFocus:X,borderDisabled:Y,borderChecked:q,boxShadowFocus:Z,textColor:ee,textColorDisabled:oe,checkMarkColorDisabledChecked:ne,colorDisabledChecked:re,borderDisabledChecked:ce,labelPadding:ae,labelLineHeight:le,labelFontWeight:ie,[N("fontSize",e)]:de,[N("size",e)]:te}}=p.value;return{"--n-label-line-height":le,"--n-label-font-weight":ie,"--n-size":te,"--n-bezier":m,"--n-border-radius":t,"--n-border":Q,"--n-border-checked":q,"--n-border-focus":X,"--n-border-disabled":Y,"--n-border-disabled-checked":ce,"--n-box-shadow-focus":Z,"--n-color":z,"--n-color-checked":M,"--n-color-table":_,"--n-color-table-modal":V,"--n-color-table-popover":L,"--n-color-disabled":F,"--n-color-disabled-checked":re,"--n-text-color":ee,"--n-text-color-disabled":oe,"--n-check-mark-color":J,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":ne,"--n-font-size":de,"--n-label-padding":ae}}),$=w?xe("checkbox",A(()=>r.value[0]),B,o):void 0;return Object.assign(R,d,{rtlEnabled:I,selfRef:g,mergedClsPrefix:y,mergedDisabled:u,renderedChecked:n,mergedTheme:p,labelId:pe(),handleClick:a,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:B,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender})},render(){var o;const{$slots:i,renderedChecked:g,mergedDisabled:y,indeterminate:w,privateInsideTable:x,cssVars:T,labelId:f,label:D,mergedClsPrefix:n,focusable:R,handleKeyUp:u,handleKeyDown:r,handleClick:p}=this;(o=this.onRender)===null||o===void 0||o.call(this);const h=we(i.default,a=>D||a?s("span",{class:`${n}-checkbox__label`,id:f},D||a):null);return s("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,g&&`${n}-checkbox--checked`,y&&`${n}-checkbox--disabled`,w&&`${n}-checkbox--indeterminate`,x&&`${n}-checkbox--inside-table`,h&&`${n}-checkbox--show-label`],tabindex:y||!R?void 0:0,role:"checkbox","aria-checked":w?"mixed":g,"aria-labelledby":f,style:T,onKeyup:u,onKeydown:r,onClick:p,onMousedown:()=>{ye("selectstart",window,a=>{a.preventDefault()},{once:!0})}},s("div",{class:`${n}-checkbox-box-wrapper`}," ",s("div",{class:`${n}-checkbox-box`},s(Ce,null,{default:()=>this.indeterminate?s("div",{key:"indeterminate",class:`${n}-checkbox-icon`},ze):s("div",{key:"check",class:`${n}-checkbox-icon`},Re)}),s("div",{class:`${n}-checkbox-box__border`}))),h)}});export{Ie as N,Ae as _};
