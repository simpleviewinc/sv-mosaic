import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as _,F as u}from"./index-CskZx9qi.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import"./styled-components.browser.esm-CXkPWv0m.js";import"./sizes-C0LBJJ09.js";import"./testIds-Dso8kRSM.js";import"./TitleWrapper-UbmTdAF_.js";import"./Button-DaAMSO0F.js";import"./DefaultPropsProvider-Zw7se0ql.js";import"./generateUtilityClasses-CVch8Fxh.js";import"./ButtonBase-CDkrym0l.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-BnPRUgpe.js";import"./Popper-DGZlEdwR.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-Bm22bs_q.js";import"./useThemeWithoutDefault-DxXNdoSH.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-CBh3xxKQ.js";import"./createSvgIcon-CfA1Cyex.js";import"./createSvgIcon-18YkCsWd.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Reib778S.js";import"./TitleText-BuZN1QQA.js";import"./ButtonRow-C029PRKt.js";import"./index-BfP4QUlu.js";import"./debounce-D-BUC-g1.js";import"./DataViewPrimaryFilter.styled-DRsOHDYs.js";import"./Chip-IkNXxPJK.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./FormFieldText.styled-DrsxdApR.js";import"./formControlState-CAqH4-hG.js";import"./Spinner-D4T0rUK9.js";import"./SubtitleText-DmGUl5wt.js";import"./CheckboxList-DghwUsPs.js";import"./Checkbox-BscruA8m.js";import"./FormControlLabel-4CniAqEL.js";import"./MoreVert-CApM3moX.js";import"./ChevronRight-foCHf73R.js";import"./PageHeader-vRr5zj4B.js";import"./formats-CMvQHWsT.js";import"./RadioButton-CLTmy9-q.js";import"./StyledFormControl.styled-B0T8LICC.js";import"./Toggle-dI05S_-G.js";import"./Dialog-B6RaYDcJ.js";import"./ThemeProvider-CGOYeIs4.js";import"./ChipList-DNkGOHFk.js";import"./SideNav-DJ_5--ll.js";import"./Snackbar-DaPPPHaq.js";import"./Close-4ToqfvgU.js";import"./ClickAwayListener-Dkkr5f_-.js";const he={title:"Components/Form"},y=document.body.style.margin,i=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,e)=>({name:`field_${e}`,label:`Field ${e}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,e)=>({title:`Section ${e+4}`,description:`Description for section ${e+4}`,collapsed:!0,fields:[[[`field_${e*5+9}`]],[[`field_${e*5+10}`]],[[`field_${e*5+11}`]],[[`field_${e*5+12}`]],[[`field_${e*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};i.args={showState:!1};i.argTypes={showState:{name:"Show state"}};var r,s,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const De=["VaryingSections"];export{i as VaryingSections,De as __namedExportsOrder,he as default};
