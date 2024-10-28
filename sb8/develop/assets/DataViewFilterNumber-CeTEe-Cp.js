import{j as s}from"./jsx-runtime-nGUw9YhZ.js";import{r as n}from"./index-BP8_t0zE.js";import{D as E}from"./DataViewPrimaryFilter-Ce1Vha94.js";import{a as F,D as j}from"./FormFieldText.styled-hkDOkrrs.js";import{s as w,B as x}from"./theme-DRtZtbPc.js";import{u as V,V as p,F as h}from"./formUtils-C8-G5qLM.js";import"./Button-Do5OxnZO.js";import{t as N}from"./testIds-D6Gx1A0F.js";const y=w.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${x.sm};
`,A=[{fields:[[["min"],["max"]]],gridMinWidth:x.sm}];function B({args:a,data:{min:o,max:l}={},onChange:i,onClose:u}){const r=V(),{state:{data:{min:t,max:e},errors:c},methods:{setFormValues:m}}=r,d=n.useCallback(async()=>({min:o,max:l}),[o,l]),f=n.useCallback(()=>{m({values:{min:void 0,max:void 0}})},[m]),v=n.useCallback(()=>{i(!t&&!e?void 0:{min:t,max:e}),u()},[e,t,i,u]),D=n.useMemo(()=>[{name:"min",type:"number",label:"Minimum",size:"full",inputSettings:a,validators:[{fn:p,options:{maxName:"max"}}],validates:["max"]},{name:"max",type:"number",label:"Maximum",size:"full",inputSettings:a,validators:[{fn:p,options:{minName:"min"}}],validates:["min"]}],[a]),b=Object.values(c).filter(Boolean).length>0;return s.jsxs(y,{"data-testid":N.DATA_VIEW_FILTER_NUMBER_CONTENT,children:[s.jsx(h,{...r,fields:D,sections:A,fullHeight:!1,spacing:"compact",getFormValues:d}),s.jsx(F,{onApply:v,onClear:f,disableApply:b})]})}function $({args:a,data:o,label:l,onChange:i}){const[u,r]=n.useState(null),{min:t,max:e}=o??{},c=function(f){r(f.currentTarget)},m=function(){r(null)},d=n.useMemo(()=>{if(!(t===void 0&&e===void 0))return t===void 0?`Less than ${e}`:e===void 0?`Greater than ${t}`:`Between ${t} and ${e}`},[t,e]);return s.jsxs(s.Fragment,{children:[s.jsx(E,{label:l,value:d,onClick:c}),s.jsx(j,{anchorEl:u,onClose:m,children:s.jsx(B,{args:a,data:o,onChange:i,onClose:m})})]})}export{$ as D};
