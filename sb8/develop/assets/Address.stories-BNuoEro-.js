import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as f}from"./index-Btj5Fd67.js";import{r as V}from"./renderButtons-BmHfsf_z.js";import{u as h,F}from"./Form-vpubj07T.js";import{g as _,a as C}from"./optionGetters-CNrUXz-e.js";const I={title:"FormFields/FormFieldAddress"},y=["undefined",1,2,3,4,5,-1],r={getOptionsCountries:_,getOptionsStates:C},q="AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",v=[{id:1,address1:"137 Teaticket Highway",address2:"",city:"Falmouth",state:{label:"Massachusetts",value:"MA"},postalCode:"02536",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]},{id:2,address1:"555 East Main Street",address2:"",city:"Norfolk",state:{label:"Virginia",value:"VA"},postalCode:"23510",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]}],s=({label:n,disabled:i,required:d,skeleton:b,prepopulate:u,amountPerType:a,amountShipping:o,amountPhysical:l,amountBilling:m,googleKey:c})=>{const g=h(),{state:S,handleSubmit:O}=g,B=f.useMemo(()=>u?async()=>({address:v}):void 0,[u]),E=f.useMemo(()=>[{disabled:i,label:n,required:d,name:"address",type:"address",inputSettings:{amountPerType:a==="undefined"?void 0:Number(a),amountShipping:o==="undefined"?void 0:Number(o),amountPhysical:l==="undefined"?void 0:Number(l),amountBilling:m==="undefined"?void 0:Number(m),googleMapsApiKey:c,...r}}],[i,n,d,a,o,l,m,c]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{...g,buttons:V(O),title:"Address field",fields:E,skeleton:b,getFormValues:B}),e.jsx("pre",{children:JSON.stringify(S,null,"  ")})]})};s.args={label:"Label",disabled:!1,required:!1,skeleton:!1,prepopulate:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined",googleKey:q};s.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},prepopulate:{name:"Prepopulate"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:y},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:y},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:y},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:y},googleKey:{name:"Google API Key"}};const t=({label:n,disabled:i,required:d,skeleton:b,prepopulate:u,subFields:a,googleKey:o})=>{const l=h(),{state:m,handleSubmit:c}=l,g=f.useMemo(()=>u?async()=>({address:v[0]}):void 0,[u]),S=f.useMemo(()=>[{disabled:i,label:n,required:d,name:"address",type:"addressSingle",inputSettings:{subFields:a,googleMapsApiKey:o,...r}}],[i,n,d,a,o]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{...l,buttons:V(c),title:"Address Single field",fields:S,skeleton:b,getFormValues:g}),e.jsx("pre",{children:JSON.stringify(m,null,"  ")})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,prepopulate:!1,subFields:["address1","address2","address3","country","city","state","postalCode"],googleKey:q};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},prepopulate:{name:"Prepopulate"},subFields:{name:"Sub-Fields",control:{type:"object"}},googleKey:{name:"Google API Key"}};const R=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...r}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...r}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...r}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...r}}],p=()=>{const n=h();return e.jsx(F,{...n,title:"Address Field",fields:R})};var P,M,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  prepopulate,
  amountPerType,
  amountShipping,
  amountPhysical,
  amountBilling,
  googleKey
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useMemo(() => prepopulate ? async () => {
    return {
      address: addresses
    };
  } : undefined, [prepopulate]);
  const fields = useMemo((): FieldDef[] => [{
    disabled,
    label,
    required,
    name: "address",
    type: "address",
    inputSettings: {
      amountPerType: amountPerType === "undefined" ? undefined : Number(amountPerType),
      amountShipping: amountShipping === "undefined" ? undefined : Number(amountShipping),
      amountPhysical: amountPhysical === "undefined" ? undefined : Number(amountPhysical),
      amountBilling: amountBilling === "undefined" ? undefined : Number(amountBilling),
      googleMapsApiKey: googleKey,
      ...commonInputSettings
    }
  }], [disabled, label, required, amountPerType, amountShipping, amountPhysical, amountBilling, googleKey]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(x=(M=s.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var A,K,k;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  prepopulate,
  subFields,
  googleKey
}: typeof Single.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const getFormValues = useMemo(() => prepopulate ? async () => {
    return {
      address: addresses[0]
    };
  } : undefined, [prepopulate]);
  const fields = useMemo((): FieldDef[] => [{
    disabled,
    label,
    required,
    name: "address",
    type: "addressSingle",
    inputSettings: {
      subFields,
      googleMapsApiKey: googleKey,
      ...commonInputSettings
    }
  }], [disabled, label, required, subFields, googleKey]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address Single field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(k=(K=t.parameters)==null?void 0:K.docs)==null?void 0:k.source}}};var N,T,j;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(j=(T=p.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};const w=["Playground","Single","KitchenSink"],z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:p,Playground:s,Single:t,__namedExportsOrder:w,default:I},Symbol.toStringTag,{value:"Module"}));export{z as s};
