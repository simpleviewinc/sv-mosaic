import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r as s}from"./index-Btj5Fd67.js";import{D as F}from"./DataViewPrimaryFilter-Cox9kOZn.js";import{a as b,D as V}from"./DataViewFilterDropdown-CqTisVOW.js";import{B as j}from"./theme-D38K4W-Z.js";import{u as N,V as p,F as w}from"./Form-tMgN-44i.js";import{S as A}from"./DataViewFilterNumber.styled-CiKFQiKg.js";import{t as h}from"./testIds-C2FMCy5K.js";const v=[{fields:[[["min"],["max"]]],gridMinWidth:j.sm}];function y({args:a,data:{min:r,max:l}={},onChange:o,onClose:u}){const i=N(),{state:{data:{min:e,max:t},errors:d},methods:{setFormValues:m}}=i,c=s.useCallback(async()=>({min:r,max:l}),[r,l]),f=s.useCallback(()=>{m({values:{min:void 0,max:void 0}})},[m]),x=s.useCallback(()=>{o(!e&&!t?void 0:{min:e,max:t}),u()},[t,e,o,u]),D=s.useMemo(()=>[{name:"min",type:"number",label:"Minimum",size:"full",inputSettings:a,validators:[{fn:p,options:{maxName:"max"}}],validates:["max"]},{name:"max",type:"number",label:"Maximum",size:"full",inputSettings:a,validators:[{fn:p,options:{minName:"min"}}],validates:["min"]}],[a]),E=Object.values(d).filter(Boolean).length>0;return n.jsxs(A,{"data-testid":h.DATA_VIEW_FILTER_NUMBER_CONTENT,children:[n.jsx(w,{...i,fields:D,sections:v,fullHeight:!1,spacing:"compact",getFormValues:c}),n.jsx(b,{onApply:x,onClear:f,disableApply:E})]})}function I({args:a,data:r,label:l,onChange:o}){const[u,i]=s.useState(null),{min:e,max:t}=r??{},d=function(f){i(f.currentTarget)},m=function(){i(null)},c=s.useMemo(()=>{if(!(e===void 0&&t===void 0))return e===void 0?`${t} or less`:t===void 0?`${e} or greater`:`Between ${e} and ${t}`},[e,t]);return n.jsxs(n.Fragment,{children:[n.jsx(F,{label:l,value:c,onClick:d}),n.jsx(V,{anchorEl:u,onClose:m,children:n.jsx(y,{args:a,data:r,onChange:o,onClose:m})})]})}export{I as D};
