import{j as r}from"./jsx-runtime-DiwAibxM.js";import{r as F}from"./index-Btj5Fd67.js";import{u as f,F as g}from"./index-BGhy33fP.js";import{r as b}from"./renderButtons-BmHfsf_z.js";import{c as u}from"./commonFieldControl-DXwRxrKb.js";import{s as x}from"./theme-C7C0QMlu.js";const w=x.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`,y={title:"FormFields/FormFieldRaw"};function h(){return r.jsx(w,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}async function j(){return{raw:r.jsx(h,{})}}const e=({label:o,required:t,disabled:n,instructionText:s,helperText:a})=>{const l=f(),{handleSubmit:c}=l,p=F.useMemo(()=>[{name:"raw",label:o,type:"raw",required:t,disabled:n,helperText:a,instructionText:s}],[t,n,o,a,s]);return r.jsx(r.Fragment,{children:r.jsx(g,{...l,buttons:b(c),title:"Raw Field",fields:p,getFormValues:j})})};e.args={...u.args};e.argTypes={...u.argTypes};var i,d,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const R=["Playground"],M=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:R,default:y},Symbol.toStringTag,{value:"Module"}));export{M as s};
