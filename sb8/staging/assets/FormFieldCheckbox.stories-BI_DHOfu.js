import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as x}from"./index-Btj5Fd67.js";import{u as F,F as S}from"./index-Wv0uro41.js";import{o as i,g as k}from"./options-DJM8a-gX.js";import{r as O}from"./renderButtons-BmHfsf_z.js";const P={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:r,skeleton:s,disabled:l,instructionText:a,helperText:p,prepop:c,prepopData:u,optionsType:d})=>{const m=F(),{state:D,handleSubmit:j}=m,_=x.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:r,disabled:l,inputSettings:{options:d==="Synchronous"?i:k},helperText:p,instructionText:a}],[r,l,n,a,p,d]),q=x.useMemo(()=>c?async()=>u:void 0,[c,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(D,null,"  ")}),e.jsx(S,{...m,buttons:O(j),title:"Checkbox Field",fields:_,skeleton:s,getFormValues:q})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepop:!1,prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]},optionsType:"Synchronous"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepop:{name:"Prepopulate"},prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const B=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:k},helperText:"Helper Text",instructionText:"InstructionText"}],o=()=>{const n=F(),{state:r,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(S,{...n,buttons:O(s),title:"Form Title",description:"This is a description example",fields:B})]})};var b,h,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
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
}`,...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var T,y,g;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const C=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:C,default:P},Symbol.toStringTag,{value:"Module"}));export{J as s};
