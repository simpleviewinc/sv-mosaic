import{r as l,R as o}from"./index-D0AnReJb.js";import{s as a}from"./styled-components.browser.esm-EkLDtEIi.js";import{t}from"./sizes-o2d97SRj.js";import{P as s,B as i}from"./Button-CIsIgYW9.js";import{t as c}from"./testIds-BKutUmNQ.js";import{u as m}from"./useMosaicTranslation-CoWLI8L7.js";const u=a(s)`
	.MuiPaper-root {
		border-radius: ${t.rounded.md};
		box-shadow: ${t.border.light}, ${t.shadow["2xl"]};
		border: 0;
	}
`,f=a.div`
	background: ${t.color.white};
`;function g(e){const[n,r]=l.useState(!1);l.useEffect(()=>{e.anchorEl&&r(!0)},[e.anchorEl]);const d=function(){r(!1),e.onExited&&e.onExited()};return n===!1?null:o.createElement(u,{anchorEl:e.anchorEl,onClose:e.onClose,open:!!e.anchorEl,TransitionProps:{onExited:d,onEntered:e.onEntered}},o.createElement(f,{"data-testid":c.DATA_VIEW_FILTERS_DROPDOWN},e.children))}const E=a.div`
    background-color: ${t.color.gray[50]};
	border-top: 1px solid ${t.color.gray[300]};
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 12px;
`;function w(e){const{t:n}=m();return o.createElement(E,null,o.createElement(i,{label:n("mosaic:common.clear"),intent:"secondary",variant:"contained",onClick:e.onClear}),o.createElement(i,{label:n("mosaic:common.apply"),intent:"primary",variant:"contained",onClick:e.onApply,disabled:e.disableApply!==void 0?e.disableApply:!1}))}export{g as D,w as a};
