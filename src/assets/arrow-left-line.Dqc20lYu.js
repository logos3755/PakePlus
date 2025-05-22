import{c1 as Ot,c2 as Pe,c3 as Je,M as Lt,P as jt,bE as Ut,O as Bt,d as ue,K as ce,r as V,bH as Zt,g as w,c4 as Ht,c as x,o as Ge,e as qe,F as Wt,J as c,H as N,I as d,Q as Qe,a0 as Me,R as Xt,be as Yt,c5 as Kt,a6 as se,b0 as Oe,c6 as Ft,T as Jt,bf as Le,by as Gt,bz as qt,b1 as Qt,bL as en,c7 as tn,bJ as G,bK as q,v as et,x as tt,y as nt}from"./entry.B79t8160.js";import{u as nn,f as on,a as je}from"./use-merged-state.Dyf7G0SV.js";function rn(e){return Ot(Pe(e).toLowerCase())}function an(e,n,r,l){for(var f=-1,p=e==null?0:e.length;++f<p;)r=n(r,e[f],f,e);return r}function sn(e){return function(n){return e==null?void 0:e[n]}}var ln={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},un=sn(ln),cn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dn="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",vn="\\u20d0-\\u20ff",xn=dn+fn+vn,hn="["+xn+"]",pn=RegExp(hn,"g");function gn(e){return e=Pe(e),e&&e.replace(cn,un).replace(pn,"")}var mn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bn(e){return e.match(mn)||[]}var wn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yn(e){return wn.test(e)}var ot="\\ud800-\\udfff",Sn="\\u0300-\\u036f",Cn="\\ufe20-\\ufe2f",Rn="\\u20d0-\\u20ff",zn=Sn+Cn+Rn,rt="\\u2700-\\u27bf",at="a-z\\xdf-\\xf6\\xf8-\\xff",Pn="\\xac\\xb1\\xd7\\xf7",_n="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kn="\\u2000-\\u206f",In=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",st="A-Z\\xc0-\\xd6\\xd8-\\xde",Dn="\\ufe0e\\ufe0f",it=Pn+_n+kn+In,lt="['’]",Ue="["+it+"]",En="["+zn+"]",ut="\\d+",Nn="["+rt+"]",ct="["+at+"]",dt="[^"+ot+it+ut+rt+at+st+"]",An="\\ud83c[\\udffb-\\udfff]",Tn="(?:"+En+"|"+An+")",$n="[^"+ot+"]",ft="(?:\\ud83c[\\udde6-\\uddff]){2}",vt="[\\ud800-\\udbff][\\udc00-\\udfff]",W="["+st+"]",Vn="\\u200d",Be="(?:"+ct+"|"+dt+")",Mn="(?:"+W+"|"+dt+")",Ze="(?:"+lt+"(?:d|ll|m|re|s|t|ve))?",He="(?:"+lt+"(?:D|LL|M|RE|S|T|VE))?",xt=Tn+"?",ht="["+Dn+"]?",On="(?:"+Vn+"(?:"+[$n,ft,vt].join("|")+")"+ht+xt+")*",Ln="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Un=ht+xt+On,Bn="(?:"+[Nn,ft,vt].join("|")+")"+Un,Zn=RegExp([W+"?"+ct+"+"+Ze+"(?="+[Ue,W,"$"].join("|")+")",Mn+"+"+He+"(?="+[Ue,W+Be,"$"].join("|")+")",W+"?"+Be+"+"+Ze,W+"+"+He,jn,Ln,ut,Bn].join("|"),"g");function Hn(e){return e.match(Zn)||[]}function Wn(e,n,r){return e=Pe(e),n=n,n===void 0?yn(e)?Hn(e):bn(e):e.match(n)||[]}var Xn="['’]",Yn=RegExp(Xn,"g");function Kn(e){return function(n){return an(Wn(gn(n).replace(Yn,"")),e,"")}}var We=Kn(function(e,n,r){return n=n.toLowerCase(),e+(r?rn(n):n)});function Fn(e){const{length:n}=e;return n>1&&(e.push(Xe(e[0],0,"append")),e.unshift(Xe(e[n-1],n-1,"prepend"))),e}function Xe(e,n,r){return Je(e,{key:`carousel-item-duplicate-${n}-${r}`})}function Ye(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Re(e,n){return n?e+1:e}function Jn(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Gn(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function qn(e,n){return n&&e>3?e-2:e}function Ke(e){return window.TouchEvent&&e instanceof window.TouchEvent}function Fe(e,n){let{offsetWidth:r,offsetHeight:l}=e;if(n){const f=getComputedStyle(e);r=r-Number.parseFloat(f.getPropertyValue("padding-left"))-Number.parseFloat(f.getPropertyValue("padding-right")),l=l-Number.parseFloat(f.getPropertyValue("padding-top"))-Number.parseFloat(f.getPropertyValue("padding-bottom"))}return{width:r,height:l}}function ie(e,n,r){return e<n?n:e>r?r:e}function Qn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,l,,f="ms"]=r;return Number(l)*(f==="ms"?1:1e3)}return 0}const pt=Bt("n-carousel-methods");function eo(e){Lt(pt,e)}function _e(e="unknown",n="component"){const r=jt(pt);return r||Ut(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}const to={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},no=ue({name:"CarouselDots",props:to,setup(e){const{mergedClsPrefixRef:n}=ce(e),r=V([]),l=_e();function f(g,v){switch(g.key){case"Enter":case" ":g.preventDefault(),l.to(v);return}e.keyboard&&y(g)}function p(g){e.trigger==="hover"&&l.to(g)}function P(g){e.trigger==="click"&&l.to(g)}function y(g){var v;if(g.shiftKey||g.altKey||g.ctrlKey||g.metaKey)return;const b=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=g,M=R==="PageUp"||R==="ArrowUp",O=R==="PageDown"||R==="ArrowDown",C=R==="PageUp"||R==="ArrowRight",z=R==="PageDown"||R==="ArrowLeft",_=l.isVertical(),T=_?M:C,X=_?O:z;!T&&!X||(g.preventDefault(),T&&!l.isNextDisabled()?(l.next(),S(l.currentIndexRef.value)):X&&!l.isPrevDisabled()&&(l.prev(),S(l.currentIndexRef.value)))}function S(g){var v;(v=r.value[g])===null||v===void 0||v.focus()}return Zt(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:f,handleMouseenter:p,handleClick:P}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return w("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Ht(this.total,r=>{const l=r===this.currentIndex;return w("div",{"aria-selected":l,ref:f=>n.push(f),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,l&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:f=>{this.handleKeydown(f,r)}})}))}}),oo=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),ro=w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},w("g",{fill:"none"},w("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),ao=ue({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=ce(e),{isVertical:r,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}=_e();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:l,isNextDisabled:f,prev:p,next:P}},render(){const{mergedClsPrefix:e}=this;return w("div",{class:`${e}-carousel__arrow-group`},w("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},oo),w("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},ro))}}),le="CarouselItem";function so(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===le}const io=ue({name:le,setup(e){const{mergedClsPrefixRef:n}=ce(e),r=_e(We(le),`n-${We(le)}`),l=V(),f=x(()=>{const{value:v}=l;return v?r.getSlideIndex(v):-1}),p=x(()=>r.isPrev(f.value)),P=x(()=>r.isNext(f.value)),y=x(()=>r.isActive(f.value)),S=x(()=>r.getSlideStyle(f.value));Ge(()=>{r.addSlide(l.value)}),qe(()=>{r.removeSlide(l.value)});function g(v){const{value:b}=f;b!==void 0&&(r==null||r.onCarouselItemClick(b,v))}return{mergedClsPrefix:n,selfElRef:l,isPrev:p,isNext:P,isActive:y,index:f,style:S,handleClick:g}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:l,isNext:f,isActive:p,index:P,style:y}=this,S=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:p,[`${r}-carousel__slide--prev`]:l,[`${r}-carousel__slide--next`]:f}];return w("div",{ref:"selfElRef",class:S,role:"option",tabindex:"-1","data-index":P,"aria-hidden":!p,style:y,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:l,isNext:f,isActive:p,index:P}))}}),lo=Wt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[N("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[N("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[N("svg",`
 height: 1em;
 width: 1em;
 `),N("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[N(">",[N("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[N("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[N("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),uo=["transitionDuration","transitionTimingFunction"],co=Object.assign(Object.assign({},Qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ze=!1;const bo=ue({name:"Carousel",props:co,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=ce(e),l=V(null),f=V(null),p=V([]),P={value:[]},y=x(()=>e.direction==="vertical"),S=x(()=>y.value?"height":"width"),g=x(()=>y.value?"bottom":"right"),v=x(()=>e.effect==="slide"),b=x(()=>e.loop&&e.slidesPerView===1&&v.value),R=x(()=>e.effect==="custom"),M=x(()=>!v.value||e.centeredSlides?1:e.slidesPerView),O=x(()=>R.value?1:e.slidesPerView),C=x(()=>M.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),z=V({width:0,height:0}),_=x(()=>{const{value:t}=p;if(!t.length)return[];const{value:o}=C;if(o)return t.map(m=>Fe(m));const{value:a}=O,{value:i}=z,{value:u}=S;let s=i[u];if(a!=="auto"){const{spaceBetween:m}=e,k=s-(a-1)*m,ae=1/Math.max(1,a);s=k*ae}const h=Object.assign(Object.assign({},i),{[u]:s});return t.map(()=>h)}),T=x(()=>{const{value:t}=_;if(!t.length)return[];const{centeredSlides:o,spaceBetween:a}=e,{value:i}=S,{[i]:u}=z.value;let s=0;return t.map(({[i]:h})=>{let m=s;return o&&(m+=(h-u)/2),s+=h+a,m})}),X=V(!1),de=x(()=>{const{transitionStyle:t}=e;return t?Me(t,uo):{}}),fe=x(()=>R.value?0:Qn(de.value.transitionDuration)),ke=x(()=>{const{value:t}=p;if(!t.length)return[];const o=!(C.value||O.value===1),a=h=>{if(o){const{value:m}=S;return{[m]:`${_.value[h][m]}px`}}};if(R.value)return t.map((h,m)=>a(m));const{effect:i,spaceBetween:u}=e,{value:s}=g;return t.reduce((h,m,k)=>{const ae=Object.assign(Object.assign({},a(k)),{[`margin-${s}`]:`${u}px`});return h.push(ae),X.value&&(i==="fade"||i==="card")&&Object.assign(ae,de.value),h},[])}),I=x(()=>{const{value:t}=M,{length:o}=p.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:a}=_,{length:i}=a;if(!i)return o;const{value:u}=T,{value:s}=S,h=z.value[s];let m=a[a.length-1][s],k=i;for(;k>1&&m<h;)k--,m+=u[k]-u[k-1];return ie(k+1,1,i)}}),ve=x(()=>qn(I.value,b.value)),gt=Re(e.defaultIndex,b.value),xe=V(Ye(gt,I.value,b.value)),A=nn(Xt(e,"currentIndex"),xe),D=x(()=>Re(A.value,b.value));function Y(t){var o,a;t=ie(t,0,I.value-1);const i=Ye(t,I.value,b.value),{value:u}=A;i!==A.value&&(xe.value=i,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,i,u),(a=e.onUpdateCurrentIndex)===null||a===void 0||a.call(e,i,u))}function he(t=D.value){return Jn(t,I.value,e.loop)}function pe(t=D.value){return Gn(t,I.value,e.loop)}function mt(t){const o=U(t);return o!==null&&he()===o}function bt(t){const o=U(t);return o!==null&&pe()===o}function Ie(t){return D.value===U(t)}function wt(t){return A.value===t}function De(){return he()===null}function Ee(){return pe()===null}let j=0;function ge(t){const o=ie(Re(t,b.value),0,I.value);(t!==A.value||o!==D.value)&&Y(o)}function Q(){const t=he();t!==null&&(j=-1,Y(t))}function K(){const t=pe();t!==null&&(j=1,Y(t))}let E=!1;function yt(){(!E||!b.value)&&Q()}function St(){(!E||!b.value)&&K()}let L=0;const me=V({});function ee(t,o=0){me.value=Object.assign({},de.value,{transform:y.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function F(t=0){v.value?be(D.value,t):L!==0&&(!E&&t>0&&(E=!0),ee(L=0,t))}function be(t,o){const a=Ne(t);a!==L&&o>0&&(E=!0),L=Ne(D.value),ee(a,o)}function Ne(t){let o;return t>=I.value-1?o=Ae():o=T.value[t]||0,o}function Ae(){if(M.value==="auto"){const{value:t}=S,{[t]:o}=z.value,{value:a}=T,i=a[a.length-1];let u;if(i===void 0)u=o;else{const{value:s}=_;u=i+s[s.length-1][t]}return u-o}else{const{value:t}=T;return t[I.value-1]||0}}const J={currentIndexRef:A,to:ge,prev:yt,next:St,isVertical:()=>y.value,isHorizontal:()=>!y.value,isPrev:mt,isNext:bt,isActive:Ie,isPrevDisabled:De,isNextDisabled:Ee,getSlideIndex:U,getSlideStyle:zt,addSlide:Ct,removeSlide:Rt,onCarouselItemClick:Pt};eo(J);function Ct(t){t&&p.value.push(t)}function Rt(t){if(!t)return;const o=U(t);o!==-1&&p.value.splice(o,1)}function U(t){return typeof t=="number"?t:t?p.value.indexOf(t):-1}function zt(t){const o=U(t);if(o!==-1){const a=[ke.value[o]],i=J.isPrev(o),u=J.isNext(o);return i&&a.push(e.prevSlideStyle||""),u&&a.push(e.nextSlideStyle||""),en(a)}}let we=0,ye=0,$=0,Se=0,te=!1,Ce=!1;function Pt(t,o){let a=!E&&!te&&!Ce;e.effect==="card"&&a&&!Ie(t)&&(ge(t),a=!1),a||(o.preventDefault(),o.stopPropagation())}let ne=null;function oe(){ne&&(clearInterval(ne),ne=null)}function B(){oe(),!e.autoplay||ve.value<2||(ne=window.setInterval(K,e.interval))}function Te(t){var o;if(ze||!(!((o=f.value)===null||o===void 0)&&o.contains(tn(t))))return;ze=!0,te=!0,Ce=!1,Se=Date.now(),oe(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const a=Ke(t)?t.touches[0]:t;y.value?ye=a.clientY:we=a.clientX,e.touchable&&(G("touchmove",document,re),G("touchend",document,Z),G("touchcancel",document,Z)),e.draggable&&(G("mousemove",document,re),G("mouseup",document,Z))}function re(t){const{value:o}=y,{value:a}=S,i=Ke(t)?t.touches[0]:t,u=o?i.clientY-ye:i.clientX-we,s=z.value[a];$=ie(u,-s,s),t.cancelable&&t.preventDefault(),v.value&&ee(L-$,0)}function Z(){const{value:t}=D;let o=t;if(!E&&$!==0&&v.value){const a=L-$,i=[...T.value.slice(0,I.value-1),Ae()];let u=null;for(let s=0;s<i.length;s++){const h=Math.abs(i[s]-a);if(u!==null&&u<h)break;u=h,o=s}}if(o===t){const a=Date.now()-Se,{value:i}=S,u=z.value[i];$>u/2||$/a>.4?Q():($<-u/2||$/a<-.4)&&K()}o!==null&&o!==t?(Ce=!0,Y(o),Oe(()=>{(!b.value||xe.value!==A.value)&&F(fe.value)})):F(fe.value),$e(),B()}function $e(){te&&(ze=!1),te=!1,we=0,ye=0,$=0,Se=0,q("touchmove",document,re),q("touchend",document,Z),q("touchcancel",document,Z),q("mousemove",document,re),q("mouseup",document,Z)}function _t(){if(v.value&&E){const{value:t}=D;be(t,0)}else B();v.value&&(me.value.transitionDuration="0ms"),E=!1}function kt(t){if(t.preventDefault(),E)return;let{deltaX:o,deltaY:a}=t;t.shiftKey&&!o&&(o=a);const i=-1,u=1,s=(o||a)>0?u:i;let h=0,m=0;y.value?m=s:h=s;const k=10;(m*a>=k||h*o>=k)&&(s===u&&!Ee()?K():s===i&&!De()&&Q())}function It(){z.value=Fe(l.value,!0),B()}function Dt(){var t,o;C.value&&((o=(t=_.effect).scheduler)===null||o===void 0||o.call(t),_.effect.run())}function Et(){e.autoplay&&oe()}function Nt(){e.autoplay&&B()}Ge(()=>{Yt(B),requestAnimationFrame(()=>X.value=!0)}),qe(()=>{$e(),oe()}),Kt(()=>{const{value:t}=p,{value:o}=P,a=new Map,i=s=>a.has(s)?a.get(s):-1;let u=!1;for(let s=0;s<t.length;s++){const h=o.findIndex(m=>m.el===t[s]);h!==s&&(u=!0),a.set(t[s],h)}u&&t.sort((s,h)=>i(s)-i(h))}),se(D,(t,o)=>{if(t===o){j=0;return}if(B(),v.value){if(b.value){const{value:a}=I;j===-1&&o===1&&t===a-2?t=0:j===1&&o===a-2&&t===1&&(t=a-1)}be(t,fe.value)}else F();j=0},{immediate:!0}),se([b,M],()=>void Oe(()=>{Y(D.value)})),se(T,()=>{v.value&&F()},{deep:!0}),se(v,t=>{t?F():(E=!1,ee(L=0))});const At=x(()=>({onTouchstartPassive:e.touchable?Te:void 0,onMousedown:e.draggable?Te:void 0,onWheel:e.mousewheel?kt:void 0})),Tt=x(()=>Object.assign(Object.assign({},Me(J,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:ve.value,currentIndex:A.value})),$t=x(()=>({total:ve.value,currentIndex:A.value,to:J.to})),Vt={getCurrentIndex:()=>A.value,to:ge,prev:Q,next:K},Mt=Qe("Carousel","-carousel",lo,Ft,e,n),Ve=x(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:a,dotColorActive:i,dotColorFocus:u,dotLineWidth:s,dotLineWidthActive:h,arrowColor:m}}=Mt.value;return{"--n-bezier":t,"--n-dot-color":a,"--n-dot-color-focus":u,"--n-dot-color-active":i,"--n-dot-size":o,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":m}}),H=r?Jt("carousel",void 0,Ve,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:l,slidesElRef:f,slideVNodes:P,duplicatedable:b,userWantsControl:R,autoSlideSize:C,realIndex:D,slideStyles:ke,translateStyle:me,slidesControlListeners:At,handleTransitionEnd:_t,handleResize:It,handleSlideResize:Dt,handleMouseenter:Et,handleMouseleave:Nt,isActive:wt,arrowSlotProps:Tt,dotSlotProps:$t},Vt),{cssVars:r?void 0:Ve,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:l,slideStyles:f,dotType:p,dotPlacement:P,slidesControlListeners:y,transitionProps:S={},arrowSlotProps:g,dotSlotProps:v,$slots:{default:b,dots:R,arrow:M}}=this,O=b&&on(b())||[];let C=fo(O);return C.length||(C=O.map(z=>w(io,null,{default:()=>Je(z)}))),this.duplicatedable&&(C=Fn(C)),this.slideVNodes.value=C,this.autoSlideSize&&(C=C.map(z=>w(Le,{onResize:this.handleSlideResize},{default:()=>z}))),(e=this.onRender)===null||e===void 0||e.call(this),w("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${P}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,l&&`${n}-carousel--usercontrol`],style:this.cssVars},y,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),w(Le,{onResize:this.handleResize},{default:()=>w("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},l?C.map((z,_)=>w("div",{style:f[_],key:_},Gt(w(Qt,Object.assign({},S),{default:()=>z}),[[qt,this.isActive(_)]]))):C)}),this.showDots&&v.total>1&&je(R,v,()=>[w(no,{key:p+P,total:v.total,currentIndex:v.currentIndex,dotType:p,trigger:this.trigger,keyboard:this.keyboard})]),r&&je(M,g,()=>[w(ao,null)]))}});function fo(e){return e.reduce((n,r)=>(so(r)&&n.push(r),n),[])}const vo={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function xo(e,n){return et(),tt("svg",vo,n[0]||(n[0]=[nt("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"},null,-1)]))}const wo={name:"ri-arrow-right-line",render:xo},ho={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function po(e,n){return et(),tt("svg",ho,n[0]||(n[0]=[nt("path",{fill:"currentColor",d:"M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"},null,-1)]))}const yo={name:"ri-arrow-left-line",render:po};export{io as _,yo as a,wo as b,bo as c};
