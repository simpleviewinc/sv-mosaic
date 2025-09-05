import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as f}from"./index-D0AnReJb.js";import{u as C,F as O}from"./index-COHoq8jo.js";import{r as j}from"./renderButtons-DP0bGf4C.js";import{c as P}from"./commonFieldControl-LQDYMh-C.js";import{m as l,g as _}from"./options-DEOzrsxm.js";const E={title:"FormFields/FormFieldCheckbox"},t=({label:n,hideLabel:s,required:i,disabled:c,instructionText:a,forceInstructionTooltip:p,helperText:u,prepop:D,prepopData:I,optionsType:m,optionCount:o,itemsPerColumn:d})=>{const b=C({data:D?I:{}}),{state:N,handleSubmit:q}=b,x=f.useMemo(()=>m==="Synchronous"?o>=0?l.slice(0,o):l:async()=>{const h=await _();return o>=0?h.slice(0,o):h},[o,m]),B=f.useMemo(()=>[{name:"checkbox",label:n,hideLabel:s,type:"checkbox",required:i,disabled:c,inputSettings:{options:x,itemsPerColumn:Number(d)},helperText:u,instructionText:a,forceInstructionTooltip:p}],[n,s,i,c,x,d,u,a,p]);return e.jsxs(e.Fragment,{children:[e.jsx(O,{...b,buttons:j(q),title:"Checkbox Field",fields:B}),e.jsx("pre",{children:JSON.stringify(N,null,"  ")})]})};t.args={...P.args({prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]}}),optionsType:"Synchronous",optionCount:25,itemsPerColumn:8};t.argTypes={...P.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},optionCount:{name:"Number of Options"},itemsPerColumn:{name:"Items per Column"}};const M=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:_},helperText:"Helper Text",instructionText:"InstructionText"}],r=()=>{const n=C(),{state:s,handleSubmit:i}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(O,{...n,buttons:j(i),title:"Form Title",description:"This is a description example",fields:M})]})};var y,T,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
    type: "checkbox",
    required,
    disabled,
    inputSettings: {
      options,
      itemsPerColumn: Number(itemsPerColumn)
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }] as FieldDef[], [label, hideLabel, required, disabled, options, itemsPerColumn, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Checkbox Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(g=(T=t.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var F,S,k;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(k=(S=r.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const J=["Playground","KitchenSink"],z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:J,default:E},Symbol.toStringTag,{value:"Module"}));export{z as s};
