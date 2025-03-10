import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as _}from"./index-Btj5Fd67.js";import{u as d,F as c}from"./Form-DT7HL9F1.js";import{r as u}from"./renderButtons-BmHfsf_z.js";import{c as O}from"./commonFieldControl-DXwRxrKb.js";import{A as k}from"./AccountCircle-e-yYgfPh.js";const A={title:"FormFields/FormFieldText"},n=({label:t,hideLabel:l,required:s,skeleton:H,disabled:m,instructionText:p,helperText:x,size:h,type:f,placeholder:o,maxCharacters:g,multiline:b,minRows:S,maxRows:T,withIcon:y})=>{const w=d(),{handleSubmit:E,state:M}=w,P=_.useMemo(()=>[{name:"textfield",label:t,hideLabel:l,type:"text",required:s,disabled:m,size:h,inputSettings:{prefixElement:y&&e.jsx(k,{}),maxCharacters:g,placeholder:o===""?void 0:o,multiline:b,type:f,minRows:S,maxRows:T},helperText:x,instructionText:p}],[t,l,s,m,g,h,o,y,b,x,p,S,T,f]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{buttons:u(E),title:"Text Field",fields:P,...w,skeleton:H}),e.jsx("pre",{children:JSON.stringify(M,null,"  ")})]})};n.args={...O.args,size:"sm",type:"text",placeholder:"placeholder",maxCharacters:20,multiline:!1,minRows:3,maxRows:4,withIcon:!1};n.argTypes={...O.argTypes,size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},type:{name:"Type",control:{type:"select"},options:["password","text"]},placeholder:{name:"Placeholder"},maxCharacters:{name:"Maximum Characters"},multiline:{name:"Multi-line"},minRows:{name:"Minimum Rows"},maxRows:{name:"Maximum Rows"},withIcon:{name:"Show Icon"}};const J=[{name:"regular",label:"Regular example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"password",label:"Password type example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"Password",type:"Password"},helperText:"Helper text",instructionText:"Instruction text"},{name:"multiline",label:"Multiline example",type:"text",required:!1,size:"md",inputSettings:{multiline:!0,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withMaxChar",label:"With a max chars stablished",type:"text",required:!1,size:"md",inputSettings:{maxCharacters:20,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withIcon",label:"With an icon",type:"text",required:!1,size:"md",inputSettings:{prefixElement:e.jsx(k,{}),placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabled",label:"Disabled example shows the placeholder",type:"text",required:!1,disabled:!0,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"text",required:!1,size:"xs",helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"text",required:!1,size:"sm",helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"text",required:!1,size:"md",helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"text",required:!1,size:"lg",helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const t=d(),{state:l,handleSubmit:s}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx(c,{...t,buttons:u(s),title:"Form Title",description:"Form description",fields:J})]})},a=t=>{if(t!=="Test")return'This field should have the value "Test"'},N=[{name:"onBlur",label:"onBlur",type:"text",instructionText:"This field will be validated only when the input loses focus",validators:[a],validateOn:"onBlur"},{name:"onBlurAmend",label:"onBlurAmend",type:"text",instructionText:"This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",validators:[a],validateOn:"onBlurAmend"},{name:"onBlurChange",label:"onBlurChange",type:"text",instructionText:"This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",validators:[a],validateOn:"onBlurChange"},{name:"onChange",label:"onChange",type:"text",instructionText:"This field should be validated with every change",validators:[a],validateOn:"onChange"}],i=()=>{const t=d(),{handleSubmit:l}=t;return e.jsx(e.Fragment,{children:e.jsx(c,{...t,buttons:u(l),title:"Validation Strategies",fields:N})})};var F,z,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`({
  label,
  hideLabel,
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
    instructionText
  }], [label, hideLabel, required, disabled, maxCharacters, size, placeholder, withIcon, multiline, helperText, instructionText, minRows, maxRows, type]);
  return <>
            <Form buttons={renderButtons(handleSubmit)} title="Text Field" fields={fields} {...controller} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(v=(z=n.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var I,C,R;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Form description" fields={kitchenSinkfields} />
        </>;
}`,...(R=(C=r.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var j,B,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validation Strategies" fields={validationStrategyFields} />
        </>;
}`,...(q=(B=i.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};const V=["Playground","KitchenSink","ValidationStrategies"],U=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,ValidationStrategies:i,__namedExportsOrder:V,default:A},Symbol.toStringTag,{value:"Module"}));export{U as s};
