import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as f}from"./index-Btj5Fd67.js";import{r as V}from"./renderButtons-BmHfsf_z.js";import{c as v}from"./commonFieldControl-DXwRxrKb.js";import{u as h,F}from"./Form-mIbk-vgo.js";import{g as _,a as I}from"./options-C_LXlRBD.js";const R={title:"FormFields/FormFieldAddress"},y=["undefined",1,2,3,4,5,-1],i={getOptionsCountries:_,getOptionsStates:I},O="AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",B=[{id:1,address1:"137 Teaticket Highway",address2:"",city:"Falmouth",state:{label:"Massachusetts",value:"MA"},postalCode:"02536",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]},{id:2,address1:"555 East Main Street",address2:"",city:"Norfolk",state:{label:"Virginia",value:"VA"},postalCode:"23510",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]}],s=({label:n,disabled:l,required:d,skeleton:b,prepop:u,amountPerType:o,amountShipping:a,amountPhysical:r,amountBilling:m,googleKey:c})=>{const g=h(),{state:S,handleSubmit:q}=g,E=f.useMemo(()=>u?async()=>({address:B}):void 0,[u]),C=f.useMemo(()=>[{disabled:l,label:n,required:d,name:"address",type:"address",inputSettings:{amountPerType:o==="undefined"?void 0:Number(o),amountShipping:a==="undefined"?void 0:Number(a),amountPhysical:r==="undefined"?void 0:Number(r),amountBilling:m==="undefined"?void 0:Number(m),googleMapsApiKey:c,...i}}],[l,n,d,o,a,r,m,c]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{...g,buttons:V(q),title:"Address field",fields:C,skeleton:b,getFormValues:E}),e.jsx("pre",{children:JSON.stringify(S,null,"  ")})]})};s.args={...v.args,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined",googleKey:O};s.argTypes={...v.argTypes,amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:y},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:y},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:y},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:y},googleKey:{name:"Google API Key"}};const t=({label:n,disabled:l,required:d,skeleton:b,prepopulate:u,subFields:o,googleKey:a})=>{const r=h(),{state:m,handleSubmit:c}=r,g=f.useMemo(()=>u?async()=>({address:B[0]}):void 0,[u]),S=f.useMemo(()=>[{disabled:l,label:n,required:d,name:"address",type:"addressSingle",inputSettings:{subFields:o,googleMapsApiKey:a,...i}}],[l,n,d,o,a]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{...r,buttons:V(c),title:"Address Single field",fields:S,skeleton:b,getFormValues:g}),e.jsx("pre",{children:JSON.stringify(m,null,"  ")})]})};t.args={label:"Label",disabled:!1,required:!1,skeleton:!1,prepopulate:!1,subFields:["address1","address2","address3","country","city","state","postalCode"],googleKey:O};t.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},prepopulate:{name:"Prepopulate"},subFields:{name:"Sub-Fields",control:{type:"object"}},googleKey:{name:"Google API Key"}};const w=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...i}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...i}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...i}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...i}}],p=()=>{const n=h();return e.jsx(F,{...n,title:"Address Field",fields:w})};var P,M,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  prepop,
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
  const getFormValues = useMemo(() => prepop ? async () => {
    return {
      address: addresses
    };
  } : undefined, [prepop]);
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
}`,...(x=(M=s.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var A,K,N;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`({
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
}`,...(N=(K=t.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var T,k,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const G=["Playground","Single","KitchenSink"],W=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:p,Playground:s,Single:t,__namedExportsOrder:G,default:R},Symbol.toStringTag,{value:"Module"}));export{W as s};
