import{j as e}from"./jsx-runtime-nGUw9YhZ.js";import{r as K}from"./index-BP8_t0zE.js";import{r as b}from"./storyUtils-ByV2Bsyv.js";import{u as F,F as y}from"./formUtils-CdvCEz-F.js";const M={title:"FormFields/FormFieldMapCoordinates"},V=async()=>({map:{lat:32.369247319672866,lng:-110.96678114089914}}),n=({label:t,required:a,skeleton:r,disabled:s,initialCenterKnob:i,zoom:l,focusZoom:p,prepopulate:h})=>{const m=F(),{state:A,handleSubmit:x}=m,C=K.useMemo(()=>[{name:"map",label:t,type:"mapCoordinates",required:a,disabled:s,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:i,zoom:l,focusZoom:p}}],[s,t,i,a,l,p]);return e.jsxs(e.Fragment,{children:[e.jsx(y,{...m,buttons:b(x),title:"Map Coordinates Field",fields:C,getFormValues:h?V:void 0,skeleton:r}),e.jsx("pre",{children:JSON.stringify(A,null,"  ")})]})};n.args={label:"Label",disabled:!1,required:!1,skeleton:!1,initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11,prepopulate:!1};n.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"},skeleton:{name:"Skeleton"},initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}},prepopulate:{name:"Prepopulate"}};const q=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],o=()=>{const t=F(),{state:a,handleSubmit:r}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(a,null,"  ")}),e.jsx(y,{...t,buttons:b(r),title:"Form Title",description:"This is a description example",fields:q})]})};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  label,
  required,
  skeleton,
  disabled,
  initialCenterKnob,
  zoom,
  focusZoom,
  prepopulate
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
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Map Coordinates Field" fields={fields} getFormValues={prepopulate ? getFormValues : undefined} skeleton={skeleton} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var g,f,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const z=["Playground","KitchenSink"],w=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:z,default:M},Symbol.toStringTag,{value:"Module"}));export{w as s};
