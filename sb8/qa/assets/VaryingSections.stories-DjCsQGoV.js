import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as _,F as u}from"./Form-DI4diVc8.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./index-CV8e2Lol.js";import"./debounce-CHvAeqRr.js";import"./DataViewPrimaryFilter.styled-auwRvG8E.js";import"./generateUtilityClasses-kMkq-zAT.js";import"./createSvgIcon-Pzp5yWPs.js";import"./createSvgIcon-BcZTMgP9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Chip-CRqL1Gcl.js";import"./ButtonBase-BP_P9WLq.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-CZCb37QS.js";import"./FormFieldText.styled-Cq8lzkgl.js";import"./Button-DuMlbF8s.js";import"./Popper-BWFpCfKc.js";import"./useTheme-Cud-ikZw.js";import"./index-BxmsGmlx.js";import"./formControlState-DyMXFR7f.js";import"./ButtonRow-CP4CrsnB.js";import"./Spinner-Dfqcw6pF.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./CheckboxList-DjNmes3Y.js";import"./Checkbox-D_4gEYtK.js";import"./FormControlLabel-f9znFBMA.js";import"./getThemeProps-BVsvmf2Q.js";import"./sizes-C6oSOElx.js";import"./RadioButton-q7Nz9IFm.js";import"./StyledFormControl.styled-BDgwaEEo.js";import"./Toggle-aOIYV_sD.js";import"./ColorSelected-DERcqfqY.js";import"./TitleWrapper-CYciWRcJ.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-gv79E1WA.js";import"./ChevronRight-bPXdPGpY.js";import"./PageHeader-DvUko4so.js";import"./formats-sBod7wm8.js";import"./Dialog-BI8WLJ8j.js";import"./useMediaQuery-Bupge7Mj.js";import"./Snackbar-BF1WUGPv.js";import"./Close-CC6bEs2P.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-Bg8I7hop.js";const ge={title:"Components/Form"},y=document.body.style.margin,i=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,e)=>({name:`field_${e}`,label:`Field ${e}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,e)=>({title:`Section ${e+4}`,description:`Description for section ${e+4}`,collapsed:!0,fields:[[[`field_${e*5+9}`]],[[`field_${e*5+10}`]],[[`field_${e*5+11}`]],[[`field_${e*5+12}`]],[[`field_${e*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};i.args={showState:!1};i.argTypes={showState:{name:"Show state"}};var r,s,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const $e=["VaryingSections"];export{i as VaryingSections,$e as __namedExportsOrder,ge as default};
