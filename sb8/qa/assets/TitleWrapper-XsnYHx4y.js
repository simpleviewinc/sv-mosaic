import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as c}from"./index-BP8_t0zE.js";import{s,t as n}from"./theme-D4oZEIDo.js";import{B as p,u,T as d}from"./Button-CV4WQHOn.js";import{c as f}from"./containerQuery-Du8CFTMo.js";import{r as x,i as g}from"./createSvgIcon-BSB-bEHM.js";import"./Typography-Bm8mlfoU.js";import{T as h}from"./TitleText-CFZnrs7C.js";const v=s.div`
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
`;var l={},T=g;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,b=T(x()),k=t,y=(0,b.default)((0,k.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft");m=l.default=y;const _=({collapse:r,label:e="Go back",...o})=>{const{anchorProps:a,tooltipProps:i}=u();return t.jsxs(t.Fragment,{children:[t.jsx(B,{$collapse:r,...o,className:"back-button",color:"gray",variant:"icon",mIcon:m,muiAttrs:{"aria-label":e,...a}}),t.jsx(d,{...i,children:e})]})},$=c.memo(_),C=r=>{const{title:e,description:o,collapse:a,backLabel:i}=r;return t.jsxs(t.Fragment,{children:[t.jsxs(v,{children:[r.onBack&&t.jsx($,{collapse:a,onClick:r.onBack,label:i}),t.jsx(h,{attrs:{title:e},children:e})]}),o&&t.jsx(j,{children:o})]})},M=c.memo(C);export{j as D,M as T,v as a,$ as b,m as d};
