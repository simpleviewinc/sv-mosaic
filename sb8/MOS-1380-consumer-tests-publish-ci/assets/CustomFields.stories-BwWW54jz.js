import{j as t}from"./jsx-runtime-nGUw9YhZ.js";import{r as m}from"./index-BP8_t0zE.js";import{u as f,a as l,F as x}from"./formUtils-C9VpIqNJ.js";import"./Button-Dv6p7qil.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as v}from"./utils-BR2PSRFh.js";import{c as g,s as b}from"./styled-components.browser.esm-8MQ3dTkk.js";import"./FormFieldText.styled-DY-cBMyi.js";import"./theme-DRtZtbPc.js";import"./useMosaicTranslation-CZCb37QS.js";import"./useIsFocusVisible-De2ftVE9.js";import"./generateUtilityClasses-DAcHHM0W.js";import"./formControlState-D52vkf9K.js";import"./createSvgIcon-CcHL1II5.js";import"./createSvgIcon-CPgMIgId.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./useId-DLncWxdO.js";import"./useControlled-im5M3O13.js";import"./Popper-CPbWUqAP.js";import"./useTheme-5hcycNQy.js";import"./index-BxmsGmlx.js";import"./index-BcS5vVNk.js";import"./CheckboxList-Bq1TaTYH.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-aoYNk8Xu.js";import"./FormControlLabel-n1qioM9o.js";import"./ButtonBase-BZmvw3BH.js";import"./getThemeProps-Cs15h2IA.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-CylNlUs-.js";import"./ButtonRow-OnULoQP7.js";import"./useToggle-lipGlewK.js";import"./Spinner-DgupAfKo.js";import"./Chip-Da3idaCC.js";import"./Typography-Br_RMLnS.js";import"./SubtitleText-Vdwjg1jD.js";import"./sizes-C6oSOElx.js";import"./RadioButton-CO2cFro8.js";import"./StyledFormControl.styled-BHyCFBbY.js";import"./Toggle-PGODfCtA.js";import"./testIds-BmLWG2HQ.js";import"./ColorSelected-CEyZfcGg.js";import"./TitleWrapper-B_YZcXoR.js";import"./containerQuery-C0QVV4Kt.js";import"./TitleText-C9TlfF_O.js";import"./MoreVert-BbmWEP2K.js";import"./ChevronRight-CSz705Z0.js";import"./PageHeader-lzGsiXAs.js";import"./formats-CDjt32hU.js";import"./Dialog-DbUj91wm.js";import"./useMediaQuery-CguehUMS.js";import"./SideNav-biYpQHtM.js";import"./TooltipIcon-CO3K7ssQ.js";import"./Snackbar-DNEJC7rG.js";import"./Close-Dlpx7KpR.js";import"./ClickAwayListener-DnjBLK-5.js";import"./tslib.es6-CRos2fHm.js";import"./emotion-unitless.esm-sScrWPmR.js";const Nt={title:"Components/Form"},F=g`
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ot=["CustomFields"];export{a as CustomFields,Ot as __namedExportsOrder,Nt as default};
