import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as i}from"./index-lnx8lKqn.js";import{u as c,F as y}from"./index-BiBMp58k.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{O as f}from"./dom-BR2PSRFh.js";import"./ExpandMore-BWMeOleT.js";import"./identifier-DL_MWCt5.js";import"./createSvgIcon-DtmGrA-N.js";import"./generateUtilityClasses-BXdgOgaD.js";import"./useIsFocusVisible-CUUNsth7.js";import"./MosaicContext-Bd_KQqXt.js";import"./ButtonBase-CvKKHeWu.js";import"./FormFieldText.styled-C8FVpgqR.js";import"./styled-components.browser.esm-DqsT1pAc.js";import"./sizes-BcVUBVYw.js";import"./formControlState-DQjLAsCB.js";import"./useTooltip-DxGcUIuP.js";import"./useThemeWithoutDefault-DtYdwAl6.js";import"./index-DJZ3_iYS.js";import"./index-BySu-MVC.js";import"./Button-CNe7umd6.js";import"./index-BXfeNjdK.js";import"./Popover-BteNYKgc.js";import"./testIds-B6Pox1zA.js";import"./TitleWrapper-BzZp6KFF.js";import"./containerQuery-BGTno4Nd.js";import"./ChevronLeft-vDd10AKU.js";import"./Typography-BDSgj_cw.js";import"./DisplayText-DNcU0R6O.js";import"./ButtonRow-BvtHToaG.js";import"./DataViewFilterDropdownButtons-rxxLPn9R.js";import"./StyledPopperPaper-DUCM88TM.js";import"./TooltipIcon-CIvFjYBP.js";import"./index-WeqoMoTB.js";import"./Chip-CbNdHOhT.js";import"./DataViewPrimaryFilter.styled-CBPEvKLp.js";import"./Badge-QaR-AhQl.js";import"./Text-6QT-9GAX.js";import"./PickerPanel-BfvGlJ8s.js";import"./PageHeader-nP7hDafL.js";import"./Spinner-9l6dePBI.js";import"./CheckboxList-6gebeIaX.js";import"./Checkbox-Bd_VDYHl.js";import"./SwitchBase-gKBphwxl.js";import"./StyledOptionFormControl-IcAt2LqD.js";import"./MoreVert-Dnd0CSMf.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-CKhuYVYb.js";import"./Snackbar-C_CrhD95.js";import"./Close-R1hfxO-H.js";import"./ChipList-_8tC_zVn.js";import"./RadioButton-G3onKhzu.js";import"./Toggle-DL53UmwG.js";import"./Dialog-64i6eqDA.js";import"./ThemeProvider-D5DIG-lM.js";import"./SideNav-DjxcEScw.js";import"./CardHeading-CmuJXUee.js";const Et={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const gt=["ConditionalFields"];export{t as ConditionalFields,gt as __namedExportsOrder,Et as default};
