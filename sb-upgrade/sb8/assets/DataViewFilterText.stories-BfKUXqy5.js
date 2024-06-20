import{j as r}from"./jsx-runtime-qGIIFXMu.js";import{r as h}from"./index-CDs2tPxN.js";import{D as m}from"./DataViewFilterText-CqveRXsj.js";import"./DataViewPrimaryFilter-BcJhbbuH.js";import"./createSvgIcon-BGEpRDBf.js";import"./createSvgIcon-Ca3CxB0T.js";import"./useThemeProps-DZj2lB8w.js";import"./theme-tUuL1bpb.js";import"./createChainedFunction-BO_9K8Jh.js";import"./ownerWindow-DvT1GKkC.js";import"./assertThisInitialized-DcNg8fFv.js";import"./useId-CWuiCQwo.js";import"./useControlled-CJDj4WFd.js";import"./Button-B_QyrzNG.js";import"./ButtonBase-cV3lp3kg.js";import"./emotion-react.browser.esm-DWdb6uBJ.js";import"./Popper-CAohKvIp.js";import"./index-B-yFm4aN.js";import"./useToggle-D8hNafRh.js";import"./FormFieldText.styled-CqAP5jTo.js";import"./useMosaicTranslation-DFgKwIAM.js";import"./formControlState-Bqc-R5cL.js";import"./sizes-C6oSOElx.js";const G={title:"Components/DataViewFilterText"},t=({comparison:n,placeholder:i,comparisonDefault:o})=>{const[s,e]=h.useState({}),c=function(_){e(_??{})},l=()=>{};return r.jsx(m,{label:"Filter text example",data:s,args:{comparisons:n&&["contains","not_contains","equals","not_equals","exists","not_exists"],placeholder:i,comparisonDefault:o==="undefined"?void 0:o},onRemove:l,onChange:c})};t.args={comparison:!1,placeholder:"Placeholder",comparisonDefault:"undefined"};t.argTypes={comparison:{name:"Comparison"},placeholder:{name:"Placholder"},comparisonDefault:{name:"Default Comparison",options:["contains","not_contains","equals","not_equals","exists","not_exists","undefined"],control:{type:"select"}}};const a=()=>{const[n,i]=h.useState({regular:{},comparisons:{}}),o=function(e,c){const l={...n,[e]:c??{}};i(l)},s=()=>{};return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(m,{label:"Filter text example",data:n.regular,args:{},onRemove:s,onChange:e=>o("regular",e)}),r.jsx(m,{label:"Filter text with comparisons",data:n.comparisons,args:{comparisons:["contains","not_contains","equals","not_equals","exists","not_exists"]},onRemove:s,onChange:e=>o("comparisons",e)})]})};t.__docgenInfo={description:"",methods:[],displayName:"Playground"};a.__docgenInfo={description:"",methods:[],displayName:"KitchenSink"};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,g,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`(): ReactElement => {
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
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const H=["Playground","KitchenSink"];export{a as KitchenSink,t as Playground,H as __namedExportsOrder,G as default};
