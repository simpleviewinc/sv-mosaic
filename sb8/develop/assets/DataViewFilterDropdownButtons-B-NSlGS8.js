import{r as l,R as t}from"./index-D0AnReJb.js";import{s as n}from"./styled-components.browser.esm-aVcmUYMZ.js";import{t as o}from"./sizes-CTdyEcea.js";import{P as d,B as i}from"./Button-Cu24UfKA.js";import{t as s}from"./testIds-BKutUmNQ.js";import{u as m}from"./useMosaicTranslation-CoWLI8L7.js";const u=n(d)`
	.MuiPaper-root {
		border-radius: ${o.rounded.md};
		box-shadow: ${o.border.light}, ${o.shadow["2xl"]};
		border: 0;
	}
`,f=n.div`
	background: ${o.color.white};
`;function w(e){const[a,r]=l.useState(!1);l.useEffect(()=>{e.anchorEl&&r(!0)},[e.anchorEl]);const c=function(){r(!1),e.onExited&&e.onExited()};return a===!1?null:t.createElement(u,{anchorEl:e.anchorEl,onClose:e.onClose,open:!!e.anchorEl,TransitionProps:{onExited:c,onEntered:e.onEntered}},t.createElement(f,{"data-testid":s.DATA_VIEW_FILTERS_DROPDOWN},e.children))}const E=n.div`
    background-color: ${o.color.gray[50]};
	border-top: 1px solid ${o.color.gray[300]};
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 12px;
`;function D(e){const{t:a}=m();return t.createElement(E,null,t.createElement(i,{label:a("mosaic:common.clear"),color:"gray",variant:"outlined",onClick:e.onClear}),t.createElement(i,{label:a("mosaic:common.apply"),color:"yellow",variant:"contained",onClick:e.onApply,disabled:e.disableApply!==void 0?e.disableApply:!1}))}export{w as D,D as a};
