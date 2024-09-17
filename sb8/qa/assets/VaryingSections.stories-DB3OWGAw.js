import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as _,F as u}from"./formUtils-Chz1BKzT.js";import"./Button-nZpOdxAh.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as S}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-Dy7YdaNR.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-Bq4SLC4n.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CLmY5moR.js";import"./createSvgIcon-CYUKOE7w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-DKfV5JUa.js";import"./useTheme-JcVqJUPL.js";import"./index-BxmsGmlx.js";import"./index-D3nDZNMY.js";import"./CheckboxList-vtqXYb3p.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DlKnOsMd.js";import"./FormControlLabel-CADsa67j.js";import"./ButtonBase-B9MACyLv.js";import"./getThemeProps-DQ8M-aLx.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-BbvqwW3v.js";import"./ButtonRow-mHN3ze0L.js";import"./useToggle-lipGlewK.js";import"./Spinner-BweMUiuT.js";import"./Chip-CULEVs9E.js";import"./Typography-cUIkDVC5.js";import"./SubtitleText-BtBCMBDH.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CQ27sEkY.js";import"./StyledFormControl.styled-CjmTklcO.js";import"./Toggle-Nou3pw5b.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-tvyFmnDf.js";import"./TitleWrapper-BMh3rxDx.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-DWruTFKQ.js";import"./MoreVert-LCJpouIh.js";import"./ChevronRight-ClDk1Oir.js";import"./PageHeader-BKvpMOBE.js";import"./MenuSelect-DW9Vb27W.js";import"./formats-CDjt32hU.js";import"./Dialog-oIWE6RL0.js";import"./useMediaQuery-BRf2ARoC.js";import"./SideNav-BjSBl4fN.js";import"./Snackbar-WG1ScYsF.js";import"./Close-BZa28Lj1.js";import"./ClickAwayListener-C0tzoxWy.js";import"./Blank-Ci2z0OwS.js";const Di={title:"Components/Form"},y=document.body.style.margin,e=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,i)=>({name:`field_${i}`,label:`Field ${i}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,i)=>({title:`Section ${i+4}`,description:`Description for section ${i+4}`,collapsed:!0,fields:[[[`field_${i*5+9}`]],[[`field_${i*5+10}`]],[[`field_${i*5+11}`]],[[`field_${i*5+12}`]],[[`field_${i*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
