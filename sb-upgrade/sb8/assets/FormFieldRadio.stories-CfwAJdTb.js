import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as _}from"./index-CDs2tPxN.js";import{r as h}from"./storyUtils-ByV2Bsyv.js";import{u as F,F as S}from"./formUtils-CJK8oCl3.js";import{g as T}from"./getOptions-0PA7i_39.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const qe={title:"FormFields/FormFieldRadio"},l=[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Label 3",value:"label_3"}],t=({label:r,required:o,skeleton:n,disabled:a,instructionText:p,helperText:m,optionsOrigin:s})=>{const d=F(),{state:y,handleSubmit:O}=d,k=_.useMemo(()=>[{name:"radio",label:r,type:"radio",required:o,disabled:a,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?T:void 0},helperText:m,instructionText:p}],[r,o,a,p,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(S,{...d,buttons:h(O),title:"Radio Field",fields:k,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const R=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:T},helperText:"Helper text",instructionText:"Instruction text"}],i=()=>{const r=F(),{state:o,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(S,{...r,buttons:h(n),title:"Form Title",description:"This is a description example",fields:R})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var c,u,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var x,g,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const Le=["Playground","KitchenSink"];export{i as KitchenSink,t as Playground,Le as __namedExportsOrder,qe as default};
