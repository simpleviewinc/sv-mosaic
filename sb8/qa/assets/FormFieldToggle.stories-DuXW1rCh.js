import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as L}from"./index-Btj5Fd67.js";import{u as f,F as T}from"./Form-DsDAv5pr.js";import{r as h}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-LQDYMh-C.js";const O={title:"FormFields/FormFieldToggle"},t=({label:n,required:l,prepop:o,prepopData:S,disabled:s,instructionText:a,helperText:i,toggleLabel:g})=>{const p=f({data:o?S:{}}),{state:y,handleSubmit:j}=p,D=L.useMemo(()=>[{name:"toggle",label:n,type:"toggle",required:l,disabled:s,inputSettings:{toggleLabel:g},helperText:i,instructionText:a}],[l,s,g,n,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx(T,{...p,buttons:h(j),title:"Toggle Field",fields:D})]})};t.args={...F.args({prepopData:{toggle:!0}}),toggleLabel:"Toggle Label"};t.argTypes={...F.argTypes,toggleLabel:{name:"Toggle Label"}};const _=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=f(),{state:l,handleSubmit:o}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx(T,{...n,buttons:h(o),title:"Form Title",description:"This is a description example",fields:_})]})};var d,u,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  helperText,
  toggleLabel
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Toggle Field" fields={fields} />
        </>;
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,b,x;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(x=(b=r.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const q=["Playground","KitchenSink"],H=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:q,default:O},Symbol.toStringTag,{value:"Module"}));export{H as s};
