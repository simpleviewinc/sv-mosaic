import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as o}from"./index-BP8_t0zE.js";import{u as _,F as u}from"./formUtils-BDmDTW9-.js";import{r as S}from"./storyUtils-ByV2Bsyv.js";import"./DataViewFilterDropdown-B4X4i9iN.js";import"./theme-BFHUhhnW.js";import"./useThemeProps-CC0A0wW3.js";import"./useFormControl-h1XKtQPT.js";import"./createSvgIcon-BFtO5Q3M.js";import"./createSvgIcon-D-pnGctT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-CO-dlV3K.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./Button-BH4-03LC.js";import"./ButtonBase-R8jPeFSW.js";import"./emotion-react.browser.esm-F1m11hi1.js";import"./Popper-DptWoz9V.js";import"./index-BxmsGmlx.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./_baseMap-CD-F1Lik.js";import"./debounce-DCEw8XId.js";import"./isSymbol-C7K7xDG1.js";import"./CheckboxList-BW3qbPww.js";import"./Checkbox-Dcjyc20p.js";import"./FormControlLabel-xKzxkw-X.js";import"./reactTools-D2O6dTsh.js";import"./DataViewPrimaryFilter.styled-CqJQyTfl.js";import"./ButtonRow-CG1gNQ0k.js";import"./Spinner-qhh6Qxwa.js";import"./Chip-CC244fBs.js";import"./Typography-D0sDo15u.js";import"./SubtitleText-B5uTxLpF.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CRToYo89.js";import"./StyledFormControl.styled-6O-ETzJ6.js";import"./Toggle-B_NBlHrs.js";import"./testIds-B75WQI-K.js";import"./index-DS2IKydr.js";import"./TitleWrapper-N6k_cHLp.js";import"./containerQuery-v_lW7Ytt.js";import"./TitleText-BTs7Gt0E.js";import"./MoreVert-D7-p9KfM.js";import"./ChevronRight-B_Gprqw3.js";import"./PageHeader-mb5NuRbn.js";import"./MenuSelect-DV8M_NkV.js";import"./useMediaQuery-DL62vn1N.js";import"./formats-CDjt32hU.js";import"./Dialog-H5GqHGP3.js";import"./SideNav-wnS0nnEp.js";import"./Snackbar-C3sy6vop.js";import"./Close-DTUN_E5S.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const he={title:"Components/Form"},y=document.body.style.margin,i=({showState:p})=>{const n=_(),{state:d,handleSubmit:c}=n;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=y}),[]);const m=o.useMemo(()=>[...Array(80).fill(null).map((a,e)=>({name:`field_${e}`,label:`Field ${e}`,type:"text"}))],[]),f=o.useMemo(()=>[{title:"Section 1",description:"Description for section 1",collapsed:!0,fields:[[["field_1"]],[["field_2"]]]},{title:"Section 2",description:"Description for section 2",collapsed:!1,fields:[[["field_3"]]]},{title:"Section 3",description:"Description for section 3",collapsed:!1,fields:[[["field_4"]],[["field_5"]],[["field_6"]],[["field_7"]],[["field_8"]]]},...Array(10).fill(null).map((a,e)=>({title:`Section ${e+4}`,description:`Description for section ${e+4}`,collapsed:!0,fields:[[[`field_${e*5+9}`]],[[`field_${e*5+10}`]],[[`field_${e*5+11}`]],[[`field_${e*5+12}`]],[[`field_${e*5+13}`]]]})),{title:"Section 14",description:"Description for section 14",collapsed:!1,fields:[[["field_59"]],[["field_60"]],[["field_61"]],[["field_62"]],[["field_63"]]]},{title:"Section 15",description:"Description for section 15",collapsed:!1,fields:[[["field_64"]]]}],[]);return t.jsxs(t.Fragment,{children:[p&&t.jsx("pre",{children:JSON.stringify(d,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(u,{...n,buttons:S(c),title:"Varying Sections",fields:m,sections:f})})]})};i.args={showState:!1};i.argTypes={showState:{name:"Show state"}};var r,s,l;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
