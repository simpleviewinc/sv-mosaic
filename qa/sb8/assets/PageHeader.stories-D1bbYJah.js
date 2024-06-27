import{j as s}from"./jsx-runtime-nGUw9YhZ.js";import{P as m}from"./PageHeader-Dv9SgNkb.js";import{o as t}from"./storyUtils-ByV2Bsyv.js";import"./index-BP8_t0zE.js";import"./theme-CtvfJOCv.js";import"./TitleWrapper-DJn4aB1e.js";import"./Button-CDqJWCGq.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./containerQuery-C4iAQuB_.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Typography-DSyzRETI.js";import"./TitleText-Dhe7UX1h.js";import"./ButtonRow-i3PhXCTq.js";const O={title:"Components/PageHeader"},o=({title:a,showButtons:i,showBack:l})=>s.jsx(m,{title:a,buttons:i?[{label:"Cancel",onClick:t,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>alert("Saving"),color:"yellow",variant:"contained"}]:void 0,onBack:l?t:void 0});o.args={title:"Playground page",showButtons:!0,showBack:!0};o.argTypes={title:{name:"Title"},showButtons:{name:"Show Primary Actions"},showBack:{name:"Show Back Button"}};var r,e,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
