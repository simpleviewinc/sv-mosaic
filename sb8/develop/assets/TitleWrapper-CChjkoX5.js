import{g as c,r as e}from"./index-D0AnReJb.js";import{s}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as l}from"./sizes-DkIXWPpc.js";import{B as p,u,T as f}from"./Button-BdEZ7jiv.js";import{c as d}from"./containerQuery-CYj0-5X2.js";import{r as g}from"./identifier-DOqdnZ6L.js";import{r as v}from"./createSvgIcon-B2sN9389.js";import{r as h}from"./jsx-runtime-EKYJJIwR.js";import"./Typography-CZQzWHyE.js";import{D as x}from"./DisplayText-DLjAy6kH.js";const B=s.div`
	display: flex;
	align-items: center;
`,C=s.div`
	color: ${l.newColors.grey3[100]};
	font-weight: ${l.weight.medium};
	margin-top: 5px;
`,E=s(p)`
	margin-right: 10px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
		border-color: transparent;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({$collapse:t})=>t&&`
		display: none;

		${d(t.minWidth,t.name)} {
			display: block;
		}
	`}
`;var a={},m;function b(){if(m)return a;m=1;var t=g();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(v()),o=h();return a.default=(0,r.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),a}var k=b();const T=c(k),y=({collapse:t,label:r="Go back",...o})=>{const{anchorProps:n,tooltipProps:i}=u();return e.createElement(e.Fragment,null,e.createElement(E,{$collapse:t,...o,className:"back-button",intent:"secondary",variant:"text",mIcon:T,muiAttrs:{"aria-label":r,...n}}),e.createElement(f,{...i},r))},L=e.memo(y),q=t=>{const{title:r,description:o,collapse:n,backLabel:i}=t;return e.createElement(e.Fragment,null,e.createElement(B,null,t.onBack&&e.createElement(L,{collapse:n,onClick:t.onBack,label:i}),typeof r=="string"?e.createElement(x,{attrs:{title:r},tag:"h1"},r):r),o&&e.createElement(C,null,o))},W=e.memo(q);export{T as C,C as D,W as T,B as a,L as b};
