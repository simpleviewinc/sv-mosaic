import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./formUtils-PF-CqBEz.js";import"./Button-Dth3WPw1.js";import"./useMosaicTranslation-CZCb37QS.js";import{r as h}from"./storyUtils-BoiXCagy.js";import{O as f}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-Bd74be6I.js";import"./theme-Cyujm90X.js";import"./generateUtilityClasses-DQAffLtG.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CpDkk29s.js";import"./createSvgIcon-DV_hUcxO.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CU1avGbv.js";import"./useTheme-D1npBiLf.js";import"./index-BxmsGmlx.js";import"./index-B05xQjuh.js";import"./CheckboxList-BQ6x_Hvh.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-C56Mz24f.js";import"./FormControlLabel-D-Q_BSJi.js";import"./ButtonBase-Cd1-20QD.js";import"./getThemeProps-DaW1Ssab.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-D7zshuFL.js";import"./ButtonRow-WNepJUJ6.js";import"./useToggle-lipGlewK.js";import"./Spinner-BJvuYi3M.js";import"./Chip-CIJzu56h.js";import"./Typography-BXo9fTd2.js";import"./SubtitleText-BK7UxBzP.js";import"./sizes-C6oSOElx.js";import"./RadioButton-65NVzLMy.js";import"./StyledFormControl.styled-Vy3KCkom.js";import"./Toggle-D0mZyQ2E.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-C1Ge2OOe.js";import"./TitleWrapper-DfdTImyn.js";import"./containerQuery-CxIxOiDA.js";import"./TitleText-SU3bZ5Lh.js";import"./MoreVert--g84jLkq.js";import"./ChevronRight-DCOtcHmH.js";import"./PageHeader-BH_G1KhX.js";import"./MenuSelect-Ca8tFfLg.js";import"./useMediaQuery-C-A7lI-2.js";import"./formats-CDjt32hU.js";import"./Dialog-D_7cNnRq.js";import"./SideNav-BrsNz3mT.js";import"./Snackbar-DilGcmOI.js";import"./Close-CngHQLDC.js";import"./ClickAwayListener-DnjBLK-5.js";import"./Blank-JgbFIOSE.js";const gt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Ft=["ConditionalFields"];export{t as ConditionalFields,Ft as __namedExportsOrder,gt as default};
