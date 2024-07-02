import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as j}from"./index-BP8_t0zE.js";import{u as g,F as k}from"./formUtils-BR5ocB9f.js";import{c as l}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{g as F}from"./getOptions-nrnLasDJ.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const He={title:"FormFields/FormFieldCheckbox"},t=({label:r,required:o,skeleton:n,disabled:p,instructionText:m,helperText:a,optionsOrigin:s})=>{const c=g(),{state:S,handleSubmit:O}=c,y=j.useMemo(()=>[{name:"checkbox",label:r,type:"checkbox",required:o,disabled:p,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?F:void 0},helperText:a,instructionText:m}],[o,p,r,m,a,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(k,{...c,buttons:T(O),title:"Checkbox Field",fields:y,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const q=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:F},helperText:"Helper Text",instructionText:"InstructionText"}],i=()=>{const r=g(),{state:o,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(k,{...r,buttons:T(n),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  optionsOrigin
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => ([{
    name: "checkbox",
    label,
    type: "checkbox",
    required,
    disabled,
    inputSettings: {
      options: optionsOrigin === "Local" ? checkboxOptions : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    },
    helperText,
    instructionText
  }] as FieldDef[]), [required, disabled, label, instructionText, helperText, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,h,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const Ie=["Playground","KitchenSink"];export{i as KitchenSink,t as Playground,Ie as __namedExportsOrder,He as default};
