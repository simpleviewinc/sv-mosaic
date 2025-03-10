import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as p}from"./index-Btj5Fd67.js";import{u as T,F}from"./Form-tMgN-44i.js";import{r as O}from"./renderButtons-BmHfsf_z.js";import{c as q}from"./commonFieldControl-DXwRxrKb.js";import{m as o,b as R}from"./options-C_LXlRBD.js";const H={title:"FormFields/FormFieldChips"},t=({label:n,required:r,skeleton:l,disabled:i,instructionText:a,helperText:c,prepop:u,prepopData:d,optionsType:m})=>{const x=T(),{state:D,handleSubmit:j}=x,k=p.useMemo(()=>[{label:n,helperText:c,instructionText:a,required:r,disabled:i,name:"chip",type:"chip",inputSettings:{options:m==="Synchronous"?o:R}}],[n,c,a,r,i,m]),_=p.useMemo(()=>u?async()=>d:void 0,[u,d]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(D,null,"  ")}),e.jsx(F,{...x,buttons:O(j),title:"Chips Field",fields:k,skeleton:l,getFormValues:_})]})};t.args={...q.args,prepopData:{chip:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous"};t.argTypes={...q.argTypes,optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}}};const s=()=>{const n=T(),{state:r,handleSubmit:l}=n,i=p.useMemo(()=>[{name:"chipRegular",label:"Regular example",type:"chip",required:!1,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDisable",label:"Disable example",type:"chip",required:!1,disabled:!0,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipRequired",label:"Required example",type:"chip",required:!0,disabled:!1,inputSettings:{options:o},helperText:"Helper text",instructionText:"Instruction text"},{name:"chipDB",label:"From data base options example",type:"chip",required:!1,disabled:!1,inputSettings:{getOptions:R},helperText:"Helper text",instructionText:"Instruction text"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(F,{...n,buttons:O(l),title:"Form Regular Example",description:"This is a description example",fields:i})]})};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
      options: optionsType === "Synchronous" ? mockOptions : getOptions
    }
  }] as FieldDef[], [label, helperText, instructionText, required, disabled, optionsType]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Chips Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,y,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
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
      options: mockOptions
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
      options: mockOptions
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
      options: mockOptions
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
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const I=["Playground","KitchenSink"],P=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:t,__namedExportsOrder:I,default:H},Symbol.toStringTag,{value:"Module"}));export{P as s};
