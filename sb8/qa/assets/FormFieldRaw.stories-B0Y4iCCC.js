import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as T}from"./index-BP8_t0zE.js";import{u as x,F as b}from"./formUtils-CayaUY58.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{s as w}from"./theme-CtvfJOCv.js";import"./FormFieldText.styled-DKoDye3Y.js";import"./Button-CDqJWCGq.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-BVb7KZlV.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-Cx7DIS0Z.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-Coberten.js";import"./createSvgIcon-Df7bw5TJ.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-Dhd-ubYC.js";import"./CheckboxList-D1zEVDHX.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-BVMkdcLx.js";import"./FormControlLabel-DCWWYNLI.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-B3u2V0ac.js";import"./ButtonRow-i3PhXCTq.js";import"./Spinner-D_slr9_p.js";import"./Chip-wSpTF7XV.js";import"./Typography-DSyzRETI.js";import"./SubtitleText-mEFPNCHN.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DhL92CuH.js";import"./StyledFormControl.styled-dMQyuqfm.js";import"./Toggle-osRV5K3v.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BeNizQJS.js";import"./TitleWrapper-DJn4aB1e.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dhe7UX1h.js";import"./MoreVert-Bjq7SBh2.js";import"./ChevronRight-3hnMDb9i.js";import"./PageHeader-Dv9SgNkb.js";import"./MenuSelect-CGQLQZS-.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dtcy1NrH.js";import"./SideNav-CAh37aY1.js";import"./Snackbar-LbExvKVl.js";import"./Close-CFi9yJil.js";import"./ClickAwayListener-BOIWMbZr.js";const S=w.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`,De={title:"FormFields/FormFieldRaw"};function y(){return e.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}async function R(){return{raw:e.jsx(y,{})}}const t=({label:r,required:o,disabled:i,instructionText:l,helperText:s})=>{const a=x(),{handleSubmit:h}=a,F=T.useMemo(()=>[{name:"raw",label:r,type:"raw",required:o,disabled:i,helperText:s,instructionText:l}],[o,i,r,s,l]);return e.jsx(e.Fragment,{children:e.jsx(b,{...a,buttons:f(h),title:"Raw Field",fields:F,getFormValues:R})})},j=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}];t.args={label:"Label",disabled:!1,required:!1,instructionText:"Instruction text",helperText:"Helper text"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"}};const n=()=>{const r=x(),{state:o,handleSubmit:i}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(b,{...r,buttons:f(i),title:"Form Title",description:"This is a description example",fields:j})]})};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "raw",
    label,
    type: "raw",
    required,
    disabled,
    helperText,
    instructionText
  }], [required, disabled, label, helperText, instructionText]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Raw Field" fields={fields} getFormValues={getFormValues} />
        </>;
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const Le=["Playground","KitchenSink"];export{n as KitchenSink,t as Playground,Le as __namedExportsOrder,De as default};
