import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as j}from"./index-CDs2tPxN.js";import{u as g,F as k}from"./formUtils-8tzQoWfa.js";import{c as l}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{g as F}from"./getOptions-BKUPiPPN.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const He={title:"FormFields/FormFieldCheckbox"},t=({label:r,required:o,skeleton:n,disabled:p,instructionText:m,helperText:a,optionsOrigin:s})=>{const c=g(),{state:S,handleSubmit:O}=c,y=j.useMemo(()=>[{name:"checkbox",label:r,type:"checkbox",required:o,disabled:p,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?F:void 0},helperText:a,instructionText:m}],[o,p,r,m,a,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(k,{...c,buttons:T(O),title:"Checkbox Field",fields:y,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const q=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:F},helperText:"Helper Text",instructionText:"InstructionText"}],i=()=>{const r=g(),{state:o,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(k,{...r,buttons:T(n),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
