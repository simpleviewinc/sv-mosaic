import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as p}from"./index-Btj5Fd67.js";import{u as T,F}from"./index-BtJjjTTO.js";import{r as q}from"./renderButtons-BmHfsf_z.js";import{c as R}from"./commonFieldControl-DXwRxrKb.js";import{o,g as D}from"./options-DJM8a-gX.js";const I={title:"FormFields/FormFieldChips"},t=({label:n,required:s,skeleton:l,disabled:i,instructionText:a,helperText:u,prepop:c,prepopData:d,optionsType:m})=>{const x=T(),{state:O,handleSubmit:j}=x,_=p.useMemo(()=>[{label:n,helperText:u,instructionText:a,required:s,disabled:i,name:"chip",type:"chip",inputSettings:{options:m==="Synchronous"?o:D}}],[n,u,a,s,i,m]),H=p.useMemo(()=>c?async()=>d:void 0,[c,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(F,{...x,buttons:q(j),title:"Chips Field",fields:_,skeleton:l,getFormValues:H})]})};t.args={...R.args,prepopData:{chip:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous"};t.argTypes={...R.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const r=()=>{const n=T(),{state:s,handleSubmit:l}=n,i=p.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:D},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(F,{...n,buttons:q(l),title:"Form Regular Example",description:"This is a description example",fields:i})]})};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const E=["Playground","KitchenSink"],N=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:E,default:I},Symbol.toStringTag,{value:"Module"}));export{N as s};
