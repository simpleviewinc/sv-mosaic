import{j as u}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{s as m}from"./styled-components.browser.esm-8MQ3dTkk.js";import{t,a as e}from"./toggleOptions-1cXvXfFl.js";import{B as d}from"./ButtonRow-Dfei1Wea.js";const w={title:"Components/ButtonRow"},g=m(d)`
    border: 2px solid maroon;
    background: #eee;
    padding: 1rem;
`,o=({showToast:n,showTea:s,showCrumpets:a})=>{const c=i.useMemo(()=>[{color:"red",variant:"contained",label:"Toast",show:t[n]},{color:"blue",variant:"contained",label:"Tea",show:t[s]},{color:"yellow",variant:"contained",label:"Crumpets",show:t[a]}],[n,s,a]);return u.jsx(g,{buttons:c})};o.args={showToast:"Undefined",showTea:"Undefined",showCrumpets:"Undefined"};o.argTypes={showToast:{options:e,control:{type:"select"},name:"Show Toast"},showTea:{options:e,control:{type:"select"},name:"Show Tea"},showCrumpets:{options:e,control:{type:"select"},name:"Show Crumpets"}};var r,l,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showToast,
  showTea,
  showCrumpets
}: typeof Playground.args): ReactElement => {
  const buttonDefs: ButtonProps[] = useMemo(() => [{
    color: "red",
    variant: "contained",
    label: "Toast",
    show: toggleMap[showToast]
  }, {
    color: "blue",
    variant: "contained",
    label: "Tea",
    show: toggleMap[showTea]
  }, {
    color: "yellow",
    variant: "contained",
    label: "Crumpets",
    show: toggleMap[showCrumpets]
  }], [showToast, showTea, showCrumpets]);
  return <StyledButtonRow buttons={buttonDefs} />;
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const h=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:o,__namedExportsOrder:h,default:w},Symbol.toStringTag,{value:"Module"}));export{o as P,S as s};
