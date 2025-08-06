import{j as m}from"./jsx-runtime-EKYJJIwR.js";import{r as g}from"./index-D0AnReJb.js";import{T as k}from"./Toggle-CtisJX2d.js";const p={title:"Components/Toggle",parameters:{layout:"centered"}},e=({label:t,controlled:l,checked:o,disabled:c,required:d})=>{const[s,i]=g.useState(!1),u=l?o:s;return m.jsx(k,{label:t,disabled:c,required:d,checked:u,onChange:async h=>i(h)})};e.args={label:"Label",controlled:!0,checked:!1,disabled:!1,required:!1};e.argTypes={label:{name:"Label"},controlled:{name:"Controlled"},checked:{name:"Checked",if:{arg:"controlled"}},disabled:{name:"Disabled"},required:{name:"Required"}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`({
  label,
  controlled,
  checked: controlledChecked,
  disabled,
  required
}: typeof Playground.args): ReactElement => {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlled ? controlledChecked : internalChecked;
  return <Toggle label={label} disabled={disabled} required={required} checked={checked} onChange={async checked => setInternalChecked(checked)} />;
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["Playground"],T=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:b,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,T as s};
