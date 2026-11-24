import{R as t}from"./index-wekxHvEx.js";import{c as r}from"./styled-components.browser.esm-DDzsJbQW.js";import{t as o}from"./sizes-BeWafy6f.js";import"./Typography-ByjXglyy.js";import{T as f}from"./Text-CfL2WyGr.js";import{u as g,T as y}from"./useTooltip-CO_soAtI.js";import{T as E}from"./TooltipIcon-Bg32Lmm2.js";const T=r(f).attrs(({$disabled:e})=>({size:"lg",color:e?o.color.gray[600]:void 0}))`
		display: block;
		max-width: 414px;
		padding-top: ${o.spacing("5px")};
	`,$=r(E)`
	display: inline-block;
	margin-left: ${o.spacing(1)};
	vertical-align: middle;
`,x=r.span`
	display: inline-block;
	color: ${o.color.red[600]};
	margin-left: ${o.spacing(1)};
`;function b({children:e,disabled:l,description:n,required:a}){const{anchorProps:c,tooltipProps:i}=g();return t.createElement(T,{$disabled:l},e,a&&t.createElement(x,{"aria-hidden":"true"},"*"),n&&t.createElement(t.Fragment,null,t.createElement($,{...c}),t.createElement(y,{...i},n)))}const h=r.div`
	display: inline-flex;
	align-items: start;
	vertical-align: middle;
	gap: ${({$gap:e=[1]})=>o.spacing(...e)};
	margin-left: 0;
	margin-right: 0;
	cursor: ${({$disabled:e})=>e?"default":"pointer"};
	flex-direction: ${({$placement:e="end"})=>e==="start"?"row-reverse":e==="top"?"column-reverse":e==="bottom"?"column":"row"};
`,S=r.span`
	display: contents;
`,L=r.span`
	cursor: ${({$disabled:e})=>e?"default":"pointer"};
`;function F({id:e,control:l,label:n,description:a,required:c,disabled:i,labelPlacement:s="end",gap:p,"data-testid":m}){const u=n!=null&&n!=="";return t.createElement(h,{$disabled:i,$gap:p,$placement:s,"data-testid":m},l,u&&t.createElement(S,null,t.createElement(b,{disabled:i,description:a,required:c},t.createElement(L,{$disabled:i,"aria-hidden":"true",onClick:i?void 0:()=>{const d=document.getElementById(e);d instanceof HTMLInputElement&&(d.focus(),d.click())}},n))))}export{F as O};
