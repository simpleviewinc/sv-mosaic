import{r as t}from"./index-ePW8zFKp.js";import{s as i}from"./styled-components.browser.esm-CUKKF2J4.js";import{t as l}from"./sizes-1ZdlMWGC.js";import{B as c,u as m,T as s}from"./Button-DrJO7SQT.js";import{c as p}from"./containerQuery-NPnQgBq-.js";import{C as u}from"./ChevronLeft-Bppxtp-L.js";import"./Typography-Bs-xuYxw.js";import{D as g}from"./DisplayText-DlqFHcnF.js";const d=i.div`
	display: flex;
	align-items: center;
`,f=i.div`
	color: ${l.color.gray[600]};
	font-weight: ${l.weight.medium};
	margin-top: 5px;
`,B=i(c)`
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
`,h=({collapse:e,label:o="Go back",...r})=>{const{anchorProps:a,tooltipProps:n}=m();return t.createElement(t.Fragment,null,t.createElement(B,{$collapse:e,...r,className:"back-button",intent:"secondary",variant:"text",mIcon:u,muiAttrs:{"aria-label":o,...a}}),t.createElement(s,{...n},o))},k=t.memo(h),T=e=>{const{title:o,description:r,collapse:a,backLabel:n}=e;return t.createElement(t.Fragment,null,t.createElement(d,null,e.onBack&&t.createElement(k,{collapse:a,onClick:e.onBack,label:n}),typeof o=="string"?t.createElement(g,{attrs:{title:o},tag:"h1"},o):o),r&&t.createElement(f,null,r))},W=t.memo(T);export{f as D,W as T,d as a,k as b};
