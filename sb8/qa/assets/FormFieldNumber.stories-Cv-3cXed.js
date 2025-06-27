import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as N}from"./index-D0AnReJb.js";import{u as j,F as z}from"./index-S8NmCBW9.js";import{r as E}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./sizes-CTdyEcea.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./identifier-C21A9frq.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./ButtonBase-CLHtCICo.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-DEKalGfm.js";import"./toNumber-ANF_7kha.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-B-NSlGS8.js";import"./index-Dm6EKObO.js";import"./ExpandMore-CEbXN-sG.js";import"./Chip-BMBxB4HT.js";import"./PickerPanel-CJUaTFnG.js";import"./PageHeader-CEZufbNa.js";import"./Text-Bw6wJuVZ.js";import"./FormFieldText.styled-DTQIdddZ.js";import"./formControlState-FGREjXRn.js";import"./Spinner-DrhQOeHK.js";import"./CheckboxList-6G7BlDZu.js";import"./Checkbox-DqndGKzg.js";import"./FormControlLabel-sQC-fLMo.js";import"./DataViewPrimaryFilter.styled-DJMCb03L.js";import"./MoreVert-DAsd8IpG.js";import"./formats-CMvQHWsT.js";import"./ChipList-CJvhQDiV.js";import"./RadioButton-Bcxn9PJS.js";import"./StyledFormControl.styled-BQMYotuj.js";import"./Toggle-DDpxCdm7.js";import"./Dialog-CCRRhmOO.js";import"./ThemeProvider-DKfWeLFc.js";import"./SideNav-AzQy47h5.js";import"./Snackbar-DyF0qJal.js";import"./Close-CheCpke4.js";import"./ClickAwayListener-Dkkr5f_-.js";const Ir={title:"FormFields/FormFieldNumber"},r=({label:o,hideLabel:i,required:n,prepop:y,prepopData:S,disabled:p,instructionText:m,forceInstructionTooltip:s,helperText:l,size:a,placeholder:t,decimalPlaces:d,prefix:c,suffix:u,sign:f})=>{const x=j({data:y?S:{}}),{handleSubmit:P,state:T}=x,D=N.useMemo(()=>[{name:"number",label:o,hideLabel:i,type:"number",required:n,disabled:p,size:a,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:d,prefix:c,suffix:u,sign:f},helperText:l,instructionText:m,forceInstructionTooltip:s}],[o,i,n,p,a,t,d,c,u,f,l,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{buttons:E(P),title:"Number Field",fields:D,...x}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};r.args={...F.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};r.argTypes={...F.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Jr=["Playground"];export{r as Playground,Jr as __namedExportsOrder,Ir as default};
