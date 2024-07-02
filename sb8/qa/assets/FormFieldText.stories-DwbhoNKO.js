import{j as e}from"./jsx-runtime-CexXSJP5.js";import{r as M}from"./index-BP8_t0zE.js";import{u as m,F as p}from"./formUtils-C5IZy0Gf.js";import{r as d}from"./storyUtils-ByV2Bsyv.js";import{d as j}from"./AccountCircle-yqdk-ivO.js";import"./FormFieldText.styled-C9eExh2D.js";import"./theme-CtvfJOCv.js";import"./Button-BBNnoZZP.js";import"./useThemeProps-Ds-LJhvX.js";import"./ButtonBase-D0hlh4xx.js";import"./emotion-react.browser.esm-DIgfljIv.js";import"./assertThisInitialized-CO-dlV3K.js";import"./Popper-CwZOyH_P.js";import"./index-BxmsGmlx.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-lipGlewK.js";import"./useMosaicTranslation-DzvJLSut.js";import"./formControlState-CeBwnzuK.js";import"./createSvgIcon-CQgce1KM.js";import"./createSvgIcon-COYRGr1j.js";import"./useId-BlXdlps1.js";import"./useControlled-im5M3O13.js";import"./DataViewFilterMultiselectDropdownContent-O9LV55xE.js";import"./CheckboxList-BCG88NR0.js";import"./isSymbol-CEVJpixJ.js";import"./Checkbox-DnFKua5S.js";import"./FormControlLabel-CIIRzCdb.js";import"./reactTools-D2O6dTsh.js";import"./debounce-C_xMouBr.js";import"./DataViewPrimaryFilter.styled-DecvZ7Zb.js";import"./ButtonRow-BZVmEtFA.js";import"./Spinner-BPM3b5sV.js";import"./Chip-C1CRxgK0.js";import"./Typography-v36okEvj.js";import"./SubtitleText-jYpjhjNV.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DUvfdQ-A.js";import"./StyledFormControl.styled-DBTTYzHm.js";import"./Toggle-BQ1JdWW7.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-BZr_74pT.js";import"./TitleWrapper-DkQZJitR.js";import"./containerQuery-C4iAQuB_.js";import"./TitleText-Dy6rc9cG.js";import"./MoreVert-DQju6pbX.js";import"./ChevronRight-JG1qL3pJ.js";import"./PageHeader-B5WzlHGP.js";import"./MenuSelect-nAevESHO.js";import"./useMediaQuery-CVp5GJAd.js";import"./formats-CDjt32hU.js";import"./Dialog-Dh5ejmnv.js";import"./SideNav-BDfV6asS.js";import"./Snackbar-BbTrOH4B.js";import"./Close-B-5TycoQ.js";import"./ClickAwayListener-DFiznkjI.js";import"./createSvgIcon-DQitHYV2.js";import"./extends-CF3RwP-h.js";import"./styled-BlYH_7wi.js";import"./emotion-unitless.esm-sScrWPmR.js";const Le={title:"FormFields/FormFieldText"},n=({label:t,required:r,skeleton:s,disabled:c,instructionText:u,helperText:x,size:h,type:f,placeholder:a,maxCharacters:b,multiline:T,minRows:g,maxRows:S,withIcon:y})=>{const w=m(),{handleSubmit:H,state:E}=w,O=M.useMemo(()=>[{name:"textfield",label:t,type:"text",required:r,disabled:c,size:h,inputSettings:{prefixElement:y&&e.jsx(j,{}),maxCharacters:b,placeholder:a===""?void 0:a,multiline:T,type:f,minRows:g,maxRows:S},helperText:x,instructionText:u}],[t,r,c,b,h,a,y,T,x,u,g,S,f]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{buttons:d(H),title:"Text Field",fields:O,...w,skeleton:s}),e.jsx("pre",{children:JSON.stringify(E,null,"  ")})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",type:"text",placeholder:"placeholder",maxCharacters:20,multiline:!1,minRows:3,maxRows:4,withIcon:!1};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},type:{name:"Type",control:{type:"select"},options:["password","text"]},placeholder:{name:"Placeholder"},maxCharacters:{name:"Maximum Characters"},multiline:{name:"Multi-line"},minRows:{name:"Minimum Rows"},maxRows:{name:"Maximum Rows"},withIcon:{name:"Show Icon"}};const P=[{name:"regular",label:"Regular example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"password",label:"Password type example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"Password",type:"Password"},helperText:"Helper text",instructionText:"Instruction text"},{name:"multiline",label:"Multiline example",type:"text",required:!1,size:"md",inputSettings:{multiline:!0,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withMaxChar",label:"With a max chars stablished",type:"text",required:!1,size:"md",inputSettings:{maxCharacters:20,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withIcon",label:"With an icon",type:"text",required:!1,size:"md",inputSettings:{prefixElement:e.jsx(j,{}),placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabled",label:"Disabled example shows the placeholder",type:"text",required:!1,disabled:!0,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"text",required:!1,size:"xs",helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"text",required:!1,size:"sm",helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"text",required:!1,size:"md",helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"text",required:!1,size:"lg",helperText:"Helper text",instructionText:"Instruction text"}],i=()=>{const t=m(),{state:r,handleSubmit:s}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(p,{...t,buttons:d(s),title:"Form Title",description:"Form description",fields:P})]})},l=t=>{if(t!=="Test")return'This field should have the value "Test"'},A=[{name:"onBlur",label:"onBlur",type:"text",instructionText:"This field will be validated only when the input loses focus",validators:[l],validateOn:"onBlur"},{name:"onBlurAmend",label:"onBlurAmend",type:"text",instructionText:"This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",validators:[l],validateOn:"onBlurAmend"},{name:"onBlurChange",label:"onBlurChange",type:"text",instructionText:"This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",validators:[l],validateOn:"onBlurChange"},{name:"onChange",label:"onChange",type:"text",instructionText:"This field should be validated with every change",validators:[l],validateOn:"onChange"}],o=()=>{const t=m(),{handleSubmit:r}=t;return e.jsx(e.Fragment,{children:e.jsx(p,{...t,buttons:d(r),title:"Validation Strategies",fields:A})})};var F,z,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  size,
  type,
  placeholder,
  maxCharacters,
  multiline,
  minRows,
  maxRows,
  withIcon
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "textfield",
    label,
    type: "text",
    required,
    disabled,
    size,
    inputSettings: {
      prefixElement: withIcon && <AccountCircle />,
      maxCharacters,
      placeholder: placeholder === "" ? undefined : placeholder,
      multiline,
      type,
      minRows,
      maxRows
    },
    helperText,
    instructionText
  }], [label, required, disabled, maxCharacters, size, placeholder, withIcon, multiline, helperText, instructionText, minRows, maxRows, type]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Text Field" fields={fields} {...controller} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(v=(z=n.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var I,R,q;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Form description" fields={kitchenSinkfields} />
        </>;
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var B,C,k;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validation Strategies" fields={validationStrategyFields} />
        </>;
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const We=["Playground","KitchenSink","ValidationStrategies"];export{i as KitchenSink,n as Playground,o as ValidationStrategies,We as __namedExportsOrder,Le as default};
