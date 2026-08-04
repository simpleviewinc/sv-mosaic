import{r as t}from"./index-wekxHvEx.js";import{c as i}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as c}from"./sizes-BeWafy6f.js";import{B as l}from"./Button-CdzdKupF.js";import{c as m}from"./containerQuery-DwQ6QvMu.js";import{C as s}from"./ChevronLeft-DQPkTHY5.js";import{u as p,T as u}from"./useTooltip-B7zXsQMX.js";import"./Typography-ByjXglyy.js";import{D as g}from"./DisplayText-BWS-vBdr.js";const d=i.div`
	display: flex;
	align-items: center;
`,f=i.div`
	color: ${c.color.gray[600]};
	font-weight: ${c.weight.medium};
	margin-top: 5px;
`,B=i(l)`
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

		${m(e.minWidth,e.name)} {
			display: block;
		}
	`}
`,h=({collapse:e,label:o="Go back",...r})=>{const{anchorProps:a,tooltipProps:n}=p();return t.createElement(t.Fragment,null,t.createElement(B,{$collapse:e,...r,className:"back-button",intent:"secondary",variant:"text",mIcon:s,muiAttrs:{"aria-label":o,...a}}),t.createElement(u,{...n},o))},k=t.memo(h),T=e=>{const{title:o,description:r,collapse:a,backLabel:n}=e;return t.createElement(t.Fragment,null,t.createElement(d,null,e.onBack&&t.createElement(k,{collapse:a,onClick:e.onBack,label:n}),typeof o=="string"?t.createElement(g,{attrs:{title:o},tag:"h1"},o):o),r&&t.createElement(f,null,r))},w=t.memo(T);export{f as D,w as T,d as a,k as b};
