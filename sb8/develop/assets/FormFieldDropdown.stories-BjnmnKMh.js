import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as h}from"./index-Btj5Fd67.js";import{r as z}from"./renderButtons-BmHfsf_z.js";import{c as w}from"./commonFieldControl-DXwRxrKb.js";import{u as D,F as O}from"./index-BGhy33fP.js";import{o as t,g as j}from"./options-DJM8a-gX.js";const E={title:"FormFields/FormFieldDropdown"},n=({label:o,required:s,skeleton:i,disabled:l,instructionText:p,helperText:a,prepop:d,prepopData:c,optionsType:m,placeholder:u,size:x})=>{const g=D(),{state:k,handleSubmit:_}=g,H=h.useMemo(()=>[{name:"dropdown",label:o,type:"dropdown",required:s,disabled:l,size:x,inputSettings:{options:m==="Synchronous"?t:j,placeholder:u},helperText:a,instructionText:p}],[o,s,l,x,m,u,a,p]),I=h.useMemo(()=>d?async()=>c:void 0,[d,c]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(k,null,"  ")}),e.jsx(O,{...g,buttons:z(_),title:"Dropdown Field",fields:H,skeleton:i,getFormValues:I})]})};n.args={...w.args,prepopData:{dropdown:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous",size:"sm",placeholder:"Choose a movie.."};n.argTypes={...w.argTypes,prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const P=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:j,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const o=D(),{state:s,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(O,{...o,buttons:z(i),title:"Form title",description:"Form description",fields:P})]})};var S,y,b;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepop,
  prepopData,
  optionsType,
  placeholder,
  size
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "dropdown",
    label,
    type: "dropdown",
    required,
    disabled,
    size,
    inputSettings: {
      options: optionsType === "Synchronous" ? optionsLibrary : getOptions,
      placeholder
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, size, optionsType, placeholder, helperText, instructionText]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Dropdown Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var F,T,f;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};const M=["Playground","KitchenSink"],q=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{q as s};
