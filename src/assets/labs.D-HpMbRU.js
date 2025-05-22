import{d as gt,g as Ee,r as Ze,c8 as ah,L as oh,bA as Ys,Q as to,O as sh,K as Qr,P as sn,c as Ue,U as no,b7 as go,N as Fd,b4 as kd,e as lh,bK as ca,bJ as $s,bn as rn,a8 as rs,bo as ch,bp as Nd,c9 as uh,b2 as Mi,H as at,be as zd,ca as dh,bN as Ss,bf as fh,cb as Zs,bh as hh,a6 as Bd,R as lt,F as Ne,I as tt,bl as Sr,G as Js,J as Qn,bb as ph,bc as mh,cc as gh,M as bh,X as vh,b6 as Wr,T as Gd,b1 as xh,cd as _h,ce as yh,bE as Mh,o as ea,v as Ri,x as mr,_ as Hd,aY as Sh,aZ as Eh,bZ as Th,a_ as wh,bY as En,a4 as Vd,a7 as Ah,E as Tn,y as Kt,cf as Ch,A as nt,bk as Rh,b0 as Ph,cg as Lh,ch as Dh,b_ as Ih,B as un,z as Qs,C as Er}from"./entry.B79t8160.js";import{a as Oh,B as Uh}from"./index.esm.min.CxlJfyIl.js";import{i as Fh,a as kh,b as Nh,c as zh,d as Bh,e as Gh}from"./universalTransition.YgJsVYNC.js";import{S as Hh}from"./sortable.esm.CVf2VYf1.js";import{i as Vh,r as Yt,B as Ya,C as Wh,h as el,v as tl,c as ht,j as jh,e as nl,t as Xh,u as qh}from"./Button.DLsEGMw6.js";import{A as Kh,_ as Wd}from"./Radio.Cj93eV8g.js";import{N as Yh,_ as Es}from"./Checkbox.BnzM6f0E.js";import{_ as $h}from"./RadioGroup.BjsLswYz.js";import{_ as Zh}from"./Popover.rmCVgHdz.js";import{_ as Jh,C as Qh}from"./Dropdown.CmVOl3u5.js";import{V as jd,N as ep}from"./Empty.Dpu5cBr_.js";import{e as tp,s as np,_ as Ts,c as ip,a as rp}from"./Ellipsis.CqrBrMIw.js";import{r as Xd,u as as}from"./use-merged-state.Dyf7G0SV.js";import{g as ap,_ as qd}from"./Pagination.oy2G0JHk.js";import{u as op}from"./use-message.BH-wgOTP.js";import{_ as sp,a as lp}from"./Tabs.CgZEd0ml.js";import{_ as cp}from"./Space.CoyloG0X.js";import{N as up}from"./Tag.ehYFDh3x.js";import"./use-compitable.BTv5PzVL.js";import"./Icon.Cdvp5HLq.js";import"./Tooltip.LN34_rQh.js";import"./Select.DOm-zoi7.js";import"./index.DxLfcg4e.js";let il=!1;function dp(){if(Vh&&window.CSS&&!il&&(il=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function fp(i,e){if(!i)return;const t=document.createElement("a");t.href=i,e!==void 0&&(t.download=e),document.body.appendChild(t),t.click(),document.body.removeChild(t)}const hp=gt({name:"Filter",render(){return Ee("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},Ee("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},Ee("g",{"fill-rule":"nonzero"},Ee("path",{d:"M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z"}))))}}),pp=gt({name:"PerformantEllipsis",props:tp,inheritAttrs:!1,setup(i,{attrs:e,slots:t}){const n=Ze(!1),r=ah();return oh("-ellipsis",np,r),{mouseEntered:n,renderTrigger:()=>{const{lineClamp:o}=i,s=r.value;return Ee("span",Object.assign({},Ys(e,{class:[`${s}-ellipsis`,o!==void 0?ip(s):void 0,i.expandTrigger==="click"?rp(s,"pointer"):void 0],style:o===void 0?{textOverflow:"ellipsis"}:{"-webkit-line-clamp":o}}),{onMouseenter:()=>{n.value=!0}}),o?t:Ee("span",null,t))}}},render(){return this.mouseEntered?Ee(Ts,Ys({},this.$attrs,this.$props),this.$slots):this.renderTrigger()}}),mp=Object.assign(Object.assign({},to.props),{onUnstableColumnResize:Function,pagination:{type:[Object,Boolean],default:!1},paginateSinglePage:{type:Boolean,default:!0},minHeight:[Number,String],maxHeight:[Number,String],columns:{type:Array,default:()=>[]},rowClassName:[String,Function],rowProps:Function,rowKey:Function,summary:[Function],data:{type:Array,default:()=>[]},loading:Boolean,bordered:{type:Boolean,default:void 0},bottomBordered:{type:Boolean,default:void 0},striped:Boolean,scrollX:[Number,String],defaultCheckedRowKeys:{type:Array,default:()=>[]},checkedRowKeys:Array,singleLine:{type:Boolean,default:!0},singleColumn:Boolean,size:{type:String,default:"medium"},remote:Boolean,defaultExpandedRowKeys:{type:Array,default:[]},defaultExpandAll:Boolean,expandedRowKeys:Array,stickyExpandedRows:Boolean,virtualScroll:Boolean,virtualScrollX:Boolean,virtualScrollHeader:Boolean,headerHeight:{type:Number,default:28},heightForRow:Function,minRowHeight:{type:Number,default:28},tableLayout:{type:String,default:"auto"},allowCheckingNotLoaded:Boolean,cascade:{type:Boolean,default:!0},childrenKey:{type:String,default:"children"},indent:{type:Number,default:16},flexHeight:Boolean,summaryPlacement:{type:String,default:"bottom"},paginationBehaviorOnFilter:{type:String,default:"current"},filterIconPopoverProps:Object,scrollbarProps:Object,renderCell:Function,renderExpandIcon:Function,spinProps:{type:Object,default:{}},onLoad:Function,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],"onUpdate:sorter":[Function,Array],onUpdateSorter:[Function,Array],"onUpdate:filters":[Function,Array],onUpdateFilters:[Function,Array],"onUpdate:checkedRowKeys":[Function,Array],onUpdateCheckedRowKeys:[Function,Array],"onUpdate:expandedRowKeys":[Function,Array],onUpdateExpandedRowKeys:[Function,Array],onScroll:Function,onPageChange:[Function,Array],onPageSizeChange:[Function,Array],onSorterChange:[Function,Array],onFiltersChange:[Function,Array],onCheckedRowKeysChange:[Function,Array]}),yn=sh("n-data-table"),gp=gt({name:"DataTableRenderSorter",props:{render:{type:Function,required:!0},order:{type:[String,Boolean],default:!1}},render(){const{render:i,order:e}=this;return i({order:e})}}),bp=gt({name:"SortIcon",props:{column:{type:Object,required:!0}},setup(i){const{mergedComponentPropsRef:e}=Qr(),{mergedSortStateRef:t,mergedClsPrefixRef:n}=sn(yn),r=Ue(()=>t.value.find(l=>l.columnKey===i.column.key)),a=Ue(()=>r.value!==void 0),o=Ue(()=>{const{value:l}=r;return l&&a.value?l.order:!1}),s=Ue(()=>{var l,c;return((c=(l=e==null?void 0:e.value)===null||l===void 0?void 0:l.DataTable)===null||c===void 0?void 0:c.renderSorter)||i.column.renderSorter});return{mergedClsPrefix:n,active:a,mergedSortOrder:o,mergedRenderSorter:s}},render(){const{mergedRenderSorter:i,mergedSortOrder:e,mergedClsPrefix:t}=this,{renderSorterIcon:n}=this.column;return i?Ee(gp,{render:i,order:e}):Ee("span",{class:[`${t}-data-table-sorter`,e==="ascend"&&`${t}-data-table-sorter--asc`,e==="descend"&&`${t}-data-table-sorter--desc`]},n?n({order:e}):Ee(no,{clsPrefix:t},{default:()=>Ee(Kh,null)}))}}),Kd=40,Yd=40;function rl(i){if(i.type==="selection")return i.width===void 0?Kd:go(i.width);if(i.type==="expand")return i.width===void 0?Yd:go(i.width);if(!("children"in i))return typeof i.width=="string"?go(i.width):i.width}function vp(i){var e,t;if(i.type==="selection")return Yt((e=i.width)!==null&&e!==void 0?e:Kd);if(i.type==="expand")return Yt((t=i.width)!==null&&t!==void 0?t:Yd);if(!("children"in i))return Yt(i.width)}function mn(i){return i.type==="selection"?"__n_selection__":i.type==="expand"?"__n_expand__":i.key}function al(i){return i&&(typeof i=="object"?Object.assign({},i):i)}function xp(i){return i==="ascend"?1:i==="descend"?-1:0}function _p(i,e,t){return t!==void 0&&(i=Math.min(i,typeof t=="number"?t:Number.parseFloat(t))),e!==void 0&&(i=Math.max(i,typeof e=="number"?e:Number.parseFloat(e))),i}function yp(i,e){if(e!==void 0)return{width:e,minWidth:e,maxWidth:e};const t=vp(i),{minWidth:n,maxWidth:r}=i;return{width:t,minWidth:Yt(n)||t,maxWidth:Yt(r)}}function Mp(i,e,t){return typeof t=="function"?t(i,e):t||""}function bo(i){return i.filterOptionValues!==void 0||i.filterOptionValue===void 0&&i.defaultFilterOptionValues!==void 0}function vo(i){return"children"in i?!1:!!i.sorter}function $d(i){return"children"in i&&i.children.length?!1:!!i.resizable}function ol(i){return"children"in i?!1:!!i.filter&&(!!i.filterOptions||!!i.renderFilterMenu)}function sl(i){if(i){if(i==="descend")return"ascend"}else return"descend";return!1}function Sp(i,e){return i.sorter===void 0?null:e===null||e.columnKey!==i.key?{columnKey:i.key,sorter:i.sorter,order:sl(!1)}:Object.assign(Object.assign({},e),{order:sl(e.order)})}function Zd(i,e){return e.find(t=>t.columnKey===i.key&&t.order)!==void 0}function Ep(i){return typeof i=="string"?i.replace(/,/g,"\\,"):i==null?"":`${i}`.replace(/,/g,"\\,")}function Tp(i,e){const t=i.filter(a=>a.type!=="expand"&&a.type!=="selection"&&a.allowExport!==!1),n=t.map(a=>a.title).join(","),r=e.map(a=>t.map(o=>Ep(a[o.key])).join(","));return[n,...r].join(`
`)}const wp=gt({name:"DataTableFilterMenu",props:{column:{type:Object,required:!0},radioGroupName:{type:String,required:!0},multiple:{type:Boolean,required:!0},value:{type:[Array,String,Number],default:null},options:{type:Array,required:!0},onConfirm:{type:Function,required:!0},onClear:{type:Function,required:!0},onChange:{type:Function,required:!0}},setup(i){const{mergedClsPrefixRef:e,mergedRtlRef:t}=Qr(i),n=Fd("DataTable",t,e),{mergedClsPrefixRef:r,mergedThemeRef:a,localeRef:o}=sn(yn),s=Ze(i.value),l=Ue(()=>{const{value:m}=s;return Array.isArray(m)?m:null}),c=Ue(()=>{const{value:m}=s;return bo(i.column)?Array.isArray(m)&&m.length&&m[0]||null:Array.isArray(m)?null:m});function u(m){i.onChange(m)}function d(m){i.multiple&&Array.isArray(m)?s.value=m:bo(i.column)&&!Array.isArray(m)?s.value=[m]:s.value=m}function f(){u(s.value),i.onConfirm()}function h(){i.multiple||bo(i.column)?u([]):u(null),i.onClear()}return{mergedClsPrefix:r,rtlEnabled:n,mergedTheme:a,locale:o,checkboxGroupValue:l,radioGroupValue:c,handleChange:d,handleConfirmClick:f,handleClearClick:h}},render(){const{mergedTheme:i,locale:e,mergedClsPrefix:t}=this;return Ee("div",{class:[`${t}-data-table-filter-menu`,this.rtlEnabled&&`${t}-data-table-filter-menu--rtl`]},Ee(kd,null,{default:()=>{const{checkboxGroupValue:n,handleChange:r}=this;return this.multiple?Ee(Yh,{value:n,class:`${t}-data-table-filter-menu__group`,onUpdateValue:r},{default:()=>this.options.map(a=>Ee(Es,{key:a.value,theme:i.peers.Checkbox,themeOverrides:i.peerOverrides.Checkbox,value:a.value},{default:()=>a.label}))}):Ee($h,{name:this.radioGroupName,class:`${t}-data-table-filter-menu__group`,value:this.radioGroupValue,onUpdateValue:this.handleChange},{default:()=>this.options.map(a=>Ee(Wd,{key:a.value,value:a.value,theme:i.peers.Radio,themeOverrides:i.peerOverrides.Radio},{default:()=>a.label}))})}}),Ee("div",{class:`${t}-data-table-filter-menu__action`},Ee(Ya,{size:"tiny",theme:i.peers.Button,themeOverrides:i.peerOverrides.Button,onClick:this.handleClearClick},{default:()=>e.clear}),Ee(Ya,{theme:i.peers.Button,themeOverrides:i.peerOverrides.Button,type:"primary",size:"tiny",onClick:this.handleConfirmClick},{default:()=>e.confirm})))}}),Ap=gt({name:"DataTableRenderFilter",props:{render:{type:Function,required:!0},active:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},render(){const{render:i,active:e,show:t}=this;return i({active:e,show:t})}});function Cp(i,e,t){const n=Object.assign({},i);return n[e]=t,n}const Rp=gt({name:"DataTableFilterButton",props:{column:{type:Object,required:!0},options:{type:Array,default:()=>[]}},setup(i){const{mergedComponentPropsRef:e}=Qr(),{mergedThemeRef:t,mergedClsPrefixRef:n,mergedFilterStateRef:r,filterMenuCssVarsRef:a,paginationBehaviorOnFilterRef:o,doUpdatePage:s,doUpdateFilters:l,filterIconPopoverPropsRef:c}=sn(yn),u=Ze(!1),d=r,f=Ue(()=>i.column.filterMultiple!==!1),h=Ue(()=>{const x=d.value[i.column.key];if(x===void 0){const{value:S}=f;return S?[]:null}return x}),m=Ue(()=>{const{value:x}=h;return Array.isArray(x)?x.length>0:x!==null}),v=Ue(()=>{var x,S;return((S=(x=e==null?void 0:e.value)===null||x===void 0?void 0:x.DataTable)===null||S===void 0?void 0:S.renderFilter)||i.column.renderFilter});function g(x){const S=Cp(d.value,i.column.key,x);l(S,i.column),o.value==="first"&&s(1)}function p(){u.value=!1}function y(){u.value=!1}return{mergedTheme:t,mergedClsPrefix:n,active:m,showPopover:u,mergedRenderFilter:v,filterIconPopoverProps:c,filterMultiple:f,mergedFilterValue:h,filterMenuCssVars:a,handleFilterChange:g,handleFilterMenuConfirm:y,handleFilterMenuCancel:p}},render(){const{mergedTheme:i,mergedClsPrefix:e,handleFilterMenuCancel:t,filterIconPopoverProps:n}=this;return Ee(Zh,Object.assign({show:this.showPopover,onUpdateShow:r=>this.showPopover=r,trigger:"click",theme:i.peers.Popover,themeOverrides:i.peerOverrides.Popover,placement:"bottom"},n,{style:{padding:0}}),{trigger:()=>{const{mergedRenderFilter:r}=this;if(r)return Ee(Ap,{"data-data-table-filter":!0,render:r,active:this.active,show:this.showPopover});const{renderFilterIcon:a}=this.column;return Ee("div",{"data-data-table-filter":!0,class:[`${e}-data-table-filter`,{[`${e}-data-table-filter--active`]:this.active,[`${e}-data-table-filter--show`]:this.showPopover}]},a?a({active:this.active,show:this.showPopover}):Ee(no,{clsPrefix:e},{default:()=>Ee(hp,null)}))},default:()=>{const{renderFilterMenu:r}=this.column;return r?r({hide:t}):Ee(wp,{style:this.filterMenuCssVars,radioGroupName:String(this.column.key),multiple:this.filterMultiple,value:this.mergedFilterValue,options:this.options,column:this.column,onChange:this.handleFilterChange,onClear:this.handleFilterMenuCancel,onConfirm:this.handleFilterMenuConfirm})}})}}),Pp=gt({name:"ColumnResizeButton",props:{onResizeStart:Function,onResize:Function,onResizeEnd:Function},setup(i){const{mergedClsPrefixRef:e}=sn(yn),t=Ze(!1);let n=0;function r(l){return l.clientX}function a(l){var c;l.preventDefault();const u=t.value;n=r(l),t.value=!0,u||($s("mousemove",window,o),$s("mouseup",window,s),(c=i.onResizeStart)===null||c===void 0||c.call(i))}function o(l){var c;(c=i.onResize)===null||c===void 0||c.call(i,r(l)-n)}function s(){var l;t.value=!1,(l=i.onResizeEnd)===null||l===void 0||l.call(i),ca("mousemove",window,o),ca("mouseup",window,s)}return lh(()=>{ca("mousemove",window,o),ca("mouseup",window,s)}),{mergedClsPrefix:e,active:t,handleMousedown:a}},render(){const{mergedClsPrefix:i}=this;return Ee("span",{"data-data-table-resizable":!0,class:[`${i}-data-table-resize-button`,this.active&&`${i}-data-table-resize-button--active`],onMousedown:this.handleMousedown})}}),Jd="_n_all__",Qd="_n_none__";function Lp(i,e,t,n){return i?r=>{for(const a of i)switch(r){case Jd:t(!0);return;case Qd:n(!0);return;default:if(typeof a=="object"&&a.key===r){a.onSelect(e.value);return}}}:()=>{}}function Dp(i,e){return i?i.map(t=>{switch(t){case"all":return{label:e.checkTableAll,key:Jd};case"none":return{label:e.uncheckTableAll,key:Qd};default:return t}}):[]}const Ip=gt({name:"DataTableSelectionMenu",props:{clsPrefix:{type:String,required:!0}},setup(i){const{props:e,localeRef:t,checkOptionsRef:n,rawPaginatedDataRef:r,doCheckAll:a,doUncheckAll:o}=sn(yn),s=Ue(()=>Lp(n.value,r,a,o)),l=Ue(()=>Dp(n.value,t.value));return()=>{var c,u,d,f;const{clsPrefix:h}=i;return Ee(Jh,{theme:(u=(c=e.theme)===null||c===void 0?void 0:c.peers)===null||u===void 0?void 0:u.Dropdown,themeOverrides:(f=(d=e.themeOverrides)===null||d===void 0?void 0:d.peers)===null||f===void 0?void 0:f.Dropdown,options:l.value,onSelect:s.value},{default:()=>Ee(no,{clsPrefix:h,class:`${h}-data-table-check-extra`},{default:()=>Ee(Wh,null)})})}}});function xo(i){return typeof i.title=="function"?i.title(i):i.title}const Op=gt({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},width:String},render(){const{clsPrefix:i,id:e,cols:t,width:n}=this;return Ee("table",{style:{tableLayout:"fixed",width:n},class:`${i}-data-table-table`},Ee("colgroup",null,t.map(r=>Ee("col",{key:r.key,style:r.style}))),Ee("thead",{"data-n-id":e,class:`${i}-data-table-thead`},this.$slots))}}),ef=gt({name:"DataTableHeader",props:{discrete:{type:Boolean,default:!0}},setup(){const{mergedClsPrefixRef:i,scrollXRef:e,fixedColumnLeftMapRef:t,fixedColumnRightMapRef:n,mergedCurrentPageRef:r,allRowsCheckedRef:a,someRowsCheckedRef:o,rowsRef:s,colsRef:l,mergedThemeRef:c,checkOptionsRef:u,mergedSortStateRef:d,componentId:f,mergedTableLayoutRef:h,headerCheckboxDisabledRef:m,virtualScrollHeaderRef:v,headerHeightRef:g,onUnstableColumnResize:p,doUpdateResizableWidth:y,handleTableHeaderScroll:x,deriveNextSorter:S,doUncheckAll:M,doCheckAll:O}=sn(yn),T=Ze(),L=Ze({});function b(H){const $=L.value[H];return $==null?void 0:$.getBoundingClientRect().width}function _(){a.value?M():O()}function V(H,$){if(el(H,"dataTableFilter")||el(H,"dataTableResizable")||!vo($))return;const E=d.value.find(R=>R.columnKey===$.key)||null,D=Sp($,E);S(D)}const N=new Map;function F(H){N.set(H.key,b(H.key))}function B(H,$){const E=N.get(H.key);if(E===void 0)return;const D=E+$,R=_p(D,H.minWidth,H.maxWidth);p(D,R,H,b),y(H,R)}return{cellElsRef:L,componentId:f,mergedSortState:d,mergedClsPrefix:i,scrollX:e,fixedColumnLeftMap:t,fixedColumnRightMap:n,currentPage:r,allRowsChecked:a,someRowsChecked:o,rows:s,cols:l,mergedTheme:c,checkOptions:u,mergedTableLayout:h,headerCheckboxDisabled:m,headerHeight:g,virtualScrollHeader:v,virtualListRef:T,handleCheckboxUpdateChecked:_,handleColHeaderClick:V,handleTableHeaderScroll:x,handleColumnResizeStart:F,handleColumnResize:B}},render(){const{cellElsRef:i,mergedClsPrefix:e,fixedColumnLeftMap:t,fixedColumnRightMap:n,currentPage:r,allRowsChecked:a,someRowsChecked:o,rows:s,cols:l,mergedTheme:c,checkOptions:u,componentId:d,discrete:f,mergedTableLayout:h,headerCheckboxDisabled:m,mergedSortState:v,virtualScrollHeader:g,handleColHeaderClick:p,handleCheckboxUpdateChecked:y,handleColumnResizeStart:x,handleColumnResize:S}=this,M=(b,_,V)=>b.map(({column:N,colIndex:F,colSpan:B,rowSpan:H,isLast:$})=>{var E,D;const R=mn(N),{ellipsis:U}=N,A=()=>N.type==="selection"?N.multiple!==!1?Ee(rs,null,Ee(Es,{key:r,privateInsideTable:!0,checked:a,indeterminate:o,disabled:m,onUpdateChecked:y}),u?Ee(Ip,{clsPrefix:e}):null):null:Ee(rs,null,Ee("div",{class:`${e}-data-table-th__title-wrapper`},Ee("div",{class:`${e}-data-table-th__title`},U===!0||U&&!U.tooltip?Ee("div",{class:`${e}-data-table-th__ellipsis`},xo(N)):U&&typeof U=="object"?Ee(Ts,Object.assign({},U,{theme:c.peers.Ellipsis,themeOverrides:c.peerOverrides.Ellipsis}),{default:()=>xo(N)}):xo(N)),vo(N)?Ee(bp,{column:N}):null),ol(N)?Ee(Rp,{column:N,options:N.filterOptions}):null,$d(N)?Ee(Pp,{onResizeStart:()=>{x(N)},onResize:re=>{S(N,re)}}):null),k=R in t,K=R in n,te=_&&!N.fixed?"div":"th";return Ee(te,{ref:re=>i[R]=re,key:R,style:[_&&!N.fixed?{position:"absolute",left:rn(_(F)),top:0,bottom:0}:{left:rn((E=t[R])===null||E===void 0?void 0:E.start),right:rn((D=n[R])===null||D===void 0?void 0:D.start)},{width:rn(N.width),textAlign:N.titleAlign||N.align,height:V}],colspan:B,rowspan:H,"data-col-key":R,class:[`${e}-data-table-th`,(k||K)&&`${e}-data-table-th--fixed-${k?"left":"right"}`,{[`${e}-data-table-th--sorting`]:Zd(N,v),[`${e}-data-table-th--filterable`]:ol(N),[`${e}-data-table-th--sortable`]:vo(N),[`${e}-data-table-th--selection`]:N.type==="selection",[`${e}-data-table-th--last`]:$},N.className],onClick:N.type!=="selection"&&N.type!=="expand"&&!("children"in N)?re=>{p(re,N)}:void 0},A())});if(g){const{headerHeight:b}=this;let _=0,V=0;return l.forEach(N=>{N.column.fixed==="left"?_++:N.column.fixed==="right"&&V++}),Ee(jd,{ref:"virtualListRef",class:`${e}-data-table-base-table-header`,style:{height:rn(b)},onScroll:this.handleTableHeaderScroll,columns:l,itemSize:b,showScrollbar:!1,items:[{}],itemResizable:!1,visibleItemsTag:Op,visibleItemsProps:{clsPrefix:e,id:d,cols:l,width:Yt(this.scrollX)},renderItemWithCols:({startColIndex:N,endColIndex:F,getLeft:B})=>{const H=l.map((E,D)=>({column:E.column,isLast:D===l.length-1,colIndex:E.index,colSpan:1,rowSpan:1})).filter(({column:E},D)=>!!(N<=D&&D<=F||E.fixed)),$=M(H,B,rn(b));return $.splice(_,0,Ee("th",{colspan:l.length-_-V,style:{pointerEvents:"none",visibility:"hidden",height:0}})),Ee("tr",{style:{position:"relative"}},$)}},{default:({renderedItemWithCols:N})=>N})}const O=Ee("thead",{class:`${e}-data-table-thead`,"data-n-id":d},s.map(b=>Ee("tr",{class:`${e}-data-table-tr`},M(b,null,void 0))));if(!f)return O;const{handleTableHeaderScroll:T,scrollX:L}=this;return Ee("div",{class:`${e}-data-table-base-table-header`,onScroll:T},Ee("table",{class:`${e}-data-table-table`,style:{minWidth:Yt(L),tableLayout:h}},Ee("colgroup",null,l.map(b=>Ee("col",{key:b.key,style:b.style}))),O))}}),Up=gt({name:"DataTableCell",props:{clsPrefix:{type:String,required:!0},row:{type:Object,required:!0},index:{type:Number,required:!0},column:{type:Object,required:!0},isSummary:Boolean,mergedTheme:{type:Object,required:!0},renderCell:Function},render(){var i;const{isSummary:e,column:t,row:n,renderCell:r}=this;let a;const{render:o,key:s,ellipsis:l}=t;if(o&&!e?a=o(n,this.index):e?a=(i=n[s])===null||i===void 0?void 0:i.value:a=r?r(tl(n,s),n,t):tl(n,s),l)if(typeof l=="object"){const{mergedTheme:c}=this;return t.ellipsisComponent==="performant-ellipsis"?Ee(pp,Object.assign({},l,{theme:c.peers.Ellipsis,themeOverrides:c.peerOverrides.Ellipsis}),{default:()=>a}):Ee(Ts,Object.assign({},l,{theme:c.peers.Ellipsis,themeOverrides:c.peerOverrides.Ellipsis}),{default:()=>a})}else return Ee("span",{class:`${this.clsPrefix}-data-table-td__ellipsis`},a);return a}}),ll=gt({name:"DataTableExpandTrigger",props:{clsPrefix:{type:String,required:!0},expanded:Boolean,loading:Boolean,onClick:{type:Function,required:!0},renderExpandIcon:{type:Function},rowData:{type:Object,required:!0}},render(){const{clsPrefix:i}=this;return Ee("div",{class:[`${i}-data-table-expand-trigger`,this.expanded&&`${i}-data-table-expand-trigger--expanded`],onClick:this.onClick,onMousedown:e=>{e.preventDefault()}},Ee(ch,null,{default:()=>this.loading?Ee(Nd,{key:"loading",clsPrefix:this.clsPrefix,radius:85,strokeWidth:15,scale:.88}):this.renderExpandIcon?this.renderExpandIcon({expanded:this.expanded,rowData:this.rowData}):Ee(no,{clsPrefix:i,key:"base-icon"},{default:()=>Ee(Qh,null)})}))}}),Fp=gt({name:"DataTableBodyCheckbox",props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(i){const{mergedCheckedRowKeySetRef:e,mergedInderminateRowKeySetRef:t}=sn(yn);return()=>{const{rowKey:n}=i;return Ee(Es,{privateInsideTable:!0,disabled:i.disabled,indeterminate:t.value.has(n),checked:e.value.has(n),onUpdateChecked:i.onUpdateChecked})}}}),kp=gt({name:"DataTableBodyRadio",props:{rowKey:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!0},onUpdateChecked:{type:Function,required:!0}},setup(i){const{mergedCheckedRowKeySetRef:e,componentId:t}=sn(yn);return()=>{const{rowKey:n}=i;return Ee(Wd,{name:t,disabled:i.disabled,checked:e.value.has(n),onUpdateChecked:i.onUpdateChecked})}}});function Np(i,e){const t=[];function n(r,a){r.forEach(o=>{o.children&&e.has(o.key)?(t.push({tmNode:o,striped:!1,key:o.key,index:a}),n(o.children,a)):t.push({key:o.key,tmNode:o,striped:!1,index:a})})}return i.forEach(r=>{t.push(r);const{children:a}=r.tmNode;a&&e.has(r.key)&&n(a,r.index)}),t}const zp=gt({props:{clsPrefix:{type:String,required:!0},id:{type:String,required:!0},cols:{type:Array,required:!0},onMouseenter:Function,onMouseleave:Function},render(){const{clsPrefix:i,id:e,cols:t,onMouseenter:n,onMouseleave:r}=this;return Ee("table",{style:{tableLayout:"fixed"},class:`${i}-data-table-table`,onMouseenter:n,onMouseleave:r},Ee("colgroup",null,t.map(a=>Ee("col",{key:a.key,style:a.style}))),Ee("tbody",{"data-n-id":e,class:`${i}-data-table-tbody`},this.$slots))}}),Bp=gt({name:"DataTableBody",props:{onResize:Function,showHeader:Boolean,flexHeight:Boolean,bodyStyle:Object},setup(i){const{slots:e,bodyWidthRef:t,mergedExpandedRowKeysRef:n,mergedClsPrefixRef:r,mergedThemeRef:a,scrollXRef:o,colsRef:s,paginatedDataRef:l,rawPaginatedDataRef:c,fixedColumnLeftMapRef:u,fixedColumnRightMapRef:d,mergedCurrentPageRef:f,rowClassNameRef:h,leftActiveFixedColKeyRef:m,leftActiveFixedChildrenColKeysRef:v,rightActiveFixedColKeyRef:g,rightActiveFixedChildrenColKeysRef:p,renderExpandRef:y,hoverKeyRef:x,summaryRef:S,mergedSortStateRef:M,virtualScrollRef:O,virtualScrollXRef:T,heightForRowRef:L,minRowHeightRef:b,componentId:_,mergedTableLayoutRef:V,childTriggerColIndexRef:N,indentRef:F,rowPropsRef:B,maxHeightRef:H,stripedRef:$,loadingRef:E,onLoadRef:D,loadingKeySetRef:R,expandableRef:U,stickyExpandedRowsRef:A,renderExpandIconRef:k,summaryPlacementRef:K,treeMateRef:te,scrollbarPropsRef:re,setHeaderScrollLeft:pe,doUpdateExpandedRowKeys:ne,handleTableBodyScroll:se,doCheck:me,doUncheck:be,renderCell:Y}=sn(yn),P=sn(uh),q=Ze(null),j=Ze(null),ee=Ze(null),ae=Mi(()=>l.value.length===0),G=Mi(()=>i.showHeader||!ae.value),Q=Mi(()=>i.showHeader||ae.value);let C="";const z=Ue(()=>new Set(n.value));function W(_e){var Te;return(Te=te.value.getNode(_e))===null||Te===void 0?void 0:Te.rawNode}function Z(_e,Te,Se){const Ae=W(_e.key);if(!Ae){Zs("data-table",`fail to get row data with key ${_e.key}`);return}if(Se){const Oe=l.value.findIndex(oe=>oe.key===C);if(Oe!==-1){const oe=l.value.findIndex(Re=>Re.key===_e.key),we=Math.min(Oe,oe),ve=Math.max(Oe,oe),Ce=[];l.value.slice(we,ve+1).forEach(Re=>{Re.disabled||Ce.push(Re.key)}),Te?me(Ce,!1,Ae):be(Ce,Ae),C=_e.key;return}}Te?me(_e.key,!1,Ae):be(_e.key,Ae),C=_e.key}function I(_e){const Te=W(_e.key);if(!Te){Zs("data-table",`fail to get row data with key ${_e.key}`);return}me(_e.key,!0,Te)}function w(){if(!G.value){const{value:Te}=ee;return Te||null}if(O.value)return ue();const{value:_e}=q;return _e?_e.containerRef:null}function ie(_e,Te){var Se;if(R.value.has(_e))return;const{value:Ae}=n,Oe=Ae.indexOf(_e),oe=Array.from(Ae);~Oe?(oe.splice(Oe,1),ne(oe)):Te&&!Te.isLeaf&&!Te.shallowLoaded?(R.value.add(_e),(Se=D.value)===null||Se===void 0||Se.call(D,Te.rawNode).then(()=>{const{value:we}=n,ve=Array.from(we);~ve.indexOf(_e)||ve.push(_e),ne(ve)}).finally(()=>{R.value.delete(_e)})):(oe.push(_e),ne(oe))}function ce(){x.value=null}function ue(){const{value:_e}=j;return(_e==null?void 0:_e.listElRef)||null}function X(){const{value:_e}=j;return(_e==null?void 0:_e.itemsElRef)||null}function de(_e){var Te;se(_e),(Te=q.value)===null||Te===void 0||Te.sync()}function xe(_e){var Te;const{onResize:Se}=i;Se&&Se(_e),(Te=q.value)===null||Te===void 0||Te.sync()}const fe={getScrollContainer:w,scrollTo(_e,Te){var Se,Ae;O.value?(Se=j.value)===null||Se===void 0||Se.scrollTo(_e,Te):(Ae=q.value)===null||Ae===void 0||Ae.scrollTo(_e,Te)}},Le=at([({props:_e})=>{const Te=Ae=>Ae===null?null:at(`[data-n-id="${_e.componentId}"] [data-col-key="${Ae}"]::after`,{boxShadow:"var(--n-box-shadow-after)"}),Se=Ae=>Ae===null?null:at(`[data-n-id="${_e.componentId}"] [data-col-key="${Ae}"]::before`,{boxShadow:"var(--n-box-shadow-before)"});return at([Te(_e.leftActiveFixedColKey),Se(_e.rightActiveFixedColKey),_e.leftActiveFixedChildrenColKeys.map(Ae=>Te(Ae)),_e.rightActiveFixedChildrenColKeys.map(Ae=>Se(Ae))])}]);let Pe=!1;return zd(()=>{const{value:_e}=m,{value:Te}=v,{value:Se}=g,{value:Ae}=p;if(!Pe&&_e===null&&Se===null)return;const Oe={leftActiveFixedColKey:_e,leftActiveFixedChildrenColKeys:Te,rightActiveFixedColKey:Se,rightActiveFixedChildrenColKeys:Ae,componentId:_};Le.mount({id:`n-${_}`,force:!0,props:Oe,anchorMetaName:dh,parent:P==null?void 0:P.styleMountTarget}),Pe=!0}),Ss(()=>{Le.unmount({id:`n-${_}`,parent:P==null?void 0:P.styleMountTarget})}),Object.assign({bodyWidth:t,summaryPlacement:K,dataTableSlots:e,componentId:_,scrollbarInstRef:q,virtualListRef:j,emptyElRef:ee,summary:S,mergedClsPrefix:r,mergedTheme:a,scrollX:o,cols:s,loading:E,bodyShowHeaderOnly:Q,shouldDisplaySomeTablePart:G,empty:ae,paginatedDataAndInfo:Ue(()=>{const{value:_e}=$;let Te=!1;return{data:l.value.map(_e?(Ae,Oe)=>(Ae.isLeaf||(Te=!0),{tmNode:Ae,key:Ae.key,striped:Oe%2===1,index:Oe}):(Ae,Oe)=>(Ae.isLeaf||(Te=!0),{tmNode:Ae,key:Ae.key,striped:!1,index:Oe})),hasChildren:Te}}),rawPaginatedData:c,fixedColumnLeftMap:u,fixedColumnRightMap:d,currentPage:f,rowClassName:h,renderExpand:y,mergedExpandedRowKeySet:z,hoverKey:x,mergedSortState:M,virtualScroll:O,virtualScrollX:T,heightForRow:L,minRowHeight:b,mergedTableLayout:V,childTriggerColIndex:N,indent:F,rowProps:B,maxHeight:H,loadingKeySet:R,expandable:U,stickyExpandedRows:A,renderExpandIcon:k,scrollbarProps:re,setHeaderScrollLeft:pe,handleVirtualListScroll:de,handleVirtualListResize:xe,handleMouseleaveTable:ce,virtualListContainer:ue,virtualListContent:X,handleTableBodyScroll:se,handleCheckboxUpdateChecked:Z,handleRadioUpdateChecked:I,handleUpdateExpanded:ie,renderCell:Y},fe)},render(){const{mergedTheme:i,scrollX:e,mergedClsPrefix:t,virtualScroll:n,maxHeight:r,mergedTableLayout:a,flexHeight:o,loadingKeySet:s,onResize:l,setHeaderScrollLeft:c}=this,u=e!==void 0||r!==void 0||o,d=!u&&a==="auto",f=e!==void 0||d,h={minWidth:Yt(e)||"100%"};e&&(h.width="100%");const m=Ee(kd,Object.assign({},this.scrollbarProps,{ref:"scrollbarInstRef",scrollable:u||d,class:`${t}-data-table-base-table-body`,style:this.empty?void 0:this.bodyStyle,theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,contentStyle:h,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,horizontalRailStyle:{zIndex:3},verticalRailStyle:{zIndex:3},xScrollable:f,onScroll:n?void 0:this.handleTableBodyScroll,internalOnUpdateScrollLeft:c,onResize:l}),{default:()=>{const v={},g={},{cols:p,paginatedDataAndInfo:y,mergedTheme:x,fixedColumnLeftMap:S,fixedColumnRightMap:M,currentPage:O,rowClassName:T,mergedSortState:L,mergedExpandedRowKeySet:b,stickyExpandedRows:_,componentId:V,childTriggerColIndex:N,expandable:F,rowProps:B,handleMouseleaveTable:H,renderExpand:$,summary:E,handleCheckboxUpdateChecked:D,handleRadioUpdateChecked:R,handleUpdateExpanded:U,heightForRow:A,minRowHeight:k,virtualScrollX:K}=this,{length:te}=p;let re;const{data:pe,hasChildren:ne}=y,se=ne?Np(pe,b):pe;if(E){const C=E(this.rawPaginatedData);if(Array.isArray(C)){const z=C.map((W,Z)=>({isSummaryRow:!0,key:`__n_summary__${Z}`,tmNode:{rawNode:W,disabled:!0},index:-1}));re=this.summaryPlacement==="top"?[...z,...se]:[...se,...z]}else{const z={isSummaryRow:!0,key:"__n_summary__",tmNode:{rawNode:C,disabled:!0},index:-1};re=this.summaryPlacement==="top"?[z,...se]:[...se,z]}}else re=se;const me=ne?{width:rn(this.indent)}:void 0,be=[];re.forEach(C=>{$&&b.has(C.key)&&(!F||F(C.tmNode.rawNode))?be.push(C,{isExpandedRow:!0,key:`${C.key}-expand`,tmNode:C.tmNode,index:C.index}):be.push(C)});const{length:Y}=be,P={};pe.forEach(({tmNode:C},z)=>{P[z]=C.key});const q=_?this.bodyWidth:null,j=q===null?void 0:`${q}px`,ee=this.virtualScrollX?"div":"td";let ae=0,G=0;K&&p.forEach(C=>{C.column.fixed==="left"?ae++:C.column.fixed==="right"&&G++});const Q=({rowInfo:C,displayedRowIndex:z,isVirtual:W,isVirtualX:Z,startColIndex:I,endColIndex:w,getLeft:ie})=>{const{index:ce}=C;if("isExpandedRow"in C){const{tmNode:{key:oe,rawNode:we}}=C;return Ee("tr",{class:`${t}-data-table-tr ${t}-data-table-tr--expanded`,key:`${oe}__expand`},Ee("td",{class:[`${t}-data-table-td`,`${t}-data-table-td--last-col`,z+1===Y&&`${t}-data-table-td--last-row`],colspan:te},_?Ee("div",{class:`${t}-data-table-expand`,style:{width:j}},$(we,ce)):$(we,ce)))}const ue="isSummaryRow"in C,X=!ue&&C.striped,{tmNode:de,key:xe}=C,{rawNode:fe}=de,Le=b.has(xe),Pe=B?B(fe,ce):void 0,_e=typeof T=="string"?T:Mp(fe,ce,T),Te=Z?p.filter((oe,we)=>!!(I<=we&&we<=w||oe.column.fixed)):p,Se=Z?rn((A==null?void 0:A(fe,ce))||k):void 0,Ae=Te.map(oe=>{var we,ve,Ce,Re,Ye;const Je=oe.index;if(z in v){const Lt=v[z],J=Lt.indexOf(Je);if(~J)return Lt.splice(J,1),null}const{column:We}=oe,xt=mn(oe),{rowSpan:rt,colSpan:Ut}=We,pt=ue?((we=C.tmNode.rawNode[xt])===null||we===void 0?void 0:we.colSpan)||1:Ut?Ut(fe,ce):1,In=ue?((ve=C.tmNode.rawNode[xt])===null||ve===void 0?void 0:ve.rowSpan)||1:rt?rt(fe,ce):1,Li=Je+pt===te,_r=z+In===Y,ln=In>1;if(ln&&(g[z]={[Je]:[]}),pt>1||ln)for(let Lt=z;Lt<z+In;++Lt){ln&&g[z][Je].push(P[Lt]);for(let J=Je;J<Je+pt;++J)Lt===z&&J===Je||(Lt in v?v[Lt].push(J):v[Lt]=[J])}const di=ln?this.hoverKey:null,{cellProps:Sn}=We,Qt=Sn==null?void 0:Sn(fe,ce),Di={"--indent-offset":""},yr=We.fixed?"td":ee;return Ee(yr,Object.assign({},Qt,{key:xt,style:[{textAlign:We.align||void 0,width:rn(We.width)},Z&&{height:Se},Z&&!We.fixed?{position:"absolute",left:rn(ie(Je)),top:0,bottom:0}:{left:rn((Ce=S[xt])===null||Ce===void 0?void 0:Ce.start),right:rn((Re=M[xt])===null||Re===void 0?void 0:Re.start)},Di,(Qt==null?void 0:Qt.style)||""],colspan:pt,rowspan:W?void 0:In,"data-col-key":xt,class:[`${t}-data-table-td`,We.className,Qt==null?void 0:Qt.class,ue&&`${t}-data-table-td--summary`,di!==null&&g[z][Je].includes(di)&&`${t}-data-table-td--hover`,Zd(We,L)&&`${t}-data-table-td--sorting`,We.fixed&&`${t}-data-table-td--fixed-${We.fixed}`,We.align&&`${t}-data-table-td--${We.align}-align`,We.type==="selection"&&`${t}-data-table-td--selection`,We.type==="expand"&&`${t}-data-table-td--expand`,Li&&`${t}-data-table-td--last-col`,_r&&`${t}-data-table-td--last-row`]}),ne&&Je===N?[hh(Di["--indent-offset"]=ue?0:C.tmNode.level,Ee("div",{class:`${t}-data-table-indent`,style:me})),ue||C.tmNode.isLeaf?Ee("div",{class:`${t}-data-table-expand-placeholder`}):Ee(ll,{class:`${t}-data-table-expand-trigger`,clsPrefix:t,expanded:Le,rowData:fe,renderExpandIcon:this.renderExpandIcon,loading:s.has(C.key),onClick:()=>{U(xe,C.tmNode)}})]:null,We.type==="selection"?ue?null:We.multiple===!1?Ee(kp,{key:O,rowKey:xe,disabled:C.tmNode.disabled,onUpdateChecked:()=>{R(C.tmNode)}}):Ee(Fp,{key:O,rowKey:xe,disabled:C.tmNode.disabled,onUpdateChecked:(Lt,J)=>{D(C.tmNode,Lt,J.shiftKey)}}):We.type==="expand"?ue?null:!We.expandable||!((Ye=We.expandable)===null||Ye===void 0)&&Ye.call(We,fe)?Ee(ll,{clsPrefix:t,rowData:fe,expanded:Le,renderExpandIcon:this.renderExpandIcon,onClick:()=>{U(xe,null)}}):null:Ee(Up,{clsPrefix:t,index:ce,row:fe,column:We,isSummary:ue,mergedTheme:x,renderCell:this.renderCell}))});return Z&&ae&&G&&Ae.splice(ae,0,Ee("td",{colspan:p.length-ae-G,style:{pointerEvents:"none",visibility:"hidden",height:0}})),Ee("tr",Object.assign({},Pe,{onMouseenter:oe=>{var we;this.hoverKey=xe,(we=Pe==null?void 0:Pe.onMouseenter)===null||we===void 0||we.call(Pe,oe)},key:xe,class:[`${t}-data-table-tr`,ue&&`${t}-data-table-tr--summary`,X&&`${t}-data-table-tr--striped`,Le&&`${t}-data-table-tr--expanded`,_e,Pe==null?void 0:Pe.class],style:[Pe==null?void 0:Pe.style,Z&&{height:Se}]}),Ae)};return n?Ee(jd,{ref:"virtualListRef",items:be,itemSize:this.minRowHeight,visibleItemsTag:zp,visibleItemsProps:{clsPrefix:t,id:V,cols:p,onMouseleave:H},showScrollbar:!1,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemsStyle:h,itemResizable:!K,columns:p,renderItemWithCols:K?({itemIndex:C,item:z,startColIndex:W,endColIndex:Z,getLeft:I})=>Q({displayedRowIndex:C,isVirtual:!0,isVirtualX:!0,rowInfo:z,startColIndex:W,endColIndex:Z,getLeft:I}):void 0},{default:({item:C,index:z,renderedItemWithCols:W})=>W||Q({rowInfo:C,displayedRowIndex:z,isVirtual:!0,isVirtualX:!1,startColIndex:0,endColIndex:0,getLeft(Z){return 0}})}):Ee("table",{class:`${t}-data-table-table`,onMouseleave:H,style:{tableLayout:this.mergedTableLayout}},Ee("colgroup",null,p.map(C=>Ee("col",{key:C.key,style:C.style}))),this.showHeader?Ee(ef,{discrete:!1}):null,this.empty?null:Ee("tbody",{"data-n-id":V,class:`${t}-data-table-tbody`},be.map((C,z)=>Q({rowInfo:C,displayedRowIndex:z,isVirtual:!1,isVirtualX:!1,startColIndex:-1,endColIndex:-1,getLeft(W){return-1}}))))}});if(this.empty){const v=()=>Ee("div",{class:[`${t}-data-table-empty`,this.loading&&`${t}-data-table-empty--hide`],style:this.bodyStyle,ref:"emptyElRef"},Xd(this.dataTableSlots.empty,()=>[Ee(ep,{theme:this.mergedTheme.peers.Empty,themeOverrides:this.mergedTheme.peerOverrides.Empty})]));return this.shouldDisplaySomeTablePart?Ee(rs,null,m,v()):Ee(fh,{onResize:this.onResize},{default:v})}return m}}),Gp=gt({name:"MainTable",setup(){const{mergedClsPrefixRef:i,rightFixedColumnsRef:e,leftFixedColumnsRef:t,bodyWidthRef:n,maxHeightRef:r,minHeightRef:a,flexHeightRef:o,virtualScrollHeaderRef:s,syncScrollState:l}=sn(yn),c=Ze(null),u=Ze(null),d=Ze(null),f=Ze(!(t.value.length||e.value.length)),h=Ue(()=>({maxHeight:Yt(r.value),minHeight:Yt(a.value)}));function m(y){n.value=y.contentRect.width,l(),f.value||(f.value=!0)}function v(){var y;const{value:x}=c;return x?s.value?((y=x.virtualListRef)===null||y===void 0?void 0:y.listElRef)||null:x.$el:null}function g(){const{value:y}=u;return y?y.getScrollContainer():null}const p={getBodyElement:g,getHeaderElement:v,scrollTo(y,x){var S;(S=u.value)===null||S===void 0||S.scrollTo(y,x)}};return zd(()=>{const{value:y}=d;if(!y)return;const x=`${i.value}-data-table-base-table--transition-disabled`;f.value?setTimeout(()=>{y.classList.remove(x)},0):y.classList.add(x)}),Object.assign({maxHeight:r,mergedClsPrefix:i,selfElRef:d,headerInstRef:c,bodyInstRef:u,bodyStyle:h,flexHeight:o,handleBodyResize:m},p)},render(){const{mergedClsPrefix:i,maxHeight:e,flexHeight:t}=this,n=e===void 0&&!t;return Ee("div",{class:`${i}-data-table-base-table`,ref:"selfElRef"},n?null:Ee(ef,{ref:"headerInstRef"}),Ee(Bp,{ref:"bodyInstRef",bodyStyle:this.bodyStyle,showHeader:n,flexHeight:t,onResize:this.handleBodyResize}))}});function Hp(i,e){const{paginatedDataRef:t,treeMateRef:n,selectionColumnRef:r}=e,a=Ze(i.defaultCheckedRowKeys),o=Ue(()=>{var M;const{checkedRowKeys:O}=i,T=O===void 0?a.value:O;return((M=r.value)===null||M===void 0?void 0:M.multiple)===!1?{checkedKeys:T.slice(0,1),indeterminateKeys:[]}:n.value.getCheckedKeys(T,{cascade:i.cascade,allowNotLoaded:i.allowCheckingNotLoaded})}),s=Ue(()=>o.value.checkedKeys),l=Ue(()=>o.value.indeterminateKeys),c=Ue(()=>new Set(s.value)),u=Ue(()=>new Set(l.value)),d=Ue(()=>{const{value:M}=c;return t.value.reduce((O,T)=>{const{key:L,disabled:b}=T;return O+(!b&&M.has(L)?1:0)},0)}),f=Ue(()=>t.value.filter(M=>M.disabled).length),h=Ue(()=>{const{length:M}=t.value,{value:O}=u;return d.value>0&&d.value<M-f.value||t.value.some(T=>O.has(T.key))}),m=Ue(()=>{const{length:M}=t.value;return d.value!==0&&d.value===M-f.value}),v=Ue(()=>t.value.length===0);function g(M,O,T){const{"onUpdate:checkedRowKeys":L,onUpdateCheckedRowKeys:b,onCheckedRowKeysChange:_}=i,V=[],{value:{getNode:N}}=n;M.forEach(F=>{var B;const H=(B=N(F))===null||B===void 0?void 0:B.rawNode;V.push(H)}),L&&ht(L,M,V,{row:O,action:T}),b&&ht(b,M,V,{row:O,action:T}),_&&ht(_,M,V,{row:O,action:T}),a.value=M}function p(M,O=!1,T){if(!i.loading){if(O){g(Array.isArray(M)?M.slice(0,1):[M],T,"check");return}g(n.value.check(M,s.value,{cascade:i.cascade,allowNotLoaded:i.allowCheckingNotLoaded}).checkedKeys,T,"check")}}function y(M,O){i.loading||g(n.value.uncheck(M,s.value,{cascade:i.cascade,allowNotLoaded:i.allowCheckingNotLoaded}).checkedKeys,O,"uncheck")}function x(M=!1){const{value:O}=r;if(!O||i.loading)return;const T=[];(M?n.value.treeNodes:t.value).forEach(L=>{L.disabled||T.push(L.key)}),g(n.value.check(T,s.value,{cascade:!0,allowNotLoaded:i.allowCheckingNotLoaded}).checkedKeys,void 0,"checkAll")}function S(M=!1){const{value:O}=r;if(!O||i.loading)return;const T=[];(M?n.value.treeNodes:t.value).forEach(L=>{L.disabled||T.push(L.key)}),g(n.value.uncheck(T,s.value,{cascade:!0,allowNotLoaded:i.allowCheckingNotLoaded}).checkedKeys,void 0,"uncheckAll")}return{mergedCheckedRowKeySetRef:c,mergedCheckedRowKeysRef:s,mergedInderminateRowKeySetRef:u,someRowsCheckedRef:h,allRowsCheckedRef:m,headerCheckboxDisabledRef:v,doUpdateCheckedRowKeys:g,doCheckAll:x,doUncheckAll:S,doCheck:p,doUncheck:y}}function ua(i){return typeof i=="object"&&typeof i.multiple=="number"?i.multiple:!1}function Vp(i,e){return e&&(i===void 0||i==="default"||typeof i=="object"&&i.compare==="default")?Wp(e):typeof i=="function"?i:i&&typeof i=="object"&&i.compare&&i.compare!=="default"?i.compare:!1}function Wp(i){return(e,t)=>{const n=e[i],r=t[i];return n==null?r==null?0:-1:r==null?1:typeof n=="number"&&typeof r=="number"?n-r:typeof n=="string"&&typeof r=="string"?n.localeCompare(r):0}}function jp(i,{dataRelatedColsRef:e,filteredDataRef:t}){const n=[];e.value.forEach(h=>{var m;h.sorter!==void 0&&f(n,{columnKey:h.key,sorter:h.sorter,order:(m=h.defaultSortOrder)!==null&&m!==void 0?m:!1})});const r=Ze(n),a=Ue(()=>{const h=e.value.filter(g=>g.type!=="selection"&&g.sorter!==void 0&&(g.sortOrder==="ascend"||g.sortOrder==="descend"||g.sortOrder===!1)),m=h.filter(g=>g.sortOrder!==!1);if(m.length)return m.map(g=>({columnKey:g.key,order:g.sortOrder,sorter:g.sorter}));if(h.length)return[];const{value:v}=r;return Array.isArray(v)?v:v?[v]:[]}),o=Ue(()=>{const h=a.value.slice().sort((m,v)=>{const g=ua(m.sorter)||0;return(ua(v.sorter)||0)-g});return h.length?t.value.slice().sort((v,g)=>{let p=0;return h.some(y=>{const{columnKey:x,sorter:S,order:M}=y,O=Vp(S,x);return O&&M&&(p=O(v.rawNode,g.rawNode),p!==0)?(p=p*xp(M),!0):!1}),p}):t.value});function s(h){let m=a.value.slice();return h&&ua(h.sorter)!==!1?(m=m.filter(v=>ua(v.sorter)!==!1),f(m,h),m):h||null}function l(h){const m=s(h);c(m)}function c(h){const{"onUpdate:sorter":m,onUpdateSorter:v,onSorterChange:g}=i;m&&ht(m,h),v&&ht(v,h),g&&ht(g,h),r.value=h}function u(h,m="ascend"){if(!h)d();else{const v=e.value.find(p=>p.type!=="selection"&&p.type!=="expand"&&p.key===h);if(!(v!=null&&v.sorter))return;const g=v.sorter;l({columnKey:h,sorter:g,order:m})}}function d(){c(null)}function f(h,m){const v=h.findIndex(g=>(m==null?void 0:m.columnKey)&&g.columnKey===m.columnKey);v!==void 0&&v>=0?h[v]=m:h.push(m)}return{clearSorter:d,sort:u,sortedDataRef:o,mergedSortStateRef:a,deriveNextSorter:l}}function Xp(i,{dataRelatedColsRef:e}){const t=Ue(()=>{const A=k=>{for(let K=0;K<k.length;++K){const te=k[K];if("children"in te)return A(te.children);if(te.type==="selection")return te}return null};return A(i.columns)}),n=Ue(()=>{const{childrenKey:A}=i;return jh(i.data,{ignoreEmptyChildren:!0,getKey:i.rowKey,getChildren:k=>k[A],getDisabled:k=>{var K,te;return!!(!((te=(K=t.value)===null||K===void 0?void 0:K.disabled)===null||te===void 0)&&te.call(K,k))}})}),r=Mi(()=>{const{columns:A}=i,{length:k}=A;let K=null;for(let te=0;te<k;++te){const re=A[te];if(!re.type&&K===null&&(K=te),"tree"in re&&re.tree)return te}return K||0}),a=Ze({}),{pagination:o}=i,s=Ze(o&&o.defaultPage||1),l=Ze(ap(o)),c=Ue(()=>{const A=e.value.filter(te=>te.filterOptionValues!==void 0||te.filterOptionValue!==void 0),k={};return A.forEach(te=>{var re;te.type==="selection"||te.type==="expand"||(te.filterOptionValues===void 0?k[te.key]=(re=te.filterOptionValue)!==null&&re!==void 0?re:null:k[te.key]=te.filterOptionValues)}),Object.assign(al(a.value),k)}),u=Ue(()=>{const A=c.value,{columns:k}=i;function K(pe){return(ne,se)=>!!~String(se[pe]).indexOf(String(ne))}const{value:{treeNodes:te}}=n,re=[];return k.forEach(pe=>{pe.type==="selection"||pe.type==="expand"||"children"in pe||re.push([pe.key,pe])}),te?te.filter(pe=>{const{rawNode:ne}=pe;for(const[se,me]of re){let be=A[se];if(be==null||(Array.isArray(be)||(be=[be]),!be.length))continue;const Y=me.filter==="default"?K(se):me.filter;if(me&&typeof Y=="function")if(me.filterMode==="and"){if(be.some(P=>!Y(P,ne)))return!1}else{if(be.some(P=>Y(P,ne)))continue;return!1}}return!0}):[]}),{sortedDataRef:d,deriveNextSorter:f,mergedSortStateRef:h,sort:m,clearSorter:v}=jp(i,{dataRelatedColsRef:e,filteredDataRef:u});e.value.forEach(A=>{var k;if(A.filter){const K=A.defaultFilterOptionValues;A.filterMultiple?a.value[A.key]=K||[]:K!==void 0?a.value[A.key]=K===null?[]:K:a.value[A.key]=(k=A.defaultFilterOptionValue)!==null&&k!==void 0?k:null}});const g=Ue(()=>{const{pagination:A}=i;if(A!==!1)return A.page}),p=Ue(()=>{const{pagination:A}=i;if(A!==!1)return A.pageSize}),y=as(g,s),x=as(p,l),S=Mi(()=>{const A=y.value;return i.remote?A:Math.max(1,Math.min(Math.ceil(u.value.length/x.value),A))}),M=Ue(()=>{const{pagination:A}=i;if(A){const{pageCount:k}=A;if(k!==void 0)return k}}),O=Ue(()=>{if(i.remote)return n.value.treeNodes;if(!i.pagination)return d.value;const A=x.value,k=(S.value-1)*A;return d.value.slice(k,k+A)}),T=Ue(()=>O.value.map(A=>A.rawNode));function L(A){const{pagination:k}=i;if(k){const{onChange:K,"onUpdate:page":te,onUpdatePage:re}=k;K&&ht(K,A),re&&ht(re,A),te&&ht(te,A),N(A)}}function b(A){const{pagination:k}=i;if(k){const{onPageSizeChange:K,"onUpdate:pageSize":te,onUpdatePageSize:re}=k;K&&ht(K,A),re&&ht(re,A),te&&ht(te,A),F(A)}}const _=Ue(()=>{if(i.remote){const{pagination:A}=i;if(A){const{itemCount:k}=A;if(k!==void 0)return k}return}return u.value.length}),V=Ue(()=>Object.assign(Object.assign({},i.pagination),{onChange:void 0,onUpdatePage:void 0,onUpdatePageSize:void 0,onPageSizeChange:void 0,"onUpdate:page":L,"onUpdate:pageSize":b,page:S.value,pageSize:x.value,pageCount:_.value===void 0?M.value:void 0,itemCount:_.value}));function N(A){const{"onUpdate:page":k,onPageChange:K,onUpdatePage:te}=i;te&&ht(te,A),k&&ht(k,A),K&&ht(K,A),s.value=A}function F(A){const{"onUpdate:pageSize":k,onPageSizeChange:K,onUpdatePageSize:te}=i;K&&ht(K,A),te&&ht(te,A),k&&ht(k,A),l.value=A}function B(A,k){const{onUpdateFilters:K,"onUpdate:filters":te,onFiltersChange:re}=i;K&&ht(K,A,k),te&&ht(te,A,k),re&&ht(re,A,k),a.value=A}function H(A,k,K,te){var re;(re=i.onUnstableColumnResize)===null||re===void 0||re.call(i,A,k,K,te)}function $(A){N(A)}function E(){D()}function D(){R({})}function R(A){U(A)}function U(A){A?A&&(a.value=al(A)):a.value={}}return{treeMateRef:n,mergedCurrentPageRef:S,mergedPaginationRef:V,paginatedDataRef:O,rawPaginatedDataRef:T,mergedFilterStateRef:c,mergedSortStateRef:h,hoverKeyRef:Ze(null),selectionColumnRef:t,childTriggerColIndexRef:r,doUpdateFilters:B,deriveNextSorter:f,doUpdatePageSize:F,doUpdatePage:N,onUnstableColumnResize:H,filter:U,filters:R,clearFilter:E,clearFilters:D,clearSorter:v,page:$,sort:m}}function qp(i,{mainTableInstRef:e,mergedCurrentPageRef:t,bodyWidthRef:n}){let r=0;const a=Ze(),o=Ze(null),s=Ze([]),l=Ze(null),c=Ze([]),u=Ue(()=>Yt(i.scrollX)),d=Ue(()=>i.columns.filter(b=>b.fixed==="left")),f=Ue(()=>i.columns.filter(b=>b.fixed==="right")),h=Ue(()=>{const b={};let _=0;function V(N){N.forEach(F=>{const B={start:_,end:0};b[mn(F)]=B,"children"in F?(V(F.children),B.end=_):(_+=rl(F)||0,B.end=_)})}return V(d.value),b}),m=Ue(()=>{const b={};let _=0;function V(N){for(let F=N.length-1;F>=0;--F){const B=N[F],H={start:_,end:0};b[mn(B)]=H,"children"in B?(V(B.children),H.end=_):(_+=rl(B)||0,H.end=_)}}return V(f.value),b});function v(){var b,_;const{value:V}=d;let N=0;const{value:F}=h;let B=null;for(let H=0;H<V.length;++H){const $=mn(V[H]);if(r>(((b=F[$])===null||b===void 0?void 0:b.start)||0)-N)B=$,N=((_=F[$])===null||_===void 0?void 0:_.end)||0;else break}o.value=B}function g(){s.value=[];let b=i.columns.find(_=>mn(_)===o.value);for(;b&&"children"in b;){const _=b.children.length;if(_===0)break;const V=b.children[_-1];s.value.push(mn(V)),b=V}}function p(){var b,_;const{value:V}=f,N=Number(i.scrollX),{value:F}=n;if(F===null)return;let B=0,H=null;const{value:$}=m;for(let E=V.length-1;E>=0;--E){const D=mn(V[E]);if(Math.round(r+(((b=$[D])===null||b===void 0?void 0:b.start)||0)+F-B)<N)H=D,B=((_=$[D])===null||_===void 0?void 0:_.end)||0;else break}l.value=H}function y(){c.value=[];let b=i.columns.find(_=>mn(_)===l.value);for(;b&&"children"in b&&b.children.length;){const _=b.children[0];c.value.push(mn(_)),b=_}}function x(){const b=e.value?e.value.getHeaderElement():null,_=e.value?e.value.getBodyElement():null;return{header:b,body:_}}function S(){const{body:b}=x();b&&(b.scrollTop=0)}function M(){a.value!=="body"?nl(T):a.value=void 0}function O(b){var _;(_=i.onScroll)===null||_===void 0||_.call(i,b),a.value!=="head"?nl(T):a.value=void 0}function T(){const{header:b,body:_}=x();if(!_)return;const{value:V}=n;if(V!==null){if(i.maxHeight||i.flexHeight){if(!b)return;const N=r-b.scrollLeft;a.value=N!==0?"head":"body",a.value==="head"?(r=b.scrollLeft,_.scrollLeft=r):(r=_.scrollLeft,b.scrollLeft=r)}else r=_.scrollLeft;v(),g(),p(),y()}}function L(b){const{header:_}=x();_&&(_.scrollLeft=b,T())}return Bd(t,()=>{S()}),{styleScrollXRef:u,fixedColumnLeftMapRef:h,fixedColumnRightMapRef:m,leftFixedColumnsRef:d,rightFixedColumnsRef:f,leftActiveFixedColKeyRef:o,leftActiveFixedChildrenColKeysRef:s,rightActiveFixedColKeyRef:l,rightActiveFixedChildrenColKeysRef:c,syncScrollState:T,handleTableBodyScroll:O,handleTableHeaderScroll:M,setHeaderScrollLeft:L}}function Kp(){const i=Ze({});function e(r){return i.value[r]}function t(r,a){$d(r)&&"key"in r&&(i.value[r.key]=a)}function n(){i.value={}}return{getResizableWidth:e,doUpdateResizableWidth:t,clearResizableWidth:n}}function Yp(i,e){const t=[],n=[],r=[],a=new WeakMap;let o=-1,s=0,l=!1;function c(f,h){h>o&&(t[h]=[],o=h),f.forEach((m,v)=>{if("children"in m)c(m.children,h+1);else{const g="key"in m?m.key:void 0;n.push({key:mn(m),style:yp(m,g!==void 0?Yt(e(g)):void 0),column:m,index:v,width:m.width===void 0?128:Number(m.width)}),s+=1,l||(l=!!m.ellipsis),r.push(m)}})}c(i,0);let u=0;function d(f,h){let m=0;f.forEach(v=>{var g;if("children"in v){const p=u,y={column:v,colIndex:u,colSpan:0,rowSpan:1,isLast:!1};d(v.children,h+1),v.children.forEach(x=>{var S,M;y.colSpan+=(M=(S=a.get(x))===null||S===void 0?void 0:S.colSpan)!==null&&M!==void 0?M:0}),p+y.colSpan===s&&(y.isLast=!0),a.set(v,y),t[h].push(y)}else{if(u<m){u+=1;return}let p=1;"titleColSpan"in v&&(p=(g=v.titleColSpan)!==null&&g!==void 0?g:1),p>1&&(m=u+p);const y=u+p===s,x={column:v,colSpan:p,colIndex:u,rowSpan:o-h+1,isLast:y};a.set(v,x),t[h].push(x),u+=1}})}return d(i,0),{hasEllipsis:l,rows:t,cols:n,dataRelatedCols:r}}function $p(i,e){const t=Ue(()=>Yp(i.columns,e));return{rowsRef:Ue(()=>t.value.rows),colsRef:Ue(()=>t.value.cols),hasEllipsisRef:Ue(()=>t.value.hasEllipsis),dataRelatedColsRef:Ue(()=>t.value.dataRelatedCols)}}function Zp(i,e){const t=Mi(()=>{for(const c of i.columns)if(c.type==="expand")return c.renderExpand}),n=Mi(()=>{let c;for(const u of i.columns)if(u.type==="expand"){c=u.expandable;break}return c}),r=Ze(i.defaultExpandAll?t!=null&&t.value?(()=>{const c=[];return e.value.treeNodes.forEach(u=>{var d;!((d=n.value)===null||d===void 0)&&d.call(n,u.rawNode)&&c.push(u.key)}),c})():e.value.getNonLeafKeys():i.defaultExpandedRowKeys),a=lt(i,"expandedRowKeys"),o=lt(i,"stickyExpandedRows"),s=as(a,r);function l(c){const{onUpdateExpandedRowKeys:u,"onUpdate:expandedRowKeys":d}=i;u&&ht(u,c),d&&ht(d,c),r.value=c}return{stickyExpandedRowsRef:o,mergedExpandedRowKeysRef:s,renderExpandRef:t,expandableRef:n,doUpdateExpandedRowKeys:l}}const cl=Qp(),Jp=at([Ne("data-table",`
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `,[Ne("data-table-wrapper",`
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `),tt("flex-height",[at(">",[Ne("data-table-wrapper",[at(">",[Ne("data-table-base-table",`
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `,[at(">",[Ne("data-table-base-table-body","flex-basis: 0;",[at("&:last-child","flex-grow: 1;")])])])])])])]),at(">",[Ne("data-table-loading-wrapper",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Xh({originalTransform:"translateX(-50%) translateY(-50%)"})])]),Ne("data-table-expand-placeholder",`
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `),Ne("data-table-indent",`
 display: inline-block;
 height: 1px;
 `),Ne("data-table-expand-trigger",`
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `,[tt("expanded",[Ne("icon","transform: rotate(90deg);",[Sr({originalTransform:"rotate(90deg)"})]),Ne("base-icon","transform: rotate(90deg);",[Sr({originalTransform:"rotate(90deg)"})])]),Ne("base-loading",`
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Sr()]),Ne("icon",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Sr()]),Ne("base-icon",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Sr()])]),Ne("data-table-thead",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `),Ne("data-table-tr",`
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `,[Ne("data-table-expand",`
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `),tt("striped","background-color: var(--n-merged-td-color-striped);",[Ne("data-table-td","background-color: var(--n-merged-td-color-striped);")]),Js("summary",[at("&:hover","background-color: var(--n-merged-td-color-hover);",[at(">",[Ne("data-table-td","background-color: var(--n-merged-td-color-hover);")])])])]),Ne("data-table-th",`
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `,[tt("filterable",`
 padding-right: 36px;
 `,[tt("sortable",`
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]),cl,tt("selection",`
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `),Qn("title-wrapper",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `,[Qn("title",`
 flex: 1;
 min-width: 0;
 `)]),Qn("ellipsis",`
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `),tt("hover",`
 background-color: var(--n-merged-th-color-hover);
 `),tt("sorting",`
 background-color: var(--n-merged-th-color-sorting);
 `),tt("sortable",`
 cursor: pointer;
 `,[Qn("ellipsis",`
 max-width: calc(100% - 18px);
 `),at("&:hover",`
 background-color: var(--n-merged-th-color-hover);
 `)]),Ne("data-table-sorter",`
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `,[Ne("base-icon","transition: transform .3s var(--n-bezier)"),tt("desc",[Ne("base-icon",`
 transform: rotate(0deg);
 `)]),tt("asc",[Ne("base-icon",`
 transform: rotate(-180deg);
 `)]),tt("asc, desc",`
 color: var(--n-th-icon-color-active);
 `)]),Ne("data-table-resize-button",`
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `,[at("&::after",`
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `),tt("active",[at("&::after",` 
 background-color: var(--n-th-icon-color-active);
 `)]),at("&:hover::after",`
 background-color: var(--n-th-icon-color-active);
 `)]),Ne("data-table-filter",`
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `,[at("&:hover",`
 background-color: var(--n-th-button-color-hover);
 `),tt("show",`
 background-color: var(--n-th-button-color-hover);
 `),tt("active",`
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]),Ne("data-table-td",`
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,[tt("expand",[Ne("data-table-expand-trigger",`
 margin-right: 0;
 `)]),tt("last-row",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[at("&::after",`
 bottom: 0 !important;
 `),at("&::before",`
 bottom: 0 !important;
 `)]),tt("summary",`
 background-color: var(--n-merged-th-color);
 `),tt("hover",`
 background-color: var(--n-merged-td-color-hover);
 `),tt("sorting",`
 background-color: var(--n-merged-td-color-sorting);
 `),Qn("ellipsis",`
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `),tt("selection, expand",`
 text-align: center;
 padding: 0;
 line-height: 0;
 `),cl]),Ne("data-table-empty",`
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `,[tt("hide",`
 opacity: 0;
 `)]),Qn("pagination",`
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `),Ne("data-table-wrapper",`
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `),tt("loading",[Ne("data-table-wrapper",`
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]),tt("single-column",[Ne("data-table-td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `,[at("&::after, &::before",`
 bottom: 0 !important;
 `)])]),Js("single-line",[Ne("data-table-th",`
 border-right: 1px solid var(--n-merged-border-color);
 `,[tt("last",`
 border-right: 0 solid var(--n-merged-border-color);
 `)]),Ne("data-table-td",`
 border-right: 1px solid var(--n-merged-border-color);
 `,[tt("last-col",`
 border-right: 0 solid var(--n-merged-border-color);
 `)])]),tt("bordered",[Ne("data-table-wrapper",`
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]),Ne("data-table-base-table",[tt("transition-disabled",[Ne("data-table-th",[at("&::after, &::before","transition: none;")]),Ne("data-table-td",[at("&::after, &::before","transition: none;")])])]),tt("bottom-bordered",[Ne("data-table-td",[tt("last-row",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),Ne("data-table-table",`
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `),Ne("data-table-base-table-header",`
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `,[at("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),Ne("data-table-check-extra",`
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]),Ne("data-table-filter-menu",[Ne("scrollbar",`
 max-height: 240px;
 `),Qn("group",`
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `,[Ne("checkbox",`
 margin-bottom: 12px;
 margin-right: 0;
 `),Ne("radio",`
 margin-bottom: 12px;
 margin-right: 0;
 `)]),Qn("action",`
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `,[Ne("button",[at("&:not(:last-child)",`
 margin: var(--n-action-button-margin);
 `),at("&:last-child",`
 margin-right: 0;
 `)])]),Ne("divider",`
 margin: 0 !important;
 `)]),ph(Ne("data-table",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)),mh(Ne("data-table",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);function Qp(){return[tt("fixed-left",`
 left: 0;
 position: sticky;
 z-index: 2;
 `,[at("&::after",`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]),tt("fixed-right",`
 right: 0;
 position: sticky;
 z-index: 1;
 `,[at("&::before",`
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])]}const em=gt({name:"DataTable",alias:["AdvancedTable"],props:mp,setup(i,{slots:e}){const{mergedBorderedRef:t,mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:a}=Qr(i),o=Fd("DataTable",a,n),s=Ue(()=>{const{bottomBordered:Se}=i;return t.value?!1:Se!==void 0?Se:!0}),l=to("DataTable","-data-table",Jp,gh,i,n),c=Ze(null),u=Ze(null),{getResizableWidth:d,clearResizableWidth:f,doUpdateResizableWidth:h}=Kp(),{rowsRef:m,colsRef:v,dataRelatedColsRef:g,hasEllipsisRef:p}=$p(i,d),{treeMateRef:y,mergedCurrentPageRef:x,paginatedDataRef:S,rawPaginatedDataRef:M,selectionColumnRef:O,hoverKeyRef:T,mergedPaginationRef:L,mergedFilterStateRef:b,mergedSortStateRef:_,childTriggerColIndexRef:V,doUpdatePage:N,doUpdateFilters:F,onUnstableColumnResize:B,deriveNextSorter:H,filter:$,filters:E,clearFilter:D,clearFilters:R,clearSorter:U,page:A,sort:k}=Xp(i,{dataRelatedColsRef:g}),K=Se=>{const{fileName:Ae="data.csv",keepOriginalData:Oe=!1}=Se||{},oe=Oe?i.data:M.value,we=Tp(i.columns,oe),ve=new Blob([we],{type:"text/csv;charset=utf-8"}),Ce=URL.createObjectURL(ve);fp(Ce,Ae.endsWith(".csv")?Ae:`${Ae}.csv`),URL.revokeObjectURL(Ce)},{doCheckAll:te,doUncheckAll:re,doCheck:pe,doUncheck:ne,headerCheckboxDisabledRef:se,someRowsCheckedRef:me,allRowsCheckedRef:be,mergedCheckedRowKeySetRef:Y,mergedInderminateRowKeySetRef:P}=Hp(i,{selectionColumnRef:O,treeMateRef:y,paginatedDataRef:S}),{stickyExpandedRowsRef:q,mergedExpandedRowKeysRef:j,renderExpandRef:ee,expandableRef:ae,doUpdateExpandedRowKeys:G}=Zp(i,y),{handleTableBodyScroll:Q,handleTableHeaderScroll:C,syncScrollState:z,setHeaderScrollLeft:W,leftActiveFixedColKeyRef:Z,leftActiveFixedChildrenColKeysRef:I,rightActiveFixedColKeyRef:w,rightActiveFixedChildrenColKeysRef:ie,leftFixedColumnsRef:ce,rightFixedColumnsRef:ue,fixedColumnLeftMapRef:X,fixedColumnRightMapRef:de}=qp(i,{bodyWidthRef:c,mainTableInstRef:u,mergedCurrentPageRef:x}),{localeRef:xe}=qh("DataTable"),fe=Ue(()=>i.virtualScroll||i.flexHeight||i.maxHeight!==void 0||p.value?"fixed":i.tableLayout);bh(yn,{props:i,treeMateRef:y,renderExpandIconRef:lt(i,"renderExpandIcon"),loadingKeySetRef:Ze(new Set),slots:e,indentRef:lt(i,"indent"),childTriggerColIndexRef:V,bodyWidthRef:c,componentId:vh(),hoverKeyRef:T,mergedClsPrefixRef:n,mergedThemeRef:l,scrollXRef:Ue(()=>i.scrollX),rowsRef:m,colsRef:v,paginatedDataRef:S,leftActiveFixedColKeyRef:Z,leftActiveFixedChildrenColKeysRef:I,rightActiveFixedColKeyRef:w,rightActiveFixedChildrenColKeysRef:ie,leftFixedColumnsRef:ce,rightFixedColumnsRef:ue,fixedColumnLeftMapRef:X,fixedColumnRightMapRef:de,mergedCurrentPageRef:x,someRowsCheckedRef:me,allRowsCheckedRef:be,mergedSortStateRef:_,mergedFilterStateRef:b,loadingRef:lt(i,"loading"),rowClassNameRef:lt(i,"rowClassName"),mergedCheckedRowKeySetRef:Y,mergedExpandedRowKeysRef:j,mergedInderminateRowKeySetRef:P,localeRef:xe,expandableRef:ae,stickyExpandedRowsRef:q,rowKeyRef:lt(i,"rowKey"),renderExpandRef:ee,summaryRef:lt(i,"summary"),virtualScrollRef:lt(i,"virtualScroll"),virtualScrollXRef:lt(i,"virtualScrollX"),heightForRowRef:lt(i,"heightForRow"),minRowHeightRef:lt(i,"minRowHeight"),virtualScrollHeaderRef:lt(i,"virtualScrollHeader"),headerHeightRef:lt(i,"headerHeight"),rowPropsRef:lt(i,"rowProps"),stripedRef:lt(i,"striped"),checkOptionsRef:Ue(()=>{const{value:Se}=O;return Se==null?void 0:Se.options}),rawPaginatedDataRef:M,filterMenuCssVarsRef:Ue(()=>{const{self:{actionDividerColor:Se,actionPadding:Ae,actionButtonMargin:Oe}}=l.value;return{"--n-action-padding":Ae,"--n-action-button-margin":Oe,"--n-action-divider-color":Se}}),onLoadRef:lt(i,"onLoad"),mergedTableLayoutRef:fe,maxHeightRef:lt(i,"maxHeight"),minHeightRef:lt(i,"minHeight"),flexHeightRef:lt(i,"flexHeight"),headerCheckboxDisabledRef:se,paginationBehaviorOnFilterRef:lt(i,"paginationBehaviorOnFilter"),summaryPlacementRef:lt(i,"summaryPlacement"),filterIconPopoverPropsRef:lt(i,"filterIconPopoverProps"),scrollbarPropsRef:lt(i,"scrollbarProps"),syncScrollState:z,doUpdatePage:N,doUpdateFilters:F,getResizableWidth:d,onUnstableColumnResize:B,clearResizableWidth:f,doUpdateResizableWidth:h,deriveNextSorter:H,doCheck:pe,doUncheck:ne,doCheckAll:te,doUncheckAll:re,doUpdateExpandedRowKeys:G,handleTableHeaderScroll:C,handleTableBodyScroll:Q,setHeaderScrollLeft:W,renderCell:lt(i,"renderCell")});const Le={filter:$,filters:E,clearFilters:R,clearSorter:U,page:A,sort:k,clearFilter:D,downloadCsv:K,scrollTo:(Se,Ae)=>{var Oe;(Oe=u.value)===null||Oe===void 0||Oe.scrollTo(Se,Ae)}},Pe=Ue(()=>{const{size:Se}=i,{common:{cubicBezierEaseInOut:Ae},self:{borderColor:Oe,tdColorHover:oe,tdColorSorting:we,tdColorSortingModal:ve,tdColorSortingPopover:Ce,thColorSorting:Re,thColorSortingModal:Ye,thColorSortingPopover:Je,thColor:We,thColorHover:xt,tdColor:rt,tdTextColor:Ut,thTextColor:pt,thFontWeight:In,thButtonColorHover:Li,thIconColor:_r,thIconColorActive:ln,filterSize:di,borderRadius:Sn,lineHeight:Qt,tdColorModal:Di,thColorModal:yr,borderColorModal:Lt,thColorHoverModal:J,tdColorHoverModal:ge,borderColorPopover:ye,thColorPopover:he,tdColorPopover:Me,tdColorHoverPopover:Ie,thColorHoverPopover:ke,paginationMargin:Be,emptyPadding:Ge,boxShadowAfter:qe,boxShadowBefore:Ve,sorterSize:je,resizableContainerSize:ut,resizableSize:ft,loadingColor:Vt,loadingSize:cn,opacityLoading:mt,tdColorStriped:Qe,tdColorStripedModal:Mr,tdColorStripedPopover:bt,[Wr("fontSize",Se)]:On,[Wr("thPadding",Se)]:la,[Wr("tdPadding",Se)]:fi}}=l.value;return{"--n-font-size":On,"--n-th-padding":la,"--n-td-padding":fi,"--n-bezier":Ae,"--n-border-radius":Sn,"--n-line-height":Qt,"--n-border-color":Oe,"--n-border-color-modal":Lt,"--n-border-color-popover":ye,"--n-th-color":We,"--n-th-color-hover":xt,"--n-th-color-modal":yr,"--n-th-color-hover-modal":J,"--n-th-color-popover":he,"--n-th-color-hover-popover":ke,"--n-td-color":rt,"--n-td-color-hover":oe,"--n-td-color-modal":Di,"--n-td-color-hover-modal":ge,"--n-td-color-popover":Me,"--n-td-color-hover-popover":Ie,"--n-th-text-color":pt,"--n-td-text-color":Ut,"--n-th-font-weight":In,"--n-th-button-color-hover":Li,"--n-th-icon-color":_r,"--n-th-icon-color-active":ln,"--n-filter-size":di,"--n-pagination-margin":Be,"--n-empty-padding":Ge,"--n-box-shadow-before":Ve,"--n-box-shadow-after":qe,"--n-sorter-size":je,"--n-resizable-container-size":ut,"--n-resizable-size":ft,"--n-loading-size":cn,"--n-loading-color":Vt,"--n-opacity-loading":mt,"--n-td-color-striped":Qe,"--n-td-color-striped-modal":Mr,"--n-td-color-striped-popover":bt,"n-td-color-sorting":we,"n-td-color-sorting-modal":ve,"n-td-color-sorting-popover":Ce,"n-th-color-sorting":Re,"n-th-color-sorting-modal":Ye,"n-th-color-sorting-popover":Je}}),_e=r?Gd("data-table",Ue(()=>i.size[0]),Pe,i):void 0,Te=Ue(()=>{if(!i.pagination)return!1;if(i.paginateSinglePage)return!0;const Se=L.value,{pageCount:Ae}=Se;return Ae!==void 0?Ae>1:Se.itemCount&&Se.pageSize&&Se.itemCount>Se.pageSize});return Object.assign({mainTableInstRef:u,mergedClsPrefix:n,rtlEnabled:o,mergedTheme:l,paginatedData:S,mergedBordered:t,mergedBottomBordered:s,mergedPagination:L,mergedShowPagination:Te,cssVars:r?void 0:Pe,themeClass:_e==null?void 0:_e.themeClass,onRender:_e==null?void 0:_e.onRender},Le)},render(){const{mergedClsPrefix:i,themeClass:e,onRender:t,$slots:n,spinProps:r}=this;return t==null||t(),Ee("div",{class:[`${i}-data-table`,this.rtlEnabled&&`${i}-data-table--rtl`,e,{[`${i}-data-table--bordered`]:this.mergedBordered,[`${i}-data-table--bottom-bordered`]:this.mergedBottomBordered,[`${i}-data-table--single-line`]:this.singleLine,[`${i}-data-table--single-column`]:this.singleColumn,[`${i}-data-table--loading`]:this.loading,[`${i}-data-table--flex-height`]:this.flexHeight}],style:this.cssVars},Ee("div",{class:`${i}-data-table-wrapper`},Ee(Gp,{ref:"mainTableInstRef"})),this.mergedShowPagination?Ee("div",{class:`${i}-data-table__pagination`},Ee(qd,Object.assign({theme:this.mergedTheme.peers.Pagination,themeOverrides:this.mergedTheme.peerOverrides.Pagination,disabled:this.loading},this.mergedPagination))):null,Ee(xh,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?Ee("div",{class:`${i}-data-table-loading-wrapper`},Xd(n.loading,()=>[Ee(Nd,Object.assign({clsPrefix:i,strokeWidth:20},r))])):null}))}}),tm=Ne("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),nm=Object.assign(Object.assign({},to.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),im=gt({name:"GradientText",props:nm,setup(i){dp();const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Qr(i),n=Ue(()=>{const{type:c}=i;return c==="danger"?"error":c}),r=Ue(()=>{let c=i.size||i.fontSize;return c&&(c=Yt(c)),c||void 0}),a=Ue(()=>{const c=i.color||i.gradient;if(typeof c=="string")return c;if(c){const u=c.deg||0,d=c.from,f=c.to;return`linear-gradient(${u}deg, ${d} 0%, ${f} 100%)`}}),o=to("GradientText","-gradient-text",tm,_h,i,e),s=Ue(()=>{const{value:c}=n,{common:{cubicBezierEaseInOut:u},self:{rotate:d,[Wr("colorStart",c)]:f,[Wr("colorEnd",c)]:h,fontWeight:m}}=o.value;return{"--n-bezier":u,"--n-rotate":d,"--n-color-start":f,"--n-color-end":h,"--n-font-weight":m}}),l=t?Gd("gradient-text",Ue(()=>n.value[0]),s,i):void 0;return{mergedClsPrefix:e,compatibleType:n,styleFontSize:r,styleBgImage:a,cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{mergedClsPrefix:i,onRender:e}=this;return e==null||e(),Ee("span",{class:[`${i}-gradient-text`,`${i}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});function rm(){const i=sn(yh,null);return i===null&&Mh("use-notification","No outer `n-notification-provider` found."),i}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ws="154",Vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},am=0,ul=1,om=2,tf=1,nf=2,Hn=3,Zn=0,Ht=1,bn=2,Kn=0,nr=1,os=2,dl=3,fl=4,sm=5,Qi=100,lm=101,cm=102,hl=103,pl=104,um=200,dm=201,fm=202,hm=203,rf=204,af=205,pm=206,mm=207,gm=208,bm=209,vm=210,xm=0,_m=1,ym=2,ss=3,Mm=4,Sm=5,Em=6,Tm=7,As=0,wm=1,Am=2,Yn=0,Cm=1,Rm=2,Pm=3,of=4,Lm=5,sf=300,ar=301,or=302,ls=303,cs=304,io=306,sr=1e3,an=1001,$a=1002,St=1003,us=1004,qa=1005,Gt=1006,lf=1007,Ai=1008,ci=1009,Dm=1010,Im=1011,Cs=1012,cf=1013,si=1014,Wn=1015,$n=1016,uf=1017,df=1018,Si=1020,Om=1021,on=1023,Um=1024,Fm=1025,Ei=1026,lr=1027,km=1028,ff=1029,Nm=1030,hf=1031,pf=1033,_o=33776,yo=33777,Mo=33778,So=33779,ml=35840,gl=35841,bl=35842,vl=35843,zm=36196,xl=37492,_l=37496,yl=37808,Ml=37809,Sl=37810,El=37811,Tl=37812,wl=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Ll=37818,Dl=37819,Il=37820,Ol=37821,Eo=36492,Bm=36283,Ul=36284,Fl=36285,kl=36286,Kr=2300,cr=2301,To=2302,Nl=2400,zl=2401,Bl=2402,Gm=2500,Hm=0,mf=1,ds=2,gf=3e3,Ti=3001,Vm=3200,Wm=3201,Rs=0,jm=1,wi="",He="srgb",An="srgb-linear",bf="display-p3",wo=7680,Xm=519,qm=512,Km=513,Ym=514,$m=515,Zm=516,Jm=517,Qm=518,eg=519,fs=35044,Gl="300 es",hs=1035,jn=2e3,Za=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const jr=Math.PI/180,ur=180/Math.PI;function vn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Ps(i,e){return(i%e+e)%e}function tg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ng(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function ig(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function rg(i,e=1){return e-Math.abs(Ps(i,e*2)-e)}function ag(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function lg(i,e){return i+Math.random()*(e-i)}function cg(i){return i*(.5-Math.random())}function ug(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(i){return i*jr}function fg(i){return i*ur}function ps(i){return(i&i-1)===0&&i!==0}function vf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ja(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hg(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+n)/2),u=o((e+n)/2),d=a((e-n)/2),f=o((e-n)/2),h=a((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(s*u,l*d,l*f,s*c);break;case"YZY":i.set(l*f,s*u,l*d,s*c);break;case"ZXZ":i.set(l*d,l*f,s*u,s*c);break;case"XZX":i.set(s*u,l*m,l*h,s*c);break;case"YXY":i.set(l*h,s*u,l*m,s*c);break;case"ZYZ":i.set(l*m,l*h,s*u,s*c);break;default:}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pg={DEG2RAD:jr,RAD2DEG:ur,generateUUID:vn,clamp:wt,euclideanModulo:Ps,mapLinear:tg,inverseLerp:ng,lerp:Xr,damp:ig,pingpong:rg,smoothstep:ag,smootherstep:og,randInt:sg,randFloat:lg,randFloatSpread:cg,seededRandom:ug,degToRad:dg,radToDeg:fg,isPowerOfTwo:ps,ceilPowerOfTwo:vf,floorPowerOfTwo:Ja,setQuaternionFromProperEuler:hg,normalize:ot,denormalize:Xn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,r,a,o,s,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c)}set(e,t,n,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],m=n[8],v=r[0],g=r[3],p=r[6],y=r[1],x=r[4],S=r[7],M=r[2],O=r[5],T=r[8];return a[0]=o*v+s*y+l*M,a[3]=o*g+s*x+l*O,a[6]=o*p+s*S+l*T,a[1]=c*v+u*y+d*M,a[4]=c*g+u*x+d*O,a[7]=c*p+u*S+d*T,a[2]=f*v+h*y+m*M,a[5]=f*g+h*x+m*O,a[8]=f*p+h*S+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*a*u+n*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=u*o-s*c,f=s*l-u*a,h=c*a-o*l,m=t*d+n*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*c-u*n)*v,e[2]=(s*n-r*o)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*a-s*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new $e;function xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Vl={};function qr(i){i in Vl||(Vl[i]=!0)}function ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Co(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const mg=new $e().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gg=new $e().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bg(i){return i.convertSRGBToLinear().applyMatrix3(gg)}function vg(i){return i.applyMatrix3(mg).convertLinearToSRGB()}const xg={[An]:i=>i,[He]:i=>i.convertSRGBToLinear(),[bf]:bg},_g={[An]:i=>i,[He]:i=>i.convertLinearToSRGB(),[bf]:vg},dn={enabled:!0,get legacyMode(){return!this.enabled},set legacyMode(i){this.enabled=!i},get workingColorSpace(){return An},set workingColorSpace(i){},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=xg[e],r=_g[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Oi;class _f{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Yr("canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ir(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return e}}let yg=0;class yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Ro(r[o].image)):a.push(Ro(r[o]))}else a=Ro(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:{}}let Mg=0;class Ct extends Pi{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=an,r=an,a=Gt,o=Ai,s=on,l=ci,c=Ct.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=vn(),this.name="",this.source=new yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ti?He:wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===He?Ti:gf}set encoding(e){qr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ti?He:wi}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=sf;Ct.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(h+1)/2,M=(p+1)/2,O=(u+f)/4,T=(d+v)/4,L=(m+g)/4;return x>S&&x>M?x<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(x),r=O/n,a=T/n):S>M?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=O/r,a=L/r):M<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),n=T/a,r=L/a),this.set(n,r,a,t),this}let y=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(d-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xn extends Pi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(qr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ti?He:wi),this.texture=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mf extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sg extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3];const f=a[o+0],h=a[o+1],m=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(s===1){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=v;return}if(d!==v||l!==f||c!==h||u!==m){let g=1-s;const p=l*f+c*h+u*m+d*v,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),O=Math.atan2(M,p*y);g=Math.sin(g*O)/M,s=Math.sin(s*O)/M}const S=s*y;if(l=l*g+f*S,c=c*g+h*S,u=u*g+m*S,d=d*g+v*S,g===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=a[o],f=a[o+1],h=a[o+2],m=a[o+3];return e[t]=s*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-s*h,e[t+2]=c*m+u*h+s*f-l*d,e[t+3]=u*m-s*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(r/2),d=s(a/2),f=l(n/2),h=l(r/2),m=l(a/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+s+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(a-c)*h,this._z=(o-r)*h}else if(n>s&&n>d){const h=2*Math.sqrt(1+n-s-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(a+c)/h}else if(s>d){const h=2*Math.sqrt(1+s-n-d);this._w=(a-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-s);this._w=(o-r)/h,this._x=(a+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-n*c,this._z=a*u+o*c+n*l-r*s,this._w=o*u-n*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,n=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*r-s*n,u=l*n+s*t-a*r,d=l*r+a*n-o*t,f=-a*t-o*n-s*r;return this.x=c*l+f*-a+u*-s-d*-o,this.y=u*l+f*-o+d*-a-c*-s,this.z=d*l+f*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-n*l,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new le,Wl=new Cn;class Jn{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ui.copy(e.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Fn.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else r.boundingBox===null&&r.computeBoundingBox(),Ui.copy(r.boundingBox),Ui.applyMatrix4(e.matrixWorld),this.union(Ui)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),da.subVectors(this.max,Tr),Fi.subVectors(e.a,Tr),ki.subVectors(e.b,Tr),Ni.subVectors(e.c,Tr),ei.subVectors(ki,Fi),ti.subVectors(Ni,ki),pi.subVectors(Fi,Ni);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-pi.z,pi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,pi.z,0,-pi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-pi.y,pi.x,0];return!Lo(t,Fi,ki,Ni,da)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Fi,ki,Ni,da))?!1:(fa.crossVectors(ei,ti),t=[fa.x,fa.y,fa.z],Lo(t,Fi,ki,Ni,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new le,new le,new le,new le,new le,new le,new le,new le],Fn=new le,Ui=new Jn,Fi=new le,ki=new le,Ni=new le,ei=new le,ti=new le,pi=new le,Tr=new le,da=new le,fa=new le,mi=new le;function Lo(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){mi.fromArray(i,a);const s=r.x*Math.abs(mi.x)+r.y*Math.abs(mi.y)+r.z*Math.abs(mi.z),l=e.dot(mi),c=t.dot(mi),u=n.dot(mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Eg=new Jn,wr=new le,Do=new le;class Rn{constructor(e=new le,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);const t=wr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(wr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Do)),this.expandByPoint(wr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new le,Io=new le,ha=new le,ni=new le,Oo=new le,pa=new le,Uo=new le;class ro{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Io.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(Io);const a=e.distanceTo(t)*.5,o=-this.direction.dot(ha),s=ni.dot(this.direction),l=-ni.dot(ha),c=ni.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-s,f=o*s-l,m=a*u,d>=0)if(f>=-m)if(f<=m){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*s)+f*(o*d+f+2*l)+c}else f=a,d=Math.max(0,-(o*f+s)),h=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(o*f+s)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*a+s)),f=d>0?-a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-a,-l),a),h=f*(f+2*l)+c):(d=Math.max(0,-(o*a+s)),f=d>0?a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+c);else f=o>0?-a:a,d=Math.max(0,-(o*f+s)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Io).addScaledVector(ha,f),h}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),r=kn.dot(kn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(a=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(s=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,a){Oo.subVectors(t,e),pa.subVectors(n,e),Uo.crossVectors(Oo,pa);let o=this.direction.dot(Uo),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ni.subVectors(this.origin,e);const l=s*this.direction.dot(pa.crossVectors(ni,pa));if(l<0)return null;const c=s*this.direction.dot(Oo.cross(ni));if(c<0||l+c>o)return null;const u=-s*ni.dot(Uo);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,r,a,o,s,l,c,u,d,f,h,m,v,g){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c,u,d,f,h,m,v,g)}set(e,t,n,r,a,o,s,l,c,u,d,f,h,m,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=s,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zi.setFromMatrixColumn(e,0).length(),a=1/zi.setFromMatrixColumn(e,1).length(),o=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=o*u,h=o*d,m=s*u,v=s*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-v*c,t[9]=-s*l,t[2]=v-f*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,v=c*d;t[0]=f+v*s,t[4]=m*s-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-s,t[2]=h*s-m,t[6]=v+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,v=c*d;t[0]=f-v*s,t[4]=-o*d,t[8]=m+h*s,t[1]=h+m*s,t[5]=o*u,t[9]=v-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=s*u,v=s*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-m,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=s*l,v=s*c;t[0]=l*u,t[4]=v-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=s*l,v=s*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=s*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,wg)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),ii.crossVectors(n,jt),ii.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),ii.crossVectors(n,jt)),ii.normalize(),ma.crossVectors(jt,ii),r[0]=ii.x,r[4]=ma.x,r[8]=jt.x,r[1]=ii.y,r[5]=ma.y,r[9]=jt.y,r[2]=ii.z,r[6]=ma.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],m=n[2],v=n[6],g=n[10],p=n[14],y=n[3],x=n[7],S=n[11],M=n[15],O=r[0],T=r[4],L=r[8],b=r[12],_=r[1],V=r[5],N=r[9],F=r[13],B=r[2],H=r[6],$=r[10],E=r[14],D=r[3],R=r[7],U=r[11],A=r[15];return a[0]=o*O+s*_+l*B+c*D,a[4]=o*T+s*V+l*H+c*R,a[8]=o*L+s*N+l*$+c*U,a[12]=o*b+s*F+l*E+c*A,a[1]=u*O+d*_+f*B+h*D,a[5]=u*T+d*V+f*H+h*R,a[9]=u*L+d*N+f*$+h*U,a[13]=u*b+d*F+f*E+h*A,a[2]=m*O+v*_+g*B+p*D,a[6]=m*T+v*V+g*H+p*R,a[10]=m*L+v*N+g*$+p*U,a[14]=m*b+v*F+g*E+p*A,a[3]=y*O+x*_+S*B+M*D,a[7]=y*T+x*V+S*H+M*R,a[11]=y*L+x*N+S*$+M*U,a[15]=y*b+x*F+S*E+M*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+a*l*d-r*c*d-a*s*f+n*c*f+r*s*h-n*l*h)+v*(+t*l*h-t*c*f+a*o*f-r*o*h+r*c*u-a*l*u)+g*(+t*c*d-t*s*h-a*o*d+n*o*h+a*s*u-n*c*u)+p*(-r*s*u-t*l*d+t*s*f+r*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=d*g*c-v*f*c+v*l*h-s*g*h-d*l*p+s*f*p,x=m*f*c-u*g*c-m*l*h+o*g*h+u*l*p-o*f*p,S=u*v*c-m*d*c+m*s*h-o*v*h-u*s*p+o*d*p,M=m*d*l-u*v*l-m*s*f+o*v*f+u*s*g-o*d*g,O=t*y+n*x+r*S+a*M;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/O;return e[0]=y*T,e[1]=(v*f*a-d*g*a-v*r*h+n*g*h+d*r*p-n*f*p)*T,e[2]=(s*g*a-v*l*a+v*r*c-n*g*c-s*r*p+n*l*p)*T,e[3]=(d*l*a-s*f*a-d*r*c+n*f*c+s*r*h-n*l*h)*T,e[4]=x*T,e[5]=(u*g*a-m*f*a+m*r*h-t*g*h-u*r*p+t*f*p)*T,e[6]=(m*l*a-o*g*a-m*r*c+t*g*c+o*r*p-t*l*p)*T,e[7]=(o*f*a-u*l*a+u*r*c-t*f*c-o*r*h+t*l*h)*T,e[8]=S*T,e[9]=(m*d*a-u*v*a-m*n*h+t*v*h+u*n*p-t*d*p)*T,e[10]=(o*v*a-m*s*a+m*n*c-t*v*c-o*n*p+t*s*p)*T,e[11]=(u*s*a-o*d*a-u*n*c+t*d*c+o*n*h-t*s*h)*T,e[12]=M*T,e[13]=(u*v*r-m*d*r+m*n*f-t*v*f-u*n*g+t*d*g)*T,e[14]=(m*s*r-o*v*r-m*n*l+t*v*l+o*n*g-t*s*g)*T,e[15]=(o*d*r-u*s*r+u*n*l-t*d*l-o*n*f+t*s*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+n,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,u=o+o,d=s+s,f=a*c,h=a*u,m=a*d,v=o*u,g=o*d,p=s*d,y=l*c,x=l*u,S=l*d,M=n.x,O=n.y,T=n.z;return r[0]=(1-(v+p))*M,r[1]=(h+S)*M,r[2]=(m-x)*M,r[3]=0,r[4]=(h-S)*O,r[5]=(1-(f+p))*O,r[6]=(g+y)*O,r[7]=0,r[8]=(m+x)*T,r[9]=(g-y)*T,r[10]=(1-(f+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=zi.set(r[0],r[1],r[2]).length();const o=zi.set(r[4],r[5],r[6]).length(),s=zi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/a,u=1/o,d=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=jn){const l=this.elements,c=2*a/(t-e),u=2*a/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let h,m;if(s===jn)h=-(o+a)/(o-a),m=-2*o*a/(o-a);else if(s===Za)h=-o/(o-a),m=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=jn){const l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-a),f=(t+e)*c,h=(n+r)*u;let m,v;if(s===jn)m=(o+a)*d,v=-2*d;else if(s===Za)m=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new le,fn=new Ke,Tg=new le(0,0,0),wg=new le(1,1,1),ii=new le,ma=new le,jt=new le,jl=new Ke,Xl=new Cn;class ao{constructor(e=0,t=0,n=0,r=ao.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,h));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ao.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const ql=new le,Bi=new Cn,Nn=new Ke,ga=new le,Ar=new le,Cg=new le,Rg=new Cn,Kl=new le(1,0,0),Yl=new le(0,1,0),$l=new le(0,0,1),Pg={type:"added"},Zl={type:"removed"};class dt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new le,t=new ao,n=new Cn,r=new le(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new $e}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis($l,e)}translateOnAxis(e,t){return ql.copy(e).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis($l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ga.copy(e):ga.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ar,ga,this.up):Nn.lookAt(ga,Ar,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pg)),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Zl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}dt.DEFAULT_UP=new le(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new le,zn=new le,Fo=new le,Bn=new le,Gi=new le,Hi=new le,Jl=new le,ko=new le,No=new le,zo=new le;let ba=!1;class gn{constructor(e=new le,t=new le,n=new le){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){hn.subVectors(r,t),zn.subVectors(n,t),Fo.subVectors(e,t);const o=hn.dot(hn),s=hn.dot(zn),l=hn.dot(Fo),c=zn.dot(zn),u=zn.dot(Fo),d=o*c-s*s;if(d===0)return a.set(-2,-1,-1);const f=1/d,h=(c*l-s*u)*f,m=(o*u-s*l)*f;return a.set(1-h-m,m,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,r,a,o,s,l){return ba===!1&&(ba=!0),this.getInterpolation(e,t,n,r,a,o,s,l)}static getInterpolation(e,t,n,r,a,o,s,l){return this.getBarycoord(e,t,n,r,Bn),l.setScalar(0),l.addScaledVector(a,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(s,Bn.z),l}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),zn.subVectors(e,t),hn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),hn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return ba===!1&&(ba=!0),gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Gi.subVectors(r,n),Hi.subVectors(a,n),ko.subVectors(e,n);const l=Gi.dot(ko),c=Hi.dot(ko);if(l<=0&&c<=0)return t.copy(n);No.subVectors(e,r);const u=Gi.dot(No),d=Hi.dot(No);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Gi,o);zo.subVectors(e,a);const h=Gi.dot(zo),m=Hi.dot(zo);if(m>=0&&h<=m)return t.copy(a);const v=h*c-l*m;if(v<=0&&c>=0&&m<=0)return s=c/(c-m),t.copy(n).addScaledVector(Hi,s);const g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return Jl.subVectors(a,r),s=(d-u)/(d-u+(h-m)),t.copy(r).addScaledVector(Jl,s);const p=1/(g+v+f);return o=v*p,s=f*p,t.copy(n).addScaledVector(Gi,o).addScaledVector(Hi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lg=0;class _n extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=nr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=af,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const r=this[t];r!==void 0&&(r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},va={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=He){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=dn.workingColorSpace){return this.r=e,this.g=t,this.b=n,dn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=dn.workingColorSpace){if(e=Ps(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Bo(o,a,e+1/3),this.g=Bo(o,a,e),this.b=Bo(o,a,e-1/3)}return dn.toWorkingColorSpace(this,r),this}setStyle(e,t=He){function n(a){a!==void 0&&parseFloat(a)<1}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=He){const n=Ef[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=He){return dn.fromWorkingColorSpace(It.copy(this),e),Math.round(wt(It.r*255,0,255))*65536+Math.round(wt(It.g*255,0,255))*256+Math.round(wt(It.b*255,0,255))}getHexString(e=He){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.fromWorkingColorSpace(It.copy(this),t);const n=It.r,r=It.g,a=It.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const d=o-s;switch(c=u<=.5?d/(o+s):d/(2-o-s),o){case n:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-n)/d+2;break;case a:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dn.workingColorSpace){return dn.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=He){dn.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,r=It.b;return e!==He?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(pn),pn.h+=e,pn.s+=t,pn.l+=n,this.setHSL(pn.h,pn.s,pn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(va);const n=Xr(pn.h,va.h,t),r=Xr(pn.s,va.s,t),a=Xr(pn.l,va.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new ze;ze.NAMES=Ef;class qn extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=As,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new le,xa=new Fe;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fs,this.updateRange={offset:0,count:-1},this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fs&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Tf extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wf extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dg=0;const en=new Ke,Go=new dt,Vi=new le,Xt=new Jn,Cr=new Jn,Mt=new le;class $t extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xf(e)?wf:Tf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new $e().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new le,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Cr.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(Xt.min,Cr.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,Cr.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(Cr.min),Xt.expandByPoint(Cr.max))}Xt.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Mt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Mt.fromBufferAttribute(s,c),l&&(Vi.fromBufferAttribute(e,c),Mt.add(Vi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let _=0;_<s;_++)c[_]=new le,u[_]=new le;const d=new le,f=new le,h=new le,m=new Fe,v=new Fe,g=new Fe,p=new le,y=new le;function x(_,V,N){d.fromArray(r,_*3),f.fromArray(r,V*3),h.fromArray(r,N*3),m.fromArray(o,_*2),v.fromArray(o,V*2),g.fromArray(o,N*2),f.sub(d),h.sub(d),v.sub(m),g.sub(m);const F=1/(v.x*g.y-g.x*v.y);isFinite(F)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(h,-v.y).multiplyScalar(F),y.copy(h).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(F),c[_].add(p),c[V].add(p),c[N].add(p),u[_].add(y),u[V].add(y),u[N].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let _=0,V=S.length;_<V;++_){const N=S[_],F=N.start,B=N.count;for(let H=F,$=F+B;H<$;H+=3)x(n[H+0],n[H+1],n[H+2])}const M=new le,O=new le,T=new le,L=new le;function b(_){T.fromArray(a,_*3),L.copy(T);const V=c[_];M.copy(V),M.sub(T.multiplyScalar(T.dot(V))).normalize(),O.crossVectors(L,V);const F=O.dot(u[_])<0?-1:1;l[_*4]=M.x,l[_*4+1]=M.y,l[_*4+2]=M.z,l[_*4+3]=F}for(let _=0,V=S.length;_<V;++_){const N=S[_],F=N.start,B=N.count;for(let H=F,$=F+B;H<$;H+=3)b(n[H+0]),b(n[H+1]),b(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new le,a=new le,o=new le,s=new le,l=new le,c=new le,u=new le,d=new le;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),s.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),s.add(u),l.add(u),c.add(u),n.setXYZ(m,s.x,s.y,s.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,a),d.subVectors(r,a),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,d=s.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let v=0,g=l.length;v<g;v++){s.isInterleavedBufferAttribute?h=l[v]*s.data.stride+s.offset:h=l[v]*u;for(let p=0;p<u;p++)f[m++]=c[h++]}return new zt(f,u,d)}if(this.index===null)return this;const t=new $t,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Ke,gi=new ro,_a=new Rn,ec=new le,Wi=new le,ji=new le,Xi=new le,Ho=new le,ya=new le,Ma=new Fe,Sa=new Fe,Ea=new Fe,tc=new le,nc=new le,ic=new le,Ta=new le,wa=new le;class Et extends dt{constructor(e=new $t,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){ya.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],d=a[l];u!==0&&(Ho.fromBufferAttribute(d,e),o?ya.addScaledVector(Ho,u):ya.addScaledVector(Ho.sub(t),u))}t.add(ya)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(a),gi.copy(e.ray).recast(e.near),!(_a.containsPoint(gi.origin)===!1&&(gi.intersectSphere(_a,ec)===null||gi.origin.distanceToSquared(ec)>(e.far-e.near)**2))&&(Ql.copy(a).invert(),gi.copy(e.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,h=a.drawRange;if(s!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(s.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,M=x;S<M;S+=3){const O=s.getX(S),T=s.getX(S+1),L=s.getX(S+2);r=Aa(this,p,e,n,c,u,d,O,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(s.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=s.getX(g),x=s.getX(g+1),S=s.getX(g+2);r=Aa(this,o,e,n,c,u,d,y,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=o[g.materialIndex],y=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=y,M=x;S<M;S+=3){const O=S,T=S+1,L=S+2;r=Aa(this,p,e,n,c,u,d,O,T,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=g,x=g+1,S=g+2;r=Aa(this,o,e,n,c,u,d,y,x,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Ig(i,e,t,n,r,a,o,s){let l;if(e.side===Ht?l=n.intersectTriangle(o,a,r,!0,s):l=n.intersectTriangle(r,a,o,e.side===Zn,s),l===null)return null;wa.copy(s),wa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:i}}function Aa(i,e,t,n,r,a,o,s,l,c){i.getVertexPosition(s,Wi),i.getVertexPosition(l,ji),i.getVertexPosition(c,Xi);const u=Ig(i,e,t,n,Wi,ji,Xi,Ta);if(u){r&&(Ma.fromBufferAttribute(r,s),Sa.fromBufferAttribute(r,l),Ea.fromBufferAttribute(r,c),u.uv=gn.getInterpolation(Ta,Wi,ji,Xi,Ma,Sa,Ea,new Fe)),a&&(Ma.fromBufferAttribute(a,s),Sa.fromBufferAttribute(a,l),Ea.fromBufferAttribute(a,c),u.uv1=gn.getInterpolation(Ta,Wi,ji,Xi,Ma,Sa,Ea,new Fe),u.uv2=u.uv1),o&&(tc.fromBufferAttribute(o,s),nc.fromBufferAttribute(o,l),ic.fromBufferAttribute(o,c),u.normal=gn.getInterpolation(Ta,Wi,ji,Xi,tc,nc,ic,new le),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:s,b:l,c,normal:new le,materialIndex:0};gn.getNormal(Wi,ji,Xi,d.normal),u.face=d}return u}class ta extends $t{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,n,t,e,o,a,0),m("z","y","x",1,-1,n,t,-e,o,a,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,a,4),m("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(d,2));function m(v,g,p,y,x,S,M,O,T,L,b){const _=S/T,V=M/L,N=S/2,F=M/2,B=O/2,H=T+1,$=L+1;let E=0,D=0;const R=new le;for(let U=0;U<$;U++){const A=U*V-F;for(let k=0;k<H;k++){const K=k*_-N;R[v]=K*y,R[g]=A*x,R[p]=B,c.push(R.x,R.y,R.z),R[v]=0,R[g]=0,R[p]=O>0?1:-1,u.push(R.x,R.y,R.z),d.push(k/T),d.push(1-U/L),E+=1}}for(let U=0;U<L;U++)for(let A=0;A<T;A++){const k=f+A+H*U,K=f+A+H*(U+1),te=f+(A+1)+H*(U+1),re=f+(A+1)+H*U;l.push(k,K,re),l.push(K,te,re),D+=6}s.addGroup(h,D,b),h+=D,f+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function dr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?e[t][n]=null:e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Nt(i){const e={};for(let t=0;t<i.length;t++){const n=dr(i[t]);for(const r in n)e[r]=n[r]}return e}function Og(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Af(i){return i.getRenderTarget()===null?i.outputColorSpace:An}const Qa={clone:dr,merge:Nt};var Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ot extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Cf extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class At extends Cf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Ki=1;class kg extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new At(qi,Ki,e,t);r.layers=this.layers,this.add(r);const a=new At(qi,Ki,e,t);a.layers=this.layers,this.add(a);const o=new At(qi,Ki,e,t);o.layers=this.layers,this.add(o);const s=new At(qi,Ki,e,t);s.layers=this.layers,this.add(s);const l=new At(qi,Ki,e,t);l.layers=this.layers,this.add(l);const c=new At(qi,Ki,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Yn,e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,a),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Rf extends Ct{constructor(e,t,n,r,a,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ng extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(qr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ti?He:wi),this.texture=new Rf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ta(5,5,5),a=new Ot({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Kn});a.uniforms.tEquirect.value=t;const o=new Et(r,a),s=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Gt),new kg(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Vo=new le,zg=new le,Bg=new $e;class _i{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vo.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bg.getNormalMatrix(e),r=this.coplanarPoint(Vo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Rn,Ca=new le;class Ls{constructor(e=new _i,t=new _i,n=new _i,r=new _i,a=new _i,o=new _i){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],m=r[9],v=r[10],g=r[11],p=r[12],y=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-a,f-c,g-h,S-p).normalize(),n[1].setComponents(l+a,f+c,g+h,S+p).normalize(),n[2].setComponents(l+o,f+u,g+m,S+y).normalize(),n[3].setComponents(l-o,f-u,g-m,S-y).normalize(),n[4].setComponents(l-s,f-d,g-v,S-x).normalize(),t===jn)n[5].setComponents(l+s,f+d,g+v,S+x).normalize();else if(t===Za)n[5].setComponents(s,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pf(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Gg(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const d=c.array,f=c.usage,h=i.createBuffer();i.bindBuffer(u,h),i.bufferData(u,d,f),c.onUploadCallback();let m;if(d instanceof Float32Array)m=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=i.SHORT;else if(d instanceof Uint32Array)m=i.UNSIGNED_INT;else if(d instanceof Int32Array)m=i.INT;else if(d instanceof Int8Array)m=i.BYTE;else if(d instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:h,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,d){const f=u.array,h=u.updateRange;i.bindBuffer(d,c),h.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count):i.bufferSubData(d,h.offset*f.BYTES_PER_ELEMENT,f.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,r(c,u)):d.version<c.version&&(a(d.buffer,c,u),d.version=c.version)}return{get:o,remove:s,update:l}}class $r extends $t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,u=l+1,d=e/s,f=t/l,h=[],m=[],v=[],g=[];for(let p=0;p<u;p++){const y=p*f-o;for(let x=0;x<c;x++){const S=x*d-a;m.push(S,-y,0),v.push(0,0,1),g.push(x/s),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<s;y++){const x=y+c*p,S=y+c*(p+1),M=y+1+c*(p+1),O=y+1+c*p;h.push(x,S,O),h.push(S,M,O)}this.setIndex(h),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ub=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,db=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_b=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ib=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ub=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,zb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qb=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$b=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ev=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,rv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ev=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ov=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qv=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,r0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,s0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Hg,alphahash_pars_fragment:Vg,alphamap_fragment:Wg,alphamap_pars_fragment:jg,alphatest_fragment:Xg,alphatest_pars_fragment:qg,aomap_fragment:Kg,aomap_pars_fragment:Yg,begin_vertex:$g,beginnormal_vertex:Zg,bsdfs:Jg,iridescence_fragment:Qg,bumpmap_pars_fragment:eb,clipping_planes_fragment:tb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:rb,color_fragment:ab,color_pars_fragment:ob,color_pars_vertex:sb,color_vertex:lb,common:cb,cube_uv_reflection_fragment:ub,defaultnormal_vertex:db,displacementmap_pars_vertex:fb,displacementmap_vertex:hb,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:gb,colorspace_pars_fragment:bb,envmap_fragment:vb,envmap_common_pars_fragment:xb,envmap_pars_fragment:_b,envmap_pars_vertex:yb,envmap_physical_pars_fragment:Ib,envmap_vertex:Mb,fog_vertex:Sb,fog_pars_vertex:Eb,fog_fragment:Tb,fog_pars_fragment:wb,gradientmap_pars_fragment:Ab,lightmap_fragment:Cb,lightmap_pars_fragment:Rb,lights_lambert_fragment:Pb,lights_lambert_pars_fragment:Lb,lights_pars_begin:Db,lights_toon_fragment:Ob,lights_toon_pars_fragment:Ub,lights_phong_fragment:Fb,lights_phong_pars_fragment:kb,lights_physical_fragment:Nb,lights_physical_pars_fragment:zb,lights_fragment_begin:Bb,lights_fragment_maps:Gb,lights_fragment_end:Hb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:Wb,logdepthbuf_pars_vertex:jb,logdepthbuf_vertex:Xb,map_fragment:qb,map_pars_fragment:Kb,map_particle_fragment:Yb,map_particle_pars_fragment:$b,metalnessmap_fragment:Zb,metalnessmap_pars_fragment:Jb,morphcolor_vertex:Qb,morphnormal_vertex:ev,morphtarget_pars_vertex:tv,morphtarget_vertex:nv,normal_fragment_begin:iv,normal_fragment_maps:rv,normal_pars_fragment:av,normal_pars_vertex:ov,normal_vertex:sv,normalmap_pars_fragment:lv,clearcoat_normal_fragment_begin:cv,clearcoat_normal_fragment_maps:uv,clearcoat_pars_fragment:dv,iridescence_pars_fragment:fv,opaque_fragment:hv,packing:pv,premultiplied_alpha_fragment:mv,project_vertex:gv,dithering_fragment:bv,dithering_pars_fragment:vv,roughnessmap_fragment:xv,roughnessmap_pars_fragment:_v,shadowmap_pars_fragment:yv,shadowmap_pars_vertex:Mv,shadowmap_vertex:Sv,shadowmask_pars_fragment:Ev,skinbase_vertex:Tv,skinning_pars_vertex:wv,skinning_vertex:Av,skinnormal_vertex:Cv,specularmap_fragment:Rv,specularmap_pars_fragment:Pv,tonemapping_fragment:Lv,tonemapping_pars_fragment:Dv,transmission_fragment:Iv,transmission_pars_fragment:Ov,uv_pars_fragment:Uv,uv_pars_vertex:Fv,uv_vertex:kv,worldpos_vertex:Nv,background_vert:zv,background_frag:Bv,backgroundCube_vert:Gv,backgroundCube_frag:Hv,cube_vert:Vv,cube_frag:Wv,depth_vert:jv,depth_frag:Xv,distanceRGBA_vert:qv,distanceRGBA_frag:Kv,equirect_vert:Yv,equirect_frag:$v,linedashed_vert:Zv,linedashed_frag:Jv,meshbasic_vert:Qv,meshbasic_frag:e0,meshlambert_vert:t0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:r0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:s0,meshphong_frag:l0,meshphysical_vert:c0,meshphysical_frag:u0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:h0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:b0,sprite_frag:v0},De={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},wn={basic:{uniforms:Nt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([De.points,De.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([De.common,De.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([De.sprite,De.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Nt([De.common,De.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Nt([De.lights,De.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:Nt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ra={r:0,b:0,g:0};function x0(i,e,t,n,r,a,o){const s=new ze(0);let l=a===!0?0:1,c,u,d=null,f=0,h=null;function m(g,p){let y=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(s,l):x&&x.isColor&&(v(x,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===io)?(u===void 0&&(u=new Et(new ta(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:dr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=x.colorSpace!==He,(d!==x||f!==x.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,h=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Et(new $r(2,2),new Ot({name:"BackgroundMaterial",uniforms:dr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==He,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,p){g.getRGB(Ra,Af(i)),n.buffers.color.setClear(Ra.r,Ra.g,Ra.b,p,o)}return{getClearColor:function(){return s},setClearColor:function(g,p=1){s.set(g),l=p,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(s,l)},render:m}}function _0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},l=g(null);let c=l,u=!1;function d(B,H,$,E,D){let R=!1;if(o){const U=v(E,$,H);c!==U&&(c=U,h(c.object)),R=p(B,E,$,D),R&&y(B,E,$,D)}else{const U=H.wireframe===!0;(c.geometry!==E.id||c.program!==$.id||c.wireframe!==U)&&(c.geometry=E.id,c.program=$.id,c.wireframe=U,R=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(R||u)&&(u=!1,L(B,H,$,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function f(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function h(B){return n.isWebGL2?i.bindVertexArray(B):a.bindVertexArrayOES(B)}function m(B){return n.isWebGL2?i.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function v(B,H,$){const E=$.wireframe===!0;let D=s[B.id];D===void 0&&(D={},s[B.id]=D);let R=D[H.id];R===void 0&&(R={},D[H.id]=R);let U=R[E];return U===void 0&&(U=g(f()),R[E]=U),U}function g(B){const H=[],$=[],E=[];for(let D=0;D<r;D++)H[D]=0,$[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:E,object:B,attributes:{},index:null}}function p(B,H,$,E){const D=c.attributes,R=H.attributes;let U=0;const A=$.getAttributes();for(const k in A)if(A[k].location>=0){const te=D[k];let re=R[k];if(re===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(re=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(re=B.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;U++}return c.attributesNum!==U||c.index!==E}function y(B,H,$,E){const D={},R=H.attributes;let U=0;const A=$.getAttributes();for(const k in A)if(A[k].location>=0){let te=R[k];te===void 0&&(k==="instanceMatrix"&&B.instanceMatrix&&(te=B.instanceMatrix),k==="instanceColor"&&B.instanceColor&&(te=B.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),D[k]=re,U++}c.attributes=D,c.attributesNum=U,c.index=E}function x(){const B=c.newAttributes;for(let H=0,$=B.length;H<$;H++)B[H]=0}function S(B){M(B,0)}function M(B,H){const $=c.newAttributes,E=c.enabledAttributes,D=c.attributeDivisors;$[B]=1,E[B]===0&&(i.enableVertexAttribArray(B),E[B]=1),D[B]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),D[B]=H)}function O(){const B=c.newAttributes,H=c.enabledAttributes;for(let $=0,E=H.length;$<E;$++)H[$]!==B[$]&&(i.disableVertexAttribArray($),H[$]=0)}function T(B,H,$,E,D,R,U){U===!0?i.vertexAttribIPointer(B,H,$,D,R):i.vertexAttribPointer(B,H,$,E,D,R)}function L(B,H,$,E){if(n.isWebGL2===!1&&(B.isInstancedMesh||E.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=E.attributes,R=$.getAttributes(),U=H.defaultAttributeValues;for(const A in R){const k=R[A];if(k.location>=0){let K=D[A];if(K===void 0&&(A==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),A==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),K!==void 0){const te=K.normalized,re=K.itemSize,pe=t.get(K);if(pe===void 0)continue;const ne=pe.buffer,se=pe.type,me=pe.bytesPerElement,be=n.isWebGL2===!0&&(se===i.INT||se===i.UNSIGNED_INT||K.gpuType===cf);if(K.isInterleavedBufferAttribute){const Y=K.data,P=Y.stride,q=K.offset;if(Y.isInstancedInterleavedBuffer){for(let j=0;j<k.locationSize;j++)M(k.location+j,Y.meshPerAttribute);B.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let j=0;j<k.locationSize;j++)S(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let j=0;j<k.locationSize;j++)T(k.location+j,re/k.locationSize,se,te,P*me,(q+re/k.locationSize*j)*me,be)}else{if(K.isInstancedBufferAttribute){for(let Y=0;Y<k.locationSize;Y++)M(k.location+Y,K.meshPerAttribute);B.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Y=0;Y<k.locationSize;Y++)S(k.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Y=0;Y<k.locationSize;Y++)T(k.location+Y,re/k.locationSize,se,te,re*me,re/k.locationSize*Y*me,be)}}else if(U!==void 0){const te=U[A];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(k.location,te);break;case 3:i.vertexAttrib3fv(k.location,te);break;case 4:i.vertexAttrib4fv(k.location,te);break;default:i.vertexAttrib1fv(k.location,te)}}}}O()}function b(){N();for(const B in s){const H=s[B];for(const $ in H){const E=H[$];for(const D in E)m(E[D].object),delete E[D];delete H[$]}delete s[B]}}function _(B){if(s[B.id]===void 0)return;const H=s[B.id];for(const $ in H){const E=H[$];for(const D in E)m(E[D].object),delete E[D];delete H[$]}delete s[B.id]}function V(B){for(const H in s){const $=s[H];if($[B.id]===void 0)continue;const E=$[B.id];for(const D in E)m(E[D].object),delete E[D];delete $[B.id]}}function N(){F(),u=!0,c!==l&&(c=l,h(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:_,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:S,disableUnusedAttributes:O}}function y0(i,e,t,n){const r=n.isWebGL2;let a;function o(c){a=c}function s(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function l(c,u,d){if(d===0)return;let f,h;if(r)f=i,h="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",f===null)return;f[h](a,c,u,d),t.update(u,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function M0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||e.has("OES_texture_float"),M=x&&S,O=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:h,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:O}}function S0(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new _i,s=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||r;return r=f,n=d.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!r||m===null||m.length===0||a&&!g)a?u(null):c();else{const y=a?0:n,x=y*4;let S=p.clippingState||null;l.value=S,S=u(m,f,x,h);for(let M=0;M!==x;++M)S[M]=t[M];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=h+v*4,y=f.matrixWorldInverse;s.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,S=h;x!==v;++x,S+=4)o.copy(d[x]).applyMatrix4(y,s),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function E0(i){let e=new WeakMap;function t(o,s){return s===ls?o.mapping=ar:s===cs&&(o.mapping=or),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ls||s===cs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ng(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class oo extends Cf{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,rc=[.125,.215,.35,.446,.526,.582],tr=20,Wo=new oo,ac=new ze;let jo=null;const yi=(1+Math.sqrt(5))/2,Yi=1/yi,oc=[new le(1,1,1),new le(-1,1,1),new le(1,1,-1),new le(-1,1,-1),new le(0,yi,Yi),new le(0,yi,-Yi),new le(Yi,0,yi),new le(-Yi,0,yi),new le(yi,Yi,0),new le(-yi,Yi,0)];class sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){jo=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo),e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:$n,format:on,colorSpace:An,depthBuffer:!1},r=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T0(a)),this._blurMaterial=w0(a,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,r){const s=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ac),u.toneMapping=Yn,u.autoClear=!1;const h=new qn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new Et(new ta,h);let v=!1;const g=e.background;g?g.isColor&&(h.color.copy(g),e.background=null,v=!0):(h.color.copy(ac),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(s.up.set(0,l[p],0),s.lookAt(c[p],0,0)):y===1?(s.up.set(0,0,l[p]),s.lookAt(0,c[p],0)):(s.up.set(0,l[p],0),s.lookAt(0,0,c[p]));const x=this._cubeSize;Pa(r,y*x,p>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(m,s),u.render(e,s)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ar||e.mapping===or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Pa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=oc[(r-1)%oc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const l=this._renderer,c=this._blurMaterial,u=3,d=new Et(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*tr-1),v=a/m,g=isFinite(a)?1+Math.floor(u*v):tr;g>tr;const p=[];let y=0;for(let T=0;T<tr;++T){const L=T/v,b=Math.exp(-L*L/2);p.push(b),T===0?y+=b:T<g&&(y+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const S=this._sizeLods[r],M=3*S*(r>x-er?r-x+er:0),O=4*(this._cubeSize-S);Pa(t,M,O,3*S,2*S),l.setRenderTarget(t),l.render(d,Wo)}}function T0(i){const e=[],t=[],n=[];let r=i;const a=i-er+1+rc.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>i-er?l=rc[o-i+er-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*h),x=new Float32Array(g*m*h),S=new Float32Array(p*m*h);for(let O=0;O<h;O++){const T=O%3*2/3-1,L=O>2?0:-1,b=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(b,v*m*O),x.set(f,g*m*O);const _=[O,O,O,O,O,O];S.set(_,p*m*O)}const M=new $t;M.setAttribute("position",new zt(y,v)),M.setAttribute("uv",new zt(x,g)),M.setAttribute("faceIndex",new zt(S,p)),e.push(M),r>er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(i,e,t){const n=new xn(i,e,t);return n.texture.mapping=io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pa(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function w0(i,e,t){const n=new Float32Array(tr),r=new le(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function cc(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function uc(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ds(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A0(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ls||l===cs,u=l===ar||l===or;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return t===null&&(t=new sc(i)),d=c?t.fromEquirectangular(s,d):t.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new sc(i));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",a),f.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function C0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r}}}function R0(i,e,t,n){const r={},a=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete r[f.id];const h=a.get(f);h&&(e.remove(h),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER);const h=d.morphAttributes;for(const m in h){const v=h[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,m=d.attributes.position;let v=0;if(h!==null){const y=h.array;v=h.version;for(let x=0,S=y.length;x<S;x+=3){const M=y[x+0],O=y[x+1],T=y[x+2];f.push(M,O,O,T,T,M)}}else{const y=m.array;v=m.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const M=x+0,O=x+1,T=x+2;f.push(M,O,O,T,T,M)}}const g=new(xf(f)?wf:Tf)(f,1);g.version=v;const p=a.get(d);p&&e.remove(p),a.set(d,g)}function u(d){const f=a.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:u}}function P0(i,e,t,n){const r=n.isWebGL2;let a;function o(f){a=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,h){i.drawElements(a,h,s,f*l),t.update(h,a,1)}function d(f,h,m){if(m===0)return;let v,g;if(r)v=i,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null)return;v[g](a,h,s,f*l,m),t.update(h,a,m)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d}function L0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function D0(i,e){return i[0]-e[0]}function I0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function O0(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new st,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=h!==void 0?h.length:0;let v=a.get(u);if(v===void 0||v.count!==m){let B=function(){N.dispose(),a.delete(u),u.removeEventListener("dispose",B)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],O=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let L=0;y===!0&&(L=1),x===!0&&(L=2),S===!0&&(L=3);let b=u.attributes.position.count*L,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const V=new Float32Array(b*_*4*m),N=new Mf(V,b,_,m);N.type=Wn,N.needsUpdate=!0;const F=L*4;for(let H=0;H<m;H++){const $=M[H],E=O[H],D=T[H],R=b*_*4*H;for(let U=0;U<$.count;U++){const A=U*F;y===!0&&(o.fromBufferAttribute($,U),V[R+A+0]=o.x,V[R+A+1]=o.y,V[R+A+2]=o.z,V[R+A+3]=0),x===!0&&(o.fromBufferAttribute(E,U),V[R+A+4]=o.x,V[R+A+5]=o.y,V[R+A+6]=o.z,V[R+A+7]=0),S===!0&&(o.fromBufferAttribute(D,U),V[R+A+8]=o.x,V[R+A+9]=o.y,V[R+A+10]=o.z,V[R+A+11]=D.itemSize===4?o.w:1)}}v={count:m,texture:N,size:new Fe(b,_)},a.set(u,v),u.addEventListener("dispose",B)}let g=0;for(let y=0;y<f.length;y++)g+=f[y];const p=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const h=f===void 0?0:f.length;let m=n[u.id];if(m===void 0||m.length!==h){m=[];for(let x=0;x<h;x++)m[x]=[x,0];n[u.id]=m}for(let x=0;x<h;x++){const S=m[x];S[0]=x,S[1]=f[x]}m.sort(I0);for(let x=0;x<8;x++)x<h&&m[x][1]?(s[x][0]=m[x][0],s[x][1]=m[x][1]):(s[x][0]=Number.MAX_SAFE_INTEGER,s[x][1]=0);s.sort(D0);const v=u.morphAttributes.position,g=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const S=s[x],M=S[0],O=S[1];M!==Number.MAX_SAFE_INTEGER&&O?(v&&u.getAttribute("morphTarget"+x)!==v[M]&&u.setAttribute("morphTarget"+x,v[M]),g&&u.getAttribute("morphNormal"+x)!==g[M]&&u.setAttribute("morphNormal"+x,g[M]),r[x]=O,p+=O):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),g&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const y=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function U0(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Lf=new Ct,Df=new Mf,If=new Sg,Of=new Rf,dc=[],fc=[],hc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=dc[r];if(a===void 0&&(a=new Float32Array(r),dc[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function so(i,e){let t=fc[e];t===void 0&&(t=new Int32Array(e),fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function F0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),yt(t,n)}}function G0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),yt(t,n)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,n))return;hc.set(n),i.uniformMatrix4fv(this.addr,!1,hc),yt(t,n)}}function V0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function $0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Lf,r)}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||If,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Of,r)}function ex(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Df,r)}function tx(i){switch(i){case 5126:return F0;case 35664:return k0;case 35665:return N0;case 35666:return z0;case 35674:return B0;case 35675:return G0;case 35676:return H0;case 5124:case 35670:return V0;case 35667:case 35671:return W0;case 35668:case 35672:return j0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return K0;case 36295:return Y0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(i,e){i.uniform1fv(this.addr,e)}function ix(i,e){const t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function rx(i,e){const t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function ax(i,e){const t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){const t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sx(i,e){const t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){const t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cx(i,e){i.uniform1iv(this.addr,e)}function ux(i,e){i.uniform2iv(this.addr,e)}function dx(i,e){i.uniform3iv(this.addr,e)}function fx(i,e){i.uniform4iv(this.addr,e)}function hx(i,e){i.uniform1uiv(this.addr,e)}function px(i,e){i.uniform2uiv(this.addr,e)}function mx(i,e){i.uniform3uiv(this.addr,e)}function gx(i,e){i.uniform4uiv(this.addr,e)}function bx(i,e,t){const n=this.cache,r=e.length,a=so(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),yt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lf,a[o])}function vx(i,e,t){const n=this.cache,r=e.length,a=so(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),yt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||If,a[o])}function xx(i,e,t){const n=this.cache,r=e.length,a=so(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),yt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Of,a[o])}function _x(i,e,t){const n=this.cache,r=e.length,a=so(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),yt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Df,a[o])}function yx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return rx;case 35666:return ax;case 35674:return ox;case 35675:return sx;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return hx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return _x}}class Mx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tx(t.type)}}class Sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=yx(t.type)}}class Ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function gc(i,e){i.seq.push(e),i.map[e.id]=e}function Tx(i,e,t){const n=i.name,r=n.length;for(Xo.lastIndex=0;;){const a=Xo.exec(n),o=Xo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){gc(t,c===void 0?new Mx(s,i,e):new Sx(s,i,e));break}else{let d=t.map[s];d===void 0&&(d=new Ex(s),gc(t,d)),t=d}}}class Ka{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Tx(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function bc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let wx=0;function Ax(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Cx(i){switch(i){case An:return["Linear","( value )"];case He:return["sRGB","( value )"];default:return["Linear","( value )"]}}function vc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ax(i.getShaderSource(e),o)}else return r}function Rx(i,e){const t=Cx(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Px(i,e){let t;switch(e){case Cm:t="Linear";break;case Rm:t="Reinhard";break;case Pm:t="OptimizedCineon";break;case of:t="ACESFilmic";break;case Lm:t="Custom";break;default:t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function Dx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ix(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Vr(i){return i!==""}function xc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _c(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function ms(i){return i.replace(Ox,Fx)}const Ux=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fx(i,e){let t=Xe[e];if(t===void 0){const n=Ux.get(e);if(n!==void 0)t=Xe[n];else throw new Error("Can not resolve #include <"+e+">")}return ms(t)}const kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yc(i){return i.replace(kx,Nx)}function Nx(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Mc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ar:case or:e="ENVMAP_TYPE_CUBE";break;case io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case or:e="ENVMAP_MODE_REFRACTION";break}return e}function Hx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case As:e="ENVMAP_BLENDING_MULTIPLY";break;case wm:e="ENVMAP_BLENDING_MIX";break;case Am:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wx(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=zx(t),c=Bx(t),u=Gx(t),d=Hx(t),f=Vx(t),h=t.isWebGL2?"":Lx(t),m=Dx(a),v=r.createProgram();let g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),g.length>0&&(g+=`
`),p=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(g=[Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[h,Mc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?Px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Rx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=ms(o),o=xc(o,t),o=_c(o,t),s=ms(s),s=xc(s,t),s=_c(s,t),o=yc(o),s=yc(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+g+o,S=y+p+s,M=bc(r,r.VERTEX_SHADER,x),O=bc(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,M),r.attachShader(v,O),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const b=r.getProgramInfoLog(v).trim(),_=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(O).trim();let N=!0,F=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,M,O);else{const B=vc(r,M,"vertex"),H=vc(r,O,"fragment")}else b!==""||(_===""||V==="")&&(F=!1);F&&(this.diagnostics={runnable:N,programLog:b,vertexShader:{log:_,prefix:g},fragmentShader:{log:V,prefix:p}})}r.deleteShader(M),r.deleteShader(O);let T;this.getUniforms=function(){return T===void 0&&(T=new Ka(r,v)),T};let L;return this.getAttributes=function(){return L===void 0&&(L=Ix(r,v)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=O,this}let jx=0;class Xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qx(e),t.set(e,n)),n}}class qx{constructor(e){this.id=jx++,this.code=e,this.usedTimes=0}}function Kx(i,e,t,n,r,a,o){const s=new Sf,l=new Xx,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,_,V,N,F){const B=N.fog,H=F.geometry,$=b.isMeshStandardMaterial?N.environment:null,E=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),D=E&&E.mapping===io?E.image.height:null,R=m[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),b.precision);const U=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,A=U!==void 0?U.length:0;let k=0;H.morphAttributes.position!==void 0&&(k=1),H.morphAttributes.normal!==void 0&&(k=2),H.morphAttributes.color!==void 0&&(k=3);let K,te,re,pe;if(R){const xt=wn[R];K=xt.vertexShader,te=xt.fragmentShader}else K=b.vertexShader,te=b.fragmentShader,l.update(b),re=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const ne=i.getRenderTarget(),se=F.isInstancedMesh===!0,me=!!b.map,be=!!b.matcap,Y=!!E,P=!!b.aoMap,q=!!b.lightMap,j=!!b.bumpMap,ee=!!b.normalMap,ae=!!b.displacementMap,G=!!b.emissiveMap,Q=!!b.metalnessMap,C=!!b.roughnessMap,z=b.anisotropy>0,W=b.clearcoat>0,Z=b.iridescence>0,I=b.sheen>0,w=b.transmission>0,ie=z&&!!b.anisotropyMap,ce=W&&!!b.clearcoatMap,ue=W&&!!b.clearcoatNormalMap,X=W&&!!b.clearcoatRoughnessMap,de=Z&&!!b.iridescenceMap,xe=Z&&!!b.iridescenceThicknessMap,fe=I&&!!b.sheenColorMap,Le=I&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,_e=!!b.specularColorMap,Te=!!b.specularIntensityMap,Se=w&&!!b.transmissionMap,Ae=w&&!!b.thicknessMap,Oe=!!b.gradientMap,oe=!!b.alphaMap,we=b.alphaTest>0,ve=!!b.alphaHash,Ce=!!b.extensions,Re=!!H.attributes.uv1,Ye=!!H.attributes.uv2,Je=!!H.attributes.uv3;return{isWebGL2:u,shaderID:R,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:te,defines:b.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,instancing:se,instancingColor:se&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:An,map:me,matcap:be,envMap:Y,envMapMode:Y&&E.mapping,envMapCubeUVHeight:D,aoMap:P,lightMap:q,bumpMap:j,normalMap:ee,displacementMap:f&&ae,emissiveMap:G,normalMapObjectSpace:ee&&b.normalMapType===jm,normalMapTangentSpace:ee&&b.normalMapType===Rs,metalnessMap:Q,roughnessMap:C,anisotropy:z,anisotropyMap:ie,clearcoat:W,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:X,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:xe,sheen:I,sheenColorMap:fe,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:_e,specularIntensityMap:Te,transmission:w,transmissionMap:Se,thicknessMap:Ae,gradientMap:Oe,opaque:b.transparent===!1&&b.blending===nr,alphaMap:oe,alphaTest:we,alphaHash:ve,combine:b.combine,mapUv:me&&v(b.map.channel),aoMapUv:P&&v(b.aoMap.channel),lightMapUv:q&&v(b.lightMap.channel),bumpMapUv:j&&v(b.bumpMap.channel),normalMapUv:ee&&v(b.normalMap.channel),displacementMapUv:ae&&v(b.displacementMap.channel),emissiveMapUv:G&&v(b.emissiveMap.channel),metalnessMapUv:Q&&v(b.metalnessMap.channel),roughnessMapUv:C&&v(b.roughnessMap.channel),anisotropyMapUv:ie&&v(b.anisotropyMap.channel),clearcoatMapUv:ce&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:_e&&v(b.specularColorMap.channel),specularIntensityMapUv:Te&&v(b.specularIntensityMap.channel),transmissionMapUv:Se&&v(b.transmissionMap.channel),thicknessMapUv:Ae&&v(b.thicknessMap.channel),alphaMapUv:oe&&v(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||z),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Ye,vertexUv3s:Je,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(me||oe),fog:!!B,useFog:b.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:k,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:Yn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===Ht,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ce&&b.extensions.derivatives===!0,extensionFragDepth:Ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)_.push(V),_.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(y(_,b),x(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function y(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){s.disableAll(),_.isWebGL2&&s.enable(0),_.supportsVertexTextures&&s.enable(1),_.instancing&&s.enable(2),_.instancingColor&&s.enable(3),_.matcap&&s.enable(4),_.envMap&&s.enable(5),_.normalMapObjectSpace&&s.enable(6),_.normalMapTangentSpace&&s.enable(7),_.clearcoat&&s.enable(8),_.iridescence&&s.enable(9),_.alphaTest&&s.enable(10),_.vertexColors&&s.enable(11),_.vertexAlphas&&s.enable(12),_.vertexUv1s&&s.enable(13),_.vertexUv2s&&s.enable(14),_.vertexUv3s&&s.enable(15),_.vertexTangents&&s.enable(16),_.anisotropy&&s.enable(17),b.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.skinning&&s.enable(4),_.morphTargets&&s.enable(5),_.morphNormals&&s.enable(6),_.morphColors&&s.enable(7),_.premultipliedAlpha&&s.enable(8),_.shadowMapEnabled&&s.enable(9),_.useLegacyLights&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),b.push(s.mask)}function S(b){const _=m[b.type];let V;if(_){const N=wn[_];V=Qa.clone(N.uniforms)}else V=b.uniforms;return V}function M(b,_){let V;for(let N=0,F=c.length;N<F;N++){const B=c[N];if(B.cacheKey===_){V=B,++V.usedTimes;break}}return V===void 0&&(V=new Wx(i,_,b,a),c.push(V)),V}function O(b){if(--b.usedTimes===0){const _=c.indexOf(b);c[_]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:M,releaseProgram:O,releaseShaderCache:T,programs:c,dispose:L}}function Yx(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function $x(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ec(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,h,m,v,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function s(d,f,h,m,v,g){const p=o(d,f,h,m,v,g);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,m,v,g){const p=o(d,f,h,m,v,g);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||$x),n.length>1&&n.sort(f||Sc),r.length>1&&r.sort(f||Sc)}function u(){for(let d=e,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function Zx(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Ec,i.set(n,[o])):r>=a.length?(o=new Ec,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new ze};break;case"SpotLight":t={position:new le,direction:new le,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new le,halfWidth:new le,halfHeight:new le};break}return i[e.id]=t,t}}}function Qx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let e_=0;function t_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function n_(i,e){const t=new Jx,n=Qx(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new le);const a=new le,o=new Ke,s=new Ke;function l(u,d){let f=0,h=0,m=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let v=0,g=0,p=0,y=0,x=0,S=0,M=0,O=0,T=0,L=0;u.sort(t_);const b=d===!0?Math.PI:1;for(let V=0,N=u.length;V<N;V++){const F=u[V],B=F.color,H=F.intensity,$=F.distance,E=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=B.r*H*b,h+=B.g*H*b,m+=B.b*H*b;else if(F.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(F.sh.coefficients[D],H);else if(F.isDirectionalLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*b),F.castShadow){const R=F.shadow,U=n.get(F);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,r.directionalShadow[v]=U,r.directionalShadowMap[v]=E,r.directionalShadowMatrix[v]=F.shadow.matrix,S++}r.directional[v]=D,v++}else if(F.isSpotLight){const D=t.get(F);D.position.setFromMatrixPosition(F.matrixWorld),D.color.copy(B).multiplyScalar(H*b),D.distance=$,D.coneCos=Math.cos(F.angle),D.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),D.decay=F.decay,r.spot[p]=D;const R=F.shadow;if(F.map&&(r.spotLightMap[T]=F.map,T++,R.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[p]=R.matrix,F.castShadow){const U=n.get(F);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,r.spotShadow[p]=U,r.spotShadowMap[p]=E,O++}p++}else if(F.isRectAreaLight){const D=t.get(F);D.color.copy(B).multiplyScalar(H),D.halfWidth.set(F.width*.5,0,0),D.halfHeight.set(0,F.height*.5,0),r.rectArea[y]=D,y++}else if(F.isPointLight){const D=t.get(F);if(D.color.copy(F.color).multiplyScalar(F.intensity*b),D.distance=F.distance,D.decay=F.decay,F.castShadow){const R=F.shadow,U=n.get(F);U.shadowBias=R.bias,U.shadowNormalBias=R.normalBias,U.shadowRadius=R.radius,U.shadowMapSize=R.mapSize,U.shadowCameraNear=R.camera.near,U.shadowCameraFar=R.camera.far,r.pointShadow[g]=U,r.pointShadowMap[g]=E,r.pointShadowMatrix[g]=F.shadow.matrix,M++}r.point[g]=D,g++}else if(F.isHemisphereLight){const D=t.get(F);D.skyColor.copy(F.color).multiplyScalar(H*b),D.groundColor.copy(F.groundColor).multiplyScalar(H*b),r.hemi[x]=D,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0&&(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=f,r.ambient[1]=h,r.ambient[2]=m;const _=r.hash;(_.directionalLength!==v||_.pointLength!==g||_.spotLength!==p||_.rectAreaLength!==y||_.hemiLength!==x||_.numDirectionalShadows!==S||_.numPointShadows!==M||_.numSpotShadows!==O||_.numSpotMaps!==T)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=y,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=O,r.spotShadowMap.length=O,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=O+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,_.directionalLength=v,_.pointLength=g,_.spotLength=p,_.rectAreaLength=y,_.hemiLength=x,_.numDirectionalShadows=S,_.numPointShadows=M,_.numSpotShadows=O,_.numSpotMaps=T,r.version=e_++)}function c(u,d){let f=0,h=0,m=0,v=0,g=0;const p=d.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const S=u[y];if(S.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),f++}else if(S.isSpotLight){const M=r.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),s.identity(),o.copy(S.matrixWorld),o.premultiply(p),s.extractRotation(o),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),v++}else if(S.isPointLight){const M=r.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:r}}function Tc(i,e){const t=new n_(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(d){n.push(d)}function s(d){r.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function i_(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Tc(i,e),t.set(a,[l])):o>=s.length?(l=new Tc(i,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class r_ extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a_ extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l_(i,e,t){let n=new Ls;const r=new Fe,a=new Fe,o=new st,s=new r_({depthPacking:Wm}),l=new a_,c={},u=t.maxTextureSize,d={[Zn]:Ht,[Ht]:Zn,[bn]:bn},f=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:o_,fragmentShader:s_}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new $t;m.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(M,O,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const L=i.getRenderTarget(),b=i.getActiveCubeFace(),_=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Kn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const N=p!==Hn&&this.type===Hn,F=p===Hn&&this.type!==Hn;for(let B=0,H=M.length;B<H;B++){const $=M[B],E=$.shadow;if(E===void 0||E.autoUpdate===!1&&E.needsUpdate===!1)continue;r.copy(E.mapSize);const D=E.getFrameExtents();if(r.multiply(D),a.copy(E.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/D.x),r.x=a.x*D.x,E.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/D.y),r.y=a.y*D.y,E.mapSize.y=a.y)),E.map===null||N===!0||F===!0){const U=this.type!==Hn?{minFilter:St,magFilter:St}:{};E.map!==null&&E.map.dispose(),E.map=new xn(r.x,r.y,U),E.map.texture.name=$.name+".shadowMap",E.camera.updateProjectionMatrix()}i.setRenderTarget(E.map),i.clear();const R=E.getViewportCount();for(let U=0;U<R;U++){const A=E.getViewport(U);o.set(a.x*A.x,a.y*A.y,a.x*A.z,a.y*A.w),V.viewport(o),E.updateMatrices($,U),n=E.getFrustum(),S(O,T,E.camera,$,this.type)}E.isPointLightShadow!==!0&&this.type===Hn&&y(E,T),E.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(L,b,_)};function y(M,O){const T=e.update(v);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new xn(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(O,null,T,f,v,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(O,null,T,h,v,null)}function x(M,O,T,L){let b=null;const _=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(_!==void 0)b=_;else if(b=T.isPointLight===!0?l:s,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const V=b.uuid,N=O.uuid;let F=c[V];F===void 0&&(F={},c[V]=F);let B=F[N];B===void 0&&(B=b.clone(),F[N]=B),b=B}if(b.visible=O.visible,b.wireframe=O.wireframe,L===Hn?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:d[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,T.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=i.properties.get(b);V.light=T}return b}function S(M,O,T,L,b){if(M.visible===!1)return;if(M.layers.test(O.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Hn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const N=e.update(M),F=M.material;if(Array.isArray(F)){const B=N.groups;for(let H=0,$=B.length;H<$;H++){const E=B[H],D=F[E.materialIndex];if(D&&D.visible){const R=x(M,D,L,b);i.renderBufferDirect(T,null,N,R,M,E)}}}else if(F.visible){const B=x(M,F,L,b);i.renderBufferDirect(T,null,N,B,M,null)}}const V=M.children;for(let N=0,F=V.length;N<F;N++)S(V[N],O,T,L,b)}}function c_(i,e,t){const n=t.isWebGL2;function r(){let oe=!1;const we=new st;let ve=null;const Ce=new st(0,0,0,0);return{setMask:function(Re){ve!==Re&&!oe&&(i.colorMask(Re,Re,Re,Re),ve=Re)},setLocked:function(Re){oe=Re},setClear:function(Re,Ye,Je,We,xt){xt===!0&&(Re*=We,Ye*=We,Je*=We),we.set(Re,Ye,Je,We),Ce.equals(we)===!1&&(i.clearColor(Re,Ye,Je,We),Ce.copy(we))},reset:function(){oe=!1,ve=null,Ce.set(-1,0,0,0)}}}function a(){let oe=!1,we=null,ve=null,Ce=null;return{setTest:function(Re){Re?ne(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(Re){we!==Re&&!oe&&(i.depthMask(Re),we=Re)},setFunc:function(Re){if(ve!==Re){switch(Re){case xm:i.depthFunc(i.NEVER);break;case _m:i.depthFunc(i.ALWAYS);break;case ym:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Mm:i.depthFunc(i.EQUAL);break;case Sm:i.depthFunc(i.GEQUAL);break;case Em:i.depthFunc(i.GREATER);break;case Tm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Re}},setLocked:function(Re){oe=Re},setClear:function(Re){Ce!==Re&&(i.clearDepth(Re),Ce=Re)},reset:function(){oe=!1,we=null,ve=null,Ce=null}}}function o(){let oe=!1,we=null,ve=null,Ce=null,Re=null,Ye=null,Je=null,We=null,xt=null;return{setTest:function(rt){oe||(rt?ne(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(rt){we!==rt&&!oe&&(i.stencilMask(rt),we=rt)},setFunc:function(rt,Ut,pt){(ve!==rt||Ce!==Ut||Re!==pt)&&(i.stencilFunc(rt,Ut,pt),ve=rt,Ce=Ut,Re=pt)},setOp:function(rt,Ut,pt){(Ye!==rt||Je!==Ut||We!==pt)&&(i.stencilOp(rt,Ut,pt),Ye=rt,Je=Ut,We=pt)},setLocked:function(rt){oe=rt},setClear:function(rt){xt!==rt&&(i.clearStencil(rt),xt=rt)},reset:function(){oe=!1,we=null,ve=null,Ce=null,Re=null,Ye=null,Je=null,We=null,xt=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,d=new WeakMap;let f={},h={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,S=null,M=null,O=null,T=null,L=null,b=!1,_=null,V=null,N=null,F=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,E=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=E>=1):D.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=E>=2);let R=null,U={};const A=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),K=new st().fromArray(A),te=new st().fromArray(k);function re(oe,we,ve,Ce){const Re=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(oe,Ye),i.texParameteri(oe,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(oe,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ve;Je++)n&&(oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY)?i.texImage3D(we,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(we+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Ye}const pe={};pe[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ne(i.DEPTH_TEST),l.setFunc(ss),ae(!1),G(ul),ne(i.CULL_FACE),j(Kn);function ne(oe){f[oe]!==!0&&(i.enable(oe),f[oe]=!0)}function se(oe){f[oe]!==!1&&(i.disable(oe),f[oe]=!1)}function me(oe,we){return h[oe]!==we?(i.bindFramebuffer(oe,we),h[oe]=we,n&&(oe===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=we),oe===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=we)),!0):!1}function be(oe,we){let ve=v,Ce=!1;if(oe)if(ve=m.get(we),ve===void 0&&(ve=[],m.set(we,ve)),oe.isWebGLMultipleRenderTargets){const Re=oe.texture;if(ve.length!==Re.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,Je=Re.length;Ye<Je;Ye++)ve[Ye]=i.COLOR_ATTACHMENT0+Ye;ve.length=Re.length,Ce=!0}}else ve[0]!==i.COLOR_ATTACHMENT0&&(ve[0]=i.COLOR_ATTACHMENT0,Ce=!0);else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ce=!0);Ce&&(t.isWebGL2?i.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function Y(oe){return g!==oe?(i.useProgram(oe),g=oe,!0):!1}const P={[Qi]:i.FUNC_ADD,[lm]:i.FUNC_SUBTRACT,[cm]:i.FUNC_REVERSE_SUBTRACT};if(n)P[hl]=i.MIN,P[pl]=i.MAX;else{const oe=e.get("EXT_blend_minmax");oe!==null&&(P[hl]=oe.MIN_EXT,P[pl]=oe.MAX_EXT)}const q={[um]:i.ZERO,[dm]:i.ONE,[fm]:i.SRC_COLOR,[rf]:i.SRC_ALPHA,[vm]:i.SRC_ALPHA_SATURATE,[gm]:i.DST_COLOR,[pm]:i.DST_ALPHA,[hm]:i.ONE_MINUS_SRC_COLOR,[af]:i.ONE_MINUS_SRC_ALPHA,[bm]:i.ONE_MINUS_DST_COLOR,[mm]:i.ONE_MINUS_DST_ALPHA};function j(oe,we,ve,Ce,Re,Ye,Je,We){if(oe===Kn){p===!0&&(se(i.BLEND),p=!1);return}if(p===!1&&(ne(i.BLEND),p=!0),oe!==sm){if(oe!==y||We!==b){if((x!==Qi||O!==Qi)&&(i.blendEquation(i.FUNC_ADD),x=Qi,O=Qi),We)switch(oe){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:break}else switch(oe){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:break}S=null,M=null,T=null,L=null,y=oe,b=We}return}Re=Re||we,Ye=Ye||ve,Je=Je||Ce,(we!==x||Re!==O)&&(i.blendEquationSeparate(P[we],P[Re]),x=we,O=Re),(ve!==S||Ce!==M||Ye!==T||Je!==L)&&(i.blendFuncSeparate(q[ve],q[Ce],q[Ye],q[Je]),S=ve,M=Ce,T=Ye,L=Je),y=oe,b=!1}function ee(oe,we){oe.side===bn?se(i.CULL_FACE):ne(i.CULL_FACE);let ve=oe.side===Ht;we&&(ve=!ve),ae(ve),oe.blending===nr&&oe.transparent===!1?j(Kn):j(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.premultipliedAlpha),l.setFunc(oe.depthFunc),l.setTest(oe.depthTest),l.setMask(oe.depthWrite),s.setMask(oe.colorWrite);const Ce=oe.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(oe.stencilWriteMask),c.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),c.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),C(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(oe){_!==oe&&(oe?i.frontFace(i.CW):i.frontFace(i.CCW),_=oe)}function G(oe){oe!==am?(ne(i.CULL_FACE),oe!==V&&(oe===ul?i.cullFace(i.BACK):oe===om?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),V=oe}function Q(oe){oe!==N&&($&&i.lineWidth(oe),N=oe)}function C(oe,we,ve){oe?(ne(i.POLYGON_OFFSET_FILL),(F!==we||B!==ve)&&(i.polygonOffset(we,ve),F=we,B=ve)):se(i.POLYGON_OFFSET_FILL)}function z(oe){oe?ne(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function W(oe){oe===void 0&&(oe=i.TEXTURE0+H-1),R!==oe&&(i.activeTexture(oe),R=oe)}function Z(oe,we,ve){ve===void 0&&(R===null?ve=i.TEXTURE0+H-1:ve=R);let Ce=U[ve];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[ve]=Ce),(Ce.type!==oe||Ce.texture!==we)&&(R!==ve&&(i.activeTexture(ve),R=ve),i.bindTexture(oe,we||pe[oe]),Ce.type=oe,Ce.texture=we)}function I(){const oe=U[R];oe!==void 0&&oe.type!==void 0&&(i.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function w(){try{i.compressedTexImage2D.apply(i,arguments)}catch{}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch{}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch{}}function ue(){try{i.texSubImage3D.apply(i,arguments)}catch{}}function X(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch{}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch{}}function xe(){try{i.texStorage2D.apply(i,arguments)}catch{}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch{}}function Le(){try{i.texImage2D.apply(i,arguments)}catch{}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch{}}function _e(oe){K.equals(oe)===!1&&(i.scissor(oe.x,oe.y,oe.z,oe.w),K.copy(oe))}function Te(oe){te.equals(oe)===!1&&(i.viewport(oe.x,oe.y,oe.z,oe.w),te.copy(oe))}function Se(oe,we){let ve=d.get(we);ve===void 0&&(ve=new WeakMap,d.set(we,ve));let Ce=ve.get(oe);Ce===void 0&&(Ce=i.getUniformBlockIndex(we,oe.name),ve.set(oe,Ce))}function Ae(oe,we){const Ce=d.get(we).get(oe);u.get(we)!==Ce&&(i.uniformBlockBinding(we,Ce,oe.__bindingPointIndex),u.set(we,Ce))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},R=null,U={},h={},m=new WeakMap,v=[],g=null,p=!1,y=null,x=null,S=null,M=null,O=null,T=null,L=null,b=!1,_=null,V=null,N=null,F=null,B=null,K.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ne,disable:se,bindFramebuffer:me,drawBuffers:be,useProgram:Y,setBlending:j,setMaterial:ee,setFlipSided:ae,setCullFace:G,setLineWidth:Q,setPolygonOffset:C,setScissorTest:z,activeTexture:W,bindTexture:Z,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:ie,texImage2D:Le,texImage3D:Pe,updateUBOMapping:Se,uniformBlockBinding:Ae,texStorage2D:xe,texStorage3D:fe,texSubImage2D:ce,texSubImage3D:ue,compressedTexSubImage2D:X,compressedTexSubImage3D:de,scissor:_e,viewport:Te,reset:Oe}}function u_(i,e,t,n,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,w){return p?new OffscreenCanvas(I,w):Yr("canvas")}function x(I,w,ie,ce){let ue=1;if((I.width>ce||I.height>ce)&&(ue=ce/Math.max(I.width,I.height)),ue<1||w===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const X=w?Ja:Math.floor,de=X(ue*I.width),xe=X(ue*I.height);v===void 0&&(v=y(de,xe));const fe=ie?y(de,xe):v;return fe.width=de,fe.height=xe,fe.getContext("2d").drawImage(I,0,0,de,xe),fe}else return"data"in I,I;return I}function S(I){return ps(I.width)&&ps(I.height)}function M(I){return s?!1:I.wrapS!==an||I.wrapT!==an||I.minFilter!==St&&I.minFilter!==Gt}function O(I,w){return I.generateMipmaps&&w&&I.minFilter!==St&&I.minFilter!==Gt}function T(I){i.generateMipmap(I)}function L(I,w,ie,ce,ue=!1){if(s===!1)return w;if(I!==null&&i[I]!==void 0)return i[I];let X=w;return w===i.RED&&(ie===i.FLOAT&&(X=i.R32F),ie===i.HALF_FLOAT&&(X=i.R16F),ie===i.UNSIGNED_BYTE&&(X=i.R8)),w===i.RG&&(ie===i.FLOAT&&(X=i.RG32F),ie===i.HALF_FLOAT&&(X=i.RG16F),ie===i.UNSIGNED_BYTE&&(X=i.RG8)),w===i.RGBA&&(ie===i.FLOAT&&(X=i.RGBA32F),ie===i.HALF_FLOAT&&(X=i.RGBA16F),ie===i.UNSIGNED_BYTE&&(X=ce===He&&ue===!1?i.SRGB8_ALPHA8:i.RGBA8),ie===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),ie===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)),(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function b(I,w,ie){return O(I,ie)===!0||I.isFramebufferTexture&&I.minFilter!==St&&I.minFilter!==Gt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function _(I){return I===St||I===us||I===qa?i.NEAREST:i.LINEAR}function V(I){const w=I.target;w.removeEventListener("dispose",V),F(w),w.isVideoTexture&&m.delete(w)}function N(I){const w=I.target;w.removeEventListener("dispose",N),H(w)}function F(I){const w=n.get(I);if(w.__webglInit===void 0)return;const ie=I.source,ce=g.get(ie);if(ce){const ue=ce[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&B(I),Object.keys(ce).length===0&&g.delete(ie)}n.remove(I)}function B(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const ie=I.source,ce=g.get(ie);delete ce[w.__cacheKey],o.memory.textures--}function H(I){const w=I.texture,ie=n.get(I),ce=n.get(w);if(ce.__webglTexture!==void 0&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++)i.deleteFramebuffer(ie.__webglFramebuffer[ue]),ie.__webglDepthbuffer&&i.deleteRenderbuffer(ie.__webglDepthbuffer[ue]);else{if(i.deleteFramebuffer(ie.__webglFramebuffer),ie.__webglDepthbuffer&&i.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let ue=0;ue<ie.__webglColorRenderbuffer.length;ue++)ie.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(ie.__webglColorRenderbuffer[ue]);ie.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ue=0,X=w.length;ue<X;ue++){const de=n.get(w[ue]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(w[ue])}n.remove(w),n.remove(I)}let $=0;function E(){$=0}function D(){const I=$;return I>=l,$+=1,I}function R(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function U(I,w){const ie=n.get(I);if(I.isVideoTexture&&W(I),I.isRenderTargetTexture===!1&&I.version>0&&ie.__version!==I.version){const ce=I.image;if(ce!==null){if(ce.complete!==!1){me(ie,I,w);return}}}t.bindTexture(i.TEXTURE_2D,ie.__webglTexture,i.TEXTURE0+w)}function A(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){me(ie,I,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ie.__webglTexture,i.TEXTURE0+w)}function k(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){me(ie,I,w);return}t.bindTexture(i.TEXTURE_3D,ie.__webglTexture,i.TEXTURE0+w)}function K(I,w){const ie=n.get(I);if(I.version>0&&ie.__version!==I.version){be(ie,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture,i.TEXTURE0+w)}const te={[sr]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},re={[St]:i.NEAREST,[us]:i.NEAREST_MIPMAP_NEAREST,[qa]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[lf]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},pe={[qm]:i.NEVER,[eg]:i.ALWAYS,[Km]:i.LESS,[$m]:i.LEQUAL,[Ym]:i.EQUAL,[Qm]:i.GEQUAL,[Zm]:i.GREATER,[Jm]:i.NOTEQUAL};function ne(I,w,ie){if(ie?(i.texParameteri(I,i.TEXTURE_WRAP_S,te[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,te[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,te[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,re[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,re[w.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),w.wrapS!==an||w.wrapT,i.texParameteri(I,i.TEXTURE_MAG_FILTER,_(w.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,_(w.minFilter)),w.minFilter!==St&&w.minFilter),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===St||w.minFilter!==qa&&w.minFilter!==Ai||w.type===Wn&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===$n&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(I,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function se(I,w){let ie=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",V));const ce=w.source;let ue=g.get(ce);ue===void 0&&(ue={},g.set(ce,ue));const X=R(w);if(X!==I.__cacheKey){ue[X]===void 0&&(ue[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ie=!0),ue[X].usedTimes++;const de=ue[I.__cacheKey];de!==void 0&&(ue[I.__cacheKey].usedTimes--,de.usedTimes===0&&B(w)),I.__cacheKey=X,I.__webglTexture=ue[X].texture}return ie}function me(I,w,ie){let ce=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=i.TEXTURE_3D);const ue=se(I,w),X=w.source;t.bindTexture(ce,I.__webglTexture,i.TEXTURE0+ie);const de=n.get(X);if(X.version!==de.__version||ue===!0){t.activeTexture(i.TEXTURE0+ie),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const xe=M(w)&&S(w.image)===!1;let fe=x(w.image,xe,!1,u);fe=Z(w,fe);const Le=S(fe)||s,Pe=a.convert(w.format,w.colorSpace);let _e=a.convert(w.type),Te=L(w.internalFormat,Pe,_e,w.colorSpace);ne(ce,w,Le);let Se;const Ae=w.mipmaps,Oe=s&&w.isVideoTexture!==!0,oe=de.__version===void 0||ue===!0,we=b(w,fe,Le);if(w.isDepthTexture)Te=i.DEPTH_COMPONENT,s?w.type===Wn?Te=i.DEPTH_COMPONENT32F:w.type===si?Te=i.DEPTH_COMPONENT24:w.type===Si?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:w.type,w.format===Ei&&Te===i.DEPTH_COMPONENT&&w.type!==Cs&&w.type!==si&&(w.type=si,_e=a.convert(w.type)),w.format===lr&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,w.type!==Si&&(w.type=Si,_e=a.convert(w.type))),oe&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,Te,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Pe,_e,null));else if(w.isDataTexture)if(Ae.length>0&&Le){Oe&&oe&&t.texStorage2D(i.TEXTURE_2D,we,Te,Ae[0].width,Ae[0].height);for(let ve=0,Ce=Ae.length;ve<Ce;ve++)Se=Ae[ve],Oe?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,Pe,_e,Se.data):t.texImage2D(i.TEXTURE_2D,ve,Te,Se.width,Se.height,0,Pe,_e,Se.data);w.generateMipmaps=!1}else Oe?(oe&&t.texStorage2D(i.TEXTURE_2D,we,Te,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,Pe,_e,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Te,fe.width,fe.height,0,Pe,_e,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Oe&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,Ae[0].width,Ae[0].height,fe.depth);for(let ve=0,Ce=Ae.length;ve<Ce;ve++)Se=Ae[ve],w.format!==on?Pe!==null&&(Oe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,fe.depth,Pe,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Te,Se.width,Se.height,fe.depth,0,Se.data,0,0)):Oe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Se.width,Se.height,fe.depth,Pe,_e,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Te,Se.width,Se.height,fe.depth,0,Pe,_e,Se.data)}else{Oe&&oe&&t.texStorage2D(i.TEXTURE_2D,we,Te,Ae[0].width,Ae[0].height);for(let ve=0,Ce=Ae.length;ve<Ce;ve++)Se=Ae[ve],w.format!==on?Pe!==null&&(Oe?t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,Pe,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Te,Se.width,Se.height,0,Se.data)):Oe?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Se.width,Se.height,Pe,_e,Se.data):t.texImage2D(i.TEXTURE_2D,ve,Te,Se.width,Se.height,0,Pe,_e,Se.data)}else if(w.isDataArrayTexture)Oe?(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Te,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,_e,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,fe.width,fe.height,fe.depth,0,Pe,_e,fe.data);else if(w.isData3DTexture)Oe?(oe&&t.texStorage3D(i.TEXTURE_3D,we,Te,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,_e,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Te,fe.width,fe.height,fe.depth,0,Pe,_e,fe.data);else if(w.isFramebufferTexture){if(oe)if(Oe)t.texStorage2D(i.TEXTURE_2D,we,Te,fe.width,fe.height);else{let ve=fe.width,Ce=fe.height;for(let Re=0;Re<we;Re++)t.texImage2D(i.TEXTURE_2D,Re,Te,ve,Ce,0,Pe,_e,null),ve>>=1,Ce>>=1}}else if(Ae.length>0&&Le){Oe&&oe&&t.texStorage2D(i.TEXTURE_2D,we,Te,Ae[0].width,Ae[0].height);for(let ve=0,Ce=Ae.length;ve<Ce;ve++)Se=Ae[ve],Oe?t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Pe,_e,Se):t.texImage2D(i.TEXTURE_2D,ve,Te,Pe,_e,Se);w.generateMipmaps=!1}else Oe?(oe&&t.texStorage2D(i.TEXTURE_2D,we,Te,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,_e,fe)):t.texImage2D(i.TEXTURE_2D,0,Te,Pe,_e,fe);O(w,Le)&&T(ce),de.__version=X.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function be(I,w,ie){if(w.image.length!==6)return;const ce=se(I,w),ue=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+ie);const X=n.get(ue);if(ue.version!==X.__version||ce===!0){t.activeTexture(i.TEXTURE0+ie),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const de=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let ve=0;ve<6;ve++)!de&&!xe?fe[ve]=x(w.image[ve],!1,!0,c):fe[ve]=xe?w.image[ve].image:w.image[ve],fe[ve]=Z(w,fe[ve]);const Le=fe[0],Pe=S(Le)||s,_e=a.convert(w.format,w.colorSpace),Te=a.convert(w.type),Se=L(w.internalFormat,_e,Te,w.colorSpace),Ae=s&&w.isVideoTexture!==!0,Oe=X.__version===void 0||ce===!0;let oe=b(w,Le,Pe);ne(i.TEXTURE_CUBE_MAP,w,Pe);let we;if(de){Ae&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Se,Le.width,Le.height);for(let ve=0;ve<6;ve++){we=fe[ve].mipmaps;for(let Ce=0;Ce<we.length;Ce++){const Re=we[Ce];w.format!==on?_e!==null&&(Ae?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,Re.width,Re.height,_e,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,Se,Re.width,Re.height,0,Re.data)):Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,0,0,Re.width,Re.height,_e,Te,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce,Se,Re.width,Re.height,0,_e,Te,Re.data)}}}else{we=w.mipmaps,Ae&&Oe&&(we.length>0&&oe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Se,fe[0].width,fe[0].height));for(let ve=0;ve<6;ve++)if(xe){Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,fe[ve].width,fe[ve].height,_e,Te,fe[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,fe[ve].width,fe[ve].height,0,_e,Te,fe[ve].data);for(let Ce=0;Ce<we.length;Ce++){const Ye=we[Ce].image[ve].image;Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,Ye.width,Ye.height,_e,Te,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,Se,Ye.width,Ye.height,0,_e,Te,Ye.data)}}else{Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,_e,Te,fe[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,_e,Te,fe[ve]);for(let Ce=0;Ce<we.length;Ce++){const Re=we[Ce];Ae?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,0,0,_e,Te,Re.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ce+1,Se,_e,Te,Re.image[ve])}}}O(w,Pe)&&T(i.TEXTURE_CUBE_MAP),X.__version=ue.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Y(I,w,ie,ce,ue){const X=a.convert(ie.format,ie.colorSpace),de=a.convert(ie.type),xe=L(ie.internalFormat,X,de,ie.colorSpace);n.get(w).__hasExternalTextures||(ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,xe,w.width,w.height,w.depth,0,X,de,null):t.texImage2D(ue,0,xe,w.width,w.height,0,X,de,null)),t.bindFramebuffer(i.FRAMEBUFFER,I),z(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,ue,n.get(ie).__webglTexture,0,C(w)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,ue,n.get(ie).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function P(I,w,ie){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer&&!w.stencilBuffer){let ce=i.DEPTH_COMPONENT16;if(ie||z(w)){const ue=w.depthTexture;ue&&ue.isDepthTexture&&(ue.type===Wn?ce=i.DEPTH_COMPONENT32F:ue.type===si&&(ce=i.DEPTH_COMPONENT24));const X=C(w);z(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,ce,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,X,ce,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(w.depthBuffer&&w.stencilBuffer){const ce=C(w);ie&&z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,w.width,w.height):z(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const ce=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ue=0;ue<ce.length;ue++){const X=ce[ue],de=a.convert(X.format,X.colorSpace),xe=a.convert(X.type),fe=L(X.internalFormat,de,xe,X.colorSpace),Le=C(w);ie&&z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,fe,w.width,w.height):z(w)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const ce=n.get(w.depthTexture).__webglTexture,ue=C(w);if(w.depthTexture.format===Ei)z(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(w.depthTexture.format===lr)z(w)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function j(I){const w=n.get(I),ie=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");q(w.__webglFramebuffer,I)}else if(ie){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]=i.createRenderbuffer(),P(w.__webglDepthbuffer[ce],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),P(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(I,w,ie){const ce=n.get(I);w!==void 0&&Y(ce.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),ie!==void 0&&j(I)}function ae(I){const w=I.texture,ie=n.get(I),ce=n.get(w);I.addEventListener("dispose",N),I.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=w.version,o.memory.textures++);const ue=I.isWebGLCubeRenderTarget===!0,X=I.isWebGLMultipleRenderTargets===!0,de=S(I)||s;if(ue){ie.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)ie.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(ie.__webglFramebuffer=i.createFramebuffer(),X&&r.drawBuffers){const xe=I.texture;for(let fe=0,Le=xe.length;fe<Le;fe++){const Pe=n.get(xe[fe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}if(s&&I.samples>0&&z(I)===!1){const xe=X?w:[w];ie.__webglMultisampledFramebuffer=i.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let fe=0;fe<xe.length;fe++){const Le=xe[fe];ie.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ie.__webglColorRenderbuffer[fe]);const Pe=a.convert(Le.format,Le.colorSpace),_e=a.convert(Le.type),Te=L(Le.internalFormat,Pe,_e,Le.colorSpace,I.isXRRenderTarget===!0),Se=C(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Te,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ie.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(ie.__webglDepthRenderbuffer=i.createRenderbuffer(),P(ie.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),ne(i.TEXTURE_CUBE_MAP,w,de);for(let xe=0;xe<6;xe++)Y(ie.__webglFramebuffer[xe],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe);O(w,de)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){const xe=I.texture;for(let fe=0,Le=xe.length;fe<Le;fe++){const Pe=xe[fe],_e=n.get(Pe);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ne(i.TEXTURE_2D,Pe,de),Y(ie.__webglFramebuffer,I,Pe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D),O(Pe,de)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&s&&(xe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ce.__webglTexture),ne(xe,w,de),Y(ie.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,xe),O(w,de)&&T(xe),t.unbindTexture()}I.depthBuffer&&j(I)}function G(I){const w=S(I)||s,ie=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let ce=0,ue=ie.length;ce<ue;ce++){const X=ie[ce];if(O(X,w)){const de=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(X).__webglTexture;t.bindTexture(de,xe),T(de),t.unbindTexture()}}}function Q(I){if(s&&I.samples>0&&z(I)===!1){const w=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],ie=I.width,ce=I.height;let ue=i.COLOR_BUFFER_BIT;const X=[],de=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(I),fe=I.isWebGLMultipleRenderTargets===!0;if(fe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){X.push(i.COLOR_ATTACHMENT0+Le),I.depthBuffer&&X.push(de);const Pe=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Pe===!1&&(I.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]),Pe===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),fe){const _e=n.get(w[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,ue,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);const Pe=n.get(w[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function C(I){return Math.min(d,I.samples)}function z(I){const w=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(I){const w=o.render.frame;m.get(I)!==w&&(m.set(I,w),I.update())}function Z(I,w){const ie=I.colorSpace,ce=I.format,ue=I.type;return I.isCompressedTexture===!0||I.format===hs||ie!==An&&ie!==wi&&ie===He&&s===!1&&(e.has("EXT_sRGB")===!0&&ce===on?(I.format=hs,I.minFilter=Gt,I.generateMipmaps=!1):w=_f.sRGBToLinear(w)),w}this.allocateTextureUnit=D,this.resetTextureUnits=E,this.setTexture2D=U,this.setTexture2DArray=A,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=ee,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=z}function d_(i,e,t){const n=t.isWebGL2;function r(a,o=wi){let s;if(a===ci)return i.UNSIGNED_BYTE;if(a===uf)return i.UNSIGNED_SHORT_4_4_4_4;if(a===df)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Dm)return i.BYTE;if(a===Im)return i.SHORT;if(a===Cs)return i.UNSIGNED_SHORT;if(a===cf)return i.INT;if(a===si)return i.UNSIGNED_INT;if(a===Wn)return i.FLOAT;if(a===$n)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Om)return i.ALPHA;if(a===on)return i.RGBA;if(a===Um)return i.LUMINANCE;if(a===Fm)return i.LUMINANCE_ALPHA;if(a===Ei)return i.DEPTH_COMPONENT;if(a===lr)return i.DEPTH_STENCIL;if(a===hs)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===km)return i.RED;if(a===ff)return i.RED_INTEGER;if(a===Nm)return i.RG;if(a===hf)return i.RG_INTEGER;if(a===pf)return i.RGBA_INTEGER;if(a===_o||a===yo||a===Mo||a===So)if(o===He)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ml||a===gl||a===bl||a===vl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zm)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===xl||a===_l)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===xl)return o===He?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===_l)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yl||a===Ml||a===Sl||a===El||a===Tl||a===wl||a===Al||a===Cl||a===Rl||a===Pl||a===Ll||a===Dl||a===Il||a===Ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===yl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ml)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===El)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Tl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===wl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Al)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ll)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dl)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Il)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ol)return o===He?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Eo)return o===He?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Bm||a===Ul||a===Fl||a===kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Si?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class f_ extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class li extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h_={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(h_)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class p_ extends Ct{constructor(e,t,n,r,a,o,s,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=si),n===void 0&&u===lr&&(n=Si),super(null,r,a,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class m_ extends Pi{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const v=t.getContextAttributes();let g=null,p=null;const y=[],x=[],S=new At;S.layers.enable(1),S.viewport=new st;const M=new At;M.layers.enable(2),M.viewport=new st;const O=[S,M],T=new f_;T.layers.enable(1),T.layers.enable(2);let L=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let k=y[A];return k===void 0&&(k=new qo,y[A]=k),k.getTargetRaySpace()},this.getControllerGrip=function(A){let k=y[A];return k===void 0&&(k=new qo,y[A]=k),k.getGripSpace()},this.getHand=function(A){let k=y[A];return k===void 0&&(k=new qo,y[A]=k),k.getHandSpace()};function _(A){const k=x.indexOf(A.inputSource);if(k===-1)return;const K=y[k];K!==void 0&&(K.update(A.inputSource,A.frame,c||o),K.dispatchEvent({type:A.type,data:A.inputSource}))}function V(){r.removeEventListener("select",_),r.removeEventListener("selectstart",_),r.removeEventListener("selectend",_),r.removeEventListener("squeeze",_),r.removeEventListener("squeezestart",_),r.removeEventListener("squeezeend",_),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",N);for(let A=0;A<y.length;A++){const k=x[A];k!==null&&(x[A]=null,y[A].disconnect(k))}L=null,b=null,e.setRenderTarget(g),h=null,f=null,d=null,r=null,p=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){a=A,n.isPresenting},this.setReferenceSpaceType=function(A){s=A,n.isPresenting},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(A){c=A},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(A){if(r=A,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",_),r.addEventListener("selectstart",_),r.addEventListener("selectend",_),r.addEventListener("squeeze",_),r.addEventListener("squeezestart",_),r.addEventListener("squeezeend",_),r.addEventListener("end",V),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),p=new xn(h.framebufferWidth,h.framebufferHeight,{format:on,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,K=null,te=null;v.depth&&(te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?lr:Ei,K=v.stencil?Si:si);const re={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:a};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(re),r.updateRenderState({layers:[f]}),p=new xn(f.textureWidth,f.textureHeight,{format:on,type:ci,depthTexture:new p_(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const pe=e.properties.get(p);pe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(A){for(let k=0;k<A.removed.length;k++){const K=A.removed[k],te=x.indexOf(K);te>=0&&(x[te]=null,y[te].disconnect(K))}for(let k=0;k<A.added.length;k++){const K=A.added[k];let te=x.indexOf(K);if(te===-1){for(let pe=0;pe<y.length;pe++)if(pe>=x.length){x.push(K),te=pe;break}else if(x[pe]===null){x[pe]=K,te=pe;break}if(te===-1)break}const re=y[te];re&&re.connect(K)}}const F=new le,B=new le;function H(A,k,K){F.setFromMatrixPosition(k.matrixWorld),B.setFromMatrixPosition(K.matrixWorld);const te=F.distanceTo(B),re=k.projectionMatrix.elements,pe=K.projectionMatrix.elements,ne=re[14]/(re[10]-1),se=re[14]/(re[10]+1),me=(re[9]+1)/re[5],be=(re[9]-1)/re[5],Y=(re[8]-1)/re[0],P=(pe[8]+1)/pe[0],q=ne*Y,j=ne*P,ee=te/(-Y+P),ae=ee*-Y;k.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(ae),A.translateZ(ee),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const G=ne+ee,Q=se+ee,C=q-ae,z=j+(te-ae),W=me*se/Q*G,Z=be*se/Q*G;A.projectionMatrix.makePerspective(C,z,W,Z,G,Q),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function $(A,k){k===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(k.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(r===null)return;T.near=M.near=S.near=A.near,T.far=M.far=S.far=A.far,(L!==T.near||b!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),L=T.near,b=T.far);const k=A.parent,K=T.cameras;$(T,k);for(let te=0;te<K.length;te++)$(K[te],k);K.length===2?H(T,S,M):T.projectionMatrix.copy(S.projectionMatrix),E(A,T,k)};function E(A,k,K){K===null?A.matrix.copy(k.matrixWorld):(A.matrix.copy(K.matrixWorld),A.matrix.invert(),A.matrix.multiply(k.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0);const te=A.children;for(let re=0,pe=te.length;re<pe;re++)te[re].updateMatrixWorld(!0);A.projectionMatrix.copy(k.projectionMatrix),A.projectionMatrixInverse.copy(k.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=ur*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(A){l=A,f!==null&&(f.fixedFoveation=A),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=A)};let D=null;function R(A,k){if(u=k.getViewerPose(c||o),m=k,u!==null){const K=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let te=!1;K.length!==T.cameras.length&&(T.cameras.length=0,te=!0);for(let re=0;re<K.length;re++){const pe=K[re];let ne=null;if(h!==null)ne=h.getViewport(pe);else{const me=d.getViewSubImage(f,pe);ne=me.viewport,re===0&&(e.setRenderTargetTextures(p,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(p))}let se=O[re];se===void 0&&(se=new At,se.layers.enable(re),se.viewport=new st,O[re]=se),se.matrix.fromArray(pe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(pe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ne.x,ne.y,ne.width,ne.height),re===0&&(T.matrix.copy(se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),te===!0&&T.cameras.push(se)}}for(let K=0;K<y.length;K++){const te=x[K],re=y[K];te!==null&&re!==void 0&&re.update(te,k,c||o)}D&&D(A,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),m=null}const U=new Pf;U.setAnimationLoop(R),this.setAnimationLoop=function(A){D=A},this.dispose=function(){}}}function g_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Af(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(a(g,p),m(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),v(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&s(g,p)):p.isPointsMaterial?l(g,p,y,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ht&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ht&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function s(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function b_(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=r[y.id];S===void 0&&(m(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",g));const M=x.program;n.updateUBOMapping(y,M);const O=e.render.frame;a[y.id]!==O&&(f(y),a[y.id]=O)}function u(y){const x=d();y.__bindingPointIndex=x;const S=i.createBuffer(),M=y.__size,O=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,O),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let y=0;y<s;y++)if(o.indexOf(y)===-1)return o.push(y),y;return 0}function f(y){const x=r[y.id],S=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let O=0,T=S.length;O<T;O++){const L=S[O];if(h(L,O,M)===!0){const b=L.__offset,_=Array.isArray(L.value)?L.value:[L.value];let V=0;for(let N=0;N<_.length;N++){const F=_[N],B=v(F);typeof F=="number"?(L.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,b+V,L.__data)):F.isMatrix3?(L.__data[0]=F.elements[0],L.__data[1]=F.elements[1],L.__data[2]=F.elements[2],L.__data[3]=F.elements[0],L.__data[4]=F.elements[3],L.__data[5]=F.elements[4],L.__data[6]=F.elements[5],L.__data[7]=F.elements[0],L.__data[8]=F.elements[6],L.__data[9]=F.elements[7],L.__data[10]=F.elements[8],L.__data[11]=F.elements[0]):(F.toArray(L.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,b,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,S){const M=y.value;if(S[x]===void 0){if(typeof M=="number")S[x]=M;else{const O=Array.isArray(M)?M:[M],T=[];for(let L=0;L<O.length;L++)T.push(O[L].clone());S[x]=T}return!0}else if(typeof M=="number"){if(S[x]!==M)return S[x]=M,!0}else{const O=Array.isArray(S[x])?S[x]:[S[x]],T=Array.isArray(M)?M:[M];for(let L=0;L<O.length;L++){const b=O[L];if(b.equals(T[L])===!1)return b.copy(T[L]),!0}}return!1}function m(y){const x=y.uniforms;let S=0;const M=16;let O=0;for(let T=0,L=x.length;T<L;T++){const b=x[T],_={boundary:0,storage:0},V=Array.isArray(b.value)?b.value:[b.value];for(let N=0,F=V.length;N<F;N++){const B=V[N],H=v(B);_.boundary+=H.boundary,_.storage+=H.storage}if(b.__data=new Float32Array(_.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,T>0){O=S%M;const N=M-O;O!==0&&N-_.boundary<0&&(S+=M-O,b.__offset=S)}S+=_.storage}return O=S%M,O>0&&(S+=M-O),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture,x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},a={}}return{bind:l,update:c,dispose:p}}function v_(){const i=Yr("canvas");return i.style.display="block",i}class Is{constructor(e={}){const{canvas:t=v_(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const h=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=He,this.useLegacyLights=!0,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let S=!1,M=0,O=0,T=null,L=-1,b=null;const _=new st,V=new st;let N=null;const F=new ze(0);let B=0,H=t.width,$=t.height,E=1,D=null,R=null;const U=new st(0,0,H,$),A=new st(0,0,H,$);let k=!1;const K=new Ls;let te=!1,re=!1,pe=null;const ne=new Ke,se=new Fe,me=new le,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Y(){return T===null?E:1}let P=n;function q(J,ge){for(let ye=0;ye<J.length;ye++){const he=J[ye],Me=t.getContext(he,ge);if(Me!==null)return Me}return null}try{const J={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ws}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),P===null){const ge=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&ge.shift(),P=q(ge,J),P===null)throw q(ge)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext,P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(J){throw J}let j,ee,ae,G,Q,C,z,W,Z,I,w,ie,ce,ue,X,de,xe,fe,Le,Pe,_e,Te,Se,Ae;function Oe(){j=new C0(P),ee=new M0(P,j,e),j.init(ee),Te=new d_(P,j,ee),ae=new c_(P,j,ee),G=new L0(P),Q=new Yx,C=new u_(P,j,ae,Q,ee,Te,G),z=new E0(x),W=new A0(x),Z=new Gg(P,ee),Se=new _0(P,j,Z,ee),I=new R0(P,Z,G,Se),w=new U0(P,I,Z,G),Le=new O0(P,ee,C),de=new S0(Q),ie=new Kx(x,z,W,j,ee,Se,de),ce=new g_(x,Q),ue=new Zx,X=new i_(j,ee),fe=new x0(x,z,W,ae,w,f,l),xe=new l_(x,w,ee),Ae=new b_(P,G,ee,ae),Pe=new y0(P,j,G,ee),_e=new P0(P,j,G,ee),G.programs=ie.programs,x.capabilities=ee,x.extensions=j,x.properties=Q,x.renderLists=ue,x.shadowMap=xe,x.state=ae,x.info=G}Oe();const oe=new m_(x,P);this.xr=oe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const J=j.get("WEBGL_lose_context");J&&J.loseContext()},this.forceContextRestore=function(){const J=j.get("WEBGL_lose_context");J&&J.restoreContext()},this.getPixelRatio=function(){return E},this.setPixelRatio=function(J){J!==void 0&&(E=J,this.setSize(H,$,!1))},this.getSize=function(J){return J.set(H,$)},this.setSize=function(J,ge,ye=!0){oe.isPresenting||(H=J,$=ge,t.width=Math.floor(J*E),t.height=Math.floor(ge*E),ye===!0&&(t.style.width=J+"px",t.style.height=ge+"px"),this.setViewport(0,0,J,ge))},this.getDrawingBufferSize=function(J){return J.set(H*E,$*E).floor()},this.setDrawingBufferSize=function(J,ge,ye){H=J,$=ge,E=ye,t.width=Math.floor(J*ye),t.height=Math.floor(ge*ye),this.setViewport(0,0,J,ge)},this.getCurrentViewport=function(J){return J.copy(_)},this.getViewport=function(J){return J.copy(U)},this.setViewport=function(J,ge,ye,he){J.isVector4?U.set(J.x,J.y,J.z,J.w):U.set(J,ge,ye,he),ae.viewport(_.copy(U).multiplyScalar(E).floor())},this.getScissor=function(J){return J.copy(A)},this.setScissor=function(J,ge,ye,he){J.isVector4?A.set(J.x,J.y,J.z,J.w):A.set(J,ge,ye,he),ae.scissor(V.copy(A).multiplyScalar(E).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(J){ae.setScissorTest(k=J)},this.setOpaqueSort=function(J){D=J},this.setTransparentSort=function(J){R=J},this.getClearColor=function(J){return J.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(J=!0,ge=!0,ye=!0){let he=0;if(J){let Me=!1;if(T!==null){const Ie=T.texture.format;Me=Ie===pf||Ie===hf||Ie===ff}if(Me){const Ie=T.texture.type,ke=Ie===ci||Ie===si||Ie===Cs||Ie===Si||Ie===uf||Ie===df,Be=fe.getClearColor(),Ge=fe.getClearAlpha(),qe=Be.r,Ve=Be.g,je=Be.b;ke?(h[0]=qe,h[1]=Ve,h[2]=je,h[3]=Ge,P.clearBufferuiv(P.COLOR,0,h)):(m[0]=qe,m[1]=Ve,m[2]=je,m[3]=Ge,P.clearBufferiv(P.COLOR,0,m))}else he|=P.COLOR_BUFFER_BIT}ge&&(he|=P.DEPTH_BUFFER_BIT),ye&&(he|=P.STENCIL_BUFFER_BIT),P.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),ue.dispose(),X.dispose(),Q.dispose(),z.dispose(),W.dispose(),w.dispose(),Se.dispose(),Ae.dispose(),ie.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",rt),oe.removeEventListener("sessionend",Ut),pe&&(pe.dispose(),pe=null),pt.stop()};function we(J){J.preventDefault(),S=!0}function ve(){S=!1;const J=G.autoReset,ge=xe.enabled,ye=xe.autoUpdate,he=xe.needsUpdate,Me=xe.type;Oe(),G.autoReset=J,xe.enabled=ge,xe.autoUpdate=ye,xe.needsUpdate=he,xe.type=Me}function Ce(J){}function Re(J){const ge=J.target;ge.removeEventListener("dispose",Re),Ye(ge)}function Ye(J){Je(J),Q.remove(J)}function Je(J){const ge=Q.get(J).programs;ge!==void 0&&(ge.forEach(function(ye){ie.releaseProgram(ye)}),J.isShaderMaterial&&ie.releaseShaderCache(J))}this.renderBufferDirect=function(J,ge,ye,he,Me,Ie){ge===null&&(ge=be);const ke=Me.isMesh&&Me.matrixWorld.determinant()<0,Be=Di(J,ge,ye,he,Me);ae.setMaterial(he,ke);let Ge=ye.index,qe=1;he.wireframe===!0&&(Ge=I.getWireframeAttribute(ye),qe=2);const Ve=ye.drawRange,je=ye.attributes.position;let ut=Ve.start*qe,ft=(Ve.start+Ve.count)*qe;Ie!==null&&(ut=Math.max(ut,Ie.start*qe),ft=Math.min(ft,(Ie.start+Ie.count)*qe)),Ge!==null?(ut=Math.max(ut,0),ft=Math.min(ft,Ge.count)):je!=null&&(ut=Math.max(ut,0),ft=Math.min(ft,je.count));const Vt=ft-ut;if(Vt<0||Vt===1/0)return;Se.setup(Me,he,Be,ye,Ge);let cn,mt=Pe;if(Ge!==null&&(cn=Z.get(Ge),mt=_e,mt.setIndex(cn)),Me.isMesh)he.wireframe===!0?(ae.setLineWidth(he.wireframeLinewidth*Y()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(Me.isLine){let Qe=he.linewidth;Qe===void 0&&(Qe=1),ae.setLineWidth(Qe*Y()),Me.isLineSegments?mt.setMode(P.LINES):Me.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else Me.isPoints?mt.setMode(P.POINTS):Me.isSprite&&mt.setMode(P.TRIANGLES);if(Me.isInstancedMesh)mt.renderInstances(ut,Vt,Me.count);else if(ye.isInstancedBufferGeometry){const Qe=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,Mr=Math.min(ye.instanceCount,Qe);mt.renderInstances(ut,Vt,Mr)}else mt.render(ut,Vt)},this.compile=function(J,ge){function ye(he,Me,Ie){he.transparent===!0&&he.side===bn&&he.forceSinglePass===!1?(he.side=Ht,he.needsUpdate=!0,Sn(he,Me,Ie),he.side=Zn,he.needsUpdate=!0,Sn(he,Me,Ie),he.side=bn):Sn(he,Me,Ie)}g=X.get(J),g.init(),y.push(g),J.traverseVisible(function(he){he.isLight&&he.layers.test(ge.layers)&&(g.pushLight(he),he.castShadow&&g.pushShadow(he))}),g.setupLights(x.useLegacyLights),J.traverse(function(he){const Me=he.material;if(Me)if(Array.isArray(Me))for(let Ie=0;Ie<Me.length;Ie++){const ke=Me[Ie];ye(ke,J,he)}else ye(Me,J,he)}),y.pop(),g=null};let We=null;function xt(J){We&&We(J)}function rt(){pt.stop()}function Ut(){pt.start()}const pt=new Pf;pt.setAnimationLoop(xt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(J){We=J,oe.setAnimationLoop(J),J===null?pt.stop():pt.start()},oe.addEventListener("sessionstart",rt),oe.addEventListener("sessionend",Ut),this.render=function(J,ge){if(ge!==void 0&&ge.isCamera!==!0||S===!0)return;J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ge.parent===null&&ge.matrixWorldAutoUpdate===!0&&ge.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(ge),ge=oe.getCamera()),J.isScene===!0&&J.onBeforeRender(x,J,ge,T),g=X.get(J,y.length),g.init(),y.push(g),ne.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),K.setFromProjectionMatrix(ne),re=this.localClippingEnabled,te=de.init(this.clippingPlanes,re),v=ue.get(J,p.length),v.init(),p.push(v),In(J,ge,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(D,R),this.info.render.frame++,te===!0&&de.beginShadows();const ye=g.state.shadowsArray;if(xe.render(ye,J,ge),te===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(v,J),g.setupLights(x.useLegacyLights),ge.isArrayCamera){const he=ge.cameras;for(let Me=0,Ie=he.length;Me<Ie;Me++){const ke=he[Me];Li(v,J,ke,ke.viewport)}}else Li(v,J,ge);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),J.isScene===!0&&J.onAfterRender(x,J,ge),Se.resetDefaultState(),L=-1,b=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function In(J,ge,ye,he){if(J.visible===!1)return;if(J.layers.test(ge.layers)){if(J.isGroup)ye=J.renderOrder;else if(J.isLOD)J.autoUpdate===!0&&J.update(ge);else if(J.isLight)g.pushLight(J),J.castShadow&&g.pushShadow(J);else if(J.isSprite){if(!J.frustumCulled||K.intersectsSprite(J)){he&&me.setFromMatrixPosition(J.matrixWorld).applyMatrix4(ne);const ke=w.update(J),Be=J.material;Be.visible&&v.push(J,ke,Be,ye,me.z,null)}}else if((J.isMesh||J.isLine||J.isPoints)&&(!J.frustumCulled||K.intersectsObject(J))){const ke=w.update(J),Be=J.material;if(he&&(J.boundingSphere!==void 0?(J.boundingSphere===null&&J.computeBoundingSphere(),me.copy(J.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),me.copy(ke.boundingSphere.center)),me.applyMatrix4(J.matrixWorld).applyMatrix4(ne)),Array.isArray(Be)){const Ge=ke.groups;for(let qe=0,Ve=Ge.length;qe<Ve;qe++){const je=Ge[qe],ut=Be[je.materialIndex];ut&&ut.visible&&v.push(J,ke,ut,ye,me.z,je)}}else Be.visible&&v.push(J,ke,Be,ye,me.z,null)}}const Ie=J.children;for(let ke=0,Be=Ie.length;ke<Be;ke++)In(Ie[ke],ge,ye,he)}function Li(J,ge,ye,he){const Me=J.opaque,Ie=J.transmissive,ke=J.transparent;g.setupLightsView(ye),te===!0&&de.setGlobalState(x.clippingPlanes,ye),Ie.length>0&&_r(Me,Ie,ge,ye),he&&ae.viewport(_.copy(he)),Me.length>0&&ln(Me,ge,ye),Ie.length>0&&ln(Ie,ge,ye),ke.length>0&&ln(ke,ge,ye),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function _r(J,ge,ye,he){const Me=ee.isWebGL2;pe===null&&(pe=new xn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?$n:ci,minFilter:Ai,samples:Me?4:0})),x.getDrawingBufferSize(se),Me?pe.setSize(se.x,se.y):pe.setSize(Ja(se.x),Ja(se.y));const Ie=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const ke=x.toneMapping;x.toneMapping=Yn,ln(J,ye,he),C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe);let Be=!1;for(let Ge=0,qe=ge.length;Ge<qe;Ge++){const Ve=ge[Ge],je=Ve.object,ut=Ve.geometry,ft=Ve.material,Vt=Ve.group;if(ft.side===bn&&je.layers.test(he.layers)){const cn=ft.side;ft.side=Ht,ft.needsUpdate=!0,di(je,ye,he,ut,ft,Vt),ft.side=cn,ft.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(pe),C.updateRenderTargetMipmap(pe)),x.setRenderTarget(Ie),x.setClearColor(F,B),x.toneMapping=ke}function ln(J,ge,ye){const he=ge.isScene===!0?ge.overrideMaterial:null;for(let Me=0,Ie=J.length;Me<Ie;Me++){const ke=J[Me],Be=ke.object,Ge=ke.geometry,qe=he===null?ke.material:he,Ve=ke.group;Be.layers.test(ye.layers)&&di(Be,ge,ye,Ge,qe,Ve)}}function di(J,ge,ye,he,Me,Ie){J.onBeforeRender(x,ge,ye,he,Me,Ie),J.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,J.matrixWorld),J.normalMatrix.getNormalMatrix(J.modelViewMatrix),Me.onBeforeRender(x,ge,ye,he,J,Ie),Me.transparent===!0&&Me.side===bn&&Me.forceSinglePass===!1?(Me.side=Ht,Me.needsUpdate=!0,x.renderBufferDirect(ye,ge,he,Me,J,Ie),Me.side=Zn,Me.needsUpdate=!0,x.renderBufferDirect(ye,ge,he,Me,J,Ie),Me.side=bn):x.renderBufferDirect(ye,ge,he,Me,J,Ie),J.onAfterRender(x,ge,ye,he,Me,Ie)}function Sn(J,ge,ye){ge.isScene!==!0&&(ge=be);const he=Q.get(J),Me=g.state.lights,Ie=g.state.shadowsArray,ke=Me.state.version,Be=ie.getParameters(J,Me.state,Ie,ge,ye),Ge=ie.getProgramCacheKey(Be);let qe=he.programs;he.environment=J.isMeshStandardMaterial?ge.environment:null,he.fog=ge.fog,he.envMap=(J.isMeshStandardMaterial?W:z).get(J.envMap||he.environment),qe===void 0&&(J.addEventListener("dispose",Re),qe=new Map,he.programs=qe);let Ve=qe.get(Ge);if(Ve!==void 0){if(he.currentProgram===Ve&&he.lightsStateVersion===ke)return Qt(J,Be),Ve}else Be.uniforms=ie.getUniforms(J),J.onBuild(ye,Be,x),J.onBeforeCompile(Be,x),Ve=ie.acquireProgram(Be,Ge),qe.set(Ge,Ve),he.uniforms=Be.uniforms;const je=he.uniforms;(!J.isShaderMaterial&&!J.isRawShaderMaterial||J.clipping===!0)&&(je.clippingPlanes=de.uniform),Qt(J,Be),he.needsLights=Lt(J),he.lightsStateVersion=ke,he.needsLights&&(je.ambientLightColor.value=Me.state.ambient,je.lightProbe.value=Me.state.probe,je.directionalLights.value=Me.state.directional,je.directionalLightShadows.value=Me.state.directionalShadow,je.spotLights.value=Me.state.spot,je.spotLightShadows.value=Me.state.spotShadow,je.rectAreaLights.value=Me.state.rectArea,je.ltc_1.value=Me.state.rectAreaLTC1,je.ltc_2.value=Me.state.rectAreaLTC2,je.pointLights.value=Me.state.point,je.pointLightShadows.value=Me.state.pointShadow,je.hemisphereLights.value=Me.state.hemi,je.directionalShadowMap.value=Me.state.directionalShadowMap,je.directionalShadowMatrix.value=Me.state.directionalShadowMatrix,je.spotShadowMap.value=Me.state.spotShadowMap,je.spotLightMatrix.value=Me.state.spotLightMatrix,je.spotLightMap.value=Me.state.spotLightMap,je.pointShadowMap.value=Me.state.pointShadowMap,je.pointShadowMatrix.value=Me.state.pointShadowMatrix);const ut=Ve.getUniforms(),ft=Ka.seqWithValue(ut.seq,je);return he.currentProgram=Ve,he.uniformsList=ft,Ve}function Qt(J,ge){const ye=Q.get(J);ye.outputColorSpace=ge.outputColorSpace,ye.instancing=ge.instancing,ye.skinning=ge.skinning,ye.morphTargets=ge.morphTargets,ye.morphNormals=ge.morphNormals,ye.morphColors=ge.morphColors,ye.morphTargetsCount=ge.morphTargetsCount,ye.numClippingPlanes=ge.numClippingPlanes,ye.numIntersection=ge.numClipIntersection,ye.vertexAlphas=ge.vertexAlphas,ye.vertexTangents=ge.vertexTangents,ye.toneMapping=ge.toneMapping}function Di(J,ge,ye,he,Me){ge.isScene!==!0&&(ge=be),C.resetTextureUnits();const Ie=ge.fog,ke=he.isMeshStandardMaterial?ge.environment:null,Be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,Ge=(he.isMeshStandardMaterial?W:z).get(he.envMap||ke),qe=he.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,Ve=!!ye.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),je=!!ye.morphAttributes.position,ut=!!ye.morphAttributes.normal,ft=!!ye.morphAttributes.color,Vt=he.toneMapped?x.toneMapping:Yn,cn=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,mt=cn!==void 0?cn.length:0,Qe=Q.get(he),Mr=g.state.lights;if(te===!0&&(re===!0||J!==b)){const Wt=J===b&&he.id===L;de.setState(he,J,Wt)}let bt=!1;he.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Mr.state.version||Qe.outputColorSpace!==Be||Me.isInstancedMesh&&Qe.instancing===!1||!Me.isInstancedMesh&&Qe.instancing===!0||Me.isSkinnedMesh&&Qe.skinning===!1||!Me.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==Ge||he.fog===!0&&Qe.fog!==Ie||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==de.numPlanes||Qe.numIntersection!==de.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Ve||Qe.morphTargets!==je||Qe.morphNormals!==ut||Qe.morphColors!==ft||Qe.toneMapping!==Vt||ee.isWebGL2===!0&&Qe.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,Qe.__version=he.version);let On=Qe.currentProgram;bt===!0&&(On=Sn(he,ge,Me));let la=!1,fi=!1,ho=!1;const Ft=On.getUniforms(),hi=Qe.uniforms;if(ae.useProgram(On.program)&&(la=!0,fi=!0,ho=!0),he.id!==L&&(L=he.id,fi=!0),la||b!==J){if(Ft.setValue(P,"projectionMatrix",J.projectionMatrix),ee.logarithmicDepthBuffer&&Ft.setValue(P,"logDepthBufFC",2/(Math.log(J.far+1)/Math.LN2)),b!==J&&(b=J,fi=!0,ho=!0),he.isShaderMaterial||he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshStandardMaterial||he.envMap){const Wt=Ft.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,me.setFromMatrixPosition(J.matrixWorld))}(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Ft.setValue(P,"isOrthographic",J.isOrthographicCamera===!0),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial||he.isShadowMaterial||Me.isSkinnedMesh)&&Ft.setValue(P,"viewMatrix",J.matrixWorldInverse)}if(Me.isSkinnedMesh){Ft.setOptional(P,Me,"bindMatrix"),Ft.setOptional(P,Me,"bindMatrixInverse");const Wt=Me.skeleton;Wt&&ee.floatVertexTextures&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Ft.setValue(P,"boneTexture",Wt.boneTexture,C),Ft.setValue(P,"boneTextureSize",Wt.boneTextureSize))}const po=ye.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0&&ee.isWebGL2===!0)&&Le.update(Me,ye,On),(fi||Qe.receiveShadow!==Me.receiveShadow)&&(Qe.receiveShadow=Me.receiveShadow,Ft.setValue(P,"receiveShadow",Me.receiveShadow)),he.isMeshGouraudMaterial&&he.envMap!==null&&(hi.envMap.value=Ge,hi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),fi&&(Ft.setValue(P,"toneMappingExposure",x.toneMappingExposure),Qe.needsLights&&yr(hi,ho),Ie&&he.fog===!0&&ce.refreshFogUniforms(hi,Ie),ce.refreshMaterialUniforms(hi,he,E,$,pe),Ka.upload(P,Qe.uniformsList,hi,C)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Ka.upload(P,Qe.uniformsList,hi,C),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Ft.setValue(P,"center",Me.center),Ft.setValue(P,"modelViewMatrix",Me.modelViewMatrix),Ft.setValue(P,"normalMatrix",Me.normalMatrix),Ft.setValue(P,"modelMatrix",Me.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Wt=he.uniformsGroups;for(let mo=0,rh=Wt.length;mo<rh;mo++)if(ee.isWebGL2){const Ks=Wt[mo];Ae.update(Ks,On),Ae.bind(Ks,On)}}return On}function yr(J,ge){J.ambientLightColor.needsUpdate=ge,J.lightProbe.needsUpdate=ge,J.directionalLights.needsUpdate=ge,J.directionalLightShadows.needsUpdate=ge,J.pointLights.needsUpdate=ge,J.pointLightShadows.needsUpdate=ge,J.spotLights.needsUpdate=ge,J.spotLightShadows.needsUpdate=ge,J.rectAreaLights.needsUpdate=ge,J.hemisphereLights.needsUpdate=ge}function Lt(J){return J.isMeshLambertMaterial||J.isMeshToonMaterial||J.isMeshPhongMaterial||J.isMeshStandardMaterial||J.isShadowMaterial||J.isShaderMaterial&&J.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(J,ge,ye){Q.get(J.texture).__webglTexture=ge,Q.get(J.depthTexture).__webglTexture=ye;const he=Q.get(J);he.__hasExternalTextures=!0,he.__hasExternalTextures&&(he.__autoAllocateDepthBuffer=ye===void 0,he.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(he.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(J,ge){const ye=Q.get(J);ye.__webglFramebuffer=ge,ye.__useDefaultFramebuffer=ge===void 0},this.setRenderTarget=function(J,ge=0,ye=0){T=J,M=ge,O=ye;let he=!0,Me=null,Ie=!1,ke=!1;if(J){const Ge=Q.get(J);Ge.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(P.FRAMEBUFFER,null),he=!1):Ge.__webglFramebuffer===void 0?C.setupRenderTarget(J):Ge.__hasExternalTextures&&C.rebindTextures(J,Q.get(J.texture).__webglTexture,Q.get(J.depthTexture).__webglTexture);const qe=J.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ke=!0);const Ve=Q.get(J).__webglFramebuffer;J.isWebGLCubeRenderTarget?(Me=Ve[ge],Ie=!0):ee.isWebGL2&&J.samples>0&&C.useMultisampledRTT(J)===!1?Me=Q.get(J).__webglMultisampledFramebuffer:Me=Ve,_.copy(J.viewport),V.copy(J.scissor),N=J.scissorTest}else _.copy(U).multiplyScalar(E).floor(),V.copy(A).multiplyScalar(E).floor(),N=k;if(ae.bindFramebuffer(P.FRAMEBUFFER,Me)&&ee.drawBuffers&&he&&ae.drawBuffers(J,Me),ae.viewport(_),ae.scissor(V),ae.setScissorTest(N),Ie){const Ge=Q.get(J.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ge.__webglTexture,ye)}else if(ke){const Ge=Q.get(J.texture),qe=ge||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ge.__webglTexture,ye||0,qe)}L=-1},this.readRenderTargetPixels=function(J,ge,ye,he,Me,Ie,ke){if(!(J&&J.isWebGLRenderTarget))return;let Be=Q.get(J).__webglFramebuffer;if(J.isWebGLCubeRenderTarget&&ke!==void 0&&(Be=Be[ke]),Be){ae.bindFramebuffer(P.FRAMEBUFFER,Be);try{const Ge=J.texture,qe=Ge.format,Ve=Ge.type;if(qe!==on&&Te.convert(qe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT))return;const je=Ve===$n&&(j.has("EXT_color_buffer_half_float")||ee.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ve!==ci&&Te.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Wn&&(ee.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!je)return;ge>=0&&ge<=J.width-he&&ye>=0&&ye<=J.height-Me&&P.readPixels(ge,ye,he,Me,Te.convert(qe),Te.convert(Ve),Ie)}finally{const Ge=T!==null?Q.get(T).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(J,ge,ye=0){const he=Math.pow(2,-ye),Me=Math.floor(ge.image.width*he),Ie=Math.floor(ge.image.height*he);C.setTexture2D(ge,0),P.copyTexSubImage2D(P.TEXTURE_2D,ye,0,0,J.x,J.y,Me,Ie),ae.unbindTexture()},this.copyTextureToTexture=function(J,ge,ye,he=0){const Me=ge.image.width,Ie=ge.image.height,ke=Te.convert(ye.format),Be=Te.convert(ye.type);C.setTexture2D(ye,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ye.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ye.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ye.unpackAlignment),ge.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,he,J.x,J.y,Me,Ie,ke,Be,ge.image.data):ge.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,he,J.x,J.y,ge.mipmaps[0].width,ge.mipmaps[0].height,ke,ge.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,he,J.x,J.y,ke,Be,ge.image),he===0&&ye.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(J,ge,ye,he,Me=0){if(x.isWebGL1Renderer)return;const Ie=J.max.x-J.min.x+1,ke=J.max.y-J.min.y+1,Be=J.max.z-J.min.z+1,Ge=Te.convert(he.format),qe=Te.convert(he.type);let Ve;if(he.isData3DTexture)C.setTexture3D(he,0),Ve=P.TEXTURE_3D;else if(he.isDataArrayTexture)C.setTexture2DArray(he,0),Ve=P.TEXTURE_2D_ARRAY;else return;P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,he.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,he.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,he.unpackAlignment);const je=P.getParameter(P.UNPACK_ROW_LENGTH),ut=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ft=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),cn=P.getParameter(P.UNPACK_SKIP_IMAGES),mt=ye.isCompressedTexture?ye.mipmaps[0]:ye.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,J.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,J.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,J.min.z),ye.isDataTexture||ye.isData3DTexture?P.texSubImage3D(Ve,Me,ge.x,ge.y,ge.z,Ie,ke,Be,Ge,qe,mt.data):ye.isCompressedArrayTexture?P.compressedTexSubImage3D(Ve,Me,ge.x,ge.y,ge.z,Ie,ke,Be,Ge,mt.data):P.texSubImage3D(Ve,Me,ge.x,ge.y,ge.z,Ie,ke,Be,Ge,qe,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,je),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cn),Me===0&&he.generateMipmaps&&P.generateMipmap(Ve),ae.unbindTexture()},this.initTexture=function(J){J.isCubeTexture?C.setTextureCube(J,0):J.isData3DTexture?C.setTexture3D(J,0):J.isDataArrayTexture||J.isCompressedArrayTexture?C.setTexture2DArray(J,0):C.setTexture2D(J,0),ae.unbindTexture()},this.resetState=function(){M=0,O=0,T=null,ae.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get physicallyCorrectLights(){return!this.useLegacyLights}set physicallyCorrectLights(e){this.useLegacyLights=!e}get outputEncoding(){return this.outputColorSpace===He?Ti:gf}set outputEncoding(e){this.outputColorSpace=e===Ti?He:An}}class x_ extends Is{}x_.prototype.isWebGL1Renderer=!0;class Os{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Os(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class gs extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class __{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fs,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new le;class Us{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),r=ot(r,this.array),a=ot(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wc=new le,Ac=new st,Cc=new st,y_=new le,Rc=new Ke,$i=new le,Ko=new Rn,Pc=new Ke,Yo=new ro;class M_ extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)$i.fromBufferAttribute(t,n),this.applyBoneTransform(n,$i),this.boundingBox.expandByPoint($i)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)$i.fromBufferAttribute(t,n),this.applyBoneTransform(n,$i),this.boundingSphere.expandByPoint($i)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(r),e.ray.intersectsSphere(Ko)!==!1&&(Pc.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(Pc),!(this.boundingBox!==null&&Yo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"&&this.bindMatrixInverse.copy(this.bindMatrix).invert()}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ac.fromBufferAttribute(r.attributes.skinIndex,e),Cc.fromBufferAttribute(r.attributes.skinWeight,e),wc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const o=Cc.getComponent(a);if(o!==0){const s=Ac.getComponent(a);Rc.multiplyMatrices(n.bones[s].matrixWorld,n.boneInverses[s]),t.addScaledVector(y_.copy(wc).applyMatrix4(Rc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return this.applyBoneTransform(e,t)}}class Uf extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class S_ extends Ct{constructor(e=null,t=1,n=1,r,a,o,s,l,c=St,u=St,d,f){super(null,o,s,l,c,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lc=new Ke,E_=new Ke;class Fs{constructor(e=[],t=[]){this.uuid=vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let a=0,o=e.length;a<o;a++){const s=e[a]?e[a].matrixWorld:E_;Lc.multiplyMatrices(s,t[a]),Lc.toArray(n,a*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Fs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=vf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new S_(t,e,e,on,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const a=e.bones[n];let o=t[a];o===void 0&&(o=new Uf),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,a=t.length;r<a;r++){const o=t[r];e.bones.push(o.uuid);const s=n[r];e.boneInverses.push(s.toArray())}return e}}class Dc extends zt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new Ke,Ic=new Ke,La=[],Oc=new Jn,T_=new Ke,Rr=new Et,Pr=new Rn;class w_ extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,T_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Oc.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Oc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Pr.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),e.ray.intersectsSphere(Pr)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Zi),Ic.multiplyMatrices(n,Zi),Rr.matrixWorld=Ic,Rr.raycast(e,La);for(let o=0,s=La.length;o<s;o++){const l=La[o];l.instanceId=a,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ff extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uc=new le,Fc=new le,kc=new Ke,$o=new ro,Da=new Rn;class ks extends dt{constructor(e=new $t,t=new Ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Uc.fromBufferAttribute(t,r-1),Fc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Uc.distanceTo(Fc);e.setAttribute("lineDistance",new Rt(n,1))}return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Da.radius+=a,e.ray.intersectsSphere(Da)===!1)return;kc.copy(r).invert(),$o.copy(e.ray).applyMatrix4(kc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new le,u=new le,d=new le,f=new le,h=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=p,S=y-1;x<S;x+=h){const M=m.getX(x),O=m.getX(x+1);if(c.fromBufferAttribute(g,M),u.fromBufferAttribute(g,O),$o.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=p,S=y-1;x<S;x+=h){if(c.fromBufferAttribute(g,x),u.fromBufferAttribute(g,x+1),$o.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}const Nc=new le,zc=new le;class A_ extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Nc.fromBufferAttribute(t,r),zc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nc.distanceTo(zc);e.setAttribute("lineDistance",new Rt(n,1))}return this}}class C_ extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class kf extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bc=new Ke,bs=new ro,Ia=new Rn,Oa=new le;class R_ extends dt{constructor(e=new $t,t=new kf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;Bc.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Bc);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=f,v=h;m<v;m++){const g=c.getX(m);Oa.fromBufferAttribute(d,g),Gc(Oa,g,l,r,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=f,v=h;m<v;m++)Oa.fromBufferAttribute(d,m),Gc(Oa,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function Gc(i,e,t,n,r,a,o){const s=bs.distanceSqToPoint(i);if(s<t){const l=new le;bs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Ns extends $t{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const u=[],d=new le,f=new le,h=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){const O=M/t;d.x=-e*Math.cos(r+O*a)*Math.sin(o+x*s),d.y=e*Math.cos(o+x*s),d.z=e*Math.sin(r+O*a)*Math.sin(o+x*s),m.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(O+S,1-x),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const x=u[p][y+1],S=u[p][y],M=u[p+1][y],O=u[p+1][y+1];(p!==0||o>0)&&h.push(x,S,O),(p!==n-1||l<Math.PI)&&h.push(S,M,O)}this.setIndex(h),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zs extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends zs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class P_ extends _n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ze(16777215),this.specular=new ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rs,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=As,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ri(i,e,t){return Nf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Ua(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function L_(i){function e(r,a){return i[r]-i[a]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Hc(i,e,t){const n=i.length,r=new i.constructor(n);for(let a=0,o=0;o!==n;++a){const s=t[a]*e;for(let l=0;l!==e;++l)r[o++]=i[s+l]}return r}function zf(i,e,t,n){let r=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[r++];if(a===void 0)return;let o=a[n];if(o!==void 0)if(Array.isArray(o))do o=a[n],o!==void 0&&(e.push(a.time),t.push.apply(t,o)),a=i[r++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[n],o!==void 0&&(e.push(a.time),o.toArray(t,t.length)),a=i[r++];while(a!==void 0);else do o=a[n],o!==void 0&&(e.push(a.time),t.push(o)),a=i[r++];while(a!==void 0)}class na{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],a=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let s=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===s)break;if(a=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=a)){const s=t[1];e<s&&(n=2,a=s);for(let l=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=a,a=t[--n-1],e>=a)break e}o=n,n=0;break t}break n}for(;n<o;){const s=n+o>>>1;e<t[s]?o=s:n=s+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let o=0;o!==r;++o)t[o]=n[a+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class D_ extends na{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nl,endingEnd:Nl}}intervalChanged_(e,t,n){const r=this.parameterPositions;let a=e-2,o=e+1,s=r[a],l=r[o];if(s===void 0)switch(this.getSettings_().endingStart){case zl:a=e,s=2*t-n;break;case Bl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:o=e,l=2*n-t;break;case Bl:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(l-n),this._offsetPrev=a*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(n-t)/(r-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,y=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,x=(-1-h)*g+(1.5+h)*v+.5*m,S=h*g-h*v;for(let M=0;M!==s;++M)a[M]=p*o[u+M]+y*o[c+M]+x*o[l+M]+S*o[d+M];return a}}class I_ extends na{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=e*s,c=l-s,u=(n-t)/(r-t),d=1-u;for(let f=0;f!==s;++f)a[f]=o[c+f]*d+o[l+f]*u;return a}}class O_ extends na{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new O_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new D_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return To}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let a=0,o=r-1;for(;a!==r&&n[a]<e;)++a;for(;o!==-1&&n[o]>t;)--o;if(++o,a!==0||o!==r){a>=o&&(o=Math.max(o,1),a=o-1);const s=this.getValueSize();this.times=ri(n,a,o),this.values=ri(this.values,a*s,o*s)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(e=!1);const n=this.times,r=this.values,a=n.length;a===0&&(e=!1);let o=null;for(let s=0;s!==a;s++){const l=n[s];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(o!==null&&o>l){e=!1;break}o=l}if(r!==void 0&&Nf(r))for(let s=0,l=r.length;s!==l;++s){const c=r[s];if(isNaN(c)){e=!1;break}}return e}optimize(){const e=ri(this.times),t=ri(this.values),n=this.getValueSize(),r=this.getInterpolation()===To,a=e.length-1;let o=1;for(let s=1;s<a;++s){let l=!1;const c=e[s],u=e[s+1];if(c!==u&&(s!==1||c!==e[0]))if(r)l=!0;else{const d=s*n,f=d-n,h=d+n;for(let m=0;m!==n;++m){const v=t[d+m];if(v!==t[f+m]||v!==t[h+m]){l=!0;break}}}if(l){if(s!==o){e[o]=e[s];const d=s*n,f=o*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++o}}if(a>0){e[o]=e[a];for(let s=a*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[s+c];++o}return o!==e.length?(this.times=ri(e,0,o),this.values=ri(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ri(this.times,0),t=ri(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=cr;class br extends Pn{}br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Kr;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;class Bf extends Pn{}Bf.prototype.ValueTypeName="color";class fr extends Pn{}fr.prototype.ValueTypeName="number";class U_ extends na{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=(n-t)/(r-t);let c=e*s;for(let u=c+s;c!==u;c+=4)Cn.slerpFlat(a,0,o,c-s,o,c,l);return a}}class Ci extends Pn{InterpolantFactoryMethodLinear(e){return new U_(this.times,this.values,this.getValueSize(),e)}}Ci.prototype.ValueTypeName="quaternion";Ci.prototype.DefaultInterpolation=cr;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class vr extends Pn{}vr.prototype.ValueTypeName="string";vr.prototype.ValueBufferType=Array;vr.prototype.DefaultInterpolation=Kr;vr.prototype.InterpolantFactoryMethodLinear=void 0;vr.prototype.InterpolantFactoryMethodSmooth=void 0;class Zr extends Pn{}Zr.prototype.ValueTypeName="vector";class F_{constructor(e,t=-1,n,r=Gm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,s=n.length;o!==s;++o)t.push(N_(n[o]).scale(r));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,o=n.length;a!==o;++a)t.push(Pn.toJSON(n[a]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const a=t.length,o=[];for(let s=0;s<a;s++){let l=[],c=[];l.push((s+a-1)%a,s,(s+1)%a),c.push(0,1,0);const u=L_(l);l=Hc(l,1,u),c=Hc(c,1,u),!r&&l[0]===0&&(l.push(a),c.push(c[0])),o.push(new fr(".morphTargetInfluences["+t[s].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,l=e.length;s<l;s++){const c=e[s],u=c.name.match(a);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const s in r)o.push(this.CreateFromMorphTargetSequence(s,r[s],t,n));return o}static parseAnimation(e,t){if(!e)return null;const n=function(d,f,h,m,v){if(h.length!==0){const g=[],p=[];zf(h,g,p,m),g.length!==0&&v.push(new d(f,g,p))}},r=[],a=e.name||"default",o=e.fps||30,s=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)h[f[m].morphTargets[v]]=-1;for(const v in h){const g=[],p=[];for(let y=0;y!==f[m].morphTargets.length;++y){const x=f[m];g.push(x.time),p.push(x.morphTarget===v?1:0)}r.push(new fr(".morphTargetInfluence["+v+"]",g,p))}l=h.length*o}else{const h=".bones["+t[d].name+"]";n(Zr,h+".position",f,"pos",r),n(Ci,h+".quaternion",f,"rot",r),n(Zr,h+".scale",f,"scl",r)}}return r.length===0?null:new this(a,l,r,s)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function k_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fr;case"vector":case"vector2":case"vector3":case"vector4":return Zr;case"color":return Bf;case"quaternion":return Ci;case"bool":case"boolean":return br;case"string":return vr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function N_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=k_(i.type);if(i.times===void 0){const t=[],n=[];zf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const hr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class z_{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null}}}const B_=new z_;class xr{constructor(e){this.manager=e!==void 0?e:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class G_ extends Error{constructor(e,t){super(e),this.response=t}}class Gf extends xr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=hr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:r});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status,typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Gn[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=f?parseInt(f):0,m=h!==0;let v=0;const g=new ReadableStream({start(p){y();function y(){d.read().then(({done:x,value:S})=>{if(x)p.close();else{v+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:h});for(let O=0,T=u.length;O<T;O++){const L=u[O];L.onProgress&&L.onProgress(M)}p.enqueue(S),y()}})}}});return new Response(g)}else throw new G_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return c.json();default:if(s===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(s),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(m=>h.decode(m))}}}).then(c=>{hr.add(e,c);const u=Gn[e];delete Gn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Gn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gn[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H_ extends xr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=hr.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=Yr("img");function l(){u(),hr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){u(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class tn extends xr{constructor(e){super(e)}load(e,t,n,r){const a=new Ct,o=new H_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class lo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Zo=new Ke,Vc=new le,Wc=new le;class Bs{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class V_ extends Bs{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ur*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class W_ extends lo{constructor(e,t,n=0,r=Math.PI/3,a=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=r,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new V_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const jc=new Ke,Lr=new le,Jo=new le;class j_ extends Bs{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new le(1,0,0),new le(-1,0,0),new le(0,0,1),new le(0,0,-1),new le(0,1,0),new le(0,-1,0)],this._cubeUps=[new le(0,1,0),new le(0,1,0),new le(0,1,0),new le(0,1,0),new le(0,0,1),new le(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lr),Jo.copy(n.position),Jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jo),n.updateMatrixWorld(),r.makeTranslation(-Lr.x,-Lr.y,-Lr.z),jc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jc)}}class X_ extends lo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class q_ extends Bs{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vs extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class K_ extends lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Y_ extends xr{constructor(e){super(e),this.isImageBitmapLoader=!0,this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=hr.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){hr.add(e,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){r&&r(l),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}class $_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xc(){return(typeof performance>"u"?Date:performance).now()}const Gs="\\[\\]\\.:\\/",Z_=new RegExp("["+Gs+"]","g"),Hs="[^"+Gs+"]",J_="[^"+Gs.replace("\\.","")+"]",Q_=/((?:WC+[\/:])*)/.source.replace("WC",Hs),ey=/(WCOD+)?/.source.replace("WCOD",J_),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hs),ny=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hs),iy=new RegExp("^"+Q_+ey+ty+ny+"$"),ry=["material","materials","bones","map"];class ay{constructor(e,t,n){const r=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z_,"")}static parseTrackName(e){const t=iy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const a=n.nodeName.substring(r+1);ry.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let o=0;o<a.length;o++){const s=a[o];if(s.name===t||s.uuid===t)return s;const l=n(s.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let a=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[n]===void 0)return;e=e[n]}if(c!==void 0){if(e[c]===void 0)return;e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;return}let s=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?s=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=ay;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class qc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));typeof window<"u"&&(window.__THREE__||(window.__THREE__=ws));const Kc={type:"change"},Qo={type:"start"},Yc={type:"end"};class Hf extends Pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new le,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(X){X.addEventListener("keydown",z),this._domElementKeyEvents=X},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",z),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Kc),n.update(),a=r.NONE},this.update=function(){const X=new le,de=new Cn().setFromUnitVectors(e.up,new le(0,1,0)),xe=de.clone().invert(),fe=new le,Le=new Cn,Pe=new le,_e=2*Math.PI;return function(){const Se=n.object.position;X.copy(Se).sub(n.target),X.applyQuaternion(de),s.setFromVector3(X),n.autoRotate&&a===r.NONE&&b(T()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ae=n.minAzimuthAngle,Oe=n.maxAzimuthAngle;return isFinite(Ae)&&isFinite(Oe)&&(Ae<-Math.PI?Ae+=_e:Ae>Math.PI&&(Ae-=_e),Oe<-Math.PI?Oe+=_e:Oe>Math.PI&&(Oe-=_e),Ae<=Oe?s.theta=Math.max(Ae,Math.min(Oe,s.theta)):s.theta=s.theta>(Ae+Oe)/2?Math.max(Ae,s.theta):Math.min(Oe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),X.setFromSpherical(s),X.applyQuaternion(xe),Se.copy(n.target).add(X),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||fe.distanceToSquared(n.object.position)>o||8*(1-Le.dot(n.object.quaternion))>o||Pe.distanceToSquared(n.target)>0?(n.dispatchEvent(Kc),fe.copy(n.object.position),Le.copy(n.object.quaternion),Pe.copy(n.target),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",I),n.domElement.removeEventListener("pointerdown",j),n.domElement.removeEventListener("pointercancel",ae),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ae),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",z),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new qc,l=new qc;let c=1;const u=new le;let d=!1;const f=new Fe,h=new Fe,m=new Fe,v=new Fe,g=new Fe,p=new Fe,y=new Fe,x=new Fe,S=new Fe,M=[],O={};function T(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function b(X){l.theta-=X}function _(X){l.phi-=X}const V=function(){const X=new le;return function(xe,fe){X.setFromMatrixColumn(fe,0),X.multiplyScalar(-xe),u.add(X)}}(),N=function(){const X=new le;return function(xe,fe){n.screenSpacePanning===!0?X.setFromMatrixColumn(fe,1):(X.setFromMatrixColumn(fe,0),X.crossVectors(n.object.up,X)),X.multiplyScalar(xe),u.add(X)}}(),F=function(){const X=new le;return function(xe,fe){const Le=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;X.copy(Pe).sub(n.target);let _e=X.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),V(2*xe*_e/Le.clientHeight,n.object.matrix),N(2*fe*_e/Le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(xe*(n.object.right-n.object.left)/n.object.zoom/Le.clientWidth,n.object.matrix),N(fe*(n.object.top-n.object.bottom)/n.object.zoom/Le.clientHeight,n.object.matrix)):n.enablePan=!1}}();function B(X){n.object.isPerspectiveCamera?c/=X:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*X)),n.object.updateProjectionMatrix(),d=!0):n.enableZoom=!1}function H(X){n.object.isPerspectiveCamera?c*=X:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/X)),n.object.updateProjectionMatrix(),d=!0):n.enableZoom=!1}function $(X){f.set(X.clientX,X.clientY)}function E(X){y.set(X.clientX,X.clientY)}function D(X){v.set(X.clientX,X.clientY)}function R(X){h.set(X.clientX,X.clientY),m.subVectors(h,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;b(2*Math.PI*m.x/de.clientHeight),_(2*Math.PI*m.y/de.clientHeight),f.copy(h),n.update()}function U(X){x.set(X.clientX,X.clientY),S.subVectors(x,y),S.y>0?B(L()):S.y<0&&H(L()),y.copy(x),n.update()}function A(X){g.set(X.clientX,X.clientY),p.subVectors(g,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(g),n.update()}function k(X){X.deltaY<0?H(L()):X.deltaY>0&&B(L()),n.update()}function K(X){let de=!1;switch(X.code){case n.keys.UP:X.ctrlKey||X.metaKey||X.shiftKey?_(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),de=!0;break;case n.keys.BOTTOM:X.ctrlKey||X.metaKey||X.shiftKey?_(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),de=!0;break;case n.keys.LEFT:X.ctrlKey||X.metaKey||X.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),de=!0;break;case n.keys.RIGHT:X.ctrlKey||X.metaKey||X.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),de=!0;break}de&&(X.preventDefault(),n.update())}function te(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const X=.5*(M[0].pageX+M[1].pageX),de=.5*(M[0].pageY+M[1].pageY);f.set(X,de)}}function re(){if(M.length===1)v.set(M[0].pageX,M[0].pageY);else{const X=.5*(M[0].pageX+M[1].pageX),de=.5*(M[0].pageY+M[1].pageY);v.set(X,de)}}function pe(){const X=M[0].pageX-M[1].pageX,de=M[0].pageY-M[1].pageY,xe=Math.sqrt(X*X+de*de);y.set(0,xe)}function ne(){n.enableZoom&&pe(),n.enablePan&&re()}function se(){n.enableZoom&&pe(),n.enableRotate&&te()}function me(X){if(M.length==1)h.set(X.pageX,X.pageY);else{const xe=ue(X),fe=.5*(X.pageX+xe.x),Le=.5*(X.pageY+xe.y);h.set(fe,Le)}m.subVectors(h,f).multiplyScalar(n.rotateSpeed);const de=n.domElement;b(2*Math.PI*m.x/de.clientHeight),_(2*Math.PI*m.y/de.clientHeight),f.copy(h)}function be(X){if(M.length===1)g.set(X.pageX,X.pageY);else{const de=ue(X),xe=.5*(X.pageX+de.x),fe=.5*(X.pageY+de.y);g.set(xe,fe)}p.subVectors(g,v).multiplyScalar(n.panSpeed),F(p.x,p.y),v.copy(g)}function Y(X){const de=ue(X),xe=X.pageX-de.x,fe=X.pageY-de.y,Le=Math.sqrt(xe*xe+fe*fe);x.set(0,Le),S.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),B(S.y),y.copy(x)}function P(X){n.enableZoom&&Y(X),n.enablePan&&be(X)}function q(X){n.enableZoom&&Y(X),n.enableRotate&&me(X)}function j(X){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(X.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",ae)),w(X),X.pointerType==="touch"?W(X):G(X))}function ee(X){n.enabled!==!1&&(X.pointerType==="touch"?Z(X):Q(X))}function ae(X){ie(X),M.length===0&&(n.domElement.releasePointerCapture(X.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",ae)),n.dispatchEvent(Yc),a=r.NONE}function G(X){let de;switch(X.button){case 0:de=n.mouseButtons.LEFT;break;case 1:de=n.mouseButtons.MIDDLE;break;case 2:de=n.mouseButtons.RIGHT;break;default:de=-1}switch(de){case Vn.DOLLY:if(n.enableZoom===!1)return;E(X),a=r.DOLLY;break;case Vn.ROTATE:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enablePan===!1)return;D(X),a=r.PAN}else{if(n.enableRotate===!1)return;$(X),a=r.ROTATE}break;case Vn.PAN:if(X.ctrlKey||X.metaKey||X.shiftKey){if(n.enableRotate===!1)return;$(X),a=r.ROTATE}else{if(n.enablePan===!1)return;D(X),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Qo)}function Q(X){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;R(X);break;case r.DOLLY:if(n.enableZoom===!1)return;U(X);break;case r.PAN:if(n.enablePan===!1)return;A(X);break}}function C(X){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(X.preventDefault(),n.dispatchEvent(Qo),k(X),n.dispatchEvent(Yc))}function z(X){n.enabled===!1||n.enablePan===!1||K(X)}function W(X){switch(ce(X),M.length){case 1:switch(n.touches.ONE){case Ii.ROTATE:if(n.enableRotate===!1)return;te(),a=r.TOUCH_ROTATE;break;case Ii.PAN:if(n.enablePan===!1)return;re(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(),a=r.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(Qo)}function Z(X){switch(ce(X),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;me(X),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;be(X),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(X),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;q(X),n.update();break;default:a=r.NONE}}function I(X){n.enabled!==!1&&X.preventDefault()}function w(X){M.push(X)}function ie(X){delete O[X.pointerId];for(let de=0;de<M.length;de++)if(M[de].pointerId==X.pointerId){M.splice(de,1);return}}function ce(X){let de=O[X.pointerId];de===void 0&&(de=new Fe,O[X.pointerId]=de),de.set(X.pageX,X.pageY)}function ue(X){const de=X.pointerId===M[0].pointerId?M[1]:M[0];return O[de.pointerId]}n.domElement.addEventListener("contextmenu",I),n.domElement.addEventListener("pointerdown",j),n.domElement.addEventListener("pointercancel",ae),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}const oy={class:"container"},sy={__name:"Demo",setup(i){let e,t,n,r,a;function o(){e=document.querySelector(".container"),t=new At(27,e.offsetWidth/e.offsetHeight,1,3500),t.position.z=2750,new Hf(t,e),n=new gs,n.fog=new Os(1052692,2e3,3500),n.add(new K_(16777215));const u=new vs(16777215,1.5);u.position.set(1,1,1),n.add(u);const d=new vs(16777215,4.5);d.position.set(0,-1,0),n.add(d);const f=new $t,h=16e4,m=[],v=[],g=[],p=new ze,y=600,x=y/2,S=100,M=S/2,O=new le,T=new le,L=new le,b=new le,_=new le;for(let F=0;F<h;F++){const B=Math.random()*y-x,H=Math.random()*y-x,$=Math.random()*y-x,E=B+Math.random()*S-M,D=H+Math.random()*S-M,R=$+Math.random()*S-M,U=B+Math.random()*S-M,A=H+Math.random()*S-M,k=$+Math.random()*S-M,K=B+Math.random()*S-M,te=H+Math.random()*S-M,re=$+Math.random()*S-M;m.push(E,D,R),m.push(U,A,k),m.push(K,te,re),O.set(E,D,R),T.set(U,A,k),L.set(K,te,re),b.subVectors(L,T),_.subVectors(O,T),b.cross(_),b.normalize();const pe=b.x,ne=b.y,se=b.z;v.push(pe,ne,se),v.push(pe,ne,se),v.push(pe,ne,se);const me=B/y+1.5,be=H/y+.5,Y=$/y+.5;p.setRGB(me,be,Y);const P=Math.random();g.push(p.r,p.g,p.b,P),g.push(p.r,p.g,p.b,P),g.push(p.r,p.g,p.b,P)}function V(){this.array=null}f.setAttribute("position",new Rt(m,3).onUpload(V)),f.setAttribute("normal",new Rt(v,3).onUpload(V)),f.setAttribute("color",new Rt(g,4).onUpload(V)),f.computeBoundingSphere();const N=new P_({color:14013909,specular:14013909,shininess:250,side:bn,vertexColors:!0,transparent:!1});a=new Et(f,N),n.add(a),r=new Is({antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(e.offsetWidth,e.offsetHeight),r.useLegacyLights=!1,e.appendChild(r.domElement),window.addEventListener("resize",s)}function s(){t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function l(){const u=Date.now()*.001;a.rotation.x=u*0,a.rotation.y=u*.25,r.render(n,t)}function c(){requestAnimationFrame(c),l()}return ea(()=>{o(),c()}),(u,d)=>(Ri(),mr("div",oy))}},Vf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){}dispose(){}}const ly=new oo(-1,1,1,-1,0,1),Vs=new $t;Vs.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3));Vs.setAttribute("uv",new Rt([0,2,0,0,2,0],2));class Wf{constructor(e){this._mesh=new Et(Vs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ly)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cy extends ia{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qa.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class $c extends ia{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class uy extends ia{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cy(Vf),this.copyPass.material.blending=Kn,this.clock=new $_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}$c!==void 0&&(o instanceof $c?n=!0:o instanceof uy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fy extends ia{constructor(e,t,n,r,a){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const hy={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class pr extends ia{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256),this.clearColor=new ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new xn(a,o,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new xn(a,o,{type:$n});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new xn(a,o,{type:$n});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),o=Math.round(o/2)}const s=hy;this.highPassUniforms=Qa.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new Fe(a,o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new le(1,1,1),new le(1,1,1),new le(1,1,1),new le(1,1,1),new le(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Vf;this.copyUniforms=Qa.clone(u.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:os,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ze,this.oldClearAlpha=1,this.basic=new qn,this.fsQuad=new Wf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,r),this.renderTargetsVertical[a].setSize(n,r),this.separableBlurMaterials[a].uniforms.texSize.value=new Fe(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=pr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),s=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new Ot({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}pr.BlurDirectionX=new Fe(1,0);pr.BlurDirectionY=new Fe(0,1);function Zc(i,e){if(e===Hm)return i;if(e===ds||e===mf){let t=i.getIndex();if(t===null){const o=[],s=i.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return i}const n=t.count-2,r=[];if(e===ds)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3;const a=i.clone();return a.setIndex(r),a.clearGroups(),a}else return i}class py extends xr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Ly(t)})}load(e,t,n,r){const a=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=xs.extractUrlBase(e),this.manager.itemStart(e);const s=function(c){r&&r(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new Gf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,o,function(u){t(u),a.manager.itemEnd(e)},s)}catch(u){s(u)}},n,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let a;const o={},s={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jf){try{o[et.KHR_BINARY_GLTF]=new Dy(e)}catch(d){r&&r(d);return}a=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jy(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);s[d.name]=d,o[d.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const d=a.extensionsUsed[u],f=a.extensionsRequired||[];switch(d){case et.KHR_MATERIALS_UNLIT:o[d]=new by;break;case et.KHR_DRACO_MESH_COMPRESSION:o[d]=new Iy(a,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[d]=new Oy;break;case et.KHR_MESH_QUANTIZATION:o[d]=new Uy;break;default:f.indexOf(d)>=0&&s[d]}}c.setExtensions(o),c.setPlugins(s),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,a){n.parse(e,t,r,a)})}}function my(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gy{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let c;const u=new ze(16777215);l.color!==void 0&&u.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new X_(u),c.distance=d;break;case"spot":c=new W_(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],s=(a.extensions&&a.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return n._getNodeRef(t.cache,s,l)})}}class by{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(e,t,n){const r=[];e.color=new ze(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}a.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",a.baseColorTexture,He))}return Promise.all(r)}}class vy{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class xy{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const s=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(s,s)}return Promise.all(a)}}class _y{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(a)}}class yy{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,He)),o.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class My{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(a)}}class Sy{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const s=o.attenuationColor||[1,1,1];return t.attenuationColor=new ze(s[0],s[1],s[2]),Promise.all(a)}}class Ey{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=r.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class Ty{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const s=o.specularColorFactor||[1,1,1];return t.specularColor=new ze(s[0],s[1],s[2]),o.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,He)),Promise.all(a)}}class wy{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const a=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(a)}}class Ay{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const a=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,o)}}class Cy{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=r.images[o.source];let l=n.textureLoader;if(s.uri){const c=n.options.manager.getHandler(s.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ry{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,a=r.textures[e];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=r.images[o.source];let l=n.textureLoader;if(s.uri){const c=n.options.manager.getHandler(s.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Py{constructor(e){this.name=et.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],a=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(s,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,r.mode,r.filter),h})})}else return null}}class Ly{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==nn.TRIANGLES&&c.mode!==nn.TRIANGLE_STRIP&&c.mode!==nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,s=[],l={};for(const c in o)s.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const m of d){const v=new Ke,g=new le,p=new Cn,y=new le(1,1,1),x=new w_(m.geometry,m.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),x.setMatrixAt(S,v.compose(g,p,y));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,l[S]);dt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const jf="glTF",Dr=12,Jc={JSON:1313821514,BIN:5130562};class Dy{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Dr,a=new DataView(e,Dr);let o=0;for(;o<r;){const s=a.getUint32(o,!0);o+=4;const l=a.getUint32(o,!0);if(o+=4,l===Jc.JSON){const c=new Uint8Array(e,Dr+o,s);this.content=n.decode(c)}else if(l===Jc.BIN){const c=Dr+o;this.body=e.slice(c,c+s)}o+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Iy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,s={},l={},c={};for(const u in o){const d=_s[u]||u.toLowerCase();s[d]=o[u]}for(const u in e.attributes){const d=_s[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],h=rr[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(d){r.decodeDracoFile(u,function(f){for(const h in f.attributes){const m=f.attributes[h],v=l[h];v!==void 0&&(m.normalized=v)}d(f)},s,c)})})}}class Oy{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Uy{constructor(){this.name=et.KHR_MESH_QUANTIZATION}}class Xf extends na{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[a+o];return t}interpolate_(e,t,n,r){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=s*2,c=s*3,u=r-t,d=(n-t)/u,f=d*d,h=f*d,m=e*c,v=m-c,g=-2*h+3*f,p=h-f,y=1-g,x=p-f+d;for(let S=0;S!==s;S++){const M=o[v+S+s],O=o[v+S+l]*u,T=o[m+S+s],L=o[m+S]*u;a[S]=y*M+x*O+g*T+p*L}return a}}const Fy=new Cn;class ky extends Xf{interpolate_(e,t,n,r){const a=super.interpolate_(e,t,n,r);return Fy.fromArray(a).normalize().toArray(a),a}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qc={9728:St,9729:Gt,9984:us,9985:lf,9986:qa,9987:Ai},eu={33071:an,33648:$a,10497:sr},es={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_s={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ny={CUBICSPLINE:void 0,LINEAR:cr,STEP:Kr},ts={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),i.DefaultMaterial}function vi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(i,e){e.extras!==void 0&&typeof e.extras=="object"&&Object.assign(i.userData,e.extras)}function By(i,e,t){let n=!1,r=!1,a=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(a=!0),n&&r&&a)break}if(!n&&!r&&!a)return Promise.resolve(i);const o=[],s=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;s.push(f)}if(a){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=d),a&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Gy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}}}function Hy(i){let e;const t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ns(t.attributes):e=i.indices+":"+ns(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ns(i.targets[n]);return e}function ns(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ys(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wy=new Ke;class jy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new my,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,a=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&a<98?this.textureLoader=new tn(this.options.manager):this.textureLoader=new Y_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const s={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};vi(a,s,r),oi(s,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){e(s)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,a=t.length;r<a;r++){const o=t[r].joints;for(let s=0,l=o.length;s<l;s++)e[o[s]].isBone=!0}for(let r=0,a=e.length;r<a;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),a=(o,s)=>{const l=this.associations.get(o);l!=null&&this.associations.set(s,l);for(const[c,u]of o.children.entries())a(u,s.children[c])};return a(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const a=e(t[r]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":r=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(a,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(a,o){n.load(xs.resolveURL(t.uri,r.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=es[r.type],s=rr[r.componentType],l=r.normalized===!0,c=new s(r.count*o);return Promise.resolve(new zt(c,o,l))}const a=[];return r.bufferView!==void 0?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),r.sparse!==void 0&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(o){const s=o[0],l=es[r.type],c=rr[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let v,g;if(h&&h!==d){const p=Math.floor(f/h),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(y);x||(v=new c(s,p*h,r.count*h/u),x=new __(v,h/u),t.cache.add(y,x)),g=new Us(x,l,f%h/u,m)}else s===null?v=new c(r.count*l):v=new c(s,f,r.count*l),g=new zt(v,l,m);if(r.sparse!==void 0){const p=es.SCALAR,y=rr[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,M=new y(o[1],x,r.sparse.count*p),O=new c(o[2],S,r.sparse.count*l);s!==null&&(g=new zt(g.array.slice(),g.itemSize,g.normalized));for(let T=0,L=M.length;T<L;T++){const b=M[T];if(g.setX(b,O[T*l]),l>=2&&g.setY(b,O[T*l+1]),l>=3&&g.setZ(b,O[T*l+2]),l>=4&&g.setW(b,O[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,o=t.images[a];let s=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(s=l)}return this.loadTextureImage(e,a,s)}loadTextureImage(e,t,n){const r=this,a=this.json,o=a.textures[e],s=a.images[t],l=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||s.name||"",u.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(u.name=s.uri);const f=(a.samplers||{})[o.sampler]||{};return u.magFilter=Qc[f.magFilter]||Gt,u.minFilter=Qc[f.minFilter]||Ai,u.wrapS=eu[f.wrapS]||sr,u.wrapT=eu[f.wrapT]||sr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],s=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=s.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){const g=new Ct(v);g.needsUpdate=!0,f(g)}),t.load(xs.resolveURL(d,a.path),m,void 0,h)})}).then(function(d){return c===!0&&s.revokeObjectURL(l),d.userData.mimeType=o.mimeType||Vy(o.uri),d}).catch(function(d){throw d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const a=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),a.extensions[et.KHR_TEXTURE_TRANSFORM]){const s=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const l=a.associations.get(o);o=a.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,s),a.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const s="PointsMaterial:"+n.uuid;let l=this.cache.get(s);l||(l=new kf,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(s,l)),n=l}else if(e.isLine){const s="LineBasicMaterial:"+n.uuid;let l=this.cache.get(s);l||(l=new Ff,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(s,l)),n=l}if(r||a||o){let s="ClonedMaterial:"+n.uuid+":";r&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),o&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=n.clone(),a&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return zs}loadMaterial(e){const t=this,n=this.json,r=this.extensions,a=n.materials[e];let o;const s={},l=a.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){const d=r[et.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(s,a,t))}else{const d=a.pbrMetallicRoughness||{};if(s.color=new ze(1,1,1),s.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;s.color.fromArray(f),s.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(s,"map",d.baseColorTexture,He)),s.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,s.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(s,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(s,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,s)})))}a.doubleSided===!0&&(s.side=bn);const u=a.alphaMode||ts.OPAQUE;if(u===ts.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===ts.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new Fe(1,1),a.normalTexture.scale!==void 0)){const d=a.normalTexture.scale;s.normalScale.set(d,d)}return a.occlusionTexture!==void 0&&o!==qn&&(c.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==qn&&(s.emissive=new ze().fromArray(a.emissiveFactor)),a.emissiveTexture!==void 0&&o!==qn&&c.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,He)),Promise.all(c).then(function(){const d=new o(s);return a.name&&(d.name=a.name),oi(d,a),t.associations.set(d,{materials:e}),a.extensions&&vi(r,d,a),d})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function a(s){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(l){return tu(l,s,t)})}const o=[];for(let s=0,l=e.length;s<l;s++){const c=e[s],u=Hy(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=a(c):f=tu(new $t,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,a=n.meshes[e],o=a.primitives,s=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?zy(this.cache):this.getDependency("material",o[l].material);s.push(u)}return s.push(t.loadGeometries(o)),Promise.all(s).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,m=u.length;h<m;h++){const v=u[h],g=o[h];let p;const y=c[h];if(g.mode===nn.TRIANGLES||g.mode===nn.TRIANGLE_STRIP||g.mode===nn.TRIANGLE_FAN||g.mode===void 0)p=a.isSkinnedMesh===!0?new M_(v,y):new Et(v,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===nn.TRIANGLE_STRIP?p.geometry=Zc(p.geometry,mf):g.mode===nn.TRIANGLE_FAN&&(p.geometry=Zc(p.geometry,ds));else if(g.mode===nn.LINES)p=new A_(v,y);else if(g.mode===nn.LINE_STRIP)p=new ks(v,y);else if(g.mode===nn.LINE_LOOP)p=new C_(v,y);else if(g.mode===nn.POINTS)p=new R_(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Gy(p,a),p.name=t.createUniqueName(a.name||"mesh_"+e),oi(p,a),g.extensions&&vi(r,p,g),t.assignFinalMaterial(p),d.push(p)}for(let h=0,m=d.length;h<m;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return a.extensions&&vi(r,d[0],a),d[0];const f=new li;a.extensions&&vi(r,f,a),t.associations.set(f,{meshes:e});for(let h=0,m=d.length;h<m;h++)f.add(d[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(r)return n.type==="perspective"?t=new At(pg.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new oo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,a=t.joints.length;r<a;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const a=r.pop(),o=r,s=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){s.push(d);const f=new Ke;a!==null&&f.fromArray(a.array,c*16),l.push(f)}}return new Fs(s,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,o=[],s=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const h=r.channels[d],m=r.samplers[h.sampler],v=h.target,g=v.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,y=r.parameters!==void 0?r.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],m=d[2],v=d[3],g=d[4],p=[];for(let y=0,x=f.length;y<x;y++){const S=f[y],M=h[y],O=m[y],T=v[y],L=g[y];if(S===void 0)continue;S.updateMatrix&&(S.updateMatrix(),S.matrixAutoUpdate=!0);const b=n._createAnimationTracks(S,M,O,T,L);if(b)for(let _=0;_<b.length;_++)p.push(b[_])}return new F_(a,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(a){const o=n._getNodeRef(n.meshCache,r.mesh,a);return r.weights!==void 0&&o.traverse(function(s){if(s.isMesh)for(let l=0,c=r.weights.length;l<c;l++)s.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],a=n._loadNodeShallow(e),o=[],s=r.children||[];for(let c=0,u=s.length;c<u;c++)o.push(n.getDependency("node",s[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([a,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,Wy)});for(let h=0,m=d.length;h<m;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],o=a.name?r.createUniqueName(a.name):"",s=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&s.push(l),a.camera!==void 0&&s.push(r.getDependency("camera",a.camera).then(function(c){return r._getNodeRef(r.cameraCache,a.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){s.push(c)}),this.nodeCache[e]=Promise.all(s).then(function(c){let u;if(a.isBone===!0?u=new Uf:c.length>1?u=new li:c.length===1?u=c[0]:u=new dt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(a.name&&(u.userData.name=a.name,u.name=o),oi(u,a),a.extensions&&vi(n,u,a),a.matrix!==void 0){const d=new Ke;d.fromArray(a.matrix),u.applyMatrix4(d)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,a=new li;n.name&&(a.name=r.createUniqueName(n.name)),oi(a,n),n.extensions&&vi(t,a,n);const o=n.nodes||[],s=[];for(let l=0,c=o.length;l<c;l++)s.push(r.getDependency("node",o[l]));return Promise.all(s).then(function(l){for(let u=0,d=l.length;u<d;u++)a.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of r.associations)(f instanceof _n||f instanceof Ct)&&d.set(f,h);return u.traverse(f=>{const h=r.associations.get(f);h!=null&&d.set(f,h)}),d};return r.associations=c(a),a})}_createAnimationTracks(e,t,n,r,a){const o=[],s=e.name?e.name:e.uuid,l=[];ai[a.path]===ai.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(s);let c;switch(ai[a.path]){case ai.weights:c=fr;break;case ai.rotation:c=Ci;break;case ai.position:case ai.scale:default:switch(n.itemSize){case 1:c=fr;break;case 2:case 3:c=Zr;break}break}const u=r.interpolation!==void 0?Ny[r.interpolation]:cr,d=this._getArrayFromAccessor(n);for(let f=0,h=l.length;f<h;f++){const m=new c(l[f]+"."+ai[a.path],t.array,d,u);u==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ys(t.constructor),r=new Float32Array(t.length);for(let a=0,o=t.length;a<o;a++)r[a]=t[a]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Ci?ky:Xf;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Xy(i,e,t){const n=e.attributes,r=new Jn;if(n.POSITION!==void 0){const s=t.json.accessors[n.POSITION],l=s.min,c=s.max;if(l!==void 0&&c!==void 0){if(r.set(new le(l[0],l[1],l[2]),new le(c[0],c[1],c[2])),s.normalized){const u=ys(rr[s.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else return}else return;const a=e.targets;if(a!==void 0){const s=new le,l=new le;for(let c=0,u=a.length;c<u;c++){const d=a[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,m=f.max;if(h!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),f.normalized){const v=ys(rr[f.componentType]);l.multiplyScalar(v)}s.max(l)}}}r.expandByVector(s)}i.boundingBox=r;const o=new Rn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function tu(i,e,t){const n=e.attributes,r=[];function a(o,s){return t.getDependency("accessor",o).then(function(l){i.setAttribute(s,l)})}for(const o in n){const s=_s[o]||o.toLowerCase();s in i.attributes||r.push(a(n[o],s))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(s){i.setIndex(s)});r.push(o)}return oi(i,e),Xy(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?By(i,e.targets,t):i})}var qy=function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?e:i,a,o=WebAssembly.instantiate(s(r),{}).then(function(p){a=p.instance,a.exports.__wasm_call_ctors()});function s(p){for(var y=new Uint8Array(p.length),x=0;x<p.length;++x){var S=p.charCodeAt(x);y[x]=S>96?S-97:S>64?S-39:S+4}for(var M=0,x=0;x<p.length;++x)y[M++]=y[x]<60?n[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,M)}function l(p,y,x,S,M,O){var T=a.exports.sbrk,L=x+3&-4,b=T(L*S),_=T(M.length),V=new Uint8Array(a.exports.memory.buffer);V.set(M,_);var N=p(b,x,S,_,M.length);if(N==0&&O&&O(b,L,S),y.set(V.subarray(b,b+x*S)),T(b-T(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function h(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(x){var S=x.data;y.pending-=S.count,y.requests[S.id][S.action](S.value),delete y.requests[S.id]},y}function m(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s(r))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+g.toString(),x=new Blob([y],{type:"text/javascript"}),S=URL.createObjectURL(x),M=0;M<p;++M)d[M]=h(S);URL.revokeObjectURL(S)}function v(p,y,x,S,M){for(var O=d[0],T=1;T<d.length;++T)d[T].pending<O.pending&&(O=d[T]);return new Promise(function(L,b){var _=new Uint8Array(x),V=f++;O.pending+=p,O.requests[V]={resolve:L,reject:b},O.object.postMessage({id:V,count:p,size:y,source:_,mode:S,filter:M},[_.buffer])})}function g(p){o.then(function(){var y=p.data;try{var x=new Uint8Array(y.count*y.size);l(a.exports[y.mode],x,y.count,y.size,y.source,a.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(S){self.postMessage({id:y.id,count:y.count,action:"reject",value:S})}})}return{ready:o,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,y,x,S,M){l(a.exports.meshopt_decodeVertexBuffer,p,y,x,S,a.exports[c[M]])},decodeIndexBuffer:function(p,y,x,S){l(a.exports.meshopt_decodeIndexBuffer,p,y,x,S)},decodeIndexSequence:function(p,y,x,S){l(a.exports.meshopt_decodeIndexSequence,p,y,x,S)},decodeGltfBuffer:function(p,y,x,S,M,O){l(a.exports[u[M]],p,y,x,S,a.exports[c[O]])},decodeGltfBufferAsync:function(p,y,x,S,M){return d.length>0?v(p,y,x,u[S],c[M]):o.then(function(){var O=new Uint8Array(p*y);return l(a.exports[u[S]],O,p,y,x,a.exports[c[M]]),O})}}}();const Ky={class:"world"},nu=`
  varying vec2 vUv;
  varying vec3 camPos;
  varying vec3 eyeVector;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    camPos = cameraPosition;
    vNormal = normal;
    vec4 worldPosition = modelViewMatrix * vec4( position, 1.0);
    eyeVector = normalize(worldPosition.xyz - abs(cameraPosition));
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`,Yy=`
	varying vec2 vUv;
  uniform sampler2D skullrender;
  uniform sampler2D cardtemplate;
  uniform sampler2D backtexture;
  uniform sampler2D noiseTex;
  uniform sampler2D color;
  uniform sampler2D noise;
  uniform vec4 resolution;
  varying vec3 camPos;
  varying vec3 eyeVector;
  varying vec3 vNormal;

  float Fresnel(vec3 eyeVector, vec3 worldNormal) {
    return pow( 1.0 + dot( eyeVector, worldNormal), 1.80 );
  }

  void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy ;
    vec4 temptex = texture2D( cardtemplate, vUv);
    vec4 skulltex = texture2D( skullrender, uv - 0.5 );
    gl_FragColor = temptex;
    float f = Fresnel(eyeVector, vNormal);
    vec4 noisetex = texture2D( noise, mod(vUv*2.,1.));
    if(gl_FragColor.g >= .5 && gl_FragColor.r < 0.6){
      gl_FragColor = f + skulltex;
      gl_FragColor += noisetex/5.;

    } else {
      vec4 bactex = texture2D( backtexture, vUv);
      float tone = pow(dot(normalize(camPos), normalize(bactex.rgb)), 1.);
      vec4 colortex = texture2D( color, vec2(tone,0.));

      //sparkle code, dont touch this!
      vec2 uv2 = vUv;
      vec3 pixeltex = texture2D(noiseTex,mod(uv*5.,1.)).rgb;      
      float iTime = 1.*0.004;
      uv.y += iTime / 10.0;
      uv.x -= (sin(iTime/10.0)/2.0);
      uv2.y += iTime / 14.0;
      uv2.x += (sin(iTime/10.0)/9.0);
      float result = 0.0;
      result += texture2D(noiseTex, mod(uv*4.,1.) * 0.6 + vec2(iTime*-0.003)).r;
      result *= texture2D(noiseTex, mod(uv2*4.,1.) * 0.9 + vec2(iTime*+0.002)).b;
      result = pow(result, 10.0);
      gl_FragColor *= colortex;
      gl_FragColor += vec4(sin((tone + vUv.x + vUv.y/10.)*10.))/4.;
      // gl_FragColor += vec4(108.0)*result;

    }

    gl_FragColor.a = temptex.a;
  }
`,$y=`
	varying vec2 vUv;
  uniform sampler2D skullrender;
  uniform sampler2D cardtemplate;
  uniform sampler2D backtexture;
  uniform sampler2D noiseTex;
  uniform sampler2D color;
  uniform sampler2D noise;
  uniform vec4 resolution;
  varying vec3 camPos;
  varying vec3 eyeVector;
  varying vec3 vNormal;

  float Fresnel(vec3 eyeVector, vec3 worldNormal) {
    return pow( 1.0 + dot( eyeVector, worldNormal), 1.80 );
  }

  void main() {
    vec2 uv = gl_FragCoord.xy/resolution.xy ;
    vec4 temptex = texture2D( cardtemplate, vUv);
    vec4 skulltex = texture2D( skullrender, vUv );
    gl_FragColor = temptex;
    vec4 noisetex = texture2D( noise, mod(vUv*1.,1.));
    float f = Fresnel(eyeVector, vNormal);

    vec2 uv2 = vUv;
    vec3 pixeltex = texture2D(noiseTex,mod(uv*5.,2.)).rgb;      
    float iTime = 1.*0.004;
    uv.y += iTime / 10.0;
    uv.x -= (sin(iTime/10.0)/2.0);
    uv2.y += iTime / 14.0;
    uv2.x += (sin(iTime/10.0)/9.0);
    float result = 0.0;
    result += texture2D(noiseTex, mod(uv*4.,1.) * 0.6 + vec2(iTime*-0.003)).r;
    result *= texture2D(noiseTex, mod(uv2*4.,1.) * 0.9 + vec2(iTime*+0.002)).b;
    result = pow(result, 10.0);


    vec4 bactex = texture2D( backtexture, vUv);
    float tone = pow(dot(normalize(camPos), normalize(bactex.rgb)), 1.);
    vec4 colortex = texture2D( color, vec2(tone,0.));
    if(gl_FragColor.g >= .5 && gl_FragColor.r < 0.6){
      float tone = pow(dot(normalize(camPos), normalize(skulltex.rgb)), 1.);
      vec4 colortex2 = texture2D( color, vec2(tone,0.));
      if(skulltex.a > 0.2){
        gl_FragColor = colortex;
        // gl_FragColor += vec4(108.0)*result;
        // gl_FragColor += vec4(sin((tone + vUv.x + vUv.y/1.)*10.))/8.;
      } else {
        gl_FragColor = vec4(0.) + f;
        gl_FragColor += noisetex/1.;
      }
      gl_FragColor += noisetex/1.;
    
    } else {
      //sparkle code, dont touch this!    
      gl_FragColor *= colortex;
      gl_FragColor += vec4(sin((tone + vUv.x + vUv.y/10.)*10.))/8.;
    }

  }
`,Zy=`
      varying vec3 vNormal;
      varying vec3 camPos;
      varying vec3 vPosition;
      varying vec2 vUv;
      varying vec3 eyeVector;

      void main() {
        vNormal = normal;
        vUv = uv;
        camPos = cameraPosition;
        vPosition = position;
        vec4 worldPosition = modelViewMatrix * vec4( position, 1.0);
        eyeVector = normalize(worldPosition.xyz - cameraPosition);
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
`,Jy=`
      #define NUM_OCTAVES 5
      uniform vec4 resolution;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform float time;
      varying vec3 camPos;
      varying vec2 vUv;
      uniform vec3 color1;
      uniform vec3 color0;
      varying vec3 eyeVector;

      
      float rand(vec2 n) {
        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
      }

      float noise(vec2 p){
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
          mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
          mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
      }

      float fbm(vec2 x) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100);
        // Rotate to reduce axial bias
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < NUM_OCTAVES; ++i) {
          v += a * noise(x);
          x = rot * x * 2.0 + shift;
          a *= 0.5;
        }
        return v;
      }

      float setOpacity(float r, float g, float b) {
        float tone = (r + g + b) / 3.0;
        float alpha = 1.0;
        if(tone<0.69) {
          alpha = 0.0;
        }
        return alpha;
      }

      vec3 rgbcol(float r, float g, float b) {
        return vec3(r/255.0,g/255.0,b/255.0);
      }

      float Fresnel(vec3 eyeVector, vec3 worldNormal) {
        return pow( 1.0 + dot( eyeVector, worldNormal), 3.0 );
      }
     
      void main() {
        vec2 olduv = gl_FragCoord.xy/resolution.xy ;
        float f = Fresnel(eyeVector, vNormal);
        float gradient2 = (f)*(.3 - vPosition.y) ;
        float scale = 8.;
        // olduv *= 0.5;
        // olduv.y -= 0.5; 
        olduv.y = olduv.y - time;
        vec2 p = olduv*scale;
        float noise = fbm( p + time );
        
        vec2 uv = gl_FragCoord.xy/resolution.xy ; 
        //  uv = normalize( vNormal ).xy ; 


        vec3 newCam = vec3(0.,5.,10.);
        float gradient = dot(.0 -  normalize( newCam ), normalize( vNormal )) ;

        vec3 viewDirectionW = normalize(camPos - vPosition);
        float fresnelTerm = dot(viewDirectionW, vNormal);  
        fresnelTerm = clamp( 1. - fresnelTerm, 0., 1.) ;

        vec3 color = vec3(noise) + gradient;
        vec3 color2 = color - 0.2;


        float noisetone = setOpacity(color.r,color.g,color.b);
        float noisetone2 = setOpacity(color2.r,color2.g,color2.b);



        vec4 backColor = vec4(color, 1.);
        backColor.rgb = rgbcol(color0.r,color0.g,color0.b)*noisetone;
        // backColor.a = noisetone;

        vec4 frontColor = vec4(color2, 1.);
        frontColor.rgb = rgbcol(color1.r,color1.g,color1.b)*noisetone;
        // frontColor.a = noisetone2;

        if(noisetone2>0.0){
          // show first color
          gl_FragColor = frontColor;
        } else {
          // show 2nd color
          gl_FragColor = backColor;
        }
      }

`,Qy={__name:"Card",setup(i){var e="/images/cardtemplateback4.png",t="/images/cardtemplate3.png",n="/images/flower31.png",r="/images/noise21.png",a="/images/Tiger.png",o="/images/color11.png",s="/images/color3.jpg",l="/images/skull4.glb",c="/images/rgbnoise2.png",u,d,f,h,m,v,g,p,y,x,S,M,O,T={exposure:1.9,bloomStrength:.7,bloomThreshold:1.9,bloomRadius:1.29,color0:[Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*99)],color1:[0,0,170],color2:[0,150,255],isanimate:!1};function L(){v=document.querySelector(".world"),f=new At(30,v.offsetWidth/v.offsetHeight,1,1e4),f.position.z=80,h=new At(30,v.offsetWidth/v.offsetHeight,1,1e4),h.position.z=30,h.position.y=-3.5,u=new gs,d=new gs,m=new Is({antialias:!0,autoSize:!0}),m.setPixelRatio(2),m.setSize(v.offsetWidth,v.offsetHeight),m.autoClear=!1,m.shadowMap.type=nf,m.interpolateneMapping=of,y=new Hf(f,m.domElement),y.enableZoom=!0,y.maxPolarAngle=Math.PI/2,y.minPolarAngle=Math.PI/2,y.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},y.update(),document.querySelector(".world").appendChild(m.domElement);var U=new fy(d,h);x=new pr(new Fe(v.offsetWidth,v.offsetHeight),.7,.4,.85),S=new dy(m),S.renderToScreen=!1,S.addPass(U),S.addPass(x)}function b(){const U=document.querySelector(".world");var A=new $r(20,30);g=new Ot({uniforms:{cardtemplate:{type:"t",value:new tn().load(e)},backtexture:{type:"t",value:new tn().load(s)},noise:{type:"t",value:new tn().load(r)},skullrender:{type:"t",value:S.readBuffer.texture},resolution:{value:new Fe(U.offsetWidth,U.offsetHeight)},noiseTex:{type:"t",value:new tn().load(c)},color:{type:"t",value:new tn().load(o)}},fragmentShader:Yy,vertexShader:nu,transparent:!0,depthWrite:!1}),M=new Et(A,g),u.add(M)}function _(){const U=document.querySelector(".world");var A=new $r(20,30);p=new Ot({uniforms:{cardtemplate:{type:"t",value:new tn().load(t)},backtexture:{type:"t",value:new tn().load(s)},noise:{type:"t",value:new tn().load(a)},skullrender:{type:"t",value:new tn().load(n)},resolution:{value:new Fe(U.offsetWidth,U.offsetHeight)},noiseTex:{type:"t",value:new tn().load(c)},color:{type:"t",value:new tn().load(o)}},fragmentShader:$y,vertexShader:nu,transparent:!0,depthWrite:!1}),O=new Et(A,p),O.rotation.set(0,Math.PI,0),u.add(O)}var V,N,F,B,H=new li;function $(){const U=document.querySelector(".world");B=new Ot({uniforms:{time:{type:"f",value:.1},color1:{value:new le(...T.color1)},color0:{value:new le(...T.color0)},resolution:{value:new Fe(U.offsetWidth,U.offsetHeight)}},fragmentShader:Jy,vertexShader:Zy,depthWrite:!1});var A=new Ns(.1,64,64);F=new qn,F.color.setRGB(...T.color2),V=new Et(A,F),N=new Et(A,F),V.position.set(-2.2,-2.2,-3.6),N.position.set(2.2,-2.2,-3.6),H=new dt,H.add(V),H.add(N);var k=new py;k.setMeshoptDecoder(qy),k.load(l,function(K){K.scene.position.set(0,0,-7),K.scene.rotation.set(Math.PI,0,Math.PI),K.scene.children.forEach((te,re)=>{te.traverse(function(pe){pe.material=B}),K.scene.scale.set(8,8,8),H.add(K.scene),d.add(H)})})}new Ke;function E(U){H.rotation.set(-f.rotation._x,-f.rotation._y,0),x.threshold=T.bloomThreshold,x.strength=T.bloomStrength,x.radius=T.bloomRadius,B&&(B.uniforms.time.value=U/4e3,B.uniforms.color1.value=new le(...T.color1),B.uniforms.color0.value=new le(...T.color0),N.material.color.setRGB(...T.color2),V.material.color.setRGB(...T.color2))}function D(U){requestAnimationFrame(D),E(U),S.render(),m.render(u,f)}function R(){const U=document.querySelector(".world");f.aspect=U.offsetWidth/U.offsetHeight,f.updateProjectionMatrix(),M.material.uniforms.resolution.value=new Fe(U.offsetWidth,U.offsetHeight),B.uniforms.resolution.value=new Fe(U.offsetWidth,U.offsetHeight),m.setPixelRatio(2),m.setSize(U.offsetWidth,U.offsetHeight)}return ea(()=>{L(),b(),_(),$(),D()}),window.addEventListener("resize",R,!1),(U,A)=>(Ri(),mr("div",Ky))}},eM=Hd(Qy,[["__scopeId","data-v-c8b21558"]]),tM={__name:"echart",setup(i){Sh([Fh,kh,Eh,Th,Nh,zh,Oh,Bh,wh,Gh]);const e=Ze({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:"Gradient Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(255, 0, 135)"},{offset:1,color:"rgb(135, 0, 157)"}])},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}])},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]});return Vd({color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:"Gradient Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(255, 0, 135)"},{offset:1,color:"rgb(135, 0, 157)"}])},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new En(0,0,0,1,[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}])},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]}),(t,n)=>(Ri(),Ah(Tn(Uh),{class:"chart",option:e.value,autoresize:""},null,8,["option"]))}},nM={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function iM(i,e){return Ri(),mr("svg",nM,e[0]||(e[0]=[Kt("path",{fill:"currentColor",d:"M18.67 17.63c-3.8 2.8-6.12.4-6.67 0c-.66.49-2.92 2.76-6.67 0C3.43 19.03 2.65 19 2 19v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0a6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5 0-3.33-1.37m.66-5.63H22v-2h-2.67C17.5 10 16 8.5 16 6.67c0-1.02.38-1.74 1.09-3.34c-1.37-.21-2-.33-3.09-.33C7.36 3 2.15 8.03 2 14.5v2c1.16 0 2.3-.32 3.33-.93a6.535 6.535 0 0 0 6.67 0a6.535 6.535 0 0 0 6.67 0c1.03.61 2.17.93 3.33.93v-2c-.66 0-1.5 0-3.33-1.37c-3.8 2.8-6.12.4-6.67 0c-.9.67-.54.41-.91.63c-.7-.94-1.09-2.06-1.09-3.26c0-2.58 1.77-4.74 4.21-5.33c-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12"},null,-1)]))}const rM={name:"mdi-tsunami",render:iM},aM={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function oM(i,e){return Ri(),mr("svg",aM,e[0]||(e[0]=[Kt("path",{fill:"currentColor",d:"M1.001 3h4l7 12l7-12h4l-11 19zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3z"},null,-1)]))}const sM={name:"ri-vuejs-fill",render:oM},lM={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"};function cM(i,e){return Ri(),mr("svg",lM,e[0]||(e[0]=[Ch('<g stroke="currentColor" stroke-linecap="round" stroke-width="2"><path fill="currentColor" fill-opacity="0" stroke-dasharray="34" stroke-dashoffset="34" d="M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="34;0"></animate><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></animate></path><g fill="none" stroke-dasharray="2" stroke-dashoffset="2"><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></animate></path><path d="M0 0"><animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></animate><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></animate></path><animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></g></g>',1)]))}const uM={name:"line-md-sunny-filled-loop",render:cM};function dM(i,e,t){ea(()=>i.addEventListener(e,t)),Ss(()=>i.removeEventListener(e,t))}function fM(){const i=Ze(0),e=Ze(0);return dM(window,"mousemove",t=>{i.value=t.pageX,e.value=t.pageY}),{x:i,y:e}}var qf=(i=>(i.transparent="rgba(0,0,0,0)",i.black="#000000",i.silver="#C0C0C0",i.gray="#808080",i.white="#FFFFFF",i.maroon="#800000",i.red="#FF0000",i.purple="#800080",i.fuchsia="#FF00FF",i.green="#008000",i.lime="#00FF00",i.olive="#808000",i.yellow="#FFFF00",i.navy="#000080",i.blue="#0000FF",i.teal="#008080",i.aqua="#00FFFF",i.aliceblue="#f0f8ff",i.antiquewhite="#faebd7",i.aquamarine="#7fffd4",i.azure="#f0ffff",i.beige="#f5f5dc",i.bisque="#ffe4c4",i.blanchedalmond="#ffebcd",i.blueviolet="#8a2be2",i.brown="#a52a2a",i.burlywood="#deb887",i.cadetblue="#5f9ea0",i.chartreuse="#7fff00",i.chocolate="#d2691e",i.coral="#ff7f50",i.cornflowerblue="#6495ed",i.cornsilk="#fff8dc",i.crimson="#dc143c",i.cyan="#00ffff",i.darkblue="#00008b",i.darkcyan="#008b8b",i.darkgoldenrod="#b8860b",i.darkgray="#a9a9a9",i.darkgreen="#006400",i.darkgrey="#a9a9a9",i.darkkhaki="#bdb76b",i.darkmagenta="#8b008b",i.darkolivegreen="#556b2f",i.darkorange="#ff8c00",i.darkorchid="#9932cc",i.darkred="#8b0000",i.darksalmon="#e9967a",i.darkseagreen="#8fbc8f",i.darkslateblue="#483d8b",i.darkslategray="#2f4f4f",i.darkslategrey="#2f4f4f",i.darkturquoise="#00ced1",i.darkviolet="#9400d3",i.deeppink="#ff1493",i.deepskyblue="#00bfff",i.dimgray="#696969",i.dimgrey="#696969",i.dodgerblue="#1e90ff",i.firebrick="#b22222",i.floralwhite="#fffaf0",i.forestgreen="#228b22",i.gainsboro="#dcdcdc",i.ghostwhite="#f8f8ff",i.gold="#ffd700",i.goldenrod="#daa520",i.greenyellow="#adff2f",i.grey="#808080",i.honeydew="#f0fff0",i.hotpink="#ff69b4",i.indianred="#cd5c5c",i.indigo="#4b0082",i.ivory="#fffff0",i.khaki="#f0e68c",i.lavender="#e6e6fa",i.lavenderblush="#fff0f5",i.lawngreen="#7cfc00",i.lemonchiffon="#fffacd",i.lightblue="#add8e6",i.lightcoral="#f08080",i.lightcyan="#e0ffff",i.lightgoldenrodyellow="#fafad2",i.lightgray="#d3d3d3",i.lightgreen="#90ee90",i.lightgrey="#d3d3d3",i.lightpink="#ffb6c1",i.lightsalmon="#ffa07a",i.lightseagreen="#20b2aa",i.lightskyblue="#87cefa",i.lightslategray="#778899",i.lightslategrey="#778899",i.lightsteelblue="#b0c4de",i.lightyellow="#ffffe0",i.limegreen="#32cd32",i.linen="#faf0e6",i.magenta="#ff00ff",i.mediumaquamarine="#66cdaa",i.mediumblue="#0000cd",i.mediumorchid="#ba55d3",i.mediumpurple="#9370db",i.mediumseagreen="#3cb371",i.mediumslateblue="#7b68ee",i.mediumspringgreen="#00fa9a",i.mediumturquoise="#48d1cc",i.mediumvioletred="#c71585",i.midnightblue="#191970",i.mintcream="#f5fffa",i.mistyrose="#ffe4e1",i.moccasin="#ffe4b5",i.navajowhite="#ffdead",i.oldlace="#fdf5e6",i.olivedrab="#6b8e23",i.orange="#ffa500",i.orangered="#ff4500",i.orchid="#da70d6",i.palegoldenrod="#eee8aa",i.palegreen="#98fb98",i.paleturquoise="#afeeee",i.palevioletred="#db7093",i.papayawhip="#ffefd5",i.peachpuff="#ffdab9",i.peru="#cd853f",i.pink="#ffc0cb",i.plum="#dda0dd",i.powderblue="#b0e0e6",i.rosybrown="#bc8f8f",i.royalblue="#4169e1",i.saddlebrown="#8b4513",i.salmon="#fa8072",i.sandybrown="#f4a460",i.seagreen="#2e8b57",i.seashell="#fff5ee",i.sienna="#a0522d",i.skyblue="#87ceeb",i.slateblue="#6a5acd",i.slategray="#708090",i.snow="#fffafa",i.springgreen="#00ff7f",i.steelblue="#4682b4",i.tan="#d2b48c",i.thistle="#d8bfd8",i.tomato="#ff6347",i.turquoise="#40e0d0",i.violet="#ee82ee",i.wheat="#f5deb3",i.whitesmoke="#f5f5f5",i.yellowgreen="#9acd32",i))(qf||{});function co(i){return typeof i!="string"?!1:(i=i.toLowerCase(),/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(i))}function hM(i){return typeof i!="string"?!1:(i=i.toLowerCase(),/^(rgb\(|RGB\()/.test(i))}function Kf(i){return typeof i!="string"?!1:(i=i.toLowerCase(),/^(rgba|RGBA)/.test(i))}function Yf(i){return/^(rgb|rgba|RGB|RGBA)/.test(i)}function pM(i){return qf[i]}function $f(i){if(co(i)||Yf(i))return i;const e=pM(i);if(!e)throw new Error(`Color: Invalid Input of ${i}`);return e}function mM(i){i=i.replace("#",""),i.length===3&&(i=Array.from(i).map(t=>t+t).join(""));const e=i.split("");return new Array(3).fill(0).map((t,n)=>parseInt(`0x${e[n*2]}${e[n*2+1]}`))}function gM(i){return i.replace(/rgb\(|rgba\(|\)/g,"").split(",").slice(0,3).map(e=>parseInt(e))}function ra(i){const e=$f(i).toLowerCase();return co(e)?mM(e):gM(e)}function Zf(i){const e=$f(i);return Kf(e)?Number(e.toLowerCase().split(",").slice(-1)[0].replace(/[)|\s]/g,"")):1}function Ws(i){const e=ra(i);return e&&[...e,Zf(i)]}function bM(i,e){const t=ra(i);return typeof e=="number"?`rgba(${t.join(",")},${e})`:`rgb(${t.join(",")})`}function vM(i){if(co(i))return i;const e=ra(i),t=n=>Number(n).toString(16).padStart(2,"0");return`#${e.map(t).join("")}`}function uo(i){if(!Array.isArray(i))throw new Error(`getColorFromRgbValue: ${i} is not an array`);const{length:e}=i;if(e!==3&&e!==4)throw new Error("getColorFromRgbValue: value length should be 3 or 4");return(e===3?"rgb(":"rgba(")+i.join(",")+")"}function xM(i,e=0){let t=Ws(i);return t=t.map((n,r)=>r===3?n:n-Math.ceil(2.55*e)).map(n=>n<0?0:n),uo(t)}function _M(i,e=0){let t=Ws(i);return t=t.map((n,r)=>r===3?n:n+Math.ceil(2.55*e)).map(n=>n>255?255:n),uo(t)}function yM(i,e=100){const t=ra(i);return uo([...t,e/100])}const MM=Object.freeze(Object.defineProperty({__proto__:null,darken:xM,fade:yM,getColorFromRgbValue:uo,getOpacity:Zf,getRgbValue:ra,getRgbaValue:Ws,isHex:co,isRgb:hM,isRgbOrRgba:Yf,isRgba:Kf,lighten:_M,toHex:vM,toRgb:bM},Symbol.toStringTag,{value:"Module"}));function SM(i){return Lh()?(Dh(i),!0):!1}function eo(i){return typeof i=="function"?i():Tn(i)}const EM=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const TM=Object.prototype.toString,wM=i=>TM.call(i)==="[object Object]",Ms=()=>{};function AM(i,e){function t(...n){return new Promise((r,a)=>{Promise.resolve(i(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})).then(r).catch(a)})}return t}function CM(i,e={}){let t,n,r=Ms;const a=o=>{clearTimeout(o),r(),r=Ms};return o=>{const s=eo(i),l=eo(e.maxWait);return t&&a(t),s<=0||l!==void 0&&l<=0?(n&&(a(n),n=null),Promise.resolve(o())):new Promise((c,u)=>{r=e.rejectOnCancel?u:c,l&&!n&&(n=setTimeout(()=>{t&&a(t),n=null,c(o())},l)),t=setTimeout(()=>{n&&a(n),n=null,c(o())},s)})}}function RM(i,e=200,t={}){return AM(CM(e,t),i)}function PM(i){var e;const t=eo(i);return(e=t==null?void 0:t.$el)!=null?e:t}const LM=EM?window:void 0;function DM(...i){let e,t,n,r;if(typeof i[0]=="string"||Array.isArray(i[0])?([t,n,r]=i,e=LM):[e,t,n,r]=i,!e)return Ms;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const a=[],o=()=>{a.forEach(u=>u()),a.length=0},s=(u,d,f,h)=>(u.addEventListener(d,f,h),()=>u.removeEventListener(d,f,h)),l=Bd(()=>[PM(e),eo(r)],([u,d])=>{if(o(),!u)return;const f=wM(d)?{...d}:d;a.push(...t.flatMap(h=>n.map(m=>s(u,h,m,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return SM(c),c}function IM(i,e){const t=window.MutationObserver,n=new t(e);return n.observe(i,{attributes:!0,attributeFilter:["style"],attributeOldValue:!0}),n}const OM=(i,e,t)=>{const n=Ze(0),r=Ze(0);let a,o=null,s=null;const l=(h=!0)=>new Promise(m=>{Ph(()=>{s=i.value,n.value=i.value?i.value.clientWidth:0,r.value=i.value?i.value.clientHeight:0,i.value&&(!n.value||r.value),m(!0)})}),c=()=>{a=RM(l,200)},u=()=>{o=IM(s,a),DM(window,"resize",a)},d=()=>{o&&(o.disconnect(),o.takeRecords(),o=null)},f=async()=>{await l(!1),c(),u()};return ea(()=>{f()}),Ss(()=>{d()}),{width:n,height:r,initWH:l}};function UM(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var js={},Jf={exports:{}};(function(i){function e(t){return t&&t.__esModule?t:{default:t}}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports})(Jf);var ct=Jf.exports,iu={},ru={exports:{}},au;function Mn(){return au||(au=1,function(i){function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(ru)),ru.exports}var ou={exports:{}},su={exports:{}},lu={exports:{}},cu;function Qf(){return cu||(cu=1,function(i){function e(t,n){(n==null||n>t.length)&&(n=t.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=t[r];return a}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(lu)),lu.exports}var uu;function FM(){return uu||(uu=1,function(i){var e=Qf();function t(n){if(Array.isArray(n))return e(n)}i.exports=t,i.exports.__esModule=!0,i.exports.default=i.exports}(su)),su.exports}var du={exports:{}},fu;function kM(){return fu||(fu=1,function(i){function e(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(du)),du.exports}var hu={exports:{}},pu;function eh(){return pu||(pu=1,function(i){var e=Qf();function t(n,r){if(n){if(typeof n=="string")return e(n,r);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return e(n,r)}}i.exports=t,i.exports.__esModule=!0,i.exports.default=i.exports}(hu)),hu.exports}var mu={exports:{}},gu;function NM(){return gu||(gu=1,function(i){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(mu)),mu.exports}var bu;function Tt(){return bu||(bu=1,function(i){var e=FM(),t=kM(),n=eh(),r=NM();function a(o){return e(o)||t(o)||n(o)||r()}i.exports=a,i.exports.__esModule=!0,i.exports.default=i.exports}(ou)),ou.exports}var vu={exports:{}},xu;function aa(){return xu||(xu=1,function(i){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(vu)),vu.exports}const oa=UM(MM);var _u={},yu={},Mu={exports:{}},Su={exports:{}},Eu;function zM(){return Eu||(Eu=1,function(i){function e(t){if(Array.isArray(t))return t}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(Su)),Su.exports}var Tu={exports:{}},wu;function BM(){return wu||(wu=1,function(i){function e(t,n){var r=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var a=[],o=!0,s=!1,l,c;try{for(r=r.call(t);!(o=(l=r.next()).done)&&(a.push(l.value),!(n&&a.length===n));o=!0);}catch(u){s=!0,c=u}finally{try{!o&&r.return!=null&&r.return()}finally{if(s)throw c}}return a}}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(Tu)),Tu.exports}var Au={exports:{}},Cu;function GM(){return Cu||(Cu=1,function(i){function e(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(Au)),Au.exports}var Ru;function Bt(){return Ru||(Ru=1,function(i){var e=zM(),t=BM(),n=eh(),r=GM();function a(o,s){return e(o)||t(o,s)||n(o,s)||r()}i.exports=a,i.exports.__esModule=!0,i.exports.default=i.exports}(Mu)),Mu.exports}var Pu;function HM(){return Pu||(Pu=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.bezierCurveToPolyline=p,i.getBezierCurveLength=y,i.default=void 0;var t=e(Bt()),n=e(Tt()),r=Math.sqrt,a=Math.pow,o=Math.ceil,s=Math.abs,l=50;function c(S){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5,O=S.length-1,T=S[0],L=S[O][2],b=S.slice(1),_=b.map(function(B,H){var $=H===0?T:b[H-1][2];return u.apply(void 0,[$].concat((0,n.default)(B)))}),V=new Array(O).fill(l),N=m(_,V),F=g(N,_,b,M);return F.segmentPoints.push(L),F}function u(S,M,O,T){return function(L){var b=1-L,_=a(b,3),V=a(b,2),N=a(L,3),F=a(L,2);return[S[0]*_+3*M[0]*L*V+3*O[0]*F*b+T[0]*N,S[1]*_+3*M[1]*L*V+3*O[1]*F*b+T[1]*N]}}function d(S,M){var O=(0,t.default)(S,2),T=O[0],L=O[1],b=(0,t.default)(M,2),_=b[0],V=b[1];return r(a(T-_,2)+a(L-V,2))}function f(S){return S.reduce(function(M,O){return M+O},0)}function h(S){return S.map(function(M,O){return new Array(M.length-1).fill(0).map(function(T,L){return d(M[L],M[L+1])})})}function m(S,M){return S.map(function(O,T){var L=1/M[T];return new Array(M[T]).fill("").map(function(b,_){return O(_*L)})})}function v(S,M){return S.map(function(O){return O.map(function(T){return s(T-M)})}).map(function(O){return f(O)}).reduce(function(O,T){return O+T},0)}function g(S,M,O,T){var L=4,b=1,_=function(){var N=S.reduce(function(k,K){return k+K.length},0);S.forEach(function(k,K){return k.push(O[K][2])});var F=h(S),B=F.reduce(function(k,K){return k+K.length},0),H=F.map(function(k){return f(k)}),$=f(H),E=$/B,D=v(F,E);if(D<=T)return"break";N=o(E/T*N*1.1);var R=H.map(function(k){return o(k/$*N)});S=m(M,R),N=S.reduce(function(k,K){return k+K.length},0);var U=JSON.parse(JSON.stringify(S));U.forEach(function(k,K){return k.push(O[K][2])}),F=h(U),B=F.reduce(function(k,K){return k+K.length},0),H=F.map(function(k){return f(k)}),$=f(H),E=$/B;var A=1/N/10;M.forEach(function(k,K){for(var te=R[K],re=new Array(te).fill("").map(function(Y,P){return P/R[K]}),pe=0;pe<L;pe++)for(var ne=h([S[K]])[0],se=ne.map(function(Y){return Y-E}),me=0,be=0;be<te;be++){if(be===0)return;me+=se[be-1],re[be]-=A*me,re[be]>1&&(re[be]=1),re[be]<0&&(re[be]=0),S[K][be]=k(re[be])}}),L*=4,b++};do{var V=_();if(V==="break")break}while(L<=1025);return S=S.reduce(function(N,F){return N.concat(F)},[]),{segmentPoints:S,cycles:b,rounds:L}}function p(S){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;if(!S||!(S instanceof Array)||typeof M!="number")return!1;var O=c(S,M),T=O.segmentPoints;return T}function y(S){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:5;if(!S||!(S instanceof Array)||typeof M!="number")return!1;var O=c(S,M),T=O.segmentPoints,L=h([T])[0],b=f(L);return b}var x=p;i.default=x}(yu)),yu}var Lu={},Du;function VM(){return Du||(Du=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=e(Bt()),n=e(Tt());function r(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.25,f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25;if(!(c instanceof Array)||c.length<=2)return!1;var h=c[0],m=c.length-1,v=new Array(m).fill(0).map(function(g,p){return[].concat((0,n.default)(a(c,p,u,d,f)),[c[p+1]])});return u&&o(v,h),v.unshift(c[0]),v}function a(c,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,h=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.25,m=c.length;if(!(m<3||u>=m)){var v=u-1;v<0&&(v=d?m+v:0);var g=u+1;g>=m&&(g=d?g-m:m-1);var p=u+2;p>=m&&(p=d?p-m:m-1);var y=c[v],x=c[u],S=c[g],M=c[p];return[[x[0]+f*(S[0]-y[0]),x[1]+f*(S[1]-y[1])],[S[0]-h*(M[0]-x[0]),S[1]-h*(M[1]-x[1])]]}}function o(c,u){var d=c[0],f=c.slice(-1)[0];return c.push([s(f[1],f[2]),s(d[0],u),u]),c}function s(c,u){var d=(0,t.default)(c,2),f=d[0],h=d[1],m=(0,t.default)(u,2),v=m[0],g=m[1],p=v-f,y=g-h;return[v+p,g+y]}var l=r;i.default=l}(Lu)),Lu}var Iu;function Xs(){return Iu||(Iu=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"bezierCurveToPolyline",{enumerable:!0,get:function(){return t.bezierCurveToPolyline}}),Object.defineProperty(i,"getBezierCurveLength",{enumerable:!0,get:function(){return t.getBezierCurveLength}}),Object.defineProperty(i,"polylineToBezierCurve",{enumerable:!0,get:function(){return n.default}}),i.default=void 0;var t=HM(),n=e(VM()),r={bezierCurveToPolyline:t.bezierCurveToPolyline,getBezierCurveLength:t.getBezierCurveLength,polylineToBezierCurve:n.default};i.default=r}(_u)),_u}var Ou={},Uu={exports:{}},Fu;function Zt(){return Fu||(Fu=1,function(i){function e(t){"@babel/helpers - typeof";return i.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i.exports.__esModule=!0,i.exports.default=i.exports,e(t)}i.exports=e,i.exports.__esModule=!0,i.exports.default=i.exports}(Uu)),Uu.exports}var ku;function Pt(){return ku||(ku=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.deepClone=f,i.eliminateBlur=h,i.checkPointIsInCircle=m,i.getTwoPointDistance=v,i.checkPointIsInPolygon=g,i.checkPointIsInSector=p,i.checkPointIsNearPolyline=x,i.checkPointIsInRect=S,i.getRotatePointPos=M,i.getScalePointPos=O,i.getTranslatePointPos=T,i.getDistanceBetweenPointAndLine=L,i.getCircleRadianPoint=b,i.getRegularPolygonPoints=_,i.default=void 0;var t=e(Tt()),n=e(Bt()),r=e(Zt()),a=Math.abs,o=Math.sqrt,s=Math.sin,l=Math.cos,c=Math.max,u=Math.min,d=Math.PI;function f(N){var F=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!N)return N;var B=JSON.parse,H=JSON.stringify;if(!F)return B(H(N));var $=N instanceof Array?[]:{};if(N&&(0,r.default)(N)==="object")for(var E in N)N.hasOwnProperty(E)&&(N[E]&&(0,r.default)(N[E])==="object"?$[E]=f(N[E],!0):$[E]=N[E]);return $}function h(N){return N.map(function(F){var B=(0,n.default)(F,2),H=B[0],$=B[1];return[parseInt(H)+.5,parseInt($)+.5]})}function m(N,F,B,H){return v(N,[F,B])<=H}function v(N,F){var B=(0,n.default)(N,2),H=B[0],$=B[1],E=(0,n.default)(F,2),D=E[0],R=E[1],U=a(H-D),A=a($-R);return o(U*U+A*A)}function g(N,F){for(var B=0,H=(0,n.default)(N,2),$=H[0],E=H[1],D=F.length,R=1,U=F[0];R<=D;R++){var A=F[R%D];if($>u(U[0],A[0])&&$<=c(U[0],A[0])&&E<=c(U[1],A[1])&&U[0]!==A[0]){var k=($-U[0])*(A[1]-U[1])/(A[0]-U[0])+U[1];(U[1]===A[1]||E<=k)&&B++}U=A}return B%2===1}function p(N,F,B,H,$,E,D){if(!N||v(N,[F,B])>H)return!1;if(!D){var R=f([E,$]),U=(0,n.default)(R,2);$=U[0],E=U[1]}var A=$>E;if(A){var k=[E,$];$=k[0],E=k[1]}var K=E-$;if(K>=d*2)return!0;var te=(0,n.default)(N,2),re=te[0],pe=te[1],ne=b(F,B,H,$),se=(0,n.default)(ne,2),me=se[0],be=se[1],Y=b(F,B,H,E),P=(0,n.default)(Y,2),q=P[0],j=P[1],ee=[re-F,pe-B],ae=[me-F,be-B],G=[q-F,j-B],Q=K>d;if(Q){var C=f([G,ae]),z=(0,n.default)(C,2);ae=z[0],G=z[1]}var W=y(ae,ee)&&!y(G,ee);return Q&&(W=!W),A&&(W=!W),W}function y(N,F){var B=(0,n.default)(N,2),H=B[0],$=B[1],E=(0,n.default)(F,2),D=E[0],R=E[1];return-$*D+H*R>0}function x(N,F,B){var H=B/2,$=F.map(function(R){var U=(0,n.default)(R,2),A=U[0],k=U[1];return[A,k-H]}),E=F.map(function(R){var U=(0,n.default)(R,2),A=U[0],k=U[1];return[A,k+H]}),D=[].concat((0,t.default)($),(0,t.default)(E.reverse()));return g(N,D)}function S(N,F,B,H,$){var E=(0,n.default)(N,2),D=E[0],R=E[1];return!(D<F||R<B||D>F+H||R>B+$)}function M(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,F=arguments.length>1?arguments[1]:void 0,B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0];if(!F)return!1;if(N%360===0)return F;var H=(0,n.default)(F,2),$=H[0],E=H[1],D=(0,n.default)(B,2),R=D[0],U=D[1];return N*=d/180,[($-R)*l(N)-(E-U)*s(N)+R,($-R)*s(N)+(E-U)*l(N)+U]}function O(){var N=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[1,1],F=arguments.length>1?arguments[1]:void 0,B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[0,0];if(!F)return!1;if(N===1)return F;var H=(0,n.default)(F,2),$=H[0],E=H[1],D=(0,n.default)(B,2),R=D[0],U=D[1],A=(0,n.default)(N,2),k=A[0],K=A[1],te=$-R,re=E-U;return[te*k+R,re*K+U]}function T(N,F){if(!N||!F)return!1;var B=(0,n.default)(F,2),H=B[0],$=B[1],E=(0,n.default)(N,2),D=E[0],R=E[1];return[H+D,$+R]}function L(N,F,B){if(!N||!F||!B)return!1;var H=(0,n.default)(N,2),$=H[0],E=H[1],D=(0,n.default)(F,2),R=D[0],U=D[1],A=(0,n.default)(B,2),k=A[0],K=A[1],te=K-U,re=R-k,pe=U*(k-R)-R*(K-U),ne=a(te*$+re*E+pe),se=o(te*te+re*re);return ne/se}function b(N,F,B,H){return[N+l(H)*B,F+s(H)*B]}function _(N,F,B,H){var $=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d*-.5,E=d*2/H,D=new Array(H).fill("").map(function(R,U){return U*E+$});return D.map(function(R){return b(N,F,B,R)})}var V={deepClone:f,eliminateBlur:h,checkPointIsInCircle:m,checkPointIsInPolygon:g,checkPointIsInSector:p,checkPointIsNearPolyline:x,getTwoPointDistance:v,getRotatePointPos:M,getScalePointPos:O,getTranslatePointPos:T,getCircleRadianPoint:b,getRegularPolygonPoints:_,getDistanceBetweenPointAndLine:L};i.default=V}(Ou)),Ou}var Nu={},zu={},Bu;function WM(){return Bu||(Bu=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.drawPolylinePath=n,i.drawBezierCurvePath=r,i.default=void 0;var t=e(Tt());function n(o,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!o||s.length<2)return!1;l&&o.beginPath(),s.forEach(function(u,d){return u&&(d===0?o.moveTo.apply(o,(0,t.default)(u)):o.lineTo.apply(o,(0,t.default)(u)))}),c&&o.closePath()}function r(o,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,u=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!o||!s)return!1;c&&o.beginPath(),l&&o.moveTo.apply(o,(0,t.default)(l)),s.forEach(function(d){return d&&o.bezierCurveTo.apply(o,(0,t.default)(d[0]).concat((0,t.default)(d[1]),(0,t.default)(d[2])))}),u&&o.closePath()}var a={drawPolylinePath:n,drawBezierCurvePath:r};i.default=a}(zu)),zu}var Gu;function qs(){return Gu||(Gu=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.extendNewGraph=O,i.default=i.text=i.bezierCurve=i.smoothline=i.polyline=i.regPolygon=i.sector=i.arc=i.ring=i.rect=i.ellipse=i.circle=void 0;var t=e(Tt()),n=e(Bt()),r=e(Xs()),a=Pt(),o=WM(),s=r.default.polylineToBezierCurve,l=r.default.bezierCurveToPolyline,c={shape:{rx:0,ry:0,r:0},validator:function(T){var L=T.shape,b=L.rx,_=L.ry,V=L.r;return!(typeof b!="number"||typeof _!="number"||typeof V!="number")},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.rx,N=_.ry,F=_.r;b.arc(V,N,F>0?F:.01,0,Math.PI*2),b.fill(),b.stroke(),b.closePath()},hoverCheck:function(T,L){var b=L.shape,_=b.rx,V=b.ry,N=b.r;return(0,a.checkPointIsInCircle)(T,_,V,N)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape;this.attr("shape",{rx:V.rx+b,ry:V.ry+_})}};i.circle=c;var u={shape:{rx:0,ry:0,hr:0,vr:0},validator:function(T){var L=T.shape,b=L.rx,_=L.ry,V=L.hr,N=L.vr;return!(typeof b!="number"||typeof _!="number"||typeof V!="number"||typeof N!="number")},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.rx,N=_.ry,F=_.hr,B=_.vr;b.ellipse(V,N,F>0?F:.01,B>0?B:.01,0,0,Math.PI*2),b.fill(),b.stroke(),b.closePath()},hoverCheck:function(T,L){var b=L.shape,_=b.rx,V=b.ry,N=b.hr,F=b.vr,B=Math.max(N,F),H=Math.min(N,F),$=Math.sqrt(B*B-H*H),E=[_-$,V],D=[_+$,V],R=(0,a.getTwoPointDistance)(T,E)+(0,a.getTwoPointDistance)(T,D);return R<=2*B},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape;this.attr("shape",{rx:V.rx+b,ry:V.ry+_})}};i.ellipse=u;var d={shape:{x:0,y:0,w:0,h:0},validator:function(T){var L=T.shape,b=L.x,_=L.y,V=L.w,N=L.h;return!(typeof b!="number"||typeof _!="number"||typeof V!="number"||typeof N!="number")},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.x,N=_.y,F=_.w,B=_.h;b.rect(V,N,F,B),b.fill(),b.stroke(),b.closePath()},hoverCheck:function(T,L){var b=L.shape,_=b.x,V=b.y,N=b.w,F=b.h;return(0,a.checkPointIsInRect)(T,_,V,N,F)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.x,N=b.y,F=b.w,B=b.h;_.graphCenter=[V+F/2,N+B/2]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape;this.attr("shape",{x:V.x+b,y:V.y+_})}};i.rect=d;var f={shape:{rx:0,ry:0,r:0},validator:function(T){var L=T.shape,b=L.rx,_=L.ry,V=L.r;return!(typeof b!="number"||typeof _!="number"||typeof V!="number")},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.rx,N=_.ry,F=_.r;b.arc(V,N,F>0?F:.01,0,Math.PI*2),b.stroke(),b.closePath()},hoverCheck:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry,F=b.r,B=_.lineWidth,H=B/2,$=F-H,E=F+H,D=(0,a.getTwoPointDistance)(T,[V,N]);return D>=$&&D<=E},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape;this.attr("shape",{rx:V.rx+b,ry:V.ry+_})}};i.ring=f;var h={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(T){var L=T.shape,b=["rx","ry","r","startAngle","endAngle"];return!b.find(function(_){return typeof L[_]!="number"})},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.rx,N=_.ry,F=_.r,B=_.startAngle,H=_.endAngle,$=_.clockWise;b.arc(V,N,F>0?F:.001,B,H,!$),b.stroke(),b.closePath()},hoverCheck:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry,F=b.r,B=b.startAngle,H=b.endAngle,$=b.clockWise,E=_.lineWidth,D=E/2,R=F-D,U=F+D;return!(0,a.checkPointIsInSector)(T,V,N,R,B,H,$)&&(0,a.checkPointIsInSector)(T,V,N,U,B,H,$)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape;this.attr("shape",{rx:V.rx+b,ry:V.ry+_})}};i.arc=h;var m={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(T){var L=T.shape,b=["rx","ry","r","startAngle","endAngle"];return!b.find(function(_){return typeof L[_]!="number"})},draw:function(T,L){var b=T.ctx,_=L.shape;b.beginPath();var V=_.rx,N=_.ry,F=_.r,B=_.startAngle,H=_.endAngle,$=_.clockWise;b.arc(V,N,F>0?F:.01,B,H,!$),b.lineTo(V,N),b.closePath(),b.stroke(),b.fill()},hoverCheck:function(T,L){var b=L.shape,_=b.rx,V=b.ry,N=b.r,F=b.startAngle,B=b.endAngle,H=b.clockWise;return(0,a.checkPointIsInSector)(T,_,V,N,F,B,H)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=V.rx,F=V.ry;this.attr("shape",{rx:N+b,ry:F+_})}};i.sector=m;var v={shape:{rx:0,ry:0,r:0,side:0},validator:function(T){var L=T.shape,b=L.side,_=["rx","ry","r","side"];return _.find(function(V){return typeof L[V]!="number"})?!1:!(b<3)},draw:function(T,L){var b=T.ctx,_=L.shape,V=L.cache;b.beginPath();var N=_.rx,F=_.ry,B=_.r,H=_.side;if(!V.points||V.rx!==N||V.ry!==F||V.r!==B||V.side!==H){var $=(0,a.getRegularPolygonPoints)(N,F,B,H);Object.assign(V,{points:$,rx:N,ry:F,r:B,side:H})}var E=V.points;(0,o.drawPolylinePath)(b,E),b.closePath(),b.stroke(),b.fill()},hoverCheck:function(T,L){var b=L.cache,_=b.points;return(0,a.checkPointIsInPolygon)(T,_)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.rx,N=b.ry;_.graphCenter=[V,N]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=L.cache,F=V.rx,B=V.ry;N.rx+=b,N.ry+=_,this.attr("shape",{rx:F+b,ry:B+_}),N.points=N.points.map(function(H){var $=(0,n.default)(H,2),E=$[0],D=$[1];return[E+b,D+_]})}};i.regPolygon=v;var g={shape:{points:[],close:!1},validator:function(T){var L=T.shape,b=L.points;return b instanceof Array},draw:function(T,L){var b=T.ctx,_=L.shape,V=L.style.lineWidth;b.beginPath();var N=_.points,F=_.close;V===1&&(N=(0,a.eliminateBlur)(N)),(0,o.drawPolylinePath)(b,N),F&&(b.closePath(),b.fill()),b.stroke()},hoverCheck:function(T,L){var b=L.shape,_=L.style,V=b.points,N=b.close,F=_.lineWidth;return N?(0,a.checkPointIsInPolygon)(T,V):(0,a.checkPointIsNearPolyline)(T,V,F)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.points;_.graphCenter=V[0]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=V.points,F=N.map(function(B){var H=(0,n.default)(B,2),$=H[0],E=H[1];return[$+b,E+_]});this.attr("shape",{points:F})}};i.polyline=g;var p={shape:{points:[],close:!1},validator:function(T){var L=T.shape,b=L.points;return b instanceof Array},draw:function(T,L){var b=T.ctx,_=L.shape,V=L.cache,N=_.points,F=_.close;if(!V.points||V.points.toString()!==N.toString()){var B=s(N,F),H=l(B);Object.assign(V,{points:(0,a.deepClone)(N,!0),bezierCurve:B,hoverPoints:H})}var $=V.bezierCurve;b.beginPath(),(0,o.drawBezierCurvePath)(b,$.slice(1),$[0]),F&&(b.closePath(),b.fill()),b.stroke()},hoverCheck:function(T,L){var b=L.cache,_=L.shape,V=L.style,N=b.hoverPoints,F=_.close,B=V.lineWidth;return F?(0,a.checkPointIsInPolygon)(T,N):(0,a.checkPointIsNearPolyline)(T,N,B)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.points;_.graphCenter=V[0]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=L.cache,F=V.points,B=F.map(function(R){var U=(0,n.default)(R,2),A=U[0],k=U[1];return[A+b,k+_]});N.points=B;var H=(0,n.default)(N.bezierCurve[0],2),$=H[0],E=H[1],D=N.bezierCurve.slice(1);N.bezierCurve=[[$+b,E+_]].concat((0,t.default)(D.map(function(R){return R.map(function(U){var A=(0,n.default)(U,2),k=A[0],K=A[1];return[k+b,K+_]})}))),N.hoverPoints=N.hoverPoints.map(function(R){var U=(0,n.default)(R,2),A=U[0],k=U[1];return[A+b,k+_]}),this.attr("shape",{points:B})}};i.smoothline=p;var y={shape:{points:[],close:!1},validator:function(T){var L=T.shape,b=L.points;return b instanceof Array},draw:function(T,L){var b=T.ctx,_=L.shape,V=L.cache,N=_.points,F=_.close;if(!V.points||V.points.toString()!==N.toString()){var B=l(N,20);Object.assign(V,{points:(0,a.deepClone)(N,!0),hoverPoints:B})}b.beginPath(),(0,o.drawBezierCurvePath)(b,N.slice(1),N[0]),F&&(b.closePath(),b.fill()),b.stroke()},hoverCheck:function(T,L){var b=L.cache,_=L.shape,V=L.style,N=b.hoverPoints,F=_.close,B=V.lineWidth;return F?(0,a.checkPointIsInPolygon)(T,N):(0,a.checkPointIsNearPolyline)(T,N,B)},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.points;_.graphCenter=V[0]},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=L.cache,F=V.points,B=(0,n.default)(F[0],2),H=B[0],$=B[1],E=F.slice(1),D=[[H+b,$+_]].concat((0,t.default)(E.map(function(R){return R.map(function(U){var A=(0,n.default)(U,2),k=A[0],K=A[1];return[k+b,K+_]})})));N.points=D,N.hoverPoints=N.hoverPoints.map(function(R){var U=(0,n.default)(R,2),A=U[0],k=U[1];return[A+b,k+_]}),this.attr("shape",{points:D})}};i.bezierCurve=y;var x={shape:{content:"",position:[],maxWidth:void 0,rowGap:0},validator:function(T){var L=T.shape,b=L.content,_=L.position,V=L.rowGap;return typeof b!="string"?!1:_ instanceof Array?typeof V=="number":!1},draw:function(T,L){var b=T.ctx,_=L.shape,V=_.content,N=_.position,F=_.maxWidth,B=_.rowGap,H=b.textBaseline,$=b.font,E=parseInt($.replace(/\D/g,"")),D=N,R=(0,n.default)(D,2),U=R[0],A=R[1];V=V.split(`
`);var k=V.length,K=E+B,te=k*K-B,re=0;H==="middle"&&(re=te/2,A+=E/2),H==="bottom"&&(re=te,A+=E),N=new Array(k).fill(0).map(function(pe,ne){return[U,A+ne*K-re]}),b.beginPath(),V.forEach(function(pe,ne){b.fillText.apply(b,[pe].concat((0,t.default)(N[ne]),[F])),b.strokeText.apply(b,[pe].concat((0,t.default)(N[ne]),[F]))}),b.closePath()},hoverCheck:function(T,L){return L.shape,L.style,!1},setGraphCenter:function(T,L){var b=L.shape,_=L.style,V=b.position;_.graphCenter=(0,t.default)(V)},move:function(T,L){var b=T.movementX,_=T.movementY,V=L.shape,N=(0,n.default)(V.position,2),F=N[0],B=N[1];this.attr("shape",{position:[F+b,B+_]})}};i.text=x;var S=new Map([["circle",c],["ellipse",u],["rect",d],["ring",f],["arc",h],["sector",m],["regPolygon",v],["polyline",g],["smoothline",p],["bezierCurve",y],["text",x]]),M=S;i.default=M;function O(T,L){!T||!L||L.shape&&L.validator&&L.draw&&S.set(T,L)}}(Nu)),Nu}var Hu={},Vu={exports:{}},Wu;function jM(){return Wu||(Wu=1,function(i){var e=function(t){var n=Object.prototype,r=n.hasOwnProperty,a,o=typeof Symbol=="function"?Symbol:{},s=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(D,R,U){return Object.defineProperty(D,R,{value:U,enumerable:!0,configurable:!0,writable:!0}),D[R]}try{u({},"")}catch{u=function(D,R,U){return D[R]=U}}function d(D,R,U,A){var k=R&&R.prototype instanceof y?R:y,K=Object.create(k.prototype),te=new H(A||[]);return K._invoke=V(D,U,te),K}t.wrap=d;function f(D,R,U){try{return{type:"normal",arg:D.call(R,U)}}catch(A){return{type:"throw",arg:A}}}var h="suspendedStart",m="suspendedYield",v="executing",g="completed",p={};function y(){}function x(){}function S(){}var M={};u(M,s,function(){return this});var O=Object.getPrototypeOf,T=O&&O(O($([])));T&&T!==n&&r.call(T,s)&&(M=T);var L=S.prototype=y.prototype=Object.create(M);x.prototype=S,u(L,"constructor",S),u(S,"constructor",x),x.displayName=u(S,c,"GeneratorFunction");function b(D){["next","throw","return"].forEach(function(R){u(D,R,function(U){return this._invoke(R,U)})})}t.isGeneratorFunction=function(D){var R=typeof D=="function"&&D.constructor;return R?R===x||(R.displayName||R.name)==="GeneratorFunction":!1},t.mark=function(D){return Object.setPrototypeOf?Object.setPrototypeOf(D,S):(D.__proto__=S,u(D,c,"GeneratorFunction")),D.prototype=Object.create(L),D},t.awrap=function(D){return{__await:D}};function _(D,R){function U(K,te,re,pe){var ne=f(D[K],D,te);if(ne.type==="throw")pe(ne.arg);else{var se=ne.arg,me=se.value;return me&&typeof me=="object"&&r.call(me,"__await")?R.resolve(me.__await).then(function(be){U("next",be,re,pe)},function(be){U("throw",be,re,pe)}):R.resolve(me).then(function(be){se.value=be,re(se)},function(be){return U("throw",be,re,pe)})}}var A;function k(K,te){function re(){return new R(function(pe,ne){U(K,te,pe,ne)})}return A=A?A.then(re,re):re()}this._invoke=k}b(_.prototype),u(_.prototype,l,function(){return this}),t.AsyncIterator=_,t.async=function(D,R,U,A,k){k===void 0&&(k=Promise);var K=new _(d(D,R,U,A),k);return t.isGeneratorFunction(R)?K:K.next().then(function(te){return te.done?te.value:K.next()})};function V(D,R,U){var A=h;return function(k,K){if(A===v)throw new Error("Generator is already running");if(A===g){if(k==="throw")throw K;return E()}for(U.method=k,U.arg=K;;){var te=U.delegate;if(te){var re=N(te,U);if(re){if(re===p)continue;return re}}if(U.method==="next")U.sent=U._sent=U.arg;else if(U.method==="throw"){if(A===h)throw A=g,U.arg;U.dispatchException(U.arg)}else U.method==="return"&&U.abrupt("return",U.arg);A=v;var pe=f(D,R,U);if(pe.type==="normal"){if(A=U.done?g:m,pe.arg===p)continue;return{value:pe.arg,done:U.done}}else pe.type==="throw"&&(A=g,U.method="throw",U.arg=pe.arg)}}}function N(D,R){var U=D.iterator[R.method];if(U===a){if(R.delegate=null,R.method==="throw"){if(D.iterator.return&&(R.method="return",R.arg=a,N(D,R),R.method==="throw"))return p;R.method="throw",R.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var A=f(U,D.iterator,R.arg);if(A.type==="throw")return R.method="throw",R.arg=A.arg,R.delegate=null,p;var k=A.arg;if(!k)return R.method="throw",R.arg=new TypeError("iterator result is not an object"),R.delegate=null,p;if(k.done)R[D.resultName]=k.value,R.next=D.nextLoc,R.method!=="return"&&(R.method="next",R.arg=a);else return k;return R.delegate=null,p}b(L),u(L,c,"Generator"),u(L,s,function(){return this}),u(L,"toString",function(){return"[object Generator]"});function F(D){var R={tryLoc:D[0]};1 in D&&(R.catchLoc=D[1]),2 in D&&(R.finallyLoc=D[2],R.afterLoc=D[3]),this.tryEntries.push(R)}function B(D){var R=D.completion||{};R.type="normal",delete R.arg,D.completion=R}function H(D){this.tryEntries=[{tryLoc:"root"}],D.forEach(F,this),this.reset(!0)}t.keys=function(D){var R=[];for(var U in D)R.push(U);return R.reverse(),function A(){for(;R.length;){var k=R.pop();if(k in D)return A.value=k,A.done=!1,A}return A.done=!0,A}};function $(D){if(D){var R=D[s];if(R)return R.call(D);if(typeof D.next=="function")return D;if(!isNaN(D.length)){var U=-1,A=function k(){for(;++U<D.length;)if(r.call(D,U))return k.value=D[U],k.done=!1,k;return k.value=a,k.done=!0,k};return A.next=A}}return{next:E}}t.values=$;function E(){return{value:a,done:!0}}return H.prototype={constructor:H,reset:function(D){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(B),!D)for(var R in this)R.charAt(0)==="t"&&r.call(this,R)&&!isNaN(+R.slice(1))&&(this[R]=a)},stop:function(){this.done=!0;var D=this.tryEntries[0],R=D.completion;if(R.type==="throw")throw R.arg;return this.rval},dispatchException:function(D){if(this.done)throw D;var R=this;function U(pe,ne){return K.type="throw",K.arg=D,R.next=pe,ne&&(R.method="next",R.arg=a),!!ne}for(var A=this.tryEntries.length-1;A>=0;--A){var k=this.tryEntries[A],K=k.completion;if(k.tryLoc==="root")return U("end");if(k.tryLoc<=this.prev){var te=r.call(k,"catchLoc"),re=r.call(k,"finallyLoc");if(te&&re){if(this.prev<k.catchLoc)return U(k.catchLoc,!0);if(this.prev<k.finallyLoc)return U(k.finallyLoc)}else if(te){if(this.prev<k.catchLoc)return U(k.catchLoc,!0)}else if(re){if(this.prev<k.finallyLoc)return U(k.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(D,R){for(var U=this.tryEntries.length-1;U>=0;--U){var A=this.tryEntries[U];if(A.tryLoc<=this.prev&&r.call(A,"finallyLoc")&&this.prev<A.finallyLoc){var k=A;break}}k&&(D==="break"||D==="continue")&&k.tryLoc<=R&&R<=k.finallyLoc&&(k=null);var K=k?k.completion:{};return K.type=D,K.arg=R,k?(this.method="next",this.next=k.finallyLoc,p):this.complete(K)},complete:function(D,R){if(D.type==="throw")throw D.arg;return D.type==="break"||D.type==="continue"?this.next=D.arg:D.type==="return"?(this.rval=this.arg=D.arg,this.method="return",this.next="end"):D.type==="normal"&&R&&(this.next=R),p},finish:function(D){for(var R=this.tryEntries.length-1;R>=0;--R){var U=this.tryEntries[R];if(U.finallyLoc===D)return this.complete(U.completion,U.afterLoc),B(U),p}},catch:function(D){for(var R=this.tryEntries.length-1;R>=0;--R){var U=this.tryEntries[R];if(U.tryLoc===D){var A=U.completion;if(A.type==="throw"){var k=A.arg;B(U)}return k}}throw new Error("illegal catch attempt")},delegateYield:function(D,R,U){return this.delegate={iterator:$(D),resultName:R,nextLoc:U},this.method==="next"&&(this.arg=a),p}},t}(i.exports);try{regeneratorRuntime=e}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(Vu)),Vu.exports}var ju,Xu;function XM(){return Xu||(Xu=1,ju=jM()),ju}var qu={exports:{}},Ku;function qM(){return Ku||(Ku=1,function(i){function e(n,r,a,o,s,l,c){try{var u=n[l](c),d=u.value}catch(f){a(f);return}u.done?r(d):Promise.resolve(d).then(o,s)}function t(n){return function(){var r=this,a=arguments;return new Promise(function(o,s){var l=n.apply(r,a);function c(d){e(l,o,s,c,u,"next",d)}function u(d){e(l,o,s,c,u,"throw",d)}c(void 0)})}}i.exports=t,i.exports.__esModule=!0,i.exports.default=i.exports}(qu)),qu.exports}var Yu={},$u;function KM(){return $u||($u=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=e(Tt()),n=e(aa()),r=oa,a=Pt(),o=function h(m){(0,n.default)(this,h),this.colorProcessor(m);var v={fill:[0,0,0,1],stroke:[0,0,0,0],opacity:1,lineCap:null,lineJoin:null,lineDash:null,lineDashOffset:null,shadowBlur:0,shadowColor:[0,0,0,0],shadowOffsetX:0,shadowOffsetY:0,lineWidth:0,graphCenter:null,scale:null,rotate:null,translate:null,hoverCursor:"pointer",fontStyle:"normal",fontVarient:"normal",fontWeight:"normal",fontSize:10,fontFamily:"Arial",textAlign:"center",textBaseline:"middle",gradientColor:null,gradientType:"linear",gradientParams:null,gradientWith:"stroke",gradientStops:"auto",colors:null};Object.assign(this,v,m)};i.default=o,o.prototype.colorProcessor=function(h){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,v=m?r.getColorFromRgbValue:r.getRgbaValue,g=["fill","stroke","shadowColor"],p=Object.keys(h),y=p.filter(function(O){return g.find(function(T){return T===O})});y.forEach(function(O){return h[O]=v(h[O])});var x=h.gradientColor,S=h.colors;if(x&&(h.gradientColor=x.map(function(O){return v(O)})),S){var M=Object.keys(S);M.forEach(function(O){return S[O]=v(S[O])})}},o.prototype.initStyle=function(h){s(h,this),c(h,this),u(h,this)};function s(h,m){h.save();var v=m.graphCenter,g=m.rotate,p=m.scale,y=m.translate;v instanceof Array&&(h.translate.apply(h,(0,t.default)(v)),g&&h.rotate(g*Math.PI/180),p instanceof Array&&h.scale.apply(h,(0,t.default)(p)),y&&h.translate.apply(h,(0,t.default)(y)),h.translate(-v[0],-v[1]))}var l=["lineCap","lineJoin","lineDashOffset","shadowOffsetX","shadowOffsetY","lineWidth","textAlign","textBaseline"];function c(h,m){var v=m.fill,g=m.stroke,p=m.shadowColor,y=m.opacity;l.forEach(function(_){(_||typeof _=="number")&&(h[_]=m[_])}),v=(0,t.default)(v),g=(0,t.default)(g),p=(0,t.default)(p),v[3]*=y,g[3]*=y,p[3]*=y,h.fillStyle=(0,r.getColorFromRgbValue)(v),h.strokeStyle=(0,r.getColorFromRgbValue)(g),h.shadowColor=(0,r.getColorFromRgbValue)(p);var x=m.lineDash,S=m.shadowBlur;x&&(x=x.map(function(_){return _>=0?_:0}),h.setLineDash(x)),typeof S=="number"&&(h.shadowBlur=S>0?S:.001);var M=m.fontStyle,O=m.fontVarient,T=m.fontWeight,L=m.fontSize,b=m.fontFamily;h.font=M+" "+O+" "+T+" "+L+"px "+b}function u(h,m){if(d(m)){var v=m.gradientColor,g=m.gradientParams,p=m.gradientType,y=m.gradientWith,x=m.gradientStops,S=m.opacity;v=v.map(function(O){var T=O[3]*S,L=(0,t.default)(O);return L[3]=T,L}),v=v.map(function(O){return(0,r.getColorFromRgbValue)(O)}),x==="auto"&&(x=f(v));var M=h["create".concat(p.slice(0,1).toUpperCase()+p.slice(1),"Gradient")].apply(h,(0,t.default)(g));x.forEach(function(O,T){return M.addColorStop(O,v[T])}),h["".concat(y,"Style")]=M}}function d(h){var m=h.gradientColor,v=h.gradientParams,g=h.gradientType,p=h.gradientWith,y=h.gradientStops;if(!m||!v||m.length===1||g!=="linear"&&g!=="radial")return!1;var x=v.length;return g==="linear"&&x!==4||g==="radial"&&x!==6||p!=="fill"&&p!=="stroke"?!1:!(y!=="auto"&&!(y instanceof Array))}function f(h){var m=1/(h.length-1);return h.map(function(v,g){return m*g})}o.prototype.restoreTransform=function(h){h.restore()},o.prototype.update=function(h){this.colorProcessor(h),Object.assign(this,h)},o.prototype.getStyle=function(){var h=(0,a.deepClone)(this,!0);return this.colorProcessor(h,!0),h}}(Yu)),Yu}var Zu={},Ju={},Qu;function YM(){return Qu||(Qu=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=i.easeInOutBounce=i.easeOutBounce=i.easeInBounce=i.easeInOutElastic=i.easeOutElastic=i.easeInElastic=i.easeInOutBack=i.easeOutBack=i.easeInBack=i.easeInOutQuint=i.easeOutQuint=i.easeInQuint=i.easeInOutQuart=i.easeOutQuart=i.easeInQuart=i.easeInOutCubic=i.easeOutCubic=i.easeInCubic=i.easeInOutQuad=i.easeOutQuad=i.easeInQuad=i.easeInOutSine=i.easeOutSine=i.easeInSine=i.linear=void 0;var e=[[[0,1],"",[.33,.67]],[[1,0],[.67,.33]]];i.linear=e;var t=[[[0,1]],[[.538,.564],[.169,.912],[.88,.196]],[[1,0]]];i.easeInSine=t;var n=[[[0,1]],[[.444,.448],[.169,.736],[.718,.16]],[[1,0]]];i.easeOutSine=n;var r=[[[0,1]],[[.5,.5],[.2,1],[.8,0]],[[1,0]]];i.easeInOutSine=r;var a=[[[0,1]],[[.55,.584],[.231,.904],[.868,.264]],[[1,0]]];i.easeInQuad=a;var o=[[[0,1]],[[.413,.428],[.065,.816],[.76,.04]],[[1,0]]];i.easeOutQuad=o;var s=[[[0,1]],[[.5,.5],[.3,.9],[.7,.1]],[[1,0]]];i.easeInOutQuad=s;var l=[[[0,1]],[[.679,.688],[.366,.992],[.992,.384]],[[1,0]]];i.easeInCubic=l;var c=[[[0,1]],[[.321,.312],[.008,.616],[.634,.008]],[[1,0]]];i.easeOutCubic=c;var u=[[[0,1]],[[.5,.5],[.3,1],[.7,0]],[[1,0]]];i.easeInOutCubic=u;var d=[[[0,1]],[[.812,.74],[.611,.988],[1.013,.492]],[[1,0]]];i.easeInQuart=d;var f=[[[0,1]],[[.152,.244],[.001,.448],[.285,-.02]],[[1,0]]];i.easeOutQuart=f;var h=[[[0,1]],[[.5,.5],[.4,1],[.6,0]],[[1,0]]];i.easeInOutQuart=h;var m=[[[0,1]],[[.857,.856],[.714,1],[1,.712]],[[1,0]]];i.easeInQuint=m;var v=[[[0,1]],[[.108,.2],[.001,.4],[.214,-.012]],[[1,0]]];i.easeOutQuint=v;var g=[[[0,1]],[[.5,.5],[.5,1],[.5,0]],[[1,0]]];i.easeInOutQuint=g;var p=[[[0,1]],[[.667,.896],[.38,1.184],[.955,.616]],[[1,0]]];i.easeInBack=p;var y=[[[0,1]],[[.335,.028],[.061,.22],[.631,-.18]],[[1,0]]];i.easeOutBack=y;var x=[[[0,1]],[[.5,.5],[.4,1.4],[.6,-.4]],[[1,0]]];i.easeInOutBack=x;var S=[[[0,1]],[[.474,.964],[.382,.988],[.557,.952]],[[.619,1.076],[.565,1.088],[.669,1.08]],[[.77,.916],[.712,.924],[.847,.904]],[[.911,1.304],[.872,1.316],[.961,1.34]],[[1,0]]];i.easeInElastic=S;var M=[[[0,1]],[[.073,-.32],[.034,-.328],[.104,-.344]],[[.191,.092],[.11,.06],[.256,.08]],[[.31,-.076],[.26,-.068],[.357,-.076]],[[.432,.032],[.362,.028],[.683,-.004]],[[1,0]]];i.easeOutElastic=M;var O=[[[0,1]],[[.21,.94],[.167,.884],[.252,.98]],[[.299,1.104],[.256,1.092],[.347,1.108]],[[.5,.496],[.451,.672],[.548,.324]],[[.696,-.108],[.652,-.112],[.741,-.124]],[[.805,.064],[.756,.012],[.866,.096]],[[1,0]]];i.easeInOutElastic=O;var T=[[[0,1]],[[.148,1],[.075,.868],[.193,.848]],[[.326,1],[.276,.836],[.405,.712]],[[.6,1],[.511,.708],[.671,.348]],[[1,0]]];i.easeInBounce=T;var L=[[[0,1]],[[.357,.004],[.27,.592],[.376,.252]],[[.604,-.004],[.548,.312],[.669,.184]],[[.82,0],[.749,.184],[.905,.132]],[[1,0]]];i.easeOutBounce=L;var b=[[[0,1]],[[.102,1],[.05,.864],[.117,.86]],[[.216,.996],[.208,.844],[.227,.808]],[[.347,.996],[.343,.8],[.48,.292]],[[.635,.004],[.511,.676],[.656,.208]],[[.787,0],[.76,.2],[.795,.144]],[[.905,-.004],[.899,.164],[.944,.144]],[[1,0]]];i.easeInOutBounce=b;var _=new Map([["linear",e],["easeInSine",t],["easeOutSine",n],["easeInOutSine",r],["easeInQuad",a],["easeOutQuad",o],["easeInOutQuad",s],["easeInCubic",l],["easeOutCubic",c],["easeInOutCubic",u],["easeInQuart",d],["easeOutQuart",f],["easeInOutQuart",h],["easeInQuint",m],["easeOutQuint",v],["easeInOutQuint",g],["easeInBack",p],["easeOutBack",y],["easeInOutBack",x],["easeInElastic",S],["easeOutElastic",M],["easeInOutElastic",O],["easeInBounce",T],["easeOutBounce",L],["easeInOutBounce",b]]);i.default=_}(Ju)),Ju}var ed;function $M(){return ed||(ed=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.transition=o,i.injectNewCurve=x,i.default=void 0;var t=e(Bt()),n=e(Zt()),r=e(YM()),a="linear";function o(M){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:30,b=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1;if(!s.apply(void 0,arguments))return!1;try{var _=l(M),V=c(_,L);return!b||typeof T=="number"?m(O,T,V):y(O,T,V)}catch{return[T]}}function s(M){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,L=arguments.length>3&&arguments[3]!==void 0?arguments[3]:30;if(!M||O===!1||T===!1||!L||(0,n.default)(O)!==(0,n.default)(T))return!1;var b=(0,n.default)(T);return b==="string"||b==="boolean"||!M.length?!1:(!r.default.has(M)&&M instanceof Array,!0)}function l(M){var O="";return r.default.has(M)?O=r.default.get(M):M instanceof Array?O=M:O=r.default.get(a),O}function c(M,O){var T=1/(O-1),L=new Array(O).fill(0).map(function(_,V){return V*T}),b=L.map(function(_){return u(M,_)});return b}function u(M,O){var T=d(M,O),L=f(T,O);return h(T,L)}function d(M,O){var T=M.length-1,L="",b="";M.findIndex(function(B,H){if(H!==T){L=B,b=M[H+1];var $=L[0][0],E=b[0][0];return O>=$&&O<E}});var _=L[0],V=L[2]||L[0],N=b[1]||b[0],F=b[0];return[_,V,N,F]}function f(M,O){var T=M[0][0],L=M[3][0],b=L-T,_=O-T;return _/b}function h(M,O){var T=(0,t.default)(M,4),L=(0,t.default)(T[0],2),b=L[1],_=(0,t.default)(T[1],2),V=_[1],N=(0,t.default)(T[2],2),F=N[1],B=(0,t.default)(T[3],2),H=B[1],$=Math.pow,E=1-O,D=b*$(E,3),R=3*V*O*$(E,2),U=3*F*$(O,2)*E,A=H*$(O,3);return 1-(D+R+U+A)}function m(M,O,T){var L="object";return typeof M=="number"&&(L="number"),M instanceof Array&&(L="array"),L==="number"?v(M,O,T):L==="array"?g(M,O,T):L==="object"?p(M,O,T):T.map(function(b){return O})}function v(M,O,T){var L=O-M;return T.map(function(b){return M+L*b})}function g(M,O,T){var L=O.map(function(b,_){return typeof b!="number"?!1:b-M[_]});return T.map(function(b){return L.map(function(_,V){return _===!1?O[V]:M[V]+_*b})})}function p(M,O,T){var L=Object.keys(O),b=L.map(function(N){return M[N]}),_=L.map(function(N){return O[N]}),V=g(b,_,T);return V.map(function(N){var F={};return N.forEach(function(B,H){return F[L[H]]=B}),F})}function y(M,O,T){var L=m(M,O,T),b=function(N){var F=M[N],B=O[N];if((0,n.default)(B)!=="object")return"continue";var H=y(F,B,T);L.forEach(function($,E){return $[N]=H[E]})};for(var _ in O)var V=b(_);return L}function x(M,O){!M||!O||r.default.set(M,O)}var S=o;i.default=S}(Zu)),Zu}var td;function ZM(){return td||(td=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=e(XM()),n=e(qM()),r=e(Zt()),a=e(Tt()),o=e(aa()),s=e(KM()),l=e($M()),c=Pt(),u=function f(h,m){(0,o.default)(this,f),m=(0,c.deepClone)(m,!0);var v={visible:!0,drag:!1,hover:!1,index:1,animationDelay:0,animationFrame:30,animationCurve:"linear",animationPause:!1,hoverRect:null,mouseEnter:null,mouseOuter:null,click:null},g={status:"static",animationRoot:[],animationKeys:[],animationFrameState:[],cache:{}};m.shape||(m.shape={}),m.style||(m.style={});var p=Object.assign({},h.shape,m.shape);Object.assign(v,m,g),Object.assign(this,h,v),this.shape=p,this.style=new s.default(m.style),this.addedProcessor()};i.default=u,u.prototype.addedProcessor=function(){typeof this.setGraphCenter=="function"&&this.setGraphCenter(null,this),typeof this.added=="function"&&this.added(this)},u.prototype.drawProcessor=function(f,h){var m=f.ctx;h.style.initStyle(m),typeof this.beforeDraw=="function"&&this.beforeDraw(this,f),h.draw(f,h),typeof this.drawed=="function"&&this.drawed(this,f),h.style.restoreTransform(m)},u.prototype.hoverCheckProcessor=function(f,h){var m=h.hoverRect,v=h.style,g=h.hoverCheck,p=v.graphCenter,y=v.rotate,x=v.scale,S=v.translate;return p&&(y&&(f=(0,c.getRotatePointPos)(-y,f,p)),x&&(f=(0,c.getScalePointPos)(x.map(function(M){return 1/M}),f,p)),S&&(f=(0,c.getTranslatePointPos)(S.map(function(M){return M*-1}),f))),m?c.checkPointIsInRect.apply(void 0,[f].concat((0,a.default)(m))):g(f,this)},u.prototype.moveProcessor=function(f){this.move(f,this),typeof this.beforeMove=="function"&&this.beforeMove(f,this),typeof this.setGraphCenter=="function"&&this.setGraphCenter(f,this),typeof this.moved=="function"&&this.moved(f,this)},u.prototype.attr=function(f){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;if(!f||h===void 0)return!1;var m=(0,r.default)(this[f])==="object";m&&(h=(0,c.deepClone)(h,!0));var v=this.render;f==="style"?this.style.update(h):m?Object.assign(this[f],h):this[f]=h,f==="index"&&v.sortGraphsByIndex(),v.drawAllGraph()},u.prototype.animation=function(){var f=(0,n.default)(t.default.mark(function h(m,v){var g,p,y,x,S,M,O,T,L,b=arguments;return t.default.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(g=b.length>2&&b[2]!==void 0?b[2]:!1,!(m!=="shape"&&m!=="style")){_.next=4;break}return _.abrupt("return");case 4:if(v=(0,c.deepClone)(v,!0),m==="style"&&this.style.colorProcessor(v),p=this[m],y=Object.keys(v),x={},y.forEach(function(V){return x[V]=p[V]}),S=this.animationFrame,M=this.animationCurve,O=this.animationDelay,T=(0,l.default)(M,x,v,S,!0),this.animationRoot.push(p),this.animationKeys.push(y),this.animationFrameState.push(T),!g){_.next=17;break}return _.abrupt("return");case 17:if(!(O>0)){_.next=20;break}return _.next=20,d(O);case 20:return L=this.render,_.abrupt("return",new Promise(function(){var V=(0,n.default)(t.default.mark(function N(F){return t.default.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,L.launchAnimation();case 2:F();case 3:case"end":return B.stop()}},N)}));return function(N){return V.apply(this,arguments)}}()));case 22:case"end":return _.stop()}},h,this)}));return function(h,m){return f.apply(this,arguments)}}(),u.prototype.turnNextAnimationFrame=function(f){var h=this.animationDelay,m=this.animationRoot,v=this.animationKeys,g=this.animationFrameState,p=this.animationPause;p||Date.now()-f<h||(m.forEach(function(y,x){v[x].forEach(function(S){y[S]=g[x][0][S]})}),g.forEach(function(y,x){y.shift();var S=y.length===0;S&&(m[x]=null),S&&(v[x]=null)}),this.animationFrameState=g.filter(function(y){return y.length}),this.animationRoot=m.filter(function(y){return y}),this.animationKeys=v.filter(function(y){return y}))},u.prototype.animationEnd=function(){var f=this.animationFrameState,h=this.animationKeys,m=this.animationRoot,v=this.render;return m.forEach(function(g,p){var y=h[p],x=f[p].pop();y.forEach(function(S){return g[S]=x[S]})}),this.animationFrameState=[],this.animationKeys=[],this.animationRoot=[],v.drawAllGraph()},u.prototype.pauseAnimation=function(){this.attr("animationPause",!0)},u.prototype.playAnimation=function(){var f=this.render;return this.attr("animationPause",!1),new Promise(function(){var h=(0,n.default)(t.default.mark(function m(v){return t.default.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,f.launchAnimation();case 2:v();case 3:case"end":return g.stop()}},m)}));return function(m){return h.apply(this,arguments)}}())},u.prototype.delProcessor=function(f){var h=this,m=f.graphs,v=m.findIndex(function(g){return g===h});v!==-1&&(typeof this.beforeDelete=="function"&&this.beforeDelete(this),m.splice(v,1,null),typeof this.deleted=="function"&&this.deleted(this))};function d(f){return new Promise(function(h){setTimeout(h,f)})}}(Hu)),Hu}var nd;function JM(){return nd||(nd=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=e(Mn()),n=e(Tt()),r=e(aa()),a=e(oa),o=e(Xs()),s=Pt(),l=e(qs()),c=e(ZM());function u(y,x){var S=Object.keys(y);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(y);x&&(M=M.filter(function(O){return Object.getOwnPropertyDescriptor(y,O).enumerable})),S.push.apply(S,M)}return S}function d(y){for(var x=1;x<arguments.length;x++){var S=arguments[x]!=null?arguments[x]:{};x%2?u(S,!0).forEach(function(M){(0,t.default)(y,M,S[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(S)):u(S).forEach(function(M){Object.defineProperty(y,M,Object.getOwnPropertyDescriptor(S,M))})}return y}var f=function y(x){if((0,r.default)(this,y),!!x){var S=x.getContext("2d"),M=x.clientWidth,O=x.clientHeight,T=[M,O];x.setAttribute("width",M),x.setAttribute("height",O),this.ctx=S,this.area=T,this.animationStatus=!1,this.graphs=[],this.color=a.default,this.bezierCurve=o.default,x.addEventListener("mousedown",v.bind(this)),x.addEventListener("mousemove",g.bind(this)),x.addEventListener("mouseup",p.bind(this))}};i.default=f,f.prototype.clearArea=function(){var y,x=this.area;(y=this.ctx).clearRect.apply(y,[0,0].concat((0,n.default)(x)))},f.prototype.add=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},x=y.name;if(x){var S=l.default.get(x);if(S){var M=new c.default(S,y);if(M.validator(M))return M.render=this,this.graphs.push(M),this.sortGraphsByIndex(),this.drawAllGraph(),M}}},f.prototype.sortGraphsByIndex=function(){var y=this.graphs;y.sort(function(x,S){if(x.index>S.index)return 1;if(x.index===S.index)return 0;if(x.index<S.index)return-1})},f.prototype.delGraph=function(y){typeof y.delProcessor=="function"&&(y.delProcessor(this),this.graphs=this.graphs.filter(function(x){return x}),this.drawAllGraph())},f.prototype.delAllGraph=function(){var y=this;this.graphs.forEach(function(x){return x.delProcessor(y)}),this.graphs=this.graphs.filter(function(x){return x}),this.drawAllGraph()},f.prototype.drawAllGraph=function(){var y=this;this.clearArea(),this.graphs.filter(function(x){return x&&x.visible}).forEach(function(x){return x.drawProcessor(y,x)})},f.prototype.launchAnimation=function(){var y=this,x=this.animationStatus;if(!x)return this.animationStatus=!0,new Promise(function(S){h.call(y,function(){y.animationStatus=!1,S()},Date.now())})};function h(y,x){var S=this.graphs;if(!m(S)){y();return}S.forEach(function(M){return M.turnNextAnimationFrame(x)}),this.drawAllGraph(),requestAnimationFrame(h.bind(this,y,x))}function m(y){return y.find(function(x){return!x.animationPause&&x.animationFrameState.length})}function v(y){var x=this.graphs,S=x.find(function(M){return M.status==="hover"});S&&(S.status="active")}function g(y){var x=y.offsetX,S=y.offsetY,M=[x,S],O=this.graphs,T=O.find(function(F){return F.status==="active"||F.status==="drag"});if(T){if(!T.drag||typeof T.move!="function")return;T.moveProcessor(y),T.status="drag";return}var L=O.find(function(F){return F.status==="hover"}),b=O.filter(function(F){return F.hover&&(typeof F.hoverCheck=="function"||F.hoverRect)}),_=b.find(function(F){return F.hoverCheckProcessor(M,F)});_?document.body.style.cursor=_.style.hoverCursor:document.body.style.cursor="default";var V=!1,N=!1;if(L&&(V=typeof L.mouseOuter=="function"),_&&(N=typeof _.mouseEnter=="function"),!(!_&&!L)){if(!_&&L){V&&L.mouseOuter(y,L),L.status="static";return}if(!(_&&_===L)){if(_&&!L){N&&_.mouseEnter(y,_),_.status="hover";return}_&&L&&_!==L&&(V&&L.mouseOuter(y,L),L.status="static",N&&_.mouseEnter(y,_),_.status="hover")}}}function p(y){var x=this.graphs,S=x.find(function(O){return O.status==="active"}),M=x.find(function(O){return O.status==="drag"});S&&typeof S.click=="function"&&S.click(y,S),x.forEach(function(O){return O&&(O.status="static")}),S&&(S.status="hover"),M&&(M.status="hover")}f.prototype.clone=function(y){var x=y.style.getStyle(),S=d({},y,{style:x});return delete S.render,S=(0,s.deepClone)(S,!0),this.add(S)}}(iu)),iu}(function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"CRender",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(i,"extendNewGraph",{enumerable:!0,get:function(){return n.extendNewGraph}}),i.default=void 0;var t=e(JM()),n=qs(),r=t.default;i.default=r})(js);var QM={},id={},qt={},rd;function Jt(){if(rd)return qt;rd=1;var i=ct;Object.defineProperty(qt,"__esModule",{value:!0}),qt.filterNonNumber=r,qt.deepMerge=a,qt.mulAdd=o,qt.mergeSameStackData=s,qt.getTwoPointDistance=l,qt.getLinearGradientColor=c,qt.getPolylineLength=u,qt.getPointToLineDistance=d,qt.initNeedSeries=f,qt.radianToAngle=h;var e=i(Tt()),t=i(Zt()),n=Pt();function r(m){return m.filter(function(v){return typeof v=="number"})}function a(m,v){for(var g in v){if(m[g]&&(0,t.default)(m[g])==="object"){a(m[g],v[g]);continue}if((0,t.default)(v[g])==="object"){m[g]=(0,n.deepClone)(v[g],!0);continue}m[g]=v[g]}return m}function o(m){return m=r(m),m.reduce(function(v,g){return v+g},0)}function s(m,v){var g=m.stack;if(!g)return(0,e.default)(m.data);var p=v.filter(function(M){var O=M.stack;return O===g}),y=p.findIndex(function(M){var O=M.data;return O===m.data}),x=p.splice(0,y+1).map(function(M){var O=M.data;return O}),S=x[0].length;return new Array(S).fill(0).map(function(M,O){return o(x.map(function(T){return T[O]}))})}function l(m,v){var g=Math.abs(m[0]-v[0]),p=Math.abs(m[1]-v[1]);return Math.sqrt(g*g+p*p)}function c(m,v,g,p){if(!(!m||!v||!g||!p.length)){var y=p;typeof y=="string"&&(y=[p,p]);var x=m.createLinearGradient.apply(m,(0,e.default)(v).concat((0,e.default)(g))),S=1/(y.length-1);return y.forEach(function(M,O){return x.addColorStop(S*O,M)}),x}}function u(m){var v=new Array(m.length-1).fill(0).map(function(p,y){return[m[y],m[y+1]]}),g=v.map(function(p){return l.apply(void 0,(0,e.default)(p))});return o(g)}function d(m,v,g){var p=l(m,v),y=l(m,g),x=l(v,g);return .5*Math.sqrt((p+y+x)*(p+y-x)*(p+x-y)*(y+x-p))/x}function f(m,v,g){return m=m.filter(function(p){var y=p.type;return y===g}),m=m.map(function(p){return a((0,n.deepClone)(v,!0),p)}),m.filter(function(p){var y=p.show;return y})}function h(m){return m/Math.PI*180}return qt}var th=ct,eS=th(Mn()),ad=th(Tt()),fo=js,tS=qs(),Jr=Pt(),nS=oa,iS=Jt();function od(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function sd(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?od(Object(t),!0).forEach(function(n){(0,eS.default)(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):od(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}var rS={shape:{rx:0,ry:0,ir:0,or:0,startAngle:0,endAngle:0,clockWise:!0},validator:function(i){var e=i.shape,t=["rx","ry","ir","or","startAngle","endAngle"];return!t.find(function(n){return typeof e[n]!="number"})},draw:function(i,e){var t=i.ctx,n=e.shape;t.beginPath();var r=n.rx,a=n.ry,o=n.ir,s=n.or,l=n.startAngle,c=n.endAngle,u=n.clockWise;r=parseInt(r)+.5,a=parseInt(a)+.5,t.arc(r,a,o>0?o:0,l,c,!u);var d=(0,Jr.getCircleRadianPoint)(r,a,s,c).map(function(h){return parseInt(h)+.5}),f=(0,Jr.getCircleRadianPoint)(r,a,o,l).map(function(h){return parseInt(h)+.5});t.lineTo.apply(t,(0,ad.default)(d)),t.arc(r,a,s>0?s:0,c,l,u),t.lineTo.apply(t,(0,ad.default)(f)),t.closePath(),t.stroke(),t.fill()}},aS={shape:{rx:0,ry:0,r:0,startAngle:0,endAngle:0,gradientStartAngle:null,gradientEndAngle:null},validator:function(i){var e=i.shape,t=["rx","ry","r","startAngle","endAngle"];return!t.find(function(n){return typeof e[n]!="number"})},draw:function(i,e){var t=i.ctx,n=e.shape,r=e.style,a=r.gradient;a=a.map(function(O){return(0,nS.getColorFromRgbValue)(O)}),a.length===1&&(a=[a[0],a[0]]);var o=a.length-1,s=n.gradientStartAngle,l=n.gradientEndAngle,c=n.startAngle,u=n.endAngle,d=n.r,f=n.rx,h=n.ry;s===null&&(s=c),l===null&&(l=u);var m=(l-s)/o;m===Math.PI*2&&(m=Math.PI*2-.001);for(var v=0;v<o;v++){t.beginPath();var g=(0,Jr.getCircleRadianPoint)(f,h,d,c+m*v),p=(0,Jr.getCircleRadianPoint)(f,h,d,c+m*(v+1)),y=(0,iS.getLinearGradientColor)(t,g,p,[a[v],a[v+1]]),x=c+m*v,S=c+m*(v+1),M=!1;if(S>u&&(S=u,M=!0),t.arc(f,h,d,x,S),t.strokeStyle=y,t.stroke(),M)break}}},oS={shape:{number:[],content:"",position:[0,0],toFixed:0,rowGap:0,formatter:null},validator:function(i){var e=i.shape,t=e.number,n=e.content,r=e.position;return!(!(t instanceof Array)||typeof n!="string"||!(r instanceof Array))},draw:function(i,e){var t=i.ctx,n=e.shape,r=n.number,a=n.content,o=n.toFixed,s=n.rowGap,l=n.formatter,c=a.split("{nt}"),u="";c.forEach(function(d,f){var h=r[f];typeof h!="number"&&(h=""),typeof h=="number"&&(h=h.toFixed(o),typeof l=="function"&&(h=l(h))),u+=d+(h||"")}),tS.text.draw({ctx:t},{shape:sd(sd({},n),{},{content:u,rowGap:s})})}},sS={shape:{x:0,y:0,w:0,h:0},validator:function(i){var e=i.shape,t=e.x,n=e.y,r=e.w,a=e.h;return!(typeof t!="number"||typeof n!="number"||typeof r!="number"||typeof a!="number")},draw:function(i,e){var t=i.ctx,n=e.shape;t.beginPath();var r=n.x,a=n.y,o=n.w,s=n.h,l=s/2;t.strokeStyle=t.fillStyle,t.moveTo(r,a+l),t.lineTo(r+o,a+l),t.lineWidth=1,t.stroke(),t.beginPath();var c=l-5*2;c<=0&&(c=3),t.arc(r+o/2,a+l,c,0,Math.PI*2),t.lineWidth=5,t.stroke(),t.fillStyle="#fff",t.fill()},hoverCheck:function(i,e){var t=e.shape,n=t.x,r=t.y,a=t.w,o=t.h;return(0,Jr.checkPointIsInRect)(i,n,r,a,o)},setGraphCenter:function(i,e){var t=e.shape,n=e.style,r=t.x,a=t.y,o=t.w,s=t.h;n.graphCenter=[r+o/2,a+s/2]}};(0,fo.extendNewGraph)("pie",rS);(0,fo.extendNewGraph)("agArc",aS);(0,fo.extendNewGraph)("numberText",oS);(0,fo.extendNewGraph)("lineIcon",sS);var ld={},Fa={},cd={},Ir={},ud;function lS(){if(ud)return Ir;ud=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.colorConfig=void 0;var i=["#37a2da","#32c5e9","#67e0e3","#9fe6b8","#ffdb5c","#ff9f7f","#fb7293","#e062ae","#e690d1","#e7bcf3","#9d96f5","#8378ea","#96bfff"];return Ir.colorConfig=i,Ir}var Or={},dd;function cS(){if(dd)return Or;dd=1,Object.defineProperty(Or,"__esModule",{value:!0}),Or.gridConfig=void 0;var i={left:"10%",right:"10%",top:60,bottom:60,style:{fill:"rgba(0, 0, 0, 0)"},rLevel:-30,animationCurve:"easeOutCubic",animationFrame:30};return Or.gridConfig=i,Or}var xi={},fd;function uS(){if(fd)return xi;fd=1,Object.defineProperty(xi,"__esModule",{value:!0}),xi.yAxisConfig=xi.xAxisConfig=void 0;var i={name:"",show:!0,position:"bottom",nameGap:15,nameLocation:"end",nameTextStyle:{fill:"#333",fontSize:10},min:"20%",max:"20%",interval:null,minInterval:null,maxInterval:null,boundaryGap:null,splitNumber:5,axisLine:{show:!0,style:{stroke:"#333",lineWidth:1}},axisTick:{show:!0,style:{stroke:"#333",lineWidth:1}},axisLabel:{show:!0,formatter:null,style:{fill:"#333",fontSize:10,rotate:0}},splitLine:{show:!1,style:{stroke:"#d4d4d4",lineWidth:1}},rLevel:-20,animationCurve:"easeOutCubic",animationFrame:50};xi.xAxisConfig=i;var e={name:"",show:!0,position:"left",nameGap:15,nameLocation:"end",nameTextStyle:{fill:"#333",fontSize:10},min:"20%",max:"20%",interval:null,minInterval:null,maxInterval:null,boundaryGap:null,splitNumber:5,axisLine:{show:!0,style:{stroke:"#333",lineWidth:1}},axisTick:{show:!0,style:{stroke:"#333",lineWidth:1}},axisLabel:{show:!0,formatter:null,style:{fill:"#333",fontSize:10,rotate:0}},splitLine:{show:!0,style:{stroke:"#d4d4d4",lineWidth:1}},rLevel:-20,animationCurve:"easeOutCubic",animationFrame:50};return xi.yAxisConfig=e,xi}var Ur={},hd;function dS(){if(hd)return Ur;hd=1,Object.defineProperty(Ur,"__esModule",{value:!0}),Ur.titleConfig=void 0;var i={show:!0,text:"",offset:[0,-20],style:{fill:"#333",fontSize:17,fontWeight:"bold",textAlign:"center",textBaseline:"bottom"},rLevel:20,animationCurve:"easeOutCubic",animationFrame:50};return Ur.titleConfig=i,Ur}var Fr={},pd;function fS(){if(pd)return Fr;pd=1,Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.lineConfig=void 0;var i={show:!0,name:"",stack:"",smooth:!1,xAxisIndex:0,yAxisIndex:0,data:[],lineStyle:{lineWidth:1},linePoint:{show:!0,radius:2,style:{fill:"#fff",lineWidth:1}},lineArea:{show:!1,gradient:[],style:{opacity:.5}},label:{show:!1,position:"top",offset:[0,-10],formatter:null,style:{fontSize:10}},rLevel:10,animationCurve:"easeOutCubic",animationFrame:50};return Fr.lineConfig=i,Fr}var kr={},md;function hS(){if(md)return kr;md=1,Object.defineProperty(kr,"__esModule",{value:!0}),kr.barConfig=void 0;var i={show:!0,name:"",stack:"",shapeType:"normal",echelonOffset:10,barWidth:"auto",barGap:"30%",barCategoryGap:"20%",xAxisIndex:0,yAxisIndex:0,data:[],backgroundBar:{show:!1,width:"auto",style:{fill:"rgba(200, 200, 200, .4)"}},label:{show:!1,position:"top",offset:[0,-10],formatter:null,style:{fontSize:10}},gradient:{color:[],local:!0},barStyle:{},independentColor:!1,independentColors:[],rLevel:0,animationCurve:"easeOutCubic",animationFrame:50};return kr.barConfig=i,kr}var Nr={},gd;function nh(){if(gd)return Nr;gd=1,Object.defineProperty(Nr,"__esModule",{value:!0}),Nr.pieConfig=void 0;var i={show:!0,name:"",radius:"50%",center:["50%","50%"],startAngle:-Math.PI/2,roseType:!1,roseSort:!0,roseIncrement:"auto",data:[],insideLabel:{show:!1,formatter:"{percent}%",style:{fontSize:10,fill:"#fff",textAlign:"center",textBaseline:"middle"}},outsideLabel:{show:!0,formatter:"{name}",style:{fontSize:11},labelLineBendGap:"20%",labelLineEndLength:50,labelLineStyle:{lineWidth:1}},pieStyle:{},percentToFixed:0,rLevel:10,animationDelayGap:60,animationCurve:"easeOutCubic",startAnimationCurve:"easeOutBack",animationFrame:50};return Nr.pieConfig=i,Nr}var zr={},bd;function pS(){if(bd)return zr;bd=1,Object.defineProperty(zr,"__esModule",{value:!0}),zr.radarAxisConfig=void 0;var i={show:!0,center:["50%","50%"],radius:"65%",startAngle:-Math.PI/2,splitNum:5,polygon:!1,axisLabel:{show:!0,labelGap:15,color:[],style:{fill:"#333"}},axisLine:{show:!0,color:[],style:{stroke:"#999",lineWidth:1}},splitLine:{show:!0,color:[],style:{stroke:"#d4d4d4",lineWidth:1}},splitArea:{show:!1,color:["#f5f5f5","#e6e6e6"],style:{}},rLevel:-10,animationCurve:"easeOutCubic",animationFrane:50};return zr.radarAxisConfig=i,zr}var Br={},vd;function mS(){if(vd)return Br;vd=1,Object.defineProperty(Br,"__esModule",{value:!0}),Br.radarConfig=void 0;var i={show:!0,name:"",data:[],radarStyle:{lineWidth:1},point:{show:!0,radius:2,style:{fill:"#fff"}},label:{show:!0,offset:[0,0],labelGap:5,formatter:null,style:{fontSize:10}},rLevel:10,animationCurve:"easeOutCubic",animationFrane:50};return Br.radarConfig=i,Br}var Gr={},xd;function ih(){if(xd)return Gr;xd=1,Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.gaugeConfig=void 0;var i={show:!0,name:"",radius:"60%",center:["50%","50%"],startAngle:-(Math.PI/4)*5,endAngle:Math.PI/4,min:0,max:100,splitNum:5,arcLineWidth:15,data:[],dataItemStyle:{},axisTick:{show:!0,tickLength:6,style:{stroke:"#999",lineWidth:1}},axisLabel:{show:!0,data:[],formatter:null,labelGap:5,style:{}},pointer:{show:!0,valueIndex:0,style:{scale:[1,1],fill:"#fb7293"}},details:{show:!1,formatter:null,offset:[0,0],valueToFixed:0,position:"center",style:{fontSize:20,fontWeight:"bold",textAlign:"center",textBaseline:"middle"}},backgroundArc:{show:!0,style:{stroke:"#e0e0e0"}},rLevel:10,animationCurve:"easeOutCubic",animationFrame:50};return Gr.gaugeConfig=i,Gr}var Hr={},_d;function gS(){if(_d)return Hr;_d=1,Object.defineProperty(Hr,"__esModule",{value:!0}),Hr.legendConfig=void 0;var i={show:!0,orient:"horizontal",left:"auto",right:"auto",top:"auto",bottom:"auto",itemGap:10,iconWidth:25,iconHeight:10,selectAble:!0,data:[],textStyle:{fontFamily:"Arial",fontSize:13,fill:"#000"},iconStyle:{},textUnselectedStyle:{fontFamily:"Arial",fontSize:13,fill:"#999"},iconUnselectedStyle:{fill:"#999"},rLevel:20,animationCurve:"easeOutCubic",animationFrame:50};return Hr.legendConfig=i,Hr}var yd;function Ln(){return yd||(yd=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.changeDefaultConfig=m,Object.defineProperty(i,"colorConfig",{enumerable:!0,get:function(){return e.colorConfig}}),Object.defineProperty(i,"gridConfig",{enumerable:!0,get:function(){return t.gridConfig}}),Object.defineProperty(i,"xAxisConfig",{enumerable:!0,get:function(){return n.xAxisConfig}}),Object.defineProperty(i,"yAxisConfig",{enumerable:!0,get:function(){return n.yAxisConfig}}),Object.defineProperty(i,"titleConfig",{enumerable:!0,get:function(){return r.titleConfig}}),Object.defineProperty(i,"lineConfig",{enumerable:!0,get:function(){return a.lineConfig}}),Object.defineProperty(i,"barConfig",{enumerable:!0,get:function(){return o.barConfig}}),Object.defineProperty(i,"pieConfig",{enumerable:!0,get:function(){return s.pieConfig}}),Object.defineProperty(i,"radarAxisConfig",{enumerable:!0,get:function(){return l.radarAxisConfig}}),Object.defineProperty(i,"radarConfig",{enumerable:!0,get:function(){return c.radarConfig}}),Object.defineProperty(i,"gaugeConfig",{enumerable:!0,get:function(){return u.gaugeConfig}}),Object.defineProperty(i,"legendConfig",{enumerable:!0,get:function(){return d.legendConfig}}),i.keys=void 0;var e=lS(),t=cS(),n=uS(),r=dS(),a=fS(),o=hS(),s=nh(),l=pS(),c=mS(),u=ih(),d=gS(),f=Jt(),h={colorConfig:e.colorConfig,gridConfig:t.gridConfig,xAxisConfig:n.xAxisConfig,yAxisConfig:n.yAxisConfig,titleConfig:r.titleConfig,lineConfig:a.lineConfig,barConfig:o.barConfig,pieConfig:s.pieConfig,radarAxisConfig:l.radarAxisConfig,radarConfig:c.radarConfig,gaugeConfig:u.gaugeConfig,legendConfig:d.legendConfig};function m(g,p){h["".concat(g,"Config")]&&(0,f.deepMerge)(h["".concat(g,"Config")],p)}var v=["color","title","legend","xAxis","yAxis","grid","radarAxis","line","bar","pie","radar","gauge"];i.keys=v}(cd)),cd}var Md;function bS(){if(Md)return Fa;Md=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.mergeColor=n;var i=Ln(),e=Pt(),t=Jt();function n(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=(0,e.deepClone)(i.colorConfig,!0),s=a.color,l=a.series;if(l||(l=[]),s||(s=[]),a.color=s=(0,t.deepMerge)(o,s),!!l.length){var c=s.length;l.forEach(function(h,m){h.color||(h.color=s[m%c])});var u=l.filter(function(h){var m=h.type;return m==="pie"});u.forEach(function(h){return h.data.forEach(function(m,v){return m.color=s[v%c]})});var d=l.filter(function(h){var m=h.type;return m==="gauge"});d.forEach(function(h){return h.data.forEach(function(m,v){return m.color=s[v%c]})});var f=l.filter(function(h){var m=h.type,v=h.independentColor;return m==="bar"&&v});f.forEach(function(h){h.independentColors||(h.independentColors=s)})}}return Fa}var ka={},Ji={},Sd;function Dn(){if(Sd)return Ji;Sd=1;var i=ct;Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.doUpdate=u,Ji.Updater=void 0;var e=i(Tt()),t=i(Zt()),n=i(aa()),r=function d(f,h){(0,n.default)(this,d);var m=f.chart,v=f.key,g=f.getGraphConfig;typeof g=="function"&&(m[v]||(this.graphs=m[v]=[]),Object.assign(this,f),this.update(h))};Ji.Updater=r,r.prototype.update=function(d){var f=this,h=this.graphs,m=this.beforeUpdate;if(a(this,d),!!d.length){var v=(0,t.default)(m);d.forEach(function(g,p){v==="function"&&m(h,g,p,f);var y=h[p];y?o(y,g,p,f):l(h,g,p,f)})}};function a(d,f){var h=d.graphs,m=d.chart.render,v=h.length,g=f.length;if(v>g){var p=h.splice(g);p.forEach(function(y){return y.forEach(function(x){return m.delGraph(x)})})}}function o(d,f,h,m){var v=m.getGraphConfig,g=m.chart.render,p=m.beforeChange,y=v(f,m);s(d,y,g),d.forEach(function(x,S){var M=y[S];typeof p=="function"&&p(x,M),c(x,M)})}function s(d,f,h){var m=d.length,v=f.length;if(v>m){var g=d.slice(-1)[0],p=v-m,y=new Array(p).fill(0).map(function(S){return h.clone(g)});d.push.apply(d,(0,e.default)(y))}else if(v<m){var x=d.splice(v);x.forEach(function(S){return h.delGraph(S)})}}function l(d,f,h,m){var v=m.getGraphConfig,g=m.getStartGraphConfig,p=m.chart,y=p.render,x=null;typeof g=="function"&&(x=g(f,m));var S=v(f,m);if(S.length){x?(d[h]=x.map(function(O){return y.add(O)}),d[h].forEach(function(O,T){var L=S[T];c(O,L)})):d[h]=S.map(function(O){return y.add(O)});var M=m.afterAddGraph;typeof M=="function"&&M(d[h])}}function c(d,f){var h=Object.keys(f);h.forEach(function(m){m==="shape"||m==="style"?d.animation(m,f[m],!0):d[m]=f[m]})}function u(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=d.chart,h=d.series,m=d.key,v=d.getGraphConfig,g=d.getStartGraphConfig,p=d.beforeChange,y=d.beforeUpdate,x=d.afterAddGraph;f[m]?f[m].update(h):f[m]=new r({chart:f,key:m,getGraphConfig:v,getStartGraphConfig:g,beforeChange:p,beforeUpdate:y,afterAddGraph:x},h)}return Ji}var Ed;function vS(){if(Ed)return ka;Ed=1;var i=ct;Object.defineProperty(ka,"__esModule",{value:!0}),ka.title=o;var e=i(Bt()),t=Dn(),n=Pt(),r=Ln(),a=Jt();function o(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=[];d.title&&(f[0]=(0,a.deepMerge)((0,n.deepClone)(r.titleConfig,!0),d.title)),(0,t.doUpdate)({chart:u,series:f,key:"title",getGraphConfig:s})}function s(u,d){var f=r.titleConfig.animationCurve,h=r.titleConfig.animationFrame,m=r.titleConfig.rLevel,v=l(u,d),g=c(u);return[{name:"text",index:m,visible:u.show,animationCurve:f,animationFrame:h,shape:v,style:g}]}function l(u,d){var f=u.offset,h=u.text,m=d.chart.gridArea,v=m.x,g=m.y,p=m.w,y=(0,e.default)(f,2),x=y[0],S=y[1];return{content:h,position:[v+p/2+x,g+S]}}function c(u){var d=u.style;return d}return ka}var Na={},Td;function xS(){if(Td)return Na;Td=1;var i=ct;Object.defineProperty(Na,"__esModule",{value:!0}),Na.grid=c;var e=i(Bt()),t=i(Mn()),n=Dn(),r=Pt(),a=Ln(),o=Jt();function s(m,v){var g=Object.keys(m);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(m);v&&(p=p.filter(function(y){return Object.getOwnPropertyDescriptor(m,y).enumerable})),g.push.apply(g,p)}return g}function l(m){for(var v=1;v<arguments.length;v++){var g=arguments[v]!=null?arguments[v]:{};v%2?s(Object(g),!0).forEach(function(p){(0,t.default)(m,p,g[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(g)):s(Object(g)).forEach(function(p){Object.defineProperty(m,p,Object.getOwnPropertyDescriptor(g,p))})}return m}function c(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=v.grid;g=(0,o.deepMerge)((0,r.deepClone)(a.gridConfig,!0),g||{}),(0,n.doUpdate)({chart:m,series:[g],key:"grid",getGraphConfig:u})}function u(m,v){var g=m.animationCurve,p=m.animationFrame,y=m.rLevel,x=d(m,v),S=h(m);return v.chart.gridArea=l({},x),[{name:"rect",index:y,animationCurve:g,animationFrame:p,shape:x,style:S}]}function d(m,v){var g=(0,e.default)(v.chart.render.area,2),p=g[0],y=g[1],x=f(m.left,p),S=f(m.right,p),M=f(m.top,y),O=f(m.bottom,y),T=p-x-S,L=y-M-O;return{x,y:M,w:T,h:L}}function f(m,v){return typeof m=="number"?m:typeof m!="string"?0:v*parseInt(m)/100}function h(m){var v=m.style;return v}return Na}var za={},wd;function _S(){if(wd)return za;wd=1;var i=ct;Object.defineProperty(za,"__esModule",{value:!0}),za.axis=m;var e=i(Zt()),t=i(Bt()),n=i(Mn()),r=i(Tt()),a=Dn(),o=Ln(),s=Jt(),l=Pt();function c(C,z){var W=Object.keys(C);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(C);z&&(Z=Z.filter(function(I){return Object.getOwnPropertyDescriptor(C,I).enumerable})),W.push.apply(W,Z)}return W}function u(C){for(var z=1;z<arguments.length;z++){var W=arguments[z]!=null?arguments[z]:{};z%2?c(Object(W),!0).forEach(function(Z){(0,n.default)(C,Z,W[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(W)):c(Object(W)).forEach(function(Z){Object.defineProperty(C,Z,Object.getOwnPropertyDescriptor(W,Z))})}return C}var d={xAxisConfig:o.xAxisConfig,yAxisConfig:o.yAxisConfig},f=Math.abs,h=Math.pow;function m(C){var z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=z.xAxis,Z=z.yAxis,I=z.series,w=[];W&&Z&&I&&(w=v(W,Z),w=g(w),w=w.filter(function(ie){var ce=ie.show;return ce}),w=p(w),w=y(w,I),w=H(w),w=$(w,C),w=E(w),w=R(w),w=U(w,C)),(0,a.doUpdate)({chart:C,series:w,key:"axisLine",getGraphConfig:A}),(0,a.doUpdate)({chart:C,series:w,key:"axisTick",getGraphConfig:te}),(0,a.doUpdate)({chart:C,series:w,key:"axisLabel",getGraphConfig:ne}),(0,a.doUpdate)({chart:C,series:w,key:"axisName",getGraphConfig:P}),(0,a.doUpdate)({chart:C,series:w,key:"splitLine",getGraphConfig:ae}),C.axisData=w}function v(C,z){var W=[],Z=[];if(C instanceof Array){var I;(I=W).push.apply(I,(0,r.default)(C))}else W.push(C);if(z instanceof Array){var w;(w=Z).push.apply(w,(0,r.default)(z))}else Z.push(z);return W.splice(2),Z.splice(2),W=W.map(function(ie,ce){return u(u({},ie),{},{index:ce,axis:"x"})}),Z=Z.map(function(ie,ce){return u(u({},ie),{},{index:ce,axis:"y"})}),[].concat((0,r.default)(W),(0,r.default)(Z))}function g(C){var z=C.filter(function(Z){var I=Z.axis;return I==="x"}),W=C.filter(function(Z){var I=Z.axis;return I==="y"});return z=z.map(function(Z){return(0,s.deepMerge)((0,l.deepClone)(o.xAxisConfig),Z)}),W=W.map(function(Z){return(0,s.deepMerge)((0,l.deepClone)(o.yAxisConfig),Z)}),[].concat((0,r.default)(z),(0,r.default)(W))}function p(C){var z=C.filter(function(Z){var I=Z.data;return I==="value"}),W=C.filter(function(Z){var I=Z.data;return I!=="value"});return z.forEach(function(Z){typeof Z.boundaryGap!="boolean"&&(Z.boundaryGap=!1)}),W.forEach(function(Z){typeof Z.boundaryGap!="boolean"&&(Z.boundaryGap=!0)}),[].concat((0,r.default)(z),(0,r.default)(W))}function y(C,z){var W=C.filter(function(I){var w=I.data;return w==="value"}),Z=C.filter(function(I){var w=I.data;return w instanceof Array});return W=x(W,z),Z=F(Z),[].concat((0,r.default)(W),(0,r.default)(Z))}function x(C,z){return C.map(function(W){var Z=S(W,z),I=T(W,Z),w=(0,t.default)(I,2),ie=w[0],ce=w[1],ue=B(ie,ce,W),X=W.axisLabel.formatter,de=[];return ie<0&&ce>0?de=_(ie,ce,ue):de=V(ie,ce,ue),de=de.map(function(xe){return parseFloat(xe.toFixed(2))}),u(u({},W),{},{maxValue:de.slice(-1)[0],minValue:de[0],label:N(de,X)})})}function S(C,z){if(z=z.filter(function(ie){var ce=ie.show,ue=ie.type;return!(ce===!1||ue==="pie")}),z.length===0)return[0,0];var W=C.index,Z=C.axis;z=O(z);var I=Z+"Axis",w=z.filter(function(ie){return ie[I]===W});return w.length||(w=z),M(w)}function M(C){if(C){var z=Math.min.apply(Math,(0,r.default)(C.map(function(Z){var I=Z.data;return Math.min.apply(Math,(0,r.default)((0,s.filterNonNumber)(I)))}))),W=Math.max.apply(Math,(0,r.default)(C.map(function(Z){var I=Z.data;return Math.max.apply(Math,(0,r.default)((0,s.filterNonNumber)(I)))})));return[z,W]}}function O(C){var z=(0,l.deepClone)(C,!0);return C.forEach(function(W,Z){var I=(0,s.mergeSameStackData)(W,C);z[Z].data=I}),z}function T(C,z){var W=C.min,Z=C.max,I=C.axis,w=(0,t.default)(z,2),ie=w[0],ce=w[1],ue=(0,e.default)(W),X=(0,e.default)(Z);if(b(W)||(W=d[I+"AxisConfig"].min,ue="string"),b(Z)||(Z=d[I+"AxisConfig"].max,X="string"),ue==="string"){W=parseInt(ie-f(ie*parseFloat(W)/100));var de=L(W);W=parseFloat((W/de-.1).toFixed(1))*de}if(X==="string"){Z=parseInt(ce+f(ce*parseFloat(Z)/100));var xe=L(Z);Z=parseFloat((Z/xe+.1).toFixed(1))*xe}return[W,Z]}function L(C){var z=f(C).toString(),W=z.length,Z=z.replace(/0*$/g,"").indexOf("0"),I=W-1;return Z!==-1&&(I-=Z),h(10,I)}function b(C){var z=(0,e.default)(C),W=z==="string"&&/^\d+%$/.test(C),Z=z==="number";return W||Z}function _(C,z,W){var Z=[],I=[],w=0,ie=0;do Z.push(w-=W);while(w>C);do I.push(ie+=W);while(ie<z);return[].concat((0,r.default)(Z.reverse()),[0],(0,r.default)(I))}function V(C,z,W){var Z=[C],I=C;do Z.push(I+=W);while(I<z);return Z}function N(C,z){return z&&(typeof z=="string"&&(C=C.map(function(W){return z.replace("{value}",W)})),typeof z=="function"&&(C=C.map(function(W,Z){return z({value:W,index:Z})}))),C}function F(C){return C.map(function(z){var W=z.data,Z=z.axisLabel.formatter;return u(u({},z),{},{label:N(W,Z)})})}function B(C,z,W){var Z=W.interval,I=W.minInterval,w=W.maxInterval,ie=W.splitNumber,ce=W.axis,ue=d[ce+"AxisConfig"];if(typeof Z!="number"&&(Z=ue.interval),typeof I!="number"&&(I=ue.minInterval),typeof w!="number"&&(w=ue.maxInterval),typeof ie!="number"&&(ie=ue.splitNumber),typeof Z=="number")return Z;var X=parseInt((z-C)/(ie-1));return X.toString().length>1&&(X=parseInt(X.toString().replace(/\d$/,"0"))),X===0&&(X=1),typeof I=="number"&&X<I?I:typeof w=="number"&&X>w?w:X}function H(C){var z=C.filter(function(Z){var I=Z.axis;return I==="x"}),W=C.filter(function(Z){var I=Z.axis;return I==="y"});return z[0]&&!z[0].position&&(z[0].position=o.xAxisConfig.position),z[1]&&!z[1].position&&(z[1].position=z[0].position==="bottom"?"top":"bottom"),W[0]&&!W[0].position&&(W[0].position=o.yAxisConfig.position),W[1]&&!W[1].position&&(W[1].position=W[0].position==="left"?"right":"left"),[].concat((0,r.default)(z),(0,r.default)(W))}function $(C,z){var W=z.gridArea,Z=W.x,I=W.y,w=W.w,ie=W.h;return C=C.map(function(ce){var ue=ce.position,X=[];return ue==="left"?X=[[Z,I],[Z,I+ie]].reverse():ue==="right"?X=[[Z+w,I],[Z+w,I+ie]].reverse():ue==="top"?X=[[Z,I],[Z+w,I]]:ue==="bottom"&&(X=[[Z,I+ie],[Z+w,I+ie]]),u(u({},ce),{},{linePosition:X})}),C}function E(C,z){return C.map(function(W){var Z=W.axis,I=W.linePosition,w=W.position,ie=W.label,ce=W.boundaryGap;typeof ce!="boolean"&&(ce=d[Z+"AxisConfig"].boundaryGap);var ue=ie.length,X=(0,t.default)(I,2),de=(0,t.default)(X[0],2),xe=de[0],fe=de[1],Le=(0,t.default)(X[1],2),Pe=Le[0],_e=Le[1],Te=Z==="x"?Pe-xe:_e-fe,Se=Te/(ce?ue:ue-1),Ae=new Array(ue).fill(0).map(function(oe,we){return Z==="x"?[xe+Se*(ce?we+.5:we),fe]:[xe,fe+Se*(ce?we+.5:we)]}),Oe=D(Z,ce,w,Ae,Se);return u(u({},W),{},{tickPosition:Ae,tickLinePosition:Oe,tickGap:Se})})}function D(C,z,W,Z,I){var w=C==="x"?1:0,ie=5;C==="x"&&W==="top"&&(ie=-5),C==="y"&&W==="left"&&(ie=-5);var ce=Z.map(function(ue){var X=(0,l.deepClone)(ue);return X[w]+=ie,[(0,l.deepClone)(ue),X]});return z&&(w=C==="x"?0:1,ie=I/2,ce.forEach(function(ue){var X=(0,t.default)(ue,2),de=X[0],xe=X[1];de[w]+=ie,xe[w]+=ie})),ce}function R(C,z){return C.map(function(W){var Z=W.nameGap,I=W.nameLocation,w=W.position,ie=W.linePosition,ce=(0,t.default)(ie,2),ue=ce[0],X=ce[1],de=(0,r.default)(ue);I==="end"&&(de=(0,r.default)(X)),I==="center"&&(de[0]=(ue[0]+X[0])/2,de[1]=(ue[1]+X[1])/2);var xe=0;w==="top"&&I==="center"&&(xe=1),w==="bottom"&&I==="center"&&(xe=1),w==="left"&&I!=="center"&&(xe=1),w==="right"&&I!=="center"&&(xe=1);var fe=Z;return w==="top"&&I!=="end"&&(fe*=-1),w==="left"&&I!=="start"&&(fe*=-1),w==="bottom"&&I==="start"&&(fe*=-1),w==="right"&&I==="end"&&(fe*=-1),de[xe]+=fe,u(u({},W),{},{namePosition:de})})}function U(C,z){var W=z.gridArea,Z=W.w,I=W.h;return C.map(function(w){var ie=w.tickLinePosition,ce=w.position,ue=w.boundaryGap,X=0,de=Z;(ce==="top"||ce==="bottom")&&(X=1),(ce==="top"||ce==="bottom")&&(de=I),(ce==="right"||ce==="bottom")&&(de*=-1);var xe=ie.map(function(fe){var Le=(0,t.default)(fe,1),Pe=Le[0],_e=(0,r.default)(Pe);return _e[X]+=de,[(0,r.default)(Pe),_e]});return ue||xe.shift(),u(u({},w),{},{splitLinePosition:xe})})}function A(C){var z=C.animationCurve,W=C.animationFrame,Z=C.rLevel;return[{name:"polyline",index:Z,visible:C.axisLine.show,animationCurve:z,animationFrame:W,shape:k(C),style:K(C)}]}function k(C){var z=C.linePosition;return{points:z}}function K(C){return C.axisLine.style}function te(C){var z=C.animationCurve,W=C.animationFrame,Z=C.rLevel,I=re(C),w=pe(C);return I.map(function(ie){return{name:"polyline",index:Z,visible:C.axisTick.show,animationCurve:z,animationFrame:W,shape:ie,style:w}})}function re(C){var z=C.tickLinePosition;return z.map(function(W){return{points:W}})}function pe(C){return C.axisTick.style}function ne(C){var z=C.animationCurve,W=C.animationFrame,Z=C.rLevel,I=se(C),w=be(C,I);return I.map(function(ie,ce){return{name:"text",index:Z,visible:C.axisLabel.show,animationCurve:z,animationFrame:W,shape:ie,style:w[ce],setGraphCenter:function(){}}})}function se(C){var z=C.label,W=C.tickPosition,Z=C.position;return W.map(function(I,w){return{position:me(I,Z),content:z[w].toString()}})}function me(C,z){var W=0,Z=10;return(z==="top"||z==="bottom")&&(W=1),(z==="top"||z==="left")&&(Z=-10),C=(0,l.deepClone)(C),C[W]+=Z,C}function be(C,z){var W=C.position,Z=C.axisLabel.style,I=Y(W);Z=(0,s.deepMerge)(I,Z);var w=z.map(function(ie){var ce=ie.position;return u(u({},Z),{},{graphCenter:ce})});return w}function Y(C){if(C==="left")return{textAlign:"right",textBaseline:"middle"};if(C==="right")return{textAlign:"left",textBaseline:"middle"};if(C==="top")return{textAlign:"center",textBaseline:"bottom"};if(C==="bottom")return{textAlign:"center",textBaseline:"top"}}function P(C){var z=C.animationCurve,W=C.animationFrame,Z=C.rLevel;return[{name:"text",index:Z,animationCurve:z,animationFrame:W,shape:q(C),style:j(C)}]}function q(C){var z=C.name,W=C.namePosition;return{content:z,position:W}}function j(C){var z=C.nameLocation,W=C.position,Z=C.nameTextStyle,I=ee(W,z);return(0,s.deepMerge)(I,Z)}function ee(C,z){if(C==="top"&&z==="start"||C==="bottom"&&z==="start"||C==="left"&&z==="center")return{textAlign:"right",textBaseline:"middle"};if(C==="top"&&z==="end"||C==="bottom"&&z==="end"||C==="right"&&z==="center")return{textAlign:"left",textBaseline:"middle"};if(C==="top"&&z==="center"||C==="left"&&z==="end"||C==="right"&&z==="end")return{textAlign:"center",textBaseline:"bottom"};if(C==="bottom"&&z==="center"||C==="left"&&z==="start"||C==="right"&&z==="start")return{textAlign:"center",textBaseline:"top"}}function ae(C){var z=C.animationCurve,W=C.animationFrame,Z=C.rLevel,I=G(C),w=Q(C);return I.map(function(ie){return{name:"polyline",index:Z,visible:C.splitLine.show,animationCurve:z,animationFrame:W,shape:ie,style:w}})}function G(C){var z=C.splitLinePosition;return z.map(function(W){return{points:W}})}function Q(C){return C.splitLine.style}return za}var Ba={},Ad;function yS(){if(Ad)return Ba;Ad=1;var i=ct;Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.line=h;var e=i(Zt()),t=i(Bt()),n=i(Tt()),r=i(Mn()),a=Dn(),o=Ln(),s=i(Xs()),l=Jt();function c(ne,se){var me=Object.keys(ne);if(Object.getOwnPropertySymbols){var be=Object.getOwnPropertySymbols(ne);se&&(be=be.filter(function(Y){return Object.getOwnPropertyDescriptor(ne,Y).enumerable})),me.push.apply(me,be)}return me}function u(ne){for(var se=1;se<arguments.length;se++){var me=arguments[se]!=null?arguments[se]:{};se%2?c(Object(me),!0).forEach(function(be){(0,r.default)(ne,be,me[be])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ne,Object.getOwnPropertyDescriptors(me)):c(Object(me)).forEach(function(be){Object.defineProperty(ne,be,Object.getOwnPropertyDescriptor(me,be))})}return ne}var d=s.default.polylineToBezierCurve,f=s.default.getBezierCurveLength;function h(ne){var se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},me=se.xAxis,be=se.yAxis,Y=se.series,P=[];me&&be&&Y&&(P=(0,l.initNeedSeries)(Y,o.lineConfig,"line"),P=m(P,ne)),(0,a.doUpdate)({chart:ne,series:P,key:"lineArea",getGraphConfig:x,getStartGraphConfig:L,beforeUpdate:b,beforeChange:_}),(0,a.doUpdate)({chart:ne,series:P,key:"line",getGraphConfig:V,getStartGraphConfig:H,beforeUpdate:b,beforeChange:_}),(0,a.doUpdate)({chart:ne,series:P,key:"linePoint",getGraphConfig:$,getStartGraphConfig:R}),(0,a.doUpdate)({chart:ne,series:P,key:"lineLabel",getGraphConfig:U})}function m(ne,se){var me=se.axisData;return ne.map(function(be){var Y=(0,l.mergeSameStackData)(be,ne);Y=v(be,Y);var P=g(be,me),q=p(Y,P),j=y(P);return u(u({},be),{},{linePosition:q.filter(function(ee){return ee}),lineFillBottomPos:j})})}function v(ne,se){var me=ne.data;return se.map(function(be,Y){return typeof me[Y]=="number"?be:null})}function g(ne,se){var me=ne.xAxisIndex,be=ne.yAxisIndex,Y=se.find(function(q){var j=q.axis,ee=q.index;return j==="x"&&ee===me}),P=se.find(function(q){var j=q.axis,ee=q.index;return j==="y"&&ee===be});return[Y,P]}function p(ne,se){var me=se.findIndex(function(w){var ie=w.data;return ie==="value"}),be=se[me],Y=se[1-me],P=be.linePosition,q=be.axis,j=Y.tickPosition,ee=j.length,ae=q==="x"?0:1,G=P[0][ae],Q=P[1][ae],C=Q-G,z=be.maxValue,W=be.minValue,Z=z-W,I=new Array(ee).fill(0).map(function(w,ie){var ce=ne[ie];if(typeof ce!="number")return null;var ue=(ce-W)/Z;return Z===0&&(ue=0),ue*C+G});return I.map(function(w,ie){if(ie>=ee||typeof w!="number")return null;var ce=[w,j[ie][1-ae]];return ae===0||ce.reverse(),ce})}function y(ne){var se=ne.find(function(Q){var C=Q.data;return C==="value"}),me=se.axis,be=se.linePosition,Y=se.minValue,P=se.maxValue,q=me==="x"?0:1,j=be[0][q];if(Y<0&&P>0){var ee=P-Y,ae=Math.abs(be[0][q]-be[1][q]),G=Math.abs(Y)/ee*ae;me==="y"&&(G*=-1),j+=G}return{changeIndex:q,changeValue:j}}function x(ne){var se=ne.animationCurve,me=ne.animationFrame,be=ne.lineFillBottomPos,Y=ne.rLevel;return[{name:N(ne),index:Y,animationCurve:se,animationFrame:me,visible:ne.lineArea.show,lineFillBottomPos:be,shape:S(ne),style:M(ne),drawed:T}]}function S(ne){var se=ne.linePosition;return{points:se}}function M(ne){var se=ne.lineArea,me=ne.color,be=se.gradient,Y=se.style,P=[Y.fill||me],q=(0,l.deepMerge)(P,be);q.length===1&&q.push(q[0]);var j=O(ne);return Y=u(u({},Y),{},{stroke:"rgba(0, 0, 0, 0)"}),(0,l.deepMerge)({gradientColor:q,gradientParams:j,gradientType:"linear",gradientWith:"fill"},Y)}function O(ne){var se=ne.lineFillBottomPos,me=ne.linePosition,be=se.changeIndex,Y=se.changeValue,P=me.map(function(ae){return ae[be]}),q=Math.max.apply(Math,(0,n.default)(P)),j=Math.min.apply(Math,(0,n.default)(P)),ee=q;return be===1&&(ee=j),be===1?[0,ee,0,Y]:[ee,0,Y,0]}function T(ne,se){var me=ne.lineFillBottomPos,be=ne.shape,Y=se.ctx,P=be.points,q=me.changeIndex,j=me.changeValue,ee=(0,n.default)(P[P.length-1]),ae=(0,n.default)(P[0]);ee[q]=j,ae[q]=j,Y.lineTo.apply(Y,(0,n.default)(ee)),Y.lineTo.apply(Y,(0,n.default)(ae)),Y.closePath(),Y.fill()}function L(ne){var se=x(ne)[0],me=u({},se.style);return me.opacity=0,se.style=me,[se]}function b(ne,se,me,be){var Y=ne[me];if(Y){var P=N(se),q=be.chart.render,j=Y[0].name,ee=P!==j;ee&&(Y.forEach(function(ae){return q.delGraph(ae)}),ne[me]=null)}}function _(ne,se){var me=se.shape.points,be=ne.shape.points,Y=be.length,P=me.length;if(P>Y){var q=be.slice(-1)[0],j=new Array(P-Y).fill(0).map(function(ee){return(0,n.default)(q)});be.push.apply(be,(0,n.default)(j))}else P<Y&&be.splice(P)}function V(ne){var se=ne.animationCurve,me=ne.animationFrame,be=ne.rLevel;return[{name:N(ne),index:be+1,animationCurve:se,animationFrame:me,shape:S(ne),style:F(ne)}]}function N(ne){var se=ne.smooth;return se?"smoothline":"polyline"}function F(ne){var se=ne.lineStyle,me=ne.color,be=ne.smooth,Y=ne.linePosition,P=B(Y,be);return(0,l.deepMerge)({stroke:me,lineDash:[P,0]},se)}function B(ne){var se=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!se)return(0,l.getPolylineLength)(ne);var me=d(ne);return f(me)}function H(ne){var se=ne.lineStyle.lineDash,me=V(ne)[0],be=me.style.lineDash;return se?be=[0,0]:be=(0,n.default)(be).reverse(),me.style.lineDash=be,[me]}function $(ne){var se=ne.animationCurve,me=ne.animationFrame,be=ne.rLevel,Y=E(ne),P=D(ne);return Y.map(function(q){return{name:"circle",index:be+2,visible:ne.linePoint.show,animationCurve:se,animationFrame:me,shape:q,style:P}})}function E(ne){var se=ne.linePosition,me=ne.linePoint.radius;return se.map(function(be){var Y=(0,t.default)(be,2),P=Y[0],q=Y[1];return{r:me,rx:P,ry:q}})}function D(ne){var se=ne.color,me=ne.linePoint.style;return(0,l.deepMerge)({stroke:se},me)}function R(ne){var se=$(ne);return se.forEach(function(me){me.shape.r=.1}),se}function U(ne){var se=ne.animationCurve,me=ne.animationFrame,be=ne.rLevel,Y=A(ne),P=pe(ne);return Y.map(function(q,j){return{name:"text",index:be+3,visible:ne.label.show,animationCurve:se,animationFrame:me,shape:q,style:P}})}function A(ne){var se=re(ne),me=k(ne);return se.map(function(be,Y){return{content:be,position:me[Y]}})}function k(ne){var se=ne.linePosition,me=ne.lineFillBottomPos,be=ne.label,Y=be.position,P=be.offset,q=me.changeIndex,j=me.changeValue;return se.map(function(ee){if(Y==="bottom"&&(ee=(0,n.default)(ee),ee[q]=j),Y==="center"){var ae=(0,n.default)(ee);ae[q]=j,ee=te(ee,ae)}return K(ee,P)})}function K(ne,se){var me=(0,t.default)(ne,2),be=me[0],Y=me[1],P=(0,t.default)(se,2),q=P[0],j=P[1];return[be+q,Y+j]}function te(ne,se){var me=(0,t.default)(ne,2),be=me[0],Y=me[1],P=(0,t.default)(se,2),q=P[0],j=P[1];return[(be+q)/2,(Y+j)/2]}function re(ne){var se=ne.data,me=ne.label.formatter;if(se=se.filter(function(Y){return typeof Y=="number"}).map(function(Y){return Y.toString()}),!me)return se;var be=(0,e.default)(me);return be==="string"?se.map(function(Y){return me.replace("{value}",Y)}):be==="function"?se.map(function(Y,P){return me({value:Y,index:P})}):se}function pe(ne){var se=ne.color,me=ne.label.style;return(0,l.deepMerge)({fill:se},me)}return Ba}var Ga={},Cd;function MS(){if(Cd)return Ga;Cd=1;var i=ct;Object.defineProperty(Ga,"__esModule",{value:!0}),Ga.bar=d;var e=i(Zt()),t=i(Mn()),n=i(Bt()),r=i(Tt()),a=Dn(),o=Ln(),s=Pt(),l=Jt();function c(G,Q){var C=Object.keys(G);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(G);Q&&(z=z.filter(function(W){return Object.getOwnPropertyDescriptor(G,W).enumerable})),C.push.apply(C,z)}return C}function u(G){for(var Q=1;Q<arguments.length;Q++){var C=arguments[Q]!=null?arguments[Q]:{};Q%2?c(Object(C),!0).forEach(function(z){(0,t.default)(G,z,C[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(G,Object.getOwnPropertyDescriptors(C)):c(Object(C)).forEach(function(z){Object.defineProperty(G,z,Object.getOwnPropertyDescriptor(C,z))})}return G}function d(G){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=Q.xAxis,z=Q.yAxis,W=Q.series,Z=[];C&&z&&W&&(Z=(0,l.initNeedSeries)(W,o.barConfig,"bar"),Z=f(Z,G),Z=h(Z),Z=T(Z)),(0,a.doUpdate)({chart:G,series:Z.slice(-1),key:"backgroundBar",getGraphConfig:B}),Z.reverse(),(0,a.doUpdate)({chart:G,series:Z,key:"bar",getGraphConfig:D,getStartGraphConfig:pe,beforeUpdate:be}),(0,a.doUpdate)({chart:G,series:Z,key:"barLabel",getGraphConfig:Y})}function f(G,Q){var C=Q.axisData;return G.forEach(function(z){var W=z.xAxisIndex,Z=z.yAxisIndex;typeof W!="number"&&(W=0),typeof Z!="number"&&(Z=0);var I=C.find(function(ue){var X=ue.axis,de=ue.index;return"".concat(X).concat(de)==="x".concat(W)}),w=C.find(function(ue){var X=ue.axis,de=ue.index;return"".concat(X).concat(de)==="y".concat(Z)}),ie=[I,w],ce=ie.findIndex(function(ue){var X=ue.data;return X==="value"});z.valueAxis=ie[ce],z.labelAxis=ie[1-ce]}),G}function h(G,Q){var C=v(G);return C.forEach(function(z){m(z),p(z),y(z),x(z),O(z)}),G}function m(G){var Q=g(G);Q=Q.map(function(z){return{stack:z,index:-1}});var C=0;G.forEach(function(z){var W=z.stack;if(!W)z.barIndex=C,C++;else{var Z=Q.find(function(I){var w=I.stack;return w===W});Z.index===-1&&(Z.index=C,C++),z.barIndex=Z.index}})}function v(G){var Q=G.map(function(C){var z=C.labelAxis,W=z.axis,Z=z.index;return W+Z});return Q=(0,r.default)(new Set(Q)),Q.map(function(C){return G.filter(function(z){var W=z.labelAxis,Z=W.axis,I=W.index;return Z+I===C})})}function g(G){var Q=[];return G.forEach(function(C){var z=C.stack;z&&Q.push(z)}),(0,r.default)(new Set(Q))}function p(G){var Q=(0,r.default)(new Set(G.map(function(C){var z=C.barIndex;return z}))).length;G.forEach(function(C){return C.barNum=Q})}function y(G){var Q=G.slice(-1)[0],C=Q.barCategoryGap,z=Q.labelAxis.tickGap,W=0;typeof C=="number"?W=C:W=(1-parseInt(C)/100)*z,G.forEach(function(Z){return Z.barCategoryWidth=W})}function x(G){var Q=G.slice(-1)[0],C=Q.barCategoryWidth,z=Q.barWidth,W=Q.barGap,Z=Q.barNum,I=[];typeof z=="number"||z!=="auto"?I=S(C,z,W):z==="auto"&&(I=M(C,z,W,Z));var w=I,ie=(0,n.default)(w,2),ce=ie[0],ue=ie[1];G.forEach(function(X){X.barWidth=ce,X.barGap=ue})}function S(G,Q,C){var z=0,W=0;return typeof Q=="number"?z=Q:z=parseInt(Q)/100*G,typeof C=="number"?W=C:W=parseInt(C)/100*z,[z,W]}function M(G,Q,C,z){var W=0,Z=0,I=G/z;if(typeof C=="number")Z=C,W=I-Z;else{var w=10+parseInt(C)/10;w===0?(W=I*2,Z=-W):(W=I/w*10,Z=I-W)}return[W,Z]}function O(G){var Q=G.slice(-1)[0],C=Q.barGap,z=Q.barWidth,W=Q.barNum,Z=(C+z)*W-C;G.forEach(function(I){return I.barAllWidthAndGap=Z})}function T(G,Q){return G=b(G),G=L(G),G=V(G),G=N(G),G}function L(G){return G.map(function(Q){var C=Q.labelAxis,z=Q.barAllWidthAndGap,W=Q.barGap,Z=Q.barWidth,I=Q.barIndex,w=C.tickGap,ie=C.tickPosition,ce=C.axis,ue=ce==="x"?0:1,X=ie.map(function(de,xe){var fe=ie[xe][ue]-w/2,Le=fe+(w-z)/2;return Le+(I+.5)*Z+I*W});return u(u({},Q),{},{barLabelAxisPos:X})})}function b(G){return G.map(function(Q){var C=(0,l.mergeSameStackData)(Q,G);C=_(Q,C);var z=Q.valueAxis,W=z.axis,Z=z.minValue,I=z.maxValue,w=z.linePosition,ie=F(Z,I,Z<0?0:Z,w,W),ce=C.map(function(X){return F(Z,I,X,w,W)}),ue=ce.map(function(X){return[ie,X]});return u(u({},Q),{},{barValueAxisPos:ue})})}function _(G,Q){var C=G.data;return Q.map(function(z,W){return typeof C[W]=="number"?z:null}).filter(function(z){return z!==null})}function V(G){return G.map(function(Q){var C=Q.barLabelAxisPos,z=Q.data;return z.forEach(function(W,Z){typeof W!="number"&&(C[Z]=null)}),u(u({},Q),{},{barLabelAxisPos:C.filter(function(W){return W!==null})})})}function N(G){return G.forEach(function(Q){var C=Q.data,z=Q.barLabelAxisPos,W=Q.barValueAxisPos,Z=C.filter(function(w){return typeof w=="number"}).length,I=z.length;I>Z&&(z.splice(Z),W.splice(Z))}),G}function F(G,Q,C,z,W){if(typeof C!="number")return null;var Z=Q-G,I=W==="x"?0:1,w=z[1][I]-z[0][I],ie=(C-G)/Z;Z===0&&(ie=0);var ce=ie*w;return ce+z[0][I]}function B(G){var Q=G.animationCurve,C=G.animationFrame,z=G.rLevel,W=H(G),Z=E(G);return W.map(function(I){return{name:"rect",index:z,visible:G.backgroundBar.show,animationCurve:Q,animationFrame:C,shape:I,style:Z}})}function H(G){var Q=G.labelAxis,C=G.valueAxis,z=Q.tickPosition,W=C.axis,Z=C.linePosition,I=$(G),w=I/2,ie=W==="x"?0:1,ce=z.map(function(xe){return xe[1-ie]}),ue=[Z[0][ie],Z[1][ie]],X=ue[0],de=ue[1];return ce.map(function(xe){return W==="x"?{x:X,y:xe-w,w:de-X,h:I}:{x:xe-w,y:de,w:I,h:X-de}})}function $(G){var Q=G.barAllWidthAndGap,C=G.barCategoryWidth,z=G.backgroundBar,W=z.width;return typeof W=="number"?W:W==="auto"?Q:parseInt(W)/100*C}function E(G){return G.backgroundBar.style}function D(G){var Q=G.barLabelAxisPos,C=G.animationCurve,z=G.animationFrame,W=G.rLevel,Z=R(G);return Q.map(function(I,w){return{name:Z,index:W,animationCurve:C,animationFrame:z,shape:U(G,w),style:te(G,w)}})}function R(G){var Q=G.shapeType;return Q==="leftEchelon"||Q==="rightEchelon"?"polyline":"rect"}function U(G,Q){var C=G.shapeType;return C==="leftEchelon"?A(G,Q):C==="rightEchelon"?k(G,Q):K(G,Q)}function A(G,Q){var C=G.barValueAxisPos,z=G.barLabelAxisPos,W=G.barWidth,Z=G.echelonOffset,I=(0,n.default)(C[Q],2),w=I[0],ie=I[1],ce=z[Q],ue=W/2,X=G.valueAxis.axis,de=[];return X==="x"?(de[0]=[ie,ce-ue],de[1]=[ie,ce+ue],de[2]=[w,ce+ue],de[3]=[w+Z,ce-ue],ie-w<Z&&de.splice(3,1)):(de[0]=[ce-ue,ie],de[1]=[ce+ue,ie],de[2]=[ce+ue,w],de[3]=[ce-ue,w-Z],w-ie<Z&&de.splice(3,1)),{points:de,close:!0}}function k(G,Q){var C=G.barValueAxisPos,z=G.barLabelAxisPos,W=G.barWidth,Z=G.echelonOffset,I=(0,n.default)(C[Q],2),w=I[0],ie=I[1],ce=z[Q],ue=W/2,X=G.valueAxis.axis,de=[];return X==="x"?(de[0]=[ie,ce+ue],de[1]=[ie,ce-ue],de[2]=[w,ce-ue],de[3]=[w+Z,ce+ue],ie-w<Z&&de.splice(2,1)):(de[0]=[ce+ue,ie],de[1]=[ce-ue,ie],de[2]=[ce-ue,w],de[3]=[ce+ue,w-Z],w-ie<Z&&de.splice(2,1)),{points:de,close:!0}}function K(G,Q){var C=G.barValueAxisPos,z=G.barLabelAxisPos,W=G.barWidth,Z=(0,n.default)(C[Q],2),I=Z[0],w=Z[1],ie=z[Q],ce=G.valueAxis.axis,ue={};return ce==="x"?(ue.x=I,ue.y=ie-W/2,ue.w=w-I,ue.h=W):(ue.x=ie-W/2,ue.y=w,ue.w=W,ue.h=I-w),ue}function te(G,Q){var C=G.barStyle,z=G.gradient,W=G.color,Z=G.independentColor,I=G.independentColors,w=[C.fill||W],ie=(0,l.deepMerge)(w,z.color);if(Z){var ce=I[Q%I.length];ie=ce instanceof Array?ce:[ce]}ie.length===1&&ie.push(ie[0]);var ue=re(G,Q);return(0,l.deepMerge)({gradientColor:ie,gradientParams:ue,gradientType:"linear",gradientWith:"fill"},C)}function re(G,Q){var C=G.barValueAxisPos,z=G.barLabelAxisPos,W=G.data,Z=G.valueAxis,I=Z.linePosition,w=Z.axis,ie=(0,n.default)(C[Q],2),ce=ie[0],ue=ie[1],X=z[Q],de=W[Q],xe=(0,n.default)(I,2),fe=xe[0],Le=xe[1],Pe=w==="x"?0:1,_e=ue;return G.gradient.local||(_e=de<0?fe[Pe]:Le[Pe]),w==="y"?[X,_e,X,ce]:[_e,X,ce,X]}function pe(G){var Q=D(G),C=G.shapeType;return Q.forEach(function(z){var W=z.shape;C==="leftEchelon"?W=ne(W,G):C==="rightEchelon"?W=se(W,G):W=me(W,G),z.shape=W}),Q}function ne(G,Q){var C=Q.valueAxis.axis;G=(0,s.deepClone)(G);var z=G,W=z.points,Z=C==="x"?0:1,I=W[2][Z];return W.forEach(function(w){return w[Z]=I}),G}function se(G,Q){var C=Q.valueAxis.axis;G=(0,s.deepClone)(G);var z=G,W=z.points,Z=C==="x"?0:1,I=W[2][Z];return W.forEach(function(w){return w[Z]=I}),G}function me(G,Q){var C=Q.valueAxis.axis,z=G.x,W=G.y,Z=G.w,I=G.h;return C==="x"?Z=0:(W=W+I,I=0),{x:z,y:W,w:Z,h:I}}function be(G,Q,C,z){var W=z.chart.render,Z=R(Q);G[C]&&G[C][0].name!==Z&&(G[C].forEach(function(I){return W.delGraph(I)}),G[C]=null)}function Y(G){var Q=G.animationCurve,C=G.animationFrame,z=G.rLevel,W=P(G),Z=ae(G);return W.map(function(I){return{name:"text",index:z,visible:G.label.show,animationCurve:Q,animationFrame:C,shape:I,style:Z}})}function P(G){var Q=q(G),C=j(G);return C.map(function(z,W){return{position:z,content:Q[W]}})}function q(G){var Q=G.data,C=G.label,z=C.formatter;if(Q=Q.filter(function(Z){return typeof Z=="number"}).map(function(Z){return Z.toString()}),!z)return Q;var W=(0,e.default)(z);return W==="string"?Q.map(function(Z){return z.replace("{value}",Z)}):W==="function"?Q.map(function(Z,I){return z({value:Z,index:I})}):Q}function j(G){var Q=G.label,C=G.barValueAxisPos,z=G.barLabelAxisPos,W=Q.position,Z=Q.offset,I=G.valueAxis.axis;return C.map(function(w,ie){var ce=(0,n.default)(w,2),ue=ce[0],X=ce[1],de=z[ie],xe=[X,de];return W==="bottom"&&(xe=[ue,de]),W==="center"&&(xe=[(ue+X)/2,de]),I==="y"&&xe.reverse(),ee(xe,Z)})}function ee(G,Q){var C=(0,n.default)(G,2),z=C[0],W=C[1],Z=(0,n.default)(Q,2),I=Z[0],w=Z[1];return[z+I,W+w]}function ae(G){var Q=G.color,C=G.label.style,z=G.gradient.color;return z.length&&(Q=z[0]),C=(0,l.deepMerge)({fill:Q},C),C}return Ga}var Ha={},Rd;function SS(){if(Rd)return Ha;Rd=1;var i=ct;Object.defineProperty(Ha,"__esModule",{value:!0}),Ha.pie=d;var e=i(Mn()),t=i(Zt()),n=i(Bt()),r=i(Tt()),a=Dn(),o=nh(),s=Pt(),l=Jt();function c(P,q){var j=Object.keys(P);if(Object.getOwnPropertySymbols){var ee=Object.getOwnPropertySymbols(P);q&&(ee=ee.filter(function(ae){return Object.getOwnPropertyDescriptor(P,ae).enumerable})),j.push.apply(j,ee)}return j}function u(P){for(var q=1;q<arguments.length;q++){var j=arguments[q]!=null?arguments[q]:{};q%2?c(Object(j),!0).forEach(function(ee){(0,e.default)(P,ee,j[ee])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(j)):c(Object(j)).forEach(function(ee){Object.defineProperty(P,ee,Object.getOwnPropertyDescriptor(j,ee))})}return P}function d(P){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},j=q.series;j||(j=[]);var ee=(0,l.initNeedSeries)(j,o.pieConfig,"pie");ee=f(ee,P),ee=h(ee,P),ee=v(ee),ee=y(ee),ee=M(ee),ee=T(ee),ee=b(ee),ee=_(ee),(0,a.doUpdate)({chart:P,series:ee,key:"pie",getGraphConfig:$,getStartGraphConfig:E,beforeChange:D}),(0,a.doUpdate)({chart:P,series:ee,key:"pieInsideLabel",getGraphConfig:A}),(0,a.doUpdate)({chart:P,series:ee,key:"pieOutsideLabelLine",getGraphConfig:te,getStartGraphConfig:re}),(0,a.doUpdate)({chart:P,series:ee,key:"pieOutsideLabel",getGraphConfig:se,getStartGraphConfig:me})}function f(P,q){var j=q.render.area;return P.forEach(function(ee){var ae=ee.center;ae=ae.map(function(G,Q){return typeof G=="number"?G:parseInt(G)/100*j[Q]}),ee.center=ae}),P}function h(P,q){var j=Math.min.apply(Math,(0,r.default)(q.render.area))/2;return P.forEach(function(ee){var ae=ee.radius,G=ee.data;ae=m(ae,j),G.forEach(function(Q){var C=Q.radius;C||(C=ae),C=m(C,j),Q.radius=C}),ee.radius=ae}),P}function m(P,q){return P instanceof Array||(P=[0,P]),P=P.map(function(j){return typeof j=="number"?j:parseInt(j)/100*q}),P}function v(P,q){var j=P.filter(function(ee){var ae=ee.roseType;return ae});return j.forEach(function(ee){var ae=ee.radius,G=ee.data,Q=ee.roseSort,C=p(ee),z=(0,r.default)(G);G=g(G),G.forEach(function(W,Z){W.radius[1]=ae[1]-C*Z}),Q?G.reverse():ee.data=z,ee.roseIncrement=C}),P}function g(P){return P.sort(function(q,j){var ee=q.value,ae=j.value;if(ee===ae)return 0;if(ee>ae)return-1;if(ee<ae)return 1})}function p(P){var q=P.radius,j=P.roseIncrement;if(typeof j=="number")return j;if(j==="auto"){var ee=P.data,ae=ee.reduce(function(C,z){var W=z.radius;return[].concat((0,r.default)(C),(0,r.default)(W))},[]),G=Math.min.apply(Math,(0,r.default)(ae)),Q=Math.max.apply(Math,(0,r.default)(ae));return(Q-G)*.6/(ee.length-1||1)}return parseInt(j)/100*q[1]}function y(P){return P.forEach(function(q){var j=q.data,ee=q.percentToFixed,ae=S(j);j.forEach(function(Q){var C=Q.value;Q.percent=C/ae*100,Q.percentForLabel=x(C/ae*100,ee)});var G=(0,l.mulAdd)(j.slice(0,-1).map(function(Q){var C=Q.percent;return C}));j.slice(-1)[0].percent=100-G,j.slice(-1)[0].percentForLabel=x(100-G,ee)}),P}function x(P){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,j=P.toString(),ee=j.split("."),ae=ee[1]||"0",G=ae.slice(0,q);return ee[1]=G,parseFloat(ee.join("."))}function S(P){return(0,l.mulAdd)(P.map(function(q){var j=q.value;return j}))}function M(P){return P.forEach(function(q){var j=q.startAngle,ee=q.data;ee.forEach(function(ae,G){var Q=O(ee,G),C=(0,n.default)(Q,2),z=C[0],W=C[1];ae.startAngle=j+z,ae.endAngle=j+W})}),P}function O(P,q){var j=Math.PI*2,ee=P.slice(0,q+1),ae=(0,l.mulAdd)(ee.map(function(C){var z=C.percent;return z})),G=P[q].percent,Q=ae-G;return[j*Q/100,j*ae/100]}function T(P){return P.forEach(function(q){var j=q.data;j.forEach(function(ee){ee.insideLabelPos=L(q,ee)})}),P}function L(P,q){var j=P.center,ee=q.startAngle,ae=q.endAngle,G=(0,n.default)(q.radius,2),Q=G[0],C=G[1],z=(Q+C)/2,W=(ee+ae)/2;return s.getCircleRadianPoint.apply(void 0,(0,r.default)(j).concat([z,W]))}function b(P){return P.forEach(function(q){var j=q.data,ee=q.center;j.forEach(function(ae){var G=ae.startAngle,Q=ae.endAngle,C=ae.radius,z=(G+Q)/2,W=s.getCircleRadianPoint.apply(void 0,(0,r.default)(ee).concat([C[1],z]));ae.edgeCenterPos=W})}),P}function _(P){return P.forEach(function(q){var j=F(q),ee=F(q,!1);j=B(j),ee=B(ee),H(j,q),H(ee,q,!1)}),P}function V(P){var q=P.outsideLabel.labelLineBendGap,j=N(P);return typeof q!="number"&&(q=parseInt(q)/100*j),q+j}function N(P){var q=P.data,j=q.map(function(ee){var ae=(0,n.default)(ee.radius,2);ae[0];var G=ae[1];return G});return Math.max.apply(Math,(0,r.default)(j))}function F(P){var q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,j=P.data,ee=P.center,ae=ee[0];return j.filter(function(G){var Q=G.edgeCenterPos,C=Q[0];return q?C<=ae:C>ae})}function B(P){return P.sort(function(q,j){var ee=(0,n.default)(q.edgeCenterPos,2);ee[0];var ae=ee[1],G=(0,n.default)(j.edgeCenterPos,2);G[0];var Q=G[1];if(ae>Q)return 1;if(ae<Q)return-1;if(ae===Q)return 0}),P}function H(P,q){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,ee=q.center,ae=q.outsideLabel,G=V(q);P.forEach(function(Q){var C=Q.edgeCenterPos,z=Q.startAngle,W=Q.endAngle,Z=ae.labelLineEndLength,I=(z+W)/2,w=s.getCircleRadianPoint.apply(void 0,(0,r.default)(ee).concat([G,I])),ie=(0,r.default)(w);ie[0]+=Z*(j?-1:1),Q.labelLine=[C,w,ie],Q.labelLineLength=(0,l.getPolylineLength)(Q.labelLine),Q.align={textAlign:"left",textBaseline:"middle"},j&&(Q.align.textAlign="right")})}function $(P){var q=P.data,j=P.animationCurve,ee=P.animationFrame,ae=P.rLevel;return q.map(function(G,Q){return{name:"pie",index:ae,animationCurve:j,animationFrame:ee,shape:R(P,Q),style:U(P,Q)}})}function E(P){var q=P.animationDelayGap,j=P.startAnimationCurve,ee=$(P);return ee.forEach(function(ae,G){ae.animationCurve=j,ae.animationDelay=G*q,ae.shape.or=ae.shape.ir}),ee}function D(P){P.animationDelay=0}function R(P,q){var j=P.center,ee=P.data,ae=ee[q],G=ae.radius,Q=ae.startAngle,C=ae.endAngle;return{startAngle:Q,endAngle:C,ir:G[0],or:G[1],rx:j[0],ry:j[1]}}function U(P,q){var j=P.pieStyle,ee=P.data,ae=ee[q],G=ae.color;return(0,l.deepMerge)({fill:G},j)}function A(P){var q=P.animationCurve,j=P.animationFrame,ee=P.data,ae=P.rLevel;return ee.map(function(G,Q){return{name:"text",index:ae,visible:P.insideLabel.show,animationCurve:q,animationFrame:j,shape:k(P,Q),style:K(P)}})}function k(P,q){var j=P.insideLabel,ee=P.data,ae=j.formatter,G=ee[q],Q=(0,t.default)(ae),C="";return Q==="string"&&(C=ae.replace("{name}",G.name),C=C.replace("{percent}",G.percentForLabel),C=C.replace("{value}",G.value)),Q==="function"&&(C=ae(G)),{content:C,position:G.insideLabelPos}}function K(P,q){var j=P.insideLabel.style;return j}function te(P){var q=P.animationCurve,j=P.animationFrame,ee=P.data,ae=P.rLevel;return ee.map(function(G,Q){return{name:"polyline",index:ae,visible:P.outsideLabel.show,animationCurve:q,animationFrame:j,shape:pe(P,Q),style:ne(P,Q)}})}function re(P){var q=P.data,j=te(P);return j.forEach(function(ee,ae){ee.style.lineDash=[0,q[ae].labelLineLength]}),j}function pe(P,q){var j=P.data,ee=j[q];return{points:ee.labelLine}}function ne(P,q){var j=P.outsideLabel,ee=P.data,ae=j.labelLineStyle,G=ee[q].color;return(0,l.deepMerge)({stroke:G,lineDash:[ee[q].labelLineLength,0]},ae)}function se(P){var q=P.animationCurve,j=P.animationFrame,ee=P.data,ae=P.rLevel;return ee.map(function(G,Q){return{name:"text",index:ae,visible:P.outsideLabel.show,animationCurve:q,animationFrame:j,shape:be(P,Q),style:Y(P,Q)}})}function me(P){var q=P.data,j=se(P);return j.forEach(function(ee,ae){ee.shape.position=q[ae].labelLine[1]}),j}function be(P,q){var j=P.outsideLabel,ee=P.data,ae=j.formatter,G=ee[q],Q=G.labelLine,C=G.name,z=G.percentForLabel,W=G.value,Z=(0,t.default)(ae),I="";return Z==="string"&&(I=ae.replace("{name}",C),I=I.replace("{percent}",z),I=I.replace("{value}",W)),Z==="function"&&(I=ae(ee[q])),{content:I,position:Q[2]}}function Y(P,q){var j=P.outsideLabel,ee=P.data,ae=ee[q],G=ae.color,Q=ae.align,C=j.style;return(0,l.deepMerge)(u({fill:G},Q),C)}return Ha}var Va={},Pd;function ES(){if(Pd)return Va;Pd=1;var i=ct;Object.defineProperty(Va,"__esModule",{value:!0}),Va.radarAxis=u;var e=i(Bt()),t=i(Mn()),n=i(Tt()),r=Dn(),a=Ln(),o=Pt(),s=Jt();function l(E,D){var R=Object.keys(E);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(E);D&&(U=U.filter(function(A){return Object.getOwnPropertyDescriptor(E,A).enumerable})),R.push.apply(R,U)}return R}function c(E){for(var D=1;D<arguments.length;D++){var R=arguments[D]!=null?arguments[D]:{};D%2?l(Object(R),!0).forEach(function(U){(0,t.default)(E,U,R[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(R)):l(Object(R)).forEach(function(U){Object.defineProperty(E,U,Object.getOwnPropertyDescriptor(R,U))})}return E}function u(E){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=D.radar,U=[];R&&(U=d(R),U=f(U,E),U=h(U,E),U=m(U),U=v(U),U=g(U),U=[U]);var A=U;U.length&&!U[0].show&&(A=[]),(0,r.doUpdate)({chart:E,series:A,key:"radarAxisSplitArea",getGraphConfig:p,beforeUpdate:S,beforeChange:M}),(0,r.doUpdate)({chart:E,series:A,key:"radarAxisSplitLine",getGraphConfig:O,beforeUpdate:b,beforeChange:_}),(0,r.doUpdate)({chart:E,series:A,key:"radarAxisLine",getGraphConfig:V}),(0,r.doUpdate)({chart:E,series:A,key:"radarAxisLable",getGraphConfig:B}),E.radarAxis=U[0]}function d(E){return(0,s.deepMerge)((0,o.deepClone)(a.radarAxisConfig),E)}function f(E,D){var R=D.render.area,U=E.center;return E.centerPos=U.map(function(A,k){return typeof A=="number"?A:parseInt(A)/100*R[k]}),E}function h(E,D){var R=D.render.area,U=E.splitNum,A=E.radius,k=Math.min.apply(Math,(0,n.default)(R))/2;typeof A!="number"&&(A=parseInt(A)/100*k);var K=A/U;return E.ringRadius=new Array(U).fill(0).map(function(te,re){return K*(re+1)}),E.radius=A,E}function m(E){var D=E.indicator,R=E.centerPos,U=E.radius,A=E.startAngle,k=Math.PI*2,K=D.length,te=k/K,re=new Array(K).fill(0).map(function(pe,ne){return te*ne+A});return E.axisLineAngles=re,E.axisLinePosition=re.map(function(pe){return o.getCircleRadianPoint.apply(void 0,(0,n.default)(R).concat([U,pe]))}),E}function v(E){var D=E.ringRadius,R=D[0]/2;return E.areaRadius=D.map(function(U){return U-R}),E}function g(E){var D=E.axisLineAngles,R=E.centerPos,U=E.radius,A=E.axisLabel;return U+=A.labelGap,E.axisLabelPosition=D.map(function(k){return o.getCircleRadianPoint.apply(void 0,(0,n.default)(R).concat([U,k]))}),E}function p(E){var D=E.areaRadius,R=E.polygon,U=E.animationCurve,A=E.animationFrame,k=E.rLevel,K=R?"regPolygon":"ring";return D.map(function(te,re){return{name:K,index:k,visible:E.splitArea.show,animationCurve:U,animationFrame:A,shape:y(E,re),style:x(E,re)}})}function y(E,D){var R=E.polygon,U=E.areaRadius,A=E.indicator,k=E.centerPos,K=A.length,te={rx:k[0],ry:k[1],r:U[D]};return R&&(te.side=K),te}function x(E,D){var R=E.splitArea,U=E.ringRadius,A=E.axisLineAngles,k=E.polygon,K=E.centerPos,te=R.color,re=R.style;re=c({fill:"rgba(0, 0, 0, 0)"},re);var pe=U[0]-0;if(k){var ne=o.getCircleRadianPoint.apply(void 0,(0,n.default)(K).concat([U[0],A[0]])),se=o.getCircleRadianPoint.apply(void 0,(0,n.default)(K).concat([U[0],A[1]]));pe=(0,s.getPointToLineDistance)(K,ne,se)}if(re=(0,s.deepMerge)((0,o.deepClone)(re,!0),{lineWidth:pe}),!te.length)return re;var me=te.length;return(0,s.deepMerge)(re,{stroke:te[D%me]})}function S(E,D,R,U){var A=E[R];if(A){var k=U.chart.render,K=D.polygon,te=A[0].name,re=K?"regPolygon":"ring",pe=re!==te;pe&&(A.forEach(function(ne){return k.delGraph(ne)}),E[R]=null)}}function M(E,D){var R=D.shape.side;typeof R=="number"&&(E.shape.side=R)}function O(E){var D=E.ringRadius,R=E.polygon,U=E.animationCurve,A=E.animationFrame,k=E.rLevel,K=R?"regPolygon":"ring";return D.map(function(te,re){return{name:K,index:k,animationCurve:U,animationFrame:A,visible:E.splitLine.show,shape:T(E,re),style:L(E,re)}})}function T(E,D){var R=E.ringRadius,U=E.centerPos,A=E.indicator,k=E.polygon,K={rx:U[0],ry:U[1],r:R[D]},te=A.length;return k&&(K.side=te),K}function L(E,D){var R=E.splitLine,U=R.color,A=R.style;if(A=c({fill:"rgba(0, 0, 0, 0)"},A),!U.length)return A;var k=U.length;return(0,s.deepMerge)(A,{stroke:U[D%k]})}function b(E,D,R,U){var A=E[R];if(A){var k=U.chart.render,K=D.polygon,te=A[0].name,re=K?"regPolygon":"ring",pe=re!==te;pe&&(A.forEach(function(ne){return k.delGraph(ne)}),E[R]=null)}}function _(E,D){var R=D.shape.side;typeof R=="number"&&(E.shape.side=R)}function V(E){var D=E.axisLinePosition,R=E.animationCurve,U=E.animationFrame,A=E.rLevel;return D.map(function(k,K){return{name:"polyline",index:A,visible:E.axisLine.show,animationCurve:R,animationFrame:U,shape:N(E,K),style:F(E,K)}})}function N(E,D){var R=E.centerPos,U=E.axisLinePosition,A=[R,U[D]];return{points:A}}function F(E,D){var R=E.axisLine,U=R.color,A=R.style;if(!U.length)return A;var k=U.length;return(0,s.deepMerge)(A,{stroke:U[D%k]})}function B(E){var D=E.axisLabelPosition,R=E.animationCurve,U=E.animationFrame,A=E.rLevel;return D.map(function(k,K){return{name:"text",index:A,visible:E.axisLabel.show,animationCurve:R,animationFrame:U,shape:H(E,K),style:$(E,K)}})}function H(E,D){var R=E.axisLabelPosition,U=E.indicator;return{content:U[D].name,position:R[D]}}function $(E,D){var R=E.axisLabel,U=(0,e.default)(E.centerPos,2),A=U[0],k=U[1],K=E.axisLabelPosition,te=R.color,re=R.style,pe=(0,e.default)(K[D],2),ne=pe[0],se=pe[1],me=ne>A?"left":"right",be=se>k?"top":"bottom";if(re=(0,s.deepMerge)({textAlign:me,textBaseline:be},re),!te.length)return re;var Y=te.length;return(0,s.deepMerge)(re,{fill:te[D%Y]})}return Va}var Wa={},Ld;function TS(){if(Ld)return Wa;Ld=1;var i=ct;Object.defineProperty(Wa,"__esModule",{value:!0}),Wa.radar=f;var e=i(Mn()),t=i(Zt()),n=i(Bt()),r=i(Tt()),a=Dn(),o=Ln(),s=Pt(),l=oa,c=Jt();function u(F,B){var H=Object.keys(F);if(Object.getOwnPropertySymbols){var $=Object.getOwnPropertySymbols(F);B&&($=$.filter(function(E){return Object.getOwnPropertyDescriptor(F,E).enumerable})),H.push.apply(H,$)}return H}function d(F){for(var B=1;B<arguments.length;B++){var H=arguments[B]!=null?arguments[B]:{};B%2?u(Object(H),!0).forEach(function($){(0,e.default)(F,$,H[$])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(H)):u(Object(H)).forEach(function($){Object.defineProperty(F,$,Object.getOwnPropertyDescriptor(H,$))})}return F}function f(F){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},H=B.series;H||(H=[]);var $=(0,c.initNeedSeries)(H,o.radarConfig,"radar");$=h($,F),$=m($,F),$=v($,F),(0,a.doUpdate)({chart:F,series:$,key:"radar",getGraphConfig:g,getStartGraphConfig:p,beforeChange:S}),(0,a.doUpdate)({chart:F,series:$,key:"radarPoint",getGraphConfig:M,getStartGraphConfig:O}),(0,a.doUpdate)({chart:F,series:$,key:"radarLabel",getGraphConfig:b})}function h(F,B){var H=B.radarAxis;if(!H)return[];var $=H.indicator,E=H.axisLineAngles,D=H.radius,R=H.centerPos;return F.forEach(function(U){var A=U.data;U.dataRadius=[],U.radarPosition=$.map(function(k,K){var te=k.max,re=k.min,pe=A[K];typeof te!="number"&&(te=pe),typeof re!="number"&&(re=0),typeof pe!="number"&&(pe=re);var ne=(pe-re)/(te-re)*D;return U.dataRadius[K]=ne,s.getCircleRadianPoint.apply(void 0,(0,r.default)(R).concat([ne,E[K]]))})}),F}function m(F,B){var H=B.radarAxis;if(!H)return[];var $=H.centerPos,E=H.axisLineAngles;return F.forEach(function(D){var R=D.dataRadius,U=D.label,A=U.labelGap;D.labelPosition=R.map(function(k,K){return s.getCircleRadianPoint.apply(void 0,(0,r.default)($).concat([k+A,E[K]]))})}),F}function v(F,B){var H=B.radarAxis;if(!H)return[];var $=(0,n.default)(H.centerPos,2),E=$[0],D=$[1];return F.forEach(function(R){var U=R.labelPosition,A=U.map(function(k){var K=(0,n.default)(k,2),te=K[0],re=K[1],pe=te>E?"left":"right",ne=re>D?"top":"bottom";return{textAlign:pe,textBaseline:ne}});R.labelAlign=A}),F}function g(F){var B=F.animationCurve,H=F.animationFrame,$=F.rLevel;return[{name:"polyline",index:$,animationCurve:B,animationFrame:H,shape:y(F),style:x(F)}]}function p(F,B){var H=B.chart.radarAxis.centerPos,$=g(F)[0],E=$.shape.points.length,D=new Array(E).fill(0).map(function(R){return(0,r.default)(H)});return $.shape.points=D,[$]}function y(F){var B=F.radarPosition;return{points:B,close:!0}}function x(F){var B=F.radarStyle,H=F.color,$=(0,l.getRgbaValue)(H);$[3]=.5;var E={stroke:H,fill:(0,l.getColorFromRgbValue)($)};return(0,c.deepMerge)(E,B)}function S(F,B){var H=B.shape,$=F.shape.points,E=$.length,D=H.points.length;if(D>E){var R=$.slice(-1)[0],U=new Array(D-E).fill(0).map(function(A){return(0,r.default)(R)});$.push.apply($,(0,r.default)(U))}else D<E&&$.splice(D)}function M(F){var B=F.radarPosition,H=F.animationCurve,$=F.animationFrame,E=F.rLevel;return B.map(function(D,R){return{name:"circle",index:E,animationCurve:H,animationFrame:$,visible:F.point.show,shape:T(F,R),style:L(F)}})}function O(F){var B=M(F);return B.forEach(function(H){return H.shape.r=.01}),B}function T(F,B){var H=F.radarPosition,$=F.point,E=$.radius,D=H[B];return{rx:D[0],ry:D[1],r:E}}function L(F,B){var H=F.point,$=F.color,E=H.style;return(0,c.deepMerge)({stroke:$},E)}function b(F){var B=F.labelPosition,H=F.animationCurve,$=F.animationFrame,E=F.rLevel;return B.map(function(D,R){return{name:"text",index:E,visible:F.label.show,animationCurve:H,animationFrame:$,shape:_(F,R),style:N(F,R)}})}function _(F,B){var H=F.labelPosition,$=F.label,E=F.data,D=$.offset,R=$.formatter,U=V(H[B],D),A=E[B]?E[B].toString():"0",k=(0,t.default)(R);return k==="string"&&(A=R.replace("{value}",A)),k==="function"&&(A=R(A)),{content:A,position:U}}function V(F,B){var H=(0,n.default)(F,2),$=H[0],E=H[1],D=(0,n.default)(B,2),R=D[0],U=D[1];return[$+R,E+U]}function N(F,B){var H=F.label,$=F.color,E=F.labelAlign,D=H.style,R=d({fill:$},E[B]);return(0,c.deepMerge)(R,D)}return Wa}var ja={},Dd;function wS(){if(Dd)return ja;Dd=1;var i=ct;Object.defineProperty(ja,"__esModule",{value:!0}),ja.gauge=f;var e=i(Mn()),t=i(Zt()),n=i(Bt()),r=i(Tt()),a=Dn(),o=ih(),s=Pt(),l=Jt(),c=oa;function u(Y,P){var q=Object.keys(Y);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(Y);P&&(j=j.filter(function(ee){return Object.getOwnPropertyDescriptor(Y,ee).enumerable})),q.push.apply(q,j)}return q}function d(Y){for(var P=1;P<arguments.length;P++){var q=arguments[P]!=null?arguments[P]:{};P%2?u(Object(q),!0).forEach(function(j){(0,e.default)(Y,j,q[j])}):Object.getOwnPropertyDescriptors?Object.defineProperties(Y,Object.getOwnPropertyDescriptors(q)):u(Object(q)).forEach(function(j){Object.defineProperty(Y,j,Object.getOwnPropertyDescriptor(q,j))})}return Y}function f(Y){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},q=P.series;q||(q=[]);var j=(0,l.initNeedSeries)(q,o.gaugeConfig,"gauge");j=h(j,Y),j=m(j,Y),j=v(j,Y),j=g(j),j=p(j),j=y(j),j=x(j),j=S(j),j=M(j),j=O(j),(0,a.doUpdate)({chart:Y,series:j,key:"gaugeAxisTick",getGraphConfig:L}),(0,a.doUpdate)({chart:Y,series:j,key:"gaugeAxisLabel",getGraphConfig:V}),(0,a.doUpdate)({chart:Y,series:j,key:"gaugeBackgroundArc",getGraphConfig:B,getStartGraphConfig:E}),(0,a.doUpdate)({chart:Y,series:j,key:"gaugeArc",getGraphConfig:D,getStartGraphConfig:A,beforeChange:k}),(0,a.doUpdate)({chart:Y,series:j,key:"gaugePointer",getGraphConfig:K,getStartGraphConfig:ne}),(0,a.doUpdate)({chart:Y,series:j,key:"gaugeDetails",getGraphConfig:se})}function h(Y,P){var q=P.render.area;return Y.forEach(function(j){var ee=j.center;ee=ee.map(function(ae,G){return typeof ae=="number"?ae:parseInt(ae)/100*q[G]}),j.center=ee}),Y}function m(Y,P){var q=P.render.area,j=Math.min.apply(Math,(0,r.default)(q))/2;return Y.forEach(function(ee){var ae=ee.radius;typeof ae!="number"&&(ae=parseInt(ae)/100*j),ee.radius=ae}),Y}function v(Y,P){var q=P.render.area,j=Math.min.apply(Math,(0,r.default)(q))/2;return Y.forEach(function(ee){var ae=ee.radius,G=ee.data,Q=ee.arcLineWidth;G.forEach(function(C){var z=C.radius,W=C.lineWidth;z||(z=ae),typeof z!="number"&&(z=parseInt(z)/100*j),C.radius=z,W||(W=Q),C.lineWidth=W})}),Y}function g(Y,P){return Y.forEach(function(q){var j=q.startAngle,ee=q.endAngle,ae=q.data,G=q.min,Q=q.max,C=ee-j,z=Q-G;ae.forEach(function(W){var Z=W.value,I=Math.abs((Z-G)/z*C);W.startAngle=j,W.endAngle=j+I})}),Y}function p(Y,P){return Y.forEach(function(q){var j=q.data;j.forEach(function(ee){var ae=ee.color,G=ee.gradient;(!G||!G.length)&&(G=ae),G instanceof Array||(G=[G]),ee.gradient=G})}),Y}function y(Y,P){return Y.forEach(function(q){var j=q.startAngle,ee=q.endAngle,ae=q.splitNum,G=q.center,Q=q.radius,C=q.arcLineWidth,z=q.axisTick,W=z.tickLength,Z=z.style.lineWidth,I=ee-j,w=Q-C/2,ie=w-W,ce=I/(ae-1),ue=2*Math.PI*Q*I/(Math.PI*2),X=Math.ceil(Z/2)/ue*I;q.tickAngles=[],q.tickInnerRadius=[],q.tickPosition=new Array(ae).fill(0).map(function(de,xe){var fe=j+ce*xe;return xe===0&&(fe+=X),xe===ae-1&&(fe-=X),q.tickAngles[xe]=fe,q.tickInnerRadius[xe]=ie,[s.getCircleRadianPoint.apply(void 0,(0,r.default)(G).concat([w,fe])),s.getCircleRadianPoint.apply(void 0,(0,r.default)(G).concat([ie,fe]))]})}),Y}function x(Y,P){return Y.forEach(function(q){var j=q.center,ee=q.tickInnerRadius,ae=q.tickAngles,G=q.axisLabel.labelGap,Q=ae.map(function(z,W){return s.getCircleRadianPoint.apply(void 0,(0,r.default)(j).concat([ee[W]-G,ae[W]]))}),C=Q.map(function(z){var W=(0,n.default)(z,2),Z=W[0],I=W[1];return{textAlign:Z>j[0]?"right":"left",textBaseline:I>j[1]?"bottom":"top"}});q.labelPosition=Q,q.labelAlign=C}),Y}function S(Y,P){return Y.forEach(function(q){var j=q.axisLabel,ee=q.min,ae=q.max,G=q.splitNum,Q=j.data,C=j.formatter,z=(ae-ee)/(G-1),W=new Array(G).fill(0).map(function(I,w){return parseInt(ee+z*w)}),Z=(0,t.default)(C);Q=(0,l.deepMerge)(W,Q).map(function(I,w){var ie=I;return Z==="string"&&(ie=C.replace("{value}",I)),Z==="function"&&(ie=C({value:I,index:w})),ie}),j.data=Q}),Y}function M(Y,P){return Y.forEach(function(q){var j=q.data,ee=q.details,ae=q.center,G=ee.position,Q=ee.offset,C=j.map(function(z){var W=z.startAngle,Z=z.endAngle,I=z.radius,w=null;return G==="center"?w=ae:G==="start"?w=s.getCircleRadianPoint.apply(void 0,(0,r.default)(ae).concat([I,W])):G==="end"&&(w=s.getCircleRadianPoint.apply(void 0,(0,r.default)(ae).concat([I,Z]))),T(w,Q)});q.detailsPosition=C}),Y}function O(Y,P){return Y.forEach(function(q){var j=q.data,ee=q.details,ae=ee.formatter,G=(0,t.default)(ae),Q=j.map(function(C){var z=C.value;return G==="string"&&(z=ae.replace("{value}","{nt}"),z=z.replace("{name}",C.name)),G==="function"&&(z=ae(C)),z.toString()});q.detailsContent=Q}),Y}function T(Y,P){var q=(0,n.default)(Y,2),j=q[0],ee=q[1],ae=(0,n.default)(P,2),G=ae[0],Q=ae[1];return[j+G,ee+Q]}function L(Y){var P=Y.tickPosition,q=Y.animationCurve,j=Y.animationFrame,ee=Y.rLevel;return P.map(function(ae,G){return{name:"polyline",index:ee,visible:Y.axisTick.show,animationCurve:q,animationFrame:j,shape:b(Y,G),style:_(Y)}})}function b(Y,P){var q=Y.tickPosition;return{points:q[P]}}function _(Y,P){var q=Y.axisTick.style;return q}function V(Y){var P=Y.labelPosition,q=Y.animationCurve,j=Y.animationFrame,ee=Y.rLevel;return P.map(function(ae,G){return{name:"text",index:ee,visible:Y.axisLabel.show,animationCurve:q,animationFrame:j,shape:N(Y,G),style:F(Y,G)}})}function N(Y,P){var q=Y.labelPosition,j=Y.axisLabel.data;return{content:j[P].toString(),position:q[P]}}function F(Y,P){var q=Y.labelAlign,j=Y.axisLabel,ee=j.style;return(0,l.deepMerge)(d({},q[P]),ee)}function B(Y){var P=Y.animationCurve,q=Y.animationFrame,j=Y.rLevel;return[{name:"arc",index:j,visible:Y.backgroundArc.show,animationCurve:P,animationFrame:q,shape:H(Y),style:$(Y)}]}function H(Y){var P=Y.startAngle,q=Y.endAngle,j=Y.center,ee=Y.radius;return{rx:j[0],ry:j[1],r:ee,startAngle:P,endAngle:q}}function $(Y){var P=Y.backgroundArc,q=Y.arcLineWidth,j=P.style;return(0,l.deepMerge)({lineWidth:q},j)}function E(Y){var P=B(Y)[0],q=d({},P.shape);return q.endAngle=P.shape.startAngle,P.shape=q,[P]}function D(Y){var P=Y.data,q=Y.animationCurve,j=Y.animationFrame,ee=Y.rLevel;return P.map(function(ae,G){return{name:"agArc",index:ee,animationCurve:q,animationFrame:j,shape:R(Y,G),style:U(Y,G)}})}function R(Y,P){var q=Y.data,j=Y.center,ee=Y.endAngle,ae=q[P],G=ae.radius,Q=ae.startAngle,C=ae.endAngle,z=ae.localGradient;return z&&(ee=C),{rx:j[0],ry:j[1],r:G,startAngle:Q,endAngle:C,gradientEndAngle:ee}}function U(Y,P){var q=Y.data,j=Y.dataItemStyle,ee=q[P],ae=ee.lineWidth,G=ee.gradient;return G=G.map(function(Q){return(0,c.getRgbaValue)(Q)}),(0,l.deepMerge)({lineWidth:ae,gradient:G},j)}function A(Y){var P=D(Y);return P.map(function(q){var j=d({},q.shape);j.endAngle=q.shape.startAngle,q.shape=j}),P}function k(Y,P){var q=Y.style.gradient,j=q.length,ee=P.style.gradient.length;if(j>ee)q.splice(ee);else{var ae=q.slice(-1)[0];q.push.apply(q,(0,r.default)(new Array(ee-j).fill(0).map(function(G){return(0,r.default)(ae)})))}}function K(Y){var P=Y.animationCurve,q=Y.animationFrame,j=Y.center,ee=Y.rLevel;return[{name:"polyline",index:ee,visible:Y.pointer.show,animationCurve:P,animationFrame:q,shape:te(Y),style:re(Y),setGraphCenter:function(ae,G){G.style.graphCenter=j}}]}function te(Y){var P=Y.center;return{points:pe(P),close:!0}}function re(Y){var P=Y.startAngle,q=Y.endAngle,j=Y.min,ee=Y.max,ae=Y.data,G=Y.pointer,Q=Y.center,C=G.valueIndex,z=G.style,W=ae[C]?ae[C].value:0,Z=(W-j)/(ee-j)*(q-P)+P+Math.PI/2;return(0,l.deepMerge)({rotate:(0,l.radianToAngle)(Z),scale:[1,1],graphCenter:Q},z)}function pe(Y){var P=(0,n.default)(Y,2),q=P[0],j=P[1],ee=[q,j-40],ae=[q+5,j],G=[q,j+10],Q=[q-5,j];return[ee,ae,G,Q]}function ne(Y){var P=Y.startAngle,q=K(Y)[0];return q.style.rotate=(0,l.radianToAngle)(P+Math.PI/2),[q]}function se(Y){var P=Y.detailsPosition,q=Y.animationCurve,j=Y.animationFrame,ee=Y.rLevel,ae=Y.details.show;return P.map(function(G,Q){return{name:"numberText",index:ee,visible:ae,animationCurve:q,animationFrame:j,shape:me(Y,Q),style:be(Y,Q)}})}function me(Y,P){var q=Y.detailsPosition,j=Y.detailsContent,ee=Y.data,ae=Y.details,G=q[P],Q=j[P],C=ee[P].value,z=ae.valueToFixed;return{number:[C],content:Q,position:G,toFixed:z}}function be(Y,P){var q=Y.details,j=Y.data,ee=q.style,ae=j[P].color;return(0,l.deepMerge)({fill:ae},ee)}return ja}var Xa={},Id;function AS(){if(Id)return Xa;Id=1;var i=ct;Object.defineProperty(Xa,"__esModule",{value:!0}),Xa.legend=l;var e=i(Mn()),t=i(Bt()),n=i(Zt()),r=Dn(),a=Pt(),o=Ln(),s=Jt();function l(E){var D=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=D.legend;R?(R=(0,s.deepMerge)((0,a.deepClone)(o.legendConfig,!0),R),R=c(R),R=u(R,D,E),R=d(R,E),R=m(R,E),R=[R]):R=[],(0,r.doUpdate)({chart:E,series:R,key:"legendIcon",getGraphConfig:b}),(0,r.doUpdate)({chart:E,series:R,key:"legendText",getGraphConfig:N})}function c(E){var D=E.data;return E.data=D.map(function(R){var U=(0,n.default)(R);return U==="string"?{name:R}:U==="object"?R:{name:""}}),E}function u(E,D,R){var U=D.series,A=R.legendStatus,k=E.data.filter(function(K){var te=K.name,re=U.find(function(pe){var ne=pe.name;return te===ne});return re?(K.color||(K.color=re.color),K.icon||(K.icon=re.type),K):!1});return(!A||A.length!==E.data.length)&&(A=new Array(E.data.length).fill(!0)),k.forEach(function(K,te){return K.status=A[te]}),E.data=k,R.legendStatus=A,E}function d(E,D){var R=D.render.ctx,U=E.data,A=E.textStyle,k=E.textUnselectedStyle;return U.forEach(function(K){var te=K.status,re=K.name;K.textWidth=f(R,re,te?A:k)}),E}function f(E,D,R){return E.font=h(R),E.measureText(D).width}function h(E){var D=E.fontFamily,R=E.fontSize;return"".concat(R,"px ").concat(D)}function m(E,D){var R=E.orient;return R==="vertical"?M(E,D):v(E,D),E}function v(E,D){var R=E.iconHeight,U=E.itemGap,A=g(E,D),k=A.map(function(re){return y(re,E,D)}),K=x(E,D),te={textAlign:"left",textBaseline:"middle"};A.forEach(function(re,pe){return re.forEach(function(ne){var se=ne.iconPosition,me=ne.textPosition,be=k[pe],Y=K+pe*(U+R);ne.iconPosition=S(se,[be,Y]),ne.textPosition=S(me,[be,Y]),ne.align=te})})}function g(E,D){var R=E.data,U=E.iconWidth,A=D.render.area[0],k=0,K=[[]];return R.forEach(function(te,re){var pe=p(k,re,E),ne=pe+U+5+te.textWidth;ne>=A&&(k=re,pe=p(k,re,E),K.push([])),te.iconPosition=[pe,0],te.textPosition=[pe+U+5,0],K.slice(-1)[0].push(te)}),K}function p(E,D,R){var U=R.data,A=R.iconWidth,k=R.itemGap,K=U.slice(E,D);return(0,s.mulAdd)(K.map(function(te){var re=te.textWidth;return re}))+(D-E)*(k+5+A)}function y(E,D,R){var U=D.left,A=D.right,k=D.iconWidth,K=D.itemGap,te=R.render.area[0],re=E.length,pe=(0,s.mulAdd)(E.map(function(se){var me=se.textWidth;return me}))+re*(5+k)+(re-1)*K,ne=[U,A].findIndex(function(se){return se!=="auto"});return ne===-1?(te-pe)/2:ne===0?typeof U=="number"?U:parseInt(U)/100*te:(typeof A!="number"&&(A=parseInt(A)/100*te),te-(pe+A))}function x(E,D){var R=E.top,U=E.bottom,A=E.iconHeight,k=D.render.area[1],K=[R,U].findIndex(function(se){return se!=="auto"}),te=A/2;if(K===-1){var re=D.gridArea,pe=re.y,ne=re.h;return pe+ne+45-te}else return K===0?typeof R=="number"?R-te:parseInt(R)/100*k-te:(typeof U!="number"&&(U=parseInt(U)/100*k),k-U-te)}function S(E,D){var R=(0,t.default)(E,2),U=R[0],A=R[1],k=(0,t.default)(D,2),K=k[0],te=k[1];return[U+K,A+te]}function M(E,D){var R=O(E,D),U=(0,t.default)(R,2),A=U[0],k=U[1],K=T(E,D);L(E,A);var te={textAlign:"left",textBaseline:"middle"};E.data.forEach(function(re){var pe=re.textPosition,ne=re.iconPosition;re.textPosition=S(pe,[k,K]),re.iconPosition=S(ne,[k,K]),re.align=te})}function O(E,D){var R=E.left,U=E.right,A=D.render.area[0],k=[R,U].findIndex(function(te){return te!=="auto"});if(k===-1)return[!0,A-10];var K=[R,U][k];return typeof K!="number"&&(K=parseInt(K)/100*A),[!!k,K]}function T(E,D){var R=E.iconHeight,U=E.itemGap,A=E.data,k=E.top,K=E.bottom,te=D.render.area[1],re=A.length,pe=re*R+(re-1)*U,ne=[k,K].findIndex(function(me){return me!=="auto"});if(ne===-1)return(te-pe)/2;var se=[k,K][ne];return typeof se!="number"&&(se=parseInt(se)/100*te),ne===1&&(se=te-se-pe),se}function L(E,D){var R=E.data,U=E.iconWidth,A=E.iconHeight,k=E.itemGap,K=A/2;R.forEach(function(te,re){var pe=te.textWidth,ne=(A+k)*re+K,se=D?0-U:0,me=D?se-5-pe:U+5;te.iconPosition=[se,ne],te.textPosition=[me,ne]})}function b(E,D){var R=E.data,U=E.selectAble,A=E.animationCurve,k=E.animationFrame,K=E.rLevel;return R.map(function(te,re){return(0,e.default)({name:te.icon==="line"?"lineIcon":"rect",index:K,visible:E.show,hover:U,click:U,animationCurve:A,animationFrame:k,shape:_(E,re),style:V(E,re)},"click",$(E,re,D))})}function _(E,D){var R=E.data,U=E.iconWidth,A=E.iconHeight,k=(0,t.default)(R[D].iconPosition,2),K=k[0],te=k[1],re=A/2;return{x:K,y:te-re,w:U,h:A}}function V(E,D){var R=E.data,U=E.iconStyle,A=E.iconUnselectedStyle,k=R[D],K=k.status,te=k.color,re=K?U:A;return(0,s.deepMerge)({fill:te},re)}function N(E,D){var R=E.data,U=E.selectAble,A=E.animationCurve,k=E.animationFrame,K=E.rLevel;return R.map(function(te,re){return{name:"text",index:K,visible:E.show,hover:U,animationCurve:A,animationFrame:k,hoverRect:H(E,re),shape:F(E,re),style:B(E,re),click:$(E,re,D)}})}function F(E,D){var R=E.data[D],U=R.textPosition,A=R.name;return{content:A,position:U}}function B(E,D){var R=E.textStyle,U=E.textUnselectedStyle,A=E.data[D],k=A.status,K=A.align,te=k?R:U;return(0,s.deepMerge)((0,a.deepClone)(te,!0),K)}function H(E,D){var R=E.textStyle,U=E.textUnselectedStyle,A=E.data[D],k=A.status,K=(0,t.default)(A.textPosition,2),te=K[0],re=K[1],pe=A.textWidth,ne=k?R:U,se=ne.fontSize;return[te,re-se/2,pe,se]}function $(E,D,R){var U=E.data[D].name;return function(){var A=R.chart,k=A.legendStatus,K=A.option,te=!k[D],re=K.series.find(function(pe){var ne=pe.name;return ne===U});re.show=te,k[D]=te,R.chart.setOption(K)}}return Xa}var Od;function CS(){return Od||(Od=1,function(i){Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"mergeColor",{enumerable:!0,get:function(){return e.mergeColor}}),Object.defineProperty(i,"title",{enumerable:!0,get:function(){return t.title}}),Object.defineProperty(i,"grid",{enumerable:!0,get:function(){return n.grid}}),Object.defineProperty(i,"axis",{enumerable:!0,get:function(){return r.axis}}),Object.defineProperty(i,"line",{enumerable:!0,get:function(){return a.line}}),Object.defineProperty(i,"bar",{enumerable:!0,get:function(){return o.bar}}),Object.defineProperty(i,"pie",{enumerable:!0,get:function(){return s.pie}}),Object.defineProperty(i,"radarAxis",{enumerable:!0,get:function(){return l.radarAxis}}),Object.defineProperty(i,"radar",{enumerable:!0,get:function(){return c.radar}}),Object.defineProperty(i,"gauge",{enumerable:!0,get:function(){return u.gauge}}),Object.defineProperty(i,"legend",{enumerable:!0,get:function(){return d.legend}});var e=bS(),t=vS(),n=xS(),r=_S(),a=yS(),o=MS(),s=SS(),l=ES(),c=TS(),u=wS(),d=AS()}(ld)),ld}var Ud;function RS(){return Ud||(Ud=1,function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=e(Zt()),n=e(aa()),r=e(js),a=Pt(),o=CS(),s=function l(c){if((0,n.default)(this,l),!c)return!1;var u=c.clientWidth,d=c.clientHeight,f=document.createElement("canvas");f.setAttribute("width",u),f.setAttribute("height",d),c.appendChild(f);var h={container:c,canvas:f,render:new r.default(f),option:null};Object.assign(this,h)};i.default=s,s.prototype.setOption=function(l){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!l||(0,t.default)(l)!=="object")return!1;c&&this.render.graphs.forEach(function(d){return d.animationEnd()});var u=(0,a.deepClone)(l,!0);(0,o.mergeColor)(this,u),(0,o.grid)(this,u),(0,o.axis)(this,u),(0,o.radarAxis)(this,u),(0,o.title)(this,u),(0,o.bar)(this,u),(0,o.line)(this,u),(0,o.pie)(this,u),(0,o.radar)(this,u),(0,o.gauge)(this,u),(0,o.legend)(this,u),this.option=l,this.render.launchAnimation()},s.prototype.resize=function(){var l=this.container,c=this.canvas,u=this.render,d=this.option,f=l.clientWidth,h=l.clientHeight;c.setAttribute("width",f),c.setAttribute("height",h),u.area=[f,h],this.setOption(d)}}(id)),id}(function(i){var e=ct;Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"changeDefaultConfig",{enumerable:!0,get:function(){return n.changeDefaultConfig}}),i.default=void 0;var t=e(RS()),n=Ln(),r=t.default;i.default=r})(QM);const sa={color:{type:Array,default:()=>[]},backgroundColor:{type:String,default:"transparent"}};function PS(i,e){return Ue(()=>e.value.length===0?i:e.value)}const LS=["left-top","right-top","left-bottom","right-bottom"],DS=["#4fd2dd","#235fa7"],is=gt({props:sa,setup(i){const e=Ze(null),t=PS(DS,lt(i,"color")),{width:n,height:r,initWH:a}=OM(e);return{width:n,height:r,initWH:a,mergedColor:t,borderBox1:e}},render(){const{backgroundColor:i,width:e,height:t,mergedColor:n,$slots:r}=this;return nt("div",{ref:"borderBox1",class:"dv-border-box-1"},[nt("svg",{class:"dv-border",width:e,height:t},[nt("polygon",{fill:i,points:`10, 27 10, ${t-27} 13, ${t-24} 13, ${t-21} 24, ${t-11}
      38, ${t-11} 41, ${t-8} 73, ${t-8} 75, ${t-10} 81, ${t-10}
      85, ${t-6} ${e-85}, ${t-6} ${e-81}, ${t-10} ${e-75}, ${t-10}
      ${e-73}, ${t-8} ${e-41}, ${t-8} ${e-38}, ${t-11}
      ${e-10}, ${t-27} ${e-10}, 27 ${e-13}, 25 ${e-13}, 21
      ${e-24}, 11 ${e-38}, 11 ${e-41}, 8 ${e-73}, 8 ${e-75}, 10
      ${e-81}, 10 ${e-85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`},null)]),LS.map(a=>nt("svg",{key:a,width:"150px",height:"150px",class:`${a} dv-border`},[nt("polygon",{fill:n[0],points:"6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"},[nt("animate",{attributeName:"fill",values:`${n[0]};${n[1]};${n[0]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null)]),nt("polygon",{fill:n[1],points:"27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"},[nt("animate",{attributeName:"fill",values:`${n[1]};${n[0]};${n[1]}`,dur:"0.5s",begin:"0s",repeatCount:"indefinite"},null)]),nt("polygon",{fill:n[0],points:"9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"},[nt("animate",{attributeName:"fill",values:`${n[0]};${n[1]};transparent`,dur:"1s",begin:"0s",repeatCount:"indefinite"},null)])])),nt("div",{class:"border-box-content"},[Rh(r,"default")])])}});({...sa});({...sa});({...sa});({...sa});const IS={class:"component-context"},OS={class:"sortable w-[264px] h-[264px]","data-id":"1"},US={class:"Card ignore-el","data-id":"1.5"},FS={class:"sorchart w-[264px] h-[264px] mt-3","data-id":"2"},kS={class:"sorbox w-[128px] h-[128px]","data-id":"3"},NS={class:"sorfonts w-[128px] h-[128px]","data-id":"4"},zS={__name:"labs",setup(i){const e=v=>{},{x:t,y:n}=fM(),r=op(),a=rm(),o=()=>[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],s=({sendMail:v})=>[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(g){return g.tags.map(y=>Ee(up,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>y}))}},{title:"Action",key:"actions",render(g){return Ee(Ya,{size:"small",onClick:()=>v(g)},{default:()=>"操作"})}}],l=Ze(100),c=o(),u=s({sendMail(v){r.info("send mail to "+v.name),a.info({content:"说点啥呢",meta:"想不出来",duration:2500,keepAliveOnHover:!0})}}),d=Vd({pageSize:10}),f=Ih(),h=()=>{f.push("/home")};Ze("2");const m=v=>{const g=document.querySelector(`.${v}`);var p=Hh.create(g,{group:{name:"shared",pull:"clone"},animation:150,filter:".ignore-el",easing:"cubic-bezier(0.83, 0, 0.17, 1)",dataIdAttr:"data-id",onStart:()=>{},onEnd:({to:y,newIndex:x,oldIndex:S})=>{var M=p.toArray()}})};return ea(()=>{m("context1")}),(v,g)=>{const p=sy,y=eM,x=tM,S=im,M=sp,O=em,T=cp,L=qd,b=uM,_=sM,V=rM,N=lp;return Ri(),mr("div",IS,[nt(N,{type:"line"},{default:un(()=>[nt(M,{tab:"Tab 1",name:"1",class:"context1"},{default:un(()=>[Kt("div",null,Qs(Tn(t))+","+Qs(Tn(n)),1),Kt("div",OS,[nt(Tn(is),{color:["red","blue"]},{default:un(()=>[g[0]||(g[0]=Er(" content ")),nt(p)]),_:1})]),Kt("div",US,[nt(y)]),Kt("div",FS,[nt(Tn(is),{color:["white","grey"]},{default:un(()=>[nt(x)]),_:1})]),Kt("div",kS,[nt(Tn(is),{color:["yellow","blue"]})]),Kt("div",NS,[nt(S,{type:"info"},{default:un(()=>g[1]||(g[1]=[Kt("div",{class:"testtile"},"Live Forever 阿里妈妈DE字体",-1)])),_:1})])]),_:1}),nt(M,{tab:"Tab 2",name:"2"},{default:un(()=>[g[4]||(g[4]=Er(" Content of Tab Pane 2 ")),nt(Tn(Ya),{type:"primary",onClick:h},{default:un(()=>g[2]||(g[2]=[Er("home")])),_:1}),nt(T,{vertical:"",size:12},{default:un(()=>[nt(O,{bordered:!1,"single-line":!1,columns:Tn(u),data:Tn(c),pagination:d},null,8,["columns","data","pagination"])]),_:1}),nt(T,{vertical:""},{default:un(()=>[nt(L,{"page-count":l.value,"on-update:page":e,"show-quick-jumper":""},{goto:un(()=>g[3]||(g[3]=[Er(" 跳转 ")])),_:1},8,["page-count"])]),_:1})]),_:1}),nt(M,{tab:"Tab 3",name:"3"},{default:un(()=>[g[5]||(g[5]=Er(" Content of Tab Pane 3 ")),nt(b,{class:"w-[64px] h-[64px] text-emerald-400 bg-gradient-to-r from-cyan-500 to-blue-500"}),nt(_),g[6]||(g[6]=Kt("svg",{class:"w-[64px] h-[64px]",viewBox:"0 0 24 24"},[Kt("path",{fill:"#dfa3f0",d:"m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17.002 8.79L15.68 6.32L13.208 5l2.473-1.318L17 1.208ZM8 4.333l2.667 5l5 2.667l-5 2.666l-2.666 5l-2.667-5l-5-2.666l5-2.667l2.667-5Zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.666l1.667 3.125l1.666-3.125L22.792 18l-3.125-1.667Z"})],-1)),g[7]||(g[7]=Kt("svg",{class:"w-[64px] h-[64px]",viewBox:"0 0 24 24"},[Kt("path",{fill:"#38ad55",d:"M1.001 3h4l7 12l7-12h4l-11 19l-11-19Zm8.667 0L12 7l2.333-4h4.035L12 14L5.633 3h4.035Z"})],-1)),nt(V)]),_:1})]),_:1})])}}},cE=Hd(zS,[["__scopeId","data-v-6d10416d"]]);export{cE as default};
