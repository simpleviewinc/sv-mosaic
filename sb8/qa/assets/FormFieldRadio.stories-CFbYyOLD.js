import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as R}from"./index-BP8_t0zE.js";import{r as F}from"./storyUtils-ByV2Bsyv.js";import{u as h,F as S}from"./formUtils-CayaUY58.js";import{g as T}from"./getOptions-Dskq5-q7.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./theme-CtvfJOCv.js";import"./Button-CDqJWCGq.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-Dv9SgNkb.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";import"./advancedSelectionUtils-Dc6CTSWK.js";const _e={title:"FormFields/FormFieldRadio"},l=[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Label 3",value:"label_3"}],t=({label:r,required:i,skeleton:n,disabled:a,instructionText:p,helperText:m,optionsOrigin:s})=>{const d=h(),{state:O,handleSubmit:y}=d,k=R.useMemo(()=>[{name:"radio",label:r,type:"radio",required:i,disabled:a,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?T:void 0},helperText:m,instructionText:p}],[r,i,a,p,m,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(S,{...d,buttons:F(y),title:"Radio Field",fields:k,skeleton:n})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const j=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:T},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const r=h(),{state:i,handleSubmit:n}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(S,{...r,buttons:F(n),title:"Form Title",description:"This is a description example",fields:j})]})};var u,c,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  optionsOrigin
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => ([{
    name: "radio",
    label,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    },
    helperText,
    instructionText
  }] as FieldDef[]), [label, required, disabled, instructionText, helperText, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const ve=["Playground","KitchenSink"];export{o as KitchenSink,t as Playground,ve as __namedExportsOrder,_e as default};
