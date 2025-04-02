import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as D}from"./index-Btj5Fd67.js";import{u as N,F as T}from"./Form-DsDAv5pr.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as b}from"./commonFieldControl-LQDYMh-C.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-DxOHnzJo.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./index-D0mmSDhJ.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-BLORHG_J.js";import"./testIds-Cxqhkw8S.js";import"./useMosaicTranslation-C-FZRKWr.js";import"./DataViewFilterDropdown-CsfLeKEd.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-KlomlsFy.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-Dua-Ccba.js";import"./Checkbox-CMTKNKa4.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-_4jhqXCQ.js";import"./formats-sBod7wm8.js";import"./Dialog-9INDoSZN.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-kkXpxrCn.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-DkvzNMib.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-BStOH7U_.js";const je={title:"FormFields/FormFieldNumber"},e=({label:o,required:i,prepop:F,prepopData:h,disabled:n,instructionText:m,helperText:p,size:s,placeholder:t,decimalPlaces:a,prefix:l,suffix:d,sign:c})=>{const u=N({data:F?h:{}}),{handleSubmit:y,state:S}=u,P=D.useMemo(()=>[{name:"number",label:o,type:"number",required:i,disabled:n,size:s,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:a,prefix:l,suffix:d,sign:c},helperText:p,instructionText:m}],[o,i,n,s,t,p,m,a,l,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(T,{buttons:j(y),title:"Number Field",fields:P,...u}),r.jsx("pre",{children:JSON.stringify(S,null,"  ")})]})};e.args={...b.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={...b.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
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
            <Form buttons={renderButtons(handleSubmit)} title="Number Field" fields={fields} {...controller} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(g=(x=e.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const ze=["Playground"];export{e as Playground,ze as __namedExportsOrder,je as default};
