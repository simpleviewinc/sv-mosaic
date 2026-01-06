import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{t as u}from"./sizes-1ZdlMWGC.js";import{r as n}from"./index-BcWw8SPZ.js";import{t as h}from"./testIds-B6Pox1zA.js";import{C as x,a as I,b as g,c as w,d as T}from"./CardHeading-DgwLSOU_.js";import{B}from"./ButtonRow-BGTnrp5G.js";import{E}from"./stable-BFc8HSVh.js";import{A}from"./Add-Cs-HjTtV.js";import{C as j}from"./Contacts-COWmTeHh.js";import{C as S}from"./Create-Z4gWA3gg.js";import{D as O}from"./Delete-Cvl-4GF9.js";import"./Typography-B-r-8hBf.js";import{T as e}from"./Text-C3Iu2YK-.js";import{C}from"./StyledPopperPaper-CxUbRyvr.js";import"./TooltipIcon-IdakTMWj.js";const R=({bottomActions:i=E,content:a,count:l,showZeroCount:d,title:r,titleIcon:s,topActions:m,collapsed:p})=>{const c=p||!a.length&&!i.length;return n.createElement(x,{"data-testid":h.CARD,$collapsed:c},n.createElement(I,{buttons:m,blunt:!c,count:l,icon:s,showZeroCount:d},r),!c&&n.createElement(n.Fragment,null,a.length>0&&n.createElement(g,null,a.map((v,b)=>n.createElement(w,{key:b,"data-testid":h.CARD_ITEM},v))),i.length>0&&n.createElement(T,null,n.createElement(B,{buttons:i}))))},P={title:"Components/Card",parameters:{layout:"centered"}},_=[t.jsxs(C,{children:[t.jsx(e,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(e,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(C,{children:[t.jsx(e,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(e,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]}),t.jsxs(C,{children:[t.jsx(e,{weight:"semi",line:"normal",children:"Slide Title"}),t.jsx(e,{size:"sm",line:"loose",color:u.color.gray[800],children:"Feb 13, 2025"})]})],o=({showTitleIcon:i,quantityOfTopActions:a,provideBottomActions:l,quantityOfBottomActions:d,count:r,showCount:s,collapsed:m})=>{const p=[{intent:"secondary",variant:"text",onClick:()=>alert("+ icon clicked"),mIcon:A},{label:"Save",onClick:()=>alert("Save button clicked"),intent:"primary",variant:"contained"},{label:"Remove",onClick:()=>alert("Remove button clicked"),intent:"secondary",variant:"contained",mIcon:O}],c=[{intent:"info",label:"Add a new task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:A},{intent:"info",label:"Edit task",variant:"text",onClick:()=>alert("Add new task clicked"),mIcon:S},{label:"Go to tasks",onClick:()=>alert("Go to tasks clicked"),intent:"primary",variant:"contained"}];return t.jsx("div",{style:{maxWidth:"100%",width:400},children:t.jsx(R,{content:_.slice(0,r),title:"Section Title",titleIcon:i&&j,topActions:p.slice(0,a),bottomActions:l?c.slice(0,d):void 0,count:s!=="No"?r:void 0,showZeroCount:s!=="Yes, if greater than 0",collapsed:m})})};o.args={showTitleIcon:!0,quantityOfTopActions:1,provideBottomActions:!0,quantityOfBottomActions:1,count:0,showCount:"No",collapsed:!1};o.argTypes={showTitleIcon:{name:"Show Title Icon"},quantityOfTopActions:{name:"Top Actions",control:{type:"number",min:0,max:3}},provideBottomActions:{name:"Provide Bottom Actions"},quantityOfBottomActions:{name:"Bottom Actions",control:{type:"number",min:0,max:3},if:{arg:"provideBottomActions"}},count:{name:"Count",control:{type:"number",min:0,max:3}},showCount:{name:"Show Count",options:["No","Yes","Yes, if greater than 0"],control:{type:"select"}},collapsed:{name:"Collapsed"}};var k,f,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`({
  showTitleIcon,
  quantityOfTopActions,
  provideBottomActions,
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
            <Card content={content.slice(0, count)} title="Section Title" titleIcon={showTitleIcon && ContactsIcon} topActions={topActions.slice(0, quantityOfTopActions)} bottomActions={provideBottomActions ? bottomActions.slice(0, quantityOfBottomActions) : undefined} count={showCount !== "No" ? count : undefined} showZeroCount={showCount !== "Yes, if greater than 0"} collapsed={collapsed} />
        </div>;
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const q=["Playground"],U=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:q,default:P},Symbol.toStringTag,{value:"Module"}));export{o as P,U as s};
