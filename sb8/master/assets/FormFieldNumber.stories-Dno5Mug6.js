import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./formUtils-D8tkyYyB.js";import{r as k}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-DC9l5o26.js";import"./theme-D4oZEIDo.js";import"./Button-B7Cp1A2i.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-tCQFe4bJ.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CVnL_KSQ.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-BSB-bEHM.js";import"./createSvgIcon-Ctt9EnSd.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-BVq8MUDq.js";import"./CheckboxList-BqPA3yNH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-_RXYTNJz.js";import"./FormControlLabel-Cy6KcgOl.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import"./ButtonRow-nrQV_x_-.js";import"./Spinner-tjn3ihlQ.js";import"./Chip-D6uKAMXX.js";import"./Typography-Bm8mlfoU.js";import"./SubtitleText-A3erhwRa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BVjzWjPW.js";import"./StyledFormControl.styled-BRiA3uuL.js";import"./Toggle-BXalcPDR.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-x_Fjm0Zg.js";import"./TitleWrapper-Dli_wbop.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-CFZnrs7C.js";import"./MoreVert-Dt36-imA.js";import"./ChevronRight-CA0RLU_a.js";import"./PageHeader-BAPyqEJv.js";import"./MenuSelect-BxBGlSfr.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-BnEQnkF5.js";import"./SideNav-BixOpWCF.js";import"./Snackbar-QgEqhdTF.js";import"./Close-DUapGJLS.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";const qe={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  size,
  placeholder,
  decimalPlaces,
  prefix,
  suffix,
  sign
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "numberfield",
    label,
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
    instructionText
  }], [label, required, disabled, size, placeholder, helperText, instructionText, decimalPlaces, prefix, suffix, sign]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Number Field" fields={fields} {...controller} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const ze=["Playground"];export{e as Playground,ze as __namedExportsOrder,qe as default};
