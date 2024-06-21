import{j as s}from"./jsx-runtime-qGIIFXMu.js";import{P as m}from"./PageHeader-DaN-rjBH.js";import{o as t}from"./storyUtils-ByV2Bsyv.js";import"./index-CDs2tPxN.js";import"./theme-tUuL1bpb.js";import"./TitleWrapper-fmXCHZNU.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./containerQuery-BObFYVCA.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Typography-w5WZckx5.js";import"./TitleText-B9tXBKHN.js";import"./ButtonRow-D8Ypu3LS.js";const O={title:"Components/PageHeader"},o=({title:a,showButtons:i,showBack:l})=>s.jsx(m,{title:a,buttons:i?[{label:"Cancel",onClick:t,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>alert("Saving"),color:"yellow",variant:"contained"}]:void 0,onBack:l?t:void 0});o.args={title:"Playground page",showButtons:!0,showBack:!0};o.argTypes={title:{name:"Title"},showButtons:{name:"Show Primary Actions"},showBack:{name:"Show Back Button"}};var r,e,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const q=["Playground"];export{o as Playground,q as __namedExportsOrder,O as default};
