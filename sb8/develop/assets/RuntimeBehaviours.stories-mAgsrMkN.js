import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as o}from"./index-D0AnReJb.js";import{u as f,v as s,c as l,F as b}from"./Form-DPJ23PVO.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as T}from"./utils-BR2PSRFh.js";import"./theme-BSoCkN4E.js";import"./SideNav-C5NWEHXm.js";import"./containerQuery-bURHYR7H.js";import"./useToggle-RmkKdcfw.js";import"./Button-DpopOKxc.js";import"./generateUtilityClasses-BA0DUeUY.js";import"./ButtonBase-C35XO5Ki.js";import"./useIsFocusVisible-CvEUtp4E.js";import"./Popper-xe3MJQij.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BAqAQ4su.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./index-BoBd9h2u.js";import"./debounce-jQnfRpl1.js";import"./DataViewPrimaryFilter.styled-BbrvVw35.js";import"./createSvgIcon-B3veWrfC.js";import"./createSvgIcon-Bee5RQ5R.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Chip-Bypx1B0d.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CoWLI8L7.js";import"./DataViewFilterDropdown-D2WocfoV.js";import"./formControlState-BN-vhB5B.js";import"./ButtonRow-C0p2ODeQ.js";import"./Spinner-B9uEl8uj.js";import"./Typography-CID4xQqz.js";import"./SubtitleText-Bh4fpen4.js";import"./CheckboxList-CvmUeamL.js";import"./Checkbox-CoU1FyDt.js";import"./FormControlLabel-CZZVJTgF.js";import"./getThemeProps-BKaUAPTQ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D0yHXGOG.js";import"./StyledFormControl.styled-BkJbr-Di.js";import"./Toggle-VZ0j2DKw.js";import"./formats-sBod7wm8.js";import"./Dialog-DAXtZNzQ.js";import"./ChevronRight-DusQwXTC.js";import"./TitleWrapper-C8ENnIyi.js";import"./TitleText-C3pJVaQd.js";import"./Snackbar-DhIkxi0I.js";import"./Close-D1y_W6Pv.js";import"./ClickAwayListener-Dkkr5f_-.js";import"./MoreVert-Db3yE7BY.js";import"./PageHeader-B119jF-l.js";const Tt={title:"Components/Form"},e=({showState:d})=>{const r=f(),{state:n,methods:{setFieldValue:a},handleSubmit:x}=r;o.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=T}),[]);const c=o.useMemo(()=>[{name:"text1",label:"Simple Text",type:"text",instructionText:"testing",validators:[s,l]},{name:"text2",label:"Text with validators and dynamic help",type:"text",helperText:n.data.text2,validators:[s,l]},{name:"text3",label:"Text that copies to the next input",type:"text"},{name:"text4",label:"Text that receives copy",type:"text"},{name:"text5",label:"Text that enables another field",type:"text"},{name:"text6",label:"Text that is initially disabled",type:"text",instructionText:'Type "ENABLE" into the previous field to enable this field',disabled:[({data:i})=>(i==null?void 0:i.text5)!=="ENABLE",!0,()=>!0],required:!0}],[n.data.text2]);o.useEffect(()=>{a({name:"text4",value:n.data.text3})},[a,n.data.text3]);const h=function(){a({name:"text1",value:"test@test.com"})},v=function(){a({name:"text2",value:"notanemail",validate:!0})};return t.jsxs(t.Fragment,{children:[d&&t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(b,{...r,buttons:y(x),title:"Runtime behaviors",fields:c})}),t.jsxs("div",{children:[t.jsx("p",{children:"Here are some buttons that are not part of the form, but can change values in the form proving communication between in/out of the form. Notice that settext2 runs the validation after setting the value."}),t.jsx("button",{onClick:h,children:"Set Text1 Value"}),t.jsx("button",{onClick:v,children:"Set Text2 Value"})]})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var m,u,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const gt=["RuntimeBehaviours"];export{e as RuntimeBehaviours,gt as __namedExportsOrder,Tt as default};
