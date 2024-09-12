import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as j}from"./index-BP8_t0zE.js";import{r as F}from"./storyUtils-BoiXCagy.js";import{u as S,F as h}from"./formUtils-FpSMbHT7.js";import"./Button-Cm1Qf39l.js";import"./useMosaicTranslation-CZCb37QS.js";import{g as T}from"./getOptions-re1FrJff.js";const _={title:"FormFields/FormFieldRadio"},l=[{label:"Label 1",value:"label_1"},{label:"Label 2",value:"label_2"},{label:"Label 3",value:"label_3"}],t=({label:n,required:i,skeleton:o,disabled:a,instructionText:d,helperText:p,optionsOrigin:s})=>{const u=S(),{state:O,handleSubmit:y}=u,k=j.useMemo(()=>[{name:"radio",label:n,type:"radio",required:i,disabled:a,inputSettings:{options:s==="Local"?l:void 0,getOptions:s==="DB"?T:void 0},helperText:p,instructionText:d}],[n,i,a,d,p,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(O,null,"  ")}),e.jsx(h,{...u,buttons:F(y),title:"Radio Field",fields:k,skeleton:o})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",optionsOrigin:"Local"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},optionsOrigin:{name:"Options Origin"}};const R=[{name:"radio",label:"Regular example",type:"radio",required:!1,disabled:!1,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-disabled",label:"Disabled example",type:"radio",required:!1,disabled:!0,inputSettings:{options:l},helperText:"Helper text",instructionText:"Instruction text"},{name:"radio-db",label:"From data base example",type:"radio",required:!1,disabled:!1,inputSettings:{getOptions:T},helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=S(),{state:i,handleSubmit:o}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(i,null,"  ")}),e.jsx(h,{...n,buttons:F(o),title:"Form Title",description:"This is a description example",fields:R})]})};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  optionsOrigin
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => ([{
    name: "radio",
    label,
    type: "radio",
    required,
    disabled,
    inputSettings: {
      options: optionsOrigin === "Local" ? options : undefined,
      getOptions: optionsOrigin === "DB" ? getOptions : undefined
    },
    helperText,
    instructionText
  }] as FieldDef[]), [label, required, disabled, instructionText, helperText, optionsOrigin]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Radio Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,g,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const q=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:q,default:_},Symbol.toStringTag,{value:"Module"}));export{J as s};
