import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{t as u}from"./sizes-1ZdlMWGC.js";import{r as n}from"./index-ePW8zFKp.js";import{t as h}from"./testIds-B6Pox1zA.js";import{C as v,a as I,b as w,c as g,d as T}from"./CardHeading-vMKjysYd.js";import{B as j}from"./ButtonRow-CKtT1B9L.js";import{A as k}from"./Add-C0p6k_sx.js";import{C as E}from"./Contacts-DpBhwT8h.js";import{C as S}from"./Create-Dh1EPE8A.js";import{D as O}from"./Delete-PukiRK_S.js";import"./Typography-Bs-xuYxw.js";import{T as a}from"./Text-cPxBJcyq.js";import{C}from"./StyledPopperPaper-D2kQT34B.js";const B=({bottomActions:e,content:i,count:r,showZeroCount:l,title:c,titleIcon:s,topActions:d,collapsed:m})=>{const p=m||!i.length&&!e.length;return n.createElement(v,{"data-testid":h.CARD,$collapsed:p},n.createElement(I,{buttons:d,blunt:!p,count:r,icon:s,showZeroCount:l},c),!p&&n.createElement(n.Fragment,null,i.length>0&&n.createElement(w,null,i.map((x,A)=>n.createElement(g,{key:A,"data-testid":h.CARD_ITEM},x))),(e==null?void 0:e.length)>0&&n.createElement(T,null,n.createElement(j,{buttons:e}))))},R={title:"Components/Card",parameters:{layout:"centered"}},q=[t.jsxs(C,{children:[t.jsx(a,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(a,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(C,{children:[t.jsx(a,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(a,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(C,{children:[t.jsx(a,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(a,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]})],o=({showTitleIcon:e,quantityOfTopActions:i,quantityOfBottomActions:r,count:l,showCount:c,collapsed:s})=>{const d=[{intent:"secondary",variant:"text",onClick:()=>alert("+ icon clicked"),mIcon:k},{label:"Save",onClick:()=>alert("Save button clicked"),intent:"primary",variant:"contained"},{label:"Remove",onClick:()=>alert("Remove button clicked"),intent:"secondary",variant:"contained",mIcon:O}],m=[{intent:"info",label:"Add a new task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:k},{intent:"info",label:"Edit task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:S},{label:"Go to tasks",onClick:()=>alert("Go to tasks clicked"),intent:"primary",variant:"contained"}];return t.jsx("div",{style:{maxWidth:"100%",width:400},children:t.jsx(B,{content:q.slice(0,l),title:"Section Title",titleIcon:e&&E,topActions:d.slice(0,i),bottomActions:m.slice(0,r),count:c!=="No"?l:void 0,showZeroCount:c!=="Yes, if greater than 0",collapsed:s})})};o.args={showTitleIcon:!0,quantityOfTopActions:1,quantityOfBottomActions:1,count:0,showCount:"No",collapsed:!1};o.argTypes={showTitleIcon:{name:"Show Title Icon"},quantityOfTopActions:{name:"Top Actions",control:{type:"number",min:0,max:3}},quantityOfBottomActions:{name:"Bottom Actions",control:{type:"number",min:0,max:3}},count:{name:"Count",control:{type:"number",min:0,max:3}},showCount:{name:"Show Count",options:["No","Yes","Yes, if greater than 0"],control:{type:"select"}},collapsed:{name:"Collapsed"}};var y,f,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`({
  showTitleIcon,
  quantityOfTopActions,
  quantityOfBottomActions,
  count,
  showCount,
  collapsed
}: typeof Playground.args): ReactElement => {
  const topActions: ButtonProps[] = [{
    intent: "secondary",
    variant: "text",
    onClick: () => alert("+ icon clicked"),
    mIcon: AddIcon
  }, {
    label: "Save",
    onClick: () => alert("Save button clicked"),
    intent: "primary",
    variant: "contained"
  }, {
    label: "Remove",
    onClick: () => alert("Remove button clicked"),
    intent: "secondary",
    variant: "contained",
    mIcon: DeleteIcon
  }];
  const bottomActions: ButtonProps[] = [{
    intent: "info",
    label: "Add a new task",
    variant: "text",
    onClick: () => alert("Add new task clicked"),
    mIcon: AddIcon
  }, {
    intent: "info",
    label: "Edit task",
    variant: "text",
    onClick: () => alert("Add new task clicked"),
    mIcon: CreateIcon
  }, {
    label: "Go to tasks",
    onClick: () => alert("Go to tasks clicked"),
    intent: "primary",
    variant: "contained"
  }];
  return <div style={{
    maxWidth: "100%",
    width: 400
  }}>
            <Card content={content.slice(0, count)} title="Section Title" titleIcon={showTitleIcon && ContactsIcon} topActions={topActions.slice(0, quantityOfTopActions)} bottomActions={bottomActions.slice(0, quantityOfBottomActions)} count={showCount !== "No" ? count : undefined} showZeroCount={showCount !== "Yes, if greater than 0"} collapsed={collapsed} />
        </div>;
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const _=["Playground"],K=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:_,default:R},Symbol.toStringTag,{value:"Module"}));export{o as P,K as s};
