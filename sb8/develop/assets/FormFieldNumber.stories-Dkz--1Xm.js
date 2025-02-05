import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as S}from"./index-Btj5Fd67.js";import{u as T,F as P}from"./Form-DCJEJ9uH.js";import{r as k}from"./renderButtons-BmHfsf_z.js";import"./theme-C7C0QMlu.js";import"./SideNav-BXGvGLiL.js";import"./containerQuery-BqcK0eeN.js";import"./useToggle-B3mbTfSB.js";import"./ColorSelected-DSajfO12.js";import"./index-Cgp_8tUs.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BUfrUkss.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./createSvgIcon-C7F5N1gl.js";import"./createSvgIcon-Bmixpj46.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-C9uVWUyr.js";import"./useId-DwELyCdS.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-D8KJxpyu.js";import"./Chip-Bn2vqR2u.js";import"./ButtonBase-Ci24pScM.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-L7Zdnfri.js";import"./FormFieldText.styled-BXg2h5EQ.js";import"./Button-BW21zc79.js";import"./Popper-lO7-sb5Y.js";import"./useTheme-CN1B93FI.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./formControlState-Bl9Dd4wz.js";import"./ButtonRow-DaYhrvd1.js";import"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-CKLT5_IE.js";import"./Checkbox-faPr4U1Q.js";import"./FormControlLabel-DlxLljVV.js";import"./getThemeProps-DdDNKTGU.js";import"./TitleWrapper-Bkg-hsBc.js";import"./TitleText-CdOksVB0.js";import"./MoreVert-BH0BHXBp.js";import"./ChevronRight-Da8zFjWX.js";import"./PageHeader-CmlBcYYr.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BFvQvs9V.js";import"./StyledFormControl.styled-D1xcYZGf.js";import"./Toggle-Lx-sDa2f.js";import"./formats-sBod7wm8.js";import"./Dialog-BFRUe6cu.js";import"./useMediaQuery-Yl5lg82S.js";import"./Snackbar-B25MKBii.js";import"./Close-CSY1ofSk.js";import"./ClickAwayListener-DweT8u9y.js";import"./TooltipIcon-C4tSz_X8.js";const je={title:"FormFields/FormFieldNumber"},e=({label:i,required:n,skeleton:g,disabled:o,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:u})=>{const c=T(),{handleSubmit:h,state:F}=c,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:n,disabled:o,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:u},helperText:s,instructionText:m}],[i,n,o,l,t,s,m,p,a,d,u]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...c,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
