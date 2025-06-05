import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as N}from"./index-D0AnReJb.js";import{u as j,F as z}from"./index-Ck7Dwj54.js";import{r as E}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-ePYozolN.js";import"./Button-mgz2aTYm.js";import"./DefaultPropsProvider-BwNoCFE_.js";import"./generateUtilityClasses-42_at76R.js";import"./ButtonBase-EThHB291.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CtiN8CS7.js";import"./Popper-BpP7Dmyd.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Dt0_M2VT.js";import"./useThemeWithoutDefault-ML7LN7QY.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-Bdc0w2F6.js";import"./createSvgIcon-CmcFkBiI.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DKFSDQw0.js";import"./DisplayText-CNJUHUbG.js";import"./ButtonRow-gAFOvWL6.js";import"./index-mtgrroPn.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-B6PsGsAS.js";import"./Chip-BiF3n3mk.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-CpwAbK4m.js";import"./formControlState-DKt-4xzo.js";import"./Spinner-BIub0DbD.js";import"./Text-9y4gMspU.js";import"./CheckboxList-BXiGiY-c.js";import"./Checkbox-CABnih5k.js";import"./FormControlLabel-FaPuCwUU.js";import"./MoreVert-BxoNaVuW.js";import"./ChevronRight-C-yhpJTc.js";import"./PageHeader-u9qr2_b1.js";import"./formats-CMvQHWsT.js";import"./RadioButton-peGC_BMl.js";import"./StyledFormControl.styled-CW3JaFWW.js";import"./Toggle-IqG9sXDk.js";import"./Dialog-BFp4KNLR.js";import"./ThemeProvider-CyphNCQQ.js";import"./ChipList-D5NUhJyC.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-DXnnQTTm.js";import"./Close-CGtmtFuS.js";import"./ClickAwayListener-Dkkr5f_-.js";const qr={title:"FormFields/FormFieldNumber"},r=({label:o,hideLabel:i,required:n,prepop:y,prepopData:S,disabled:p,instructionText:m,forceInstructionTooltip:s,helperText:l,size:a,placeholder:t,decimalPlaces:d,prefix:c,suffix:u,sign:f})=>{const x=j({data:y?S:{}}),{handleSubmit:P,state:T}=x,D=N.useMemo(()=>[{name:"number",label:o,hideLabel:i,type:"number",required:n,disabled:p,size:a,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:d,prefix:c,suffix:u,sign:f},helperText:l,instructionText:m,forceInstructionTooltip:s}],[o,i,n,p,a,t,d,c,u,f,l,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{buttons:E(P),title:"Number Field",fields:D,...x}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};r.args={...F.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};r.argTypes={...F.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  size,
  placeholder,
  decimalPlaces,
  prefix,
  suffix,
  sign
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "number",
    label,
    hideLabel,
    type: "number",
    required,
    disabled,
    size,
    inputSettings: {
      placeholder: placeholder === "" ? undefined : placeholder,
      decimalPlaces,
      prefix,
      suffix,
      sign
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, size, placeholder, decimalPlaces, prefix, suffix, sign, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Number Field" fields={fields} {...controller} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Br=["Playground"];export{r as Playground,Br as __namedExportsOrder,qr as default};
