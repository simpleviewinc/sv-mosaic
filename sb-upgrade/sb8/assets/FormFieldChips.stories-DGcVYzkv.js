import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as f}from"./index-CDs2tPxN.js";import{u as S,F as T}from"./formUtils-CJK8oCl3.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{g as y}from"./getOptions-0PA7i_39.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const Ie={title:"FormFields/FormFieldChips"},s=[{label:"Option 1",value:"Option_1"},{label:"Option 2",value:"Option_2"},{label:"Option 3",value:"Option_3"}],t=({label:n,required:r,skeleton:l,disabled:o,instructionText:a,helperText:m,optionsOrigin:p})=>{const d=S(),{state:O,handleSubmit:q}=d,R=f.useMemo(()=>[{label:n,helperText:m,instructionText:a,required:r,disabled:o,name:"Form Field Chip Single Select",type:"chip",inputSettings:{options:p==="Local"?s:void 0,getOptions:p==="DB"?y:void 0}}],[n,m,a,r,o,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(T,{...d,buttons:F(q),title:"Chips Field",fields:R,skeleton:l})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const i=()=>{const n=S(),{state:r,handleSubmit:l}=n,o=f.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:s},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:y},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(T,{...n,buttons:F(l),title:"Form Regular Example",description:"This is a description example",fields:o})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var u,c,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(x=(c=t.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var h,b,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const He=["Playground","KitchenSink"];export{i as KitchenSink,t as Playground,He as __namedExportsOrder,Ie as default};
