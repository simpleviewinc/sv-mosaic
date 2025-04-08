import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as T}from"./index-D0AnReJb.js";import{u as g,F}from"./Form-CgwovX7A.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import{c as j}from"./commonFieldControl-LQDYMh-C.js";const O={title:"FormFields/FormFieldPhone"},t=({label:r,hideLabel:o,required:s,prepop:a,prepopData:q,disabled:l,instructionText:i,forceInstructionTooltip:p,helperText:u,country:d})=>{const c=g({data:a?q:{}}),{state:P,handleSubmit:D}=c,E=T.useMemo(()=>[{name:"phone",label:r,hideLabel:o,type:"phone",required:s,disabled:l,inputSettings:{country:d},helperText:u,instructionText:i,forceInstructionTooltip:p}],[r,o,s,l,d,u,i,p]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(P,null,"  ")}),e.jsx(F,{...c,buttons:S(D),title:"Phone Field",fields:E})]})};t.args={...j.args({prepopData:{phone:"+15205302271"}}),country:""};t.argTypes={...j.argTypes,country:{name:"Initial Country"}};const n=()=>{const r=g(),{state:o,handleSubmit:s}=r,a=T.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(F,{...r,buttons:S(s),title:"Form Title",description:"Form description",fields:a})]})};var m,f,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  country
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
      country
    },
    helperText,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, country, helperText, instructionText, forceInstructionTooltip]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} />
        </>;
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,b,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const _=["Playground","KitchenSink"],J=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:t,__namedExportsOrder:_,default:O},Symbol.toStringTag,{value:"Module"}));export{J as s};
