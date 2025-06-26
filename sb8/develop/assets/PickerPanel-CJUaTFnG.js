import{g as v,r as g,R as t}from"./index-D0AnReJb.js";import{r as x}from"./identifier-C21A9frq.js";import{r as w}from"./createSvgIcon-DLboviGw.js";import{r as b}from"./jsx-runtime-EKYJJIwR.js";import{P as K}from"./PageHeader-CEZufbNa.js";import{t as o}from"./sizes-CTdyEcea.js";import{s as r}from"./styled-components.browser.esm-aVcmUYMZ.js";import"./Typography-DM2nLVeQ.js";import{T as N}from"./Text-Bw6wJuVZ.js";import{B as M}from"./Button-Cu24UfKA.js";import{S as W,I as q}from"./FormFieldText.styled-DTQIdddZ.js";import{S as J}from"./Spinner-DrhQOeHK.js";import{C as V}from"./CheckboxList-6G7BlDZu.js";import{u as G}from"./useMosaicTranslation-CoWLI8L7.js";import{t as Q}from"./testIds-BKutUmNQ.js";const $e=r.div`
  height: 100vh;

  &.mapCoordinates,
  &.address {
    width: 1060px;
  }

  &.mapCoordinates {
    @media (max-width: ${o.breakpoints.mobile}) {
      width: 100vw;
    }
  }

  &.advancedSelection {
    & .checkbox-list-field-wrapper div:first-child {
      width: 100% !important;
    }
    & .topBlock {
      max-width: 800px;
      min-height: calc(100vh - 110px);
      min-width: 600px;
      padding-left: 16px;
      width: 50vw;

      .options {
        width: 70%;
      }

      .selected {
        width: 30%;
      }
    }

    & .topBlock hr {
      margin: -16px 0px 0px 0px;
    }
  }
`;var s={},O;function U(){if(O)return s;O=1;var e=x();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=e(w()),n=b();return s.default=(0,i.default)((0,n.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),s}var X=U();const Y=v(X),Re=r(Y)`
  && {
	fill: ${o.newColors.realTeal[100]};
	width: 24px;
	height: 24px;
  }
`,_=r.div`
	display: flex;

	${({$align:e})=>e&&`
		align-items: ${e};
	`}

	${({$justify:e})=>e&&`
		justify-content: ${e};
	`}

	${({$gap:e})=>e&&`
		gap: ${o.spacing(...e)};
	`}
`,T=r(_)`
	flex-direction: column;
`;var c={},A;function Z(){if(A)return c;A=1;var e=x();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var i=e(w()),n=b();return c.default=(0,i.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),c}var ee=Z();const te=v(ee);var d={},j;function re(){if(j)return d;j=1;var e=x();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var i=e(w()),n=b();return d.default=(0,i.default)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),d}var ae=re();const oe=v(ae),ne=r(T)`
	${({$fullHeight:e})=>e&&`
		height: 100%;
	`}
`,ie=r(_)`
	flex-grow: 1;
	min-height: 0;
`,le=r.div`
	padding: ${o.spacing(5,5,0)};
`,se=r(T)`
	flex: 1;
`,ce=r.div`
	padding: ${o.spacing(5)};
	flex: 1;
	overflow: auto;
`,de=r(N).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${o.spacing(3)};
`,ue=r(W)`
	width: 100%;
`,me=r(M).attrs({fullWidth:!0})`
	margin-top: ${o.spacing(3)};
`,qe=r.div`
	background-color: ${o.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${o.color.gray[300]};
	padding: ${o.spacing(5,6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;
`,pe=r(J)`
	margin: ${o.spacing(3,0)};
`;function Oe({fullHeight:e=!0,className:i,options:n,checked:p,disabled:z,optionsSubtitle:k,activePanel:B,onLoadMore:P,onChange:E,onKeywordChange:I,onSave:u,onCancel:m,onCreateNew:S,isLoading:C,noOptions:L="No options to display",saveText:y="Save",...f}){const[l,D]=g.useState(""),{t:h}=G(),$=g.useMemo(()=>l?n.filter(a=>a.label.toLowerCase().includes(l.toLowerCase())):n,[l,n]),F=a=>{E&&E(a)},R=g.useMemo(()=>{const a=[];return!u&&!m||(m&&a.push({label:"Cancel",onClick:m,color:"gray",variant:"outlined"}),u&&a.push({label:y,onClick:()=>u(p),color:"yellow",variant:"contained"})),a},[p,m,u,y]),H=({target:{value:a}})=>{D(a),I&&I(a)};return t.createElement(ne,{$fullHeight:e,className:i},(f.title||R.length||f.onBack)&&t.createElement(K,{...f,buttons:R}),t.createElement(ie,null,t.createElement(se,{"data-testid":Q.PICKER_PANEL_OPTIONS},t.createElement(le,null,k&&t.createElement(de,null,k),t.createElement(ue,{fieldSize:"100%",onChange:H,value:l,placeholder:h("mosaic:common.keyword___"),autoFocus:!0,InputProps:{inputProps:{"aria-label":h("mosaic:common.keyword___")},startAdornment:t.createElement(q,{position:"start"},t.createElement(te,null)),endAdornment:S&&l&&t.createElement(q,{position:"end"},t.createElement(M,{label:"Create",variant:"text",color:"black",mIcon:oe,onClick:()=>S(l)}))}})),t.createElement(ce,null,$.length?t.createElement(V,{checked:p,options:$,onChange:F,itemsPerColumn:-1,disabled:z}):t.createElement(t.Fragment,null,L),C&&t.createElement(_,{$justify:"center"},t.createElement(pe,null)),!C&&P&&t.createElement(me,{color:"black",variant:"outlined",label:h("mosaic:common.load_more___"),onClick:P}))),B))}export{oe as A,T as C,$e as F,Oe as P,te as S,Re as T,qe as a,de as b};
