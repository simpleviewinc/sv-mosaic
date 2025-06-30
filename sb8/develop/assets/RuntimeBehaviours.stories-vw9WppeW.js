import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as a}from"./index-D0AnReJb.js";import{u as f,v as s,c as l,F as b}from"./index-DCsI_z-L.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as T}from"./dom-BR2PSRFh.js";import"./styled-components.browser.esm-aVcmUYMZ.js";import"./sizes-CTdyEcea.js";import"./testIds-BKutUmNQ.js";import"./TitleWrapper-D4ztpYuS.js";import"./Button-Cu24UfKA.js";import"./identifier-C21A9frq.js";import"./generateUtilityClasses-iHFtG1jj.js";import"./ButtonBase-CLHtCICo.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./index-Csnu-DvG.js";import"./Popper-B4A_VUge.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-4eCcP-Dc.js";import"./useThemeWithoutDefault-BHc79qG-.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-D9vD66Ez.js";import"./createSvgIcon-DLboviGw.js";import"./createSvgIcon-YkkRvR3V.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DM2nLVeQ.js";import"./DisplayText-BRdY6ERT.js";import"./ButtonRow-DEKalGfm.js";import"./toNumber-ANF_7kha.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdownButtons-B-NSlGS8.js";import"./index-BvK5pSCI.js";import"./ExpandMore-CEbXN-sG.js";import"./Chip-BMBxB4HT.js";import"./PickerPanel-CJUaTFnG.js";import"./PageHeader-CEZufbNa.js";import"./Text-Bw6wJuVZ.js";import"./FormFieldText.styled-DTQIdddZ.js";import"./formControlState-FGREjXRn.js";import"./Spinner-DrhQOeHK.js";import"./CheckboxList-6G7BlDZu.js";import"./Checkbox-DqndGKzg.js";import"./FormControlLabel-sQC-fLMo.js";import"./DataViewPrimaryFilter.styled-DJMCb03L.js";import"./MoreVert-DAsd8IpG.js";import"./formats-CMvQHWsT.js";import"./ChipList-CJvhQDiV.js";import"./RadioButton-Bcxn9PJS.js";import"./StyledFormControl.styled-BQMYotuj.js";import"./Toggle-DDpxCdm7.js";import"./Dialog-CCRRhmOO.js";import"./ThemeProvider-DKfWeLFc.js";import"./SideNav-AzQy47h5.js";import"./Snackbar-DyF0qJal.js";import"./Close-CheCpke4.js";import"./ClickAwayListener-Dkkr5f_-.js";const wt={title:"Components/Form"},e=({showState:d})=>{const r=f(),{state:n,methods:{setFieldValue:i},handleSubmit:x}=r;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=T}),[]);const c=a.useMemo(()=>[{name:"text1",label:"Simple Text",type:"text",instructionText:"testing",validators:[s,l]},{name:"text2",label:"Text with validators and dynamic help",type:"text",helperText:n.data.text2,validators:[s,l]},{name:"text3",label:"Text that copies to the next input",type:"text"},{name:"text4",label:"Text that receives copy",type:"text"},{name:"text5",label:"Text that enables another field",type:"text"},{name:"text6",label:"Text that is initially disabled",type:"text",instructionText:'Type "ENABLE" into the previous field to enable this field',disabled:[({data:o})=>(o==null?void 0:o.text5)!=="ENABLE",!0,()=>!0],required:!0}],[n.data.text2]);a.useEffect(()=>{i({name:"text4",value:n.data.text3})},[i,n.data.text3]);const h=function(){i({name:"text1",value:"test@test.com"})},v=function(){i({name:"text2",value:"notanemail",validate:!0})};return t.jsxs(t.Fragment,{children:[d&&t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(b,{...r,buttons:y(x),title:"Runtime behaviors",fields:c})}),t.jsxs("div",{children:[t.jsx("p",{children:"Here are some buttons that are not part of the form, but can change values in the form proving communication between in/out of the form. Notice that settext2 runs the validation after setting the value."}),t.jsx("button",{onClick:h,children:"Set Text1 Value"}),t.jsx("button",{onClick:v,children:"Set Text2 Value"})]})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Bt=["RuntimeBehaviours"];export{e as RuntimeBehaviours,Bt as __namedExportsOrder,wt as default};
