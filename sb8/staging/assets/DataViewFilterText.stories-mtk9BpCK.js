import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as f}from"./index-D0AnReJb.js";import{D as c}from"./DataViewFilterText-CZ5ETHnA.js";const _={title:"Components/DataViewFilterText"},t=({comparison:a,placeholder:r,comparisonDefault:n})=>{const[e,i]=f.useState({}),l=function(h){i(h??{})};return o.jsx(c,{label:"Filter text example",data:e,args:{comparisons:a&&["contains","not_contains","equals","not_equals","exists","not_exists"],placeholder:r,comparisonDefault:n==="undefined"?void 0:n},onChange:l})};t.args={comparison:!1,placeholder:"Placeholder",comparisonDefault:"undefined"};t.argTypes={comparison:{name:"Comparison"},placeholder:{name:"Placholder"},comparisonDefault:{name:"Default Comparison",options:["contains","not_contains","equals","not_equals","exists","not_exists","undefined"],control:{type:"select"}}};const s=()=>{const[a,r]=f.useState({regular:{},comparisons:{}}),n=function(e,i){const l={...a,[e]:i??{}};r(l)};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(c,{label:"Filter text example",data:a.regular,args:{},onChange:e=>n("regular",e)}),o.jsx(c,{label:"Filter text with comparisons",data:a.comparisons,args:{comparisons:["contains","not_contains","equals","not_equals","exists","not_exists"]},onChange:e=>n("comparisons",e)})]})};var p,u,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
  comparison,
  placeholder,
  comparisonDefault
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({});
  const onChange = function (data) {
    setState(data ?? {});
  };
  return <DataViewFilterText label="Filter text example" data={state} args={{
    comparisons: comparison && ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"],
    placeholder,
    comparisonDefault: comparisonDefault === "undefined" ? undefined : comparisonDefault
  }} onChange={onChange} />;
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,x,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`(): ReactElement => {
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
  return <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
            <DataViewFilterText label="Filter text example" data={state.regular} args={{}} onChange={data => onChange("regular", data)} />
            <DataViewFilterText label="Filter text with comparisons" data={state.comparisons} args={{
      comparisons: ["contains", "not_contains", "equals", "not_equals", "exists", "not_exists"]
    }} onChange={data => onChange("comparisons", data)} />
        </div>;
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const S=["Playground","KitchenSink"],F=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:s,Playground:t,__namedExportsOrder:S,default:_},Symbol.toStringTag,{value:"Module"}));export{t as P,F as s};
