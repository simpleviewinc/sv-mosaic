import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as D}from"./index-D0AnReJb.js";import{u as d,F as c}from"./index-BjjNLCMz.js";import{r as p}from"./renderButtons-DP0bGf4C.js";import{c as H}from"./commonFieldControl-LQDYMh-C.js";import{A as E}from"./AccountCircle-Dzn4yrb0.js";const J={title:"FormFields/FormFieldText"},n=({label:t,hideLabel:r,required:s,prepop:M,prepopData:P,disabled:u,instructionText:m,forceInstructionTooltip:x,helperText:h,size:f,type:g,placeholder:a,maxCharacters:b,multiline:T,minRows:S,maxRows:y,withIcon:w})=>{const F=d({data:M?P:{}}),{handleSubmit:k,state:_}=F,A=D.useMemo(()=>[{name:"text",label:t,hideLabel:r,type:"text",required:s,disabled:u,size:f,inputSettings:{prefixElement:w&&e.jsx(E,{}),maxCharacters:b,placeholder:a===""?void 0:a,multiline:T,type:g,minRows:S,maxRows:y},helperText:h,instructionText:m,forceInstructionTooltip:x}],[t,r,s,u,f,w,b,a,T,g,S,y,h,m,x]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{buttons:p(k),title:"Text Field",fields:A,...F}),e.jsx("pre",{children:JSON.stringify(_,null,"  ")})]})};n.args={...H.args({prepopData:{text:"Rover"}}),size:"sm",type:"text",placeholder:"Placeholder",maxCharacters:20,multiline:!1,minRows:3,maxRows:4,withIcon:!1};n.argTypes={...H.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},type:{name:"Type",control:{type:"select"},options:["password","text"]},placeholder:{name:"Placeholder"},maxCharacters:{name:"Maximum Characters"},multiline:{name:"Multi-line"},minRows:{name:"Minimum Rows"},maxRows:{name:"Maximum Rows"},withIcon:{name:"Show Icon"}};const N=[{name:"regular",label:"Regular example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"password",label:"Password type example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"Password",type:"Password"},helperText:"Helper text",instructionText:"Instruction text"},{name:"multiline",label:"Multiline example",type:"text",required:!1,size:"md",inputSettings:{multiline:!0,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withMaxChar",label:"With a max chars stablished",type:"text",required:!1,size:"md",inputSettings:{maxCharacters:20,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withIcon",label:"With an icon",type:"text",required:!1,size:"md",inputSettings:{prefixElement:e.jsx(E,{}),placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabled",label:"Disabled example shows the placeholder",type:"text",required:!1,disabled:!0,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"text",required:!1,size:"xs",helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"text",required:!1,size:"sm",helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"text",required:!1,size:"md",helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"text",required:!1,size:"lg",helperText:"Helper text",instructionText:"Instruction text"}],l=()=>{const t=d(),{state:r,handleSubmit:s}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(c,{...t,buttons:p(s),title:"Form Title",description:"Form description",fields:N})]})},o=t=>{if(t!=="Test")return'This field should have the value "Test"'},V=[{name:"onBlur",label:"onBlur",type:"text",instructionText:"This field will be validated only when the input loses focus",validators:[o],validateOn:"onBlur"},{name:"onBlurAmend",label:"onBlurAmend",type:"text",instructionText:"This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",validators:[o],validateOn:"onBlurAmend"},{name:"onBlurChange",label:"onBlurChange",type:"text",instructionText:"This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",validators:[o],validateOn:"onBlurChange"},{name:"onChange",label:"onChange",type:"text",instructionText:"This field should be validated with every change",validators:[o],validateOn:"onChange"}],i=()=>{const t=d(),{handleSubmit:r}=t;return e.jsx(e.Fragment,{children:e.jsx(c,{...t,buttons:p(r),title:"Validation Strategies",fields:V})})};var v,z,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
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
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    handleSubmit,
    state
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "text",
    label,
    hideLabel,
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
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, size, withIcon, maxCharacters, placeholder, multiline, type, minRows, maxRows, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Text Field" fields={fields} {...controller} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(I=(z=n.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,R,j;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Form description" fields={kitchenSinkfields} />
        </>;
}`,...(j=(R=l.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var B,q,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validation Strategies" fields={validationStrategyFields} />
        </>;
}`,...(O=(q=i.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const K=["Playground","KitchenSink","ValidationStrategies"],Y=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:n,ValidationStrategies:i,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{Y as s};
