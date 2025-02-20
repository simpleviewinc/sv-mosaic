import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as x}from"./index-Btj5Fd67.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{c as T}from"./commonFieldControl-DXwRxrKb.js";import{u as O,F as j}from"./index-BGhy33fP.js";import{o as i,g as k}from"./options-DJM8a-gX.js";const E={title:"FormFields/FormFieldRadio"},t=({label:n,required:r,skeleton:s,disabled:a,instructionText:l,helperText:p,prepop:d,prepopData:c,optionsType:u})=>{const m=O(),{state:_,handleSubmit:R}=m,D=x.useMemo(()=>[{name:"radio",label:n,type:"radio",required:r,disabled:a,inputSettings:{options:u==="Synchronous"?i:k},helperText:p,instructionText:l}],[n,r,a,l,p,u]),q=x.useMemo(()=>d?async()=>c:void 0,[d,c]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(_,null,"  ")}),e.jsx(j,{...m,buttons:h(R),title:"Radio Field",fields:D,skeleton:s,getFormValues:q})]})};t.args={...T.args,prepopData:{radio:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous"};t.argTypes={...T.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const M=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:k},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const n=O(),{state:r,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(j,{...n,buttons:h(s),title:"Form Title",description:"This is a description example",fields:M})]})};var y,g,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,F,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(S=(F=o.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const J=["Playground","KitchenSink"],v=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:J,default:E},Symbol.toStringTag,{value:"Module"}));export{v as s};
