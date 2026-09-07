import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./index-wekxHvEx.js";import{u as j,F as P}from"./index-Be0ln9Sk.js";import{r as D}from"./renderButtons-DP0bGf4C.js";import{c as _}from"./commonFieldControl-LQDYMh-C.js";import{m as a,g as I}from"./options-DEOzrsxm.js";const E={title:"FormFields/FormFieldCheckbox"},n=({label:t,hideLabel:i,required:l,disabled:p,instructionText:u,forceInstructionTooltip:m,helperText:d,prepop:v,prepopData:N,optionsType:b,optionCount:o,itemsPerColumn:h,includeUnlabeledSwatchOption:c})=>{const x=j({data:v?N:{}}),{state:L,handleSubmit:q}=x,y=O.useMemo(()=>{const S={value:"swatch",label:"",ariaLabel:"Swatch"};if(b==="Synchronous"){const s=o>=0?a.slice(0,o):a;return c?[...s,S]:s}return async()=>{const s=await I(),f=o>=0?s.slice(0,o):s;return c?[...f,S]:f}},[o,b,c]),B=O.useMemo(()=>[{name:"checkbox",label:t,hideLabel:i,type:"checkbox",required:l,disabled:p,inputSettings:{options:y,itemsPerColumn:Number(h)},helperText:d,instructionText:u,forceInstructionTooltip:m}],[t,i,l,p,y,h,d,u,m]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{...x,buttons:D(q),title:"Checkbox Field",fields:B}),e.jsx("pre",{children:JSON.stringify(L,null,"  ")})]})};n.args={..._.args({prepopData:{checkbox:[{value:"option_1-cat_1",label:"Option 1"},{value:"foo",label:"Foo"}]}}),optionsType:"Synchronous",optionCount:25,itemsPerColumn:8,includeUnlabeledSwatchOption:!1};n.argTypes={..._.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},optionCount:{name:"Number of Options"},itemsPerColumn:{name:"Items per Column"},includeUnlabeledSwatchOption:{name:"Include Unlabeled Swatch Option",description:"Adds an option with no visible label text, relying on ariaLabel for its accessible name."}};const M=[{name:"checkbox",label:"Regular example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:a},helperText:"Helper Text",instructionText:"InstructionText"},{name:"disabledCheckbox",label:"Disabled example",type:"checkbox",required:!1,disabled:!0,inputSettings:{options:a},helperText:"Helper Text",instructionText:"InstructionText"},{name:"checkboxFromDB",label:"Options from DB example",type:"checkbox",required:!1,disabled:!1,inputSettings:{options:I},helperText:"Helper Text",instructionText:"InstructionText"}],r=()=>{const t=j(),{state:i,handleSubmit:l}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(P,{...t,buttons:D(l),title:"Form Title",description:"This is a description example",fields:M})]})};var g,T,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
  itemsPerColumn,
  includeUnlabeledSwatchOption
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const options = useMemo<FormFieldCheckboxInputSettings["options"]>(() => {
    // Demonstrates an option with no visible label text (e.g. a colour
    // swatch), which relies on \`ariaLabel\` for its accessible name.
    const unlabeledSwatchOption = {
      value: "swatch",
      label: "",
      ariaLabel: "Swatch"
    };
    if (optionsType === "Synchronous") {
      const syncOptions = optionCount >= 0 ? mockOptions.slice(0, optionCount) : mockOptions;
      return includeUnlabeledSwatchOption ? [...syncOptions, unlabeledSwatchOption] : syncOptions;
    }
    return async () => {
      const result = await getOptions();
      const asyncOptions = optionCount >= 0 ? result.slice(0, optionCount) : result;
      return includeUnlabeledSwatchOption ? [...asyncOptions, unlabeledSwatchOption] : asyncOptions;
    };
  }, [optionCount, optionsType, includeUnlabeledSwatchOption]);
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
}`,...(F=(T=n.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var k,w,C;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(C=(w=r.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const U=["Playground","KitchenSink"],G=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:U,default:E},Symbol.toStringTag,{value:"Module"}));export{G as s};
