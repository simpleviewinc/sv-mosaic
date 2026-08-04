import{r as P,R as t}from"./index-wekxHvEx.js";import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as M}from"./createSvgIcon-h9rIBQiG.js";import{A as N}from"./Add-SmKzKNaz.js";import{P as B}from"./PageHeader-CXRi2Lzn.js";import{t as s}from"./sizes-BeWafy6f.js";import{c as a}from"./styled-components.browser.esm-DDzsJbQW.js";import"./Typography-ByjXglyy.js";import{T as H}from"./Text-CfL2WyGr.js";import{C as _,R}from"./StyledPopperPaper-C4GIz6jS.js";import"./TooltipIcon-CPXCaul4.js";import{B as T}from"./Button-CdzdKupF.js";import{S as O,u as U}from"./FormFieldText.styled-yvYOpJcX.js";import{S as K}from"./Spinner-pOddc5Fg.js";import{C as W}from"./CheckboxList-CRirri0N.js";import"./MosaicContext-DJPbhtc9.js";import{t as D}from"./testIds-B6Pox1zA.js";import{c as q}from"./identifier-Bq1wI7MV.js";import{u as G,F as J}from"./formControlState-Qaq2QphE.js";import{g as Q,a as V,u as X,c as k,b as Y,s as Z,m as tt}from"./createSimplePaletteValueFilter-BVevyrl8.js";import{T as et}from"./StyledOptionFormControl-GdCwvfsB.js";function nt(e){return Q("MuiInputAdornment",e)}const $=V("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var A;const ot=(e,r)=>{const{ownerState:n}=e;return[r.root,r[`position${k(n.position)}`],n.disablePointerEvents===!0&&r.disablePointerEvents,r[n.variant]]},rt=e=>{const{classes:r,disablePointerEvents:n,hiddenLabel:i,position:l,size:m,variant:b}=e,d={root:["root",n&&"disablePointerEvents",l&&`position${k(l)}`,b,i&&"hiddenLabel",m&&`size${k(m)}`]};return Y(d,nt,r)},at=Z("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ot})(tt(({theme:e})=>({display:"flex",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active,variants:[{props:{variant:"filled"},style:{[`&.${$.positionStart}&:not(.${$.hiddenLabel})`]:{marginTop:16}}},{props:{position:"start"},style:{marginRight:8}},{props:{position:"end"},style:{marginLeft:8}},{props:{disablePointerEvents:!0},style:{pointerEvents:"none"}}]}))),L=P.forwardRef(function(r,n){const i=X({props:r,name:"MuiInputAdornment"}),{children:l,className:m,component:b="div",disablePointerEvents:d=!1,disableTypography:y=!1,position:v,variant:p,...u}=i,c=G()||{};let g=p;p&&c.variant,c&&!g&&(g=c.variant);const E={...i,hiddenLabel:c.hiddenLabel,size:c.size,disablePointerEvents:d,position:v,variant:g},x=rt(E);return h.jsx(J.Provider,{value:null,children:h.jsx(at,{as:b,ownerState:E,className:q(x.root,m),ref:n,...u,children:typeof l=="string"&&!y?h.jsx(et,{color:"textSecondary",children:l}):h.jsxs(P.Fragment,{children:[v==="start"?A||(A=h.jsx("span",{className:"notranslate","aria-hidden":!0,children:"​"})):null,l]})})})}),st=M(h.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),it=a(_)`
	${({$fullHeight:e})=>e&&`
		height: 100%;
	`}
`,lt=a(R)`
	flex-grow: 1;
	min-height: 0;
`,ct=a.div`
	padding: ${s.spacing(5,5,0)};
`,mt=a(_)`
	flex: 1;
`,pt=a.div`
	padding: ${s.spacing(5)};
	flex: 1;
	overflow: auto;
`,dt=a(H).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${s.spacing(3)};
`,ut=a(O)`
	width: 100%;
`,gt=a(T).attrs({fullWidth:!0})`
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
`,ft=a(K)`
	margin: ${s.spacing(3,0)};
`;function Nt({fullHeight:e=!0,className:r,options:n,checked:i,disabled:l,optionsSubtitle:m,activePanel:b,onLoadMore:d,onChange:y,onKeywordChange:v,onSave:p,onCancel:u,onCreateNew:c,isLoading:g,noOptions:E="No options to display",saveText:x="Save",...C}){const[f,j]=P.useState(""),{t:S}=U(),w=P.useMemo(()=>f?n.filter(o=>o.label.toLowerCase().includes(f.toLowerCase())):n,[f,n]),z=o=>{y&&y(o)},I=P.useMemo(()=>{const o=[];return!p&&!u||(u&&o.push({label:"Cancel",onClick:u,intent:"secondary",variant:"contained"}),p&&o.push({label:x,onClick:()=>p(i),intent:"primary",variant:"contained"})),o},[i,u,p,x]),F=({target:{value:o}})=>{j(o),v&&v(o)};return t.createElement(it,{$fullHeight:e,className:r},(C.title||I.length||C.onBack)&&t.createElement(B,{...C,buttons:I}),t.createElement(lt,null,t.createElement(mt,{"data-testid":D.PICKER_PANEL_OPTIONS},t.createElement(ct,null,m&&t.createElement(dt,null,m),t.createElement(ut,{onChange:F,value:f,placeholder:S("mosaic:common.keyword___"),autoFocus:!0,slotProps:{input:{inputProps:{"aria-label":S("mosaic:common.keyword___")},startAdornment:t.createElement(L,{position:"start"},t.createElement(st,null)),endAdornment:c&&f&&t.createElement(L,{position:"end"},t.createElement(T,{label:"Create",variant:"text",intent:"secondary",mIcon:N,onClick:()=>c(f)}))}}})),t.createElement(pt,null,w.length?t.createElement(W,{checked:i,options:w,onChange:z,itemsPerColumn:-1,disabled:l}):t.createElement(t.Fragment,null,E),g&&t.createElement(R,{$justify:"center"},t.createElement(ft,null)),!g&&d&&t.createElement(gt,{intent:"secondary",variant:"contained",label:S("mosaic:common.load_more___"),onClick:d}))),b))}export{L as I,Nt as P,st as S,Mt as a,dt as b};
