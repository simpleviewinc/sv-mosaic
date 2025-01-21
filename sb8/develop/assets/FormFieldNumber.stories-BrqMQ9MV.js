import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as S}from"./index-BP8_t0zE.js";import{u as T,F as P}from"./Form-DI4diVc8.js";import{r as k}from"./renderButtons-BmHfsf_z.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./index-CV8e2Lol.js";import"./debounce-CHvAeqRr.js";import"./DataViewPrimaryFilter.styled-auwRvG8E.js";import"./generateUtilityClasses-kMkq-zAT.js";import"./createSvgIcon-Pzp5yWPs.js";import"./createSvgIcon-BcZTMgP9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Chip-CRqL1Gcl.js";import"./ButtonBase-BP_P9WLq.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-CZCb37QS.js";import"./FormFieldText.styled-Cq8lzkgl.js";import"./Button-DuMlbF8s.js";import"./Popper-BWFpCfKc.js";import"./useTheme-Cud-ikZw.js";import"./index-BxmsGmlx.js";import"./formControlState-DyMXFR7f.js";import"./ButtonRow-CP4CrsnB.js";import"./Spinner-Dfqcw6pF.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./CheckboxList-DjNmes3Y.js";import"./Checkbox-D_4gEYtK.js";import"./FormControlLabel-f9znFBMA.js";import"./getThemeProps-BVsvmf2Q.js";import"./sizes-C6oSOElx.js";import"./RadioButton-q7Nz9IFm.js";import"./StyledFormControl.styled-BDgwaEEo.js";import"./Toggle-aOIYV_sD.js";import"./ColorSelected-DERcqfqY.js";import"./TitleWrapper-CYciWRcJ.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-gv79E1WA.js";import"./ChevronRight-bPXdPGpY.js";import"./PageHeader-DvUko4so.js";import"./formats-sBod7wm8.js";import"./Dialog-BI8WLJ8j.js";import"./useMediaQuery-Bupge7Mj.js";import"./Snackbar-BF1WUGPv.js";import"./Close-CC6bEs2P.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-Bg8I7hop.js";const Ne={title:"FormFields/FormFieldNumber"},e=({label:i,required:o,skeleton:g,disabled:n,instructionText:m,helperText:s,size:l,placeholder:t,decimalPlaces:p,prefix:a,suffix:d,sign:c})=>{const u=T(),{handleSubmit:h,state:F}=u,y=S.useMemo(()=>[{name:"numberfield",label:i,type:"number",required:o,disabled:n,size:l,inputSettings:{placeholder:t===""?void 0:t,decimalPlaces:p,prefix:a,suffix:d,sign:c},helperText:s,instructionText:m}],[i,o,n,l,t,s,m,p,a,d,c]);return r.jsxs(r.Fragment,{children:[r.jsx(P,{buttons:k(h),title:"Number Field",fields:y,...u,skeleton:g}),r.jsx("pre",{children:JSON.stringify(F,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",placeholder:"placeholder",decimalPlaces:-1,prefix:"",suffix:"",sign:"any"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"},decimalPlaces:{name:"Decimal Places"},prefix:{name:"Prefix"},suffix:{name:"Suffix"},sign:{name:"Sign",control:{type:"select"},options:["any","positive","negative"]}};var f,x,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(b=(x=e.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const je=["Playground"];export{e as Playground,je as __namedExportsOrder,Ne as default};
