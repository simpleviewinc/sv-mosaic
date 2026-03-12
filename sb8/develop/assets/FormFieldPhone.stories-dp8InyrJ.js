import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CDlOlYQx.js";import{u as z,F as j}from"./index-DUrLt3d7.js";import{r as I}from"./renderButtons-DP0bGf4C.js";import{c as P}from"./commonFieldControl-LQDYMh-C.js";const _={title:"FormFields/FormFieldPhone"},t=({label:n,hideLabel:o,required:i,prepop:a,prepopData:q,disabled:s,instructionText:l,forceInstructionTooltip:d,helperText:p,provideSize:u,size:c,country:m,provideInternational:f,international:h})=>{const y=z({data:a?q:{}}),{state:D,handleSubmit:E}=y,O=v.useMemo(()=>[{name:"phone",label:n,hideLabel:o,type:"phone",required:i,disabled:s,inputSettings:{country:m,international:f?h:void 0},helperText:p,size:u?c:void 0,instructionText:l,forceInstructionTooltip:d}],[n,o,i,s,m,f,h,p,u,c,l,d]);return e.jsxs(e.Fragment,{children:[e.jsx(j,{...y,buttons:I(E),title:"Phone Field",fields:O}),e.jsx("pre",{children:JSON.stringify(D,null,"  ")})]})};t.args={...P.args({prepopData:{phone:"+15205302271"}}),provideSize:!1,size:void 0,country:"",provideInternational:!1,international:!1};t.argTypes={...P.argTypes,provideSize:{name:"Provide Size"},size:{name:"Size",control:{type:"select"},options:["xs","sm","md","lg","full"],if:{arg:"provideSize"}},country:{name:"Initial Country"},provideInternational:{name:"Provide International"},international:{name:"International",if:{arg:"provideInternational"}}};const r=()=>{const n=z(),{state:o,handleSubmit:i}=n,a=v.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(j,{...n,buttons:I(i),title:"Form Title",description:"Form description",fields:a})]})};var b,x,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  disabled,
  instructionText,
  forceInstructionTooltip,
  helperText,
  provideSize,
  size,
  country,
  provideInternational,
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
      international: provideInternational ? international : undefined
    },
    helperText,
    size: provideSize ? size : undefined,
    instructionText,
    forceInstructionTooltip
  }], [label, hideLabel, required, disabled, country, provideInternational, international, helperText, provideSize, size, instructionText, forceInstructionTooltip]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var S,T,F;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(F=(T=r.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const H=["Playground","KitchenSink"],B=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:t,__namedExportsOrder:H,default:_},Symbol.toStringTag,{value:"Module"}));export{B as s};
