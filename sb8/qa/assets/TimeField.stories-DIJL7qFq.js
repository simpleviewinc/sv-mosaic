import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as b}from"./index-Btj5Fd67.js";import{u as x,F as y}from"./Form-DsDAv5pr.js";import{r as T}from"./renderButtons-BmHfsf_z.js";import{c as u}from"./commonFieldControl-LQDYMh-C.js";import{p as S}from"./parseDateControl-Bm_4Z1rA.js";const h={title:"FormFields/FormFieldTimeField"},e=({label:n,required:o,prepop:c,prepopData:t,disabled:s,instructionText:i,helperText:l})=>{const a=x({data:c?{...t,time:S(t==null?void 0:t.time)}:{}}),{state:f,handleSubmit:F}=a,g=b.useMemo(()=>[{name:"time",type:"time",label:n,required:o,disabled:s,helperText:l,instructionText:i}],[n,o,s,l,i]);return r.jsxs(r.Fragment,{children:[r.jsx("pre",{children:JSON.stringify(f,null,"  ")}),r.jsx(y,{...a,buttons:T(F),title:"Time Field",fields:g})]})};e.args={...u.args({prepopData:{time:"11-30"}})};e.argTypes={...u.argTypes};var m,d,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
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
    required,
    disabled,
    helperText,
    instructionText
  }], [label, required, disabled, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Time Field" fields={fields} />
        </>;
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const j=["Playground"],q=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:j,default:h},Symbol.toStringTag,{value:"Module"}));export{q as s};
