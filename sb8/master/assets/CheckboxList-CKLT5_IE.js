import{j as C}from"./jsx-runtime-DiwAibxM.js";import{r as w}from"./index-Btj5Fd67.js";import{C as F}from"./Checkbox-faPr4U1Q.js";import{a as g,g as G,s as k,d as h,u as j,_ as v,e as I,f as N}from"./generateUtilityClasses-oWyMxXuq.js";import{u as R,f as $}from"./formControlState-Bl9Dd4wz.js";function M(s,e,r=o=>o){const o=[];for(const t of s)e.some(n=>r(t)===r(n))||o.push(t);for(const t of e)s.some(n=>r(t)===r(n))||o.push(t);return o}function U(s){return G("MuiFormGroup",s)}g("MuiFormGroup",["root","row","error"]);const _=["className","row"],b=s=>{const{classes:e,row:r,error:o}=s;return N({root:["root",r&&"row",o&&"error"]},U,e)},y=k("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:r}=s;return[e.root,r.row&&e.row]}})(({ownerState:s})=>h({display:"flex",flexDirection:"column",flexWrap:"wrap"},s.row&&{flexDirection:"row"})),D=w.forwardRef(function(e,r){const o=j({props:e,name:"MuiFormGroup"}),{className:t,row:n=!1}=o,m=v(o,_),i=R(),a=$({props:o,muiFormControl:i,states:["error"]}),u=h({},o,{row:n,error:a.error}),p=b(u);return C.jsx(y,h({className:I(p.root,t),ownerState:u,ref:r},m))}),B=s=>{const e=w.useId(),{className:r,checked:o,disabled:t,id:n=e,onBlur:m,onChange:i,options:a,style:u}=s,p=w.useCallback(({target:c})=>{const{value:f}=c,l=a.find(x=>x.value===f);if(!l)return;const d=M(o||[],[l],x=>x.value);i(d)},[o,i,a]);return C.jsx(D,{className:`${r??""} listItem`,onBlur:m,style:u,children:(a||[]).map(({value:c,label:f},l)=>C.jsx(F,{checked:(o||[]).some(d=>d.value===c),label:f,disabled:t,id:`${n}-${l}`,onChange:p,value:c},`${c}-${l}`))})};export{B as C,D as F};
