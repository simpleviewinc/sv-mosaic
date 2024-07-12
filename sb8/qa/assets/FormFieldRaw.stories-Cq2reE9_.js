import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as F}from"./index-BP8_t0zE.js";import{u as b,F as x}from"./formUtils-DjW1hEz-.js";import{r as f}from"./storyUtils-ByV2Bsyv.js";import{s as S}from"./theme-CtvfJOCv.js";const y=S.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`,w={title:"FormFields/FormFieldRaw"};function j(){return e.jsx(y,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}async function R(){return{raw:e.jsx(j,{})}}const t=({label:r,required:l,disabled:s,instructionText:o,helperText:a})=>{const i=b(),{handleSubmit:h}=i,T=F.useMemo(()=>[{name:"raw",label:r,type:"raw",required:l,disabled:s,helperText:a,instructionText:o}],[l,s,r,a,o]);return e.jsx(e.Fragment,{children:e.jsx(x,{...i,buttons:f(h),title:"Raw Field",fields:T,getFormValues:R})})},q=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}];t.args={label:"Label",disabled:!1,required:!1,instructionText:"Instruction text",helperText:"Helper text"};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},instructionText:{name:"Instruction Text"},helperText:{name:"Helper Text"}};const n=()=>{const r=b(),{state:l,handleSubmit:s}=r;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx(x,{...r,buttons:f(s),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "raw",
    label,
    type: "raw",
    required,
    disabled,
    helperText,
    instructionText
  }], [required, disabled, label, helperText, instructionText]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Raw Field" fields={fields} getFormValues={getFormValues} />
        </>;
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const D=["Playground","KitchenSink"],O=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:t,__namedExportsOrder:D,default:w},Symbol.toStringTag,{value:"Module"}));export{O as s};
