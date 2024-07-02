import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as C}from"./index-BP8_t0zE.js";import{u as T,F as S}from"./formUtils-C5IZy0Gf.js";import{r as E}from"./storyUtils-ByV2Bsyv.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";const Oe={title:"FormFields/FormFieldTextEditor"},t=({label:r,disabled:i,required:n,skeleton:y,instructionText:l,helperText:a,toggleLabel:F,spellcheck:s,direction:m,language:p,maxCharacters:d})=>{const c=T(),{state:k,handleSubmit:q}=c,j=C.useMemo(()=>[{name:"textEditor",label:r,type:"textEditor",required:n,inputSettings:{spellcheck:s,direction:m,language:p,maxCharacters:d},disabled:i,helperText:a,instructionText:l}],[m,n,i,F,r,a,l,d,s,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(k,null,"  ")}),e.jsx(S,{...c,title:"Text Editor Field",fields:j,buttons:E(q),skeleton:y})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle label",spellcheck:!1,direction:"ltr",language:"en",maxCharacters:100};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"},spellcheck:{name:"Direction",control:{type:"select"},options:["ltr","rtl"]},direction:{name:"Direction"},language:{name:"Language"},maxCharacters:{name:"Maximum Characters"}};const L=[{name:"spellCheck",label:"Text editor with spellcheck active",type:"textEditor",required:!1,inputSettings:{spellcheck:!0}},{name:"ltr",label:"Text editor with left to right direction",type:"textEditor",required:!1,inputSettings:{direction:"ltr"}},{name:"rtl",label:"Text editor with right to left direction",type:"textEditor",required:!1,inputSettings:{direction:"rtl"}},{name:"german",label:"Text editor in german (de) language",type:"textEditor",required:!1,inputSettings:{language:"de"}},{name:"maxChars",label:"Text editor with max character limit",type:"textEditor",required:!1,inputSettings:{maxCharacters:20}},{name:"disabled",label:"Disabled text editor",type:"textEditor",required:!1,disabled:!0}],o=()=>{const r=T(),{state:i,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(S,{...r,title:"Text Editor Kitchen Sink",description:"This is a description example",fields:L,buttons:E(n)})]})};var u,x,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  instructionText,
  helperText,
  toggleLabel,
  spellcheck,
  direction,
  language,
  maxCharacters
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "textEditor",
    label,
    type: "textEditor",
    required,
    inputSettings: {
      spellcheck,
      direction,
      language,
      maxCharacters
    },
    disabled,
    helperText,
    instructionText
  }], [direction, required, disabled, toggleLabel, label, helperText, instructionText, maxCharacters, spellcheck, language]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Field" fields={fields} buttons={renderButtons(handleSubmit)} skeleton={skeleton} />
        </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} title="Text Editor Kitchen Sink" description="This is a description example" fields={fields} buttons={renderButtons(handleSubmit)} />
        </>;
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const we=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,we as __namedExportsOrder,Oe as default};
