import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as N}from"./index-D0AnReJb.js";import{u as j,F as z}from"./index-CskZx9qi.js";import{r as E}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";const qr={title:"FormFields/FormFieldNumber"},r=({label:o,hideLabel:i,required:n,prepop:y,prepopData:S,disabled:p,instructionText:m,forceInstructionTooltip:s,helperText:l,size:a,placeholder:t,decimalPlaces:d,prefix:c,suffix:u,sign:f})=>{const x=j({data:y?S:{}}),{handleSubmit:P,state:T}=x,D=N.useMemo(()=>[{name:"number",label:o,hideLabel:i,type:"number",required:n,disabled:p,size:a,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:d,prefix:c,suffix:u,sign:f},helperText:l,instructionText:m,forceInstructionTooltip:s}],[o,i,n,p,a,t,d,c,u,f,l,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{buttons:E(P),title:"Number Field",fields:D,...x}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};r.args={...F.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};r.argTypes={...F.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
