import{g as m,r as e}from"./index-D0AnReJb.js";import{s as l}from"./styled-components.browser.esm-aVcmUYMZ.js";import{t as s}from"./sizes-CTdyEcea.js";import{B as p,u,T as f}from"./Button-Cu24UfKA.js";import{c as d}from"./containerQuery-D9vD66Ez.js";import{r as g}from"./identifier-C21A9frq.js";import{r as v}from"./createSvgIcon-DLboviGw.js";import{r as h}from"./jsx-runtime-EKYJJIwR.js";import"./Typography-DM2nLVeQ.js";import{D as x}from"./DisplayText-BRdY6ERT.js";const B=l.div`
	display: flex;
	align-items: center;
`,C=l.div`
	color: ${s.newColors.grey3[100]};
	font-weight: ${s.weight.medium};
	margin-top: 5px;
`,E=l(p)`
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
`;var a={},c;function b(){if(c)return a;c=1;var t=g();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(v()),o=h();return a.default=(0,r.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),a}var k=b();const T=m(k),y=({collapse:t,label:r="Go back",...o})=>{const{anchorProps:n,tooltipProps:i}=u();return e.createElement(e.Fragment,null,e.createElement(E,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:T,muiAttrs:{"aria-label":r,...n}}),e.createElement(f,{...i},r))},L=e.memo(y),q=t=>{const{title:r,description:o,collapse:n,backLabel:i}=t;return e.createElement(e.Fragment,null,e.createElement(B,null,t.onBack&&e.createElement(L,{collapse:n,onClick:t.onBack,label:i}),typeof r=="string"?e.createElement(x,{attrs:{title:r},tag:"h1"},r):r),o&&e.createElement(C,null,o))},W=e.memo(q);export{T as C,C as D,W as T,B as a,L as b};
