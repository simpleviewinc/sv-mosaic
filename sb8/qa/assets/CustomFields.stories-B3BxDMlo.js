import{j as t}from"./jsx-runtime-DiwAibxM.js";import{r as l}from"./index-Btj5Fd67.js";import{u as f,a as m,F as x}from"./Form-BPFGePWm.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as g}from"./utils-BR2PSRFh.js";import{c as v,s as b}from"./styled-components.browser.esm-DIT4wwZk.js";import"./theme-D38K4W-Z.js";import"./SideNav-D2hLlXvZ.js";import"./containerQuery-CksQJzsL.js";import"./useToggle-B3mbTfSB.js";import"./Button-DxOHnzJo.js";import"./generateUtilityClasses-B5i8Rs7p.js";import"./ButtonBase-B2xCaBev.js";import"./useIsFocusVisible-DHjyF8IZ.js";import"./Popper-BV6MzckQ.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-DELdgGyu.js";import"./index-T5NeFSal.js";import"./index-tXhrow7Y.js";import"./index-CrPr68dg.js";import"./debounce-IFS8tfQQ.js";import"./DataViewPrimaryFilter.styled-CTVdcnW9.js";import"./createSvgIcon-CAs7t9wT.js";import"./createSvgIcon-CM-As40z.js";import"./useId-DwELyCdS.js";import"./useControlled-D8KJxpyu.js";import"./Chip-BLORHG_J.js";import"./testIds-Cxqhkw8S.js";import"./useMosaicTranslation-DPUDh126.js";import"./DataViewFilterDropdown-M-CReHkM.js";import"./formControlState-BAf21Shc.js";import"./ButtonRow-KlomlsFy.js";import"./Spinner-C_uMqEwM.js";import"./Typography-iUA5kZEF.js";import"./SubtitleText-BrufIBLI.js";import"./CheckboxList-Dua-Ccba.js";import"./Checkbox-CMTKNKa4.js";import"./FormControlLabel-2hVWRnF1.js";import"./getThemeProps-Fw47730D.js";import"./sizes-C6oSOElx.js";import"./RadioButton-LFlv3WCh.js";import"./StyledFormControl.styled-CNCCtQwC.js";import"./Toggle-_4jhqXCQ.js";import"./formats-sBod7wm8.js";import"./Dialog-9INDoSZN.js";import"./ChevronRight-CNo34ydh.js";import"./TitleWrapper-kkXpxrCn.js";import"./TitleText-b_QXd7Yf.js";import"./Snackbar-DkvzNMib.js";import"./Close-gDfoKZ0c.js";import"./ClickAwayListener-DoPvkzLf.js";import"./MoreVert-B1D8IEMN.js";import"./PageHeader-BStOH7U_.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";const Vt={title:"Components/Form"},F=v`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`,u=b.div`
    background: #b95252;
    color: white;
    padding: 1rem;
    font-size: 16px;
    font-family: sans-serif;
    animation-name: ${F};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
`,S=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:o,onChange:s=>r(s.target.value),onBlur:i,style:{padding:"1rem",fontSize:24,borderRadius:0,border:"2px dashed #ccc"},placeholder:"Title"}),e&&t.jsx(u,{children:e})]})},j=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("textarea",{rows:10,value:o,cols:20,onChange:s=>r(s.target.value),onBlur:i,placeholder:"Start your story here...",style:{padding:"1rem",fontSize:18,fontFamily:"serif",borderRadius:0,border:"2px dashed #ccc"}}),e&&t.jsx(u,{children:e})]})},C=n=>{const{onChange:r,onBlur:i,value:o,fieldDef:{label:e}}=n;return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx("input",{type:"checkbox",id:"vehicle1",name:"vehicle1",value:"Bike",onChange:s=>r(o?void 0:s.target.value),onBlur:i,checked:o==="Bike"}),t.jsx("label",{htmlFor:"vehicle1",children:e})]})})},a=({showState:n})=>{const r=f(),{state:i,methods:{setFieldValue:o},handleSubmit:e}=r;l.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=g}),[]);const s=l.useMemo(()=>[{name:"title",label:"Title",type:S,validators:[m]},{name:"story",label:"Story",type:j,validators:[m]},{name:"checkbox",label:"Save as draft",type:C}],[]),h=function(){o({name:"text1",value:"My New Value"})};return t.jsxs(t.Fragment,{children:[n&&t.jsx("pre",{children:JSON.stringify(i,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(x,{...r,buttons:y(e),title:"Custom components",fields:s})}),t.jsx("div",{children:t.jsx("button",{onClick:h,children:"Set Text1 Value"})})]})};a.args={showState:!1};a.argTypes={showState:{name:"Show state"}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const wt=["CustomFields"];export{a as CustomFields,wt as __namedExportsOrder,Vt as default};
