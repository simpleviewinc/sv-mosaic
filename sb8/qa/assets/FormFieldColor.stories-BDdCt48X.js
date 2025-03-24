import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as b}from"./index-Btj5Fd67.js";import{u as f,F as h}from"./Form-Bzv-bIO0.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import{c as y}from"./commonFieldControl-DXwRxrKb.js";const j={title:"FormFields/FormFieldColor"},r=({label:n,required:t,skeleton:s,disabled:l})=>{const i=f(),{state:F,handleSubmit:x}=i,S=b.useMemo(()=>[{name:"color",label:n,type:"color",required:t,disabled:l}],[n,t,l]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(F,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...i,buttons:g(x),title:"Color Field",fields:S,skeleton:s})})]})};r.args={...y.args};r.argTypes={...y.argTypes};const o=()=>{const n=f(),{state:t,handleSubmit:s}=n,l=b.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(t,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...n,buttons:g(s),title:"Form Title",description:"This is a description example",fields:l})})]})};var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "color",
    label,
    type: "color",
    required,
    disabled
  }], [label, required, disabled]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Color Field" fields={fields} skeleton={skeleton} />
            </div>
        </>;
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo(() => [{
    name: "color",
    label: "Regular Example",
    type: "color",
    required: false,
    disabled: false
  }, {
    name: "colorDisabled",
    label: "Disabled Example",
    type: "color",
    required: false,
    disabled: true
  }] as FieldDef[], []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
            </div>
        </>;
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const v=["Playground","KitchenSink"],D=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:r,__namedExportsOrder:v,default:j},Symbol.toStringTag,{value:"Module"}));export{D as s};
