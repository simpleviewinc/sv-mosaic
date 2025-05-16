import{r,R as a}from"./index-D0AnReJb.js";import{C as w}from"./Chip-CMTBWucu.js";import{s as p,t as n}from"./sizes-BklZZmo4.js";import{B as E}from"./Button-DWbCZful.js";import{t as L}from"./testIds-Dso8kRSM.js";import{j as c}from"./jsx-runtime-EKYJJIwR.js";import{c as d}from"./createSvgIcon-Dg0jtXvj.js";const b=d(c.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),g=d(c.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),M=p.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`;p.span`
	color: ${n.newColors.grey3[100]};
	cursor: pointer;
	display: flex;
	font-family: ${n.fontFamily};
	width: fit-content;
	font-weight: ${n.fontWeight.bold};
	font-size: 16px;
	margin-top: 16px;
`;const y=p(E)`
	margin-top: 8px;
`,I=[],f=r.forwardRef((h,x)=>{const{disabled:u,onDelete:i,options:t=I,maxInitialChips:s=8}=h;if(s<1)throw new Error("ChipList `maxInitialChips` prop must be more than 0.");const[o,C]=r.useState(!1),m=r.useMemo(()=>{if(i)return e=>i(t.filter(l=>l.value!==e))},[i,t]),v=o?t:t.slice(0,s);return a.createElement("div",{ref:x},a.createElement(M,{"data-testid":L.CHIP_LIST},v.map((e,l)=>a.createElement(w,{disabled:u,key:`${e==null?void 0:e.label}-${l}`,label:e==null?void 0:e.label,onDelete:m&&(()=>m(e==null?void 0:e.value))}))),t.length>s&&a.createElement(y,{label:o?"Show Less":`Show ${t.length-s} More`,onClick:()=>C(!o),color:"teal",variant:"text",mIcon:o?b:g}))});f.displayName="ChipList";const _=r.memo(f);export{_ as C,I as E};
