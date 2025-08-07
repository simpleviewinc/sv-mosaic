import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as O}from"./index-D0AnReJb.js";import{r as C}from"./renderButtons-DP0bGf4C.js";import{c as f}from"./commonFieldControl-LQDYMh-C.js";import{u as h,F as P}from"./index-DJG_vs7p.js";import{a as q,b as H}from"./options-DEOzrsxm.js";const D=[{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Billing",value:"billing"}]},{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Physical",value:"physical"}]},{address1:"81 Sussex Gardens",address2:"Hucclecote",country:{label:"United Kingdom",value:"GB"},city:"Gloucester",state:{label:"Gloucestershire",value:"GLS"},postalCode:"GL3 3SP",types:[{label:"Shipping",value:"shipping"}]}],J={title:"FormFields/FormFieldAddress"},y=["undefined",1,2,3,4,5,-1],o={getOptionsCountries:H,getOptionsStates:q},I="AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",t=({label:n,hideLabel:a,disabled:r,required:c,prepop:S,prepopData:g,instructionText:i,forceInstructionTooltip:l,amountPerType:d,amountShipping:u,amountPhysical:p,amountBilling:b,googleKey:F})=>{const x=h({data:S?g:{}}),{state:L,handleSubmit:E}=x,_=O.useMemo(()=>[{disabled:r,label:n,hideLabel:a,required:c,instructionText:i,forceInstructionTooltip:l,name:"address",type:"address",inputSettings:{amountPerType:d==="undefined"?void 0:Number(d),amountShipping:u==="undefined"?void 0:Number(u),amountPhysical:p==="undefined"?void 0:Number(p),amountBilling:b==="undefined"?void 0:Number(b),googleMapsApiKey:F,...o}}],[r,n,a,c,i,l,d,u,p,b,F]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{...x,buttons:C(E),title:"Address field",fields:_}),e.jsx("pre",{children:JSON.stringify(L,null,"  ")})]})};t.args={...f.args({prepopData:{address:D}}),amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined",googleKey:I};t.argTypes={...f.argTypes,amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:y},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:y},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:y},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:y},googleKey:{name:"Google API Key"}};const s=({label:n,disabled:a,required:r,prepop:c,prepopData:S,subFields:g,googleKey:i})=>{const l=h({data:c?S:{}}),{state:d,handleSubmit:u}=l,p=O.useMemo(()=>[{disabled:a,label:n,required:r,name:"address",type:"addressSingle",inputSettings:{subFields:g,googleMapsApiKey:i,...o}}],[a,n,r,g,i]);return e.jsxs(e.Fragment,{children:[e.jsx(P,{...l,buttons:C(u),title:"Address Single field",fields:p}),e.jsx("pre",{children:JSON.stringify(d,null,"  ")})]})};s.args={...f.args({prepopData:{address:D[0]}}),subFields:["address1","address2","address3","country","city","state","postalCode"],googleKey:I};s.argTypes={...f.argTypes,subFields:{name:"Sub-Fields",control:{type:"object"}},googleKey:{name:"Google API Key"}};const R=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...o}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...o}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...o}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...o}}],m=()=>{const n=h();return e.jsx(P,{...n,title:"Address Field",fields:R})};var G,K,A;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`({
  label,
  hideLabel,
  disabled,
  required,
  prepop,
  prepopData,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
    required,
    instructionText,
    forceInstructionTooltip,
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
  }], [disabled, label, hideLabel, required, instructionText, forceInstructionTooltip, amountPerType, amountShipping, amountPhysical, amountBilling, googleKey]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(A=(K=t.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var v,T,M;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`({
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
}`,...(M=(T=s.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var B,N,j;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(j=(N=m.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const k=["Playground","Single","KitchenSink"],Z=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:m,Playground:t,Single:s,__namedExportsOrder:k,default:J},Symbol.toStringTag,{value:"Module"}));export{Z as s};
