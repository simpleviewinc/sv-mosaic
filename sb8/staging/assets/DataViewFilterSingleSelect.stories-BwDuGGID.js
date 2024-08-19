import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as c}from"./index-BP8_t0zE.js";import{D as S}from"./DataViewFilterSingleSelect-B4ymfXJm.js";const C={title:"Components/DataViewFilterSingleSelect"},s=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"},{label:"Option D",value:"d"}],x=["Option A","Option B","Option C","Option D"],a=({defaultValue:r,required:d})=>{const[g,i]=c.useState({value:void 0});c.useEffect(()=>{const t=s.find(e=>e.label===r);i({value:t.value})},[r]);const p=function(t){i(t)},f=()=>{},l=function(){return{docs:s,hasMore:!1}},u=function(t){return s.filter(e=>e.value===t)[0]};return n.jsx(S,{label:"Testing",data:g,args:{getOptions:l,getSelected:u,required:d},onRemove:f,onChange:p})};a.args={defaultValue:"Option A",required:!1};a.argTypes={defaultValue:{name:"Default Value",options:x,control:{type:"select"}},required:{name:"Required"}};const o=()=>{const[r,d]=c.useState({value:void 0}),[g,i]=c.useState({value:"a"}),p=function(e){d(e)},f=function(e){i(e)},l=()=>{},u=function(){return{docs:s,hasMore:!1}},t=function(e){return s.filter(b=>b.value===e)[0]};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Required"}),n.jsx(S,{label:"Required",data:g,args:{getOptions:u,getSelected:t,required:!0},onRemove:l,onChange:f}),n.jsx("h2",{children:"No required"}),n.jsx(S,{label:"No required",data:r,args:{getOptions:u,getSelected:t,required:!1},onRemove:l,onChange:p})]})};var v,m,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`({
  defaultValue,
  required
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState({
    value: undefined
  });
  useEffect(() => {
    const selectedOption = options.find(option => option.label === defaultValue);
    setState({
      value: selectedOption.value
    });
  }, [defaultValue]);
  const onChange = function (data) {
    setState(data);
  };
  const onRemove = () => undefined;
  const getOptions = function () {
    return {
      docs: options,
      hasMore: false
    };
  };
  const getSelected = function (id) {
    return options.filter(val => val.value === id)[0];
  };
  return <DataViewFilterSingleSelect label="Testing" data={state} args={{
    getOptions,
    getSelected,
    required
  }} onRemove={onRemove} onChange={onChange} />;
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var R,q,O;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState({
    value: undefined
  });
  const [stateRequired, setStateRequired] = useState({
    value: "a"
  });
  const onChange = function (data) {
    setState(data);
  };
  const onChangeRequired = function (data) {
    setStateRequired(data);
  };
  const onRemove = () => undefined;
  const getOptions = function () {
    return {
      docs: options,
      hasMore: false
    };
  };
  const getSelected = function (id) {
    return options.filter(val => val.value === id)[0];
  };
  return <>
            <h2>Required</h2>
            <DataViewFilterSingleSelect label="Required" data={stateRequired} args={{
      getOptions,
      getSelected,
      required: true
    }} onRemove={onRemove} onChange={onChangeRequired} />
            <h2>No required</h2>
            <DataViewFilterSingleSelect label="No required" data={state} args={{
      getOptions,
      getSelected,
      required: false
    }} onRemove={onRemove} onChange={onChange} />
        </>;
}`,...(O=(q=o.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const V=["Playground","KitchenSink"],E=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:V,default:C},Symbol.toStringTag,{value:"Module"}));export{a as P,E as s};
