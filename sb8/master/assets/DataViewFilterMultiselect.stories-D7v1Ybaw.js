import{j as o}from"./jsx-runtime-EKYJJIwR.js";import{r as m}from"./index-D0AnReJb.js";import"./index-D77a6n9L.js";import{M as _,J as f,c as y}from"./MultiSelectHelper-RZIosFWT.js";import{D as u}from"./DataViewFilterMultiselect-BrE4bE-W.js";const b={title:"Components/DataViewFilterMultiselect"},w=new f(y),t=new _({api:w,labelColumn:"tag",valueColumn:"id",sortColumn:"sort_tag"}),i=({showComparisons:s,limit:c})=>{const[n,r]=m.useState({comparison:"in",value:[]}),p=function(a){if(a===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:a.comparison||n.comparison,value:a.value})};return o.jsx(o.Fragment,{children:o.jsx(u,{label:"Multi Select Category",args:{getOptions:async a=>(await new Promise(e=>setTimeout(()=>e(null),2e3)),t.getOptions.bind(t)(a)),getSelected:t.getSelected.bind(t),comparisons:s&&["in","not_in","all","exists","not_exists"],limit:c},data:n,onChange:a=>p(a)},"multi_select_category")})};i.args={showComparisons:!1,limit:25};const l=()=>{const[s,c]=m.useState({comparison:"in",value:[]}),[n,r]=m.useState({comparison:"in",value:[]}),p=function(e){if(e===void 0)return c({...s,comparison:"",value:[]});c({...s,comparison:e.comparison||s.comparison,value:e.value})},a=function(e){if(e===void 0)return r({...n,comparison:"",value:[]});r({...n,comparison:e.comparison||n.comparison,value:e.value})};return o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:"Hide comparison selector"}),o.jsx(u,{label:"Multi Select Category Without Comparisons",args:{getOptions:t.getOptions.bind(t),getSelected:t.getSelected.bind(t)},data:s,onChange:e=>p(e)},"multi_select_category"),o.jsx("h2",{children:"Show comparison selector"}),o.jsx(u,{label:"Multi Select Category With Comparisons",args:{getOptions:t.getOptions.bind(t),getSelected:t.getSelected.bind(t),comparisons:["in","not_in","all","exists","not_exists"]},data:n,onChange:e=>a(e)},"multi_select_category_with_comparisons")]})};var g,d,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
      getOptions: async params => {
        await new Promise(resolve => setTimeout(() => resolve(null), 2_000));
        return categoriesHelper.getOptions.bind(categoriesHelper)(params);
      },
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
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const x=["Playground","KitchenSink"],F=Object.freeze(Object.defineProperty({__proto__:null,KitchenSink:l,Playground:i,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{i as P,F as s};
