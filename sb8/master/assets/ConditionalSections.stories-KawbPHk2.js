import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-wekxHvEx.js";import{u as h,F as y}from"./index-B1KoUa03.js";import{r as f}from"./renderButtons-DP0bGf4C.js";import{O as S}from"./dom-BR2PSRFh.js";import"./MosaicContext-lnnMUzUH.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./identifier-DEb8G0aq.js";import"./sizes-BeWafy6f.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./TitleWrapper-D3WSxBwS.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-BUZ6VV6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-69YouNVI.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DroHY8JW.js";import"./createSvgIcon-TbZ0fr-h.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-CMLeEZxo.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-tabo-wbk.js";import"./ExpandMore-DMteFeWA.js";import"./Help-BqPVwWaf.js";import"./Chip-hlb4pmaG.js";import"./Clear-DlU6fmaM.js";import"./FormFieldText.styled-BsjNlYvA.js";import"./useFormControl-p_2RyLus.js";import"./formControlState-Dq1zat_P.js";import"./GlobalStyles-B7dp4lKd.js";import"./DataViewFilterDropdownButtons-F5j2IuvN.js";import"./StyledPopperPaper-BTEmDkdR.js";import"./TooltipIcon-Bg32Lmm2.js";import"./DataViewPrimaryFilter.styled-D9YhNElh.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-CfqePg2q.js";import"./Add-VWMKePYD.js";import"./PageHeader-CcC-OptF.js";import"./Spinner-CUCt3e5k.js";import"./CheckboxList-BIvmP8ms.js";import"./Checkbox-C781D4ZG.js";import"./SwitchBase-D6K8Fkjn.js";import"./OptionField-R5YykxyG.js";import"./FormGroup-BOW51rb4.js";import"./MoreVert-Cw5dZkux.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-Bv9JpEGT.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-BbgjRMho.js";import"./Close-brVlBoUV.js";import"./ChipList-D-Z4RzuG.js";import"./RadioGroup-CR_TgkXs.js";import"./Toggle-DvSm-bxV.js";import"./Dialog-D_7vc-8r.js";import"./ThemeProvider-BUWLNaok.js";import"./Link-YMNHmFB7.js";import"./Card.styled-Xnb-IEFb.js";import"./OpenInNew-B-tDM0BO.js";import"./Delete-Bi8a5FsZ.js";import"./Settings-jBnAWEnT.js";import"./CloudDownload-B1kX4zjH.js";import"./InsertDriveFile-benxu_XD.js";const Tt={title:"Components/Form"},e=({showState:c})=>{const i=h(),{state:d,handleSubmit:l}=i,n="SHOW";r.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=S}),[]);const a=r.useMemo(()=>[{title:"Section 1",description:"Description for section 1",fields:[[["dependency"]],[["section_show"]]]},{title:"Section 2",description:"Description for section 2",fields:[[["dependent"]]],show:({data:t})=>(t==null?void 0:t.dependency)===n&&(t==null?void 0:t.section_show)}],[]),u=r.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"section_show",label:"Show another section",type:"toggle",show:({data:t})=>(t==null?void 0:t.dependency)===n},{name:"dependent",label:"Dependent",type:"text",required:!0}],[]);return o.jsxs(o.Fragment,{children:[c&&o.jsx("pre",{children:JSON.stringify(d,null,"  ")}),o.jsx("div",{style:{height:"100vh"},children:o.jsx(y,{...i,buttons:f(l),title:"Runtime behaviors",fields:u,sections:a})})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var s,p,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`({
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const qt=["ConditionalSections"];export{e as ConditionalSections,qt as __namedExportsOrder,Tt as default};
