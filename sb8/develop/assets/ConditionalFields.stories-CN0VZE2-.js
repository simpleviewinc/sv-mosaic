import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-wekxHvEx.js";import{u as c,F as y}from"./index-e3Cwxuf6.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{O as f}from"./dom-BR2PSRFh.js";import"./MosaicContext-lnnMUzUH.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./identifier-DEb8G0aq.js";import"./sizes-BeWafy6f.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./TitleWrapper-D3WSxBwS.js";import"./styled-components.browser.esm-DDzsJbQW.js";import"./Button-BUZ6VV6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-69YouNVI.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DroHY8JW.js";import"./createSvgIcon-TbZ0fr-h.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-CMLeEZxo.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-tabo-wbk.js";import"./ExpandMore-DMteFeWA.js";import"./Help-BqPVwWaf.js";import"./Chip-hlb4pmaG.js";import"./Clear-DlU6fmaM.js";import"./FormFieldText.styled-BsjNlYvA.js";import"./useFormControl-p_2RyLus.js";import"./formControlState-Dq1zat_P.js";import"./GlobalStyles-B7dp4lKd.js";import"./DataViewFilterDropdownButtons-F5j2IuvN.js";import"./StyledPopperPaper-BTEmDkdR.js";import"./TooltipIcon-Bg32Lmm2.js";import"./DataViewPrimaryFilter.styled-D9YhNElh.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-CfqePg2q.js";import"./Add-VWMKePYD.js";import"./PageHeader-CcC-OptF.js";import"./Spinner-CUCt3e5k.js";import"./CheckboxList-BIvmP8ms.js";import"./Checkbox-C781D4ZG.js";import"./SwitchBase-D6K8Fkjn.js";import"./OptionField-R5YykxyG.js";import"./FormGroup-BOW51rb4.js";import"./MoreVert-Cw5dZkux.js";import"./stable-BFc8HSVh.js";import"./Settings-jBnAWEnT.js";import"./scrollbarStyles-Bv9JpEGT.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-BbgjRMho.js";import"./Close-brVlBoUV.js";import"./ChipList-D-Z4RzuG.js";import"./RadioGroup-CR_TgkXs.js";import"./Toggle-DvSm-bxV.js";import"./Dialog-D_7vc-8r.js";import"./ThemeProvider-BUWLNaok.js";import"./Link-YMNHmFB7.js";import"./Card.styled-Xnb-IEFb.js";import"./OpenInNew-B-tDM0BO.js";import"./Delete-Bi8a5FsZ.js";import"./CloudDownload-B1kX4zjH.js";import"./InsertDriveFile-benxu_XD.js";const Bt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:e})=>(e==null?void 0:e.dependency)===n,required:!0}],[]);return r.jsxs(r.Fragment,{children:[d&&r.jsx("pre",{children:JSON.stringify(l,null,"  ")}),r.jsx("div",{style:{height:"100vh"},children:r.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  showState
}: typeof ConditionalFields.args): ReactElement => {
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
  const fields = useMemo((): FieldDef[] => [{
    name: "dependency",
    label: "Dependency",
    type: "text",
    instructionText: \`Type "\${KEY_PHRASE}" to show another field\`,
    required: true
  }, {
    name: "dependent",
    label: "Dependent",
    type: "text",
    show: ({
      data
    }) => {
      return data?.dependency === KEY_PHRASE;
    },
    required: true
  }], []);
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Runtime behaviors" fields={fields} />
            </div>
        </>;
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Gt=["ConditionalFields"];export{t as ConditionalFields,Gt as __namedExportsOrder,Bt as default};
