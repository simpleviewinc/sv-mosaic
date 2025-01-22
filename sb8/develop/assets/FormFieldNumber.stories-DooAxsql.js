import{j as r}from"./jsx-runtime-DKBipoO1.js";import{r as S}from"./index-P8U4y8pz.js";import{u as T,F as P}from"./Form-B7eOweAp.js";import{r as k}from"./renderButtons-BmHfsf_z.js";import"./theme-BWODkkBA.js";import"./SideNav-xke3DMVF.js";import"./containerQuery-DJgF-qoV.js";import"./useToggle-L-Qovzra.js";import"./ColorSelected-CjDfVzXw.js";import"./index-Codu9OSz.js";import"./debounce-Z6vH9m7G.js";import"./DataViewPrimaryFilter.styled-Er7etcVt.js";import"./generateUtilityClasses-1sHYEbWh.js";import"./createSvgIcon-DFewkeLR.js";import"./createSvgIcon-RC5eQ6Qp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-wVqIivVs.js";import"./useId-BCEQtGZU.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-DD4Xjs9b.js";import"./Chip-BumaKDUo.js";import"./ButtonBase-BdV3oO8q.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-DYaYF2Hb.js";import"./FormFieldText.styled-Ds1XZvsQ.js";import"./Button-BBMCWwxG.js";import"./Popper-Cd5SEDCW.js";import"./useTheme-C71PTKbl.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./formControlState-ESfXU8N_.js";import"./ButtonRow-BY0Hsyx3.js";import"./Spinner-C3Q2NvqZ.js";import"./Typography-CaRYQLjB.js";import"./SubtitleText-7Wc_VQnd.js";import"./CheckboxList-DWbGDBtu.js";import"./Checkbox-Ss222WpW.js";import"./FormControlLabel-Cz3gWlyw.js";import"./getThemeProps-Dw2gS1Bo.js";import"./TitleWrapper-DHX6T7Lf.js";import"./TitleText-DwGMspTF.js";import"./MoreVert-DYAEDIA7.js";import"./ChevronRight-CLpIxDpq.js";import"./PageHeader-6-4PqPeJ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-JvG0jxKp.js";import"./StyledFormControl.styled-CutdFJBO.js";import"./Toggle-B1w3j-dj.js";import"./formats-sBod7wm8.js";import"./Dialog-COZnJfGx.js";import"./useMediaQuery-CFxK-hux.js";import"./Snackbar-fMG10-ub.js";import"./Close-Z8pEHv17.js";import"./ClickAwayListener-6W73t1nN.js";import"./TooltipIcon-Dfxq7uJG.js";const je={title:"FormFields/FormFieldNumber"},e=({label:i,required:n,skeleton:g,disabled:o,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:u})=>{const c=T(),{handleSubmit:h,state:F}=c,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:n,disabled:o,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:u},helperText:s,instructionText:m}],[i,n,o,l,t,s,m,p,a,d,u]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...c,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
