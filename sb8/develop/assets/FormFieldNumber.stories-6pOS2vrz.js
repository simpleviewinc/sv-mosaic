import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as P}from"./index-Btj5Fd67.js";import{u as N,F as T}from"./Form-tMgN-44i.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as b}from"./commonFieldControl-DXwRxrKb.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-BzJSDP1S.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./index-6dl0l4Q7.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-ulzUmfU4.js";import"./testIds-C2FMCy5K.js";import"./useMosaicTranslation-DPUDh126.js";import"./DataViewFilterDropdown-CqTisVOW.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-iQTdUMH8.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-nyy1Of3u.js";import"./Checkbox-1rJEaydD.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-H5i5NPQc.js";import"./formats-sBod7wm8.js";import"./Dialog-BYWfLX43.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-OgvLyBY4.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-CrdURRDn.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-P9MDHuwd.js";const je={title:"FormFields/FormFieldNumber"},e=({label:o,required:i,skeleton:F,disabled:n,instructionText:m,helperText:s,size:p,placeholder:t,decimalPlaces:l,prefix:a,suffix:d,sign:c})=>{const u=N(),{handleSubmit:h,state:y}=u,S=P.useMemo(()=>[{name:"numberfield",label:o,type:"number",required:i,disabled:n,size:p,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:l,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[o,i,n,p,t,s,m,l,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(T,{buttons:j(h),title:"Number Field",fields:S,...u,skeleton:F}),r.jsx("pre",{children:JSON.stringify(y,null,"  ")})]})};e.args={...b.args,size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={...b.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const ze=["Playground"];export{e as Playground,ze as __namedExportsOrder,je as default};
