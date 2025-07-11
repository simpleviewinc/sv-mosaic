import{g,r as v,R as t}from"./index-D0AnReJb.js";import{r as x}from"./identifier-cQ2cb48K.js";import{r as w}from"./createSvgIcon-ZSxe0E8n.js";import{r as b}from"./jsx-runtime-EKYJJIwR.js";import{P as K}from"./PageHeader-PjPXuI9q.js";import{t as n}from"./sizes-o2d97SRj.js";import{s as r}from"./styled-components.browser.esm-EkLDtEIi.js";import"./Typography-Csn3cM8V.js";import{T as N}from"./Text-4ZxjQQL-.js";import{B as M}from"./Button-CIsIgYW9.js";import{S as W,I as q}from"./FormFieldText.styled-Cyn0xN8Z.js";import{S as J}from"./Spinner-CI5raFHi.js";import{C as V}from"./CheckboxList-DCB3WPmf.js";import{u as G}from"./useMosaicTranslation-CoWLI8L7.js";import{t as Q}from"./testIds-BKutUmNQ.js";const Re=r.div`
  height: 100vh;

  &.mapCoordinates,
  &.address {
    width: 1060px;
  }

  &.mapCoordinates {
    @media (max-width: ${n.breakpoints.mobile}) {
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
`;var s={},O;function U(){if(O)return s;O=1;var e=x();Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=e(w()),o=b();return s.default=(0,i.default)((0,o.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined"),s}var X=U();const Y=g(X),$e=r(Y)`
  && {
	fill: ${n.newColors.realTeal[100]};
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
		gap: ${n.spacing(...e)};
	`}
`,T=r(_)`
	flex-direction: column;
`;var c={},A;function Z(){if(A)return c;A=1;var e=x();Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var i=e(w()),o=b();return c.default=(0,i.default)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),c}var ee=Z();const te=g(ee);var d={},j;function re(){if(j)return d;j=1;var e=x();Object.defineProperty(d,"__esModule",{value:!0}),d.default=void 0;var i=e(w()),o=b();return d.default=(0,i.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),d}var ae=re();const ne=g(ae),oe=r(T)`
	${({$fullHeight:e})=>e&&`
		height: 100%;
	`}
`,ie=r(_)`
	flex-grow: 1;
	min-height: 0;
`,le=r.div`
	padding: ${n.spacing(5,5,0)};
`,se=r(T)`
	flex: 1;
`,ce=r.div`
	padding: ${n.spacing(5)};
	flex: 1;
	overflow: auto;
`,de=r(N).attrs({size:"xl",weight:"medium",tag:"h3"})`
	margin-bottom: ${n.spacing(3)};
`,ue=r(W)`
	width: 100%;
`,me=r(M).attrs({fullWidth:!0})`
	margin-top: ${n.spacing(3)};
`,qe=r.div`
	background-color: ${n.color.gray[25]};
	background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0));
	background-size: 10px 100%;
	background-repeat: no-repeat;
	background-position: left top;
	border-left: 1px solid ${n.color.gray[300]};
	padding: ${n.spacing(5,6)};
	width: 50%;
	max-width: 380px;
	flex: none;
	overflow: auto;
`,pe=r(J)`
	margin: ${n.spacing(3,0)};
`;function Oe({fullHeight:e=!0,className:i,options:o,checked:p,disabled:z,optionsSubtitle:P,activePanel:B,onLoadMore:k,onChange:E,onKeywordChange:I,onSave:u,onCancel:m,onCreateNew:S,isLoading:C,noOptions:L="No options to display",saveText:y="Save",...f}){const[l,D]=v.useState(""),{t:h}=G(),R=v.useMemo(()=>l?o.filter(a=>a.label.toLowerCase().includes(l.toLowerCase())):o,[l,o]),F=a=>{E&&E(a)},$=v.useMemo(()=>{const a=[];return!u&&!m||(m&&a.push({label:"Cancel",onClick:m,intent:"secondary",variant:"contained"}),u&&a.push({label:y,onClick:()=>u(p),intent:"primary",variant:"contained"})),a},[p,m,u,y]),H=({target:{value:a}})=>{D(a),I&&I(a)};return t.createElement(oe,{$fullHeight:e,className:i},(f.title||$.length||f.onBack)&&t.createElement(K,{...f,buttons:$}),t.createElement(ie,null,t.createElement(se,{"data-testid":Q.PICKER_PANEL_OPTIONS},t.createElement(le,null,P&&t.createElement(de,null,P),t.createElement(ue,{fieldSize:"100%",onChange:H,value:l,placeholder:h("mosaic:common.keyword___"),autoFocus:!0,InputProps:{inputProps:{"aria-label":h("mosaic:common.keyword___")},startAdornment:t.createElement(q,{position:"start"},t.createElement(te,null)),endAdornment:S&&l&&t.createElement(q,{position:"end"},t.createElement(M,{label:"Create",variant:"text",color:"black",mIcon:ne,onClick:()=>S(l)}))}})),t.createElement(ce,null,R.length?t.createElement(V,{checked:p,options:R,onChange:F,itemsPerColumn:-1,disabled:z}):t.createElement(t.Fragment,null,L),C&&t.createElement(_,{$justify:"center"},t.createElement(pe,null)),!C&&k&&t.createElement(me,{intent:"secondary",variant:"contained",label:h("mosaic:common.load_more___"),onClick:k}))),B))}export{ne as A,T as C,Re as F,Oe as P,_ as R,te as S,$e as T,qe as a,de as b};
