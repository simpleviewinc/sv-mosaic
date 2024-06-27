import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as l}from"./index-BP8_t0zE.js";import{u as T,F as g}from"./formUtils-Cwo6y43K.js";import{r as y}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-ThfS-v4H.js";import"./theme-CtvfJOCv.js";import"./Button-DMdypOK9.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-fIPREOsz.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-Bf0hMbCe.js";import"./Spinner-BPM3b5sV.js";import"./Chip-CChbwJpA.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-54UVCBuA.js";import"./TitleWrapper-iXKWJO9P.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-Ck68ugi1.js";import"./MenuSelect-B7Q44GLs.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-DGV3Cnhk.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-DH51ksEg.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const ke={title:"FormFields/FormFieldTimeField"},e=({label:r,required:o,skeleton:c,disabled:i,instructionText:n,helperText:m,prepopulate:p})=>{const s=T(),{state:x,handleSubmit:F}=s,b=l.useCallback(async()=>({time:p||void 0}),[p]),f=l.useMemo(()=>[{name:"time",type:"time",label:r,required:o,disabled:i,helperText:m,instructionText:n}],[r,o,i,m,n]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(x,null,"  ")}),t.jsx(g,{...s,buttons:y(F),title:"Time Field",fields:f,getFormValues:b,skeleton:c})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepopulate:""};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepopulate:{name:"Prepopulate"}};var a,u,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
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
