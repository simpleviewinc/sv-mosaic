import{r as o,R as r}from"./index-D0AnReJb.js";import{C}from"./Chip-BiF3n3mk.js";import{s as m}from"./styled-components.browser.esm-B06rF3P8.js";import{B as E}from"./Button-mgz2aTYm.js";import{t as w}from"./testIds-Dso8kRSM.js";import{j as p}from"./jsx-runtime-EKYJJIwR.js";import{c}from"./createSvgIcon-CmcFkBiI.js";const L=c(p.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),b=c(p.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),M=m.div`
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
`,I=m(E)`
	margin-top: 8px;
`,S=[],d=o.forwardRef((h,x)=>{const{disabled:f,onDelete:l,options:t=S,maxInitialChips:s=8}=h;if(s<1)throw new Error("ChipList `maxInitialChips` prop must be more than 0.");const[a,u]=o.useState(!1),n=o.useMemo(()=>{if(l)return e=>l(t.filter(i=>i.value!==e))},[l,t]),v=a?t:t.slice(0,s);return r.createElement("div",{ref:x},r.createElement(M,{"data-testid":w.CHIP_LIST},v.map((e,i)=>r.createElement(C,{disabled:f,key:`${e==null?void 0:e.label}-${i}`,label:e==null?void 0:e.label,onDelete:n&&(()=>n(e==null?void 0:e.value))}))),t.length>s&&r.createElement(I,{label:a?"Show Less":`Show ${t.length-s} More`,onClick:()=>u(!a),color:"teal",variant:"text",mIcon:a?L:b}))});d.displayName="ChipList";const _=o.memo(d);export{_ as C,S as E};
