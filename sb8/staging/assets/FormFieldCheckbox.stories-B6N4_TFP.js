import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as j}from"./index-BP8_t0zE.js";import{u as g,F as k}from"./Form-CRLLXiYV.js";import{c as l}from"./FormFieldCheckboxUtils-C4lbz8gc.js";import{r as T}from"./renderButtons-BmHfsf_z.js";import{g as F}from"./options-CstHLxTf.js";const q={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:o,skeleton:s,disabled:a,instructionText:c,helperText:d,optionsOrigin:i})=>{const p=g(),{state:S,handleSubmit:O}=p,y=j.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:o,disabled:a,inputSettings:{options:i==="Local"?l:void 0,getOptions:i==="DB"?F:void 0},helperText:d,instructionText:c}],[o,a,n,c,d,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(k,{...p,buttons:T(O),title:"Checkbox Field",fields:y,skeleton:s})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const D=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:F},helperText:"Helper Text",instructionText:"InstructionText"}],r=()=>{const n=g(),{state:o,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(k,{...n,buttons:T(s),title:"Form Title",description:"This is a description example",fields:D})]})};var u,m,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
    name: "checkbox",
    label,
    type: "checkbox",
    required,
    disabled,
    inputSettings: {
      options: optionsOrigin === "Local" ? checkboxOptions : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    },
    helperText,
    instructionText
  }] as FieldDef[]), [required, disabled, label, instructionText, helperText, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const B=["Playground","KitchenSink"],R=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:B,default:q},Symbol.toStringTag,{value:"Module"}));export{R as s};
