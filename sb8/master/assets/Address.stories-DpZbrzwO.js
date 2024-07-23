import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as T}from"./index-BP8_t0zE.js";import{r as M}from"./storyUtils-ByV2Bsyv.js";import{u as S,F as P}from"./formUtils-CvckxmPa.js";import{g as v,a as B}from"./optionGetters-DXvNsMp-.js";const O={title:"FormFields/FormFieldAddress"},o=["undefined",1,2,3,4,5],t={getOptionsCountries:v,getOptionsStates:B,googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"},e=({label:i,disabled:m,required:u,skeleton:x,amountPerType:a,amountShipping:r,amountPhysical:d,amountBilling:l})=>{const p=S(),{state:F,handleSubmit:A}=p,N=T.useMemo(()=>[{disabled:m,label:i,required:u,name:"address",type:"address",inputSettings:{amountPerType:a==="undefined"?void 0:Number(a),amountShipping:r==="undefined"?void 0:Number(r),amountPhysical:d==="undefined"?void 0:Number(d),amountBilling:l==="undefined"?void 0:Number(l),...t}}],[m,i,u,a,r,d,l]);return n.jsxs(n.Fragment,{children:[n.jsx("pre",{children:JSON.stringify(F,null,"  ")}),n.jsx(P,{...p,buttons:M(A),title:"Address field",fields:N,skeleton:x})]})};e.args={label:"Label",disabled:!1,required:!1,skeleton:!1,amountPerType:"undefined",amountShipping:"undefined",amountPhysical:"undefined",amountBilling:"undefined"};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},amountPerType:{name:"Maximum of Each Type",control:{type:"select"},options:o},amountShipping:{name:"Shipping Maximum",control:{type:"select"},options:o},amountPhysical:{name:"Physical Maximum",control:{type:"select"},options:o},amountBilling:{name:"Billing Maximum",control:{type:"select"},options:o}};const j=[{label:"Provide a physical address",name:"physicalOnly",type:"address",inputSettings:{amountPhysical:1,...t}},{label:"Provide 1 physical address and 1 shipping address",name:"physicalAndShipping",type:"address",inputSettings:{amountPhysical:1,amountShipping:1,...t}},{label:"Provide any combination of addresses with a maximum of 1 each",name:"anyCombinationMax1",type:"address",inputSettings:{...t}},{label:"Provide any combination of addresses with no maximum",name:"anyCombinationNoMax",type:"address",inputSettings:{amountPerType:-1,...t}}],s=()=>{const i=S();return n.jsx(P,{...i,title:"Address Field",fields:j})};var c,f,y;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  label,
  disabled,
  required,
  skeleton,
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
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Address field" fields={fields} skeleton={skeleton} />
        </>;
}`,...(y=(f=e.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,b,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  return <Form {...controller} title="Address Field" fields={fields} />;
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const k=["Playground","KitchenSink"],w=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:e,__namedExportsOrder:k,default:O},Symbol.toStringTag,{value:"Module"}));export{w as s};
