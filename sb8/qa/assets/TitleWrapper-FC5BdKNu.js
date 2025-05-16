import{g as m,r as e}from"./index-D0AnReJb.js";import{s,t as l}from"./sizes-BklZZmo4.js";import{B as u,u as p,T as f}from"./Button-DWbCZful.js";import{c as d}from"./containerQuery-CZARXB1J.js";import{r as g}from"./generateUtilityClasses-rDn4KRfY.js";import{r as v}from"./createSvgIcon-BLTtL5Y9.js";import{r as h}from"./jsx-runtime-EKYJJIwR.js";import"./Typography-iddL5eaH.js";import{T as x}from"./TitleText-CICG0G5h.js";const B=s.div`
	display: flex;
	align-items: center;
`,T=s.div`
	color: ${l.newColors.grey3[100]};
	font-family: ${l.museoFont};
	font-weight: ${l.fontWeight.light};
	font-size: 14px;
	margin-top: 5px;
`,C=s(u)`
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
`;var a={},c;function E(){if(c)return a;c=1;var t=g();Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(v()),o=h();return a.default=(0,r.default)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"ChevronLeft"),a}var b=E();const k=m(b),y=({collapse:t,label:r="Go back",...o})=>{const{anchorProps:n,tooltipProps:i}=p();return e.createElement(e.Fragment,null,e.createElement(C,{$collapse:t,...o,className:"back-button",color:"gray",variant:"icon",mIcon:k,muiAttrs:{"aria-label":r,...n}}),e.createElement(f,{...i},r))},L=e.memo(y),q=t=>{const{title:r,description:o,collapse:n,backLabel:i}=t;return e.createElement(e.Fragment,null,e.createElement(B,null,t.onBack&&e.createElement(L,{collapse:n,onClick:t.onBack,label:i}),e.createElement(x,{attrs:{title:r}},r)),o&&e.createElement(T,null,o))},P=e.memo(q);export{k as C,T as D,P as T,B as a,L as b};
