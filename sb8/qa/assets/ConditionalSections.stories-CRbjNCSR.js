import{j as n}from"./jsx-runtime-EKYJJIwR.js";import{r}from"./index-D0AnReJb.js";import{u as h,F as y}from"./index-CNkl0l2T.js";import{r as f}from"./renderButtons-DP0bGf4C.js";import{O as S}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-BKXNnpj0.js";import"./TitleWrapper-BiC1Wb-5.js";import"./Button-D5Mq00Ds.js";import"./identifier-Bktyv6O_.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./ButtonBase-CyOgbtoj.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./index-R4Jqw3Tw.js";import"./Popover-B_lFWVkj.js";import"./Popper-B65p2oiP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Daljk49C.js";import"./toNumber-DqzDMBhJ.js";import"./useMosaicTranslation-di9nduwf.js";import"./DataViewFilterDropdownButtons-B_FGX-fS.js";import"./index-D77a6n9L.js";import"./ExpandMore-Dl7LJMh2.js";import"./Chip-DNwtmRHZ.js";import"./CheckboxList-DDeK_q7o.js";import"./Checkbox-_0JQhlIl.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./formControlState-BI4toe_X.js";import"./Text-ChOjGkiI.js";import"./DataViewPrimaryFilter.styled-BORqmM8y.js";import"./PickerPanel-DZf3nPrH.js";import"./PageHeader-DbhT7nzS.js";import"./FormFieldText.styled-CJUQilOD.js";import"./Spinner-m5_IcvNq.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DaK7yvE3.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-BAGapJVE.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-DNhIGYb9.js";import"./Dialog-DofFNcAh.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";const Ee={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Re=["ConditionalSections"];export{t as ConditionalSections,Re as __namedExportsOrder,Ee as default};
