import{j as s}from"./jsx-runtime-CexXSJP5.js";import{P as m}from"./PageHeader-Ck68ugi1.js";import{o as t}from"./storyUtils-ByV2Bsyv.js";import"./index-BP8_t0zE.js";import"./theme-CtvfJOCv.js";import"./TitleWrapper-iXKWJO9P.js";import"./Button-DMdypOK9.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./containerQuery-C4iAQuB_.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Typography-v36okEvj.js";import"./TitleText-Dy6rc9cG.js";import"./ButtonRow-Bf0hMbCe.js";const O={title:"Components/PageHeader"},o=({title:a,showButtons:i,showBack:l})=>s.jsx(m,{title:a,buttons:i?[{label:"Cancel",onClick:t,color:"gray",variant:"outlined"},{label:"Save",onClick:()=>alert("Saving"),color:"yellow",variant:"contained"}]:void 0,onBack:l?t:void 0});o.args={title:"Playground page",showButtons:!0,showBack:!0};o.argTypes={title:{name:"Title"},showButtons:{name:"Show Primary Actions"},showBack:{name:"Show Back Button"}};var r,e,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
