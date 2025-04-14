import{r as p,j as r}from"./jsx-runtime-EKYJJIwR.js";import{g as u,r as m}from"./index-DDfD_3TG.js";import{s as c,t as s}from"./theme-DWrYR5Gu.js";import{B as f,u as d,T as h}from"./Button-_6SRCSsN.js";import{c as x}from"./containerQuery-XietOkEy.js";import{h as g}from"./generateUtilityClasses-Dav9K5Jg.js";import{r as v}from"./createSvgIcon-ryN2wBPb.js";import"./Typography-DhgnvJ03.js";import{T as j}from"./TitleText-B4ASHioH.js";const B=c.div`
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

		${x(t.minWidth,t.name)} {
			display: block;
		}
	`}
`;var n={},l;function b(){if(l)return n;l=1;var t=g();Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t(v()),o=p();return n.default=(0,e.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),n}var k=b();const y=u(k),L=({collapse:t,label:e="Go back",...o})=>{const{anchorProps:a,tooltipProps:i}=d();return r.jsxs(r.Fragment,{children:[r.jsx(C,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:y,muiAttrs:{"aria-label":e,...a}}),r.jsx(h,{...i,children:e})]})},q=m.memo(L),R=t=>{const{title:e,description:o,collapse:a,backLabel:i}=t;return r.jsxs(r.Fragment,{children:[r.jsxs(B,{children:[t.onBack&&r.jsx(q,{collapse:a,onClick:t.onBack,label:i}),r.jsx(j,{attrs:{title:e},children:e})]}),o&&r.jsx(T,{children:o})]})},w=m.memo(R);export{y as C,T as D,w as T,B as a,q as b};
