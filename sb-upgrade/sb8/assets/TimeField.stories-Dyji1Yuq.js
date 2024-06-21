import{j as t}from"./jsx-runtime-qGIIFXMu.js";import{r as l}from"./index-CDs2tPxN.js";import{u as T,F as g}from"./formUtils-8tzQoWfa.js";import{r as y}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-DOD-9_p_.js";import"./theme-tUuL1bpb.js";import"./Button-jXQJtfPH.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselectDropdownContent-BZXK-i7Q.js";import"./CheckboxList-Br5Y5VJF.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-DZF7KNvv.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./debounce-Dt4LOG5H.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./ButtonRow-D8Ypu3LS.js";import"./Spinner-Dq1xuCGl.js";import"./Chip-Myn4TyBR.js";import"./Typography-w5WZckx5.js";import"./SubtitleText-C2xUiS7C.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BlQ08T7l.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-OUlEbIWU.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-C5oUGWlB.js";import"./TitleWrapper-fmXCHZNU.js";import"./containerQuery-BObFYVCA.js";import"./TitleText-B9tXBKHN.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-DaN-rjBH.js";import"./MenuSelect-keHkfgJK.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-DbGAo2Z6.js";import"./SideNav-8ipa58w5.js";import"./Snackbar-B5VFCnwi.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const ke={title:"FormFields/FormFieldTimeField"},e=({label:r,required:o,skeleton:c,disabled:i,instructionText:n,helperText:m,prepopulate:p})=>{const s=T(),{state:x,handleSubmit:F}=s,b=l.useCallback(async()=>({time:p||void 0}),[p]),f=l.useMemo(()=>[{name:"time",type:"time",label:r,required:o,disabled:i,helperText:m,instructionText:n}],[r,o,i,m,n]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(x,null,"  ")}),t.jsx(g,{...s,buttons:y(F),title:"Time Field",fields:f,getFormValues:b,skeleton:c})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepopulate:""};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepopulate:{name:"Prepopulate"}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepopulate
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useCallback(async () => {
    return {
      time: prepopulate || undefined
    };
  }, [prepopulate]);
  const fields = useMemo((): FieldDef[] => [{
    name: "time",
    type: "time",
    label,
    required,
    disabled,
    helperText,
    instructionText
  }], [label, required, disabled, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Time Field" fields={fields} getFormValues={getFormValues} skeleton={skeleton} />
        </>;
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Se=["Playground"];export{e as Playground,Se as __namedExportsOrder,ke as default};
