import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as M}from"./index-BP8_t0zE.js";import{u as d,F as c}from"./formUtils-Cx4rbmEx.js";import"./Button-Dv6p7qil.js";import{r as u}from"./renderButtons-BmHfsf_z.js";import{d as k}from"./AccountCircle-CRE4B5zT.js";const P={title:"FormFields/FormFieldText"},n=({label:t,required:l,skeleton:a,disabled:m,instructionText:p,helperText:x,size:h,type:f,placeholder:o,maxCharacters:b,multiline:T,minRows:g,maxRows:S,withIcon:y})=>{const w=d(),{handleSubmit:H,state:O}=w,E=M.useMemo(()=>[{name:"textfield",label:t,type:"text",required:l,disabled:m,size:h,inputSettings:{prefixElement:y&&e.jsx(k,{}),maxCharacters:b,placeholder:o===""?void 0:o,multiline:T,type:f,minRows:g,maxRows:S},helperText:x,instructionText:p}],[t,l,m,b,h,o,y,T,x,p,g,S,f]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{buttons:u(H),title:"Text Field",fields:E,...w,skeleton:a}),e.jsx("pre",{children:JSON.stringify(O,null,"  ")})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",size:"sm",type:"text",placeholder:"placeholder",maxCharacters:20,multiline:!1,minRows:3,maxRows:4,withIcon:!1};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},type:{name:"Type",control:{type:"select"},options:["password","text"]},placeholder:{name:"Placeholder"},maxCharacters:{name:"Maximum Characters"},multiline:{name:"Multi-line"},minRows:{name:"Minimum Rows"},maxRows:{name:"Maximum Rows"},withIcon:{name:"Show Icon"}};const _=[{name:"regular",label:"Regular example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"password",label:"Password type example",type:"text",required:!1,size:"md",inputSettings:{placeholder:"Password",type:"Password"},helperText:"Helper text",instructionText:"Instruction text"},{name:"multiline",label:"Multiline example",type:"text",required:!1,size:"md",inputSettings:{multiline:!0,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withMaxChar",label:"With a max chars stablished",type:"text",required:!1,size:"md",inputSettings:{maxCharacters:20,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"withIcon",label:"With an icon",type:"text",required:!1,size:"md",inputSettings:{prefixElement:e.jsx(k,{}),placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabled",label:"Disabled example shows the placeholder",type:"text",required:!1,disabled:!0,size:"md",inputSettings:{placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"text",required:!1,size:"xs",helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"text",required:!1,size:"sm",helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"text",required:!1,size:"md",helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"text",required:!1,size:"lg",helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const t=d(),{state:l,handleSubmit:a}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx(c,{...t,buttons:u(a),title:"Form Title",description:"Form description",fields:_})]})},s=t=>{if(t!=="Test")return'This field should have the value "Test"'},A=[{name:"onBlur",label:"onBlur",type:"text",instructionText:"This field will be validated only when the input loses focus",validators:[s],validateOn:"onBlur"},{name:"onBlurAmend",label:"onBlurAmend",type:"text",instructionText:"This field will be validated only when the input loses focus, but the validation message will disappear once the user makes a change",validators:[s],validateOn:"onBlurAmend"},{name:"onBlurChange",label:"onBlurChange",type:"text",instructionText:"This field will initially only be validated when the input loses focus, but once the input has lost focus it will be validated with every change",validators:[s],validateOn:"onBlurChange"},{name:"onChange",label:"onChange",type:"text",instructionText:"This field should be validated with every change",validators:[s],validateOn:"onChange"}],i=()=>{const t=d(),{handleSubmit:l}=t;return e.jsx(e.Fragment,{children:e.jsx(c,{...t,buttons:u(l),title:"Validation Strategies",fields:A})})};var F,z,v;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`({
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
}`,...(v=(z=n.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var I,R,q;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Form description" fields={kitchenSinkfields} />
        </>;
}`,...(q=(R=r.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var j,B,C;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Validation Strategies" fields={validationStrategyFields} />
        </>;
}`,...(C=(B=i.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const D=["Playground","KitchenSink","ValidationStrategies"],G=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,ValidationStrategies:i,__namedExportsOrder:D,default:P},Symbol.toStringTag,{value:"Module"}));export{G as s};
