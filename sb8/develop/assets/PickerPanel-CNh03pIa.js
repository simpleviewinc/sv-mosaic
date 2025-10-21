import{r as E,g as z,R as r}from"./index-ePW8zFKp.js";import{_ as W,a as A,b as k,r as T}from"./identifier-vWKndVvV.js";import{r as F}from"./createSvgIcon-DOp_2lHr.js";import{j as b,r as N}from"./jsx-runtime-EKYJJIwR.js";import{P as J}from"./PageHeader-CGRiWJUd.js";import{t as s}from"./sizes-1ZdlMWGC.js";import{s as a}from"./styled-components.browser.esm-CUKKF2J4.js";import"./Typography-Bs-xuYxw.js";import{T as V}from"./Text-cPxBJcyq.js";import{C as O,R as B}from"./StyledPopperPaper-8Ep909Ba.js";import{B as D}from"./Button-DrJO7SQT.js";import{S as G,u as Q}from"./FormFieldText.styled-CoekE1cZ.js";import{S as X}from"./Spinner-Bi6mQivf.js";import{C as Y}from"./CheckboxList-Dy-kOrHq.js";import"./MosaicContext-CjWw6F81.js";import{t as Z}from"./testIds-B6Pox1zA.js";import{a as ee,g as te,u as re,s as ne,c as oe,b as ae}from"./generateUtilityClasses-CUUJXLh7.js";import{u as ie,F as se}from"./formControlState-kJY1j3p4.js";import{T as le}from"./StyledOptionFormControl-Ca00866Q.js";function ce(e){return te("MuiInputAdornment",e)}const j=ee("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var w;const de=["children","className","component","disablePointerEvents","disableTypography","position","variant"],me=(e,t)=>{const{ownerState:n}=e;return[t.root,t[`position${k(n.position)}`],n.disablePointerEvents===!0&&t.disablePointerEvents,t[n.variant]]},ue=e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:i,position:l,size:d,variant:g}=e,u={root:["root",n&&"disablePointerEvents",l&&`position${k(l)}`,g,i&&"hiddenLabel",d&&`size${k(d)}`]};return ae(u,ce,t)},pe=ne("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:me})(({theme:e,ownerState:t})=>A({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${j.positionStart}&:not(.${j.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),L=E.forwardRef(function(t,n){const i=re({props:t,name:"MuiInputAdornment"}),{children:l,className:d,component:g="div",disablePointerEvents:u=!1,disableTypography:y=!1,position:v,variant:m}=i,p=W(i,de),c=ie()||{};let f=m;m&&c.variant,c&&!f&&(f=c.variant);const C=A({},i,{hiddenLabel:c.hiddenLabel,size:c.size,disablePointerEvents:u,position:v,variant:f}),_=ue(C);return b.jsx(se.Provider,{value:null,children:b.jsx(pe,A({as:g,ownerState:C,className:oe(_.root,d),ref:n},p,{children:typeof l=="string"&&!y?b.jsx(le,{color:"text.secondary",children:l}):b.jsxs(E.Fragment,{children:[v==="start"?w||(w=b.jsx("span",{className:"notranslate",children:"​"})):null,l]})}))})});var x={},M;function fe(){if(M)return x;M=1;var e=T();Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var t=e(F()),n=N();return x.default=(0,t.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),x}var he=fe();const ge=z(he);var P={},q;function ve(){if(q)return P;q=1;var e=T();Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var t=e(F()),n=N();return P.default=(0,t.default)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),P}var be=ve();const xe=z(be),Pe=a(O)`
	${({$fullHeight:e})=>e&&`
		height: 100%;
	`}
`,Ee=a(B)`
	flex-grow: 1;
	min-height: 0;
`,ye=a.div`
	padding: ${s.spacing(5,5,0)};
`,Ce=a(O)`
	flex: 1;
`,_e=a.div`
	padding: ${s.spacing(5)};
	flex: 1;
	overflow: auto;
`,Ie=a(V).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${s.spacing(3)};
`,Se=a(G)`
	width: 100%;
`,Ae=a(D).attrs({fullWidth:!0})`
	margin-top: ${s.spacing(3)};
`,Ve=a.div`
	background-color: ${s.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${s.color.gray[300]};
	padding: ${s.spacing(5,6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;

	${({$rounded:e})=>e?`
		border-top-right-radius: ${s.rounded.md};
	`:""}
`,ke=a(X)`
	margin: ${s.spacing(3,0)};
`;function Ge({fullHeight:e=!0,className:t,options:n,checked:i,disabled:l,optionsSubtitle:d,activePanel:g,onLoadMore:u,onChange:y,onKeywordChange:v,onSave:m,onCancel:p,onCreateNew:c,isLoading:f,noOptions:C="No options to display",saveText:_="Save",...I}){const[h,H]=E.useState(""),{t:S}=Q(),R=E.useMemo(()=>h?n.filter(o=>o.label.toLowerCase().includes(h.toLowerCase())):n,[h,n]),U=o=>{y&&y(o)},$=E.useMemo(()=>{const o=[];return!m&&!p||(p&&o.push({label:"Cancel",onClick:p,intent:"secondary",variant:"contained"}),m&&o.push({label:_,onClick:()=>m(i),intent:"primary",variant:"contained"})),o},[i,p,m,_]),K=({target:{value:o}})=>{H(o),v&&v(o)};return r.createElement(Pe,{$fullHeight:e,className:t},(I.title||$.length||I.onBack)&&r.createElement(J,{...I,buttons:$}),r.createElement(Ee,null,r.createElement(Ce,{"data-testid":Z.PICKER_PANEL_OPTIONS},r.createElement(ye,null,d&&r.createElement(Ie,null,d),r.createElement(Se,{onChange:K,value:h,placeholder:S("mosaic:common.keyword___"),autoFocus:!0,InputProps:{inputProps:{"aria-label":S("mosaic:common.keyword___")},startAdornment:r.createElement(L,{position:"start"},r.createElement(ge,null)),endAdornment:c&&h&&r.createElement(L,{position:"end"},r.createElement(D,{label:"Create",variant:"text",intent:"secondary",mIcon:xe,onClick:()=>c(h)}))}})),r.createElement(_e,null,R.length?r.createElement(Y,{checked:i,options:R,onChange:U,itemsPerColumn:-1,disabled:l}):r.createElement(r.Fragment,null,C),f&&r.createElement(B,{$justify:"center"},r.createElement(ke,null)),!f&&u&&r.createElement(Ae,{intent:"secondary",variant:"contained",label:S("mosaic:common.load_more___"),onClick:u}))),g))}export{xe as A,L as I,Ge as P,ge as S,Ve as a,Ie as b};
