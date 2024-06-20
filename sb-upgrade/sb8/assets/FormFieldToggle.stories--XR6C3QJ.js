import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as L}from"./index-CDs2tPxN.js";import{u as f,F as T}from"./formUtils-CJK8oCl3.js";import{r as h}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const ke={title:"FormFields/FormFieldToggle"},t=({label:r,required:n,skeleton:i,disabled:l,instructionText:s,helperText:a,toggleLabel:m})=>{const p=f(),{state:F,handleSubmit:S}=p,y=L.useMemo(()=>[{name:"toggle",label:r,type:"toggle",required:n,disabled:l,inputSettings:{toggleLabel:m},helperText:a,instructionText:s}],[n,l,m,r,a,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx(T,{...p,buttons:h(S),title:"Toggle Field",fields:y,skeleton:i})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle Label"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"}};const k=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const r=f(),{state:n,handleSubmit:i}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(n,null,"  ")}),e.jsx(T,{...r,buttons:h(i),title:"Form Title",description:"This is a description example",fields:k})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  toggleLabel
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "toggle",
    label,
    type: "toggle",
    required,
    disabled,
    inputSettings: {
      toggleLabel
    },
    helperText,
    instructionText
  }], [required, disabled, toggleLabel, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Toggle Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var c,b,x;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const je=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,je as __namedExportsOrder,ke as default};
