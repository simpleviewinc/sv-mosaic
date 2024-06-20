import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r}from"./index-CDs2tPxN.js";import{u as h,F as y}from"./formUtils-CJK8oCl3.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{O as S}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";const we={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};t.__docgenInfo={description:"",methods:[],displayName:"ConditionalSections"};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
  showState
}: typeof ConditionalSections.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const KEY_PHRASE = "SHOW";
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const sections = useMemo<SectionDef[]>(() => {
    return [{
      title: "Section 1",
      description: "Description for section 1",
      fields: [
      // row 1
      [["dependency"]],
      // row 2
      [["section_show"]]]
    }, {
      title: "Section 2",
      description: "Description for section 2",
      fields: [[["dependent"]]],
      show: ({
        data
      }) => data?.dependency === KEY_PHRASE && data?.section_show
    }];
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "dependency",
    label: "Dependency",
    type: "text",
    instructionText: \`Type "\${KEY_PHRASE}" to show another field\`,
    required: true
  }, {
    name: "section_show",
    label: "Show another section",
    type: "toggle",
    show: ({
      data
    }) => {
      return data?.dependency === KEY_PHRASE;
    }
  }, {
    name: "dependent",
    label: "Dependent",
    type: "text",
    required: true
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Runtime behaviors" fields={fields} sections={sections} />
            </div>
        </>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const _e=["ConditionalSections"];export{t as ConditionalSections,_e as __namedExportsOrder,we as default};
