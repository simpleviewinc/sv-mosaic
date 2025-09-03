import{j as m}from"./jsx-runtime-EKYJJIwR.js";import{r as u}from"./index-D0AnReJb.js";import{s as d}from"./styled-components.browser.esm-njFAddlw.js";import{t as o,a as e}from"./toggleOptions-1cXvXfFl.js";import{B as c}from"./ButtonRow-DJBG-tfi.js";const w={title:"Components/ButtonRow"},g=d(c)`
    border: 2px solid maroon;
    background: #eee;
    padding: 1rem;
`,t=({showToast:n,showTea:s,showCrumpets:a})=>{const l=u.useMemo(()=>[{intent:"danger",variant:"contained",label:"Toast",show:o[n]},{intent:"info",variant:"contained",label:"Tea",show:o[s]},{intent:"primary",variant:"contained",label:"Crumpets",show:o[a]}],[n,s,a]);return m.jsx(g,{buttons:l})};t.args={showToast:"Undefined",showTea:"Undefined",showCrumpets:"Undefined"};t.argTypes={showToast:{options:e,control:{type:"select"},name:"Show Toast"},showTea:{options:e,control:{type:"select"},name:"Show Tea"},showCrumpets:{options:e,control:{type:"select"},name:"Show Crumpets"}};var r,i,p;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showToast,
  showTea,
  showCrumpets
}: typeof Playground.args): ReactElement => {
  const buttonDefs: ButtonProps[] = useMemo(() => [{
    intent: "danger",
    variant: "contained",
    label: "Toast",
    show: toggleMap[showToast]
  }, {
    intent: "info",
    variant: "contained",
    label: "Tea",
    show: toggleMap[showTea]
  }, {
    intent: "primary",
    variant: "contained",
    label: "Crumpets",
    show: toggleMap[showCrumpets]
  }], [showToast, showTea, showCrumpets]);
  return <StyledButtonRow buttons={buttonDefs} />;
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:t,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{t as P,S as s};
