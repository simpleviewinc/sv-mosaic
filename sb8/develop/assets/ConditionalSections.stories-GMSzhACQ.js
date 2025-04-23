import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r}from"./index-DDfD_3TG.js";import{u as h,F as y}from"./Form-EIXaRtfg.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as S}from"./utils-BR2PSRFh.js";import"./theme-DWrYR5Gu.js";import"./SideNav-CvsHqpPT.js";import"./containerQuery-XietOkEy.js";import"./useToggle-BK_3QGB6.js";import"./Button-_6SRCSsN.js";import"./generateUtilityClasses-Dav9K5Jg.js";import"./ButtonBase-B3sVjXKq.js";import"./useIsFocusVisible-DxTeNLkh.js";import"./Popper-BFIFukJ-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BjWv6DhY.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./index-BpD74PYt.js";import"./debounce-G1u4Gy2U.js";import"./DataViewPrimaryFilter.styled-DOEMDM8r.js";import"./createSvgIcon-ryN2wBPb.js";import"./createSvgIcon-Bc8E_7Df.js";import"./useId-C6ulm9BR.js";import"./useControlled-0MmPqhal.js";import"./Chip-TPBsYk2z.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CCZzHAOs.js";import"./DataViewFilterDropdown-D8zsAVgS.js";import"./formControlState-D0eomaiA.js";import"./ButtonRow-5AdSMJlC.js";import"./Spinner-D0BoAIGc.js";import"./Typography-DhgnvJ03.js";import"./SubtitleText-DyATjJCY.js";import"./CheckboxList-DKZDPSzE.js";import"./Checkbox-CL37ymQB.js";import"./FormControlLabel-D-u7WmCt.js";import"./getThemeProps-DXoot0qR.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D-T1QIB0.js";import"./StyledFormControl.styled-pfNyCqn0.js";import"./Toggle-BjiP2rWg.js";import"./formats-sBod7wm8.js";import"./Dialog-CyXhuKHl.js";import"./ChevronRight-BWmUBWCy.js";import"./TitleWrapper-CEGR9Ons.js";import"./TitleText-B4ASHioH.js";import"./Snackbar-Bslrzt6A.js";import"./Close-BnT1QDqQ.js";import"./ClickAwayListener-MSE9i65R.js";import"./MoreVert-cizeWCO8.js";import"./PageHeader-SBBckNNB.js";const Se={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const we=["ConditionalSections"];export{t as ConditionalSections,we as __namedExportsOrder,Se as default};
