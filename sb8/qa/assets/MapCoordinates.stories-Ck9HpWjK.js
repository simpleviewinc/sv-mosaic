import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as M}from"./index-D0AnReJb.js";import{r as F}from"./renderButtons-BmHfsf_z.js";import{c as y}from"./commonFieldControl-LQDYMh-C.js";import{u as b,F as h}from"./Form-CgwovX7A.js";const z={title:"FormFields/FormFieldMapCoordinates"},n=({label:t,required:a,prepop:r,prepopData:A,disabled:i,initialCenterKnob:s,zoom:l,focusZoom:p})=>{const m=b({data:r?A:{}}),{state:x,handleSubmit:C}=m,K=M.useMemo(()=>[{name:"map",label:t,type:"mapCoordinates",required:a,disabled:i,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:s,zoom:l,focusZoom:p}}],[i,t,s,a,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx(h,{...m,buttons:F(C),title:"Map Coordinates Field",fields:K}),e.jsx("pre",{children:JSON.stringify(x,null,"  ")})]})};n.args={...y.args({prepopData:{map:{lat:32.369247319672866,lng:-110.96678114089914}}}),initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11};n.argTypes={...y.argTypes,initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}}};const T=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],o=()=>{const t=b(),{state:a,handleSubmit:r}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(a,null,"  ")}),e.jsx(h,{...t,buttons:F(r),title:"Form Title",description:"This is a description example",fields:T})]})};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  prepop,
  prepopData,
  disabled,
  initialCenterKnob,
  zoom,
  focusZoom
}: typeof Playground.args): ReactElement => {
  const controller = useForm({
    data: prepop ? prepopData : {}
  });
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Map Coordinates Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,S,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const Z=["Playground","KitchenSink"],O=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:Z,default:z},Symbol.toStringTag,{value:"Module"}));export{O as s};
