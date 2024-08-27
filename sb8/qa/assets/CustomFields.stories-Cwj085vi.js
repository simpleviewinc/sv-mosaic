import{j as t}from"./jsx-runtime-CexXSJP5.js";import{r as m}from"./index-BP8_t0zE.js";import{u as f,a as l,F as x}from"./formUtils-D4w1BXP5.js";import{r as y}from"./storyUtils-BoiXCagy.js";import{O as v}from"./utils-BR2PSRFh.js";import{c as g,s as b}from"./styled-components.browser.esm-8MQ3dTkk.js";import"./FormFieldText.styled-CusvceWb.js";import"./theme-D4oZEIDo.js";import"./Button-CV4WQHOn.js";import"./useThemeProps-CM1XnGOG.js";import"./ButtonBase-tCQFe4bJ.js";import"./emotion-react.browser.esm-HRrwnANE.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CVnL_KSQ.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-BSB-bEHM.js";import"./createSvgIcon-Ctt9EnSd.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./index-Cxj5u1iW.js";import"./CheckboxList-BqPA3yNH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-_RXYTNJz.js";import"./FormControlLabel-Cy6KcgOl.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CTR0uMlm.js";import"./ButtonRow-BUuIelsn.js";import"./Spinner-tjn3ihlQ.js";import"./Chip-o_TLrMPM.js";import"./Typography-Bm8mlfoU.js";import"./SubtitleText-A3erhwRa.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DC2x7tAZ.js";import"./StyledFormControl.styled-Buznl6wO.js";import"./Toggle-BBqCIk62.js";import"./testIds-BYqMnK8Q.js";import"./ColorSelected-nTNPRhkz.js";import"./TitleWrapper-XsnYHx4y.js";import"./containerQuery-Du8CFTMo.js";import"./TitleText-CFZnrs7C.js";import"./MoreVert-Dt36-imA.js";import"./ChevronRight-CA0RLU_a.js";import"./PageHeader-gEDmJvxs.js";import"./MenuSelect-3weukW5x.js";import"./useMediaQuery-D1mIG_qj.js";import"./formats-CDjt32hU.js";import"./Dialog-BnTyqaE_.js";import"./SideNav-BixOpWCF.js";import"./Snackbar-VggVBkSJ.js";import"./Close-DUapGJLS.js";import"./ClickAwayListener-DFiznkjI.js";import"./Blank-DPcqZTKv.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";const Ot={title:"Components/Form"},F=g`
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
`,S=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:o,onChange:s=>r(s.target.value),onBlur:i,style:{padding:"1rem",fontSize:24,borderRadius:0,border:"2px dashed #ccc"},placeholder:"Title"}),e&&t.jsx(u,{children:e})]})},j=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("textarea",{rows:10,value:o,cols:20,onChange:s=>r(s.target.value),onBlur:i,placeholder:"Start your story here...",style:{padding:"1rem",fontSize:18,fontFamily:"serif",borderRadius:0,border:"2px dashed #ccc"}}),e&&t.jsx(u,{children:e})]})},C=n=>{const{onChange:r,onBlur:i,value:o,fieldDef:{label:e}}=n;return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx("input",{type:"checkbox",id:"vehicle1",name:"vehicle1",value:"Bike",onChange:s=>r(o?void 0:s.target.value),onBlur:i,checked:o==="Bike"}),t.jsx("label",{htmlFor:"vehicle1",children:e})]})})},a=({showState:n})=>{const r=f(),{state:i,methods:{setFieldValue:o},handleSubmit:e}=r;m.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=v}),[]);const s=m.useMemo(()=>[{name:"title",label:"Title",type:S,validators:[l]},{name:"story",label:"Story",type:j,validators:[l]},{name:"checkbox",label:"Save as draft",type:C}],[]),h=function(){o({name:"text1",value:"My New Value"})};return t.jsxs(t.Fragment,{children:[n&&t.jsx("pre",{children:JSON.stringify(i,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(x,{...r,buttons:y(e),title:"Custom components",fields:s})}),t.jsx("div",{children:t.jsx("button",{onClick:h,children:"Set Text1 Value"})})]})};a.args={showState:!1};a.argTypes={showState:{name:"Show state"}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Rt=["CustomFields"];export{a as CustomFields,Rt as __namedExportsOrder,Ot as default};
