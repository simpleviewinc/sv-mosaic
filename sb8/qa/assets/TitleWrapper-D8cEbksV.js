import{r as t}from"./index-D0AnReJb.js";import{s as i}from"./styled-components.browser.esm-8X0uN6v9.js";import{t as l}from"./sizes-DkIXWPpc.js";import{B as s,u as m,T as c}from"./Button-Dlaq5vsb.js";import{c as p}from"./containerQuery-CYj0-5X2.js";import{C as u}from"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import{D as g}from"./DisplayText-DLjAy6kH.js";const d=i.div`
	display: flex;
	align-items: center;
`,f=i.div`
	color: ${l.newColors.grey3[100]};
	font-weight: ${l.weight.medium};
	margin-top: 5px;
`,B=i(s)`
	margin-right: 10px;

	.MuiButtonBase-root{
		padding-left: 8px;
		padding-right: 6px;
		border-color: transparent;
	}

	.icon_left{
		margin-right: 0 !important;
	}

	${({$collapse:e})=>e&&`
		display: none;

		${p(e.minWidth,e.name)} {
			display: block;
		}
	`}
`,h=({collapse:e,label:o="Go back",...r})=>{const{anchorProps:a,tooltipProps:n}=m();return t.createElement(t.Fragment,null,t.createElement(B,{$collapse:e,...r,className:"back-button",intent:"secondary",variant:"text",mIcon:u,muiAttrs:{"aria-label":o,...a}}),t.createElement(c,{...n},o))},k=t.memo(h),T=e=>{const{title:o,description:r,collapse:a,backLabel:n}=e;return t.createElement(t.Fragment,null,t.createElement(d,null,e.onBack&&t.createElement(k,{collapse:a,onClick:e.onBack,label:n}),typeof o=="string"?t.createElement(g,{attrs:{title:o},tag:"h1"},o):o),r&&t.createElement(f,null,r))},w=t.memo(T);export{f as D,w as T,d as a,k as b};
