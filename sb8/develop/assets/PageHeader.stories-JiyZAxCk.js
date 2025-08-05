import{j as l}from"./jsx-runtime-EKYJJIwR.js";import{P as c}from"./PageHeader-t6Ly6_Ob.js";import{o as n}from"./renderButtons-DP0bGf4C.js";import"./index-D0AnReJb.js";const d={title:"Components/PageHeader"},e=({title:r,showButtons:s,showBack:i})=>l.jsx(c,{title:r,buttons:s?[{label:"Cancel",onClick:n,intent:"secondary",variant:"contained"},{label:"Save",onClick:()=>alert("Saving"),intent:"primary",variant:"contained"}]:void 0,onBack:i?n:void 0});e.args={title:"Playground page",showButtons:!0,showBack:!0};e.argTypes={title:{name:"Title"},showButtons:{name:"Show Primary Actions"},showBack:{name:"Show Back Button"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  title,
  showButtons,
  showBack
}: typeof Playground.args): ReactElement => {
  return <PageHeader title={title} buttons={showButtons ? [{
    label: "Cancel",
    onClick: onCancel,
    intent: "secondary",
    variant: "contained"
  }, {
    label: "Save",
    onClick: () => alert("Saving"),
    intent: "primary",
    variant: "contained"
  }] : undefined} onBack={showBack ? onCancel : undefined} />;
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const u=["Playground"],B=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{e as P,B as s};
