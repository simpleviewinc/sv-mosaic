import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as x}from"./index-Btj5Fd67.js";import{u as T,F as S}from"./index-BtJjjTTO.js";import{o as i,g as k}from"./options-DJM8a-gX.js";import{r as O}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-DXwRxrKb.js";const B={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:r,skeleton:s,disabled:l,instructionText:a,helperText:c,prepop:p,prepopData:u,optionsType:d})=>{const m=T(),{state:_,handleSubmit:D}=m,C=x.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:r,disabled:l,inputSettings:{options:d==="Synchronous"?i:k},helperText:c,instructionText:a}],[r,l,n,a,c,d]),q=x.useMemo(()=>p?async()=>u:void 0,[p,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(_,null,"  ")}),e.jsx(S,{...m,buttons:O(D),title:"Checkbox Field",fields:C,skeleton:s,getFormValues:q})]})};t.args={...j.args,prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]},optionsType:"Synchronous"};t.argTypes={...j.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const E=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:k},helperText:"Helper Text",instructionText:"InstructionText"}],o=()=>{const n=T(),{state:r,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(S,{...n,buttons:O(s),title:"Form Title",description:"This is a description example",fields:E})]})};var b,h,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
    name: "checkbox",
    label,
    type: "checkbox",
    required,
    disabled,
    inputSettings: {
      options: optionsType === "Synchronous" ? optionsLibrary : getOptions
    },
    helperText,
    instructionText
  }] as FieldDef[], [required, disabled, label, instructionText, helperText, optionsType]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,g,F;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(F=(g=o.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const M=["Playground","KitchenSink"],H=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:M,default:B},Symbol.toStringTag,{value:"Module"}));export{H as s};
