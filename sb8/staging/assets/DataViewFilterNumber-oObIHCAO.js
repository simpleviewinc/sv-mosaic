import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as s}from"./index-BP8_t0zE.js";import{D as j}from"./DataViewPrimaryFilter-jm5PRQOV.js";import{a as w,D as F}from"./FormFieldText.styled-D8aJbBKM.js";import{s as h,B as x}from"./theme-CtvfJOCv.js";import{u as V,V as p,F as y}from"./formUtils-CvckxmPa.js";const E=h.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${x.sm};
`,A=[{fields:[[["min"],["max"]]],gridMinWidth:x.sm}];function N({args:a,data:{min:o,max:l}={},onChange:i,onClose:u}){const r=V(),{state:{data:{min:t,max:e},errors:c},methods:{setFormValues:m}}=r,d=s.useCallback(async()=>({min:o,max:l}),[o,l]),f=s.useCallback(()=>{m({values:{min:void 0,max:void 0}})},[m]),v=s.useCallback(()=>{i(!t&&!e?void 0:{min:t,max:e}),u()},[e,t,i,u]),b=s.useMemo(()=>[{name:"min",type:"number",label:"Minimum",size:"full",inputSettings:a,validators:[{fn:p,options:{maxName:"max"}}],validates:["max"]},{name:"max",type:"number",label:"Maximum",size:"full",inputSettings:a,validators:[{fn:p,options:{minName:"min"}}],validates:["min"]}],[a]),D=Object.values(c).filter(Boolean).length>0;return n.jsxs(E,{children:[n.jsx(y,{...r,fields:b,sections:A,fullHeight:!1,spacing:"compact",getFormValues:d}),n.jsx(w,{onApply:v,onClear:f,disableApply:D})]})}function k({args:a,data:o,label:l,onChange:i}){const[u,r]=s.useState(null),{min:t,max:e}=o??{},c=function(f){r(f.currentTarget)},m=function(){r(null)},d=s.useMemo(()=>{if(!(t===void 0&&e===void 0))return t===void 0?`Less than ${e}`:e===void 0?`Greater than ${t}`:`Between ${t} and ${e}`},[t,e]);return n.jsxs(n.Fragment,{children:[n.jsx(j,{label:l,value:d,onClick:c}),n.jsx(F,{anchorEl:u,onClose:m,children:n.jsx(N,{args:a,data:o,onChange:i,onClose:m})})]})}export{k as D};
