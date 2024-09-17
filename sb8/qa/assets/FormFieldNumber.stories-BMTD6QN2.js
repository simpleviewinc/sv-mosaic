import{j as r}from"./jsx-runtime-CexXSJP5.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./formUtils-Chz1BKzT.js";import"./Button-nZpOdxAh.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as k}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-DKfV5JUa.js";import"./useTheme-JcVqJUPL.js";import"./index-BxmsGmlx.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./ButtonBase-B9MACyLv.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./useToggle-lipGlewK.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";const ze={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const De=["Playground"];export{e as Playground,De as __namedExportsOrder,ze as default};
