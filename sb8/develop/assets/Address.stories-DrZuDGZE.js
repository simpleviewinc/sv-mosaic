import{j as n}from"./jsx-runtime-CexXSJP5.js";import{r as T}from"./index-BP8_t0zE.js";import{r as B}from"./storyUtils-ByV2Bsyv.js";import{u as S,F as P}from"./formUtils-BR5ocB9f.js";import{g as M,a as k}from"./optionGetters-DXvNsMp-.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const qe={title:"FormFields/FormFieldAddress"},o=["undefined",1,2,3,4,5],t={getOptionsCountries:M,getOptionsStates:k,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},e=({label:i,disabled:d,required:l,skeleton:x,amountPerType:s,amountShipping:m,amountPhysical:a,amountBilling:p})=>{const u=S(),{state:F,handleSubmit:A}=u,N=T.useMemo(()=>[{disabled:d,label:i,required:l,name:"address",type:"address",inputSettings:{amountPerType:s==="undefined"?void 0:Number(s),amountShipping:m==="undefined"?void 0:Number(m),amountPhysical:a==="undefined"?void 0:Number(a),amountBilling:p==="undefined"?void 0:Number(p),...t}}],[d,i,l,s,m,a,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(F,null,"  ")}),n.jsx(P,{...u,buttons:B(A),title:"Address field",fields:N,skeleton:x})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:o},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:o},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:o},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:o}};const v=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],r=()=>{const i=S();return n.jsx(P,{...i,title:"Address Field",fields:v})};var c,f,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
