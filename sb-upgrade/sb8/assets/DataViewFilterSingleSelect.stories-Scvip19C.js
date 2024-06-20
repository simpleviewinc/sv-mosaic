import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as d}from"./index-CDs2tPxN.js";import{D as f}from"./DataViewFilterSingleSelect-BRAVISpB.js";import"./theme-tUuL1bpb.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Button-B_QyrzNG.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./MenuSelect-Bs7eM6mM.js";const G={title:"Components/DataViewFilterSingleSelect"},r=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"},{label:"Option D",value:"d"}],b=["Option A","Option B","Option C","Option D"],o=({defaultValue:i,required:c})=>{const[p,s]=d.useState({value:void 0});d.useEffect(()=>{const t=r.find(e=>e.label===i);s({value:t.value})},[i]);const g=function(t){s(t)},m=()=>{},l=function(){return{docs:r,hasMore:!1}},u=function(t){return r.filter(e=>e.value===t)[0]};return n.jsx(f,{label:"Testing",data:p,args:{getOptions:l,getSelected:u,required:c},onRemove:m,onChange:g})};o.args={defaultValue:"Option A",required:!1};o.argTypes={defaultValue:{name:"Default Value",options:b,control:{type:"select"}},required:{name:"Required"}};const a=()=>{const[i,c]=d.useState({value:void 0}),[p,s]=d.useState({value:"a"}),g=function(e){c(e)},m=function(e){s(e)},l=()=>{},u=function(){return{docs:r,hasMore:!1}},t=function(e){return r.filter(C=>C.value===e)[0]};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Required"}),n.jsx(f,{label:"Required",data:p,args:{getOptions:u,getSelected:t,required:!0},onRemove:l,onChange:m}),n.jsx("h2",{children:"No required"}),n.jsx(f,{label:"No required",data:i,args:{getOptions:u,getSelected:t,required:!1},onRemove:l,onChange:g})]})};o.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var S,v,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var R,q,O;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(O=(q=a.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const H=["Playground","KitchenSink"];export{a as KitchenSink,o as Playground,H as __namedExportsOrder,G as default};
