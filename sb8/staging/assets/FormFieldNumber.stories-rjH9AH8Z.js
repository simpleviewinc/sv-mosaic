import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as N}from"./index-D0AnReJb.js";import{u as j,F as z}from"./index-CNkl0l2T.js";import{r as E}from"./renderButtons-DP0bGf4C.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-BKXNnpj0.js";import"./TitleWrapper-BiC1Wb-5.js";import"./Button-D5Mq00Ds.js";import"./identifier-Bktyv6O_.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./ButtonBase-CyOgbtoj.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./index-R4Jqw3Tw.js";import"./Popover-B_lFWVkj.js";import"./Popper-B65p2oiP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Daljk49C.js";import"./toNumber-DqzDMBhJ.js";import"./useMosaicTranslation-di9nduwf.js";import"./DataViewFilterDropdownButtons-B_FGX-fS.js";import"./index-D77a6n9L.js";import"./ExpandMore-Dl7LJMh2.js";import"./Chip-DNwtmRHZ.js";import"./CheckboxList-DDeK_q7o.js";import"./Checkbox-_0JQhlIl.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./formControlState-BI4toe_X.js";import"./Text-ChOjGkiI.js";import"./DataViewPrimaryFilter.styled-BORqmM8y.js";import"./PickerPanel-DZf3nPrH.js";import"./PageHeader-DbhT7nzS.js";import"./FormFieldText.styled-CJUQilOD.js";import"./Spinner-m5_IcvNq.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DaK7yvE3.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-BAGapJVE.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-DNhIGYb9.js";import"./Dialog-DofFNcAh.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";const Ir={title:"FormFields/FormFieldNumber"},r=({label:o,hideLabel:i,required:n,prepop:y,prepopData:S,disabled:p,instructionText:m,forceInstructionTooltip:s,helperText:l,size:a,placeholder:t,decimalPlaces:d,prefix:c,suffix:u,sign:f})=>{const x=j({data:y?S:{}}),{handleSubmit:P,state:T}=x,D=N.useMemo(()=>[{name:"number",label:o,hideLabel:i,type:"number",required:n,disabled:p,size:a,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:d,prefix:c,suffix:u,sign:f},helperText:l,instructionText:m,forceInstructionTooltip:s}],[o,i,n,p,a,t,d,c,u,f,l,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{buttons:E(P),title:"Number Field",fields:D,...x}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};r.args={...F.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};r.argTypes={...F.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
