import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as b}from"./index-Btj5Fd67.js";import{u as x,F as g}from"./Form-B7P8EMV6.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as T}from"./commonFieldControl-DXwRxrKb.js";const P={title:"FormFields/FormFieldPhone"},n=({label:t,required:o,skeleton:l,disabled:s,instructionText:a,helperText:i,country:u})=>{const d=x(),{state:S,handleSubmit:j}=d,q=b.useMemo(()=>[{name:"phone",label:t,type:"phone",required:o,disabled:s,inputSettings:{country:u},helperText:i,instructionText:a}],[s,o,u,t,i,a]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(S,null,"  ")}),e.jsx(g,{...d,buttons:F(j),title:"Phone Field",fields:q,skeleton:l})]})};n.args={...T.args,country:""};n.argTypes={...T.argTypes,country:{name:"Initial Country"}};const r=()=>{const t=x(),{state:o,handleSubmit:l}=t,s=b.useMemo(()=>[{name:"phone",label:"Regular example",type:"phone",required:!1,disabled:!1,helperText:"Helper text",instructionText:'Default contry code is "us"'},{name:"countryCode",label:"With a country code provided",type:"phone",required:!1,disabled:!1,inputSettings:{country:"ar"},helperText:"Helper text",instructionText:'The country code of "ar" was provided'},{name:"autoformatEnabled",label:"Autoformat enabled",type:"phone",required:!1,disabled:!1,inputSettings:{autoFormat:!0,country:"us"},helperText:"Helper text",instructionText:"Type a phone number to see the format"}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(o,null,"  ")}),e.jsx(g,{...t,buttons:F(l),title:"Form Title",description:"Form description",fields:s})]})};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  instructionText,
  helperText,
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
      country
    },
    helperText,
    instructionText
  }], [disabled, required, country, label, helperText, instructionText]);
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Phone Field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,h,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const E=["Playground","KitchenSink"],M=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:r,Playground:n,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{M as s};
