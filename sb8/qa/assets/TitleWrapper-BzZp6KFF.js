import{r as t}from"./index-lnx8lKqn.js";import{s as i}from"./styled-components.browser.esm-DqsT1pAc.js";import{t as l}from"./sizes-BcVUBVYw.js";import{B as m}from"./Button-CNe7umd6.js";import{c}from"./containerQuery-BGTno4Nd.js";import{C as s}from"./ChevronLeft-vDd10AKU.js";import{u as p,T as u}from"./useTooltip-DxGcUIuP.js";import"./Typography-BDSgj_cw.js";import{D as g}from"./DisplayText-DNcU0R6O.js";const d=i.div`
	display: flex;
	align-items: center;
`,f=i.div`
	color: ${l.color.gray[600]};
	font-weight: ${l.weight.medium};
	margin-top: 5px;
`,B=i(m)`
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

		${c(e.minWidth,e.name)} {
			display: block;
		}
	`}
`,h=({collapse:e,label:o="Go back",...r})=>{const{anchorProps:a,tooltipProps:n}=p();return t.createElement(t.Fragment,null,t.createElement(B,{$collapse:e,...r,className:"back-button",intent:"secondary",variant:"text",mIcon:s,muiAttrs:{"aria-label":o,...a}}),t.createElement(u,{...n},o))},k=t.memo(h),T=e=>{const{title:o,description:r,collapse:a,backLabel:n}=e;return t.createElement(t.Fragment,null,t.createElement(d,null,e.onBack&&t.createElement(k,{collapse:a,onClick:e.onBack,label:n}),typeof o=="string"?t.createElement(g,{attrs:{title:o},tag:"h1"},o):o),r&&t.createElement(f,null,r))},w=t.memo(T);export{f as D,w as T,d as a,k as b};
