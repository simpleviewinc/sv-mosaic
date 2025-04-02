import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as x}from"./index-D0AnReJb.js";import{u as g,F}from"./Form-CgwovX7A.js";import{r as T}from"./renderButtons-BmHfsf_z.js";import{c as S}from"./commonFieldControl-LQDYMh-C.js";const D={title:"FormFields/FormFieldPhone"},t=({label:r,required:o,prepop:s,prepopData:a,disabled:l,instructionText:i,helperText:p,country:u})=>{const d=g({data:s?a:{}}),{state:j,handleSubmit:q}=d,P=x.useMemo(()=>[{name:"phone",label:r,type:"phone",required:o,disabled:l,inputSettings:{country:u},helperText:p,instructionText:i}],[l,o,u,r,p,i]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(F,{...d,buttons:T(q),title:"Phone Field",fields:P})]})};t.args={...S.args({prepopData:{phone:"+15205302271"}}),country:""};t.argTypes={...S.argTypes,country:{name:"Initial Country"}};const n=()=>{const r=g(),{state:o,handleSubmit:s}=r,a=x.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(F,{...r,buttons:T(s),title:"Form Title",description:"Form description",fields:a})]})};var c,m,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
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
    type: "phone",
    required,
    disabled,
    inputSettings: {
      country
    },
    helperText,
    instructionText
  }], [disabled, required, country, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} />
        </>;
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const E=["Playground","KitchenSink"],R=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:n,Playground:t,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{R as s};
