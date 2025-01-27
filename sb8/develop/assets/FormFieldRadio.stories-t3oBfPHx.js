import{j as e}from"./jsx-runtime-DKBipoO1.js";import{r as x}from"./index-P8U4y8pz.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import{u as T,F as k}from"./Form-BRiCKpcY.js";import{o as i,g as O}from"./options-DJM8a-gX.js";const q={title:"FormFields/FormFieldRadio"},t=({label:n,required:o,skeleton:s,disabled:a,instructionText:l,helperText:p,prepop:d,prepopData:u,optionsType:c})=>{const m=T(),{state:j,handleSubmit:D}=m,R=x.useMemo(()=>[{name:"radio",label:n,type:"radio",required:o,disabled:a,inputSettings:{options:c==="Synchronous"?i:O},helperText:p,instructionText:l}],[n,o,a,l,p,c]),_=x.useMemo(()=>d?async()=>u:void 0,[d,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(k,{...m,buttons:S(D),title:"Radio Field",fields:R,skeleton:s,getFormValues:_})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepop:!1,prepopData:{radio:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepop:{name:"Prepopulate"},prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const P=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:O},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=T(),{state:o,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(k,{...n,buttons:S(s),title:"Form Title",description:"This is a description example",fields:P})]})};var b,f,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepop,
  prepopData,
  optionsType
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "radio",
    label,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsType === "Synchronous" ? optionsLibrary : getOptions
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, instructionText, helperText, optionsType]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,h,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(F=(h=r.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const E=["Playground","KitchenSink"],N=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{N as s};
