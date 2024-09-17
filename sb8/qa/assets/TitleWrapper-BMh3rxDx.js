import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{s,t as n}from"./theme-Cyujm90X.js";import{B as p,u,T as d}from"./Button-nZpOdxAh.js";import{c as f}from"./containerQuery-CxIxOiDA.js";import{i as x}from"./generateUtilityClasses-Bq4SLC4n.js";import{r as g}from"./createSvgIcon-CLmY5moR.js";import"./Typography-cUIkDVC5.js";import{T as h}from"./TitleText-DWruTFKQ.js";const v=s.div`
	display: flex;
	align-items: center;
`,j=s.div`
	color: ${n.newColors.grey3[100]};
	font-family: ${n.museoFont};
	font-weight: ${n.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,B=s(p)`
	margin-right: 10px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
		border-color: transparent;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({$collapse:r})=>r&&`
		display: none;

		${f(r.minWidth,r.name)} {
			display: block;
		}
	`}
`;var l={},T=x;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,b=T(g()),k=t;m=l.default=(0,b.default)((0,k.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");const y=({collapse:r,label:o="Go back",...e})=>{const{anchorProps:a,tooltipProps:i}=u();return t.jsxs(t.Fragment,{children:[t.jsx(B,{$collapse:r,...e,className:"back-button",color:"gray",variant:"icon",mIcon:m,muiAttrs:{"aria-label":o,...a}}),t.jsx(d,{...i,children:o})]})},_=c.memo(y),$=r=>{const{title:o,description:e,collapse:a,backLabel:i}=r;return t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[r.onBack&&t.jsx(_,{collapse:a,onClick:r.onBack,label:i}),t.jsx(h,{attrs:{title:o},children:o})]}),e&&t.jsx(j,{children:e})]})},M=c.memo($);export{j as D,M as T,v as a,_ as b,m as d};
