import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as _,F as u}from"./index-CLK0-CYa.js";import{r as S}from"./renderButtons-DP0bGf4C.js";import"./styled-components.browser.esm-D9jdcGim.js";import"./sizes-xhpoGYFi.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-CwhNcCW5.js";import"./Button-B-HROxGS.js";import"./identifier-P2c7yk_w.js";import"./generateUtilityClasses-Cqx37_87.js";import"./ButtonBase-B88uyuTX.js";import"./useIsFocusVisible-DX7TaDmt.js";import"./index-Cp34SjbI.js";import"./Popper-C2xxNeyp.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-VJaTxDNw.js";import"./useThemeWithoutDefault-BBWH5Z3d.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-eQe_EJj5.js";import"./createSvgIcon-1nOp1Fw5.js";import"./createSvgIcon-yORtlijU.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DqP6CXHW.js";import"./DisplayText-DfbYD38Q.js";import"./ButtonRow-ZsYtcJma.js";import"./toNumber-BAVDMXIx.js";import"./useMosaicTranslation-YU7EdNRi.js";import"./DataViewFilterDropdownButtons-BXJT_S1t.js";import"./index-hRodqjB9.js";import"./ExpandMore-p_Fviusb.js";import"./Chip-CPY2CdPS.js";import"./CheckboxList-BiSNtdOb.js";import"./Checkbox-CcPIMNpv.js";import"./StyledOptionFormControl-DrwUDyOs.js";import"./formControlState-DKpu4qdP.js";import"./Text-Cy3-d4Dq.js";import"./DataViewPrimaryFilter.styled-WHVNyTxG.js";import"./PickerPanel-LujK0zY6.js";import"./PageHeader-Maf0ecTd.js";import"./FormFieldText.styled-CreleCMn.js";import"./Spinner-C3xVyrtB.js";import"./MoreVert-CCwGH32Y.js";import"./formats-CMvQHWsT.js";import"./Snackbar-q2Sdad91.js";import"./Close-a0rXqC-u.js";import"./ClickAwayListener-Dv_hDxFo.js";import"./ChipList-CxVqxH3S.js";import"./RadioButton-B3r_znDd.js";import"./Toggle-D8WoBZhC.js";import"./Dialog-CQAKZUUh.js";import"./ThemeProvider-DOMyClwG.js";import"./SideNav-D5yCMd23.js";const Di={title:"Components/Form"},y=document.body.style.margin,e=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,i)=>({name:`field_${i}`,label:`Field ${i}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,i)=>({title:`Section ${i+4}`,description:`Description for section ${i+4}`,collapsed:!0,fields:[[[`field_${i*5+9}`]],[[`field_${i*5+10}`]],[[`field_${i*5+11}`]],[[`field_${i*5+12}`]],[[`field_${i*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const xi=["VaryingSections"];export{e as VaryingSections,xi as __namedExportsOrder,Di as default};
