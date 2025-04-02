import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as g}from"./index-D0AnReJb.js";import{u as f,F as y}from"./Form-CgwovX7A.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import{c as T}from"./commonFieldControl-LQDYMh-C.js";import{m as l,g as F}from"./options-DEOzrsxm.js";const _={title:"FormFields/FormFieldChips"},t=({label:n,required:s,disabled:i,instructionText:o,helperText:p,prepop:O,prepopData:q,optionsType:a})=>{const c=f({data:O?q:{}}),{state:R,handleSubmit:D}=c,j=g.useMemo(()=>[{label:n,helperText:p,instructionText:o,required:s,disabled:i,name:"chip",type:"chip",inputSettings:{options:a==="Synchronous"?l:F}}],[n,p,o,s,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(R,null,"  ")}),e.jsx(y,{...c,buttons:S(D),title:"Chips Field",fields:j})]})};t.args={...T.args({prepopData:{chip:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous"};t.argTypes={...T.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const r=()=>{const n=f(),{state:s,handleSubmit:i}=n,o=g.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:F},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(y,{...n,buttons:S(i),title:"Form Regular Example",description:"This is a description example",fields:o})]})};var u,d,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
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
    helperText,
    instructionText,
    required,
    disabled,
    name: "chip",
    type: "chip",
    inputSettings: {
      options: optionsType === "Synchronous" ? mockOptions : getOptions
    }
  }] as FieldDef[], [label, helperText, instructionText, required, disabled, optionsType]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} />
        </>;
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,h,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const H=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:H,default:_},Symbol.toStringTag,{value:"Module"}));export{J as s};
