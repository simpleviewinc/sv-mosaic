import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as F}from"./index-D0AnReJb.js";import{s as g}from"./styled-components.browser.esm-njFAddlw.js";import{u as w,F as x}from"./index-BeCxSKiY.js";import{r as h}from"./renderButtons-DP0bGf4C.js";import{c as p}from"./commonFieldControl-LQDYMh-C.js";const y={title:"FormFields/FormFieldRaw"},R=g.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`;function T(){return r.jsx(R,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}const e=({label:o,hideLabel:t,required:n,disabled:s,instructionText:a,forceInstructionTooltip:l,helperText:i})=>{const d=w({data:{raw:r.jsx(T,{})}}),{handleSubmit:f}=d,b=F.useMemo(()=>[{name:"raw",label:o,hideLabel:t,type:"raw",required:n,disabled:s,helperText:i,instructionText:a,forceInstructionTooltip:l}],[o,t,n,s,i,a,l]);return r.jsx(r.Fragment,{children:r.jsx(x,{...d,buttons:h(f),title:"Raw Field",fields:b})})};e.args={...p.args()};e.argTypes={...p.argTypes};var m,c,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: {
      raw: <RawValue />
    }
  });
  const {
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo((): FieldDef[] => [{
    name: "raw",
    label,
    hideLabel,
    type: "raw",
    required,
    disabled,
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Raw Field" fields={fields} />
        </>;
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const j=["Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:j,default:y},Symbol.toStringTag,{value:"Module"}));export{O as s};
