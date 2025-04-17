import{j as t}from"./jsx-runtime-EKYJJIwR.js";import{r as l}from"./index-DDfD_3TG.js";import{u as f,r as m,F as x}from"./Form-rskk-Nac.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as v}from"./utils-BR2PSRFh.js";import{s as g,c as b}from"./styled-components.browser.esm-DXsh1Zr7.js";import"./theme-DWrYR5Gu.js";import"./SideNav-CvsHqpPT.js";import"./containerQuery-XietOkEy.js";import"./useToggle-BK_3QGB6.js";import"./Button-_6SRCSsN.js";import"./generateUtilityClasses-Dav9K5Jg.js";import"./ButtonBase-B3sVjXKq.js";import"./useIsFocusVisible-DxTeNLkh.js";import"./Popper-BFIFukJ-.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useTheme-BjWv6DhY.js";import"./index-DCMmMN8S.js";import"./index-ywIwhVjx.js";import"./index-BpD74PYt.js";import"./debounce-G1u4Gy2U.js";import"./DataViewPrimaryFilter.styled-DOEMDM8r.js";import"./createSvgIcon-ryN2wBPb.js";import"./createSvgIcon-Bc8E_7Df.js";import"./useId-C6ulm9BR.js";import"./useControlled-0MmPqhal.js";import"./Chip-TPBsYk2z.js";import"./testIds-Dso8kRSM.js";import"./useMosaicTranslation-CCZzHAOs.js";import"./DataViewFilterDropdown-D8zsAVgS.js";import"./formControlState-D0eomaiA.js";import"./ButtonRow-5AdSMJlC.js";import"./Spinner-D0BoAIGc.js";import"./Typography-DhgnvJ03.js";import"./SubtitleText-DyATjJCY.js";import"./CheckboxList-DKZDPSzE.js";import"./Checkbox-CL37ymQB.js";import"./FormControlLabel-D-u7WmCt.js";import"./getThemeProps-DXoot0qR.js";import"./sizes-C6oSOElx.js";import"./RadioButton-D-T1QIB0.js";import"./StyledFormControl.styled-pfNyCqn0.js";import"./Toggle-BjiP2rWg.js";import"./formats-sBod7wm8.js";import"./Dialog-CyXhuKHl.js";import"./ChevronRight-BWmUBWCy.js";import"./TitleWrapper-CEGR9Ons.js";import"./TitleText-B4ASHioH.js";import"./Snackbar-Bslrzt6A.js";import"./Close-BnT1QDqQ.js";import"./ClickAwayListener-MSE9i65R.js";import"./MoreVert-cizeWCO8.js";import"./PageHeader-SBBckNNB.js";import"./tslib.es6-CvpyDmub.js";import"./emotion-is-prop-valid.cjs.default-BrZTFlsY.js";const Vt={title:"Components/Form"},F=b`
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
    font-family: sans-serif;
    animation-name: ${F};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
`,S=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("input",{type:"text",value:o,onChange:s=>r(s.target.value),onBlur:i,style:{padding:"1rem",fontSize:24,borderRadius:0,border:"2px dashed #ccc"},placeholder:"Title"}),e&&t.jsx(u,{children:e})]})},j=n=>{const{onChange:r,onBlur:i,value:o,error:e}=n;return t.jsxs(t.Fragment,{children:[t.jsx("textarea",{rows:10,value:o,cols:20,onChange:s=>r(s.target.value),onBlur:i,placeholder:"Start your story here...",style:{padding:"1rem",fontSize:18,fontFamily:"serif",borderRadius:0,border:"2px dashed #ccc"}}),e&&t.jsx(u,{children:e})]})},C=n=>{const{onChange:r,onBlur:i,value:o,fieldDef:{label:e}}=n;return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx("input",{type:"checkbox",id:"vehicle1",name:"vehicle1",value:"Bike",onChange:s=>r(o?void 0:s.target.value),onBlur:i,checked:o==="Bike"}),t.jsx("label",{htmlFor:"vehicle1",children:e})]})})},a=({showState:n})=>{const r=f(),{state:i,methods:{setFieldValue:o},handleSubmit:e}=r;l.useEffect(()=>(document.body.style.margin="0px",()=>{document.body.style.margin=v}),[]);const s=l.useMemo(()=>[{name:"title",label:"Title",type:S,validators:[m]},{name:"story",label:"Story",type:j,validators:[m]},{name:"checkbox",label:"Save as draft",type:C}],[]),h=function(){o({name:"text1",value:"My New Value"})};return t.jsxs(t.Fragment,{children:[n&&t.jsx("pre",{children:JSON.stringify(i,null,"  ")}),t.jsx("div",{style:{height:"100vh"},children:t.jsx(x,{...r,buttons:y(e),title:"Custom components",fields:s})}),t.jsx("div",{children:t.jsx("button",{onClick:h,children:"Set Text1 Value"})})]})};a.args={showState:!1};a.argTypes={showState:{name:"Show state"}};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
