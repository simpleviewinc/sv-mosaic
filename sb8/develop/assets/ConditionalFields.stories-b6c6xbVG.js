import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as i}from"./index-D0AnReJb.js";import{u as c,F as y}from"./index-k1Pd4Kly.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{O as f}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-EkLDtEIi.js";import"./sizes-o2d97SRj.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-C8W2yeY-.js";import"./Button-CIsIgYW9.js";import"./identifier-cQ2cb48K.js";import"./generateUtilityClasses-B-SuhQrp.js";import"./ButtonBase-D9-8PPWk.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-CUzMHGlt.js";import"./Popper-C-qQSfSD.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-EO1q8T9A.js";import"./useThemeWithoutDefault-D4M89WpM.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-umnB1liH.js";import"./createSvgIcon-ZSxe0E8n.js";import"./createSvgIcon-BqayHko4.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-Csn3cM8V.js";import"./DisplayText-DsKn3JO_.js";import"./ButtonRow-bA1_CZ2a.js";import"./toNumber-CI4rbyKs.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-BoxlsZi1.js";import"./index-C8Iw7yj0.js";import"./ExpandMore-7WC6Jukx.js";import"./Chip-6PxD25oI.js";import"./PickerPanel-PEccAPwF.js";import"./PageHeader-PjPXuI9q.js";import"./Text-4ZxjQQL-.js";import"./FormFieldText.styled-Cyn0xN8Z.js";import"./formControlState-CbpNtXrp.js";import"./Spinner-CI5raFHi.js";import"./CheckboxList-DCB3WPmf.js";import"./Checkbox-CPU_Yyhi.js";import"./FormControlLabel-9JumqQgw.js";import"./DataViewPrimaryFilter.styled-5W5JcB5Q.js";import"./MoreVert-CRDnLPP8.js";import"./formats-CMvQHWsT.js";import"./Snackbar-D4MO-uDR.js";import"./Close-bfO5ceNT.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./ChipList-BGF-Et87.js";import"./RadioButton-CWZM88eJ.js";import"./StyledFormControl.styled-50iZRKTb.js";import"./Toggle-DxNmnByB.js";import"./Dialog-CV_57Jxn.js";import"./ThemeProvider-DHi8PP6S.js";import"./SideNav-CKFQrzl9.js";const Ft={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Rt=["ConditionalFields"];export{t as ConditionalFields,Rt as __namedExportsOrder,Ft as default};
