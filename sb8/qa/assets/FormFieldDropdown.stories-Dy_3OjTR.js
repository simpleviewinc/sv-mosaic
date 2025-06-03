import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as H}from"./index-D0AnReJb.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as f}from"./commonFieldControl-LQDYMh-C.js";import{u as z,F as w}from"./index-BnXkLRTE.js";import{m as t,g as D}from"./options-DEOzrsxm.js";const E={title:"FormFields/FormFieldDropdown"},n=({label:o,hideLabel:s,required:i,prepop:O,prepopData:j,instructionText:l,forceInstructionTooltip:p,disabled:a,helperText:d,optionsType:c,placeholder:m,size:u})=>{const x=z({data:O?j:{}}),{state:I,handleSubmit:_}=x,k=H.useMemo(()=>[{name:"dropdown",label:o,hideLabel:s,type:"dropdown",required:i,disabled:a,size:u,inputSettings:{options:c==="Synchronous"?t:D,placeholder:m},helperText:d,instructionText:l,forceInstructionTooltip:p}],[o,s,i,a,u,c,m,d,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(I,null,"  ")}),e.jsx(w,{...x,buttons:F(_),title:"Dropdown Field",fields:k})]})};n.args={...f.args({prepopData:{dropdown:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous",size:"sm",placeholder:"Choose a movie.."};n.argTypes={...f.argTypes,prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const P=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:D,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const o=z(),{state:s,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(w,{...o,buttons:F(i),title:"Form title",description:"Form description",fields:P})]})};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  instructionText,
  forceInstructionTooltip,
  disabled,
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
    hideLabel,
    type: "dropdown",
    required,
    disabled,
    size,
    inputSettings: {
      options: optionsType === "Synchronous" ? mockOptions : getOptions,
      placeholder
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }] as FieldDef[], [label, hideLabel, required, disabled, size, optionsType, placeholder, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Dropdown Field" fields={fields} />
        </>;
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,b,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const B=["Playground","KitchenSink"],C=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:B,default:E},Symbol.toStringTag,{value:"Module"}));export{C as s};
