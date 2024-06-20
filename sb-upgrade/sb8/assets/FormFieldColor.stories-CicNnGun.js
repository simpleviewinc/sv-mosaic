import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as b}from"./index-CDs2tPxN.js";import{u as f,F as h}from"./formUtils-CJK8oCl3.js";import{r as g}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const xe={title:"FormFields/FormFieldColor"},r=({label:o,required:i,skeleton:l,disabled:n})=>{const s=f(),{state:y,handleSubmit:F}=s,x=b.useMemo(()=>[{name:"color",label:o,type:"color",required:i,disabled:n}],[o,i,n]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...s,buttons:g(F),title:"Color Field",fields:x,skeleton:l})})]})};r.args={label:"Label",disabled:!1,required:!1,skeleton:!1};r.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"}};const t=()=>{const o=f(),{state:i,handleSubmit:l}=o,n=b.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...o,buttons:g(l),title:"Form Title",description:"This is a description example",fields:n})})]})};r.__docgenInfo={description:"",methods:[],displayName:"Playground"};t.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "color",
    label,
    type: "color",
    required,
    disabled
  }], [label, required, disabled]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Color Field" fields={fields} skeleton={skeleton} />
            </div>
        </>;
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,c,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo(() => ([{
    name: "color",
    label: "Regular Example",
    type: "color",
    required: false,
    disabled: false
  }, {
    name: "colorDisabled",
    label: "Disabled Example",
    type: "color",
    required: false,
    disabled: true
  }] as FieldDef[]), []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
            </div>
        </>;
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const Se=["Playground","KitchenSink"];export{t as KitchenSink,r as Playground,Se as __namedExportsOrder,xe as default};
