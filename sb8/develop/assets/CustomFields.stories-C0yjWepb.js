import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-wekxHvEx.js";import{u as x,r as l,F as f}from"./index-_5FHtemf.js";import{r as y}from"./renderButtons-DP0bGf4C.js";import{O as v}from"./dom-BR2PSRFh.js";import{c as g,p as b}from"./styled-components.browser.esm-DDzsJbQW.js";import"./MosaicContext-lnnMUzUH.js";import"./ButtonBase-C7cXrk-H.js";import"./mergeSlotProps-DU4484Lo.js";import"./identifier-DEb8G0aq.js";import"./sizes-BeWafy6f.js";import"./generateUtilityClasses-NbEjrlIW.js";import"./emotion-react.browser.esm-CeqoEiNQ.js";import"./TitleWrapper-D3WSxBwS.js";import"./Button-BUZ6VV6G.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useId-69YouNVI.js";import"./CircularProgress-XoRRhNY7.js";import"./index-BMiqk0dF.js";import"./useTooltip-CO_soAtI.js";import"./index-DzOTb6QP.js";import"./index-gSqf9uqI.js";import"./Popover-C7i3nYv0.js";import"./useTheme-cEQ9eIsv.js";import"./useMountWarning-xu6cFXpq.js";import"./createChainedFunction-BO_9K8Jh.js";import"./containerQuery-DwQ6QvMu.js";import"./ChevronLeft-DroHY8JW.js";import"./createSvgIcon-TbZ0fr-h.js";import"./Typography-ByjXglyy.js";import"./DisplayText-BWS-vBdr.js";import"./ButtonRow-CMLeEZxo.js";import"./testIds-B6Pox1zA.js";import"./_arrayIncludes-tabo-wbk.js";import"./ExpandMore-DMteFeWA.js";import"./Help-BqPVwWaf.js";import"./Chip-hlb4pmaG.js";import"./Clear-DlU6fmaM.js";import"./FormFieldText.styled-BsjNlYvA.js";import"./useFormControl-p_2RyLus.js";import"./formControlState-Dq1zat_P.js";import"./GlobalStyles-B7dp4lKd.js";import"./DataViewFilterDropdownButtons-F5j2IuvN.js";import"./StyledPopperPaper-BTEmDkdR.js";import"./TooltipIcon-Bg32Lmm2.js";import"./DataViewPrimaryFilter.styled-D9YhNElh.js";import"./Badge-s3xa3C_L.js";import"./Text-CfL2WyGr.js";import"./PickerPanel-CfqePg2q.js";import"./Add-VWMKePYD.js";import"./PageHeader-CcC-OptF.js";import"./Spinner-CUCt3e5k.js";import"./CheckboxList-BIvmP8ms.js";import"./Checkbox-C781D4ZG.js";import"./SwitchBase-D6K8Fkjn.js";import"./OptionField-R5YykxyG.js";import"./FormGroup-BOW51rb4.js";import"./MoreVert-Cw5dZkux.js";import"./stable-BFc8HSVh.js";import"./Settings-jBnAWEnT.js";import"./scrollbarStyles-Bv9JpEGT.js";import"./useEnhancedEffect-CqQDwvBE.js";import"./Snackbar-BbgjRMho.js";import"./Close-brVlBoUV.js";import"./ChipList-D-Z4RzuG.js";import"./RadioGroup-CR_TgkXs.js";import"./Toggle-DvSm-bxV.js";import"./Dialog-D_7vc-8r.js";import"./ThemeProvider-BUWLNaok.js";import"./Link-YMNHmFB7.js";import"./Card.styled-Xnb-IEFb.js";import"./OpenInNew-B-tDM0BO.js";import"./Delete-Bi8a5FsZ.js";import"./CloudDownload-B1kX4zjH.js";import"./InsertDriveFile-benxu_XD.js";const $t={title:"Components/Form"},F=b`
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Ht=["CustomFields"];export{a as CustomFields,Ht as __namedExportsOrder,$t as default};
