import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r}from"./index-D0AnReJb.js";import{u as h,F as y}from"./index-xUlmrCO2.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as S}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-B06rF3P8.js";import"./sizes-HwDk6ODv.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-DbGdO_qH.js";import"./Button-Bb1YkNRl.js";import"./DefaultPropsProvider-DAx12mnL.js";import"./generateUtilityClasses-B-YHycAP.js";import"./ButtonBase-DI0zIr47.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-DJOBlCMp.js";import"./Popper-DwGs7ij-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-CEnrwtsk.js";import"./useThemeWithoutDefault-_krlN3OB.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-BgNGRgoI.js";import"./createSvgIcon-SiNoGNLO.js";import"./createSvgIcon-Dpio520k.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-CaKiXxBh.js";import"./DisplayText-p-dXd17y.js";import"./ButtonRow-o01CmugY.js";import"./index-Cx_oxk9s.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DOv3O6Qd.js";import"./Chip-CxjPie9P.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-1uP8QWr0.js";import"./formControlState-Cf1KMWlV.js";import"./Spinner-Bh-LCVD3.js";import"./Text-SN-dsdu2.js";import"./CheckboxList-M1uSKKL_.js";import"./Checkbox-B7o2aMoG.js";import"./FormControlLabel-DHYheffG.js";import"./MoreVert-Bzx_zck9.js";import"./ChevronRight-C0GgObWN.js";import"./PageHeader-smgljVMb.js";import"./formats-CMvQHWsT.js";import"./RadioButton-D8tkv9AU.js";import"./StyledFormControl.styled-BUp5Nrjc.js";import"./Toggle-BqCsCBy-.js";import"./Dialog-B-sGlfn4.js";import"./ThemeProvider-xpJBffxI.js";import"./ChipList-BIFBiti5.js";import"./SideNav-CRhfVc2i.js";import"./Snackbar-BrqHKIPs.js";import"./Close-ClEuQas1.js";import"./ClickAwayListener-Dkkr5f_-.js";const ge={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xe=["ConditionalSections"];export{t as ConditionalSections,xe as __namedExportsOrder,ge as default};
