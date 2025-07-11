import{j as i}from"./jsx-runtime-EKYJJIwR.js";import{P as c}from"./PageHeader-PjPXuI9q.js";import{o}from"./renderButtons-BmHfsf_z.js";const u={title:"Components/PageHeader"},e=({title:r,showButtons:l,showBack:s})=>i.jsx(c,{title:r,buttons:l?[{label:"Cancel",onClick:o,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>alert("Saving"),color:"yellow",variant:"contained"}]:void 0,onBack:s?o:void 0});e.args={title:"Playground page",showButtons:!0,showBack:!0};e.argTypes={title:{name:"Title"},showButtons:{name:"Show Primary Actions"},showBack:{name:"Show Back Button"}};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  title,
  showButtons,
  showBack
}: typeof Playground.args): ReactElement => {
  return <PageHeader title={title} buttons={showButtons ? [{
    label: "Cancel",
    onClick: onCancel,
    color: "gray",
    variant: "outlined"
  }, {
    label: "Save",
    onClick: () => alert("Saving"),
    color: "yellow",
    variant: "contained"
  }] : undefined} onBack={showBack ? onCancel : undefined} />;
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const d=["Playground"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{e as P,y as s};
