import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as L}from"./index-BP8_t0zE.js";import{u as f,F as T}from"./formUtils-CTuvLVRY.js";import{r as h}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-ThfS-v4H.js";import"./theme-CtvfJOCv.js";import"./Button-DMdypOK9.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-BHz2sU_E.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-Bf0hMbCe.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CHRnBGKw.js";import"./TitleWrapper-iXKWJO9P.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-Ck68ugi1.js";import"./MenuSelect-B7Q44GLs.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-DGV3Cnhk.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-DH51ksEg.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const qe={title:"FormFields/FormFieldToggle"},t=({label:r,required:o,skeleton:n,disabled:l,instructionText:s,helperText:a,toggleLabel:m})=>{const p=f(),{state:F,handleSubmit:S}=p,y=L.useMemo(()=>[{name:"toggle",label:r,type:"toggle",required:o,disabled:l,inputSettings:{toggleLabel:m},helperText:a,instructionText:s}],[o,l,m,r,a,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx(T,{...p,buttons:h(S),title:"Toggle Field",fields:y,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle Label"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"}};const j=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],i=()=>{const r=f(),{state:o,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(T,{...r,buttons:h(n),title:"Form Title",description:"This is a description example",fields:j})]})};var d,g,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  toggleLabel
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "toggle",
    label,
    type: "toggle",
    required,
    disabled,
    inputSettings: {
      toggleLabel
    },
    helperText,
    instructionText
  }], [required, disabled, toggleLabel, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Toggle Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var c,b,x;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const De=["Playground","KitchenSink"];export{i as KitchenSink,t as Playground,De as __namedExportsOrder,qe as default};
