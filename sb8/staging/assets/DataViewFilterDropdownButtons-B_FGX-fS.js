import{r as i,R as o}from"./index-D0AnReJb.js";import{s as a}from"./styled-components.browser.esm-C5LJ_neh.js";import{t}from"./sizes-_ON_TzAH.js";import{P as s}from"./Popover-B_lFWVkj.js";import{t as c}from"./testIds-BKXNnpj0.js";import{B as l}from"./Button-D5Mq00Ds.js";import{u as m}from"./useMosaicTranslation-di9nduwf.js";const u=a(s)`
	.MuiPaper-root {
		border-radius: ${t.rounded.md};
		box-shadow: ${t.border.light}, ${t.shadow["2xl"]};
		border: 0;
	}
`,f=a.div`
	background: ${t.color.white};
`;function w(e){const[n,r]=i.useState(!1);i.useEffect(()=>{e.anchorEl&&r(!0)},[e.anchorEl]);const d=function(){r(!1),e.onExited&&e.onExited()};return n===!1?null:o.createElement(u,{anchorEl:e.anchorEl,onClose:e.onClose,open:!!e.anchorEl,TransitionProps:{onExited:d,onEntered:e.onEntered}},o.createElement(f,{"data-testid":c.DATA_VIEW_FILTERS_DROPDOWN},e.children))}const E=a.div`
    background-color: ${t.color.gray[50]};
	border-top: 1px solid ${t.color.gray[300]};
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 12px;
`;function $(e){const{t:n}=m();return o.createElement(E,null,o.createElement(l,{label:n("mosaic:common.clear"),intent:"secondary",variant:"contained",onClick:e.onClear}),o.createElement(l,{label:n("mosaic:common.apply"),intent:"primary",variant:"contained",onClick:e.onApply,disabled:e.disableApply!==void 0?e.disableApply:!1}))}export{w as D,$ as a};
