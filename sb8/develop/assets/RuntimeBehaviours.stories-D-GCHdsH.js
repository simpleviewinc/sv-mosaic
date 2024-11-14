import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{u as f,v as s,e as l,F as b}from"./Form-DYTOoPno.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as T}from"./utils-BR2PSRFh.js";import"./theme-DRtZtbPc.js";import"./SideNav-D66jd1x5.js";import"./containerQuery-C0QVV4Kt.js";import"./useToggle-lipGlewK.js";import"./CheckboxList-B0TDWvkR.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BN-KUs9r.js";import"./FormControlLabel-n1qioM9o.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./ButtonBase-BZmvw3BH.js";import"./useIsFocusVisible-De2ftVE9.js";import"./useControlled-im5M3O13.js";import"./getThemeProps-Cs15h2IA.js";import"./useTheme-5hcycNQy.js";import"./createSvgIcon-CPgMIgId.js";import"./testIds-D6Gx1A0F.js";import"./FormFieldText.styled-hkDOkrrs.js";import"./Button-Do5OxnZO.js";import"./Popper-CPbWUqAP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./index-BxmsGmlx.js";import"./useMosaicTranslation-CZCb37QS.js";import"./createSvgIcon-CcHL1II5.js";import"./useId-DLncWxdO.js";import"./index-BRTUF0sG.js";import"./debounce-DO3dP4oK.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./Chip-Btt3uSwF.js";import"./ButtonRow-B3IWj8ab.js";import"./Spinner-DgupAfKo.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-CvnKr_oj.js";import"./ColorSelected-F3W2PMce.js";import"./TitleWrapper-D2l-_w9e.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-yhdXyTld.js";import"./formats-sBod7wm8.js";import"./Dialog-DXK7hw4q.js";import"./useMediaQuery-CguehUMS.js";import"./Snackbar-J6gNQC5v.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./_isIterateeCall-BC645kN2.js";import"./TooltipIcon-CO3K7ssQ.js";const Vt={title:"Components/Form"},e=({showState:d})=>{const r=f(),{state:n,methods:{setFieldValue:i},handleSubmit:x}=r;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=T}),[]);const c=a.useMemo(()=>[{name:"text1",label:"Simple Text",type:"text",instructionText:"testing",validators:[s,l]},{name:"text2",label:"Text with validators and dynamic help",type:"text",helperText:n.data.text2,validators:[s,l]},{name:"text3",label:"Text that copies to the next input",type:"text"},{name:"text4",label:"Text that receives copy",type:"text"},{name:"text5",label:"Text that enables another field",type:"text"},{name:"text6",label:"Text that is initially disabled",type:"text",instructionText:'Type "ENABLE" into the previous field to enable this field',disabled:[({data:o})=>(o==null?void 0:o.text5)!=="ENABLE",!0,()=>!0],required:!0}],[n.data.text2]);a.useEffect(()=>{i({name:"text4",value:n.data.text3})},[i,n.data.text3]);const h=function(){i({name:"text1",value:"test@test.com"})},v=function(){i({name:"text2",value:"notanemail",validate:!0})};return t.jsxs(t.Fragment,{children:[d&&t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(b,{...r,buttons:y(x),title:"Runtime behaviors",fields:c})}),t.jsxs("div",{children:[t.jsx("p",{children:"Here are some buttons that are not part of the form, but can change values in the form proving communication between in/out of the form. Notice that settext2 runs the validation after setting the value."}),t.jsx("button",{onClick:h,children:"Set Text1 Value"}),t.jsx("button",{onClick:v,children:"Set Text2 Value"})]})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  showState
}: typeof RuntimeBehaviours.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    methods: {
      setFieldValue
    },
    handleSubmit
  } = controller;
  useEffect(() => {
    document.body.style.margin = "0px";
    return () => {
      document.body.style.margin = ORIGINAL_BODY_MARGIN;
    };
  }, []);
  const fields = useMemo((): FieldDef[] => [{
    name: "text1",
    label: "Simple Text",
    type: "text",
    instructionText: "testing",
    validators: [validateEmail, validateSlow]
  }, {
    name: "text2",
    label: "Text with validators and dynamic help",
    type: "text",
    helperText: state.data.text2,
    validators: [validateEmail, validateSlow]
  }, {
    name: "text3",
    label: "Text that copies to the next input",
    type: "text"
  }, {
    name: "text4",
    label: "Text that receives copy",
    type: "text"
  }, {
    name: "text5",
    label: "Text that enables another field",
    type: "text"
  }, {
    name: "text6",
    label: "Text that is initially disabled",
    type: "text",
    instructionText: "Type \\"ENABLE\\" into the previous field to enable this field",
    disabled: [({
      data
    }) => data?.text5 !== "ENABLE", true, () => true],
    required: true
  }], [state.data.text2]);
  useEffect(() => {
    setFieldValue({
      name: "text4",
      value: state.data.text3
    });
  }, [setFieldValue, state.data.text3]);
  const setText1Value = function () {
    setFieldValue({
      name: "text1",
      value: "test@test.com"
    });
  };
  const setText2Value = function () {
    setFieldValue({
      name: "text2",
      value: "notanemail",
      validate: true
    });
  };
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Runtime behaviors" fields={fields} />
            </div>
            <div>
                <p>
                    Here are some buttons that are not part of the form, but can change
                    values in the form proving communication between in/out of the form.
                    Notice that settext2 runs the validation after setting the value.
                </p>
                <button onClick={setText1Value}>Set Text1 Value</button>
                <button onClick={setText2Value}>Set Text2 Value</button>
            </div>
        </>;
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Ft=["RuntimeBehaviours"];export{e as RuntimeBehaviours,Ft as __namedExportsOrder,Vt as default};
