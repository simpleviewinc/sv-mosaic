import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as f}from"./index-D0AnReJb.js";import{u as b,F as h}from"./Form-DPJ23PVO.js";import{r as g}from"./renderButtons-BmHfsf_z.js";import{c as y}from"./commonFieldControl-LQDYMh-C.js";const v={title:"FormFields/FormFieldColor"},r=({label:n,required:t,disabled:l,prepop:s,prepopData:F})=>{const a=b({data:s?F:{}}),{state:x,handleSubmit:S}=a,j=f.useMemo(()=>[{name:"color",label:n,type:"color",required:t,disabled:l}],[n,t,l]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(x,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...a,buttons:g(S),title:"Color Field",fields:j})})]})};r.args={...y.args({prepopData:{color:"#ff0000"}})};r.argTypes={...y.argTypes};const o=()=>{const n=b(),{state:t,handleSubmit:l}=n,s=f.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(t,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...n,buttons:g(l),title:"Form Title",description:"This is a description example",fields:s})})]})};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
  label,
  required,
  disabled,
  prepop,
  prepopData
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
    type: "color",
    required,
    disabled
  }], [label, required, disabled]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Color Field" fields={fields} />
            </div>
        </>;
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Playground","KitchenSink"],C=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:r,__namedExportsOrder:D,default:v},Symbol.toStringTag,{value:"Module"}));export{C as s};
