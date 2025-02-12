import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as a}from"./index-Btj5Fd67.js";import{u as S,F}from"./index-Wv0uro41.js";import{r as q}from"./renderButtons-BmHfsf_z.js";import{o,g as D}from"./options-DJM8a-gX.js";const I={title:"FormFields/FormFieldChips"},t=({label:n,required:s,skeleton:l,disabled:i,instructionText:p,helperText:u,prepop:c,prepopData:d,optionsType:m})=>{const x=S(),{state:R,handleSubmit:O}=x,j=a.useMemo(()=>[{label:n,helperText:u,instructionText:p,required:s,disabled:i,name:"chip",type:"chip",inputSettings:{options:m==="Synchronous"?o:D}}],[n,u,p,s,i,m]),H=a.useMemo(()=>c?async()=>d:void 0,[c,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(R,null,"  ")}),e.jsx(F,{...x,buttons:q(O),title:"Chips Field",fields:j,skeleton:l,getFormValues:H})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepop:!1,prepopData:{chip:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepop:{name:"Prepopulate"},prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const r=()=>{const n=S(),{state:s,handleSubmit:l}=n,i=a.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:D},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(F,{...n,buttons:q(l),title:"Form Regular Example",description:"This is a description example",fields:i})]})};var h,b,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
    label,
    helperText,
    instructionText,
    required,
    disabled,
    name: "chip",
    type: "chip",
    inputSettings: {
      options: optionsType === "Synchronous" ? optionsLibrary : getOptions
    }
  }] as FieldDef[], [label, helperText, instructionText, required, disabled, optionsType]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var g,y,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
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
      options: optionsLibrary
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
      options: optionsLibrary
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
      options: optionsLibrary
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
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const _=["Playground","KitchenSink"],B=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:_,default:I},Symbol.toStringTag,{value:"Module"}));export{B as s};
