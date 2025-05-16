import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as d}from"./index-D0AnReJb.js";import{C as h}from"./CheckboxList-BfityfDx.js";import{m}from"./options-DEOzrsxm.js";const p={title:"Components/CheckboxList"},e=()=>{const[t,r]=d.useState([]),i=a=>{r(a)};return o.jsxs("div",{children:[o.jsxs("div",{children:["checked:",JSON.stringify(t)]}),o.jsx(h,{checked:t,options:m,onChange:i})]})};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
  const [checked, setChecked] = useState<MosaicLabelValue[]>([]);
  const onChange = c => {
    setChecked(c);
  };
  return <div>
            <div>
                checked:
                {JSON.stringify(checked)}
            </div>
            <CheckboxList checked={checked} options={mockOptions} onChange={onChange} />
        </div>;
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const k=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:k,default:p},Symbol.toStringTag,{value:"Module"}));export{e as P,g as s};
