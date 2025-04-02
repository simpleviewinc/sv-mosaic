import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as D}from"./index-D0AnReJb.js";import{u as N,F as T}from"./Form-DPJ23PVO.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as b}from"./commonFieldControl-LQDYMh-C.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DpopOKxc.js";import"./generateUtilityClasses-BA0DUeUY.js";import"./ButtonBase-C35XO5Ki.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-xe3MJQij.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BAqAQ4su.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-BoBd9h2u.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-BbrvVw35.js";import"./createSvgIcon-B3veWrfC.js";import"./createSvgIcon-Bee5RQ5R.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Bypx1B0d.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-D2WocfoV.js";import"./formControlState-BN-vhB5B.js";import"./ButtonRow-C0p2ODeQ.js";import"./Spinner-B9uEl8uj.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-CvmUeamL.js";import"./Checkbox-CoU1FyDt.js";import"./FormControlLabel-CZZVJTgF.js";import"./getThemeProps-BKaUAPTQ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D0yHXGOG.js";import"./StyledFormControl.styled-BkJbr-Di.js";import"./Toggle-VZ0j2DKw.js";import"./formats-sBod7wm8.js";import"./Dialog-DAXtZNzQ.js";import"./ChevronRight-DusQwXTC.js";import"./TitleWrapper-C8ENnIyi.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-DhIkxi0I.js";import"./Close-D1y_W6Pv.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Db3yE7BY.js";import"./PageHeader-B119jF-l.js";const je={title:"FormFields/FormFieldNumber"},e=({label:o,required:i,prepop:F,prepopData:h,disabled:n,instructionText:m,helperText:p,size:s,placeholder:t,decimalPlaces:a,prefix:l,suffix:d,sign:c})=>{const u=N({data:F?h:{}}),{handleSubmit:y,state:S}=u,P=D.useMemo(()=>[{name:"number",label:o,type:"number",required:i,disabled:n,size:s,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:a,prefix:l,suffix:d,sign:c},helperText:p,instructionText:m}],[o,i,n,s,t,p,m,a,l,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(T,{buttons:j(y),title:"Number Field",fields:P,...u}),r.jsx("pre",{children:JSON.stringify(S,null,"  ")})]})};e.args={...b.args({prepopData:{number:"-1.337"}}),size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={...b.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,g;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
