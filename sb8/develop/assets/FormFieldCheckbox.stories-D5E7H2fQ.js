import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as b}from"./index-D0AnReJb.js";import{u as T,F as k}from"./Form-DPJ23PVO.js";import{r as C}from"./renderButtons-BmHfsf_z.js";import{c as O}from"./commonFieldControl-LQDYMh-C.js";import{m as l,g as j}from"./options-DEOzrsxm.js";const B={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:s,disabled:i,instructionText:a,helperText:c,prepop:P,prepopData:_,optionsType:p,optionCount:o,itemsPerColumn:u})=>{const m=T({data:P?_:{}}),{state:D,handleSubmit:N}=m,d=b.useMemo(()=>p==="Synchronous"?o>=0?l.slice(0,o):l:async()=>{const x=await j();return o>=0?x.slice(0,o):x},[o,p]),q=b.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:s,disabled:i,inputSettings:{options:d,itemsPerColumn:Number(u)},helperText:c,instructionText:a}],[n,s,i,d,c,a,u]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(D,null,"  ")}),e.jsx(k,{...m,buttons:C(N),title:"Checkbox Field",fields:q})]})};t.args={...O.args({prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]}}),optionsType:"Synchronous",optionCount:25,itemsPerColumn:8};t.argTypes={...O.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},optionCount:{name:"Number of Options"},itemsPerColumn:{name:"Items per Column"}};const E=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:j},helperText:"Helper Text",instructionText:"InstructionText"}],r=()=>{const n=T(),{state:s,handleSubmit:i}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(k,{...n,buttons:C(i),title:"Form Title",description:"This is a description example",fields:E})]})};var h,f,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
  helperText,
  prepop,
  prepopData,
  optionsType,
  optionCount,
  itemsPerColumn
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
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
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} />
        </>;
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,F,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const I=["Playground","KitchenSink"],K=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{K as s};
