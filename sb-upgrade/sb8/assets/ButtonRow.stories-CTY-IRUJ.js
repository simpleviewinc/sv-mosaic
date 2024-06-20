import{j as m}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";import{s as d}from"./styled-components.browser.esm-C-l0uCre.js";import{t,a as e}from"./storyUtils-ByV2Bsyv.js";import{B as u}from"./ButtonRow-BqlcWF3K.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";const U={title:"Components/ButtonRow"},w=d(u)`
    border: 2px solid maroon;
    background: #eee;
    padding: 1rem;
`,o=({showToast:n,showTea:r,showCrumpets:s})=>{const l=c.useMemo(()=>[{color:"red",variant:"contained",label:"Toast",show:t[n]},{color:"blue",variant:"contained",label:"Tea",show:t[r]},{color:"yellow",variant:"contained",label:"Crumpets",show:t[s]}],[n,r,s]);return m.jsx(w,{buttons:l})};o.args={showToast:"Undefined",showTea:"Undefined",showCrumpets:"Undefined"};o.argTypes={showToast:{options:e,control:{type:"select"},name:"Show Toast"},showTea:{options:e,control:{type:"select"},name:"Show Tea"},showCrumpets:{options:e,control:{type:"select"},name:"Show Crumpets"}};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};var a,p,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const O=["Playground"];export{o as Playground,O as __namedExportsOrder,U as default};
