import{j as n}from"./jsx-runtime-qGIIFXMu.js";import{r as c}from"./index-CDs2tPxN.js";import{D as f}from"./DataViewFilterSingleSelect-8QEI0l3V.js";import"./theme-tUuL1bpb.js";import"./DataViewPrimaryFilter-DONY8g58.js";import"./DataViewPrimaryFilter.styled-BCNRirty.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Button-jXQJtfPH.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./MenuSelect-keHkfgJK.js";const I={title:"Components/DataViewFilterSingleSelect"},a=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"},{label:"Option D",value:"d"}],b=["Option A","Option B","Option C","Option D"],o=({defaultValue:r,required:d})=>{const[p,i]=c.useState({value:void 0});c.useEffect(()=>{const t=a.find(e=>e.label===r);i({value:t.value})},[r]);const g=function(t){i(t)},m=()=>{},s=function(){return{docs:a,hasMore:!1}},l=function(t){return a.filter(e=>e.value===t)[0]};return n.jsx(f,{label:"Testing",data:p,args:{getOptions:s,getSelected:l,required:d},onRemove:m,onChange:g})};o.args={defaultValue:"Option A",required:!1};o.argTypes={defaultValue:{name:"Default Value",options:b,control:{type:"select"}},required:{name:"Required"}};const u=()=>{const[r,d]=c.useState({value:void 0}),[p,i]=c.useState({value:"a"}),g=function(e){d(e)},m=function(e){i(e)},s=()=>{},l=function(){return{docs:a,hasMore:!1}},t=function(e){return a.filter(C=>C.value===e)[0]};return n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:"Required"}),n.jsx(f,{label:"Required",data:p,args:{getOptions:l,getSelected:t,required:!0},onRemove:s,onChange:m}),n.jsx("h2",{children:"No required"}),n.jsx(f,{label:"No required",data:r,args:{getOptions:l,getSelected:t,required:!1},onRemove:s,onChange:g})]})};var S,v,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var R,q,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const J=["Playground","KitchenSink"];export{u as KitchenSink,o as Playground,J as __namedExportsOrder,I as default};
