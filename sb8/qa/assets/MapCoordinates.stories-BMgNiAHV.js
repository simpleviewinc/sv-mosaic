import{j as e}from"./jsx-runtime-DiwAibxM.js";import{r as M}from"./index-Btj5Fd67.js";import{r as S}from"./renderButtons-BmHfsf_z.js";import{c as y}from"./commonFieldControl-DXwRxrKb.js";import{u as b,F as h}from"./Form-BPFGePWm.js";const V={title:"FormFields/FormFieldMapCoordinates"},z=async()=>({map:{lat:32.369247319672866,lng:-110.96678114089914}}),n=({label:t,required:r,skeleton:a,disabled:s,initialCenterKnob:i,zoom:l,focusZoom:m,prepop:A})=>{const p=b(),{state:x,handleSubmit:C}=p,K=M.useMemo(()=>[{name:"map",label:t,type:"mapCoordinates",required:r,disabled:s,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:i,zoom:l,focusZoom:m}}],[s,t,i,r,l,m]);return e.jsxs(e.Fragment,{children:[e.jsx(h,{...p,buttons:S(C),title:"Map Coordinates Field",fields:K,getFormValues:A?z:void 0,skeleton:a}),e.jsx("pre",{children:JSON.stringify(x,null,"  ")})]})};n.args={...y.args,initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11};n.argTypes={...y.argTypes,initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}}};const T=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],o=()=>{const t=b(),{state:r,handleSubmit:a}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(r,null,"  ")}),e.jsx(h,{...t,buttons:S(a),title:"Form Title",description:"This is a description example",fields:T})]})};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  initialCenterKnob,
  zoom,
  focusZoom,
  prepop
}: typeof Playground.args): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  const fields = useMemo((): FieldDef[] => [{
    name: "map",
    label,
    type: "mapCoordinates",
    required,
    disabled,
    inputSettings: {
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
      initialCenter: initialCenterKnob,
      zoom,
      focusZoom
    }
  }], [disabled, label, initialCenterKnob, required, zoom, focusZoom]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Map Coordinates Field" fields={fields} getFormValues={prepop ? getFormValues : undefined} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,f,F;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(F=(f=o.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const Z=["Playground","KitchenSink"],O=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:Z,default:V},Symbol.toStringTag,{value:"Module"}));export{O as s};
