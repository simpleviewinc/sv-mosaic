import{r as p,j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as c}from"./index-BP8_t0zE.js";import{s,t as n}from"./theme-D4oZEIDo.js";import{B as u,u as d,T as f}from"./Button-CXDnE47L.js";import{c as x}from"./containerQuery-Du8CFTMo.js";import{r as g,i as h}from"./createSvgIcon-FZ6f8RnB.js";import"./Typography-BZ6FG2aM.js";import{T as v}from"./TitleText-Blyuhmp5.js";const j=s.div`
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
`;var l={},b=h;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,k=b(g()),y=p();m=l.default=(0,k.default)((0,y.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");const _=({collapse:r,label:e="Go back",...o})=>{const{anchorProps:a,tooltipProps:i}=d();return t.jsxs(t.Fragment,{children:[t.jsx(T,{$collapse:r,...o,className:"back-button",color:"gray",variant:"icon",mIcon:m,muiAttrs:{"aria-label":e,...a}}),t.jsx(f,{...i,children:e})]})},$=c.memo(_),C=r=>{const{title:e,description:o,collapse:a,backLabel:i}=r;return t.jsxs(t.Fragment,{children:[t.jsxs(j,{children:[r.onBack&&t.jsx($,{collapse:a,onClick:r.onBack,label:i}),t.jsx(v,{attrs:{title:e},children:e})]}),o&&t.jsx(B,{children:o})]})},M=c.memo(C);export{B as D,M as T,j as a,$ as b,m as d};
