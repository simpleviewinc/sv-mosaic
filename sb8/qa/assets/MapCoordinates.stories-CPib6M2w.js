import{j as e}from"./jsx-runtime-EKYJJIwR.js";import{r as Z}from"./index-DDfD_3TG.js";import{r as y}from"./renderButtons-BmHfsf_z.js";import{c as h}from"./commonFieldControl-LQDYMh-C.js";import{u as A,F as x}from"./Form-EIXaRtfg.js";const q={title:"FormFields/FormFieldMapCoordinates"},n=({label:t,hideLabel:a,required:r,prepop:C,prepopData:K,instructionText:i,forceInstructionTooltip:s,disabled:l,initialCenterKnob:p,zoom:m,focusZoom:d})=>{const c=A({data:C?K:{}}),{state:T,handleSubmit:M}=c,z=Z.useMemo(()=>[{name:"map",label:t,hideLabel:a,type:"mapCoordinates",required:r,disabled:l,instructionText:i,forceInstructionTooltip:s,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:p,zoom:m,focusZoom:d}}],[t,a,r,l,i,s,p,m,d]);return e.jsxs(e.Fragment,{children:[e.jsx(x,{...c,buttons:y(M),title:"Map Coordinates Field",fields:z}),e.jsx("pre",{children:JSON.stringify(T,null,"  ")})]})};n.args={...h.args({prepopData:{map:{lat:32.369247319672866,lng:-110.96678114089914}}}),initialCenterKnob:{lat:48.858321470423576,lng:2.2945004162050564},zoom:7,focusZoom:11};n.argTypes={...h.argTypes,initialCenterKnob:{name:"Initial Center"},zoom:{name:"Zoom",control:{type:"range",min:0,max:18}},focusZoom:{name:"Focus Zoom",control:{type:"range",min:0,max:18}}};const V=[{name:"mapStandard",label:"Standard map",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}},{name:"mapZoom",label:"Map with zoom set to 8",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",zoom:8,initialCenter:{lat:40.7127753,lng:-74.0059728}}},{name:"mapWithInitalPosition",label:"Map with an inital map position set",type:"mapCoordinates",required:!1,disabled:!1,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",initialCenter:{lat:19.3884403,lng:-99.1747252}}},{name:"mapDisabled",label:"Map disabled",type:"mapCoordinates",required:!1,disabled:!0,inputSettings:{googleMapsApiKey:"AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac"}}],o=()=>{const t=A(),{state:a,handleSubmit:r}=t;return e.jsxs(e.Fragment,{children:[e.jsx("pre",{children:JSON.stringify(a,null,"  ")}),e.jsx(x,{...t,buttons:y(r),title:"Form Title",description:"This is a description example",fields:V})]})};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  label,
  hideLabel,
  required,
  prepop,
  prepopData,
  instructionText,
  forceInstructionTooltip,
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
    hideLabel,
    type: "mapCoordinates",
    required,
    disabled,
    instructionText,
    forceInstructionTooltip,
    inputSettings: {
      googleMapsApiKey: "AIzaSyArV4f-KFF86Zn9VWAu9wS4hHlG1TXxqac",
      initialCenter: initialCenterKnob,
      zoom,
      focusZoom
    }
  }], [label, hideLabel, required, disabled, instructionText, forceInstructionTooltip, initialCenterKnob, zoom, focusZoom]);
  return <>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Map Coordinates Field" fields={fields} />
            <pre>{JSON.stringify(state, null, "  ")}</pre>
        </>;
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,F,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`(): ReactElement => {
  const controller = useForm();
  const {
    state,
    handleSubmit
  } = controller;
  return <>
            <pre>{JSON.stringify(state, null, "  ")}</pre>
            <Form {...controller} buttons={renderButtons(handleSubmit)} title="Form Title" description="This is a description example" fields={kitchenSinkFields} />
        </>;
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const j=["Playground","KitchenSink"],k=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:n,__namedExportsOrder:j,default:q},Symbol.toStringTag,{value:"Module"}));export{k as s};
