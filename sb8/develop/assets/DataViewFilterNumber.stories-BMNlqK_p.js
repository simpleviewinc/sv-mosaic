import{j as p}from"./jsx-runtime-DKBipoO1.js";import{r as u}from"./index-P8U4y8pz.js";import{D as c}from"./DataViewFilterNumber-PnpD18gn.js";import{Playground as e}from"./FormFieldNumber.stories-CvQlNTAb.js";const f={title:"Components/DataViewFilterNumber"},a=({decimalPlaces:i,prefix:n,suffix:o,sign:l})=>{const[m,g]=u.useState({});return p.jsx(c,{label:"Number filter example",data:m,args:{decimalPlaces:i,prefix:n,suffix:o,sign:l},onChange:g})};a.args={decimalPlaces:e.args.decimalPlaces,prefix:e.args.prefix,suffix:e.args.suffix,sign:e.args.sign};a.argTypes={decimalPlaces:e.argTypes.decimalPlaces,prefix:e.argTypes.prefix,suffix:e.argTypes.suffix,sign:e.argTypes.sign};var r,s,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`({
  decimalPlaces,
  prefix,
  suffix,
  sign
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  return <DataViewFilterNumber label="Number filter example" data={state} args={{
    decimalPlaces,
    prefix,
    suffix,
    sign
  }} onChange={setState} />;
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const d=["Playground"],S=Object.freeze(Object.defineProperty({__proto__:null,Playground:a,__namedExportsOrder:d,default:f},Symbol.toStringTag,{value:"Module"}));export{S as s};
