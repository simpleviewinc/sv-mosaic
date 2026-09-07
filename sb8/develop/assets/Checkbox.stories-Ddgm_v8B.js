import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-wekxHvEx.js";import{C as u}from"./Checkbox-CCK0f4bK.js";const C={title:"Components/Checkbox",parameters:{layout:"centered"}},e=({label:r,ariaLabel:l,controlled:o,checked:s,disabled:c,indeterminate:d})=>{const[i,b]=p.useState(!1),h=o?s:i;return k.jsx(u,{label:r,"aria-label":l||void 0,checked:h,onChange:m=>b(m.target.checked),disabled:c,indeterminate:d})};e.args={label:"Example",ariaLabel:"",controlled:!0,checked:!1,disabled:!1,indeterminate:!1};e.argTypes={label:{name:"Label"},ariaLabel:{name:"Aria Label",description:"Sets the checkbox's accessible name. It is used even when a Label is present, and overrides it, so setting both logs a warning. Provide it when there is no visible Label text."},controlled:{name:"Controlled"},checked:{name:"Checked",if:{arg:"controlled"}},disabled:{name:"Disabled"},indeterminate:{name:"Indeterminate"}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`({
  label,
  ariaLabel,
  controlled,
  checked: controlledChecked,
  disabled,
  indeterminate
}: typeof Playground.args): ReactElement => {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlled ? controlledChecked : internalChecked;
  return <Checkbox label={label} aria-label={ariaLabel || undefined} checked={checked} onChange={e => setInternalChecked((e.target as HTMLInputElement).checked)} disabled={disabled} indeterminate={indeterminate} />;
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Playground"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:g,default:C},Symbol.toStringTag,{value:"Module"}));export{e as P,y as s};
