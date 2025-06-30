import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as h}from"./index-D0AnReJb.js";import{u as g,F as y}from"./index-DxY2ZH9t.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as x}from"./commonFieldControl-LQDYMh-C.js";const E={title:"FormFields/FormFieldColor"},r=({label:n,hideLabel:t,required:l,disabled:s,prepop:S,prepopData:j,instructionText:i,forceInstructionTooltip:a})=>{const d=g({data:S?j:{}}),{state:v,handleSubmit:T}=d,D=h.useMemo(()=>[{name:"color",label:n,hideLabel:t,type:"color",required:l,disabled:s,instructionText:i,forceInstructionTooltip:a}],[n,t,l,s,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(v,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...d,buttons:F(T),title:"Color Field",fields:D})})]})};r.args={...x.args({prepopData:{color:"#ff0000"}})};r.argTypes={...x.argTypes};const o=()=>{const n=g(),{state:t,handleSubmit:l}=n,s=h.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(t,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(y,{...n,buttons:F(l),title:"Form Title",description:"This is a description example",fields:s})})]})};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  disabled,
  prepop,
  prepopData,
  instructionText,
  forceInstructionTooltip
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "color",
    label,
    hideLabel,
    type: "color",
    required,
    disabled,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Color Field" fields={fields} />
            </div>
        </>;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,f,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const O=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:r,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{J as s};
