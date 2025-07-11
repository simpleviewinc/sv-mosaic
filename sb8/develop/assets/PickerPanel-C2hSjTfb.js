import{g as w,r as g,R as e}from"./index-D0AnReJb.js";import{r as R}from"./identifier-P2c7yk_w.js";import{r as A}from"./createSvgIcon-1nOp1Fw5.js";import{r as $}from"./jsx-runtime-EKYJJIwR.js";import{P as F}from"./PageHeader-Maf0ecTd.js";import{t as a}from"./sizes-xhpoGYFi.js";import{s as r}from"./styled-components.browser.esm-D9jdcGim.js";import"./Typography-DqP6CXHW.js";import{T as H}from"./Text-Cy3-d4Dq.js";import{a as q,R as j,C as K}from"./CheckboxList-BiSNtdOb.js";import{B as L}from"./Button-B-HROxGS.js";import{S as N,I as y}from"./FormFieldText.styled-CreleCMn.js";import{S as W}from"./Spinner-C3xVyrtB.js";import{u as J}from"./useMosaicTranslation-YU7EdNRi.js";import{t as V}from"./testIds-BKutUmNQ.js";var s={},C;function G(){if(C)return s;C=1;var n=R();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=n(A()),o=$();return s.default=(0,l.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),s}var Q=G();const U=w(Q);var c={},I;function X(){if(I)return c;I=1;var n=R();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var l=n(A()),o=$();return c.default=(0,l.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),c}var Y=X();const Z=w(Y),ee=r(q)`
	${({$fullHeight:n})=>n&&`
		height: 100%;
	`}
`,te=r(j)`
	flex-grow: 1;
	min-height: 0;
`,re=r.div`
	padding: ${a.spacing(5,5,0)};
`,ae=r(q)`
	flex: 1;
`,ne=r.div`
	padding: ${a.spacing(5)};
	flex: 1;
	overflow: auto;
`,oe=r(H).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${a.spacing(3)};
`,ie=r(N)`
	width: 100%;
`,le=r(L).attrs({fullWidth:!0})`
	margin-top: ${a.spacing(3)};
`,ke=r.div`
	background-color: ${a.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${a.color.gray[300]};
	padding: ${a.spacing(5,6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;
`,se=r(W)`
	margin: ${a.spacing(3,0)};
`;function ye({fullHeight:n=!0,className:l,options:o,checked:d,disabled:M,optionsSubtitle:h,activePanel:O,onLoadMore:v,onChange:P,onKeywordChange:b,onSave:m,onCancel:u,onCreateNew:x,isLoading:E,noOptions:z="No options to display",saveText:_="Save",...p}){const[i,B]=g.useState(""),{t:f}=J(),S=g.useMemo(()=>i?o.filter(t=>t.label.toLowerCase().includes(i.toLowerCase())):o,[i,o]),T=t=>{P&&P(t)},k=g.useMemo(()=>{const t=[];return!m&&!u||(u&&t.push({label:"Cancel",onClick:u,intent:"secondary",variant:"contained"}),m&&t.push({label:_,onClick:()=>m(d),intent:"primary",variant:"contained"})),t},[d,u,m,_]),D=({target:{value:t}})=>{B(t),b&&b(t)};return e.createElement(ee,{$fullHeight:n,className:l},(p.title||k.length||p.onBack)&&e.createElement(F,{...p,buttons:k}),e.createElement(te,null,e.createElement(ae,{"data-testid":V.PICKER_PANEL_OPTIONS},e.createElement(re,null,h&&e.createElement(oe,null,h),e.createElement(ie,{fieldSize:"100%",onChange:D,value:i,placeholder:f("mosaic:common.keyword___"),autoFocus:!0,InputProps:{inputProps:{"aria-label":f("mosaic:common.keyword___")},startAdornment:e.createElement(y,{position:"start"},e.createElement(U,null)),endAdornment:x&&i&&e.createElement(y,{position:"end"},e.createElement(L,{label:"Create",variant:"text",color:"black",mIcon:Z,onClick:()=>x(i)}))}})),e.createElement(ne,null,S.length?e.createElement(K,{checked:d,options:S,onChange:T,itemsPerColumn:-1,disabled:M}):e.createElement(e.Fragment,null,z),E&&e.createElement(j,{$justify:"center"},e.createElement(se,null)),!E&&v&&e.createElement(le,{intent:"secondary",variant:"contained",label:f("mosaic:common.load_more___"),onClick:v}))),O))}export{Z as A,ye as P,U as S,ke as a,oe as b};
