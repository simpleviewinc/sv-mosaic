import{r as p,j as e}from"./jsx-runtime-DiwAibxM.js";import{g as u,r as m}from"./index-Btj5Fd67.js";import{s as c,t as s}from"./theme-C7C0QMlu.js";import{B as f,u as d,T as x}from"./Button-CRbkpCI2.js";import{c as h}from"./containerQuery-BqcK0eeN.js";import{i as g}from"./generateUtilityClasses-oWyMxXuq.js";import{r as v}from"./createSvgIcon-CzNXaSwG.js";import"./Typography-D0-akgTt.js";import{T as j}from"./TitleText-CdOksVB0.js";const B=c.div`
	display: flex;
	align-items: center;
`,T=c.div`
	color: ${s.newColors.grey3[100]};
	font-family: ${s.museoFont};
	font-weight: ${s.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,C=c(f)`
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

		${h(t.minWidth,t.name)} {
			display: block;
		}
	`}
`;var n={},l;function b(){if(l)return n;l=1;var t=g();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(v()),o=p();return n.default=(0,r.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),n}var k=b();const y=u(k),L=({collapse:t,label:r="Go back",...o})=>{const{anchorProps:a,tooltipProps:i}=d();return e.jsxs(e.Fragment,{children:[e.jsx(C,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:y,muiAttrs:{"aria-label":r,...a}}),e.jsx(x,{...i,children:r})]})},q=m.memo(L),R=t=>{const{title:r,description:o,collapse:a,backLabel:i}=t;return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[t.onBack&&e.jsx(q,{collapse:a,onClick:t.onBack,label:i}),e.jsx(j,{attrs:{title:r},children:r})]}),o&&e.jsx(T,{children:o})]})},w=m.memo(R);export{y as C,T as D,w as T,B as a,q as b};
