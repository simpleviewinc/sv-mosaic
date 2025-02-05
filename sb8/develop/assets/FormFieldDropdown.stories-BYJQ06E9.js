import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as S}from"./index-Btj5Fd67.js";import{r as z}from"./renderButtons-BmHfsf_z.js";import{u as w,F as D}from"./index-DC7k7Zpe.js";import{o as t,g as k}from"./options-DJM8a-gX.js";const _={title:"FormFields/FormFieldDropdown"},n=({label:o,required:s,skeleton:i,disabled:l,instructionText:p,helperText:a,prepop:d,prepopData:c,optionsType:u,placeholder:m,size:x})=>{const h=w(),{state:O,handleSubmit:j}=h,H=S.useMemo(()=>[{name:"dropdown",label:o,type:"dropdown",required:s,disabled:l,size:x,inputSettings:{options:u==="Synchronous"?t:k,placeholder:m},helperText:a,instructionText:p}],[o,s,l,x,u,m,a,p]),I=S.useMemo(()=>d?async()=>c:void 0,[d,c]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(D,{...h,buttons:z(j),title:"Dropdown Field",fields:H,skeleton:i,getFormValues:I})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",prepop:!1,prepopData:{dropdown:{value:"option_1-cat_1",label:"Option 1"}},optionsType:"Synchronous",size:"sm",placeholder:"Choose a movie.."};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},prepop:{name:"Prepopulate"},prepopData:{name:"Prepopulate Data",if:{arg:"prepop"}},optionsType:{name:"Options Type",options:["Synchronous","Asynchronous"],control:{type:"select"}},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg"]},placeholder:{name:"Placeholder"}};const P=[{name:"dropdown",label:"Regular example",type:"dropdown",size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"dropdownDB",label:"From data base example",type:"dropdown",size:"md",inputSettings:{getOptions:k,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"disabledExample",label:"Disabled",type:"dropdown",disabled:!0,size:"md",inputSettings:{options:t,placeholder:"placeholder"},helperText:"Helper text",instructionText:"Instruction text"},{name:"xsSize",label:"Size xs",type:"dropdown",size:"xs",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"smSize",label:"Size sm",type:"dropdown",size:"sm",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"mdSize",label:"Size md",type:"dropdown",size:"md",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"},{name:"lgSize",label:"Size lg",type:"dropdown",size:"lg",inputSettings:{options:t},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const o=w(),{state:s,handleSubmit:i}=o;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(s,null,"  ")}),e.jsx(D,{...o,buttons:z(i),title:"Form title",description:"Form description",fields:P})]})};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  prepop,
  prepopData,
  optionsType,
  placeholder,
  size
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "dropdown",
    label,
    type: "dropdown",
    required,
    disabled,
    size,
    inputSettings: {
      options: optionsType === "Synchronous" ? optionsLibrary : getOptions,
      placeholder
    },
    helperText,
    instructionText
  }] as FieldDef[], [label, required, disabled, size, optionsType, placeholder, helperText, instructionText]);
  const getFormValues = useMemo(() => prepop ? async () => prepopData : undefined, [prepop, prepopData]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Dropdown Field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
        </>;
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var T,F,f;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form title" description="Form description" fields={kitchenSinkFields} />
        </>;
}`,...(f=(F=r.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const E=["Playground","KitchenSink"],L=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:E,default:_},Symbol.toStringTag,{value:"Module"}));export{L as s};
