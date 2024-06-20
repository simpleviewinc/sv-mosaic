import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as C}from"./index-CDs2tPxN.js";import{u as T,F as S}from"./formUtils-CJK8oCl3.js";import{r as y}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const Le={title:"FormFields/FormFieldTextEditor"},t=({label:r,disabled:n,required:o,skeleton:E,instructionText:l,helperText:a,toggleLabel:k,spellcheck:s,direction:m,language:p,maxCharacters:d})=>{const c=T(),{state:F,handleSubmit:q}=c,j=C.useMemo(()=>[{name:"textEditor",label:r,type:"textEditor",required:o,inputSettings:{spellcheck:s,direction:m,language:p,maxCharacters:d},disabled:n,helperText:a,instructionText:l}],[m,o,n,k,r,a,l,d,s,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx(S,{...c,title:"Text Editor Field",fields:j,buttons:y(q),skeleton:E})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle label",spellcheck:!1,direction:"ltr",language:"en",maxCharacters:100};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"},spellcheck:{name:"Direction",control:{type:"select"},options:["ltr","rtl"]},direction:{name:"Direction"},language:{name:"Language"},maxCharacters:{name:"Maximum Characters"}};const L=[{name:"spellCheck",label:"Text editor with spellcheck active",type:"textEditor",required:!1,inputSettings:{spellcheck:!0}},{name:"ltr",label:"Text editor with left to right direction",type:"textEditor",required:!1,inputSettings:{direction:"ltr"}},{name:"rtl",label:"Text editor with right to left direction",type:"textEditor",required:!1,inputSettings:{direction:"rtl"}},{name:"german",label:"Text editor in german (de) language",type:"textEditor",required:!1,inputSettings:{language:"de"}},{name:"maxChars",label:"Text editor with max character limit",type:"textEditor",required:!1,inputSettings:{maxCharacters:20}},{name:"disabled",label:"Disabled text editor",type:"textEditor",required:!1,disabled:!0}],i=()=>{const r=T(),{state:n,handleSubmit:o}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(n,null,"  ")}),e.jsx(S,{...r,title:"Text Editor Kitchen Sink",description:"This is a description example",fields:L,buttons:y(o)})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  instructionText,
  helperText,
  toggleLabel,
  spellcheck,
  direction,
  language,
  maxCharacters
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "textEditor",
    label,
    type: "textEditor",
    required,
    inputSettings: {
      spellcheck,
      direction,
      language,
      maxCharacters
    },
    disabled,
    helperText,
    instructionText
  }], [direction, required, disabled, toggleLabel, label, helperText, instructionText, maxCharacters, spellcheck, language]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Field" fields={fields} buttons={renderButtons(handleSubmit)} skeleton={skeleton} />
        </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Kitchen Sink" description="This is a description example" fields={fields} buttons={renderButtons(handleSubmit)} />
        </>;
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const _e=["Playground","KitchenSink"];export{i as KitchenSink,t as Playground,_e as __namedExportsOrder,Le as default};
