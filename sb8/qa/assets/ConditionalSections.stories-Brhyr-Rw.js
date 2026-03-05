import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-CDlOlYQx.js";import{u as h,F as y}from"./index-CLN1Uqsu.js";import{r as f}from"./renderButtons-DP0bGf4C.js";import{O as S}from"./dom-BR2PSRFh.js";import"./MosaicContext-Ckn3SYVO.js";import"./ButtonBase-BTOUCkJL.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-CQDqkEyb.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-D9Xlm0gk.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-DiGzPWWk.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-DnZWjXCP.js";import"./index-fPYtWVub.js";import"./Popover-BARbcQa_.js";import"./useTooltip-CvILwQ8N.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-ef-3r2ji.js";import"./createSvgIcon-CpiYeT0y.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-Cf2fXVyQ.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-B1C6YiGY.js";import"./TooltipIcon-CCmwqh__.js";import"./DataViewFilterDropdownButtons-DxJf3FQF.js";import"./FormFieldText.styled-CRryNLjj.js";import"./formControlState-VojGIu4f.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DJjmFJak.js";import"./ExpandMore-C3mveD_C.js";import"./Chip-BzCeYly-.js";import"./DataViewPrimaryFilter.styled-64dlO4D8.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DAZkKGvP.js";import"./PageHeader-CVwaxNeh.js";import"./Spinner-Dd-oad_B.js";import"./CheckboxList-BlEbFa5n.js";import"./Checkbox-65JO9dLp.js";import"./SwitchBase-Cr0Iw5cH.js";import"./StyledOptionFormControl-DVa9h7YW.js";import"./MoreVert-BuMRkz_g.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-DAQJW3QI.js";import"./Snackbar-Bo2ZVk08.js";import"./Close-Dcayhvfb.js";import"./ChipList-DMumVwBB.js";import"./RadioButton-CsJnPFmg.js";import"./Toggle-DXGG91mo.js";import"./Dialog-DXGYH3lr.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-0jIe1PLd.js";import"./CardHeading-c7RPWGjr.js";const Ae={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Fe=["ConditionalSections"];export{t as ConditionalSections,Fe as __namedExportsOrder,Ae as default};
