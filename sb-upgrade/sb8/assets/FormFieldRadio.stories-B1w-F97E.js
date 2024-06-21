import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as R}from"./index-CDs2tPxN.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{u as h,F as S}from"./formUtils-8tzQoWfa.js";import{g as T}from"./getOptions-BKUPiPPN.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const _e={title:"FormFields/FormFieldRadio"},l=[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Label 3",value:"label_3"}],t=({label:r,required:i,skeleton:n,disabled:a,instructionText:p,helperText:m,optionsOrigin:s})=>{const d=h(),{state:O,handleSubmit:y}=d,k=R.useMemo(()=>[{name:"radio",label:r,type:"radio",required:i,disabled:a,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?T:void 0},helperText:m,instructionText:p}],[r,i,a,p,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(S,{...d,buttons:F(y),title:"Radio Field",fields:k,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const j=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:T},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const r=h(),{state:i,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(S,{...r,buttons:F(n),title:"Form Title",description:"This is a description example",fields:j})]})};var u,c,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
    name: "radio",
    label,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    },
    helperText,
    instructionText
  }] as FieldDef[]), [label, required, disabled, instructionText, helperText, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ve=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,ve as __namedExportsOrder,_e as default};
