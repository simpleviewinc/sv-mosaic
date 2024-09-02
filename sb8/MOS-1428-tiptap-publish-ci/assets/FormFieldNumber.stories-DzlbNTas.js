import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./formUtils-DjSqlTKK.js";import"./Button-DueqkIm2.js";import"./useMosaicTranslation-COKC524W.js";import{r as k}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-BdyxYbXv.js";import"./theme-D4oZEIDo.js";import"./generateUtilityClasses-BPeOZGYv.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-FZ6f8RnB.js";import"./createSvgIcon-BtentTTR.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-B0UKn5st.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-Bh80rPSh.js";import"./useTheme-BNssCB1g.js";import"./index-BxmsGmlx.js";import"./index-2J_8zTQy.js";import"./CheckboxList-KMp2i93r.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-U_yyaHlS.js";import"./FormControlLabel-DBnW5Tz0.js";import"./ButtonBase-XhX7nRZA.js";import"./getThemeProps-C7Gh6k4C.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CnIiVLVy.js";import"./ButtonRow-qkswv1Jr.js";import"./useToggle-lipGlewK.js";import"./Spinner-BCi31wiD.js";import"./Chip-ClM3atSE.js";import"./Typography-BZ6FG2aM.js";import"./SubtitleText-DLLK2BRy.js";import"./sizes-C6oSOElx.js";import"./RadioButton-B-eZefD4.js";import"./StyledFormControl.styled-DtM0hwgT.js";import"./Toggle-CG00k_Wo.js";import"./testIds-BnancpY_.js";import"./ColorSelected-BP7nqoPF.js";import"./TitleWrapper-MWHBzMgh.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-Blyuhmp5.js";import"./MoreVert-C7wPIcx0.js";import"./ChevronRight-BLUVcH0g.js";import"./PageHeader-B-GYZDZp.js";import"./MenuSelect-BcCb5A_-.js";import"./useMediaQuery-Ek32I1kU.js";import"./formats-CDjt32hU.js";import"./Dialog-DAfxXC36.js";import"./SideNav-Dp0PHZmL.js";import"./Snackbar-DHq1g_-o.js";import"./Close-D5vwSMiv.js";import"./ClickAwayListener-DdjayeQ_.js";import"./Blank-JgbFIOSE.js";const ze={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
