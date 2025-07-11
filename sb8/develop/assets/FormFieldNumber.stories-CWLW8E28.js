import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as N}from"./index-D0AnReJb.js";import{u as j,F as z}from"./index-BUl2NqO_.js";import{r as E}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";import"./styled-components.browser.esm-D9jdcGim.js";import"./sizes-xhpoGYFi.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-CwhNcCW5.js";import"./Button-B-HROxGS.js";import"./identifier-P2c7yk_w.js";import"./generateUtilityClasses-Cqx37_87.js";import"./ButtonBase-B88uyuTX.js";import"./useIsFocusVisible-DX7TaDmt.js";import"./index-Cp34SjbI.js";import"./Popper-C2xxNeyp.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-VJaTxDNw.js";import"./useThemeWithoutDefault-BBWH5Z3d.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-eQe_EJj5.js";import"./createSvgIcon-1nOp1Fw5.js";import"./createSvgIcon-yORtlijU.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DqP6CXHW.js";import"./DisplayText-DfbYD38Q.js";import"./ButtonRow-ZsYtcJma.js";import"./toNumber-BAVDMXIx.js";import"./useMosaicTranslation-YU7EdNRi.js";import"./DataViewFilterDropdownButtons-BXJT_S1t.js";import"./index-DczNNMM0.js";import"./ExpandMore-p_Fviusb.js";import"./Chip-CPY2CdPS.js";import"./CheckboxList-BiSNtdOb.js";import"./Checkbox-CcPIMNpv.js";import"./StyledOptionFormControl-DrwUDyOs.js";import"./formControlState-DKpu4qdP.js";import"./Text-Cy3-d4Dq.js";import"./DataViewPrimaryFilter.styled-WHVNyTxG.js";import"./PickerPanel-C2hSjTfb.js";import"./PageHeader-Maf0ecTd.js";import"./FormFieldText.styled-CreleCMn.js";import"./Spinner-C3xVyrtB.js";import"./MoreVert-CCwGH32Y.js";import"./formats-CMvQHWsT.js";import"./Snackbar-q2Sdad91.js";import"./Close-a0rXqC-u.js";import"./ClickAwayListener-Dv_hDxFo.js";import"./ChipList-CxVqxH3S.js";import"./RadioButton-B3r_znDd.js";import"./Toggle-D8WoBZhC.js";import"./Dialog-CQAKZUUh.js";import"./ThemeProvider-DOMyClwG.js";import"./SideNav-D5yCMd23.js";const Br={title:"FormFields/FormFieldNumber"},r=({label:o,hideLabel:i,required:n,prepop:y,prepopData:S,disabled:p,instructionText:m,forceInstructionTooltip:s,helperText:l,size:a,placeholder:t,decimalPlaces:d,prefix:c,suffix:u,sign:f})=>{const x=j({data:y?S:{}}),{handleSubmit:P,state:T}=x,D=N.useMemo(()=>[{name:"number",label:o,hideLabel:i,type:"number",required:n,disabled:p,size:a,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:d,prefix:c,suffix:u,sign:f},helperText:l,instructionText:m,forceInstructionTooltip:s}],[o,i,n,p,a,t,d,c,u,f,l,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx(z,{buttons:E(P),title:"Number Field",fields:D,...x}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};r.args={...F.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};r.argTypes={...F.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const Ir=["Playground"];export{r as Playground,Ir as __namedExportsOrder,Br as default};
