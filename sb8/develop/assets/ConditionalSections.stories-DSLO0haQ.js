import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r}from"./index-Btj5Fd67.js";import{u as h,F as y}from"./Form-Cu9MtH9A.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as S}from"./utils-BR2PSRFh.js";import"./theme-C7C0QMlu.js";import"./SideNav-BXGvGLiL.js";import"./containerQuery-BqcK0eeN.js";import"./useToggle-B3mbTfSB.js";import"./ColorSelected-rVJC1bnf.js";import"./index-B6f3rorp.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BUfrUkss.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./createSvgIcon-C7F5N1gl.js";import"./createSvgIcon-Bmixpj46.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-C9uVWUyr.js";import"./useId-DwELyCdS.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-D8KJxpyu.js";import"./Chip-BycvDKsV.js";import"./ButtonBase-Ci24pScM.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-L7Zdnfri.js";import"./FormFieldText.styled-BXg2h5EQ.js";import"./Button-BW21zc79.js";import"./Popper-lO7-sb5Y.js";import"./useTheme-CN1B93FI.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./formControlState-Bl9Dd4wz.js";import"./ButtonRow-DaYhrvd1.js";import"./Spinner-C0FunRuE.js";import"./Typography-D0-akgTt.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-CKLT5_IE.js";import"./Checkbox-faPr4U1Q.js";import"./FormControlLabel-DlxLljVV.js";import"./getThemeProps-DdDNKTGU.js";import"./TitleWrapper-Bkg-hsBc.js";import"./TitleText-CdOksVB0.js";import"./MoreVert-BH0BHXBp.js";import"./ChevronRight-Da8zFjWX.js";import"./PageHeader-CmlBcYYr.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BFvQvs9V.js";import"./StyledFormControl.styled-D1xcYZGf.js";import"./Toggle-Lx-sDa2f.js";import"./formats-sBod7wm8.js";import"./Dialog-BFRUe6cu.js";import"./useMediaQuery-Yl5lg82S.js";import"./Snackbar-B25MKBii.js";import"./Close-CSY1ofSk.js";import"./ClickAwayListener-DweT8u9y.js";import"./TooltipIcon-C4tSz_X8.js";const be={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ge=["ConditionalSections"];export{t as ConditionalSections,ge as __namedExportsOrder,be as default};
