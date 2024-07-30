import{j as o}from"./jsx-runtime-nGUw9YhZ.js";import{r as u}from"./index-BP8_t0zE.js";import"./index-D7cE6JL_.js";import{M as f,J as b,c as y}from"./MultiSelectHelper-CvEZDwv9.js";import{D as g}from"./DataViewFilterMultiselect-aa5iWjR9.js";const x={title:"Components/DataViewFilterMultiselect"},w=new b(y),e=new f({api:w,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),i=({showComparisons:s,limit:c})=>{const[n,r]=u.useState({comparison:"in",value:[]}),p=function(a){if(a===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:a.comparison||n.comparison,value:a.value})},m=()=>{alert("on remove")};return o.jsx(o.Fragment,{children:o.jsx(g,{label:"Multi Select Category",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:s&&["in","not_in","all","exists","not_exists"],limit:c},data:n,onRemove:m,onChange:a=>p(a)},"multi_select_category")})};i.args={showComparisons:!1,limit:25};const l=()=>{const[s,c]=u.useState({comparison:"in",value:[]}),[n,r]=u.useState({comparison:"in",value:[]}),p=function(t){if(t===void 0)return c({...s,comparison:"",value:[]});c({...s,comparison:t.comparison||s.comparison,value:t.value})},m=function(t){if(t===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:t.comparison||n.comparison,value:t.value})},a=()=>{alert("on remove")};return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Hide comparison selector"}),o.jsx(g,{label:"Multi Select Category Without Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e)},data:s,onRemove:a,onChange:t=>p(t)},"multi_select_category"),o.jsx("h2",{children:"Show comparison selector"}),o.jsx(g,{label:"Multi Select Category With Comparisons",args:{getOptions:e.getOptions.bind(e),getSelected:e.getSelected.bind(e),comparisons:["in","not_in","all","exists","not_exists"]},data:n,onRemove:a,onChange:t=>m(t)},"multi_select_category_with_comparisons")]})};var d,v,S;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
  const onRemove = () => {
    alert("on remove");
  };
  return <>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: showComparisons && ["in", "not_in", "all", "exists", "not_exists"],
      limit
    }} data={state} onRemove={onRemove} onChange={value => onChange(value)} />
        </>;
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var C,h,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`(): ReactElement => {
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
  const onRemove = () => {
    alert("on remove");
  };
  return <>
            <h2>Hide comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category" label="Multi Select Category Without Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper)
    }} data={state} onRemove={onRemove} onChange={value => onChange(value)} />

            <h2>Show comparison selector</h2>
            <DataViewFilterMultiselect key="multi_select_category_with_comparisons" label="Multi Select Category With Comparisons" args={{
      getOptions: categoriesHelper.getOptions.bind(categoriesHelper),
      getSelected: categoriesHelper.getSelected.bind(categoriesHelper),
      comparisons: ["in", "not_in", "all", "exists", "not_exists"]
    }} data={stateComparisons} onRemove={onRemove} onChange={value => onChangeComparisons(value)} />
        </>;
}`,...(_=(h=l.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const M=["Playground","KitchenSink"],F=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:i,__namedExportsOrder:M,default:x},Symbol.toStringTag,{value:"Module"}));export{i as P,F as s};
