import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as L}from"./index-BP8_t0zE.js";import{u as f,F as T}from"./formUtils-vYyYJuVm.js";import"./Button-BrUhf9jf.js";import{r as h}from"./renderButtons-BmHfsf_z.js";const j={title:"FormFields/FormFieldToggle"},t=({label:n,required:r,skeleton:o,disabled:s,instructionText:i,helperText:a,toggleLabel:d})=>{const g=f(),{state:F,handleSubmit:S}=g,y=L.useMemo(()=>[{name:"toggle",label:n,type:"toggle",required:r,disabled:s,inputSettings:{toggleLabel:d},helperText:a,instructionText:i}],[r,s,d,n,a,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx(T,{...g,buttons:h(S),title:"Toggle Field",fields:y,skeleton:o})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,instructionText:"Instruction text",helperText:"Helper text",toggleLabel:"Toggle Label"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"},toggleLabel:{name:"Toggle Label"}};const k=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],l=()=>{const n=f(),{state:r,handleSubmit:o}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(T,{...n,buttons:h(o),title:"Form Title",description:"This is a description example",fields:k})]})};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  toggleLabel
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "toggle",
    label,
    type: "toggle",
    required,
    disabled,
    inputSettings: {
      toggleLabel
    },
    helperText,
    instructionText
  }], [required, disabled, toggleLabel, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Toggle Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,b,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const q=["Playground","KitchenSink"],I=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:t,__namedExportsOrder:q,default:j},Symbol.toStringTag,{value:"Module"}));export{I as s};
