import{r as P,R as t}from"./index-CDlOlYQx.js";import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{c as _}from"./createSvgIcon-CpiYeT0y.js";import{P as N}from"./PageHeader-CVwaxNeh.js";import{t as s}from"./sizes-BeWafy6f.js";import{c as a}from"./styled-components.browser.esm-CsHOGV45.js";import"./Typography-Bp-nXGcB.js";import{T as B}from"./Text-B-CII8XP.js";import{C as R,R as j}from"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import{B as z}from"./Button-DiGzPWWk.js";import{S as H,u as O}from"./FormFieldText.styled-CRryNLjj.js";import{S as U}from"./Spinner-Dd-oad_B.js";import{C as K}from"./CheckboxList-BlEbFa5n.js";import"./MosaicContext-Ckn3SYVO.js";import{t as W}from"./testIds-B6Pox1zA.js";import{c as D,a as k}from"./identifier-D-VlK421.js";import{u as V,F as q}from"./formControlState-VojGIu4f.js";import{a as G,g as J,u as Q,s as X,c as Y,m as Z}from"./createSimplePaletteValueFilter-CQDqkEyb.js";import{T as tt}from"./StyledOptionFormControl-DVa9h7YW.js";function et(e){return J("MuiInputAdornment",e)}const $=G("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var A;const nt=(e,r)=>{const{ownerState:n}=e;return[r.root,r[`position${k(n.position)}`],n.disablePointerEvents===!0&&r.disablePointerEvents,r[n.variant]]},ot=e=>{const{classes:r,disablePointerEvents:n,hiddenLabel:i,position:l,size:m,variant:v}=e,u={root:["root",n&&"disablePointerEvents",l&&`position${k(l)}`,v,i&&"hiddenLabel",m&&`size${k(m)}`]};return Y(u,et,r)},rt=X("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:nt})(Z(({theme:e})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${$.positionStart}&:not(.${$.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),L=P.forwardRef(function(r,n){const i=Q({props:r,name:"MuiInputAdornment"}),{children:l,className:m,component:v="div",disablePointerEvents:u=!1,disableTypography:y=!1,position:b,variant:p,...g}=i,c=V()||{};let f=p;p&&c.variant,c&&!f&&(f=c.variant);const E={...i,hiddenLabel:c.hiddenLabel,size:c.size,disablePointerEvents:u,position:b,variant:f},x=ot(E);return d.jsx(q.Provider,{value:null,children:d.jsx(rt,{as:v,ownerState:E,className:D(x.root,m),ref:n,...g,children:typeof l=="string"&&!y?d.jsx(tt,{color:"textSecondary",children:l}):d.jsxs(P.Fragment,{children:[b==="start"?A||(A=d.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,l]})})})}),at=_(d.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),st=_(d.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"})),it=a(R)`
	${({$fullHeight:e})=>e&&`
		height: 100%;
	`}
`,lt=a(j)`
	flex-grow: 1;
	min-height: 0;
`,ct=a.div`
	padding: ${s.spacing(5,5,0)};
`,mt=a(R)`
	flex: 1;
`,pt=a.div`
	padding: ${s.spacing(5)};
	flex: 1;
	overflow: auto;
`,dt=a(B).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${s.spacing(3)};
`,ut=a(H)`
	width: 100%;
`,gt=a(z).attrs({fullWidth:!0})`
	margin-top: ${s.spacing(3)};
`,Mt=a.div`
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
`,ft=a(U)`
	margin: ${s.spacing(3,0)};
`;function Ft({fullHeight:e=!0,className:r,options:n,checked:i,disabled:l,optionsSubtitle:m,activePanel:v,onLoadMore:u,onChange:y,onKeywordChange:b,onSave:p,onCancel:g,onCreateNew:c,isLoading:f,noOptions:E="No options to display",saveText:x="Save",...C}){const[h,T]=P.useState(""),{t:S}=O(),w=P.useMemo(()=>h?n.filter(o=>o.label.toLowerCase().includes(h.toLowerCase())):n,[h,n]),M=o=>{y&&y(o)},I=P.useMemo(()=>{const o=[];return!p&&!g||(g&&o.push({label:"Cancel",onClick:g,intent:"secondary",variant:"contained"}),p&&o.push({label:x,onClick:()=>p(i),intent:"primary",variant:"contained"})),o},[i,g,p,x]),F=({target:{value:o}})=>{T(o),b&&b(o)};return t.createElement(it,{$fullHeight:e,className:r},(C.title||I.length||C.onBack)&&t.createElement(N,{...C,buttons:I}),t.createElement(lt,null,t.createElement(mt,{"data-testid":W.PICKER_PANEL_OPTIONS},t.createElement(ct,null,m&&t.createElement(dt,null,m),t.createElement(ut,{onChange:F,value:h,placeholder:S("mosaic:common.keyword___"),autoFocus:!0,slotProps:{input:{inputProps:{"aria-label":S("mosaic:common.keyword___")},startAdornment:t.createElement(L,{position:"start"},t.createElement(at,null)),endAdornment:c&&h&&t.createElement(L,{position:"end"},t.createElement(z,{label:"Create",variant:"text",intent:"secondary",mIcon:st,onClick:()=>c(h)}))}}})),t.createElement(pt,null,w.length?t.createElement(K,{checked:i,options:w,onChange:M,itemsPerColumn:-1,disabled:l}):t.createElement(t.Fragment,null,E),f&&t.createElement(j,{$justify:"center"},t.createElement(ft,null)),!f&&u&&t.createElement(gt,{intent:"secondary",variant:"contained",label:S("mosaic:common.load_more___"),onClick:u}))),v))}export{st as A,L as I,Ft as P,at as S,Mt as a,dt as b};
