import{j as o}from"./jsx-runtime-DiwAibxM.js";import{r as d}from"./index-Btj5Fd67.js";import{C as h}from"./CheckboxList-8phOVoJn.js";import{o as p}from"./options-DJM8a-gX.js";const m={title:"Components/CheckboxList"},e=()=>{const[t,c]=d.useState([]),i=a=>{c(a)};return o.jsxs("div",{children:[o.jsxs("div",{children:["checked:",JSON.stringify(t)]}),o.jsx(h,{checked:t,options:p,onChange:i})]})};var s,n,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): ReactElement => {
  const [checked, setChecked] = useState<MosaicLabelValue[]>([]);
  const onChange = c => {
    setChecked(c);
  };
  return <div>
            <div>
                checked:
                {JSON.stringify(checked)}
            </div>
            <CheckboxList checked={checked} options={optionsLibrary} onChange={onChange} />
        </div>;
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const l=["Playground"],g=Object.freeze(Object.defineProperty({__proto__:null,Playground:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{e as P,g as s};
