import{r as p,j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as c}from"./index-BP8_t0zE.js";import{s,t as n}from"./theme-Cyujm90X.js";import{B as u,u as d,T as f}from"./Button-Dth3WPw1.js";import{c as x}from"./containerQuery-CxIxOiDA.js";import{i as g}from"./generateUtilityClasses-DQAffLtG.js";import{r as h}from"./createSvgIcon-CpDkk29s.js";import"./Typography-BXo9fTd2.js";import{T as v}from"./TitleText-SU3bZ5Lh.js";const j=s.div`
	display: flex;
	align-items: center;
`,B=s.div`
	color: ${n.newColors.grey3[100]};
	font-family: ${n.museoFont};
	font-weight: ${n.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,T=s(u)`
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

		${x(r.minWidth,r.name)} {
			display: block;
		}
	`}
`;var l={},b=g;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,k=b(h()),y=p();m=l.default=(0,k.default)((0,y.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");const _=({collapse:r,label:e="Go back",...o})=>{const{anchorProps:a,tooltipProps:i}=d();return t.jsxs(t.Fragment,{children:[t.jsx(T,{$collapse:r,...o,className:"back-button",color:"gray",variant:"icon",mIcon:m,muiAttrs:{"aria-label":e,...a}}),t.jsx(f,{...i,children:e})]})},$=c.memo(_),C=r=>{const{title:e,description:o,collapse:a,backLabel:i}=r;return t.jsxs(t.Fragment,{children:[t.jsxs(j,{children:[r.onBack&&t.jsx($,{collapse:a,onClick:r.onBack,label:i}),t.jsx(v,{attrs:{title:e},children:e})]}),o&&t.jsx(B,{children:o})]})},P=c.memo(C);export{B as D,P as T,j as a,$ as b,m as d};
