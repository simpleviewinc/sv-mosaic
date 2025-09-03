import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as _,F as u}from"./index-B4r44Pjp.js";import{r as S}from"./renderButtons-DP0bGf4C.js";import"./ExpandMore-Ca3pe8z0.js";import"./identifier-DOqdnZ6L.js";import"./sizes-DkIXWPpc.js";import"./createSvgIcon-DDyBApXB.js";import"./createSvgIcon-C3PpPknf.js";import"./generateUtilityClasses-BL8vvUJw.js";import"./styled-components.browser.esm-8X0uN6v9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./ButtonBase-O4ZQd6U4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./MosaicContext-Y61KIvFP.js";import"./FormFieldText.styled-e8Bs0syX.js";import"./formControlState-BI4toe_X.js";import"./Popper-CeYJ7yNz.js";import"./useTheme-CJVJa3gz.js";import"./useThemeWithoutDefault-BQF-0HLi.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./Button-CyFYeSR6.js";import"./index-CYsLg4TE.js";import"./useToggle-CTbnrs6g.js";import"./testIds-oQNwr1rf.js";import"./TitleWrapper-DK3mQSoI.js";import"./containerQuery-CYj0-5X2.js";import"./ChevronLeft-Bjv82Anv.js";import"./Typography-CZQzWHyE.js";import"./DisplayText-DLjAy6kH.js";import"./ButtonRow-DJBG-tfi.js";import"./DataViewFilterDropdownButtons-B-4fHIWu.js";import"./StyledPopperPaper-BODJ-ail.js";import"./index-8mKnpAWh.js";import"./Chip-CuRU8A0j.js";import"./DataViewPrimaryFilter.styled-EiL82tvk.js";import"./Badge-D14GCFVi.js";import"./Text-BjwqtcAz.js";import"./PickerPanel-DqRiB1vB.js";import"./PageHeader-CcTtabNf.js";import"./Spinner-BATOmOoB.js";import"./CheckboxList-Dtr7xjiR.js";import"./Checkbox-Be3Yhveb.js";import"./StyledOptionFormControl-Br1jmfxi.js";import"./MoreVert-BAJenQd7.js";import"./stable-CpItcOrb.js";import"./throws-DLZ75Q5e.js";import"./formats-CMvQHWsT.js";import"./Snackbar-BY140rqK.js";import"./Close-DizofMnI.js";import"./ClickAwayListener-Cp7Ry44a.js";import"./ChipList-Bjx88ODE.js";import"./RadioButton-DplP-WlB.js";import"./Toggle-BL_WBRmO.js";import"./Dialog-zScg2qCO.js";import"./ThemeProvider-CFABLTDy.js";import"./SideNav-BRHRM8UV.js";const wi={title:"Components/Form"},y=document.body.style.margin,e=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,i)=>({name:`field_${i}`,label:`Field ${i}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,i)=>({title:`Section ${i+4}`,description:`Description for section ${i+4}`,collapsed:!0,fields:[[[`field_${i*5+9}`]],[[`field_${i*5+10}`]],[[`field_${i*5+11}`]],[[`field_${i*5+12}`]],[[`field_${i*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  showState
}: typeof VaryingSections.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [...Array(80).fill(null).map<FieldDef>((_, i) => ({
    name: \`field_\${i}\`,
    label: \`Field \${i}\`,
    type: "text"
  }))], []);
  const sections = useMemo(() => [{
    title: "Section 1",
    description: "Description for section 1",
    collapsed: true,
    fields: [
    // row 1
    [["field_1"]], [["field_2"]]]
  }, {
    title: "Section 2",
    description: "Description for section 2",
    collapsed: false,
    fields: [
    // row 1
    [["field_3"]]]
  }, {
    title: "Section 3",
    description: "Description for section 3",
    collapsed: false,
    fields: [
    // row 1
    [["field_4"]], [["field_5"]], [["field_6"]], [["field_7"]], [["field_8"]]]
  }, ...Array(10).fill(null).map((_, i) => ({
    title: \`Section \${i + 4}\`,
    description: \`Description for section \${i + 4}\`,
    collapsed: true,
    fields: [
    // row 1
    [[\`field_\${i * 5 + 9}\`]], [[\`field_\${i * 5 + 10}\`]], [[\`field_\${i * 5 + 11}\`]], [[\`field_\${i * 5 + 12}\`]], [[\`field_\${i * 5 + 13}\`]]]
  })), {
    title: "Section 14",
    description: "Description for section 14",
    collapsed: false,
    fields: [
    // row 1
    [["field_59"]], [["field_60"]], [["field_61"]], [["field_62"]], [["field_63"]]]
  }, {
    title: "Section 15",
    description: "Description for section 15",
    collapsed: false,
    fields: [
    // row 1
    [["field_64"]]]
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Varying Sections" fields={fields} sections={sections} />
            </div>
        </>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Fi=["VaryingSections"];export{e as VaryingSections,Fi as __namedExportsOrder,wi as default};
