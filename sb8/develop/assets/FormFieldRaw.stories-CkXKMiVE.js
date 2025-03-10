import{j as o}from"./jsx-runtime-DiwAibxM.js";import{r as x}from"./index-Btj5Fd67.js";import{s as w}from"./styled-components.browser.esm-DIT4wwZk.js";import{u as y,F as h}from"./Form-tMgN-44i.js";import{r as R}from"./renderButtons-BmHfsf_z.js";import{c as F}from"./commonFieldControl-DXwRxrKb.js";const j={title:"FormFields/FormFieldRaw"},r=w.div`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
`;function S(){return o.jsx(r,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})}async function T(){return{raw:o.jsx(S,{})}}const e=({label:t,required:n,disabled:s,instructionText:a,helperText:l})=>{const i=y(),{handleSubmit:b}=i,f=x.useMemo(()=>[{name:"raw",label:t,type:"raw",required:n,disabled:s,helperText:l,instructionText:a}],[n,s,t,l,a]);return o.jsx(o.Fragment,{children:o.jsx(h,{...i,buttons:R(b),title:"Raw Field",fields:f,getFormValues:T})})};e.args={...F.args};e.argTypes={...F.argTypes};var d,m,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`styled.div\`
    background-color: #aa1919;
    border: 3px solid #570202;
    color: white;
    padding: 1rem 2rem;
    border-radius: 99999em;
\``,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,p,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(g=(p=e.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const _=["RawValueWrapper","Playground"],k=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,RawValueWrapper:r,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{k as s};
