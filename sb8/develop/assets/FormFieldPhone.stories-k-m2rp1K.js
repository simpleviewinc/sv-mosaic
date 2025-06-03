import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as T}from"./index-D0AnReJb.js";import{u as S,F as j}from"./index-BbFSUns0.js";import{r as v}from"./renderButtons-BmHfsf_z.js";import{c as q}from"./commonFieldControl-LQDYMh-C.js";const _={title:"FormFields/FormFieldPhone"},n=({label:t,hideLabel:o,required:s,prepop:l,prepopData:P,disabled:a,instructionText:i,forceInstructionTooltip:d,helperText:u,size:p,country:c,international:m})=>{const f=S({data:l?P:{}}),{state:D,handleSubmit:E}=f,O=T.useMemo(()=>[{name:"phone",label:t,hideLabel:o,type:"phone",required:s,disabled:a,inputSettings:{country:c,international:m},helperText:u,size:p,instructionText:i,forceInstructionTooltip:d}],[t,o,s,a,c,u,p,i,d,m]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(D,null,"  ")}),e.jsx(j,{...f,buttons:v(E),title:"Phone Field",fields:O})]})};n.args={...q.args({prepopData:{phone:"+15205302271"}}),size:void 0,country:"",international:void 0};n.argTypes={...q.argTypes,size:{name:"Size",control:{type:"select"},options:{"Undefined (default: sm)":void 0,XSmall:"xs",Small:"sm",Medium:"md",Large:"lg",Full:"full"}},country:{name:"Initial Country"},international:{name:"International",type:{control:"select"},options:{"Undefined (default: false)":void 0,true:!0,false:!1}}};const r=()=>{const t=S(),{state:o,handleSubmit:s}=t,l=T.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(j,{...t,buttons:v(s),title:"Form Title",description:"Form description",fields:l})]})};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  size,
  country,
  international
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "phone",
    label,
    hideLabel,
    type: "phone",
    required,
    disabled,
    inputSettings: {
      country,
      international
    },
    helperText,
    size,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, country, helperText, size, instructionText, forceInstructionTooltip, international]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} />
        </>;
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,g,F;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields: FieldDef[] = useMemo(() => [{
    name: "phone",
    label: "Regular example",
    type: "phone",
    required: false,
    disabled: false,
    helperText: "Helper text",
    instructionText: 'Default contry code is "us"'
  }, {
    name: "countryCode",
    label: "With a country code provided",
    type: "phone",
    required: false,
    disabled: false,
    inputSettings: {
      country: "ar"
    },
    helperText: "Helper text",
    instructionText: 'The country code of "ar" was provided'
  }, {
    name: "autoformatEnabled",
    label: "Autoformat enabled",
    type: "phone",
    required: false,
    disabled: false,
    inputSettings: {
      autoFormat: true,
      country: "us"
    },
    helperText: "Helper text",
    instructionText: "Type a phone number to see the format"
  }], []);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="Form description" fields={fields} />
        </>;
}`,...(F=(g=r.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const z=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:z,default:_},Symbol.toStringTag,{value:"Module"}));export{J as s};
