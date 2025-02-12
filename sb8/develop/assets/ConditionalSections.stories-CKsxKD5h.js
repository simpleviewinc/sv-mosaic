import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r}from"./index-Btj5Fd67.js";import{u as h,F as y}from"./index-C0OFzvBJ.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as S}from"./utils-BR2PSRFh.js";import"./theme-C7C0QMlu.js";import"./testIds-BTxDoLqd.js";import"./TitleWrapper-BAR2n_rD.js";import"./Button-CRbkpCI2.js";import"./generateUtilityClasses-oWyMxXuq.js";import"./ButtonBase-biKTBdl5.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Cwezlgxk.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-R4ufcCXK.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-BqcK0eeN.js";import"./createSvgIcon-CzNXaSwG.js";import"./createSvgIcon-Bmixpj46.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-D0-akgTt.js";import"./TitleText-CdOksVB0.js";import"./ButtonRow-B0KLUoh1.js";import"./index-DWVqnVXO.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-Ckb-VyLy.js";import"./Chip-Dr-kVTvJ.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-CYOPNvgp.js";import"./formControlState-Bl9Dd4wz.js";import"./Spinner-C0FunRuE.js";import"./SubtitleText-DUUVrgUU.js";import"./CheckboxList-DhxEMOfW.js";import"./Checkbox-BPpImdKi.js";import"./FormControlLabel-DHn1WcqZ.js";import"./getThemeProps-DdDNKTGU.js";import"./MoreVert-Djp96t97.js";import"./ChevronRight-CA1Fd4W_.js";import"./PageHeader-BGHmuIHO.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-Ba6ulvNI.js";import"./StyledFormControl.styled-i13hAbZe.js";import"./Toggle-CQTabJa2.js";import"./Dialog-D-UDZ0Lf.js";import"./SideNav-BXGvGLiL.js";import"./Snackbar-DLaSlsnc.js";import"./Close-BLCogFul.js";import"./ClickAwayListener-DoPvkzLf.js";const Se={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const we=["ConditionalSections"];export{t as ConditionalSections,we as __namedExportsOrder,Se as default};
