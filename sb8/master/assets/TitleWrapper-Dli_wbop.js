import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as s}from"./index-BP8_t0zE.js";import{s as i,t as a}from"./theme-D4oZEIDo.js";import{B as p}from"./Button-B7Cp1A2i.js";import{c as u}from"./containerQuery-Du8CFTMo.js";import{r as d,i as f}from"./createSvgIcon-BSB-bEHM.js";import"./Typography-Bm8mlfoU.js";import{T as x}from"./TitleText-CFZnrs7C.js";const g=i.div`
	display: flex;
	align-items: center;
`,h=i.div`
	color: ${a.newColors.grey3[100]};
	font-family: ${a.museoFont};
	font-weight: ${a.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,v=i(p)`
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

		${u(t.minWidth,t.name)} {
			display: block;
		}
	`}
`;var n={},B=f;Object.defineProperty(n,"__esModule",{value:!0});var l=n.default=void 0,b=B(d()),j=e,k=(0,b.default)((0,j.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");l=n.default=k;const T=({collapse:t,label:r="Go back",...o})=>e.jsx(v,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:l,muiAttrs:{"aria-label":r}}),y=s.memo(T),_=t=>{const{title:r,description:o,collapse:c,backLabel:m}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[t.onBack&&e.jsx(y,{collapse:c,onClick:t.onBack,label:m}),e.jsx(x,{attrs:{title:r},children:r})]}),o&&e.jsx(h,{children:o})]})},I=s.memo(_);export{h as D,I as T,g as a,y as b,l as d};
