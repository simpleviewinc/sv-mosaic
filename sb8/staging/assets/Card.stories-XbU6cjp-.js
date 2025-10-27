import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{t as p}from"./sizes-1ZdlMWGC.js";import{r as n}from"./index-ePW8zFKp.js";import{t as C}from"./testIds-B6Pox1zA.js";import{a as I,b,c as x,d as w}from"./Card.styled-Cfnm8QOk.js";import{B as T}from"./ButtonRow-YhuqC_GR.js";import{C as g}from"./CardHeading-BZzm19Ep.js";import{A as k}from"./Add-C0p6k_sx.js";import{C as j}from"./Contacts-DpBhwT8h.js";import{C as E}from"./Create-Dh1EPE8A.js";import{D as S}from"./Delete-PukiRK_S.js";import"./Typography-Bs-xuYxw.js";import{T as i}from"./Text-cPxBJcyq.js";import{C as u}from"./StyledPopperPaper-8Ep909Ba.js";const O=({bottomActions:o,content:r,count:l,showZeroCount:a,title:s,titleIcon:d,topActions:m,collapsed:c})=>n.createElement(I,{"data-testid":C.CARD,$collapsed:c},n.createElement(g,{buttons:m,collapsed:c,count:l,icon:d,showZeroCount:a},s),!c&&n.createElement(n.Fragment,null,n.createElement(b,null,r.map((A,v)=>n.createElement(x,{key:v,"data-testid":C.CARD_ITEM},A))),(o==null?void 0:o.length)>0&&n.createElement(w,null,n.createElement(T,{buttons:o})))),B={title:"Components/Card",parameters:{layout:"centered"}},R=[t.jsxs(u,{children:[t.jsx(i,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(i,{size:"sm",line:"loose",color:p.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(u,{children:[t.jsx(i,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(i,{size:"sm",line:"loose",color:p.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(u,{children:[t.jsx(i,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(i,{size:"sm",line:"loose",color:p.color.gray[800],children:"Feb 13, 2025"})]})],e=({showTitleIcon:o,quantityOfTopActions:r,quantityOfBottomActions:l,count:a,showZeroCount:s,collapsed:d})=>{const m=[{intent:"secondary",variant:"text",onClick:()=>alert("+ icon clicked"),mIcon:k},{label:"Save",onClick:()=>alert("Save button clicked"),intent:"primary",variant:"contained"},{label:"Remove",onClick:()=>alert("Remove button clicked"),intent:"secondary",variant:"contained",mIcon:S}],c=[{intent:"info",label:"Add a new task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:k},{intent:"info",label:"Edit task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:E},{label:"Go to tasks",onClick:()=>alert("Go to tasks clicked"),intent:"primary",variant:"contained"}];return t.jsx("div",{style:{maxWidth:"100%",width:400},children:t.jsx(O,{content:R,title:"Section Title",titleIcon:o&&j,topActions:m.slice(0,r),bottomActions:c.slice(0,l),count:a!==void 0&&a>=0?a:void 0,showZeroCount:s,collapsed:d})})};e.args={showTitleIcon:!0,quantityOfTopActions:1,quantityOfBottomActions:1,count:0,showZeroCount:!1,collapsed:!1};e.argTypes={showTitleIcon:{name:"Show Title Icon"},quantityOfTopActions:{options:[0,1,2,3],control:{type:"select"},name:"Top Actions"},quantityOfBottomActions:{options:[0,1,2,3],control:{type:"select"},name:"Bottom Actions"},count:{name:"Count"},showZeroCount:{name:"Display Zero Count"},collapsed:{name:"Collapsed"}};var f,y,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
  showTitleIcon,
  quantityOfTopActions,
  quantityOfBottomActions,
  count,
  showZeroCount,
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
            <Card content={content} title="Section Title" titleIcon={showTitleIcon && ContactsIcon} topActions={topActions.slice(0, quantityOfTopActions)} bottomActions={bottomActions.slice(0, quantityOfBottomActions)} count={count !== undefined && count >= 0 ? count : undefined} showZeroCount={showZeroCount} collapsed={collapsed} />
        </div>;
}`,...(h=(y=e.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const q=["Playground"],N=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:q,default:B},Symbol.toStringTag,{value:"Module"}));export{e as P,N as s};
