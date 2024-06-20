import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as j}from"./index-CDs2tPxN.js";import{u as g,F as k}from"./formUtils-CJK8oCl3.js";import{c as l}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import{r as T}from"./storyUtils-ByV2Bsyv.js";import{g as F}from"./getOptions-0PA7i_39.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const Ie={title:"FormFields/FormFieldCheckbox"},t=({label:o,required:i,skeleton:n,disabled:p,instructionText:m,helperText:a,optionsOrigin:s})=>{const c=g(),{state:S,handleSubmit:O}=c,y=j.useMemo(()=>[{name:"checkbox",label:o,type:"checkbox",required:i,disabled:p,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?F:void 0},helperText:a,instructionText:m}],[i,p,o,m,a,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(k,{...c,buttons:T(O),title:"Checkbox Field",fields:y,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const q=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:F},helperText:"Helper Text",instructionText:"InstructionText"}],r=()=>{const o=g(),{state:i,handleSubmit:n}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(k,{...o,buttons:T(n),title:"Form Title",description:"This is a description example",fields:q})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};r.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var d,u,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const _e=["Playground","KitchenSink"];export{r as KitchenSink,t as Playground,_e as __namedExportsOrder,Ie as default};
