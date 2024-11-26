import{j as n}from"./jsx-runtime-nGUw9YhZ.js";import{r as u}from"./index-BP8_t0zE.js";import{D as f}from"./DataViewFilterSingleSelect-BnogSr3q.js";const R={title:"Components/DataViewFilterSingleSelect"},s=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"},{label:"Option D",value:"d"}],C=["Option A","Option B","Option C","Option D"],a=({defaultValue:r,required:c})=>{const[d,i]=u.useState({value:void 0});u.useEffect(()=>{const t=s.find(e=>e.label===r);i({value:t.value})},[r]);const g=function(t){i(t)},p=function(){return{docs:s,hasMore:!1}},l=function(t){return s.filter(e=>e.value===t)[0]};return n.jsx(f,{label:"Testing",data:d,args:{getOptions:p,getSelected:l,required:c},onChange:g})};a.args={defaultValue:"Option A",required:!1};a.argTypes={defaultValue:{name:"Default Value",options:C,control:{type:"select"}},required:{name:"Required"}};const o=()=>{const[r,c]=u.useState({value:void 0}),[d,i]=u.useState({value:"a"}),g=function(e){c(e)},p=function(e){i(e)},l=function(){return{docs:s,hasMore:!1}},t=function(e){return s.filter(b=>b.value===e)[0]};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Required"}),n.jsx(f,{label:"Required",data:d,args:{getOptions:l,getSelected:t,required:!0},onChange:p}),n.jsx("h2",{children:"No required"}),n.jsx(f,{label:"No required",data:r,args:{getOptions:l,getSelected:t,required:!1},onChange:g})]})};var S,h,q;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
  }} onChange={onChange} />;
}`,...(q=(h=a.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var v,m,O;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`(): ReactElement => {
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
    }} onChange={onChangeRequired} />
            <h2>No required</h2>
            <DataViewFilterSingleSelect label="No required" data={state} args={{
      getOptions,
      getSelected,
      required: false
    }} onChange={onChange} />
        </>;
}`,...(O=(m=o.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};const x=["Playground","KitchenSink"],y=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:o,Playground:a,__namedExportsOrder:x,default:R},Symbol.toStringTag,{value:"Module"}));export{a as P,y as s};
