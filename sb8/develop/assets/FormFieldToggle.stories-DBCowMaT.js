import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as _}from"./index-D0AnReJb.js";import{u as T,F as h}from"./index-Ck7Dwj54.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as S}from"./commonFieldControl-LQDYMh-C.js";const q={title:"FormFields/FormFieldToggle"},t=({label:n,hideLabel:l,required:o,prepop:y,prepopData:L,disabled:s,instructionText:i,forceInstructionTooltip:a,helperText:g,toggleLabel:p})=>{const d=T({data:y?L:{}}),{state:j,handleSubmit:D}=d,O=_.useMemo(()=>[{name:"toggle",label:n,hideLabel:l,type:"toggle",required:o,disabled:s,inputSettings:{toggleLabel:p},helperText:g,instructionText:i,forceInstructionTooltip:a}],[n,l,o,s,p,g,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(h,{...d,buttons:F(D),title:"Toggle Field",fields:O})]})};t.args={...S.args({prepopData:{toggle:!0}}),toggleLabel:"Toggle Label"};t.argTypes={...S.argTypes,toggleLabel:{name:"Toggle Label"}};const E=[{name:"toggleDefault",label:"Default example",type:"toggle",required:!1,disabled:!1,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleDisabled",label:"Disabled example",type:"toggle",required:!1,disabled:!0,inputSettings:{toggleLabel:"Toggle label"},helperText:"Helper text",instructionText:"Instruction text"},{name:"toggleWithoutLabel",label:"Toggle switch without label",type:"toggle",required:!1,disabled:!1,helperText:"Helper text",instructionText:"Instruction text"}],r=()=>{const n=T(),{state:l,handleSubmit:o}=n;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(l,null,"  ")}),e.jsx(h,{...n,buttons:F(o),title:"Form Title",description:"This is a description example",fields:E})]})};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
    type: "toggle",
    required,
    disabled,
    inputSettings: {
      toggleLabel
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, toggleLabel, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Toggle Field" fields={fields} />
        </>;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,f,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
        </>;
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const I=["Playground","KitchenSink"],M=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:I,default:q},Symbol.toStringTag,{value:"Module"}));export{M as s};
