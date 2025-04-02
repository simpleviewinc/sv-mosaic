import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as R}from"./index-D0AnReJb.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import{c as S}from"./commonFieldControl-LQDYMh-C.js";import{u as h,F}from"./Form-DPJ23PVO.js";import{m as i,g as T}from"./options-DEOzrsxm.js";const D={title:"FormFields/FormFieldRadio"},t=({label:n,required:o,prepop:s,prepopData:O,disabled:a,instructionText:l,helperText:p,optionsType:d})=>{const c=h({data:s?O:{}}),{state:j,handleSubmit:_}=c,k=R.useMemo(()=>[{name:"radio",label:n,type:"radio",required:o,disabled:a,inputSettings:{options:d==="Synchronous"?i:T},helperText:p,instructionText:l}],[n,o,a,l,p,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(F,{...c,buttons:g(_),title:"Radio Field",fields:k})]})};t.args={...S.args({prepopData:{radio:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous"};t.argTypes={...S.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const q=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:T},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=h(),{state:o,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(F,{...n,buttons:g(s),title:"Form Title",description:"This is a description example",fields:q})]})};var u,m,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  helperText,
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
    name: "radio",
    label,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsType === "Synchronous" ? mockOptions : getOptions
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, instructionText, helperText, optionsType]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} />
        </>;
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,y,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const E=["Playground","KitchenSink"],M=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{M as s};
