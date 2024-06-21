import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as T}from"./index-CDs2tPxN.js";import{r as B}from"./storyUtils-ByV2Bsyv.js";import{u as S,F as P}from"./formUtils-8tzQoWfa.js";import{g as M,a as k}from"./optionGetters-DXvNsMp-.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const qe={title:"FormFields/FormFieldAddress"},o=["undefined",1,2,3,4,5],t={getOptionsCountries:M,getOptionsStates:k,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},e=({label:i,disabled:d,required:l,skeleton:x,amountPerType:s,amountShipping:m,amountPhysical:a,amountBilling:p})=>{const u=S(),{state:F,handleSubmit:A}=u,N=T.useMemo(()=>[{disabled:d,label:i,required:l,name:"address",type:"address",inputSettings:{amountPerType:s==="undefined"?void 0:Number(s),amountShipping:m==="undefined"?void 0:Number(m),amountPhysical:a==="undefined"?void 0:Number(a),amountBilling:p==="undefined"?void 0:Number(p),...t}}],[d,i,l,s,m,a,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(F,null,"  ")}),n.jsx(P,{...u,buttons:B(A),title:"Address field",fields:N,skeleton:x})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:o},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:o},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:o},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:o}};const v=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],r=()=>{const i=S();return n.jsx(P,{...i,title:"Address Field",fields:v})};var c,f,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  amountPerType,
  amountShipping,
  amountPhysical,
  amountBilling
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    disabled,
    label,
    required,
    name: "address",
    type: "address",
    inputSettings: {
      amountPerType: amountPerType === "undefined" ? undefined : Number(amountPerType),
      amountShipping: amountShipping === "undefined" ? undefined : Number(amountShipping),
      amountPhysical: amountPhysical === "undefined" ? undefined : Number(amountPhysical),
      amountBilling: amountBilling === "undefined" ? undefined : Number(amountBilling),
      ...commonInputSettings
    }
  }], [disabled, label, required, amountPerType, amountShipping, amountPhysical, amountBilling]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const Ee=["Playground","KitchenSink"];export{r as KitchenSink,e as Playground,Ee as __namedExportsOrder,qe as default};
