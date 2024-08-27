import{j as s}from"./jsx-runtime-CexXSJP5.js";import{r as h}from"./index-BP8_t0zE.js";import{T as u}from"./Toggle-BBqCIk62.js";const m={title:"Components/Toggle"},e=({label:t,disabled:d,required:l})=>{const[a,c]=h.useState(!1),i=async g=>{c(g)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Is toggle checked?",`${a}`]}),s.jsx(u,{label:t,disabled:d,required:l,onChange:i,checked:a})]})};e.args={label:"Label",disabled:!1,required:!1};e.argTypes={label:{name:"Label"},disabled:{name:"Disabled"},required:{name:"Required"}};var n,r,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  label,
  disabled,
  required
}: typeof Playground.args): ReactElement => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = async (checked: boolean) => {
    setIsChecked(checked);
  };
  return <>
            <p>
                Is toggle checked?
                {\`\${isChecked}\`}
            </p>
            <Toggle label={label} disabled={disabled} required={required} onChange={handleChange} checked={isChecked} />
        </>;
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const p=["Playground"],f=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,f as s};
