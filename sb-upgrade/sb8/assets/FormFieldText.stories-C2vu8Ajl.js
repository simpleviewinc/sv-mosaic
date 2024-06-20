import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{r as O}from"./index-CDs2tPxN.js";import{u as m,F as p}from"./formUtils-CJK8oCl3.js";import{r as d}from"./storyUtils-ByV2Bsyv.js";import{d as j}from"./AccountCircle-CDIhWqbY.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./theme-tUuL1bpb.js";import"./Button-B_QyrzNG.js";import"./useThemeProps-DZj2lB8w.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./assertThisInitialized-DcNg8fFv.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./ownerWindow-DvT1GKkC.js";import"./createChainedFunction-BO_9K8Jh.js";import"./useToggle-D8hNafRh.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./DataViewFilterMultiselect-DBNsiiVc.js";import"./CheckboxList-D367s6pM.js";import"./isSymbol-BfMcYl5G.js";import"./Checkbox-6SaAzcXQ.js";import"./FormControlLabel-D6jwZlG2.js";import"./reactTools-i2anJKce.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./debounce-Dt4LOG5H.js";import"./ButtonRow-BqlcWF3K.js";import"./Spinner-DZM1MKnU.js";import"./Chip-CJpy9ewu.js";import"./BodyText-gyiTNPhg.js";import"./sizes-C6oSOElx.js";import"./RadioButton-DCf-nOaB.js";import"./StyledFormControl.styled-CrNYvyVp.js";import"./Toggle-CBkjn9tX.js";import"./testIds-B75WQI-K.js";import"./ColorSelected-CdqgCvRo.js";import"./TitleWrapper-DgtWfsMQ.js";import"./containerQuery-BObFYVCA.js";import"./MoreVert-BFnAsiRm.js";import"./ChevronRight-BWG-u8Bq.js";import"./PageHeader-CF61fenh.js";import"./MenuSelect-Bs7eM6mM.js";import"./useMediaQuery-BWOPdfoF.js";import"./formats-CDjt32hU.js";import"./Dialog-D4zKyLjY.js";import"./SideNav-BQB8pb76.js";import"./Snackbar-Dr5-fbso.js";import"./Close-CGoSL4st.js";import"./ClickAwayListener-BvBAfXuM.js";import"./createSvgIcon-Ci5omaqv.js";import"./extends-CF3RwP-h.js";import"./styled-P6hUx81_.js";import"./emotion-unitless.esm-sScrWPmR.js";const Je={title:"FormFields/FormFieldText"},n=({label:t,required:r,skeleton:s,disabled:c,instructionText:u,helperText:x,size:h,type:f,placeholder:a,maxCharacters:b,multiline:g,minRows:T,maxRows:S,withIcon:y})=>{const w=m(),{handleSubmit:H,state:_}=w,E=O.useMemo(()=>[{name:"textfield",label:t,type:"text",required:r,disabled:c,size:h,inputSettings:{prefixElement:y&&e.jsx(j,{}),maxCharacters:b,placeholder:a===""?void 0:a,multiline:g,type:f,minRows:T,maxRows:S},helperText:x,instructionText:u}],[t,r,c,b,h,a,y,g,x,u,T,S,f]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{buttons:d(H),title:"Text Field",fields:E,...w,skeleton:s}),e.jsx("pre",{children:JSON.stringify(_,null,"  ")})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",type:"text",placeholder:"placeholder",maxCharacters:20,multiline:!1,minRows:3,maxRows:4,withIcon:!1};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},type:{name:"Type",control:{type:"select"},options:["password","text"]},placeholder:{name:"Placeholder"},maxCharacters:{name:"Maximum Characters"},multiline:{name:"Multi-line"},minRows:{name:"Minimum Rows"},maxRows:{name:"Maximum Rows"},withIcon:{name:"Show Icon"}};const M=[{name:"regular",label:"Regular example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"password",label:"Password type example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"Password",type:"Password"},helperText:"Helper text",instructionText:"Instruction text"},{name:"multiline",label:"Multiline example",type:"text",required:!1,size:"md",inputSettings:{multiline:!0,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withMaxChar",label:"With a max chars stablished",type:"text",required:!1,size:"md",inputSettings:{maxCharacters:20,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withIcon",label:"With an icon",type:"text",required:!1,size:"md",inputSettings:{prefixElement:e.jsx(j,{}),placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabled",label:"Disabled example shows the placeholder",type:"text",required:!1,disabled:!0,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"text",required:!1,size:"xs",helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"text",required:!1,size:"sm",helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"text",required:!1,size:"md",helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"text",required:!1,size:"lg",helperText:"Helper text",instructionText:"Instruction text"}],i=()=>{const t=m(),{state:r,handleSubmit:s}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(p,{...t,buttons:d(s),title:"Form Title",description:"Form description",fields:M})]})},o=t=>{if(t!=="Test")return'This field should have the value "Test"'},P=[{name:"onBlur",label:"onBlur",type:"text",instructionText:"This field will be validated only when the input loses focus",validators:[o],validateOn:"onBlur"},{name:"onBlurAmend",label:"onBlurAmend",type:"text",instructionText:"This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",validators:[o],validateOn:"onBlurAmend"},{name:"onBlurChange",label:"onBlurChange",type:"text",instructionText:"This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",validators:[o],validateOn:"onBlurChange"},{name:"onChange",label:"onChange",type:"text",instructionText:"This field should be validated with every change",validators:[o],validateOn:"onChange"}],l=()=>{const t=m(),{handleSubmit:r}=t;return e.jsx(e.Fragment,{children:e.jsx(p,{...t,buttons:d(r),title:"Validation Strategies",fields:P})})};n.__docgenInfo={description:"",methods:[],displayName:"Playground"};i.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};l.__docgenInfo={description:"",methods:[],displayName:"ValidationStrategies"};var F,z,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var k,B,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validation Strategies" fields={validationStrategyFields} />
        </>;
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Ke=["Playground","KitchenSink","ValidationStrategies"];export{i as KitchenSink,n as Playground,l as ValidationStrategies,Ke as __namedExportsOrder,Je as default};
