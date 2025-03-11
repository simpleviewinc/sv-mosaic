import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as l}from"./index-Btj5Fd67.js";import{u as C,F as O}from"./Form-mIbk-vgo.js";import{r as j}from"./renderButtons-BmHfsf_z.js";import{c as P}from"./commonFieldControl-DXwRxrKb.js";import{m as a,b as _}from"./options-C_LXlRBD.js";const B={title:"FormFields/FormFieldCheckbox"},t=({label:n,required:r,skeleton:s,disabled:c,instructionText:p,helperText:u,prepop:m,prepopData:d,optionsType:x,optionCount:i,itemsPerColumn:b})=>{const h=C(),{state:D,handleSubmit:M}=h,f=l.useMemo(()=>x==="Synchronous"?a.slice(0,i):async()=>(await _()).slice(0,i),[i,x]),N=l.useMemo(()=>[{name:"checkbox",label:n,type:"checkbox",required:r,disabled:c,inputSettings:{options:f,itemsPerColumn:Number(b)},helperText:u,instructionText:p}],[n,r,c,f,u,p,b]),q=l.useMemo(()=>m?async()=>d:void 0,[m,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(D,null,"  ")}),e.jsx(O,{...h,buttons:j(M),title:"Checkbox Field",fields:N,skeleton:s,getFormValues:q})]})};t.args={...P.args,prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]},optionsType:"Synchronous",optionCount:25,itemsPerColumn:8};t.argTypes={...P.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},optionCount:{name:"Number of Options"},itemsPerColumn:{name:"Items per Column"}};const E=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:a},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:a},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{getOptions:_},helperText:"Helper Text",instructionText:"InstructionText"}],o=()=>{const n=C(),{state:r,handleSubmit:s}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(O,{...n,buttons:j(s),title:"Form Title",description:"This is a description example",fields:E})]})};var y,F,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
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
      return mockOptions.slice(0, optionCount);
    }
    return async () => {
      const result = await getOptions();
      return result.slice(0, optionCount);
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
}`,...(g=(F=t.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var S,T,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const I=["Playground","KitchenSink"],z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{z as s};
