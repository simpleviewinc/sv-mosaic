import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as a}from"./index-BP8_t0zE.js";import{u as f,v as s,d as l,F as b}from"./formUtils-CdvCEz-F.js";import{r as y}from"./storyUtils-ByV2Bsyv.js";import{O as T}from"./utils-BR2PSRFh.js";import"./FormFieldText.styled-Drb9OlPH.js";import"./theme-CtvfJOCv.js";import"./Button-OJc5Vo8h.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-D7cE6JL_.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-PEKOA281.js";import"./Spinner-D_slr9_p.js";import"./Chip-DZJmUX56.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-B1U7f5N6.js";import"./testIds-BM6gD7ff.js";import"./ColorSelected-B8g-LEVf.js";import"./TitleWrapper-BDZjwrgo.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-dIxwNzsc.js";import"./MenuSelect-BVQwGf34.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-BV4XmHEB.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-BwuaZY6V.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./Blank-JgbFIOSE.js";const Vt={title:"Components/Form"},e=({showState:d})=>{const r=f(),{state:n,methods:{setFieldValue:i},handleSubmit:x}=r;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=T}),[]);const c=a.useMemo(()=>[{name:"text1",label:"Simple Text",type:"text",instructionText:"testing",validators:[s,l]},{name:"text2",label:"Text with validators and dynamic help",type:"text",helperText:n.data.text2,validators:[s,l]},{name:"text3",label:"Text that copies to the next input",type:"text"},{name:"text4",label:"Text that receives copy",type:"text"},{name:"text5",label:"Text that enables another field",type:"text"},{name:"text6",label:"Text that is initially disabled",type:"text",instructionText:'Type "ENABLE" into the previous field to enable this field',disabled:[({data:o})=>(o==null?void 0:o.text5)!=="ENABLE",!0,()=>!0],required:!0}],[n.data.text2]);a.useEffect(()=>{i({name:"text4",value:n.data.text3})},[i,n.data.text3]);const h=function(){i({name:"text1",value:"test@test.com"})},v=function(){i({name:"text2",value:"notanemail",validate:!0})};return t.jsxs(t.Fragment,{children:[d&&t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(b,{...r,buttons:y(x),title:"Runtime behaviors",fields:c})}),t.jsxs("div",{children:[t.jsx("p",{children:"Here are some buttons that are not part of the form, but can change values in the form proving communication between in/out of the form. Notice that settext2 runs the validation after setting the value."}),t.jsx("button",{onClick:h,children:"Set Text1 Value"}),t.jsx("button",{onClick:v,children:"Set Text2 Value"})]})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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