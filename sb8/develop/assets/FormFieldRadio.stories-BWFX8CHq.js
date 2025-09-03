import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as q}from"./index-D0AnReJb.js";import{r as g}from"./renderButtons-DP0bGf4C.js";import{c as S}from"./commonFieldControl-LQDYMh-C.js";import{u as F,F as T}from"./index-B4r44Pjp.js";import{m as i,g as O}from"./options-DEOzrsxm.js";const E={title:"FormFields/FormFieldRadio"},t=({label:n,hideLabel:r,required:s,prepop:j,prepopData:_,disabled:a,instructionText:l,forceInstructionTooltip:p,helperText:d,optionsType:c})=>{const u=F({data:j?_:{}}),{state:k,handleSubmit:R}=u,D=q.useMemo(()=>[{name:"radio",label:n,hideLabel:r,type:"radio",required:s,disabled:a,inputSettings:{options:c==="Synchronous"?i:O},helperText:d,instructionText:l,forceInstructionTooltip:p}],[n,r,s,a,c,d,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(k,null,"  ")}),e.jsx(T,{...u,buttons:g(R),title:"Radio Field",fields:D})]})};t.args={...S.args({prepopData:{radio:{value:"option_1-cat_1",label:"Option 1"}}}),optionsType:"Synchronous"};t.argTypes={...S.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const I=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{options:O},helperText:"Helper text",instructionText:"Instruction text"}],o=()=>{const n=F(),{state:r,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(T,{...n,buttons:g(s),title:"Form Title",description:"This is a description example",fields:I})]})};var m,x,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsType === "Synchronous" ? mockOptions : getOptions
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }] as FieldDef[], [label, hideLabel, required, disabled, optionsType, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} />
        </>;
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const J=["Playground","KitchenSink"],K=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:J,default:E},Symbol.toStringTag,{value:"Module"}));export{K as s};
