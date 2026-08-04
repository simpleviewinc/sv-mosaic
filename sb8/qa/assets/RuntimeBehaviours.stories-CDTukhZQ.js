import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-CDlOlYQx.js";import{u as f,v as s,d as l,F as b}from"./index-DQ5lYjg-.js";import{r as y}from"./renderButtons-DP0bGf4C.js";import{O as T}from"./dom-BR2PSRFh.js";import"./MosaicContext-OO7tZJdO.js";import"./ButtonBase-CSsk5_gr.js";import"./identifier-D-VlK421.js";import"./sizes-BeWafy6f.js";import"./createSimplePaletteValueFilter-BR9nxWVt.js";import"./useSlot-BF1fWNxP.js";import"./useEnhancedEffect-BmmhhWnX.js";import"./TitleWrapper-DJ3oxuZn.js";import"./styled-components.browser.esm-CsHOGV45.js";import"./Button-J6Kw363Y.js";import"./useId-CJY4DrkM.js";import"./CircularProgress-aPK7NacD.js";import"./index-fPYtWVub.js";import"./useTooltip-Hifh6sld.js";import"./index-BGZCjPBa.js";import"./index-CA2ozmjx.js";import"./Popover-CfJhcp6M.js";import"./mergeSlotProps-1AUqaabT.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-BrbIZV1W.js";import"./createSvgIcon-BOHM49HM.js";import"./Typography-Bp-nXGcB.js";import"./DisplayText-BJnL9L05.js";import"./ButtonRow-y0O1VC79.js";import"./testIds-B6Pox1zA.js";import"./StyledPopperPaper-CblYxRKp.js";import"./TooltipIcon-if6WdNgf.js";import"./DataViewFilterDropdownButtons-CBDNlFNO.js";import"./FormFieldText.styled-D7KmSwYO.js";import"./formControlState-CJTic6Sf.js";import"./GlobalStyles-DOqqlamx.js";import"./useControlled-DKUcMOPx.js";import"./index-DylK-kVm.js";import"./ExpandMore-D30LWCsE.js";import"./Chip-BvxPiOpy.js";import"./DataViewPrimaryFilter.styled-BC5S4hgN.js";import"./Badge-OO3YKMxk.js";import"./Text-B-CII8XP.js";import"./PickerPanel-DnLdQwbM.js";import"./PageHeader-DIWebNsC.js";import"./Spinner-By1vTLAu.js";import"./CheckboxList-D9FFWuZY.js";import"./Checkbox-DXOuBkLC.js";import"./SwitchBase-BlAgGKJx.js";import"./StyledOptionFormControl-BaE74fbD.js";import"./FormGroup-DqpNDYHy.js";import"./MoreVert-BYQ12PEe.js";import"./stable-BFc8HSVh.js";import"./scrollbarStyles-BkXc3b2-.js";import"./Snackbar-kq0Zn7SC.js";import"./Close-BouFTol8.js";import"./ChipList-BnPd1b7I.js";import"./RadioGroup-LpJpC3lq.js";import"./Toggle-Cchzb_ud.js";import"./Dialog-CB9M2CMQ.js";import"./ThemeProvider-C67Jzfm-.js";import"./SideNav-BGXzeqiu.js";import"./CardHeading-COwA42ZW.js";const At={title:"Components/Form"},e=({showState:d})=>{const r=f(),{state:n,methods:{setFieldValue:i},handleSubmit:x}=r;a.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=T}),[]);const c=a.useMemo(()=>[{name:"text1",label:"Simple Text",type:"text",instructionText:"testing",validators:[s,l]},{name:"text2",label:"Text with validators and dynamic help",type:"text",helperText:n.data.text2,validators:[s,l]},{name:"text3",label:"Text that copies to the next input",type:"text"},{name:"text4",label:"Text that receives copy",type:"text"},{name:"text5",label:"Text that enables another field",type:"text"},{name:"text6",label:"Text that is initially disabled",type:"text",instructionText:'Type "ENABLE" into the previous field to enable this field',disabled:[({data:o})=>(o==null?void 0:o.text5)!=="ENABLE",!0,()=>!0],required:!0}],[n.data.text2]);a.useEffect(()=>{i({name:"text4",value:n.data.text3})},[i,n.data.text3]);const h=function(){i({name:"text1",value:"test@test.com"})},v=function(){i({name:"text2",value:"notanemail",validate:!0})};return t.jsxs(t.Fragment,{children:[d&&t.jsx("pre",{children:JSON.stringify(n,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(b,{...r,buttons:y(x),title:"Runtime behaviors",fields:c})}),t.jsxs("div",{children:[t.jsx("p",{children:"Here are some buttons that are not part of the form, but can change values in the form proving communication between in/out of the form. Notice that settext2 runs the validation after setting the value."}),t.jsx("button",{onClick:h,children:"Set Text1 Value"}),t.jsx("button",{onClick:v,children:"Set Text2 Value"})]})]})};e.args={showState:!1};e.argTypes={showState:{name:"Show state"}};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Ot=["RuntimeBehaviours"];export{e as RuntimeBehaviours,Ot as __namedExportsOrder,At as default};
