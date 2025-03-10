import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as x}from"./index-Btj5Fd67.js";import{u as F,F as g}from"./Form-DT7HL9F1.js";import{r as T}from"./renderButtons-BmHfsf_z.js";import{c as S}from"./commonFieldControl-DXwRxrKb.js";const E={title:"FormFields/FormFieldPhone"},t=({label:n,required:o,skeleton:l,disabled:s,instructionText:a,helperText:i,autoFormat:u,country:d})=>{const c=F(),{state:j,handleSubmit:q}=c,P=x.useMemo(()=>[{name:"phone",label:n,type:"phone",required:o,disabled:s,inputSettings:{autoFormat:u,country:d},helperText:i,instructionText:a}],[s,o,u,d,n,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(j,null,"  ")}),e.jsx(g,{...c,buttons:T(q),title:"Phone Field",fields:P,skeleton:l})]})};t.args={...S.args,autoFormat:!0,country:""};t.argTypes={...S.argTypes,autoFormat:{name:"Autoformat"},country:{name:"Country"}};const r=()=>{const n=F(),{state:o,handleSubmit:l}=n,s=x.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(g,{...n,buttons:T(l),title:"Form Title",description:"Form description",fields:s})]})};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
  autoFormat,
  country
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
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
      autoFormat,
      country
    },
    helperText,
    instructionText
  }], [disabled, required, autoFormat, country, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var h,y,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const O=["Playground","KitchenSink"],R=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{R as s};
