import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as x}from"./index-ePW8zFKp.js";import{u as y,F as h}from"./index-C9DrSpxx.js";import{r as S}from"./renderButtons-DP0bGf4C.js";import{c as f}from"./commonFieldControl-LQDYMh-C.js";import{p as j}from"./parseDateControl-BGR_CRG7.js";const _={title:"FormFields/FormFieldTimeField"},e=({label:n,hideLabel:o,required:s,prepop:F,prepopData:t,disabled:i,instructionText:l,forceInstructionTooltip:a,helperText:m})=>{const d=y({data:F?{...t,time:j(t==null?void 0:t.time)}:{}}),{state:b,handleSubmit:g}=d,T=x.useMemo(()=>[{name:"time",type:"time",label:n,hideLabel:o,required:s,disabled:i,helperText:m,instructionText:l,forceInstructionTooltip:a}],[n,o,s,i,m,l,a]);return r.jsxs(r.Fragment,{children:[r.jsx("pre",{children:JSON.stringify(b,null,"  ")}),r.jsx(h,{...d,buttons:S(g),title:"Time Field",fields:T})]})};e.args={...f.args({prepopData:{time:"11-30"}})};e.argTypes={...f.argTypes};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? {
      ...prepopData,
      time: parseDateControl(prepopData?.time)
    } : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "time",
    type: "time",
    label,
    hideLabel,
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Time Field" fields={fields} />
        </>;
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["Playground"],D=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:O,default:_},Symbol.toStringTag,{value:"Module"}));export{D as s};
