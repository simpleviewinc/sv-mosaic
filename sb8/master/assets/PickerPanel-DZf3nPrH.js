import{r as E,g as z,R as t}from"./index-D0AnReJb.js";import{_ as W,a as A,b as k,r as T}from"./identifier-Bktyv6O_.js";import{r as F}from"./createSvgIcon-D5aI0OD-.js";import{j as b,r as N}from"./jsx-runtime-EKYJJIwR.js";import{P as J}from"./PageHeader-DbhT7nzS.js";import{t as c}from"./sizes-_ON_TzAH.js";import{s as a}from"./styled-components.browser.esm-C5LJ_neh.js";import"./Typography-DBsSg8HG.js";import{T as V}from"./Text-ChOjGkiI.js";import{a as O,R as B,C as G}from"./CheckboxList-DDeK_q7o.js";import{B as D}from"./Button-D5Mq00Ds.js";import{S as Q}from"./FormFieldText.styled-CJUQilOD.js";import{S as X}from"./Spinner-m5_IcvNq.js";import{u as Y}from"./useMosaicTranslation-di9nduwf.js";import{t as Z}from"./testIds-BKXNnpj0.js";import{a as ee,g as te,u as re,s as ne,c as oe,b as ae}from"./generateUtilityClasses-D4jmUuEZ.js";import{u as ie,F as se}from"./formControlState-BI4toe_X.js";import{T as le}from"./StyledOptionFormControl-Cwl0Q2GB.js";function ce(r){return te("MuiInputAdornment",r)}const w=ee("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var $;const de=["children","className","component","disablePointerEvents","disableTypography","position","variant"],me=(r,e)=>{const{ownerState:n}=r;return[e.root,e[`position${k(n.position)}`],n.disablePointerEvents===!0&&e.disablePointerEvents,e[n.variant]]},ue=r=>{const{classes:e,disablePointerEvents:n,hiddenLabel:i,position:s,size:d,variant:g}=r,u={root:["root",n&&"disablePointerEvents",s&&`position${k(s)}`,g,i&&"hiddenLabel",d&&`size${k(d)}`]};return ae(u,ce,e)},pe=ne("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:me})(({theme:r,ownerState:e})=>A({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(r.vars||r).palette.action.active},e.variant==="filled"&&{[`&.${w.positionStart}&:not(.${w.hiddenLabel})`]:{marginTop:16}},e.position==="start"&&{marginRight:8},e.position==="end"&&{marginLeft:8},e.disablePointerEvents===!0&&{pointerEvents:"none"})),L=E.forwardRef(function(e,n){const i=re({props:e,name:"MuiInputAdornment"}),{children:s,className:d,component:g="div",disablePointerEvents:u=!1,disableTypography:y=!1,position:v,variant:m}=i,p=W(i,de),l=ie()||{};let f=m;m&&l.variant,l&&!f&&(f=l.variant);const _=A({},i,{hiddenLabel:l.hiddenLabel,size:l.size,disablePointerEvents:u,position:v,variant:f}),C=ue(_);return b.jsx(se.Provider,{value:null,children:b.jsx(pe,A({as:g,ownerState:_,className:oe(C.root,d),ref:n},p,{children:typeof s=="string"&&!y?b.jsx(le,{color:"text.secondary",children:s}):b.jsxs(E.Fragment,{children:[v==="start"?$||($=b.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});var x={},M;function fe(){if(M)return x;M=1;var r=T();Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var e=r(F()),n=N();return x.default=(0,e.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),x}var he=fe();const ge=z(he);var P={},q;function ve(){if(q)return P;q=1;var r=T();Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var e=r(F()),n=N();return P.default=(0,e.default)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),P}var be=ve();const xe=z(be),Pe=a(O)`
	${({$fullHeight:r})=>r&&`
		height: 100%;
	`}
`,Ee=a(B)`
	flex-grow: 1;
	min-height: 0;
`,ye=a.div`
	padding: ${c.spacing(5,5,0)};
`,_e=a(O)`
	flex: 1;
`,Ce=a.div`
	padding: ${c.spacing(5)};
	flex: 1;
	overflow: auto;
`,Ie=a(V).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${c.spacing(3)};
`,Se=a(Q)`
	width: 100%;
`,Ae=a(D).attrs({fullWidth:!0})`
	margin-top: ${c.spacing(3)};
`,Je=a.div`
	background-color: ${c.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${c.color.gray[300]};
	padding: ${c.spacing(5,6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;
`,ke=a(X)`
	margin: ${c.spacing(3,0)};
`;function Ve({fullHeight:r=!0,className:e,options:n,checked:i,disabled:s,optionsSubtitle:d,activePanel:g,onLoadMore:u,onChange:y,onKeywordChange:v,onSave:m,onCancel:p,onCreateNew:l,isLoading:f,noOptions:_="No options to display",saveText:C="Save",...I}){const[h,H]=E.useState(""),{t:S}=Y(),R=E.useMemo(()=>h?n.filter(o=>o.label.toLowerCase().includes(h.toLowerCase())):n,[h,n]),U=o=>{y&&y(o)},j=E.useMemo(()=>{const o=[];return!m&&!p||(p&&o.push({label:"Cancel",onClick:p,intent:"secondary",variant:"contained"}),m&&o.push({label:C,onClick:()=>m(i),intent:"primary",variant:"contained"})),o},[i,p,m,C]),K=({target:{value:o}})=>{H(o),v&&v(o)};return t.createElement(Pe,{$fullHeight:r,className:e},(I.title||j.length||I.onBack)&&t.createElement(J,{...I,buttons:j}),t.createElement(Ee,null,t.createElement(_e,{"data-testid":Z.PICKER_PANEL_OPTIONS},t.createElement(ye,null,d&&t.createElement(Ie,null,d),t.createElement(Se,{onChange:K,value:h,placeholder:S("mosaic:common.keyword___"),autoFocus:!0,InputProps:{inputProps:{"aria-label":S("mosaic:common.keyword___")},startAdornment:t.createElement(L,{position:"start"},t.createElement(ge,null)),endAdornment:l&&h&&t.createElement(L,{position:"end"},t.createElement(D,{label:"Create",variant:"text",intent:"secondary",mIcon:xe,onClick:()=>l(h)}))}})),t.createElement(Ce,null,R.length?t.createElement(G,{checked:i,options:R,onChange:U,itemsPerColumn:-1,disabled:s}):t.createElement(t.Fragment,null,_),f&&t.createElement(B,{$justify:"center"},t.createElement(ke,null)),!f&&u&&t.createElement(Ae,{intent:"secondary",variant:"contained",label:S("mosaic:common.load_more___"),onClick:u}))),g))}export{xe as A,L as I,Ve as P,ge as S,Je as a,Ie as b};
