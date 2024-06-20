import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as T}from"./index-CDs2tPxN.js";import{r as k}from"./storyUtils-ByV2Bsyv.js";import{u as S,F as P}from"./formUtils-CJK8oCl3.js";import{g as B,a as M}from"./optionGetters-DXvNsMp-.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Oe={title:"FormFields/FormFieldAddress"},r=["undefined",1,2,3,4,5],t={getOptionsCountries:B,getOptionsStates:M,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},e=({label:o,disabled:p,required:l,skeleton:x,amountPerType:s,amountShipping:a,amountPhysical:m,amountBilling:d})=>{const u=S(),{state:F,handleSubmit:N}=u,A=T.useMemo(()=>[{disabled:p,label:o,required:l,name:"address",type:"address",inputSettings:{amountPerType:s==="undefined"?void 0:Number(s),amountShipping:a==="undefined"?void 0:Number(a),amountPhysical:m==="undefined"?void 0:Number(m),amountBilling:d==="undefined"?void 0:Number(d),...t}}],[p,o,l,s,a,m,d]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(F,null,"  ")}),n.jsx(P,{...u,buttons:k(N),title:"Address field",fields:A,skeleton:x})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:r},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:r},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:r},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:r}};const v=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],i=()=>{const o=S();return n.jsx(P,{...o,title:"Address Field",fields:v})};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var c,y,f;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(f=(y=e.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,h,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const _e=["Playground","KitchenSink"];export{i as KitchenSink,e as Playground,_e as __namedExportsOrder,Oe as default};
