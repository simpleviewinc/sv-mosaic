import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as L}from"./index-Btj5Fd67.js";import{u as f,F as T}from"./index-BGhy33fP.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-DXwRxrKb.js";const O={title:"FormFields/FormFieldToggle"},t=({label:n,required:r,skeleton:o,disabled:s,instructionText:i,helperText:a,toggleLabel:g})=>{const d=f(),{state:S,handleSubmit:y}=d,j=L.useMemo(()=>[{name:"toggle",label:n,type:"toggle",required:r,disabled:s,inputSettings:{toggleLabel:g},helperText:a,instructionText:i}],[r,s,g,n,a,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(T,{...d,buttons:h(y),title:"Toggle Field",fields:j,skeleton:o})]})};t.args={...F.args,toggleLabel:"Toggle Label"};t.argTypes={...F.argTypes,toggleLabel:{name:"Toggle Label"}};const _=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],l=()=>{const n=f(),{state:r,handleSubmit:o}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(T,{...n,buttons:h(o),title:"Form Title",description:"This is a description example",fields:_})]})};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const D=["Playground","KitchenSink"],P=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:t,__namedExportsOrder:D,default:O},Symbol.toStringTag,{value:"Module"}));export{P as s};
