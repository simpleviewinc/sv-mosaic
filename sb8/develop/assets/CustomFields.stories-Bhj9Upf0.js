import{j as t}from"./jsx-runtime-DKBipoO1.js";import{r as l}from"./index-P8U4y8pz.js";import{u as f,a as m,F as x}from"./Form-B7eOweAp.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{O as g}from"./utils-BR2PSRFh.js";import{c as v,s as b}from"./styled-components.browser.esm-D5YpO4mE.js";import"./theme-BWODkkBA.js";import"./SideNav-xke3DMVF.js";import"./containerQuery-DJgF-qoV.js";import"./useToggle-L-Qovzra.js";import"./ColorSelected-CjDfVzXw.js";import"./index-Codu9OSz.js";import"./debounce-Z6vH9m7G.js";import"./DataViewPrimaryFilter.styled-Er7etcVt.js";import"./generateUtilityClasses-1sHYEbWh.js";import"./createSvgIcon-DFewkeLR.js";import"./createSvgIcon-RC5eQ6Qp.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useIsFocusVisible-wVqIivVs.js";import"./useId-BCEQtGZU.js";import"./ownerWindow-DvT1GKkC.js";import"./useControlled-DD4Xjs9b.js";import"./Chip-BumaKDUo.js";import"./ButtonBase-BdV3oO8q.js";import"./testIds-DZf96GK8.js";import"./useMosaicTranslation-DYaYF2Hb.js";import"./FormFieldText.styled-Ds1XZvsQ.js";import"./Button-BBMCWwxG.js";import"./Popper-Cd5SEDCW.js";import"./useTheme-C71PTKbl.js";import"./index-DEBaATwO.js";import"./index-CFV30bQv.js";import"./formControlState-ESfXU8N_.js";import"./ButtonRow-BY0Hsyx3.js";import"./Spinner-C3Q2NvqZ.js";import"./Typography-CaRYQLjB.js";import"./SubtitleText-7Wc_VQnd.js";import"./CheckboxList-DWbGDBtu.js";import"./Checkbox-Ss222WpW.js";import"./FormControlLabel-Cz3gWlyw.js";import"./getThemeProps-Dw2gS1Bo.js";import"./TitleWrapper-DHX6T7Lf.js";import"./TitleText-DwGMspTF.js";import"./MoreVert-DYAEDIA7.js";import"./ChevronRight-CLpIxDpq.js";import"./PageHeader-6-4PqPeJ.js";import"./sizes-C6oSOElx.js";import"./RadioButton-JvG0jxKp.js";import"./StyledFormControl.styled-CutdFJBO.js";import"./Toggle-B1w3j-dj.js";import"./formats-sBod7wm8.js";import"./Dialog-COZnJfGx.js";import"./useMediaQuery-CFxK-hux.js";import"./Snackbar-fMG10-ub.js";import"./Close-Z8pEHv17.js";import"./ClickAwayListener-6W73t1nN.js";import"./TooltipIcon-Dfxq7uJG.js";const wt={title:"Components/Form"},F=v`
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const Bt=["CustomFields"];export{a as CustomFields,Bt as __namedExportsOrder,wt as default};
