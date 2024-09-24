import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as y}from"./index-BP8_t0zE.js";import{r as k}from"./renderButtons-BmHfsf_z.js";import{u as F,F as x}from"./formUtils-DQTEQfwh.js";import"./Button-Cm1Qf39l.js";import{g as B,a as O}from"./optionGetters-DXvNsMp-.js";const j={title:"FormFields/FormFieldAddress"},o=["undefined",1,2,3,4,5,-1],t={getOptionsCountries:B,getOptionsStates:O,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},V=[{id:1,address1:"137 Teaticket Highway",address2:"",city:"Falmouth",state:{label:"Massachusetts",value:"MA"},postalCode:"02536",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]},{id:2,address1:"555 East Main Street",address2:"",city:"Norfolk",state:{label:"Virginia",value:"VA"},postalCode:"23510",country:{label:"United States",value:"US"},types:[{label:"Physical",value:"physical"}]}],e=({label:a,disabled:u,required:m,skeleton:v,prepopulate:p,amountPerType:i,amountShipping:r,amountPhysical:l,amountBilling:d})=>{const c=F(),{state:M,handleSubmit:A}=c,N=y.useMemo(()=>p?async()=>({address:V}):void 0,[p]),T=y.useMemo(()=>[{disabled:u,label:a,required:m,name:"address",type:"address",inputSettings:{amountPerType:i==="undefined"?void 0:Number(i),amountShipping:r==="undefined"?void 0:Number(r),amountPhysical:l==="undefined"?void 0:Number(l),amountBilling:d==="undefined"?void 0:Number(d),...t}}],[u,a,m,i,r,l,d]);return n.jsxs(n.Fragment,{children:[n.jsx(x,{...c,buttons:k(A),title:"Address field",fields:T,skeleton:v,getFormValues:N}),n.jsx("pre",{children:JSON.stringify(M,null,"  ")})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,prepopulate:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},prepopulate:{name:"Prepopulate"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:o},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:o},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:o},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:o}};const E=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],s=()=>{const a=F();return n.jsx(x,{...a,title:"Address Field",fields:E})};var f,g,h;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
  prepopulate,
  amountPerType,
  amountShipping,
  amountPhysical,
  amountBilling
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
      ...commonInputSettings
    }
  }], [disabled, label, required, amountPerType, amountShipping, amountPhysical, amountBilling]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} skeleton={skeleton} getFormValues={getFormValues} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,S,P;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(P=(S=s.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};const _=["Playground","KitchenSink"],I=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:e,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{I as s};
