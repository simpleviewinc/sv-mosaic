import{r as d,R as t}from"./index-D0AnReJb.js";import{r as E}from"./index-Bqzh3Cp6.js";import{t as f}from"./testIds-oQNwr1rf.js";import{S as y,a as w}from"./StyledPopperPaper-BODJ-ail.js";import{s}from"./styled-components.browser.esm-8X0uN6v9.js";import{B as b,F as h,G as k}from"./Popper-CeYJ7yNz.js";import{B as c}from"./Button-CyFYeSR6.js";import"./MosaicContext-Y61KIvFP.js";import{u as v}from"./FormFieldText.styled-e8Bs0syX.js";import{t as i}from"./sizes-DkIXWPpc.js";const x=s(b)`
	z-index: 1300;
	width: auto;
`;function D({onClose:e,isOpen:o,inTransit:n,anchorEl:r,growProps:l,children:m}){d.useEffect(()=>{const a=u=>{u.key==="Escape"&&e()};return window.document.addEventListener("keydown",a),()=>window.document.removeEventListener("keydown",a)},[e]);const p=a=>{a.stopPropagation()};return t.createElement("div",{role:"presentation"},t.createElement(x,{open:o||!!n,onClick:e,invisible:!0}),t.createElement(y,{anchorEl:r??n,open:o||!!n,$width:"auto",placement:"bottom-start",onClick:p,disablePortal:!0},t.createElement(h,{open:!0},t.createElement(k,{in:o,...l},t.createElement(w,{tabIndex:-1},t.createElement("div",{"data-testid":f.DATA_VIEW_FILTERS_DROPDOWN},m))))))}function V(e){const o=!!e.anchorEl,[n,r]=d.useState(void 0),l=d.useMemo(()=>({style:{transformOrigin:"0 0 0"},timeout:{enter:300,exit:200},onEnter:()=>r(e.anchorEl),onExited:()=>r(void 0)}),[e.anchorEl]);return!o&&!n?null:E.createPortal(t.createElement(D,{onClose:e.onClose,isOpen:o,inTransit:n,anchorEl:e.anchorEl,growProps:l,children:e.children}),document.body)}const P=s.div`
    background-color: ${i.color.gray[50]};
	border-top: 1px solid ${i.color.gray[300]};
    border-bottom-left-radius: ${i.rounded.md};
    border-bottom-right-radius: ${i.rounded.md};
    display: flex;
    justify-content: end;
    padding: 16px;
    gap: 12px;
`;function L(e){const{t:o}=v();return t.createElement(P,null,t.createElement(c,{label:o("mosaic:common.clear"),intent:"secondary",variant:"contained",onClick:e.onClear}),t.createElement(c,{label:o("mosaic:common.apply"),intent:"primary",variant:"contained",onClick:e.onApply,disabled:e.disableApply!==void 0?e.disableApply:!1}))}export{V as D,L as a};
