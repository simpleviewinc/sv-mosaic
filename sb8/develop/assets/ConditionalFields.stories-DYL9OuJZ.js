import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as i}from"./index-BP8_t0zE.js";import{u as c,F as y}from"./Form-DwlgP3oX.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{O as f}from"./utils-BR2PSRFh.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./CheckboxList-DIJA1CoI.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DXmlIxMz.js";import"./FormControlLabel-n1qioM9o.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useControlled-im5M3O13.js";import"./getThemeProps-Cs15h2IA.js";import"./useTheme-5hcycNQy.js";import"./createSvgIcon-CPgMIgId.js";import"./testIds-wFnuQL-c.js";import"./FormFieldText.styled-BceLEoIp.js";import"./Button-Do5OxnZO.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-BxmsGmlx.js";import"./useMosaicTranslation-CZCb37QS.js";import"./createSvgIcon-CcHL1II5.js";import"./useId-DLncWxdO.js";import"./index-OJVcpMHx.js";import"./debounce-DO3dP4oK.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./Chip-B85GZ6Ow.js";import"./ButtonRow-CuiV6DQ9.js";import"./Spinner-DgupAfKo.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-BRgaiAVD.js";import"./ColorSelected-BvcxNARU.js";import"./TitleWrapper-D2l-_w9e.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-DvPTRq5b.js";import"./formats-sBod7wm8.js";import"./Dialog-DXK7hw4q.js";import"./useMediaQuery-CguehUMS.js";import"./Snackbar-J6gNQC5v.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./TooltipIcon-CO3K7ssQ.js";const bt={title:"Components/Form"},t=({showState:d})=>{const o=c(),{state:l,handleSubmit:a}=o,n="SHOW";i.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=f}),[]);const u=i.useMemo(()=>[{name:"dependency",label:"Dependency",type:"text",instructionText:`Type "${n}" to show another field`,required:!0},{name:"dependent",label:"Dependent",type:"text",show:({data:r})=>(r==null?void 0:r.dependency)===n,required:!0}],[]);return e.jsxs(e.Fragment,{children:[d&&e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...o,buttons:h(a),title:"Runtime behaviors",fields:u})})]})};t.args={showState:!1};t.argTypes={showState:{name:"Show state"}};var m,p,s;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Et=["ConditionalFields"];export{t as ConditionalFields,Et as __namedExportsOrder,bt as default};
