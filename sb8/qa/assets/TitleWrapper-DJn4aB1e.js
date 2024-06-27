import{r as p,j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{s as i,t as a}from"./theme-CtvfJOCv.js";import{B as u}from"./Button-CDqJWCGq.js";import{c as d}from"./containerQuery-C4iAQuB_.js";import{r as f,i as x}from"./createSvgIcon-Coberten.js";import"./Typography-DSyzRETI.js";import{T as g}from"./TitleText-Dhe7UX1h.js";const h=i.div`
	display: flex;
	align-items: center;
`,v=i.div`
	color: ${a.newColors.grey3[100]};
	font-family: ${a.museoFont};
	font-weight: ${a.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,B=i(u)`
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
`;var n={},b=x;Object.defineProperty(n,"__esModule",{value:!0});var l=n.default=void 0,j=b(f()),k=p(),T=(0,j.default)((0,k.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");l=n.default=T;const y=({collapse:t,label:r="Go back",...o})=>e.jsx(B,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:l,muiAttrs:{"aria-label":r}}),_=s.memo(y),$=t=>{const{title:r,description:o,collapse:c,backLabel:m}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[t.onBack&&e.jsx(_,{collapse:c,onClick:t.onBack,label:m}),e.jsx(g,{attrs:{title:r},children:r})]}),o&&e.jsx(v,{children:o})]})},M=s.memo($);export{v as D,M as T,h as a,_ as b,l as d};
