import{j as r}from"./jsx-runtime-EKYJJIwR.js";import{r as f}from"./index-D0AnReJb.js";import{s as F}from"./styled-components.browser.esm-DlFgPPWf.js";import{u as b,F as g}from"./Form-DPJ23PVO.js";import{r as w}from"./renderButtons-BmHfsf_z.js";import{c}from"./commonFieldControl-LQDYMh-C.js";const x={title:"FormFields/FormFieldRaw"},y=F.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`;function R(){return r.jsx(y,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}const e=({label:o,required:t,disabled:n,instructionText:s,helperText:a})=>{const l=b({data:{raw:r.jsx(R,{})}}),{handleSubmit:u}=l,p=f.useMemo(()=>[{name:"raw",label:o,type:"raw",required:t,disabled:n,helperText:a,instructionText:s}],[t,n,o,a,s]);return r.jsx(r.Fragment,{children:r.jsx(g,{...l,buttons:w(u),title:"Raw Field",fields:p})})};e.args={...c.args()};e.argTypes={...c.argTypes};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  instructionText,
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
    type: "raw",
    required,
    disabled,
    helperText,
    instructionText
  }], [required, disabled, label, helperText, instructionText]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Raw Field" fields={fields} />
        </>;
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const h=["Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:h,default:x},Symbol.toStringTag,{value:"Module"}));export{M as s};
