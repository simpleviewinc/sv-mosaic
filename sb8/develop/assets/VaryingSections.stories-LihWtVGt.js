import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as _,F as u}from"./formUtils-CZ0W2Uz2.js";import"./Button-Dth3WPw1.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as S}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-Bd74be6I.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-DQAffLtG.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CpDkk29s.js";import"./createSvgIcon-DV_hUcxO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CU1avGbv.js";import"./useTheme-D1npBiLf.js";import"./index-BxmsGmlx.js";import"./index-B05xQjuh.js";import"./CheckboxList-BQ6x_Hvh.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-C56Mz24f.js";import"./FormControlLabel-D-Q_BSJi.js";import"./ButtonBase-Cd1-20QD.js";import"./getThemeProps-DaW1Ssab.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D7zshuFL.js";import"./ButtonRow-WNepJUJ6.js";import"./useToggle-lipGlewK.js";import"./Spinner-BJvuYi3M.js";import"./Chip-CIJzu56h.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-65NVzLMy.js";import"./StyledFormControl.styled-Vy3KCkom.js";import"./Toggle-D0mZyQ2E.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-C1Ge2OOe.js";import"./TitleWrapper-DfdTImyn.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert--g84jLkq.js";import"./ChevronRight-DCOtcHmH.js";import"./PageHeader-BH_G1KhX.js";import"./MenuSelect-Ca8tFfLg.js";import"./useMediaQuery-C-A7lI-2.js";import"./formats-CDjt32hU.js";import"./Dialog-D_7cNnRq.js";import"./SideNav-BrsNz3mT.js";import"./Snackbar-DilGcmOI.js";import"./Close-CngHQLDC.js";import"./ClickAwayListener-DnjBLK-5.js";import"./Blank-JgbFIOSE.js";const Di={title:"Components/Form"},y=document.body.style.margin,e=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,i)=>({name:`field_${i}`,label:`Field ${i}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,i)=>({title:`Section ${i+4}`,description:`Description for section ${i+4}`,collapsed:!0,fields:[[[`field_${i*5+9}`]],[[`field_${i*5+10}`]],[[`field_${i*5+11}`]],[[`field_${i*5+12}`]],[[`field_${i*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
