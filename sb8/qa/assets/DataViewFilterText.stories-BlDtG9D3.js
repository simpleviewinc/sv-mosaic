import{j as r}from"./jsx-runtime-nGUw9YhZ.js";import{r as h}from"./index-BP8_t0zE.js";import{D as m}from"./DataViewFilterText-2_rb2ElJ.js";const S={title:"Components/DataViewFilterText"},t=({comparison:n,placeholder:i,comparisonDefault:a})=>{const[s,e]=h.useState({}),l=function(_){e(_??{})},c=()=>{};return r.jsx(m,{label:"Filter text example",data:s,args:{comparisons:n&&["contains","not_contains","equals","not_equals","exists","not_exists"],placeholder:i,comparisonDefault:a==="undefined"?void 0:a},onRemove:c,onChange:l})};t.args={comparison:!1,placeholder:"Placeholder",comparisonDefault:"undefined"};t.argTypes={comparison:{name:"Comparison"},placeholder:{name:"Placholder"},comparisonDefault:{name:"Default Comparison",options:["contains","not_contains","equals","not_equals","exists","not_exists","undefined"],control:{type:"select"}}};const o=()=>{const[n,i]=h.useState({regular:{},comparisons:{}}),a=function(e,l){const c={...n,[e]:l??{}};i(c)},s=()=>{};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(m,{label:"Filter text example",data:n.regular,args:{},onRemove:s,onChange:e=>a("regular",e)}),r.jsx(m,{label:"Filter text with comparisons",data:n.comparisons,args:{comparisons:["contains","not_contains","equals","not_equals","exists","not_exists"]},onRemove:s,onChange:e=>a("comparisons",e)})]})};var p,u,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  comparison,
  placeholder,
  comparisonDefault
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const onChange = function (data) {
    setState(data ?? {});
  };
  const onRemove = () => undefined;
  return <DataViewFilterText label="Filter text example" data={state} args={{
    comparisons: comparison && ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
    placeholder,
    comparisonDefault: comparisonDefault === "undefined" ? undefined : comparisonDefault
  }} onRemove={onRemove} onChange={onChange} />;
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var x,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState({
    regular: {},
    comparisons: {}
  });
  const onChange = function (type, data) {
    const newState = {
      ...state,
      [type]: data ?? {}
    };
    setState(newState);
  };
  const onRemove = () => undefined;
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
            <DataViewFilterText label="Filter text example" data={state.regular} args={{}} onRemove={onRemove} onChange={data => onChange("regular", data)} />
            <DataViewFilterText label="Filter text with comparisons" data={state.comparisons} args={{
      comparisons: ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"]
    }} onRemove={onRemove} onChange={data => onChange("comparisons", data)} />
        </div>;
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const v=["Playground","KitchenSink"],R=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:t,__namedExportsOrder:v,default:S},Symbol.toStringTag,{value:"Module"}));export{t as P,R as s};
