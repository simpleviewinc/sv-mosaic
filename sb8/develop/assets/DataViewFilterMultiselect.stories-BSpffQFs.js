import{j as a}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import"./index-CWM90NNz.js";import{M as _,J as f,c as b}from"./MultiSelectHelper-RZIosFWT.js";import{D as u}from"./DataViewFilterMultiselect-Bnlk2pu_.js";const y={title:"Components/DataViewFilterMultiselect"},x=new f(b),e=new _({api:x,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),i=({showComparisons:s,limit:c})=>{const[n,r]=m.useState({comparison:"in",value:[]}),p=function(o){if(o===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:o.comparison||n.comparison,value:o.value})};return a.jsx(a.Fragment,{children:a.jsx(u,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:s&&["in","not_in","all","exists","not_exists"],limit:c},data:n,onChange:o=>p(o)},"multi_select_category")})};i.args={showComparisons:!1,limit:25};const l=()=>{const[s,c]=m.useState({comparison:"in",value:[]}),[n,r]=m.useState({comparison:"in",value:[]}),p=function(t){if(t===void 0)return c({...s,comparison:"",value:[]});c({...s,comparison:t.comparison||s.comparison,value:t.value})},o=function(t){if(t===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:t.comparison||n.comparison,value:t.value})};return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Hide comparison selector"}),a.jsx(u,{label:"Multi Select Category Without Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e)},data:s,onChange:t=>p(t)},"multi_select_category"),a.jsx("h2",{children:"Show comparison selector"}),a.jsx(u,{label:"Multi Select Category With Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:["in","not_in","all","exists","not_exists"]},data:n,onChange:t=>o(t)},"multi_select_category_with_comparisons")]})};var g,d,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
  showComparisons,
  limit
}: typeof Playground.args): ReactElement => {
  const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const onChange = function (data) {
    if (data === undefined) return setState({
      ...state,
      comparison: "",
      value: []
    });
    setState({
      ...state,
      comparison: data.comparison || state.comparison,
      value: data.value
    });
  };
  return <>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
      limit
    }} data={state} onChange={value => onChange(value)} />
        </>;
}`,...(S=(d=i.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};var C,h,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
  const [state, setState] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const [stateComparisons, setStateComparisons] = useState<DataViewFilterMultiselectProps["data"]>({
    comparison: "in",
    value: []
  });
  const onChange = function (data) {
    if (data === undefined) return setState({
      ...state,
      comparison: "",
      value: []
    });
    setState({
      ...state,
      comparison: data.comparison || state.comparison,
      value: data.value
    });
  };
  const onChangeComparisons = function (data) {
    if (data === undefined) return setStateComparisons({
      ...stateComparisons,
      comparison: "",
      value: []
    });
    setStateComparisons({
      ...stateComparisons,
      comparison: data.comparison || stateComparisons.comparison,
      value: data.value
    });
  };
  return <>
            <h2>Hide comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category Without Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper)
    }} data={state} onChange={value => onChange(value)} />

            <h2>Show comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category_with_comparisons" label="Multi Select Category With Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: ["in", "not_in", "all", "exists", "not_exists"]
    }} data={stateComparisons} onChange={value => onChangeComparisons(value)} />
        </>;
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const w=["Playground","KitchenSink"],F=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:i,__namedExportsOrder:w,default:y},Symbol.toStringTag,{value:"Module"}));export{i as P,F as s};
