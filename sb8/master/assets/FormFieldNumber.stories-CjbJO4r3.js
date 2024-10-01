import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./formUtils-CERrhxxw.js";import"./Button-BrUhf9jf.js";import{r as k}from"./renderButtons-BmHfsf_z.js";import"./FormFieldText.styled-CDQUwglR.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-CplxKB4o.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-XnU1Ta54.js";import"./createSvgIcon-BwurTq3z.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CA50KEz-.js";import"./useTheme-vMmOGwbU.js";import"./index-BxmsGmlx.js";import"./index-CiJN4qBb.js";import"./CheckboxList-9J3AJhZb.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-Daz-CCp_.js";import"./FormControlLabel-2HxiQW27.js";import"./ButtonBase-Btj-nnLi.js";import"./getThemeProps-CBTZRUO9.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CJaR1K_8.js";import"./ButtonRow-C8VNIQ4B.js";import"./useToggle-lipGlewK.js";import"./Spinner-Cxn5F_rN.js";import"./Chip-CuADowIf.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D1cjnaj9.js";import"./StyledFormControl.styled-DR5TItxT.js";import"./Toggle-DqBdDGXG.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CUu1BnTo.js";import"./TitleWrapper-B_5wLb-y.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-CHB9Iy9y.js";import"./ChevronRight-Bc3jAIO-.js";import"./PageHeader-B0SeyLtR.js";import"./formats-CDjt32hU.js";import"./Dialog-DYdX5JhR.js";import"./useMediaQuery-B5e8eNzK.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-B3ORSSfg.js";import"./Snackbar-CeVWLZcc.js";import"./Close-40L3pRZX.js";import"./ClickAwayListener-DnjBLK-5.js";const je={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const qe=["Playground"];export{e as Playground,qe as __namedExportsOrder,je as default};
