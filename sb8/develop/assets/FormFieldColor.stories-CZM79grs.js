import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as b}from"./index-BP8_t0zE.js";import{u as f,F as h}from"./formUtils-q2R-OBT7.js";import{r as g}from"./storyUtils-BoiXCagy.js";const S={title:"FormFields/FormFieldColor"},r=({label:n,required:t,skeleton:o,disabled:s})=>{const a=f(),{state:y,handleSubmit:F}=a,x=b.useMemo(()=>[{name:"color",label:n,type:"color",required:t,disabled:s}],[n,t,s]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(y,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...a,buttons:g(F),title:"Color Field",fields:x,skeleton:o})})]})};r.args={label:"Label",disabled:!1,required:!1,skeleton:!1};r.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"}};const l=()=>{const n=f(),{state:t,handleSubmit:o}=n,s=b.useMemo(()=>[{name:"color",label:"Regular Example",type:"color",required:!1,disabled:!1},{name:"colorDisabled",label:"Disabled Example",type:"color",required:!1,disabled:!0}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(t,null,"  ")}),e.jsx("div",{style:{height:"100vh"},children:e.jsx(h,{...n,buttons:g(o),title:"Form Title",description:"This is a description example",fields:s})})]})};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`({
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo(() => ([{
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
  }] as FieldDef[]), []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <div style={{
      height: "100vh"
    }}>
                <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={fields} />
            </div>
        </>;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Playground","KitchenSink"],D=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:r,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{D as s};
