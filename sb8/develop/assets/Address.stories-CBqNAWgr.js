import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as T}from"./index-D0AnReJb.js";import{r as N}from"./renderButtons-BmHfsf_z.js";import{c as y}from"./commonFieldControl-LQDYMh-C.js";import{u as b,F as h}from"./Form-DPJ23PVO.js";import{a as _,b as I}from"./options-DEOzrsxm.js";const j=[{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Billing",value:"billing"}]},{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Physical",value:"physical"}]},{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Shipping",value:"shipping"}]}],L={title:"FormFields/FormFieldAddress"},g=["undefined",1,2,3,4,5,-1],i={getOptionsCountries:I,getOptionsStates:_},O="AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",s=({label:n,disabled:l,required:d,prepop:S,prepopData:f,amountPerType:o,amountShipping:a,amountPhysical:r,amountBilling:u,googleKey:m})=>{const c=b({data:S?f:{}}),{state:C,handleSubmit:D}=c,E=T.useMemo(()=>[{disabled:l,label:n,required:d,name:"address",type:"address",inputSettings:{amountPerType:o==="undefined"?void 0:Number(o),amountShipping:a==="undefined"?void 0:Number(a),amountPhysical:r==="undefined"?void 0:Number(r),amountBilling:u==="undefined"?void 0:Number(u),googleMapsApiKey:m,...i}}],[l,n,d,o,a,r,u,m]);return e.jsxs(e.Fragment,{children:[e.jsx(h,{...c,buttons:N(D),title:"Address field",fields:E}),e.jsx("pre",{children:JSON.stringify(C,null,"  ")})]})};s.args={...y.args({prepopData:{address:j}}),amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined",googleKey:O};s.argTypes={...y.argTypes,amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:g},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:g},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:g},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:g},googleKey:{name:"Google API Key"}};const t=({label:n,disabled:l,required:d,prepop:S,prepopData:f,subFields:o,googleKey:a})=>{const r=b({data:S?f:{}}),{state:u,handleSubmit:m}=r,c=T.useMemo(()=>[{disabled:l,label:n,required:d,name:"address",type:"addressSingle",inputSettings:{subFields:o,googleMapsApiKey:a,...i}}],[l,n,d,o,a]);return e.jsxs(e.Fragment,{children:[e.jsx(h,{...r,buttons:N(m),title:"Address Single field",fields:c}),e.jsx("pre",{children:JSON.stringify(u,null,"  ")})]})};t.args={...y.args({prepopData:{address:j[0]}}),subFields:["address1","address2","address3","country","city","state","postalCode"],googleKey:O};t.argTypes={...y.argTypes,subFields:{name:"Sub-Fields",control:{type:"object"}},googleKey:{name:"Google API Key"}};const q=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...i}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...i}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...i}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...i}}],p=()=>{const n=b();return e.jsx(h,{...n,title:"Address Field",fields:q})};var P,F,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  prepop,
  prepopData,
  amountPerType,
  amountShipping,
  amountPhysical,
  amountBilling,
  googleKey
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var G,K,A;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  prepop,
  prepopData,
  subFields,
  googleKey
}: typeof Single.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
  const {
    state,
    handleSubmit
  } = controller;
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address Single field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(A=(K=t.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var v,M,B;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const H=["Playground","Single","KitchenSink"],V=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:p,Playground:s,Single:t,__namedExportsOrder:H,default:L},Symbol.toStringTag,{value:"Module"}));export{V as s};
