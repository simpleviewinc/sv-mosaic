import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./formUtils-_3vuFM65.js";import{r as k}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-D52tBzSN.js";import"./theme-D4oZEIDo.js";import"./Button-hDbntUFq.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-PbTCDhKf.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-w-fPOHP0.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-DtSB7Npb.js";import"./createSvgIcon-C--OfSMv.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Dj2uKZPX.js";import"./CheckboxList-BJKO_tlZ.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-99gvqvpC.js";import"./FormControlLabel-6w5tMtqL.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D6sgaW_7.js";import"./ButtonRow-CMyoNa1j.js";import"./Spinner-CkdL5ves.js";import"./Chip-DXGqlxO_.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-cXyE_jQb.js";import"./StyledFormControl.styled-BiBtmbII.js";import"./Toggle-CVDhB75Z.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-Br-7O02j.js";import"./TitleWrapper-pxn7wBs7.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-DHzDrhAG.js";import"./ChevronRight-_vfyNBs1.js";import"./PageHeader-Bx1E2hEF.js";import"./MenuSelect-Cs3ZiiP1.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-C7U_7KSK.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-uNo4FsPQ.js";import"./Close-SaQPltJO.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const qe={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
