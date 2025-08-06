import{j as k}from"./jsx-runtime-EKYJJIwR.js";import{r as b}from"./index-D0AnReJb.js";import{C as p}from"./Checkbox-DnVUUwfp.js";const u={title:"Components/Checkbox",parameters:{layout:"centered"}},e=({label:r,controlled:o,checked:c,disabled:l,indeterminate:d})=>{const[s,i]=b.useState(!1),m=o?c:s;return k.jsx(p,{label:r,checked:m,onChange:h=>i(h.target.checked),disabled:l,indeterminate:d})};e.args={label:"Example",controlled:!0,checked:!1,disabled:!1,indeterminate:!1};e.argTypes={label:{name:"Label"},controlled:{name:"Controlled"},checked:{name:"Checked",if:{arg:"controlled"}},disabled:{name:"Disabled"},indeterminate:{name:"Indeterminate"}};var t,n,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`({
  label,
  controlled,
  checked: controlledChecked,
  disabled,
  indeterminate
}: typeof Playground.args): ReactElement => {
  const [internalChecked, setInternalChecked] = useState(false);
  const checked = controlled ? controlledChecked : internalChecked;
  return <Checkbox label={label} checked={checked} onChange={e => setInternalChecked((e.target as HTMLInputElement).checked)} disabled={disabled} indeterminate={indeterminate} />;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const C=["Playground"],y=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:C,default:u},Symbol.toStringTag,{value:"Module"}));export{e as P,y as s};
