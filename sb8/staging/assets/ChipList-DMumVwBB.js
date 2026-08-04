import{r as l,R as s}from"./index-CDlOlYQx.js";import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as u}from"./createSvgIcon-CpiYeT0y.js";import{E as v}from"./ExpandMore-C3mveD_C.js";import{C as E}from"./Chip-BzCeYly-.js";import{c as i}from"./styled-components.browser.esm-CsHOGV45.js";import{B as w}from"./Button-DiGzPWWk.js";import{t as x}from"./sizes-BeWafy6f.js";import{E as C}from"./stable-BFc8HSVh.js";import{t as L}from"./testIds-B6Pox1zA.js";const b=u(h.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),S=i.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${x.spacing(3)};
`,g=i(w)`
	margin-top: 8px;
`,M=({disabled:n,onDelete:o,options:r=C,maxInitialChips:t=8,ref:p})=>{if(t<1)throw new Error("ChipList `maxInitialChips` prop must be more than 0.");const[a,f]=l.useState(!1),c=l.useMemo(()=>{if(o)return e=>o(r.filter(m=>m.value!==e))},[o,r]),d=a?r:r.slice(0,t);return s.createElement("div",{ref:p},s.createElement(S,{"data-testid":L.CHIP_LIST},d.map((e,m)=>s.createElement(E,{disabled:n,key:`${e==null?void 0:e.label}-${m}`,label:e==null?void 0:e.label,onDelete:c&&(()=>c(e==null?void 0:e.value))}))),r.length>t&&s.createElement(g,{label:a?"Show Less":`Show ${r.length-t} More`,onClick:()=>f(!a),intent:"info",variant:"text",mIcon:a?b:v}))},T=l.memo(M);export{T as C,b as E,S as a};
