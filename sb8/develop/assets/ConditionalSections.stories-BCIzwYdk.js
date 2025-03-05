import{j as n}from"./jsx-runtime-DiwAibxM.js";import{r}from"./index-Btj5Fd67.js";import{u as h,F as y}from"./index-DE-vLMND.js";import{r as f}from"./renderButtons-BmHfsf_z.js";import{O as S}from"./utils-BR2PSRFh.js";import"./theme-D38K4W-Z.js";import"./testIds-fiKIunms.js";import"./TitleWrapper-D0jWUQG0.js";import"./Button-D32bI-Hq.js";import"./generateUtilityClasses-8vC7aVzu.js";import"./ButtonBase-qeNCnyas.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-Dpu8VSWK.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-D0FYgW1y.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./useToggle-B3mbTfSB.js";import"./containerQuery-CksQJzsL.js";import"./createSvgIcon-BYvI5rjI.js";import"./createSvgIcon-DEmQcq0a.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Typography-iUA5kZEF.js";import"./TitleText-b_QXd7Yf.js";import"./ButtonRow-Bg_-eU3q.js";import"./index-BbjJqZ7X.js";import"./debounce-B3RVa3dT.js";import"./DataViewPrimaryFilter.styled-BZ3tfVAq.js";import"./Chip-CB_Nl8Vf.js";import"./useMosaicTranslation-DPUDh126.js";import"./FormFieldText.styled-DbKyEzTp.js";import"./formControlState-B0dK5Yiw.js";import"./Spinner-BTI8gP3i.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-D_uRM6MU.js";import"./Checkbox-3bvh3g8i.js";import"./FormControlLabel-BnIcqxAa.js";import"./getThemeProps-CANKBKLy.js";import"./MoreVert-CcQ_DGVp.js";import"./ChevronRight-B_wNKS8s.js";import"./PageHeader-DvaIFD-A.js";import"./formats-CMvQHWsT.js";import"./sizes-C6oSOElx.js";import"./RadioButton-BelC6HqS.js";import"./StyledFormControl.styled-DMWoJm0e.js";import"./Toggle-2hh2ORfC.js";import"./Dialog-BKnqllF5.js";import"./SideNav-D2hLlXvZ.js";import"./Snackbar-BFSmGquB.js";import"./Close-CSM1BQ-c.js";import"./ClickAwayListener-DoPvkzLf.js";const Se={title:"Components/Form"},t=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,o="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:e})=>(e==null?void 0:e.dependency)===o&&(e==null?void 0:e.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${o}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:e})=>(e==null?void 0:e.dependency)===o},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return n.jsxs(n.Fragment,{children:[c&&n.jsx("pre",{children:JSON.stringify(d,null,"  ")}),n.jsx("div",{style:{height:"100vh"},children:n.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var s,p,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
