import{j as o}from"./jsx-runtime-CexXSJP5.js";import{r as d}from"./index-BP8_t0zE.js";import{C as h}from"./CheckboxList-vtqXYb3p.js";import{c as p}from"./FormFieldCheckboxUtils-C4lbz8gc.js";const m={title:"Components/CheckboxList"},e=()=>{const[t,r]=d.useState([]),i=a=>{r(a)};return o.jsxs("div",{children:[o.jsxs("div",{children:["checked:",JSON.stringify(t)]}),o.jsx(h,{checked:t,options:p,onChange:i})]})};var s,c,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
  const [checked, setChecked] = useState<MosaicLabelValue[]>([]);
  const onChange = c => {
    setChecked(c);
  };
  return <div>
            <div>
                checked:
                {JSON.stringify(checked)}
            </div>
            <CheckboxList checked={checked} options={checkboxOptions} onChange={onChange} />
        </div>;
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const k=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:k,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,g as s};
