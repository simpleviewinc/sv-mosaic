import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as T}from"./index-CDs2tPxN.js";import{u as x,F as b}from"./formUtils-CJK8oCl3.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{s as y}from"./theme-tUuL1bpb.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const S=y.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`,je={title:"FormFields/FormFieldRaw"};function w(){return e.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}async function R(){return{raw:e.jsx(w,{})}}const t=({label:r,required:i,disabled:n,instructionText:l,helperText:s})=>{const a=x(),{handleSubmit:h}=a,F=T.useMemo(()=>[{name:"raw",label:r,type:"raw",required:i,disabled:n,helperText:s,instructionText:l}],[i,n,r,s,l]);return e.jsx(e.Fragment,{children:e.jsx(b,{...a,buttons:f(h),title:"Raw Field",fields:F,getFormValues:R})})},j=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}];t.args={label:"Label",disabled:!1,required:!1,instructionText:"Instruction text",helperText:"Helper text"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"}};const o=()=>{const r=x(),{state:i,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(b,{...r,buttons:f(n),title:"Form Title",description:"This is a description example",fields:j})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "raw",
    label,
    type: "raw",
    required,
    disabled,
    helperText,
    instructionText
  }], [required, disabled, label, helperText, instructionText]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Raw Field" fields={fields} getFormValues={getFormValues} />
        </>;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const qe=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,qe as __namedExportsOrder,je as default};
