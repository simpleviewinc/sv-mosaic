import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as f}from"./index-BP8_t0zE.js";import{u as S,F as T}from"./formUtils-B8bT8wlW.js";import"./Button-Dv6p7qil.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{g as O}from"./options-BIHZJM4G.js";const D={title:"FormFields/FormFieldChips"},l=[{label:"Option 1",value:"Option_1"},{label:"Option 2",value:"Option_2"},{label:"Option 3",value:"Option_3"}],t=({label:n,required:r,skeleton:o,disabled:s,instructionText:p,helperText:u,optionsOrigin:a})=>{const d=S(),{state:y,handleSubmit:q}=d,R=f.useMemo(()=>[{label:n,helperText:u,instructionText:p,required:r,disabled:s,name:"Form Field Chip Single Select",type:"chip",inputSettings:{options:a==="Local"?l:void 0,getOptions:a==="DB"?O:void 0}}],[n,u,p,r,s,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(T,{...d,buttons:F(q),title:"Chips Field",fields:R,skeleton:o})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const i=()=>{const n=S(),{state:r,handleSubmit:o}=n,s=f.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:O},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(T,{...n,buttons:F(o),title:"Form Regular Example",description:"This is a description example",fields:s})]})};var c,m,x;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
    label,
    helperText,
    instructionText,
    required,
    disabled,
    name: "Form Field Chip Single Select",
    type: "chip",
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    }
  }] as FieldDef[]), [label, helperText, instructionText, required, disabled, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,b,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "chipRegular",
    label: "Regular example",
    type: "chip",
    required: false,
    disabled: false,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipDisable",
    label: "Disable example",
    type: "chip",
    required: false,
    disabled: true,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipRequired",
    label: "Required example",
    type: "chip",
    required: true,
    disabled: false,
    inputSettings: {
      options
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }, {
    name: "chipDB",
    label: "From data base options example",
    type: "chip",
    required: false,
    disabled: false,
    inputSettings: {
      getOptions
    },
    helperText: "Helper text",
    instructionText: "Instruction text"
  }], []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Regular Example" description="This is a description example" fields={fields} />
        </>;
}`,...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const j=["Playground","KitchenSink"],v=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:i,Playground:t,__namedExportsOrder:j,default:D},Symbol.toStringTag,{value:"Module"}));export{v as s};
