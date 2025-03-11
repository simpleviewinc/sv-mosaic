import{j as t}from"./jsx-runtime-DiwAibxM.js";import{r as g}from"./index-Btj5Fd67.js";import{u as b,F as x}from"./Form-DvbZl7Yn.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{c as u}from"./commonFieldControl-DXwRxrKb.js";const T={title:"FormFields/FormFieldTimeField"},e=({label:r,required:n,skeleton:c,disabled:o,instructionText:s,helperText:l})=>{const i=b(),{state:p,handleSubmit:f}=i,F=g.useMemo(()=>[{name:"time",type:"time",label:r,required:n,disabled:o,helperText:l,instructionText:s}],[r,n,o,l,s]);return t.jsxs(t.Fragment,{children:[t.jsx("pre",{children:JSON.stringify(p,null,"  ")}),t.jsx(x,{...i,buttons:y(f),title:"Time Field",fields:F,skeleton:c})]})};e.args={...u.args};e.argTypes={...u.argTypes};var a,m,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "time",
    type: "time",
    label,
    required,
    disabled,
    helperText,
    instructionText
  }], [label, required, disabled, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Time Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const S=["Playground"],P=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{P as s};
