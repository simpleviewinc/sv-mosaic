import{j as f}from"./jsx-runtime-nGUw9YhZ.js";import{r as g}from"./index-BP8_t0zE.js";import{D as p}from"./DataViewFilterNumber-QVK0czIE.js";import{Playground as e}from"./FormFieldNumber.stories-CRzoDEjS.js";const d={title:"Components/DataViewFilterNumber"},a=({decimalPlaces:n,prefix:o,suffix:i,sign:l})=>{const[m,c]=g.useState({}),u=()=>{};return f.jsx(p,{label:"Number filter example",data:m,args:{decimalPlaces:n,prefix:o,suffix:i,sign:l},onRemove:u,onChange:c})};a.args={decimalPlaces:e.args.decimalPlaces,prefix:e.args.prefix,suffix:e.args.suffix,sign:e.args.sign};a.argTypes={decimalPlaces:e.argTypes.decimalPlaces,prefix:e.argTypes.prefix,suffix:e.argTypes.suffix,sign:e.argTypes.sign};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
  decimalPlaces,
  prefix,
  suffix,
  sign
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const onRemove = () => undefined;
  return <DataViewFilterNumber label="Number filter example" data={state} args={{
    decimalPlaces,
    prefix,
    suffix,
    sign
  }} onRemove={onRemove} onChange={setState} />;
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const x=["Playground"],_=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:x,default:d},Symbol.toStringTag,{value:"Module"}));export{_ as s};
