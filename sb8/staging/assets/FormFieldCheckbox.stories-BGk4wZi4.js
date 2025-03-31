import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as c}from"./index-Btj5Fd67.js";import{u as O,F as j}from"./Form-B7P8EMV6.js";import{r as P}from"./renderButtons-BmHfsf_z.js";import{c as _}from"./commonFieldControl-DXwRxrKb.js";import{m as i,b as D}from"./options-C_LXlRBD.js";const E={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:r,skeleton:l,disabled:a,instructionText:p,helperText:u,prepop:m,prepopData:d,optionsType:x,optionCount:o,itemsPerColumn:b})=>{const h=O(),{state:M,handleSubmit:N}=h,f=c.useMemo(()=>x==="Synchronous"?o>=0?i.slice(0,o):i:async()=>{const y=await D();return o>=0?y.slice(0,o):y},[o,x]),q=c.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:r,disabled:a,inputSettings:{options:f,itemsPerColumn:Number(b)},helperText:u,instructionText:p}],[n,r,a,f,u,p,b]),B=c.useMemo(()=>m?async()=>d:void 0,[m,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(M,null,"  ")}),e.jsx(j,{...h,buttons:P(N),title:"Checkbox Field",fields:q,skeleton:l,getFormValues:B})]})};t.args={..._.args,prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]},optionsType:"Synchronous",optionCount:25,itemsPerColumn:8};t.argTypes={..._.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},optionCount:{name:"Number of Options"},itemsPerColumn:{name:"Items per Column"}};const I=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:i},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:D},helperText:"Helper Text",instructionText:"InstructionText"}],s=()=>{const n=O(),{state:r,handleSubmit:l}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(j,{...n,buttons:P(l),title:"Form Title",description:"This is a description example",fields:I})]})};var F,g,k;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepop,
  prepopData,
  optionsType,
  optionCount,
  itemsPerColumn
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const options = useMemo<FormFieldCheckboxInputSettings["options"]>(() => {
    if (optionsType === "Synchronous") {
      return optionCount >= 0 ? mockOptions.slice(0, optionCount) : mockOptions;
    }
    return async () => {
      const result = await getOptions();
      return optionCount >= 0 ? result.slice(0, optionCount) : result;
    };
  }, [optionCount, optionsType]);
  const fields = useMemo((): FieldDef[] => [{
    name: "checkbox",
    label,
    type: "checkbox",
    required,
    disabled,
    inputSettings: {
      options,
      itemsPerColumn: Number(itemsPerColumn)
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, options, helperText, instructionText, itemsPerColumn]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(k=(g=t.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var S,T,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(C=(T=s.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const J=["Playground","KitchenSink"],z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:t,__namedExportsOrder:J,default:E},Symbol.toStringTag,{value:"Module"}));export{z as s};
