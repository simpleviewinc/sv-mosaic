import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as k}from"./index-Btj5Fd67.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as T}from"./commonFieldControl-LQDYMh-C.js";import{u as f,F as z}from"./Form-DsDAv5pr.js";import{m as t,g as w}from"./options-CuTclIsA.js";const H={title:"FormFields/FormFieldDropdown"},n=({label:o,required:s,prepop:i,prepopData:D,disabled:p,instructionText:l,helperText:a,optionsType:d,placeholder:c,size:m})=>{const u=f({data:i?D:{}}),{state:O,handleSubmit:j}=u,_=k.useMemo(()=>[{name:"dropdown",label:o,type:"dropdown",required:s,disabled:p,size:m,inputSettings:{options:d==="Synchronous"?t:w,placeholder:c},helperText:a,instructionText:l}],[o,s,p,m,d,c,a,l]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(z,{...u,buttons:F(j),title:"Dropdown Field",fields:_})]})};n.args={...T.args({prepopData:{dropdown:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous",size:"sm",placeholder:"Choose a movie.."};n.argTypes={...T.argTypes,prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const I=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:w,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const o=f(),{state:s,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(z,{...o,buttons:F(i),title:"Form title",description:"Form description",fields:I})]})};var x,h,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  helperText,
  optionsType,
  placeholder,
  size
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
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
      options: optionsType === "Synchronous" ? mockOptions : getOptions,
      placeholder
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, size, optionsType, placeholder, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Dropdown Field" fields={fields} />
        </>;
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const E=["Playground","KitchenSink"],M=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:E,default:H},Symbol.toStringTag,{value:"Module"}));export{M as s};
