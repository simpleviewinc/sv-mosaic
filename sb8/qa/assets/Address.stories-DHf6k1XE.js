import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as T}from"./index-BP8_t0zE.js";import{r as B}from"./storyUtils-ByV2Bsyv.js";import{u as S,F as P}from"./formUtils-CayaUY58.js";import{g as M,a as k}from"./optionGetters-DXvNsMp-.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./theme-CtvfJOCv.js";import"./Button-CDqJWCGq.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-Dv9SgNkb.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";const qe={title:"FormFields/FormFieldAddress"},o=["undefined",1,2,3,4,5],t={getOptionsCountries:M,getOptionsStates:k,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},e=({label:i,disabled:d,required:l,skeleton:x,amountPerType:s,amountShipping:m,amountPhysical:a,amountBilling:p})=>{const u=S(),{state:F,handleSubmit:A}=u,N=T.useMemo(()=>[{disabled:d,label:i,required:l,name:"address",type:"address",inputSettings:{amountPerType:s==="undefined"?void 0:Number(s),amountShipping:m==="undefined"?void 0:Number(m),amountPhysical:a==="undefined"?void 0:Number(a),amountBilling:p==="undefined"?void 0:Number(p),...t}}],[d,i,l,s,m,a,p]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(F,null,"  ")}),n.jsx(P,{...u,buttons:B(A),title:"Address field",fields:N,skeleton:x})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:o},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:o},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:o},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:o}};const v=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],r=()=>{const i=S();return n.jsx(P,{...i,title:"Address Field",fields:v})};var c,f,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
