import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as y}from"./index-D0AnReJb.js";import{u as T,F as S}from"./Form-CgwovX7A.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as O}from"./commonFieldControl-LQDYMh-C.js";import{m as l,g as q}from"./options-DEOzrsxm.js";const H={title:"FormFields/FormFieldChips"},t=({label:n,hideLabel:i,required:s,disabled:o,instructionText:p,forceInstructionTooltip:a,helperText:c,prepop:R,prepopData:D,optionsType:u})=>{const d=T({data:R?D:{}}),{state:j,handleSubmit:I}=d,_=y.useMemo(()=>[{label:n,hideLabel:i,helperText:c,instructionText:p,forceInstructionTooltip:a,required:s,disabled:o,name:"chip",type:"chip",inputSettings:{options:u==="Synchronous"?l:q}}],[n,i,c,p,a,s,o,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(S,{...d,buttons:F(I),title:"Chips Field",fields:_})]})};t.args={...O.args({prepopData:{chip:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous"};t.argTypes={...O.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const r=()=>{const n=T(),{state:i,handleSubmit:s}=n,o=y.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:q},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(S,{...n,buttons:F(s),title:"Form Regular Example",description:"This is a description example",fields:o})]})};var m,x,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  prepop,
  prepopData,
  optionsType
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    label,
    hideLabel,
    helperText,
    instructionText,
    forceInstructionTooltip,
    required,
    disabled,
    name: "chip",
    type: "chip",
    inputSettings: {
      options: optionsType === "Synchronous" ? mockOptions : getOptions
    }
  }] as FieldDef[], [label, hideLabel, helperText, instructionText, forceInstructionTooltip, required, disabled, optionsType]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} />
        </>;
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
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
      options: mockOptions
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
      options: mockOptions
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
      options: mockOptions
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const k=["Playground","KitchenSink"],P=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:k,default:H},Symbol.toStringTag,{value:"Module"}));export{P as s};
