import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import{u as x,r as l,F as f}from"./index-CNkl0l2T.js";import{r as y}from"./renderButtons-DP0bGf4C.js";import{O as v}from"./dom-BR2PSRFh.js";import{s as g,c as b}from"./styled-components.browser.esm-njFAddlw.js";import"./styled-components.browser.esm-C5LJ_neh.js";import"./sizes-_ON_TzAH.js";import"./testIds-BKXNnpj0.js";import"./TitleWrapper-BiC1Wb-5.js";import"./Button-D5Mq00Ds.js";import"./identifier-Bktyv6O_.js";import"./generateUtilityClasses-D4jmUuEZ.js";import"./ButtonBase-CyOgbtoj.js";import"./useIsFocusVisible-o8lB1h8w.js";import"./index-R4Jqw3Tw.js";import"./Popover-B_lFWVkj.js";import"./Popper-B65p2oiP.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DTBsETmh.js";import"./useThemeWithoutDefault-CsQox1c5.js";import"./index-Bqzh3Cp6.js";import"./index-SI8xS9YR.js";import"./useToggle-CTbnrs6g.js";import"./containerQuery-Byjr_VO4.js";import"./createSvgIcon-D5aI0OD-.js";import"./createSvgIcon-C735tyhT.js";import"./useId-BgzzDjMB.js";import"./useControlled-DuXZYv4M.js";import"./Typography-DBsSg8HG.js";import"./DisplayText-Ip6DAA4t.js";import"./ButtonRow-Daljk49C.js";import"./toNumber-DqzDMBhJ.js";import"./useMosaicTranslation-di9nduwf.js";import"./DataViewFilterDropdownButtons-B_FGX-fS.js";import"./index-D77a6n9L.js";import"./ExpandMore-Dl7LJMh2.js";import"./Chip-DNwtmRHZ.js";import"./CheckboxList-DDeK_q7o.js";import"./Checkbox-_0JQhlIl.js";import"./StyledOptionFormControl-Cwl0Q2GB.js";import"./formControlState-BI4toe_X.js";import"./Text-ChOjGkiI.js";import"./DataViewPrimaryFilter.styled-BORqmM8y.js";import"./PickerPanel-DZf3nPrH.js";import"./PageHeader-DbhT7nzS.js";import"./FormFieldText.styled-CJUQilOD.js";import"./Spinner-m5_IcvNq.js";import"./MoreVert-DKRvdU6X.js";import"./formats-CMvQHWsT.js";import"./Snackbar-DaK7yvE3.js";import"./Close-DkzKxLx5.js";import"./ClickAwayListener-Cp0VGVh1.js";import"./ChipList-BAGapJVE.js";import"./RadioButton-DJt--7LN.js";import"./Toggle-DNhIGYb9.js";import"./Dialog-DofFNcAh.js";import"./ThemeProvider-DAuzgAUw.js";import"./SideNav-BYUaKA9k.js";import"./tslib.es6-CvpyDmub.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";const Et={title:"Components/Form"},F=b`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`,u=g.div`
    background: #b95252;
    color: white;
    padding: 1rem;
    font-size: 16px;
    animation-name: ${F};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
`,S=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:o,onChange:s=>r(s.target.value),onBlur:i,style:{padding:"1rem",fontSize:24,borderRadius:0,border:"2px dashed #ccc"},placeholder:"Title"}),e&&t.jsx(u,{children:e})]})},j=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("textarea",{rows:10,value:o,cols:20,onChange:s=>r(s.target.value),onBlur:i,placeholder:"Start your story here...",style:{padding:"1rem",fontSize:18,fontFamily:"serif",borderRadius:0,border:"2px dashed #ccc"}}),e&&t.jsx(u,{children:e})]})},C=n=>{const{onChange:r,onBlur:i,value:o,fieldDef:{label:e}}=n;return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx("input",{type:"checkbox",id:"vehicle1",name:"vehicle1",value:"Bike",onChange:s=>r(o?void 0:s.target.value),onBlur:i,checked:o==="Bike"}),t.jsx("label",{htmlFor:"vehicle1",children:e})]})})},a=({showState:n})=>{const r=x(),{state:i,methods:{setFieldValue:o},handleSubmit:e}=r;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=v}),[]);const s=m.useMemo(()=>[{name:"title",label:"Title",type:S,validators:[l]},{name:"story",label:"Story",type:j,validators:[l]},{name:"checkbox",label:"Save as draft",type:C}],[]),h=function(){o({name:"text1",value:"My New Value"})};return t.jsxs(t.Fragment,{children:[n&&t.jsx("pre",{children:JSON.stringify(i,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(f,{...r,buttons:y(e),title:"Custom components",fields:s})}),t.jsx("div",{children:t.jsx("button",{onClick:h,children:"Set Text1 Value"})})]})};a.args={showState:!1};a.argTypes={showState:{name:"Show state"}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
  showState
}: typeof CustomFields.args): ReactElement => {
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
    name: "title",
    label: "Title",
    type: TitleField,
    validators: [required]
  }, {
    name: "story",
    label: "Story",
    type: StoryField,
    validators: [required]
  }, {
    name: "checkbox",
    label: "Save as draft",
    type: SaveAsDraftField
  }], []);
  const setText1Value = function () {
    setFieldValue({
      name: "text1",
      value: "My New Value"
    });
  };
  return <>
            {showState && <pre>{JSON.stringify(state, null, "  ")}</pre>}
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Custom components" fields={fields} />
            </div>
            <div>
                <button onClick={setText1Value}>Set Text1 Value</button>
            </div>
        </>;
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Mt=["CustomFields"];export{a as CustomFields,Mt as __namedExportsOrder,Et as default};
