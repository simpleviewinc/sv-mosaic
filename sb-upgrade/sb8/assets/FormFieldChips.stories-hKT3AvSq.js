import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as f}from"./index-CDs2tPxN.js";import{u as S,F as T}from"./formUtils-8tzQoWfa.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{g as O}from"./getOptions-BKUPiPPN.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const je={title:"FormFields/FormFieldChips"},s=[{label:"Option 1",value:"Option_1"},{label:"Option 2",value:"Option_2"},{label:"Option 3",value:"Option_3"}],t=({label:n,required:i,skeleton:l,disabled:r,instructionText:a,helperText:m,optionsOrigin:p})=>{const u=S(),{state:y,handleSubmit:q}=u,R=f.useMemo(()=>[{label:n,helperText:m,instructionText:a,required:i,disabled:r,name:"Form Field Chip Single Select",type:"chip",inputSettings:{options:p==="Local"?s:void 0,getOptions:p==="DB"?O:void 0}}],[n,m,a,i,r,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(T,{...u,buttons:F(q),title:"Chips Field",fields:R,skeleton:l})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const o=()=>{const n=S(),{state:i,handleSubmit:l}=n,r=f.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:O},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(T,{...n,buttons:F(l),title:"Form Regular Example",description:"This is a description example",fields:r})]})};var d,c,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
    label,
    helperText,
    instructionText,
    required,
    disabled,
    name: "Form Field Chip Single Select",
    type: "chip",
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    }
  }] as FieldDef[]), [label, helperText, instructionText, required, disabled, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(x=(c=t.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var h,b,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "chipRegular",
    label: "Regular example",
    type: "chip",
    required: false,
    disabled: false,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipDisable",
    label: "Disable example",
    type: "chip",
    required: false,
    disabled: true,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipRequired",
    label: "Required example",
    type: "chip",
    required: true,
    disabled: false,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipDB",
    label: "From data base options example",
    type: "chip",
    required: false,
    disabled: false,
    inputSettings: {
      getOptions
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }], []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Regular Example" description="This is a description example" fields={fields} />
        </>;
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const ke=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,ke as __namedExportsOrder,je as default};
