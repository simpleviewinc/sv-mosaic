import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as o}from"./index-BP8_t0zE.js";import{u as _,F as u}from"./formUtils-D4w1BXP5.js";import{r as S}from"./storyUtils-BoiXCagy.js";import"./FormFieldText.styled-CusvceWb.js";import"./theme-D4oZEIDo.js";import"./Button-CV4WQHOn.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-tCQFe4bJ.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CVnL_KSQ.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-BSB-bEHM.js";import"./createSvgIcon-Ctt9EnSd.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Cxj5u1iW.js";import"./CheckboxList-BqPA3yNH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-_RXYTNJz.js";import"./FormControlLabel-Cy6KcgOl.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import"./ButtonRow-BUuIelsn.js";import"./Spinner-tjn3ihlQ.js";import"./Chip-o_TLrMPM.js";import"./Typography-Bm8mlfoU.js";import"./SubtitleText-A3erhwRa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DC2x7tAZ.js";import"./StyledFormControl.styled-Buznl6wO.js";import"./Toggle-BBqCIk62.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-nTNPRhkz.js";import"./TitleWrapper-XsnYHx4y.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-CFZnrs7C.js";import"./MoreVert-Dt36-imA.js";import"./ChevronRight-CA0RLU_a.js";import"./PageHeader-gEDmJvxs.js";import"./MenuSelect-3weukW5x.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-BnTyqaE_.js";import"./SideNav-BixOpWCF.js";import"./Snackbar-VggVBkSJ.js";import"./Close-DUapGJLS.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";const he={title:"Components/Form"},y=document.body.style.margin,i=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,e)=>({name:`field_${e}`,label:`Field ${e}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,e)=>({title:`Section ${e+4}`,description:`Description for section ${e+4}`,collapsed:!0,fields:[[[`field_${e*5+9}`]],[[`field_${e*5+10}`]],[[`field_${e*5+11}`]],[[`field_${e*5+12}`]],[[`field_${e*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};i.args={showState:!1};i.argTypes={showState:{name:"Show state"}};var r,s,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
