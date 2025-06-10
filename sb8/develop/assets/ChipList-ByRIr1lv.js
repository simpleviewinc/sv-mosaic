import{g as C,r as i,R as o}from"./index-D0AnReJb.js";import{r as L}from"./generateUtilityClasses-rDn4KRfY.js";import{r as w}from"./createSvgIcon-BLTtL5Y9.js";import{r as g}from"./jsx-runtime-EKYJJIwR.js";import{E as I}from"./ExpandMore-DDFjf7E5.js";import{C as b}from"./Chip-CMTBWucu.js";import{s as u,t as f}from"./sizes-BklZZmo4.js";import{B as R}from"./Button-DWbCZful.js";import{t as y}from"./testIds-Dso8kRSM.js";var r={},h;function S(){if(h)return r;h=1;var n=L();Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var l=n(w()),p=g();return r.default=(0,l.default)((0,p.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),r}var _=S();const q=C(_),M=u.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;u.span`
	color: ${f.newColors.grey3[100]};
	cursor: pointer;
	display: flex;
	font-family: ${f.fontFamily};
	width: fit-content;
	font-weight: ${f.fontWeight.bold};
	font-size: 16px;
	margin-top: 16px;
`;const $=u(R)`
	margin-top: 8px;
`,D=[],x=i.forwardRef((n,l)=>{const{disabled:p,onDelete:m,options:t=D,maxInitialChips:a=8}=n;if(a<1)throw new Error("ChipList `maxInitialChips` prop must be more than 0.");const[s,v]=i.useState(!1),c=i.useMemo(()=>{if(m)return e=>m(t.filter(d=>d.value!==e))},[m,t]),E=s?t:t.slice(0,a);return o.createElement("div",{ref:l},o.createElement(M,{"data-testid":y.CHIP_LIST},E.map((e,d)=>o.createElement(b,{disabled:p,key:`${e==null?void 0:e.label}-${d}`,label:e==null?void 0:e.label,onDelete:c&&(()=>c(e==null?void 0:e.value))}))),t.length>a&&o.createElement($,{label:s?"Show Less":`Show ${t.length-a} More`,onClick:()=>v(!s),color:"teal",variant:"text",mIcon:s?q:I}))});x.displayName="ChipList";const Y=i.memo(x);export{Y as C,q as E,D as a};
